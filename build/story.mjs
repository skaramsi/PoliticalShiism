export const STORY = {
  open: {
    place: "The setting, 1918–1932",
    text: [
      "When the Ottoman Empire collapsed in 1918, Britain and France divided its Arab provinces. In Lebanon, France built a state that shared power by religious community: Maronite and other Christians, Sunnis, Shi'a, and Druze each had seats in parliament, and the Shi'a of the south and the Bekaa, the poorest regions, had the least say. In Iraq, Britain crowned a Sunni king over a Shi'a majority. In Iran, an army officer founded a new dynasty. In North Yemen, a Zaydi imam ruled.",
      "Out of these arrangements, four political movements grew among Shi'a communities over the next century. This is their history, and the history of the states, wars, and neighbors around them.",
    ],
  },
  acts: [
    {
      n: "I", title: "Ruled by others", years: "1916–1963", scenes: ["prologue", "absence", "deadend", "starts"],
      intro: "Empires leave, and new states form around Shi'a communities without giving them much power: a Sunni monarchy in Iraq, a confessional republic in Lebanon, a modernizing Shah in Iran, and a Zaydi imamate in Yemen until 1962. The first organizers appear late in the period, Dawa in Najaf and Musa al-Sadr in Tyre.",
    },
    {
      n: "II", title: "The movements take shape", years: "1967–1979", scenes: ["defeat", "tehran"],
      intro: "The defeat of 1967 weakens Arab nationalism. In Iraq the Ba'ath takes power and moves against Dawa. In Lebanon Musa al-Sadr founds the Movement of the Deprived. In Iran, Khomeini's Wilayat al-Faqih becomes the program of a revolution.",
    },
    {
      n: "III", title: "War years", years: "1979–1989", scenes: ["baath", "militia"],
      intro: "Iraq's Ba'ath bans Dawa and invades revolutionary Iran. Iran finds partners: Assad's Syria, Iraqi exiles, and, after Israel's invasion of Lebanon, the new Hezbollah beside Amal.",
    },
    {
      n: "IV", title: "Holding on, then taking office", years: "1991–2009", scenes: ["lessons", "taken"],
      intro: "Iraq's 1991 rising is crushed, Hezbollah enters Lebanon's parliament, and a Zaydi revival grows in Yemen. Then the American invasion of Iraq brings Dawa from exile into government.",
    },
    {
      n: "V", title: "Wars across borders", years: "2011–2026", scenes: ["spring", "eighteen", "home", "pieces", "open"],
      intro: "The movements fight in Syria, Iraq, and Yemen, Ansar Allah takes Sanaa, and protesters at home turn on the parties in office. Then the war that began in Gaza in 2023 pulls them all in.",
    },
  ],
  scenes: {
    prologue: {
      hook: "The Ottoman Empire falls, and the Shi'a of Iraq and Lebanon gain new masters.",
      leaves: "Each of these communities now lives inside a state drawn by others. Who will organize them?",
    },
    absence: {
      hook: "Three communities, three ways of being many and powerless.",
      leaves: "Who will speak for people who have neither a party nor a militia?",
    },
    deadend: {
      hook: "Iran's first Shi'a Islamists have guns and no plan for the state.",
      leaves: "Who will turn grievance into an organization, and the Shah's foreign patron into a charge against him?",
    },
    starts: {
      hook: "In six years, four Shi'a beginnings in four countries, none of them aware of the others.",
      leaves: "Each of these starts needs a crisis that discredits its rivals. In 1967 one arrives.",
    },
    defeat: {
      hook: "In six days the secular Arab answer loses its armies and much of its authority.",
      leaves: "In one decade: a Ba'athist regime in Baghdad, an Alawite-led regime in Damascus, a movement of the deprived in Lebanon, and Khomeini's program for Iran. Which moves first?",
    },
    tehran: {
      hook: "In little more than a year, Khomeini's movement takes Iran.",
      leaves: "A revolution that claims to speak for all the oppressed. What happens when its neighbors answer back?",
    },
    baath: {
      hook: "Saddam takes Iraq, executes Najaf's great thinker, and invades Iran.",
      leaves: "Iran is fighting for survival at home. Where will it find a front abroad?",
    },
    militia: {
      hook: "Israel drives the PLO out of Lebanon, and a Shi'a movement grows in the space it leaves.",
      leaves: "Khomeini is dead. Can a revolution that rested on one man's authority outlive him?",
    },
    lessons: {
      hook: "Ten years, three hard lessons, and a 31-year-old successor.",
      leaves: "Shi'a movements have learned to survive. What happens when someone hands them a state?",
    },
    taken: {
      hook: "An American army gives Iraq's Shi'a parties what decades of struggle could not.",
      leaves: "Shi'a parties now hold ministries in Baghdad and guns in Beirut. Can they still claim to speak for the excluded?",
    },
    spring: {
      hook: "Within two years, Shi'a protesters are put down in one country, and fighters are sent to defend a regime in another.",
      leaves: "If the network can save Assad, how far will it stretch?",
    },
    eighteen: {
      hook: "On a map these months look like one bloc. On a calendar they are five separate stories.",
      leaves: "The network is at its widest. Who is it governing for?",
    },
    home: {
      hook: "Many of the crowds marching against the Shi'a parties are Shi'a.",
      leaves: "This alliance has never fought a single war together. What happens if it does?",
    },
    pieces: {
      hook: "For a few months the whole network fights one war. Then it breaks, one piece at a time.",
      leaves: "With the land route gone and its commanders hit hard, the war moves closer to Iran itself.",
    },
    open: {
      hook: "The war reaches Iran itself.",
      leaves: "",
    },
  },
  epilogue: {
    title: "Where the four movements stand",
    asOf: "As of 24 October 2026",
    items: [
      { name: "Wilayat al-Faqih · Iran", text: "The Islamic Republic founded in 1979 still governs Iran. Since February 2026 it has been at war with the United States and Israel." },
      { name: "Dawa and the Ba'ath · Iraq", text: "Dawa and the other Shi'a parties have governed Iraq since 2005. Armed factions remain part of the landscape. The Ba'ath has been banned since 2003." },
      { name: "Amal and Hezbollah · Lebanon", text: "Both remain Lebanon's main Shi'a parties. After the 2024 war, Hezbollah's leadership was hit hard, and the Lebanese state is pressing the question of its arms." },
      { name: "Ansar Allah · Yemen", text: "The Houthis still hold Sanaa and the north." },
    ],
  },
  tells: {
    deadend: "The Devotees of Islam, founded by Navvab Safavi in 1946, are the first organized Shi'a Islamist group in modern Iran. They admire the Muslim Brotherhood in Egypt, assassinate a secular writer and a prime minister, and want sharia enforced. In August 1953 a coup backed by the American and British intelligence services removes Mosaddegh, who had nationalized the oil, and senior clerics who had broken with him accept the Shah's return. The monarchy is now Washington's client, and Khomeini will later make that his charge against it. In 1956 the Shah executes the Devotees' leader.",
    starts: "In Najaf, Muhammad Baqir al-Sadr and other young clerics found Hizb al-Da'wa to compete with the Communists and the nationalists for Iraq's Shi'a youth. One of those nationalist rivals is the Ba'ath, whose Iraqi branch was founded in the early 1950s by a Shi'a engineer, Fuad al-Rikabi; in February 1963 it seizes power for nine months. In Tyre, Musa al-Sadr begins turning the poorest community in Lebanon into a constituency. In Iran, Khomeini denounces the Shah's reforms in 1963, is arrested, and is exiled the next year. In North Yemen, republican officers overthrow the Zaydi imamate. Four beginnings, in four countries, with no shared address.",
    defeat: "June 1967 breaks the Arab nationalism of Nasser. In Iraq the Ba'ath returns to power in July 1968 and moves against Dawa, executing five of its members in 1974. Guerrillas take over the PLO, and Yasser Arafat becomes its chairman. In September 1970 King Hussein's army drives them out of Jordan. This is Black September. They rebuild in south Lebanon, on Shi'a land, and Israeli reprisals follow them there. In 1970 Khomeini, in exile in Najaf, sets out Wilayat al-Faqih in lectures later published as Islamic Government. In Damascus, Hafez al-Assad, the Alawite defence minister who kept Syria's air force out of Jordan, takes power. In Lebanon, Musa al-Sadr launches Harakat al-Mahrumin, the Movement of the Deprived, in 1974 for Shi'a caught between Palestinian guns and Israeli ones. In 1975 its militia, Amal, appears as the civil war begins.",
    tehran: "Protests in Iran build through 1978, and the crowds include liberals, the left, and followers of Ali Shariati as well as Khomeini's supporters. The Shah leaves in January 1979. Khomeini returns in February, and by December a new constitution makes Wilayat al-Faqih the basis of the system, with Khomeini as Leader. In August 1978 Musa al-Sadr vanishes in Libya, and Amal loses its founder. In February 1979 Arafat is the first foreign leader received in Tehran, and the PLO is handed Israel's mission. In November students seize the US embassy and hold 52 Americans for 444 days. That same month Shi'a in Qatif march with Khomeini's portrait and are crushed, and Gulf rulers begin to see their own Shi'a citizens as an Iranian channel.",
    lessons: "March 1991: the shrine cities of Iraq rise after the Gulf War, and Saddam's Republican Guard crushes the rising. Washington, whose war made the moment possible, does not come. February 1992: an Israeli helicopter kills Hezbollah's leader Abbas al-Musawi, and the party chooses Hassan Nasrallah, then 31. That summer it runs for parliament, and Amal's Nabih Berri becomes speaker. May 1997: Iranians give Khatami a landslide and spend two terms learning how far reform can go. In Yemen's Zaydi north the Believing Youth, the movement that will become Ansar Allah, run study circles and summer camps. May 2000: Israel leaves south Lebanon, and Nasrallah claims the victory.",
    taken: "The American invasion ends Ba'ath rule and brings Dawa and the other exiled Shi'a parties home. Grand Ayatollah Sistani insists on elections, and in 2005 Shi'a parties win them; Dawa's Ibrahim al-Jaafari and then Nouri al-Maliki become prime minister. In December 2004 Jordan's King Abdullah warns of a 'Shi'a crescent' from Tehran to Beirut, folding Iraqi voters, an Alawite regime, and Hezbollah into one sect-shaped threat. That year in Yemen the army kills Hussein al-Houthi, a Zaydi preacher whose slogan cursed America and Israel. His brother Abdul-Malik inherits six wars. In February 2006 the Samarra shrine is bombed and Baghdad turns sectarian. In July Hezbollah fights Israel for a month and is still standing. In February 2008 a car bomb in Damascus kills Imad Mughniyeh. In 2009 millions of Iranians march against a declared election result.",
    home: "Autumn 2019, in Baghdad, Beirut, and Iranian cities, people march against the Shi'a parties in office. The crowds are not one movement. The complaint is. The movements that rose by speaking for the excluded now hold the ministries and the guns. In January 2020 a US drone kills Soleimani and Abu Mahdi al-Muhandis at Baghdad airport. The network he tied together outlives him. In September 2022 Mahsa Jina Amini dies in morality-police custody. The widest challenge to the Islamic Republic since 1979 is led by women and begins in a Kurdish city. Abroad the network is still armed. At home the governments are arguing with their own publics.",
  },
};
