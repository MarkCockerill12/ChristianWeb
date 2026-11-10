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
  easternCatholic: {
    churchAuthority: true,
    tradition: true,
    sacraments: true,
    pope: true,
    priesthood: false,
  },
  oldCatholic: {
    churchAuthority: true,
    tradition: true,
    sacraments: true,
    pope: false,
    priesthood: false,
  },
  evangelicalism: {
    churchAuthority: false,
    tradition: false,
    sacraments: true,
    pope: false,
    priesthood: true,
  },
  charismatic: {
    churchAuthority: false,
    tradition: false,
    sacraments: true,
    pope: false,
    priesthood: true,
  },
  plymouthBrethren: {
    churchAuthority: false,
    tradition: false,
    sacraments: true,
    pope: false,
    priesthood: true,
  },
  salvationArmy: {
    churchAuthority: true,
    tradition: false,
    sacraments: false,
    pope: false,
    priesthood: true,
  },
  onenessPentecostal: {
    churchAuthority: false,
    tradition: false,
    sacraments: true,
    pope: false,
    priesthood: true,
  },
  christadelphians: {
    churchAuthority: false,
    tradition: false,
    sacraments: true,
    pope: false,
    priesthood: true,
  },
  iglesiaNiCristo: {
    churchAuthority: true,
    tradition: false,
    sacraments: true,
    pope: false,
    priesthood: false,
  },
  africanInitiated: {
    churchAuthority: false,
    tradition: false,
    sacraments: true,
    pope: false,
    priesthood: true,
  },
  chineseChurch: {
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
  { id: "easternCatholic", date: "16th c. AD", period: "Post-Reformation", color: "darkpurple" },
  { id: "oldCatholic", date: "1870s AD", period: "Modern", color: "gray" },
  { id: "evangelicalism", date: "1730s AD", period: "Revival", color: "yellow" },
  { id: "charismatic", date: "1960 AD", period: "Modern", color: "pink" },
  { id: "plymouthBrethren", date: "1820s AD", period: "Modern", color: "gray" },
  { id: "salvationArmy", date: "1865 AD", period: "Modern", color: "red" },
  { id: "christadelphians", date: "1848 AD", period: "Modern", color: "brown" },
  { id: "onenessPentecostal", date: "1913 AD", period: "Modern", color: "pink" },
  { id: "iglesiaNiCristo", date: "1914 AD", period: "Modern", color: "teal" },
  { id: "africanInitiated", date: "c. 1890s AD", period: "Modern", color: "orange" },
  { id: "chineseChurch", date: "1954 AD", period: "Modern", color: "red" },
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
  tldr: `Christianity's main branches include the Early Universal/Catholic Church (1st-4th c.), Roman Catholic (centred on the see of Rome), Eastern Orthodox (which split in 1054 AD), Oriental Orthodox (split in 451 AD), and Protestant (which emerged from the 16th c. Reformation). Each differs on beliefs about scriptural authority, tradition, and sacraments. Within and beside them sit the Eastern Catholic and Old Catholic churches; the Protestant families (Lutheran, Reformed, Anabaptist, Anglican, Baptist, Methodist, Pentecostal and others); movements that cross denominations, such as evangelicalism and the charismatic renewal; the fast-growing African-initiated churches and the registered and underground churches of China; and groups outside historic Christian belief, chiefly those that deny the Trinity, such as Oneness Pentecostals, Christadelphians and the Iglesia ni Cristo. The great majority of Christians share the creeds' confession of one God in three persons and of Christ's death and resurrection.`,
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

      **Historical Development:** Evolved from the early Catholic church with increasing papal authority, especially after the fall of the Western Roman Empire and the East-West Schism (1054 AD)[^31][^14].

      **Distinctive Practices:** Mass, confession to priests, extensive liturgical calendar, Vatican authority, elaborate church hierarchy[^25][^26]`,
    },
    {
      id: "easternCatholic",
      title: "Eastern Catholic Churches",
      tags: ["Catholic"],
      content: `**Founded:** Mostly from the sixteenth century onward, when Eastern Christian communities entered communion with Rome; the Maronites of Lebanon have no history of separation[^32][^33][^34]

      **Key Beliefs:**

      • **Communion with Rome:** Twenty-three self-governing churches accept the authority of the pope while keeping their own Eastern liturgies, law and spirituality[^32][^33]

      • **Eastern tradition:** Their worship follows the Byzantine, Syriac, Armenian, Coptic or other Eastern rites, and many allow married men to be ordained priests[^32][^35]

      • **Equal dignity:** The Second Vatican Council declared that these churches are of equal dignity with the Latin Church and should keep their own traditions[^35]

      **Distinctive Features:** The largest is the Ukrainian Greek Catholic Church, which was banned by the Soviet Union from 1946 and survived underground until 1989[^36][^32][^33]. Other Eastern Catholic churches include the Maronite, Melkite, Syro-Malabar and Chaldean churches. The Orthodox regard their union with Rome, known as "Uniatism", as a source of division[^32][^33].`,
    },
    {
      id: "oldCatholic",
      title: "Old Catholic Churches",
      tags: ["Catholic"],
      content: `**Founded:** 1870s, by Catholics who rejected the First Vatican Council's definition of papal infallibility; united in the Union of Utrecht in 1889, with roots in the Church of Utrecht's separation from Rome in 1723[^37][^38][^39]

      **Key Beliefs:**

      • **Catholic without the papacy:** Keep the creeds, the sacraments and bishops in apostolic succession, but reject the pope's infallibility and universal jurisdiction[^38][^40]

      • **The undivided church:** Look to the faith of the church of the first thousand years as the standard[^37][^39]

      **Distinctive Features:** Small churches, mainly in the Netherlands, Germany, Switzerland, Austria and the Czech Republic; in full communion with the Church of England since the Bonn Agreement of 1931, and now ordain women[^37][^38]`,
    },
    {
      id: "orientalOrthodox",
      title: "Oriental Orthodox",
      tags: ["Early church", "Orthodox"],
      content: `**Founded:** c. 451 AD (split at Council of Chalcedon)[^41][^42]

      **Key Beliefs:**

      • **Miaphysite Christology:** Christ has one united divine-human nature (different from Catholic/Eastern Orthodox Dyophysitism)[^43][^44][^41]

      • **Regional emphasis:** Strong connection to ethnic and national identity[^45][^44]

      • **Ancient traditions:** Preserves very early Christian practices[^46]

      • **No papal authority:** Rejects Roman Catholic papal supremacy[^47][^48]

      • **Seven sacraments:** Similar to Catholic and Eastern Orthodox[^49][^4]

      **Major Churches:** Ethiopian Orthodox[^50][^51], Coptic Orthodox[^52][^51], Armenian Apostolic[^44][^50], Syriac Orthodox[^53][^54]

      **Distinctive Practices:** Unique liturgical traditions, ancient languages (Coptic, Ge'ez, Armenian), fasting periods[^55][^56]`,
    },
    {
      id: "churchOfTheEast",
      title: "Church of the East",
      tags: ["Early church"],
      content: `**Founded:** c. 410 AD (Synod of Seleucia-Ctesiphon); split from West after 431 AD Council of Ephesus[^57][^58]

      **Key Beliefs:**

      • **Dyophysite Christology:** Traditionally described as "Nestorian," emphasizes two distinct natures (divine and human) in Christ[^58][^57]

      • **Historical missions:** Once spread from the Middle East to China and India[^59][^60]

      • **Independent development:** Developed separately from Western and Byzantine Christianity[^61][^62]

      • **Syriac tradition:** Uses Syriac language and Eastern liturgies[^60]

      • **Married clergy:** Allows married priests; synods of the late 5th century also permitted married bishops, though bishops were later drawn from the celibate monastic clergy[^63][^29]

      **Modern Remnants:** Assyrian Church of the East, Ancient Church of the East[^64][^65]

      **Historical Note:** Significantly reduced due to persecution and isolation, but historically very influential in Asia[^66]

**See also:** [Heresies About Jesus (Heresies and Fallacies)](/categories/heresies-and-fallacies#section-christ-heresies).
`,
    },
    {
      id: "easternOrthodox",
      title: "Eastern Orthodox",
      tags: ["Orthodox"],
      content: `
<?viz branches/hagia-sophia?>

**Founded:** 1054 AD (Great Schism from Roman Catholicism)[^67][^8]

      **Key Beliefs:**

      • **National churches:** Organized into autocephalous (independent) national churches[^68][^8]

      • **Seven sacraments:** Similar to Catholicism but with different nuances (e.g., infant communion)[^69]

      • **Strong tradition:** Scripture and "Holy Tradition" together, guided by Ecumenical Councils[^70][^25]

      • **Icons:** Veneration (not worship) of religious icons as "windows to heaven"[^71][^72]

      • **No papal supremacy:** Rejects the Pope's universal authority; sees him as "first among equals" (historically)[^73]

      • **Married clergy:** Priests can be married (if married before ordination), but bishops must be celibate[^74][^30]

      • **Theosis:** Emphasis on salvation as a process of deification, becoming "partakers of the divine nature"[^75][^76]

      **Major Churches:** Greek, Russian, Serbian, Romanian, Bulgarian Orthodox[^48]

      **Distinctive Practices:** Divine Liturgy, extensive fasting, iconostasis in churches[^77]`,
    },
    {
      id: "Lutheran",
      title: "Lutheran",
      tags: ["Reformation"],
      content: `**Founded:** c. 1517 AD (Martin Luther's Reformation)[^78][^79][^80]

      **Key Beliefs:**

      • **Justification by faith alone:** Salvation by grace through faith, not works (sola fide)[^81][^82]

      • **Scripture alone:** Bible is the sole infallible authority (sola scriptura)[^21][^83]

      • **Sacramental Union:** Christ is truly present "in, with, and under" the bread and wine; outsiders often call this consubstantiation, a term Lutheran theologians reject[^84][^85]

      • **Two sacraments:** Baptism and Communion as primary sacraments[^86][^80]

      • **Liturgical worship:** Maintains traditional liturgical structure (though varies)[^87][^80]

      • **Grace alone:** Salvation is entirely God's unmerited work (sola gratia)[^88][^89]

      • **Priesthood of all believers:** All Christians have direct access to God[^90][^21]

      **Distinctive Features:** Lutheran Confessions (Book of Concord, Augsburg Confession)[^91][^84], liturgical calendar, infant baptism[^80][^79].

      **Major Bodies:** Lutheran World Federation, Lutheran Church-Missouri Synod, Wisconsin Evangelical Lutheran Synod[^92][^79][^93]`,
    },
    {
      id: "Reformed/Presbyterian",
      title: "Reformed/Presbyterian",
      tags: ["Reformation"],
      content: `**Founded:** 1520s-1530s AD (Huldrych Zwingli in Zurich from 1519, then John Calvin in Geneva from 1536)[^94][^95]

      **Key Beliefs:**

      • **Sovereignty of God:** God's absolute control and foreknowledge over all things[^96]

      • **Predestination:** God has chosen (elected) who will be saved (TULIP theology is a summary of this)[^97]

      • **Church elders:** Presbyterian church government with elected elders (presbyters)[^98][^95]

      • **Simple worship:** Focus on preaching and scripture, with minimal ritual[^99][^100]

      • **Covenant theology:** Understanding of God's relationship with humanity through covenants[^101]

      • **Westminster Standards:** Confessions and catechisms as doctrinal standards for many[^102][^103]

      • **Total depravity:** Humanity is completely corrupted by sin and unable to choose God[^23]

      **Church Government:** Presbyterian system with sessions, presbyteries, and general assemblies[^104][^105]

      **Major Bodies:** Presbyterian Church (USA), Orthodox Presbyterian Church[^106][^107], World Communion of Reformed Churches[^108]

**See also:** [Free Will](/categories/free-will).
`,
    },
    {
      id: "Anabaptist",
      title: "Anabaptist",
      tags: ["Reformation"],
      content: `**Founded:** 1525 AD (Swiss Brethren, radical reformation)[^109][^110]

      **Key Beliefs:**

      • **Adult baptism:** "Re-baptism" of believers who make a conscious decision (credo-baptism)[^111][^112]

      • **Pacifism:** Commitment to non-violence and peace (non-resistance)[^113][^114]

      • **Simple living:** Emphasis on modesty and separation from worldly culture[^115][^116]

      • **Church-state separation:** Complete separation of church and government[^117][^118]

      • **Community discipline:** Strong emphasis on church discipline ("the ban") and mutual accountability[^119]

      • **Biblical literalism:** Direct application of New Testament teachings, especially the Sermon on the Mount[^120][^121]

      • **Voluntary faith:** Faith cannot be coerced or inherited[^122]

      **Modern Descendants:** Mennonites, Amish, Hutterites, Brethren churches[^123][^112]

      **Historical Note:** Heavily persecuted by both Catholics and other Protestants[^124][^112][^125]

**See also:** [Baptism](/categories/baptism).
`,
    },
    {
      id: "Anglican",
      title: "Anglican",
      tags: ["Reformation"],
      content: `**Founded:** 1534 AD (Henry VIII's break from Rome)[^126][^127]

      **Key Beliefs:**

      • **Via media:** "Middle way" between Catholicism and Protestantism[^128][^127]

      • **Episcopal governance:** Led by bishops in apostolic succession[^129][^19]

      • **Book of Common Prayer:** Structured liturgical worship[^130][^131]

      • **Three-legged stool:** Scripture, tradition, and reason as authorities[^85][^127]

      • **Broad spectrum:** Includes high church (Anglo-Catholic), low church (Evangelical), and broad church traditions[^132][^133]

      • **Royal supremacy:** Monarch as Supreme Governor (in England)[^134][^135]

      • **Married clergy:** Priests and bishops can marry[^136][^74]

      **Global Communion:** Church of England, Episcopal Church (USA), Anglican churches worldwide[^137][^19]

      **Distinctive Features:** Cathedrals, choral tradition, theological diversity within unity[^138]`,
    },
    {
      id: "Baptist",
      title: "Baptist",
      tags: ["Later Protestant"],
      content: `**Founded:** 1609 AD (Amsterdam, John Smyth)[^139][^140][^141]

      **Key Beliefs:**

      • **Believer's baptism:** Baptism by full immersion only after personal faith decision[^142][^143]

      • **Local church autonomy:** Each congregation is independent and self-governing[^144][^145]

      • **Biblical authority:** Scripture alone as the final authority (sola scriptura)[^143][^140]

      • **Priesthood of believers:** Every Christian has direct access to God[^140][^141]

      • **Religious liberty:** Strong advocate for freedom of conscience and separation of church and state[^146][^147]

      • **Evangelism:** Strong emphasis on personal evangelism and missions[^148][^144][^141]

      • **Congregational polity:** Democratic church governance[^149][^150]

      **Major Groups:** Southern Baptist Convention, American Baptist Churches, Independent Baptist churches[^151][^152]

      **Cultural Impact:** Historically influential in religious freedom movements[^153][^146]`,
    },
    {
      id: "Methodist",
      title: "Methodist",
      tags: ["Later Protestant"],
      content: `**Founded:** 18th century (John Wesley's revival movement)[^154][^155]

      **Key Beliefs:**

      • **Prevenient grace:** God's grace is available to all people, enabling them to respond to Him[^156][^157]

      • **Arminian soteriology:** Humans have free will to accept or reject salvation[^158]

      • **Social holiness:** Personal holiness must lead to social action and justice[^159][^160][^161]

      • **Perfectionism:** Christians can achieve "Christian perfection" (sanctification) in this life[^162][^155]

      • **Means of grace:** Emphasizes spiritual growth through scripture, sacraments, prayer, and fellowship[^163]

      • **Methodist quadrilateral:** Authority based on Scripture (primary), tradition, reason, and experience[^164][^165]

      • **Social justice:** Strong emphasis on helping the poor and marginalized[^166]

      **Historical Impact:** Abolition movement, temperance, civil rights[^160][^167]

      **Major Bodies:** United Methodist Church, Free Methodist, African Methodist Episcopal Church (AME)[^168][^160][^161]`,
    },
    {
      id: "Pentecostal",
      title: "Pentecostal",
      tags: ["Later Protestant"],
      content: `**Founded:** Early 1900s (Azusa Street Revival, Los Angeles)[^169][^170]

      **Key Beliefs:**

      • **Baptism in the Holy Spirit:** A distinct experience after salvation, evidenced by speaking in tongues[^171][^145][^172]

      • **Spiritual gifts:** Emphasis on all nine gifts of the Spirit (1 Corinthians 12) for today[^173][^174]

      • **Divine healing:** God heals today through prayer and faith[^175][^145]

      • **Prosperity teaching:** God desires believers to be healthy and prosperous (common, but not universal)[^176][^177]

      • **Premillennialism:** Belief that Jesus will return before the millennium[^178][^179]

      • **Personal experience:** Direct, personal relationship with God through the Spirit[^172][^180][^181]

      • **Evangelistic fervor:** Strong emphasis on missions and church planting[^145][^182]

      **Global Movement:** One of the fastest-growing Christian movements worldwide[^183][^180][^181]

      **Major Bodies:** Assemblies of God, Church of God in Christ, Foursquare Church[^184][^172]`,
    },
    {
      id: "Restorationist",
      title: "Restorationist",
      tags: ["Later Protestant"],
      content: `**Founded:** 1800s onwards (Stone-Campbell Movement and others)[^185][^186]

      **Key Beliefs:**

      • **Primitive Christianity:** Attempt to restore New Testament Christianity exactly, bypassing tradition[^187][^188]

      • **No creeds:** "No creed but Christ, no book but the Bible"[^189][^186]

      • **Biblical patterns:** Strict adherence to perceived New Testament patterns for worship and structure[^190][^188]

      • **Unity movement:** Seeks to unite all Christians by returning to biblical basics[^191][^188]

      **Major Groups:** Churches of Christ, Christian Church (Disciples of Christ), and the independent Christian churches and churches of Christ[^192][^190][^188].

      **Note:** Other groups like Latter-day Saints and Jehovah's Witnesses also originated in this period with a "restoration" goal, but are considered non-orthodox by mainstream Christianity (see 'Other Movements').[^193]`,
    },
    {
      id: "Episcopal",
      title: "Episcopal",
      tags: ["Later Protestant"],
      content: `**Founded:** 1789 AD (American Episcopal Church formed after American Revolution)[^194][^195]

      **Key Beliefs:**

      • **Anglican tradition:** Part of the worldwide Anglican Communion (USA branch)[^196][^197][^198]

      • **Via media:** "Middle way" between Catholicism and Protestantism[^199][^200]

      • **Episcopal governance:** Led by bishops in apostolic succession[^201][^19]

      • **Book of Common Prayer:** Liturgical worship with structured prayers[^19][^202]

      • **Broad theological spectrum:** Includes Anglo-Catholic, Evangelical, and Liberal traditions[^203][^197][^198]

      • **Social justice:** Strong emphasis on social issues and inclusion[^195][^25]

      • **Ordination of women:** Ordains women as priests and bishops[^204][^205]

      • **LGBTQ+ inclusion:** Generally affirming of LGBTQ+ individuals and clergy[^206]

      **Distinctive Features:** Formal liturgy, cathedral tradition, theological education emphasis[^207][^208]`,
    },
    {
      id: "evangelicalism",
      title: "Evangelicalism",
      tags: ["Later Protestant"],
      content: `**Founded:** A movement rather than a denomination, arising from the revivals of the eighteenth century under John Wesley, George Whitefield and Jonathan Edwards[^209][^210]

      **Key Beliefs:**

      • **Conversion:** The need for a personal turning to Christ, often called being "born again"[^209][^210]

      • **The Bible:** Scripture as the supreme authority for faith and life[^209][^211]

      • **The cross:** Christ's atoning death at the centre of the faith[^209][^210]

      • **Activism:** Sharing the gospel and putting faith into action[^209][^211]

      **Distinctive Features:** The historian David Bebbington summed up evangelicals by these four marks, conversion, the Bible, the cross and activism. Evangelicals are found in almost every Protestant denomination and in independent churches. The Lausanne Covenant of 1974, drafted under John Stott and promoted by Billy Graham, is a widely shared statement of evangelical belief and mission[^209][^212][^211]`,
    },
    {
      id: "charismatic",
      title: "Charismatic Movement",
      tags: ["Later Protestant"],
      content: `**Founded:** 1960, when the Episcopal priest Dennis Bennett in California announced that he had spoken in tongues; it spread into the Catholic Church from 1967[^213][^214][^181]

      **Key Beliefs:**

      • **Gifts of the Spirit:** The gifts described in 1 Corinthians 12, including tongues, prophecy and healing, continue today[^213][^181]

      • **Within existing churches:** Unlike Pentecostals, charismatics generally stay in their own denominations, Catholic, Anglican, Lutheran and others[^213][^181]

      **Distinctive Features:** Contemporary worship music and an emphasis on experience of the Holy Spirit. Together with Pentecostals, charismatic Christians numbered about 584 million in 2010, about a quarter of all Christians, on figures from the Center for the Study of Global Christianity[^181]`,
    },
    {
      id: "plymouthBrethren",
      title: "Plymouth Brethren",
      tags: ["Later Protestant"],
      content: `**Founded:** Late 1820s in Dublin and Plymouth; John Nelson Darby was its leading early figure[^215][^216][^217]

      **Key Beliefs:**

      • **No clergy:** Any brother may lead worship and preach, and congregations meet simply as "assemblies"[^215][^216]

      • **The Lord's Supper weekly:** The breaking of bread every Sunday is the centre of worship[^215][^216]

      • **Dispensationalism:** Darby's division of history into dispensations, and his teaching of a rapture of the church before the tribulation, spread through the Scofield Reference Bible and shaped much of American evangelicalism[^217][^218][^219][^216]

      **Distinctive Features:** Split in 1848 into Open Brethren, who are much like other evangelicals, and Exclusive Brethren. The strictest Exclusive group, the Plymouth Brethren Christian Church, separates from outsiders even at meals and has been criticised for its treatment of members who leave[^215][^220][^216]

**See also:** [The Rapture (End Times)](/categories/end-times).`,
    },
    {
      id: "salvationArmy",
      title: "Salvation Army",
      tags: ["Later Protestant"],
      content: `**Founded:** 1865 in the East End of London by William and Catherine Booth, as the Christian Mission; renamed the Salvation Army in 1878[^221][^222][^223]

      **Key Beliefs:**

      • **Evangelical Methodist roots:** Holiness teaching from Methodism, with an emphasis on salvation and a holy life[^221][^222]

      • **No sacraments:** Does not practise baptism or communion, holding that inward grace does not depend on outward rites[^221][^222]

      • **Faith in action:** Care for the poor, the homeless and addicts as part of the gospel[^224][^221]

      **Distinctive Features:** A military structure, with officers, soldiers, uniforms and brass bands; women have held every rank from the start. It is one of the largest charities in the world, working in more than 130 countries[^221][^224]`,
    },
    {
      id: "quakers",
      title: "Quakers (Religious Society of Friends)",
      tags: ["Other movements"],
      content: `**Founded:** c. 1650s (George Fox, England)[^225][^226]

      **Key Beliefs:**

      • **Inner Light:** Emphasize the "inner light" of God in every person[^227]

      • **Unprogrammed Worship:** Often meet in silent worship, waiting for the Holy Spirit to move members to speak[^226][^228]

      • **No Sacraments:** Traditionally do not practice physical sacraments like baptism or communion, seeing all of life as sacramental[^229]

      • **Peace Testimony:** Historic commitment to pacifism and non-violence[^230][^231]

      • **Equality:** Strong belief in the equality of all people, leading to advocacy for abolition, women's rights, etc.[^232]

      **Distinctive Features:** Testimonies (Simplicity, Peace, Integrity, Community, Equality), decision-making by "sense of the meeting" (seeking unity)[^233]`,
    },
    {
      id: "seventhDayAdventist",
      title: "Seventh-day Adventist",
      tags: ["Other movements"],
      content: `**Founded:** 1863 (USA, from Millerite movement)[^234][^235]

      **Key Beliefs:**

      • **Seventh-day Sabbath:** Observance of the Sabbath on Saturday[^236][^237]

      • **Second Coming:** Emphasis on the imminent literal return (Advent) of Christ[^238][^234]

      • **Health Message:** Focus on health and wellness, often including vegetarianism and abstinence from alcohol/tobacco[^239][^240]

      • **Ellen G. White:** Regard her writings as an authoritative source of truth, though subordinate to the Bible[^241]

      • **State of the Dead:** Belief in "soul sleep" (unconsciousness) between death and resurrection[^242]

      **Distinctive Features:** Large worldwide missions, hospital, and education systems[^243]; belief in an "investigative judgment" that began in 1844[^244]`,
    },
    {
      id: "onenessPentecostal",
      title: "Oneness Pentecostalism",
      tags: ["Other movements"],
      content: `**Founded:** 1913 to 1916, from a dispute within early Pentecostalism that began at the Arroyo Seco camp meeting in California; the United Pentecostal Church International, the largest body, formed in 1945[^245][^246][^247]

      **Key Beliefs:**

      • **One God, not three persons:** God is one person who reveals himself as Father, Son and Holy Spirit, a view historically called modalism[^245][^248]

      • **Baptism in Jesus' name:** Baptism must be in the name of Jesus only (Acts 2:38), not in the threefold name[^245][^248]

      • **Tongues as evidence of salvation:** Many teach that speaking in tongues is a necessary sign of receiving the Spirit[^245][^248]

      **Distinctive Features:** Strict dress and holiness codes in many churches. Trinitarian churches do not recognise Oneness teaching as orthodox, because it denies that Father, Son and Spirit are distinct persons[^245][^246][^248][^247]

**See also:** [Trinity Heresies (Heresies and Fallacies)](/categories/heresies-and-fallacies#section-trinity-heresies), [The Trinity](/categories/trinity).`,
    },
    {
      id: "christadelphians",
      title: "Christadelphians",
      tags: ["Other movements"],
      content: `**Founded:** 1848, by the English-born doctor John Thomas in the United States; the name, "brothers in Christ", was adopted in 1864[^249][^250]

      **Key Beliefs:**

      • **Not Trinitarian:** God is one; Jesus is the Son of God but did not exist before his birth, and the Holy Spirit is God's power rather than a person[^249][^250][^251]

      • **No immortal soul:** The dead are unconscious until the resurrection, and there is no hell of eternal torment[^249][^250]

      • **No personal devil:** "Satan" refers to human sin and opposition to God, not a fallen angel[^249][^250]

      • **The kingdom on earth:** Christ will return to establish God's kingdom on earth, centred on Israel[^250][^251]

      **Distinctive Features:** No paid clergy; lay-led meetings called ecclesias. Historically pacifist and avoid voting and military service[^249][^250]

**See also:** [Trinity Heresies (Heresies and Fallacies)](/categories/heresies-and-fallacies#section-trinity-heresies).`,
    },
    {
      id: "iglesiaNiCristo",
      title: "Iglesia ni Cristo",
      tags: ["Other movements"],
      content: `**Founded:** 1914 in the Philippines, by Felix Manalo[^252][^253][^254]

      **Key Beliefs:**

      • **Jesus not God:** Jesus is the Son of God and saviour, but a created man, not divine[^252][^253]

      • **The last messenger:** Felix Manalo is God's last messenger, sent to re-establish the true church, which INC holds had been lost after the apostles[^252][^254][^253]

      • **Membership needed for salvation:** Only members of the Iglesia ni Cristo will be saved[^252][^253]

      **Distinctive Features:** Led by members of the Manalo family; members vote as a bloc in Philippine elections. It has several million members, with congregations around the world among Filipino emigrants[^252][^253]`,
    },
    {
      id: "messianicJudaism",
      title: "Messianic Judaism",
      tags: ["Other movements"],
      content: `**Founded:** Modern movement, 1960s-1970s[^255][^256]

      **Key Beliefs:**

      • **Jesus as Messiah:** Jewish believers who accept Jesus (Yeshua) as the promised Messiah of Israel[^257][^258]

      • **Jewish Identity:** Maintain Jewish identity, customs, and holidays (e.g., Passover, Yom Kippur)[^259][^256]

      • **Torah Observance:** Varies, but many observe aspects of the Torah as a sign of cultural identity and obedience, not for salvation[^258]

      • **Trinity:** Most (but not all) Messianic Jews adhere to the doctrine of the Trinity[^260][^256]

      **Distinctive Features:** Synagogue-style worship, use of Hebrew, bridging Jewish and Christian theology[^256]. Not recognized as Judaism by mainstream Jewish movements[^261][^256].

**See also:** [Jewish Objections to Jesus as Messiah (Other Religions)](/categories/religions#section-jewish-objections).
`,
    },
    {
      id: "africanInitiated",
      title: "African-Initiated Churches",
      tags: ["Other movements"],
      content: `**Founded:** From the late nineteenth century onward, by Africans who founded churches independent of the mission churches[^262][^263]

      **Key Beliefs:**

      • **Christian faith in African form:** Prophecy, healing, dreams and visions are central, and worship includes African music and dance[^262][^264]

      • **Prophet founders:** Many are led by prophets regarded as specially called by God, and some give their founders an elevated, even divine, status[^262][^265][^263]

      **Major Bodies:** The Kimbanguist Church, founded by Simon Kimbangu, a Congolese prophet imprisoned by the Belgian authorities from 1921 until his death in 1951, is a member of the World Council of Churches[^265][^263]. The Aladura ("praying people") churches of Nigeria stress prayer and healing[^266][^264]

      **Distinctive Features:** Mainline churches range in their assessment from full recognition to concern over syncretism with traditional religion and the place given to living prophets[^262][^263][^264]

**See also:** [African Traditional Religions (Other Religions)](/categories/religions#section-african-traditional).`,
    },
    {
      id: "chineseChurch",
      title: "Christianity in China",
      tags: ["Other movements"],
      content: `**Founded:** Christianity first reached China with missionaries of the Church of the East in 635. After 1949 the Communist government expelled foreign missionaries and brought the churches under state control[^267][^268][^269]

            **Registered and unregistered churches:**

      • **Three-Self Patriotic Movement:** The state-approved Protestant church, formed in 1954 on the principles of self-government, self-support and self-propagation, under the oversight of the Communist Party[^268][^269]

      • **House churches:** Congregations that refuse to register, often because registration brings state control over preaching and membership. Leaders and members face arrest, and many churches have been closed or had their crosses removed[^270][^269]

      **Distinctive Features:** Writers such as Watchman Nee, who died in a labour camp in 1972, shaped Chinese Christianity[^271][^272]. The government counted over 44 million Christians in 2018, 38 million Protestants and 6 million Catholics, while some Christian organisations estimate tens of millions more; surveys are hard to interpret because many people do not disclose their faith[^267][^273]

**See also:** [Church of the East](/categories/branches#section-churchOfTheEast).`,
    },
    {
      id: "nonDenominational",
      title: "Non-denominational / Other Movements",
      tags: ["Other movements"],
      content: `**Founded:** 20th century onwards (especially in the USA)[^274]

      **Key Beliefs (General):**

      • **No Denominational Ties:** Reject formal ties to historic denominations and their hierarchies[^275]

      • **Local Church Autonomy:** Emphasize independence and self-governance[^276][^140]

      • **Bible-Centered:** Strongly Bible-focused, usually with an evangelical theology (similar to Baptist or Pentecostal beliefs)[^277]

      • **Contemporary Worship:** Often characterized by modern music and informal service styles[^278][^279]

      **Related Movements:**

      • **House Church Movement:** Focuses on simple, small-group meetings in homes, emphasizing community and mimicking the New Testament model[^280].

      • **Emerging Church:** A postmodern movement questioning traditional evangelical structures and embracing social justice and deconstructed faith[^281].

      **A Note on Orthodox Classification:**

      Some movements, while claiming Christian identity, are considered outside orthodox Christianity by Catholic, Orthodox, and Protestant groups due to fundamental doctrinal differences. This includes groups like **Latter-day Saints (Mormons)**[^282][^283] and **Jehovah's Witnesses** (which have unique restorationist claims and non-Trinitarian theology)[^284][^285], and **Unitarian Universalists**, who have Christian roots but now embrace a pluralistic, non-creedal faith that rejects the Trinity[^286][^287].

**See also:** [Heresies and Fallacies](/categories/heresies-and-fallacies).
`,
    },
    {
      id: "waldensian",
      title: "Waldensians",
      tags: ["Pre-Reformation"],
      content: `**Founded:** c. 1173 AD (Peter Waldo, France)[^288]

      **Key Beliefs:**

      • **Reform before the Reformation:** Emphasized lay preaching, voluntary poverty, and the authority of scripture centuries before Martin Luther[^289][^290]

      • **Calvinist Alignment:** Formally merged into the Reformed (Calvinist) tradition during the Swiss Reformation in 1532[^291][^288]

      • **Priesthood of Believers:** Rejects papal authority and Catholic church hierarchies in favor of scriptural authority[^292][^288]

      **Distinctive Features:** Survived centuries of severe persecution in the Alpine valleys of Italy. Today, they form the Waldensian Evangelical Church[^293][^288].`,
    },
    {
      id: "moravian",
      title: "Moravian Church (Unitas Fratrum)",
      tags: ["Pre-Reformation"],
      content: `**Founded:** 1457 AD (Bohemian Reformation, inspired by Jan Hus)[^294][^295][^296]

      **Key Beliefs:**

      • **Jan Hus Influence:** Traces roots to the Hussite movement which challenged papal authority, liturgical language, and communion practices prior to the Reformation[^295][^297]

      • **Herrnhut Revival:** Renewed in 1727 under Count Zinzendorf, leading to a famous 100-year continuous prayer vigil[^298][^296]

      • **Global Missions:** Pioneered modern Protestant foreign missions, sending missionaries worldwide in the 18th century[^299][^294]

      **Distinctive Features:** Often described as the oldest Protestant denomination still in existence, and known for adopting the motto "In essentials unity, in non-essentials liberty, in all things charity", which originated with the 17th-century Lutheran writer Rupertus Meldenius[^300].`,
    },
    {
      id: "congregationalist",
      title: "Congregationalists",
      tags: ["Later Protestant"],
      content: `**Founded:** c. 1580s AD (Puritan Separatists, England)[^301][^302][^303]

      **Key Beliefs:**

      • **Local Autonomy:** Rejects both episcopal (bishop) and presbyterian (elder council) hierarchies; each local congregation is fully independent and self-governing under Christ[^304]

      • **Puritan Roots:** Developed by English Puritans who wanted to simplify worship and purify the church of Catholic-style rituals[^303][^305]

      • **Cambridge Platform (1648):** Established church government rules for early American Congregationalists[^306][^307]

      **Distinctive Features:** Heavily influenced the settlement of colonial New England (including the Pilgrims)[^308][^309]. Highly democratic church governance[^302].`,
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
    "32. [Wikipedia] 'Eastern Catholic Churches.' https://en.wikipedia.org/wiki/Eastern_Catholic_Churches",
    "33. [Encyclopedia] Encyclopaedia Britannica. 'Eastern rite church.' https://www.britannica.com/topic/Eastern-rite-church",
    "34. [Wikipedia] 'Maronite Church.' https://en.wikipedia.org/wiki/Maronite_Church",
    "35. [Primary Source] Second Vatican Council. Orientalium Ecclesiarum (1964). https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_decree_19641121_orientalium-ecclesiarum_en.html",
    "36. [Wikipedia] 'Ukrainian Greek Catholic Church.' https://en.wikipedia.org/wiki/Ukrainian_Greek_Catholic_Church",
    "37. [Wikipedia] 'Old Catholic Church.' https://en.wikipedia.org/wiki/Old_Catholic_Church",
    "38. [Encyclopedia] Encyclopaedia Britannica. 'Old Catholic church.' https://www.britannica.com/topic/Old-Catholic-church",
    "39. [Primary Source] Union of Utrecht of the Old Catholic Churches. https://www.utrechter-union.org/",
    "40. [Wikipedia] 'Papal infallibility.' https://en.wikipedia.org/wiki/Papal_infallibility",
    "41. [Encyclopedia] New Advent, Catholic Encyclopedia. 'Monophysites and Monophysitism.' https://www.newadvent.org/cathen/10489b.htm",
    "42. [Primary Source] Schaff, Creeds of Christendom. 'The Symbol of Chalcedon.' https://www.ccel.org/ccel/schaff/creeds2.iv.i.iii.html",
    "43. [Wikipedia] Miaphysitism. https://en.wikipedia.org/wiki/Miaphysitism",
    "44. [Wikipedia] Armenian Apostolic Church. https://en.wikipedia.org/wiki/Armenian_Apostolic_Church",
    "45. [Encyclopedia] Britannica - Oriental Orthodox church. 'Overview of the tradition.' https://www.britannica.com/topic/Oriental-Orthodox-church",
    "46. [Wikipedia] Liturgy of Saint James. 'An ancient Christian liturgy used by Oriental Orthodox.' https://en.wikipedia.org/wiki/Liturgy_of_Saint_James",
    "47. [Wikipedia] Papal primacy. https://en.wikipedia.org/wiki/Primacy_of_the_Bishop_of_Rome",
    "48. [Christian Source] World Council of Churches. 'Eastern Orthodox Churches.' https://www.oikoumene.org/church-families/orthodox-churches-eastern",
    "49. [Wikipedia] 'Oriental Orthodox Churches.' https://en.wikipedia.org/wiki/Oriental_Orthodoxy",
    "50. [Wikipedia] 'Christianity in Ethiopia.' https://en.wikipedia.org/wiki/Christianity_in_Ethiopia",
    "51. [Academic] The Oriental Orthodox Communion in Modern Egypt: The Armenian, Coptic, Ethiopian, and Syriac Orthodox Churches, 1805 CE- Present. https://doi.org/10.5642/cguetd.czpj8535",
    "52. [Wikipedia] Coptic Orthodox Church. https://en.wikipedia.org/wiki/Coptic_Orthodox_Church",
    "53. [Academic] 'With Wisdom and Courage, New Syriac Orthodox Patriarch Reaffirms the Church's Commitment to Syria | Religious Studies.' Duke University. https://religiousstudies.duke.edu/news/wisdom-and-courage-new-syriac-orthodox-patriarch-reaffirms-churchs-commitment-syria",
    "54. [Wikipedia] 'Syriac Orthodox Church.' https://en.wikipedia.org/wiki/Syriac_Orthodox_Church",
    "55. [Wikipedia] 'Religious fasting.' https://en.wikipedia.org/wiki/Fasting_in_Christianity",
    "56. [Reference] BBC Religions. 'Coptic Orthodox Church.' https://www.bbc.co.uk/religion/religions/christianity/subdivisions/coptic_1.shtml",
    "57. [Wikipedia] Church of the East. https://en.wikipedia.org/wiki/Church_of_the_East",
    "58. [Encyclopedia] New Advent, Catholic Encyclopedia. 'Nestorius and Nestorianism.' https://www.newadvent.org/cathen/10755a.htm",
    "59. [Academic] ResearchGate. 'The Church of the East: A Concise History.' https://www.researchgate.net/publication/293179513_The_Church_of_the_East_A_Concise_History",
    "60. [Encyclopedia] New Advent, Catholic Encyclopedia. 'East Syrian Rite.' https://www.newadvent.org/cathen/14413a.htm",
    "61. [Wikipedia] Nestorianism. https://en.wikipedia.org/wiki/Nestorianism",
    "62. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Eastern Churches.' https://www.newadvent.org/cathen/05230a.htm",
    "63. [Wikipedia] 'Clerical marriage.' https://en.wikipedia.org/wiki/Married_clergy",
    "64. [Academic] Smith. Church of the East from Ancient Times through World War I. Yearbook of the Association of Pacific Coast Geographers, 1989. https://doi.org/10.1353/pcg.1989.0003",
    "65. [Wikipedia] 'Ancient Church of the East.' https://en.wikipedia.org/wiki/Ancient_Church_of_the_East",
    "66. [Academic] Gorgias Encyclopedic Dictionary of the Syriac Heritage (Beth Mardutho). Church of the East. https://gedsh.bethmardutho.org/Church-of-the-East",
    "67. [Encyclopedia] Britannica - Schism of 1054. 'The Great Schism.' https://www.britannica.com/event/Schism-of-1054",
    "68. [Encyclopedia] Britannica - Eastern Orthodoxy. 'Structure and organization.' https://www.britannica.com/topic/Eastern-Orthodoxy",
    "69. [Primary Source] Orthodox Church in America (OCA). 'The Sacraments.' https://www.oca.org/orthodoxy/the-orthodox-faith/worship/the-sacraments",
    "70. [Primary Source] Saint Katherine Greek Orthodox Church. 'Scripture and Tradition.' https://stkatherineaz.org/holy-scripture-holy-tradition",
    "71. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Veneration of Images.' https://www.newadvent.org/cathen/07664a.htm",
    "72. [Wikipedia] 'Icon.' https://en.wikipedia.org/wiki/Icon",
    "73. [Encyclopedia] New Advent, Catholic Encyclopedia. 'The Eastern Schism.' https://www.newadvent.org/cathen/13535a.htm",
    "74. [Primary Source] 'Schaff, NPNF2-14. The Seven Ecumenical Councils.' Christian Classics Ethereal Library. https://www.ccel.org/ccel/schaff/npnf214.xiv.iii.vii.html",
    "75. [Primary Source] 'Orientale Lumen (May 2, 1995).' Holy See. https://w2.vatican.va/content/john-paul-ii/en/apost_letters/1995/documents/hf_jp-ii_apl_19950502_orientale-lumen.html",
    "76. [Wikipedia] 'Theosis (Eastern Christian theology).' https://en.wikipedia.org/wiki/Theosis_(Eastern_Christian_theology)",
    "77. [Primary Source] OCA. 'Worship.' https://www.oca.org/orthodoxy/the-orthodox-faith/worship",
    "78. [Encyclopedia] World History Encyclopedia - Protestant Reformation. 'Overview of Reformation movements.' https://www.worldhistory.org/Protestant_Reformation",
    "79. [Wikipedia] 'Lutheranism.' https://en.wikipedia.org/wiki/Lutheranism",
    "80. [Reference] World Council of Churches. 'Lutheran churches.' https://www.oikoumene.org/church-families/lutheran-churches",
    "81. [Encyclopedia] Britannica - Justification. 'Theological doctrine of justification by faith.' https://www.britannica.com/topic/justification-Christianity",
    "82. [Primary Source] Schaff, Creeds of Christendom. 'The Augsburg Confession, A.D. 1530.' https://www.ccel.org/ccel/schaff/creeds3.iii.ii.html",
    "83. [Wikipedia] 'Sola scriptura.' https://en.wikipedia.org/wiki/Sola_scriptura",
    "84. [Primary Source] Schaff, Creeds of Christendom. 'The Formula of Concord, A.D. 1576.' https://www.ccel.org/ccel/schaff/creeds3.iii.iv.html",
    "85. [Wikipedia] Anglican doctrine. https://en.wikipedia.org/wiki/Anglican_doctrine",
    "86. [Primary Source] Schaff, Creeds of Christendom. 'Luther's Small Catechism, A.D. 1529.' https://www.ccel.org/ccel/schaff/creeds3.iii.iii.html",
    "87. [Wikipedia] Divine Service (Lutheran). https://en.wikipedia.org/wiki/Divine_Service_(Lutheran)",
    "88. [Wikipedia] Sola gratia. https://en.wikipedia.org/wiki/Sola_gratia",
    "89. [Reference] Augsburg Confession, article 4. Book of Concord. https://bookofconcord.org/augsburg-confession/justification/",
    "90. [Wikipedia] Priesthood of all believers. https://en.wikipedia.org/wiki/Universal_priesthood",
    "91. [Primary Source] Schaff, Creeds of Christendom. 'The Lutheran Confessions.' https://www.ccel.org/ccel/schaff/creeds1.viii.i.html",
    "92. [Wikipedia] List of Lutheran denominations. https://en.wikipedia.org/wiki/List_of_Lutheran_denominations",
    "93. [Reference] About Us. The Lutheran Church-Missouri Synod. https://www.lcms.org/about",
    "94. [Wikipedia] 'Reformed Christianity.' https://en.wikipedia.org/wiki/Reformed_Christianity",
    "95. [Reference] World Council of Churches. 'Reformed churches.' https://www.oikoumene.org/church-families/reformed-churches",
    "96. [Primary Source] Schaff, Creeds of Christendom. 'The Westminster Shorter Catechism, A.D. 1647.' https://www.ccel.org/ccel/schaff/creeds3.iv.xviii.html",
    "97. [Encyclopedia] Britannica - Predestination. 'Doctrine of predestination.' https://www.britannica.com/topic/predestination",
    "98. [Wikipedia] Elder (Christianity). https://en.wikipedia.org/wiki/Elder_(Christianity)",
    "99. [Academic] Lee. Samuel Rutherford (1600–1661) and Adiaphora : The Regulative Principle of Worship and the Rule of Christ. Journal of Early Modern Christianity, 2024. https://doi.org/10.1515/jemc-2024-2013",
    "100. [Wikipedia] 'Regulative principle of worship.' https://en.wikipedia.org/wiki/Regulative_principle_of_worship",
    "101. [Primary Source] Schaff, Creeds of Christendom. 'The Westminster Confession of Faith, A.D. 1647.' https://www.ccel.org/ccel/schaff/creeds3.iv.xvii.html",
    "102. [Academic] Van Dixhoorn. The Westminster Standards. The Oxford Handbook of Reformed Theology, 2020. https://doi.org/10.1093/oxfordhb/9780198723912.013.16",
    "103. [Wikipedia] 'Westminster Standards.' https://en.wikipedia.org/wiki/Westminster_Standards",
    "104. [Academic] Vermaak. The historical development of Presbyterian ordination polity as background to the gay and lesbian ordination debate in the Presbyterian Church (U.S.A.). Verbum et Ecclesia, 2010. https://doi.org/10.4102/ve.v31i1.50",
    "105. [Wikipedia] 'Presbyterian polity.' https://en.wikipedia.org/wiki/Presbyterian_polity",
    "106. [Wikipedia] Presbyterianism. https://en.wikipedia.org/wiki/Presbyterianism",
    "107. [Reference] About the Orthodox Presbyterian Church. https://opc.org/about.html",
    "108. [Christian Source] World Communion of Reformed Churches. 'Homepage.' https://wcrc.eu",
    "109. [Academic] Rothkegel. The Swiss Brethren: A Story in Fragments., 2021. https://doi.org/10.5771/9783748964803",
    "110. [Wikipedia] 'Swiss Brethren.' https://en.wikipedia.org/wiki/Swiss_Brethren",
    "111. [Encyclopedia] New Advent, Catholic Encyclopedia. 'Anabaptists.' https://www.newadvent.org/cathen/01445b.htm",
    "112. [Wikipedia] 'Anabaptism.' https://en.wikipedia.org/wiki/Anabaptism",
    "113. [Academic] Cahill. Nonresistance, Defense, Violence, and the Kingdom in Christian Tradition. Interpretation: A Journal of Bible and Theology, 1984. https://doi.org/10.1177/002096438403800404",
    "114. [Wikipedia] 'Nonresistance.' https://en.wikipedia.org/wiki/Nonresistance",
    "115. [Wikipedia] Plain people. https://en.wikipedia.org/wiki/Plain_people",
    "116. [Reference] BBC Religions. 'Amish.' https://www.bbc.co.uk/religion/religions/christianity/subdivisions/amish_1.shtml",
    "117. [Academic] Batalla. Church-State Separation and Challenging Issues Concerning Religion. Religions, 2019. https://doi.org/10.3390/rel10030197",
    "118. [Wikipedia] 'Church-state separation.' https://en.wikipedia.org/wiki/Church-state_separation",
    "119. [Christian Source] Global Anabaptist Mennonite Encyclopedia Online (GAMEO). 'Ban.' https://gameo.org/index.php?title=Ban",
    "120. [Christian Source] GAMEO. 'Bible.' https://gameo.org/index.php?title=Bible",
    "121. [Wikipedia] 'Radical Reformation.' https://en.wikipedia.org/wiki/Radical_Reformation#Anabaptists",
    "122. [Christian Source] GAMEO. 'Anabaptism.' https://gameo.org/index.php?title=Anabaptism",
    "123. [Academic] T&T Clark Handbook of Anabaptism., 2021. https://doi.org/10.5040/9780567689511",
    "124. [Wikipedia] 'Martyrs Mirror.' https://en.wikipedia.org/wiki/Martyrs_Mirror",
    "125. [Encyclopedia] World History Encyclopedia. 'Anabaptist.' https://www.worldhistory.org/Anabaptist/",
    "126. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Anglicanism.' https://www.newadvent.org/cathen/01498a.htm",
    "127. [Wikipedia] 'Anglican Church.' https://en.wikipedia.org/wiki/Anglican_Church",
    "128. [Encyclopedia] Britannica - Anglicanism. 'The 'via media'.' https://www.britannica.com/topic/Anglicanism",
    "129. [Wikipedia] Historical episcopate. https://en.wikipedia.org/wiki/Historic_episcopate",
    "130. [Academic] Hefling. The Book of Common Prayer: A Guide., 2020. https://doi.org/10.1093/oso/9780190689681.001.0001",
    "131. [Wikipedia] 'Book of Common Prayer.' https://en.wikipedia.org/wiki/Book_of_Common_Prayer",
    "132. [Academic] Mather. Georgian Churchmanship Reconsidered: Some Variations in Anglican Public Worship 1714–1830. The Journal of Ecclesiastical History, 1985. https://doi.org/10.1017/s0022046900038744",
    "133. [Wikipedia] 'Churchmanship.' https://en.wikipedia.org/wiki/Churchmanship",
    "134. [Academic] 'Elizabeth's Supremacy Act (1559).' Hanover Historical Texts Project. https://history.hanover.edu/texts/engref/er79.html",
    "135. [Wikipedia] 'Supreme Governor of the Church of England.' https://en.wikipedia.org/wiki/Supreme_Governor_of_the_Church_of_England",
    "136. [Primary Source] Schaff, Creeds of Christendom. 'The Thirty-Nine Articles of Religion.' https://www.ccel.org/ccel/schaff/creeds3.iv.xi.html",
    "137. [Christian Source] Anglican Communion. 'Homepage.' https://www.anglicancommunion.org/",
    "138. [Wikipedia] 'Anglican Church Music.' https://en.wikipedia.org/wiki/Anglican_church_music",
    "139. [Wikipedia] John Smyth (English theologian). https://en.wikipedia.org/wiki/John_Smyth_(Baptist_minister)",
    "140. [Wikipedia] Baptists. https://en.wikipedia.org/wiki/Baptists",
    "141. [Reference] BBC Religions. 'Baptist Churches.' https://www.bbc.co.uk/religion/religions/christianity/subdivisions/baptist_1.shtml",
    "142. [Primary Source] Schaff, Creeds of Christendom. 'The New Hampshire Baptist Confession, A.D. 1833.' https://www.ccel.org/ccel/schaff/creeds3.v.ii.ii.html",
    "143. [Primary Source] Southern Baptist Church (Boston). 'What We Believe.' https://www.sbcboston.org/our-beliefs",
    "144. [Wikipedia] Baptist beliefs. https://en.wikipedia.org/wiki/Baptist_beliefs",
    "145. [Wikipedia] Assemblies of God USA. https://en.wikipedia.org/wiki/Assemblies_of_God_USA",
    "146. [Encyclopedia] World History Encyclopedia. 'Roger Williams.' https://www.worldhistory.org/Roger_Williams/",
    "147. [Wikipedia] 'Roger Williams (theologian).' https://en.wikipedia.org/wiki/Roger_Williams_(theologian)",
    "148. [Wikipedia] International Mission Board. https://en.wikipedia.org/wiki/International_Mission_Board",
    "149. [Wikipedia] 'Congregational Polity.' https://en.wikipedia.org/wiki/Congregational_polity",
    "150. [Academic] Rutherford. Appropriating The Cambridge Platform’s Neo-Congregational Polity. Ecclesiology, 2025. https://doi.org/10.1163/17455316-bja10050",
    "151. [Wikipedia] List of Baptist denominations. https://en.wikipedia.org/wiki/List_of_Baptist_denominations",
    "152. [Academic] Mullin. Southern Baptist Convention. The Encyclopedia of Christian Civilization, 2011. https://doi.org/10.1002/9780470670606.wbecc1291",
    "153. [Wikipedia] 'Freedom of Religion in the United States.' https://en.wikipedia.org/wiki/Freedom_of_religion_in_the_United_States",
    "154. [Encyclopedia] Encyclopaedia Britannica. 'Methodism, History, Beliefs and Organization.' https://www.britannica.com/topic/Methodism",
    "155. [Wikipedia] 'Christian perfection.' https://en.wikipedia.org/wiki/Christian_perfection",
    "156. [Wikipedia] 'Wesleyan theology.' https://en.wikipedia.org/wiki/Wesleyan%E2%80%93Arminian_theology",
    "157. [Academic] Rutherford. Prevenient Grace: An Investigation into Arminianism. 2020. https://doi.org/10.60080/abac3913",
    "158. [Primary Source] Schaff, Creeds of Christendom. 'The Five Arminian Articles, A.D. 1610.' https://www.ccel.org/ccel/schaff/creeds3.iv.xv.html",
    "159. [Primary Source] UMC. 'Our Wesleyan Heritage.' https://www.umc.org/en/content/our-wesleyan-heritage",
    "160. [Wikipedia] Methodism. https://en.wikipedia.org/wiki/Methodism",
    "161. [Reference] World Council of Churches. 'Methodist churches.' https://www.oikoumene.org/church-families/methodist-churches",
    "162. [Academic] Tyson. / Christian Perfection and Its Pretenders. Charles Wesley, 2000. https://doi.org/10.1093/oso/9780195134858.003.0011",
    "163. [Wikipedia] Means of grace. https://en.wikipedia.org/wiki/Means_of_grace",
    "164. [Academic] Cosby. Using the Wesleyan Quadrilateral to Teach Biblical Studies in Christian Liberal Arts Colleges. Teaching Theology & Religion, 2001. https://doi.org/10.1111/1467-9647.00097",
    "165. [Wikipedia] 'Wesleyan Quadrilateral.' https://en.wikipedia.org/wiki/Wesleyan_Quadrilateral",
    "166. [Primary Source] United Methodist General Board of Church and Society. 'United Methodist Social Principles (2024).' https://www.umcjustice.org/documents/124",
    "167. [Academic] Abraham. The impact of Methodism. Methodism: A Very Short Introduction, 2019. https://doi.org/10.1093/actrade/9780198802310.003.0007",
    "168. [Wikipedia] List of Methodist denominations. https://en.wikipedia.org/wiki/List_of_Methodist_denominations",
    "169. [Academic] Stephen C. Dove. Hymnody and Liturgy in the Azusa Street Revival, 1906-1908. Pneuma, 2009. https://doi.org/10.1163/027209609x12470371387840",
    "170. [Wikipedia] 'Azusa Street Revival.' https://en.wikipedia.org/wiki/Azusa_Street_Revival",
    "171. [Wikipedia] 'Assemblies of God Statement of Fundamental Truths.' https://en.wikipedia.org/wiki/Assemblies_of_God_Statement_of_Fundamental_Truths",
    "172. [Reference] World Council of Churches. 'Pentecostal churches.' https://www.oikoumene.org/church-families/pentecostal-churches",
    "173. [Encyclopedia] 'Charismata.' Catholic Encyclopedia (1913), New Advent. https://www.newadvent.org/cathen/03588e.htm",
    "174. [Wikipedia] 'Gifts of the Spirit.' https://en.wikipedia.org/wiki/Gifts_of_the_Spirit",
    "175. [Wikipedia] 'Faith healing.' https://en.wikipedia.org/wiki/Divine_healing",
    "176. [Wikipedia] Prosperity theology. 'Common (but not universal) belief.' https://en.wikipedia.org/wiki/Prosperity_theology",
    "177. [Reference] Spirit and Power. Pew Research Center. https://www.pewresearch.org/religion/2006/10/05/spirit-and-power/",
    "178. [Primary Source] A/G. 'The Blessed Hope.' https://ag.org/Beliefs/Statement-of-Fundamental-Truths/The-Blessed-Hope",
    "179. [Wikipedia] Christian eschatology (preterism, historicism, futurism, idealism). https://en.wikipedia.org/wiki/Christian_eschatology",
    "180. [Wikipedia] 'Pentecostalism.' https://en.wikipedia.org/wiki/Pentecostalism",
    "181. [Reference] Global Christianity: Movements and Denominations. Pew Research Center. https://www.pewresearch.org/religion/2011/12/19/global-christianity-movements-and-denominations/",
    "182. [Academic] McGee. Assemblies of God Overseas Missions: Foundations for Recent Growth. Missiology: An International Review, 1988. https://doi.org/10.1177/009182968801600404",
    "183. [Wikipedia] 'World Christianity.' https://en.wikipedia.org/wiki/Global_Christianity",
    "184. [Wikipedia] List of Pentecostal denominations. https://en.wikipedia.org/wiki/List_of_Pentecostal_denominations",
    "185. [Academic] The ARDA. 'Restoration Movement Timeline.' https://www.thearda.com/us-religion/history/timelines/entry?etype=3&eid=32",
    "186. [Academic] Cambridge University Press. 'The Stone-Campbell Movement.' https://www.cambridge.org/core/books/cambridge-companion-to-american-protestantism/stonecampbell-movement/1F4959CCE0BD59A2F2A00E4B2D22D2C6",
    "187. [Wikipedia] 'Restoration Movement.' https://en.wikipedia.org/wiki/Stone-Campbell_Movement",
    "188. [Reference] World Council of Churches. 'Disciples of Christ / Churches of Christ.' https://www.oikoumene.org/church-families/disciples-of-christ-churches-of-christ",
    "189. [Wikipedia] 'Christian Church (disciples of Christ).' https://en.wikipedia.org/wiki/Christian_Church_(Disciples_of_Christ)",
    "190. [Wikipedia] Churches of Christ. https://en.wikipedia.org/wiki/Churches_of_Christ",
    "191. [Wikipedia] 'Declaration and Address.' https://en.wikipedia.org/wiki/Declaration_and_Address",
    "192. [Wikipedia] Christian churches and churches of Christ. https://en.wikipedia.org/wiki/Christian_churches_and_churches_of_Christ",
    "193. [Wikipedia] Restorationism. https://en.wikipedia.org/wiki/Restorationism",
    "194. [Encyclopedia] Encyclopedia of Greater Philadelphia. Episcopal Church. https://philadelphiaencyclopedia.org/essays/episcopal-church",
    "195. [Primary Source] The Old North Church (Boston). About the Episcopal Church. https://oldnorth.com/about-episcopal-church/",
    "196. [Reference] World Council of Churches. 'Anglican churches.' https://www.oikoumene.org/church-families/anglican-churches",
    "197. [Wikipedia] 'Anglican Communion.' https://en.wikipedia.org/wiki/Anglican_Communion",
    "198. [Encyclopedia] 'Anglican Churches.' Encyclopedia.com. https://www.encyclopedia.com/religion/encyclopedias-almanacs-transcripts-and-maps/anglican-churches",
    "199. [Academic] 'The Anglican Via Media: The Idea of Moderation in Reform | Journal of Anglican Studies | Cambridge Core.' Cambridge University Press. https://www.cambridge.org/core/journals/journal-of-anglican-studies/article/anglican-via-media-the-idea-of-moderation-in-reform/A3DA01D957096B44C0AA930E2069E662",
    "200. [Wikipedia] 'Via media.' https://en.wikipedia.org/wiki/Via_media",
    "201. [Wikipedia] 'Chicago Lambeth Quadrilateral.' https://en.wikipedia.org/wiki/Chicago-Lambeth_Quadrilateral",
    "202. [Wikipedia] 'Book of Common Prayer (1979).' https://en.wikipedia.org/wiki/Book_of_Common_Prayer_(1979)",
    "203. [Wikipedia] Episcopal Church (United States) - Theology. 'Theological spectrum.' https://en.wikipedia.org/wiki/Episcopal_Church_(United_States)#Theology",
    "204. [Reference] 'BBC - Religions - Christianity: Church of England.' BBC. https://www.bbc.co.uk/religion/religions/christianity/cofe/cofe_1.shtml",
    "205. [Wikipedia] 'Ordination of women in the Anglican Communion.' https://en.wikipedia.org/wiki/Ordination_of_women_in_the_Anglican_Communion",
    "206. [Wikipedia] 'Homosexuality and Anglicanism.' https://en.wikipedia.org/wiki/Homosexuality_and_Anglicanism",
    "207. [Wikipedia] Washington National Cathedral. https://en.wikipedia.org/wiki/Washington_National_Cathedral",
    "208. [Reference] About Washington National Cathedral. https://cathedral.org/about/",
    "209. [Wikipedia] 'Evangelicalism.' https://en.wikipedia.org/wiki/Evangelicalism",
    "210. [Encyclopedia] Encyclopaedia Britannica. 'Evangelicalism.' https://www.britannica.com/topic/evangelicalism",
    "211. [Primary Source] Lausanne Movement. 'The Lausanne Covenant' (1974). https://lausanne.org/statement/lausanne-covenant",
    "212. [Wikipedia] 'Lausanne Movement.' https://en.wikipedia.org/wiki/Lausanne_Movement",
    "213. [Wikipedia] 'Charismatic movement.' https://en.wikipedia.org/wiki/Charismatic_movement",
    "214. [Wikipedia] 'Catholic Charismatic Renewal.' https://en.wikipedia.org/wiki/Catholic_Charismatic_Renewal",
    "215. [Wikipedia] 'Plymouth Brethren.' https://en.wikipedia.org/wiki/Plymouth_Brethren",
    "216. [Encyclopedia] Encyclopaedia Britannica. 'Plymouth Brethren.' https://www.britannica.com/topic/Plymouth-Brethren",
    "217. [Wikipedia] 'John Nelson Darby.' https://en.wikipedia.org/wiki/John_Nelson_Darby",
    "218. [Wikipedia] 'Dispensationalism.' https://en.wikipedia.org/wiki/Dispensationalism",
    "219. [Encyclopedia] Encyclopaedia Britannica. 'Dispensationalism.' https://www.britannica.com/topic/dispensationalism",
    "220. [Wikipedia] 'Exclusive Brethren.' https://en.wikipedia.org/wiki/Exclusive_Brethren",
    "221. [Wikipedia] 'The Salvation Army.' https://en.wikipedia.org/wiki/The_Salvation_Army",
    "222. [Encyclopedia] Encyclopaedia Britannica. 'Salvation Army.' https://www.britannica.com/topic/Salvation-Army",
    "223. [Wikipedia] 'William Booth.' https://en.wikipedia.org/wiki/William_Booth",
    "224. [Primary Source] The Salvation Army International. https://www.salvationarmy.org/",
    "225. [Encyclopedia] Britannica - Quaker. 'Sacraments.' https://www.britannica.com/topic/Quaker",
    "226. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Society of Friends (Quakers).' https://www.newadvent.org/cathen/06304b.htm",
    "227. [Christian Source] Quakers in Britain. 'Our faith.' https://www.quaker.org.uk/about-quakers/our-faith/",
    "228. [Wikipedia] 'Quakers.' https://en.wikipedia.org/wiki/Quakers",
    "229. [Primary Source] Schaff, Creeds of Christendom. 'The Confession of the Society of Friends, or Quakers.' https://www.ccel.org/ccel/schaff/creeds3.v.iv.html",
    "230. [Academic] Tully. Politics and Peace Testimony in Mid-Eighteenth-Century Pennsylvania. Canadian Review of American Studies, 1982. https://doi.org/10.3138/cras-013-02-02",
    "231. [Wikipedia] 'Peace Testimony.' https://en.wikipedia.org/wiki/Peace_Testimony",
    "232. [Christian Source] Quakers in Britain. 'Equality.' https://www.quaker.org.uk/about-quakers/our-values/equality/",
    "233. [Christian Source] Philadelphia Yearly Meeting. 'The Testimonies.' https://www.pym.org/quakerism/quaker-testimonies/",
    "234. [Wikipedia] 'Adventism.' https://en.wikipedia.org/wiki/Adventism",
    "235. [Academic] Masfa. Tracking the Statistical Center of Global Seventh-day Adventism, from 1863 to the Present. International Bulletin of Mission Research, 2022. https://doi.org/10.1177/23969393221102418",
    "236. [Wikipedia] 'Sabbath in Seventh-day Churches.' https://en.wikipedia.org/wiki/Sabbath_in_seventh-day_churches",
    "237. [Academic] Balcar. Seventh-day Sabbath as a Sign of Christian Loyalty: The Seventh-day Adventists in the Conflict with Totalitarian Regimes in the 20th Century Czechoslovakia. TEOLOGICKÁ REFLEXE, 2024. https://doi.org/10.14712/27880796.2023.2.4",
    "238. [Wikipedia] 'Second Coming.' https://en.wikipedia.org/wiki/Second_Advent",
    "239. [Wikipedia] 'Adventist Health Studies.' https://en.wikipedia.org/wiki/Adventist_Health_Studies",
    "240. [Academic] Orlich MJ et al. Vegetarian dietary patterns and mortality in Adventist Health Study 2. JAMA Internal Medicine, 2013. PubMed. https://pubmed.ncbi.nlm.nih.gov/23836264/",
    "241. [Christian Source] Ask an Adventist Friend (NAD). 'What is the Spirit of Prophecy?' https://www.askanadventistfriend.com/ellen-g-white/spirit-of-prophecy/",
    "242. [Wikipedia] 'Christian mortalism.' https://en.wikipedia.org/wiki/Soul_sleep",
    "243. [Wikipedia] Seventh-day Adventist Church. https://en.wikipedia.org/wiki/Seventh-day_Adventist_Church",
    "244. [Wikipedia] Investigative judgment. https://en.wikipedia.org/wiki/Investigative_judgment",
    "245. [Wikipedia] 'Oneness Pentecostalism.' https://en.wikipedia.org/wiki/Oneness_Pentecostalism",
    "246. [Wikipedia] 'United Pentecostal Church International.' https://en.wikipedia.org/wiki/United_Pentecostal_Church_International",
    "247. [Encyclopedia] Encyclopaedia Britannica. 'Pentecostalism.' https://www.britannica.com/topic/Pentecostalism",
    "248. [Primary Source] United Pentecostal Church International. 'Our Beliefs.' https://www.upci.org/about/our-beliefs",
    "249. [Wikipedia] 'Christadelphians.' https://en.wikipedia.org/wiki/Christadelphians",
    "250. [Encyclopedia] Encyclopaedia Britannica. 'Christadelphians.' https://www.britannica.com/topic/Christadelphians",
    "251. [Primary Source] Christadelphians. 'The Christadelphians.' https://www.christadelphia.org/",
    "252. [Wikipedia] 'Iglesia ni Cristo.' https://en.wikipedia.org/wiki/Iglesia_ni_Cristo",
    "253. [Encyclopedia] Encyclopaedia Britannica. 'Iglesia ni Cristo.' https://www.britannica.com/topic/Iglesia-ni-Cristo",
    "254. [Wikipedia] 'Felix Y. Manalo.' https://en.wikipedia.org/wiki/Felix_Y._Manalo",
    "255. [Academic] Yeats. Messianic Judaism. The Encyclopedia of Christian Civilization, 2011. https://doi.org/10.1002/9780470670606.wbecc0895",
    "256. [Academic] St Andrews Encyclopaedia of Theology. 'Messianic Jewish Theology.' https://www.saet.ac.uk/Christianity/MessianicJewishTheology",
    "257. [Apologetics] GotQuestions.org. What is Messianic Judaism? https://www.gotquestions.org/Messianic-Judaism.html",
    "258. [Christian Source] ONE FOR ISRAEL. 'Messianic Judaism & Messianic Jews.' https://www.oneforisrael.org/messianic-judaism-messianic-jews/",
    "259. [Christian Source] Messianic Jewish Alliance of America. 'About MJAA.' https://mjaa.org/",
    "260. [Wikipedia] Messianic Judaism - Theology. 'Adherence to the Trinity.' https://en.wikipedia.org/wiki/Messianic_Judaism#Theology",
    "261. [Christian Source] My Jewish Learning. 'Messianic Judaism Overview.' https://www.myjewishlearning.com/article/messianic-judaism/",
    "262. [Wikipedia] 'African-initiated church.' https://en.wikipedia.org/wiki/African-initiated_church",
    "263. [Encyclopedia] Encyclopaedia Britannica. 'Kimbanguist Church.' https://www.britannica.com/topic/Kimbanguist-Church",
    "264. [Encyclopedia] Encyclopaedia Britannica. 'Aladura.' https://www.britannica.com/topic/Aladura",
    "265. [Wikipedia] 'Kimbanguism.' https://en.wikipedia.org/wiki/Kimbanguism",
    "266. [Wikipedia] 'Aladura.' https://en.wikipedia.org/wiki/Aladura",
    "267. [Wikipedia] 'Christianity in China.' https://en.wikipedia.org/wiki/Christianity_in_China",
    "268. [Wikipedia] 'Three-Self Patriotic Movement.' https://en.wikipedia.org/wiki/Three-Self_Patriotic_Movement",
    "269. [Primary Source] US Commission on International Religious Freedom. 'China.' https://www.uscirf.gov/countries/china",
    "270. [Wikipedia] 'Chinese house church.' https://en.wikipedia.org/wiki/Chinese_house_church",
    "271. [Wikipedia] 'Watchman Nee.' https://en.wikipedia.org/wiki/Watchman_Nee",
    "272. [Encyclopedia] Encyclopaedia Britannica. 'Watchman Nee.' https://www.britannica.com/biography/Watchman-Nee",
    "273. [Academic] Pew Research Center. 'Measuring Religion in China.' 2023. https://www.pewresearch.org/religion/2023/08/30/measuring-religion-in-china/",
    "274. [Wikipedia] Nondenominational Christianity. '20th-century movement.' https://en.wikipedia.org/wiki/Nondenominational_Christianity",
    "275. [Christian Source] Grace Plano. 'What Is a Nondenominational Church?' https://graceplano.church/non-denominational-church-explained",
    "276. [Apologetics] GotQuestions.org. 'What are nondenominational churches?' https://www.gotquestions.org/non-denominational-church.html",
    "277. [Academic] Pew Research Center. 'Religious Landscape Study.' https://www.pewresearch.org/religion/religious-landscape-study/",
    "278. [Wikipedia] Contemporary worship. https://en.wikipedia.org/wiki/Contemporary_worship",
    "279. [Academic] Justice. Mainline Protestantism and Contemporary versus Traditional Worship Music. Oxford Handbooks Online, 2015. https://doi.org/10.1093/oxfordhb/9780199859993.013.28",
    "280. [Wikipedia] 'House Church Movement.' https://en.wikipedia.org/wiki/House_Church_Movement",
    "281. [Wikipedia] 'Emerging Church.' https://en.wikipedia.org/wiki/Emerging_Church",
    "282. [Academic] Patrick Q. Mason. Mormonism. Oxford Research Encyclopedia of Religion, 2015. https://doi.org/10.1093/acrefore/9780199340378.013.75",
    "283. [Wikipedia] 'Latter Day Saint movement.' https://en.wikipedia.org/wiki/Latter_Day_Saint_movement",
    "284. [Academic] 'Jehovah's Witnesses.' Cambridge University Press. https://www.cambridge.org/core/elements/jehovahs-witnesses/605AED05C9FA13DC68BB74FE3D2C651D",
    "285. [Wikipedia] 'Jehovah's Witnesses.' https://en.wikipedia.org/wiki/Jehovah%27s_Witnesses",
    "286. [Wikipedia] 'Unitarian Universalists.' https://en.wikipedia.org/wiki/Unitarian_Universalists",
    "287. [Reference] What We Believe. Unitarian Universalist Association. https://www.uua.org/beliefs/what-we-believe",
    "288. [Encyclopedia] New Advent, Catholic Encyclopedia. 'Waldenses.' https://www.newadvent.org/cathen/15527b.htm",
    "289. [Primary Source] 'Schaff, History of the Christian Church, Volume V: The Middle Ages. A.D. 1049-1294.' Christian Classics Ethereal Library. https://www.ccel.org/ccel/schaff/hcc5.ii.xii.vii.html",
    "290. [Wikipedia] 'Waldensians.' https://en.wikipedia.org/wiki/Waldensians",
    "291. [Wikipedia] Synod of Chanforan. https://en.wikipedia.org/wiki/Synod_of_Chanforan",
    "292. [Wikipedia] 'Proto Protestantism.' https://en.wikipedia.org/wiki/Proto-Protestantism",
    "293. [Wikipedia] Waldensian Evangelical Church. https://en.wikipedia.org/wiki/Waldensian_Evangelical_Church",
    "294. [Wikipedia] Moravian Church. https://en.wikipedia.org/wiki/Moravian_Church",
    "295. [Wikipedia] Hussites. https://en.wikipedia.org/wiki/Hussites",
    "296. [Reference] A Prayer Meeting that Lasted 100 Years. Christian History Institute. https://christianhistoryinstitute.org/magazine/article/one-hundred-year-prayer-meeting",
    "297. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Hussites.' https://www.newadvent.org/cathen/07585a.htm",
    "298. [Wikipedia] 'History of the Moravian Church.' https://en.wikipedia.org/wiki/History_of_the_Moravian_Church",
    "299. [Encyclopedia] Encyclopaedia Britannica. 'Moravian Church, History and Beliefs.' https://www.britannica.com/topic/Moravian-church",
    "300. [Wikipedia] Rupertus Meldenius. https://en.wikipedia.org/wiki/Rupertus_Meldenius",
    "301. [Wikipedia] Brownists. https://en.wikipedia.org/wiki/Brownist",
    "302. [Wikipedia] Congregationalism. https://en.wikipedia.org/wiki/Congregational_church",
    "303. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Puritans.' https://www.newadvent.org/cathen/12581a.htm",
    "304. [Primary Source] Schaff, Creeds of Christendom. 'Declaration of the Congregational Union of England and Wales.' https://www.ccel.org/ccel/schaff/creeds3.v.i.ii.html",
    "305. [Wikipedia] 'Puritans.' https://en.wikipedia.org/wiki/Puritans",
    "306. [Wikipedia] Cambridge Platform. https://en.wikipedia.org/wiki/Cambridge_Platform",
    "307. [Academic] Burg. The Cambridge Platform: A Reassertion of Ecclesiasatical Authority. Church History, 1974. https://doi.org/10.2307/3164923",
    "308. [Wikipedia] 'Plymouth Colony.' https://en.wikipedia.org/wiki/Plymouth_Colony",
    "309. [Encyclopedia] World History Encyclopedia. 'Plymouth Colony.' https://www.worldhistory.org/Plymouth_Colony/"
  ],
  lastUpdated: "10-11-2026",
};