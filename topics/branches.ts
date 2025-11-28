import {
  BookOpen,
  Clock,
  Heart,
  ExternalLink,
  CheckCircle2,
  Users,
} from "lucide-react";

export const iconMap = {
  BookOpen,
  Clock,
  Heart,
  ExternalLink,
  CheckCircle2,
  Users,
} as const;

export const branchBeliefs = [
  {
    key: "churchAuthority",
    label: "Church Authority",
    description: "Do they believe in church authority?",
    icon: "ExternalLink",
  },
  {
    key: "tradition",
    label: "Tradition",
    description: "Do they emphasize tradition?",
    icon: "Clock",
  },
  {
    key: "sacraments",
    label: "Sacraments",
    description: "Do they practice sacraments?",
    icon: "CheckCircle2",
  },
  {
    key: "pope",
    label: "Papal Authority",
    description: "Do they recognize the Pope?",
    icon: "Heart",
  },
  {
    key: "priesthood",
    label: "Priesthood of All Believers",
    description: "Do they believe all Christians are priests?",
    icon: "Users",
  },
];

export const branchBeliefMap: Record<string, Record<string, boolean>> = {
  catholic: {
    churchAuthority: true,
    tradition: true,
    sacraments: true,
    pope: false,
    priesthood: false,
  },
  romanCatholic: {
    churchAuthority: true,
    tradition: true,
    sacraments: true,
    pope: true,
    priesthood: false,
  },
  orientalOrthodox: {
    churchAuthority: true,
    tradition: true,
    sacraments: true,
    pope: false,
    priesthood: false,
  },
  churchOfTheEast: {
    churchAuthority: true,
    tradition: true,
    sacraments: true,
    pope: false,
    priesthood: false,
  },
  easternOrthodox: {
    churchAuthority: true,
    tradition: true,
    sacraments: true,
    pope: false,
    priesthood: false,
  },
  Lutheran: {
    churchAuthority: false,
    tradition: false,
    sacraments: true,
    pope: false,
    priesthood: true,
  },
  "Reformed/Presbyterian": {
    churchAuthority: false,
    tradition: false,
    sacraments: true,
    pope: false,
    priesthood: true,
  },
  Anabaptist: {
    churchAuthority: false,
    tradition: false,
    sacraments: true,
    pope: false,
    priesthood: true,
  },
  Anglican: {
    churchAuthority: true,
    tradition: true,
    sacraments: true,
    pope: false,
    priesthood: false,
  },
  Baptist: {
    churchAuthority: false,
    tradition: false,
    sacraments: true,
    pope: false,
    priesthood: true,
  },
  Methodist: {
    churchAuthority: false,
    tradition: false,
    sacraments: true,
    pope: false,
    priesthood: true,
  },
  Pentecostal: {
    churchAuthority: false,
    tradition: false,
    sacraments: true,
    pope: false,
    priesthood: true,
  },
  Restorationist: {
    churchAuthority: false,
    tradition: false,
    sacraments: true,
    pope: false,
    priesthood: true,
  },
  Episcopal: {
    churchAuthority: true,
    tradition: true,
    sacraments: true,
    pope: false,
    priesthood: false,
  },
  quakers: {
    churchAuthority: false,
    tradition: false,
    sacraments: false,
    pope: false,
    priesthood: true,
  },
  seventhDayAdventist: {
    churchAuthority: true,
    tradition: false,
    sacraments: true,
    pope: false,
    priesthood: true,
  },
  messianicJudaism: {
    churchAuthority: false,
    tradition: false,
    sacraments: true,
    pope: false,
    priesthood: true,
  },
  nonDenominational: {
    churchAuthority: false,
    tradition: false,
    sacraments: true,
    pope: false,
    priesthood: true,
  },
};

// Timeline data for Christian branches
export const branchTimeline = [
  { id: "catholic", date: "1st c. AD", period: "Apostolic", color: "purple" },
  {
    id: "romanCatholic",
    date: "c. 590 AD",
    period: "Imperial",
    color: "darkpurple",
  },
  {
    id: "orientalOrthodox",
    date: "451 AD",
    period: "Early Church",
    color: "blue",
  },
  {
    id: "churchOfTheEast",
    date: "451 AD",
    period: "Early Church",
    color: "blue",
  },
  {
    id: "easternOrthodox",
    date: "1054 AD",
    period: "Medieval",
    color: "green",
  },
  { id: "Lutheran", date: "1517 AD", period: "Reformation", color: "orange" },
  {
    id: "Reformed/Presbyterian",
    date: "1536 AD",
    period: "Reformation",
    color: "orange",
  },
  { id: "Anabaptist", date: "1525 AD", period: "Reformation", color: "orange" },
  { id: "Anglican", date: "1534 AD", period: "Reformation", color: "orange" },
  {
    id: "quakers",
    date: "c. 1650s AD",
    period: "Post-Reformation",
    color: "gray",
  },
  { id: "Baptist", date: "1609 AD", period: "Post-Reformation", color: "red" },
  { id: "Methodist", date: "1738 AD", period: "Revival", color: "yellow" },
  { id: "Episcopal", date: "1789 AD", period: "Modern", color: "purple" },
  {
    id: "Restorationist",
    date: "1800s AD",
    period: "Modern",
    color: "pink",
  },
  {
    id: "seventhDayAdventist",
    date: "1863 AD",
    period: "Modern",
    color: "brown",
  },
  { id: "Pentecostal", date: "1901 AD", period: "Modern", color: "pink" },
  {
    id: "nonDenominational",
    date: "c. 1900s AD",
    period: "Modern",
    color: "gray",
  },
  {
    id: "messianicJudaism",
    date: "c. 1960s AD",
    period: "Modern",
    color: "teal",
  },
];

import type { Topic } from "./types";

export const branches: Topic = {
  id: "branches",
  title: "What are the different branches of Christianity? ",
  description:
    "What are the differences between each branch? Are any of them truer than others?",
  icon: "Church",
  color: "purple",
  tags: ["Branches", "Historical"], //make clear what the fundamental aspect of christianity is
  tldr: "Christianity's main branches include the Early Universal/Catholic Church (1st-4th c.), Roman Catholic (which developed papal supremacy), Eastern Orthodox (which split in 1054 AD), Oriental Orthodox (split in 451 AD), and Protestant (which emerged from the 16th c. Reformation). Each differs on beliefs about scriptural authority, tradition, and sacraments.",
  content: ` <h3>Legend:</h3>
    <p><svg xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M18 13v6a2 2 0 01-2 2H8a2 2 0 01-2-2V5a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg> Church Authority - Do they believe in church authority?</p>
    <p><svg xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> Tradition - Do they emphasize tradition?</p>
    <p><svg xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2l4-4"/><circle cx="12" cy="12" r="10"/></svg> Sacraments - Do they practice sacraments?</p>
    <p><svg xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> Papal Authority - Do they recognize the Pope?</p>
    <p><svg xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> Priesthood of All Believers - Do they believe all Christians are priests?</p>
    
    <p>Each branch below will show colored icons indicating their beliefs - green for yes, red for no.</p>`,
  subtopics: [
    {
      id: "catholic",
      title: "Universal / Original Catholic Church",
      tags: ["catholic", "traditional", "early"],
      content: `<strong>Founded:</strong> 1st century (Apostolic era, established by The Holy Spirit through the Apostles following Pentecost)<a href="https://en.wikipedia.org/wiki/History_of_Christianity" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[1]</a><br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>Apostolic succession:</strong> Direct line of authority from the apostles<a href="https://www.britannica.com/topic/apostolic-succession" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[2]</a><br>
      • <strong>Sacraments:</strong> Recognition of core sacraments like Baptism and Eucharist<a href="https://www.newadvent.org/cathen/13295a.htm" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[3]</a><br>
      • <strong>Scripture + Tradition:</strong> Both the Bible and apostolic tradition as sources of divine revelation<a href="https://www.worldhistory.org/Christianity/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[4]</a><br>
      • <strong>Episcopal authority:</strong> Led by bishops (episkopoi) but without singular papal supremacy<a href="https://en.wikipedia.org/wiki/Episcopal_polity" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[5]</a><br>
      • <strong>Unity in diversity:</strong> Multiple centers of authority (Rome, Antioch, Alexandria, Jerusalem, Constantinople)<a href="https://en.wikipedia.org/wiki/Pentarchy" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[6]</a><br>
      • <strong>Early church councils:</strong> Collective decision-making through ecumenical councils<a href="https://en.wikipedia.org/wiki/First_seven_ecumenical_councils" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[7]</a><br>
      • <strong>Martyrdom and persecution:</strong> Sustained through Roman persecution until Constantine<a href="https://en.wikipedia.org/wiki/Persecution_of_Christians_in_the_Roman_Empire" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[8]</a><br><br>
      <strong>Historical Context:</strong> The original "catholic" (universal) church before major schisms<a href="https://en.wikipedia.org/wiki/Early_Christianity" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[9]</a>. This represents Christianity as it existed in the first few centuries before the rise of papal supremacy<a href="https://en.wikipedia.org/wiki/History_of_the_papacy" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[10]</a>.<br>
      <strong>Distinctive Features:</strong> House churches, bishop-led communities, emphasis on apostolic teaching and fellowship<a href="https://en.wikipedia.org/wiki/Christianity_in_the_1st_century" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[11]</a>`,
    },
    {
      id: "romanCatholic",
      title: "Roman Catholic Church",
      tags: ["catholic", "traditional", "papal"],
      content: `<strong>Founded:</strong> Gradual development, with papal supremacy solidifying from the 4th-11th centuries<a href="https://www.britannica.com/topic/Roman-Catholicism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[12]</a><br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>Papal supremacy:</strong> The Pope (Bishop of Rome) has ultimate, universal authority over the Church<a href="https://en.wikipedia.org/wiki/Papal_supremacy" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[13]</a><br>
      • <strong>Seven sacraments:</strong> Baptism, Confirmation, Eucharist, Penance, Anointing, Holy Orders, Matrimony<a href="https://www.vatican.va/archive/ENG0015/__P3E.HTM" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[14]</a><br>
      • <strong>Scripture + Tradition + Magisterium:</strong> Authority from the Bible, tradition, and the teaching office of the Church<a href="https://en.wikipedia.org/wiki/Magisterium" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[15]</a><br>
      • <strong>Faith + Works:</strong> Salvation comes by grace through faith, which is expressed in good works<a href="https://en.wikipedia.org/wiki/Salvation_in_Catholicism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[16]</a><br>
      • <strong>Saints and Mary:</strong> Veneration (honor) of saints and Mary as intercessors<a href="https://www.newadvent.org/cathen/08070a.htm" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[17]</a><br>
      • <strong>Transubstantiation:</strong> Bread and wine fully become the body and blood of Christ<a href="https://www.britannica.com/topic/transubstantiation" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[18]</a><br>
      • <strong>Purgatory:</strong> A state of final purification after death for those destined for heaven<a href="https://www.newadvent.org/cathen/12575a.htm" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[19]</a><br>
      • <strong>Celibate clergy:</strong> Priests and bishops must remain unmarried (in the Latin Rite)<a href="https://en.wikipedia.org/wiki/Clerical_celibacy_in_the_Catholic_Church" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[20]</a><br><br>
      <strong>Historical Development:</strong> Evolved from the early Catholic church with increasing papal authority, especially after the fall of the Western Roman Empire<a href="https://en.wikipedia.org/wiki/History_of_the_Catholic_Church" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[21]</a> and the East-West Schism (1054 AD)<a href="https://en.wikipedia.org/wiki/East%E2%80%93West_Schism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[22]</a>.<br>
      <strong>Distinctive Practices:</strong> Mass, confession to priests, extensive liturgical calendar, Vatican authority, elaborate church hierarchy<a href="https://www.vatican.va/archive/ENG0015/_INDEX.HTM" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[23]</a>`,
    },
    {
      id: "orientalOrthodox",
      title: "Oriental Orthodox",
      tags: ["orthodox", "traditional"],
      content: `<strong>Founded:</strong> c. 451 AD (split at Council of Chalcedon)<a href="https://en.wikipedia.org/wiki/Oriental_Orthodox_Churches" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[24]</a><br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>Miaphysite Christology:</strong> Christ has one united divine-human nature (different from Catholic/Eastern Orthodox Dyophysitism)<a href="https://en.wikipedia.org/wiki/Miaphysitism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[25]</a><br>
      • <strong>Regional emphasis:</strong> Strong connection to ethnic and national identity<a href="https://www.britannica.com/topic/Oriental-Orthodox-church" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[26]</a><br>
      • <strong>Ancient traditions:</strong> Preserves very early Christian practices<a href="https://en.wikipedia.org/wiki/Coptic_Orthodox_Church_of_Alexandria" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[27]</a><br>
      • <strong>No papal authority:</strong> Rejects Roman Catholic papal supremacy<a href="https://suscopts.org/coptic-orthodox/church/history/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[28]</a><br>
      • <strong>Seven sacraments:</strong> Similar to Catholic and Eastern Orthodox<a href="https://english.eritreantewahdo.org/introduction-to-the-seven-sacrements/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[29]</a><br><br>
      <strong>Major Churches:</strong> Ethiopian Orthodox<a href="https://www.oikoumene.org/member-churches/ethiopian-orthodox-tewahedo-church" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[30]</a>, Coptic Orthodox<a href="https://www.oikoumene.org/member-churches/coptic-orthodox-church" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[31]</a>, Armenian Apostolic<a href="https://armenianchurch.us/etchmiadzin/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[32]</a>, Syriac Orthodox<a href="https://www.oikoumene.org/member-churches/syrian-orthodox-patriarchate-of-antioch-and-all-the-east" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[33]</a><br>
      <strong>Distinctive Practices:</strong> Unique liturgical traditions, ancient languages (Coptic, Ge'ez, Armenian), fasting periods<a href="https://en.wikipedia.org/wiki/Liturgy_of_Saint_James" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[34]</a>`,
    },
    {
      id: "churchOfTheEast",
      title: "Church of the East",
      tags: ["traditional"],
      content: `<strong>Founded:</strong> c. 410 AD (Synod of Seleucia-Ctesiphon); split from West after 431 AD Council of Ephesus<a href="https://en.wikipedia.org/wiki/Church_of_the_East" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[35]</a><br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>Dyophysite Christology:</strong> Traditionally described as "Nestorian," emphasizes two distinct natures (divine and human) in Christ<a href="https://en.wikipedia.org/wiki/Nestorianism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[36]</a><br>
      • <strong>Historical missions:</strong> Once spread from the Middle East to China and India<a href="https://www.researchgate.net/publication/293179513_The_Church_of_the_East_A_Concise_History" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[37]</a><br>
      • <strong>Independent development:</strong> Developed separately from Western and Byzantine Christianity<a href="https://www.worldhistory.org/Assyrian_Church_of_the_East/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[38]</a><br>
      • <strong>Syriac tradition:</strong> Uses Syriac language and Eastern liturgies<a href="https://en.wikipedia.org/wiki/Syriac_Christianity" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[39]</a><br>
      • <strong>Married clergy:</strong> Allows married priests and bishops<a href="https://en.wikipedia.org/wiki/Clerical_marriage" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[40]</a><br><br>
      <strong>Modern Remnants:</strong> Assyrian Church of the East, Ancient Church of the East<a href="https://en.wikipedia.org/wiki/Assyrian_Church_of_the_East" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[41]</a><br>
      <strong>Historical Note:</strong> Significantly reduced due to persecution and isolation, but historically very influential in Asia<a href="https://www.pbs.org/wgbh/pages/frontline/shows/religion/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[42]</a>`,
    },
    {
      id: "easternOrthodox",
      title: "Eastern Orthodox",
      tags: ["orthodox", "traditional"],
      content: `<strong>Founded:</strong> 1054 AD (Great Schism from Roman Catholicism)<a href="https://www.britannica.com/event/Schism-of-1054" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[43]</a><br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>National churches:</strong> Organized into autocephalous (independent) national churches<a href="https://www.britannica.com/topic/Eastern-Orthodoxy" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[44]</a><br>
      • <strong>Seven sacraments:</strong> Similar to Catholicism but with different nuances (e.g., infant communion)<a href="https://www.oca.org/orthodoxy/the-orthodox-faith/worship/the-sacraments" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[45]</a><br>
      • <strong>Strong tradition:</strong> Scripture and "Holy Tradition" together, guided by Ecumenical Councils<a href="https://stkatherineaz.org/holy-scripture-holy-tradition" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[46]</a><br>
      • <strong>Icons:</strong> Veneration (not worship) of religious icons as "windows to heaven"<a href="https://en.wikipedia.org/wiki/Icon" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[47]</a><br>
      • <strong>No papal supremacy:</strong> Rejects the Pope's universal authority; sees him as "first among equals" (historically)<a href="https://www.orthodoxcouncil.org/ecumenical-patriarchate.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[48]</a><br>
      • <strong>Married clergy:</strong> Priests can be married (if married before ordination), but bishops must be celibate<a href="https://en.wikipedia.org/wiki/Orthodox_Church_in_America" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[49]</a><br>
      • <strong>Theosis:</strong> Emphasis on salvation as a process of deification, becoming "partakers of the divine nature"<a href="https://en.wikipedia.org/wiki/Theosis_(Eastern_Orthodox_theology)" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[50]</a><br><br>
      <strong>Major Churches:</strong> Greek, Russian, Serbian, Romanian, Bulgarian Orthodox<a href="https://www.oikoumene.org/church-families/orthodox-churches-eastern" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[51]</a><br>
      <strong>Distinctive Practices:</strong> Divine Liturgy, extensive fasting, iconostasis in churches<a href="https://www.oca.org/orthodoxy/the-orthodox-faith/worship" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[52]</a>`,
    },
    {
      id: "Lutheran",
      title: "Lutheran",
      tags: ["protestant", "reformation"],
      content: `<strong>Founded:</strong> c. 1517 AD (Martin Luther's Reformation)<a href="https://en.wikipedia.org/wiki/Martin_Luther" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[53]</a><br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>Justification by faith alone:</strong> Salvation by grace through faith, not works (sola fide)<a href="https://www.britannica.com/topic/justification-Christianity" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[54]</a><br>
      • <strong>Scripture alone:</strong> Bible is the sole infallible authority (sola scriptura)<a href="https://en.wikipedia.org/wiki/Sola_scriptura" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[55]</a><br>
      • <strong>Sacramental Union:</strong> Christ is present "in, with, and under" the bread and wine (often called Consubstantiation)<a href="https://en.wikipedia.org/wiki/Sacramental_union" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[56]</a><br>
      • <strong>Two sacraments:</strong> Baptism and Communion as primary sacraments<a href="https://en.wikipedia.org/wiki/Lutheran_sacraments" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[57]</a><br>
      • <strong>Liturgical worship:</strong> Maintains traditional liturgical structure (though varies)<a href="https://en.wikipedia.org/wiki/Lutheran_worship" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[58]</a><br>
      • <strong>Grace alone:</strong> Salvation is entirely God's unmerited work (sola gratia)<a href="https://en.wikipedia.org/wiki/Sola_gratia" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[59]</a><br>
      • <strong>Priesthood of all believers:</strong> All Christians have direct access to God<a href="https://en.wikipedia.org/wiki/Priesthood_of_all_believers" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[60]</a><br><br>
      <strong>Distinctive Features:</strong> Lutheran Confessions (Book of Concord, Augsburg Confession)<a href="https://en.wikipedia.org/wiki/Book_of_Concord" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[61]</a>, liturgical calendar, infant baptism<a href="http://stlukesbloomington.org/uploads/5/9/6/2/59621829/baptism-handout.pdf" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[62]</a>.<br>
      <strong>Major Bodies:</strong> Lutheran World Federation<a href="https://www.lutheranworld.org/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[63]</a>, Lutheran Church–Missouri Synod, Wisconsin Evangelical Lutheran Synod<a href="https://www.worldhistory.org/Protestant_Reformation" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[64]</a>`,
    },
    {
      id: "Reformed/Presbyterian",
      title: "Reformed/Presbyterian",
      tags: ["protestant", "reformation", "calvinist"],
      content: `<strong>Founded:</strong> c. 1536 AD (John Calvin in Geneva)<a href="https://en.wikipedia.org/wiki/John_Calvin" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[65]</a><br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>Sovereignty of God:</strong> God's absolute control and foreknowledge over all things<a href="https://en.wikipedia.org/wiki/Sovereignty_of_God" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[66]</a><br>
      • <strong>Predestination:</strong> God has chosen (elected) who will be saved (TULIP theology is a summary of this)<a href="https://www.britannica.com/topic/predestination" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[67]</a><br>
      • <strong>Church elders:</strong> Presbyterian church government with elected elders (presbyters)<a href="https://www.presbyterianmission.org/what-we-believe/church-government/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[68]</a><br>
      • <strong>Simple worship:</strong> Focus on preaching and scripture, with minimal ritual<a href="https://en.wikipedia.org/wiki/Reformed_worship" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[69]</a><br>
      • <strong>Covenant theology:</strong> Understanding of God's relationship with humanity through covenants<a href="https://en.wikipedia.org/wiki/Covenant_theology" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[70]</a><br>
      • <strong>Westminster Standards:</strong> Confessions and catechisms as doctrinal standards for many<a href="https://en.wikipedia.org/wiki/Westminster_Confession_of_Faith" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[71]</a><br>
      • <strong>Total depravity:</strong> Humanity is completely corrupted by sin and unable to choose God<a href="https://en.wikipedia.org/wiki/Total_depravity" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[72]</a><br><br>
      <strong>Church Government:</strong> Presbyterian system with sessions, presbyteries, and general assemblies<a href="https://en.wikipedia.org/wiki/Presbyterian_polity" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[73]</a><br>
      <strong>Major Bodies:</strong> Presbyterian Church (USA)<a href="https://www.pcusa.org/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[74]</a>, Orthodox Presbyterian Church, World Communion of Reformed Churches<a href="https://wcrc.eu" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[75]</a>`,
    },
    {
      id: "Anabaptist",
      title: "Anabaptist",
      tags: ["protestant", "reformation"],
      content: `<strong>Founded:</strong> 1525 AD (Swiss Brethren, radical reformation)<a href="https://en.wikipedia.org/wiki/Anabaptism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[76]</a><br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>Adult baptism:</strong> "Re-baptism" of believers who make a conscious decision (credo-baptism)<a href="https://gameo.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[77]</a><br>
      • <strong>Pacifism:</strong> Commitment to non-violence and peace (non-resistance)<a href="https://en.wikipedia.org/wiki/Peace_churches" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[78]</a><br>
      • <strong>Simple living:</strong> Emphasis on modesty and separation from worldly culture<a href="https://mwc-cmm.org/en/prayer/shared-conviction-7/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[79]</a><br>
      • <strong>Church-state separation:</strong> Complete separation of church and government<a href="https://en.wikipedia.org/wiki/Separation_of_church_and_state" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[80]</a><br>
      • <strong>Community discipline:</strong> Strong emphasis on church discipline ("the ban") and mutual accountability<a href="https://gameo.org/index.php?title=Ban" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[81]</a><br>
      • <strong>Biblical literalism:</strong> Direct application of New Testament teachings, especially the Sermon on the Mount<a href="https://gameo.org/index.php?title=Bible" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[82]</a><br>
      • <strong>Voluntary faith:</strong> Faith cannot be coerced or inherited<a href="https://en.wikipedia.org/wiki/Believers%27_Church" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[83]</a><br><br>
      <strong>Modern Descendants:</strong> Mennonites<a href="https://mwc-cmm.org/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[84]</a>, Amish, Hutterites, Brethren churches<a href="https://gameo.org/index.php?title=Anabaptism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[85]</a><br>
      <strong>Historical Note:</strong> Heavily persecuted by both Catholics and other Protestants<a href="https://www.christianhistoryinstitute.org/magazine/issue/anabaptists-radical-reformation" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[86]</a>`,
    },
    {
      id: "Anglican",
      title: "Anglican",
      tags: ["protestant"],
      content: `<strong>Founded:</strong> 1534 AD (Henry VIII's break from Rome)<a href="https://en.wikipedia.org/wiki/English_Reformation" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[87]</a><br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>Via media:</strong> "Middle way" between Catholicism and Protestantism<a href="https://www.britannica.com/topic/Anglicanism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[88]</a><br>
      • <strong>Episcopal governance:</strong> Led by bishops in apostolic succession<a href="https://www.churchofengland.org/our-faith/what-we-believe" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[89]</a><br>
      • <strong>Book of Common Prayer:</strong> Structured liturgical worship<a href="https://en.wikipedia.org/wiki/Book_of_Common_Prayer" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[90]</a><br>
      • <strong>Three-legged stool:</strong> Scripture, tradition, and reason as authorities<a href="https://en.wikipedia.org/wiki/Anglicanism#Doctrine" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[91]</a><br>
      • <strong>Broad spectrum:</strong> Includes high church (Anglo-Catholic), low church (Evangelical), and broad church traditions<a href="https://en.wikipedia.org/wiki/Churchmanship" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[92]</a><br>
      • <strong>Royal supremacy:</strong> Monarch as Supreme Governor (in England)<a href="https://en.wikipedia.org/wiki/Supreme_Governor_of_the_Church_of_England" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[93]</a><br>
      • <strong>Married clergy:</strong> Priests and bishops can marry<a href="https://www.churchofengland.org/life-events/vocations" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[94]</a><br><br>
      <strong>Global Communion:</strong> Church of England, Episcopal Church (USA)<a href="https://www.episcopalchurch.org/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[95]</a>, Anglican churches worldwide<a href="https://www.anglicancommunion.org/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[96]</a><br>
      <strong>Distinctive Features:</strong> Cathedrals, choral tradition, theological diversity within unity<a href="https://www.churchofengland.org/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[97]</a>`,
    },
    {
      id: "Baptist",
      title: "Baptist",
      tags: ["protestant"],
      content: `<strong>Founded:</strong> 1609 AD (Amsterdam, John Smyth)<a href="https://en.wikipedia.org/wiki/Baptists" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[98]</a><br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>Believer's baptism:</strong> Baptism by full immersion only after personal faith decision<a href="https://en.wikipedia.org/wiki/Believer%27s_baptism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[99]</a><br>
      • <strong>Local church autonomy:</strong> Each congregation is independent and self-governing<a href="https://en.wikipedia.org/wiki/Congregationalist_polity" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[100]</a><br>
      • <strong>Biblical authority:</strong> Scripture alone as the final authority (sola scriptura)<a href="https://en.wikipedia.org/wiki/Baptist_World_Alliance" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[101]</a><br>
      • <strong>Priesthood of believers:</strong> Every Christian has direct access to God<a href="https://www.sbcboston.org/our-beliefs" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[102]</a><br>
      • <strong>Religious liberty:</strong> Strong advocate for freedom of conscience and separation of church and state<a href="https://bjconline.org/what-is-religious-liberty/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[103]</a><br>
      • <strong>Evangelism:</strong> Strong emphasis on personal evangelism and missions<a href="https://www.britannica.com/topic/Baptist-World-Alliance" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[104]</a><br>
      • <strong>Congregational polity:</strong> Democratic church governance<a href="https://www.britannica.com/topic/Baptist" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[105]</a><br><br>
      <strong>Major Groups:</strong> Southern Baptist Convention, American Baptist Churches, Independent Baptist churches<a href="https://baptistworld.org/members/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[106]</a><br>
      <strong>Cultural Impact:</strong> Historically influential in religious freedom movements<a href="https://en.wikipedia.org/wiki/Roger_Williams_(theologian)" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[107]</a>`,
    },
    {
      id: "Methodist",
      title: "Methodist",
      tags: ["protestant"],
      content: `<strong>Founded:</strong> 18th century (John Wesley's revival movement)<a href="https://en.wikipedia.org/wiki/John_Wesley" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[108]</a><br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>Prevenient grace:</strong> God's grace is available to all people, enabling them to respond to Him<a href="https://www.mccabechurch.com/wp-content/uploads/2019/cache/10-15-17.pdf" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[109]</a><br>
      • <strong>Arminian soteriology:</strong> Humans have free will to accept or reject salvation<a href="https://en.wikipedia.org/wiki/Arminianism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[110]</a><br>
      • <strong>Social holiness:</strong> Personal holiness must lead to social action and justice<a href="https://www.umc.org/en/content/our-wesleyan-heritage" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[111]</a><br>
      • <strong>Perfectionism:</strong> Christians can achieve "Christian perfection" (sanctification) in this life<a href="https://en.wikipedia.org/wiki/Christian_perfection" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[112]</a><br>
      • <strong>Means of grace:</strong> Emphasizes spiritual growth through scripture, sacraments, prayer, and fellowship<a href="https://en.wikipedia.org/wiki/Means_of_grace" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[113]</a><br>
      • <strong>Methodist quadrilateral:</strong> Authority based on Scripture (primary), tradition, reason, and experience<a href="https://en.wikipedia.org/wiki/Wesleyan_Quadrilateral" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[114]</a><br>
      • <strong>Social justice:</strong> Strong emphasis on helping the poor and marginalized<a href="https://www.umcjustice.org/documents/124" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[115]</a><br><br>
      <strong>Historical Impact:</strong> Abolition movement, temperance, civil rights<a href="https://www.umc.org/en/who-we-are/history" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[116]</a><br>
      <strong>Major Bodies:</strong> United Methodist Church<a href="https://www.umc.org/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[117]</a>, Free Methodist, African Methodist Episcopal Church (AME)<a href="https://en.wikipedia.org/wiki/Methodism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[118]</a>`,
    },
    {
      id: "Pentecostal",
      title: "Pentecostal",
      tags: ["protestant", "charismatic"],
      content: `<strong>Founded:</strong> Early 1900s (Azusa Street Revival, Los Angeles)<a href="https://en.wikipedia.org/wiki/Azusa_Street_Revival" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[119]</a><br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>Baptism in the Holy Spirit:</strong> A distinct experience after salvation, evidenced by speaking in tongues<a href="https://en.wikipedia.org/wiki/Assemblies_of_God_Statement_of_Fundamental_Truths" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[120]</a><br>
      • <strong>Spiritual gifts:</strong> Emphasis on all nine gifts of the Spirit (1 Corinthians 12) for today<a href="https://en.wikipedia.org/wiki/Gifts_of_the_Spirit" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[121]</a><br>
      • <strong>Divine healing:</strong> God heals today through prayer and faith<a href="https://ag.org/Beliefs/Position-Papers" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[122]</a><br>
      • <strong>Prosperity teaching:</strong> God desires believers to be healthy and prosperous (common, but not universal)<a href="https://en.wikipedia.org/wiki/Prosperity_theology" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[123]</a><br>
      • <strong>Premillennialism:</strong> Belief that Jesus will return before the millennium<a href="https://ag.org/Beliefs/Statement-of-Fundamental-Truths/The-Blessed-Hope" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[124]</a><br>
      • <strong>Personal experience:</strong> Direct, personal relationship with God through the Spirit<a href="https://www.pewresearch.org/religion/religious-landscape-study/religious-family/pentecostal-family-evangelical-trad/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[125]</a><br>
      • <strong>Evangelistic fervor:</strong> Strong emphasis on missions and church planting<a href="https://ag.org/Beliefs/Statement-of-Fundamental-Truths#16" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[126]</a><br><br>
      <strong>Global Movement:</strong> One of the fastest-growing Christian movements worldwide<a href="https://en.wikipedia.org/wiki/Pentecostalism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[127]</a><br>
      <strong>Major Bodies:</strong> Assemblies of God<a href="https://ag.org/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[128]</a>, Church of God in Christ, Foursquare Church<a href="https://www.pewresearch.org/religion/2011/12/19/global-christianity-traditions/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[129]</a>`,
    },
    {
      id: "Restorationist",
      title: "Restorationist",
      tags: ["protestant", "restoration"],
      content: `<strong>Founded:</strong> 1800s onwards (Stone-Campbell Movement and others)<a href="https://en.wikipedia.org/wiki/Restoration_Movement" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[130]</a><br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>Primitive Christianity:</strong> Attempt to restore New Testament Christianity exactly, bypassing tradition<a href="https://www.thearda.com/us-religion/history/timelines/entry?etype=3&eid=32" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[131]</a><br>
      • <strong>No creeds:</strong> "No creed but Christ, no book but the Bible"<a href="https://www.georgiaencyclopedia.org/articles/arts-culture/restoration-movement/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[132]</a><br>
      • <strong>Biblical patterns:</strong> Strict adherence to perceived New Testament patterns for worship and structure<a href="https://en.wikipedia.org/wiki/Churches_of_Christ" target="_blank" style="color: #007acc; text-decoration: nonet-size: 0.9em; vertical-align: super;">[133]</a><br>
      • <strong>Unity movement:</strong> Seeks to unite all Christians by returning to biblical basics<a href="https://en.wikipedia.org/wiki/World_Convention_of_Churches_of_Christ" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[134]</a><br><br>
      <strong>Major Groups:</strong> Churches of Christ, Disciples of Christ, Christian Church (Disciples of Christ)<a href="https://en.wikipedia.org/wiki/Stone-Campbell_Movement" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[135]</a>.<br>
      <strong>Note:</strong> Other groups like Latter-day Saints and Jehovah's Witnesses also originated in this period with a "restoration" goal, but are considered non-orthodox by mainstream Christianity (see 'Other Movements').<a href="https://www.cambridge.org/core/books/cambridge-companion-to-american-protestantism/stonecampbell-movement/1F4959CCE0BD59A2F2A00E4B2D22D2C6" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[136]</a>`,
    },
    {
      id: "Episcopal",
      title: "Episcopal",
      tags: ["anglican", "protestant"],
      content: `<strong>Founded:</strong> 1789 AD (American Episcopal Church formed after American Revolution)<a href="https://www.episcopalchurch.org/organizations-affiliations/history-episcopal-church/timeline-2/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[137]</a><br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>Anglican tradition:</strong> Part of the worldwide Anglican Communion (USA branch)<a href="https://www.episcopalchurch.org/what-we-believe/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[138]</a><br>
      • <strong>Via media:</strong> "Middle way" between Catholicism and Protestantism<a href="https://trinitycathedral.com/about/sacraments-of-the-episcopal-faith/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[139]</a><br>
      • <strong>Episcopal governance:</strong> Led by bishops in apostolic succession<a href="https://www.episcopalchurch.org/who-we-are/structure/bishops/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[140]</a><br>
      • <strong>Book of Common Prayer:</strong> Liturgical worship with structured prayers<a href="https://www.episcopalchurch.org/what-we-believe/book-common-prayer/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[141]</a><br>
      • <strong>Broad theological spectrum:</strong> Includes Anglo-Catholic, Evangelical, and Liberal traditions<a href="https://en.wikipedia.org/wiki/Episcopal_Church_(United_States)#Theology" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[142]</a><br>
      • <strong>Social justice:</strong> Strong emphasis on social issues and inclusion<a href="https://www.episcopalchurch.org/what-we-believe/social-justice-advocacy/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[143]</a><br>
      • <strong>Ordination of women:</strong> Ordains women as priests and bishops<a href="https://www.episcopalchurch.org/who-we-are/structure/women-in-the-church/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[144]</a><br>
      • <strong>LGBTQ+ inclusion:</strong> Generally affirming of LGBTQ+ individuals and clergy<a href="https://www.episcopalchurch.org/what-we-believe/lgbtq/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[145]</a><br><br>
      <strong>Distinctive Features:</strong> Beautiful liturgy, cathedral tradition, theological education emphasis<a href="https://www.episcopalchurch.org/what-we-believe/worship/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[146]</a>`,
    },
    {
      id: "quakers",
      title: "Quakers (Religious Society of Friends)",
      tags: ["other", "modern", "pacifist"],
      content: `<strong>Founded:</strong> c. 1650s (George Fox, England)<a href="https://en.wikipedia.org/wiki/Quakers" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[147]</a><br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>Inner Light:</strong> Emphasize the "inner light" of God in every person<a href="https://www.quaker.org.uk/about-quakers/our-faith/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[148]</a><br>
      • <strong>Unprogrammed Worship:</strong> Often meet in silent worship, waiting for the Holy Spirit to move members to speak<a href="https://en.wikipedia.org/wiki/Friends_General_Conference" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[149]</a><br>
      • <strong>No Sacraments:</strong> Traditionally do not practice physical sacraments like baptism or communion, seeing all of life as sacramental<a href="https://www.britannica.com/topic/Quaker" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[150]</a><br>
      • <strong>Peace Testimony:</strong> Historic commitment to pacifism and non-violence<a href="https://en.wikipedia.org/wiki/Peace_Testimony" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[151]</a><br>
      • <strong>Equality:</strong> Strong belief in the equality of all people, leading to advocacy for abolition, women's rights, etc.<a href="https://www.quaker.org.uk/about-quakers/our-values/equality/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[152]</a><br><br>
      <strong>Distinctive Features:</strong> Testimonies (Simplicity, Peace, Integrity, Community, Equality), decision-making by "sense of the meeting" (seeking unity)<a href="https://www.pym.org/quakerism/quaker-testimonies/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[153]</a>`,
    },
    {
      id: "seventhDayAdventist",
      title: "Seventh-day Adventist",
      tags: ["other", "modern", "restorationist"],
      content: `<strong>Founded:</strong> 1863 (USA, from Millerite movement)<a href="https://en.wikipedia.org/wiki/Seventh-day_Adventist_Church" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[154]</a><br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>Seventh-day Sabbath:</strong> Observance of the Sabbath on Saturday<a href="https://www.adventist.org/sabbath/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[155]</a><br>
      • <strong>Second Coming:</strong> Emphasis on the imminent literal return (Advent) of Christ<a href="https://www.adventist.org/second-coming/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[156]</a><br>
      • <strong>Health Message:</strong> Focus on health and wellness, often including vegetarianism and abstinence from alcohol/tobacco<a href="https://www.adventist.org/health/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[157]</a><br>
      • <strong>Ellen G. White:</strong> Regard her writings as an authoritative source of truth, though subordinate to the Bible<a href="https://www.askanadventistfriend.com/ellen-g-white/spirit-of-prophecy/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[158]</a><br>
      • <strong>State of the Dead:</strong> Belief in "soul sleep" (unconsciousness) between death and resurrection<a href="https://www.adventist.org/death-and-resurrection/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[159]</a><br><br>
      <strong>Distinctive Features:</strong> Large worldwide missions, hospital, and education systems<a href="https://adventist.news/news/seventh-day-adventist-church-reports-record-growth-in-2023" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[160]</a>; belief in an "investigative judgment" that began in 1844<a href="https://www.adventist.org/christs-ministry-in-the-heavenly-sanctuary/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[161]</a>`,
    },
    {
      id: "messianicJudaism",
      title: "Messianic Judaism",
      tags: ["other", "modern", "jewish"],
      content: `<strong>Founded:</strong> Modern movement, 1960s-1970s<a href="https://en.wikipedia.org/wiki/Messianic_Judaism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[162]</a><br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>Jesus as Messiah:</strong> Jewish believers who accept Jesus (Yeshua) as the promised Messiah of Israel<a href="https://www.britannica.com/topic/messianism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[163]</a><br>
      • <strong>Jewish Identity:</strong> Maintain Jewish identity, customs, and holidays (e.g., Passover, Yom Kippur)<a href="https://www.saet.ac.uk/Christianity/MessianicJewishTheology" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[164]</a><br>
      • <strong>Torah Observance:</strong> Varies, but many observe aspects of the Torah as a sign of cultural identity and obedience, not for salvation<a href="https://www.myjewishlearning.com/article/messianic-judaism/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[165]</a><br>
      • <strong>Trinity:</strong> Most (but not all) Messianic Jews adhere to the doctrine of the Trinity<a href="https://en.wikipedia.org/wiki/Messianic_Judaism#Theology" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[166]</a><br><br>
      <strong>Distinctive Features:</strong> Synagogue-style worship, use of Hebrew, bridging Jewish and Christian theology<a href="https://mjaa.org/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[167]</a>. Not recognized as Judaism by mainstream Jewish movements<a href="https://www.oneforisrael.org/messianic-judaism-messianic-jews/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[168]</a>.`,
    },
    {
      id: "nonDenominational",
      title: "Non-denominational / Other Movements",
      tags: ["other", "modern", "independent"],
      content: `<strong>Founded:</strong> 20th century onwards (especially in the USA)<a href="https://en.wikipedia.org/wiki/Nondenominational_Christianity" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[169]</a><br><br>
      <strong>Key Beliefs (General):</strong><br>
      • <strong>No Denominational Ties:</strong> Reject formal ties to historic denominations and their hierarchies<a href="https://graceplano.church/non-denominational-church-explained" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[170]</a><br>
      • <strong>Local Church Autonomy:</strong> Emphasize independence and self-governance<a href="https://www.gotquestions.org/non-denominational-church.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[171]</a><br>
      • <strong>Bible-Centered:</strong> Strongly Bible-focused, usually with an evangelical theology (similar to Baptist or Pentecostal beliefs)<a href="https://www.pewresearch.org/religion/religious-landscape-study/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[172]</a><br>
      • <strong>Contemporary Worship:</strong> Often characterized by modern music and informal service styles<a href="https://en.wikipedia.org/wiki/Contemporary_worship" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[173]</a><br><br>

      <strong>Related Movements:</strong><br>
      • <strong>House Church Movement:</strong> Focuses on simple, small-group meetings in homes, emphasizing community and mimicking the New Testament model<a href="https://en.wikipedia.org/wiki/House_church" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[174]</a>.<br>
      • <strong>Emerging Church:</strong> A postmodern movement questioning traditional evangelical structures and embracing social justice and deconstructed faith<a href="https://en.wikipedia.org/wiki/Emerging_church" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[175]</a>.<br><br>

      <strong>A Note on Orthodox Classification:</strong><br>
      Some movements, while claiming Christian identity, are considered outside orthodox Christianity by Catholic, Orthodox, and Protestant groups due to fundamental doctrinal differences. This includes groups like **Latter-day Saints (Mormons)**<a href="https://en.wikipedia.org/wiki/Latter_Day_Saint_movement" target="_blank" style_position: "relative", "z-index": 10, "color": "#007acc", "text-decoration": "none", "font-size": "0.9em", "vertical-align": "super", "top": "-0.5em">[176]</a> and **Jehovah's Witnesses** (which have unique restorationist claims and non-Trinitarian theology)<a href="https://en.wikipedia.org/wiki/Jehovah%27s_Witnesses" target="_blank" style_position: "relative", "z-index": 10, "color": "#007acc", "text-decoration": "none", "font-size": "0.9em", "vertical-align": "super", "top": "-0.5em">[177]</a>, and **Unitarian Universalists**, who have Christian roots but now embrace a pluralistic, non-creedal faith that rejects the Trinity<a href="https://en.wikipedia.org/wiki/Unitarian_Universalism" target="_blank" style_position: "relative", "z-index": 10, "color": "#007acc", "text-decoration": "none", "font-size": "0.9em", "vertical-align": "super", "top": "-0.5em">[178]</a>.`,
    },
  ],
  verses: [],
  sources: [
    // Universal / Original Catholic Church (Sources 1-11)
    "1. [Wikipedia] History of Christianity. 'Comprehensive timeline of Christian development from apostolic era to modern times.' https://en.wikipedia.org/wiki/History_of_Christianity",
    "2. [Encyclopedia] Britannica - Apostolic Succession. 'Doctrine of apostolic succession.' https://www.britannica.com/topic/apostolic-succession",
    "3. [Religious Encyclopedia] New Advent - Sacraments. 'Catholic perspective on the sacraments.' https://www.newadvent.org/cathen/13295a.htm",
    "4. [Academic] World History Encyclopedia - Christianity. 'Academic overview of Christian historical development.' https://www.worldhistory.org/Christianity/",
    "5. [Wikipedia] Episcopal Polity. 'Overview of church governance by bishops.' https://en.wikipedia.org/wiki/Episcopal_polity",
    "6. [Wikipedia] Pentarchy. 'System of five ancient patriarchates.' https://en.wikipedia.org/wiki/Pentarchy",
    "7. [Wikipedia] First seven ecumenical councils. 'The seven councils recognized by East and West.' https://en.wikipedia.org/wiki/First_seven_ecumenical_councils",
    "8. [Wikipedia] Persecution of Christians in the Roman Empire. 'Account of early Christian persecution.' https://en.wikipedia.org/wiki/Persecution_of_Christians_in_the_Roman_Empire",
    "9. [Wikipedia] Early Christianity. 'Development of Christianity from the 1st to 4th centuries.' https://en.wikipedia.org/wiki/Early_Christianity",
    "10. [Wikipedia] History of the papacy. 'Historical development of the role of the Pope.' https://en.wikipedia.org/wiki/History_of_the_papacy",
    "11. [Wikipedia] Christianity in the 1st century. 'Apostolic era and house churches.' https://en.wikipedia.org/wiki/Christianity_in_the_1st_century",

    // Roman Catholic Church (Sources 12-23)
    "12. [Encyclopedia] Britannica - Roman Catholicism. 'Academic overview of Roman Catholic doctrine, history, and organization.' https://www.britannica.com/topic/Roman-Catholicism",
    "13. [Wikipedia] Papal supremacy. 'Doctrine of the Pope's authority.' https://en.wikipedia.org/wiki/Papal_supremacy",
    "14. [Official Church] Catechism of the Catholic Church. 'The Seven Sacraments.' https://www.vatican.va/archive/ENG0015/__P3E.HTM",
    "15. [Wikipedia] Magisterium. 'The teaching authority of the Catholic Church.' https://en.wikipedia.org/wiki/Magisterium",
    "16. [Wikipedia] Salvation in Catholicism. 'Doctrine of faith and works.' https://en.wikipedia.org/wiki/Salvation_in_Catholicism",
    "17. [Religious Encyclopedia] New Advent - Intercession of Saints. 'Catholic doctrine on the intercession of saints.' https://www.newadvent.org/cathen/08070a.htm",
    "18. [Encyclopedia] Britannica - Transubstantiation. 'Definition and explanation of transubstantiation.' https://www.britannica.com/topic/transubstantiation",
    "19. [Religious Encyclopedia] New Advent - Purgatory. 'Catholic doctrine of purgatory.' https://www.newadvent.org/cathen/12575a.htm",
    "20. [Wikipedia] Clerical celibacy in the Catholic Church. 'History and rules of clerical celibacy.' https://en.wikipedia.org/wiki/Clerical_celibacy_in_the_Catholic_Church",
    "21. [Wikipedia] History of the Catholic Church. 'Detailed history of the Catholic Church.' https://en.wikipedia.org/wiki/History_of_the_Catholic_Church",
    "22. [Wikipedia] East-West Schism. 'The 1054 split.' https://en.wikipedia.org/wiki/East%E2%80%93West_Schism",
    "23. [Official Church] Catechism of the Catholic Church. 'Official summary of all Catholic doctrine.' https://www.vatican.va/archive/ENG0015/_INDEX.HTM",

    // Oriental Orthodox (Sources 24-34)
    "24. [Wikipedia] Oriental Orthodox Churches. 'The churches that rejected the Council of Chalcedon.' https://en.wikipedia.org/wiki/Oriental_Orthodox_Churches",
    "25. [Wikipedia] Miaphysitism. 'The Christological doctrine of the Oriental Orthodox.' https://en.wikipedia.org/wiki/Miaphysitism",
    "26. [Encyclopedia] Britannica - Oriental Orthodox church. 'Overview of the tradition.' https://www.britannica.com/topic/Oriental-Orthodox-church",
    "27. [Wikipedia] Coptic Orthodox Church of Alexandria. 'History and traditions.' https://en.wikipedia.org/wiki/Coptic_Orthodox_Church_of_Alexandria",
    "28. [Official Church] Coptic Orthodox Diocese of the Southern US. 'History of the Coptic Church.' https://suscopts.org/coptic-orthodox/church/history/",
    "29. [Official Church] Eritrean Orthodox Tewahdo Church. 'The Sacraments.' https://english.eritreantewahdo.org/introduction-to-the-seven-sacrements/",
    "30. [Religious Organization] World Council of Churches. 'Ethiopian Orthodox Tewahedo Church.' https://www.oikoumene.org/member-churches/ethiopian-orthodox-tewahedo-church",
    "31. [Religious Organization] World Council of Churches. 'Coptic Orthodox Church.' https://www.oikoumene.org/member-churches/coptic-orthodox-church",
    "32. [Official Church] Armenian Church Eastern Diocese. 'Mother See of Holy Etchmiadzin.' https://armenianchurch.us/etchmiadzin/",
    "33. [Religious Organization] World Council of Churches. 'Syrian Orthodox Patriarchate of Antioch and All the East.' https://www.oikoumene.org/member-churches/syrian-orthodox-patriarchate-of-antioch-and-all-the-east",
    "34. [Wikipedia] Liturgy of Saint James. 'An ancient Christian liturgy used by Oriental Orthodox.' https://en.wikipedia.org/wiki/Liturgy_of_Saint_James",

    // Church of the East (Sources 35-42)
    "35. [Wikipedia] Church of the East. 'Nestorian Christianity and historical missions to Asia.' https://en.wikipedia.org/wiki/Church_of_the_East",
    "36. [Wikipedia] Nestorianism. 'The Dyophysite Christology associated with the Church of the East.' https://en.wikipedia.org/wiki/Nestorianism",
    "37. [Academic Article] ResearchGate. 'The Church of the East: A Concise History.' https://www.researchgate.net/publication/293179513_The_Church_of_the_East_A_Concise_History",
    "38. [Academic] World History Encyclopedia - Assyrian Church of the East. 'Independent development.' https://www.worldhistory.org/Assyrian_Church_of_the_East/",
    "39. [Wikipedia] Syriac Christianity. 'The Syriac language and liturgical tradition.' https://en.wikipedia.org/wiki/Syriac_Christianity",
    "40. [Wikipedia] Clerical marriage. 'Practice of married clergy across denominations.' https://en.wikipedia.org/wiki/Clerical_marriage",
    "41. [Wikipedia] Assyrian Church of the East. 'The modern remnant of the Church of the East.' https://en.wikipedia.org/wiki/Assyrian_Church_of_the_East",
    "42. [Academic/Public] PBS Frontline - From Jesus to Christ. 'Map and history of its expansion.' https://www.pbs.org/wgbh/pages/frontline/shows/religion/",

    // Eastern Orthodox (Sources 43-52)
    "43. [Encyclopedia] Britannica - Schism of 1054. 'The Great Schism.' https://www.britannica.com/event/Schism-of-1054",
    "44. [Encyclopedia] Britannica - Eastern Orthodoxy. 'Structure and organization.' https://www.britannica.com/topic/Eastern-Orthodoxy",
    "45. [Official Church] Orthodox Church in America (OCA). 'The Sacraments.' https://www.oca.org/orthodoxy/the-orthodox-faith/worship/the-sacraments",
    "46. [Official Church] Saint Katherine Greek Orthodox Church. 'Scripture and Tradition.' https://stkatherineaz.org/holy-scripture-holy-tradition",
    "47. [Wikipedia] Icon. 'Theological significance and use of icons.' https://en.wikipedia.org/wiki/Icon",
    "48. [Religious Organization] Orthodox Council. 'The Ecumenical Patriarchate.' https://www.orthodoxcouncil.org/ecumenical-patriarchate.html",
    "49. [Wikipedia] Orthodox Church in America. 'Clergy.' https://en.wikipedia.org/wiki/Orthodox_Church_in_America",
    "50. [Wikipedia] Theosis (Eastern Orthodox theology). 'Doctrine of deification.' https://en.wikipedia.org/wiki/Theosis_(Eastern_Orthodox_theology)",
    "51. [Religious Organization] World Council of Churches. 'Eastern Orthodox Churches.' https://www.oikoumene.org/church-families/orthodox-churches-eastern",
    "52. [Official Church] OCA. 'Worship.' https://www.oca.org/orthodoxy/the-orthodox-faith/worship",

    // Lutheran (Sources 53-64)
    "53. [Wikipedia] Martin Luther. 'Life and work of Martin Luther.' https://en.wikipedia.org/wiki/Martin_Luther",
    "54. [Encyclopedia] Britannica - Justification. 'Theological doctrine of justification by faith.' https://www.britannica.com/topic/justification-Christianity",
    "55. [Wikipedia] Sola scriptura. 'Doctrine of Scripture alone.' https://en.wikipedia.org/wiki/Sola_scriptura",
    "56. [Wikipedia] Sacramental union. 'Lutheran doctrine of Christ's presence in the Eucharist.' https://en.wikipedia.org/wiki/Sacramental_union",
    "57. [Encyclopedia] Wikipedia. 'Lutheran Sacraments.' https://en.wikipedia.org/wiki/Lutheran_sacraments",
    "58. [Wikipedia] Lutheran worship. 'Overview of Lutheran liturgy.' https://en.wikipedia.org/wiki/Lutheran_worship",
    "59. [Wikipedia] Sola gratia. 'Doctrine of grace alone.' https://en.wikipedia.org/wiki/Sola_gratia",
    "60. [Wikipedia] Priesthood of all believers. 'Doctrine of all Christians as priests.' https://en.wikipedia.org/wiki/Priesthood_of_all_believers",
    "61. [Wikipedia] Book of Concord. 'The Lutheran confessions.' https://en.wikipedia.org/wiki/Book_of_Concord",
    "62. [Official Church] St. Luke's Lutheran Church (ELCA). 'Baptism.' http://stlukesbloomington.org/uploads/5/9/6/2/59621829/baptism-handout.pdf",
    "63. [Religious Organization] Lutheran World Federation. 'Homepage.' https://www.lutheranworld.org/",
    "64. [Academic] World History Encyclopedia - Protestant Reformation. 'Overview of Reformation movements.' https://www.worldhistory.org/Protestant_Reformation",

    // Reformed/Presbyterian (Sources 65-75)
    "65. [Wikipedia] John Calvin. 'Life and theology of John Calvin.' https://en.wikipedia.org/wiki/John_Calvin",
    "66. [Wikipedia] Sovereignty of God. 'Theological doctrine of God's sovereignty.' https://en.wikipedia.org/wiki/Sovereignty_of_God",
    "67. [Encyclopedia] Britannica - Predestination. 'Doctrine of predestination.' https://www.britannica.com/topic/predestination",
    "68. [Official Agency] Presbyterian Mission Agency. 'Church Government.' https://www.presbyterianmission.org/what-we-believe/church-government/",
    "69. [Wikipedia] Reformed worship. 'Worship principles in the Reformed tradition.' https://en.wikipedia.org/wiki/Reformed_worship",
    "70. [Wikipedia] Covenant theology. 'Reformed theological framework.' https://en.wikipedia.org/wiki/Covenant_theology",
    "71. [Wikipedia] Westminster Confession of Faith. 'Key Reformed confession.' https://en.wikipedia.org/wiki/Westminster_Confession_of_Faith",
    "72. [Wikipedia] Total depravity. 'Calvinist doctrine of sin.' https://en.wikipedia.org/wiki/Total_depravity",
    "73. [Wikipedia] Presbyterian polity. 'Church governance by elders.' https://en.wikipedia.org/wiki/Presbyterian_polity",
    "74. [Official Church] Presbyterian Church (USA). 'Homepage.' https://www.pcusa.org/",
    "75. [Religious Organization] World Communion of Reformed Churches. 'Homepage.' https://wcrc.eu",

    // Anabaptist (Sources 76-86)
    "76. [Wikipedia] Anabaptism. 'Radical Reformation, adult baptism, and pacifist traditions.' https://en.wikipedia.org/wiki/Anabaptism",
    "77. [Encyclopedia] GAMEO. 'Global Anabaptist Mennonite Encyclopedia Online.' https://gameo.org",
    "78. [Wikipedia] Peace churches. 'Anabaptist commitment to pacifism.' https://en.wikipedia.org/wiki/Peace_churches",
    "79. [Religious Organization] Mennonite World Conference. 'Shared Convictions of Anabaptists.' https://mwc-cmm.org/en/prayer/shared-conviction-7/",
    "80. [Wikipedia] Separation of church and state. 'Anabaptist position.' https://en.wikipedia.org/wiki/Separation_of_church_and_state",
    "81. [Religious Encyclopedia] Global Anabaptist Mennonite Encyclopedia Online (GAMEO). 'Ban.' https://gameo.org/index.php?title=Ban",
    "82. [Religious Encyclopedia] GAMEO. 'Bible.' https://gameo.org/index.php?title=Bible",
    "83. [Wikipedia] Believers' church. 'Concept of voluntary faith.' https://en.wikipedia.org/wiki/Believers%27_Church",
    "84. [Religious Organization] Mennonite World Conference. 'Homepage.' https://mwc-cmm.org/",
    "85. [Religious Encyclopedia] GAMEO. 'Anabaptism.' https://gameo.org/index.php?title=Anabaptism",
    "86. [Academic Institute] Christian History Institute. 'Anabaptists: The Radical Reformation.' https://www.christianhistoryinstitute.org/magazine/issue/anabaptists-radical-reformation",

    // Anglican (Sources 87-97)
    "87. [Wikipedia] English Reformation. 'Henry VIII's break from Rome.' https://en.wikipedia.org/wiki/English_Reformation",
    "88. [Encyclopedia] Britannica - Anglicanism. 'The 'via media'.' https://www.britannica.com/topic/Anglicanism",
    "89. [Official Church] Church of England. 'What We Believe.' https://www.churchofengland.org/our-faith/what-we-believe",
    "90. [Wikipedia] Book of Common Prayer. 'The foundation of Anglican liturgy.' https://en.wikipedia.org/wiki/Book_of_Common_Prayer",
    "91. [Wikipedia] Anglicanism - Doctrine. 'Scripture, tradition, and reason.' https://en.wikipedia.org/wiki/Anglicanism#Doctrine",
    "92. [Wikipedia] Churchmanship. 'High, Low, and Broad church.' https://en.wikipedia.org/wiki/Churchmanship",
    "93. [Wikipedia] Supreme Governor of the Church of England. 'Monarch's role.' https://en.wikipedia.org/wiki/Supreme_Governor_of_the_Church_of_England",
    "94. [Official Church] Church of England. 'Vocations.' https://www.churchofengland.org/life-events/vocations",
    "95. [Official Church] Episcopal Church. 'Homepage of the US branch.' https://www.episcopalchurch.org/",
    "96. [Religious Organization] Anglican Communion. 'Homepage.' https://www.anglicancommunion.org/",
    "97. [Official Church] Church of England. 'Homepage.' https://www.churchofengland.org/",

    // Baptist (Sources 98-107)
    "98. [Wikipedia] Baptists. 'Origins with John Smyth.' https://en.wikipedia.org/wiki/Baptists",
    "99. [Wikipedia] Believer's baptism. 'Definition.' https://en.wikipedia.org/wiki/Believer%27s_baptism",
    "100. [Wikipedia] Congregationalist polity. 'Local church autonomy.' https://en.wikipedia.org/wiki/Congregationalist_polity",
    "101. [Encyclopedia] Wikipedia. 'Baptist World Alliance.' https://en.wikipedia.org/wiki/Baptist_World_Alliance",
    "102. [Official Church] Southern Baptist Church (Boston). 'What We Believe.' https://www.sbcboston.org/our-beliefs",
    "103. [Advocacy Group] Baptist Joint Committee for Religious Liberty. 'What is Religious Liberty?' https://bjconline.org/what-is-religious-liberty/",
    "104. [Encyclopedia] Britannica. 'Baptist World Alliance.' https://www.britannica.com/topic/Baptist-World-Alliance",
    "105. [Encyclopedia] Britannica - Baptist. 'Congregational polity.' https://www.britannica.com/topic/Baptist",
    "106. [Religious Organization] Baptist World Alliance. 'Member Bodies.' https://baptistworld.org/members/",
    "107. [Wikipedia] Roger Williams (theologian). 'Early Baptist advocate for religious freedom.' https://en.wikipedia.org/wiki/Roger_Williams_(theologian)",

    // Methodist (Sources 108-118)
    "108. [Wikipedia] John Wesley. 'Founder of the Methodist movement.' https://en.wikipedia.org/wiki/John_Wesley",
    "109. [Official Church] McCabe United Methodist Church. 'Glossary: Prevenient Grace.' https://www.mccabechurch.com/wp-content/uploads/2019/cache/10-15-17.pdf",
    "110. [Wikipedia] Arminianism. 'Theological framework of Methodism.' https://en.wikipedia.org/wiki/Arminianism",
    "111. [Official Church] UMC. 'Our Wesleyan Heritage.' https://www.umc.org/en/content/our-wesleyan-heritage",
    "112. [Wikipedia] Christian perfection. 'Wesleyan doctrine of sanctification.' https://en.wikipedia.org/wiki/Christian_perfection",
    "113. [Wikipedia] Means of grace. 'Wesleyan concept.' https://en.wikipedia.org/wiki/Means_of_grace",
    "114. [Wikipedia] Wesleyan Quadrilateral. 'Scripture, tradition, reason, experience.' https://en.wikipedia.org/wiki/Wesleyan_Quadrilateral",
    "115. [Official Church] UMC Justice. 'Social Principles.' https://www.umcjustice.org/documents/124",
    "116. [Official Church] UMC. 'History.' https://www.umc.org/en/who-we-are/history",
    "117. [Official Church] UMC. 'Homepage.' https://www.umc.org/",
    "118. [Wikipedia] Methodism. 'Overview of Methodist denominations.' https://en.wikipedia.org/wiki/Methodism",

    // Pentecostal (Sources 119-129)
    "119. [Wikipedia] Azusa Street Revival. 'Origin of the Pentecostal movement.' https://en.wikipedia.org/wiki/Azusa_Street_Revival",
    "120. [Encyclopedia] Wikipedia. 'Assemblies of God Statement of Fundamental Truths.' https://en.wikipedia.org/wiki/Assemblies_of_God_Statement_of_Fundamental_Truths",
    "121. [Wikipedia] Gifts of the Spirit. 'Nine gifts listed in 1 Corinthians 12.' https://en.wikipedia.org/wiki/Gifts_of_the_Spirit",
    "122. [Official Church] Assemblies of God. 'Position Papers (Healing/Holy Spirit).' https://ag.org/Beliefs/Position-Papers",
    "123. [Wikipedia] Prosperity theology. 'Common (but not universal) belief.' https://en.wikipedia.org/wiki/Prosperity_theology",
    "124. [Official Church] A/G. 'The Blessed Hope.' https://ag.org/Beliefs/Statement-of-Fundamental-Truths/The-Blessed-Hope",
    "125. [Research Center] Pew Research Center. 'Pentecostal Family.' https://www.pewresearch.org/religion/religious-landscape-study/religious-family/pentecostal-family-evangelical-trad/",
    "126. [Official Church] A/G. 'The Final Judgment.' https://ag.org/Beliefs/Statement-of-Fundamental-Truths#16",
    "127. [Wikipedia] Pentecostalism. 'Global growth.' https://en.wikipedia.org/wiki/Pentecostalism",
    "128. [Official Church] A/G. 'Homepage.' https://ag.org/",
    "129. [Research Center] Pew Research Center. 'Global Christianity - Traditions.' https://www.pewresearch.org/religion/2011/12/19/global-christianity-traditions/",

    // Restorationist (Sources 130-136)
    "130. [Wikipedia] Restoration Movement. 'Stone-Campbell movement and primitive Christianity.' https://en.wikipedia.org/wiki/Restoration_Movement",
    "131. [Research Center] The ARDA. 'Restoration Movement Timeline.' https://www.thearda.com/us-religion/history/timelines/entry?etype=3&eid=32",
    "132. [Academic Encyclopedia] New Georgia Encyclopedia. 'Restoration Movement History.' https://www.georgiaencyclopedia.org/articles/arts-culture/restoration-movement/",
    "133. [Wikipedia] Churches of Christ. 'Adherence to New Testament patterns.' https://en.wikipedia.org/wiki/Churches_of_Christ",
    "134. [Encyclopedia] Wikipedia. 'World Convention of Churches of Christ.' https://en.wikipedia.org/wiki/World_Convention_of_Churches_of_Christ",
    "135. [Wikipedia] Stone-Campbell Movement. 'Major groups.' https://en.wikipedia.org/wiki/Stone-Campbell_Movement",
    "136. [Academic Resource] Cambridge University Press. 'The Stone-Campbell Movement.' https://www.cambridge.org/core/books/cambridge-companion-to-american-protestantism/stonecampbell-movement/1F4959CCE0BD59A2F2A00E4B2D22D2C6",

    // Episcopal (Sources 137-146)
    "137. [Official Church] The Episcopal Church. 'Timeline of History.' https://www.episcopalchurch.org/organizations-affiliations/history-episcopal-church/timeline-2/",
    "138. [Official Church] The Episcopal Church. 'What We Believe.' https://www.episcopalchurch.org/what-we-believe/",
    "139. [Official Church] Trinity Episcopal Cathedral. 'Sacraments of the Episcopal Faith.' https://trinitycathedral.com/about/sacraments-of-the-episcopal-faith/",
    "140. [Official Church] Episcopal Church. 'Bishops.' https://www.episcopalchurch.org/who-we-are/structure/bishops/",
    "141. [Official Church] Episcopal Church. 'Book of Common Prayer.' https://www.episcopalchurch.org/what-we-believe/book-common-prayer/",
    "142. [Wikipedia] Episcopal Church (United States) - Theology. 'Theological spectrum.' https://en.wikipedia.org/wiki/Episcopal_Church_(United_States)#Theology",
    "143. [Official Church] Episcopal Church. 'Social Justice & Advocacy.' https://www.episcopalchurch.org/what-we-believe/social-justice-advocacy/",
    "144. [Official Church] Episcopal Church. 'Women in the Church.' https://www.episcopalchurch.org/who-we-are/structure/women-in-the-church/",
    "145. [Official Church] Episcopal Church. 'LGBTQ.' https://www.episcopalchurch.org/what-we-believe/lgbtq/",
    "146. [Official Church] Episcopal Church. 'Worship.' https://www.episcopalchurch.org/what-we-believe/worship/",

    // Quakers (Religious Society of Friends) (Sources 147-153)
    "147. [Wikipedia] Quakers. 'Founding by George Fox.' https://en.wikipedia.org/wiki/Quakers",
    "148. [Religious Organization] Quakers in Britain. 'Our faith.' https://www.quaker.org.uk/about-quakers/our-faith/",
    "149. [Wikipedia] Friends General Conference. 'Unprogrammed Worship.' https://en.wikipedia.org/wiki/Friends_General_Conference",
    "150. [Encyclopedia] Britannica - Quaker. 'Sacraments.' https://www.britannica.com/topic/Quaker",
    "151. [Wikipedia] Peace Testimony. 'Quaker commitment to non-violence.' https://en.wikipedia.org/wiki/Peace_Testimony",
    "152. [Religious Organization] Quakers in Britain. 'Equality.' https://www.quaker.org.uk/about-quakers/our-values/equality/",
    "153. [Religious Organization] Philadelphia Yearly Meeting. 'The Testimonies.' https://www.pym.org/quakerism/quaker-testimonies/",

    // Seventh-day Adventist (Sources 154-161)
    "154. [Wikipedia] Seventh-day Adventist Church. 'Founding and history.' https://en.wikipedia.org/wiki/Seventh-day_Adventist_Church",
    "155. [Official Church] Seventh-day Adventist (SDA). 'The Sabbath.' https://www.adventist.org/sabbath/",
    "156. [Official Church] SDA. 'Second Coming of Christ.' https://www.adventist.org/second-coming/",
    "157. [Official Church] SDA. 'Health.' https://www.adventist.org/health/",
    "158. [Religious Resource] Ask an Adventist Friend (NAD). 'What is the Spirit of Prophecy?' https://www.askanadventistfriend.com/ellen-g-white/spirit-of-prophecy/",
    "159. [Official Church] SDA. 'Death and Resurrection.' https://www.adventist.org/death-and-resurrection/",
    "160. [News Service] Adventist News Network. '2023 Global Church Statistics.' https://adventist.news/news/seventh-day-adventist-church-reports-record-growth-in-2023",
    "161. [Official Church] SDA. 'Christ's Ministry in the Heavenly Sanctuary.' https://www.adventist.org/christs-ministry-in-the-heavenly-sanctuary/",

    // Messianic Judaism (Sources 162-168)
    "162. [Wikipedia] Messianic Judaism. 'Modern movement.' https://en.wikipedia.org/wiki/Messianic_Judaism",
    "163. [Encyclopedia] Britannica - Messianism. 'Belief in Jesus as Messiah.' https://www.britannica.com/topic/messianism",
    "164. [Academic Encyclopedia] St Andrews Encyclopaedia of Theology. 'Messianic Jewish Theology.' https://www.saet.ac.uk/Christianity/MessianicJewishTheology",
    "165. [Religious Education] My Jewish Learning. 'Messianic Judaism Overview.' https://www.myjewishlearning.com/article/messianic-judaism/",
    "166. [Wikipedia] Messianic Judaism - Theology. 'Adherence to the Trinity.' https://en.wikipedia.org/wiki/Messianic_Judaism#Theology",
    "167. [Religious Organization] Messianic Jewish Alliance of America. 'About MJAA.' https://mjaa.org/",
    "168. [Religious Ministry] ONE FOR ISRAEL. 'Messianic Judaism & Messianic Jews.' https://www.oneforisrael.org/messianic-judaism-messianic-jews/",

    // Non-denominational / Other Movements (Sources 169-178)
    "169. [Wikipedia] Nondenominational Christianity. '20th-century movement.' https://en.wikipedia.org/wiki/Nondenominational_Christianity",
    "170. [Religious Site] Grace Plano. 'What Is a Nondenominational Church?' https://graceplano.church/non-denominational-church-explained",
    "171. [Religious Site] GotQuestions.org. 'What are nondenominational churches?' https://www.gotquestions.org/non-denominational-church.html",
    "172. [Research Center] Pew Research Center. 'Religious Landscape Study.' https://www.pewresearch.org/religion/religious-landscape-study/",
    "173. [Wikipedia] Contemporary worship. 'Worship style.' https://en.wikipedia.org/wiki/Contemporary_worship",
    "174. [Wikipedia] House church. 'Simple church movement.' https://en.wikipedia.org/wiki/House_church",
    "175. [Wikipedia] Emerging church. 'Postmodern movement.' https://en.wikipedia.org/wiki/Emerging_church",
    "176. [Wikipedia] Latter Day Saint movement. 'Overview.' https://en.wikipedia.org/wiki/Latter_Day_Saint_movement",
    "177. [Wikipedia] Jehovah's Witnesses. 'Overview.' https://en.wikipedia.org/wiki/Jehovah%27s_Witnesses",
    "178. [Wikipedia] Unitarian Universalism. 'Overview.' https://en.wikipedia.org/wiki/Unitarian_Universalism",
  ],
  lastUpdated: "08-11-2025",
};