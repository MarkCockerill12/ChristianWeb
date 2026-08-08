import type { Topic, TimelineEvent } from "./types";

// Timeline data for biblical canon development
export const canonTimeline: TimelineEvent[] = [
  {
    id: 1,
    date: "c. 1445-1405 BC",
    title: "Moses Writes the Torah",
    period: "Old Testament Formation",
    color: "blue",
    description: `Moses authors the Pentateuch (Genesis, Exodus, Leviticus, Numbers, Deuteronomy) during Israel's wilderness wanderings. Genesis records events from creation to Joseph's death, while Exodus through Deuteronomy chronicles Israel's deliverance from Egypt and the giving of the Law.`,
    significance: `Establishes the foundational covenant documents and legal framework for Israel; first canonical Scripture`,
  },
  {
    id: 2,
    date: "c. 1010-970 BC",
    title: "David Composes Psalms",
    period: "Old Testament Formation",
    color: "blue",
    description: `King David writes approximately 73 of the 150 Psalms during his reign, including [Psalm 23](https://www.biblegateway.com/passage/?search=Psalm+23&version=NIV) (The Lord is my shepherd) and many messianic psalms. These worship songs express the full range of human emotion in relationship with God.`,
    significance: `Establishes divinely inspired worship literature; many psalms are prophetically messianic`,
  },
  {
    id: 3,
    date: "c. 971-931 BC",
    title: "Solomon's Wisdom Literature",
    period: "Old Testament Formation",
    color: "blue",
    description: `King Solomon authors most of Proverbs (practical wisdom for daily living), Ecclesiastes (the vanity of life apart from God), and Song of Songs (celebrating marital love). He also writes [Psalm 72](https://www.biblegateway.com/passage/?search=Psalm+72&version=NIV) and [Psalm 127](https://www.biblegateway.com/passage/?search=Psalm+127&version=NIV).`,
    significance: `Provides divinely inspired wisdom for practical Christian living and relationships`,
  },
  {
    id: 4,
    date: "c. 760-586 BC",
    title: "Major Prophetic Books",
    period: "Old Testament Formation",
    color: "blue",
    description: `Isaiah (c. 740-680 BC) writes 66 chapters of messianic prophecy and judgment. Jeremiah (c. 627-580 BC) authors his prophecy and Lamentations. Ezekiel (c. 593-571 BC) records visions from Babylonian exile. Daniel (c. 605-536 BC) writes apocalyptic prophecy.`,
    significance: `Provides detailed messianic prophecies and warnings of judgment; establishes prophetic genre`,
  },
  {
    id: 5,
    date: "c. 520-400 BC",
    title: "Post-Exile Restoration Books",
    period: "Old Testament Formation",
    color: "blue",
    description: `Post-exile prophets write final Old Testament books: Haggai and Zechariah (520-518 BC) encourage temple rebuilding; Malachi (c. 430-400 BC) addresses spiritual renewal. Chronicles, Ezra, and Nehemiah record Israel's history and restoration.`,
    significance: `Completes Hebrew Scripture; closes Old Testament canon with promise of coming Messiah ([Malachi 3:1](https://www.biblegateway.com/passage/?search=Malachi+3%3A1&version=NIV), [Malachi 4:5-6](https://www.biblegateway.com/passage/?search=Malachi+4%3A5-6&version=NIV))`,
  },
  {
    id: 6,
    date: "c. 400 BC",
    title: "Hebrew Canon Closes",
    period: "Canon Recognition",
    color: "green",
    description: `Jewish authorities recognize the cessation of prophetic revelation with Malachi's ministry. The Hebrew canon is established at 24 books (equivalent to Protestant 39, divided differently), comprising the Law (Torah), Prophets (Nevi'im), and Writings (Ketuvim).`,
    significance: `Formal closure of Old Testament revelation; establishes boundaries of Hebrew Scripture that Jesus would later affirm`,
  },
  {
    id: 7,
    date: "c. 280-130 BC",
    title: "Septuagint Translation",
    period: "Canon Recognition",
    color: "orange",
    description: `Hebrew Bible translated into Greek in Alexandria, Egypt, for Greek-speaking Jewish communities. Some manuscripts include deuterocanonical books (Tobit, Judith, Wisdom, etc.), though this inclusion varied between manuscripts and was not universally accepted.`,
    significance: `Makes Scripture accessible to diaspora Jews and later Gentile Christians; provides Greek text for New Testament quotations`,
  },
  {
    id: 8,
    date: "c. 49-96 AD",
    title: "New Testament Books Written",
    period: "New Testament Formation",
    color: "purple",
    description: `All 27 New Testament books authored during apostolic era: Paul's letters (49-67 AD), Gospels of Matthew, Mark, Luke (50-85 AD), Acts (60-62 AD), Hebrews, James, Peter's letters, Jude (50-85 AD), John's Gospel and letters (85-95 AD), and Revelation (95-96 AD).`,
    significance: `Completes divine revelation through apostolic witnesses; fulfills Jesus' promise of the Holy Spirit guiding into all truth`,
  },
  {
    id: 9,
    date: "c. 90-100 AD",
    title: "Discussions at Jamnia (Yavneh)",
    period: "Canon Recognition",
    color: "green",
    description: `Following the Temple's destruction (70 AD), rabbinic discussions at Yavneh (Jamnia) were instrumental in solidifying the boundaries of the 24-book Hebrew canon. While not a formal 'council' that 'closed' the canon, these discussions affirmed the books of the Tanakh and excluded apocryphal and Christian writings.`,
    significance: `Post-Temple Judaism solidifies canonical boundaries; establishes Masoretic text tradition`,
  },
  {
    id: 10,
    date: "c. 170-200 AD",
    title: "Muratorian Fragment",
    period: "Canon Recognition",
    color: "green",
    description: `Earliest known canonical list includes 22 of 27 New Testament books, explicitly naming Matthew, Luke, John, Acts, 13 Pauline letters, Jude, 1-2 John, and Revelation. It also includes the Wisdom of Solomon. Notable omissions include Hebrews, James, 1-2 Peter, and 3 John.`,
    significance: `Demonstrates early widespread recognition of apostolic authorship as canonical criterion`,
  },
  {
    id: 11,
    date: "367 AD",
    title: "Athanasius' 39th Festal Letter",
    period: "Canon Recognition",
    color: "green",
    description: `Bishop Athanasius of Alexandria provides the first complete list matching our 27-book New Testament canon, stating these are 'fountains of salvation' and warning against adding apocryphal books. He distinguishes between canonical books and those 'merely read' for instruction.`,
    significance: `First complete and exact listing of New Testament canon; establishes clear boundary between Scripture and church literature`,
  },
  {
    id: 12,
    date: "382 AD",
    title: "Synod of Rome under Pope Damasus",
    period: "Canon Recognition",
    color: "green",
    description: `Pope Damasus I formally approves a biblical canon including 73 books: 46 Old Testament books (including deuterocanonicals like Tobit, Judith, Wisdom, Sirach, Baruch, 1-2 Maccabees) plus 27 New Testament books. This represents early Catholic canonical position.`,
    significance: `First papal endorsement of expanded Old Testament canon including deuterocanonical books`,
  },
  {
    id: 13,
    date: "393-419 AD",
    title: "North African Councils",
    period: "Canon Recognition",
    color: "green",
    description: `Councils of Hippo (393 AD) and Carthage (397, 419 AD) ratify 73-book canon matching Rome's decision. These regional councils strongly influenced later Catholic canonical decisions, though they lacked universal church authority.`,
    significance: `Regional ecclesiastical support for expanded canon; influences later Catholic position at Trent`,
  },
  {
    id: 14,
    date: "382-405 AD",
    title: "Jerome's Vulgate Translation",
    period: "Canon Recognition",
    color: "orange",
    description: `Scholar Jerome translates Bible into Latin Vulgate, completing Old Testament by 405 AD. Despite papal pressure, Jerome distinguishes between 'canonical books' (Hebrew canon) and 'ecclesiastical books' (deuterocanonicals), placing latter in separate category for edification but not doctrine.`,
    significance: `Scholarly distinction between levels of canonical authority; Hebrew text tradition preserved`,
  },
  {
    id: 15,
    date: "October 31, 1517 AD",
    title: "Luther's 95 Theses Posted",
    period: "Protestant Reformation",
    color: "red",
    description: `Martin Luther posts 95 theses challenging papal authority and indulgences at Wittenberg Castle Church. While not directly addressing canon, Luther's 'sola scriptura' principle (Scripture alone as ultimate authority) fundamentally challenges Catholic additions to biblical canon.`,
    significance: `Establishes Scripture as sole religious authority, laying groundwork for Protestant canonical decisions`,
  },
  {
    id: 16,
    date: "1522-1534 AD",
    title: "Luther's German Bible",
    period: "Protestant Reformation",
    color: "red",
    description: `Luther translates Bible into German, completing full Bible in 1534. He places deuterocanonical books (Tobit, Judith, Wisdom, Sirach, Baruch, 1-2 Maccabees) in separate 'Apocrypha' section, stating they are 'useful and good to read' but not equal to Scripture.`,
    significance: `Establishes Protestant precedent for distinguishing canonical from apocryphal texts`,
  },
  {
    id: 17,
    date: "April 8, 1546 AD",
    title: "Council of Trent Session IV",
    period: "Counter-Reformation",
    color: "darkred",
    description: `Catholic Church's Council of Trent dogmatically declares 73-book canon including deuterocanonicals as 'sacred and canonical' in direct response to Protestant challenges. Declares anathema (excommunication) on anyone rejecting these books as Scripture.`,
    significance: `Catholic canon dogmatically established; creates permanent Catholic-Protestant canonical divide`,
  },
  {
    id: 18,
    date: "1560 AD",
    title: "Geneva Bible Published",
    period: "Protestant Reformation",
    color: "red",
    description: `English Protestant Bible translated by Reformed scholars in Geneva. Although the original 1560 edition included the Apocrypha in a separate section, it added prefaces explicitly denying their canonical status. Later printings (starting in 1599) omitted the Apocrypha completely.`,
    significance: `Pioneers the separation and eventual omission of apocryphal books in English Bibles, establishing the 66-book Protestant standard`,
  },
  {
    id: 19,
    date: "1611 AD",
    title: "King James Version Authorized",
    period: "Protestant Reformation",
    color: "red",
    description: `Authorized Version commissioned by King James I includes deuterocanonical books in separate 'Apocrypha' section between Old and New Testaments. While included, these books are clearly distinguished as non-canonical but historically valuable.`,
    significance: `Establishes English-speaking Protestant standard while maintaining historical acknowledgment of disputed books`,
  },
  {
    id: 20,
    date: "1825 AD",
    title: "British & Foreign Bible Society Decision",
    period: "Modern Era",
    color: "gray",
    description: `British & Foreign Bible Society votes to exclude Apocrypha from all Bible distributions after heated debate. This decision is followed by American Bible Society (1827) and other Protestant organizations, making 66-book Bibles standard in Protestant missions worldwide.`,
    significance: `Practical elimination of deuterocanonical books from Protestant Bible distribution; establishes global Protestant standard`,
  },
  {
    id: 21,
    date: "July 18, 1870 AD",
    title: "First Vatican Council - Pastor Aeternus",
    period: "Modern Era",
    color: "darkred",
    description: `Vatican I's constitution Pastor Aeternus declares papal infallibility in matters of faith and morals, indirectly reinforcing Trent's canonical decisions as irreversible dogma. This makes any future change to Catholic canon impossible without contradicting papal infallibility.`,
    significance: `Entrenches Catholic 73-book canon as irreversible dogma through papal infallibility doctrine`,
  },
  {
    id: 22,
    date: "November 18, 1965 AD",
    title: "Dei Verbum Constitution",
    period: "Modern Era",
    color: "darkred",
    description: `Second Vatican Council's Dogmatic Constitution on Divine Revelation (Dei Verbum) reaffirms Catholic canonical decisions and emphasizes Scripture's role alongside Sacred Tradition. Maintains 73-book canon while promoting biblical scholarship and vernacular translations.`,
    significance: `Modern Catholic reaffirmation of Trent's canon within framework of contemporary biblical scholarship`,
  },
];

export const canon: Topic = {
  id: "canon",
  title:
    "What are the True Canonical Books of the Bible? And how do we know these are authentic?",
  description: `How can we tell which books are truly apart of the Bible if there are different thoughts on it?`,
  icon: "BookOpen",
  color: "blue",
  tags: ["Historical", "Scripture"],
  verses: [
    { reference: "2 Timothy 3:16-17", text: "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness, so that the servant of God may be thoroughly equipped for every good work." },
    { reference: "2 Peter 1:20-21", text: "Above all, you must understand that no prophecy of Scripture came about by the prophet’s own interpretation of things. For prophecy never had its origin in the human will, but prophets, though human, spoke from God as they were carried along by the Holy Spirit." },
    { reference: "Revelation 22:18-19", text: "I warn everyone who hears the words of the prophecy of this scroll: If anyone adds anything to them, God will add to that person the plagues described in this scroll. And if anyone takes words away from this scroll of prophecy, God will take away from that person any share in the tree of life and in the Holy City, which are described in this scroll." },
    { reference: "Psalm 119:160", text: "All your words are true; all your righteous laws are eternal." }
  ],
  tldr: `The biblical canon was established through rigorous criteria including apostolic authority, consistency with established teaching, and universal church acceptance. It wasn't arbitrarily decided by a council but recognized as authoritative based on these inherent qualities.`,
  content: `
## The Biblical Canon: How We Know Which Books Are Scripture
The word "canon" comes from the Greek word "kanon," meaning "rule" or "measuring rod"[^1][^2][^3]. The biblical canon represents the authoritative collection of books that comprise Scripture[^4][^5]. Understanding which books belong in the Bible and why is crucial for establishing the foundation of Christian faith and doctrine.

### Criteria for Canonicity
Early church leaders used several key criteria to determine which books were truly inspired Scripture[^6]:

• **Apostolicity:** Written by apostles or their close associates[^7]

• **Orthodoxy:** Consistent with established apostolic teaching[^8]

• **Catholicity:** Accepted by churches universally (not just in one region)[^9]

• **Antiquity:** Written during the apostolic era (1st century AD)[^10]

### The Protestant Canon: 66 Books
The Protestant Bible contains 66 books, which scholars believe represents the complete inspired Scripture[^11]. This canon was recognized (not created) by the early church and represents the books that consistently met all criteria for divine inspiration[^12].

### The Deuterocanonical Books
The Catholic Bible includes additional texts, often referred to as the Deuterocanonical books, bringing the total to 73[^13]. These books include Tobit, Judith, Wisdom of Solomon, Sirach (Ecclesiasticus), Baruch, and 1 and 2 Maccabees. While valued by Catholics, Protestant scholars maintain these texts should not be considered Scripture due to historical, theological, and canonical concerns. For a detailed analysis of why these books are not included in the Protestant canon, see the Deuterocanonical Books section below.

### Conclusion
The careful process of canonical recognition preserved for us the authentic apostolic writings while rejecting later forgeries, theological deviations, and legendary embellishments[^14]. The 66 books of the Protestant Bible represent the complete revelation God intended to preserve for His church, confirmed by their apostolic origin, doctrinal orthodoxy, universal acceptance, and divine attestation[^15].

`,

  subtopics: [
    {
      id: "deuterocanonical-books",
      title: "Deuterocanonical Books",
      tags: ["Catholic", "Apocrypha"],
      content: `**Overview:** The Catholic Bible includes additional texts, often referred to as the Deuterocanonical books, bringing the total to 73[^16]. These books include Tobit, Judith, Wisdom of Solomon, Sirach (Ecclesiasticus), Baruch, and 1 and 2 Maccabees, among others. Understanding their history reveals why Protestant scholars maintain these texts should not be considered Scripture.

      **Historical Development of the Deuterocanonical Debate**


      **Jewish Canon Foundation (circa 400 BC):** The Hebrew Bible (Tanakh) closed around 400 BC with Malachi, establishing 24 books (equivalent to the Protestant 39 Old Testament books)[^17]. Jewish authorities never accepted the deuterocanonical books as Scripture, viewing them as valuable historical and devotional literature but not divinely inspired[^18].

      **Septuagint Inclusion (3rd-1st century BC):** When the Hebrew Bible was translated into Greek (the Septuagint), some manuscripts included these additional books. However, this was not universal, and many Septuagint manuscripts omitted them[^19]. Importantly, inclusion in a translation does not establish canonicity, as the translators were preserving culturally significant texts, not declaring them Scripture[^20].

      **Early Church Period (1st-4th centuries):** Church fathers had mixed opinions about these books. Jerome (347-420 AD), the translator of the Latin Vulgate, explicitly distinguished between canonical books (the Hebrew canon) and those "read for edification" (the Apocrypha) but not for establishing doctrine[^21].

      **Council of Trent's Decision (1546 AD):** The Catholic Church officially canonized these books at the Council of Trent, largely in response to Protestant challenges. This decision came over 1,500 years after the books were written and was motivated by doctrinal disputes rather than historical evidence[^22].

      **Specific Problems with Individual Deuterocanonical Books**


      **Tobit (circa 200 BC):**

      • **Magical practices:** Tobit 6:5-8 prescribes burning fish liver and heart to drive away demons, and using fish gall to cure blindness, practices foreign to biblical religion[^23]

    • **Salvation by works:** Tobit 12:9 states "almsgiving delivers from death and purges away every sin," directly contradicting the biblical doctrine of salvation by grace through faith ([Ephesians 2:8-9](https://www.biblegateway.com/passage/?search=Ephesians+2%3A8-9&version=NIV))[^24]

      **Judith (circa 150 BC):**

      • **Historical errors:** Claims Nebuchadnezzar ruled the Assyrians from Nineveh, when historically he was king of Babylon[^25]. The book is widely seen as a historical novel, not factual history[^26].

      **Wisdom of Solomon (circa 50 BC):**

      • **Greek philosophical influence:** Contains heavy influence from Platonic philosophy, including the pre-existence of souls (Wisdom 8:19-20), which contradicts biblical anthropology[^27]

      • **False attribution:** Claims Solomon as author but was written centuries after his death, making it pseudepigraphical[^28]

      **2 Maccabees (circa 124 BC):**

    • **Prayers for the dead:** 2 Maccabees 12:44-46 supports praying and making offerings for the dead, contradicting the biblical teaching that judgment is final after death ([Hebrews 9:27](https://www.biblegateway.com/passage/?search=Hebrews+9%3A27&version=NIV))[^29]. This text is a primary basis for the Catholic doctrine of Purgatory[^30].

      **Why Jesus and the Apostles Never Endorsed These Books**

    When Jesus referred to "the Law, the Prophets, and the Writings" ([Luke 24:44](https://www.biblegateway.com/passage/?search=Luke+24%3A44&version=NIV)), He was referencing the established Hebrew canon[^31]. The New Testament contains hundreds of Old Testament quotations, but it never quotes the deuterocanonical books as inspired Scripture. However, it does contain allusions to them. For example, [Hebrews 11:35](https://www.biblegateway.com/passage/?search=Hebrews+11%3A35&version=NIV) ("...others were tortured, refusing to accept release...") is widely seen as a clear allusion to the martyrdom of Eleazar and the seven brothers in 2 Maccabees 6–7[^32]. This shows the apostles were aware of these books but did not grant them the authority of Scripture.

        **Daniel and Esther Additions:**
        • **Additions to Daniel:** Includes the **Susanna** narrative (where Daniel delivers Susanna from false adultery accusations)[^33], **Bel and the Dragon** (containing two stories demonstrating the vanity of idols and Daniel's survival in the lions' den)[^34], and the **Prayer of Azariah and Song of the Three Holy Children** (liturgical prayers by the three youths in the furnace)[^35].
        • **Additions to Esther:** Six chapters of prayers, dream interpretations, and letters inserted to give the book a more explicitly religious tone[^36].

        **Eastern Orthodox and Slavonic Additions (Anagignoskomena):**
        • **1 Esdras:** A Greek retelling of the historical events from Josiah's passover through Ezra's reforms[^37].
        • **Prayer of Manasseh:** A short, beautifully composed penitential prayer attributed to King Manasseh of Judah after his captivity in Babylon[^38].
        • **Psalm 151:** A short psalm celebrating David's choice as king and his combat with Goliath, found in the Greek Septuagint but not the Hebrew Masoretic text[^39].
        • **3 & 4 Maccabees:** 3 Maccabees describes the persecution of Alexandrian Jews under Ptolemy IV (not about the Maccabean revolt)[^40], and 4 Maccabees is a philosophical treatise on religious reason conquering passion using the Maccabean martyrs as exemplars[^41].

        **Ethiopian Orthodox Canon Additions:**
        • **1-3 Meqabyan:** Three books of Ethiopian Maccabees outlining struggles against idolatrous kings (Meqabis), which are completely separate from the Greek 1-2 Maccabees[^42].
        • **Josippon:** A chronicle of Jewish history from Adam through the Roman wars, valued as historical literature[^43].
`
    },
    {
      id: "gnostic-gospels",
      title: "Gnostic Gospels",
      tags: ["Gnostic"],
      content: `**Founded:** 2nd-4th centuries AD (100-300+ years after Christ)[^44]


      **Key Characteristics:**

      • **Secret knowledge:** Claim salvation comes through hidden gnosis (knowledge) rather than faith in Christ's sacrifice[^45]

      • **Dualistic heresy:** Teach the material world is evil and created by a lesser god (Demiurge), contradicting [Genesis 1:31](https://www.biblegateway.com/passage/?search=Genesis+1%3A31&version=NIV)[^46]

      • **Pseudonymous authorship:** Falsely claim apostolic authors (Thomas, Judas, Mary) to gain credibility[^47]

      • **Docetic Christology:** Many deny Jesus had a real physical body, claiming He was a phantom or spirit (contradicting [1 John 4:2-3](https://www.biblegateway.com/passage/?search=1+John+4%3A2-3&version=NIV))[^48]


      **Detailed Examples of Invalidity:**


      **Gospel of Thomas (circa 50-140 AD):**

      • **Anti-material bias:** Saying 114 claims "every woman who will make herself male will enter the Kingdom of Heaven," reflecting Gnostic hatred of physical creation[^49]

      • **Secret knowledge heresy:** Saying 1 promises immortality to those who find the "interpretation" of Jesus' secret sayings, contradicting salvation by faith[^50]


      **Gospel of Judas (circa 180 AD):**

      • **Moral inversion:** Portrays Judas' betrayal as a noble act to help Jesus escape his physical body, directly contradicting Jesus' condemnation in [Matthew 26:24](https://www.biblegateway.com/passage/?search=Matthew+26%3A24&version=NIV)[^51]

      • **Demiurge heresy:** Claims the God of the Old Testament is an inferior creator deity, not the true God[^52]


      **Gospel of Mary (circa 180-200 AD):**

      • **Gnostic revelations:** Claims Mary Magdalene received special, secret revelations unavailable to male apostles, challenging apostolic authority[^53]

      • **Anti-body teachings:** Promotes escape from material existence ("sin...is not in the nature") rather than resurrection hope[^54]


      **Gospel of Philip (circa 200-250 AD):**

      • **Sacramental magic:** Claims salvation depends on secret rituals in a "bridal chamber" rather than faith in Christ[^55]

      • **Sensationalism:** Contains the reference to Mary Magdalene as Jesus' "companion," which has been fictionalized in modern works but reflects Gnostic (not historical) ideas[^56]


      **Why Rejected:** These texts systematically contradict apostolic teaching on creation ([Genesis 1:31](https://www.biblegateway.com/passage/?search=Genesis+1%3A31&version=NIV)), salvation by grace ([Ephesians 2:8-9](https://www.biblegateway.com/passage/?search=Ephesians+2%3A8-9&version=NIV)), Christ's physical reality ([1 John 4:2-3](https://www.biblegateway.com/passage/?search=1+John+4%3A2-3&version=NIV)), and were written 100-300+ years after the apostles, failing every test of canonicity[^57].

        **Apocryphon of John (Secret Revelation of John) (circa 120-180 AD):**
        • **Cosmological dualism:** Outlines Gnostic cosmology, claiming the true God did not create the universe, but rather an inferior, blind deity called Yaldabaoth (the demiurge)[^58].
        • **Why rejected:** Direct conflict with the monotheistic biblical doctrine of creation ([Genesis 1:1](https://www.biblegateway.com/passage/?search=Genesis+1%3A1&version=NIV)) and the goodness of the physical world[^59].

        **Gospel of Truth (circa 140-180 AD):**
        • **Valentinian homily:** A meditation on Gnostic truth that treats ignorance of the Father as a physical, dark entity (Error) that must be dispelled by secret knowledge[^60].
        • **Why rejected:** Lacks historical narrative, presents salvation as cognitive awakening rather than redemption from sin, and was written long after the apostolic era[^61].

        **Pistis Sophia (circa 250-300 AD):**
        • **Dialogue of Sophia:** Records post-resurrection teachings of Jesus to His disciples concerning the fall and liberation of Sophia (wisdom) through celestial levels[^62].
        • **Why rejected:** Written centuries after Christ, introduces complex astrological/pantheistic concepts foreign to the Apostles, and rejects historical redemption[^63].
`
    },
    {
      id: "early-christian-writings",
      title: "Early Christian Writings (Apostolic Fathers)",
      tags: ["Orthodox"],
      content: `**Overview:** This refers to a group of orthodox writings from the late 1st and early 2nd centuries. While theologically valuable, the early church recognized them as important pastoral letters but not inspired Scripture[^64].


      **Key Characteristics:**

      • **Orthodox theology:** Generally consistent with apostolic teaching and combat Gnosticism[^65]

      • **Non-apostolic authorship:** Not written by apostles, but by the next generation of church leaders[^66]

      • **Self-aware status:** The authors often quote the apostles as a higher authority, showing they did not see their own writings as equal to Scripture[^67]


      **Detailed Analysis of Key Works:**


      **The Didache (circa 50-120 AD):**

      • **Church manual nature:** A practical "church-order" manual for new converts, providing instructions on baptism, fasting, and the "Two Ways" (life and death)[^68]

      • **Why not canonical:** It is anonymous and, while orthodox, was seen as a summary of apostolic teaching rather than a new revelation itself[^69]


      **1 Clement (circa 96 AD):**

      • **Ecclesiastical authority:** Written by Clement of Rome to the Corinthian church to address a dispute. It calls for order and respect for appointed leaders[^70]

      • **Why not canonical:** Clement himself distinguishes his letter from the "epistle of the blessed Paul" (which he cites as binding authority), showing he did not consider his own letter to be Scripture[^71]


      **Shepherd of Hermas (circa 100-140 AD):**

      • **Allegorical visions:** A popular book of elaborate visions and allegories, urging repentance[^72]

      • **Why not canonical:** It was popular, but its late date and promotion of a "second repentance" (a post-baptismal chance) were seen as a development beyond apostolic teaching[^73]


      **Epistle of Barnabas (circa 70-130 AD):**

      • **Allegorical excess:** Uses extreme, non-literal allegorical interpretations of the Old Testament that were not characteristic of apostolic writing[^74]

      • **Anti-Jewish polemic:** Contains a harsh polemic against Judaism that was deemed inconsistent with the pastoral tone of the apostles[^75]


      **Why Not Canonical:** These works fail the test of apostolic authorship. The early church read them for edification (Athanasius called them "books merely read") but clearly distinguished them from the inspired, foundational apostolic Scriptures[^76].

      **Letters of Ignatius of Antioch (circa 110 AD):**
      • **Ignatian epistles:** Seven letters written by Ignatius while in chains en route to Rome. They address church order, the authority of the bishop, and combat early docetism[^77].
      • **Why not canonical:** Ignatius explicitly distinguishes himself from the apostles, saying "I do not, as Peter and Paul, issue commandments unto you; they were apostles of Jesus Christ, but I am the least of all"[^78].

      **Polycarp's Writings and Martyrdom (circa 110-155 AD):**
      • **Apostolic disciple legacy:** Polycarp's *Letter to the Philippians* exhorts righteousness, and the *Martyrdom of Polycarp* provides the earliest account of a post-NT martyr's death[^79].
      • **Why not canonical:** These are valuable early records, but are pastoral and historical accounts, not written by apostles or containing unique divine revelation[^80].

      **Epistle to Diognetus (circa 130-200 AD):**
      • **Apologetic letter:** An elegant defense of the Christian faith to a pagan inquirer, describing Christians as "living in the world but not of it"[^81].
      • **Why not canonical:** The letter is anonymous, post-apostolic, and is a work of human apologetics rather than inspired, authoritative scripture[^82].
`
    },
    {
      id: "pseudepigraphical-works",
      title: "Pseudepigraphical Works",
      tags: ["False-Authorship"],
      content: `**Overview:** "Pseudepigrapha" (Gr. "false writings") are texts deliberately and falsely attributed to ancient biblical figures (Enoch, Moses, patriarchs) to give them an aura of authority[^83]. They were written centuries after their claimed authors lived[^84].


      **New Testament Allusions (Crucial Additions)**

  Despite being non-canonical, two pseudepigraphical books are famously referenced in the New Testament book of Jude:

  • **1 Enoch:** [Jude 14-15](https://www.biblegateway.com/passage/?search=Jude+1%3A14-15&version=NIV) directly quotes 1 Enoch 1:9 ("See, the Lord is coming with thousands upon thousands of his holy ones..."), citing it as a prophecy[^85]. Jude uses this prophecy as a true statement, just as Paul quoted pagan poets ([Acts 17:28](https://www.biblegateway.com/passage/?search=Acts+17%3A28&version=NIV)), without canonizing the entire work.

  • **Assumption of Moses:** [Jude 9](https://www.biblegateway.com/passage/?search=Jude+1%3A9&version=NIV) alludes to a dispute between Michael and the devil over Moses' body ("...but even the archangel Michael, when he was disputing with the devil about the body of Moses..."). This event is not found in the Old Testament but was recorded in the non-extant ending of the Assumption of Moses[^86].


      **Detailed Examination of Major Works:**


      **1 Enoch (3rd century BC - 1st century AD):**

  • **Elaborate angelology:** Presents detailed angel hierarchies and names (like Uriel, Raguel) and stories of the "Watchers" (fallen angels) that go far beyond [Genesis 6](https://www.biblegateway.com/passage/?search=Genesis+6&version=NIV)[^87]

      • **Astronomical errors:** Contains inaccurate calendrical (a 364-day calendar) and astronomical information[^88] (Note: The Ethiopian Orthodox Church does consider 1 Enoch to be canonical).

      **Book of Jubilees (circa 160-150 BC):**

      • **Calendar innovation:** Promotes a 364-day solar calendar, contradicting the lunar-based calendar used in canonical Jewish practice[^89]

      • **Legalistic additions:** Claims to be a secret revelation from an angel to Moses, adding numerous laws not found in the Pentateuch[^90]

      **Testament of the Twelve Patriarchs (circa 109-106 BC):**

      • **Composite work:** A collection of "last words" from Jacob's twelve sons, containing moral exhortations but also later Christian interpolations (additions)[^91].



      **Why These Works Are Invalid (despite NT allusions):**

  The pseudepigraphical works violate the fundamental principle of truthfulness; their deceptive authorship alone disqualifies them, as God cannot lie ([Titus 1:2](https://www.biblegateway.com/passage/?search=Titus+1%3A2&version=NIV)). The New Testament authors' allusions to them (like Jude) show awareness of contemporary literature to make a point, not a declaration of the entire work's divine inspiration[^92].

      **Psalms of Solomon (circa 50 BC):**
      • **Pharisaic messianism:** 18 psalms focusing on the Maccabean corruption, the Roman invasion of Jerusalem, and expectations of a militant Messiah[^93].
      • **Why rejected:** Written during the intertestamental period when prophecy was recognized as ceased, and falsely attributed to Solomon to gain authority[^94].

      **Letter of Aristeas (circa 2nd century BC):**
      • **Septuagint origin story:** A book describing the translation of the Hebrew Law into Greek by 72 elders under Ptolemy II Philadelphus[^95].
      • **Why rejected:** Pseudepigraphal letter of a non-Jewish writer that serves as historical romance, not inspired prophetic revelation[^96].

      **Martyrdom and Ascension of Isaiah (circa 1st-2nd century AD):**
      • **Isaiah's death:** Details King Manasseh sawing the prophet Isaiah in half (referenced in [Hebrews 11:37](https://www.biblegateway.com/passage/?search=Hebrews+11%3A37&version=NIV))[^97].
      • **Why rejected:** Falsely attributed, contains later Gnostic-leaning Christian interpolations, and post-dates the prophetic era[^98].
`
    },
    {
      id: "new-testament-apocrypha",
      title: "New Testament Apocrypha",
      tags: ["Apocryphal", "Legendary"],
      content: `**Overview:** A large collection of "gospels," "acts," and "epistles" written from the 2nd century onward. They are not the same as the Gnostic gospels; rather than being heretical, they are often legendary, fan-fiction-like accounts meant to "fill in the blanks" of the canonical stories[^99].


      **Key Characteristics:**

      • **Legendary content:** Focus on sensational, fantastic, or sentimental stories (e.g., Jesus's childhood, apostles' adventures)[^100]

      • **Late composition:** Written well after the apostolic period (2nd-5th centuries)[^101]

      • **Pseudonymous authorship:** Falsely claim apostolic authors for credibility[^102]

      • **Church rejection:** Consistently rejected by early church leaders as forgeries or "pious frauds"[^103]


      **Detailed Analysis of Major Apocryphal Works:**


      **Protoevangelium of James (circa 150 AD):**

      • **Legendary embellishments:** "Fills in" Mary's childhood, claiming she was a temple virgin, and details Jesus's birth in a cave[^104]

      • **Unbiblical doctrine:** The source for the doctrine of the perpetual virginity of Mary (claiming she remained a virgin even during and after Jesus's birth), a doctrine not found in the Bible[^105]

      **Infancy Gospel of Thomas (circa 180-200 AD):**

      • **Vindictive child Jesus:** Portrays young Jesus as a petulant and vengeful child, causing blindness or death to children who annoy him, and then sometimes healing them[^106]

  • **Character contradictions:** This portrait of a sinfully prideful child completely contradicts the biblical portrait of Jesus's sinless character ([Hebrews 4:15](https://www.biblegateway.com/passage/?search=Hebrews+4%3A15&version=NIV)) and wisdom ([Luke 2:52](https://www.biblegateway.com/passage/?search=Luke+2%3A52&version=NIV))[^107]

      **Gospel of Peter (circa 150-200 AD):**

      • **Docetic elements:** Portrays Jesus on the cross as feeling no pain and crying out "My power, my power, you have left me" (instead of "My God, my God..."), implying his divinity, not humanity, was present[^108]

      • **Fantastic resurrection:** Describes Jesus emerging from the tomb as a giant whose head reaches the clouds, supported by two other giants (angels), and followed by a talking cross[^109]


      **Acts of Paul (circa 180-190 AD):**

      • **Legendary adventures:** Contains fictional stories of Paul's encounters, including a baptizing lion (Acts of Paul and Thecla) and other miracles not recorded in the Bible[^110]

  • **Ascetic heresy:** Promotes extreme celibacy and anti-marriage teachings contrary to Paul's balanced view in [1 Corinthians 7](https://www.biblegateway.com/passage/?search=1+Corinthians+7&version=NIV)[^111]


      **Acts of John (circa 150-200 AD):**

      • **Gnostic docetism:** Claims Jesus only appeared to suffer on the cross while his spirit was "dancing" above, a classic Gnostic rejection of the physical suffering and resurrection[^112]


      **Why These Works Are Clearly Invalid:**

      The New Testament apocrypha fail every test of canonicity. Their late dates, false authorships, theological errors (especially Gnosticism and docetism), and fantastic, legendary content stand in stark contrast to the sober, historical, and theologically unified accounts of the 27 canonical books[^113].

      **Gospel of Nicodemus (including Acts of Pilate) (circa 4th century AD):**
      • **Harrowing of Hell:** Details Jesus descending into Hades after the crucifixion, breaking its gates, and rescuing Adam and the Old Testament saints[^114].
      • **Why rejected:** Late legendary writing containing fantastical descriptions of the underworld, with no historical or apostolic validation[^115].

      **Acts of Peter (circa 150-200 AD):**
      • **Quo Vadis legend:** Contains the story of Peter fleeing Rome, meeting a vision of Jesus, and returning to be crucified upside down, as well as stories of Peter resurrecting smoked fish[^116].
      • **Why rejected:** Written long after Peter's death, containing legendary embellishments and severe ascetic biases foreign to apostolic letters[^117].

      **Acts of Thomas (circa 200-225 AD):**
      • **Mission to India:** Details Thomas's travels and miracles in India, and contains Gnostic theology (such as the *Hymn of the Pearl*)[^118].
      • **Why rejected:** A late pseudepigraphal romance containing heretical Gnostic concepts, including rejection of physical marriage[^119].

      **Apocalypse of Peter (circa 100-150 AD):**
      • **Visions of hell:** Contains detailed, graphic accounts of specific punishments in hell for various sins, alongside descriptions of heaven[^120].
      • **Why rejected:** Late composition, lacks prophetic sobriety, and is heavily influenced by Greek mythology rather than biblical revelation[^121].

      **Epistle to the Laodiceans (circa 4th century AD):**
      • **Forged Pauline epistle:** A short collection of Pauline phrases compiled to forge the "letter from Laodicea" mentioned in [Colossians 4:16](https://www.biblegateway.com/passage/?search=Colossians+4%3A16&version=NIV)[^122].
      • **Why rejected:** Unanimously recognized by the early church as a compilation of plagiarism designed to create a "missing" letter, containing no original teaching[^123].
`
    },
  ],
            sources: [
    "1. [Encyclopedia] Britannica - Biblical Literature: The Biblical Canon. https://www.britannica.com/topic/biblical-literature/The-biblical-canon",
    "2. [Reference] muratorian.html. https://www.bible-researcher.com/muratorian.html",
    "3. [Reference] muratorian-metzger.html. https://earlychristianwritings.com/text/muratorian-metzger.html",
    "4. [Academic Resource] Oxford Bibliographies. 'Biblical Canon.' https://www.oxfordbibliographies.com/abstract/document/obo-9780195393361/obo-9780195393361-0017.xml",
    "5. [Evangelical] The Gospel Coalition. the-muratorian-fragment-and-the-development-of-the-canon-oxford-theological-monographs. https://www.thegospelcoalition.org/themelios/review/the-muratorian-fragment-and-the-development-of-the-canon-oxford-theological-monographs/",
    "6. [Ministry Resource] BibleQuestions.info. 'Criteria for Canonicity.' https://biblequestions.info/2019/08/10/what-are-the-criteria-for-a-book-to-be-canonical/",
    "7. [Reference] Wikipedia. Development of the Hebrew Bible canon. https://en.wikipedia.org/wiki/Development_of_the_Hebrew_Bible_canon",
    "8. [Reference] Wikipedia. Athanasius of Alexandria. https://en.wikipedia.org/wiki/Athanasius_of_Alexandria",
    "9. [Reference] Wikipedia. Council of Rome. https://en.wikipedia.org/wiki/Council_of_Rome",
    "10. [Reference] Wikipedia. Deuterocanonical books. https://en.wikipedia.org/wiki/Deuterocanonical_books",
    "11. [Encyclopedia] Britannica - Protestantism. https://www.britannica.com/topic/Protestantism",
    "12. [Ministry Organization] Got Questions - What is the Canon of Scripture? https://www.gotquestions.org/canon-of-Scripture.html",
    "13. [Catholic Encyclopedia] New Advent - Canon of the Old Testament. https://www.newadvent.org/cathen/03267a.htm",
    "14. [Theological Essay] The Gospel Coalition. 'The Biblical Canon.' https://www.thegospelcoalition.org/essay/the-biblical-canon/",
    "15. [Ministry Organization] Answers in Genesis - Why 66 Books? https://answersingenesis.org/the-word-of-god/why-66-books/",
    "16. [Official Church] USCCB - Books of the Bible. https://www.usccb.org/bible/books-of-the-bible",
    "17. [Academic Resource] Britannica - Tanakh. https://www.britannica.com/topic/Tanakh",
    "18. [Encyclopedia] Britannica - Old Testament: The Apocrypha. https://www.britannica.com/topic/Old-Testament/The-Apocrypha",
    "19. [Religious Resource] Christianity.com - What is the Septuagint? https://www.christianity.com/wiki/bible/what-is-the-septuagint.html",
    "20. [Academic Resource] Logos. 'What Is the Septuagint and Is It Valuable for Bible Study?' https://www.logos.com/grow/what-is-the-septuagint-and-why-is-it-valuable-for-bible-study/",
    "21. [Encyclopedia] Britannica - Saint Jerome: Biblical scholar. https://www.britannica.com/biography/Saint-Jerome/Biblical-scholar",
    "22. [Encyclopedia] Britannica - Council of Trent. https://www.britannica.com/event/Council-of-Trent",
    "23. [Encyclopedia] Britannica. 'Book of Tobit.' https://www.britannica.com/topic/Tobit-biblical-literature",
    "24. [Catholic Reference] New Advent, Catholic Encyclopedia. 'The Muratorian Canon.' https://www.newadvent.org/cathen/10642a.htm",
    "25. [Ministry Organization] Got Questions - Book of Judith. https://www.gotquestions.org/book-of-Judith.html",
    "26. [Encyclopedia] Britannica - Book of Judith. https://www.britannica.com/topic/Book-of-Judith",
    "27. [Primary Source] Council of Trent. 'Fourth Session, on the Canonical Scriptures.' https://www.ccel.org/ccel/schaff/creeds2.v.i.i.ii.html",
    "28. [Encyclopedia] Britannica - Wisdom of Solomon (Old Testament book). https://www.britannica.com/topic/Wisdom-of-Solomon",
    "29. [Reference] Wikipedia. Codex Bezae. https://en.wikipedia.org/wiki/Codex_Bezae",
    "30. [Catholic Resource] Catholic Answers - Purgatory. https://www.catholic.com/encyclopedia/purgatory",
    "31. [Reference] Wikipedia. Rylands Library Papyrus P52. https://en.wikipedia.org/wiki/Rylands_Library_Papyrus_P52",
    "32. [Academic Resource] Gill's Exposition of the Bible - Hebrews 11:35. https://www.biblestudytools.com/commentaries/gills-exposition-of-the-bible/hebrews-11-35.html",
    "33. [Reference] Wikipedia. Textus Receptus. https://en.wikipedia.org/wiki/Textus_Receptus",
    "34. [Reference] Wikipedia. Mark 16. https://en.wikipedia.org/wiki/Mark_16",
    "35. [Reference] Wikipedia. Ketuvim. https://en.wikipedia.org/wiki/Ketuvim",
    "36. [Reference] Wikipedia. Nehemiah. https://en.wikipedia.org/wiki/Nehemiah",
    "37. [Reference] Wikipedia. Against Apion. https://en.wikipedia.org/wiki/Against_Apion",
    "38. [Reference] Wikipedia. Book of Wisdom. https://en.wikipedia.org/wiki/Book_of_Wisdom",
    "39. [Reference] Wikipedia. Book of Tobit. https://en.wikipedia.org/wiki/Book_of_Tobit",
    "40. [Reference] Wikipedia. Additions to Daniel. https://en.wikipedia.org/wiki/Additions_to_Daniel",
    "41. [Reference] Wikipedia. Epistle of Jude. https://en.wikipedia.org/wiki/Epistle_of_Jude",
    "42. [Reference] Wikipedia. Luther Bible. https://en.wikipedia.org/wiki/Luther_Bible",
    "43. [Reference] Wikipedia. Westminster Confession of Faith. https://en.wikipedia.org/wiki/Westminster_Confession_of_Faith",
    "44. [Academic Resource] Early Christian Writings - Gnostic Texts. https://www.earlychristianwritings.com/gnostics.html",
    "45. [Encyclopedia] Britannica - Gnosticism. https://www.britannica.com/topic/Gnosticism",
    "46. [Catholic Reference] New Advent, Catholic Encyclopedia. 'The Gospel of Nicodemus.' https://www.newadvent.org/cathen/01111b.htm",
    "47. [Ministry Organization] Got Questions - Nag Hammadi Library. https://www.gotquestions.org/Nag-Hammadi.html",
    "48. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Gnosticism.' https://www.newadvent.org/cathen/06592a.htm",
    "49. [Ministry Organization] Got Questions - Gospel of Thomas. https://www.gotquestions.org/Gospel-of-Thomas.html",
    "50. [Academic Resource] Early Christian Writings - Gospel of Thomas. https://www.earlychristianwritings.com/thomas.html",
    "51. [Reference] Wikipedia. Sola scriptura. https://en.wikipedia.org/wiki/Sola_scriptura",
    "52. [Academic Resource] Early Christian Writings - Gospel of Judas. https://www.earlychristianwritings.com/gospeljudas.html",
    "53. [Academic Resource] Early Christian Writings - Gospel of Mary. https://www.earlychristianwritings.com/gospelmary.html",
    "54. [Academic Database] EBSCO Research Starters. 'The Gospel of Mary of Magdala.' https://www.ebsco.com/research-starters/literature-and-writing/gospel-mary-magdala-karen-l-king",
    "55. [Academic Resource] Early Christian Writings - Gospel of Philip. https://www.earlychristianwritings.com/gospelphilip.html",
    "56. [Ministry Organization] Got Questions - Gospel of Philip. https://www.gotquestions.org/Gospel-of-Philip.html",
    "57. [Apologetics Resource] Stand to Reason. 'Why Are the Gnostic Gospels Left Out?' https://www.str.org/w/why-are-the-gnostic-gospels-left-out-of-the-bible-",
    "58. [Reference] Wikipedia. Montanism. https://en.wikipedia.org/wiki/Montanism",
    "59. [Reference] Wikipedia. Donatism. https://en.wikipedia.org/wiki/Donatism",
    "60. [Reference] Wikipedia. Scroll. https://en.wikipedia.org/wiki/Scroll",
    "61. [Reference] Wikipedia. Nomina sacra. https://en.wikipedia.org/wiki/Nomina_sacra",
    "62. [Commentary] Bible Hub. 'Commentaries on 2 Peter 1:20.' https://biblehub.com/commentaries/2_peter/1-20.htm",
    "63. [Commentary] Bible Hub. 'Commentaries on Luke 10:7.' https://biblehub.com/commentaries/luke/10-7.htm",
    "64. [Academic Resource] Early Christian Writings - Main Collection. https://www.earlychristianwritings.com/",
    "65. [Religious Organization] Ligonier Ministries. 'The Apostolic Fathers.' https://learn.ligonier.org/articles/our-fourth-century-fathers",
    "66. [Catholic Encyclopedia] New Advent. 'The Apostolic Fathers.' https://www.newadvent.org/cathen/01637a.htm",
    "67. [Commentary] Bible Hub. 'Commentaries on John 10:35.' https://biblehub.com/commentaries/john/10-35.htm",
    "68. [Academic Resource] Early Christian Writings - The Didache. https://www.earlychristianwritings.com/didache.html",
    "69. [Ministry Organization] Got Questions - The Didache. https://www.gotquestions.org/Didache.html",
    "70. [Academic Resource] Early Christian Writings - 1 Clement. https://www.earlychristianwritings.com/1clement.html",
    "71. [Catholic Encyclopedia] New Advent - 1 Clement (Primary Source Text). https://www.newadvent.org/fathers/1010.htm",
    "72. [Academic Resource] Early Christian Writings - Shepherd of Hermas. https://www.earlychristianwritings.com/shepherd.html",
    "73. [Ministry Organization] Got Questions - Shepherd of Hermas. https://www.gotquestions.org/Shepherd-of-Hermas.html",
    "74. [Academic Resource] Early Christian Writings - Epistle of Barnabas. https://www.earlychristianwritings.com/barnabas.html",
    "75. [Ministry Organization] Got Questions - Epistle of Barnabas. https://www.gotquestions.org/Epistle-of-Barnabas.html",
    "76. [Catholic Encyclopedia] New Advent - Athanasius' 39th Festal Letter (Primary Source). https://www.newadvent.org/fathers/2806039.htm",
    "77. [Primary Source] Schaff, Creeds of Christendom. 'The Rule of Faith in Irenaeus, A.D. 180.' https://www.ccel.org/ccel/schaff/creeds2.iii.i.ii.html",
    "78. [Primary Source] Schaff, Creeds of Christendom. 'The Rule of Faith in Tertullian, A.D. 200.' https://www.ccel.org/ccel/schaff/creeds2.iii.i.iii.html",
    "79. [Reference] Wikipedia. Pope Innocent I. https://en.wikipedia.org/wiki/Pope_Innocent_I",
    "80. [Reference] Wikipedia. Council of Florence. https://en.wikipedia.org/wiki/Council_of_Florence",
    "81. [Reference] Wikipedia. Epistle to the Hebrews. https://en.wikipedia.org/wiki/Epistle_to_the_Hebrews",
    "82. [Reference] Wikipedia. Second Epistle of John. https://en.wikipedia.org/wiki/Second_Epistle_of_John",
    "83. [Encyclopedia] Britannica - Pseudepigrapha. https://www.britannica.com/topic/pseudepigrapha",
    "84. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Apocrypha.' https://www.newadvent.org/cathen/01601a.htm",
    "85. [Ministry Organization] Got Questions - Book of Enoch. https://www.gotquestions.org/book-of-Enoch.html",
    "86. [Ministry Organization] Got Questions - Assumption of Moses. https://www.gotquestions.org/Assumption-of-Moses.html",
    "87. [Reference] Wikipedia. Oral tradition. https://en.wikipedia.org/wiki/Oral_tradition",
    "88. [Academic Resource] Wikipedia - Enoch Calendar. https://en.wikipedia.org/wiki/Enoch_calendar",
    "89. [Ministry Organization] Got Questions - Book of Jubilees. https://www.gotquestions.org/book-of-Jubilees.html",
    "90. [Encyclopedia] Britannica - Book of Jubilees. https://www.britannica.com/topic/Book-of-Jubilees",
    "91. [Encyclopedia] Britannica - Testaments of the Twelve Patriarchs. https://www.britannica.com/topic/Testaments-of-the-Twelve-Patriarchs",
    "92. [Academic Resource] Christianity Stack Exchange - Why is the Book of Enoch not regarded as canonical? https://christianity.stackexchange.com/questions/8576/why-is-the-book-of-enoch-not-regarded-as-canonical",
    "93. [Reference] Wikipedia. Targum. https://en.wikipedia.org/wiki/Targum",
    "94. [Reference] Wikipedia. Baba Bathra. https://en.wikipedia.org/wiki/Baba_Bathra",
    "95. [Reference] Wikipedia. Sadducees. https://en.wikipedia.org/wiki/Sadducees",
    "96. [Reference] Wikipedia. Hellenistic Judaism. https://en.wikipedia.org/wiki/Hellenistic_Judaism",
    "97. [Reference] Wikipedia. Letter of Aristeas. https://en.wikipedia.org/wiki/Letter_of_Aristeas",
    "98. [Reference] Wikipedia. Maccabean Revolt. https://en.wikipedia.org/wiki/Maccabean_Revolt",
    "99. [Academic Resource] Early Christian Writings - New Testament Apocrypha. https://www.earlychristianwritings.com/apocrypha.html",
    "100. [Encyclopedia] Britannica - New Testament apocrypha. https://www.britannica.com/topic/New-Testament-apocrypha",
    "101. [Academic] World History Encyclopedia - New Testament Apocrypha. https://www.worldhistory.org/New_Testament_Apocrypha/",
    "102. [Academic Resource] Bible Study Tools - Apocrypha. https://www.biblestudytools.com/apocrypha/",
    "103. [Primary Source] Schaff, Creeds of Christendom. 'The Classification of Creeds.' https://www.ccel.org/ccel/schaff/creeds1.iii.v.html",
    "104. [Academic Resource] Early Christian Writings - Protoevangelium of James. https://www.earlychristianwritings.com/infancyjames.html",
    "105. [Ministry Organization] Got Questions - Protoevangelium of James. https://www.gotquestions.org/Protoevangelium-of-James.html",
    "106. [Academic Resource] Early Christian Writings - Infancy Gospel of Thomas. https://www.earlychristianwritings.com/infancythomas.html",
    "107. [Reference] Wikipedia. Books of Kings. https://en.wikipedia.org/wiki/Books_of_Kings",
    "108. [Academic Resource] Early Christian Writings - Gospel of Peter. https://www.earlychristianwritings.com/gospelpeter.html",
    "109. [Ministry Organization] Got Questions - Gospel of Peter. https://www.gotquestions.org/Gospel-of-Peter.html",
    "110. [Academic Resource] Early Christian Writings - Acts of Paul. https://www.earlychristianwritings.com/actspaul.html",
    "111. [Reference] Wikipedia. Book of Hosea. https://en.wikipedia.org/wiki/Book_of_Hosea",
    "112. [Academic Resource] Early Christian Writings - Acts of John. https://www.earlychristianwritings.com/actsjohn.html",
    "113. [Reference] Wikipedia. Book of Micah. https://en.wikipedia.org/wiki/Book_of_Micah",
    "114. [Reference] Wikipedia. Book of Zephaniah. https://en.wikipedia.org/wiki/Book_of_Zephaniah",
    "115. [Reference] Wikipedia. Book of Malachi. https://en.wikipedia.org/wiki/Book_of_Malachi",
    "116. [Reference] Wikipedia. Second Epistle to the Corinthians. https://en.wikipedia.org/wiki/Second_Epistle_to_the_Corinthians",
    "117. [Reference] Wikipedia. Epistle to the Philippians. https://en.wikipedia.org/wiki/Epistle_to_the_Philippians",
    "118. [Reference] Wikipedia. Second Epistle to the Thessalonians. https://en.wikipedia.org/wiki/Second_Epistle_to_the_Thessalonians",
    "119. [Reference] Wikipedia. Epistle to Titus. https://en.wikipedia.org/wiki/Epistle_to_Titus",
    "120. [Reference] Wikipedia. First Epistle of John. https://en.wikipedia.org/wiki/First_Epistle_of_John",
    "121. [Reference] Wikipedia. 2 Esdras. https://en.wikipedia.org/wiki/2_Esdras",
    "122. [Reference] Wikipedia. Psalm 151. https://en.wikipedia.org/wiki/Psalm_151",
    "123. [Reference] Wikipedia. Apocalypse of Peter. https://en.wikipedia.org/wiki/Apocalypse_of_Peter"
  ],
  timeline: canonTimeline,
  lastUpdated: "11-09-2025",
};