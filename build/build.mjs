import { readFileSync, writeFileSync } from "node:fs";
import { PROLOGUE, EXTRA_COUNTRIES, NEW_EVENTS, SCENE_PLAN, PEOPLE, POWERS, INFLUENCE } from "./content.mjs";
import * as RW from "./rewrite.mjs";
import { STORY } from "./story.mjs";
import { LENS } from "./lens.mjs";
import * as IRAN from "./iran.mjs";

const here = (p) => new URL(p, import.meta.url);
const data = JSON.parse(readFileSync(here("./data.json"), "utf8"));
const geo = JSON.parse(readFileSync(here("./map.json"), "utf8"));
const backup = readFileSync(here("./index-v9-backup.html"), "utf8");

const start = backup.indexOf("const SCENES = [");
const end = backup.indexOf("\n];\n", start);
const oldScenes = new Function(`return ${backup.slice(start + "const SCENES = ".length, end + 3)}`)();
const oldById = Object.fromEntries(oldScenes.map((s) => [s.id, s]));

data.PHASES = [PROLOGUE, ...data.PHASES.filter((p) => p.id !== "prologue")];
data.COUNTRIES = [...data.COUNTRIES.filter((c) => !EXTRA_COUNTRIES.some((x) => x.id === c.id)), ...EXTRA_COUNTRIES];
const added = [...NEW_EVENTS, ...(IRAN.EVENTS_ADD || [])];
const newIds = new Set(added.map((e) => e.id));
data.EVENTS = [...data.EVENTS.filter((e) => !newIds.has(e.id)), ...added].map((e) => ({ ...e, ...RW.EVENTS[e.id], ...IRAN.EVENTS[e.id] }));
data.PHASES = data.PHASES.map((p) => ({ ...p, ...RW.PHASES[p.id] }));
data.MASTER = RW.MASTER;

const scenes = SCENE_PLAN.map((plan) => {
  if (plan.ids) return plan;
  const old = oldById[plan.id];
  if (!old) throw new Error(`missing scene ${plan.id}`);
  return { id: old.id, years: old.years, title: old.title, ids: old.ids, lands: old.lands, tell: old.tell };
}).map((s) => {
  const extra = IRAN.SCENES?.[s.id];
  return extra ? { ...s, years: extra.years || s.years, ids: [...s.ids, ...extra.add] } : s;
});
for (const [sid, note] of Object.entries(IRAN.LENS)) (LENS[sid] = LENS[sid] || {}).iran = note;

const ids = new Set(data.EVENTS.map((e) => e.id));
const problems = [];
const seen = new Map();
for (const s of scenes) {
  for (const id of s.ids) {
    if (!ids.has(id)) problems.push(`scene ${s.id} -> unknown ${id}`);
    if (seen.has(id)) problems.push(`${id} in ${seen.get(id)} and ${s.id}`);
    seen.set(id, s.id);
  }
}
for (const id of ids) if (!seen.has(id)) problems.push(`event ${id} in no scene`);
for (const p of [...PEOPLE, ...POWERS]) for (const id of p.events) if (!ids.has(id)) problems.push(`${p.name} -> unknown ${id}`);
const actScenes = STORY.acts.flatMap((a) => a.scenes);
if (actScenes.join() !== scenes.map((s) => s.id).join()) problems.push(`acts ${actScenes.join()} do not match scenes`);
for (const s of scenes) if (!STORY.scenes[s.id]) problems.push(`no story beat for ${s.id}`);
const countryIds = new Set(data.COUNTRIES.map((c) => c.id));
for (const [sid, byCountry] of Object.entries(LENS)) {
  if (!scenes.some((s) => s.id === sid)) problems.push(`lens scene ${sid}`);
  for (const c of Object.keys(byCountry)) if (!countryIds.has(c)) problems.push(`lens country ${sid}/${c}`);
}
for (const m of RW.MOVEMENTS) if (!scenes.some((s) => s.id === m.first)) problems.push(`movement ${m.name} first ${m.first}`);
for (const k of Object.keys(RW.EVENTS)) if (!ids.has(k)) problems.push(`rewrite event ${k}`);
for (const k of Object.keys(RW.PEOPLE)) if (!PEOPLE.some((p) => p.name === k)) problems.push(`rewrite person ${k}`);
for (const k of Object.keys(STORY.tells)) if (!scenes.some((s) => s.id === k)) problems.push(`rewrite tell ${k}`);
for (const l of INFLUENCE) for (const c of [l.a, l.b]) if (!geo.cities[c]) problems.push(`influence city ${c}`);
const phases = new Set(data.PHASES.map((p) => p.id));
for (const e of data.EVENTS) if (!phases.has(e.phase)) problems.push(`event ${e.id} phase ${e.phase}`);
if (problems.length) {
  console.error(problems.join("\n"));
  process.exit(1);
}

data.SCENES = scenes.map((s) => ({ ...s, ...STORY.scenes[s.id], ...(STORY.tells[s.id] ? { tell: STORY.tells[s.id] } : {}) }));
data.LENS = LENS;
data.STORY = { open: STORY.open, acts: STORY.acts, epilogue: STORY.epilogue };
data.PEOPLE = PEOPLE.map((p) => ({ ...p, ...RW.PEOPLE[p.name], ...IRAN.PEOPLE[p.name] }));
data.POWERS = POWERS.map((p) => ({ ...p, ...RW.POWERS[p.name] }));
data.MOVEMENTS = RW.MOVEMENTS.map((m) => (m.country === "iran" ? { ...m, ...IRAN.MOVEMENT } : m));
data.SUMMARY = { iran: IRAN.SUMMARY };
data.INFLUENCE = INFLUENCE.map((l, i) => (RW.INFLUENCE_LABELS[i] ? { ...l, label: RW.INFLUENCE_LABELS[i] } : l));

const safe = (obj) => JSON.stringify(obj).replace(/</g, "\\u003c");
const face = (style, weight, file) => `  @font-face { font-family: "Carlito"; font-style: ${style}; font-weight: ${weight}; font-display: swap; src: url(data:font/woff;base64,${readFileSync(here(`./fonts/${file}`)).toString("base64")}) format("woff"); }`;
const fonts = [face("normal", 400, "carlito-Regular.woff"), face("normal", 700, "carlito-Bold.woff"), face("italic", 400, "carlito-Italic.woff")].join("\n");
const html = readFileSync(here("./template.html"), "utf8")
  .replace("__FONTS__", () => fonts)
  .replaceAll("__W__", String(geo.width))
  .replaceAll("__H__", String(geo.height))
  .replace("__DATA__", () => safe(data))
  .replace("__MAP__", () => safe(geo));
writeFileSync(here("../index.html"), html);
console.log(`events ${data.EVENTS.length}, scenes ${scenes.length}, people ${PEOPLE.length}, powers ${POWERS.length}, movements ${RW.MOVEMENTS.length}, bytes ${html.length}`);
