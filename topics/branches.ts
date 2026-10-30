import type { Topic } from "./types";

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
    description: `Do they hold the Protestant form of the doctrine, that all believers share one priesthood with no separate sacrificial priesthood? (Catholics and Orthodox also teach a common priesthood of the baptised, alongside an ordained priesthood.)`,
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
    date: "431 AD",
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
  tldr: `Christianity's main branches include the Early Universal/Catholic Church (1st-4th c.), Roman Catholic (centred on the see of Rome), Eastern Orthodox (which split in 1054 AD), Oriental Orthodox (split in 451 AD), and Protestant (which emerged from the 16th c. Reformation). Each differs on beliefs about scriptural authority, tradition, and sacraments.`,
  content: `
<?viz branches/adherents?>

<?viz branches/tradition-map?>

<?viz branches/matrix?>

<?viz branches/quiz?>
`,

  subtopics: [
    {
      id: "why-so-many-denominations",
      title: "If the Bible Is Clear, Why Are There So Many Denominations?",
      tags: ["Objections"],
      content: `
**The objection.** Christians cannot agree on what their own book says, so either it is not clear or it is not from God.

**What is shared.** The great majority of Christians, Catholic, Orthodox and Protestant, confess one God in three persons, the deity of Christ, his death for sin and his bodily resurrection. The differences among these churches are real, but most concern church government, the sacraments and the relation of Scripture to tradition.

**Disagreement does not mean there is no truth.** Physicists disagree about the interpretation of quantum mechanics, and historians about the causes of the First World War, and nobody concludes that there are no facts of the matter. Human beings bring pride, history and politics to any text. Many divisions have had as much to do with language, geography and rulers as with the Bible, the split between East and West among them.

**What the Bible claims about its own clarity.** Protestants hold that the main message is plain, and not that every verse is. Peter himself says that Paul wrote "some things that are hard to understand" (2 Peter 3:16).

**What remains true.** The divisions are a real failure. Jesus prayed that his followers would "be one" so that the world might believe (John 17:21), and Paul rebuked the first signs of faction (1 Corinthians 1:10-13). Christians should not be comfortable with this, and critics are right to point it out.
`,
    },
    {
      id: "catholic",
      title: "Universal / Original Catholic Church",
      tags: ["Early church", "Catholic"],
      content: `**Founded:** 1st century (Apostolic era, established by The Holy Spirit through the Apostles following Pentecost)[^1]

      **Key Beliefs:**

      • **Apostolic succession:** Direct line of authority from the apostles[^2]

      • **Sacraments:** Recognition of core sacraments like Baptism and Eucharist[^3]

      • **Scripture + Tradition:** Both the Bible and apostolic tradition as sources of divine revelation[^4]

      • **Episcopal authority:** Led by bishops (episkopoi), with authority exercised locally and collegially[^5]

      • **Multiple centres of authority:** Rome, Antioch, Alexandria, Jerusalem and later Constantinople each held patriarchal standing[^6][^7]

      • **Early church councils:** Collective decision-making through ecumenical councils[^8][^9]

      • **Martyrdom and persecution:** Sustained through Roman persecution until Constantine[^10]

      **Historical Context:** The "catholic" (universal) church of the first centuries, before the major schisms[^11].

      **A contested point, stated as contested.** How much authority the bishop of Rome held in this period is one of the genuinely disputed questions in church history, and it is not settled by description. Catholic historians point to the Petrine texts, to Clement of Rome writing to Corinth at the end of the first century, to Irenaeus on the pre-eminence of the Roman church, and to Leo's intervention at Chalcedon, arguing that a primacy was present from the start and later articulated rather than invented. Orthodox historians accept a primacy of honour among equals while denying universal jurisdiction. Protestant historians generally read the developed papal claims as a later growth.[^12].

      **Distinctive Features:** House churches, bishop-led communities, emphasis on apostolic teaching and fellowship[^13]

**See also:** [Deuterocanonical Books (The Canon)](/categories/canon#section-deuterocanonical-books).
`,
    },
    {
      id: "romanCatholic",
      title: "Roman Catholic Church",
      tags: ["Catholic"],
      content: `**Founded:** Gradual development, with papal supremacy solidifying from the 4th-11th centuries[^14]

      **Key Beliefs:**

      • **Papal supremacy:** The Pope (Bishop of Rome) has ultimate, universal authority over the Church[^15]

      • **Seven sacraments:** Baptism, Confirmation, Eucharist, Penance, Anointing, Holy Orders, Matrimony[^16]

      • **Scripture + Tradition + Magisterium:** Authority from the Bible, tradition, and the teaching office of the Church[^17]

      • **Faith + Works:** Salvation comes by grace through faith, which is expressed in good works[^18]

      • **Saints and Mary:** Veneration (honor) of saints and Mary as intercessors[^19]

      • **Transubstantiation:** Bread and wine fully become the body and blood of Christ[^20]

      • **Purgatory:** A state of final purification after death for those destined for heaven[^21]

      • **Celibate clergy:** Priests and bishops must remain unmarried (in the Latin Rite)[^22]

      **Historical Development:** Evolved from the early Catholic church with increasing papal authority, especially after the fall of the Western Roman Empire and the East-West Schism (1054 AD)[^23].

      **Distinctive Practices:** Mass, confession to priests, extensive liturgical calendar, Vatican authority, elaborate church hierarchy[^24]`,
    },
    {
      id: "orientalOrthodox",
      title: "Oriental Orthodox",
      tags: ["Early church", "Orthodox"],
      content: `**Founded:** c. 451 AD (split at Council of Chalcedon)[^25][^26]

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
      tags: ["Early church"],
      content: `**Founded:** c. 410 AD (Synod of Seleucia-Ctesiphon); split from West after 431 AD Council of Ephesus[^37]

      **Key Beliefs:**

      • **Dyophysite Christology:** Traditionally described as "Nestorian," emphasizes two distinct natures (divine and human) in Christ[^38]

      • **Historical missions:** Once spread from the Middle East to China and India[^39]

      • **Independent development:** Developed separately from Western and Byzantine Christianity[^40]

      • **Syriac tradition:** Uses Syriac language and Eastern liturgies[^41]

      • **Married clergy:** Allows married priests; synods of the late 5th century also permitted married bishops, though bishops were later drawn from the celibate monastic clergy[^42]

      **Modern Remnants:** Assyrian Church of the East, Ancient Church of the East[^43]

      **Historical Note:** Significantly reduced due to persecution and isolation, but historically very influential in Asia[^44]

**See also:** [Heresies About Jesus (Heresies and Fallacies)](/categories/heresies-and-fallacies#section-christ-heresies).
`,
    },
    {
      id: "easternOrthodox",
      title: "Eastern Orthodox",
      tags: ["Orthodox"],
      content: `
<?viz branches/hagia-sophia?>

**Founded:** 1054 AD (Great Schism from Roman Catholicism)[^45]

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
      tags: ["Reformation"],
      content: `**Founded:** c. 1517 AD (Martin Luther's Reformation)[^55]

      **Key Beliefs:**

      • **Justification by faith alone:** Salvation by grace through faith, not works (sola fide)[^56][^57]

      • **Scripture alone:** Bible is the sole infallible authority (sola scriptura)[^58]

      • **Sacramental Union:** Christ is truly present "in, with, and under" the bread and wine; outsiders often call this consubstantiation, a term Lutheran theologians reject[^59]

      • **Two sacraments:** Baptism and Communion as primary sacraments[^60]

      • **Liturgical worship:** Maintains traditional liturgical structure (though varies)[^61]

      • **Grace alone:** Salvation is entirely God's unmerited work (sola gratia)[^62]

      • **Priesthood of all believers:** All Christians have direct access to God[^63]

      **Distinctive Features:** Lutheran Confessions (Book of Concord, Augsburg Confession)[^64], liturgical calendar, infant baptism[^65].

      **Major Bodies:** Lutheran World Federation, Lutheran Church-Missouri Synod, Wisconsin Evangelical Lutheran Synod[^66]`,
    },
    {
      id: "Reformed/Presbyterian",
      title: "Reformed/Presbyterian",
      tags: ["Reformation"],
      content: `**Founded:** 1520s-1530s AD (Huldrych Zwingli in Zurich from 1519, then John Calvin in Geneva from 1536)[^67]

      **Key Beliefs:**

      • **Sovereignty of God:** God's absolute control and foreknowledge over all things[^68]

      • **Predestination:** God has chosen (elected) who will be saved (TULIP theology is a summary of this)[^69]

      • **Church elders:** Presbyterian church government with elected elders (presbyters)[^70]

      • **Simple worship:** Focus on preaching and scripture, with minimal ritual[^71]

      • **Covenant theology:** Understanding of God's relationship with humanity through covenants[^72]

      • **Westminster Standards:** Confessions and catechisms as doctrinal standards for many[^73]

      • **Total depravity:** Humanity is completely corrupted by sin and unable to choose God[^74]

      **Church Government:** Presbyterian system with sessions, presbyteries, and general assemblies[^75]

      **Major Bodies:** Presbyterian Church (USA), Orthodox Presbyterian Church[^76], World Communion of Reformed Churches[^77]

**See also:** [Free Will](/categories/free-will).
`,
    },
    {
      id: "Anabaptist",
      title: "Anabaptist",
      tags: ["Reformation"],
      content: `**Founded:** 1525 AD (Swiss Brethren, radical reformation)[^78]

      **Key Beliefs:**

      • **Adult baptism:** "Re-baptism" of believers who make a conscious decision (credo-baptism)[^79]

      • **Pacifism:** Commitment to non-violence and peace (non-resistance)[^80]

      • **Simple living:** Emphasis on modesty and separation from worldly culture[^81]

      • **Church-state separation:** Complete separation of church and government[^82]

      • **Community discipline:** Strong emphasis on church discipline ("the ban") and mutual accountability[^83]

      • **Biblical literalism:** Direct application of New Testament teachings, especially the Sermon on the Mount[^84][^85]

      • **Voluntary faith:** Faith cannot be coerced or inherited[^86]

      **Modern Descendants:** Mennonites, Amish, Hutterites, Brethren churches[^87]

      **Historical Note:** Heavily persecuted by both Catholics and other Protestants[^88]

**See also:** [Baptism](/categories/baptism).
`,
    },
    {
      id: "Anglican",
      title: "Anglican",
      tags: ["Reformation"],
      content: `**Founded:** 1534 AD (Henry VIII's break from Rome)[^89]

      **Key Beliefs:**

      • **Via media:** "Middle way" between Catholicism and Protestantism[^90]

      • **Episcopal governance:** Led by bishops in apostolic succession[^91]

      • **Book of Common Prayer:** Structured liturgical worship[^92]

      • **Three-legged stool:** Scripture, tradition, and reason as authorities[^93]

      • **Broad spectrum:** Includes high church (Anglo-Catholic), low church (Evangelical), and broad church traditions[^94]

      • **Royal supremacy:** Monarch as Supreme Governor (in England)[^95]

      • **Married clergy:** Priests and bishops can marry[^96]

      **Global Communion:** Church of England, Episcopal Church (USA), Anglican churches worldwide[^97]

      **Distinctive Features:** Cathedrals, choral tradition, theological diversity within unity[^98]`,
    },
    {
      id: "Baptist",
      title: "Baptist",
      tags: ["Later Protestant"],
      content: `**Founded:** 1609 AD (Amsterdam, John Smyth)[^99]

      **Key Beliefs:**

      • **Believer's baptism:** Baptism by full immersion only after personal faith decision[^100]

      • **Local church autonomy:** Each congregation is independent and self-governing[^101]

      • **Biblical authority:** Scripture alone as the final authority (sola scriptura)[^102]

      • **Priesthood of believers:** Every Christian has direct access to God[^103]

      • **Religious liberty:** Strong advocate for freedom of conscience and separation of church and state[^104]

      • **Evangelism:** Strong emphasis on personal evangelism and missions[^105]

      • **Congregational polity:** Democratic church governance[^106]

      **Major Groups:** Southern Baptist Convention, American Baptist Churches, Independent Baptist churches[^107]

      **Cultural Impact:** Historically influential in religious freedom movements[^108]`,
    },
    {
      id: "Methodist",
      title: "Methodist",
      tags: ["Later Protestant"],
      content: `**Founded:** 18th century (John Wesley's revival movement)[^109]

      **Key Beliefs:**

      • **Prevenient grace:** God's grace is available to all people, enabling them to respond to Him[^110]

      • **Arminian soteriology:** Humans have free will to accept or reject salvation[^111]

      • **Social holiness:** Personal holiness must lead to social action and justice[^112]

      • **Perfectionism:** Christians can achieve "Christian perfection" (sanctification) in this life[^113]

      • **Means of grace:** Emphasizes spiritual growth through scripture, sacraments, prayer, and fellowship[^114]

      • **Methodist quadrilateral:** Authority based on Scripture (primary), tradition, reason, and experience[^115]

      • **Social justice:** Strong emphasis on helping the poor and marginalized[^116]

      **Historical Impact:** Abolition movement, temperance, civil rights[^117]

      **Major Bodies:** United Methodist Church, Free Methodist, African Methodist Episcopal Church (AME)[^118]`,
    },
    {
      id: "Pentecostal",
      title: "Pentecostal",
      tags: ["Later Protestant"],
      content: `**Founded:** Early 1900s (Azusa Street Revival, Los Angeles)[^119]

      **Key Beliefs:**

      • **Baptism in the Holy Spirit:** A distinct experience after salvation, evidenced by speaking in tongues[^120]

      • **Spiritual gifts:** Emphasis on all nine gifts of the Spirit (1 Corinthians 12) for today[^121]

      • **Divine healing:** God heals today through prayer and faith[^122]

      • **Prosperity teaching:** God desires believers to be healthy and prosperous (common, but not universal)[^123]

      • **Premillennialism:** Belief that Jesus will return before the millennium[^124]

      • **Personal experience:** Direct, personal relationship with God through the Spirit[^125]

      • **Evangelistic fervor:** Strong emphasis on missions and church planting[^126]

      **Global Movement:** One of the fastest-growing Christian movements worldwide[^127]

      **Major Bodies:** Assemblies of God, Church of God in Christ, Foursquare Church[^128]`,
    },
    {
      id: "Restorationist",
      title: "Restorationist",
      tags: ["Later Protestant"],
      content: `**Founded:** 1800s onwards (Stone-Campbell Movement and others)[^129][^130]

      **Key Beliefs:**

      • **Primitive Christianity:** Attempt to restore New Testament Christianity exactly, bypassing tradition[^131]

      • **No creeds:** "No creed but Christ, no book but the Bible"[^132]

      • **Biblical patterns:** Strict adherence to perceived New Testament patterns for worship and structure[^133]

      • **Unity movement:** Seeks to unite all Christians by returning to biblical basics[^134]

      **Major Groups:** Churches of Christ, Christian Church (Disciples of Christ), and the independent Christian churches and churches of Christ[^135].

      **Note:** Other groups like Latter-day Saints and Jehovah's Witnesses also originated in this period with a "restoration" goal, but are considered non-orthodox by mainstream Christianity (see 'Other Movements').[^136]`,
    },
    {
      id: "Episcopal",
      title: "Episcopal",
      tags: ["Later Protestant"],
      content: `**Founded:** 1789 AD (American Episcopal Church formed after American Revolution)[^137]

      **Key Beliefs:**

      • **Anglican tradition:** Part of the worldwide Anglican Communion (USA branch)[^138]

      • **Via media:** "Middle way" between Catholicism and Protestantism[^139]

      • **Episcopal governance:** Led by bishops in apostolic succession[^140]

      • **Book of Common Prayer:** Liturgical worship with structured prayers[^141]

      • **Broad theological spectrum:** Includes Anglo-Catholic, Evangelical, and Liberal traditions[^142]

      • **Social justice:** Strong emphasis on social issues and inclusion[^143]

      • **Ordination of women:** Ordains women as priests and bishops[^144]

      • **LGBTQ+ inclusion:** Generally affirming of LGBTQ+ individuals and clergy[^145]

      **Distinctive Features:** Formal liturgy, cathedral tradition, theological education emphasis[^146]`,
    },
    {
      id: "quakers",
      title: "Quakers (Religious Society of Friends)",
      tags: ["Other movements"],
      content: `**Founded:** c. 1650s (George Fox, England)[^147]

      **Key Beliefs:**

      • **Inner Light:** Emphasize the "inner light" of God in every person[^148]

      • **Unprogrammed Worship:** Often meet in silent worship, waiting for the Holy Spirit to move members to speak[^149]

      • **No Sacraments:** Traditionally do not practice physical sacraments like baptism or communion, seeing all of life as sacramental[^150]

      • **Peace Testimony:** Historic commitment to pacifism and non-violence[^151]

      • **Equality:** Strong belief in the equality of all people, leading to advocacy for abolition, women's rights, etc.[^152]

      **Distinctive Features:** Testimonies (Simplicity, Peace, Integrity, Community, Equality), decision-making by "sense of the meeting" (seeking unity)[^153]`,
    },
    {
      id: "seventhDayAdventist",
      title: "Seventh-day Adventist",
      tags: ["Other movements"],
      content: `**Founded:** 1863 (USA, from Millerite movement)[^154]

      **Key Beliefs:**

      • **Seventh-day Sabbath:** Observance of the Sabbath on Saturday[^155]

      • **Second Coming:** Emphasis on the imminent literal return (Advent) of Christ[^156]

      • **Health Message:** Focus on health and wellness, often including vegetarianism and abstinence from alcohol/tobacco[^157]

      • **Ellen G. White:** Regard her writings as an authoritative source of truth, though subordinate to the Bible[^158]

      • **State of the Dead:** Belief in "soul sleep" (unconsciousness) between death and resurrection[^159]

      **Distinctive Features:** Large worldwide missions, hospital, and education systems[^160]; belief in an "investigative judgment" that began in 1844[^161]`,
    },
    {
      id: "messianicJudaism",
      title: "Messianic Judaism",
      tags: ["Other movements"],
      content: `**Founded:** Modern movement, 1960s-1970s[^162]

      **Key Beliefs:**

      • **Jesus as Messiah:** Jewish believers who accept Jesus (Yeshua) as the promised Messiah of Israel[^163]

      • **Jewish Identity:** Maintain Jewish identity, customs, and holidays (e.g., Passover, Yom Kippur)[^164]

      • **Torah Observance:** Varies, but many observe aspects of the Torah as a sign of cultural identity and obedience, not for salvation[^165]

      • **Trinity:** Most (but not all) Messianic Jews adhere to the doctrine of the Trinity[^166]

      **Distinctive Features:** Synagogue-style worship, use of Hebrew, bridging Jewish and Christian theology[^167]. Not recognized as Judaism by mainstream Jewish movements[^168].

**See also:** [Jewish Objections to Jesus as Messiah (Other Religions)](/categories/religions#section-jewish-objections).
`,
    },
    {
      id: "nonDenominational",
      title: "Non-denominational / Other Movements",
      tags: ["Other movements"],
      content: `**Founded:** 20th century onwards (especially in the USA)[^169]

      **Key Beliefs (General):**

      • **No Denominational Ties:** Reject formal ties to historic denominations and their hierarchies[^170]

      • **Local Church Autonomy:** Emphasize independence and self-governance[^171]

      • **Bible-Centered:** Strongly Bible-focused, usually with an evangelical theology (similar to Baptist or Pentecostal beliefs)[^172]

      • **Contemporary Worship:** Often characterized by modern music and informal service styles[^173]

      **Related Movements:**

      • **House Church Movement:** Focuses on simple, small-group meetings in homes, emphasizing community and mimicking the New Testament model[^174].

      • **Emerging Church:** A postmodern movement questioning traditional evangelical structures and embracing social justice and deconstructed faith[^175].

      **A Note on Orthodox Classification:**

      Some movements, while claiming Christian identity, are considered outside orthodox Christianity by Catholic, Orthodox, and Protestant groups due to fundamental doctrinal differences. This includes groups like **Latter-day Saints (Mormons)**[^176] and **Jehovah's Witnesses** (which have unique restorationist claims and non-Trinitarian theology)[^177], and **Unitarian Universalists**, who have Christian roots but now embrace a pluralistic, non-creedal faith that rejects the Trinity[^178].

**See also:** [Heresies and Fallacies](/categories/heresies-and-fallacies).
`,
    },
    {
      id: "waldensian",
      title: "Waldensians",
      tags: ["Pre-Reformation"],
      content: `**Founded:** c. 1173 AD (Peter Waldo, France)[^179]

      **Key Beliefs:**

      • **Reform before the Reformation:** Emphasized lay preaching, voluntary poverty, and the authority of scripture centuries before Martin Luther[^180]

      • **Calvinist Alignment:** Formally merged into the Reformed (Calvinist) tradition during the Swiss Reformation in 1532[^181]

      • **Priesthood of Believers:** Rejects papal authority and Catholic church hierarchies in favor of scriptural authority[^182]

      **Distinctive Features:** Survived centuries of severe persecution in the Alpine valleys of Italy. Today, they form the Waldensian Evangelical Church[^183].`,
    },
    {
      id: "moravian",
      title: "Moravian Church (Unitas Fratrum)",
      tags: ["Pre-Reformation"],
      content: `**Founded:** 1457 AD (Bohemian Reformation, inspired by Jan Hus)[^184]

      **Key Beliefs:**

      • **Jan Hus Influence:** Traces roots to the Hussite movement which challenged papal authority, liturgical language, and communion practices prior to the Reformation[^185]

      • **Herrnhut Revival:** Renewed in 1727 under Count Zinzendorf, leading to a famous 100-year continuous prayer vigil[^186]

      • **Global Missions:** Pioneered modern Protestant foreign missions, sending missionaries worldwide in the 18th century[^187]

      **Distinctive Features:** Often described as the oldest Protestant denomination still in existence, and known for adopting the motto "In essentials unity, in non-essentials liberty, in all things charity", which originated with the 17th-century Lutheran writer Rupertus Meldenius[^188].`,
    },
    {
      id: "congregationalist",
      title: "Congregationalists",
      tags: ["Later Protestant"],
      content: `**Founded:** c. 1580s AD (Puritan Separatists, England)[^189]

      **Key Beliefs:**

      • **Local Autonomy:** Rejects both episcopal (bishop) and presbyterian (elder council) hierarchies; each local congregation is fully independent and self-governing under Christ[^190]

      • **Puritan Roots:** Developed by English Puritans who wanted to simplify worship and purify the church of Catholic-style rituals[^191]

      • **Cambridge Platform (1648):** Established church government rules for early American Congregationalists[^192]

      **Distinctive Features:** Heavily influenced the settlement of colonial New England (including the Pilgrims)[^193]. Highly democratic church governance[^194].`,
    },
  ],

          sources: [
    "1. [Encyclopedia] World History Encyclopedia - Christianity. 'Academic overview of Christian historical development.' https://www.worldhistory.org/Christianity/",
    "2. [Encyclopedia] Britannica - Apostolic Succession. 'Doctrine of apostolic succession.' https://www.britannica.com/topic/apostolic-succession",
    "3. [Encyclopedia] New Advent - Sacraments. 'Catholic perspective on the sacraments.' https://www.newadvent.org/cathen/13295a.htm",
    "4. [Encyclopedia] New Advent, Catholic Encyclopedia. Tradition and Living Magisterium. https://www.newadvent.org/cathen/15006b.htm",
    "5. [Encyclopedia] New Advent, Catholic Encyclopedia. Bishop. https://www.newadvent.org/cathen/02581b.htm",
    "6. [Encyclopedia] New Advent, Catholic Encyclopedia. Patriarch and Patriarchate. https://www.newadvent.org/cathen/11549a.htm",
    "7. [Christian Source] Orthodox Council. 'The Ecumenical Patriarchate.' https://www.orthodoxcouncil.org/ecumenical-patriarchate.html",
    "8. [Primary Source] Schaff, Creeds of Christendom. 'The Nicene Creed.' https://www.ccel.org/ccel/schaff/creeds1.iv.iii.html",
    "9. [Primary Source] Schaff, Creeds of Christendom. 'The Creed of Chalcedon.' https://www.ccel.org/ccel/schaff/creeds1.iv.iv.html",
    "10. [Wikipedia] Persecution of Christians in the Roman Empire. https://en.wikipedia.org/wiki/Persecution_of_Christians_in_the_Roman_Empire",
    "11. [Encyclopedia] New Advent, Catholic Encyclopedia. 'Catholic.' https://www.newadvent.org/cathen/03449a.htm",
    "12. [Encyclopedia] New Advent, Catholic Encyclopedia. 'The Pope.' https://www.newadvent.org/cathen/12260a.htm",
    "13. [Wikipedia] Early Christianity. https://en.wikipedia.org/wiki/Early_Christianity",
    "14. [Encyclopedia] Britannica - Roman Catholicism. 'Academic overview of Roman Catholic doctrine, history, and organization.' https://www.britannica.com/topic/Roman-Catholicism",
    "15. [Primary Source] Schaff, Creeds of Christendom. 'The Vatican Decrees, the Papal Infallibility Decree.' https://www.ccel.org/ccel/schaff/creeds1.vi.xii.html",
    "16. [Primary Source] Catechism of the Catholic Church. 'The Seven Sacraments.' https://www.vatican.va/archive/ENG0015/__P3E.HTM",
    "17. [Primary Source] Schaff, Creeds of Christendom. 'The Profession of the Tridentine Faith, 1564.' https://www.ccel.org/ccel/schaff/creeds1.vi.iv.html",
    "18. [Primary Source] Schaff, Creeds of Christendom. 'The Canons and Decrees of the Council of Trent.' https://www.ccel.org/ccel/schaff/creeds1.vi.iii.html",
    "19. [Encyclopedia] New Advent - Intercession of Saints. 'Catholic doctrine on the intercession of saints.' https://www.newadvent.org/cathen/08070a.htm",
    "20. [Encyclopedia] Britannica - Transubstantiation. 'Definition and explanation of transubstantiation.' https://www.britannica.com/topic/transubstantiation",
    "21. [Encyclopedia] New Advent - Purgatory. 'Catholic doctrine of purgatory.' https://www.newadvent.org/cathen/12575a.htm",
    "22. [Encyclopedia] New Advent, Catholic Encyclopedia. Celibacy of the Clergy. https://www.newadvent.org/cathen/03481a.htm",
    "23. [Wikipedia] History of the papacy. https://en.wikipedia.org/wiki/History_of_the_papacy",
    "24. [Wikipedia] Catholic Church. https://en.wikipedia.org/wiki/Catholic_Church",
    "25. [Encyclopedia] New Advent, Catholic Encyclopedia. 'Monophysites and Monophysitism.' https://www.newadvent.org/cathen/10489b.htm",
    "26. [Primary Source] Schaff, Creeds of Christendom. 'The Symbol of Chalcedon.' https://www.ccel.org/ccel/schaff/creeds2.iv.i.iii.html",
    "27. [Wikipedia] Miaphysitism. https://en.wikipedia.org/wiki/Miaphysitism",
    "28. [Encyclopedia] Britannica - Oriental Orthodox church. 'Overview of the tradition.' https://www.britannica.com/topic/Oriental-Orthodox-church",
    "29. [Wikipedia] Liturgy of Saint James. 'An ancient Christian liturgy used by Oriental Orthodox.' https://en.wikipedia.org/wiki/Liturgy_of_Saint_James",
    "30. [Wikipedia] Papal primacy. https://en.wikipedia.org/wiki/Primacy_of_the_Bishop_of_Rome",
    "31. [Wikipedia] 'Oriental Orthodox Churches.' https://en.wikipedia.org/wiki/Oriental_Orthodoxy",
    "32. [Wikipedia] 'Christianity in Ethiopia.' https://en.wikipedia.org/wiki/Christianity_in_Ethiopia",
    "33. [Wikipedia] Coptic Orthodox Church. https://en.wikipedia.org/wiki/Coptic_Orthodox_Church",
    "34. [Wikipedia] Armenian Apostolic Church. https://en.wikipedia.org/wiki/Armenian_Apostolic_Church",
    "35. [Wikipedia] Syriac Orthodox Church. https://en.wikipedia.org/wiki/Syriac_Orthodox_Church",
    "36. [Wikipedia] 'Religious fasting.' https://en.wikipedia.org/wiki/Fasting_in_Christianity",
    "37. [Wikipedia] Church of the East. https://en.wikipedia.org/wiki/Church_of_the_East",
    "38. [Encyclopedia] New Advent, Catholic Encyclopedia. 'Nestorius and Nestorianism.' https://www.newadvent.org/cathen/10755a.htm",
    "39. [Academic] ResearchGate. 'The Church of the East: A Concise History.' https://www.researchgate.net/publication/293179513_The_Church_of_the_East_A_Concise_History",
    "40. [Wikipedia] Nestorianism. https://en.wikipedia.org/wiki/Nestorianism",
    "41. [Encyclopedia] New Advent, Catholic Encyclopedia. 'East Syrian Rite.' https://www.newadvent.org/cathen/14413a.htm",
    "42. [Wikipedia] 'Clerical marriage.' https://en.wikipedia.org/wiki/Married_clergy",
    "43. [Wikipedia] 'Ancient Church of the East.' https://en.wikipedia.org/wiki/Ancient_Church_of_the_East",
    "44. [Academic] Gorgias Encyclopedic Dictionary of the Syriac Heritage (Beth Mardutho). Church of the East. https://gedsh.bethmardutho.org/Church-of-the-East",
    "45. [Encyclopedia] Britannica - Schism of 1054. 'The Great Schism.' https://www.britannica.com/event/Schism-of-1054",
    "46. [Encyclopedia] Britannica - Eastern Orthodoxy. 'Structure and organization.' https://www.britannica.com/topic/Eastern-Orthodoxy",
    "47. [Primary Source] Orthodox Church in America (OCA). 'The Sacraments.' https://www.oca.org/orthodoxy/the-orthodox-faith/worship/the-sacraments",
    "48. [Primary Source] Saint Katherine Greek Orthodox Church. 'Scripture and Tradition.' https://stkatherineaz.org/holy-scripture-holy-tradition",
    "49. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Veneration of Images.' https://www.newadvent.org/cathen/07664a.htm",
    "50. [Encyclopedia] New Advent, Catholic Encyclopedia. 'The Eastern Schism.' https://www.newadvent.org/cathen/13535a.htm",
    "51. [Wikipedia] Clerical celibacy. https://en.wikipedia.org/wiki/Clerical_celibacy",
    "52. [Wikipedia] Theosis (Eastern Christian theology). https://en.wikipedia.org/wiki/Theosis_(Eastern_Christian_theology)",
    "53. [Christian Source] World Council of Churches. 'Eastern Orthodox Churches.' https://www.oikoumene.org/church-families/orthodox-churches-eastern",
    "54. [Primary Source] OCA. 'Worship.' https://www.oca.org/orthodoxy/the-orthodox-faith/worship",
    "55. [Encyclopedia] World History Encyclopedia - Protestant Reformation. 'Overview of Reformation movements.' https://www.worldhistory.org/Protestant_Reformation",
    "56. [Encyclopedia] Britannica - Justification. 'Theological doctrine of justification by faith.' https://www.britannica.com/topic/justification-Christianity",
    "57. [Primary Source] Schaff, Creeds of Christendom. 'The Augsburg Confession, A.D. 1530.' https://www.ccel.org/ccel/schaff/creeds3.iii.ii.html",
    "58. [Wikipedia] Sola scriptura. https://en.wikipedia.org/wiki/Sola_scriptura",
    "59. [Primary Source] Schaff, Creeds of Christendom. 'The Formula of Concord, A.D. 1576.' https://www.ccel.org/ccel/schaff/creeds3.iii.iv.html",
    "60. [Primary Source] Schaff, Creeds of Christendom. 'Luther's Small Catechism, A.D. 1529.' https://www.ccel.org/ccel/schaff/creeds3.iii.iii.html",
    "61. [Wikipedia] Divine Service (Lutheran). https://en.wikipedia.org/wiki/Divine_Service_(Lutheran)",
    "62. [Wikipedia] Sola gratia. https://en.wikipedia.org/wiki/Sola_gratia",
    "63. [Wikipedia] Priesthood of all believers. https://en.wikipedia.org/wiki/Universal_priesthood",
    "64. [Primary Source] Schaff, Creeds of Christendom. 'The Lutheran Confessions.' https://www.ccel.org/ccel/schaff/creeds1.viii.i.html",
    "65. [Reference] World Council of Churches. 'Lutheran churches.' https://www.oikoumene.org/church-families/lutheran-churches",
    "66. [Wikipedia] List of Lutheran denominations. https://en.wikipedia.org/wiki/List_of_Lutheran_denominations",
    "67. [Wikipedia] 'Reformed Christianity.' https://en.wikipedia.org/wiki/Reformed_Christianity",
    "68. [Primary Source] Schaff, Creeds of Christendom. 'The Westminster Shorter Catechism, A.D. 1647.' https://www.ccel.org/ccel/schaff/creeds3.iv.xviii.html",
    "69. [Encyclopedia] Britannica - Predestination. 'Doctrine of predestination.' https://www.britannica.com/topic/predestination",
    "70. [Wikipedia] Elder (Christianity). https://en.wikipedia.org/wiki/Elder_(Christianity)",
    "71. [Wikipedia] Regulative principle of worship. https://en.wikipedia.org/wiki/Regulative_principle_of_worship",
    "72. [Primary Source] Schaff, Creeds of Christendom. 'The Westminster Confession of Faith, A.D. 1647.' https://www.ccel.org/ccel/schaff/creeds3.iv.xvii.html",
    "73. [Wikipedia] Westminster Standards. https://en.wikipedia.org/wiki/Westminster_Standards",
    "74. [Primary Source] Schaff, Creeds of Christendom. 'The Canons of the Synod of Dort, A.D. 1619.' https://www.ccel.org/ccel/schaff/creeds3.iv.xvi.html",
    "75. [Wikipedia] Presbyterian polity. https://en.wikipedia.org/wiki/Presbyterian_polity",
    "76. [Wikipedia] Presbyterianism. https://en.wikipedia.org/wiki/Presbyterianism",
    "77. [Christian Source] World Communion of Reformed Churches. 'Homepage.' https://wcrc.eu",
    "78. [Wikipedia] Swiss Brethren. https://en.wikipedia.org/wiki/Swiss_Brethren",
    "79. [Encyclopedia] New Advent, Catholic Encyclopedia. 'Anabaptists.' https://www.newadvent.org/cathen/01445b.htm",
    "80. [Wikipedia] 'Nonresistance.' https://en.wikipedia.org/wiki/Nonresistance",
    "81. [Wikipedia] Plain people. https://en.wikipedia.org/wiki/Plain_people",
    "82. [Wikipedia] 'Separation of church and state.' https://en.wikipedia.org/wiki/Church-state_separation",
    "83. [Christian Source] Global Anabaptist Mennonite Encyclopedia Online (GAMEO). 'Ban.' https://gameo.org/index.php?title=Ban",
    "84. [Christian Source] GAMEO. 'Bible.' https://gameo.org/index.php?title=Bible",
    "85. [Wikipedia] 'Radical Reformation.' https://en.wikipedia.org/wiki/Radical_Reformation#Anabaptists",
    "86. [Christian Source] GAMEO. 'Anabaptism.' https://gameo.org/index.php?title=Anabaptism",
    "87. [Wikipedia] Anabaptism. https://en.wikipedia.org/wiki/Anabaptism",
    "88. [Wikipedia] 'Martyrs Mirror.' https://en.wikipedia.org/wiki/Martyrs_Mirror",
    "89. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Anglicanism.' https://www.newadvent.org/cathen/01498a.htm",
    "90. [Encyclopedia] Britannica - Anglicanism. 'The 'via media'.' https://www.britannica.com/topic/Anglicanism",
    "91. [Wikipedia] Historical episcopate. https://en.wikipedia.org/wiki/Historic_episcopate",
    "92. [Wikipedia] Book of Common Prayer. https://en.wikipedia.org/wiki/Book_of_Common_Prayer",
    "93. [Wikipedia] Anglican doctrine. https://en.wikipedia.org/wiki/Anglican_doctrine",
    "94. [Wikipedia] Churchmanship. https://en.wikipedia.org/wiki/Churchmanship",
    "95. [Wikipedia] Supreme Governor of the Church of England. https://en.wikipedia.org/wiki/Supreme_Governor_of_the_Church_of_England",
    "96. [Primary Source] Schaff, Creeds of Christendom. 'The Thirty-Nine Articles of Religion.' https://www.ccel.org/ccel/schaff/creeds3.iv.xi.html",
    "97. [Christian Source] Anglican Communion. 'Homepage.' https://www.anglicancommunion.org/",
    "98. [Wikipedia] 'Anglican Church Music.' https://en.wikipedia.org/wiki/Anglican_church_music",
    "99. [Wikipedia] John Smyth (English theologian). https://en.wikipedia.org/wiki/John_Smyth_(Baptist_minister)",
    "100. [Primary Source] Schaff, Creeds of Christendom. 'The New Hampshire Baptist Confession, A.D. 1833.' https://www.ccel.org/ccel/schaff/creeds3.v.ii.ii.html",
    "101. [Wikipedia] Baptist beliefs. https://en.wikipedia.org/wiki/Baptist_beliefs",
    "102. [Primary Source] Southern Baptist Church (Boston). 'What We Believe.' https://www.sbcboston.org/our-beliefs",
    "103. [Wikipedia] Baptists. https://en.wikipedia.org/wiki/Baptists",
    "104. [Encyclopedia] World History Encyclopedia. 'Roger Williams.' https://www.worldhistory.org/Roger_Williams/",
    "105. [Wikipedia] International Mission Board. https://en.wikipedia.org/wiki/International_Mission_Board",
    "106. [Wikipedia] 'Congregational Polity.' https://en.wikipedia.org/wiki/Congregational_polity",
    "107. [Wikipedia] List of Baptist denominations. https://en.wikipedia.org/wiki/List_of_Baptist_denominations",
    "108. [Wikipedia] 'Freedom of Religion in the United States.' https://en.wikipedia.org/wiki/Freedom_of_religion_in_the_United_States",
    "109. [Encyclopedia] Encyclopaedia Britannica. 'Methodism, History, Beliefs and Organization.' https://www.britannica.com/topic/Methodism",
    "110. [Wikipedia] 'Wesleyan theology.' https://en.wikipedia.org/wiki/Wesleyan%E2%80%93Arminian_theology",
    "111. [Primary Source] Schaff, Creeds of Christendom. 'The Five Arminian Articles, A.D. 1610.' https://www.ccel.org/ccel/schaff/creeds3.iv.xv.html",
    "112. [Primary Source] UMC. 'Our Wesleyan Heritage.' https://www.umc.org/en/content/our-wesleyan-heritage",
    "113. [Wikipedia] Christian perfection. https://en.wikipedia.org/wiki/Christian_perfection",
    "114. [Wikipedia] Means of grace. https://en.wikipedia.org/wiki/Means_of_grace",
    "115. [Wikipedia] Wesleyan Quadrilateral. 'Scripture, tradition, reason, experience.' https://en.wikipedia.org/wiki/Wesleyan_Quadrilateral",
    "116. [Primary Source] United Methodist General Board of Church and Society. 'United Methodist Social Principles (2024).' https://www.umcjustice.org/documents/124",
    "117. [Wikipedia] Methodism. https://en.wikipedia.org/wiki/Methodism",
    "118. [Wikipedia] List of Methodist denominations. https://en.wikipedia.org/wiki/List_of_Methodist_denominations",
    "119. [Wikipedia] Azusa Street Revival. https://en.wikipedia.org/wiki/Azusa_Street_Revival",
    "120. [Wikipedia] 'Assemblies of God Statement of Fundamental Truths.' https://en.wikipedia.org/wiki/Assemblies_of_God_Statement_of_Fundamental_Truths",
    "121. [Wikipedia] 'Spiritual gift.' https://en.wikipedia.org/wiki/Gifts_of_the_Spirit",
    "122. [Wikipedia] 'Faith healing.' https://en.wikipedia.org/wiki/Divine_healing",
    "123. [Wikipedia] Prosperity theology. 'Common (but not universal) belief.' https://en.wikipedia.org/wiki/Prosperity_theology",
    "124. [Primary Source] A/G. 'The Blessed Hope.' https://ag.org/Beliefs/Statement-of-Fundamental-Truths/The-Blessed-Hope",
    "125. [Reference] World Council of Churches. 'Pentecostal churches.' https://www.oikoumene.org/church-families/pentecostal-churches",
    "126. [Wikipedia] Assemblies of God USA. https://en.wikipedia.org/wiki/Assemblies_of_God_USA",
    "127. [Wikipedia] 'World Christianity.' https://en.wikipedia.org/wiki/Global_Christianity",
    "128. [Wikipedia] List of Pentecostal denominations. https://en.wikipedia.org/wiki/List_of_Pentecostal_denominations",
    "129. [Academic] The ARDA. 'Restoration Movement Timeline.' https://www.thearda.com/us-religion/history/timelines/entry?etype=3&eid=32",
    "130. [Academic] Cambridge University Press. 'The Stone-Campbell Movement.' https://www.cambridge.org/core/books/cambridge-companion-to-american-protestantism/stonecampbell-movement/1F4959CCE0BD59A2F2A00E4B2D22D2C6",
    "131. [Wikipedia] 'Restoration Movement.' https://en.wikipedia.org/wiki/Stone-Campbell_Movement",
    "132. [Wikipedia] 'Christian Church (disciples of Christ).' https://en.wikipedia.org/wiki/Christian_Church_(Disciples_of_Christ)",
    "133. [Wikipedia] Churches of Christ. https://en.wikipedia.org/wiki/Churches_of_Christ",
    "134. [Wikipedia] 'Declaration and Address.' https://en.wikipedia.org/wiki/Declaration_and_Address",
    "135. [Wikipedia] Christian churches and churches of Christ. https://en.wikipedia.org/wiki/Christian_churches_and_churches_of_Christ",
    "136. [Wikipedia] Restorationism. https://en.wikipedia.org/wiki/Restorationism",
    "137. [Encyclopedia] Encyclopedia of Greater Philadelphia. Episcopal Church. https://philadelphiaencyclopedia.org/essays/episcopal-church",
    "138. [Reference] World Council of Churches. 'Anglican churches.' https://www.oikoumene.org/church-families/anglican-churches",
    "139. [Wikipedia] Via media. https://en.wikipedia.org/wiki/Via_media",
    "140. [Wikipedia] 'Chicago Lambeth Quadrilateral.' https://en.wikipedia.org/wiki/Chicago-Lambeth_Quadrilateral",
    "141. [Wikipedia] Book of Common Prayer (1979). https://en.wikipedia.org/wiki/Book_of_Common_Prayer_(1979)",
    "142. [Wikipedia] Episcopal Church (United States) - Theology. 'Theological spectrum.' https://en.wikipedia.org/wiki/Episcopal_Church_(United_States)#Theology",
    "143. [Primary Source] The Old North Church (Boston). About the Episcopal Church. https://oldnorth.com/about-episcopal-church/",
    "144. [Wikipedia] Ordination of women in the Anglican Communion. https://en.wikipedia.org/wiki/Ordination_of_women_in_the_Anglican_Communion",
    "145. [Wikipedia] 'Homosexuality and Anglicanism.' https://en.wikipedia.org/wiki/Homosexuality_and_Anglicanism",
    "146. [Wikipedia] Washington National Cathedral. https://en.wikipedia.org/wiki/Washington_National_Cathedral",
    "147. [Encyclopedia] Britannica - Quaker. 'Sacraments.' https://www.britannica.com/topic/Quaker",
    "148. [Christian Source] Quakers in Britain. 'Our faith.' https://www.quaker.org.uk/about-quakers/our-faith/",
    "149. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Society of Friends (Quakers).' https://www.newadvent.org/cathen/06304b.htm",
    "150. [Primary Source] Schaff, Creeds of Christendom. 'The Confession of the Society of Friends, or Quakers.' https://www.ccel.org/ccel/schaff/creeds3.v.iv.html",
    "151. [Wikipedia] Peace Testimony. 'Quaker commitment to non-violence.' https://en.wikipedia.org/wiki/Peace_Testimony",
    "152. [Christian Source] Quakers in Britain. 'Equality.' https://www.quaker.org.uk/about-quakers/our-values/equality/",
    "153. [Christian Source] Philadelphia Yearly Meeting. 'The Testimonies.' https://www.pym.org/quakerism/quaker-testimonies/",
    "154. [Wikipedia] 'Adventism.' https://en.wikipedia.org/wiki/Adventism",
    "155. [Wikipedia] 'Sabbath in Seventh-day Churches.' https://en.wikipedia.org/wiki/Sabbath_in_seventh-day_churches",
    "156. [Wikipedia] 'Second Coming.' https://en.wikipedia.org/wiki/Second_Advent",
    "157. [Wikipedia] 'Adventist Health Studies.' https://en.wikipedia.org/wiki/Adventist_Health_Studies",
    "158. [Christian Source] Ask an Adventist Friend (NAD). 'What is the Spirit of Prophecy?' https://www.askanadventistfriend.com/ellen-g-white/spirit-of-prophecy/",
    "159. [Wikipedia] 'Christian mortalism.' https://en.wikipedia.org/wiki/Soul_sleep",
    "160. [Wikipedia] Seventh-day Adventist Church. https://en.wikipedia.org/wiki/Seventh-day_Adventist_Church",
    "161. [Wikipedia] Investigative judgment. https://en.wikipedia.org/wiki/Investigative_judgment",
    "162. [Wikipedia] Messianic Judaism. 'Modern movement.' https://en.wikipedia.org/wiki/Messianic_Judaism",
    "163. [Apologetics] GotQuestions.org. What is Messianic Judaism? https://www.gotquestions.org/Messianic-Judaism.html",
    "164. [Christian Source] Messianic Jewish Alliance of America. 'About MJAA.' https://mjaa.org/",
    "165. [Christian Source] ONE FOR ISRAEL. 'Messianic Judaism & Messianic Jews.' https://www.oneforisrael.org/messianic-judaism-messianic-jews/",
    "166. [Wikipedia] Messianic Judaism - Theology. 'Adherence to the Trinity.' https://en.wikipedia.org/wiki/Messianic_Judaism#Theology",
    "167. [Academic] St Andrews Encyclopaedia of Theology. 'Messianic Jewish Theology.' https://www.saet.ac.uk/Christianity/MessianicJewishTheology",
    "168. [Christian Source] My Jewish Learning. 'Messianic Judaism Overview.' https://www.myjewishlearning.com/article/messianic-judaism/",
    "169. [Wikipedia] Nondenominational Christianity. '20th-century movement.' https://en.wikipedia.org/wiki/Nondenominational_Christianity",
    "170. [Christian Source] Grace Plano. 'What Is a Nondenominational Church?' https://graceplano.church/non-denominational-church-explained",
    "171. [Apologetics] GotQuestions.org. 'What are nondenominational churches?' https://www.gotquestions.org/non-denominational-church.html",
    "172. [Academic] Pew Research Center. 'Religious Landscape Study.' https://www.pewresearch.org/religion/religious-landscape-study/",
    "173. [Wikipedia] Contemporary worship. https://en.wikipedia.org/wiki/Contemporary_worship",
    "174. [Wikipedia] 'House Church Movement.' https://en.wikipedia.org/wiki/House_Church_Movement",
    "175. [Wikipedia] 'Emerging Church.' https://en.wikipedia.org/wiki/Emerging_Church",
    "176. [Wikipedia] Latter Day Saint movement. 'Overview.' https://en.wikipedia.org/wiki/Latter_Day_Saint_movement",
    "177. [Wikipedia] Jehovah's Witnesses. https://en.wikipedia.org/wiki/Jehovah%27s_Witnesses",
    "178. [Wikipedia] 'Unitarian Universalists.' https://en.wikipedia.org/wiki/Unitarian_Universalists",
    "179. [Encyclopedia] New Advent, Catholic Encyclopedia. 'Waldenses.' https://www.newadvent.org/cathen/15527b.htm",
    "180. [Wikipedia] Waldensians. https://en.wikipedia.org/wiki/Waldensians",
    "181. [Wikipedia] Synod of Chanforan. https://en.wikipedia.org/wiki/Synod_of_Chanforan",
    "182. [Wikipedia] 'Proto Protestantism.' https://en.wikipedia.org/wiki/Proto-Protestantism",
    "183. [Wikipedia] Waldensian Evangelical Church. https://en.wikipedia.org/wiki/Waldensian_Evangelical_Church",
    "184. [Wikipedia] Moravian Church. https://en.wikipedia.org/wiki/Moravian_Church",
    "185. [Wikipedia] Hussites. https://en.wikipedia.org/wiki/Hussites",
    "186. [Wikipedia] 'History of the Moravian Church.' https://en.wikipedia.org/wiki/History_of_the_Moravian_Church",
    "187. [Encyclopedia] Encyclopaedia Britannica. 'Moravian Church, History and Beliefs.' https://www.britannica.com/topic/Moravian-church",
    "188. [Wikipedia] Rupertus Meldenius. https://en.wikipedia.org/wiki/Rupertus_Meldenius",
    "189. [Wikipedia] Brownists. https://en.wikipedia.org/wiki/Brownist",
    "190. [Primary Source] Schaff, Creeds of Christendom. 'Declaration of the Congregational Union of England and Wales.' https://www.ccel.org/ccel/schaff/creeds3.v.i.ii.html",
    "191. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Puritans.' https://www.newadvent.org/cathen/12581a.htm",
    "192. [Wikipedia] Cambridge Platform. https://en.wikipedia.org/wiki/Cambridge_Platform",
    "193. [Wikipedia] 'Plymouth Colony.' https://en.wikipedia.org/wiki/Plymouth_Colony",
    "194. [Wikipedia] Congregationalism. https://en.wikipedia.org/wiki/Congregational_church"
  ],
  lastUpdated: "30-10-2026",
};