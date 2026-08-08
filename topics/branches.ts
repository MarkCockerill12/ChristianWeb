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
    description: `Do they believe in church authority?`,
    icon: "ExternalLink",
  },
  {
    key: "tradition",
    label: "Tradition",
    description: `Do they emphasize tradition?`,
    icon: "Clock",
  },
  {
    key: "sacraments",
    label: "Sacraments",
    description: `Do they practice sacraments?`,
    icon: "CheckCircle2",
  },
  {
    key: "pope",
    label: "Papal Authority",
    description: `Do they recognize the Pope?`,
    icon: "Heart",
  },
  {
    key: "priesthood",
    label: "Priesthood of All Believers",
    description: `Do they believe all Christians are priests?`,
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
  waldensian: {
    churchAuthority: false,
    tradition: false,
    sacraments: true,
    pope: false,
    priesthood: true,
  },
  moravian: {
    churchAuthority: false,
    tradition: false,
    sacraments: true,
    pope: false,
    priesthood: true,
  },
  congregationalist: {
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
  {
    id: "waldensian",
    date: "c. 1173 AD",
    period: "Pre-Reformation",
    color: "blue",
  },
  {
    id: "moravian",
    date: "1457 AD",
    period: "Pre-Reformation",
    color: "orange",
  },
  {
    id: "congregationalist",
    date: "c. 1580s AD",
    period: "Post-Reformation",
    color: "red",
  },
];

import type { Topic } from "./types";

export const branches: Topic = {
  id: "branches",
  title: "What are the different branches of Christianity? ",
  description: `What are the differences between each branch? Are any of them truer than others?`,
  icon: "Church",
  color: "purple",
  tags: ["Branches", "Historical"], //make clear what the fundamental aspect of christianity is
  verses: [
    { reference: "1 Corinthians 1:10", text: "I appeal to you, brothers and sisters, in the name of our Lord Jesus Christ, that all of you agree with one another in what you say and that there be no divisions among you, but that you be perfectly united in mind and thought." },
    { reference: "John 17:21", text: "that all of them may be one, Father, just as you are in me and I am in you. May they also be in us so that the world may believe that you have sent me." },
    { reference: "Ephesians 4:3-6", text: "Make every effort to keep the unity of the Spirit through the bond of peace. There is one body and one Spirit, just as you were called to one hope when you were called; one Lord, one faith, one baptism; one God and Father of all, who is over all and through all and in all." }
  ],
  tldr: `Christianity's main branches include the Early Universal/Catholic Church (1st-4th c.), Roman Catholic (which developed papal supremacy), Eastern Orthodox (which split in 1054 AD), Oriental Orthodox (split in 451 AD), and Protestant (which emerged from the 16th c. Reformation). Each differs on beliefs about scriptural authority, tradition, and sacraments.`,
  content: "",

  subtopics: [
    {
      id: "catholic",
      title: "Universal / Original Catholic Church",
      tags: ["catholic", "traditional", "early"],
      content: `**Founded:** 1st century (Apostolic era, established by The Holy Spirit through the Apostles following Pentecost)[^1]

      **Key Beliefs:**

      • **Apostolic succession:** Direct line of authority from the apostles[^2]

      • **Sacraments:** Recognition of core sacraments like Baptism and Eucharist[^3]

      • **Scripture + Tradition:** Both the Bible and apostolic tradition as sources of divine revelation[^4]

      • **Episcopal authority:** Led by bishops (episkopoi) but without singular papal supremacy[^5]

      • **Unity in diversity:** Multiple centers of authority (Rome, Antioch, Alexandria, Jerusalem, Constantinople)[^6]

      • **Early church councils:** Collective decision-making through ecumenical councils[^7]

      • **Martyrdom and persecution:** Sustained through Roman persecution until Constantine[^8]

      **Historical Context:** The original "catholic" (universal) church before major schisms[^9]. This represents Christianity as it existed in the first few centuries before the rise of papal supremacy[^10].

      **Distinctive Features:** House churches, bishop-led communities, emphasis on apostolic teaching and fellowship[^11]`,
    },
    {
      id: "romanCatholic",
      title: "Roman Catholic Church",
      tags: ["catholic", "traditional", "papal"],
      content: `**Founded:** Gradual development, with papal supremacy solidifying from the 4th-11th centuries[^12][^13]

      **Key Beliefs:**

      • **Papal supremacy:** The Pope (Bishop of Rome) has ultimate, universal authority over the Church[^14]

      • **Seven sacraments:** Baptism, Confirmation, Eucharist, Penance, Anointing, Holy Orders, Matrimony[^15][^16]

      • **Scripture + Tradition + Magisterium:** Authority from the Bible, tradition, and the teaching office of the Church[^17]

      • **Faith + Works:** Salvation comes by grace through faith, which is expressed in good works[^18]

      • **Saints and Mary:** Veneration (honor) of saints and Mary as intercessors[^19]

      • **Transubstantiation:** Bread and wine fully become the body and blood of Christ[^20]

      • **Purgatory:** A state of final purification after death for those destined for heaven[^21]

      • **Celibate clergy:** Priests and bishops must remain unmarried (in the Latin Rite)[^22]

      **Historical Development:** Evolved from the early Catholic church with increasing papal authority, especially after the fall of the Western Roman Empire[^23] and the East-West Schism (1054 AD)[^24].

      **Distinctive Practices:** Mass, confession to priests, extensive liturgical calendar, Vatican authority, elaborate church hierarchy[^25]`,
    },
    {
      id: "orientalOrthodox",
      title: "Oriental Orthodox",
      tags: ["orthodox", "traditional"],
      content: `**Founded:** c. 451 AD (split at Council of Chalcedon)[^26]

      **Key Beliefs:**

      • **Miaphysite Christology:** Christ has one united divine-human nature (different from Catholic/Eastern Orthodox Dyophysitism)[^27]

      • **Regional emphasis:** Strong connection to ethnic and national identity[^28]

      • **Ancient traditions:** Preserves very early Christian practices[^29]

      • **No papal authority:** Rejects Roman Catholic papal supremacy[^30]

      • **Seven sacraments:** Similar to Catholic and Eastern Orthodox[^31]

      **Major Churches:** Ethiopian Orthodox[^32], Coptic Orthodox[^33], Armenian Apostolic[^34], Syriac Orthodox[^35]

      **Distinctive Practices:** Unique liturgical traditions, ancient languages (Coptic, Ge'ez, Armenian), fasting periods[^36]`,
    },
    {
      id: "churchOfTheEast",
      title: "Church of the East",
      tags: ["traditional"],
      content: `**Founded:** c. 410 AD (Synod of Seleucia-Ctesiphon); split from West after 431 AD Council of Ephesus[^37]

      **Key Beliefs:**

      • **Dyophysite Christology:** Traditionally described as "Nestorian," emphasizes two distinct natures (divine and human) in Christ[^38]

      • **Historical missions:** Once spread from the Middle East to China and India[^39]

      • **Independent development:** Developed separately from Western and Byzantine Christianity[^40]

      • **Syriac tradition:** Uses Syriac language and Eastern liturgies[^41]

      • **Married clergy:** Allows married priests and bishops[^42]

      **Modern Remnants:** Assyrian Church of the East, Ancient Church of the East[^43]

      **Historical Note:** Significantly reduced due to persecution and isolation, but historically very influential in Asia[^44]`,
    },
    {
      id: "easternOrthodox",
      title: "Eastern Orthodox",
      tags: ["orthodox", "traditional"],
      content: `**Founded:** 1054 AD (Great Schism from Roman Catholicism)[^45]

      **Key Beliefs:**

      • **National churches:** Organized into autocephalous (independent) national churches[^46]

      • **Seven sacraments:** Similar to Catholicism but with different nuances (e.g., infant communion)[^47]

      • **Strong tradition:** Scripture and "Holy Tradition" together, guided by Ecumenical Councils[^48]

      • **Icons:** Veneration (not worship) of religious icons as "windows to heaven"[^49]

      • **No papal supremacy:** Rejects the Pope's universal authority; sees him as "first among equals" (historically)[^50]

      • **Married clergy:** Priests can be married (if married before ordination), but bishops must be celibate[^51]

      • **Theosis:** Emphasis on salvation as a process of deification, becoming "partakers of the divine nature"[^52]

      **Major Churches:** Greek, Russian, Serbian, Romanian, Bulgarian Orthodox[^53]

      **Distinctive Practices:** Divine Liturgy, extensive fasting, iconostasis in churches[^54]`,
    },
    {
      id: "Lutheran",
      title: "Lutheran",
      tags: ["protestant", "reformation"],
      content: `**Founded:** c. 1517 AD (Martin Luther's Reformation)[^55]

      **Key Beliefs:**

      • **Justification by faith alone:** Salvation by grace through faith, not works (sola fide)[^56]

      • **Scripture alone:** Bible is the sole infallible authority (sola scriptura)[^57]

      • **Sacramental Union:** Christ is present "in, with, and under" the bread and wine (often called Consubstantiation)[^58]

      • **Two sacraments:** Baptism and Communion as primary sacraments[^59]

      • **Liturgical worship:** Maintains traditional liturgical structure (though varies)[^60]

      • **Grace alone:** Salvation is entirely God's unmerited work (sola gratia)[^61]

      • **Priesthood of all believers:** All Christians have direct access to God[^62]

      **Distinctive Features:** Lutheran Confessions (Book of Concord, Augsburg Confession)[^63], liturgical calendar, infant baptism[^64].

      **Major Bodies:** Lutheran World Federation[^65], Lutheran Church–Missouri Synod, Wisconsin Evangelical Lutheran Synod[^66]`,
    },
    {
      id: "Reformed/Presbyterian",
      title: "Reformed/Presbyterian",
      tags: ["protestant", "reformation", "calvinist"],
      content: `**Founded:** c. 1536 AD (John Calvin in Geneva)[^67]

      **Key Beliefs:**

      • **Sovereignty of God:** God's absolute control and foreknowledge over all things[^68]

      • **Predestination:** God has chosen (elected) who will be saved (TULIP theology is a summary of this)[^69]

      • **Church elders:** Presbyterian church government with elected elders (presbyters)[^70]

      • **Simple worship:** Focus on preaching and scripture, with minimal ritual[^71]

      • **Covenant theology:** Understanding of God's relationship with humanity through covenants[^72]

      • **Westminster Standards:** Confessions and catechisms as doctrinal standards for many[^73]

      • **Total depravity:** Humanity is completely corrupted by sin and unable to choose God[^74]

      **Church Government:** Presbyterian system with sessions, presbyteries, and general assemblies[^75]

      **Major Bodies:** Presbyterian Church (USA)[^76], Orthodox Presbyterian Church, World Communion of Reformed Churches[^77]`,
    },
    {
      id: "Anabaptist",
      title: "Anabaptist",
      tags: ["protestant", "reformation"],
      content: `**Founded:** 1525 AD (Swiss Brethren, radical reformation)[^78]

      **Key Beliefs:**

      • **Adult baptism:** "Re-baptism" of believers who make a conscious decision (credo-baptism)[^79]

      • **Pacifism:** Commitment to non-violence and peace (non-resistance)[^80]

      • **Simple living:** Emphasis on modesty and separation from worldly culture[^81]

      • **Church-state separation:** Complete separation of church and government[^82]

      • **Community discipline:** Strong emphasis on church discipline ("the ban") and mutual accountability[^83]

      • **Biblical literalism:** Direct application of New Testament teachings, especially the Sermon on the Mount[^84]

      • **Voluntary faith:** Faith cannot be coerced or inherited[^85]

      **Modern Descendants:** Mennonites[^86], Amish, Hutterites, Brethren churches[^87]

      **Historical Note:** Heavily persecuted by both Catholics and other Protestants[^88]`,
    },
    {
      id: "Anglican",
      title: "Anglican",
      tags: ["protestant"],
      content: `**Founded:** 1534 AD (Henry VIII's break from Rome)[^89]

      **Key Beliefs:**

      • **Via media:** "Middle way" between Catholicism and Protestantism[^90]

      • **Episcopal governance:** Led by bishops in apostolic succession[^91]

      • **Book of Common Prayer:** Structured liturgical worship[^92]

      • **Three-legged stool:** Scripture, tradition, and reason as authorities[^93]

      • **Broad spectrum:** Includes high church (Anglo-Catholic), low church (Evangelical), and broad church traditions[^94]

      • **Royal supremacy:** Monarch as Supreme Governor (in England)[^95]

      • **Married clergy:** Priests and bishops can marry[^96]

      **Global Communion:** Church of England, Episcopal Church (USA)[^97], Anglican churches worldwide[^98]

      **Distinctive Features:** Cathedrals, choral tradition, theological diversity within unity[^99]`,
    },
    {
      id: "Baptist",
      title: "Baptist",
      tags: ["protestant"],
      content: `**Founded:** 1609 AD (Amsterdam, John Smyth)[^100]

      **Key Beliefs:**

      • **Believer's baptism:** Baptism by full immersion only after personal faith decision[^101]

      • **Local church autonomy:** Each congregation is independent and self-governing[^102]

      • **Biblical authority:** Scripture alone as the final authority (sola scriptura)[^103]

      • **Priesthood of believers:** Every Christian has direct access to God[^104]

      • **Religious liberty:** Strong advocate for freedom of conscience and separation of church and state[^105]

      • **Evangelism:** Strong emphasis on personal evangelism and missions[^106]

      • **Congregational polity:** Democratic church governance[^107]

      **Major Groups:** Southern Baptist Convention, American Baptist Churches, Independent Baptist churches[^108]

      **Cultural Impact:** Historically influential in religious freedom movements[^109]`,
    },
    {
      id: "Methodist",
      title: "Methodist",
      tags: ["protestant"],
      content: `**Founded:** 18th century (John Wesley's revival movement)[^110]

      **Key Beliefs:**

      • **Prevenient grace:** God's grace is available to all people, enabling them to respond to Him[^111]

      • **Arminian soteriology:** Humans have free will to accept or reject salvation[^112]

      • **Social holiness:** Personal holiness must lead to social action and justice[^113]

      • **Perfectionism:** Christians can achieve "Christian perfection" (sanctification) in this life[^114]

      • **Means of grace:** Emphasizes spiritual growth through scripture, sacraments, prayer, and fellowship[^115]

      • **Methodist quadrilateral:** Authority based on Scripture (primary), tradition, reason, and experience[^116]

      • **Social justice:** Strong emphasis on helping the poor and marginalized[^117]

      **Historical Impact:** Abolition movement, temperance, civil rights[^118]

      **Major Bodies:** United Methodist Church[^119], Free Methodist, African Methodist Episcopal Church (AME)[^120]`,
    },
    {
      id: "Pentecostal",
      title: "Pentecostal",
      tags: ["protestant", "charismatic"],
      content: `**Founded:** Early 1900s (Azusa Street Revival, Los Angeles)[^121]

      **Key Beliefs:**

      • **Baptism in the Holy Spirit:** A distinct experience after salvation, evidenced by speaking in tongues[^122]

      • **Spiritual gifts:** Emphasis on all nine gifts of the Spirit (1 Corinthians 12) for today[^123]

      • **Divine healing:** God heals today through prayer and faith[^124]

      • **Prosperity teaching:** God desires believers to be healthy and prosperous (common, but not universal)[^125]

      • **Premillennialism:** Belief that Jesus will return before the millennium[^126]

      • **Personal experience:** Direct, personal relationship with God through the Spirit[^127]

      • **Evangelistic fervor:** Strong emphasis on missions and church planting[^128]

      **Global Movement:** One of the fastest-growing Christian movements worldwide[^129]

      **Major Bodies:** Assemblies of God[^130], Church of God in Christ, Foursquare Church[^131]`,
    },
    {
      id: "Restorationist",
      title: "Restorationist",
      tags: ["protestant", "restoration"],
      content: `**Founded:** 1800s onwards (Stone-Campbell Movement and others)[^132]

      **Key Beliefs:**

      • **Primitive Christianity:** Attempt to restore New Testament Christianity exactly, bypassing tradition[^133]

      • **No creeds:** "No creed but Christ, no book but the Bible"[^134]

      • **Biblical patterns:** Strict adherence to perceived New Testament patterns for worship and structure[^135]

      • **Unity movement:** Seeks to unite all Christians by returning to biblical basics[^136]

      **Major Groups:** Churches of Christ, Disciples of Christ, Christian Church (Disciples of Christ)[^137].

      **Note:** Other groups like Latter-day Saints and Jehovah's Witnesses also originated in this period with a "restoration" goal, but are considered non-orthodox by mainstream Christianity (see 'Other Movements').[^138]`,
    },
    {
      id: "Episcopal",
      title: "Episcopal",
      tags: ["anglican", "protestant"],
      content: `**Founded:** 1789 AD (American Episcopal Church formed after American Revolution)[^139]

      **Key Beliefs:**

      • **Anglican tradition:** Part of the worldwide Anglican Communion (USA branch)[^140]

      • **Via media:** "Middle way" between Catholicism and Protestantism[^141]

      • **Episcopal governance:** Led by bishops in apostolic succession[^142]

      • **Book of Common Prayer:** Liturgical worship with structured prayers[^143]

      • **Broad theological spectrum:** Includes Anglo-Catholic, Evangelical, and Liberal traditions[^144]

      • **Social justice:** Strong emphasis on social issues and inclusion[^145]

      • **Ordination of women:** Ordains women as priests and bishops[^146]

      • **LGBTQ+ inclusion:** Generally affirming of LGBTQ+ individuals and clergy[^147]

      **Distinctive Features:** Beautiful liturgy, cathedral tradition, theological education emphasis[^148]`,
    },
    {
      id: "quakers",
      title: "Quakers (Religious Society of Friends)",
      tags: ["other", "modern", "pacifist"],
      content: `**Founded:** c. 1650s (George Fox, England)[^149]

      **Key Beliefs:**

      • **Inner Light:** Emphasize the "inner light" of God in every person[^150]

      • **Unprogrammed Worship:** Often meet in silent worship, waiting for the Holy Spirit to move members to speak[^151]

      • **No Sacraments:** Traditionally do not practice physical sacraments like baptism or communion, seeing all of life as sacramental[^152]

      • **Peace Testimony:** Historic commitment to pacifism and non-violence[^153]

      • **Equality:** Strong belief in the equality of all people, leading to advocacy for abolition, women's rights, etc.[^154]

      **Distinctive Features:** Testimonies (Simplicity, Peace, Integrity, Community, Equality), decision-making by "sense of the meeting" (seeking unity)[^155]`,
    },
    {
      id: "seventhDayAdventist",
      title: "Seventh-day Adventist",
      tags: ["other", "modern", "restorationist"],
      content: `**Founded:** 1863 (USA, from Millerite movement)[^156]

      **Key Beliefs:**

      • **Seventh-day Sabbath:** Observance of the Sabbath on Saturday[^157]

      • **Second Coming:** Emphasis on the imminent literal return (Advent) of Christ[^158]

      • **Health Message:** Focus on health and wellness, often including vegetarianism and abstinence from alcohol/tobacco[^159]

      • **Ellen G. White:** Regard her writings as an authoritative source of truth, though subordinate to the Bible[^160]

      • **State of the Dead:** Belief in "soul sleep" (unconsciousness) between death and resurrection[^161]

      **Distinctive Features:** Large worldwide missions, hospital, and education systems[^162]; belief in an "investigative judgment" that began in 1844[^163]`,
    },
    {
      id: "messianicJudaism",
      title: "Messianic Judaism",
      tags: ["other", "modern", "jewish"],
      content: `**Founded:** Modern movement, 1960s-1970s[^164]

      **Key Beliefs:**

      • **Jesus as Messiah:** Jewish believers who accept Jesus (Yeshua) as the promised Messiah of Israel[^165]

      • **Jewish Identity:** Maintain Jewish identity, customs, and holidays (e.g., Passover, Yom Kippur)[^166]

      • **Torah Observance:** Varies, but many observe aspects of the Torah as a sign of cultural identity and obedience, not for salvation[^167]

      • **Trinity:** Most (but not all) Messianic Jews adhere to the doctrine of the Trinity[^168]

      **Distinctive Features:** Synagogue-style worship, use of Hebrew, bridging Jewish and Christian theology[^169]. Not recognized as Judaism by mainstream Jewish movements[^170].`,
    },
    {
      id: "nonDenominational",
      title: "Non-denominational / Other Movements",
      tags: ["other", "modern", "independent"],
      content: `**Founded:** 20th century onwards (especially in the USA)[^171]

      **Key Beliefs (General):**

      • **No Denominational Ties:** Reject formal ties to historic denominations and their hierarchies[^172]

      • **Local Church Autonomy:** Emphasize independence and self-governance[^173]

      • **Bible-Centered:** Strongly Bible-focused, usually with an evangelical theology (similar to Baptist or Pentecostal beliefs)[^174]

      • **Contemporary Worship:** Often characterized by modern music and informal service styles[^175]

      **Related Movements:**

      • **House Church Movement:** Focuses on simple, small-group meetings in homes, emphasizing community and mimicking the New Testament model[^176].

      • **Emerging Church:** A postmodern movement questioning traditional evangelical structures and embracing social justice and deconstructed faith[^177].

      **A Note on Orthodox Classification:**

      Some movements, while claiming Christian identity, are considered outside orthodox Christianity by Catholic, Orthodox, and Protestant groups due to fundamental doctrinal differences. This includes groups like **Latter-day Saints (Mormons)**[^178] and **Jehovah's Witnesses** (which have unique restorationist claims and non-Trinitarian theology)[^179], and **Unitarian Universalists**, who have Christian roots but now embrace a pluralistic, non-creedal faith that rejects the Trinity[^180].`,
    },
    {
      id: "waldensian",
      title: "Waldensians",
      tags: ["pre-reformation", "traditional", "protestant"],
      content: `**Founded:** c. 1173 AD (Peter Waldo, France)[^181]

      **Key Beliefs:**

      • **Pre-Reformation Protestantism:** Emphasized lay preaching, voluntary poverty, and the authority of scripture centuries before Martin Luther[^182]

      • **Calvinist Alignment:** Formally merged into the Reformed (Calvinist) tradition during the Swiss Reformation in 1532[^183]

      • **Priesthood of Believers:** Rejects papal authority and Catholic church hierarchies in favor of scriptural authority[^184]

      **Distinctive Features:** Survived centuries of severe persecution in the Alpine valleys of Italy. Today, they form the Waldensian Evangelical Church[^185].`,
    },
    {
      id: "moravian",
      title: "Moravian Church (Unitas Fratrum)",
      tags: ["pre-reformation", "traditional", "protestant"],
      content: `**Founded:** 1457 AD (Bohemian Reformation, inspired by Jan Hus)[^186]

      **Key Beliefs:**

      • **Jan Hus Influence:** Traces roots to the Hussite movement which challenged papal authority, liturgical language, and communion practices prior to the Reformation[^187]

      • **Herrnhut Revival:** Renewed in 1727 under Count Zinzendorf, leading to a famous 100-year continuous prayer vigil[^188]

      • **Global Missions:** Pioneered modern Protestant foreign missions, sending missionaries worldwide in the 18th century[^189]

      **Distinctive Features:** The oldest active Protestant denomination in the world, famous for the motto: "In essentials unity, in non-essentials liberty, in all things charity"[^190].`,
    },
    {
      id: "congregationalist",
      title: "Congregationalists",
      tags: ["protestant", "puritan"],
      content: `**Founded:** c. 1580s AD (Puritan Separatists, England)[^191]

      **Key Beliefs:**

      • **Local Autonomy:** Rejects both episcopal (bishop) and presbyterian (elder council) hierarchies; each local congregation is fully independent and self-governing under Christ[^192]

      • **Puritan Roots:** Developed by English Puritans who wanted to simplify worship and purify the church of Catholic-style rituals[^193]

      • **Cambridge Platform (1648):** Established church government rules for early American Congregationalists[^194]

      **Distinctive Features:** Heavily influenced the settlement of colonial New England (including the Pilgrims)[^195]. Highly democratic church governance[^196].`,
    },
  ],

          sources: [
    "1. [Catholic Reference] New Advent, Catholic Encyclopedia. '03449a.' https://www.newadvent.org/cathen/03449a.htm",
    "2. [Encyclopedia] Britannica - Apostolic Succession. 'Doctrine of apostolic succession.' https://www.britannica.com/topic/apostolic-succession",
    "3. [Religious Encyclopedia] New Advent - Sacraments. 'Catholic perspective on the sacraments.' https://www.newadvent.org/cathen/13295a.htm",
    "4. [Academic] World History Encyclopedia - Christianity. 'Academic overview of Christian historical development.' https://www.worldhistory.org/Christianity/",
    "5. [Primary Source] Schaff, Creeds of Christendom. 'The Apostles' Creed.' https://www.ccel.org/ccel/schaff/creeds1.iv.ii.html",
    "6. [Primary Source] Schaff, Creeds of Christendom. 'The Nicene Creed.' https://www.ccel.org/ccel/schaff/creeds1.iv.iii.html",
    "7. [Primary Source] Schaff, Creeds of Christendom. 'The Creed of Chalcedon.' https://www.ccel.org/ccel/schaff/creeds1.iv.iv.html",
    "8. [Primary Source] Schaff, Creeds of Christendom. 'The Athanasian Creed.' https://www.ccel.org/ccel/schaff/creeds1.iv.v.html",
    "9. [Primary Source] Schaff, Creeds of Christendom. 'General Character of the Oecumenical Creeds.' https://www.ccel.org/ccel/schaff/creeds1.iv.i.html",
    "10. [Primary Source] Schaff, Creeds of Christendom. 'The Origin of Creeds.' https://www.ccel.org/ccel/schaff/creeds1.iii.ii.html",
    "11. [Primary Source] Schaff, Creeds of Christendom. 'The Authority of Creeds.' https://www.ccel.org/ccel/schaff/creeds1.iii.iii.html",
    "12. [Encyclopedia] Britannica - Roman Catholicism. 'Academic overview of Roman Catholic doctrine, history, and organization.' https://www.britannica.com/topic/Roman-Catholicism",
    "13. [Reference] Vatican. 'Index.htm.' https://www.vatican.va/archive/ENG0015/_INDEX.HTM",
    "14. [Primary Source] Schaff, Creeds of Christendom. 'The Canons and Decrees of the Council of Trent.' https://www.ccel.org/ccel/schaff/creeds1.vi.iii.html",
    "15. [Official Church] Catechism of the Catholic Church. 'The Seven Sacraments.' https://www.vatican.va/archive/ENG0015/__P3E.HTM",
    "16. [Catholic Reference] New Advent, Catholic Encyclopedia. '12260a.' https://www.newadvent.org/cathen/12260a.htm",
    "17. [Primary Source] Schaff, Creeds of Christendom. 'The Profession of the Tridentine Faith, 1564.' https://www.ccel.org/ccel/schaff/creeds1.vi.iv.html",
    "18. [Primary Source] Schaff, Creeds of Christendom. 'The Roman Catechism, A.D. 1566.' https://www.ccel.org/ccel/schaff/creeds1.vi.v.html",
    "19. [Religious Encyclopedia] New Advent - Intercession of Saints. 'Catholic doctrine on the intercession of saints.' https://www.newadvent.org/cathen/08070a.htm",
    "20. [Encyclopedia] Britannica - Transubstantiation. 'Definition and explanation of transubstantiation.' https://www.britannica.com/topic/transubstantiation",
    "21. [Religious Encyclopedia] New Advent - Purgatory. 'Catholic doctrine of purgatory.' https://www.newadvent.org/cathen/12575a.htm",
    "22. [Primary Source] Schaff, Creeds of Christendom. 'The Vatican Decrees, Constitution of the Catholic Faith.' https://www.ccel.org/ccel/schaff/creeds1.vi.xi.html",
    "23. [Primary Source] Schaff, Creeds of Christendom. 'The Vatican Decrees, the Papal Infallibility Decree.' https://www.ccel.org/ccel/schaff/creeds1.vi.xii.html",
    "24. [Primary Source] Schaff, Creeds of Christendom. 'The Papal Syllabus, A.D. 1864.' https://www.ccel.org/ccel/schaff/creeds1.vi.ix.html",
    "25. [Primary Source] Schaff, Creeds of Christendom. 'The Creeds of the Roman Church.' https://www.ccel.org/ccel/schaff/creeds1.vi.html",
    "26. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Eutychianism.' https://www.newadvent.org/cathen/05633a.htm",
    "27. [Primary Source] Schaff, Creeds of Christendom. 'The Symbol of Chalcedon.' https://www.ccel.org/ccel/schaff/creeds2.iv.i.iii.html",
    "28. [Encyclopedia] Britannica - Oriental Orthodox church. 'Overview of the tradition.' https://www.britannica.com/topic/Oriental-Orthodox-church",
    "29. [Encyclopedia] Wikipedia. 'Malankara Orthodox Syrian Church.' https://en.wikipedia.org/wiki/Malankara_Orthodox_Syrian_Church",
    "30. [Encyclopedia] Wikipedia. 'Cyril of Alexandria.' https://en.wikipedia.org/wiki/Cyril_of_Alexandria",
    "31. [Encyclopedia] Wikipedia. 'Monophysitism.' https://en.wikipedia.org/wiki/Monophysitism",
    "32. [Encyclopedia] Wikipedia. 'Christianity in Ethiopia.' https://en.wikipedia.org/wiki/Christianity_in_Ethiopia",
    "33. [Catholic Reference] New Advent, Catholic Encyclopedia. '10489b.' https://www.newadvent.org/cathen/10489b.htm",
    "34. [Encyclopedia] Wikipedia. 'Oriental Orthodoxy.' https://en.wikipedia.org/wiki/Oriental_Orthodoxy",
    "35. [Encyclopedia] Wikipedia. 'Fasting in Christianity.' https://en.wikipedia.org/wiki/Fasting_in_Christianity",
    "36. [Wikipedia] Liturgy of Saint James. 'An ancient Christian liturgy used by Oriental Orthodox.' https://en.wikipedia.org/wiki/Liturgy_of_Saint_James",
    "37. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Nestorius and Nestorianism.' https://www.newadvent.org/cathen/10755a.htm",
    "38. [Catholic Reference] New Advent, Catholic Encyclopedia. 'East Syrian Rite.' https://www.newadvent.org/cathen/14413a.htm",
    "39. [Academic Article] ResearchGate. 'The Church of the East: A Concise History.' https://www.researchgate.net/publication/293179513_The_Church_of_the_East_A_Concise_History",
    "40. [Academic] World History Encyclopedia - Assyrian Church of the East. 'Independent development.' https://www.worldhistory.org/Assyrian_Church_of_the_East/",
    "41. [Catholic Reference] New Advent, Catholic Encyclopedia. 'The Eastern Schism.' https://www.newadvent.org/cathen/13535a.htm",
    "42. [Encyclopedia] Wikipedia. 'Married Clergy.' https://en.wikipedia.org/wiki/Married_clergy",
    "43. [Encyclopedia] Wikipedia. 'Ancient Church of the East.' https://en.wikipedia.org/wiki/Ancient_Church_of_the_East",
    "44. [Academic/Public] PBS Frontline - From Jesus to Christ. 'Map and history of its expansion.' https://www.pbs.org/wgbh/pages/frontline/shows/religion/",
    "45. [Encyclopedia] Britannica - Schism of 1054. 'The Great Schism.' https://www.britannica.com/event/Schism-of-1054",
    "46. [Encyclopedia] Britannica - Eastern Orthodoxy. 'Structure and organization.' https://www.britannica.com/topic/Eastern-Orthodoxy",
    "47. [Official Church] Orthodox Church in America (OCA). 'The Sacraments.' https://www.oca.org/orthodoxy/the-orthodox-faith/worship/the-sacraments",
    "48. [Official Church] Saint Katherine Greek Orthodox Church. 'Scripture and Tradition.' https://stkatherineaz.org/holy-scripture-holy-tradition",
    "49. [Primary Source] Schaff, Creeds of Christendom. 'The Orthodox Confession of Mogilas, A.D. 1643.' https://www.ccel.org/ccel/schaff/creeds1.v.vi.html",
    "50. [Religious Organization] Orthodox Council. 'The Ecumenical Patriarchate.' https://www.orthodoxcouncil.org/ecumenical-patriarchate.html",
    "51. [Primary Source] Schaff, Creeds of Christendom. 'The Synod of Jerusalem and the Confession of Dositheus.' https://www.ccel.org/ccel/schaff/creeds1.v.vii.html",
    "52. [Primary Source] Schaff, Creeds of Christendom. 'The Confession of Gennadius, A.D. 1453.' https://www.ccel.org/ccel/schaff/creeds1.v.ii.html",
    "53. [Religious Organization] World Council of Churches. 'Eastern Orthodox Churches.' https://www.oikoumene.org/church-families/orthodox-churches-eastern",
    "54. [Official Church] OCA. 'Worship.' https://www.oca.org/orthodoxy/the-orthodox-faith/worship",
    "55. [Primary Source] Schaff, Creeds of Christendom. 'The Augsburg Confession, A.D. 1530.' https://www.ccel.org/ccel/schaff/creeds3.iii.ii.html",
    "56. [Encyclopedia] Britannica - Justification. 'Theological doctrine of justification by faith.' https://www.britannica.com/topic/justification-Christianity",
    "57. [Primary Source] Schaff, Creeds of Christendom. 'Luther's Small Catechism, A.D. 1529.' https://www.ccel.org/ccel/schaff/creeds3.iii.iii.html",
    "58. [Primary Source] Schaff, Creeds of Christendom. 'The Formula of Concord, A.D. 1576.' https://www.ccel.org/ccel/schaff/creeds3.iii.iv.html",
    "59. [Primary Source] Schaff, Creeds of Christendom. 'The Apology of the Augsburg Confession.' https://www.ccel.org/ccel/schaff/creeds1.viii.iii.html",
    "60. [Primary Source] Schaff, Creeds of Christendom. 'The Articles of Smalcald, A.D. 1537.' https://www.ccel.org/ccel/schaff/creeds1.viii.v.html",
    "61. [Primary Source] Schaff, Creeds of Christendom. 'The Saxon Visitation Articles, A.D. 1592.' https://www.ccel.org/ccel/schaff/creeds3.iii.v.html",
    "62. [Primary Source] Schaff, Creeds of Christendom. 'The Lutheran Confessions.' https://www.ccel.org/ccel/schaff/creeds1.viii.i.html",
    "63. [Primary Source] Schaff, Creeds of Christendom. 'Luther's Catechisms, A.D. 1529.' https://www.ccel.org/ccel/schaff/creeds1.viii.iv.html",
    "64. [Encyclopedia] Wikipedia. 'Lutheran Hymnody.' https://en.wikipedia.org/wiki/Lutheran_hymnody",
    "65. [Encyclopedia] Wikipedia. 'Formula of Concord.' https://en.wikipedia.org/wiki/Formula_of_Concord",
    "66. [Academic] World History Encyclopedia - Protestant Reformation. 'Overview of Reformation movements.' https://www.worldhistory.org/Protestant_Reformation",
    "67. [Primary Source] Schaff, Creeds of Christendom. 'The Westminster Confession of Faith, A.D. 1647.' https://www.ccel.org/ccel/schaff/creeds3.iv.xvii.html",
    "68. [Primary Source] Schaff, Creeds of Christendom. 'The Westminster Shorter Catechism, A.D. 1647.' https://www.ccel.org/ccel/schaff/creeds3.iv.xviii.html",
    "69. [Encyclopedia] Britannica - Predestination. 'Doctrine of predestination.' https://www.britannica.com/topic/predestination",
    "70. [Official Agency] Presbyterian Mission Agency. 'Church Government.' https://www.presbyterianmission.org/what-we-believe/church-government/",
    "71. [Primary Source] Schaff, Creeds of Christendom. 'The Canons of the Synod of Dort, A.D. 1619.' https://www.ccel.org/ccel/schaff/creeds3.iv.xvi.html",
    "72. [Primary Source] Schaff, Creeds of Christendom. 'The Heidelberg Catechism, A.D. 1563.' https://www.ccel.org/ccel/schaff/creeds3.iv.vi.html",
    "73. [Primary Source] Schaff, Creeds of Christendom. 'The Belgic Confession, A.D. 1561.' https://www.ccel.org/ccel/schaff/creeds3.iv.viii.html",
    "74. [Primary Source] Schaff, Creeds of Christendom. 'The Second Helvetic Confession, A.D. 1566.' https://www.ccel.org/ccel/schaff/creeds3.iv.v.html",
    "75. [Primary Source] Schaff, Creeds of Christendom. 'The Scotch Confession of Faith, A.D. 1560.' https://www.ccel.org/ccel/schaff/creeds3.iv.ix.html",
    "76. [Primary Source] Schaff, Creeds of Christendom. 'The Sixty-seven Articles of Ulrich Zwingli, 1523.' https://www.ccel.org/ccel/schaff/creeds3.iv.ii.html",
    "77. [Religious Organization] World Communion of Reformed Churches. 'Homepage.' https://wcrc.eu",
    "78. [Primary Source] Schaff, Creeds of Christendom. 'The Lutheran and Reformed Confessions.' https://www.ccel.org/ccel/schaff/creeds1.vii.iii.html",
    "79. [Encyclopedia] GAMEO. 'Global Anabaptist Mennonite Encyclopedia Online.' https://gameo.org",
    "80. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Anabaptists.' https://www.newadvent.org/cathen/01445b.htm",
    "81. [Religious Organization] Mennonite World Conference. 'Shared Convictions of Anabaptists.' https://mwc-cmm.org/en/prayer/shared-conviction-7/",
    "82. [Encyclopedia] Wikipedia. 'Church State Separation.' https://en.wikipedia.org/wiki/Church-state_separation",
    "83. [Religious Encyclopedia] Global Anabaptist Mennonite Encyclopedia Online (GAMEO). 'Ban.' https://gameo.org/index.php?title=Ban",
    "84. [Religious Encyclopedia] GAMEO. 'Bible.' https://gameo.org/index.php?title=Bible",
    "85. [Encyclopedia] Wikipedia. 'Nonresistance.' https://en.wikipedia.org/wiki/Nonresistance",
    "86. [Encyclopedia] Wikipedia. 'Martyrs Mirror.' https://en.wikipedia.org/wiki/Martyrs_Mirror",
    "87. [Religious Encyclopedia] GAMEO. 'Anabaptism.' https://gameo.org/index.php?title=Anabaptism",
    "88. [Encyclopedia] Wikipedia. 'Radical Reformation, the Anabaptists.' https://en.wikipedia.org/wiki/Radical_Reformation#Anabaptists",
    "89. [Primary Source] Schaff, Creeds of Christendom. 'The Thirty-Nine Articles of Religion.' https://www.ccel.org/ccel/schaff/creeds3.iv.xi.html",
    "90. [Encyclopedia] Britannica - Anglicanism. 'The 'via media'.' https://www.britannica.com/topic/Anglicanism",
    "91. [Primary Source] Schaff, Creeds of Christendom. 'The Anglican Catechism, A.D. 1549 and 1662.' https://www.ccel.org/ccel/schaff/creeds3.iv.xii.html",
    "92. [Reference] Anglicancommunion. 'Instruments of Communion.aspx.' https://www.anglicancommunion.org/structures/instruments-of-communion.aspx",
    "93. [Primary Source] Schaff, Creeds of Christendom. 'The Lambeth Articles, A.D. 1595.' https://www.ccel.org/ccel/schaff/creeds3.iv.xiii.html",
    "94. [Primary Source] Schaff, Creeds of Christendom. 'The Irish Articles of Religion, A.D. 1615.' https://www.ccel.org/ccel/schaff/creeds3.iv.xiv.html",
    "95. [Primary Source] Leo XIII. 'Apostolicae Curae, on Anglican Orders.' https://www.ccel.org/ccel/schaff/creeds2.vii.vi.html",
    "96. [Encyclopedia] Wikipedia. 'Church of Ireland.' https://en.wikipedia.org/wiki/Church_of_Ireland",
    "97. [Encyclopedia] Wikipedia. 'Reformed Christianity.' https://en.wikipedia.org/wiki/Reformed_Christianity",
    "98. [Religious Organization] Anglican Communion. 'Homepage.' https://www.anglicancommunion.org/",
    "99. [Official Church] Church of England. 'Homepage.' https://www.churchofengland.org/",
    "100. [Primary Source] Schaff, Creeds of Christendom. 'The Baptist Confession of 1688, the Philadelphia Confession.' https://www.ccel.org/ccel/schaff/creeds3.v.ii.i.html",
    "101. [Primary Source] Schaff, Creeds of Christendom. 'The New Hampshire Baptist Confession, A.D. 1833.' https://www.ccel.org/ccel/schaff/creeds3.v.ii.ii.html",
    "102. [Primary Source] Schaff, Creeds of Christendom. 'Confession of the Free-will Baptists, A.D. 1834.' https://www.ccel.org/ccel/schaff/creeds3.v.ii.iii.html",
    "103. [Primary Source] Schaff, Creeds of Christendom. 'The Baptist Confessions.' https://www.ccel.org/ccel/schaff/creeds3.v.ii.html",
    "104. [Official Church] Southern Baptist Church (Boston). 'What We Believe.' https://www.sbcboston.org/our-beliefs",
    "105. [Encyclopedia] Wikipedia. 'Freedom of Religion in the United States.' https://en.wikipedia.org/wiki/Freedom_of_religion_in_the_United_States",
    "106. [Encyclopedia] Britannica. 'Baptist World Alliance.' https://www.britannica.com/topic/Baptist-World-Alliance",
    "107. [Encyclopedia] Wikipedia. 'Congregational Polity.' https://en.wikipedia.org/wiki/Congregational_polity",
    "108. [Religious Organization] Baptist World Alliance. 'Member Bodies.' https://baptistworld.org/members/",
    "109. [Wikipedia] Roger Williams (theologian). 'Early Baptist advocate for religious freedom.' https://en.wikipedia.org/wiki/Roger_Williams_(theologian)",
    "110. [Primary Source] Schaff, Creeds of Christendom. 'The Methodist Articles of Religion, A.D. 1784.' https://www.ccel.org/ccel/schaff/creeds3.v.vi.html",
    "111. [Official Church] McCabe United Methodist Church. 'Glossary: Prevenient Grace.' https://www.mccabechurch.com/wp-content/uploads/2019/cache/10-15-17.pdf",
    "112. [Primary Source] Schaff, Creeds of Christendom. 'The Five Arminian Articles, A.D. 1610.' https://www.ccel.org/ccel/schaff/creeds3.iv.xv.html",
    "113. [Official Church] UMC. 'Our Wesleyan Heritage.' https://www.umc.org/en/content/our-wesleyan-heritage",
    "114. [Reference] Umc. 'How We Serve.' https://www.umc.org/en/how-we-serve",
    "115. [Encyclopedia] Encyclopaedia Britannica. 'Methodism, History, Beliefs and Organization.' https://www.britannica.com/topic/Methodism",
    "116. [Wikipedia] Wesleyan Quadrilateral. 'Scripture, tradition, reason, experience.' https://en.wikipedia.org/wiki/Wesleyan_Quadrilateral",
    "117. [Official Church] UMC Justice. 'Social Principles.' https://www.umcjustice.org/documents/124",
    "118. [Encyclopedia] Wikipedia. 'Free Will.' https://en.wikipedia.org/wiki/Free_will",
    "119. [Encyclopedia] Wikipedia. 'Methodist Local Preacher.' https://en.wikipedia.org/wiki/Methodist_local_preacher",
    "120. [Encyclopedia] Wikipedia. 'Wesleyan–arminian Theology.' https://en.wikipedia.org/wiki/Wesleyan%E2%80%93Arminian_theology",
    "121. [Primary Source] Schaff, Creeds of Christendom. 'Recent Confessional Declarations.' https://www.ccel.org/ccel/schaff/creeds3.vi.ii.html",
    "122. [Encyclopedia] Wikipedia. 'Assemblies of God Statement of Fundamental Truths.' https://en.wikipedia.org/wiki/Assemblies_of_God_Statement_of_Fundamental_Truths",
    "123. [Wikipedia] Gifts of the Spirit. 'Nine gifts listed in 1 Corinthians 12.' https://en.wikipedia.org/wiki/Gifts_of_the_Spirit",
    "124. [Encyclopedia] Wikipedia. 'Divine Healing.' https://en.wikipedia.org/wiki/Divine_healing",
    "125. [Wikipedia] Prosperity theology. 'Common (but not universal) belief.' https://en.wikipedia.org/wiki/Prosperity_theology",
    "126. [Official Church] A/G. 'The Blessed Hope.' https://ag.org/Beliefs/Statement-of-Fundamental-Truths/The-Blessed-Hope",
    "127. [Research Center] Pew Research Center. 'Pentecostal Family.' https://www.pewresearch.org/religion/religious-landscape-study/religious-family/pentecostal-family-evangelical-trad/",
    "128. [Official Church] A/G. 'The Final Judgment.' https://ag.org/Beliefs/Statement-of-Fundamental-Truths#16",
    "129. [Encyclopedia] Wikipedia. 'Church of God in Christ.' https://en.wikipedia.org/wiki/Church_of_God_in_Christ",
    "130. [Encyclopedia] Wikipedia. 'Global Christianity.' https://en.wikipedia.org/wiki/Global_Christianity",
    "131. [Research Center] Pew Research Center. 'Global Christianity - Traditions.' https://www.pewresearch.org/religion/2011/12/19/global-christianity-traditions/",
    "132. [Primary Source] Schaff, Creeds of Christendom. 'The Doctrinal Basis of the Evangelical Alliance, 1846.' https://www.ccel.org/ccel/schaff/creeds3.v.viii.html",
    "133. [Research Center] The ARDA. 'Restoration Movement Timeline.' https://www.thearda.com/us-religion/history/timelines/entry?etype=3&eid=32",
    "134. [Encyclopedia] Wikipedia. 'Christian Church (disciples of Christ).' https://en.wikipedia.org/wiki/Christian_Church_(Disciples_of_Christ)",
    "135. [Encyclopedia] Wikipedia. 'Declaration and Address.' https://en.wikipedia.org/wiki/Declaration_and_Address",
    "136. [Encyclopedia] Wikipedia. 'World Convention of Churches of Christ.' https://en.wikipedia.org/wiki/World_Convention_of_Churches_of_Christ",
    "137. [Wikipedia] Stone-Campbell Movement. 'Major groups.' https://en.wikipedia.org/wiki/Stone-Campbell_Movement",
    "138. [Academic Resource] Cambridge University Press. 'The Stone-Campbell Movement.' https://www.cambridge.org/core/books/cambridge-companion-to-american-protestantism/stonecampbell-movement/1F4959CCE0BD59A2F2A00E4B2D22D2C6",
    "139. [Primary Source] Schaff, Creeds of Christendom. 'Articles of Religion of the Reformed Episcopal Church.' https://www.ccel.org/ccel/schaff/creeds3.v.vii.html",
    "140. [Primary Source] Schaff, Creeds of Christendom. 'The Corporate Union of Church Bodies.' https://www.ccel.org/ccel/schaff/creeds3.vi.iii.html",
    "141. [Encyclopedia] Wikipedia. 'Chicago Lambeth Quadrilateral.' https://en.wikipedia.org/wiki/Chicago-Lambeth_Quadrilateral",
    "142. [Encyclopedia] Wikipedia. 'Broad Church.' https://en.wikipedia.org/wiki/Broad_church",
    "143. [Encyclopedia] Wikipedia. 'Anglican Devotions.' https://en.wikipedia.org/wiki/Anglican_devotions",
    "144. [Wikipedia] Episcopal Church (United States) - Theology. 'Theological spectrum.' https://en.wikipedia.org/wiki/Episcopal_Church_(United_States)#Theology",
    "145. [Encyclopedia] Wikipedia. 'Christianity and Social Justice.' https://en.wikipedia.org/wiki/Christianity_and_social_justice",
    "146. [Encyclopedia] Wikipedia. 'Anglican Church.' https://en.wikipedia.org/wiki/Anglican_Church",
    "147. [Encyclopedia] Wikipedia. 'Homosexuality and Anglicanism.' https://en.wikipedia.org/wiki/Homosexuality_and_Anglicanism",
    "148. [Encyclopedia] Wikipedia. 'Anglican Church Music.' https://en.wikipedia.org/wiki/Anglican_church_music",
    "149. [Primary Source] Schaff, Creeds of Christendom. 'The Confession of the Society of Friends, or Quakers.' https://www.ccel.org/ccel/schaff/creeds3.v.iv.html",
    "150. [Religious Organization] Quakers in Britain. 'Our faith.' https://www.quaker.org.uk/about-quakers/our-faith/",
    "151. [Reference] Quaker.Org. 'About Quakers.' https://www.quaker.org.uk/about-quakers",
    "152. [Encyclopedia] Britannica - Quaker. 'Sacraments.' https://www.britannica.com/topic/Quaker",
    "153. [Wikipedia] Peace Testimony. 'Quaker commitment to non-violence.' https://en.wikipedia.org/wiki/Peace_Testimony",
    "154. [Religious Organization] Quakers in Britain. 'Equality.' https://www.quaker.org.uk/about-quakers/our-values/equality/",
    "155. [Religious Organization] Philadelphia Yearly Meeting. 'The Testimonies.' https://www.pym.org/quakerism/quaker-testimonies/",
    "156. [Primary Source] Schaff, Creeds of Christendom. 'American Congregational Declarations of Faith.' https://www.ccel.org/ccel/schaff/creeds3.vi.ii.i.html",
    "157. [Encyclopedia] Wikipedia. 'Sabbath in Seventh-day Churches.' https://en.wikipedia.org/wiki/Sabbath_in_seventh-day_churches",
    "158. [Encyclopedia] Wikipedia. 'Second Advent.' https://en.wikipedia.org/wiki/Second_Advent",
    "159. [Encyclopedia] Wikipedia. 'Adventist Health Studies.' https://en.wikipedia.org/wiki/Adventist_Health_Studies",
    "160. [Religious Resource] Ask an Adventist Friend (NAD). 'What is the Spirit of Prophecy?' https://www.askanadventistfriend.com/ellen-g-white/spirit-of-prophecy/",
    "161. [Encyclopedia] Wikipedia. 'Soul Sleep.' https://en.wikipedia.org/wiki/Soul_sleep",
    "162. [Encyclopedia] Wikipedia. 'List of Christian Denominations by Number of Members.' https://en.wikipedia.org/wiki/List_of_Christian_denominations_by_number_of_members",
    "163. [Encyclopedia] Wikipedia. 'Adventism.' https://en.wikipedia.org/wiki/Adventism",
    "164. [Wikipedia] Messianic Judaism. 'Modern movement.' https://en.wikipedia.org/wiki/Messianic_Judaism",
    "165. [Encyclopedia] Britannica - Messianism. 'Belief in Jesus as Messiah.' https://www.britannica.com/topic/messianism",
    "166. [Academic Encyclopedia] St Andrews Encyclopaedia of Theology. 'Messianic Jewish Theology.' https://www.saet.ac.uk/Christianity/MessianicJewishTheology",
    "167. [Religious Education] My Jewish Learning. 'Messianic Judaism Overview.' https://www.myjewishlearning.com/article/messianic-judaism/",
    "168. [Wikipedia] Messianic Judaism - Theology. 'Adherence to the Trinity.' https://en.wikipedia.org/wiki/Messianic_Judaism#Theology",
    "169. [Religious Organization] Messianic Jewish Alliance of America. 'About MJAA.' https://mjaa.org/",
    "170. [Religious Ministry] ONE FOR ISRAEL. 'Messianic Judaism & Messianic Jews.' https://www.oneforisrael.org/messianic-judaism-messianic-jews/",
    "171. [Wikipedia] Nondenominational Christianity. '20th-century movement.' https://en.wikipedia.org/wiki/Nondenominational_Christianity",
    "172. [Religious Site] Grace Plano. 'What Is a Nondenominational Church?' https://graceplano.church/non-denominational-church-explained",
    "173. [Religious Site] GotQuestions.org. 'What are nondenominational churches?' https://www.gotquestions.org/non-denominational-church.html",
    "174. [Research Center] Pew Research Center. 'Religious Landscape Study.' https://www.pewresearch.org/religion/religious-landscape-study/",
    "175. [Encyclopedia] Wikipedia. 'Church Planting.' https://en.wikipedia.org/wiki/Church_planting",
    "176. [Encyclopedia] Wikipedia. 'House Church Movement.' https://en.wikipedia.org/wiki/House_Church_Movement",
    "177. [Encyclopedia] Wikipedia. 'Emerging Church.' https://en.wikipedia.org/wiki/Emerging_Church",
    "178. [Wikipedia] Latter Day Saint movement. 'Overview.' https://en.wikipedia.org/wiki/Latter_Day_Saint_movement",
    "179. [Encyclopedia] Wikipedia. 'Evangelical Theology.' https://en.wikipedia.org/wiki/Evangelical_theology",
    "180. [Encyclopedia] Wikipedia. 'Unitarian Universalists.' https://en.wikipedia.org/wiki/Unitarian_Universalists",
    "181. [Primary Source] Schaff, Creeds of Christendom. 'The Confession of the Waldenses, A.D. 1655.' https://www.ccel.org/ccel/schaff/creeds3.v.iii.i.html",
    "182. [Catholic Reference] New Advent, Catholic Encyclopedia. '15527b.' https://www.newadvent.org/cathen/15527b.htm",
    "183. [Encyclopedia] Wikipedia. 'Proto Protestantism.' https://en.wikipedia.org/wiki/Proto-Protestantism",
    "184. [Encyclopedia] Wikipedia. 'Lyon.' https://en.wikipedia.org/wiki/Lyon",
    "185. [Encyclopedia] Wikipedia. 'Piedmont.' https://en.wikipedia.org/wiki/Piedmont",
    "186. [Primary Source] Schaff, Creeds of Christendom. 'Easter Litany of the Moravian Church, A.D. 1749.' https://www.ccel.org/ccel/schaff/creeds3.v.v.html",
    "187. [Primary Source] Schaff, Creeds of Christendom. 'The Bohemian Confessions after the Reformation.' https://www.ccel.org/ccel/schaff/creeds1.ix.v.ii.html",
    "188. [Encyclopedia] Encyclopaedia Britannica. 'Moravian Church, History and Beliefs.' https://www.britannica.com/topic/Moravian-church",
    "189. [Encyclopedia] Wikipedia. 'Daily Watchwords.' https://en.wikipedia.org/wiki/Daily_Watchwords",
    "190. [Encyclopedia] Wikipedia. 'History of the Moravian Church.' https://en.wikipedia.org/wiki/History_of_the_Moravian_Church",
    "191. [Primary Source] Schaff, Creeds of Christendom. 'The Savoy Declaration, A.D. 1658.' https://www.ccel.org/ccel/schaff/creeds3.v.i.i.html",
    "192. [Primary Source] Schaff, Creeds of Christendom. 'Declaration of the Congregational Union of England and Wales.' https://www.ccel.org/ccel/schaff/creeds3.v.i.ii.html",
    "193. [Primary Source] Schaff, Creeds of Christendom. 'The Oberlin Declaration of the National Congregational Council.' https://www.ccel.org/ccel/schaff/creeds3.v.i.iv.html",
    "194. [Primary Source] Schaff, Creeds of Christendom. 'Congregational Confessions.' https://www.ccel.org/ccel/schaff/creeds3.v.i.html",
    "195. [Encyclopedia] Wikipedia. 'Separatists.' https://en.wikipedia.org/wiki/Separatists",
    "196. [Encyclopedia] Wikipedia. 'Plymouth Colony.' https://en.wikipedia.org/wiki/Plymouth_Colony"
  ],
  lastUpdated: "07-08-2026",
};