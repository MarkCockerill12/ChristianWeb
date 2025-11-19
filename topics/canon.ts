import type { Topic, TimelineEvent } from "./types";

// Timeline data for biblical canon development
export const canonTimeline: TimelineEvent[] = [
  {
    id: 1,
    date: "c. 1445-1405 BC",
    title: "Moses Writes the Torah",
    period: "Old Testament Formation",
    color: "blue",
    description:
      "Moses authors the Pentateuch (Genesis, Exodus, Leviticus, Numbers, Deuteronomy) during Israel's wilderness wanderings. Genesis records events from creation to Joseph's death, while Exodus through Deuteronomy chronicles Israel's deliverance from Egypt and the giving of the Law.",
    significance:
      "Establishes the foundational covenant documents and legal framework for Israel; first canonical Scripture",
  },
  {
    id: 2,
    date: "c. 1010-970 BC",
    title: "David Composes Psalms",
    period: "Old Testament Formation",
    color: "blue",
    description:
      "King David writes approximately 73 of the 150 Psalms during his reign, including <a href=\"https://www.biblegateway.com/passage/?search=Psalm+23&version=NIV\" target=\"_blank\" style=\"color: #007acc; text-decoration: none;\">Psalm 23</a> (The Lord is my shepherd) and many messianic psalms. These worship songs express the full range of human emotion in relationship with God.",
    significance:
      "Establishes divinely inspired worship literature; many psalms are prophetically messianic",
  },
  {
    id: 3,
    date: "c. 971-931 BC",
    title: "Solomon's Wisdom Literature",
    period: "Old Testament Formation",
    color: "blue",
    description:
      "King Solomon authors most of Proverbs (practical wisdom for daily living), Ecclesiastes (the vanity of life apart from God), and Song of Songs (celebrating marital love). He also writes <a href=\"https://www.biblegateway.com/passage/?search=Psalm+72&version=NIV\" target=\"_blank\" style=\"color: #007acc; text-decoration: none;\">Psalm 72</a> and <a href=\"https://www.biblegateway.com/passage/?search=Psalm+127&version=NIV\" target=\"_blank\" style=\"color: #007acc; text-decoration: none;\">Psalm 127</a>.",
    significance:
      "Provides divinely inspired wisdom for practical Christian living and relationships",
  },
  {
    id: 4,
    date: "c. 760-586 BC",
    title: "Major Prophetic Books",
    period: "Old Testament Formation",
    color: "blue",
    description:
      "Isaiah (c. 740-680 BC) writes 66 chapters of messianic prophecy and judgment. Jeremiah (c. 627-580 BC) authors his prophecy and Lamentations. Ezekiel (c. 593-571 BC) records visions from Babylonian exile. Daniel (c. 605-536 BC) writes apocalyptic prophecy.",
    significance:
      "Provides detailed messianic prophecies and warnings of judgment; establishes prophetic genre",
  },
  {
    id: 5,
    date: "c. 520-400 BC",
    title: "Post-Exile Restoration Books",
    period: "Old Testament Formation",
    color: "blue",
    description:
      "Post-exile prophets write final Old Testament books: Haggai and Zechariah (520-518 BC) encourage temple rebuilding; Malachi (c. 430-400 BC) addresses spiritual renewal. Chronicles, Ezra, and Nehemiah record Israel's history and restoration.",
    significance:
      "Completes Hebrew Scripture; closes Old Testament canon with promise of coming Messiah (<a href=\"https://www.biblegateway.com/passage/?search=Malachi+3%3A1&version=NIV\" target=\"_blank\" style=\"color: #007acc; text-decoration: none;\">Malachi 3:1</a>, <a href=\"https://www.biblegateway.com/passage/?search=Malachi+4%3A5-6&version=NIV\" target=\"_blank\" style=\"color: #007acc; text-decoration: none;\">Malachi 4:5-6</a>)",
  },
  {
    id: 6,
    date: "c. 400 BC",
    title: "Hebrew Canon Closes",
    period: "Canon Recognition",
    color: "green",
    description:
      "Jewish authorities recognize the cessation of prophetic revelation with Malachi's ministry. The Hebrew canon is established at 24 books (equivalent to Protestant 39, divided differently), comprising the Law (Torah), Prophets (Nevi'im), and Writings (Ketuvim).",
    significance:
      "Formal closure of Old Testament revelation; establishes boundaries of Hebrew Scripture that Jesus would later affirm",
  },
  {
    id: 7,
    date: "c. 280-130 BC",
    title: "Septuagint Translation",
    period: "Canon Recognition",
    color: "orange",
    description:
      "Hebrew Bible translated into Greek in Alexandria, Egypt, for Greek-speaking Jewish communities. Some manuscripts include deuterocanonical books (Tobit, Judith, Wisdom, etc.), though this inclusion varied between manuscripts and was not universally accepted.",
    significance:
      "Makes Scripture accessible to diaspora Jews and later Gentile Christians; provides Greek text for New Testament quotations",
  },
  {
    id: 8,
    date: "c. 49-96 AD",
    title: "New Testament Books Written",
    period: "New Testament Formation",
    color: "purple",
    description:
      "All 27 New Testament books authored during apostolic era: Paul's letters (49-67 AD), Gospels of Matthew, Mark, Luke (50-85 AD), Acts (60-62 AD), Hebrews, James, Peter's letters, Jude (50-85 AD), John's Gospel and letters (85-95 AD), and Revelation (95-96 AD).",
    significance:
      "Completes divine revelation through apostolic witnesses; fulfills Jesus' promise of the Holy Spirit guiding into all truth",
  },
  {
    id: 9,
    date: "c. 90-100 AD",
    title: "Discussions at Jamnia (Yavneh)",
    period: "Canon Recognition",
    color: "green",
    description:
      "Following the Temple's destruction (70 AD), rabbinic discussions at Yavneh (Jamnia) were instrumental in solidifying the boundaries of the 24-book Hebrew canon. While not a formal 'council' that 'closed' the canon, these discussions affirmed the books of the Tanakh and excluded apocryphal and Christian writings.",
    significance:
      "Post-Temple Judaism solidifies canonical boundaries; establishes Masoretic text tradition",
  },
  {
    id: 10,
    date: "c. 170-200 AD",
    title: "Muratorian Fragment",
    period: "Canon Recognition",
    color: "green",
    description:
      "Earliest known canonical list includes 22 of 27 New Testament books, explicitly naming Matthew, Luke, John, Acts, 13 Pauline letters, Jude, 1-2 John, and Revelation. It also includes the Wisdom of Solomon. Notable omissions include Hebrews, James, 1-2 Peter, and 3 John.",
    significance:
      "Demonstrates early widespread recognition of apostolic authorship as canonical criterion",
  },
  {
    id: 11,
    date: "367 AD",
    title: "Athanasius' 39th Festal Letter",
    period: "Canon Recognition",
    color: "green",
    description:
      "Bishop Athanasius of Alexandria provides the first complete list matching our 27-book New Testament canon, stating these are 'fountains of salvation' and warning against adding apocryphal books. He distinguishes between canonical books and those 'merely read' for instruction.",
    significance:
      "First complete and exact listing of New Testament canon; establishes clear boundary between Scripture and church literature",
  },
  {
    id: 12,
    date: "382 AD",
    title: "Synod of Rome under Pope Damasus",
    period: "Canon Recognition",
    color: "green",
    description:
      "Pope Damasus I formally approves a biblical canon including 73 books: 46 Old Testament books (including deuterocanonicals like Tobit, Judith, Wisdom, Sirach, Baruch, 1-2 Maccabees) plus 27 New Testament books. This represents early Catholic canonical position.",
    significance:
      "First papal endorsement of expanded Old Testament canon including deuterocanonical books",
  },
  {
    id: 13,
    date: "393-419 AD",
    title: "North African Councils",
    period: "Canon Recognition",
    color: "green",
    description:
      "Councils of Hippo (393 AD) and Carthage (397, 419 AD) ratify 73-book canon matching Rome's decision. These regional councils strongly influenced later Catholic canonical decisions, though they lacked universal church authority.",
    significance:
      "Regional ecclesiastical support for expanded canon; influences later Catholic position at Trent",
  },
  {
    id: 14,
    date: "382-405 AD",
    title: "Jerome's Vulgate Translation",
    period: "Canon Recognition",
    color: "orange",
    description:
      "Scholar Jerome translates Bible into Latin Vulgate, completing Old Testament by 405 AD. Despite papal pressure, Jerome distinguishes between 'canonical books' (Hebrew canon) and 'ecclesiastical books' (deuterocanonicals), placing latter in separate category for edification but not doctrine.",
    significance:
      "Scholarly distinction between levels of canonical authority; Hebrew text tradition preserved",
  },
  {
    id: 15,
    date: "October 31, 1517 AD",
    title: "Luther's 95 Theses Posted",
    period: "Protestant Reformation",
    color: "red",
    description:
      "Martin Luther posts 95 theses challenging papal authority and indulgences at Wittenberg Castle Church. While not directly addressing canon, Luther's 'sola scriptura' principle (Scripture alone as ultimate authority) fundamentally challenges Catholic additions to biblical canon.",
    significance:
      "Establishes Scripture as sole religious authority, laying groundwork for Protestant canonical decisions",
  },
  {
    id: 16,
    date: "1522-1534 AD",
    title: "Luther's German Bible",
    period: "Protestant Reformation",
    color: "red",
    description:
      "Luther translates Bible into German, completing full Bible in 1534. He places deuterocanonical books (Tobit, Judith, Wisdom, Sirach, Baruch, 1-2 Maccabees) in separate 'Apocrypha' section, stating they are 'useful and good to read' but not equal to Scripture.",
    significance:
      "Establishes Protestant precedent for distinguishing canonical from apocryphal texts",
  },
  {
    id: 17,
    date: "April 8, 1546 AD",
    title: "Council of Trent Session IV",
    period: "Counter-Reformation",
    color: "darkred",
    description:
      "Catholic Church's Council of Trent dogmatically declares 73-book canon including deuterocanonicals as 'sacred and canonical' in direct response to Protestant challenges. Declares anathema (excommunication) on anyone rejecting these books as Scripture.",
    significance:
      "Catholic canon dogmatically established; creates permanent Catholic-Protestant canonical divide",
  },
  {
    id: 18,
    date: "1560 AD",
    title: "Geneva Bible Published",
    period: "Protestant Reformation",
    color: "red",
    description:
      "English Protestant Bible translated by Reformed scholars in Geneva completely excludes deuterocanonical books from both text and appendix. Becomes popular among English Puritans and influences later Protestant translations.",
    significance:
      "First major English Bible to completely exclude apocryphal books; solidifies Protestant 66-book canon",
  },
  {
    id: 19,
    date: "1611 AD",
    title: "King James Version Authorized",
    period: "Protestant Reformation",
    color: "red",
    description:
      "Authorized Version commissioned by King James I includes deuterocanonical books in separate 'Apocrypha' section between Old and New Testaments. While included, these books are clearly distinguished as non-canonical but historically valuable.",
    significance:
      "Establishes English-speaking Protestant standard while maintaining historical acknowledgment of disputed books",
  },
  {
    id: 20,
    date: "1825 AD",
    title: "British & Foreign Bible Society Decision",
    period: "Modern Era",
    color: "gray",
    description:
      "British & Foreign Bible Society votes to exclude Apocrypha from all Bible distributions after heated debate. This decision is followed by American Bible Society (1827) and other Protestant organizations, making 66-book Bibles standard in Protestant missions worldwide.",
    significance:
      "Practical elimination of deuterocanonical books from Protestant Bible distribution; establishes global Protestant standard",
  },
  {
    id: 21,
    date: "July 18, 1870 AD",
    title: "First Vatican Council - Pastor Aeternus",
    period: "Modern Era",
    color: "darkred",
    description:
      "Vatican I's constitution Pastor Aeternus declares papal infallibility in matters of faith and morals, indirectly reinforcing Trent's canonical decisions as irreversible dogma. This makes any future change to Catholic canon impossible without contradicting papal infallibility.",
    significance:
      "Entrenches Catholic 73-book canon as irreversible dogma through papal infallibility doctrine",
  },
  {
    id: 22,
    date: "November 18, 1965 AD",
    title: "Dei Verbum Constitution",
    period: "Modern Era",
    color: "darkred",
    description:
      "Second Vatican Council's Dogmatic Constitution on Divine Revelation (Dei Verbum) reaffirms Catholic canonical decisions and emphasizes Scripture's role alongside Sacred Tradition. Maintains 73-book canon while promoting biblical scholarship and vernacular translations.",
    significance:
      "Modern Catholic reaffirmation of Trent's canon within framework of contemporary biblical scholarship",
  },
];

export const canon: Topic = {
  id: "canon",
  title:
    "What are the True Canonical Books of the Bible? And how do we know these are authentic?",
  description:
    "How can we tell which books are truly apart of the Bible if there are different thoughts on it?",
  icon: "BookOpen",
  color: "blue",
  tags: ["Historical", "Scripture"],
  content: `
    <h3>The Biblical Canon: How We Know Which Books Are Scripture</h3>
    <p>The word "canon" comes from the Greek word "kanon," meaning "rule" or "measuring rod"<a href="https://www.britannica.com/topic/biblical-literature/The-biblical-canon" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[1]</a>. The biblical canon represents the authoritative collection of books that comprise Scripture<a href="https://www.worldhistory.org/Biblical_Canon/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[2]</a>. Understanding which books belong in the Bible and why is crucial for establishing the foundation of Christian faith and doctrine.</p>

    <h4>Criteria for Canonicity</h4>
    <p>Early church leaders used several key criteria to determine which books were truly inspired Scripture<a href="https://www.ligonier.org/learn/articles/criteria-canonicity" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[3]</a>:</p>
    <p>• <strong>Apostolicity:</strong> Written by apostles or their close associates<a href="https://www.newadvent.org/cathen/01648b.htm" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[4]</a></p>
    <p>• <strong>Orthodoxy:</strong> Consistent with established apostolic teaching<a href="https://carm.org/manuscript-evidence/criteria-for-canon-of-scripture/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[5]</a></p>
    <p>• <strong>Catholicity:</strong> Accepted by churches universally (not just in one region)<a href="https://www.ligonier.org/learn/articles/new-testament-canon" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[6]</a></p>
    <p>• <strong>Antiquity:</strong> Written during the apostolic era (1st century AD)<a href="https://explorethebible.lifeway.com/blog/adults/how-did-we-get-the-new-testament-canon/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[7]</a></p>

    <h4>The Protestant Canon: 66 Books</h4>
    <p>The Protestant Bible contains 66 books, which scholars believe represents the complete inspired Scripture<a href="https://www.britannica.com/topic/Protestantism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[8]</a>. This canon was recognized (not created) by the early church and represents the books that consistently met all criteria for divine inspiration<a href="https://www.gotquestions.org/canon-of-Scripture.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[9]</a>.</p>

    <h4>The Deuterocanonical Books</h4>
    <p>The Catholic Bible includes additional texts, often referred to as the Deuterocanonical books, bringing the total to 73<a href="https://www.newadvent.org/cathen/03267a.htm" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[10]</a>. These books include Tobit, Judith, Wisdom of Solomon, Sirach (Ecclesiasticus), Baruch, and 1 and 2 Maccabees. While valued by Catholics, Protestant scholars maintain these texts should not be considered Scripture due to historical, theological, and canonical concerns. For a detailed analysis of why these books are not included in the Protestant canon, see the Deuterocanonical Books section below.</p>

    <h4>Conclusion</h4>
    <p>The careful process of canonical recognition preserved for us the authentic apostolic writings while rejecting later forgeries, theological deviations, and legendary embellishments<a href="https://www.blueletterbible.org/faq/don_stewart/don_stewart_394.cfm" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[11]</a>. The 66 books of the Protestant Bible represent the complete revelation God intended to preserve for His church, confirmed by their apostolic origin, doctrinal orthodoxy, universal acceptance, and divine attestation<a href="https://answersingenesis.org/the-word-of-god/why-66-books/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[12]</a>.</p>
  `,
  verses: [
    "2 Timothy 3:16",
    "Hebrews 9:27",
    "Ephesians 2:8-9",
    "Genesis 1:31",
    "Galatians 1:8",
    "Revelation 22:18-19",
    "1 John 4:1-3",
    "2 Peter 1:20-21",
  ],
  subtopics: [
    {
      id: "deuterocanonical-books",
      title: "Deuterocanonical Books",
      tags: ["Catholic", "Apocrypha"],
      content: `<strong>Overview:</strong> The Catholic Bible includes additional texts, often referred to as the Deuterocanonical books, bringing the total to 73<a href="https://www.usccb.org/bible/books-of-the-bible" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[13]</a>. These books include Tobit, Judith, Wisdom of Solomon, Sirach (Ecclesiasticus), Baruch, and 1 and 2 Maccabees, among others. Understanding their history reveals why Protestant scholars maintain these texts should not be considered Scripture.<br><br>

      <strong>Historical Development of the Deuterocanonical Debate</strong><br><br>
      
      <strong>Jewish Canon Foundation (circa 400 BC):</strong> The Hebrew Bible (Tanakh) closed around 400 BC with Malachi, establishing 24 books (equivalent to the Protestant 39 Old Testament books)<a href="https://www.britannica.com/topic/Tanakh" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[14]</a>. Jewish authorities never accepted the deuterocanonical books as Scripture, viewing them as valuable historical and devotional literature but not divinely inspired<a href="https://www.britannica.com/topic/Old-Testament/The-Apocrypha" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[15]</a>.<br><br>

      <strong>Septuagint Inclusion (3rd-1st century BC):</strong> When the Hebrew Bible was translated into Greek (the Septuagint), some manuscripts included these additional books. However, this was not universal, and many Septuagint manuscripts omitted them<a href="https://www.christianity.com/wiki/bible/what-is-the-septuagint.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[16]</a>. Importantly, inclusion in a translation does not establish canonicity—the translators were preserving culturally significant texts, not declaring them Scripture<a href="https://www.logos.com/grow/did-jesus-and-the-apostles-use-the-septuagint/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[17]</a>.<br><br>

      <strong>Early Church Period (1st-4th centuries):</strong> Church fathers had mixed opinions about these books. Jerome (347-420 AD), the translator of the Latin Vulgate, explicitly distinguished between canonical books (the Hebrew canon) and those "read for edification" (the Apocrypha) but not for establishing doctrine<a href="https://www.britannica.com/biography/Saint-Jerome/Biblical-scholar" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[18]</a>.<br><br>

      <strong>Council of Trent's Decision (1546 AD):</strong> The Catholic Church officially canonized these books at the Council of Trent, largely in response to Protestant challenges. This decision came over 1,500 years after the books were written and was motivated by doctrinal disputes rather than historical evidence<a href="https://www.britannica.com/event/Council-of-Trent" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[19]</a>.<br><br>

      <strong>Specific Problems with Individual Deuterocanonical Books</strong><br><br>
      
      <strong>Tobit (circa 200 BC):</strong><br>
      • <strong>Magical practices:</strong> Tobit 6:5-8 prescribes burning fish liver and heart to drive away demons, and using fish gall to cure blindness—practices foreign to biblical religion<a href="https://www.carm.org/apocrypha/book-tobit-summary-and-problems/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[20]</a><br>
    • <strong>Salvation by works:</strong> Tobit 12:9 states "almsgiving delivers from death and purges away every sin," directly contradicting the biblical doctrine of salvation by grace through faith (<a href="https://www.biblegateway.com/passage/?search=Ephesians+2%3A8-9&version=NIV" target="_blank" style="color: #007acc; text-decoration: none;">Ephesians 2:8-9</a>)<a href="https://www.gotquestions.org/book-of-Tobit.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[21]</a><br><br>

      <strong>Judith (circa 150 BC):</strong><br>
      • <strong>Historical errors:</strong> Claims Nebuchadnezzar ruled the Assyrians from Nineveh, when historically he was king of Babylon<a href="https://www.gotquestions.org/book-of-Judith.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[22]</a>. The book is widely seen as a historical novel, not factual history<a href="https://www.britannica.com/topic/Book-of-Judith" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[23]</a>.<br><br>

      <strong>Wisdom of Solomon (circa 50 BC):</strong><br>
      • <strong>Greek philosophical influence:</strong> Contains heavy influence from Platonic philosophy, including the pre-existence of souls (Wisdom 8:19-20), which contradicts biblical anthropology<a href="https://www.carm.org/apocrypha/book-wisdom-summary-and-problems/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[24]</a><br>
      • <strong>False attribution:</strong> Claims Solomon as author but was written centuries after his death, making it pseudepigraphical<a href="https://www.britannica.com/topic/Wisdom-of-Solomon" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[25]</a><br><br>

      <strong>2 Maccabees (circa 124 BC):</strong><br>
    • <strong>Prayers for the dead:</strong> 2 Maccabees 12:44-46 supports praying and making offerings for the dead, contradicting the biblical teaching that judgment is final after death (<a href="https://www.biblegateway.com/passage/?search=Hebrews+9%3A27&version=NIV" target="_blank" style="color: #007acc; text-decoration: none;">Hebrews 9:27</a>)<a href="https://www.carm.org/apocrypha/summary-and-problems-of-1-and-2-maccabees/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[26]</a>. This text is a primary basis for the Catholic doctrine of Purgatory<a href="https://www.catholic.com/encyclopedia/purgatory" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[27]</a>.<br><br>

      <strong>Why Jesus and the Apostles Never Endorsed These Books</strong><br>
    When Jesus referred to "the Law, the Prophets, and the Writings" (<a href="https://www.biblegateway.com/passage/?search=Luke+24%3A44&version=NIV" target="_blank" style="color: #007acc; text-decoration: none;">Luke 24:44</a>), He was referencing the established Hebrew canon<a href="https://learn.ligonier.org/devotionals/old-testament-canon" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[28]</a>. The New Testament contains hundreds of Old Testament quotations, but it never quotes the deuterocanonical books as inspired Scripture. However, it does contain allusions to them. For example, <a href="https://www.biblegateway.com/passage/?search=Hebrews+11%3A35&version=NIV" target="_blank" style="color: #007acc; text-decoration: none;">Hebrews 11:35</a> ("...others were tortured, refusing to accept release...") is widely seen as a clear allusion to the martyrdom of Eleazar and the seven brothers in 2 Maccabees 6–7<a href="https://www.biblestudytools.com/commentaries/gills-exposition-of-the-bible/hebrews-11-35.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[29]</a>. This shows the apostles were aware of these books but did not grant them the authority of Scripture.
      `
    },
    {
      id: "gnostic-gospels",
      title: "Gnostic Gospels",
      tags: ["Gnostic"],
      content: `<strong>Founded:</strong> 2nd-4th centuries AD (100-300+ years after Christ)<a href="https://www.earlychristianwritings.com/gnostics.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[30]</a><br><br>
      
      <strong>Key Characteristics:</strong><br>
      • <strong>Secret knowledge:</strong> Claim salvation comes through hidden gnosis (knowledge) rather than faith in Christ's sacrifice<a href="https://www.britannica.com/topic/Gnosticism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[31]</a><br>
  • <strong>Dualistic heresy:</strong> Teach the material world is evil and created by a lesser god (Demiurge), contradicting <a href="https://www.biblegateway.com/passage/?search=Genesis+1%3A31&version=NIV" target="_blank" style="color: #007acc; text-decoration: none;">Genesis 1:31</a><a href="https://www.worldhistory.org/Gnosticism/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[32]</a><br>
      • <strong>Pseudonymous authorship:</strong> Falsely claim apostolic authors (Thomas, Judas, Mary) to gain credibility<a href="https://www.gotquestions.org/Nag-Hammadi.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[33]</a><br>
  • <strong>Docetic Christology:</strong> Many deny Jesus had a real physical body, claiming He was a phantom or spirit (contradicting <a href="https://www.biblegateway.com/passage/?search=1+John+4%3A2-3&version=NIV" target="_blank" style="color: #007acc; text-decoration: none;">1 John 4:2-3</a>)<a href="https://www.britannica.com/topic/Docetism" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[34]</a><br><br>
      
      <strong>Detailed Examples of Invalidity:</strong><br><br>
      
      <strong>Gospel of Thomas (circa 50-140 AD):</strong><br>
      • <strong>Anti-material bias:</strong> Saying 114 claims "every woman who will make herself male will enter the Kingdom of Heaven," reflecting Gnostic hatred of physical creation<a href="https://www.gotquestions.org/Gospel-of-Thomas.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[35]</a><br>
      • <strong>Secret knowledge heresy:</strong> Saying 1 promises immortality to those who find the "interpretation" of Jesus' secret sayings, contradicting salvation by faith<a href="https://www.earlychristianwritings.com/thomas.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[36]</a><br><br>
      
      <strong>Gospel of Judas (circa 180 AD):</strong><br>
  • <strong>Moral inversion:</strong> Portrays Judas' betrayal as a noble act to help Jesus escape his physical body, directly contradicting Jesus' condemnation in <a href="https://www.biblegateway.com/passage/?search=Matthew+26%3A24&version=NIV" target="_blank" style="color: #007acc; text-decoration: none;">Matthew 26:24</a><a href="https://www.gotquestions.org/Gospel-of-Judas.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[37]</a><br>
      • <strong>Demiurge heresy:</strong> Claims the God of the Old Testament is an inferior creator deity, not the true God<a href="https://www.earlychristianwritings.com/gospeljudas.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[38]</a><br><br>
      
      <strong>Gospel of Mary (circa 180-200 AD):</strong><br>
      • <strong>Gnostic revelations:</strong> Claims Mary Magdalene received special, secret revelations unavailable to male apostles, challenging apostolic authority<a href="https://www.earlychristianwritings.com/gospelmary.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[39]</a><br>
      • <strong>Anti-body teachings:</strong> Promotes escape from material existence ("sin...is not in the nature") rather than resurrection hope<a href="https://www.worldhistory.org/Gospel_of_Mary/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[40]</a><br><br>
      
      <strong>Gospel of Philip (circa 200-250 AD):</strong><br>
      • <strong>Sacramental magic:</strong> Claims salvation depends on secret rituals in a "bridal chamber" rather than faith in Christ<a href="https://www.earlychristianwritings.com/gospelphilip.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[41]</a><br>
      • <strong>Sensationalism:</strong> Contains the reference to Mary Magdalene as Jesus' "companion," which has been fictionalized in modern works but reflects Gnostic (not historical) ideas<a href="https://www.gotquestions.org/Gospel-of-Philip.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[42]</a><br><br>
      
      <strong>Why Rejected:</strong> These texts systematically contradict apostolic teaching on creation (<a href="https://www.biblegateway.com/passage/?search=Genesis+1%3A31&version=NIV" target="_blank" style="color: #007acc; text-decoration: none;">Genesis 1:31</a>), salvation by grace (<a href="https://www.biblegateway.com/passage/?search=Ephesians+2%3A8-9&version=NIV" target="_blank" style="color: #007acc; text-decoration: none;">Ephesians 2:8-9</a>), Christ's physical reality (<a href="https://www.biblegateway.com/passage/?search=1+John+4%3A2-3&version=NIV" target="_blank" style="color: #007acc; text-decoration: none;">1 John 4:2-3</a>), and were written 100-300+ years after the apostles, failing every test of canonicity<a href="https://www.history.com/news/gnostic-gospels-christianity-scriptures" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[43]</a>.`
    },
    {
      id: "early-christian-writings",
      title: "Early Christian Writings (Apostolic Fathers)",
      tags: ["Orthodox"],
      content: `<strong>Overview:</strong> This refers to a group of orthodox writings from the late 1st and early 2nd centuries. While theologically valuable, the early church recognized them as important pastoral letters but not inspired Scripture<a href="https://www.earlychristianwritings.com/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[44]</a>.<br><br>
      
      <strong>Key Characteristics:</strong><br>
      • <strong>Orthodox theology:</strong> Generally consistent with apostolic teaching and combat Gnosticism<a href="https://www.britannica.com/topic/Apostolic-Father" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[45]</a><br>
      • <strong>Non-apostolic authorship:</strong> Not written by apostles, but by the next generation of church leaders<a href="https://www.learnreligions.com/the-apostolic-fathers-700683" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[46]</a><br>
      • <strong>Self-aware status:</strong> The authors often quote the apostles as a higher authority, showing they did not see their own writings as equal to Scripture<a href="https://www.ligonier.org/learn/articles/apostolic-fathers" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[47]</a><br><br>
      
      <strong>Detailed Analysis of Key Works:</strong><br><br>
      
      <strong>The Didache (circa 50-120 AD):</strong><br>
      • <strong>Church manual nature:</strong> A practical "church-order" manual for new converts, providing instructions on baptism, fasting, and the "Two Ways" (life and death)<a href="https://www.earlychristianwritings.com/didache.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[48]</a><br>
      • <strong>Why not canonical:</strong> It is anonymous and, while orthodox, was seen as a summary of apostolic teaching rather than a new revelation itself<a href="https://www.gotquestions.org/Didache.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[49]</a><br><br>
      
      <strong>1 Clement (circa 96 AD):</strong><br>
      • <strong>Ecclesiastical authority:</strong> Written by Clement of Rome to the Corinthian church to address a dispute. It calls for order and respect for appointed leaders<a href="https://www.earlychristianwritings.com/1clement.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[50]</a><br>
      • <strong>Why not canonical:</strong> Clement himself distinguishes his letter from the "epistle of the blessed Paul" (which he cites as binding authority), showing he did not consider his own letter to be Scripture<a href="https://www.newadvent.org/fathers/1010.htm" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[51]</a><br><br>
      
      <strong>Shepherd of Hermas (circa 100-140 AD):</strong><br>
      • <strong>Allegorical visions:</strong> A popular book of elaborate visions and allegories, urging repentance<a href="https://www.earlychristianwritings.com/shepherd.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[52]</a><br>
      • <strong>Why not canonical:</strong> It was popular, but its late date and promotion of a "second repentance" (a post-baptismal chance) were seen as a development beyond apostolic teaching<a href="https://www.gotquestions.org/Shepherd-of-Hermas.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[53]</a><br><br>
      
      <strong>Epistle of Barnabas (circa 70-130 AD):</strong><br>
      • <strong>Allegorical excess:</strong> Uses extreme, non-literal allegorical interpretations of the Old Testament that were not characteristic of apostolic writing<a href="https://www.earlychristianwritings.com/barnabas.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[54]</a><br>
      • <strong>Anti-Jewish polemic:</strong> Contains a harsh polemic against Judaism that was deemed inconsistent with the pastoral tone of the apostles<a href="https://www.gotquestions.org/Epistle-of-Barnabas.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[55]</a><br><br>
      
      <strong>Why Not Canonical:</strong> These works fail the test of apostolic authorship. The early church read them for edification (Athanasius called them "books merely read") but clearly distinguished them from the inspired, foundational apostolic Scriptures<a href="https://www.newadvent.org/fathers/2806039.htm" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[56]</a>.`
    },
    {
      id: "pseudepigraphical-works",
      title: "Pseudepigraphical Works",
      tags: ["False-Authorship"],
      content: `<strong>Overview:</strong> "Pseudepigrapha" (Gr. "false writings") are texts deliberately and falsely attributed to ancient biblical figures (Enoch, Moses, patriarchs) to give them an aura of authority<a href="https://www.britannica.com/topic/pseudepigrapha" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[57]</a>. They were written centuries after their claimed authors lived<a href="https://www.gotquestions.org/pseudepigrapha.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[58]</a>.<br><br>
      
      <strong>New Testament Allusions (Crucial Additions)</strong><br>
  Despite being non-canonical, two pseudepigraphical books are famously referenced in the New Testament book of Jude:<br>
  • <strong>1 Enoch:</strong> <a href="https://www.biblegateway.com/passage/?search=Jude+1%3A14-15&version=NIV" target="_blank" style="color: #007acc; text-decoration: none;">Jude 14-15</a> directly quotes 1 Enoch 1:9 ("See, the Lord is coming with thousands upon thousands of his holy ones..."), citing it as a prophecy<a href="https://www.gotquestions.org/book-of-Enoch.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[59]</a>. Jude uses this prophecy as a true statement, just as Paul quoted pagan poets (<a href="https://www.biblegateway.com/passage/?search=Acts+17%3A28&version=NIV" target="_blank" style="color: #007acc; text-decoration: none;">Acts 17:28</a>), without canonizing the entire work.<br>
  • <strong>Assumption of Moses:</strong> <a href="https://www.biblegateway.com/passage/?search=Jude+1%3A9&version=NIV" target="_blank" style="color: #007acc; text-decoration: none;">Jude 9</a> alludes to a dispute between Michael and the devil over Moses' body ("...but even the archangel Michael, when he was disputing with the devil about the body of Moses..."). This event is not found in the Old Testament but was recorded in the non-extant ending of the Assumption of Moses<a href="https://www.gotquestions.org/Assumption-of-Moses.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[60]</a>.<br><br>
      
      <strong>Detailed Examination of Major Works:</strong><br><br>
      
      <strong>1 Enoch (3rd century BC - 1st century AD):</strong><br>
  • <strong>Elaborate angelology:</strong> Presents detailed angel hierarchies and names (like Uriel, Raguel) and stories of the "Watchers" (fallen angels) that go far beyond <a href="https://www.biblegateway.com/passage/?search=Genesis+6&version=NIV" target="_blank" style="color: #007acc; text-decoration: none;">Genesis 6</a><a href="https://en.wikipedia.org/wiki/Book_of_Enoch" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[61]</a><br>
      • <strong>Astronomical errors:</strong> Contains inaccurate calendrical (a 364-day calendar) and astronomical information<a href="https://en.wikipedia.org/wiki/Enoch_calendar" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[62]</a> (Note: The Ethiopian Orthodox Church does consider 1 Enoch to be canonical).<br><br>

      <strong>Book of Jubilees (circa 160-150 BC):</strong><br>
      • <strong>Calendar innovation:</strong> Promotes a 364-day solar calendar, contradicting the lunar-based calendar used in canonical Jewish practice<a href="https://www.gotquestions.org/book-of-Jubilees.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[63]</a><br>
      • <strong>Legalistic additions:</strong> Claims to be a secret revelation from an angel to Moses, adding numerous laws not found in the Pentateuch<a href="https://www.britannica.com/topic/Book-of-Jubilees" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[64]</a><br><br>

      <strong>Testament of the Twelve Patriarchs (circa 109-106 BC):</strong><br>
      • <strong>Composite work:</strong> A collection of "last words" from Jacob's twelve sons, containing moral exhortations but also later Christian interpolations (additions)<a href="https://www.britannica.com/topic/Testaments-of-the-Twelve-Patriarchs" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[65]</a>.<br><br>      
      
      <strong>Why These Works Are Invalid (despite NT allusions):</strong><br>
  The pseudepigraphical works violate the fundamental principle of truthfulness; their deceptive authorship alone disqualifies them, as God cannot lie (<a href="https://www.biblegateway.com/passage/?search=Titus+1%3A2&version=NIV" target="_blank" style="color: #007acc; text-decoration: none;">Titus 1:2</a>). The New Testament authors' allusions to them (like Jude) show awareness of contemporary literature to make a point, not a declaration of the entire work's divine inspiration<a href="https://christianity.stackexchange.com/questions/8576/why-is-the-book-of-enoch-not-regarded-as-canonical" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[66]</a>.`
    },
    {
      id: "new-testament-apocrypha",
      title: "New Testament Apocrypha",
      tags: ["Apocryphal", "Legendary"],
      content: `<strong>Overview:</strong> A large collection of "gospels," "acts," and "epistles" written from the 2nd century onward. They are not the same as the Gnostic gospels; rather than being heretical, they are often legendary, fan-fiction-like accounts meant to "fill in the blanks" of the canonical stories<a href="https://www.earlychristianwritings.com/apocrypha.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[67]</a>.<br><br>
      
      <strong>Key Characteristics:</strong><br>
      • <strong>Legendary content:</strong> Focus on sensational, fantastic, or sentimental stories (e.g., Jesus's childhood, apostles' adventures)<a href="https://www.britannica.com/topic/New-Testament-apocrypha" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[68]</a><br>
      • <strong>Late composition:</strong> Written well after the apostolic period (2nd-5th centuries)<a href="https://www.worldhistory.org/New_Testament_Apocrypha/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[69]</a><br>
      • <strong>Pseudonymous authorship:</strong> Falsely claim apostolic authors for credibility<a href="https://www.biblestudytools.com/apocrypha/" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[70]</a><br>
      • <strong>Church rejection:</strong> Consistently rejected by early church leaders as forgeries or "pious frauds"<a href="https://www.newadvent.org/cathen/01601a.htm" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[71]</a><br><br>
      
      <strong>Detailed Analysis of Major Apocryphal Works:</strong><br><br>
      
      <strong>Protoevangelium of James (circa 150 AD):</strong><br>
      • <strong>Legendary embellishments:</strong> "Fills in" Mary's childhood, claiming she was a temple virgin, and details Jesus's birth in a cave<a href="https://www.earlychristianwritings.com/infancyjames.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[72]</a><br>
      • <strong>Unbiblical doctrine:</strong> The source for the doctrine of the perpetual virginity of Mary (claiming she remained a virgin even during and after Jesus's birth), a doctrine not found in the Bible<a href="https://www.gotquestions.org/Protoevangelium-of-James.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[73]</a><br><br>

      <strong>Infancy Gospel of Thomas (circa 180-200 AD):</strong><br>
      • <strong>Vindictive child Jesus:</strong> Portrays young Jesus as a petulant and vengeful child, causing blindness or death to children who annoy him, and then sometimes healing them<a href="https://www.earlychristianwritings.com/infancythomas.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[74]</a><br>
  • <strong>Character contradictions:</strong> This portrait of a sinfully prideful child completely contradicts the biblical portrait of Jesus's sinless character (<a href="https://www.biblegateway.com/passage/?search=Hebrews+4%3A15&version=NIV" target="_blank" style="color: #007acc; text-decoration: none;">Hebrews 4:15</a>) and wisdom (<a href="https://www.biblegateway.com/passage/?search=Luke+2%3A52&version=NIV" target="_blank" style="color: #007acc; text-decoration: none;">Luke 2:52</a>)<a href="https://www.gotquestions.org/Infancy-Gospel-of-Thomas.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[75]</a><br><br>

      <strong>Gospel of Peter (circa 150-200 AD):</strong><br>
      • <strong>Docetic elements:</strong> Portrays Jesus on the cross as feeling no pain and crying out "My power, my power, you have left me" (instead of "My God, my God..."), implying his divinity, not humanity, was present<a href="https://www.earlychristianwritings.com/gospelpeter.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[76]</a><br>
      • <strong>Fantastic resurrection:</strong> Describes Jesus emerging from the tomb as a giant whose head reaches the clouds, supported by two other giants (angels), and followed by a talking cross<a href="https://www.gotquestions.org/Gospel-of-Peter.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[77]</a><br><br>
      
      <strong>Acts of Paul (circa 180-190 AD):</strong><br>
      • <strong>Legendary adventures:</strong> Contains fictional stories of Paul's encounters, including a baptizing lion (Acts of Paul and Thecla) and other miracles not recorded in the Bible<a href="https://www.earlychristianwritings.com/actspaul.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[78]</a><br>
  • <strong>Ascetic heresy:</strong> Promotes extreme celibacy and anti-marriage teachings contrary to Paul's balanced view in <a href="https://www.biblegateway.com/passage/?search=1+Corinthians+7&version=NIV" target="_blank" style="color: #007acc; text-decoration: none;">1 Corinthians 7</a><a href="https://www.britannica.com/topic/Acts-of-Paul" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[79]</a><br><br>
      
      <strong>Acts of John (circa 150-200 AD):</strong><br>
      • <strong>Gnostic docetism:</strong> Claims Jesus only appeared to suffer on the cross while his spirit was "dancing" above, a classic Gnostic rejection of the physical suffering and resurrection<a href="https://www.earlychristianwritings.com/actsjohn.html" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[80]</a><br><br>
      
      <strong>Why These Works Are Clearly Invalid:</strong><br>
      The New Testament apocrypha fail every test of canonicity. Their late dates, false authorships, theological errors (especially Gnosticism and docetism), and fantastic, legendary content stand in stark contrast to the sober, historical, and theologically unified accounts of the 27 canonical books<a href="https://www.newadvent.org/cathen/01601a.htm" target="_blank" style="color: #007acc; text-decoration: none; font-size: 0.9em; vertical-align: super;">[71]</a>.`
    },
  ],
  sources: [
    "1. [Encyclopedia] Britannica - Biblical Literature: The Biblical Canon. https://www.britannica.com/topic/biblical-literature/The-biblical-canon",
    "2. [Academic] World History Encyclopedia - Biblical Canon. https://www.worldhistory.org/Biblical_Canon/",
    "3. [Religious Organization] Ligonier Ministries - Criteria for Canonicity. https://www.ligonier.org/learn/articles/criteria-canonicity",
    "4. [Catholic Encyclopedia] New Advent - Apostolicity. https://www.newadvent.org/cathen/01648b.htm",
    "5. [Ministry Organization] CARM - Criteria for the Canon of Scripture. https://carm.org/manuscript-evidence/criteria-for-canon-of-scripture/",
    "6. [Religious Organization] Ligonier Ministries - The New Testament Canon. https://www.ligonier.org/learn/articles/new-testament-canon",
    "7. [Academic Resource] Lifeway - How Did We Get the New Testament Canon? https://explorethebible.lifeway.com/blog/adults/how-did-we-get-the-new-testament-canon/",
    "8. [Encyclopedia] Britannica - Protestantism. https://www.britannica.com/topic/Protestantism",
    "9. [Ministry Organization] Got Questions - What is the Canon of Scripture? https://www.gotquestions.org/canon-of-Scripture.html",
    "10. [Catholic Encyclopedia] New Advent - Canon of the Old Testament. https://www.newadvent.org/cathen/03267a.htm",
    "11. [Academic Resource] Blue Letter Bible - Why Does the Roman Catholic Church Accept the Old Testament Apocrypha? https://www.blueletterbible.org/faq/don_stewart/don_stewart_394.cfm",
    "12. [Ministry Organization] Answers in Genesis - Why 66 Books? https://answersingenesis.org/the-word-of-god/why-66-books/",
    "13. [Official Church] USCCB - Books of the Bible. https://www.usccb.org/bible/books-of-the-bible",
    "14. [Academic Resource] Britannica - Tanakh. https://www.britannica.com/topic/Tanakh",
    "15. [Encyclopedia] Britannica - Old Testament: The Apocrypha. https://www.britannica.com/topic/Old-Testament/The-Apocrypha",
    "16. [Religious Resource] Christianity.com - What is the Septuagint? https://www.christianity.com/wiki/bible/what-is-the-septuagint.html",
    "17. [Academic Resource] Logos - Did Jesus and the Apostles Use the Septuagint? https://www.logos.com/grow/did-jesus-and-the-apostles-use-the-septuagint/",
    "18. [Encyclopedia] Britannica - Saint Jerome: Biblical scholar. https://www.britannica.com/biography/Saint-Jerome/Biblical-scholar",
    "19. [Encyclopedia] Britannica - Council of Trent. https://www.britannica.com/event/Council-of-Trent",
    "20. [Ministry Organization] CARM - The Book of Tobit: Summary and Problems. https://www.carm.org/apocrypha/book-tobit-summary-and-problems/",
    "21. [Ministry Organization] Got Questions - Book of Tobit. https://www.gotquestions.org/book-of-Tobit.html",
    "22. [Ministry Organization] Got Questions - Book of Judith. https://www.gotquestions.org/book-of-Judith.html",
    "23. [Encyclopedia] Britannica - Book of Judith. https://www.britannica.com/topic/Book-of-Judith",
    "24. [Ministry Organization] CARM - Book of Wisdom: Summary and Problems. https://www.carm.org/apocrypha/book-wisdom-summary-and-problems/",
    "25. [Encyclopedia] Britannica - Wisdom of Solomon (Old Testament book). https://www.britannica.com/topic/Wisdom-of-Solomon",
    "26. [Ministry Organization] CARM - Summary and Problems of 1 and 2 Maccabees. https://www.carm.org/apocrypha/summary-and-problems-of-1-and-2-maccabees/",
    "27. [Catholic Resource] Catholic Answers - Purgatory. https://www.catholic.com/encyclopedia/purgatory",
    "28. [Religious Organization] Ligonier Ministries - The Old Testament Canon (Luke 24:44). https://learn.ligonier.org/devotionals/old-testament-canon",
    "29. [Academic Resource] Gill's Exposition of the Bible - Hebrews 11:35. https://www.biblestudytools.com/commentaries/gills-exposition-of-the-bible/hebrews-11-35.html",
    "30. [Academic Resource] Early Christian Writings - Gnostic Texts. https://www.earlychristianwritings.com/gnostics.html",
    "31. [Encyclopedia] Britannica - Gnosticism. https://www.britannica.com/topic/Gnosticism",
    "32. [Academic] World History Encyclopedia - Gnosticism. https://www.worldhistory.org/Gnosticism/",
    "33. [Ministry Organization] Got Questions - Nag Hammadi Library. https://www.gotquestions.org/Nag-Hammadi.html",
    "34. [Encyclopedia] Britannica - Docetism. https://www.britannica.com/topic/Docetism",
    "35. [Ministry Organization] Got Questions - Gospel of Thomas. https://www.gotquestions.org/Gospel-of-Thomas.html",
    "36. [Academic Resource] Early Christian Writings - Gospel of Thomas. https://www.earlychristianwritings.com/thomas.html",
    "37. [Ministry Organization] Got Questions - Gospel of Judas. https://www.gotquestions.org/Gospel-of-Judas.html",
    "38. [Academic Resource] Early Christian Writings - Gospel of Judas. https://www.earlychristianwritings.com/gospeljudas.html",
    "39. [Academic Resource] Early Christian Writings - Gospel of Mary. https://www.earlychristianwritings.com/gospelmary.html",
    "40. [Academic] World History Encyclopedia - Gospel of Mary. https://www.worldhistory.org/Gospel_of_Mary/",
    "41. [Academic Resource] Early Christian Writings - Gospel of Philip. https://www.earlychristianwritings.com/gospelphilip.html",
    "42. [Ministry Organization] Got Questions - Gospel of Philip. https://www.gotquestions.org/Gospel-of-Philip.html",
    "43. [Academic Resource] History.com - Why Were the Gnostic Gospels Left Out of the Bible? https://www.history.com/news/gnostic-gospels-christianity-scriptures",
    "44. [Academic Resource] Early Christian Writings - Main Collection. https://www.earlychristianwritings.com/",
    "45. [Encyclopedia] Britannica - Apostolic Father. https://www.britannica.com/topic/Apostolic-Father",
    "46. [Religious Resource] Learn Religions - The Apostolic Fathers. https://www.learnreligions.com/the-apostolic-fathers-700683",
    "47. [Religious Organization] Ligonier Ministries - The Apostolic Fathers. https://www.ligonier.org/learn/articles/apostolic-fathers",
    "48. [Academic Resource] Early Christian Writings - The Didache. https://www.earlychristianwritings.com/didache.html",
    "49. [Ministry Organization] Got Questions - The Didache. https://www.gotquestions.org/Didache.html",
    "50. [Academic Resource] Early Christian Writings - 1 Clement. https://www.earlychristianwritings.com/1clement.html",
    "51. [Catholic Encyclopedia] New Advent - 1 Clement (Primary Source Text). https://www.newadvent.org/fathers/1010.htm",
    "52. [Academic Resource] Early Christian Writings - Shepherd of Hermas. https://www.earlychristianwritings.com/shepherd.html",
    "53. [Ministry Organization] Got Questions - Shepherd of Hermas. https://www.gotquestions.org/Shepherd-of-Hermas.html",
    "54. [Academic Resource] Early Christian Writings - Epistle of Barnabas. https://www.earlychristianwritings.com/barnabas.html",
    "55. [Ministry Organization] Got Questions - Epistle of Barnabas. https://www.gotquestions.org/Epistle-of-Barnabas.html",
    "56. [Catholic Encyclopedia] New Advent - Athanasius' 39th Festal Letter (Primary Source). https://www.newadvent.org/fathers/2806039.htm",
    "57. [Encyclopedia] Britannica - Pseudepigrapha. https://www.britannica.com/topic/pseudepigrapha",
    "58. [Ministry Organization] Got Questions - Pseudepigrapha. https://www.gotquestions.org/pseudepigrapha.html",
    "59. [Ministry Organization] Got Questions - Book of Enoch. https://www.gotquestions.org/book-of-Enoch.html",
    "60. [Ministry Organization] Got Questions - Assumption of Moses. https://www.gotquestions.org/Assumption-of-Moses.html",
    "61. [Academic Resource] Wikipedia - Book of Enoch. https://en.wikipedia.org/wiki/Book_of_Enoch",
    "62. [Academic Resource] Wikipedia - Enoch Calendar. https://en.wikipedia.org/wiki/Enoch_calendar",
    "63. [Ministry Organization] Got Questions - Book of Jubilees. https://www.gotquestions.org/book-of-Jubilees.html",
    "64. [Encyclopedia] Britannica - Book of Jubilees. https://www.britannica.com/topic/Book-of-Jubilees",
    "65. [Encyclopedia] Britannica - Testaments of the Twelve Patriarchs. https://www.britannica.com/topic/Testaments-of-the-Twelve-Patriarchs",
    "66. [Academic Resource] Christianity Stack Exchange - Why is the Book of Enoch not regarded as canonical? https://christianity.stackexchange.com/questions/8576/why-is-the-book-of-enoch-not-regarded-as-canonical",
    "67. [Academic Resource] Early Christian Writings - New Testament Apocrypha. https://www.earlychristianwritings.com/apocrypha.html",
    "68. [Encyclopedia] Britannica - New Testament apocrypha. https://www.britannica.com/topic/New-Testament-apocrypha",
    "69. [Academic] World History Encyclopedia - New Testament Apocrypha. https://www.worldhistory.org/New_Testament_Apocrypha/",
    "70. [Academic Resource] Bible Study Tools - Apocrypha. https://www.biblestudytools.com/apocrypha/",
    "71. [Catholic Encyclopedia] New Advent - Apocrypha. https://www.newadvent.org/cathen/01601a.htm",
    "72. [Academic Resource] Early Christian Writings - Protoevangelium of James. https://www.earlychristianwritings.com/infancyjames.html",
    "73. [Ministry Organization] Got Questions - Protoevangelium of James. https://www.gotquestions.org/Protoevangelium-of-James.html",
    "74. [Academic Resource] Early Christian Writings - Infancy Gospel of Thomas. https://www.earlychristianwritings.com/infancythomas.html",
    "75. [Ministry Organization] Got Questions - Infancy Gospel of Thomas. https://www.gotquestions.org/Infancy-Gospel-of-Thomas.html",
    "76. [Academic Resource] Early Christian Writings - Gospel of Peter. https://www.earlychristianwritings.com/gospelpeter.html",
    "77. [Ministry Organization] Got Questions - Gospel of Peter. https://www.gotquestions.org/Gospel-of-Peter.html",
    "78. [Academic Resource] Early Christian Writings - Acts of Paul. https://www.earlychristianwritings.com/actspaul.html",
    "79. [Encyclopedia] Britannica - Acts of Paul. https://www.britannica.com/topic/Acts-of-Paul",
    "80. [Academic Resource] Early Christian Writings - Acts of John. https://www.earlychristianwritings.com/actsjohn.html",
  ],
  timeline: canonTimeline,
  lastUpdated: "11-09-2025",
};