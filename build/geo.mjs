import { readFileSync, writeFileSync } from "node:fs";
import { feature } from "topojson-client";
import { geoMercator, geoPath } from "d3-geo";

const topo = JSON.parse(readFileSync(new URL("./node_modules/world-atlas/countries-50m.json", import.meta.url)));
const world = feature(topo, topo.objects.countries);

const WIDTH = 900;
const frame = {
  type: "Feature",
  geometry: {
    type: "Polygon",
    coordinates: [[[32.2, 12.2], [32.2, 39.9], [63.4, 39.9], [63.4, 12.2], [32.2, 12.2]]],
  },
};
const projection = geoMercator().fitWidth(WIDTH, frame);
const [[, y0], [, y1]] = geoPath(projection).bounds(frame);
const HEIGHT = Math.round(y1 - y0);
projection.translate([projection.translate()[0], projection.translate()[1] - y0]);
projection.clipExtent([[0, 0], [WIDTH, HEIGHT]]);
const path = geoPath(projection).digits(1);

const STAGE = {
  Iran: "iran",
  Iraq: "iraq",
  Syria: "syria",
  Lebanon: "lebanon",
  Yemen: "yemen",
  "Saudi Arabia": "gulf",
  Bahrain: "gulf",
  Kuwait: "gulf",
  Qatar: "gulf",
  "United Arab Emirates": "gulf",
  Jordan: "jordan",
  Israel: "palestine",
  Palestine: "palestine",
};

const countries = [];
for (const f of world.features) {
  const d = path(f);
  if (!d) continue;
  const name = f.properties.name;
  const [cx, cy] = path.centroid(f);
  countries.push({
    name,
    stage: STAGE[name] || null,
    d,
    cx: Math.round(cx),
    cy: Math.round(cy),
  });
}

const CITIES = {
  Tehran: [51.39, 35.69],
  Qom: [50.88, 34.64],
  Mashhad: [59.6, 36.3],
  Najaf: [44.33, 32.0],
  Karbala: [44.02, 32.62],
  Baghdad: [44.36, 33.31],
  Samarra: [43.87, 34.2],
  Basra: [47.78, 30.51],
  Khorramshahr: [48.18, 30.44],
  Tyre: [35.2, 33.27],
  Beirut: [35.5, 33.89],
  Baalbek: [36.2, 34.0],
  Damascus: [36.29, 33.51],
  Latakia: [35.78, 35.52],
  Qusayr: [36.57, 34.51],
  Aleppo: [37.16, 36.2],
  Sanaa: [44.21, 15.35],
  Saada: [43.76, 16.94],
  Hodeidah: [42.95, 14.8],
  Qatif: [50.0, 26.56],
  Awamiyah: [49.99, 26.6],
  Manama: [50.58, 26.23],
  Mecca: [39.83, 21.42],
  Riyadh: [46.72, 24.71],
  Hormuz: [56.45, 26.55],
  Saqqez: [46.27, 36.25],
  Mosul: [43.13, 36.34],
  Doha: [51.53, 25.29],
  Isfahan: [51.67, 32.65],
  Natanz: [51.92, 33.51],
  Fordow: [50.99, 34.88],
  "Al-Udeid": [51.32, 25.12],
  Gaza: [34.45, 31.5],
  Taif: [40.42, 21.27],
  "South Lebanon": [35.45, 33.2],
  Amman: [35.93, 31.95],
  Jerusalem: [35.22, 31.78],
  Golan: [35.8, 33.0],
  Hama: [36.75, 35.13],
};

const cities = Object.fromEntries(
  Object.entries(CITIES).map(([name, lonlat]) => {
    const [x, y] = projection(lonlat);
    return [name, { x: Math.round(x), y: Math.round(y) }];
  })
);

const SEAS = {
  "MEDITERRANEAN": [33.0, 33.0],
  "RED SEA": [38.6, 20.0],
  "PERSIAN GULF": [51.6, 27.4],
  "GULF OF OMAN": [58.2, 24.6],
  "ARABIAN SEA": [60.0, 16.5],
  "CASPIAN SEA": [51.0, 39.2],
};
const seas = Object.entries(SEAS).map(([name, lonlat]) => {
  const [x, y] = projection(lonlat);
  return { name, x: Math.round(x), y: Math.round(y) };
});

const out = { width: WIDTH, height: HEIGHT, countries, cities, seas };
writeFileSync(new URL("./map.json", import.meta.url), JSON.stringify(out));
console.log("size", WIDTH, HEIGHT, "countries", countries.length, "bytes", JSON.stringify(out).length);
console.log(countries.filter((c) => c.stage).map((c) => `${c.name}:${c.cx},${c.cy}`).join(" "));
console.log(JSON.stringify(cities));
