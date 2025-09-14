import { BookOpen, Clock, Heart, ExternalLink, CheckCircle2, Users } from "lucide-react"

export const iconMap = {
  BookOpen,
  Clock,
  Heart,
  ExternalLink,
  CheckCircle2,
  Users,
} as const;

export const branchBeliefs = [
  { key: "churchAuthority", label: "Church Authority", description: "Do they believe in church authority?", icon: "ExternalLink" },
  { key: "tradition", label: "Tradition", description: "Do they emphasize tradition?", icon: "Clock" },
  { key: "sacraments", label: "Sacraments", description: "Do they practice sacraments?", icon: "CheckCircle2" },
  { key: "pope", label: "Papal Authority", description: "Do they recognize the Pope?", icon: "Heart" },
  { key: "priesthood", label: "Priesthood of All Believers", description: "Do they believe all Christians are priests?", icon: "Users" },
]

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
  protestant: {
    churchAuthority: false,
    tradition: false,
    sacraments: true,
    pope: false,
    priesthood: true,
  },
  orthodox: {
    churchAuthority: true,
    tradition: true,
    sacraments: true,
    pope: false,
    priesthood: false,
  },
  other: {
    churchAuthority: false,
    tradition: false,
    sacraments: false,
    pope: false,
    priesthood: true,
  },
  Oorthodox: {
    churchAuthority: true,
    tradition: true,
    sacraments: true,
    pope: false,
    priesthood: false,
  },
  EastChurch: {
    churchAuthority: true,
    tradition: true,
    sacraments: true,
    pope: false,
    priesthood: false,
  },
  Eorthodox: {
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
}

// Timeline data for Christian branches
export const branchTimeline = [
  { id: "catholic", date: "1st c. AD", period: "Apostolic", color: "purple" },
  { id: "romanCatholic", date: "590 AD", period: "Imperial", color: "darkpurple" },
  { id: "Oorthodox", date: "451 AD", period: "Early Church", color: "blue" },
  { id: "EastChurch", date: "451 AD", period: "Early Church", color: "blue" },
  { id: "Eorthodox", date: "1054 AD", period: "Medieval", color: "green" },
  { id: "Lutheran", date: "1517 AD", period: "Reformation", color: "orange" },
  { id: "Reformed/Presbyterian", date: "1536 AD", period: "Reformation", color: "orange" },
  { id: "Anabaptist", date: "1525 AD", period: "Reformation", color: "orange" },
  { id: "Anglican", date: "1534 AD", period: "Reformation", color: "orange" },
  { id: "Baptist", date: "1609 AD", period: "Post-Reformation", color: "red" },
  { id: "Methodist", date: "1738 AD", period: "Revival", color: "yellow" },
  { id: "Pentecostal", date: "1901 AD", period: "Modern", color: "pink" },
  { id: "Restorationist", date: "1800s AD", period: "Modern", color: "pink" },
  { id: "Episcopal", date: "1789 AD", period: "Modern", color: "purple" },
]

import type { Topic } from './types'

export const branches: Topic = {
  id: "branches",
  title: "What are the different branches of Christianity? ",
  description: "What are the differences between each branch? Are any of them truer than others?",
  icon: "Church",
  color: "purple",
  tags: ["Branches", "Historical"],
  tldr: "Christianity has several main branches: the Early Universal/Catholic Church (1st-4th centuries), Roman Catholic (emphasizes papal supremacy and distinct from early Universal/Catholic church), Protestant (focuses on scripture alone), and Orthodox (preserves ancient liturgy). Each developed different beliefs about authority, tradition, and sacraments over time.",
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
      content: `<strong>Founded:</strong> 1st century (Apostolic era, established by Jesus and the Apostles)<a href="https://www.learnreligions.com/christianity-origins-and-history-700746" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[1]</a><a href="https://en.wikipedia.org/wiki/History_of_Christianity" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[7]</a><br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>Apostolic succession:</strong> Direct line of authority from the apostles<a href="https://www.learnreligions.com/christianity-origins-and-history-700746" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[1]</a><a href="https://en.wikipedia.org/wiki/Council_of_Nicaea" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[20]</a><br>
      • <strong>Seven sacraments:</strong> Baptism, Confirmation, Eucharist, Penance, Anointing, Holy Orders, Matrimony<a href="https://www.learnreligions.com/christianity-origins-and-history-700746" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[1]</a><br>
      • <strong>Scripture + Tradition:</strong> Both the Bible and apostolic tradition as sources of divine revelation<a href="https://en.wikipedia.org/wiki/History_of_Christianity" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[7]</a><a href="https://www.worldhistory.org/Christianity" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[49]</a><br>
      • <strong>Episcopal authority:</strong> Led by bishops but without singular papal supremacy<a href="https://en.wikipedia.org/wiki/First_Council_of_Constantinople" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[39]</a><a href="https://en.wikipedia.org/wiki/Iconoclasm" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[41]</a><br>
      • <strong>Unity in diversity:</strong> Multiple centers of authority (Rome, Antioch, Alexandria, Jerusalem, Constantinople)<a href="https://www.worldhistory.org/Christianity" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[49]</a><a href="https://en.wikipedia.org/wiki/Christianity_in_the_1st_century" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[50]</a><br>
      • <strong>Early church councils:</strong> Collective decision-making through ecumenical councils<a href="https://en.wikipedia.org/wiki/Council_of_Nicaea" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[20]</a><a href="https://en.wikipedia.org/wiki/Council_of_Chalcedon" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[21]</a><br>
      • <strong>Martyrdom and persecution:</strong> Sustained through Roman persecution until Constantine<a href="https://en.wikipedia.org/wiki/Constantine_the_Great_and_Christianity" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[51]</a><a href="https://en.wikipedia.org/wiki/Christianity_in_the_4th_century" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[52]</a><br><br>
      <strong>Historical Context:</strong> The original "catholic" (universal) church before major schisms<a href="https://www.worldhistory.org/Christianity" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[49]</a><a href="https://en.wikipedia.org/wiki/Christianity_in_the_1st_century" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[50]</a>. This represents Christianity as it existed in the first few centuries before the rise of papal supremacy<a href="https://en.wikipedia.org/wiki/History_of_Christianity" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[7]</a>.<br>
      <strong>Distinctive Features:</strong> House churches, bishop-led communities, emphasis on apostolic teaching and fellowship<a href="https://en.wikipedia.org/wiki/Christianity_in_the_1st_century" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[50]</a><a href="https://www.worldhistory.org/Christianity" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[49]</a>`
    },
    {
      id: "romanCatholic",
      title: "Roman Catholic Church",
      tags: ["catholic", "traditional", "papal"],
      content: `<strong>Founded:</strong> Gradual development from 4th-11th centuries (papal supremacy established)<a href="https://www.learnreligions.com/christianity-origins-and-history-700746" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[1]</a><a href="https://www.britannica.com/topic/Roman-Catholicism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[2]</a><br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>Papal supremacy:</strong> The Pope (Bishop of Rome) is the ultimate authority on earth for Christians<a href="https://www.britannica.com/topic/Roman-Catholicism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[2]</a><a href="https://www.vatican.va/content/vatican/en.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[5]</a><br>
      • <strong>Seven sacraments:</strong> Baptism, Confirmation, Eucharist, Penance, Anointing, Holy Orders, Matrimony<a href="https://www.britannica.com/topic/Roman-Catholicism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[2]</a><a href="https://www.newadvent.org/cathen" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[38]</a><br>
      • <strong>Scripture + Tradition + Magisterium:</strong> Bible, tradition, and church teaching authority<a href="https://www.britannica.com/topic/Roman-Catholicism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[2]</a><a href="https://www.newadvent.org/cathen" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[38]</a><br>
      • <strong>Faith + Works:</strong> Salvation requires both faith and good works<a href="https://www.britannica.com/topic/Roman-Catholicism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[2]</a><a href="https://en.wikipedia.org/wiki/Counter-Reformation" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[43]</a><br>
      • <strong>Saints and Mary:</strong> Veneration of saints and Mary as intercessors<a href="https://www.britannica.com/topic/Roman-Catholicism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[2]</a><a href="https://www.newadvent.org/cathen" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[38]</a><br>
      • <strong>Transubstantiation:</strong> Bread and wine literally become the body and blood of Christ<a href="https://www.britannica.com/topic/Roman-Catholicism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[2]</a><a href="https://www.newadvent.org/cathen" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[38]</a><br>
      • <strong>Purgatory:</strong> A state of purification after death before heaven<a href="https://www.britannica.com/topic/Roman-Catholicism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[2]</a><a href="https://www.newadvent.org/cathen" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[38]</a><br>
      • <strong>Celibate clergy:</strong> Priests and bishops must remain unmarried<a href="https://www.britannica.com/topic/Roman-Catholicism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[2]</a><a href="https://www.newadvent.org/cathen" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[38]</a><br><br>
      <strong>Historical Development:</strong> Evolved from the early Catholic church with increasing papal authority, especially after Constantine's conversion (313 AD)<a href="https://en.wikipedia.org/wiki/Constantine_the_Great_and_Christianity" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[51]</a> and the rise of the Holy Roman Empire<a href="https://en.wikipedia.org/wiki/Crusades" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[53]</a><a href="https://en.wikipedia.org/wiki/Inquisition" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[54]</a>.<br>
      <strong>Distinctive Practices:</strong> Mass, confession to priests, extensive liturgical calendar, Vatican authority, elaborate church hierarchy<a href="https://www.britannica.com/topic/Roman-Catholicism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[2]</a><a href="https://www.vatican.va/content/vatican/en.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[5]</a>`
    },
    {
      id: "Oorthodox",
      title: "Oriental Orthodox",
      tags: ["orthodox", "traditional"],
      content: `<strong>Founded:</strong> c. 451 AD (split at Council of Chalcedon)<a href="https://en.wikipedia.org/wiki/Council_of_Chalcedon" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[21]</a><a href="https://en.wikipedia.org/wiki/Oriental_Orthodox_Churches" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[22]</a><br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>Miaphysite Christology:</strong> Christ has one united divine-human nature (different from Catholic/Eastern Orthodox)<a href="https://en.wikipedia.org/wiki/Oriental_Orthodox_Churches" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[22]</a><a href="https://en.wikipedia.org/wiki/Council_of_Chalcedon" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[21]</a><br>
      • <strong>Regional emphasis:</strong> Strong connection to ethnic and national identity<a href="https://www.coptic.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[31]</a><a href="https://en.wikipedia.org/wiki/Armenian_Apostolic_Church" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[32]</a><br>
      • <strong>Ancient traditions:</strong> Preserves very early Christian practices<a href="https://www.coptic.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[31]</a><a href="https://en.wikipedia.org/wiki/Syriac_Orthodox_Church" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[33]</a><br>
      • <strong>No papal authority:</strong> Rejects Roman Catholic papal supremacy<a href="https://en.wikipedia.org/wiki/Oriental_Orthodox_Churches" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[22]</a><a href="https://en.wikipedia.org/wiki/East%E2%80%93West_Schism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[8]</a><br>
      • <strong>Seven sacraments:</strong> Similar to Catholic and Eastern Orthodox<a href="https://en.wikipedia.org/wiki/Oriental_Orthodox_Churches" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[22]</a><a href="https://www.ethiopianorthodox.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[34]</a><br><br>
      <strong>Major Churches:</strong> Ethiopian Orthodox<a href="https://www.ethiopianorthodox.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[34]</a>, Coptic Orthodox<a href="https://www.coptic.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[31]</a>, Armenian Orthodox<a href="https://en.wikipedia.org/wiki/Armenian_Apostolic_Church" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[32]</a>, Syriac Orthodox<a href="https://en.wikipedia.org/wiki/Syriac_Orthodox_Church" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[33]</a><br>
      <strong>Distinctive Practices:</strong> Unique liturgical traditions, ancient languages (Coptic, Ge'ez, Armenian), fasting periods<a href="https://www.coptic.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[31]</a><a href="https://www.ethiopianorthodox.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[34]</a>`
    },
    {
      id: "EastChurch",
      title: "Church of the East",
      tags: ["traditional"],
      content: `<strong>Founded:</strong> c. 451 AD (split at Council of Chalcedon)<a href="https://en.wikipedia.org/wiki/Council_of_Chalcedon" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[21]</a><a href="https://en.wikipedia.org/wiki/Church_of_the_East" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[23]</a><br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>Nestorian Christology:</strong> Emphasizes the distinct human and divine natures of Christ<a href="https://en.wikipedia.org/wiki/Church_of_the_East" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[23]</a><a href="https://en.wikipedia.org/wiki/Council_of_Chalcedon" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[21]</a><br>
      • <strong>Historical missions:</strong> Once spread from Iraq to China and India<a href="https://en.wikipedia.org/wiki/Church_of_the_East" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[23]</a><a href="https://en.wikipedia.org/wiki/History_of_Christianity" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[7]</a><br>
      • <strong>Independent development:</strong> Developed separately from Western and Byzantine Christianity<a href="https://en.wikipedia.org/wiki/Church_of_the_East" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[23]</a><a href="https://en.wikipedia.org/wiki/East%E2%80%93West_Schism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[8]</a><br>
      • <strong>Syriac tradition:</strong> Uses Syriac language and Eastern liturgies<a href="https://en.wikipedia.org/wiki/Church_of_the_East" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[23]</a><a href="https://en.wikipedia.org/wiki/Syriac_Orthodox_Church" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[33]</a><br>
      • <strong>Married clergy:</strong> Allows married priests and bishops<a href="https://en.wikipedia.org/wiki/Church_of_the_East" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[23]</a><a href="https://www.britannica.com/topic/Eastern-Orthodoxy" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[3]</a><br><br>
      <strong>Modern Remnants:</strong> Assyrian Church of the East, Ancient Church of the East<a href="https://en.wikipedia.org/wiki/Church_of_the_East" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[23]</a><br>
      <strong>Historical Note:</strong> Nearly extinct due to persecution, but historically very influential in Asia<a href="https://en.wikipedia.org/wiki/Church_of_the_East" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[23]</a><a href="https://en.wikipedia.org/wiki/History_of_Christianity" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[7]</a>`
    },
    {
      id: "Eorthodox",
      title: "Eastern Orthodox",
      tags: ["orthodox", "traditional"],
      content: `<strong>Founded:</strong> 1054 AD (Great Schism from Roman Catholicism)<a href="https://en.wikipedia.org/wiki/East%E2%80%93West_Schism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[8]</a><a href="https://en.wikipedia.org/wiki/Great_Schism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[42]</a><br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>National churches:</strong> Organized into autocephalous (independent) national churches<a href="https://www.britannica.com/topic/Eastern-Orthodoxy" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[3]</a><a href="https://www.patriarchate.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[6]</a><br>
      • <strong>Seven sacraments:</strong> Similar to Catholicism but different interpretations<a href="https://www.britannica.com/topic/Eastern-Orthodoxy" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[3]</a><a href="https://www.oca.org/orthodoxy/the-orthodox-faith" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[35]</a><br>
      • <strong>Strong tradition:</strong> Scripture and tradition together, but no single human authority<a href="https://www.britannica.com/topic/Eastern-Orthodoxy" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[3]</a><a href="https://en.wikipedia.org/wiki/East%E2%80%93West_Schism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[8]</a><br>
      • <strong>Icons:</strong> Veneration (not worship) of religious icons<a href="https://www.britannica.com/topic/Eastern-Orthodoxy" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[3]</a><a href="https://en.wikipedia.org/wiki/Iconoclasm" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[41]</a><br>
      • <strong>No papal supremacy:</strong> Rejects the Pope's universal authority<a href="https://en.wikipedia.org/wiki/East%E2%80%93West_Schism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[8]</a><a href="https://en.wikipedia.org/wiki/Great_Schism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[42]</a><br>
      • <strong>Married clergy:</strong> Priests can be married, but bishops must be celibate<a href="https://www.britannica.com/topic/Eastern-Orthodoxy" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[3]</a><a href="https://www.oca.org/orthodoxy/the-orthodox-faith" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[35]</a><br>
      • <strong>Theosis:</strong> Emphasis on becoming "partakers of the divine nature"<a href="https://www.britannica.com/topic/Eastern-Orthodoxy" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[3]</a><a href="https://www.worldhistory.org/Eastern_Orthodox_Church" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[56]</a><br><br>
      <strong>Major Churches:</strong> Greek, Russian, Serbian, Romanian, Bulgarian Orthodox<a href="https://www.britannica.com/topic/Eastern-Orthodoxy" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[3]</a><a href="https://www.patriarchate.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[6]</a><br>
      <strong>Distinctive Practices:</strong> Divine Liturgy, extensive fasting, iconostasis in churches<a href="https://www.britannica.com/topic/Eastern-Orthodoxy" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[3]</a><a href="https://www.oca.org/orthodoxy/the-orthodox-faith" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[35]</a>`
    },
    {
      id: "Lutheran",
      title: "Lutheran",
      tags: ["protestant", "reformation"],
      content: `<strong>Founded:</strong> c. 1517 AD (Martin Luther's Reformation)<a href="https://en.wikipedia.org/wiki/Protestant_Reformation" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[9]</a><a href="https://en.wikipedia.org/wiki/Martin_Luther" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[24]</a><br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>Justification by faith alone:</strong> Salvation by faith, not works (sola fide)<a href="https://en.wikipedia.org/wiki/Martin_Luther" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[24]</a><a href="https://en.wikipedia.org/wiki/Augsburg_Confession" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[44]</a><br>
      • <strong>Scripture alone:</strong> Bible is the sole authority (sola scriptura)<a href="https://en.wikipedia.org/wiki/Martin_Luther" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[24]</a><a href="https://www.lutheranworld.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[10]</a><br>
      • <strong>Consubstantiation:</strong> Christ is present "in, with, and under" the bread and wine<a href="https://www.lutheranworld.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[10]</a><a href="https://en.wikipedia.org/wiki/Augsburg_Confession" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[44]</a><br>
      • <strong>Two sacraments:</strong> Baptism and Communion only<a href="https://www.lutheranworld.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[10]</a><a href="https://en.wikipedia.org/wiki/Augsburg_Confession" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[44]</a><br>
      • <strong>Liturgical worship:</strong> Maintains traditional liturgical structure<a href="https://www.lutheranworld.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[10]</a><a href="https://en.wikipedia.org/wiki/Martin_Luther" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[24]</a><br>
      • <strong>Grace alone:</strong> Salvation is entirely God's work<a href="https://en.wikipedia.org/wiki/Martin_Luther" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[24]</a><a href="https://en.wikipedia.org/wiki/Augsburg_Confession" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[44]</a><br>
      • <strong>Priesthood of all believers:</strong> All Christians have direct access to God<a href="https://en.wikipedia.org/wiki/Martin_Luther" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[24]</a><a href="https://en.wikipedia.org/wiki/Protestant_Reformation" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[9]</a><br><br>
      <strong>Distinctive Features:</strong> Lutheran Confessions (Augsburg Confession)<a href="https://en.wikipedia.org/wiki/Augsburg_Confession" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[44]</a>, liturgical calendar, infant baptism<a href="https://www.lutheranworld.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[10]</a><br>
      <strong>Major Bodies:</strong> Lutheran World Federation<a href="https://www.lutheranworld.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[10]</a>, Missouri Synod, Wisconsin Synod<a href="https://www.worldhistory.org/Protestant_Reformation" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[55]</a>`
    },
    {
      id: "Reformed/Presbyterian",
      title: "Reformed/Presbyterian",
      tags: ["protestant", "reformation"],
      content: `<strong>Founded:</strong> c. 1536 AD (John Calvin in Geneva)<a href="https://en.wikipedia.org/wiki/John_Calvin" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[25]</a><a href="https://en.wikipedia.org/wiki/Protestant_Reformation" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[9]</a><br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>Predestination:</strong> God has chosen who will be saved (TULIP theology)<a href="https://en.wikipedia.org/wiki/John_Calvin" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[25]</a><a href="https://www.pcusa.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[11]</a><br>
      • <strong>Sovereignty of God:</strong> God's absolute control over all things<a href="https://en.wikipedia.org/wiki/John_Calvin" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[25]</a><a href="https://en.wikipedia.org/wiki/Westminster_Confession_of_Faith" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[45]</a><br>
      • <strong>Church elders:</strong> Presbyterian church government with elected elders<a href="https://www.pcusa.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[11]</a><a href="https://en.wikipedia.org/wiki/Westminster_Confession_of_Faith" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[45]</a><br>
      • <strong>Simple worship:</strong> Focus on preaching and minimal ritual<a href="https://en.wikipedia.org/wiki/John_Calvin" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[25]</a><a href="https://www.pcusa.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[11]</a><br>
      • <strong>Covenant theology:</strong> Understanding of God's relationship with humanity through covenants<a href="https://en.wikipedia.org/wiki/Westminster_Confession_of_Faith" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[45]</a><a href="https://en.wikipedia.org/wiki/John_Calvin" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[25]</a><br>
      • <strong>Westminster Standards:</strong> Confessions and catechisms as doctrinal standards<a href="https://en.wikipedia.org/wiki/Westminster_Confession_of_Faith" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[45]</a><a href="https://www.pcusa.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[11]</a><br>
      • <strong>Total depravity:</strong> Humanity is completely corrupted by sin<a href="https://en.wikipedia.org/wiki/John_Calvin" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[25]</a><a href="https://en.wikipedia.org/wiki/Westminster_Confession_of_Faith" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[45]</a><br><br>
      <strong>Church Government:</strong> Presbyterian system with sessions, presbyteries, and assemblies<a href="https://www.pcusa.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[11]</a><a href="https://en.wikipedia.org/wiki/Westminster_Confession_of_Faith" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[45]</a><br>
      <strong>Major Bodies:</strong> Presbyterian Church (USA)<a href="https://www.pcusa.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[11]</a>, Orthodox Presbyterian Church, Reformed churches<a href="https://www.worldhistory.org/Protestant_Reformation" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[55]</a>`
    },
    {
      id: "Anabaptist",
      title: "Anabaptist",
      tags: ["protestant", "reformation"],
      content: `<strong>Founded:</strong> 1525 AD (Swiss Brethren, radical reformation)<a href="https://en.wikipedia.org/wiki/Anabaptist" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[26]</a><a href="https://en.wikipedia.org/wiki/Protestant_Reformation" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[9]</a><br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>Adult baptism:</strong> Only believers who can make conscious decisions should be baptized<a href="https://en.wikipedia.org/wiki/Anabaptist" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[26]</a><a href="https://mwc-cmm.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[12]</a><br>
      • <strong>Pacifism:</strong> Commitment to non-violence and peace<a href="https://en.wikipedia.org/wiki/Anabaptist" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[26]</a><a href="https://mwc-cmm.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[12]</a><br>
      • <strong>Simple living:</strong> Emphasis on modesty and rejection of worldliness<a href="https://mwc-cmm.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[12]</a><a href="https://en.wikipedia.org/wiki/Anabaptist" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[26]</a><br>
      • <strong>Church-state separation:</strong> Complete separation of church and government<a href="https://en.wikipedia.org/wiki/Anabaptist" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[26]</a><a href="https://en.wikipedia.org/wiki/Protestant_Reformation" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[9]</a><br>
      • <strong>Community discipline:</strong> Strong emphasis on church discipline and mutual accountability<a href="https://mwc-cmm.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[12]</a><a href="https://en.wikipedia.org/wiki/Anabaptist" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[26]</a><br>
      • <strong>Biblical literalism:</strong> Direct application of New Testament teachings<a href="https://en.wikipedia.org/wiki/Anabaptist" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[26]</a><a href="https://mwc-cmm.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[12]</a><br>
      • <strong>Voluntary faith:</strong> Faith cannot be coerced or inherited<a href="https://en.wikipedia.org/wiki/Anabaptist" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[26]</a><a href="https://en.wikipedia.org/wiki/Protestant_Reformation" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[9]</a><br><br>
      <strong>Modern Descendants:</strong> Mennonites<a href="https://mwc-cmm.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[12]</a>, Amish, Hutterites, Brethren churches<a href="https://en.wikipedia.org/wiki/Anabaptist" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[26]</a><br>
      <strong>Historical Note:</strong> Heavily persecuted by both Catholics and other Protestants<a href="https://en.wikipedia.org/wiki/Anabaptist" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[26]</a><a href="https://en.wikipedia.org/wiki/Protestant_Reformation" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[9]</a>`
    },
    {
      id: "Anglican",
      title: "Anglican",
      tags: ["protestant"],
      content: `<strong>Founded:</strong> 1534 AD (Henry VIII's break from Rome)<a href="https://en.wikipedia.org/wiki/Henry_VIII" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[27]</a><a href="https://www.anglicancommunion.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[13]</a><br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>Via media:</strong> "Middle way" between Catholicism and Protestantism<a href="https://www.anglicancommunion.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[13]</a><a href="https://en.wikipedia.org/wiki/Book_of_Common_Prayer" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[46]</a><br>
      • <strong>Episcopal governance:</strong> Led by bishops in apostolic succession<a href="https://www.anglicancommunion.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[13]</a><a href="https://en.wikipedia.org/wiki/Henry_VIII" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[27]</a><br>
      • <strong>Book of Common Prayer:</strong> Structured liturgical worship<a href="https://en.wikipedia.org/wiki/Book_of_Common_Prayer" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[46]</a><a href="https://www.anglicancommunion.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[13]</a><br>
      • <strong>Three-legged stool:</strong> Scripture, tradition, and reason as authorities<a href="https://www.anglicancommunion.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[13]</a><a href="https://en.wikipedia.org/wiki/Book_of_Common_Prayer" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[46]</a><br>
      • <strong>Broad spectrum:</strong> Includes high church (Anglo-Catholic), low church (Evangelical), and broad church traditions<a href="https://www.anglicancommunion.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[13]</a><a href="https://www.episcopalchurch.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[17]</a><br>
      • <strong>Royal supremacy:</strong> Monarch as Supreme Governor (in England)<a href="https://en.wikipedia.org/wiki/Henry_VIII" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[27]</a><a href="https://www.anglicancommunion.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[13]</a><br>
      • <strong>Married clergy:</strong> Priests and bishops can marry<a href="https://www.anglicancommunion.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[13]</a><a href="https://en.wikipedia.org/wiki/Protestant_Reformation" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[9]</a><br><br>
      <strong>Global Communion:</strong> Church of England, Episcopal Church (USA)<a href="https://www.episcopalchurch.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[17]</a>, Anglican churches worldwide<a href="https://www.anglicancommunion.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[13]</a><br>
      <strong>Distinctive Features:</strong> Cathedrals, choral tradition, theological diversity within unity<a href="https://www.anglicancommunion.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[13]</a><a href="https://en.wikipedia.org/wiki/Book_of_Common_Prayer" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[46]</a>`
    },
    {
      id: "Baptist",
      title: "Baptist",
      tags: ["protestant"],
      content: `<strong>Founded:</strong> 1609 AD (Amsterdam, John Smyth)<a href="https://www.baptistworld.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[14]</a><a href="https://en.wikipedia.org/wiki/Great_Awakening" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[47]</a><br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>Believer's baptism:</strong> Baptism by full immersion only after personal faith decision<a href="https://www.baptistworld.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[14]</a><a href="https://en.wikipedia.org/wiki/Protestant_Reformation" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[9]</a><br>
      • <strong>Local church autonomy:</strong> Each congregation is independent and self-governing<a href="https://www.baptistworld.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[14]</a><a href="https://en.wikipedia.org/wiki/Great_Awakening" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[47]</a><br>
      • <strong>Biblical authority:</strong> Scripture alone as the final authority<a href="https://www.baptistworld.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[14]</a><a href="https://en.wikipedia.org/wiki/Protestant_Reformation" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[9]</a><br>
      • <strong>Priesthood of believers:</strong> Every Christian has direct access to God<a href="https://www.baptistworld.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[14]</a><a href="https://en.wikipedia.org/wiki/Protestant_Reformation" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[9]</a><br>
      • <strong>Religious liberty:</strong> Strong advocate for freedom of conscience<a href="https://www.baptistworld.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[14]</a><a href="https://en.wikipedia.org/wiki/Great_Awakening" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[47]</a><br>
      • <strong>Evangelism:</strong> Strong emphasis on personal evangelism and missions<a href="https://www.baptistworld.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[14]</a><a href="https://en.wikipedia.org/wiki/Great_Awakening" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[47]</a><br>
      • <strong>Congregational polity:</strong> Democratic church governance<a href="https://www.baptistworld.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[14]</a><a href="https://en.wikipedia.org/wiki/Great_Awakening" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[47]</a><br><br>
      <strong>Major Groups:</strong> Southern Baptist Convention, American Baptist Churches, Independent Baptist churches<a href="https://www.baptistworld.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[14]</a><br>
      <strong>Cultural Impact:</strong> Historically influential in religious freedom movements<a href="https://www.baptistworld.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[14]</a><a href="https://en.wikipedia.org/wiki/Great_Awakening" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[47]</a>`
    },
    {
      id: "Methodist",
      title: "Methodist",
      tags: ["protestant"],
      content: `<strong>Founded:</strong> 18th century (John Wesley's revival movement)<a href="https://en.wikipedia.org/wiki/John_Wesley" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[28]</a><a href="https://www.umc.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[15]</a><br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>Prevenient grace:</strong> God's grace is available to all people before they believe<a href="https://en.wikipedia.org/wiki/John_Wesley" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[28]</a><a href="https://www.umc.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[15]</a><br>
      • <strong>Arminian soteriology:</strong> Humans can choose to accept or reject salvation<a href="https://en.wikipedia.org/wiki/John_Wesley" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[28]</a><a href="https://en.wikipedia.org/wiki/Great_Awakening" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[47]</a><br>
      • <strong>Social holiness:</strong> Personal holiness must lead to social action<a href="https://www.umc.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[15]</a><a href="https://en.wikipedia.org/wiki/John_Wesley" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[28]</a><br>
      • <strong>Perfectionism:</strong> Christians can achieve Christian perfection in this life<a href="https://en.wikipedia.org/wiki/John_Wesley" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[28]</a><a href="https://www.umc.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[15]</a><br>
      • <strong>Means of grace:</strong> Scripture, sacraments, prayer, and Christian fellowship<a href="https://en.wikipedia.org/wiki/John_Wesley" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[28]</a><a href="https://www.umc.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[15]</a><br>
      • <strong>Methodist quadrilateral:</strong> Scripture, tradition, reason, and experience<a href="https://www.umc.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[15]</a><a href="https://en.wikipedia.org/wiki/John_Wesley" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[28]</a><br>
      • <strong>Social justice:</strong> Strong emphasis on helping the poor and marginalized<a href="https://www.umc.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[15]</a><a href="https://en.wikipedia.org/wiki/Great_Awakening" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[47]</a><br><br>
      <strong>Historical Impact:</strong> Abolition movement, temperance, civil rights<a href="https://www.umc.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[15]</a><a href="https://en.wikipedia.org/wiki/Great_Awakening" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[47]</a><br>
      <strong>Major Bodies:</strong> United Methodist Church<a href="https://www.umc.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[15]</a>, Free Methodist, Nazarene churches<a href="https://en.wikipedia.org/wiki/John_Wesley" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[28]</a>`
    },
    {
      id: "Pentecostal",
      title: "Pentecostal",
      tags: ["protestant"],
      content: `<strong>Founded:</strong> Early 1900s (Azusa Street Revival, Los Angeles)<a href="https://en.wikipedia.org/wiki/Azusa_Street_Revival" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[48]</a><a href="https://en.wikipedia.org/wiki/Pentecostalism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[29]</a><br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>Baptism in the Holy Spirit:</strong> Second experience after salvation, evidenced by speaking in tongues<a href="https://ag.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[16]</a><a href="https://en.wikipedia.org/wiki/Pentecostalism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[29]</a><br>
      • <strong>Spiritual gifts:</strong> Emphasis on all nine gifts of the Spirit (1 Corinthians 12)<a href="https://ag.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[16]</a><a href="https://en.wikipedia.org/wiki/Azusa_Street_Revival" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[48]</a><br>
      • <strong>Divine healing:</strong> God heals today through prayer and faith<a href="https://ag.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[16]</a><a href="https://en.wikipedia.org/wiki/Pentecostalism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[29]</a><br>
      • <strong>Prosperity teaching:</strong> God desires believers to be healthy and prosperous (some denominations)<a href="https://ag.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[16]</a><a href="https://en.wikipedia.org/wiki/Pentecostalism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[29]</a><br>
      • <strong>Premillennialism:</strong> Jesus will return before the millennium<a href="https://ag.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[16]</a><a href="https://en.wikipedia.org/wiki/Pentecostalism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[29]</a><br>
      • <strong>Personal experience:</strong> Direct, personal relationship with God through the Spirit<a href="https://en.wikipedia.org/wiki/Azusa_Street_Revival" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[48]</a><a href="https://en.wikipedia.org/wiki/Pentecostalism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[29]</a><br>
      • <strong>Evangelistic fervor:</strong> Strong emphasis on missions and church planting<a href="https://ag.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[16]</a><a href="https://en.wikipedia.org/wiki/Azusa_Street_Revival" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[48]</a><br><br>
      <strong>Global Movement:</strong> Fastest-growing Christian movement worldwide<a href="https://en.wikipedia.org/wiki/Pentecostalism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[29]</a><a href="https://en.wikipedia.org/wiki/Azusa_Street_Revival" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[48]</a><br>
      <strong>Major Bodies:</strong> Assemblies of God<a href="https://ag.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[16]</a>, Church of God in Christ, Foursquare Church<a href="https://en.wikipedia.org/wiki/Pentecostalism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[29]</a>`
    },
    {
      id: "Restorationist",
      title: "Restorationist",
      tags: ["protestant", "restoration"],
      content: `<strong>Founded:</strong> 1800s onwards (Stone-Campbell Movement and others)<a href="https://en.wikipedia.org/wiki/Restorationist" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[30]</a><a href="https://en.wikipedia.org/wiki/Great_Awakening" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[47]</a><br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>Primitive Christianity:</strong> Attempt to restore New Testament Christianity exactly<a href="https://en.wikipedia.org/wiki/Restorationist" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[30]</a><a href="https://en.wikipedia.org/wiki/Protestant_Reformation" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[9]</a><br>
      • <strong>No creeds:</strong> "No creed but Christ, no book but the Bible"<a href="https://en.wikipedia.org/wiki/Restorationist" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[30]</a><a href="https://en.wikipedia.org/wiki/Great_Awakening" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[47]</a><br>
      • <strong>Apostolic authority:</strong> Some claim restored apostolic authority<a href="https://en.wikipedia.org/wiki/Restorationist" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[30]</a><a href="https://en.wikipedia.org/wiki/Christianity_in_the_1st_century" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[50]</a><br>
      • <strong>Additional scriptures:</strong> Some groups accept new revelations or scriptures<a href="https://en.wikipedia.org/wiki/Restorationist" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[30]</a><a href="https://www.adventist.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[19]</a><br>
      • <strong>Biblical patterns:</strong> Strict adherence to perceived New Testament patterns<a href="https://en.wikipedia.org/wiki/Restorationist" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[30]</a><a href="https://en.wikipedia.org/wiki/Protestant_Reformation" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[9]</a><br>
      • <strong>Unity movement:</strong> Seeks to unite all Christians by returning to biblical basics<a href="https://en.wikipedia.org/wiki/Restorationist" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[30]</a><a href="https://www.worldcouncilofchurches.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[4]</a><br>
      • <strong>Exclusive claims:</strong> Some claim to be the only true church<a href="https://en.wikipedia.org/wiki/Restorationist" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[30]</a><a href="https://www.adventist.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[19]</a><br><br>
      <strong>Major Groups:</strong> Churches of Christ, Disciples of Christ, Latter-day Saints (Mormons)<a href="https://en.wikipedia.org/wiki/Restorationist" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[30]</a>, Jehovah's Witnesses<a href="https://en.wikipedia.org/wiki/Restorationist" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[30]</a><br>
      <strong>Controversy:</strong> Some groups considered non-orthodox due to additional revelations<a href="https://en.wikipedia.org/wiki/Restorationist" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[30]</a><a href="https://en.wikipedia.org/wiki/Council_of_Nicaea" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[20]</a>`
    },
    {
      id: "Episcopal",
      title: "Episcopal",
      tags: ["anglican", "protestant"],
      content: `<strong>Founded:</strong> 1789 AD (American Episcopal Church formed after American Revolution)<a href="https://www.episcopalchurch.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[17]</a><a href="https://www.anglicancommunion.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[13]</a><br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>Anglican tradition:</strong> Part of the worldwide Anglican Communion<a href="https://www.episcopalchurch.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[17]</a><a href="https://www.anglicancommunion.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[13]</a><br>
      • <strong>Via media:</strong> "Middle way" between Catholicism and Protestantism<a href="https://www.episcopalchurch.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[17]</a><a href="https://en.wikipedia.org/wiki/Book_of_Common_Prayer" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[46]</a><br>
      • <strong>Episcopal governance:</strong> Led by bishops in apostolic succession<a href="https://www.episcopalchurch.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[17]</a><a href="https://www.anglicancommunion.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[13]</a><br>
      • <strong>Book of Common Prayer:</strong> Liturgical worship with structured prayers<a href="https://www.episcopalchurch.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[17]</a><a href="https://en.wikipedia.org/wiki/Book_of_Common_Prayer" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[46]</a><br>
      • <strong>Broad theological spectrum:</strong> Includes Anglo-Catholic, Evangelical, and Liberal traditions<a href="https://www.episcopalchurch.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[17]</a><a href="https://www.anglicancommunion.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[13]</a><br>
      • <strong>Social justice:</strong> Strong emphasis on social issues and inclusion<a href="https://www.episcopalchurch.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[17]</a><a href="https://en.wikipedia.org/wiki/Great_Awakening" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[47]</a><br>
      • <strong>Ordination of women:</strong> Ordains women as priests and bishops<a href="https://www.episcopalchurch.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[17]</a><a href="https://www.anglicancommunion.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[13]</a><br>
      • <strong>LGBTQ+ inclusion:</strong> Generally affirming of LGBTQ+ individuals<a href="https://www.episcopalchurch.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[17]</a><a href="https://www.anglicancommunion.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[13]</a><br><br>
      <strong>Distinctive Features:</strong> Beautiful liturgy, cathedral tradition, theological education emphasis<a href="https://www.episcopalchurch.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[17]</a><a href="https://en.wikipedia.org/wiki/Book_of_Common_Prayer" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[46]</a><br>
      <strong>Modern Context:</strong> Progressive positions on social issues while maintaining traditional liturgy<a href="https://www.episcopalchurch.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[17]</a><a href="https://www.anglicancommunion.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[13]</a>`
    },
    {
      id: "other",
      title: "Other Christian Movements",
      tags: ["other", "modern"],
      content: `<strong>Various Other Christian Movements:</strong><br><br>
      
      <strong>Quakers (Religious Society of Friends)</strong> - Founded 1650s<a href="https://www.quaker.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[18]</a><a href="https://en.wikipedia.org/wiki/Great_Awakening" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[47]</a><br>
      • Emphasize "inner light" - direct spiritual experience with God<a href="https://www.quaker.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[18]</a><br>
      • Silent worship with no formal liturgy<a href="https://www.quaker.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[18]</a><br>
      • Historic peace testimony and social justice advocacy<a href="https://www.quaker.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[18]</a><a href="https://en.wikipedia.org/wiki/Great_Awakening" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[47]</a><br>
      • Simple living and equality principles<a href="https://www.quaker.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[18]</a><br><br>
      
      <strong>Seventh-day Adventist</strong> - Founded 1863<a href="https://www.adventist.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[19]</a><br>
      • Seventh-day (Saturday) Sabbath observance<a href="https://www.adventist.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[19]</a><br>
      • Emphasis on Second Coming of Christ<a href="https://www.adventist.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[19]</a><br>
      • Health and wellness focus (vegetarianism, medical missions)<a href="https://www.adventist.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[19]</a><br>
      • Prophetic ministry of Ellen G. White<a href="https://www.adventist.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[19]</a><br><br>
      
      <strong>Messianic Judaism</strong> - Modern movement<a href="https://en.wikipedia.org/wiki/History_of_Christianity" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[7]</a><a href="https://www.worldhistory.org/Christianity" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[49]</a><br>
      • Jewish believers in Jesus (Yeshua) as Messiah<a href="https://en.wikipedia.org/wiki/History_of_Christianity" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[7]</a><br>
      • Maintain Jewish cultural practices and holidays<a href="https://en.wikipedia.org/wiki/History_of_Christianity" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[7]</a><br>
      • Hebrew language and Jewish liturgy<a href="https://en.wikipedia.org/wiki/History_of_Christianity" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[7]</a><br>
      • Bridge between Jewish and Christian communities<a href="https://en.wikipedia.org/wiki/History_of_Christianity" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[7]</a><br><br>
      
      <strong>Non-denominational Churches</strong> - 20th century onwards<a href="https://en.wikipedia.org/wiki/Great_Awakening" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[47]</a><a href="https://www.worldcouncilofchurches.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[4]</a><br>
      • Reject formal denominational ties<a href="https://en.wikipedia.org/wiki/Great_Awakening" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[47]</a><br>
      • Local church autonomy and independence<a href="https://en.wikipedia.org/wiki/Great_Awakening" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[47]</a><br>
      • Bible-centered, often evangelical theology<a href="https://en.wikipedia.org/wiki/Great_Awakening" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[47]</a><br>
      • Contemporary worship styles<a href="https://en.wikipedia.org/wiki/Great_Awakening" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[47]</a><br><br>
      
      <strong>House Church Movement</strong> - Various periods<a href="https://en.wikipedia.org/wiki/Christianity_in_the_1st_century" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[50]</a><a href="https://www.worldhistory.org/Christianity" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[49]</a><br>
      • Simple church meetings in homes<a href="https://en.wikipedia.org/wiki/Christianity_in_the_1st_century" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[50]</a><br>
      • Minimal institutional structure<a href="https://en.wikipedia.org/wiki/Christianity_in_the_1st_century" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[50]</a><br>
      • Emphasis on community and fellowship<a href="https://en.wikipedia.org/wiki/Christianity_in_the_1st_century" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[50]</a><br>
      • Return to New Testament patterns<a href="https://en.wikipedia.org/wiki/Christianity_in_the_1st_century" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[50]</a><br><br>
      
      <strong>Emerging Church</strong> - Late 20th century<a href="https://www.worldcouncilofchurches.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[4]</a><a href="https://www.worldhistory.org/Christianity" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[49]</a><br>
      • Postmodern approach to Christianity<a href="https://www.worldcouncilofchurches.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[4]</a><br>
      • Social justice and environmental concerns<a href="https://www.worldcouncilofchurches.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[4]</a><br>
      • Question traditional evangelical certainties<a href="https://www.worldcouncilofchurches.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[4]</a><br>
      • Authentic community emphasis<a href="https://www.worldcouncilofchurches.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[4]</a><br><br>
      
      <strong>Unitarian Universalist</strong> - 1961 merger<a href="https://en.wikipedia.org/wiki/History_of_Christianity" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[7]</a><a href="https://en.wikipedia.org/wiki/Council_of_Nicaea" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[20]</a><br>
      • Universal salvation beliefs<a href="https://en.wikipedia.org/wiki/History_of_Christianity" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[7]</a><br>
      • Rejection of Trinity doctrine<a href="https://en.wikipedia.org/wiki/Council_of_Nicaea" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[20]</a><br>
      • Emphasis on reason and individual conscience<a href="https://en.wikipedia.org/wiki/History_of_Christianity" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[7]</a><br>
      • Social justice activism<a href="https://en.wikipedia.org/wiki/History_of_Christianity" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[7]</a><br><br>
      
      <strong>Coptic Christianity</strong> - Ancient tradition<a href="https://www.coptic.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[31]</a><a href="https://en.wikipedia.org/wiki/Oriental_Orthodox_Churches" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[22]</a><br>
      • Egyptian Orthodox tradition<a href="https://www.coptic.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[31]</a><br>
      • Coptic language preservation<a href="https://www.coptic.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[31]</a><br>
      • Desert monasticism heritage<a href="https://www.coptic.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[31]</a><a href="https://www.worldhistory.org/Christianity" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[49]</a><br>
      • Persecution and martyrdom history<a href="https://www.coptic.org" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[31]</a><a href="https://en.wikipedia.org/wiki/Christianity_in_the_4th_century" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[52]</a><br><br>
      
      <strong>Celtic Christianity</strong> - Historical and modern revival<a href="https://www.worldhistory.org/Christianity" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[49]</a><a href="https://en.wikipedia.org/wiki/Christianity_in_the_1st_century" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[50]</a><br>
      • Ancient Irish and Scottish traditions<a href="https://www.worldhistory.org/Christianity" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[49]</a><br>
      • Creation spirituality emphasis<a href="https://www.worldhistory.org/Christianity" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[49]</a><br>
      • Contemplative practices<a href="https://www.worldhistory.org/Christianity" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[49]</a><br>
      • Integration of nature and faith<a href="https://www.worldhistory.org/Christianity" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[49]</a><br><br>
      
      <strong>Note:</strong> Some movements like Latter-day Saints (Mormons)<a href="https://en.wikipedia.org/wiki/Restorationist" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[30]</a> and Jehovah's Witnesses<a href="https://en.wikipedia.org/wiki/Restorationist" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[30]</a>, while claiming Christian identity, are often considered outside orthodox Christianity due to fundamental doctrinal differences regarding the Trinity, Jesus's divinity, and additional scriptures<a href="https://en.wikipedia.org/wiki/Council_of_Nicaea" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[20]</a><a href="https://en.wikipedia.org/wiki/Council_of_Chalcedon" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[21]</a>.`
    },
  ],
  verses: [
  ],
  sources: [
    // Early Church & General Sources (Catholic, Eastern Orthodox, Oriental Orthodox)
    "1. [Religious Site] LearnReligions - Roman Catholic Church History. 'Comprehensive history of Roman Catholic Church from apostolic era to modern times.' https://www.learnreligions.com/roman-catholic-church-history-700528",
    "2. [Encyclopedia] Britannica - Roman Catholicism. 'Academic overview of Roman Catholic doctrine, history, and organization.' https://www.britannica.com/topic/Roman-Catholicism",
    "3. [Encyclopedia] Britannica - Eastern Orthodoxy. 'Detailed academic coverage of Eastern Orthodox church history and theology.' https://www.britannica.com/topic/Eastern-Orthodoxy",
    "4. [Religious Organization] World Council of Churches. 'Ecumenical movement and inter-denominational dialogue resources.' https://www.worldcouncilofchurches.org",
    "5. [Official Church] Vatican Official Website. 'Official papal documents, Catholic doctrine, and church teachings.' https://www.vatican.va/content/vatican/en.html",
    "6. [Official Church] Ecumenical Patriarchate of Constantinople. 'Official Eastern Orthodox patriarchate resources and teachings.' https://www.patriarchate.org",
    "7. [Wikipedia] History of Christianity. 'Comprehensive timeline of Christian development from apostolic era to modern times.' https://en.wikipedia.org/wiki/History_of_Christianity",
    "8. [Wikipedia] East-West Schism. 'Detailed account of the 1054 split between Eastern and Western Christianity.' https://en.wikipedia.org/wiki/East%E2%80%93West_Schism",
    
    // Protestant Reformation Sources
    "9. [Wikipedia] Protestant Reformation. 'Comprehensive coverage of 16th-century Protestant Reformation movements.' https://en.wikipedia.org/wiki/Protestant_Reformation",
    "10. [Religious Organization] Lutheran World Federation. 'Official Lutheran doctrine, history, and global Lutheran churches.' https://www.lutheranworld.org",
    "11. [Official Church] Presbyterian Church (USA). 'Presbyterian polity, Reformed theology, and denominational resources.' https://www.pcusa.org",
    "12. [Religious Organization] Mennonite World Conference. 'Anabaptist heritage, pacifist theology, and Mennonite communities worldwide.' https://mwc-cmm.orgmwc-cmm.org",
    "13. [Religious Organization] Anglican Communion. 'Worldwide Anglican churches, episcopal governance, and via media theology.' https://www.anglicancommunion.org",
    "14. [Religious Organization] Baptist World Alliance. 'Baptist principles, believer's baptism, and congregational autonomy.' https://www.baptistworld.org",
    "15. [Official Church] United Methodist Church. 'Methodist theology, social holiness, and Wesleyan tradition.' https://www.umc.org",
    "16. [Official Church] Assemblies of God. 'Pentecostal doctrine, spiritual gifts, and divine healing theology.' https://ag.org",
    "17. [Official Church] Episcopal Church. 'American Anglican tradition, progressive theology, and episcopal governance.' https://www.episcopalchurch.org",
    
    // Other Christian Movements
    "18. [Religious Organization] Quakers (Religious Society of Friends). 'Inner light theology, peace testimony, and silent worship.' https://www.quaker.org",
    "19. [Official Church] Seventh-day Adventist Church. 'Sabbath observance, health ministry, and prophetic interpretation.' https://www.adventist.org",
    
    // Historical Councils & Early Church
    "20. [Wikipedia] Council of Nicaea. 'First Ecumenical Council (325 AD) and establishment of Nicene Creed.' https://en.wikipedia.org/wiki/Council_of_Nicaea",
    "21. [Wikipedia] Council of Chalcedon. 'Fourth Ecumenical Council (451 AD) and Christological definitions.' https://en.wikipedia.org/wiki/Council_of_Chalcedon",
    "22. [Wikipedia] Oriental Orthodox Churches. 'Non-Chalcedonian churches and Miaphysite theology.' https://en.wikipedia.org/wiki/Oriental_Orthodox_Churches",
    "23. [Wikipedia] Church of the East. 'Nestorian Christianity and historical missions to Asia.' https://en.wikipedia.org/wiki/Church_of_the_East",
    
    // Key Reformers & Leaders
    "24. [Wikipedia] Martin Luther. 'German reformer, 95 Theses, and Lutheran theology foundations.' https://en.wikipedia.org/wiki/Martin_Luther",
    "25. [Wikipedia] John Calvin. 'Reformed theology, predestination, and Presbyterian foundations.' https://en.wikipedia.org/wiki/John_Calvin",
    "26. [Wikipedia] Anabaptist. 'Radical Reformation, adult baptism, and pacifist traditions.' https://en.wikipedia.org/wiki/Anabaptist",
    "27. [Wikipedia] Henry VIII and English Reformation. 'Anglican origins and break from papal authority.' https://en.wikipedia.org/wiki/Henry_VIII",
    "28. [Wikipedia] John Wesley and Methodism. 'Methodist revival, Arminian theology, and social holiness.' https://en.wikipedia.org/wiki/John_Wesley",
    "29. [Wikipedia] Pentecostalism. 'Modern Pentecostal movement and charismatic Christianity.' https://en.wikipedia.org/wiki/Pentecostalism",
    "30. [Wikipedia] Restorationist Movement. 'Stone-Campbell movement and primitive Christianity restoration.' https://en.wikipedia.org/wiki/Restorationist",
    
    // Oriental Orthodox Churches
    "31. [Official Church] Coptic Orthodox Church. 'Egyptian Orthodox tradition and Coptic Christianity.' https://www.coptic.org",
    "32. [Wikipedia] Armenian Apostolic Church. 'Armenian Orthodox heritage and apostolic tradition.' https://en.wikipedia.org/wiki/Armenian_Apostolic_Churchen.wikipedia.org/wiki/Armenian_Apostolic_Churcharmenianpatriarchate.org.tr",
    "33. [Wikipedia] Syriac Orthodox Church. 'Syriac Orthodox tradition and Eastern Christianity.' https://en.wikipedia.org/wiki/Syriac_Orthodox_Churchen.wikipedia.org/wiki/Syriac_Orthodox_Churchwww.syrianorthodoxchurch.com",
    "34. [Official Church] Ethiopian Orthodox Church. 'Ethiopian Orthodox heritage and African Christianity.' https://www.ethiopianorthodox.org",
    
    // Church History Resources
    "35. [Religious Site] Orthodox Church in America. 'Orthodox theology and church historical development.' https://www.oca.org/orthodoxy/the-orthodox-faithwww.oca.org/orthodoxy/the-orthodox-faith",
    "36. [Religious Magazine] Christianity Today - Church History. 'Modern evangelical perspective on church historical development.' https://www.christianitytoday.com/history",
    "37. [Academic Institute] Christian History Institute. 'Academic research on Christian historical development and movements.' https://www.christianhistoryinstitute.org",
    "38. [Religious Encyclopedia] Catholic Encyclopedia. 'Comprehensive Catholic perspective on church history and doctrine.' https://www.newadvent.org/cathen",
    
    // Major Church Councils
    "39. [Wikipedia] First Council of Constantinople. 'Second Ecumenical Council (381 AD) and Trinitarian doctrine.' https://en.wikipedia.org/wiki/First_Council_of_Constantinople",
    "40. [Wikipedia] Council of Ephesus. 'Third Ecumenical Council (431 AD) and Marian theology.' https://en.wikipedia.org/wiki/Council_of_Ephesus",
    "41. [Wikipedia] Iconoclastic Controversy. 'Byzantine icon disputes and Orthodox theology development.' https://en.wikipedia.org/wiki/Iconoclasm",
    "42. [Wikipedia] Great Schism of 1054. 'Permanent split between Eastern and Western Christianity.' https://en.wikipedia.org/wiki/Great_Schism",
    
    // Catholic Counter-Reformation
    "43. [Wikipedia] Counter-Reformation. 'Catholic response to Protestant Reformation and theological clarifications.' https://en.wikipedia.org/wiki/Counter-Reformation",
    
    // Protestant Confessions
    "44. [Wikipedia] Augsburg Confession. 'Primary Lutheran confession and theological foundation.' https://en.wikipedia.org/wiki/Augsburg_Confession",
    "45. [Wikipedia] Westminster Confession. 'Presbyterian doctrinal standards and Reformed theology.' https://en.wikipedia.org/wiki/Westminster_Confession_of_Faith",
    "46. [Wikipedia] Book of Common Prayer. 'Anglican liturgical foundation and worship structure.' https://en.wikipedia.org/wiki/Book_of_Common_Prayer",
    
    // Revival Movements
    "47. [Wikipedia] Great Awakening. 'American religious revival movements and evangelical development.' https://en.wikipedia.org/wiki/Great_Awakening",
    "48. [Wikipedia] Azusa Street Revival. 'Origins of modern Pentecostal movement and spiritual gifts.' https://en.wikipedia.org/wiki/Azusa_Street_Revival",
    
    // General Christian History
    "49. [Academic] World History Encyclopedia - Christianity. 'Academic overview of Christian historical development.' https://www.worldhistory.org/Christianity",
    "50. [Wikipedia] Early Christianity. 'First century Christian development and apostolic foundations.' https://en.wikipedia.org/wiki/Christianity_in_the_1st_century",
    
    // Key Historical Figures & Events
    "51. [Wikipedia] Constantine and Christianity. 'Conversion of Constantine and legalization of Christianity.' https://en.wikipedia.org/wiki/Constantine_the_Great_and_Christianity",
    "52. [Wikipedia] Christianity 4th Century. 'Imperial Christianity and theological development.' https://en.wikipedia.org/wiki/Christianity_in_the_4th_century",
    "53. [Wikipedia] Crusades. 'Medieval Christian military campaigns and their theological justifications.' https://en.wikipedia.org/wiki/Crusades",
    "54. [Wikipedia] Inquisition. 'Medieval and early modern Catholic judicial procedures.' https://en.wikipedia.org/wiki/Inquisition",
    
    // Academic Sources
    "55. [Academic] World History Encyclopedia - Protestant Reformation. 'Scholarly analysis of Reformation causes and consequences.' https://www.worldhistory.org/Protestant_Reformation",
    "56. [Academic] World History Encyclopedia - Eastern Orthodox Church. 'Academic perspective on Orthodox development and theology.' https://www.worldhistory.org/Eastern_Orthodox_Church",
    "57. [Academic] World History Encyclopedia - Catholic Church. 'Scholarly overview of Catholic historical development.' https://www.worldhistory.org/Catholic_Church",
    "58. [Academic Journal] Cambridge - Church History Journal. 'Peer-reviewed academic research on church historical development.' https://www.cambridge.org/core/journals/church-history",
    
    // Academic Books
    "Alister McGrath, 'Christian Theology: An Introduction' (Wiley-Blackwell, 2017) - Comprehensive systematic theology covering all major denominational perspectives",
    "Justo González, 'The Story of Christianity' (HarperOne, 2010) - Historical survey of Christian development from apostolic era to modern times",
    "Mark Noll, 'Turning Points: Decisive Moments in the History of Christianity' (Baker Academic, 2012) - Analysis of crucial events shaping denominational development",
    "Timothy Ware, 'The Orthodox Church' (Penguin Classics, 1997) - Authoritative introduction to Eastern Orthodox theology and practice",
    "J.N.D. Kelly, 'Early Christian Doctrines' (Continuum, 2000) - Scholarly examination of early church theological development",
    "Diarmaid MacCulloch, 'Christianity: The First Three Thousand Years' (Penguin, 2010) - Comprehensive history of global Christianity",
    "Philip Jenkins, 'The Lost History of Christianity' (HarperOne, 2008) - Coverage of Eastern Christianity and non-Western Christian traditions",
    "Jaroslav Pelikan, 'The Christian Tradition' (University of Chicago Press, 1971-1989) - Multi-volume authoritative work on Christian doctrinal development",
    "Henry Chadwick, 'The Early Church' (Penguin, 1993) - Classic introduction to early Christian history and development",
    "Owen Chadwick, 'A History of Christianity' (St. Martin's Press, 1995) - Comprehensive survey of Christian historical development"
  ],
  lastUpdated: "31-08-2025",
}



