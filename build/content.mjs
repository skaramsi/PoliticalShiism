export const PROLOGUE = {
  id: "prologue",
  years: "1916–1929",
  title: "Empires leave",
  essay: "The Ottoman sultan was a Sunni caliph, and his Shi'a subjects in the Iraqi shrine cities and in south Lebanon had no standing in his state. When the empire fell, Britain and France drew new countries around them. Iraq's Shi'a clergy backed the revolt of 1920 and lost. Lebanon's Shi'a entered a French-drawn state as a recognized sect at the bottom of a sectarian ladder. Those two positions, a defeated majority and a junior sect, frame the century that follows.",
};

export const EXTRA_COUNTRIES = [
  { id: "jordan", label: "Jordan" },
  { id: "palestine", label: "Israel & Palestine" },
];

export const NEW_EVENTS = [
  {
    id: "ottoman-1918", when: "1918–1920", title: "The Ottoman order ends", country: "region", phase: "prologue", kind: "Context",
    summary: "The Ottoman Empire, a Sunni dynasty whose sultan claimed the caliphate, loses its Arab provinces in the First World War. Its Shi'a subjects in Najaf, Karbala, and Jabal Amil had been governed without political standing. Under the wartime Sykes–Picot understanding and the San Remo conference of April 1920, Britain takes mandates for Iraq, Palestine, and Transjordan, and France takes Syria and Lebanon.",
    why: "The borders that Shi'a politics will fight inside are drawn here, by European powers, around communities who were not consulted.",
  },
  {
    id: "iraq-1920", when: "Jun–Oct 1920", title: "The revolt of 1920", country: "iraq", phase: "prologue", kind: "Movement",
    summary: "Tribes of the middle Euphrates rise against British rule, with Shi'a mujtahids in Najaf and Karbala issuing rulings against serving the occupier. Britain crushes the revolt, then crowns Faisal, a Sunni Hashemite from the Hijaz, king of Iraq in 1921. In 1923, as the clergy oppose elections under the mandate, several senior clerics are expelled or leave for Iran.",
    why: "Iraq's Shi'a led the first national revolt and were then shut out of the state it produced. The clergy learned that confrontation could cost them Iraq, and quietism looked like prudence for the next generation.",
  },
  {
    id: "lebanon-1920", when: "Sep 1920", title: "France draws Greater Lebanon", country: "lebanon", phase: "prologue", kind: "State",
    summary: "France proclaims Greater Lebanon, adding Jabal Amil in the south and the Bekaa, the Shi'a heartlands, to Christian Mount Lebanon. In 1926 the mandate recognizes Ja'fari (Twelver) religious courts. The unwritten National Pact of 1943 later reserves the presidency for a Maronite, the premiership for a Sunni, and the speakership of parliament for a Shi'a.",
    why: "Lebanese Shi'a enter a modern state as a recognized sect at the bottom of the ladder. Every later Shi'a movement in Lebanon, from Musa al-Sadr to Hezbollah, is an argument about that position.",
  },
  {
    id: "coup-1953", when: "Aug 1953", title: "Mosaddegh is overthrown", country: "iran", phase: "marginal", kind: "Context",
    summary: "A coup organized with the American CIA and British intelligence removes Prime Minister Mohammad Mosaddegh, who had nationalized Iran's oil. Some senior clerics, including Ayatollah Abol-Qasem Kashani, had broken with him, and the clerical establishment largely accepts the Shah's return. The Shah rules from now on as Washington's client.",
    why: "Khomeini's later case against the monarchy is that it serves foreigners. The embassy seizure of 1979 points back to 1953.",
  },
  {
    id: "sixday-1967", when: "Jun 1967", title: "Six days", country: "palestine", phase: "parties", kind: "Context",
    summary: "In six days Israel defeats Egypt, Jordan, and Syria, taking Sinai, Gaza, the West Bank, East Jerusalem, and the Golan Heights. The secular Arab nationalism of Nasser and the Ba'ath takes a defeat it never recovers from. Fatah and other guerrilla groups take over the Palestine Liberation Organization, and in 1969 Yasser Arafat becomes its chairman.",
    why: "The defeat discredits the secular nationalism and communism that young Shi'a in Iraq and Lebanon had been joining, and opens space for religious politics, Sunni and Shi'a. It also begins the Palestinian armed presence that will remake south Lebanon.",
  },
  {
    id: "blacksept-1970", when: "Sep 1970", title: "Black September", country: "jordan", phase: "parties", kind: "Context",
    summary: "King Hussein's army turns on the PLO's armed factions, which had become a rival power inside Jordan. Syrian tanks cross to help the Palestinians and pull back without air cover; Syria's defence minister, Hafez al-Assad, takes power in Damascus two months later. By July 1971 the fighters are expelled. Arafat's PLO moves its base to Lebanon, where the 1969 Cairo Agreement already lets it operate from the south.",
    why: "The PLO's arrival turns the Shi'a south of Lebanon into a front line. Israeli reprisals fall on Shi'a villages. Musa al-Sadr's movement grows partly out of that squeeze between Palestinian guerrillas and Israeli guns.",
  },
  {
    id: "plo-1979", when: "Feb 1979", title: "Arafat in Tehran", country: "palestine", phase: "revolution", kind: "Diplomacy",
    summary: "Yasser Arafat is the first foreign leader received by Khomeini after the revolution, and Israel's mission in Tehran is handed to the PLO. Many Iranian revolutionaries had trained in Palestinian camps in Lebanon during the 1970s, alongside fighters of Amal. The friendship cools within two years as the PLO leans toward Iraq in the war, and in 1985–88 Amal besieges the Palestinian camps in Lebanon.",
    why: "Shi'a revolutionaries learned guerrilla war from a Sunni nationalist movement, then fought it. Pan-Islamic solidarity and Shi'a communal interest pulled in different directions from the start.",
  },
  {
    id: "saddam-1979", when: "Jul 1979", title: "Saddam takes the presidency", country: "iraq", phase: "revolution", kind: "State",
    summary: "Saddam Hussein replaces Ahmad Hasan al-Bakr and purges the Ba'ath leadership at a filmed party meeting. The Ba'ath, a secular Arab nationalist party founded in Damascus in the 1940s by Michel Aflaq and Salah al-Din al-Bitar, now rules Iraq and Syria in two rival branches. In March 1980 membership in the Dawa Party is made punishable by death.",
    why: "Two Ba'athist states, one Sunni-led in Baghdad and one Alawite-led in Damascus, distrust each other more than either fears Tehran. When the war comes, Syria takes Iran's side.",
  },
  {
    id: "hostages-1979", when: "Nov 1979", title: "The embassy is seized", country: "iran", phase: "revolution", kind: "Context",
    summary: "Students who call themselves followers of the Imam's line seize the US embassy in Tehran and hold 52 Americans for 444 days. Khomeini endorses them. The provisional government of Mehdi Bazargan resigns. A failed American rescue in April 1980 deepens the rupture.",
    why: "Hostility to the United States becomes a founding principle of the Islamic Republic and the cement of its foreign alliances, and the moderate, liberal wing of the revolution loses the argument at home.",
  },
  {
    id: "hama-1982", when: "Feb 1982", title: "Hama", country: "syria", phase: "revolution", kind: "Crackdown",
    summary: "Hafez al-Assad's army crushes an uprising led by the Syrian Muslim Brotherhood in Hama after years of assassinations and revolt. Thousands are killed; estimates range from several thousand to tens of thousands and remain disputed. Tehran, now Assad's ally, says little.",
    why: "The Alawite-led regime's enemy at home was Sunni Islamism. The Islamic Republic's partner in the Arab world was a secular state that had just destroyed an Islamist uprising. The alliance was about Saddam and Israel, not about doctrine.",
  },
  {
    id: "israel-1982", when: "Jun–Sep 1982", title: "Israel invades Lebanon", country: "lebanon", phase: "revolution", kind: "War",
    summary: "Israel invades to destroy the PLO in Lebanon. Many southern Shi'a first welcome the end of the Palestinian armed presence. Arafat and his fighters leave Beirut by sea in August. In September Phalangist militiamen massacre Palestinians at Sabra and Shatila while Israeli forces control the area. The occupation of the south continues. In the Bekaa, Revolutionary Guards admitted through Syria begin training the men who become Hezbollah.",
    why: "The invasion that removed the Sunni Palestinian militias created the Shi'a one. Israel's occupation of the south became Hezbollah's reason to exist.",
  },
  {
    id: "beirut-1983", when: "Apr–Oct 1983", title: "Bombs in Beirut", country: "lebanon", phase: "revolution", kind: "War",
    summary: "A suicide truck bomb destroys the US embassy in April. On 23 October two more destroy the barracks of US Marines and French paratroopers in the Multinational Force, killing 241 Americans and 58 French. A group calling itself Islamic Jihad claims them. American courts and intelligence attribute them to the network that became Hezbollah, with Iranian support, and name Imad Mughniyeh among the organizers. Hezbollah denies a role. The Western forces leave in 1984.",
    why: "Suicide bombing enters the region's wars through Lebanese Shi'a militants, and the Western powers leave Lebanon. The attacks fix the American view of Hezbollah for the next forty years.",
  },
  {
    id: "musawi-1992", when: "Feb 1992", title: "Musawi is killed; Nasrallah is chosen", country: "lebanon", phase: "contained", kind: "War",
    summary: "An Israeli helicopter strike in the south kills Abbas al-Musawi, Hezbollah's secretary-general, with his wife and young son. Musawi had studied in Najaf in the circle of Muhammad Baqir al-Sadr. The party chooses Hassan Nasrallah, then 31. That summer Hezbollah runs in Lebanon's parliamentary elections for the first time.",
    why: "Killing the leader produced a more formidable one. Nasrallah joined Khomeini's oath to Lebanese electoral politics and led the party for thirty-two years.",
  },
  {
    id: "houthi-2004", when: "Jun–Sep 2004", title: "Hussein al-Houthi is killed", country: "yemen", phase: "state", kind: "Crackdown",
    summary: "Hussein Badreddin al-Houthi, a Zaydi preacher and former member of parliament, built the Believing Youth network in Saada and in 2002 adopted the slogan 'God is great, death to America, death to Israel, curse on the Jews, victory to Islam.' President Ali Abdullah Saleh's forces move against him in June 2004 and kill him in September. His brother Abdul-Malik leads the movement, later called Ansar Allah, through six wars to 2010.",
    why: "The Houthi movement begins as a Zaydi revival against Saudi-funded Salafi preaching in its own heartland and against a government aligned with Washington, a decade before it takes Sanaa.",
  },
  {
    id: "crescent-2004", when: "Dec 2004", title: "The 'Shi'a crescent'", country: "jordan", phase: "state", kind: "Context",
    summary: "Weeks before Iraq's first elections, King Abdullah II of Jordan warns of a 'Shi'a crescent' running from Iran through Iraq and Syria to Lebanon. The phrase becomes the shorthand of Sunni Arab governments for Iranian influence.",
    why: "It names a real network and erases real differences: Iraqi Shi'a voters, an Alawite Ba'athist regime, and Hezbollah are folded into one sect-shaped threat.",
  },
  {
    id: "mughniyeh-2008", when: "Feb 2008", title: "Mughniyeh is killed in Damascus", country: "lebanon", phase: "state", kind: "War",
    summary: "A car bomb in Damascus kills Imad Mughniyeh, Hezbollah's military commander, who had begun as a young fighter alongside Arafat's Fatah in Beirut. The United States had wanted him since the 1983 bombings and the 1985 hijacking of TWA Flight 847. Later reporting attributes the killing to a joint Israeli and American operation.",
    why: "He had been the working link between Hezbollah and Iran's Quds Force for a quarter of a century. That he died in the Syrian capital shows how far Damascus, Beirut, and Tehran had become one theater.",
  },
];

export const SCENE_PLAN = [
  {
    id: "prologue", years: "1916–29", title: "Empires leave",
    ids: ["ottoman-1918", "iraq-1920", "lebanon-1920"],
    lands: ["iraq", "lebanon", "syria", "jordan", "palestine"],
    tell: "The Ottoman sultan had been a Sunni caliph, and his Shi'a subjects in the shrine cities of Iraq and in Jabal Amil had no standing in his state. When the empire fell in 1918, Britain and France divided its Arab provinces. In Iraq the clergy of Najaf and Karbala backed the revolt of 1920 against the British. They lost. A Sunni Hashemite was crowned in Baghdad, and the clerics who kept resisting were pushed out to Iran. In Lebanon, France drew a larger country around Christian Mount Lebanon and added the Shi'a south and the Bekaa. Two positions are fixed before 1930. Iraq's Shi'a are a majority who fought and lost. Lebanon's Shi'a are a recognized sect at the bottom of a sectarian ladder. Much of what follows is an argument with those two positions.",
  },
  { id: "absence" },
  {
    id: "deadend", years: "1946–56", title: "A dead end, and a coup",
    ids: ["fadaiyan-1946", "coup-1953", "safavi-1956"],
    lands: ["iran"],
    tell: "The Devotees of Islam are the first organized Shi'a Islamist group in modern Iran. They admire the Muslim Brotherhood in Egypt, assassinate a secular writer and a prime minister, and want sharia enforced. They have no theory of who should hold the state. In August 1953 a coup backed by the American and British intelligence services removes Mosaddegh, who had nationalized the oil. Senior clerics who had broken with him accept the Shah's return. The monarchy is now Washington's client, and a cleric named Khomeini will make that his charge against it. In 1956 the Shah hangs the Devotees' leader. Borujerdi's quietism is the clerical line again, which is why 1963 feels like a break.",
  },
  { id: "starts" },
  {
    id: "defeat", years: "1967–75", title: "Defeat, and three inventions",
    ids: ["sixday-1967", "blacksept-1970", "velayat-1970", "assad-1970", "amal-1974"],
    lands: ["palestine", "jordan", "syria", "lebanon", "iran", "iraq"],
    tell: "June 1967 breaks the secular Arab nationalism of Nasser and the Ba'ath, which had been recruiting young Shi'a in Baghdad and Beirut. Guerrillas take over the PLO, and Yasser Arafat becomes its chairman. In September 1970 King Hussein's army drives them out of Jordan. This is Black September. They rebuild in south Lebanon, on Shi'a land, and Israeli reprisals follow them there. The same autumn holds three inventions. In Najaf, Khomeini lectures that a jurist must rule. In Damascus, Hafez al-Assad, the Alawite defence minister who kept Syria's air force out of Jordan, takes the state. In Lebanon, Musa al-Sadr builds the Movement of the Deprived for Shi'a caught between Palestinian guns and Israeli ones, and in 1973 he rules that the Alawites are Shi'a Muslims. None of these is an alliance yet. Each will need the others.",
  },
  {
    id: "tehran", years: "1977–79", title: "The center moves",
    ids: ["shariati-1977", "musa-1978", "rev-1979", "plo-1979", "hostages-1979", "qatif-1979"],
    lands: ["iran", "lebanon", "palestine", "gulf"],
    tell: "Two revolutionary Shiisms teach the crowds of 1978. Ali Shariati's is lay and anti-clerical: Husayn as a rebel, every land Karbala. Khomeini's is clerical: the jurist must rule. Shariati dies in June 1977, and the clerics inherit the state. In August 1978 Musa al-Sadr vanishes in Libya, so Lebanese Shi'a politics loses its founder in the season Iran gains a ruler. In February 1979 Arafat is the first foreign leader received in Tehran, and the PLO is handed Israel's mission. Many of Iran's revolutionaries had trained in Palestinian camps in Lebanon. In November students seize the US embassy and hold 52 Americans for 444 days, and rupture with Washington becomes a founding principle. That same month, during Muharram, Shi'a in Qatif march with Khomeini's portrait and are crushed. Gulf rulers begin to read their own Shi'a citizens as an Iranian channel.",
  },
  {
    id: "baath", years: "1979–82", title: "Two Ba'aths, one war",
    ids: ["saddam-1979", "baqir-1980", "war-1980", "hama-1982"],
    lands: ["iraq", "iran", "syria"],
    tell: "In July 1979 Saddam Hussein takes the presidency of Ba'athist Iraq and purges his own party on camera. Muhammad Baqir al-Sadr, who had greeted Khomeini's revolution, is placed under arrest. In March 1980 Dawa membership becomes a capital crime. In April he and his sister Bint al-Huda are executed. In September Saddam invades Iran. Then comes the alignment that confuses outsiders. Syria, ruled by the rival Ba'ath branch and an Alawite general, sides with Shi'a Iran against Ba'athist Iraq. In February 1982 Hafez al-Assad crushes the Muslim Brotherhood's revolt in Hama, killing thousands, and Tehran says little. The Islamic Republic's Arab partner is a secular regime that has just destroyed a Sunni Islamist uprising.",
  },
  {
    id: "militia", years: "1982–89", title: "Lebanon's second war",
    ids: ["israel-1982", "sciri-1982", "beirut-1983", "hezb-1985", "mecca-1987", "khamenei-1989", "taif-1989"],
    lands: ["lebanon", "palestine", "iran", "iraq", "syria", "gulf"],
    tell: "Israel invades Lebanon in June 1982 to destroy the PLO, and many southern Shi'a are glad to see the Palestinian militias go. Arafat's fighters leave Beirut by sea in August. Through Syria, Iran sends Revolutionary Guards to the Bekaa. Young men leaving Amal, Abbas al-Musawi among them, form what becomes Hezbollah. In 1983 suicide bombers destroy the US embassy and the barracks of American and French peacekeepers. A 2003 US court ruling held Iran and Hezbollah responsible; US and Israeli intelligence accounts name Imad Mughniyeh, who had begun alongside Arafat's Fatah, as an organizer. The Western forces leave. In 1985 Hezbollah's open letter swears allegiance to Khomeini. Amal never does, and fights the Palestinian camps instead. Meanwhile Iraqi exiles sit in Tehran as a council, the Iran–Iraq war grinds on, and the 1987 Hajj ends in a massacre and a Saudi–Iranian break. In 1989 Khomeini dies, and Taif ends Lebanon's war with Hezbollah still holding its weapons.",
  },
  {
    id: "lessons", years: "1991–2000", title: "Three lessons, one successor",
    ids: ["uprising-1991", "musawi-1992", "khatami-1997", "south-2000"],
    lands: ["iraq", "lebanon", "iran"],
    tell: "March 1991: the shrine cities of Iraq rise after the Gulf War, and Saddam's Republican Guard buries the rising. Washington, whose war made the moment possible, does not come. February 1992: an Israeli helicopter kills Hezbollah's leader Abbas al-Musawi, and the party chooses Hassan Nasrallah, then 31. That summer it runs for parliament. May 1997: Iranians give Khatami a landslide and spend two terms learning how far reform can go inside a jurist's state. May 2000: Israel leaves south Lebanon, and Nasrallah claims the victory. Hezbollah's case for keeping its arms hardens around that withdrawal. No one is coming to rescue you. The ballot has a wall. A militia can outlast an occupation.",
  },
  {
    id: "taken", years: "2003–09", title: "They take Iraq; the crescent is named",
    ids: ["iraq-2003", "houthi-2004", "crescent-2004", "samarra-2006", "war-2006", "mughniyeh-2008", "green-2009"],
    lands: ["iraq", "yemen", "jordan", "lebanon", "syria", "iran"],
    tell: "The American invasion does what Iraq's Shi'a parties could not. Sistani, heir to Najaf's quietism, insists on elections, and Shi'a parties come to govern. The quietist writes the rules. He does not take the chair. In December 2004 Jordan's King Abdullah warns of a 'Shi'a crescent' from Tehran to Beirut, folding Iraqi voters, an Alawite regime, and Hezbollah into one sect-shaped threat. That year in Yemen the army kills Hussein al-Houthi, a Zaydi preacher whose slogan cursed America and Israel. His brother Abdul-Malik inherits six wars. In 2006 Shi'a power is tested twice. In February the Samarra shrine is bombed and Baghdad turns sectarian. In July Hezbollah fights Israel for a month and is still standing. In February 2008 a car bomb in Damascus kills Imad Mughniyeh, the hinge between Hezbollah and the Quds Force. In 2009 millions of Iranians march against the state that rules in their name.",
  },
  { id: "spring" },
  { id: "eighteen" },
  { id: "home" },
  { id: "pieces" },
  { id: "open" },
];

export const PEOPLE = [
  {
    group: "Clerics and thinkers", name: "Ruhollah Khomeini", years: "1902–1989", tag: "Velayat-e faqih",
    line: "A Qom jurist who turned the 1963 protests into a national cause and spent fourteen years in exile, most of them in Najaf. His 1970 lectures there argued that in the Imam's absence a qualified jurist must govern. He founded the Islamic Republic and was its first Leader.",
    events: ["khordad-1963", "velayat-1970", "rev-1979", "hostages-1979", "khamenei-1989"],
  },
  {
    group: "Clerics and thinkers", name: "Muhammad Baqir al-Sadr", years: "1935–1980", tag: "Islamic state, Najaf",
    line: "The intellectual center of the Dawa Party. Our Philosophy (1959) and Our Economics (1961) presented Islam as a full social system answering Marxism and capitalism. His late writings joined a jurist's supervision to an elected popular authority. Executed by Saddam's regime with his sister Bint al-Huda.",
    events: ["dawa-1957", "saddam-1979", "baqir-1980"],
  },
  {
    group: "Clerics and thinkers", name: "Musa al-Sadr", years: "1928–disappeared 1978", tag: "Politics of the deprived",
    line: "Born in Qom, trained in Najaf, settled in Tyre in 1959. He built the Supreme Islamic Shi'a Council, the Movement of the Deprived, and its militia Amal, and preached Karbala as a call to the poor to claim their share inside Lebanon. In 1973 he recognized the Alawites as Shi'a. He vanished on a visit to Libya.",
    events: ["musa-1959", "amal-1974", "musa-1978"],
  },
  {
    group: "Clerics and thinkers", name: "Ali Shariati", years: "1933–1977", tag: "Revolutionary Shiism",
    line: "A Paris-trained sociologist whose lectures at Tehran's Hosseiniyeh Ershad filled halls with students. He set a 'red' Shiism of Ali and Husayn, martyrdom and revolt, against a 'black' Safavid Shiism of court clergy and mourning. He died in England months before the revolution his audiences made.",
    events: ["shariati-1977", "rev-1979"],
  },
  {
    group: "Clerics and thinkers", name: "Ali Khamenei", years: "b. 1939", tag: "Leader from 1989",
    line: "A political cleric who in the 1960s translated the Egyptian Brotherhood thinker Sayyid Qutb into Persian. President in the 1980s, he was made Leader in 1989 after the constitution was changed so the office no longer required the most senior jurist.",
    events: ["khamenei-1989", "green-2009", "amini-2022"],
  },
  {
    group: "Clerics and thinkers", name: "Ali al-Sistani", years: "b. 1930", tag: "Najaf quietism",
    line: "The senior marja of Najaf since the 1990s. He holds no office and has insisted the clergy should not govern. In 2003 he forced elections on the American occupation, and in 2014 his fatwa called Iraqis to arms against the Islamic State.",
    events: ["iraq-2003", "fatwa-2014", "tishreen-2019"],
  },
  {
    group: "Commanders and party leaders", name: "Abbas al-Musawi", years: "1952–1992", tag: "Hezbollah founder",
    line: "A Bekaa cleric who studied in Najaf among Baqir al-Sadr's students, then helped found Hezbollah under Iranian sponsorship. Secretary-general from 1991 until an Israeli helicopter strike killed him with his wife and son.",
    events: ["hezb-1985", "musawi-1992"],
  },
  {
    group: "Commanders and party leaders", name: "Hassan Nasrallah", years: "1960–2024", tag: "Hezbollah, 1992–2024",
    line: "Chosen at 31 after Musawi's killing. He took Hezbollah into parliament, claimed the Israeli withdrawal of 2000, fought the war of 2006, and sent the party into Syria in 2013. Killed by an Israeli strike on Beirut's southern suburbs in September 2024.",
    events: ["musawi-1992", "south-2000", "war-2006", "qusayr-2013", "nasrallah-2024"],
  },
  {
    group: "Commanders and party leaders", name: "Imad Mughniyeh", years: "1962–2008", tag: "Hezbollah's military chief",
    line: "A southern Lebanese Shi'a who began as a young fighter with Arafat's Fatah in Beirut and became Hezbollah's most secretive commander. The United States tied him to the 1983 bombings and the 1985 TWA hijacking. Killed by a car bomb in Damascus.",
    events: ["beirut-1983", "hezb-1985", "mughniyeh-2008"],
  },
  {
    group: "Commanders and party leaders", name: "Qasem Soleimani", years: "1957–2020", tag: "Quds Force",
    line: "Commander of the Revolutionary Guards' Quds Force from the late 1990s. He tied Hezbollah, the Iraqi factions, Assad's army, and later the Houthis into one working system. Killed by a US drone at Baghdad airport.",
    events: ["mughniyeh-2008", "qusayr-2013", "fatwa-2014", "soleimani-2020"],
  },
  {
    group: "Commanders and party leaders", name: "Abu Mahdi al-Muhandis", years: "1954–2020", tag: "Iraqi factions, PMF",
    line: "Born Jamal Jaafar al-Ibrahimi, a Dawa member who fled to Iran and fought with the Badr Corps against Saddam. A Kuwaiti court convicted him in absentia over the 1983 Kuwait bombings. He founded Kata'ib Hezbollah and became deputy head of the Popular Mobilization Forces. Killed alongside Soleimani.",
    events: ["sciri-1982", "fatwa-2014", "soleimani-2020"],
  },
  {
    group: "Commanders and party leaders", name: "Hussein and Abdul-Malik al-Houthi", years: "d. 2004 · b. 1979", tag: "Ansar Allah, Zaydi",
    line: "Hussein, a Zaydi preacher and former MP, founded the movement and its slogan and was killed in 2004. His younger brother Abdul-Malik led it through the Saada wars, the capture of Sanaa, the Saudi war, and the Red Sea campaign.",
    events: ["houthi-2004", "sanaa-2014", "yemen-2015", "gaza-2023"],
  },
  {
    group: "Rulers and rivals", name: "Hafez al-Assad", years: "1930–2000", tag: "Alawite, Ba'athist",
    line: "An Alawite air force officer who rose through the Ba'ath and the army, seized Syria in 1970, sided with Iran against Iraq in 1980, crushed the Brotherhood at Hama, and made Syria the gate through which Iran reached Lebanon.",
    events: ["blacksept-1970", "assad-1970", "hama-1982", "hezb-1985"],
  },
  {
    group: "Rulers and rivals", name: "Bashar al-Assad", years: "b. 1965", tag: "Alawite, Ba'athist",
    line: "Succeeded his father in 2000. From 2011 he survived the uprising with Iranian advisers, Hezbollah fighters, Iraqi militias, and from 2015 Russian air power. Fled to Moscow in December 2024.",
    events: ["mughniyeh-2008", "qusayr-2013", "assad-2024"],
  },
  {
    group: "Rulers and rivals", name: "Saddam Hussein", years: "1937–2006", tag: "Iraqi Ba'ath",
    line: "President of Iraq from 1979. He executed Baqir al-Sadr, invaded Iran, crushed the shrine-city uprising of 1991, and had Muhammad Sadiq al-Sadr killed in 1999. Overthrown in 2003 and hanged in December 2006 by a government led by Shi'a parties.",
    events: ["saddam-1979", "baqir-1980", "war-1980", "uprising-1991", "iraq-2003"],
  },
  {
    group: "Rulers and rivals", name: "Yasser Arafat", years: "1929–2004", tag: "PLO, Sunni nationalist",
    line: "Chairman of the PLO from 1969. Expelled from Jordan in Black September, he built a state within a state in south Lebanon, trained Iranian and Lebanese revolutionaries, was the first foreign leader in Khomeini's Tehran, and was driven from Beirut by Israel in 1982.",
    events: ["sixday-1967", "blacksept-1970", "plo-1979", "israel-1982"],
  },
  {
    group: "Rulers and rivals", name: "King Hussein of Jordan", years: "1935–1999", tag: "Hashemite",
    line: "King from 1952. He lost the West Bank in 1967, expelled the PLO in 1970, and backed Iraq against Iran in the 1980s. His family had also ruled Iraq until 1958. His son Abdullah II coined the 'Shi'a crescent' in 2004.",
    events: ["sixday-1967", "blacksept-1970", "war-1980", "crescent-2004"],
  },
];

export const POWERS = [
  { name: "Ottoman Empire", line: "A Sunni empire whose sultan claimed the caliphate. Its Shi'a subjects in Iraq and south Lebanon were governed without political standing, and its frontier with Shi'a Iran was a frontier of sect as well as state. It lost its Arab provinces in 1918.", events: ["ottoman-1918"] },
  { name: "Britain", line: "Mandate power in Iraq, Palestine, and Transjordan. It crushed the Shi'a-led revolt of 1920, crowned the Hashemites, protected Bahrain until 1971, and joined the United States in the 1953 coup in Iran.", events: ["iraq-1920", "iraq-1932", "coup-1953"] },
  { name: "France", line: "Mandate power in Syria and Lebanon. It drew Greater Lebanon around the Shi'a south and Bekaa, recognized Ja'fari courts, ran a separate Alawite State until 1936, and recruited Alawites into its colonial army, a route that later led them into Syria's officer corps.", events: ["lebanon-1920", "alawite-1936", "beirut-1983"] },
  { name: "United States", line: "The Shah's patron after 1953, the target of the 1979 embassy seizure, the peacekeeper bombed in 1983, the occupier that handed Iraq's Shi'a parties the state in 2003, the killer of Soleimani, and the bomber of Fordow.", events: ["coup-1953", "hostages-1979", "beirut-1983", "iraq-2003", "soleimani-2020", "twelve-2025", "war-2026"] },
  { name: "Israel", line: "Its wars made Shi'a politics as much as any cleric did: 1967, the invasions of Lebanon in 1978 and 1982, the occupation of the south until 2000, the war of 2006, the killing of Musawi and Nasrallah, and direct war with Iran from 2024.", events: ["sixday-1967", "israel-1982", "musawi-1992", "south-2000", "war-2006", "nasrallah-2024", "twelve-2025"] },
  { name: "Saudi Arabia", line: "A Wahhabi-Saudi state that took the Shi'a east, with its oil, in 1913. Its rulers treated Shi'a citizens as a security question, broke with Iran after the 1987 Hajj and again in 2016, sent troops to Bahrain, and went to war in Yemen.", events: ["qatif-1979", "mecca-1987", "bahrain-2011", "yemen-2015", "nimr-2016", "beijing-2023"] },
  { name: "Jordan", line: "The Hashemite kingdom that expelled the PLO in 1970, pushing it into the Shi'a south of Lebanon, sided with Iraq in the 1980s, and gave the 'Shi'a crescent' its name.", events: ["blacksept-1970", "crescent-2004"] },
  { name: "PLO and Palestine", line: "A Sunni, largely secular national movement whose camps in Lebanon trained Iranian and Lebanese Shi'a revolutionaries, whose armed presence in the south drew Israeli fire onto Shi'a villages, and whose expulsion in 1982 cleared the ground for Hezbollah. Palestine remained the axis's banner after that.", events: ["sixday-1967", "blacksept-1970", "plo-1979", "israel-1982", "gaza-2023"] },
  { name: "Muslim Brotherhood", line: "The Sunni Islamist movement founded in Egypt in 1928. Navvab Safavi's Devotees admired it, and Khamenei translated its thinker Qutb. Assad crushed its Syrian branch at Hama. Hamas grew from its Palestinian branch and became Iran's Sunni partner.", events: ["fadaiyan-1946", "hama-1982", "gaza-2023"] },
  { name: "The Ba'ath Party", line: "Secular Arab nationalism founded in Damascus in the 1940s. Its two branches ruled Syria from 1963 and Iraq from 1968, and the two branches were enemies. In Iraq it hanged the Shi'a party's thinker. In Syria, under an Alawite officer, it became Iran's ally.", events: ["assad-1970", "saddam-1979", "baqir-1980", "iraq-2003", "assad-2024"] },
  { name: "Alawites", line: "A ninth-century offshoot of Shiism, esoteric and long marginal, rooted in Syria's coastal mountains. Not part of the Twelver seminary world. French recruitment, the army, and the Ba'ath brought them to power. Musa al-Sadr's 1973 ruling that they are Shi'a Muslims eased a political alliance more than a religious one.", events: ["alawite-1936", "assad-1970", "hama-1982", "assad-2024"] },
  { name: "Hezbollah", line: "Founded in the Bekaa after 1982 with Revolutionary Guard training, sworn in 1985 to Khomeini's guardianship. A militia, a party, a social movement, and the strongest piece of Iran's network until 2024.", events: ["hezb-1985", "beirut-1983", "musawi-1992", "war-2006", "qusayr-2013", "nasrallah-2024", "war-2026"] },
];

export const IDEAS = [
  { name: "The Karbala paradigm", tone: "terra", line: "Husayn, grandson of the Prophet, was killed at Karbala in 680 by the Umayyad army. Mourning him was long a ritual of patience and grief. In the 1960s and 1970s Shariati, Khomeini, and Musa al-Sadr turned it into a script for revolt: 'every day is Ashura, every land is Karbala.' The 1963 protests, the forty-day mourning cycles of 1978, Qatif in Muharram 1979, and Hezbollah's culture of martyrdom all draw on it." },
  { name: "Occultation and waiting", tone: "sage", line: "Twelvers hold that the twelfth Imam went into hiding in the ninth century and will return. The classical consequence was caution: all rule in his absence is imperfect, and clerics should guide believers, not govern states. Every Shi'a political theory of the twentieth century is an answer to this." },
  { name: "Marja'iyya, the source of emulation", tone: "sage", line: "Believers follow a living senior jurist and pay religious dues to his office. It gives the great clerics money, followers, and reach across borders. Najaf and Qom are its capitals. It is why Sistani can move Iraq without holding office, and why Khamenei's authority outside Iran is contested." },
  { name: "Quietism", tone: "sage", line: "Borujerdi in Qom, al-Khoei and Sistani in Najaf. The jurist guides and stays out of the ruler's chair. It is still a politics: Sistani set the terms of Iraq's founding and then declined to run it." },
  { name: "Velayat-e faqih", tone: "terra", line: "Khomeini's guardianship of the jurist: a qualified cleric must rule until the Imam returns. Written into Iran's 1979 constitution, widened to 'absolute' guardianship in 1988–89, and sworn to by Hezbollah in 1985 and by several Iraqi factions. Many senior jurists, in Najaf above all, never accepted it." },
  { name: "Baqir al-Sadr's Islamic order", tone: "olive", line: "A modern party, an Islamic economics, and a state in which the people act as God's trustees under a jurist's witness. More participatory than Khomeini's model. It lived on in Dawa, which governed Iraq after 2005, and in the Sadr family's later movements." },
  { name: "Shariati's revolutionary Shiism", tone: "terra", line: "A lay reading in which Ali and Husayn are rebels against tyranny and the clergy are part of the problem. It recruited the students of 1978. The clerical state honored his name and set aside his anti-clericalism." },
  { name: "The politics of the deprived", tone: "olive", line: "Musa al-Sadr's program: Shi'a as citizens demanding schools, roads, and a fair share inside a multi-sect state, armed only when the state would not protect them. It is the root of Amal and of Hezbollah's social base, though not of Hezbollah's oath." },
  { name: "Resistance (muqawama)", tone: "terra", line: "Armed resistance to Israel and the United States as a standing duty. It joined Shi'a militias, an Alawite regime, and the Sunni Hamas into the 'axis of resistance.' It was the axis's language from the 1980s, and it was hardest hit in 2024–26." },
  { name: "Exporting the revolution", tone: "terra", line: "The Islamic Republic's constitution commits it to support the oppressed abroad. In practice that meant the Revolutionary Guards and, later, the Quds Force: training, money, and arms to partners. It succeeded where a local Shi'a grievance already existed, and mostly failed where it did not." },
  { name: "Zaydi revival", tone: "olive", line: "Zaydis hold that a just descendant of Ali must rise against unjust rule. They have no hidden Imam to wait for, so their tradition was activist and their imams ruled Yemen for a millennium. Ansar Allah's revival of it is Zaydi in doctrine, revolutionary in slogan, and allied with Iran in war." },
  { name: "The Alawite question", tone: "olive", line: "An esoteric tradition whose Shi'a status was debated for centuries. Musa al-Sadr's 1973 ruling recognized it, and the Damascus–Tehran alliance leaned on that ruling. The Assad state never governed as a Shi'a state." },
];

export const INFLUENCE = [
  { a: "Najaf", b: "Qom", from: 1930, to: 2026.9, type: "emulation", label: "Seminary ties between Najaf and Qom" },
  { a: "Najaf", b: "Tyre", from: 1930, to: 2026.9, type: "emulation", label: "Lebanese clerics trained in Najaf" },
  { a: "Najaf", b: "Qatif", from: 1930, to: 2026.9, type: "emulation", label: "Gulf Shi'a follow Najaf's and Qom's jurists" },
  { a: "Najaf", b: "Manama", from: 1930, to: 2026.9, type: "emulation", label: "Bahraini Shi'a follow Najaf's and Qom's jurists" },
  { a: "South Lebanon", b: "Tehran", from: 1970.7, to: 1982.6, type: "training", label: "Iranian revolutionaries train in PLO camps in Lebanon" },
  { a: "Tehran", b: "Damascus", from: 1980.3, to: 2024.93, type: "alliance", label: "State alliance with Assad's Syria" },
  { a: "Damascus", b: "Baalbek", from: 1982.5, to: 2024.93, type: "alliance", label: "Syria as Hezbollah's supply route" },
  { a: "Tehran", b: "Baalbek", from: 1982.5, to: 2026.9, type: "oath", label: "Revolutionary Guards and Hezbollah, sworn to the Leader" },
  { a: "Tehran", b: "Baghdad", from: 1982.9, to: 2003.3, type: "exile", label: "Iraqi Shi'a opposition housed in Iran (SCIRI, Badr)" },
  { a: "Tehran", b: "Baghdad", from: 2003.3, to: 2026.9, type: "factions", label: "Armed Iraqi factions: Badr, Kata'ib Hezbollah, others" },
  { a: "Tehran", b: "Manama", from: 1981.9, to: 1983.0, type: "attempt", label: "1981 coup plot by an Iran-backed Bahraini group" },
  { a: "Tehran", b: "Gaza", from: 1992, to: 2026.9, type: "crosssect", label: "Money and arms to Hamas and Islamic Jihad, both Sunni" },
  { a: "Tehran", b: "Sanaa", from: 2014.7, to: 2026.9, type: "arms", label: "Weapons and training to Ansar Allah" },
];
