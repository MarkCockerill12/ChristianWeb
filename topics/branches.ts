import { BookOpen, Clock, Heart, ExternalLink, CheckCircle2, Users } from "lucide-react"

export const iconMap = {
  BookOpen,
  Clock,
  Heart,
  ExternalLink,
  CheckCircle2,
  Users,
} as const;  //TODO ADD EPISCOPAL, make section for each of the "other" branches

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
}

// Timeline data for Christian branches
export const branchTimeline = [
  { id: "catholic", date: "1st c. AD", period: "Apostolic", color: "purple" },
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
]

import type { Topic } from './types'

export const branches: Topic = {
  id: "branches",
  title: "What are the different branches of Christianity? ",
  description: "What changes between each branch? Are any of them truer than others?",
  icon: "Heart",
  color: "green",
  tags: ["Miracles", "Evidence"],
  tldr: "Christianity has three main branches: Catholic (emphasizes tradition and papal authority), Protestant (focuses on scripture alone), and Orthodox (preserves ancient liturgy). Each has different beliefs about authority, tradition, and sacraments.",
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
      title: "Catholic Church",
      tags: ["catholic", "traditional"],
      content: `<strong>Founded:</strong> 1st century (claims apostolic succession from St. Peter)<br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>Papal supremacy:</strong> The Pope is the ultimate authority on earth for Christians<br>
      • <strong>Seven sacraments:</strong> Baptism, Confirmation, Eucharist, Penance, Anointing, Holy Orders, Matrimony<br>
      • <strong>Scripture + Tradition:</strong> Both the Bible and church tradition are sources of divine revelation<br>
      • <strong>Faith + Works:</strong> Salvation requires both faith and good works<br>
      • <strong>Saints and Mary:</strong> Veneration of saints and Mary as intercessors<br>
      • <strong>Transubstantiation:</strong> Bread and wine literally become the body and blood of Christ<br>
      • <strong>Purgatory:</strong> A state of purification after death before heaven<br><br>
      <strong>Distinctive Practices:</strong> Mass, confession to priests, celibate clergy, extensive liturgical calendar`
    },
    {
      id: "Oorthodox",
      title: "Oriental Orthodox",
      tags: ["orthodox", "traditional"],
      content: `<strong>Founded:</strong> c. 451 AD (split at Council of Chalcedon)<br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>Miaphysite Christology:</strong> Christ has one united divine-human nature (different from Catholic/Eastern Orthodox)<br>
      • <strong>Regional emphasis:</strong> Strong connection to ethnic and national identity<br>
      • <strong>Ancient traditions:</strong> Preserves very early Christian practices<br>
      • <strong>No papal authority:</strong> Rejects Roman Catholic papal supremacy<br>
      • <strong>Seven sacraments:</strong> Similar to Catholic and Eastern Orthodox<br><br>
      <strong>Major Churches:</strong> Ethiopian Orthodox, Coptic Orthodox, Armenian Orthodox, Syriac Orthodox<br>
      <strong>Distinctive Practices:</strong> Unique liturgical traditions, ancient languages (Coptic, Ge'ez, Armenian), fasting periods`
    },
    {
      id: "EastChurch",
      title: "Church of the East",
      tags: ["traditional"],
      content: `<strong>Founded:</strong> c. 451 AD (split at Council of Chalcedon)<br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>Nestorian Christology:</strong> Emphasizes the distinct human and divine natures of Christ<br>
      • <strong>Historical missions:</strong> Once spread from Iraq to China and India<br>
      • <strong>Independent development:</strong> Developed separately from Western and Byzantine Christianity<br>
      • <strong>Syriac tradition:</strong> Uses Syriac language and Eastern liturgies<br>
      • <strong>Married clergy:</strong> Allows married priests and bishops<br><br>
      <strong>Modern Remnants:</strong> Assyrian Church of the East, Ancient Church of the East<br>
      <strong>Historical Note:</strong> Nearly extinct due to persecution, but historically very influential in Asia`
    },
    {
      id: "Eorthodox",
      title: "Eastern Orthodox",
      tags: ["orthodox", "traditional"],
      content: `<strong>Founded:</strong> 1054 AD (Great Schism from Roman Catholicism)<br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>National churches:</strong> Organized into autocephalous (independent) national churches<br>
      • <strong>Seven sacraments:</strong> Similar to Catholicism but different interpretations<br>
      • <strong>Strong tradition:</strong> Scripture and tradition together, but no single human authority<br>
      • <strong>Icons:</strong> Veneration (not worship) of religious icons<br>
      • <strong>No papal supremacy:</strong> Rejects the Pope's universal authority<br>
      • <strong>Married clergy:</strong> Priests can be married, but bishops must be celibate<br>
      • <strong>Theosis:</strong> Emphasis on becoming "partakers of the divine nature"<br><br>
      <strong>Major Churches:</strong> Greek, Russian, Serbian, Romanian, Bulgarian Orthodox<br>
      <strong>Distinctive Practices:</strong> Divine Liturgy, extensive fasting, iconostasis in churches`
    },
    {
      id: "Lutheran",
      title: "Lutheran",
      tags: ["protestant", "reformation"],
      content: `<strong>Founded:</strong> c. 1517 AD (Martin Luther's Reformation)<br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>Justification by faith alone:</strong> Salvation by faith, not works (sola fide)<br>
      • <strong>Scripture alone:</strong> Bible is the sole authority (sola scriptura)<br>
      • <strong>Consubstantiation:</strong> Christ is present "in, with, and under" the bread and wine<br>
      • <strong>Two sacraments:</strong> Baptism and Communion only<br>
      • <strong>Liturgical worship:</strong> Maintains traditional liturgical structure<br>
      • <strong>Grace alone:</strong> Salvation is entirely God's work<br>
      • <strong>Priesthood of all believers:</strong> All Christians have direct access to God<br><br>
      <strong>Distinctive Features:</strong> Lutheran Confessions (Augsburg Confession), liturgical calendar, infant baptism<br>
      <strong>Major Bodies:</strong> Lutheran World Federation, Missouri Synod, Wisconsin Synod`
    },
    {
      id: "Reformed/Presbyterian",
      title: "Reformed/Presbyterian",
      tags: ["protestant", "reformation"],
      content: `<strong>Founded:</strong> c. 1536 AD (John Calvin in Geneva)<br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>Predestination:</strong> God has chosen who will be saved (TULIP theology)<br>
      • <strong>Sovereignty of God:</strong> God's absolute control over all things<br>
      • <strong>Church elders:</strong> Presbyterian church government with elected elders<br>
      • <strong>Simple worship:</strong> Focus on preaching and minimal ritual<br>
      • <strong>Covenant theology:</strong> Understanding of God's relationship with humanity through covenants<br>
      • <strong>Westminster Standards:</strong> Confessions and catechisms as doctrinal standards<br>
      • <strong>Total depravity:</strong> Humanity is completely corrupted by sin<br><br>
      <strong>Church Government:</strong> Presbyterian system with sessions, presbyteries, and assemblies<br>
      <strong>Major Bodies:</strong> Presbyterian Church (USA), Orthodox Presbyterian Church, Reformed churches`
    },
    {
      id: "Anabaptist",
      title: "Anabaptist",
      tags: ["protestant", "reformation"],
      content: `<strong>Founded:</strong> 1525 AD (Swiss Brethren, radical reformation)<br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>Adult baptism:</strong> Only believers who can make conscious decisions should be baptized<br>
      • <strong>Pacifism:</strong> Commitment to non-violence and peace<br>
      • <strong>Simple living:</strong> Emphasis on modesty and rejection of worldliness<br>
      • <strong>Church-state separation:</strong> Complete separation of church and government<br>
      • <strong>Community discipline:</strong> Strong emphasis on church discipline and mutual accountability<br>
      • <strong>Biblical literalism:</strong> Direct application of New Testament teachings<br>
      • <strong>Voluntary faith:</strong> Faith cannot be coerced or inherited<br><br>
      <strong>Modern Descendants:</strong> Mennonites, Amish, Hutterites, Brethren churches<br>
      <strong>Historical Note:</strong> Heavily persecuted by both Catholics and other Protestants`
    },
    {
      id: "Anglican",
      title: "Anglican",
      tags: ["protestant"],
      content: `<strong>Founded:</strong> 1534 AD (Henry VIII's break from Rome)<br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>Via media:</strong> "Middle way" between Catholicism and Protestantism<br>
      • <strong>Episcopal governance:</strong> Led by bishops in apostolic succession<br>
      • <strong>Book of Common Prayer:</strong> Structured liturgical worship<br>
      • <strong>Three-legged stool:</strong> Scripture, tradition, and reason as authorities<br>
      • <strong>Broad spectrum:</strong> Includes high church (Anglo-Catholic), low church (Evangelical), and broad church traditions<br>
      • <strong>Royal supremacy:</strong> Monarch as Supreme Governor (in England)<br>
      • <strong>Married clergy:</strong> Priests and bishops can marry<br><br>
      <strong>Global Communion:</strong> Church of England, Episcopal Church (USA), Anglican churches worldwide<br>
      <strong>Distinctive Features:</strong> Cathedrals, choral tradition, theological diversity within unity`
    },
    {
      id: "Baptist",
      title: "Baptist",
      tags: ["protestant"],
      content: `<strong>Founded:</strong> 1609 AD (Amsterdam, John Smyth)<br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>Believer's baptism:</strong> Baptism by full immersion only after personal faith decision<br>
      • <strong>Local church autonomy:</strong> Each congregation is independent and self-governing<br>
      • <strong>Biblical authority:</strong> Scripture alone as the final authority<br>
      • <strong>Priesthood of believers:</strong> Every Christian has direct access to God<br>
      • <strong>Religious liberty:</strong> Strong advocate for freedom of conscience<br>
      • <strong>Evangelism:</strong> Strong emphasis on personal evangelism and missions<br>
      • <strong>Congregational polity:</strong> Democratic church governance<br><br>
      <strong>Major Groups:</strong> Southern Baptist Convention, American Baptist Churches, Independent Baptist churches<br>
      <strong>Cultural Impact:</strong> Historically influential in religious freedom movements`
    },
    {
      id: "Methodist",
      title: "Methodist",
      tags: ["protestant"],
      content: `<strong>Founded:</strong> 18th century (John Wesley's revival movement)<br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>Prevenient grace:</strong> God's grace is available to all people before they believe<br>
      • <strong>Arminian soteriology:</strong> Humans can choose to accept or reject salvation<br>
      • <strong>Social holiness:</strong> Personal holiness must lead to social action<br>
      • <strong>Perfectionism:</strong> Christians can achieve Christian perfection in this life<br>
      • <strong>Means of grace:</strong> Scripture, sacraments, prayer, and Christian fellowship<br>
      • <strong>Methodist quadrilateral:</strong> Scripture, tradition, reason, and experience<br>
      • <strong>Social justice:</strong> Strong emphasis on helping the poor and marginalized<br><br>
      <strong>Historical Impact:</strong> Abolition movement, temperance, civil rights<br>
      <strong>Major Bodies:</strong> United Methodist Church, Free Methodist, Nazarene churches`
    },
    {
      id: "Pentecostal",
      title: "Pentecostal",
      tags: ["protestant"],
      content: `<strong>Founded:</strong> Early 1900s (Azusa Street Revival, Los Angeles)<br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>Baptism in the Holy Spirit:</strong> Second experience after salvation, evidenced by speaking in tongues<br>
      • <strong>Spiritual gifts:</strong> Emphasis on all nine gifts of the Spirit (1 Corinthians 12)<br>
      • <strong>Divine healing:</strong> God heals today through prayer and faith<br>
      • <strong>Prosperity teaching:</strong> God desires believers to be healthy and prosperous (some denominations)<br>
      • <strong>Premillennialism:</strong> Jesus will return before the millennium<br>
      • <strong>Personal experience:</strong> Direct, personal relationship with God through the Spirit<br>
      • <strong>Evangelistic fervor:</strong> Strong emphasis on missions and church planting<br><br>
      <strong>Global Movement:</strong> Fastest-growing Christian movement worldwide<br>
      <strong>Major Bodies:</strong> Assemblies of God, Church of God in Christ, Foursquare Church`
    },
    {
      id: "Restorationist",
      title: "Restorationist",
      tags: ["protestant", "restoration"],
      content: `<strong>Founded:</strong> 1800s onwards (Stone-Campbell Movement and others)<br><br>
      <strong>Key Beliefs:</strong><br>
      • <strong>Primitive Christianity:</strong> Attempt to restore New Testament Christianity exactly<br>
      • <strong>No creeds:</strong> "No creed but Christ, no book but the Bible"<br>
      • <strong>Apostolic authority:</strong> Some claim restored apostolic authority<br>
      • <strong>Additional scriptures:</strong> Some groups accept new revelations or scriptures<br>
      • <strong>Biblical patterns:</strong> Strict adherence to perceived New Testament patterns<br>
      • <strong>Unity movement:</strong> Seeks to unite all Christians by returning to biblical basics<br>
      • <strong>Exclusive claims:</strong> Some claim to be the only true church<br><br>
      <strong>Major Groups:</strong> Churches of Christ, Disciples of Christ, Latter-day Saints (Mormons), Jehovah's Witnesses<br>
      <strong>Controversy:</strong> Some groups considered non-orthodox due to additional revelations`
    },
    {
      id: "other",
      title: "Other Branches",
      tags: ["other", "modern"],
      content: `<strong>Various Other Christian Movements:</strong><br><br>
      <strong>Emerging Church:</strong> Postmodern approach to Christianity emphasizing social justice and authentic community<br><br>
      <strong>Non-denominational:</strong> Churches that reject formal denominational ties while maintaining orthodox beliefs<br><br>
      <strong>Messianic Judaism:</strong> Jewish believers in Jesus who maintain Jewish cultural practices<br><br>
      <strong>House Churches:</strong> Simple church movements meeting in homes with minimal structure<br><br>
      <strong>Quakers (Friends):</strong> Emphasize inner light, silent worship, and social justice<br><br>
      <strong>Adventist Churches:</strong> Focus on the Second Coming of Christ and often Sabbath observance<br><br>
      <strong>Unity and Universalist:</strong> Emphasize universal salvation and the goodness of humanity`
    }
  ],
  verses: [""],
  sources: [
    
  ],
  lastUpdated: "09/08/25",
}
