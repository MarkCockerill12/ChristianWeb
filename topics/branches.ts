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

      • **Apostolic succession:** Direct line of authority from the apostles[^2][^3]

      • **Sacraments:** Recognition of core sacraments like Baptism and Eucharist[^4][^5]

      • **Scripture + Tradition:** Both the Bible and apostolic tradition as sources of divine revelation[^6]

      • **Episcopal authority:** Led by bishops (episkopoi), with authority exercised locally and collegially[^3]

      • **Multiple centres of authority:** Rome, Antioch, Alexandria, Jerusalem and later Constantinople each held patriarchal standing[^7][^8]

      • **Early church councils:** Collective decision-making through ecumenical councils[^9][^10]

      • **Martyrdom and persecution:** Sustained through Roman persecution until Constantine[^11][^12]

      **Historical Context:** The "catholic" (universal) church of the first centuries, before the major schisms[^13].

      **A contested point, stated as contested.** How much authority the bishop of Rome held in this period is one of the genuinely disputed questions in church history, and it is not settled by description. Catholic historians point to the Petrine texts, to Clement of Rome writing to Corinth at the end of the first century, to Irenaeus on the pre-eminence of the Roman church, and to Leo's intervention at Chalcedon, arguing that a primacy was present from the start and later articulated rather than invented. Orthodox historians accept a primacy of honour among equals while denying universal jurisdiction. Protestant historians generally read the developed papal claims as a later growth.[^14].

      **Distinctive Features:** House churches, bishop-led communities, emphasis on apostolic teaching and fellowship[^15][^16]

**See also:** [Deuterocanonical Books (The Canon)](/categories/canon#section-deuterocanonical-books).
`,
    },
    {
      id: "romanCatholic",
      title: "Roman Catholic Church",
      tags: ["Catholic"],
      content: `**Founded:** Gradual development, with papal supremacy solidifying from the 4th-11th centuries[^17]

      **Key Beliefs:**

      • **Papal supremacy:** The Pope (Bishop of Rome) has ultimate, universal authority over the Church[^18][^14]

      • **Seven sacraments:** Baptism, Confirmation, Eucharist, Penance, Anointing, Holy Orders, Matrimony[^5][^19]

      • **Scripture + Tradition + Magisterium:** Authority from the Bible, tradition, and the teaching office of the Church[^20][^21]

      • **Faith + Works:** Salvation comes by grace through faith, which is expressed in good works[^22][^23]

      • **Saints and Mary:** Veneration (honor) of saints and Mary as intercessors[^24][^25][^26]

      • **Transubstantiation:** Bread and wine fully become the body and blood of Christ[^27][^25]

      • **Purgatory:** A state of final purification after death for those destined for heaven[^28][^25]

      • **Celibate clergy:** Priests and bishops must remain unmarried (in the Latin Rite)[^29][^30]

      **Historical Development:** Evolved from the early Catholic church with increasing papal authority, especially after the fall of the Western Roman Empire and the East-West Schism (1054 AD)[^31].

      **Distinctive Practices:** Mass, confession to priests, extensive liturgical calendar, Vatican authority, elaborate church hierarchy[^25]`,
    },
    {
      id: "orientalOrthodox",
      title: "Oriental Orthodox",
      tags: ["Early church", "Orthodox"],
      content: `**Founded:** c. 451 AD (split at Council of Chalcedon)[^32][^33]

      **Key Beliefs:**

      • **Miaphysite Christology:** Christ has one united divine-human nature (different from Catholic/Eastern Orthodox Dyophysitism)[^34][^35]

      • **Regional emphasis:** Strong connection to ethnic and national identity[^36][^35]

      • **Ancient traditions:** Preserves very early Christian practices[^37]

      • **No papal authority:** Rejects Roman Catholic papal supremacy[^38][^39]

      • **Seven sacraments:** Similar to Catholic and Eastern Orthodox[^40][^4]

      **Major Churches:** Ethiopian Orthodox[^41][^42], Coptic Orthodox[^43][^42], Armenian Apostolic[^35][^41], Syriac Orthodox[^44][^45]

      **Distinctive Practices:** Unique liturgical traditions, ancient languages (Coptic, Ge'ez, Armenian), fasting periods[^46]`,
    },
    {
      id: "churchOfTheEast",
      title: "Church of the East",
      tags: ["Early church"],
      content: `**Founded:** c. 410 AD (Synod of Seleucia-Ctesiphon); split from West after 431 AD Council of Ephesus[^47][^48]

      **Key Beliefs:**

      • **Dyophysite Christology:** Traditionally described as "Nestorian," emphasizes two distinct natures (divine and human) in Christ[^48][^47]

      • **Historical missions:** Once spread from the Middle East to China and India[^49][^50]

      • **Independent development:** Developed separately from Western and Byzantine Christianity[^51][^52]

      • **Syriac tradition:** Uses Syriac language and Eastern liturgies[^50]

      • **Married clergy:** Allows married priests; synods of the late 5th century also permitted married bishops, though bishops were later drawn from the celibate monastic clergy[^53][^29]

      **Modern Remnants:** Assyrian Church of the East, Ancient Church of the East[^54][^55]

      **Historical Note:** Significantly reduced due to persecution and isolation, but historically very influential in Asia[^56]

**See also:** [Heresies About Jesus (Heresies and Fallacies)](/categories/heresies-and-fallacies#section-christ-heresies).
`,
    },
    {
      id: "easternOrthodox",
      title: "Eastern Orthodox",
      tags: ["Orthodox"],
      content: `
<?viz branches/hagia-sophia?>

**Founded:** 1054 AD (Great Schism from Roman Catholicism)[^57][^8]

      **Key Beliefs:**

      • **National churches:** Organized into autocephalous (independent) national churches[^58][^8]

      • **Seven sacraments:** Similar to Catholicism but with different nuances (e.g., infant communion)[^59]

      • **Strong tradition:** Scripture and "Holy Tradition" together, guided by Ecumenical Councils[^60][^25]

      • **Icons:** Veneration (not worship) of religious icons as "windows to heaven"[^61][^62]

      • **No papal supremacy:** Rejects the Pope's universal authority; sees him as "first among equals" (historically)[^63]

      • **Married clergy:** Priests can be married (if married before ordination), but bishops must be celibate[^64][^30]

      • **Theosis:** Emphasis on salvation as a process of deification, becoming "partakers of the divine nature"[^65][^66]

      **Major Churches:** Greek, Russian, Serbian, Romanian, Bulgarian Orthodox[^39]

      **Distinctive Practices:** Divine Liturgy, extensive fasting, iconostasis in churches[^67]`,
    },
    {
      id: "Lutheran",
      title: "Lutheran",
      tags: ["Reformation"],
      content: `**Founded:** c. 1517 AD (Martin Luther's Reformation)[^68][^69][^70]

      **Key Beliefs:**

      • **Justification by faith alone:** Salvation by grace through faith, not works (sola fide)[^71][^72]

      • **Scripture alone:** Bible is the sole infallible authority (sola scriptura)[^21][^73]

      • **Sacramental Union:** Christ is truly present "in, with, and under" the bread and wine; outsiders often call this consubstantiation, a term Lutheran theologians reject[^74][^75]

      • **Two sacraments:** Baptism and Communion as primary sacraments[^76][^70]

      • **Liturgical worship:** Maintains traditional liturgical structure (though varies)[^77][^70]

      • **Grace alone:** Salvation is entirely God's unmerited work (sola gratia)[^78][^79]

      • **Priesthood of all believers:** All Christians have direct access to God[^80][^21]

      **Distinctive Features:** Lutheran Confessions (Book of Concord, Augsburg Confession)[^81][^74], liturgical calendar, infant baptism[^70][^69].

      **Major Bodies:** Lutheran World Federation, Lutheran Church-Missouri Synod, Wisconsin Evangelical Lutheran Synod[^82][^69]`,
    },
    {
      id: "Reformed/Presbyterian",
      title: "Reformed/Presbyterian",
      tags: ["Reformation"],
      content: `**Founded:** 1520s-1530s AD (Huldrych Zwingli in Zurich from 1519, then John Calvin in Geneva from 1536)[^83][^84]

      **Key Beliefs:**

      • **Sovereignty of God:** God's absolute control and foreknowledge over all things[^85]

      • **Predestination:** God has chosen (elected) who will be saved (TULIP theology is a summary of this)[^86]

      • **Church elders:** Presbyterian church government with elected elders (presbyters)[^87][^84]

      • **Simple worship:** Focus on preaching and scripture, with minimal ritual[^88][^89]

      • **Covenant theology:** Understanding of God's relationship with humanity through covenants[^90]

      • **Westminster Standards:** Confessions and catechisms as doctrinal standards for many[^91][^92]

      • **Total depravity:** Humanity is completely corrupted by sin and unable to choose God[^23]

      **Church Government:** Presbyterian system with sessions, presbyteries, and general assemblies[^93][^94]

      **Major Bodies:** Presbyterian Church (USA), Orthodox Presbyterian Church[^95][^96], World Communion of Reformed Churches[^97]

**See also:** [Free Will](/categories/free-will).
`,
    },
    {
      id: "Anabaptist",
      title: "Anabaptist",
      tags: ["Reformation"],
      content: `**Founded:** 1525 AD (Swiss Brethren, radical reformation)[^98][^99]

      **Key Beliefs:**

      • **Adult baptism:** "Re-baptism" of believers who make a conscious decision (credo-baptism)[^100][^101]

      • **Pacifism:** Commitment to non-violence and peace (non-resistance)[^102][^103]

      • **Simple living:** Emphasis on modesty and separation from worldly culture[^104]

      • **Church-state separation:** Complete separation of church and government[^105][^106]

      • **Community discipline:** Strong emphasis on church discipline ("the ban") and mutual accountability[^107]

      • **Biblical literalism:** Direct application of New Testament teachings, especially the Sermon on the Mount[^108][^109]

      • **Voluntary faith:** Faith cannot be coerced or inherited[^110]

      **Modern Descendants:** Mennonites, Amish, Hutterites, Brethren churches[^111][^101]

      **Historical Note:** Heavily persecuted by both Catholics and other Protestants[^112][^101]

**See also:** [Baptism](/categories/baptism).
`,
    },
    {
      id: "Anglican",
      title: "Anglican",
      tags: ["Reformation"],
      content: `**Founded:** 1534 AD (Henry VIII's break from Rome)[^113][^114]

      **Key Beliefs:**

      • **Via media:** "Middle way" between Catholicism and Protestantism[^115][^114]

      • **Episcopal governance:** Led by bishops in apostolic succession[^116][^19]

      • **Book of Common Prayer:** Structured liturgical worship[^117][^118]

      • **Three-legged stool:** Scripture, tradition, and reason as authorities[^75][^114]

      • **Broad spectrum:** Includes high church (Anglo-Catholic), low church (Evangelical), and broad church traditions[^119][^120]

      • **Royal supremacy:** Monarch as Supreme Governor (in England)[^121][^122]

      • **Married clergy:** Priests and bishops can marry[^123][^64]

      **Global Communion:** Church of England, Episcopal Church (USA), Anglican churches worldwide[^124][^19]

      **Distinctive Features:** Cathedrals, choral tradition, theological diversity within unity[^125]`,
    },
    {
      id: "Baptist",
      title: "Baptist",
      tags: ["Later Protestant"],
      content: `**Founded:** 1609 AD (Amsterdam, John Smyth)[^126][^127][^128]

      **Key Beliefs:**

      • **Believer's baptism:** Baptism by full immersion only after personal faith decision[^129][^130]

      • **Local church autonomy:** Each congregation is independent and self-governing[^131][^132]

      • **Biblical authority:** Scripture alone as the final authority (sola scriptura)[^130][^127]

      • **Priesthood of believers:** Every Christian has direct access to God[^127]

      • **Religious liberty:** Strong advocate for freedom of conscience and separation of church and state[^133][^134]

      • **Evangelism:** Strong emphasis on personal evangelism and missions[^135][^131]

      • **Congregational polity:** Democratic church governance[^136][^137]

      **Major Groups:** Southern Baptist Convention, American Baptist Churches, Independent Baptist churches[^138][^139]

      **Cultural Impact:** Historically influential in religious freedom movements[^140][^133]`,
    },
    {
      id: "Methodist",
      title: "Methodist",
      tags: ["Later Protestant"],
      content: `**Founded:** 18th century (John Wesley's revival movement)[^141][^142]

      **Key Beliefs:**

      • **Prevenient grace:** God's grace is available to all people, enabling them to respond to Him[^143][^144]

      • **Arminian soteriology:** Humans have free will to accept or reject salvation[^145]

      • **Social holiness:** Personal holiness must lead to social action and justice[^146][^147][^148]

      • **Perfectionism:** Christians can achieve "Christian perfection" (sanctification) in this life[^149][^142]

      • **Means of grace:** Emphasizes spiritual growth through scripture, sacraments, prayer, and fellowship[^150]

      • **Methodist quadrilateral:** Authority based on Scripture (primary), tradition, reason, and experience[^151][^152]

      • **Social justice:** Strong emphasis on helping the poor and marginalized[^153]

      **Historical Impact:** Abolition movement, temperance, civil rights[^147][^154]

      **Major Bodies:** United Methodist Church, Free Methodist, African Methodist Episcopal Church (AME)[^155][^147]`,
    },
    {
      id: "Pentecostal",
      title: "Pentecostal",
      tags: ["Later Protestant"],
      content: `**Founded:** Early 1900s (Azusa Street Revival, Los Angeles)[^156][^157]

      **Key Beliefs:**

      • **Baptism in the Holy Spirit:** A distinct experience after salvation, evidenced by speaking in tongues[^158][^132]

      • **Spiritual gifts:** Emphasis on all nine gifts of the Spirit (1 Corinthians 12) for today[^159][^160]

      • **Divine healing:** God heals today through prayer and faith[^161][^132]

      • **Prosperity teaching:** God desires believers to be healthy and prosperous (common, but not universal)[^162][^163]

      • **Premillennialism:** Belief that Jesus will return before the millennium[^164][^165]

      • **Personal experience:** Direct, personal relationship with God through the Spirit[^166][^167][^168]

      • **Evangelistic fervor:** Strong emphasis on missions and church planting[^132][^169]

      **Global Movement:** One of the fastest-growing Christian movements worldwide[^170][^167]

      **Major Bodies:** Assemblies of God, Church of God in Christ, Foursquare Church[^171][^166]`,
    },
    {
      id: "Restorationist",
      title: "Restorationist",
      tags: ["Later Protestant"],
      content: `**Founded:** 1800s onwards (Stone-Campbell Movement and others)[^172][^173]

      **Key Beliefs:**

      • **Primitive Christianity:** Attempt to restore New Testament Christianity exactly, bypassing tradition[^174][^175]

      • **No creeds:** "No creed but Christ, no book but the Bible"[^176][^173]

      • **Biblical patterns:** Strict adherence to perceived New Testament patterns for worship and structure[^177][^175]

      • **Unity movement:** Seeks to unite all Christians by returning to biblical basics[^178][^175]

      **Major Groups:** Churches of Christ, Christian Church (Disciples of Christ), and the independent Christian churches and churches of Christ[^179][^177].

      **Note:** Other groups like Latter-day Saints and Jehovah's Witnesses also originated in this period with a "restoration" goal, but are considered non-orthodox by mainstream Christianity (see 'Other Movements').[^180]`,
    },
    {
      id: "Episcopal",
      title: "Episcopal",
      tags: ["Later Protestant"],
      content: `**Founded:** 1789 AD (American Episcopal Church formed after American Revolution)[^181][^182]

      **Key Beliefs:**

      • **Anglican tradition:** Part of the worldwide Anglican Communion (USA branch)[^183][^184][^185]

      • **Via media:** "Middle way" between Catholicism and Protestantism[^186][^187]

      • **Episcopal governance:** Led by bishops in apostolic succession[^188][^19]

      • **Book of Common Prayer:** Liturgical worship with structured prayers[^19][^189]

      • **Broad theological spectrum:** Includes Anglo-Catholic, Evangelical, and Liberal traditions[^190][^184]

      • **Social justice:** Strong emphasis on social issues and inclusion[^182][^25]

      • **Ordination of women:** Ordains women as priests and bishops[^191][^192]

      • **LGBTQ+ inclusion:** Generally affirming of LGBTQ+ individuals and clergy[^193]

      **Distinctive Features:** Formal liturgy, cathedral tradition, theological education emphasis[^194][^195]`,
    },
    {
      id: "quakers",
      title: "Quakers (Religious Society of Friends)",
      tags: ["Other movements"],
      content: `**Founded:** c. 1650s (George Fox, England)[^196][^197]

      **Key Beliefs:**

      • **Inner Light:** Emphasize the "inner light" of God in every person[^198]

      • **Unprogrammed Worship:** Often meet in silent worship, waiting for the Holy Spirit to move members to speak[^197][^199]

      • **No Sacraments:** Traditionally do not practice physical sacraments like baptism or communion, seeing all of life as sacramental[^200]

      • **Peace Testimony:** Historic commitment to pacifism and non-violence[^201][^202]

      • **Equality:** Strong belief in the equality of all people, leading to advocacy for abolition, women's rights, etc.[^203]

      **Distinctive Features:** Testimonies (Simplicity, Peace, Integrity, Community, Equality), decision-making by "sense of the meeting" (seeking unity)[^204]`,
    },
    {
      id: "seventhDayAdventist",
      title: "Seventh-day Adventist",
      tags: ["Other movements"],
      content: `**Founded:** 1863 (USA, from Millerite movement)[^205][^206]

      **Key Beliefs:**

      • **Seventh-day Sabbath:** Observance of the Sabbath on Saturday[^207][^208]

      • **Second Coming:** Emphasis on the imminent literal return (Advent) of Christ[^209][^205]

      • **Health Message:** Focus on health and wellness, often including vegetarianism and abstinence from alcohol/tobacco[^210][^211]

      • **Ellen G. White:** Regard her writings as an authoritative source of truth, though subordinate to the Bible[^212]

      • **State of the Dead:** Belief in "soul sleep" (unconsciousness) between death and resurrection[^213]

      **Distinctive Features:** Large worldwide missions, hospital, and education systems[^214]; belief in an "investigative judgment" that began in 1844[^215]`,
    },
    {
      id: "messianicJudaism",
      title: "Messianic Judaism",
      tags: ["Other movements"],
      content: `**Founded:** Modern movement, 1960s-1970s[^216][^217]

      **Key Beliefs:**

      • **Jesus as Messiah:** Jewish believers who accept Jesus (Yeshua) as the promised Messiah of Israel[^218][^219]

      • **Jewish Identity:** Maintain Jewish identity, customs, and holidays (e.g., Passover, Yom Kippur)[^220][^217]

      • **Torah Observance:** Varies, but many observe aspects of the Torah as a sign of cultural identity and obedience, not for salvation[^219]

      • **Trinity:** Most (but not all) Messianic Jews adhere to the doctrine of the Trinity[^221][^217]

      **Distinctive Features:** Synagogue-style worship, use of Hebrew, bridging Jewish and Christian theology[^217]. Not recognized as Judaism by mainstream Jewish movements[^222][^217].

**See also:** [Jewish Objections to Jesus as Messiah (Other Religions)](/categories/religions#section-jewish-objections).
`,
    },
    {
      id: "nonDenominational",
      title: "Non-denominational / Other Movements",
      tags: ["Other movements"],
      content: `**Founded:** 20th century onwards (especially in the USA)[^223]

      **Key Beliefs (General):**

      • **No Denominational Ties:** Reject formal ties to historic denominations and their hierarchies[^224]

      • **Local Church Autonomy:** Emphasize independence and self-governance[^225][^127]

      • **Bible-Centered:** Strongly Bible-focused, usually with an evangelical theology (similar to Baptist or Pentecostal beliefs)[^226]

      • **Contemporary Worship:** Often characterized by modern music and informal service styles[^227][^228]

      **Related Movements:**

      • **House Church Movement:** Focuses on simple, small-group meetings in homes, emphasizing community and mimicking the New Testament model[^229].

      • **Emerging Church:** A postmodern movement questioning traditional evangelical structures and embracing social justice and deconstructed faith[^230].

      **A Note on Orthodox Classification:**

      Some movements, while claiming Christian identity, are considered outside orthodox Christianity by Catholic, Orthodox, and Protestant groups due to fundamental doctrinal differences. This includes groups like **Latter-day Saints (Mormons)**[^231][^232] and **Jehovah's Witnesses** (which have unique restorationist claims and non-Trinitarian theology)[^233][^234], and **Unitarian Universalists**, who have Christian roots but now embrace a pluralistic, non-creedal faith that rejects the Trinity[^235][^236].

**See also:** [Heresies and Fallacies](/categories/heresies-and-fallacies).
`,
    },
    {
      id: "waldensian",
      title: "Waldensians",
      tags: ["Pre-Reformation"],
      content: `**Founded:** c. 1173 AD (Peter Waldo, France)[^237]

      **Key Beliefs:**

      • **Reform before the Reformation:** Emphasized lay preaching, voluntary poverty, and the authority of scripture centuries before Martin Luther[^238][^239]

      • **Calvinist Alignment:** Formally merged into the Reformed (Calvinist) tradition during the Swiss Reformation in 1532[^240][^237]

      • **Priesthood of Believers:** Rejects papal authority and Catholic church hierarchies in favor of scriptural authority[^241][^237]

      **Distinctive Features:** Survived centuries of severe persecution in the Alpine valleys of Italy. Today, they form the Waldensian Evangelical Church[^242][^237].`,
    },
    {
      id: "moravian",
      title: "Moravian Church (Unitas Fratrum)",
      tags: ["Pre-Reformation"],
      content: `**Founded:** 1457 AD (Bohemian Reformation, inspired by Jan Hus)[^243][^244][^245]

      **Key Beliefs:**

      • **Jan Hus Influence:** Traces roots to the Hussite movement which challenged papal authority, liturgical language, and communion practices prior to the Reformation[^244]

      • **Herrnhut Revival:** Renewed in 1727 under Count Zinzendorf, leading to a famous 100-year continuous prayer vigil[^246][^245]

      • **Global Missions:** Pioneered modern Protestant foreign missions, sending missionaries worldwide in the 18th century[^247][^243]

      **Distinctive Features:** Often described as the oldest Protestant denomination still in existence, and known for adopting the motto "In essentials unity, in non-essentials liberty, in all things charity", which originated with the 17th-century Lutheran writer Rupertus Meldenius[^248].`,
    },
    {
      id: "congregationalist",
      title: "Congregationalists",
      tags: ["Later Protestant"],
      content: `**Founded:** c. 1580s AD (Puritan Separatists, England)[^249][^250][^251]

      **Key Beliefs:**

      • **Local Autonomy:** Rejects both episcopal (bishop) and presbyterian (elder council) hierarchies; each local congregation is fully independent and self-governing under Christ[^252]

      • **Puritan Roots:** Developed by English Puritans who wanted to simplify worship and purify the church of Catholic-style rituals[^251][^253]

      • **Cambridge Platform (1648):** Established church government rules for early American Congregationalists[^254][^255]

      **Distinctive Features:** Heavily influenced the settlement of colonial New England (including the Pilgrims)[^256][^257]. Highly democratic church governance[^250].`,
    },
  ],

          sources: [
    "1. [Encyclopedia] World History Encyclopedia - Christianity. 'Academic overview of Christian historical development.' https://www.worldhistory.org/Christianity/",
    "2. [Encyclopedia] Britannica - Apostolic Succession. 'Doctrine of apostolic succession.' https://www.britannica.com/topic/apostolic-succession",
    "3. [Encyclopedia] New Advent, Catholic Encyclopedia. Bishop. https://www.newadvent.org/cathen/02581b.htm",
    "4. [Encyclopedia] New Advent - Sacraments. 'Catholic perspective on the sacraments.' https://www.newadvent.org/cathen/13295a.htm",
    "5. [Primary Source] Catechism of the Catholic Church. 'The Seven Sacraments.' https://www.vatican.va/archive/ENG0015/__P3E.HTM",
    "6. [Encyclopedia] New Advent, Catholic Encyclopedia. Tradition and Living Magisterium. https://www.newadvent.org/cathen/15006b.htm",
    "7. [Encyclopedia] New Advent, Catholic Encyclopedia. Patriarch and Patriarchate. https://www.newadvent.org/cathen/11549a.htm",
    "8. [Christian Source] Orthodox Council. 'The Ecumenical Patriarchate.' https://www.orthodoxcouncil.org/ecumenical-patriarchate.html",
    "9. [Primary Source] Schaff, Creeds of Christendom. 'The Nicene Creed.' https://www.ccel.org/ccel/schaff/creeds1.iv.iii.html",
    "10. [Primary Source] Schaff, Creeds of Christendom. 'The Creed of Chalcedon.' https://www.ccel.org/ccel/schaff/creeds1.iv.iv.html",
    "11. [Wikipedia] Persecution of Christians in the Roman Empire. https://en.wikipedia.org/wiki/Persecution_of_Christians_in_the_Roman_Empire",
    "12. [Encyclopedia] World History Encyclopedia. 'Diocletian.' https://www.worldhistory.org/Diocletian/",
    "13. [Encyclopedia] New Advent, Catholic Encyclopedia. 'Catholic.' https://www.newadvent.org/cathen/03449a.htm",
    "14. [Encyclopedia] New Advent, Catholic Encyclopedia. 'The Pope.' https://www.newadvent.org/cathen/12260a.htm",
    "15. [Wikipedia] Early Christianity. https://en.wikipedia.org/wiki/Early_Christianity",
    "16. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'The Church.' https://www.newadvent.org/cathen/03744a.htm",
    "17. [Encyclopedia] Britannica - Roman Catholicism. 'Academic overview of Roman Catholic doctrine, history, and organization.' https://www.britannica.com/topic/Roman-Catholicism",
    "18. [Primary Source] Schaff, Creeds of Christendom. 'The Vatican Decrees, the Papal Infallibility Decree.' https://www.ccel.org/ccel/schaff/creeds1.vi.xii.html",
    "19. [Encyclopedia] 'Anglican Churches.' Encyclopedia.com. https://www.encyclopedia.com/religion/encyclopedias-almanacs-transcripts-and-maps/anglican-churches-0",
    "20. [Primary Source] Schaff, Creeds of Christendom. 'The Profession of the Tridentine Faith, 1564.' https://www.ccel.org/ccel/schaff/creeds1.vi.iv.html",
    "21. [Academic] 'Scripture and hermeneutics (Chapter 3) - The Cambridge Companion to Evangelical Theology.' Cambridge University Press. https://www.cambridge.org/core/books/cambridge-companion-to-evangelical-theology/scripture-and-hermeneutics/8FCBCA529FE98EBF513400518980B834",
    "22. [Primary Source] Schaff, Creeds of Christendom. 'The Canons and Decrees of the Council of Trent.' https://www.ccel.org/ccel/schaff/creeds1.vi.iii.html",
    "23. [Primary Source] Schaff, Creeds of Christendom. 'The Canons of the Synod of Dort, A.D. 1619.' https://www.ccel.org/ccel/schaff/creeds3.iv.xvi.html",
    "24. [Encyclopedia] New Advent - Intercession of Saints. 'Catholic doctrine on the intercession of saints.' https://www.newadvent.org/cathen/08070a.htm",
    "25. [Wikipedia] Catholic Church. https://en.wikipedia.org/wiki/Catholic_Church",
    "26. [Primary Source] Catechism of the Catholic Church. Holy See. https://www.vatican.va/archive/ENG0015/_INDEX.HTM",
    "27. [Encyclopedia] Britannica - Transubstantiation. 'Definition and explanation of transubstantiation.' https://www.britannica.com/topic/transubstantiation",
    "28. [Encyclopedia] New Advent - Purgatory. 'Catholic doctrine of purgatory.' https://www.newadvent.org/cathen/12575a.htm",
    "29. [Encyclopedia] New Advent, Catholic Encyclopedia. Celibacy of the Clergy. https://www.newadvent.org/cathen/03481a.htm",
    "30. [Wikipedia] 'Clerical celibacy.' https://en.wikipedia.org/wiki/Clerical_celibacy",
    "31. [Wikipedia] History of the papacy. https://en.wikipedia.org/wiki/History_of_the_papacy",
    "32. [Encyclopedia] New Advent, Catholic Encyclopedia. 'Monophysites and Monophysitism.' https://www.newadvent.org/cathen/10489b.htm",
    "33. [Primary Source] Schaff, Creeds of Christendom. 'The Symbol of Chalcedon.' https://www.ccel.org/ccel/schaff/creeds2.iv.i.iii.html",
    "34. [Wikipedia] Miaphysitism. https://en.wikipedia.org/wiki/Miaphysitism",
    "35. [Wikipedia] Armenian Apostolic Church. https://en.wikipedia.org/wiki/Armenian_Apostolic_Church",
    "36. [Encyclopedia] Britannica - Oriental Orthodox church. 'Overview of the tradition.' https://www.britannica.com/topic/Oriental-Orthodox-church",
    "37. [Wikipedia] Liturgy of Saint James. 'An ancient Christian liturgy used by Oriental Orthodox.' https://en.wikipedia.org/wiki/Liturgy_of_Saint_James",
    "38. [Wikipedia] Papal primacy. https://en.wikipedia.org/wiki/Primacy_of_the_Bishop_of_Rome",
    "39. [Christian Source] World Council of Churches. 'Eastern Orthodox Churches.' https://www.oikoumene.org/church-families/orthodox-churches-eastern",
    "40. [Wikipedia] 'Oriental Orthodox Churches.' https://en.wikipedia.org/wiki/Oriental_Orthodoxy",
    "41. [Wikipedia] 'Christianity in Ethiopia.' https://en.wikipedia.org/wiki/Christianity_in_Ethiopia",
    "42. [Academic] The Oriental Orthodox Communion in Modern Egypt: The Armenian, Coptic, Ethiopian, and Syriac Orthodox Churches, 1805 CE- Present. https://doi.org/10.5642/cguetd.czpj8535",
    "43. [Wikipedia] Coptic Orthodox Church. https://en.wikipedia.org/wiki/Coptic_Orthodox_Church",
    "44. [Academic] 'With Wisdom and Courage, New Syriac Orthodox Patriarch Reaffirms the Church's Commitment to Syria | Religious Studies.' Duke University. https://religiousstudies.duke.edu/news/wisdom-and-courage-new-syriac-orthodox-patriarch-reaffirms-churchs-commitment-syria",
    "45. [Wikipedia] 'Syriac Orthodox Church.' https://en.wikipedia.org/wiki/Syriac_Orthodox_Church",
    "46. [Wikipedia] 'Religious fasting.' https://en.wikipedia.org/wiki/Fasting_in_Christianity",
    "47. [Wikipedia] Church of the East. https://en.wikipedia.org/wiki/Church_of_the_East",
    "48. [Encyclopedia] New Advent, Catholic Encyclopedia. 'Nestorius and Nestorianism.' https://www.newadvent.org/cathen/10755a.htm",
    "49. [Academic] ResearchGate. 'The Church of the East: A Concise History.' https://www.researchgate.net/publication/293179513_The_Church_of_the_East_A_Concise_History",
    "50. [Encyclopedia] New Advent, Catholic Encyclopedia. 'East Syrian Rite.' https://www.newadvent.org/cathen/14413a.htm",
    "51. [Wikipedia] Nestorianism. https://en.wikipedia.org/wiki/Nestorianism",
    "52. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Eastern Churches.' https://www.newadvent.org/cathen/05230a.htm",
    "53. [Wikipedia] 'Clerical marriage.' https://en.wikipedia.org/wiki/Married_clergy",
    "54. [Academic] Smith. Church of the East from Ancient Times through World War I. Yearbook of the Association of Pacific Coast Geographers, 1989. https://doi.org/10.1353/pcg.1989.0003",
    "55. [Wikipedia] 'Ancient Church of the East.' https://en.wikipedia.org/wiki/Ancient_Church_of_the_East",
    "56. [Academic] Gorgias Encyclopedic Dictionary of the Syriac Heritage (Beth Mardutho). Church of the East. https://gedsh.bethmardutho.org/Church-of-the-East",
    "57. [Encyclopedia] Britannica - Schism of 1054. 'The Great Schism.' https://www.britannica.com/event/Schism-of-1054",
    "58. [Encyclopedia] Britannica - Eastern Orthodoxy. 'Structure and organization.' https://www.britannica.com/topic/Eastern-Orthodoxy",
    "59. [Primary Source] Orthodox Church in America (OCA). 'The Sacraments.' https://www.oca.org/orthodoxy/the-orthodox-faith/worship/the-sacraments",
    "60. [Primary Source] Saint Katherine Greek Orthodox Church. 'Scripture and Tradition.' https://stkatherineaz.org/holy-scripture-holy-tradition",
    "61. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Veneration of Images.' https://www.newadvent.org/cathen/07664a.htm",
    "62. [Wikipedia] 'Icon.' https://en.wikipedia.org/wiki/Icon",
    "63. [Encyclopedia] New Advent, Catholic Encyclopedia. 'The Eastern Schism.' https://www.newadvent.org/cathen/13535a.htm",
    "64. [Primary Source] 'Schaff, NPNF2-14. The Seven Ecumenical Councils.' Christian Classics Ethereal Library. https://www.ccel.org/ccel/schaff/npnf214.xiv.iii.vii.html",
    "65. [Primary Source] 'Orientale Lumen (May 2, 1995).' Holy See. https://w2.vatican.va/content/john-paul-ii/en/apost_letters/1995/documents/hf_jp-ii_apl_19950502_orientale-lumen.html",
    "66. [Wikipedia] 'Theosis (Eastern Christian theology).' https://en.wikipedia.org/wiki/Theosis_(Eastern_Christian_theology)",
    "67. [Primary Source] OCA. 'Worship.' https://www.oca.org/orthodoxy/the-orthodox-faith/worship",
    "68. [Encyclopedia] World History Encyclopedia - Protestant Reformation. 'Overview of Reformation movements.' https://www.worldhistory.org/Protestant_Reformation",
    "69. [Wikipedia] 'Lutheranism.' https://en.wikipedia.org/wiki/Lutheranism",
    "70. [Reference] World Council of Churches. 'Lutheran churches.' https://www.oikoumene.org/church-families/lutheran-churches",
    "71. [Encyclopedia] Britannica - Justification. 'Theological doctrine of justification by faith.' https://www.britannica.com/topic/justification-Christianity",
    "72. [Primary Source] Schaff, Creeds of Christendom. 'The Augsburg Confession, A.D. 1530.' https://www.ccel.org/ccel/schaff/creeds3.iii.ii.html",
    "73. [Wikipedia] 'Sola scriptura.' https://en.wikipedia.org/wiki/Sola_scriptura",
    "74. [Primary Source] Schaff, Creeds of Christendom. 'The Formula of Concord, A.D. 1576.' https://www.ccel.org/ccel/schaff/creeds3.iii.iv.html",
    "75. [Wikipedia] Anglican doctrine. https://en.wikipedia.org/wiki/Anglican_doctrine",
    "76. [Primary Source] Schaff, Creeds of Christendom. 'Luther's Small Catechism, A.D. 1529.' https://www.ccel.org/ccel/schaff/creeds3.iii.iii.html",
    "77. [Wikipedia] Divine Service (Lutheran). https://en.wikipedia.org/wiki/Divine_Service_(Lutheran)",
    "78. [Wikipedia] Sola gratia. https://en.wikipedia.org/wiki/Sola_gratia",
    "79. [Reference] Augsburg Confession, article 4. Book of Concord. https://bookofconcord.org/augsburg-confession/justification/",
    "80. [Wikipedia] Priesthood of all believers. https://en.wikipedia.org/wiki/Universal_priesthood",
    "81. [Primary Source] Schaff, Creeds of Christendom. 'The Lutheran Confessions.' https://www.ccel.org/ccel/schaff/creeds1.viii.i.html",
    "82. [Wikipedia] List of Lutheran denominations. https://en.wikipedia.org/wiki/List_of_Lutheran_denominations",
    "83. [Wikipedia] 'Reformed Christianity.' https://en.wikipedia.org/wiki/Reformed_Christianity",
    "84. [Reference] World Council of Churches. 'Reformed churches.' https://www.oikoumene.org/church-families/reformed-churches",
    "85. [Primary Source] Schaff, Creeds of Christendom. 'The Westminster Shorter Catechism, A.D. 1647.' https://www.ccel.org/ccel/schaff/creeds3.iv.xviii.html",
    "86. [Encyclopedia] Britannica - Predestination. 'Doctrine of predestination.' https://www.britannica.com/topic/predestination",
    "87. [Wikipedia] Elder (Christianity). https://en.wikipedia.org/wiki/Elder_(Christianity)",
    "88. [Academic] Lee. Samuel Rutherford (1600–1661) and Adiaphora : The Regulative Principle of Worship and the Rule of Christ. Journal of Early Modern Christianity, 2024. https://doi.org/10.1515/jemc-2024-2013",
    "89. [Wikipedia] 'Regulative principle of worship.' https://en.wikipedia.org/wiki/Regulative_principle_of_worship",
    "90. [Primary Source] Schaff, Creeds of Christendom. 'The Westminster Confession of Faith, A.D. 1647.' https://www.ccel.org/ccel/schaff/creeds3.iv.xvii.html",
    "91. [Academic] Van Dixhoorn. The Westminster Standards. The Oxford Handbook of Reformed Theology, 2020. https://doi.org/10.1093/oxfordhb/9780198723912.013.16",
    "92. [Wikipedia] 'Westminster Standards.' https://en.wikipedia.org/wiki/Westminster_Standards",
    "93. [Academic] Vermaak. The historical development of Presbyterian ordination polity as background to the gay and lesbian ordination debate in the Presbyterian Church (U.S.A.). Verbum et Ecclesia, 2010. https://doi.org/10.4102/ve.v31i1.50",
    "94. [Wikipedia] 'Presbyterian polity.' https://en.wikipedia.org/wiki/Presbyterian_polity",
    "95. [Wikipedia] Presbyterianism. https://en.wikipedia.org/wiki/Presbyterianism",
    "96. [Reference] About the Orthodox Presbyterian Church. https://opc.org/about.html",
    "97. [Christian Source] World Communion of Reformed Churches. 'Homepage.' https://wcrc.eu",
    "98. [Academic] Rothkegel. The Swiss Brethren: A Story in Fragments., 2021. https://doi.org/10.5771/9783748964803",
    "99. [Wikipedia] 'Swiss Brethren.' https://en.wikipedia.org/wiki/Swiss_Brethren",
    "100. [Encyclopedia] New Advent, Catholic Encyclopedia. 'Anabaptists.' https://www.newadvent.org/cathen/01445b.htm",
    "101. [Wikipedia] 'Anabaptism.' https://en.wikipedia.org/wiki/Anabaptism",
    "102. [Academic] Cahill. Nonresistance, Defense, Violence, and the Kingdom in Christian Tradition. Interpretation: A Journal of Bible and Theology, 1984. https://doi.org/10.1177/002096438403800404",
    "103. [Wikipedia] 'Nonresistance.' https://en.wikipedia.org/wiki/Nonresistance",
    "104. [Wikipedia] Plain people. https://en.wikipedia.org/wiki/Plain_people",
    "105. [Academic] Batalla. Church-State Separation and Challenging Issues Concerning Religion. Religions, 2019. https://doi.org/10.3390/rel10030197",
    "106. [Wikipedia] 'Church-state separation.' https://en.wikipedia.org/wiki/Church-state_separation",
    "107. [Christian Source] Global Anabaptist Mennonite Encyclopedia Online (GAMEO). 'Ban.' https://gameo.org/index.php?title=Ban",
    "108. [Christian Source] GAMEO. 'Bible.' https://gameo.org/index.php?title=Bible",
    "109. [Wikipedia] 'Radical Reformation.' https://en.wikipedia.org/wiki/Radical_Reformation#Anabaptists",
    "110. [Christian Source] GAMEO. 'Anabaptism.' https://gameo.org/index.php?title=Anabaptism",
    "111. [Academic] T&T Clark Handbook of Anabaptism., 2021. https://doi.org/10.5040/9780567689511",
    "112. [Wikipedia] 'Martyrs Mirror.' https://en.wikipedia.org/wiki/Martyrs_Mirror",
    "113. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Anglicanism.' https://www.newadvent.org/cathen/01498a.htm",
    "114. [Wikipedia] 'Anglican Church.' https://en.wikipedia.org/wiki/Anglican_Church",
    "115. [Encyclopedia] Britannica - Anglicanism. 'The 'via media'.' https://www.britannica.com/topic/Anglicanism",
    "116. [Wikipedia] Historical episcopate. https://en.wikipedia.org/wiki/Historic_episcopate",
    "117. [Academic] Hefling. The Book of Common Prayer: A Guide., 2020. https://doi.org/10.1093/oso/9780190689681.001.0001",
    "118. [Wikipedia] 'Book of Common Prayer.' https://en.wikipedia.org/wiki/Book_of_Common_Prayer",
    "119. [Academic] Mather. Georgian Churchmanship Reconsidered: Some Variations in Anglican Public Worship 1714–1830. The Journal of Ecclesiastical History, 1985. https://doi.org/10.1017/s0022046900038744",
    "120. [Wikipedia] 'Churchmanship.' https://en.wikipedia.org/wiki/Churchmanship",
    "121. [Academic] 'Elizabeth's Supremacy Act (1559).' Hanover Historical Texts Project. https://history.hanover.edu/texts/engref/er79.html",
    "122. [Wikipedia] 'Supreme Governor of the Church of England.' https://en.wikipedia.org/wiki/Supreme_Governor_of_the_Church_of_England",
    "123. [Primary Source] Schaff, Creeds of Christendom. 'The Thirty-Nine Articles of Religion.' https://www.ccel.org/ccel/schaff/creeds3.iv.xi.html",
    "124. [Christian Source] Anglican Communion. 'Homepage.' https://www.anglicancommunion.org/",
    "125. [Wikipedia] 'Anglican Church Music.' https://en.wikipedia.org/wiki/Anglican_church_music",
    "126. [Wikipedia] John Smyth (English theologian). https://en.wikipedia.org/wiki/John_Smyth_(Baptist_minister)",
    "127. [Wikipedia] Baptists. https://en.wikipedia.org/wiki/Baptists",
    "128. [Reference] BBC Religions. 'Baptist Churches.' https://www.bbc.co.uk/religion/religions/christianity/subdivisions/baptist_1.shtml",
    "129. [Primary Source] Schaff, Creeds of Christendom. 'The New Hampshire Baptist Confession, A.D. 1833.' https://www.ccel.org/ccel/schaff/creeds3.v.ii.ii.html",
    "130. [Primary Source] Southern Baptist Church (Boston). 'What We Believe.' https://www.sbcboston.org/our-beliefs",
    "131. [Wikipedia] Baptist beliefs. https://en.wikipedia.org/wiki/Baptist_beliefs",
    "132. [Wikipedia] Assemblies of God USA. https://en.wikipedia.org/wiki/Assemblies_of_God_USA",
    "133. [Encyclopedia] World History Encyclopedia. 'Roger Williams.' https://www.worldhistory.org/Roger_Williams/",
    "134. [Wikipedia] 'Roger Williams (theologian).' https://en.wikipedia.org/wiki/Roger_Williams_(theologian)",
    "135. [Wikipedia] International Mission Board. https://en.wikipedia.org/wiki/International_Mission_Board",
    "136. [Wikipedia] 'Congregational Polity.' https://en.wikipedia.org/wiki/Congregational_polity",
    "137. [Academic] Rutherford. Appropriating The Cambridge Platform’s Neo-Congregational Polity. Ecclesiology, 2025. https://doi.org/10.1163/17455316-bja10050",
    "138. [Wikipedia] List of Baptist denominations. https://en.wikipedia.org/wiki/List_of_Baptist_denominations",
    "139. [Academic] Mullin. Southern Baptist Convention. The Encyclopedia of Christian Civilization, 2011. https://doi.org/10.1002/9780470670606.wbecc1291",
    "140. [Wikipedia] 'Freedom of Religion in the United States.' https://en.wikipedia.org/wiki/Freedom_of_religion_in_the_United_States",
    "141. [Encyclopedia] Encyclopaedia Britannica. 'Methodism, History, Beliefs and Organization.' https://www.britannica.com/topic/Methodism",
    "142. [Wikipedia] 'Christian perfection.' https://en.wikipedia.org/wiki/Christian_perfection",
    "143. [Wikipedia] 'Wesleyan theology.' https://en.wikipedia.org/wiki/Wesleyan%E2%80%93Arminian_theology",
    "144. [Academic] Rutherford. Prevenient Grace: An Investigation into Arminianism. 2020. https://doi.org/10.60080/abac3913",
    "145. [Primary Source] Schaff, Creeds of Christendom. 'The Five Arminian Articles, A.D. 1610.' https://www.ccel.org/ccel/schaff/creeds3.iv.xv.html",
    "146. [Primary Source] UMC. 'Our Wesleyan Heritage.' https://www.umc.org/en/content/our-wesleyan-heritage",
    "147. [Wikipedia] Methodism. https://en.wikipedia.org/wiki/Methodism",
    "148. [Reference] World Council of Churches. 'Methodist churches.' https://www.oikoumene.org/church-families/methodist-churches",
    "149. [Academic] Tyson. / Christian Perfection and Its Pretenders. Charles Wesley, 2000. https://doi.org/10.1093/oso/9780195134858.003.0011",
    "150. [Wikipedia] Means of grace. https://en.wikipedia.org/wiki/Means_of_grace",
    "151. [Academic] Cosby. Using the Wesleyan Quadrilateral to Teach Biblical Studies in Christian Liberal Arts Colleges. Teaching Theology & Religion, 2001. https://doi.org/10.1111/1467-9647.00097",
    "152. [Wikipedia] 'Wesleyan Quadrilateral.' https://en.wikipedia.org/wiki/Wesleyan_Quadrilateral",
    "153. [Primary Source] United Methodist General Board of Church and Society. 'United Methodist Social Principles (2024).' https://www.umcjustice.org/documents/124",
    "154. [Academic] Abraham. The impact of Methodism. Methodism: A Very Short Introduction, 2019. https://doi.org/10.1093/actrade/9780198802310.003.0007",
    "155. [Wikipedia] List of Methodist denominations. https://en.wikipedia.org/wiki/List_of_Methodist_denominations",
    "156. [Academic] Stephen C. Dove. Hymnody and Liturgy in the Azusa Street Revival, 1906-1908. Pneuma, 2009. https://doi.org/10.1163/027209609x12470371387840",
    "157. [Wikipedia] 'Azusa Street Revival.' https://en.wikipedia.org/wiki/Azusa_Street_Revival",
    "158. [Wikipedia] 'Assemblies of God Statement of Fundamental Truths.' https://en.wikipedia.org/wiki/Assemblies_of_God_Statement_of_Fundamental_Truths",
    "159. [Encyclopedia] 'Charismata.' Catholic Encyclopedia (1913), New Advent. https://www.newadvent.org/cathen/03588e.htm",
    "160. [Wikipedia] 'Gifts of the Spirit.' https://en.wikipedia.org/wiki/Gifts_of_the_Spirit",
    "161. [Wikipedia] 'Faith healing.' https://en.wikipedia.org/wiki/Divine_healing",
    "162. [Wikipedia] Prosperity theology. 'Common (but not universal) belief.' https://en.wikipedia.org/wiki/Prosperity_theology",
    "163. [Reference] Spirit and Power. Pew Research Center. https://www.pewresearch.org/religion/2006/10/05/spirit-and-power/",
    "164. [Primary Source] A/G. 'The Blessed Hope.' https://ag.org/Beliefs/Statement-of-Fundamental-Truths/The-Blessed-Hope",
    "165. [Wikipedia] Christian eschatology (preterism, historicism, futurism, idealism). https://en.wikipedia.org/wiki/Christian_eschatology",
    "166. [Reference] World Council of Churches. 'Pentecostal churches.' https://www.oikoumene.org/church-families/pentecostal-churches",
    "167. [Wikipedia] 'Pentecostalism.' https://en.wikipedia.org/wiki/Pentecostalism",
    "168. [Reference] Global Christianity: Movements and Denominations. Pew Research Center. https://www.pewresearch.org/religion/2011/12/19/global-christianity-movements-and-denominations/",
    "169. [Academic] McGee. Assemblies of God Overseas Missions: Foundations for Recent Growth. Missiology: An International Review, 1988. https://doi.org/10.1177/009182968801600404",
    "170. [Wikipedia] 'World Christianity.' https://en.wikipedia.org/wiki/Global_Christianity",
    "171. [Wikipedia] List of Pentecostal denominations. https://en.wikipedia.org/wiki/List_of_Pentecostal_denominations",
    "172. [Academic] The ARDA. 'Restoration Movement Timeline.' https://www.thearda.com/us-religion/history/timelines/entry?etype=3&eid=32",
    "173. [Academic] Cambridge University Press. 'The Stone-Campbell Movement.' https://www.cambridge.org/core/books/cambridge-companion-to-american-protestantism/stonecampbell-movement/1F4959CCE0BD59A2F2A00E4B2D22D2C6",
    "174. [Wikipedia] 'Restoration Movement.' https://en.wikipedia.org/wiki/Stone-Campbell_Movement",
    "175. [Reference] World Council of Churches. 'Disciples of Christ / Churches of Christ.' https://www.oikoumene.org/church-families/disciples-of-christ-churches-of-christ",
    "176. [Wikipedia] 'Christian Church (disciples of Christ).' https://en.wikipedia.org/wiki/Christian_Church_(Disciples_of_Christ)",
    "177. [Wikipedia] Churches of Christ. https://en.wikipedia.org/wiki/Churches_of_Christ",
    "178. [Wikipedia] 'Declaration and Address.' https://en.wikipedia.org/wiki/Declaration_and_Address",
    "179. [Wikipedia] Christian churches and churches of Christ. https://en.wikipedia.org/wiki/Christian_churches_and_churches_of_Christ",
    "180. [Wikipedia] Restorationism. https://en.wikipedia.org/wiki/Restorationism",
    "181. [Encyclopedia] Encyclopedia of Greater Philadelphia. Episcopal Church. https://philadelphiaencyclopedia.org/essays/episcopal-church",
    "182. [Primary Source] The Old North Church (Boston). About the Episcopal Church. https://oldnorth.com/about-episcopal-church/",
    "183. [Reference] World Council of Churches. 'Anglican churches.' https://www.oikoumene.org/church-families/anglican-churches",
    "184. [Wikipedia] 'Anglican Communion.' https://en.wikipedia.org/wiki/Anglican_Communion",
    "185. [Encyclopedia] 'Anglican Churches.' Encyclopedia.com. https://www.encyclopedia.com/religion/encyclopedias-almanacs-transcripts-and-maps/anglican-churches",
    "186. [Academic] 'The Anglican Via Media: The Idea of Moderation in Reform | Journal of Anglican Studies | Cambridge Core.' Cambridge University Press. https://www.cambridge.org/core/journals/journal-of-anglican-studies/article/anglican-via-media-the-idea-of-moderation-in-reform/A3DA01D957096B44C0AA930E2069E662",
    "187. [Wikipedia] 'Via media.' https://en.wikipedia.org/wiki/Via_media",
    "188. [Wikipedia] 'Chicago Lambeth Quadrilateral.' https://en.wikipedia.org/wiki/Chicago-Lambeth_Quadrilateral",
    "189. [Wikipedia] 'Book of Common Prayer (1979).' https://en.wikipedia.org/wiki/Book_of_Common_Prayer_(1979)",
    "190. [Wikipedia] Episcopal Church (United States) - Theology. 'Theological spectrum.' https://en.wikipedia.org/wiki/Episcopal_Church_(United_States)#Theology",
    "191. [Reference] 'BBC - Religions - Christianity: Church of England.' BBC. https://www.bbc.co.uk/religion/religions/christianity/cofe/cofe_1.shtml",
    "192. [Wikipedia] 'Ordination of women in the Anglican Communion.' https://en.wikipedia.org/wiki/Ordination_of_women_in_the_Anglican_Communion",
    "193. [Wikipedia] 'Homosexuality and Anglicanism.' https://en.wikipedia.org/wiki/Homosexuality_and_Anglicanism",
    "194. [Wikipedia] Washington National Cathedral. https://en.wikipedia.org/wiki/Washington_National_Cathedral",
    "195. [Reference] About Washington National Cathedral. https://cathedral.org/about/",
    "196. [Encyclopedia] Britannica - Quaker. 'Sacraments.' https://www.britannica.com/topic/Quaker",
    "197. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Society of Friends (Quakers).' https://www.newadvent.org/cathen/06304b.htm",
    "198. [Christian Source] Quakers in Britain. 'Our faith.' https://www.quaker.org.uk/about-quakers/our-faith/",
    "199. [Wikipedia] 'Quakers.' https://en.wikipedia.org/wiki/Quakers",
    "200. [Primary Source] Schaff, Creeds of Christendom. 'The Confession of the Society of Friends, or Quakers.' https://www.ccel.org/ccel/schaff/creeds3.v.iv.html",
    "201. [Academic] Tully. Politics and Peace Testimony in Mid-Eighteenth-Century Pennsylvania. Canadian Review of American Studies, 1982. https://doi.org/10.3138/cras-013-02-02",
    "202. [Wikipedia] 'Peace Testimony.' https://en.wikipedia.org/wiki/Peace_Testimony",
    "203. [Christian Source] Quakers in Britain. 'Equality.' https://www.quaker.org.uk/about-quakers/our-values/equality/",
    "204. [Christian Source] Philadelphia Yearly Meeting. 'The Testimonies.' https://www.pym.org/quakerism/quaker-testimonies/",
    "205. [Wikipedia] 'Adventism.' https://en.wikipedia.org/wiki/Adventism",
    "206. [Academic] Masfa. Tracking the Statistical Center of Global Seventh-day Adventism, from 1863 to the Present. International Bulletin of Mission Research, 2022. https://doi.org/10.1177/23969393221102418",
    "207. [Wikipedia] 'Sabbath in Seventh-day Churches.' https://en.wikipedia.org/wiki/Sabbath_in_seventh-day_churches",
    "208. [Academic] Balcar. Seventh-day Sabbath as a Sign of Christian Loyalty: The Seventh-day Adventists in the Conflict with Totalitarian Regimes in the 20th Century Czechoslovakia. TEOLOGICKÁ REFLEXE, 2024. https://doi.org/10.14712/27880796.2023.2.4",
    "209. [Wikipedia] 'Second Coming.' https://en.wikipedia.org/wiki/Second_Advent",
    "210. [Wikipedia] 'Adventist Health Studies.' https://en.wikipedia.org/wiki/Adventist_Health_Studies",
    "211. [Academic] Orlich MJ et al. Vegetarian dietary patterns and mortality in Adventist Health Study 2. JAMA Internal Medicine, 2013. PubMed. https://pubmed.ncbi.nlm.nih.gov/23836264/",
    "212. [Christian Source] Ask an Adventist Friend (NAD). 'What is the Spirit of Prophecy?' https://www.askanadventistfriend.com/ellen-g-white/spirit-of-prophecy/",
    "213. [Wikipedia] 'Christian mortalism.' https://en.wikipedia.org/wiki/Soul_sleep",
    "214. [Wikipedia] Seventh-day Adventist Church. https://en.wikipedia.org/wiki/Seventh-day_Adventist_Church",
    "215. [Wikipedia] Investigative judgment. https://en.wikipedia.org/wiki/Investigative_judgment",
    "216. [Academic] Yeats. Messianic Judaism. The Encyclopedia of Christian Civilization, 2011. https://doi.org/10.1002/9780470670606.wbecc0895",
    "217. [Academic] St Andrews Encyclopaedia of Theology. 'Messianic Jewish Theology.' https://www.saet.ac.uk/Christianity/MessianicJewishTheology",
    "218. [Apologetics] GotQuestions.org. What is Messianic Judaism? https://www.gotquestions.org/Messianic-Judaism.html",
    "219. [Christian Source] ONE FOR ISRAEL. 'Messianic Judaism & Messianic Jews.' https://www.oneforisrael.org/messianic-judaism-messianic-jews/",
    "220. [Christian Source] Messianic Jewish Alliance of America. 'About MJAA.' https://mjaa.org/",
    "221. [Wikipedia] Messianic Judaism - Theology. 'Adherence to the Trinity.' https://en.wikipedia.org/wiki/Messianic_Judaism#Theology",
    "222. [Christian Source] My Jewish Learning. 'Messianic Judaism Overview.' https://www.myjewishlearning.com/article/messianic-judaism/",
    "223. [Wikipedia] Nondenominational Christianity. '20th-century movement.' https://en.wikipedia.org/wiki/Nondenominational_Christianity",
    "224. [Christian Source] Grace Plano. 'What Is a Nondenominational Church?' https://graceplano.church/non-denominational-church-explained",
    "225. [Apologetics] GotQuestions.org. 'What are nondenominational churches?' https://www.gotquestions.org/non-denominational-church.html",
    "226. [Academic] Pew Research Center. 'Religious Landscape Study.' https://www.pewresearch.org/religion/religious-landscape-study/",
    "227. [Wikipedia] Contemporary worship. https://en.wikipedia.org/wiki/Contemporary_worship",
    "228. [Academic] Justice. Mainline Protestantism and Contemporary versus Traditional Worship Music. Oxford Handbooks Online, 2015. https://doi.org/10.1093/oxfordhb/9780199859993.013.28",
    "229. [Wikipedia] 'House Church Movement.' https://en.wikipedia.org/wiki/House_Church_Movement",
    "230. [Wikipedia] 'Emerging Church.' https://en.wikipedia.org/wiki/Emerging_Church",
    "231. [Academic] Patrick Q. Mason. Mormonism. Oxford Research Encyclopedia of Religion, 2015. https://doi.org/10.1093/acrefore/9780199340378.013.75",
    "232. [Wikipedia] 'Latter Day Saint movement.' https://en.wikipedia.org/wiki/Latter_Day_Saint_movement",
    "233. [Academic] 'Jehovah's Witnesses.' Cambridge University Press. https://www.cambridge.org/core/elements/jehovahs-witnesses/605AED05C9FA13DC68BB74FE3D2C651D",
    "234. [Wikipedia] 'Jehovah's Witnesses.' https://en.wikipedia.org/wiki/Jehovah%27s_Witnesses",
    "235. [Wikipedia] 'Unitarian Universalists.' https://en.wikipedia.org/wiki/Unitarian_Universalists",
    "236. [Reference] What We Believe. Unitarian Universalist Association. https://www.uua.org/beliefs/what-we-believe",
    "237. [Encyclopedia] New Advent, Catholic Encyclopedia. 'Waldenses.' https://www.newadvent.org/cathen/15527b.htm",
    "238. [Primary Source] 'Schaff, History of the Christian Church, Volume V: The Middle Ages. A.D. 1049-1294.' Christian Classics Ethereal Library. https://www.ccel.org/ccel/schaff/hcc5.ii.xii.vii.html",
    "239. [Wikipedia] 'Waldensians.' https://en.wikipedia.org/wiki/Waldensians",
    "240. [Wikipedia] Synod of Chanforan. https://en.wikipedia.org/wiki/Synod_of_Chanforan",
    "241. [Wikipedia] 'Proto Protestantism.' https://en.wikipedia.org/wiki/Proto-Protestantism",
    "242. [Wikipedia] Waldensian Evangelical Church. https://en.wikipedia.org/wiki/Waldensian_Evangelical_Church",
    "243. [Wikipedia] Moravian Church. https://en.wikipedia.org/wiki/Moravian_Church",
    "244. [Wikipedia] Hussites. https://en.wikipedia.org/wiki/Hussites",
    "245. [Reference] A Prayer Meeting that Lasted 100 Years. Christian History Institute. https://christianhistoryinstitute.org/magazine/article/one-hundred-year-prayer-meeting",
    "246. [Wikipedia] 'History of the Moravian Church.' https://en.wikipedia.org/wiki/History_of_the_Moravian_Church",
    "247. [Encyclopedia] Encyclopaedia Britannica. 'Moravian Church, History and Beliefs.' https://www.britannica.com/topic/Moravian-church",
    "248. [Wikipedia] Rupertus Meldenius. https://en.wikipedia.org/wiki/Rupertus_Meldenius",
    "249. [Wikipedia] Brownists. https://en.wikipedia.org/wiki/Brownist",
    "250. [Wikipedia] Congregationalism. https://en.wikipedia.org/wiki/Congregational_church",
    "251. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Puritans.' https://www.newadvent.org/cathen/12581a.htm",
    "252. [Primary Source] Schaff, Creeds of Christendom. 'Declaration of the Congregational Union of England and Wales.' https://www.ccel.org/ccel/schaff/creeds3.v.i.ii.html",
    "253. [Wikipedia] 'Puritans.' https://en.wikipedia.org/wiki/Puritans",
    "254. [Wikipedia] Cambridge Platform. https://en.wikipedia.org/wiki/Cambridge_Platform",
    "255. [Academic] Burg. The Cambridge Platform: A Reassertion of Ecclesiasatical Authority. Church History, 1974. https://doi.org/10.2307/3164923",
    "256. [Wikipedia] 'Plymouth Colony.' https://en.wikipedia.org/wiki/Plymouth_Colony",
    "257. [Encyclopedia] World History Encyclopedia. 'Plymouth Colony.' https://www.worldhistory.org/Plymouth_Colony/"
  ],
  lastUpdated: "30-10-2026",
};