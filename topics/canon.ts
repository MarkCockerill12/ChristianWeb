import type { Topic, TimelineEvent } from "./types";

// Timeline data for biblical canon development
export const canonTimeline: TimelineEvent[] = [
  {
    id: 1,
    date: "c. 1445-1405 BC",
    title: "Moses Writes the Torah",
    period: "Old Testament Formation",
    color: "blue",
    description: `According to Jewish and Christian tradition, Moses authors the Pentateuch (Genesis, Exodus, Leviticus, Numbers, Deuteronomy) during Israel's wilderness wanderings. Genesis records events from creation to Joseph's death, while Exodus through Deuteronomy chronicles Israel's deliverance from Egypt and the giving of the Law. Most critical scholars instead date the Pentateuch's final form to the exilic or post-exilic period, drawing on earlier sources, and the 15th-century BC date assumes the early date of the Exodus.`,
    significance: `Establishes the foundational covenant documents and legal framework for Israel; first canonical Scripture`,
  },
  {
    id: 2,
    date: "c. 1010-970 BC",
    title: "David Composes Psalms",
    period: "Old Testament Formation",
    color: "blue",
    description: `The superscriptions attribute 73 of the 150 Psalms to King David, including [Psalm 23](https://www.biblegateway.com/passage/?search=Psalm+23&version=NIV) (The Lord is my shepherd) and many messianic psalms. These worship songs express the full range of human emotion in relationship with God.`,
    significance: `Establishes divinely inspired worship literature; many psalms are prophetically messianic`,
  },
  {
    id: 3,
    date: "c. 971-931 BC",
    title: "Solomon's Wisdom Literature",
    period: "Old Testament Formation",
    color: "blue",
    description: `Tradition credits King Solomon with much of Proverbs (practical wisdom for daily living), Ecclesiastes (the vanity of life apart from God), and Song of Songs (celebrating marital love), and the superscriptions attribute to him [Psalm 72](https://www.biblegateway.com/passage/?search=Psalm+72&version=NIV) and [Psalm 127](https://www.biblegateway.com/passage/?search=Psalm+127&version=NIV).`,
    significance: `Provides divinely inspired wisdom for practical Christian living and relationships`,
  },
  {
    id: 4,
    date: "c. 760-586 BC",
    title: "Major Prophetic Books",
    period: "Old Testament Formation",
    color: "blue",
    description: `Isaiah (c. 740-680 BC) writes 66 chapters of messianic prophecy and judgment. Jeremiah (c. 627-580 BC) authors his prophecy and Lamentations. Ezekiel (c. 593-571 BC) records visions from Babylonian exile. Daniel (set in 605-536 BC, and traditionally written then, though most critical scholars date its final form to c. 165 BC) writes apocalyptic prophecy.`,
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
    date: "c. 400 BC - 100 AD",
    title: "Hebrew Canon Takes Shape",
    period: "Canon Recognition",
    color: "green",
    description: `Later Jewish tradition held that prophetic revelation ceased after Malachi and the time of Artaxerxes. The Law was fixed first and the Prophets by the 2nd century BC, but the boundaries of the Writings were still discussed into the 1st century AD; Josephus (c. 95 AD) describes a closed collection of 22 books. The resulting canon has 24 books (equivalent to Protestant 39, divided differently), comprising the Law (Torah), Prophets (Nevi'im), and Writings (Ketuvim).`,
    significance: `The Law, the Prophets and "the Psalms" (Luke 24:44) were already recognised in Jesus' day, though scholars debate how firmly the third division was closed`,
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
    description: `On conservative dating, all 27 New Testament books are written in the apostolic era: Paul's letters (49-67 AD), Gospels of Matthew, Mark, Luke (50-85 AD), Acts (60-62 AD), Hebrews, James, Peter's letters, Jude (50-85 AD), John's Gospel and letters (85-95 AD), and Revelation (95-96 AD). Most critical scholars place Mark c. 70, Matthew and Luke-Acts c. 80-90, John c. 90-100, and some letters, such as 2 Peter, into the early 2nd century.`,
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
    description: `Usually regarded as the earliest known canonical list (a minority of scholars date it to the 4th century). Its opening is lost, but it evidently included Matthew and Mark, and it names Luke, John, Acts, 13 Pauline letters, Jude, two letters of John, and Revelation. It also accepts the Wisdom of Solomon and, with reservations, the Apocalypse of Peter, and rejects the Shepherd of Hermas as too recent. Hebrews, James, 1-2 Peter, and possibly 3 John are not mentioned.`,
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
    description: `According to the Decretum Gelasianum, whose attribution to this synod is disputed, Pope Damasus I approves a biblical canon including 73 books: 46 Old Testament books (including deuterocanonicals like Tobit, Judith, Wisdom, Sirach, Baruch, 1-2 Maccabees) plus 27 New Testament books. This represents early Catholic canonical position.`,
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
    description: `Scholar Jerome translates Bible into Latin Vulgate, completing Old Testament by 405 AD. Working from the Hebrew, Jerome distinguishes between 'canonical books' (Hebrew canon) and 'ecclesiastical books' (deuterocanonicals), placing latter in separate category for edification but not doctrine, though he translated several of them and later cited them. His contemporary Augustine accepted them as canonical.`,
    significance: `Scholarly distinction between levels of canonical authority; Hebrew text tradition preserved`,
  },
  {
    id: 15,
    date: "October 31, 1517 AD",
    title: "Luther's 95 Theses Posted",
    period: "Protestant Reformation",
    color: "red",
    description: `Martin Luther issues 95 theses on indulgences at Wittenberg. The theses do not address the canon, but the dispute they began led Luther, by the Leipzig Debate of 1519, to the principle later called 'sola scriptura' (Scripture as the supreme authority), which reopened the question of the Old Testament canon.`,
    significance: `Begins the Reformation debates that led Protestants to adopt the Hebrew canon for the Old Testament`,
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
    description: `Authorized Version commissioned by King James I includes deuterocanonical books in separate 'Apocrypha' section between Old and New Testaments. The Church of England's Article VI (1571) held that they are read "for example of life and instruction of manners" but not to establish doctrine.`,
    significance: `Establishes English-speaking Protestant standard while maintaining historical acknowledgment of disputed books`,
  },
  {
    id: 20,
    date: "1825-1827 AD",
    title: "British & Foreign Bible Society Decision",
    period: "Modern Era",
    color: "gray",
    description: `After a heated debate from 1825, the British & Foreign Bible Society resolves (1826) to exclude the Apocrypha from the Bibles it funds. This decision is followed by American Bible Society (1827) and other Protestant organizations, making 66-book Bibles standard in Protestant missions worldwide.`,
    significance: `Practical elimination of deuterocanonical books from Protestant Bible distribution; establishes global Protestant standard`,
  },
  {
    id: 21,
    date: "April 24, 1870 AD",
    title: "First Vatican Council - Dei Filius",
    period: "Modern Era",
    color: "darkred",
    description: `Vatican I's dogmatic constitution Dei Filius explicitly reaffirms Trent's list of books as sacred and canonical, teaching that they are inspired rather than merely approved by the Church. Three months later Pastor Aeternus defines papal infallibility.`,
    significance: `Reaffirms the Catholic 73-book canon as dogma`,
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
  description: `How can we tell which books are truly a part of the Bible if there are different thoughts on it?`,
  icon: "BookOpen",
  color: "blue",
  tags: ["Historical", "Scripture"],
  verses: [
    { reference: "2 Timothy 3:16-17", text: "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness, so that the servant of God may be thoroughly equipped for every good work." },
    { reference: "2 Peter 1:20-21", text: "Above all, you must understand that no prophecy of Scripture came about by the prophet’s own interpretation of things. For prophecy never had its origin in the human will, but prophets, though human, spoke from God as they were carried along by the Holy Spirit." },
    { reference: "Revelation 22:18-19", text: "I warn everyone who hears the words of the prophecy of this scroll: If anyone adds anything to them, God will add to that person the plagues described in this scroll. And if anyone takes words away from this scroll of prophecy, God will take away from that person any share in the tree of life and in the Holy City, which are described in this scroll." },
    { reference: "Psalm 119:160", text: "All your words are true; all your righteous laws are eternal." }
  ],
  tldr: `The church did not vote the Bible into existence. It recognised the books that were apostolic in origin, consistent with apostolic teaching and accepted across the churches, and most of the New Testament was never seriously disputed. Catholics, Orthodox and Protestants agree on the 27 books of the New Testament and differ over the Old Testament, where Protestants follow the Hebrew canon and Catholics and Orthodox include further books. The Gnostic gospels and other rejected works came later and fail the same tests.`,
  content: `
The word "canon" comes from the Greek word "kanon," meaning "rule" or "measuring rod"[^1][^2]. The biblical canon represents the authoritative collection of books that comprise Scripture[^3][^4].

### Criteria for Canonicity
Early church leaders used several key criteria to determine which books were truly inspired Scripture[^4]:

• **Apostolicity:** Written by apostles or their close associates[^5][^4]

• **Orthodoxy:** Consistent with established apostolic teaching[^6][^7]

• **Catholicity:** Accepted by churches universally (not just in one region)[^7]

• **Antiquity:** Written during the apostolic era (1st century AD)[^2][^7]

<?viz canon/counts?>

<?viz canon/early-lists?>

`,

  subtopics: [
    {
      id: "did-constantine-choose-the-bible",
      title: "Did Constantine or the Council of Nicaea Choose the Bible?",
      tags: ["Objections", "History"],
      content: `
**The claim.** The Emperor Constantine, or the Council of Nicaea in 325, chose which books went into the Bible and suppressed the rest. Dan Brown's novel *The Da Vinci Code* carried a version of this to millions of readers, with Constantine suppressing Gnosticism for political reasons[^8][^9]. The idea that the canon was settled at Nicaea seems to come mainly from Voltaire, who popularised a story that the books were placed on an altar and those that did not fall off were kept[^10].

**What the council actually did.** There is no record of any discussion of the biblical canon at Nicaea. The council's letter and its surviving canons deal with Arius's teaching, the date of Easter and church discipline, and they contain no list of books[^11].

**The core books were recognised long before.**

* **Irenaeus**, around 180, argues that there are exactly four Gospels, calling them the "four pillars" of the church[^12].
* **The Muratorian Fragment**, usually dated to the late second century though some scholars place it later, lists most of the New Testament, and rejects the Shepherd of Hermas as written "very recently, in our times"[^13].
* **Eusebius**, writing about the time of the council, already sorts the books into those accepted, those disputed and those rejected. The four Gospels, Acts and Paul's letters are among the accepted, while James, Jude, 2 Peter and others are recorded as disputed[^14][^2].

**After Nicaea.** The first known list of exactly the 27 books of the New Testament comes from Athanasius in his Easter letter of 367, more than forty years after the council: "These are fountains of salvation"[^15][^16]. Regional councils at Hippo and Carthage followed in 393 and 397, as set out under the deuterocanonical books.

**Constantine's actual part.** Eusebius preserves a letter in which Constantine orders "fifty copies of the sacred Scriptures" for the churches of his new capital[^17]. Ordering copies is not choosing the contents. Nothing in the sources has him deciding which books belonged.

**What is fair in the objection.** The canon did take time to settle, and some books were genuinely disputed for centuries. It was a historical process that involved human judgment, and Christians should say so. The rejected Gospels were set aside on grounds of date and teaching, as set out under the Gnostic Gospels. Bart Ehrman, an agnostic critic of Christianity, wrote *Truth and Fiction in The Da Vinci Code* to correct claims of this kind[^18].
`,
    },
    {
      id: "written-by-men",
      title: "\"The Bible Was Written by Men\"",
      tags: ["Objections"],
      content: `
**The objection.** The Bible was written by fallible human beings, so it cannot be the word of God.

**Christians agree that men wrote it.** The Bible says so itself. Luke explains that he "carefully investigated everything from the beginning" before writing (Luke 1:3). Paul writes in his own large handwriting (Galatians 6:11), loses his temper and forgets whom he baptised (1 Corinthians 1:16). The styles of Isaiah, Amos, Mark and John are visibly different. Most Christians do not believe that God dictated the text, and this is a real difference from how the Quran is understood.

**The doctrine is that both are true.** "Prophets, though human, spoke from God as they were carried along by the Holy Spirit" (2 Peter 1:21). "All Scripture is God-breathed" (2 Timothy 3:16), where the Greek is θεόπνευστος (*theopneustos*, "breathed out by God")[^19][^20]. The Second Vatican Council states the Catholic form of it: "God chose men and while employed by Him they made use of their powers and abilities", so that "they, as true authors, consigned to writing everything and only those things which He wanted"[^21]. If God exists and made human minds, there is no obvious reason why he could not communicate through them.

**"Written by men" does not mean unreliable.** Every history book, scientific paper and court record was also written by people. Saying who wrote something does not show whether it is true, which is the error set out in [Is Belief in God Reasonable?](/categories/is-belief-reasonable#section-born-into-it). The fair questions are whether these men were in a position to know, and whether what they wrote holds up. The [archaeology](/categories/archaeological), [manuscripts](/categories/bible-translations#section-manuscripts) and [supposed contradictions](/categories/contradictions) are where that can be tested.

**What Christians do not claim.** Copyists and translators have made mistakes, and those mistakes can be seen and corrected by comparing manuscripts. The claim of inspiration concerns what the original authors wrote. Christians also differ among themselves over how far inerrancy extends, and the doctrine cannot be proved from a single verse. It is a conclusion Christians reach because they first have reason to trust Jesus, who treated Scripture as the word of God (Matthew 5:18; John 10:35).
`,
    },
    {
      id: "deuterocanonical-books",
      title: "Deuterocanonical Books",
      tags: ["Catholic", "Apocrypha"],
      content: `**Overview:** The Catholic Bible includes additional texts, often referred to as the Deuterocanonical books, bringing the total to 73[^22]. These books include Tobit, Judith, Wisdom of Solomon, Sirach (Ecclesiasticus), Baruch, and 1 and 2 Maccabees, among others. Understanding their history reveals why Protestant scholars maintain these texts should not be considered Scripture.

      **Historical Development of the Deuterocanonical Debate**


      **Jewish Canon Foundation:** Jewish tradition regarded prophecy as having ceased after Malachi, and by the late 1st century AD the Hebrew Bible (Tanakh) was recognised as 24 books (equivalent to the Protestant 39 Old Testament books), although scholars debate how early the third division, the Writings, was closed[^23][^24][^25][^26][^27]. Jewish authorities never accepted the deuterocanonical books as Scripture, viewing them as valuable historical and devotional literature but not divinely inspired[^28].

      **Septuagint Inclusion (3rd-1st century BC):** When the Hebrew Bible was translated into Greek (the Septuagint), some manuscripts included these additional books. The surviving complete Greek Bibles are Christian codices of the 4th and 5th centuries, such as Vaticanus, Sinaiticus and Alexandrinus, and each includes a somewhat different selection of these books[^29]. Importantly, inclusion in a translation does not establish canonicity, as the translators were preserving culturally significant texts, not declaring them Scripture[^30].

      **Early Church Period (1st-4th centuries):** Church fathers had mixed opinions about these books. Jerome (347-420 AD), the translator of the Latin Vulgate, explicitly distinguished between canonical books (the Hebrew canon) and those "read for edification" (the Apocrypha) but not for establishing doctrine. Augustine, by contrast, accepted them, and the councils of Hippo (393) and Carthage (397) included them in their lists[^31][^32].

      **Council of Trent's Decision (1546 AD):** The Council of Florence had already listed these books in 1442, and the Council of Trent defined them as canonical dogma in response to Protestant challenges. Protestants argue that this settled a question the early church had left open; Catholics and Orthodox reply that the books were read as Scripture by the church from the beginning, since the Greek Old Testament used by the apostles' churches contained them[^33][^34][^35][^36].

      **Specific Problems with Individual Deuterocanonical Books**


      **Tobit (circa 200 BC):**

      • **Magical practices:** Tobit 6:5-8 has the angel Raphael prescribe burning fish liver and heart to drive away demons, and using fish gall to cure blindness, which Protestant critics regard as closer to folk magic than to biblical religion; Catholic commentators read the remedies as means God chose to use through the angel[^37]

    • **Salvation by works:** Tobit 12:9 states "almsgiving delivers from death and purges away every sin," which Protestants read as contradicting salvation by grace through faith ([Ephesians 2:8-9](https://www.biblegateway.com/passage/?search=Ephesians+2%3A8-9&version=NIV)). Catholic interpreters compare it with Daniel 4:27 and Proverbs 16:6, and read almsgiving as the fruit of grace rather than a rival to it[^38][^39]

      **Judith (circa 150 BC):**

      • **Historical errors:** Claims Nebuchadnezzar ruled the Assyrians from Nineveh, when historically he was king of Babylon[^40]. The book is widely seen as a historical novel, not factual history[^41].

      **Wisdom of Solomon (circa 50 BC):**

      • **Greek philosophical influence:** Contains heavy influence from Platonic philosophy, and Wisdom 8:19-20 is often read as teaching the pre-existence of souls, which would contradict biblical anthropology, although some interpreters dispute that reading[^42]

      • **False attribution:** Claims Solomon as author but was written centuries after his death, making it pseudepigraphical[^43]

      **2 Maccabees (circa 124 BC):**

    • **Prayers for the dead:** 2 Maccabees 12:44-46 supports praying and making offerings for the dead, contradicting the biblical teaching that judgment is final after death ([Hebrews 9:27](https://www.biblegateway.com/passage/?search=Hebrews+9%3A27&version=NIV))[^44][^45]. This text is a primary basis for the Catholic doctrine of Purgatory[^46][^32].

      **Why Jesus and the Apostles Never Endorsed These Books**

    When Jesus referred to "the Law of Moses, the Prophets and the Psalms" ([Luke 24:44](https://www.biblegateway.com/passage/?search=Luke+24%3A44&version=NIV)), Protestant interpreters take Him to be referencing the threefold Hebrew canon, with the Psalms heading the Writings[^47][^48]. The New Testament contains hundreds of Old Testament quotations, but it never quotes the deuterocanonical books as inspired Scripture. However, it does contain allusions to them. For example, [Hebrews 11:35](https://www.biblegateway.com/passage/?search=Hebrews+11%3A35&version=NIV) ("...others were tortured, refusing to accept release...") is widely seen as a clear allusion to the martyrdom of Eleazar and the seven brothers in 2 Maccabees 6–7[^49]. This shows the apostles were aware of these books but did not grant them the authority of Scripture.

        **Daniel and Esther Additions:**
        • **Additions to Daniel:** Includes the **Susanna** narrative (where Daniel delivers Susanna from false adultery accusations), **Bel and the Dragon** (containing two stories demonstrating the vanity of idols and Daniel's survival in the lions' den), and the **Prayer of Azariah and Song of the Three Holy Children** (liturgical prayers by the three youths in the furnace)[^50].
        • **Additions to Esther:** Six chapters of prayers, dream interpretations, and letters inserted to give the book a more explicitly religious tone[^51].

        **Eastern Orthodox and Slavonic Additions (Anagignoskomena):**
        • **1 Esdras:** A Greek retelling of the historical events from Josiah's passover through Ezra's reforms[^52][^53].
        • **Prayer of Manasseh:** A short, beautifully composed penitential prayer attributed to King Manasseh of Judah after his captivity in Babylon[^54][^55].
        • **Psalm 151:** A short psalm celebrating David's choice as king and his combat with Goliath, found in the Greek Septuagint but not the Hebrew Masoretic text[^56][^57].
        • **3 & 4 Maccabees:** 3 Maccabees describes the persecution of Alexandrian Jews under Ptolemy IV (not about the Maccabean revolt)[^58][^59], and 4 Maccabees is a philosophical treatise on religious reason conquering passion using the Maccabean martyrs as exemplars[^60][^61].

        **Ethiopian Orthodox Canon Additions:**
        • **1-3 Meqabyan:** Three books of Ethiopian Maccabees outlining struggles against idolatrous kings (Meqabis), which are completely separate from the Greek 1-2 Maccabees[^62][^63].
        • **Josippon:** A chronicle of Jewish history from Adam through the Roman wars, valued as historical literature[^64][^65].

**See also:** [Roman Catholic Church (Branches of Christianity)](/categories/branches#section-romanCatholic).
`
    },
    {
      id: "gnostic-gospels",
      title: "Gnostic Gospels",
      tags: ["Gnostic"],
      content: `**Founded:** 2nd-4th centuries AD (100-300+ years after Christ)[^66]


      **Key Characteristics:**

      • **Secret knowledge:** Claim salvation comes through hidden gnosis (knowledge) rather than faith in Christ's sacrifice[^67][^66]

      • **Dualistic heresy:** Teach the material world is evil and created by a lesser god (Demiurge), contradicting [Genesis 1:31](https://www.biblegateway.com/passage/?search=Genesis+1%3A31&version=NIV)[^68][^69]

      • **Pseudonymous authorship:** Falsely claim apostolic authors (Thomas, Judas, Mary) to gain credibility[^70]

      • **Docetic Christology:** Many deny Jesus had a real physical body, claiming He was a phantom or spirit (contradicting [1 John 4:2-3](https://www.biblegateway.com/passage/?search=1+John+4%3A2-3&version=NIV))[^71][^72]


      **Detailed Examples of Invalidity:**

<?viz canon/gospel-dates?>



      **Gospel of Thomas (circa 50-140 AD):**

      • **Anti-material bias:** Saying 114 claims "every woman who will make herself male will enter the Kingdom of Heaven," reflecting Gnostic hatred of physical creation[^73]

      • **Secret knowledge heresy:** Saying 1 promises immortality to those who find the "interpretation" of Jesus' secret sayings, contradicting salvation by faith[^74]


      **Gospel of Judas (circa 180 AD):**

      • **Moral inversion:** Portrays Judas' betrayal as a noble act to help Jesus escape his physical body, directly contradicting Jesus' condemnation in [Matthew 26:24](https://www.biblegateway.com/passage/?search=Matthew+26%3A24&version=NIV)[^75]

      • **Demiurge heresy:** Claims the God of the Old Testament is an inferior creator deity, not the true God[^76]


      **Gospel of Mary (circa 180-200 AD):**

      • **Gnostic revelations:** Claims Mary Magdalene received special, secret revelations unavailable to male apostles, challenging apostolic authority[^77]

      • **Anti-body teachings:** Promotes escape from material existence ("sin...is not in the nature") rather than resurrection hope[^78]


      **Gospel of Philip (circa 200-250 AD):**

      • **Sacramental magic:** Claims salvation depends on secret rituals in a "bridal chamber" rather than faith in Christ[^79]

      • **Sensationalism:** Contains the reference to Mary Magdalene as Jesus' "companion," which has been fictionalized in modern works but reflects Gnostic (not historical) ideas[^80]


      **Why Rejected:** These texts systematically contradict apostolic teaching on creation ([Genesis 1:31](https://www.biblegateway.com/passage/?search=Genesis+1%3A31&version=NIV)), salvation by grace ([Ephesians 2:8-9](https://www.biblegateway.com/passage/?search=Ephesians+2%3A8-9&version=NIV)), Christ's physical reality ([1 John 4:2-3](https://www.biblegateway.com/passage/?search=1+John+4%3A2-3&version=NIV)), and were written 100-300+ years after the apostles, failing every test of canonicity[^81].

        **Apocryphon of John (Secret Revelation of John) (circa 120-180 AD):**
        • **Cosmological dualism:** Outlines Gnostic cosmology, claiming the true God did not create the universe, but rather an inferior, blind deity called Yaldabaoth (the demiurge)[^82].
        • **Why rejected:** Direct conflict with the monotheistic biblical doctrine of creation ([Genesis 1:1](https://www.biblegateway.com/passage/?search=Genesis+1%3A1&version=NIV)) and the goodness of the physical world[^83].

        **Gospel of Truth (circa 140-180 AD):**
        • **Valentinian homily:** A meditation on Gnostic truth that treats ignorance of the Father as a physical, dark entity (Error) that must be dispelled by secret knowledge[^84][^85].
        • **Why rejected:** Lacks historical narrative, presents salvation as cognitive awakening rather than redemption from sin, and was written long after the apostolic era[^86].

        **Pistis Sophia (circa 250-300 AD):**
        • **Dialogue of Sophia:** Records post-resurrection teachings of Jesus to His disciples concerning the fall and liberation of Sophia (wisdom) through celestial levels[^87][^88].
        • **Why rejected:** Written centuries after Christ, introduces complex astrological/pantheistic concepts foreign to the Apostles, and rejects historical redemption[^89].

**See also:** [Pagan Origins](/categories/pagan-origins), [Other Major Errors (Heresies and Fallacies)](/categories/heresies-and-fallacies#section-other-heresies).
`
    },
    {
      id: "early-christian-writings",
      title: "Early Christian Writings (Apostolic Fathers)",
      tags: ["Orthodox"],
      content: `**Overview:** This refers to a group of orthodox writings from the late 1st and early 2nd centuries. While theologically valuable, the early church recognized them as important pastoral letters but not inspired Scripture[^90][^91].


      **Key Characteristics:**

      • **Orthodox theology:** Generally consistent with apostolic teaching and combat Gnosticism[^72]

      • **Non-apostolic authorship:** Not written by apostles, but by the next generation of church leaders[^92]

      • **Self-aware status:** The authors often quote the apostles as a higher authority, showing they did not see their own writings as equal to Scripture[^93]


      **Detailed Analysis of Key Works:**


      **The Didache (circa 50-120 AD):**

      • **Church manual nature:** A practical "church-order" manual for new converts, providing instructions on baptism, fasting, and the "Two Ways" (life and death)[^94]

      • **Why not canonical:** It is anonymous and, while orthodox, was seen as a summary of apostolic teaching rather than a new revelation itself[^95]


      **1 Clement (circa 96 AD):**

      • **Ecclesiastical authority:** Written by Clement of Rome to the Corinthian church to address a dispute. It calls for order and respect for appointed leaders[^96]

      • **Why not canonical:** Clement himself distinguishes his letter from the "epistle of the blessed Paul" (which he cites as binding authority), showing he did not consider his own letter to be Scripture[^97]


      **Shepherd of Hermas (circa 100-140 AD):**

      • **Allegorical visions:** A popular book of elaborate visions and allegories, urging repentance[^98]

      • **Why not canonical:** It was popular, but its late date and promotion of a "second repentance" (a post-baptismal chance) were seen as a development beyond apostolic teaching[^99]


      **Epistle of Barnabas (circa 70-130 AD):**

<?viz canon/manuscripts?>


      • **Allegorical excess:** Uses extreme, non-literal allegorical interpretations of the Old Testament that were not characteristic of apostolic writing[^100]

      • **Anti-Jewish polemic:** Contains a harsh polemic against Judaism that was deemed inconsistent with the pastoral tone of the apostles[^101]


      **Why Not Canonical:** These works fail the test of apostolic authorship. The early church read them for edification (Athanasius called them "books merely read") but clearly distinguished them from the inspired, foundational apostolic Scriptures[^102].

      **Letters of Ignatius of Antioch (circa 110 AD):**
      • **Ignatian epistles:** Seven letters written by Ignatius while in chains en route to Rome. They address church order, the authority of the bishop, and combat early docetism[^103][^104].
      • **Why not canonical:** Ignatius explicitly distinguishes himself from the apostles, saying "I do not, as Peter and Paul, issue commandments unto you. They were apostles; I am but a condemned man"[^105].

      **Polycarp's Writings and Martyrdom (circa 110-155 AD):**
      • **Apostolic disciple legacy:** Polycarp's *Letter to the Philippians* exhorts righteousness, and the *Martyrdom of Polycarp* provides the earliest account of a post-NT martyr's death[^106][^107].
      • **Why not canonical:** These are valuable early records, but are pastoral and historical accounts, not written by apostles or containing unique divine revelation[^108].

      **Epistle to Diognetus (circa 130-200 AD):**
      • **Apologetic letter:** An elegant defense of the Christian faith to a pagan inquirer, describing Christians as "living in the world but not of it"[^109].
      • **Why not canonical:** The letter is anonymous, post-apostolic, and is a work of human apologetics rather than inspired, authoritative scripture[^110][^111].
`
    },
    {
      id: "pseudepigraphical-works",
      title: "Pseudepigraphical Works",
      tags: ["False-Authorship"],
      content: `**Overview:** "Pseudepigrapha" (Gr. "false writings") are texts deliberately and falsely attributed to ancient biblical figures (Enoch, Moses, patriarchs) to give them an aura of authority[^112]. They were written centuries after their claimed authors lived[^113].


      **New Testament Allusions (Crucial Additions)**

  Despite being non-canonical, two pseudepigraphical books are famously referenced in the New Testament book of Jude:

  • **1 Enoch:** [Jude 14-15](https://www.biblegateway.com/passage/?search=Jude+1%3A14-15&version=NIV) directly quotes 1 Enoch 1:9 ("See, the Lord is coming with thousands upon thousands of his holy ones..."), citing it as a prophecy[^114][^115]. Jude uses this prophecy as a true statement, just as Paul quoted pagan poets ([Acts 17:28](https://www.biblegateway.com/passage/?search=Acts+17%3A28&version=NIV)), without canonizing the entire work.

  • **Assumption of Moses:** [Jude 9](https://www.biblegateway.com/passage/?search=Jude+1%3A9&version=NIV) alludes to a dispute between Michael and the devil over Moses' body ("...but even the archangel Michael, when he was disputing with the devil about the body of Moses..."). This event is not found in the Old Testament but was recorded in the non-extant ending of the Assumption of Moses[^116].


      **Detailed Examination of Major Works:**


      **1 Enoch (3rd century BC - 1st century AD):**

  • **Elaborate angelology:** Presents detailed angel hierarchies and names (like Uriel, Raguel) and stories of the "Watchers" (fallen angels) that go far beyond [Genesis 6](https://www.biblegateway.com/passage/?search=Genesis+6&version=NIV)[^117][^118][^113]

      • **Astronomical errors:** Contains inaccurate calendrical (a 364-day calendar) and astronomical information[^119] (Note: The Ethiopian Orthodox Church does consider 1 Enoch to be canonical).

      **Book of Jubilees (circa 160-150 BC):**

      • **Calendar innovation:** Promotes a 364-day solar calendar, contradicting the lunar-based calendar used in canonical Jewish practice[^120]

      • **Legalistic additions:** Claims to be a secret revelation from an angel to Moses, adding numerous laws not found in the Pentateuch[^121]

      **Testament of the Twelve Patriarchs (2nd century BC to 2nd century AD, dating disputed):**

      • **Composite work:** A collection of "last words" from Jacob's twelve sons, containing moral exhortations but also later Christian interpolations (additions)[^122].



      **Why These Works Are Invalid (despite NT allusions):**

  The pseudepigraphical works violate the fundamental principle of truthfulness; their deceptive authorship alone disqualifies them, as God cannot lie ([Titus 1:2](https://www.biblegateway.com/passage/?search=Titus+1%3A2&version=NIV)). The New Testament authors' allusions to them (like Jude) show awareness of contemporary literature to make a point, not a declaration of the entire work's divine inspiration[^123].

      **Psalms of Solomon (circa 50 BC):**
      • **Pharisaic messianism:** 18 psalms focusing on the Maccabean corruption, the Roman invasion of Jerusalem, and expectations of a militant Messiah[^124].
      • **Why rejected:** Written during the intertestamental period when prophecy was recognized as ceased, and falsely attributed to Solomon to gain authority[^125].

      **Letter of Aristeas (circa 2nd century BC):**
      • **Septuagint origin story:** A book describing the translation of the Hebrew Law into Greek by 72 elders under Ptolemy II Philadelphus[^126][^127].
      • **Why rejected:** A pseudepigraphal work by a Jewish author writing in the persona of a Greek courtier, serving as historical romance rather than inspired prophetic revelation[^128].

      **Martyrdom and Ascension of Isaiah (circa 1st-2nd century AD):**
      • **Isaiah's death:** Details King Manasseh sawing the prophet Isaiah in half (referenced in [Hebrews 11:37](https://www.biblegateway.com/passage/?search=Hebrews+11%3A37&version=NIV))[^129][^130].
      • **Why rejected:** Falsely attributed, contains later Gnostic-leaning Christian interpolations, and post-dates the prophetic era[^131].

**See also:** [Where Traditional and Critical Scholarship Diverge (The 66 Books)](/categories/bible-books#section-traditional-and-critical).
`
    },
    {
      id: "new-testament-apocrypha",
      title: "New Testament Apocrypha",
      tags: ["Apocryphal", "Legendary"],
      content: `**Overview:** A large collection of "gospels," "acts," and "epistles" written from the 2nd century onward. They are not the same as the Gnostic gospels; rather than being heretical, they are often legendary, fan-fiction-like accounts meant to "fill in the blanks" of the canonical stories[^132].


      **Key Characteristics:**

      • **Legendary content:** Focus on sensational, fantastic, or sentimental stories (e.g., Jesus's childhood, apostles' adventures)[^133]

      • **Late composition:** Written well after the apostolic period (2nd-5th centuries)[^134]

      • **Pseudonymous authorship:** Falsely claim apostolic authors for credibility[^135]

      • **Church rejection:** Consistently rejected by early church leaders as forgeries or "pious frauds"[^136]


      **Detailed Analysis of Major Apocryphal Works:**


      **Protoevangelium of James (circa 150 AD):**

      • **Legendary embellishments:** "Fills in" Mary's childhood, claiming she was a temple virgin, and details Jesus's birth in a cave[^137][^138]

      • **Perpetual virginity:** The earliest written source for the belief that Mary remained a virgin during and after Jesus's birth. The doctrine is held by Catholic and Orthodox Christians, and was affirmed by Luther, Calvin and Zwingli, but most modern Protestants hold that Scripture does not teach it[^138][^46]

      **Infancy Gospel of Thomas (circa 180-200 AD):**

      • **Vindictive child Jesus:** Portrays young Jesus as a petulant and vengeful child, causing blindness or death to children who annoy him, and then sometimes healing them[^139]

  • **Character contradictions:** This portrait of a sinfully prideful child completely contradicts the biblical portrait of Jesus's sinless character ([Hebrews 4:15](https://www.biblegateway.com/passage/?search=Hebrews+4%3A15&version=NIV)) and wisdom ([Luke 2:52](https://www.biblegateway.com/passage/?search=Luke+2%3A52&version=NIV))[^140][^141]

      **Gospel of Peter (circa 150-200 AD):**

      • **Docetic elements:** Portrays Jesus on the cross as feeling no pain and crying out "My power, my power, you have left me" (instead of "My God, my God..."), implying his divinity, not humanity, was present[^142]

      • **Fantastic resurrection:** Describes Jesus emerging from the tomb as a giant whose head reaches the clouds, supported by two other giants (angels), and followed by a talking cross[^143]


      **Acts of Paul (circa 180-190 AD):**

      • **Legendary adventures:** Contains fictional stories of Paul's encounters, including a lion that Paul baptises and that later refuses to attack him in the arena at Ephesus, and the story of Thecla and other miracles not recorded in the Bible[^144]

  • **Ascetic heresy:** Promotes extreme celibacy and anti-marriage teachings contrary to Paul's balanced view in [1 Corinthians 7](https://www.biblegateway.com/passage/?search=1+Corinthians+7&version=NIV)[^145][^146]


      **Acts of John (circa 150-200 AD):**

      • **Gnostic docetism:** Claims Jesus only appeared to suffer on the cross while his spirit was "dancing" above, a classic Gnostic rejection of the physical suffering and resurrection[^147]


      **Why These Works Are Clearly Invalid:**

      The New Testament apocrypha fail every test of canonicity. Their late dates, false authorships, theological errors (especially Gnosticism and docetism), and fantastic, legendary content stand in stark contrast to the sober, historical, and theologically unified accounts of the 27 canonical books[^16].

      **Gospel of Nicodemus (including Acts of Pilate) (circa 4th century AD):**
      • **Harrowing of Hell:** Details Jesus descending into Hades after the crucifixion, breaking its gates, and rescuing Adam and the Old Testament saints[^148].
      • **Why rejected:** Late legendary writing containing fantastical descriptions of the underworld, with no historical or apostolic validation[^149][^113].

      **Acts of Peter (circa 150-200 AD):**
      • **Quo Vadis legend:** Contains the story of Peter fleeing Rome, meeting a vision of Jesus, and returning to be crucified upside down, as well as stories of Peter resurrecting smoked fish[^150][^151].
      • **Why rejected:** Written long after Peter's death, containing legendary embellishments and severe ascetic biases foreign to apostolic letters[^152].

      **Acts of Thomas (circa 200-225 AD):**
      • **Mission to India:** Details Thomas's travels and miracles in India, and contains Gnostic theology (such as the *Hymn of the Pearl*)[^153][^154].
      • **Why rejected:** A late pseudepigraphal romance containing heretical Gnostic concepts, including rejection of physical marriage[^155].

      **Apocalypse of Peter (circa 100-150 AD):**
      • **Visions of hell:** Contains detailed, graphic accounts of specific punishments in hell for various sins, alongside descriptions of heaven[^156][^157].
      • **Why rejected:** It was accepted by some in the 2nd century (the Muratorian Fragment lists it with reservations and Clement of Alexandria cited it), but it was not apostolic, and its imagery of the underworld draws on Greek and Jewish apocalyptic traditions rather than on apostolic teaching[^158][^13].

      **Epistle to the Laodiceans (circa 4th century AD):**
      • **Forged Pauline epistle:** A short collection of Pauline phrases compiled to forge the "letter from Laodicea" mentioned in [Colossians 4:16](https://www.biblegateway.com/passage/?search=Colossians+4%3A16&version=NIV)[^159][^160].
      • **Why rejected:** A compilation of phrases from Paul's genuine letters designed to supply the "missing" letter. Jerome reported that it was rejected by all, yet it was copied in many medieval Latin Bibles before being excluded[^161][^159].

**See also:** [Heresy and Legend in the Quran (Islam)](/categories/islam#section-quran-sources).
`
    },
  ],
            sources: [
    "1. [Encyclopedia] Britannica - Biblical Literature: The Biblical Canon. https://www.britannica.com/topic/biblical-literature/The-biblical-canon",
    "2. [Creationist] Answers in Genesis - Why 66 Books? https://answersingenesis.org/the-word-of-god/why-66-books/",
    "3. [Academic] Oxford Bibliographies. 'Biblical Canon.' https://www.oxfordbibliographies.com/abstract/document/obo-9780195393361/obo-9780195393361-0017.xml",
    "4. [Christian Source] BibleQuestions.info. 'Criteria for Canonicity.' https://biblequestions.info/2019/08/10/what-are-the-criteria-for-a-book-to-be-canonical/",
    "5. [Apologetics] The Gospel Coalition. 'The Biblical Canon.' https://www.thegospelcoalition.org/essay/the-biblical-canon/",
    "6. [Christian Source] Arlington Catholic Herald. Where did the New Testament canon come from? https://www.catholicherald.com/?p=13388",
    "7. [Apologetics] Department of Christian Defense. Corralling the New Testament Canon. https://christiandefense.org/general/corralling-the-new-testament-canon/",
    "8. [Academic] Ehrman. Truth and Fiction in The Da Vinci Code., 2004. https://doi.org/10.1093/oso/9780195181401.001.0001",
    "9. [Wikipedia] 'The Da Vinci Code.' https://en.wikipedia.org/wiki/The_Da_Vinci_Code",
    "10. [Wikipedia] 'First Council of Nicaea.' https://en.wikipedia.org/wiki/First_Council_of_Nicaea",
    "11. [Primary Source] The First Council of Nicaea: letter and canons, in Nicene and Post-Nicene Fathers. New Advent. https://www.newadvent.org/fathers/3801.htm",
    "12. [Primary Source] Irenaeus, Against Heresies III.11, in Ante-Nicene Fathers, vol. 1. Christian Classics Ethereal Library. https://www.ccel.org/ccel/schaff/anf01.ix.iv.xii.html",
    "13. [Primary Source] The Muratorian Fragment, trans. Bruce Metzger. Early Christian Writings. https://www.earlychristianwritings.com/text/muratorian-metzger.html",
    "14. [Primary Source] Eusebius, Church History III.25, in Nicene and Post-Nicene Fathers. Christian Classics Ethereal Library. https://www.ccel.org/ccel/schaff/npnf201.iii.viii.xxv.html",
    "15. [Primary Source] Athanasius, Festal Letter 39 (367), in Nicene and Post-Nicene Fathers. Christian Classics Ethereal Library. https://www.ccel.org/ccel/schaff/npnf204.xxv.iii.iii.xxv.html",
    "16. [Wikipedia] Development of the New Testament canon. https://en.wikipedia.org/wiki/Development_of_the_New_Testament_canon",
    "17. [Primary Source] Eusebius, Life of Constantine IV.36. New Advent. https://www.newadvent.org/fathers/25024.htm",
    "18. [Wikipedia] 'Bart D. Ehrman.' https://en.wikipedia.org/wiki/Bart_D._Ehrman",
    "19. [Lexicon] Bible Hub. Greek 2315, theopneustos. https://biblehub.com/greek/2315.htm",
    "20. [Commentary] Commentaries on 2 Timothy 3:16. Bible Hub. https://biblehub.com/commentaries/2_timothy/3-16.htm",
    "21. [Primary Source] Second Vatican Council, Dei Verbum, section 11 (1965). Holy See. https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651118_dei-verbum_en.html",
    "22. [Primary Source] USCCB - Books of the Bible. https://www.usccb.org/bible/books-of-the-bible",
    "23. [Encyclopedia] Britannica - Tanakh. https://www.britannica.com/topic/Tanakh",
    "24. [Encyclopedia] 'BIBLE CANON.' Jewish Encyclopedia (1906). https://jewishencyclopedia.com/view.jsp?artid=1025&letter=B&search=Bible%20canon",
    "25. [Primary Source] Babylonian Talmud, Bava Batra 14b. Sefaria. https://www.sefaria.org/Bava_Batra.14b",
    "26. [Wikipedia] 'Baba Bathra.' https://en.wikipedia.org/wiki/Baba_Bathra",
    "27. [Wikipedia] 'Development of the Hebrew Bible canon.' https://en.wikipedia.org/wiki/Development_of_the_Hebrew_Bible_canon",
    "28. [Encyclopedia] Britannica - Old Testament: The Apocrypha. https://www.britannica.com/topic/Old-Testament/The-Apocrypha",
    "29. [Apologetics] Christianity.com - What is the Septuagint? https://www.christianity.com/wiki/bible/what-is-the-septuagint.html",
    "30. [Academic] Logos. 'What Is the Septuagint and Is It Valuable for Bible Study?' https://www.logos.com/grow/what-is-the-septuagint-and-why-is-it-valuable-for-bible-study/",
    "31. [Encyclopedia] Britannica - Saint Jerome: Biblical scholar. https://www.britannica.com/biography/Saint-Jerome/Biblical-scholar",
    "32. [Encyclopedia] New Advent - Canon of the Old Testament. https://www.newadvent.org/cathen/03267a.htm",
    "33. [Encyclopedia] Britannica - Council of Trent. https://www.britannica.com/event/Council-of-Trent",
    "34. [Primary Source] Council of Basel-Ferrara-Florence (1431-45). Papal Encyclicals Online. https://www.papalencyclicals.net/councils/ecum17.htm",
    "35. [Primary Source] Council of Trent. 'Fourth Session, on the Canonical Scriptures.' https://www.ccel.org/ccel/schaff/creeds2.v.i.i.ii.html",
    "36. [Wikipedia] 'Council of Florence.' https://en.wikipedia.org/wiki/Council_of_Florence",
    "37. [Encyclopedia] Britannica. 'Book of Tobit.' https://www.britannica.com/topic/Tobit-biblical-literature",
    "38. [Wikipedia] Book of Tobit. https://en.wikipedia.org/wiki/Book_of_Tobit",
    "39. [Commentary] Commentaries on Daniel 4:27. Bible Hub. https://biblehub.com/commentaries/daniel/4-27.htm",
    "40. [Apologetics] Got Questions - Book of Judith. https://www.gotquestions.org/book-of-Judith.html",
    "41. [Encyclopedia] Britannica - Book of Judith. https://www.britannica.com/topic/Book-of-Judith",
    "42. [Wikipedia] Book of Wisdom. https://en.wikipedia.org/wiki/Book_of_Wisdom",
    "43. [Encyclopedia] Britannica - Wisdom of Solomon (Old Testament book). https://www.britannica.com/topic/Wisdom-of-Solomon",
    "44. [Wikipedia] 2 Maccabees. https://en.wikipedia.org/wiki/2_Maccabees",
    "45. [Commentary] Commentaries on Hebrews 9:27. Bible Hub. https://biblehub.com/commentaries/hebrews/9-27.htm",
    "46. [Apologetics] Catholic Answers - Purgatory. https://www.catholic.com/encyclopedia/purgatory",
    "47. [Wikipedia] Ketuvim. https://en.wikipedia.org/wiki/Ketuvim",
    "48. [Commentary] Commentaries on Luke 24:44. Bible Hub. https://biblehub.com/commentaries/luke/24-44.htm",
    "49. [Commentary] Gill's Exposition of the Bible - Hebrews 11:35. https://www.biblestudytools.com/commentaries/gills-exposition-of-the-bible/hebrews-11-35.html",
    "50. [Wikipedia] Additions to Daniel. https://en.wikipedia.org/wiki/Additions_to_Daniel",
    "51. [Wikipedia] Book of Esther (Greek additions). https://en.wikipedia.org/wiki/Additions_to_Esther",
    "52. [Encyclopedia] 'ESDRAS, BOOKS OF.' Jewish Encyclopedia (1906). https://jewishencyclopedia.com/view.jsp?artid=463&letter=E&search=Books%20of%20Esdras",
    "53. [Wikipedia] '1 Esdras.' https://en.wikipedia.org/wiki/1_Esdras",
    "54. [Academic] Gutman. The Prayer of Manasseh. The Oxford Handbook of the Apocrypha, 2021. https://doi.org/10.1093/oxfordhb/9780190689643.013.20",
    "55. [Wikipedia] 'Prayer of Manasseh.' https://en.wikipedia.org/wiki/Prayer_of_Manasseh",
    "56. [Wikipedia] Psalm 151. https://en.wikipedia.org/wiki/Psalm_151",
    "57. [Academic] Goff. David Singing at the End of the Psalter. The Apocrypha: A Guide, 2024. https://doi.org/10.1093/9780190060770.003.0014",
    "58. [Encyclopedia] 'MACCABEES, BOOKS OF.' Jewish Encyclopedia (1906). https://jewishencyclopedia.com/articles/10237-maccabees-books-of",
    "59. [Wikipedia] '3 Maccabees.' https://en.wikipedia.org/wiki/3_Maccabees",
    "60. [Academic] van Henten et al. 4 Maccabees. Oxford Classical Dictionary, 2025. https://doi.org/10.1093/acrefore/9780199381135.013.9080",
    "61. [Wikipedia] '4 Maccabees.' https://en.wikipedia.org/wiki/4_Maccabees",
    "62. [Wikipedia] Meqabyan. https://en.wikipedia.org/wiki/Meqabyan",
    "63. [Reference] The Canonical Books. Ethiopian Orthodox Tewahedo Church. https://www.ethiopianorthodox.org/english/canonical/books.html",
    "64. [Encyclopedia] 'JOSEPH BEN GORION.' Jewish Encyclopedia (1906). https://www.jewishencyclopedia.com/view.jsp?artid=473&letter=J",
    "65. [Wikipedia] 'Josippon.' https://en.wikipedia.org/wiki/Josippon",
    "66. [Primary Source] Early Christian Writings - Gnostic Texts. https://www.earlychristianwritings.com/gnostics.html",
    "67. [Encyclopedia] Britannica - Gnosticism. https://www.britannica.com/topic/Gnosticism",
    "68. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Demiurge.' https://www.newadvent.org/cathen/04707b.htm",
    "69. [Wikipedia] 'Demiurge.' https://en.wikipedia.org/wiki/Demiurge",
    "70. [Apologetics] Got Questions - Nag Hammadi Library. https://www.gotquestions.org/Nag-Hammadi.html",
    "71. [Wikipedia] Docetism. https://en.wikipedia.org/wiki/Docetism",
    "72. [Encyclopedia] New Advent, Catholic Encyclopedia. Docetae. https://www.newadvent.org/cathen/05070c.htm",
    "73. [Apologetics] Got Questions - Gospel of Thomas. https://www.gotquestions.org/Gospel-of-Thomas.html",
    "74. [Primary Source] Early Christian Writings - Gospel of Thomas. https://www.earlychristianwritings.com/thomas.html",
    "75. [Primary Source] Early Christian Writings - Gospel of Judas. https://www.earlychristianwritings.com/gospeljudas.html",
    "76. [Wikipedia] Gospel of Judas. https://en.wikipedia.org/wiki/Gospel_of_Judas",
    "77. [Primary Source] Early Christian Writings - Gospel of Mary. https://www.earlychristianwritings.com/gospelmary.html",
    "78. [Encyclopedia] EBSCO Research Starters. 'The Gospel of Mary of Magdala.' https://www.ebsco.com/research-starters/literature-and-writing/gospel-mary-magdala-karen-l-king",
    "79. [Primary Source] Early Christian Writings - Gospel of Philip. https://www.earlychristianwritings.com/gospelphilip.html",
    "80. [Apologetics] Got Questions - Gospel of Philip. https://www.gotquestions.org/Gospel-of-Philip.html",
    "81. [Apologetics] Stand to Reason. 'Why Are the Gnostic Gospels Left Out?' https://www.str.org/w/why-are-the-gnostic-gospels-left-out-of-the-bible-",
    "82. [Wikipedia] Apocryphon of John. https://en.wikipedia.org/wiki/Apocryphon_of_John",
    "83. [Primary Source] Irenaeus, Against Heresies I.29 (New Advent). https://www.newadvent.org/fathers/0103129.htm",
    "84. [Primary Source] 'Gospel of Truth.' Early Christian Writings. https://www.earlychristianwritings.com/text/gospeltruth-attridge.html",
    "85. [Wikipedia] 'Gospel of Truth.' https://en.wikipedia.org/wiki/Gospel_of_Truth",
    "86. [Primary Source] Irenaeus, Against Heresies III.11 (New Advent). https://www.newadvent.org/fathers/0103311.htm",
    "87. [Primary Source] 'Introduction – Pistis Sophia – Gnosticism and Hermetica.' Internet Sacred Text Archive. https://www.sacred-texts.com/chr/ps/ps003.htm",
    "88. [Wikipedia] 'Pistis Sophia.' https://en.wikipedia.org/wiki/Pistis_Sophia",
    "89. [Encyclopedia] New Advent, Catholic Encyclopedia. 'Gnosticism.' https://www.newadvent.org/cathen/06592a.htm",
    "90. [Primary Source] 'Schaff, History of the Christian Church, Volume II: Ante-Nicene Christianity. A.D. 100-325.' Christian Classics Ethereal Library. https://www.ccel.org/ccel/schaff/hcc2.v.xv.iv.html",
    "91. [Wikipedia] 'Apostolic Fathers.' https://en.wikipedia.org/wiki/Apostolic_Fathers",
    "92. [Encyclopedia] New Advent. 'The Apostolic Fathers.' https://www.newadvent.org/cathen/01637a.htm",
    "93. [Primary Source] Polycarp, Epistle to the Philippians (New Advent). https://www.newadvent.org/fathers/0136.htm",
    "94. [Primary Source] Early Christian Writings - The Didache. https://www.earlychristianwritings.com/didache.html",
    "95. [Apologetics] Got Questions - The Didache. https://www.gotquestions.org/Didache.html",
    "96. [Primary Source] Early Christian Writings - 1 Clement. https://www.earlychristianwritings.com/1clement.html",
    "97. [Primary Source] New Advent - 1 Clement (Primary Source Text). https://www.newadvent.org/fathers/1010.htm",
    "98. [Primary Source] Early Christian Writings - Shepherd of Hermas. https://www.earlychristianwritings.com/shepherd.html",
    "99. [Apologetics] Got Questions - Shepherd of Hermas. https://www.gotquestions.org/Shepherd-of-Hermas.html",
    "100. [Primary Source] Early Christian Writings - Epistle of Barnabas. https://www.earlychristianwritings.com/barnabas.html",
    "101. [Apologetics] Got Questions - Epistle of Barnabas. https://www.gotquestions.org/Epistle-of-Barnabas.html",
    "102. [Primary Source] New Advent - Athanasius' 39th Festal Letter (Primary Source). https://www.newadvent.org/fathers/2806039.htm",
    "103. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'St. Ignatius of Antioch.' https://www.newadvent.org/cathen/07644a.htm",
    "104. [Wikipedia] 'Ignatius of Antioch.' https://en.wikipedia.org/wiki/Ignatius_of_Antioch",
    "105. [Primary Source] Ignatius, Epistle to the Romans (New Advent). https://www.newadvent.org/fathers/0107.htm",
    "106. [Primary Source] Martyrdom of Polycarp. New Advent. https://www.newadvent.org/fathers/0102.htm",
    "107. [Wikipedia] 'Martyrdom of Polycarp.' https://en.wikipedia.org/wiki/Martyrdom_of_Polycarp",
    "108. [Wikipedia] Polycarp. https://en.wikipedia.org/wiki/Polycarp",
    "109. [Primary Source] Epistle to Diognetus (New Advent). https://www.newadvent.org/fathers/0101.htm",
    "110. [Primary Source] 'Epistle of Mathetes to Diognetus.' Early Christian Writings. https://www.earlychristianwritings.com/diognetus.html",
    "111. [Wikipedia] 'Epistle to Diognetus.' https://en.wikipedia.org/wiki/Epistle_to_Diognetus",
    "112. [Encyclopedia] Britannica - Pseudepigrapha. https://www.britannica.com/topic/pseudepigrapha",
    "113. [Encyclopedia] New Advent, Catholic Encyclopedia. 'Apocrypha.' https://www.newadvent.org/cathen/01601a.htm",
    "114. [Apologetics] Got Questions - Book of Enoch. https://www.gotquestions.org/book-of-Enoch.html",
    "115. [Wikipedia] Epistle of Jude. https://en.wikipedia.org/wiki/Epistle_of_Jude",
    "116. [Apologetics] Got Questions - Assumption of Moses. https://www.gotquestions.org/Assumption-of-Moses.html",
    "117. [Wikipedia] Book of Enoch. https://en.wikipedia.org/wiki/Book_of_Enoch",
    "118. [Primary Source] The Book of Enoch, trans. R. H. Charles. Internet Sacred Text Archive. https://sacred-texts.com/bib/boe/index.htm",
    "119. [Wikipedia] Enoch Calendar. https://en.wikipedia.org/wiki/Enoch_calendar",
    "120. [Apologetics] Got Questions - Book of Jubilees. https://www.gotquestions.org/book-of-Jubilees.html",
    "121. [Encyclopedia] Britannica - Book of Jubilees. https://www.britannica.com/topic/Book-of-Jubilees",
    "122. [Encyclopedia] Britannica - Testaments of the Twelve Patriarchs. https://www.britannica.com/topic/Testaments-of-the-Twelve-Patriarchs",
    "123. [Academic] Christianity Stack Exchange - Why is the Book of Enoch not regarded as canonical? https://christianity.stackexchange.com/questions/8576/why-is-the-book-of-enoch-not-regarded-as-canonical",
    "124. [Wikipedia] Psalms of Solomon. https://en.wikipedia.org/wiki/Psalms_of_Solomon",
    "125. [Wikipedia] Against Apion. https://en.wikipedia.org/wiki/Against_Apion",
    "126. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Septuagint Version.' https://www.newadvent.org/cathen/13722a.htm",
    "127. [Wikipedia] 'Septuagint.' https://en.wikipedia.org/wiki/Septuagint",
    "128. [Wikipedia] Letter of Aristeas. https://en.wikipedia.org/wiki/Letter_of_Aristeas",
    "129. [Primary Source] 'The Ascension of Isaiah.' Early Christian Writings. https://www.earlychristianwritings.com/text/ascension.html",
    "130. [Wikipedia] 'Ascension of Isaiah.' https://en.wikipedia.org/wiki/Ascension_of_Isaiah",
    "131. [Academic] Early Jewish Writings. Martyrdom and Ascension of Isaiah. https://www.earlyjewishwritings.com/ascensionisaiah.html",
    "132. [Primary Source] Early Christian Writings - New Testament Apocrypha. https://www.earlychristianwritings.com/apocrypha.html",
    "133. [Encyclopedia] Britannica - New Testament apocrypha. https://www.britannica.com/topic/New-Testament-apocrypha",
    "134. [Wikipedia] New Testament apocrypha. https://en.wikipedia.org/wiki/New_Testament_apocrypha",
    "135. [Reference] Bible Research. The Muratorian Fragment. https://www.bible-researcher.com/muratorian.html",
    "136. [Primary Source] Eusebius, Church History, Book III (New Advent). https://www.newadvent.org/fathers/250103.htm",
    "137. [Primary Source] Early Christian Writings - Protoevangelium of James. https://www.earlychristianwritings.com/infancyjames.html",
    "138. [Apologetics] Got Questions - Protoevangelium of James. https://www.gotquestions.org/Protoevangelium-of-James.html",
    "139. [Primary Source] Early Christian Writings - Infancy Gospel of Thomas. https://www.earlychristianwritings.com/infancythomas.html",
    "140. [Primary Source] Infancy Gospel of Thomas. New Advent. https://www.newadvent.org/fathers/0846.htm",
    "141. [Wikipedia] 'Infancy Gospel of Thomas.' https://en.wikipedia.org/wiki/Infancy_Gospel_of_Thomas",
    "142. [Primary Source] Early Christian Writings - Gospel of Peter. https://www.earlychristianwritings.com/gospelpeter.html",
    "143. [Apologetics] Got Questions - Gospel of Peter. https://www.gotquestions.org/Gospel-of-Peter.html",
    "144. [Primary Source] Early Christian Writings - Acts of Paul. https://www.earlychristianwritings.com/actspaul.html",
    "145. [Wikipedia] Acts of Paul and Thecla. https://en.wikipedia.org/wiki/Acts_of_Paul_and_Thecla",
    "146. [Primary Source] Acts of Paul and Thecla. New Advent. https://www.newadvent.org/fathers/0816.htm",
    "147. [Primary Source] Early Christian Writings - Acts of John. https://www.earlychristianwritings.com/actsjohn.html",
    "148. [Encyclopedia] New Advent, Catholic Encyclopedia. 'The Gospel of Nicodemus.' https://www.newadvent.org/cathen/01111b.htm",
    "149. [Wikipedia] Gospel of Nicodemus. https://en.wikipedia.org/wiki/Gospel_of_Nicodemus",
    "150. [Wikipedia] Acts of Peter. https://en.wikipedia.org/wiki/Acts_of_Peter",
    "151. [Primary Source] The Acts of Peter. Early Christian Writings. http://www.earlychristianwritings.com/text/actspeter.html",
    "152. [Primary Source] Early Christian Writings. Acts of Peter. https://www.earlychristianwritings.com/actspeter.html",
    "153. [Wikipedia] Acts of Thomas. https://en.wikipedia.org/wiki/Acts_of_Thomas",
    "154. [Primary Source] The Acts of Thomas. Early Christian Writings. http://www.earlychristianwritings.com/text/actsthomas.html",
    "155. [Primary Source] Early Christian Writings. Acts of Thomas. https://www.earlychristianwritings.com/actsthomas.html",
    "156. [Wikipedia] Apocalypse of Peter. https://en.wikipedia.org/wiki/Apocalypse_of_Peter",
    "157. [Primary Source] The Apocalypse of Peter. Early Christian Writings. http://www.earlychristianwritings.com/text/apocalypsepeter-mrjames.html",
    "158. [Encyclopedia] New Advent, Catholic Encyclopedia. 'The Muratorian Canon.' https://www.newadvent.org/cathen/10642a.htm",
    "159. [Wikipedia] Epistle to the Laodiceans. https://en.wikipedia.org/wiki/Epistle_to_the_Laodiceans",
    "160. [Commentary] Commentaries on Colossians 4:16. Bible Hub. https://biblehub.com/commentaries/colossians/4-16.htm",
    "161. [Primary Source] Jerome, De Viris Illustribus (New Advent). https://www.newadvent.org/fathers/2708.htm"
  ],
  timeline: canonTimeline,
  lastUpdated: "30-10-2026",
};