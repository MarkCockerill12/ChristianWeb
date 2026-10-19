import type { Topic } from './types'

// The renderer passes block-level HTML through line by line, so the table must
// stay on a single line or its closing tags would be wrapped in paragraphs.
const SPECTRUM_ROWS: ReadonlyArray<readonly [string, string, string, string, string]> = [
  ["KJV", "1611", "Word for word", "Textus Receptus", "47 Church of England scholars"],
  ["NKJV", "1982", "Word for word", "Textus Receptus", "Thomas Nelson"],
  ["NASB", "1971 (rev. 1995, 2020)", "Word for word", "Critical text", "Lockman Foundation"],
  ["LSB", "2021", "Word for word", "Critical text", "The Master's Seminary"],
  ["ESV", "2001", "Essentially literal", "Critical text", "Crossway"],
  ["NRSV / NRSVue", "1989 (rev. 2021)", "As literal as possible, as free as necessary", "Critical text", "National Council of Churches"],
  ["CSB", "2017", "Optimal equivalence (middle)", "Critical text", "Holman / Lifeway"],
  ["NET", "2005", "Middle, with 60,932 notes", "Critical text", "Biblical Studies Press"],
  ["NIV", "1978 (rev. 2011)", "Balanced, leaning thought for thought", "Critical text", "Committee on Bible Translation"],
  ["NLT", "1996 (rev. 2004)", "Thought for thought", "Critical text", "Tyndale House"],
  ["GNT", "1976", "Thought for thought", "Critical text", "American Bible Society"],
  ["The Message", "2002", "Paraphrase", "Original languages, single author", "Eugene Peterson"],
  ["NWT", "1961 (rev. 2013)", "Literal, with doctrinal alterations", "Westcott and Hort", "Watch Tower Society (anonymous)"],
]

const SPECTRUM_TABLE =
  '<div class="topic-table-wrap"><table class="topic-table"><thead><tr><th>Translation</th><th>Published</th><th>Method</th><th>NT Greek base</th><th>Produced by</th></tr></thead><tbody>' +
  SPECTRUM_ROWS.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("") +
  "</tbody></table></div>"

export const BIBLE_TRANSLATIONS: Topic = {
  id: "bible-translations",
  title: "Bible Translations: KJV, NIV, ESV and the Rest",
  description: "How English Bibles are made, what separates the KJV, NIV, ESV, NLT and the others, and how closely each one follows the Hebrew and Greek.",
  icon: "BookOpen",
  color: "indigo",
  tags: ["Bible", "Translation", "Manuscripts", "KJV"],
  verses: [
    { reference: "Nehemiah 8:8", text: "They read from the book, from the Law of God, clearly, and they gave the sense, so that the people understood the reading." },
    { reference: "2 Timothy 3:16-17", text: "All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be complete, equipped for every good work." },
    { reference: "Isaiah 40:8", text: "The grass withers, the flower fades, but the word of our God will stand forever." },
    { reference: "Acts 2:6", text: "And at this sound the multitude came together, and they were bewildered, because each one was hearing them speak in his own language." },
    { reference: "Psalm 12:6-7", text: "The words of the LORD are pure words: as silver tried in a furnace of earth, purified seven times. Thou shalt keep them, O LORD, thou shalt preserve them from this generation for ever." },
  ],
  tldr: "No English Bible is the original. Every translation makes two decisions: which Hebrew and Greek text to translate, and how literally to render it. Word-for-word versions (KJV, NKJV, NASB, LSB, ESV) stay closest to the form of the original; the NIV and CSB sit in the middle; the NLT renders thought for thought; The Message and The Living Bible are paraphrases. The KJV and NKJV translate the Textus Receptus, a Greek text first printed in 1516 from a handful of late manuscripts, while nearly every other modern version translates critical texts that draw on manuscripts up to a thousand years older. The mainstream translations of every tradition teach the same faith. The real outliers are sectarian versions such as the Jehovah's Witnesses' New World Translation, which alter key verses to fit a theology.",
  content: `
## Why There Are So Many Translations

The Old Testament was written in Hebrew, with portions of Ezra and Daniel in Aramaic, and the New Testament in Koine Greek. English alone has hundreds of translations and paraphrases, whole or partial, going back to Anglo-Saxon renderings of the Gospels[^1]. Every committee that produces one answers two separate questions before it writes a word.

- **Which text?** The original documents (the autographs) are believed lost long ago. Translators work from later copies, and where the copies differ they have to decide which reading is original[^2].
- **How literally?** Hebrew and Greek do not map word for word onto English. A translation can keep close to the form of the original, restate its meaning in natural modern English, or settle somewhere between the two[^3][^4].

Translating Scripture is as old as Scripture. When Ezra read the Law to the returned exiles, the Levites "gave the sense" (Nehemiah 8:8), and commentators from Matthew Henry to Ellicott take this to include rendering the Hebrew into the Aramaic the people now spoke[^5]. Jewish scholars in Egypt translated the Hebrew Scriptures into Greek, beginning with the Torah in the third century BC, and the New Testament writers quote that Greek translation (the Septuagint) freely[^6][^7]. The Westminster Confession (1646) holds that the Hebrew and Greek alone are the final court of appeal, and in the same paragraph requires that Scripture "be translated into the vulgar language of every nation"[^8].

## The Spectrum at a Glance

${SPECTRUM_TABLE}

Publishers place their own versions on this spectrum. Crossway calls the ESV "essentially literal", Lifeway places the CSB in the middle of the formal-to-functional range, and the NIV's translators describe their aim as balancing transparency to the original with ease of understanding[^9][^10][^11].
`,
  subtopics: [
    {
      id: "manuscripts",
      title: "What Translators Actually Translate: The Manuscripts",
      tags: ["manuscripts", "textual criticism", "masoretic text", "dead sea scrolls"],
      content: `
### The Old Testament

The standard Hebrew text is the Masoretic Text, the form copied and vocalised by Jewish scribes (the Masoretes) in the early Middle Ages. Its oldest complete copy, the Leningrad Codex, was made in Cairo in AD 1008 or 1009 and is the base of the *Biblia Hebraica Stuttgartensia* that most modern translations use. The older Aleppo Codex has been missing large sections since the 1947 riots in Aleppo[^12][^13][^14].

The Dead Sea Scrolls, found from 1947 onward, pushed the evidence back roughly a thousand years. The Great Isaiah Scroll, dated around 125 BC, preserves all sixty-six chapters in the same order as the Masoretic Text and is generally consistent with it, while containing more than 2,600 variants and scribal corrections[^15][^16].

Modern translations follow the Masoretic Text and turn to the Dead Sea Scrolls, the Septuagint, the Samaritan Pentateuch and other ancient versions only in difficult cases, usually with a footnote. The ESV preface describes exactly this practice[^17].

### The New Testament

The New Testament survives in more than 5,800 Greek manuscripts, around 10,000 Latin manuscripts and some 9,300 in other ancient languages[^18]. The oldest substantial papyri, such as 𝔓75, are traditionally dated to around AD 200 to 250, though some scholars now argue for dates into the early fourth century[^19]. The oldest complete New Testament is in Codex Sinaiticus, copied in the fourth century, and Codex Vaticanus is of similar age[^20][^21][^22].

Printed Greek New Testaments fall into three families, and the family a translation uses explains most of the differences in its New Testament:

- **The Textus Receptus** ("received text") is the line of printed editions that began with Erasmus in 1516 and continued through Stephanus (1550), Beza and the Elzevirs. Erasmus worked from a small number of late manuscripts, and this text underlies the Reformation-era Bibles, including the KJV[^23][^24].
- **The Majority Text** follows whatever reading most surviving manuscripts contain. Because more than 80% of the later minuscule manuscripts carry the Byzantine text, this produces a Byzantine text, edited in modern form by Hodges and Farstad and by Robinson and Pierpont[^25][^26].
- **The Critical Text**, published as the Nestle-Aland 28th edition and the identical United Bible Societies 5th edition, weighs the age and quality of manuscripts rather than their number. It forms the basis of most modern translations[^27][^28].
`
    },
    {
      id: "translation-philosophies",
      title: "Word for Word, Thought for Thought, and Paraphrase",
      tags: ["formal equivalence", "dynamic equivalence", "paraphrase", "method"],
      content: `
- **Formal equivalence** (word for word) renders each word and grammatical structure of the original as closely as English allows, keeping its idioms and even its ambiguities. The NASB is the classic example[^29].
- **Dynamic or functional equivalence** (thought for thought) was named by the linguist Eugene Nida, who defined it as a translation that produces in modern readers essentially the same response the original produced in its first readers[^30][^31].
- **Optimal equivalence** is the CSB's name for a mixed method: a literal rendering wherever it is clear in English, and a freer one wherever a literal rendering would obscure the meaning[^32].
- **Paraphrase** restates the text freely, often through one person's wording. The Living Bible began when Kenneth Taylor paraphrased Scripture for his own children because they could not follow the passages read to them[^33].

### The difference in practice

- **1 Peter 1:13.** The KJV and NKJV keep Peter's image: "gird up the loins of your mind." The NASB has "prepare your minds for action", the ESV "preparing your minds for action", and the NIV "with minds that are alert and fully sober"[^34].
- **Philippians 1:8.** Paul longs for the Philippians with the *splanchna* of Christ, literally the inner organs, which Greek treated as the seat of the emotions. The KJV renders it "in the bowels of Jesus Christ"; nearly every modern version has "with the affection of Christ Jesus"[^35][^36].
- **Romans 12:1.** Paul addresses the church as *adelphoi*, which Greek used for a mixed group as well as for men. The KJV and ESV have "brethren" or "brothers"; the NIV, CSB, NASB 2020 and NLT have "brothers and sisters"[^37][^38].

Each approach carries a cost. A formal translation preserves the links between words and passages and leaves interpretation to the reader, but can produce English that is wooden or misleading. Crossway argues that thought-for-thought versions are more likely to carry the translator's interpretive views[^39][^40]. Functional translators answer that every translation interprets, and that clarity in the receptor language is itself a form of accuracy[^41].
`
    },
    {
      id: "before-the-kjv",
      title: "Before the KJV: Wycliffe, Tyndale, Geneva and Douay-Rheims",
      tags: ["history", "wycliffe", "tyndale", "geneva bible", "douay-rheims", "vulgate"],
      content: `
- **The Latin Vulgate.** For a thousand years Western Christians read Scripture in Latin, in the translation Jerome began in 382 at the commission of Pope Damasus I. The Council of Trent (1545-1563) affirmed it as the Catholic Church's official Latin Bible[^42].
- **Wycliffe's Bible** (about 1382-1395) was the first complete Bible in English, translated from the Vulgate rather than the Hebrew and Greek. From 1409 Archbishop Arundel's Constitutions restricted unlicensed English translation[^43][^44].
- **William Tyndale** published the first printed English New Testament in 1526, the first English translation made directly from the Greek, and later the Pentateuch from the Hebrew. Copies were bought up and burned, and Tyndale was condemned as a heretic and executed in 1536[^45][^46].
- **The Geneva Bible** (1560), produced by English Protestant exiles in Geneva with extensive study notes, was the Bible of Shakespeare, John Knox and Oliver Cromwell, and travelled to America on the Mayflower. It remained the most popular English Bible for decades after 1611[^47][^48].
- **The Douay-Rheims Bible** was the Catholic answer: its New Testament appeared at Rheims in 1582 and its Old Testament at Douai in 1609-1610, translated from the Vulgate by the English College in exile. Bishop Richard Challoner's revision of 1749-1752 is the form still printed[^49][^50].
`
    },
    {
      id: "king-james-version",
      title: "The King James Version (1611)",
      tags: ["kjv", "authorized version", "textus receptus", "history"],
      content: `
At the Hampton Court Conference of January 1604, the Puritan John Rainolds proposed a new translation to replace the Geneva Bible, and King James agreed[^51]. Forty-seven scholars, all members of the Church of England, worked in six companies and published the result in 1611[^52][^53].

### How original was it?

The KJV was a revision, not a fresh translation. The translators were told to follow the 1602 edition of the Bishops' Bible and to depart from it only where the original required, consulting Tyndale, Coverdale, Matthew's Bible, the Great Bible and the Geneva Bible[^54]. Their own preface says the aim was never "to make a new translation, nor yet to make of a bad one a good one... but to make a good one better"[^55]. Tyndale's influence runs throughout: one recent estimate finds 84% of the KJV New Testament word for word identical to Tyndale, and about 76% of the Old Testament books Tyndale completed[^56].

- **Text.** The New Testament translates the Textus Receptus, drawing on the editions of Erasmus, Stephanus and Beza; the Old Testament the Masoretic Text; and the Apocrypha, included in every 1611 copy, the Septuagint and Vulgate[^57][^58].
- **Notes.** The translators were forbidden the doctrinal notes of the Geneva Bible, but placed around 8,500 alternative English renderings in the margin[^59]. Their preface defends the practice: where the sense is uncertain, "variety of Translations is profitable for the finding out of the sense of the Scriptures"[^60].
- **Today's KJV is not the 1611 text.** Almost every KJV printed today reproduces Benjamin Blayney's Oxford edition of 1769, which differs from the 1611 printing in around 24,000 places, nearly all of them spelling and punctuation[^61].

### Where the English has moved

Several KJV words have changed meaning since 1611. In 2 Thessalonians 2:7 "he who now letteth will let" means "he who now restrains will restrain"[^62]. In 1 Thessalonians 4:15 the living "shall not prevent them which are asleep" means they will not precede them[^63].

A few renderings are now regarded as mistakes. "Unicorn" (Numbers 23:22) translates the Hebrew *re'em*, a wild ox; the KJV followed the Septuagint and Vulgate, which also gave the animal one horn[^64][^65]. In Acts 12:4 the KJV has "Easter" for *pascha*, which it renders "Passover" in its 28 other occurrences[^66][^67].
`
    },
    {
      id: "nkjv",
      title: "The New King James Version (1982)",
      tags: ["nkjv", "textus receptus", "majority text"],
      content: `
Thomas Nelson published the NKJV New Testament in 1979 and the full Bible in 1982. It updates the KJV's vocabulary and grammar while keeping its sentence structure and its Textus Receptus New Testament, so it is the only major modern version on that Greek text[^68][^69].

Its footnotes mark the places where the Critical Text and the Majority Text read differently from the Textus Receptus, which lets a reader of a TR-based Bible see the textual question directly[^70]. The Eastern Orthodox Church chose the NKJV New Testament for the *Orthodox Study Bible* because it follows the Byzantine-type text that the Orthodox Church uses[^71].
`
    },
    {
      id: "literal-modern-versions",
      title: "Literal Modern Versions: RV, RSV, NRSV, NASB, LSB and ESV",
      tags: ["nasb", "esv", "lsb", "rsv", "nrsv", "formal equivalence"],
      content: `
- **The Revised Version** (1881-1885) and its American counterpart, the **American Standard Version** (1901), were the first official revisions of the KJV and the first English Bibles on a critical Greek text. Westcott and Hort sat on the revision committee[^72][^73].
- **The Revised Standard Version** (1952), from the National Council of Churches, rendered Isaiah 7:14 as "a young woman shall conceive". The choice provoked fierce opposition, and in November 1952 a North Carolina pastor, Luther Hux, publicly burned the page[^74][^75].
- **The New Revised Standard Version** (1989) was produced by an ecumenical committee of about thirty under the motto "as literal as possible, as free as necessary", with a mandate to remove masculine-oriented language where it did not reflect the original setting. The Updated Edition (NRSVue) followed in 2021[^76][^77][^78].
- **The New American Standard Bible** (1971; revised 1995 and 2020), from the Lockman Foundation, is widely regarded as the most literal of the major twentieth-century translations[^79][^80][^81].
- **The Legacy Standard Bible** (2021) is a revision of the NASB 1995 by faculty of The Master's Seminary. It renders God's covenant name as "Yahweh" instead of "LORD"[^82][^83][^84].
- **The English Standard Version** (2001) is Crossway's revision of the 1971 RSV by more than 100 evangelical scholars and pastors[^85][^86][^87].

The ESV shows that even a single translation keeps moving. In 2016 Crossway changed Genesis 3:16 from "your desire shall be for your husband" to "your desire shall be contrary to your husband" and announced that the text would never change again; the next month it dropped the permanent-text policy, and the 2025 edition restored the earlier wording[^88][^89][^90][^91].
`
    },
    {
      id: "middle-versions",
      title: "The Middle of the Spectrum: NIV, CSB and NET",
      tags: ["niv", "csb", "net", "gender language"],
      content: `
**The New International Version** grew from a 1957 study by the National Association of Evangelicals and the Christian Reformed Church. The Committee on Bible Translation, a self-perpetuating body of fifteen evangelical scholars formed in 1965, published the New Testament in 1973 and the whole Bible in 1978, with revisions in 1984 and 2011[^92][^93][^94]. The NIV has long been the best-selling translation in the United States[^95]. Recent monthly ECPA rankings put the ESV, NIV, KJV and NLT as the four best-selling translations, with the ESV and NIV trading first place[^96][^97].

The NIV is also the centre of the debate over gender language. Today's New International Version (2005) used gender-inclusive language for people, and both it and the 1984 NIV were withdrawn when the 2011 NIV replaced them[^98]. In June 2011 the Southern Baptist Convention passed a resolution saying the 2011 NIV kept about 75% of the TNIV's inaccurate gender language, and declining to commend it[^99][^100]. The translators reply that renderings such as "brothers and sisters" for *adelphoi* reflect what the Greek meant to its first hearers rather than changing it[^101].

**The Christian Standard Bible** (2017) is a major revision of the Holman Christian Standard Bible (2004), published by Holman and Lifeway and translated from the Nestle-Aland 28th edition by the "optimal equivalence" method[^102][^103][^104].

**The New English Translation** (NET, 2005) was made by more than twenty scholars and carries 60,932 translators' notes explaining textual and translation choices. It is free to read and download[^105][^106][^107].
`
    },
    {
      id: "readable-versions",
      title: "Readable Versions and Paraphrases: NLT, GNT, The Message and the Amplified",
      tags: ["nlt", "the message", "living bible", "paraphrase", "amplified"],
      content: `
- **The Living Bible** (1971) is Kenneth Taylor's personal paraphrase of the 1901 American Standard Version, not a translation from the original languages[^108].
- **The New Living Translation** (1996) began in 1989 as a revision of The Living Bible and became a new translation from the Hebrew and Greek by ninety scholars, with a second edition in 2004. Its translators aimed to render the text as literally as possible wherever that produced clear, natural English[^109][^110][^111][^112].
- **The Good News Translation** (New Testament 1966, whole Bible 1976), from the American Bible Society, was built directly on Eugene Nida's dynamic equivalence theory[^113][^114].
- **The Message** (1993-2002) is Eugene Peterson's idiomatic rendering from the original languages, reviewed by a team of scholars. It sits at the far dynamic end of the spectrum and has been criticised for loose handling of the text, including rendering *kyrios* as "Master" where Jesus is called Lord[^115][^116].
- **The Amplified Bible** (1965), from the Lockman Foundation and Zondervan, adds bracketed "amplifications" that spell out shades of meaning, marked off from the translation itself[^117][^118][^119].
`
    },
    {
      id: "catholic-orthodox-jewish",
      title: "Catholic, Orthodox and Jewish Translations",
      tags: ["catholic", "orthodox", "jewish", "deuterocanon", "nabre", "jerusalem bible"],
      content: `
Catholic and Orthodox Bibles include the deuterocanonical books (Tobit, Judith, 1 and 2 Maccabees, Wisdom, Sirach, Baruch and additions to Esther and Daniel), which Protestant Bibles omit or print as Apocrypha. The history of that difference is covered under [the Canon](/categories/canon)[^120].

- **The New American Bible Revised Edition** (2011), approved by the United States Conference of Catholic Bishops, joins the 1986 New Testament to a fully revised Old Testament. American Masses still use a lectionary based on an earlier form of the NAB[^121][^122][^123].
- **The Jerusalem Bible** (1966) was made from the French translation of the Dominican École Biblique in Jerusalem. J. R. R. Tolkien translated Jonah for it and is listed among its principal collaborators. It renders God's name as "Yahweh", a practice the Vatican asked to be dropped from the liturgy in 2008[^124]. The **New Jerusalem Bible** revised it in 1985[^125].
- **The Orthodox Study Bible** (2008) translates the Old Testament from the Septuagint, the Old Testament of the Orthodox Church, rather than the Hebrew, and uses the NKJV for the New Testament[^126].
- **The New JPS Tanakh** (1985), from the Jewish Publication Society, is a fresh Jewish translation of the Masoretic Text, replacing the society's 1917 version[^127].
`
    },
    {
      id: "sectarian-versions",
      title: "Sectarian Versions: The New World Translation, the Joseph Smith Translation and The Passion Translation",
      tags: ["new world translation", "jehovah's witnesses", "mormonism", "passion translation", "cults"],
      content: `
### The New World Translation

The Watch Tower Society published the New World Translation's New Testament in 1950 and the whole Bible in 1961, with a major revision in 2013. Its translators have never been publicly named[^128].

- **John 1:1** reads "the Word was a god"[^129]. In Greek the word *theos* stands without the article and before the verb, which marks it as describing what the Word was, not as making him one god among several[^130]. Bruce Metzger of Princeton called the rendering a mistranslation and observed that "if the Jehovah's Witnesses take this translation seriously, they are polytheists"[^131].
- **Colossians 1:16** reads "by means of him all other things were created". The word "other" has no counterpart in the Greek and turns Christ from the Creator of all things into the first of the things created[^132][^133].
- The NWT also puts "Jehovah" into the New Testament 237 times where the Greek manuscripts have *kyrios* (Lord) or *theos* (God)[^134][^135].

### The Joseph Smith Translation

Joseph Smith revised the KJV, mostly between 1830 and 1833, describing the work as the restoration of lost material. It adds whole passages, including the expansions of Genesis published as the Book of Moses, and labels the Song of Songs "not inspired writings". The Latter-day Saint church prints the KJV with selections from Smith's revision in its footnotes and appendix[^136][^137].

### The Passion Translation

The Passion Translation, led by Brian Simmons (New Testament 2017), is marketed as a translation, but scholars have criticised it as a one-man paraphrase that adds material without support in the manuscripts[^138][^139][^140]. Bible Gateway removed it from its site in early 2022; its publisher said the licence was discontinued without explanation[^141][^142].
`
    },
    {
      id: "missing-verses",
      title: "Why Some Verses Are Missing or Bracketed",
      tags: ["textual criticism", "missing verses", "mark 16", "comma johanneum", "pericope adulterae"],
      content: `
Lists of "verses removed from the NIV" circulate widely. The same verses are missing from the main text, or moved to footnotes, in the Revised Version of 1881 and the American Standard Version of 1901, so the change predates the NIV by nearly a century. These verses appear in the Textus Receptus but not in the oldest manuscripts[^143][^144].

- **Mark 16:9-20.** Mark ends at 16:8 in the two oldest complete manuscripts of the Gospel, Codex Sinaiticus and Codex Vaticanus. Most modern versions print the longer ending in brackets or with a note instead of dropping it[^145][^146][^147].
- **John 7:53-8:11** (the woman caught in adultery) is absent from 𝔓66 and 𝔓75, from around AD 200, and from Sinaiticus and Vaticanus. There is a broad scholarly consensus that it was added later, although fourth-century fathers such as Ambrose and Augustine already quote it, and the Catholic Church receives it as canonical[^148][^149].
- **1 John 5:7-8** (the Comma Johanneum, "the Father, the Word, and the Holy Ghost: and these three are one") is found mainly in Latin manuscripts. Its earliest Greek witness dates from the fourteenth century, and Erasmus added it only to his third edition in 1522, under pressure, while doubting it[^150][^151][^152].
- **Acts 8:37** (the Ethiopian's confession) is absent from the early manuscripts and entered the Textus Receptus through Erasmus, who found it in a late source[^153][^154][^155].
- **Revelation 22:19.** Erasmus's only manuscript of Revelation lacked the final six verses, so he translated them back into Greek from the Latin Vulgate. The KJV's "book of life" in 22:19, against "tree of life" in the Greek manuscripts, comes from that back-translation[^156][^157][^158].

No doctrine depends on these passages. The Trinity, for example, is taught throughout the New Testament without the Comma Johanneum (Matthew 28:19; 2 Corinthians 13:14)[^159].
`
    },
    {
      id: "famous-differences",
      title: "Famous Differences: Isaiah 7:14, Psalm 22:16, Deuteronomy 22:28 and John 1:18",
      tags: ["isaiah 7:14", "virgin birth", "psalm 22", "deuteronomy 22", "john 1:18", "deity of christ"],
      content: `
### Isaiah 7:14: "virgin" or "young woman"?

The Hebrew word is *almah*, a young woman of marriageable age. Hebrew has a more specific word for virgin, *bethulah*, which Isaiah did not use[^160][^161]. The Jewish translators of the Septuagint, two centuries before Christ, rendered *almah* here as *parthenos*, "virgin", and Matthew 1:23 quotes that reading[^162][^163]. The KJV, NKJV, NASB, ESV, NIV, CSB and NLT have "virgin"; the RSV, NRSV and NET have "young woman"[^164][^165]. The wider argument is covered under [Prophecy](/categories/prophecy).

### Psalm 22:16: "they pierced my hands and my feet"

Most manuscripts of the Masoretic Text read *ka'ari*, "like a lion, my hands and my feet", which leaves the sentence without a verb. The Septuagint, translated before the Christian era, reads "they dug" (pierced). A Dead Sea fragment from Nahal Hever spells the word *ka'aru*, which supports a verb, although the same scribe misspells other words in the line[^166][^167]. Nearly every English version reads "pierced"; the NET has "like a lion they pin my hands and feet"[^168].

### Deuteronomy 22:28: "rapes her" or "seizes her"?

In verse 25 the man overpowers a betrothed woman in the open country, and he alone is put to death. The verb is *chazaq*, "to overpower, force"[^169][^170]. Verse 28 switches to *taphas*, "to seize, take hold of"[^171]. The NIV, CSB and NET render verse 28 "rapes her"; the ESV, NASB, LSB and NKJV keep "seizes her and lies with her", and the KJV has "lay hold on her, and lie with her"[^172]. The more literal versions preserve the change of verb, which leaves open the reading that verse 28 parallels the seduction law of Exodus 22:16-17, where the father may refuse the marriage altogether[^173][^174]. The full discussion is under [Women](/categories/women).

### John 1:18: modern versions and the deity of Christ

The KJV and NKJV read "the only begotten Son", following later manuscripts. The oldest manuscripts read *monogenēs theos*, "the only God" or "God the One and Only", so the NASB, LSB, ESV, NIV, CSB and NLT name the Son as God in this verse more directly than the KJV does[^175][^176]. The ESV's 2025 edition changed its rendering from "the only God" to "God the only Son"[^177][^178].
`
    },
    {
      id: "king-james-only",
      title: "The King James Only Debate",
      tags: ["kjv only", "textus receptus", "preservation", "apologetics"],
      content: `
The King James Only movement holds that the KJV, or the Textus Receptus behind it, is the only faithful English Bible[^179]. Its modern form traces to *Our Authorized Bible Vindicated* (1930) by the Seventh-day Adventist Benjamin Wilkinson[^180]. The most radical wing follows the Baptist Peter Ruckman (1921-2016), who taught that the English KJV is "advanced revelation" that corrects the Greek, a view most KJV advocates reject[^181]. Gail Riplinger's *New Age Bible Versions* (1993) alleged that the NIV, NASB and even the NKJV were linked to the New Age movement[^182].

James White divides the movement into five positions, from those who simply prefer the KJV to those who treat it as new revelation. Only the later positions deny that other translations are the word of God[^183].

### The case for the Textus Receptus

The serious argument concerns the text, not the English. Its defenders, from John Burgon in the nineteenth century to Edward Hills in the twentieth, argue that God's providential preservation of Scripture (the Westminster Confession's "kept pure in all ages") points to the text the church actually used for centuries, which is the Byzantine text found in the great majority of manuscripts[^184][^185][^186]. Psalm 12:6-7, "thou shalt preserve them from this generation for ever", is often cited as a promise to preserve the words.

### The responses

- **Psalm 12:7.** The pronoun "them" in the Hebrew is masculine, and "words" in verse 6 is feminine. The verse therefore promises to keep the afflicted poor of verse 5, as John Gill (a strong defender of the Hebrew text) points out, and as the ESV, NIV and CSB render it[^187][^188].
- **The translators' own view.** The KJV translators wrote that "the very meanest translation of the Bible in English, set forth by men of our profession... containeth the word of God, nay, is the word of God"[^189].
- **Which Textus Receptus, and which KJV?** The editions of Erasmus, Stephanus and Beza differ from one another in hundreds of places, and the KJV translators chose between them. The printed KJV has itself been revised, by Cambridge in 1629 and 1638 and by Oxford in 1769[^190][^191].
- **The age of the evidence.** Erasmus's first edition rested on about eight Greek manuscripts, none of them early, and in places, as in Revelation 22, on no Greek manuscript at all[^192].

Preferring the KJV for its language, its liturgical history or its textual base is a legitimate choice. The claim that every other translation is corrupt goes beyond what the evidence, and the KJV translators themselves, support[^193][^194].
`
    },
    {
      id: "choosing-a-translation",
      title: "Which Translation Is Closest to the Original?",
      tags: ["recommendations", "study", "accuracy"],
      content: `
"Closest to the original" can mean closest to its form or closest to its meaning, and no single translation wins on both counts[^195].

- **For close study:** the NASB, LSB, ESV and NKJV keep nearest to the wording of the Hebrew and Greek. The NET's notes explain the textual and translation choices behind each verse[^196].
- **For reading and devotion:** the CSB and NIV balance accuracy and readability; the NLT is the most readable of the committee translations.
- **For comparison:** setting two versions from different points on the spectrum side by side shows where the original is ambiguous and where a translator has made a decision[^197].
- **For doctrine:** paraphrases such as The Message and The Passion Translation are unsuitable, and the New World Translation and the Joseph Smith Translation alter texts to fit a theology.

Any mainstream translation, Protestant or Catholic, formal or functional, teaches the same gospel, the same Christ and the same way of salvation. The differences between them are real, and the footnotes in most editions show where they lie.
`
    },
    {
      id: "objections",
      title: "Common Objections",
      tags: ["objections", "apologetics", "reliability"],
      content: `
**"The Bible has been translated so many times it is like a game of telephone."** Modern translations are not translations of translations. Each goes back to the Hebrew and Greek, and the surviving manuscripts can be compared directly; thousands have been photographed and published online[^198].

**"Modern versions remove verses to hide the deity of Christ."** The omitted verses are absent from the oldest manuscripts, not deleted for doctrinal reasons, and several modern versions call Christ "God" more directly than the KJV does, as in John 1:18[^199].

**"Translators are biased."** Every translator brings convictions, which is why the major versions are made by committees, often from several denominations, and publish their textual basis and method. The sectarian versions are the exception: the NWT's translators remain anonymous[^200].

**"Which Bible did Jesus use?"** Jesus read the Hebrew Scriptures, and the New Testament writers often quote the Greek Septuagint, a translation, as the word of God[^201].

**"If translations differ, how can Scripture be inerrant?"** Inerrancy has always been claimed for the original writings, not for any copy or translation. Textual criticism exists to recover those writings as closely as possible, and the variants that remain affect no doctrine of the faith[^202].
`
    },
  ],
  sources: [
    "1. [Reference] Wikipedia. Bible translations into English. From Anglo-Saxon glosses to modern versions. https://en.wikipedia.org/wiki/Bible_translations_into_English",
    "2. [Reference] Wikipedia. Biblical manuscript. The loss of the autographs and the copies that survive. https://en.wikipedia.org/wiki/Biblical_manuscript",
    "3. [Reference] Wikipedia. Dynamic and formal equivalence. https://en.wikipedia.org/wiki/Dynamic_and_formal_equivalence",
    "4. [Apologetics] GotQuestions.org. What is formal equivalence in Bible translation? https://www.gotquestions.org/formal-equivalence.html",
    "5. [Commentary] Bible Hub. Commentaries on Nehemiah 8:8 (Ellicott, Benson, Henry on rendering the Law into Aramaic). https://biblehub.com/commentaries/nehemiah/8-8.htm",
    "6. [Reference] Wikipedia. Septuagint. Dating of the Greek translation of the Hebrew Scriptures. https://en.wikipedia.org/wiki/Septuagint",
    "7. [Apologetics] GotQuestions.org. What is the Septuagint? New Testament quotations taken from the Greek. https://www.gotquestions.org/Septuagint.html",
    "8. [Primary Source] Orthodox Presbyterian Church. The Westminster Confession of Faith, 1.8: Scripture to be translated into the vulgar language of every nation. https://www.opc.org/wcf.html",
    "9. [Publisher] ESV.org. Translation Philosophy: an essentially literal translation. https://www.esv.org/translation/philosophy/",
    "10. [Publisher] Lifeway. CSB Translation Philosophy: Optimal Equivalence between formal and functional. https://www.lifeway.com/shop/bibles/csb/translation-philosophy",
    "11. [Publisher] TheNIVBible.com. Commissioning the NIV: an accurate, understandable version of the Bible. https://www.thenivbible.com/blog/niv-commission-for-an-accurate-understandable-version-of-the-bible/",
    "12. [Reference] Wikipedia. Masoretic Text. The Leningrad and Aleppo codices. https://en.wikipedia.org/wiki/Masoretic_Text",
    "13. [Reference] Wikipedia. Leningrad Codex. Copied in Cairo in AD 1008 or 1009; base of Biblia Hebraica Stuttgartensia. https://en.wikipedia.org/wiki/Leningrad_Codex",
    "14. [Apologetics] GotQuestions.org. What is the Masoretic Text? https://www.gotquestions.org/Masoretic-Text.html",
    "15. [Reference] Wikipedia. Great Isaiah Scroll. Date, completeness and agreement with the Masoretic Text. https://en.wikipedia.org/wiki/Great_Isaiah_Scroll",
    "16. [Apologetics] GotQuestions.org. What are the Dead Sea Scrolls and why are they important? https://www.gotquestions.org/Dead-Sea-Scrolls.html",
    "17. [Publisher] ESV.org. Preface to the English Standard Version: textual basis and use of ancient versions in difficult cases. https://www.esv.org/preface/",
    "18. [Reference] Wikipedia. Textual criticism of the New Testament. More than 5,800 Greek manuscripts. https://en.wikipedia.org/wiki/Textual_criticism_of_the_New_Testament",
    "19. [Reference] Wikipedia. Papyrus 75. Dating debate and relationship to Codex Vaticanus. https://en.wikipedia.org/wiki/Papyrus_75",
    "20. [Reference] Wikipedia. Codex Sinaiticus. The oldest complete copy of the New Testament. https://en.wikipedia.org/wiki/Codex_Sinaiticus",
    "21. [Primary Source] Codex Sinaiticus Project. Digital edition of the fourth-century manuscript. https://codexsinaiticus.org/en/",
    "22. [Primary Source] Vatican Apostolic Library. Vat. gr. 1209 (Codex Vaticanus), digitised manuscript. https://digi.vatlib.it/view/MSS_Vat.gr.1209",
    "23. [Reference] Wikipedia. Textus Receptus. Erasmus, Stephanus, Beza and the Elzevirs. https://en.wikipedia.org/wiki/Textus_Receptus",
    "24. [Apologetics] GotQuestions.org. What is the Textus Receptus? https://www.gotquestions.org/Textus-Receptus.html",
    "25. [Reference] Wikipedia. Byzantine text-type. Majority Text editions of Hodges and Farstad and of Robinson and Pierpont. https://en.wikipedia.org/wiki/Byzantine_text-type",
    "26. [Apologetics] GotQuestions.org. What is the Majority Text? https://www.gotquestions.org/Majority-Text.html",
    "27. [Reference] Wikipedia. Novum Testamentum Graece. NA28 and UBS5, the basis of most modern translations. https://en.wikipedia.org/wiki/Novum_Testamentum_Graece",
    "28. [Apologetics] GotQuestions.org. What is the Critical Text? https://www.gotquestions.org/critical-text.html",
    "29. [Reference] Wikipedia. New American Standard Bible: translation philosophy. https://en.wikipedia.org/wiki/New_American_Standard_Bible#Translation_philosophy",
    "30. [Reference] Wikipedia. Eugene Nida. Originator of dynamic equivalence theory. https://en.wikipedia.org/wiki/Eugene_Nida",
    "31. [Apologetics] GotQuestions.org. What is dynamic equivalence in Bible translation? https://www.gotquestions.org/dynamic-equivalence.html",
    "32. [Publisher] Blue Letter Bible. Christian Standard Bible preface: Optimal Equivalence. https://www.blueletterbible.org/csbFrontMatter.cfm",
    "33. [Reference] Wikipedia. The Living Bible. Kenneth Taylor's paraphrase for his children. https://en.wikipedia.org/wiki/The_Living_Bible",
    "34. [Scripture] Bible Hub. 1 Peter 1:13 in parallel translations. https://biblehub.com/1_peter/1-13.htm",
    "35. [Lexical] Bible Hub. Greek 4698, splagchnon (inward parts, affection). https://biblehub.com/greek/4698.htm",
    "36. [Scripture] Bible Hub. Philippians 1:8 in parallel translations. https://biblehub.com/philippians/1-8.htm",
    "37. [Lexical] Bible Hub. Greek 80, adelphos (brother, fellow believer). https://biblehub.com/greek/80.htm",
    "38. [Scripture] Bible Hub. Romans 12:1 in parallel translations. https://biblehub.com/romans/12-1.htm",
    "39. [Publisher] ESV API. Translation Philosophy: thought-for-thought translation and the translator's interpretive views. https://api.esv.org/about/translation-philosophy/",
    "40. [Publisher] Crossway. 10 Things You Should Know about the ESV Translation. https://www.crossway.org/articles/10-things-you-should-know-about-the-esv-translation/",
    "41. [Reference] Wikipedia. Dynamic and formal equivalence: Bible translation. https://en.wikipedia.org/wiki/Dynamic_and_formal_equivalence#Bible_translation",
    "42. [Reference] Wikipedia. Vulgate. Jerome's commission of 382 and the Council of Trent. https://en.wikipedia.org/wiki/Vulgate",
    "43. [Reference] Wikipedia. Wycliffe's Bible. Middle English translations from the Vulgate and Arundel's Constitutions. https://en.wikipedia.org/wiki/Wycliffe%27s_Bible",
    "44. [Apologetics] GotQuestions.org. What is the Wycliffe Bible? https://www.gotquestions.org/Wycliffe-Bible.html",
    "45. [Reference] Wikipedia. Tyndale Bible. The first English translation from the Greek and Hebrew. https://en.wikipedia.org/wiki/Tyndale_Bible",
    "46. [Apologetics] GotQuestions.org. What is the Tyndale Bible? https://www.gotquestions.org/Tyndale-Bible.html",
    "47. [Reference] Wikipedia. Geneva Bible. Its readers and its voyage on the Mayflower. https://en.wikipedia.org/wiki/Geneva_Bible",
    "48. [Apologetics] GotQuestions.org. What is the Geneva Bible? https://www.gotquestions.org/Geneva-Bible.html",
    "49. [Reference] Wikipedia. Douay-Rheims Bible. The 1582 New Testament, 1609-1610 Old Testament and Challoner revision. https://en.wikipedia.org/wiki/Douay%E2%80%93Rheims_Bible",
    "50. [Publisher] Bible Gateway. Douay-Rheims 1899 American Edition (DRA), version information. https://www.biblegateway.com/versions/Douay-Rheims-1899-American-Edition-DRA-Bible/",
    "51. [Reference] Wikipedia. Hampton Court Conference. Rainolds' proposal of a new translation. https://en.wikipedia.org/wiki/Hampton_Court_Conference",
    "52. [Reference] Wikipedia. King James Version: translation committees. https://en.wikipedia.org/wiki/King_James_Version#Translation_committees",
    "53. [Publisher] Bible Gateway. King James Version (KJV), version information. https://www.biblegateway.com/versions/King-James-Version-KJV-Bible/",
    "54. [Reference] Wikipedia. Bishops' Bible. The 1602 edition prescribed as the base text of the KJV. https://en.wikipedia.org/wiki/Bishops%27_Bible",
    "55. [Apologetics] GotQuestions.org. What is the King James Version (KJV)? The translators' stated purpose. https://www.gotquestions.org/King-James-Version-KJV.html",
    "56. [Reference] Wikipedia. King James Version. Estimates of the KJV's dependence on Tyndale. https://en.wikipedia.org/wiki/King_James_Version",
    "57. [Reference] Wikipedia. King James Version: source texts. https://en.wikipedia.org/wiki/King_James_Version#Source_texts",
    "58. [Reference] Wikipedia. Textus Receptus: English translations from the Textus Receptus. https://en.wikipedia.org/wiki/Textus_Receptus#English_translations_from_the_Textus_Receptus",
    "59. [Reference] Wikipedia. King James Version: marginal notes. https://en.wikipedia.org/wiki/King_James_Version#Marginal_notes",
    "60. [Primary Source] CCEL. The Translators to the Reader (1611), part 10: reasons for setting diversity of senses in the margin. https://ccel.org/bible/kjv/preface/pref10.htm",
    "61. [Reference] Wikipedia. King James Version: standard text of 1769. https://en.wikipedia.org/wiki/King_James_Version#Standard_text_of_1769",
    "62. [Scripture] Bible Hub. 2 Thessalonians 2:7 in parallel translations. https://biblehub.com/2_thessalonians/2-7.htm",
    "63. [Scripture] Bible Hub. 1 Thessalonians 4:15 in parallel translations. https://biblehub.com/1_thessalonians/4-15.htm",
    "64. [Lexical] Bible Hub. Hebrew 7214, re'em (wild ox). https://biblehub.com/hebrew/7214.htm",
    "65. [Scripture] Bible Hub. Numbers 23:22 in parallel translations. https://biblehub.com/numbers/23-22.htm",
    "66. [Lexical] Bible Hub. Greek 3957, pascha (Passover), 29 occurrences. https://biblehub.com/greek/3957.htm",
    "67. [Scripture] Bible Hub. Acts 12:4 in parallel translations. https://biblehub.com/acts/12-4.htm",
    "68. [Apologetics] GotQuestions.org. What is the New King James Version (NKJV)? https://www.gotquestions.org/New-King-James-Version-NKJV.html",
    "69. [Reference] Wikipedia. New King James Version. https://en.wikipedia.org/wiki/New_King_James_Version",
    "70. [Publisher] Bible Gateway. New King James Version (NKJV), version information. https://www.biblegateway.com/versions/New-King-James-Version-NKJV-Bible/",
    "71. [Reference] Wikipedia. Orthodox Study Bible. Why the NKJV New Testament was chosen. https://en.wikipedia.org/wiki/Orthodox_Study_Bible",
    "72. [Reference] Wikipedia. Revised Version. The 1881-1885 revision and Westcott and Hort. https://en.wikipedia.org/wiki/Revised_Version",
    "73. [Reference] Wikipedia. American Standard Version. https://en.wikipedia.org/wiki/American_Standard_Version",
    "74. [Reference] Wikipedia. Revised Standard Version. The Isaiah 7:14 dispute and the 1952 burning. https://en.wikipedia.org/wiki/Revised_Standard_Version",
    "75. [Apologetics] GotQuestions.org. What is the Revised Standard Version (RSV)? https://www.gotquestions.org/Revised-Standard-Version-RSV.html",
    "76. [Reference] Wikipedia. New Revised Standard Version. Mandate, motto and gender language. https://en.wikipedia.org/wiki/New_Revised_Standard_Version",
    "77. [Apologetics] GotQuestions.org. What is the New Revised Standard Version (NRSV)? https://www.gotquestions.org/New-Revised-Standard-Version-NRSV.html",
    "78. [Publisher] Bible Gateway. New Revised Standard Version Updated Edition (NRSVue), version information. https://www.biblegateway.com/versions/New-Revised-Standard-Version-Updated-Edition-NRSVue-Bible/",
    "79. [Reference] Wikipedia. New American Standard Bible. Publication history and revisions. https://en.wikipedia.org/wiki/New_American_Standard_Bible",
    "80. [Apologetics] GotQuestions.org. What is the New American Standard Bible (NASB)? https://www.gotquestions.org/New-American-Standard-Bible-NASB.html",
    "81. [Publisher] The Lockman Foundation. NASB 2020. https://www.lockman.org/nasb-2020/",
    "82. [Reference] Wikipedia. Legacy Standard Bible. https://en.wikipedia.org/wiki/Legacy_Standard_Bible",
    "83. [Apologetics] GotQuestions.org. What is the Legacy Standard Bible (LSB)? https://www.gotquestions.org/Legacy-Standard-Bible-LSB.html",
    "84. [Publisher] Three Sixteen Publishing. Legacy Standard Bible. https://lsbible.org/",
    "85. [Reference] Wikipedia. English Standard Version. Origin as a revision of the 1971 RSV. https://en.wikipedia.org/wiki/English_Standard_Version",
    "86. [Apologetics] GotQuestions.org. What is the English Standard Version (ESV)? https://www.gotquestions.org/English-Standard-Version-ESV.html",
    "87. [Publisher] Bible Gateway. English Standard Version (ESV), version information. https://www.biblegateway.com/versions/English-Standard-Version-ESV-Bible/",
    "88. [Reference] Wikipedia. English Standard Version: 2016 text edition and the abandoned permanent-text policy. https://en.wikipedia.org/wiki/English_Standard_Version#2016_text_edition",
    "89. [News] Christian Post. ESV Bible update includes 68 word edits, reverts Genesis 3:16 translation to 2001 wording. https://assets.christianpost.com/news/esv-bible-update-reverts-genesis-316-translation-to-2001-wording.html",
    "90. [Lexical] Bible Hub. Hebrew 8669, teshuqah (desire, longing). https://biblehub.com/hebrew/8669.htm",
    "91. [Scripture] Bible Hub. Genesis 3:16 in parallel translations. https://biblehub.com/genesis/3-16.htm",
    "92. [Publisher] TheNIVBible.com. NIV frequently asked questions: the Committee on Bible Translation. https://www.thenivbible.com/faqs/",
    "93. [Apologetics] GotQuestions.org. What is the New International Version (NIV)? https://www.gotquestions.org/New-International-Version-NIV.html",
    "94. [Publisher] Bible Gateway. New International Version (NIV), version information. https://www.biblegateway.com/versions/New-International-Version-NIV-Bible/",
    "95. [Reference] Wikipedia. New International Version. Origins and US sales. https://en.wikipedia.org/wiki/New_International_Version",
    "96. [Industry] ECPA / Christian Book Expo. Bible Translations Bestsellers, February 2025. https://christianbookexpo.com/bestseller/translations.php?id=0225",
    "97. [Industry] ECPA / Christian Book Expo. Bible Translations Bestsellers, June 2024. https://christianbookexpo.com/bestseller/translations.php?id=0624",
    "98. [Reference] Wikipedia. Today's New International Version. Gender language and discontinuation in 2011. https://en.wikipedia.org/wiki/Today%27s_New_International_Version",
    "99. [Primary Source] Bible Research. Southern Baptist Convention resolution on the 2011 NIV (text). https://bible-researcher.com/niv.2011.sbc.html",
    "100. [News] Baptist News Global. Southern Baptists cannot commend new NIV Bible translation. https://baptistnews.com/article/southern-baptists-cannot-commend-new-niv-bible-translation/",
    "101. [Publisher] TheNIVBible.com. Is the NIV gender-neutral? https://thenivbible.com/niv-gender-neutral/",
    "102. [Reference] Wikipedia. Christian Standard Bible. Revision of the HCSB and its textual basis. https://en.wikipedia.org/wiki/Christian_Standard_Bible",
    "103. [Apologetics] GotQuestions.org. What is the Christian Standard Bible (CSB)? https://www.gotquestions.org/Christian-Standard-Bible-CSB.html",
    "104. [Publisher] Bible Gateway. Christian Standard Bible (CSB), version information. https://www.biblegateway.com/versions/Christian-Standard-Bible-CSB/",
    "105. [Reference] Wikipedia. New English Translation. 60,932 translators' notes. https://en.wikipedia.org/wiki/New_English_Translation",
    "106. [Publisher] NET Bible (Biblical Studies Press). https://netbible.org/",
    "107. [Publisher] Bible Gateway. New English Translation (NET), version information. https://www.biblegateway.com/versions/New-English-Translation-NET-Bible/",
    "108. [Reference] Wikipedia. The Living Bible: origin and base text. https://en.wikipedia.org/wiki/The_Living_Bible#Origin",
    "109. [Reference] Wikipedia. New Living Translation. From Living Bible revision to new translation. https://en.wikipedia.org/wiki/New_Living_Translation",
    "110. [Publisher] Tyndale House. NLT translation process. https://sites.tyndale.com/nlt/translation-process/",
    "111. [Apologetics] GotQuestions.org. What is the New Living Translation (NLT)? https://www.gotquestions.org/New-Living-Translation-NLT.html",
    "112. [Publisher] Bible Gateway. New Living Translation (NLT), version information. https://www.biblegateway.com/versions/New-Living-Translation-NLT-Bible/",
    "113. [Reference] Wikipedia. Good News Bible. Nida's theory and the American Bible Society. https://en.wikipedia.org/wiki/Good_News_Bible",
    "114. [Publisher] Bible Gateway. Good News Translation (GNT), version information. https://www.biblegateway.com/versions/Good-News-Translation-GNT-Bible/",
    "115. [Reference] Wikipedia. The Message (Bible). Peterson's method and criticism. https://en.wikipedia.org/wiki/The_Message_(Bible)",
    "116. [Publisher] Bible Gateway. The Message (MSG), version information. https://www.biblegateway.com/versions/Message-MSG-Bible/",
    "117. [Reference] Wikipedia. Amplified Bible. https://en.wikipedia.org/wiki/Amplified_Bible",
    "118. [Apologetics] GotQuestions.org. What is the Amplified Bible (AMP)? https://www.gotquestions.org/Amplified-Bible-AMP.html",
    "119. [Publisher] Bible Gateway. Amplified Bible (AMP), version information. https://www.biblegateway.com/versions/Amplified-Bible-AMP/",
    "120. [Apologetics] GotQuestions.org. What is the New American Bible (NAB)? Deuterocanonical books in Catholic Bibles. https://www.gotquestions.org/New-American-Bible-NAB.html",
    "121. [Reference] Wikipedia. New American Bible Revised Edition. https://en.wikipedia.org/wiki/New_American_Bible_Revised_Edition",
    "122. [Official] United States Conference of Catholic Bishops. The Bible (NABRE). https://bible.usccb.org/",
    "123. [Publisher] Bible Gateway. New American Bible (Revised Edition) (NABRE), version information. https://www.biblegateway.com/versions/New-American-Bible-Revised-Edition-NABRE-Bible/",
    "124. [Reference] Wikipedia. Jerusalem Bible. The French original, Tolkien's Jonah and the name Yahweh. https://en.wikipedia.org/wiki/Jerusalem_Bible",
    "125. [Reference] Wikipedia. New Jerusalem Bible. https://en.wikipedia.org/wiki/New_Jerusalem_Bible",
    "126. [Reference] Wikipedia. Orthodox Study Bible: translation. https://en.wikipedia.org/wiki/Orthodox_Study_Bible#Translation",
    "127. [Reference] Wikipedia. New Jewish Publication Society of America Tanakh. https://en.wikipedia.org/wiki/New_Jewish_Publication_Society_of_America_Tanakh",
    "128. [Reference] Wikipedia. New World Translation. Publication history and revisions. https://en.wikipedia.org/wiki/New_World_Translation",
    "129. [Primary Source] Watch Tower Society. John 1, New World Translation. https://www.jw.org/en/library/bible/study-bible/books/john/1/",
    "130. [Commentary] Bible Hub. Commentaries on John 1:1 (the anarthrous theos as predicate). https://biblehub.com/commentaries/john/1-1.htm",
    "131. [Apologetics] Christian Research Institute. John 1:1 and the New World Translation (quoting Metzger, Theology Today, 1953). https://www.equip.org/articles/john-11-and-the-new-world-translation/",
    "132. [Primary Source] Watch Tower Society. Colossians 1, New World Translation. https://www.jw.org/en/library/bible/study-bible/books/colossians/1/",
    "133. [Apologetics] GotQuestions.org. Is the New World Translation a valid version of the Bible? https://www.gotquestions.org/New-World-Translation.html",
    "134. [Reference] Wikipedia. New World Translation: use of the name Jehovah. https://en.wikipedia.org/wiki/New_World_Translation#Use_of_the_name_Jehovah",
    "135. [Apologetics] Christian Research Institute. Is the New World Translation of the Bible credible? https://www.equip.org/bible_answers/is-the-new-world-translation-of-the-bible-credible/",
    "136. [Reference] Wikipedia. Joseph Smith Translation of the Bible. https://en.wikipedia.org/wiki/Joseph_Smith_Translation_of_the_Bible",
    "137. [Primary Source] The Church of Jesus Christ of Latter-day Saints. Joseph Smith Translation (scriptures). https://www.churchofjesuschrist.org/study/scriptures/jst?lang=eng",
    "138. [Reference] Wikipedia. The Passion Translation. Criticism and removal from Bible Gateway. https://en.wikipedia.org/wiki/The_Passion_Translation",
    "139. [Apologetics] GotQuestions.org. What is the Passion Translation of the Bible? https://www.gotquestions.org/Passion-Translation.html",
    "140. [Publisher] BroadStreet Publishing. The Passion Translation. https://www.thepassiontranslation.com/",
    "141. [News] ChurchLeaders. Bible Gateway Removes The Passion Translation From Site. https://churchleaders.com/news/416894-bible-gateway-removes-the-passion-translation-from-site.html",
    "142. [News] The Roys Report. Bible Gateway pulls controversial Passion Translation. https://roysreport.com/bible-gateway-pulls-controversial-passion-translation/",
    "143. [Reference] Wikipedia. List of New Testament verses not included in modern English translations. https://en.wikipedia.org/wiki/List_of_New_Testament_verses_not_included_in_modern_English_translations",
    "144. [Evangelical] The Gospel Coalition (Justin Taylor). Why does the King James Bible have some different verses than modern translations? https://www.thegospelcoalition.org/blogs/justin-taylor/why-does-the-king-james-bible-have-some-different-verses-than-modern-translations/",
    "145. [Reference] Wikipedia. Mark 16. Manuscript evidence for the endings of Mark. https://en.wikipedia.org/wiki/Mark_16",
    "146. [Apologetics] GotQuestions.org. Should Mark 16:9-20 be in the Bible? https://www.gotquestions.org/Mark-16-9-20.html",
    "147. [Commentary] Bible Hub. Commentaries on Mark 16:9. https://biblehub.com/commentaries/mark/16-9.htm",
    "148. [Reference] Wikipedia. Jesus and the woman taken in adultery. Manuscript evidence and patristic citation. https://en.wikipedia.org/wiki/Jesus_and_the_woman_taken_in_adultery",
    "149. [Commentary] Bible Hub. Commentaries on John 7:53. https://biblehub.com/commentaries/john/7-53.htm",
    "150. [Reference] Wikipedia. Comma Johanneum. Latin origin, Greek witnesses and Erasmus. https://en.wikipedia.org/wiki/Comma_Johanneum",
    "151. [Commentary] Bible Hub. Commentaries on 1 John 5:7 (Barnes, Cambridge on the manuscript evidence). https://biblehub.com/commentaries/1_john/5-7.htm",
    "152. [Publisher] NET Bible. 1 John 5, with translators' note on the Comma Johanneum. https://netbible.org/bible/1+John+5",
    "153. [Reference] Wikipedia. List of New Testament verses not included in modern English translations: Acts 8:37. https://en.wikipedia.org/wiki/List_of_New_Testament_verses_not_included_in_modern_English_translations#Acts_8:37",
    "154. [Commentary] Bible Hub. Commentaries on Acts 8:37. https://biblehub.com/commentaries/acts/8-37.htm",
    "155. [Scripture] Bible Hub. Acts 8:37 in parallel translations. https://biblehub.com/acts/8-37.htm",
    "156. [Reference] Wikipedia. Novum Instrumentum omne. Erasmus's back-translation of Revelation 22 from the Vulgate. https://en.wikipedia.org/wiki/Novum_Instrumentum_omne",
    "157. [Scripture] Bible Hub. Revelation 22:19 in parallel translations. https://biblehub.com/revelation/22-19.htm",
    "158. [Commentary] Bible Hub. Commentaries on Revelation 22:19. https://biblehub.com/commentaries/revelation/22-19.htm",
    "159. [Apologetics] GotQuestions.org. What is the Comma Johanneum (1 John 5:7-8)? The Trinity taught without it. https://www.gotquestions.org/Comma-Johanneum.html",
    "160. [Lexical] Bible Hub. Hebrew 5959, almah (young woman, maiden). https://biblehub.com/hebrew/5959.htm",
    "161. [Lexical] Bible Hub. Hebrew 1330, bethulah (virgin). https://biblehub.com/hebrew/1330.htm",
    "162. [Lexical] Bible Hub. Greek 3933, parthenos (virgin). https://biblehub.com/greek/3933.htm",
    "163. [Reference] Wikipedia. Isaiah 7:14. The Septuagint's parthenos and Matthew's use of it. https://en.wikipedia.org/wiki/Isaiah_7:14",
    "164. [Scripture] Bible Hub. Isaiah 7:14 in parallel translations. https://biblehub.com/isaiah/7-14.htm",
    "165. [Commentary] Bible Hub. Commentaries on Isaiah 7:14. https://biblehub.com/commentaries/isaiah/7-14.htm",
    "166. [Reference] Wikipedia. They have pierced my hands and my feet. Masoretic, Septuagint and Nahal Hever readings. https://en.wikipedia.org/wiki/They_have_pierced_my_hands_and_my_feet",
    "167. [Commentary] Bible Hub. Commentaries on Psalm 22:16 (Ellicott, Barnes, Keil and Delitzsch on ka'ari). https://biblehub.com/commentaries/psalms/22-16.htm",
    "168. [Scripture] Bible Hub. Psalm 22:16 in parallel translations. https://biblehub.com/psalms/22-16.htm",
    "169. [Scripture] Bible Hub. Deuteronomy 22:25 in parallel translations. https://biblehub.com/deuteronomy/22-25.htm",
    "170. [Lexical] Bible Hub. Hebrew 2388, chazaq (to be strong, prevail, overpower). https://biblehub.com/hebrew/2388.htm",
    "171. [Lexical] Bible Hub. Hebrew 8610, taphas (to seize, take hold of). https://biblehub.com/hebrew/8610.htm",
    "172. [Scripture] Bible Hub. Deuteronomy 22:28 in parallel translations. https://biblehub.com/deuteronomy/22-28.htm",
    "173. [Scripture] Bible Hub. Exodus 22:16 in parallel translations. https://biblehub.com/exodus/22-16.htm",
    "174. [Commentary] Bible Hub. Commentaries on Deuteronomy 22:28. https://biblehub.com/commentaries/deuteronomy/22-28.htm",
    "175. [Scripture] Bible Hub. John 1:18 in parallel translations. https://biblehub.com/john/1-18.htm",
    "176. [Lexical] Bible Hub. Greek 3439, monogenes (only, unique). https://biblehub.com/greek/3439.htm",
    "177. [Publisher] Crossway. ESV Bible Translation Update (2025 text edition). https://www.crossway.org/articles/esv-bible-translation-update/",
    "178. [Reference] Wikipedia. English Standard Version: 2025 text edition. https://en.wikipedia.org/wiki/English_Standard_Version#2025_text_edition",
    "179. [Apologetics] GotQuestions.org. What is the KJV Only movement? https://www.gotquestions.org/KJV-only.html",
    "180. [Reference] Wikipedia. King James Only movement: history. https://en.wikipedia.org/wiki/King_James_Only_movement#History",
    "181. [Reference] Wikipedia. Peter Ruckman. The KJV as advanced revelation. https://en.wikipedia.org/wiki/Peter_Ruckman",
    "182. [Reference] Wikipedia. Gail Riplinger. New Age Bible Versions (1993). https://en.wikipedia.org/wiki/Gail_Riplinger",
    "183. [Reference] Wikipedia. King James Only movement. James White's five classifications. https://en.wikipedia.org/wiki/King_James_Only_movement",
    "184. [Primary Source] Orthodox Presbyterian Church. The Westminster Confession of Faith, chapter 1: the original texts kept pure in all ages. https://www.opc.org/wcf.html#Chapter_01",
    "185. [Reference] Wikipedia. Textus Receptus: providential preservation (Burgon, Hills). https://en.wikipedia.org/wiki/Textus_Receptus#Providential_preservation",
    "186. [Reference] Wikipedia. King James Only movement: doctrine of preservation. https://en.wikipedia.org/wiki/King_James_Only_movement#Doctrine_of_preservation",
    "187. [Commentary] Bible Hub. Commentaries on Psalm 12:7 (Gill: the affix is masculine, not feminine). https://biblehub.com/commentaries/psalms/12-7.htm",
    "188. [Scripture] Bible Hub. Psalm 12:7 in parallel translations. https://biblehub.com/psalms/12-7.htm",
    "189. [Primary Source] CCEL. The Translators to the Reader (1611), part 9: an answer to the imputations of our adversaries. https://ccel.org/bible/kjv/preface/pref9.htm",
    "190. [Reference] Wikipedia. Textus Receptus: variants within the Textus Receptus editions. https://en.wikipedia.org/wiki/Textus_Receptus#Variants_within_the_Textus_Receptus_editions",
    "191. [Reference] Wikipedia. King James Version: revised versions of 1629, 1638 and 1769. https://en.wikipedia.org/wiki/King_James_Version#Revised_versions",
    "192. [Reference] Wikipedia. Novum Instrumentum omne: Greek sources of the first edition. https://en.wikipedia.org/wiki/Novum_Instrumentum_omne#Greek_sources",
    "193. [Seminary] Detroit Baptist Theological Seminary. The Embarrassing Preface to the King James Version. https://dbts.edu/2012/04/09/the-embarrassing-preface-to-the-king-james-version/",
    "194. [Reference] Wikipedia. King James Only movement: criticism. https://en.wikipedia.org/wiki/King_James_Only_movement#Criticism",
    "195. [Reference] Wikipedia. Dynamic and formal equivalence: theory and practice. https://en.wikipedia.org/wiki/Dynamic_and_formal_equivalence#Theory_and_practice",
    "196. [Publisher] NET Bible. John 1, with translators' notes. https://netbible.org/bible/John+1",
    "197. [Apologetics] GotQuestions.org. Which is the best Bible translation? Comparing several translations. https://www.gotquestions.org/Bible-translations.html",
    "198. [Academic] Center for the Study of New Testament Manuscripts. Digital images of Greek New Testament manuscripts. https://www.csntm.org/",
    "199. [Reference] Wikipedia. List of New Testament verses not included in modern English translations: the sixteen omitted verses. https://en.wikipedia.org/wiki/List_of_New_Testament_verses_not_included_in_modern_English_translations#The_sixteen_omitted_verses",
    "200. [Reference] Wikipedia. New World Translation: translators. https://en.wikipedia.org/wiki/New_World_Translation#Translators",
    "201. [Reference] Wikipedia. Septuagint: Christian use. https://en.wikipedia.org/wiki/Septuagint#Christian_use",
    "202. [Apologetics] GotQuestions.org. Textual criticism: what is it? https://www.gotquestions.org/textual-criticism.html"
  ],
  lastUpdated: "19-10-2026"
}
