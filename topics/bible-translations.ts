import type { Topic } from './types'

// The renderer passes block-level HTML through line by line, so the table must
// stay on a single line or its closing tags would be wrapped in paragraphs.
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

The Old Testament was written in Hebrew, with portions of Ezra and Daniel in Aramaic, and the New Testament in Koine Greek. English alone has hundreds of translations and paraphrases, whole or partial, going back to Anglo-Saxon renderings of the Gospels[^1][^2]. Every committee that produces one answers two separate questions before it writes a word.

- **Which text?** The original documents (the autographs) are believed lost long ago. Translators work from later copies, and where the copies differ they have to decide which reading is original[^3].
- **How literally?** Hebrew and Greek do not map word for word onto English. A translation can keep close to the form of the original, restate its meaning in natural modern English, or settle somewhere between the two[^4][^5][^6].

<?viz bible-translations/spectrum?>


`,
  subtopics: [
    {
      id: "manuscripts",
      title: "What Translators Actually Translate: The Manuscripts",
      tags: ["Manuscripts"],
      content: `
### The Old Testament

The standard Hebrew text is the Masoretic Text, the form copied and vocalised by Jewish scribes (the Masoretes) in the early Middle Ages. Its oldest complete copy, the Leningrad Codex, was made in Cairo in AD 1008 or 1009 and is the base of the *Biblia Hebraica Stuttgartensia* that most modern translations use. The older Aleppo Codex has been missing large sections since the 1947 riots in Aleppo[^7][^8][^9][^10].

The Dead Sea Scrolls, found from 1947 onward, pushed the evidence back roughly a thousand years. The Great Isaiah Scroll, dated around 125 BC, preserves all sixty-six chapters in the same order as the Masoretic Text and is generally consistent with it, while containing more than 2,600 variants and scribal corrections[^11][^12].

Modern translations follow the Masoretic Text and turn to the Dead Sea Scrolls, the Septuagint, the Samaritan Pentateuch and other ancient versions only in difficult cases, usually with a footnote. The ESV preface describes exactly this practice[^13].

### The New Testament

The New Testament survives in more than 5,800 Greek manuscripts, around 10,000 Latin manuscripts and some 9,300 in other ancient languages[^14][^15]. The oldest substantial papyri, such as 𝔓75, are traditionally dated to around AD 200 to 250, though some scholars now argue for dates into the early fourth century[^16][^17]. The oldest complete New Testament is in Codex Sinaiticus, copied in the fourth century, and Codex Vaticanus is of similar age[^18][^19][^20].

Printed Greek New Testaments fall into three families, and the family a translation uses explains most of the differences in its New Testament:

- **The Textus Receptus** ("received text") is the line of printed editions that began with Erasmus in 1516 and continued through Stephanus (1550), Beza and the Elzevirs. Erasmus worked from a small number of late manuscripts, and this text underlies the Reformation-era Bibles, including the KJV[^21][^22].

<?viz bible-translations/manuscripts?>


<?viz bible-translations/manuscript-timeline?>

- **The Majority Text** follows whatever reading most surviving manuscripts contain. Because more than 80% of the later minuscule manuscripts carry the Byzantine text, this produces a Byzantine text, edited in modern form by Hodges and Farstad and by Robinson and Pierpont[^23][^24].
- **The Critical Text**, published as the Nestle-Aland 28th edition and the identical United Bible Societies 5th edition, weighs the age and quality of manuscripts rather than their number. It forms the basis of most modern translations[^25][^26].

**See also:** [Was the Quran Perfectly Preserved? (Islam)](/categories/islam#section-preservation), [Did Constantine or the Council of Nicaea Choose the Bible? (The Canon)](/categories/canon#section-did-constantine-choose-the-bible).
`
    },
    {
      id: "translation-philosophies",
      title: "Word for Word, Thought for Thought, and Paraphrase",
      tags: ["Method"],
      content: `
Publishers place their own versions on this spectrum. Crossway calls the ESV "essentially literal", Lifeway places the CSB in the middle of the formal-to-functional range, and the NIV's translators describe their aim as balancing transparency to the original with ease of understanding[^27][^28][^29].


- **Formal equivalence** (word for word) renders each word and grammatical structure of the original as closely as English allows, keeping its idioms and even its ambiguities. The NASB is the classic example[^30][^31].
- **Dynamic or functional equivalence** (thought for thought) was named by the linguist Eugene Nida, who defined it as a translation that produces in modern readers essentially the same response the original produced in its first readers[^32][^33].
- **Optimal equivalence** is the CSB's name for a mixed method: a literal rendering wherever it is clear in English, and a freer one wherever a literal rendering would obscure the meaning[^34][^35].
- **Paraphrase** restates the text freely, often through one person's wording. The Living Bible began when Kenneth Taylor paraphrased Scripture for his own children because they could not follow the passages read to them[^36][^37].

### The difference in practice

- **1 Peter 1:13.** The KJV and NKJV keep Peter's image: "gird up the loins of your mind." The NASB has "prepare your minds for action", the ESV "preparing your minds for action", and the NIV "with minds that are alert and fully sober"[^38].
- **Philippians 1:8.** Paul longs for the Philippians with the *splanchna* (σπλάγχνα, inner parts) of Christ, literally the inner organs, which Greek treated as the seat of the emotions. The KJV renders it "in the bowels of Jesus Christ"; nearly every modern version has "with the affection of Christ Jesus"[^39][^40].
- **Romans 12:1.** Paul addresses the church as *adelphoi* (ἀδελφοί, brothers), which Greek used for a mixed group as well as for men. The KJV and ESV have "brethren" or "brothers"; the NIV, CSB, NASB 2020 and NLT have "brothers and sisters"[^41][^42].

Each approach carries a cost. A formal translation preserves the links between words and passages and leaves interpretation to the reader, but can produce English that is wooden or misleading. Crossway argues that thought-for-thought versions are more likely to carry the translator's interpretive views[^43][^44]. Functional translators answer that every translation interprets, and that clarity in the receptor language is itself a form of accuracy[^4].

<?viz bible-translations/verse-comparer?>

`
    },
    {
      id: "before-the-kjv",
      title: "Before the KJV: Wycliffe, Tyndale, Geneva and Douay-Rheims",
      tags: ["History"],
      content: `
Translating Scripture is as old as Scripture. When Ezra read the Law to the returned exiles, the Levites "gave the sense" (Nehemiah 8:8), and commentators from Matthew Henry to Ellicott take this to include rendering the Hebrew into the Aramaic the people now spoke[^45]. Jewish scholars in Egypt translated the Hebrew Scriptures into Greek, beginning with the Torah in the third century BC, and the New Testament writers quote that Greek translation (the Septuagint) freely[^46][^47]. The Westminster Confession (1646) holds that the Hebrew and Greek alone are the final court of appeal, and in the same paragraph requires that Scripture "be translated into the vulgar language of every nation"[^48].


- **The Latin Vulgate.** For a thousand years Western Christians read Scripture in Latin, in the translation Jerome began in 382 at the commission of Pope Damasus I. The Council of Trent (1545-1563) affirmed it as the Catholic Church's official Latin Bible[^49][^50].
- **Wycliffe's Bible** (about 1382-1395) was the first complete Bible in English, translated from the Vulgate rather than the Hebrew and Greek. From 1409 Archbishop Arundel's Constitutions restricted unlicensed English translation[^51][^52].
- **William Tyndale** published the first printed English New Testament in 1526, the first English translation made directly from the Greek, and later the Pentateuch from the Hebrew. Copies were bought up and burned, and Tyndale was condemned as a heretic and executed in 1536[^53][^54].
- **The Geneva Bible** (1560), produced by English Protestant exiles in Geneva with extensive study notes, was the Bible of Shakespeare, John Knox and Oliver Cromwell, and travelled to America on the Mayflower. It remained the most popular English Bible for decades after 1611[^55][^56][^57].
- **The Douay-Rheims Bible** was the Catholic answer: its New Testament appeared at Rheims in 1582 and its Old Testament at Douai in 1609-1610, translated from the Vulgate by the English College in exile. Bishop Richard Challoner's revision of 1749-1752 is the form still printed[^58][^59][^60].
`
    },
    {
      id: "king-james-version",
      title: "The King James Version (1611)",
      tags: ["History", "KJV debate"],
      content: `
At the Hampton Court Conference of January 1604, the Puritan John Rainolds proposed a new translation to replace the Geneva Bible, and King James agreed[^61][^62]. Forty-seven scholars, all members of the Church of England, worked in six companies and published the result in 1611[^63][^64][^65][^66].

### How original was it?

The KJV was a revision, not a fresh translation. The translators were told to follow the 1602 edition of the Bishops' Bible and to depart from it only where the original required, consulting Tyndale, Coverdale, Matthew's Bible, the Great Bible and the Geneva Bible[^67]. Their own preface says the aim was never "to make a new translation, nor yet to make of a bad one a good one... but to make a good one better"[^68][^69]. Tyndale's influence runs throughout: one recent estimate finds 84% of the KJV New Testament word for word identical to Tyndale, and about 76% of the Old Testament books Tyndale completed[^70][^65].

- **Text.** The New Testament translates the Textus Receptus, drawing on the editions of Erasmus, Stephanus and Beza; the Old Testament the Masoretic Text; and the Apocrypha, included in every 1611 copy, the Septuagint and Vulgate[^65][^71].
- **Notes.** The translators were forbidden the doctrinal notes of the Geneva Bible, but placed around 8,500 alternative English renderings in the margin[^65]. Their preface defends the practice: where the sense is uncertain, "variety of Translations is profitable for the finding out of the sense of the Scriptures"[^72].
- **Today's KJV is not the 1611 text.** Almost every KJV printed today reproduces Benjamin Blayney's Oxford edition of 1769, which differs from the 1611 printing in around 24,000 places, nearly all of them spelling and punctuation[^65].

### Where the English has moved

Several KJV words have changed meaning since 1611. In 2 Thessalonians 2:7 "he who now letteth will let" means "he who now restrains will restrain"[^73][^74]. In 1 Thessalonians 4:15 the living "shall not prevent them which are asleep" means they will not precede them[^75][^76].

A few renderings are now regarded as mistakes. "Unicorn" (Numbers 23:22) translates the Hebrew *re'em* (רְאֵם, wild ox), a wild ox; the KJV followed the Septuagint and Vulgate, which also gave the animal one horn[^77][^78]. In Acts 12:4 the KJV has "Easter" for *pascha* (πάσχα, Passover), which it renders "Passover" in its 28 other occurrences[^79][^80].
`
    },
    {
      id: "nkjv",
      title: "The New King James Version (1982)",
      tags: ["KJV debate"],
      content: `
Thomas Nelson published the NKJV New Testament in 1979 and the full Bible in 1982. It updates the KJV's vocabulary and grammar while keeping its sentence structure and its Textus Receptus New Testament, so it is the only major modern version on that Greek text[^81][^82].

Its footnotes mark the places where the Critical Text and the Majority Text read differently from the Textus Receptus, which lets a reader of a TR-based Bible see the textual question directly[^83]. The Eastern Orthodox Church chose the NKJV New Testament for the *Orthodox Study Bible* because it follows the Byzantine-type text that the Orthodox Church uses[^84].
`
    },
    {
      id: "literal-modern-versions",
      title: "Literal Modern Versions: RV, RSV, NRSV, NASB, LSB and ESV",
      tags: ["Modern versions"],
      content: `
- **The Revised Version** (1881-1885) and its American counterpart, the **American Standard Version** (1901), were the first official revisions of the KJV and the first English Bibles on a critical Greek text. Westcott and Hort sat on the revision committee[^85][^86][^87].
- **The Revised Standard Version** (1952), from the National Council of Churches, rendered Isaiah 7:14 as "a young woman shall conceive". The choice provoked fierce opposition, and in November 1952 a North Carolina pastor, Luther Hux, publicly burned the page[^88][^89][^90].

<?viz bible-translations/family-tree?>

- **The New Revised Standard Version** (1989) was produced by an ecumenical committee of about thirty under the motto "as literal as possible, as free as necessary", with a mandate to remove masculine-oriented language where it did not reflect the original setting. The Updated Edition (NRSVue) followed in 2021[^91][^92][^69].
- **The New American Standard Bible** (1971; revised 1995 and 2020), from the Lockman Foundation, is widely regarded as the most literal of the major twentieth-century translations[^31][^93][^94].
- **The Legacy Standard Bible** (2021) is a revision of the NASB 1995 by faculty of The Master's Seminary. It renders God's covenant name as "Yahweh" instead of "LORD"[^95][^96][^97].
- **The English Standard Version** (2001) is Crossway's revision of the 1971 RSV by more than 100 evangelical scholars and pastors[^98][^99][^100].

The ESV shows that even a single translation keeps moving. In 2016 Crossway changed Genesis 3:16 from "your desire shall be for your husband" to "your desire shall be contrary to your husband" and announced that the text would never change again; the next month it dropped the permanent-text policy, and the 2025 edition restored the earlier wording[^98][^101][^102][^103].
`
    },
    {
      id: "middle-versions",
      title: "The Middle of the Spectrum: NIV, CSB and NET",
      tags: ["Modern versions"],
      content: `
**The New International Version** grew from a 1957 study by the National Association of Evangelicals and the Christian Reformed Church. The Committee on Bible Translation, a self-perpetuating body of fifteen evangelical scholars formed in 1965, published the New Testament in 1973 and the whole Bible in 1978, with revisions in 1984 and 2011[^104][^105][^106]. The NIV has long been the best-selling translation in the United States[^107][^108]. Recent monthly ECPA rankings put the ESV, NIV, KJV and NLT as the four best-selling translations, with the ESV and NIV trading first place[^109][^110].

The NIV is also the centre of the debate over gender language. Today's New International Version (2005) used gender-inclusive language for people, and both it and the 1984 NIV were withdrawn when the 2011 NIV replaced them[^111][^107]. In June 2011 the Southern Baptist Convention passed a resolution saying the 2011 NIV kept about 75% of the TNIV's inaccurate gender language, and declining to commend it[^112][^108]. The translators reply that renderings such as "brothers and sisters" for *adelphoi* (ἀδελφοί, brothers) reflect what the Greek meant to its first hearers rather than changing it[^113].

**The Christian Standard Bible** (2017) is a major revision of the Holman Christian Standard Bible (2004), published by Holman and Lifeway and translated from the Nestle-Aland 28th edition by the "optimal equivalence" method[^114][^115][^35].

**The New English Translation** (NET, 2005) was made by more than twenty scholars and carries 60,932 translators' notes explaining textual and translation choices. It is free to read and download[^116][^117][^118].
`
    },
    {
      id: "readable-versions",
      title: "Readable Versions and Paraphrases: NLT, GNT, The Message and the Amplified",
      tags: ["Modern versions"],
      content: `
- **The Living Bible** (1971) is Kenneth Taylor's personal paraphrase of the 1901 American Standard Version, not a translation from the original languages[^36].
- **The New Living Translation** (1996) began in 1989 as a revision of The Living Bible and became a new translation from the Hebrew and Greek by ninety scholars, with a second edition in 2004. Its translators aimed to render the text as literally as possible wherever that produced clear, natural English[^119][^120][^121][^122].
- **The Good News Translation** (New Testament 1966, whole Bible 1976), from the American Bible Society, was built directly on Eugene Nida's dynamic equivalence theory[^123][^124][^125].
- **The Message** (1993-2002) is Eugene Peterson's idiomatic rendering from the original languages, reviewed by a team of scholars. It sits at the far dynamic end of the spectrum and has been criticised for loose handling of the text, including rendering *kyrios* (κύριος, Lord) as "Master" where Jesus is called Lord[^126][^127].
- **The Amplified Bible** (1965), from the Lockman Foundation and Zondervan, adds bracketed "amplifications" that spell out shades of meaning, marked off from the translation itself[^128][^129][^130][^131].
`
    },
    {
      id: "catholic-orthodox-jewish",
      title: "Catholic, Orthodox and Jewish Translations",
      tags: ["Other traditions"],
      content: `
Catholic and Orthodox Bibles include the deuterocanonical books (Tobit, Judith, 1 and 2 Maccabees, Wisdom, Sirach, Baruch and additions to Esther and Daniel), which Protestant Bibles omit or print as Apocrypha. The history of that difference is covered under [the Canon](/categories/canon)[^132].

- **The New American Bible Revised Edition** (2011), approved by the United States Conference of Catholic Bishops, joins the 1986 New Testament to a fully revised Old Testament. American Masses still use a lectionary based on an earlier form of the NAB[^133][^134][^135].
- **The Jerusalem Bible** (1966) was made from the French translation of the Dominican École Biblique in Jerusalem. J. R. R. Tolkien translated Jonah for it and is listed among its principal collaborators. It renders God's name as "Yahweh", a practice the Vatican asked to be dropped from the liturgy in 2008[^136][^137]. The **New Jerusalem Bible** revised it in 1985[^138][^136].
- **The Orthodox Study Bible** (2008) translates the Old Testament from the Septuagint, the Old Testament of the Orthodox Church, rather than the Hebrew, and uses the NKJV for the New Testament[^84].
- **The New JPS Tanakh** (1985), from the Jewish Publication Society, is a fresh Jewish translation of the Masoretic Text, replacing the society's 1917 version[^139][^2].
`
    },
    {
      id: "sectarian-versions",
      title: "Sectarian Versions: The New World Translation, the Joseph Smith Translation and The Passion Translation",
      tags: ["Other traditions"],
      content: `
### The New World Translation

The Watch Tower Society published the New World Translation's New Testament in 1950 and the whole Bible in 1961, with a major revision in 2013. Its translators have never been publicly named[^140][^141].

- **John 1:1** reads "the Word was a god"[^142][^143]. In Greek the word *theos* (θεός, God) stands without the article and before the verb, which marks it as describing what the Word was, not as making him one god among several[^144][^143]. Bruce Metzger of Princeton called the rendering a mistranslation and observed that "if the Jehovah's Witnesses take this translation seriously, they are polytheists"[^143][^145].
- **Colossians 1:16** reads "by means of him all other things were created". The word "other" has no counterpart in the Greek and turns Christ from the Creator of all things into the first of the things created[^146][^141].
- The NWT also puts "Jehovah" into the New Testament 237 times where the Greek manuscripts have *kyrios* (κύριος, Lord) or *theos* (God)[^140][^145].

### The Joseph Smith Translation

Joseph Smith revised the KJV, mostly between 1830 and 1833, describing the work as the restoration of lost material. It adds whole passages, including the expansions of Genesis published as the Book of Moses, and labels the Song of Songs "not inspired writings". The Latter-day Saint church prints the KJV with selections from Smith's revision in its footnotes and appendix[^147][^148].

### The Passion Translation

The Passion Translation, led by Brian Simmons (New Testament 2017), is marketed as a translation, but scholars have criticised it as a one-man paraphrase that adds material without support in the manuscripts[^149][^150][^151]. Bible Gateway removed it from its site in early 2022; its publisher said the licence was discontinued without explanation[^152][^153].

**See also:** [Jehovah's Witnesses (Other Religions)](/categories/religions#section-jehovahswitnesses), [Mormonism (LDS) (Other Religions)](/categories/religions#section-mormonism).
`
    },
    {
      id: "missing-verses",
      title: "Why Some Verses Are Missing or Bracketed",
      tags: ["Manuscripts", "Disputed verses"],
      content: `
Lists of "verses removed from the NIV" circulate widely. The same verses are missing from the main text, or moved to footnotes, in the Revised Version of 1881 and the American Standard Version of 1901, so the change predates the NIV by nearly a century. These verses appear in the Textus Receptus but not in the oldest manuscripts[^154][^155][^156].

- **Mark 16:9-20.** Mark ends at 16:8 in the two oldest complete manuscripts of the Gospel, Codex Sinaiticus and Codex Vaticanus. Most modern versions print the longer ending in brackets or with a note instead of dropping it[^157][^158][^159].
- **John 7:53-8:11** (the woman caught in adultery) is absent from 𝔓66 and 𝔓75, from around AD 200, and from Sinaiticus and Vaticanus. There is a broad scholarly consensus that it was added later, although fourth-century fathers such as Ambrose and Augustine already quote it, and the Catholic Church receives it as canonical[^160][^161][^162].
- **1 John 5:7-8** (the Comma Johanneum, "the Father, the Word, and the Holy Ghost: and these three are one") is found mainly in Latin manuscripts. Its earliest Greek witness dates from the fourteenth century, and Erasmus added it only to his third edition in 1522, under pressure, while doubting it[^163][^164][^165].
- **Acts 8:37** (the Ethiopian's confession) is absent from the early manuscripts and entered the Textus Receptus through Erasmus, who found it in a late source[^154][^166][^167].
- **Revelation 22:19.** Erasmus's only manuscript of Revelation lacked the final six verses, so he translated them back into Greek from the Latin Vulgate. The KJV's "book of life" in 22:19, against "tree of life" in the Greek manuscripts, comes from that back-translation[^168][^169][^170].

No doctrine depends on these passages. The Trinity, for example, is taught throughout the New Testament without the Comma Johanneum (Matthew 28:19; 2 Corinthians 13:14)[^171][^172].

**See also:** [Historical Development and Heresies (The Trinity)](/categories/trinity#section-history-and-heresies).
`
    },
    {
      id: "famous-differences",
      title: "Famous Differences: Isaiah 7:14, Psalm 22:16, Deuteronomy 22:28 and John 1:18",
      tags: ["Disputed verses"],
      content: `
### Isaiah 7:14: "virgin" or "young woman"?

The Hebrew word is *almah* (עַלְמָה, young woman), a young woman of marriageable age. Hebrew has a more specific word for virgin, *bethulah* (בְּתוּלָה, virgin), which Isaiah did not use[^173][^174]. The Jewish translators of the Septuagint, two centuries before Christ, rendered *almah* here as *parthenos* (παρθένος, virgin), "virgin", and Matthew 1:23 quotes that reading[^175][^176]. The KJV, NKJV, NASB, ESV, NIV, CSB and NLT have "virgin"; the RSV, NRSV and NET have "young woman"[^177][^178]. The wider argument is covered under [Prophecy](/categories/prophecy).

### Psalm 22:16: "they pierced my hands and my feet"

Most manuscripts of the Masoretic Text read *ka'ari* (כָּאֲרִי, like a lion), "like a lion, my hands and my feet", which leaves the sentence without a verb. The Septuagint, translated before the Christian era, reads "they dug" (pierced). A Dead Sea fragment from Nahal Hever spells the word *ka'aru*, which supports a verb, although the same scribe misspells other words in the line[^179][^180]. Nearly every English version reads "pierced"; the NET has "like a lion they pin my hands and feet"[^181].

### Deuteronomy 22:28: "rapes her" or "seizes her"?

In verse 25 the man overpowers a betrothed woman in the open country, and he alone is put to death. The verb is *chazaq* (חָזַק, overpower), "to overpower, force"[^182][^183]. Verse 28 switches to *taphas* (תָּפַשׂ, seize), "to seize, take hold of"[^184]. The NIV, CSB and NET render verse 28 "rapes her"; the ESV, NASB, LSB and NKJV keep "seizes her and lies with her", and the KJV has "lay hold on her, and lie with her"[^185]. The more literal versions preserve the change of verb, which leaves open the reading that verse 28 parallels the seduction law of Exodus 22:16-17, where the father may refuse the marriage altogether[^186][^187]. The full discussion is under [Women](/categories/women).

### John 1:18: modern versions and the deity of Christ

The KJV and NKJV read "the only begotten Son", following later manuscripts. The oldest manuscripts read *monogenēs theos* (μονογενὴς θεός, only God), "the only God" or "God the One and Only", so the NASB, LSB, ESV, NIV, CSB and NLT name the Son as God in this verse more directly than the KJV does[^188][^189]. The ESV's 2025 edition changed its rendering from "the only God" to "God the only Son"[^190][^98].

**See also:** [Linguistic Analysis: Arsenokoitai and Malakoi (Homosexuality)](/categories/homosexuality#section-greek-terms), [Virgin Birth Prophecy (Prophecy)](/categories/prophecy#section-virgin-birth), [Deuteronomy 22 and the Laws on Sexual Violence (Women)](/categories/women#section-sexual-violence-laws).
`
    },
    {
      id: "king-james-only",
      title: "The King James Only Debate",
      tags: ["KJV debate"],
      content: `
The King James Only movement holds that the KJV, or the Textus Receptus behind it, is the only faithful English Bible[^191][^21]. Its modern form traces to *Our Authorized Bible Vindicated* (1930) by the Seventh-day Adventist Benjamin Wilkinson[^192][^193]. The most radical wing follows the Baptist Peter Ruckman (1921-2016), who taught that the English KJV is "advanced revelation" that corrects the Greek, a view most KJV advocates reject[^194][^192]. Gail Riplinger's *New Age Bible Versions* (1993) alleged that the NIV, NASB and even the NKJV were linked to the New Age movement[^195][^193].

James White divides the movement into five positions, from those who simply prefer the KJV to those who treat it as new revelation. Only the later positions deny that other translations are the word of God[^196].

### The case for the Textus Receptus

The serious argument concerns the text, not the English. Its defenders, from John Burgon in the nineteenth century to Edward Hills in the twentieth, argue that God's providential preservation of Scripture (the Westminster Confession's "kept pure in all ages") points to the text the church actually used for centuries, which is the Byzantine text found in the great majority of manuscripts[^48][^71][^192]. Psalm 12:6-7, "thou shalt preserve them from this generation for ever", is often cited as a promise to preserve the words.

### The responses

- **Psalm 12:7.** The pronoun "them" in the Hebrew is masculine, and "words" in verse 6 is feminine. The verse therefore promises to keep the afflicted poor of verse 5, as John Gill (a strong defender of the Hebrew text) points out, and as the ESV, NIV and CSB render it[^197][^198].
- **The translators' own view.** The KJV translators wrote that "the very meanest translation of the Bible in English, set forth by men of our profession... containeth the word of God, nay, is the word of God"[^199].
- **Which Textus Receptus, and which KJV?** The editions of Erasmus, Stephanus and Beza differ from one another in hundreds of places, and the KJV translators chose between them. The printed KJV has itself been revised, by Cambridge in 1629 and 1638 and by Oxford in 1769[^71][^65].
- **The age of the evidence.** Erasmus's first edition rested on about eight Greek manuscripts, none of them early, and in places, as in Revelation 22, on no Greek manuscript at all[^168][^200].

Preferring the KJV for its language, its liturgical history or its textual base is a legitimate choice. The claim that every other translation is corrupt goes beyond what the evidence, and the KJV translators themselves, support[^201][^192].
`
    },
    {
      id: "choosing-a-translation",
      title: "Which Translation Is Closest to the Original?",
      tags: ["Method"],
      content: `
"Closest to the original" can mean closest to its form or closest to its meaning, and no single translation wins on both counts[^4][^33].

- **For close study:** the NASB, LSB, ESV and NKJV keep nearest to the wording of the Hebrew and Greek. The NET's notes explain the textual and translation choices behind each verse[^202][^118].
- **For reading and devotion:** the CSB and NIV balance accuracy and readability; the NLT is the most readable of the committee translations.
- **For comparison:** setting two versions from different points on the spectrum side by side shows where the original is ambiguous and where a translator has made a decision[^203].
- **For doctrine:** paraphrases such as The Message and The Passion Translation are unsuitable, and the New World Translation and the Joseph Smith Translation alter texts to fit a theology.

Any mainstream translation, Protestant or Catholic, formal or functional, teaches the same gospel, the same Christ and the same way of salvation. The differences between them are real, and the footnotes in most editions show where they lie.
`
    },
    {
      id: "objections",
      title: "Common Objections",
      tags: ["Objections"],
      content: `
**"The Bible has been translated so many times it is like a game of telephone."** Modern translations are not translations of translations. Each goes back to the Hebrew and Greek, and the surviving manuscripts can be compared directly; thousands have been photographed and published online[^204].

**"Modern versions remove verses to hide the deity of Christ."** The omitted verses are absent from the oldest manuscripts, not deleted for doctrinal reasons, and several modern versions call Christ "God" more directly than the KJV does, as in John 1:18[^154].

**"Translators are biased."** Every translator brings convictions, which is why the major versions are made by committees, often from several denominations, and publish their textual basis and method. The sectarian versions are the exception: the NWT's translators remain anonymous[^140].

**"Which Bible did Jesus use?"** Jesus read the Hebrew Scriptures, and the New Testament writers often quote the Greek Septuagint, a translation, as the word of God[^205][^206].

**"If translations differ, how can Scripture be inerrant?"** Inerrancy has always been claimed for the original writings, not for any copy or translation. Textual criticism exists to recover those writings as closely as possible, and the variants that remain affect no doctrine of the faith[^207].
`
    },
  ],
  sources: [
    "1. [Encyclopedia] 'Versions of the Bible.' Catholic Encyclopedia (1913), New Advent. https://www.newadvent.org/cathen/15367a.htm",
    "2. [Wikipedia] 'Bible translations into English.' https://en.wikipedia.org/wiki/Bible_translations_into_English",
    "3. [Wikipedia] Biblical manuscript. The loss of the autographs and the copies that survive. https://en.wikipedia.org/wiki/Biblical_manuscript",
    "4. [Wikipedia] Dynamic and formal equivalence. https://en.wikipedia.org/wiki/Dynamic_and_formal_equivalence",
    "5. [Apologetics] GotQuestions.org. What is formal equivalence in Bible translation? https://www.gotquestions.org/formal-equivalence.html",
    "6. [Reference] About the NIV. Biblica. https://www.thenivbible.com/about-the-niv/",
    "7. [Encyclopedia] 'Masorah.' Encyclopedia.com. https://www.encyclopedia.com/religion/encyclopedias-almanacs-transcripts-and-maps/masorah",
    "8. [Wikipedia] Leningrad Codex. Copied in Cairo in AD 1008 or 1009; base of Biblia Hebraica Stuttgartensia. https://en.wikipedia.org/wiki/Leningrad_Codex",
    "9. [Apologetics] GotQuestions.org. What is the Masoretic Text? https://www.gotquestions.org/Masoretic-Text.html",
    "10. [Wikipedia] 'Masoretic Text.' https://en.wikipedia.org/wiki/Masoretic_Text",
    "11. [Wikipedia] Great Isaiah Scroll. Date, completeness and agreement with the Masoretic Text. https://en.wikipedia.org/wiki/Great_Isaiah_Scroll",
    "12. [Apologetics] GotQuestions.org. What are the Dead Sea Scrolls and why are they important? https://www.gotquestions.org/Dead-Sea-Scrolls.html",
    "13. [Reference] ESV.org. Preface to the English Standard Version: textual basis and use of ancient versions in difficult cases. https://www.esv.org/preface/",
    "14. [Wikipedia] Textual criticism of the New Testament. More than 5,800 Greek manuscripts. https://en.wikipedia.org/wiki/Textual_criticism_of_the_New_Testament",
    "15. [Reference] Daniel B. Wallace, New Testament Textual Criticism, lesson 3. BiblicalTraining.org. https://www.biblicaltraining.org/learn/institute/nt605-textual-criticism/nt605-03-the-number-of-variants",
    "16. [Wikipedia] Papyrus 75. Dating debate and relationship to Codex Vaticanus. https://en.wikipedia.org/wiki/Papyrus_75",
    "17. [Reference] Nongbri B. Reconsidering the Place of Papyrus Bodmer XIV-XV (P75). Journal of Biblical Literature, 2016. Macquarie University. https://researchers.mq.edu.au/en/publications/reconsidering-the-place-of-papyrus-bodmer-xiv-xv-p75-in-the-textu/",
    "18. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Codex Sinaiticus.' https://www.newadvent.org/cathen/04085a.htm",
    "19. [Primary Source] Vatican Apostolic Library. Vat. gr. 1209 (Codex Vaticanus), digitised manuscript. https://digi.vatlib.it/view/MSS_Vat.gr.1209",
    "20. [Wikipedia] 'Codex Sinaiticus.' https://en.wikipedia.org/wiki/Codex_Sinaiticus",
    "21. [Academic] 'The Text of the New Testament.' Religious Studies Center, Brigham Young University. https://rsc.byu.edu/king-james-bible-restoration/text-new-testament",
    "22. [Apologetics] GotQuestions.org. What is the Textus Receptus? https://www.gotquestions.org/Textus-Receptus.html",
    "23. [Wikipedia] Byzantine text-type. Majority Text editions of Hodges and Farstad and of Robinson and Pierpont. https://en.wikipedia.org/wiki/Byzantine_text-type",
    "24. [Apologetics] GotQuestions.org. What is the Majority Text? https://www.gotquestions.org/Majority-Text.html",
    "25. [Wikipedia] Novum Testamentum Graece. NA28 and UBS5, the basis of most modern translations. https://en.wikipedia.org/wiki/Novum_Testamentum_Graece",
    "26. [Apologetics] GotQuestions.org. What is the Critical Text? https://www.gotquestions.org/critical-text.html",
    "27. [Reference] ESV.org. Translation Philosophy: an essentially literal translation. https://www.esv.org/translation/philosophy/",
    "28. [Reference] Lifeway. CSB Translation Philosophy: Optimal Equivalence between formal and functional. https://www.lifeway.com/shop/bibles/csb/translation-philosophy",
    "29. [Reference] TheNIVBible.com. Commissioning the NIV: an accurate, understandable version of the Bible. https://www.thenivbible.com/blog/niv-commission-for-an-accurate-understandable-version-of-the-bible/",
    "30. [Wikipedia] New American Standard Bible: translation philosophy. https://en.wikipedia.org/wiki/New_American_Standard_Bible#Translation_philosophy",
    "31. [Reference] The Lockman Foundation. New American Standard Bible. https://www.lockman.org/new-american-standard-bible-nasb/",
    "32. [Wikipedia] Eugene Nida. Originator of dynamic equivalence theory. https://en.wikipedia.org/wiki/Eugene_Nida",
    "33. [Apologetics] GotQuestions.org. What is dynamic equivalence in Bible translation? https://www.gotquestions.org/dynamic-equivalence.html",
    "34. [Lexicon] Blue Letter Bible. Christian Standard Bible preface: Optimal Equivalence. https://www.blueletterbible.org/csbFrontMatter.cfm",
    "35. [Primary Source] Bible Gateway. Christian Standard Bible (CSB), version information. https://www.biblegateway.com/versions/Christian-Standard-Bible-CSB/",
    "36. [Wikipedia] The Living Bible. Kenneth Taylor's paraphrase for his children. https://en.wikipedia.org/wiki/The_Living_Bible",
    "37. [Reference] The Living Bible (1971). Bible Research. https://bible-researcher.com/lbp.html",
    "38. [Commentary] Bible Hub. 1 Peter 1:13 in parallel translations. https://biblehub.com/1_peter/1-13.htm",
    "39. [Lexicon] Bible Hub. Greek 4698, splagchnon (inward parts, affection). https://biblehub.com/greek/4698.htm",
    "40. [Commentary] Bible Hub. Philippians 1:8 in parallel translations. https://biblehub.com/philippians/1-8.htm",
    "41. [Lexicon] Bible Hub. Greek 80, adelphos (brother, fellow believer). https://biblehub.com/greek/80.htm",
    "42. [Commentary] Bible Hub. Romans 12:1 in parallel translations. https://biblehub.com/romans/12-1.htm",
    "43. [Reference] ESV API. Translation Philosophy: thought-for-thought translation and the translator's interpretive views. https://api.esv.org/about/translation-philosophy/",
    "44. [Reference] Crossway. 10 Things You Should Know about the ESV Translation. https://www.crossway.org/articles/10-things-you-should-know-about-the-esv-translation/",
    "45. [Commentary] Bible Hub. Commentaries on Nehemiah 8:8 (Ellicott, Benson, Henry on rendering the Law into Aramaic). https://biblehub.com/commentaries/nehemiah/8-8.htm",
    "46. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Septuagint Version.' https://www.newadvent.org/cathen/13722a.htm",
    "47. [Apologetics] GotQuestions.org. What is the Septuagint? New Testament quotations taken from the Greek. https://www.gotquestions.org/Septuagint.html",
    "48. [Primary Source] Orthodox Presbyterian Church. The Westminster Confession of Faith, 1.8: Scripture to be translated into the vulgar language of every nation. https://www.opc.org/wcf.html",
    "49. [Wikipedia] Vulgate. Jerome's commission of 382 and the Council of Trent. https://en.wikipedia.org/wiki/Vulgate",
    "50. [Primary Source] Council of Trent, Fourth Session. Papal Encyclicals Online. https://www.papalencyclicals.net/councils/trent/fourth-session.htm",
    "51. [Wikipedia] Wycliffe's Bible. Middle English translations from the Vulgate and Arundel's Constitutions. https://en.wikipedia.org/wiki/Wycliffe%27s_Bible",
    "52. [Apologetics] GotQuestions.org. What is the Wycliffe Bible? https://www.gotquestions.org/Wycliffe-Bible.html",
    "53. [Wikipedia] Tyndale Bible. The first English translation from the Greek and Hebrew. https://en.wikipedia.org/wiki/Tyndale_Bible",
    "54. [Apologetics] GotQuestions.org. What is the Tyndale Bible? https://www.gotquestions.org/Tyndale-Bible.html",
    "55. [Academic] Chao. The Battle of Two Bibles: When and How Did the King James Bible Gain Its Popularity over the Geneva Bible?. Renaissance and Reformation, 2024. https://doi.org/10.33137/rr.v46i2.42289",
    "56. [Apologetics] GotQuestions.org. What is the Geneva Bible? https://www.gotquestions.org/Geneva-Bible.html",
    "57. [Wikipedia] 'Geneva Bible.' https://en.wikipedia.org/wiki/Geneva_Bible",
    "58. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Douay Bible.' https://www.newadvent.org/cathen/05140a.htm",
    "59. [Primary Source] Bible Gateway. Douay-Rheims 1899 American Edition (DRA), version information. https://www.biblegateway.com/versions/Douay-Rheims-1899-American-Edition-DRA-Bible/",
    "60. [Wikipedia] 'Douay–Rheims Bible.' https://en.wikipedia.org/wiki/Douay%E2%80%93Rheims_Bible",
    "61. [Wikipedia] Hampton Court Conference. Rainolds' proposal of a new translation. https://en.wikipedia.org/wiki/Hampton_Court_Conference",
    "62. [Academic] Durel. La Conférence de Hampton Court (janvier 1604) ou l’autorité de Jacques Ier sur l’Église anglicane. Anglophonia, 2005. https://doi.org/10.3406/calib.2005.1543",
    "63. [Academic] Stine. The King James Version Then and Now. Review & Expositor, 2011. https://doi.org/10.1177/003463731110800205",
    "64. [Primary Source] Bible Gateway. King James Version (KJV), version information. https://www.biblegateway.com/versions/King-James-Version-KJV-Bible/",
    "65. [Wikipedia] 'King James Version#Translation committees.' https://en.wikipedia.org/wiki/King_James_Version#Translation_committees",
    "66. [Reference] Bible Research. The King James Version. https://bible-researcher.com/canon10.html",
    "67. [Wikipedia] Bishops' Bible. The 1602 edition prescribed as the base text of the KJV. https://en.wikipedia.org/wiki/Bishops%27_Bible",
    "68. [Apologetics] GotQuestions.org. What is the King James Version (KJV)? The translators' stated purpose. https://www.gotquestions.org/King-James-Version-KJV.html",
    "69. [Primary Source] Bible Gateway. New Revised Standard Version Updated Edition (NRSVue), version information. https://www.biblegateway.com/versions/New-Revised-Standard-Version-Updated-Edition-NRSVue-Bible/",
    "70. [Academic] Jon Nielson. How Much of the King James Bible Is William Tyndale's?. Reformation, 1998. https://doi.org/10.1179/ref_1998_3_1_004",
    "71. [Wikipedia] Textus Receptus: English translations from the Textus Receptus. https://en.wikipedia.org/wiki/Textus_Receptus#English_translations_from_the_Textus_Receptus",
    "72. [Primary Source] CCEL. The Translators to the Reader (1611), part 10: reasons for setting diversity of senses in the margin. https://ccel.org/bible/kjv/preface/pref10.htm",
    "73. [Commentary] Bible Hub. 2 Thessalonians 2:7 in parallel translations. https://biblehub.com/2_thessalonians/2-7.htm",
    "74. [Commentary] Commentaries on 2 Thessalonians 2:7. Bible Hub. https://biblehub.com/commentaries/2_thessalonians/2-7.htm",
    "75. [Commentary] Bible Hub. 1 Thessalonians 4:15 in parallel translations. https://biblehub.com/1_thessalonians/4-15.htm",
    "76. [Commentary] Commentaries on 1 Thessalonians 4:15. Bible Hub. https://biblehub.com/commentaries/1_thessalonians/4-15.htm",
    "77. [Lexicon] Bible Hub. Hebrew 7214, re'em (wild ox). https://biblehub.com/hebrew/7214.htm",
    "78. [Commentary] Bible Hub. Numbers 23:22 in parallel translations. https://biblehub.com/numbers/23-22.htm",
    "79. [Lexicon] Bible Hub. Greek 3957, pascha (Passover), 29 occurrences. https://biblehub.com/greek/3957.htm",
    "80. [Commentary] Bible Hub. Acts 12:4 in parallel translations. https://biblehub.com/acts/12-4.htm",
    "81. [Apologetics] GotQuestions.org. What is the New King James Version (NKJV)? https://www.gotquestions.org/New-King-James-Version-NKJV.html",
    "82. [Wikipedia] New King James Version. https://en.wikipedia.org/wiki/New_King_James_Version",
    "83. [Primary Source] Bible Gateway. New King James Version (NKJV), version information. https://www.biblegateway.com/versions/New-King-James-Version-NKJV-Bible/",
    "84. [Wikipedia] Orthodox Study Bible. Why the NKJV New Testament was chosen. https://en.wikipedia.org/wiki/Orthodox_Study_Bible",
    "85. [Wikipedia] Revised Version. The 1881-1885 revision and Westcott and Hort. https://en.wikipedia.org/wiki/Revised_Version",
    "86. [Primary Source] 'Anonymous (Bible): American Standard Version of the Holy Bible (1901).' Christian Classics Ethereal Library. https://www.ccel.org/ccel/bible/asv.ii.html",
    "87. [Wikipedia] 'American Standard Version.' https://en.wikipedia.org/wiki/American_Standard_Version",
    "88. [Academic] 'Luther Allan Weigle - Database: Christian Educators of the 20th Century - Biola University.' Biola University. https://www.biola.edu/talbot/ce20/database/luther-allan-weigle",
    "89. [Apologetics] GotQuestions.org. What is the Revised Standard Version (RSV)? https://www.gotquestions.org/Revised-Standard-Version-RSV.html",
    "90. [Wikipedia] 'Revised Standard Version.' https://en.wikipedia.org/wiki/Revised_Standard_Version",
    "91. [Wikipedia] New Revised Standard Version. Mandate, motto and gender language. https://en.wikipedia.org/wiki/New_Revised_Standard_Version",
    "92. [Apologetics] GotQuestions.org. What is the New Revised Standard Version (NRSV)? https://www.gotquestions.org/New-Revised-Standard-Version-NRSV.html",
    "93. [Apologetics] GotQuestions.org. What is the New American Standard Bible (NASB)? https://www.gotquestions.org/New-American-Standard-Bible-NASB.html",
    "94. [Reference] The Lockman Foundation. NASB 2020. https://www.lockman.org/nasb-2020/",
    "95. [Wikipedia] Legacy Standard Bible. https://en.wikipedia.org/wiki/Legacy_Standard_Bible",
    "96. [Apologetics] GotQuestions.org. What is the Legacy Standard Bible (LSB)? https://www.gotquestions.org/Legacy-Standard-Bible-LSB.html",
    "97. [Commentary] Three Sixteen Publishing. Legacy Standard Bible. https://lsbible.org/",
    "98. [Wikipedia] English Standard Version. Origin as a revision of the 1971 RSV. https://en.wikipedia.org/wiki/English_Standard_Version",
    "99. [Apologetics] GotQuestions.org. What is the English Standard Version (ESV)? https://www.gotquestions.org/English-Standard-Version-ESV.html",
    "100. [Primary Source] Bible Gateway. English Standard Version (ESV), version information. https://www.biblegateway.com/versions/English-Standard-Version-ESV-Bible/",
    "101. [News] Christian Post. ESV Bible update includes 68 word edits, reverts Genesis 3:16 translation to 2001 wording. https://assets.christianpost.com/news/esv-bible-update-reverts-genesis-316-translation-to-2001-wording.html",
    "102. [Lexicon] Bible Hub. Hebrew 8669, teshuqah (desire, longing). https://biblehub.com/hebrew/8669.htm",
    "103. [Commentary] Bible Hub. Genesis 3:16 in parallel translations. https://biblehub.com/genesis/3-16.htm",
    "104. [Reference] TheNIVBible.com. NIV frequently asked questions: the Committee on Bible Translation. https://www.thenivbible.com/faqs/",
    "105. [Apologetics] GotQuestions.org. What is the New International Version (NIV)? https://www.gotquestions.org/New-International-Version-NIV.html",
    "106. [Primary Source] Bible Gateway. New International Version (NIV), version information. https://www.biblegateway.com/versions/New-International-Version-NIV-Bible/",
    "107. [Wikipedia] New International Version. Origins and US sales. https://en.wikipedia.org/wiki/New_International_Version",
    "108. [News] Baptist News Global. Southern Baptists cannot commend new NIV Bible translation. https://baptistnews.com/article/southern-baptists-cannot-commend-new-niv-bible-translation/",
    "109. [Reference] ECPA / Christian Book Expo. Bible Translations Bestsellers, February 2025. https://christianbookexpo.com/bestseller/translations.php?id=0225",
    "110. [Reference] ECPA / Christian Book Expo. Bible Translations Bestsellers, June 2024. https://christianbookexpo.com/bestseller/translations.php?id=0624",
    "111. [Wikipedia] Today's New International Version. Gender language and discontinuation in 2011. https://en.wikipedia.org/wiki/Today%27s_New_International_Version",
    "112. [Primary Source] Bible Research. Southern Baptist Convention resolution on the 2011 NIV (text). https://bible-researcher.com/niv.2011.sbc.html",
    "113. [Reference] TheNIVBible.com. Is the NIV gender-neutral? https://thenivbible.com/niv-gender-neutral/",
    "114. [Wikipedia] Christian Standard Bible. Revision of the HCSB and its textual basis. https://en.wikipedia.org/wiki/Christian_Standard_Bible",
    "115. [Apologetics] GotQuestions.org. What is the Christian Standard Bible (CSB)? https://www.gotquestions.org/Christian-Standard-Bible-CSB.html",
    "116. [Wikipedia] New English Translation. 60,932 translators' notes. https://en.wikipedia.org/wiki/New_English_Translation",
    "117. [Commentary] NET Bible (Biblical Studies Press). https://netbible.org/",
    "118. [Primary Source] Bible Gateway. New English Translation (NET), version information. https://www.biblegateway.com/versions/New-English-Translation-NET-Bible/",
    "119. [Wikipedia] New Living Translation. From Living Bible revision to new translation. https://en.wikipedia.org/wiki/New_Living_Translation",
    "120. [Reference] Tyndale House. NLT translation process. https://sites.tyndale.com/nlt/translation-process/",
    "121. [Apologetics] GotQuestions.org. What is the New Living Translation (NLT)? https://www.gotquestions.org/New-Living-Translation-NLT.html",
    "122. [Primary Source] Bible Gateway. New Living Translation (NLT), version information. https://www.biblegateway.com/versions/New-Living-Translation-NLT-Bible/",
    "123. [Academic] Burke. The 1992 Revision of the Good News Bible: The Context for Revision. The Bible Translator, 2018. https://doi.org/10.1177/2051677018796127",
    "124. [Primary Source] Bible Gateway. Good News Translation (GNT), version information. https://www.biblegateway.com/versions/Good-News-Translation-GNT-Bible/",
    "125. [Wikipedia] 'Good News Bible.' https://en.wikipedia.org/wiki/Good_News_Bible",
    "126. [Wikipedia] The Message (Bible). Peterson's method and criticism. https://en.wikipedia.org/wiki/The_Message_(Bible)",
    "127. [Primary Source] Bible Gateway. The Message (MSG), version information. https://www.biblegateway.com/versions/Message-MSG-Bible/",
    "128. [Reference] The Lockman Foundation. Amplified Bible. https://www.lockman.org/amplified-bible-amp/",
    "129. [Apologetics] GotQuestions.org. What is the Amplified Bible (AMP)? https://www.gotquestions.org/Amplified-Bible-AMP.html",
    "130. [Primary Source] Bible Gateway. Amplified Bible (AMP), version information. https://www.biblegateway.com/versions/Amplified-Bible-AMP/",
    "131. [Wikipedia] 'Amplified Bible.' https://en.wikipedia.org/wiki/Amplified_Bible",
    "132. [Apologetics] GotQuestions.org. What is the New American Bible (NAB)? Deuterocanonical books in Catholic Bibles. https://www.gotquestions.org/New-American-Bible-NAB.html",
    "133. [Wikipedia] New American Bible Revised Edition. https://en.wikipedia.org/wiki/New_American_Bible_Revised_Edition",
    "134. [Primary Source] United States Conference of Catholic Bishops. The Bible (NABRE). https://bible.usccb.org/",
    "135. [Primary Source] Bible Gateway. New American Bible (Revised Edition) (NABRE), version information. https://www.biblegateway.com/versions/New-American-Bible-Revised-Edition-NABRE-Bible/",
    "136. [Wikipedia] Jerusalem Bible. The French original, Tolkien's Jonah and the name Yahweh. https://en.wikipedia.org/wiki/Jerusalem_Bible",
    "137. [Reference] Letter on the Name of God (2008). United States Conference of Catholic Bishops. https://www.usccb.org/resources/name-god",
    "138. [Wikipedia] New Jerusalem Bible. https://en.wikipedia.org/wiki/New_Jerusalem_Bible",
    "139. [Wikipedia] New Jewish Publication Society of America Tanakh. https://en.wikipedia.org/wiki/New_Jewish_Publication_Society_of_America_Tanakh",
    "140. [Wikipedia] New World Translation. Publication history and revisions. https://en.wikipedia.org/wiki/New_World_Translation",
    "141. [Apologetics] GotQuestions.org. Is the New World Translation a valid version of the Bible? https://www.gotquestions.org/New-World-Translation.html",
    "142. [Primary Source] Watch Tower Society. John 1, New World Translation. https://www.jw.org/en/library/bible/study-bible/books/john/1/",
    "143. [Apologetics] Christian Research Institute. John 1:1 and the New World Translation (quoting Metzger, Theology Today, 1953). https://www.equip.org/articles/john-11-and-the-new-world-translation/",
    "144. [Commentary] Bible Hub. Commentaries on John 1:1 (the anarthrous theos as predicate). https://biblehub.com/commentaries/john/1-1.htm",
    "145. [Apologetics] Christian Research Institute. Is the New World Translation of the Bible credible? https://www.equip.org/bible_answers/is-the-new-world-translation-of-the-bible-credible/",
    "146. [Primary Source] Watch Tower Society. Colossians 1, New World Translation. https://www.jw.org/en/library/bible/study-bible/books/colossians/1/",
    "147. [Wikipedia] Joseph Smith Translation of the Bible. https://en.wikipedia.org/wiki/Joseph_Smith_Translation_of_the_Bible",
    "148. [Primary Source] The Church of Jesus Christ of Latter-day Saints. Joseph Smith Translation (scriptures). https://www.churchofjesuschrist.org/study/scriptures/jst?lang=eng",
    "149. [Wikipedia] The Passion Translation. Criticism and removal from Bible Gateway. https://en.wikipedia.org/wiki/The_Passion_Translation",
    "150. [Apologetics] GotQuestions.org. What is the Passion Translation of the Bible? https://www.gotquestions.org/Passion-Translation.html",
    "151. [Reference] BroadStreet Publishing. The Passion Translation. https://www.thepassiontranslation.com/",
    "152. [News] ChurchLeaders. Bible Gateway Removes The Passion Translation From Site. https://churchleaders.com/news/416894-bible-gateway-removes-the-passion-translation-from-site.html",
    "153. [News] The Roys Report. Bible Gateway pulls controversial Passion Translation. https://roysreport.com/bible-gateway-pulls-controversial-passion-translation/",
    "154. [Wikipedia] List of New Testament verses not included in modern English translations. https://en.wikipedia.org/wiki/List_of_New_Testament_verses_not_included_in_modern_English_translations",
    "155. [Apologetics] The Gospel Coalition (Justin Taylor). Why does the King James Bible have some different verses than modern translations? https://www.thegospelcoalition.org/blogs/justin-taylor/why-does-the-king-james-bible-have-some-different-verses-than-modern-translations/",
    "156. [Commentary] Commentaries on John 1:18. Bible Hub. https://biblehub.com/commentaries/john/1-18.htm",
    "157. [Wikipedia] Mark 16. Manuscript evidence for the endings of Mark. https://en.wikipedia.org/wiki/Mark_16",
    "158. [Apologetics] GotQuestions.org. Should Mark 16:9-20 be in the Bible? https://www.gotquestions.org/Mark-16-9-20.html",
    "159. [Commentary] Bible Hub. Commentaries on Mark 16:9. https://biblehub.com/commentaries/mark/16-9.htm",
    "160. [Academic] 'Earth Accuses Earth: Tracing What Jesus Wrote on the Ground | Harvard Theological Review | Cambridge Core.' Cambridge University Press. https://www.cambridge.org/core/journals/harvard-theological-review/article/abs/earth-accuses-earth-tracing-what-jesus-wrote-on-the-ground/8BDE7EA273824F86F601C64CED2F2F7F",
    "161. [Commentary] Bible Hub. Commentaries on John 7:53. https://biblehub.com/commentaries/john/7-53.htm",
    "162. [Wikipedia] 'Jesus and the woman taken in adultery.' https://en.wikipedia.org/wiki/Jesus_and_the_woman_taken_in_adultery",
    "163. [Wikipedia] Comma Johanneum. Latin origin, Greek witnesses and Erasmus. https://en.wikipedia.org/wiki/Comma_Johanneum",
    "164. [Commentary] Bible Hub. Commentaries on 1 John 5:7 (Barnes, Cambridge on the manuscript evidence). https://biblehub.com/commentaries/1_john/5-7.htm",
    "165. [Commentary] NET Bible. 1 John 5, with translators' note on the Comma Johanneum. https://netbible.org/bible/1+John+5",
    "166. [Commentary] Bible Hub. Commentaries on Acts 8:37. https://biblehub.com/commentaries/acts/8-37.htm",
    "167. [Commentary] Bible Hub. Acts 8:37 in parallel translations. https://biblehub.com/acts/8-37.htm",
    "168. [Wikipedia] Novum Instrumentum omne. Erasmus's back-translation of Revelation 22 from the Vulgate. https://en.wikipedia.org/wiki/Novum_Instrumentum_omne",
    "169. [Commentary] Bible Hub. Revelation 22:19 in parallel translations. https://biblehub.com/revelation/22-19.htm",
    "170. [Commentary] Bible Hub. Commentaries on Revelation 22:19. https://biblehub.com/commentaries/revelation/22-19.htm",
    "171. [Apologetics] GotQuestions.org. What is the Comma Johanneum (1 John 5:7-8)? The Trinity taught without it. https://www.gotquestions.org/Comma-Johanneum.html",
    "172. [Commentary] Commentaries on Matthew 28:19. Bible Hub. https://biblehub.com/commentaries/matthew/28-19.htm",
    "173. [Lexicon] Bible Hub. Hebrew 5959, almah (young woman, maiden). https://biblehub.com/hebrew/5959.htm",
    "174. [Lexicon] Bible Hub. Hebrew 1330, bethulah (virgin). https://biblehub.com/hebrew/1330.htm",
    "175. [Lexicon] Bible Hub. Greek 3933, parthenos (virgin). https://biblehub.com/greek/3933.htm",
    "176. [Wikipedia] Isaiah 7:14. The Septuagint's parthenos and Matthew's use of it. https://en.wikipedia.org/wiki/Isaiah_7:14",
    "177. [Commentary] Bible Hub. Isaiah 7:14 in parallel translations. https://biblehub.com/isaiah/7-14.htm",
    "178. [Commentary] Bible Hub. Commentaries on Isaiah 7:14. https://biblehub.com/commentaries/isaiah/7-14.htm",
    "179. [Wikipedia] They have pierced my hands and my feet. Masoretic, Septuagint and Nahal Hever readings. https://en.wikipedia.org/wiki/They_have_pierced_my_hands_and_my_feet",
    "180. [Commentary] Bible Hub. Commentaries on Psalm 22:16 (Ellicott, Barnes, Keil and Delitzsch on ka'ari). https://biblehub.com/commentaries/psalms/22-16.htm",
    "181. [Commentary] Bible Hub. Psalm 22:16 in parallel translations. https://biblehub.com/psalms/22-16.htm",
    "182. [Commentary] Bible Hub. Deuteronomy 22:25 in parallel translations. https://biblehub.com/deuteronomy/22-25.htm",
    "183. [Lexicon] Bible Hub. Hebrew 2388, chazaq (to be strong, prevail, overpower). https://biblehub.com/hebrew/2388.htm",
    "184. [Lexicon] Bible Hub. Hebrew 8610, taphas (to seize, take hold of). https://biblehub.com/hebrew/8610.htm",
    "185. [Commentary] Bible Hub. Deuteronomy 22:28 in parallel translations. https://biblehub.com/deuteronomy/22-28.htm",
    "186. [Commentary] Bible Hub. Exodus 22:16 in parallel translations. https://biblehub.com/exodus/22-16.htm",
    "187. [Commentary] Bible Hub. Commentaries on Deuteronomy 22:28. https://biblehub.com/commentaries/deuteronomy/22-28.htm",
    "188. [Commentary] Bible Hub. John 1:18 in parallel translations. https://biblehub.com/john/1-18.htm",
    "189. [Lexicon] Bible Hub. Greek 3439, monogenes (only, unique). https://biblehub.com/greek/3439.htm",
    "190. [Reference] Crossway. ESV Bible Translation Update (2025 text edition). https://www.crossway.org/articles/esv-bible-translation-update/",
    "191. [Apologetics] GotQuestions.org. What is the KJV Only movement? https://www.gotquestions.org/KJV-only.html",
    "192. [Wikipedia] King James Only movement: history. https://en.wikipedia.org/wiki/King_James_Only_movement#History",
    "193. [Reference] Bible Versions: King James-Only Advocates Experiences Renaissance. Christianity Today, 1995. https://christianitytoday.com/ct/1995/october23/bible-versions-king-jamesonly-advocates-experiences.html",
    "194. [Wikipedia] Peter Ruckman. The KJV as advanced revelation. https://en.wikipedia.org/wiki/Peter_Ruckman",
    "195. [Wikipedia] Gail Riplinger. New Age Bible Versions (1993). https://en.wikipedia.org/wiki/Gail_Riplinger",
    "196. [Academic] Hentschel. The King James Only Movement. Oxford Handbooks Online, 2017. https://doi.org/10.1093/oxfordhb/9780190258849.013.20",
    "197. [Commentary] Bible Hub. Commentaries on Psalm 12:7 (Gill: the affix is masculine, not feminine). https://biblehub.com/commentaries/psalms/12-7.htm",
    "198. [Commentary] Bible Hub. Psalm 12:7 in parallel translations. https://biblehub.com/psalms/12-7.htm",
    "199. [Primary Source] CCEL. The Translators to the Reader (1611), part 9: an answer to the imputations of our adversaries. https://ccel.org/bible/kjv/preface/pref9.htm",
    "200. [Academic] Irena Backus. The Problem Of Canonicity. , 2000. https://doi.org/10.1093/oso/9780195138856.003.0001",
    "201. [Academic] Detroit Baptist Theological Seminary. The Embarrassing Preface to the King James Version. https://dbts.edu/2012/04/09/the-embarrassing-preface-to-the-king-james-version/",
    "202. [Commentary] NET Bible. John 1, with translators' notes. https://netbible.org/bible/John+1",
    "203. [Apologetics] GotQuestions.org. Which is the best Bible translation? Comparing several translations. https://www.gotquestions.org/Bible-translations.html",
    "204. [Academic] Center for the Study of New Testament Manuscripts. Digital images of Greek New Testament manuscripts. https://www.csntm.org/",
    "205. [Wikipedia] Septuagint: Christian use. https://en.wikipedia.org/wiki/Septuagint#Christian_use",
    "206. [Academic] Dorival. Is the Septuagint the Old Testament of the New Testament?. The Septuagint from Alexandria to Constantinople, 2021. https://doi.org/10.1093/oso/9780192898098.003.0003",
    "207. [Apologetics] GotQuestions.org. Textual criticism: what is it? https://www.gotquestions.org/textual-criticism.html"
  ],
  lastUpdated: "30-10-2026"
}
