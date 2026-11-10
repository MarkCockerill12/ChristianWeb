import type { Topic } from './types'

export const religions: Topic = {
  id: "religions",
  title: "What About Other Religions?",
  description: `There are hundreds of religions in the world. Why aren't these preferable? Is there truth to them?`,
  icon: "Globe",
  color: "blue",
  tags: ["Religions", "Historical"],
  tldr: `Other religions contain real moral insight, and their followers are often devout and sincere. Christianity's claim rests on something specific: the life, death and resurrection of Jesus, which can be examined as history, and salvation by grace rather than human merit. Each tradition is set out with its history, its beliefs, what is good in it, and where it and Christianity disagree. The page covers more than fifty traditions: the ancient religions of Sumer, Egypt, Canaan, Greece, Rome, northern Europe and the Americas (Maya, Aztec, Inca); the Abrahamic faiths and their offshoots, with the branches of Judaism and Islam; the Dharmic religions, with the schools of Hinduism and Buddhism; the religions of China, Japan and Persia; Gnosticism and Manichaeism; the indigenous religions of Africa, the Americas, Australia and the Pacific; and modern movements from Mormonism to Satanism. Across them the same contrasts recur. Most hold that people are saved, or freed, by knowledge, ritual or merit, while Christianity holds that salvation is a gift; most rest on a teaching or a private revelation, while Christianity rests on a public event, the resurrection, that can be examined as history; and many of the ancient religions required blood to sustain their gods, where the Christian God gives his own.`,
  content: `
With thousands of religions and belief systems throughout history[^1] why should one choose Christianity? Many contain moral truth and attempt to answer life's big questions. They differ in where they came from, how many follow them and what they teach. The sections below run from the oldest recorded religions through the Abrahamic, Dharmic and East Asian traditions to the indigenous religions and the movements of the last two centuries. Where a religion has major branches, such as the schools of Hinduism, the branches of Buddhism or the movements of Judaism, they have a section of their own after it.

<?viz religions/map?>


<?viz religions/shares?>




<?viz religions/timeline?>

<?viz religions/comparison?>

`,
  subtopics: [
    {
      id: "why-christianity",
      title: "Why Christianity Among All Religions?",
      tags: ["Method"],
      content: `
• **Historical verifiability:** Jesus of Nazareth is a historical figure with multiple attestations from both Christian and non-Christian sources[^2]

• **Fulfilled prophecies:** Christian writers count anywhere from a few dozen to over 300 messianic prophecies fulfilled in Jesus; the range is wide because counting them is an interpretive act that mixes direct prediction with typology[^3]

• **Resurrection evidence:** A majority of New Testament historians accept a core set of facts, that Jesus was crucified, that his tomb was found empty, and that his followers had experiences they took to be appearances of the risen Christ. They do not agree on the explanation, and the resurrection itself is a conclusion argued from those facts rather than a scholarly consensus[^4]

• **Grace over works:** Salvation by faith alone ([Ephesians 2:8-9](https://www.biblegateway.com/passage/?search=Ephesians%202%3A8-9&version=NIV)), not by human effort or merit

• **Personal relationship:** Jesus declared "I am the way and the truth and the life. No one comes to the Father except through me" ([John 14:6](https://www.biblegateway.com/passage/?search=John%2014%3A6&version=NIV))

• **Moral foundation:** Provides absolute moral standards based on God's unchanging character[^5]

**See also:** [The Resurrection](/categories/resurrection), [Prophecy](/categories/prophecy).
`,
    },
    {
      id: "how-the-comparisons-work",
      title: "How the Two Columns Should Be Read",
      tags: ["Method"],
      content: `
Each tradition below is set out with a list of positive aspects and a list of areas of concern. Three rules govern what goes in the second list, because a comparison of religions is very easy to rig.

• **"Areas of concern" means a Christian assessment, not an agreed defect.** These are points where a tradition differs from Christian claims, or where it faces an internal difficulty that its own thinkers discuss. Adherents contest them, and where they have a standard answer that answer is given rather than omitted.

• **A difficulty that applies equally to Christianity is not counted against another faith.** Internal diversity between schools, disagreement over how far later interpretation may develop an earlier text, and the presence of legendary material in later strata are all charges that can be brought against Christianity, which has a page of its own on its divisions. Where such a point is noted, it is noted as a feature of the tradition rather than pressed as an objection.

• **Criticism has to be accurate before it can be fair.** Misdescribing what a group believes in order to refute it is worthless, and worse than worthless when the misdescription flatters the critic.

Christianity's own difficult questions have topics of their own, and the case for it is meant to rest on the evidence for its central claims rather than on other religions being presented at their weakest.
`,
    },
    {
      id: "how-old-are-the-religions",
      title: "Which Religion Is the Oldest?",
      tags: ["Method"],
      content: `
**What can be dated.** Historians date a religion from what survives. Mesopotamian religion is the first to appear in writing, in the mid-fourth millennium BC[^6]. Egypt follows closely, with the earliest known depictions of a god around 3300 BC and the Pyramid Texts around 2400 BC[^7][^8]. The Rigveda, the root of Hinduism, is dated by its language to the second half of the second millennium BC, and its silence about iron suggests a date before 1000 BC[^9][^10]. Zoroaster has no datable link to known history; the traditional sixth-century date has been largely abandoned, and many now place him close to 1000 BC, on the similarity of the Gathas to the Rigveda[^11][^12][^13]. Israel first appears in the record on the Merneptah Stele of about 1208 BC[^14][^15], and the oldest surviving text from the Hebrew Bible, the Priestly Blessing on the Ketef Hinnom scrolls, dates to around 600 BC[^16][^17].

**Why that order does not settle which is oldest.** The order reflects who wrote first. Writing and monumental building began in Sumer and Egypt, so their gods appear first, and a religion can be far older than its earliest inscription. Ritual building is older than any named religion: Gobekli Tepe in Turkey dates to about 9500 BC, and nothing is known of what its builders called their gods[^18][^19]. Each date marks a minimum age. Israel was a small people in the hills of Canaan, which is reason enough for it to enter the record late.

**What the Bible claims.** Scripture does not claim that Israel's institutions came first. Genesis places the worship of the one God before there was any Israel: "at that time people began to call on the name of the LORD" (Genesis 4:26), and Melchizedek serves "God Most High" outside Abraham's family (Genesis 14:18). It also agrees that other gods were worshipped before Israel existed: Abraham's fathers "worshiped other gods" beyond the Euphrates (Joshua 24:2). Paul reads that history as a decline, in which people who knew God "exchanged the glory of the immortal God for images" (Romans 1:21-23). On the traditional chronology Abraham lived around 2000 BC and Moses in the fifteenth or thirteenth century BC, later than the first Sumerian tablets on any reckoning. The claim is that the God Israel worshipped is older than Israel, not that Israel's records are older than Sumer's.

**Can that be tested?** Not by archaeology, because the claim concerns a time before writing. The nearest scholarly attempt was Wilhelm Schmidt's *Urmonotheismus*, set out from 1912 to 1955, which argued from high gods among hunter-gatherer peoples that monotheism came first and polytheism overlaid it[^20][^21]. Academic opinion had rejected the strong form of this by the middle of the twentieth century; his critics replied that a supreme being does not amount to monotheism and that he read his own beliefs into the evidence, and scholars have since largely abandoned the search for religion's origin as unanswerable[^22]. Many critical scholars hold the opposite order for Israel itself, with monolatry, the worship of one god among many, developing into monotheism around the exile[^23][^24]. Other traditions also claim to predate the record: Hindu tradition speaks of eternal truths rather than a date of origin. Dating therefore answers when a religion becomes visible, and the question of which is true has to be settled on other grounds.

**See also:** [Pagan Origins](/categories/pagan-origins).
`,
    },
    {
      id: "mesopotamian",
      title: "Sumerian and Mesopotamian Religion",
      tags: ["Ancient"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Sumerian and Mesopotamian Religion:**

  The religion of Sumer, and later of Akkad, Babylon and Assyria, worshipped many gods, each tied to a city: Enlil as king of the gods at Nippur, Enki at Eridu, with An and Inanna among the greatest[^25][^26]. Human beings were created to serve the gods and relieve them of labour[^27][^25].

  **📅 Date Founded:** No founder. The earliest evidence dates to the mid-fourth millennium BC, around the invention of writing in about 3500 BC; religious thought may be older but is undocumented[^28][^29]. The religion had almost entirely died out by AD 400 to 500, its last adherents having largely become Syriac Christians[^29]
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>

    - **Humanity's oldest recorded religious thought:** Its myths include a flood story, known from a tablet of around 1600 BC, whose parallels with Genesis show the world in which Genesis was later read[^30][^31]

    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>

    - **No hope after death:** Everyone went to a dark, dreary underworld, and conduct in life made no difference to treatment there[^32][^33]

    - **People as servants of the gods:** Humans were made to supply the gods' needs, where Genesis 1:27 makes them bearers of God's image[^34][^35]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>

  **Respectful Assessment:** Abraham's family came from this world: Joshua 24:2 says his fathers "worshiped other gods" beyond the Euphrates. Genesis uses forms this culture knew and reverses their meaning, with one God, no rival powers and a humanity created for fellowship rather than labour on the gods' behalf.
</div>

**See also:** [Borrowed Myths? Genesis and the Mesopotamian Parallels (Evolution vs Creation)](/categories/evolution#section-ancient-near-eastern-parallels).
`,
    },
    {
      id: "egyptian",
      title: "Ancient Egyptian Religion",
      tags: ["Ancient"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Ancient Egyptian Religion:**

  Egyptian religion centred on keeping *ma'at*, the fixed order of the cosmos, truth and justice, against constant disorder, through offerings and ritual[^36][^37]. Its major gods included Ra, Horus, Osiris, Isis and Amun, and the king was the intermediary between people and gods[^38][^39][^40][^41]. Spells such as the Pyramid Texts were intended to secure the dead king's life beyond the grave[^42][^39].

  **📅 Date Founded:** No founder. Predynastic burials suggest belief in an afterlife, the Koptos colossi of Min of about 3300 BC are the earliest known depictions of a god, and the Pyramid Texts begin in the Fifth Dynasty, around 2400 BC[^43]. The temples at Philae were officially closed in AD 537[^44][^39]
</div>

<?viz religions/ancient-gallery?>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>

    - **Moral order:** Truth and justice were held to be built into the world, not invented by rulers[^45][^39]

    - **Judgment after death:** The scene of the weighing of the heart, as in the Papyrus of Hunefer of about 1300 BC, ties the life to come to conduct in this one[^46][^47]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>

    - **Ritual access to the afterlife:** Preservation of the body and the correct spells were central, and the earliest texts served the king alone[^48][^47]

    - **A short-lived reform:** Akhenaten replaced Amun with the Aten and ended official worship of most other gods, and his successors restored the old system and dismantled his monuments[^49][^39][^40]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>

  **Respectful Assessment:** Egypt's concern with justice and judgment after death reaches toward what Scripture teaches, while its hope rested on ritual knowledge and the king's mediation. The Exodus account presents the plagues as judgment "on all the gods of Egypt" (Exodus 12:12), and the New Testament offers one mediator to everyone (1 Timothy 2:5).
</div>

**See also:** [Horus and the Egyptian Gods (Pagan Origins)](/categories/pagan-origins#section-horus-and-osiris).
`,
    },
    {
      id: "canaanite",
      title: "Canaanite Religion",
      tags: ["Ancient"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Canaanite Religion:**

  The Canaanites, the peoples of the Levant before and around ancient Israel, worshipped a family of gods headed by El, the aged father of the gods, and his consort Asherah. The most active god was Baal, the storm god who brought rain and fertility, alongside the warrior goddess Anat and Mot, the god of death[^50][^51][^52][^53].

  Most of what is known comes from the clay tablets of Ugarit on the Syrian coast, discovered from 1928 and dating to the fourteenth and thirteenth centuries BC. The Baal Cycle among them tells how Baal defeats Yam, the sea, is swallowed by Mot, and returns to life, bringing back the rains[^54][^55][^56][^57]. Neighbouring peoples worshipped related gods: Chemosh of Moab, Dagon of the Philistines and Molech, the god associated in the Bible with the sacrifice of children[^58][^59][^60].

  **📅 Date Founded:** No founder. The gods of the Ugaritic texts are attested in the second millennium BC, and worship of Baal continued in Phoenicia and its colonies such as Carthage into Roman times[^51][^61]
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>

    - **The background to the Old Testament:** The Ugaritic texts explain much of the Hebrew Bible's language. God is called El, he "rides on the clouds" as Baal does (Psalm 68:4), and Psalm 29 uses the imagery of a storm god to praise the LORD[^62][^56][^52]

    - **A rich literature:** The Ugaritic myths and epics, such as the stories of Kirta and Aqhat, are among the oldest narrative poetry in a Semitic language[^55][^54]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>

    - **Child sacrifice:** The Bible condemns the burning of children to Molech and other gods (Leviticus 18:21; 2 Kings 23:10; Jeremiah 7:31). Thousands of urns of burned infant remains at the tophet of Carthage, a Phoenician colony, are read by most scholars as evidence of the practice, although some argue they are ordinary burials of children who died young[^63][^60][^61]

    - **Fertility cult:** Worship of Baal and Asherah was tied to the fertility of land and herds, and the Bible associates it with sacred poles, high places and ritual sex, although how widespread "sacred prostitution" was is now debated[^64][^65][^50]

    - **Gods subject to death:** Baal is defeated by Mot and must be rescued, and the gods quarrel, deceive and kill one another[^56][^57]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>

  **Respectful Assessment:**   This is the religion the Old Testament most directly confronts. Elijah's contest with the prophets of Baal on Mount Carmel mocks a god who may be "busy, or travelling... or sleeping" (1 Kings 18:27), and the prophets repeatedly condemn Israel for worshipping Baal and Asherah. Inscriptions from Kuntillet Ajrud that mention "YHWH and his Asherah" show that some Israelites did combine the two[^64][^65]. Many critical scholars hold that Israel's religion grew out of Canaanite religion, with YHWH taking over El's titles; the biblical writers present the same overlap as apostasy from a God who had always been distinct. The moral case against the Canaanites, and the conquest itself, is examined in the topic on God's judgments.
</div>

**See also:** [The Canaanite Conquest (Is God Evil?)](/categories/godEvil#section-canaanite-conquest), [The Old Testament and Its Neighbours (Pagan Origins)](/categories/pagan-origins#section-old-testament-and-its-neighbours).
`,
    },
    {
      id: "islam",
      title: "Islam",
      tags: ["Abrahamic"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Islam:**

  Islam is a monotheistic Abrahamic religion founded in 7th-century Arabia by the Prophet Muhammad[^66][^67]. Muslims believe the Quran contains the final revelation from Allah (God), delivered through Muhammad as the last prophet in a line including Abraham, Moses, and Jesus. The religion emphasizes submission to Allah's will through the Five Pillars: declaration of faith (Shahada), prayer (Salah), charity (Zakat), fasting during Ramadan (Sawm), and pilgrimage to Mecca (Hajj)[^68][^69]. As of 2024, Islam has approximately 1.97 billion followers worldwide, making it the second-largest religion globally[^70].

  **📅 Date Founded:** 7th century AD (c. 610 AD) in the Arabian Peninsula
</div>

Islam shares with Christianity the belief in one Creator and in final judgment, and it honours Jesus as a prophet. It denies that he is the Son of God and that he was crucified, and it teaches that the Bible has been corrupted. Those claims conflict with the historical evidence and with the Quran's own statements about the Gospel.

**Branches.** Between 87% and 90% of Muslims are Sunni and between 10% and 13% are Shia, most of the Shia living in Iran, Pakistan, India and Iraq[^71]. The two divided over who should lead the community after Muhammad. Smaller branches include the Ibadis of Oman and the Ahmadiyya, and Sufism, the mystical stream that runs through both main branches, and Alevism have sections below[^72][^71]. The branches are set out in [Sunni, Shia and the Other Branches](/categories/islam#section-sunni-shia-and-other-branches).

**Islam has a full topic of its own:** [Islam: Muhammad, the Quran and the Evidence](/categories/islam), covering the life of Muhammad, the Quran's sources and errors, its preservation, the history of its conquests, and Muslim objections to Christianity.
`
    },
    {
      id: "judaism",
      title: "Judaism",
      tags: ["Abrahamic"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Judaism:**

  Judaism is the oldest Abrahamic monotheistic religion, emphasizing the covenant between God (YHWH) and the Jewish people as revealed in the Torah[^73][^67]. Jews believe in one God who chose Israel as His people and gave them the Law through Moses at Mount Sinai. Judaism focuses on following God's commandments (mitzvot), studying Torah and rabbinic literature, and maintaining Jewish identity through traditions and practices. Modern Judaism includes Orthodox, Conservative, and Reform movements with varying interpretations of religious law and practice. As of 2024, Judaism has approximately 15.7 million adherents worldwide, concentrated mainly in Israel and the United States[^74].


  **📅 Date Founded:** Traditional dating: c. 2000 BC with Abraham's covenant, formalized with Moses at Sinai (traditionally c. 1446 BC, or c. 1260 BC on the later dating). Archaeological evidence supports Hebrew presence in the region by c. 1200 BC, with scholarly debate about earlier patriarchal period[^75]
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>



    - **Monotheistic foundation:** Original revelation of one true God[^76]

      - **Moral law:** Ten Commandments and ethical principles[^77][^78]

      - **Educational emphasis:** Strong tradition of learning and scholarship[^79][^80]

      - **Historical preservation:** Maintained ancient texts and traditions[^81]

      - **Social justice:** Prophetic calls for justice and righteousness[^82][^83]

      - **Messianic expectation:** Anticipation of God's promised deliverer[^84][^85]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>



    - **The messianic question:** Judaism does not accept Jesus as Messiah, and the reasons are substantive rather than a refusal to look at evidence. Jewish expectation is that the Messiah will gather the exiles, rebuild the Temple and establish universal peace, none of which happened in the first century; Maimonides set out those criteria as tests a claimant must visibly meet. Isaiah 53 is read as describing Israel corporately rather than an individual. The Christian reply distinguishes a first coming to atone from a second to reign, and argues that the servant of Isaiah 53 suffers *for* the people and so cannot simply *be* the people. Both positions are readings of the same texts, and the disagreement is old and serious[^86]

      - **Authority of the oral law:** Rabbinic Judaism holds that the Oral Torah, later written down in the Mishnah and Talmud, was given alongside the written Law. Christians accept only the written Scriptures as canonical at this point. That is a genuine difference over the seat of authority rather than a flaw Jews would recognise, and it parallels the Protestant and Catholic disagreement over tradition[^87][^88]

      - **Temple-dependent practice:** The sacrificial system set out in Leviticus has been impossible to perform since the destruction of the Temple in 70 AD[^89][^90]

      - **Atonement after the Temple:** Judaism did not lose a doctrine of atonement in 70 AD. Rabbinic teaching, drawing on Hosea 6:6 and on Yohanan ben Zakkai's response to the destruction, holds that repentance, prayer and deeds of loving kindness atone for sin, and the liturgy of Yom Kippur is built on it. The Christian claim is not that Judaism offers no path to forgiveness but that Hebrews argues blood sacrifice was required and that Christ supplies it once for all. Saying that Jews have no answer here misdescribes what they believe and should not be repeated[^91]

      - **Movements differ over halakhah:** Orthodox, Conservative and Reform Judaism disagree about how binding Jewish law is and how it may develop. This is real internal diversity, and it is the same kind Christianity displays across its own branches, so it is recorded rather than pressed as an objection[^92]

      - **Development of interpretation:** Christians and Jews disagree over whether rabbinic interpretation unfolds the plain sense of the Hebrew Scriptures or moves away from it. Exactly the same question is asked about the development of Christian doctrine, and it is not settled by assertion from either side[^93]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>


  **Respectful Assessment:** Judaism represents the foundational revelation from which Christianity emerged. Christians deeply respect the Hebrew Scriptures, the moral law, and the Jewish people as God's chosen nation. Many Jewish practices and principles are admirable and God-honoring. However, from a Christian perspective, Judaism remains incomplete without recognizing Jesus as the promised Messiah:


  <div style="margin: 10px 0;">
    **1. Fulfilled Messianic Prophecies:** Jesus fulfilled a wide range of Old Testament prophecies about the Messiah, including His birthplace ([Micah 5:2](https://www.biblegateway.com/passage/?search=Micah%205%3A2&version=NIV)), suffering servant role ([Isaiah 53](https://www.biblegateway.com/passage/?search=Isaiah%2053&version=NIV)), and crucifixion details ([Psalm 22](https://www.biblegateway.com/passage/?search=Psalm%2022&version=NIV)). Taken together, predictions whose fulfilment lay outside any claimant's control, such as the place of birth and the timing before the Temple's destruction, form a cumulative case that is difficult to explain as coincidence[^94].
  </div>

  <div style="margin: 10px 0;">
    **2. Incomplete Atonement System:** Without the Temple, Judaism lacks the sacrificial system that God established for atonement. Jesus provides the perfect sacrifice that the Old Testament system pointed toward ([Hebrews 9:11-14](https://www.biblegateway.com/passage/?search=Hebrews%209%3A11-14&version=NIV))[^95][^96].
  </div>

  <div style="margin: 10px 0;">
    **3. New Covenant Fulfilment:** ([Jeremiah 31:31-34](https://www.biblegateway.com/passage/?search=Jeremiah%2031%3A31-34&version=NIV)) promised a new covenant where God's law would be written on hearts, not just external observance. This finds fulfilment in the Holy Spirit's work through Christ[^97].
  </div>

  <div style="margin: 10px 0;">
    **4. Universal Mission:** Abraham was promised that through his seed "all nations" would be blessed ([Genesis 12:3](https://www.biblegateway.com/passage/?search=Genesis%2012%3A3&version=NIV)). Christianity fulfills this promise by bringing Jewish blessings to all peoples through Jesus[^98].
  </div>

  **Conclusion:** While honoring Judaism as the root from which Christianity grew ([Romans 11:17-18](https://www.biblegateway.com/passage/?search=Romans%2011%3A17-18&version=NIV)), Christians believe Jesus is the completion and fulfilment of God's promises to Israel and the world.

  <div style="margin: 15px 0; padding-top: 10px; border-top: 1px solid #bbdefb;">
**Deep Historical & Theological Context:**
  The transition from biblical Judaism to modern Rabbinic Judaism occurred largely as a response to the catastrophic destruction of the Second Temple in 70 AD. Without a temple, the Levitical sacrificial system required by the Torah for the atonement of sins became impossible to practice. Rabbinic Judaism subsequently centred atonement on prayer, repentance, and good deeds. Jewish teachers point out that the prophets already spoke this way (Hosea 14:2, Micah 6:6-8); Christians answer that Leviticus 17:11 ties atonement to blood, and that the prophets were calling for sincerity in worship rather than abolishing the sacrifices. From a Christian perspective, this devastating historical event was the fulfilment of Jesus' own prophecy (Matthew 24) and a sign that the final, once-for-all sacrifice had already been made by the Messiah. The Hebrew Scriptures themselves point toward this transition: Daniel 9 predicts the Messiah would be "cut off" before the city and the sanctuary were destroyed, which Christians align with Jesus' crucifixion just decades before 70 AD. Additionally, the profound depiction of the suffering servant in Isaiah 53, who bears the iniquities of the people, finds its fulfilment in Jesus, Christians hold, a conviction that prompted many first-century Jews to embrace Him as the promised Savior.
  </div>

</div>`
    },
    {
      id: "jewish-movements",
      title: "Branches of Judaism",
      tags: ["Abrahamic"],
      content: `
**In the time of Jesus.** Josephus describes three Jewish "philosophies" in the first century: the Pharisees, the Sadducees and the Essenes, with a fourth, more militant party founded by Judas the Galilean[^99][^92]. The Pharisees taught an oral tradition alongside the written Law and believed in the resurrection[^100][^101]. The Sadducees were mostly priestly and aristocratic, accepted only the written Law, and denied the resurrection (Mark 12:18; Acts 23:8)[^102][^103]. The Essenes lived in disciplined communities, and many scholars link them with the Dead Sea Scrolls found at Qumran[^104][^105]. The Sadducees disappeared with the Temple in AD 70, and rabbinic Judaism grew out of the Pharisees[^100][^102]. Paul calls himself a Pharisee (Philippians 3:5; Acts 23:6), and most of Jesus' recorded debates are with Pharisees.

**Karaites.** From the eighth century the Karaites, following Anan ben David in Babylonia, rejected the Oral Torah and held to the written Scriptures alone[^106][^107][^108]. A small Karaite community survives, mostly in Israel. Their dispute with the rabbis over tradition and Scripture is the same in shape as the later Protestant and Catholic one.

**Hasidism.** Hasidism began in the eighteenth century in what is now western Ukraine, with Israel ben Eliezer, the Baal Shem Tov. It stressed joy, heartfelt prayer and God's presence in all things, and gathered followers around a *rebbe*, a spiritual leader whose role passes down through his family[^109][^110]. Its opponents, the Misnagdim, rejected it at first, and Hasidism is now part of Haredi, or ultra-Orthodox, Judaism[^109][^111].

**The modern movements.** Most of today's divisions grew out of the debates of the nineteenth century over how far Judaism should change with modern life[^92][^112].

• **Orthodox Judaism** holds that the written and Oral Torah were given by God and remain binding. It includes the Haredim, among them the Hasidim, who keep apart from secular society, and Modern Orthodoxy, which combines strict observance with engagement in the wider world[^113][^114][^111]

• **Reform Judaism** began in Germany in the early nineteenth century. It treats Jewish law as a developing tradition rather than a fixed obligation, and places the prophets' ethics at the centre[^115][^116][^117]

• **Conservative Judaism**, called Masorti outside North America, holds that Jewish law is binding but has always developed through history, and so may continue to develop[^118][^119]

• **Reconstructionist Judaism**, founded by Mordecai Kaplan in the twentieth century, treats Judaism as the evolving civilization of the Jewish people[^120][^121][^122]

Ashkenazi, Sephardi and Mizrahi Jews are communities of different descent with their own customs and prayer rites, not separate denominations[^92][^112].

**How many follow each.** In the United States in 2020, 37% of Jewish adults identified as Reform, 17% as Conservative and 9% as Orthodox, with most of the rest belonging to no particular branch[^123]. Israeli Jews describe themselves differently: in 2016, 49% called themselves *hiloni* (secular), 29% *masorti* (traditional), 13% *dati* (religious, close to Modern Orthodox) and 9% *haredi*[^124].

**Messianic Judaism.** Messianic Jews accept Jesus as the Messiah while keeping Jewish practice. Jewish bodies regard the movement as a form of Christianity, and Israel's Supreme Court has treated it as such for the purposes of the Law of Return[^125][^126]. It has a section of its own under [the branches of Christianity](/categories/branches#section-messianicJudaism).

**See also:** [Jewish Objections to Jesus as Messiah](/categories/religions#section-jewish-objections).
`,
    },
    {
      id: "jewish-objections",
      title: "Jewish Objections to Jesus as Messiah",
      tags: ["Abrahamic"],
      content: `
These objections come from people who know the Hebrew Scriptures well, and they deserve serious answers. All the earliest Christians were Jews, and Paul spoke of his "great sorrow" that most of his people did not believe (Romans 9:1-5), which is a better attitude than triumph. The long Christian record of persecuting Jews is also part of why the gospel is so often heard as a threat, and it is set out in [the Church's own record](/categories/christianity-and-the-world#section-the-churchs-record).

**"He did not do what the Messiah must do."** Maimonides, the great medieval Jewish authority, says that the Messiah "will build the Temple and gather the dispersed of Israel", and that a claimant who fails is not the Messiah. He names "Jesus of Nazareth who aspired to be the Mashiach and was executed by the court"[^127][^128]. Jewish teaching expects universal peace and the return of the exiles (Isaiah 2:4; 11:6-12)[^129]. None of this happened in the first century. Christians reply with two comings: the Messiah would first be "cut off" (יִכָּרֵת, *yikkaret*) before the city and sanctuary were destroyed (Daniel 9:26), and would later reign. Scripture itself holds pictures in tension, as the Talmud recognises when it asks whether the Messiah will come "with the clouds of heaven" (Daniel 7:13) or lowly on a donkey (Zechariah 9:9), and answers that it depends on Israel's merit[^130]. Jewish critics answer that a second coming is an explanation devised after the failure of the first.

**"Isaiah 53 is about Israel."** Rashi, the leading medieval commentator, says that the prophet "mentions all Israel as one man"[^131], and Isaiah 49:3 does call the servant Israel. This became the majority Jewish reading from the medieval period. Christians reply that the servant in 49:5-6 restores Israel, so he cannot simply be Israel, that he suffers "for the transgression of my people" (Isaiah 53:8), and that he is innocent (53:9). Earlier Jewish readers also saw an individual here. The Targum reads, "my servant the Messiah shall prosper" (52:13)[^132][^133], and the Talmud applies "our illnesses he did bear" to the Messiah[^134], although the Targum goes on to turn the suffering of the passage away from him.

**"God is one, and God is not a man."** "God is not human" (Numbers 23:19), and the Shema says that the LORD is אֶחָד (*echad*, "one", Deuteronomy 6:4)[^135][^136]. Worshipping a man looks like idolatry. Christians reply that *echad* can describe a compound unity, as with "one flesh" (Genesis 2:24), that the stricter word for "only" is יָחִיד (*yachid*)[^137], and that the prophets speak of a child called "Mighty God" (Isaiah 9:6). Jewish readers answer that *echad* in the Shema simply means one, and the [Trinity topic](/categories/trinity) sets out the Christian case.

**"A virgin birth rules him out."** The Messiah must descend from David through his father, and if Jesus had no human father he has no such line[^136][^138]. Matthew's genealogy also runs through Jeconiah, whose descendants were cursed from the throne (Jeremiah 22:30). Christians reply that legal descent passed through Joseph by adoption, that Luke traces another line through David's son Nathan, and that Haggai 2:23 may reverse the curse on Jeconiah's grandson. The two genealogies are discussed among the [supposed contradictions](/categories/contradictions#section-genealogies).

**"The proof texts are mistranslated."** The most famous cases are עַלְמָה (*almah*, "young woman") in Isaiah 7:14 and כָּאֲרִי (*ka'ari*, "like a lion") in Psalm 22:16, and both are real disputes. The [prophecy](/categories/prophecy#section-virgin-birth) and [translations](/categories/bible-translations#section-famous-differences) topics give the Hebrew and the arguments on each side.

**"The Law is forever."** Moses warns against any prophet who leads Israel away (Deuteronomy 13:1-5) and against adding to or taking from the commandments (Deuteronomy 4:2). Christians reply that Jeremiah himself foretold "a new covenant... not like the covenant I made with their ancestors" (Jeremiah 31:31-32), and that Jesus came to fulfil the Law and not to abolish it (Matthew 5:17).

**"God forbids human sacrifice, and no one can die for another."** God condemns human sacrifice (Deuteronomy 12:31), and "the one who sins is the one who will die" (Ezekiel 18:20). Rabbinic Judaism holds that repentance, prayer and good deeds atone. Christians reply that Isaiah 53:10 itself calls the servant's life an אָשָׁם (*asham*, "guilt offering")[^139][^140], and that Jesus was no unwilling victim but gave his own life.

The modern scholar Michael L. Brown, himself a Jewish believer in Jesus, has answered these objections at length in the five volumes of *Answering Jewish Objections to Jesus*[^141]. Jewish scholars have replied in turn, and the *Jewish Encyclopedia* gives the traditional Jewish account of Jesus[^128]. The disagreement is ancient and serious, and it is held by people on both sides who love the same Scriptures.
`,
    },
    {
      id: "samaritans",
      title: "Samaritanism",
      tags: ["Abrahamic"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Samaritanism:**

  The Samaritans are an ancient people who, like the Jews, worship the God of Israel and keep the Law of Moses, but who hold that the true place of worship is Mount Gerizim, near Nablus, rather than Jerusalem[^142][^143][^144]. They accept only the five books of Moses as Scripture, in their own version, the Samaritan Pentateuch, which differs from the Jewish text in about 6,000 places, most of them minor, and adds a commandment to build an altar on Gerizim[^145][^146].

  They describe themselves as descendants of the northern tribes of Ephraim and Manasseh who were never exiled; Jewish tradition, following 2 Kings 17, regarded them as foreigners settled by Assyria who adopted Israel's worship[^142][^147][^143]. They still sacrifice lambs on Mount Gerizim at Passover, and number about 900, living in Kiryat Luza on the mountain and in Holon near Tel Aviv[^142][^144][^143].

  **📅 Date Founded:** No founder; they trace themselves to ancient Israel. The split with the Jews hardened during the Persian and Hellenistic periods, with a temple on Gerizim built around the fifth century BC and destroyed by the Jewish ruler John Hyrcanus around 110 BC[^147][^144][^143]
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>

    - **Faithful to the Law:** For more than two thousand years the Samaritans have kept the Sabbath, the festivals and the Passover sacrifice as the Torah commands[^147][^143]

    - **An independent witness to the text:** The Samaritan Pentateuch is a separate line of transmission of the books of Moses, and textual scholars use it alongside the Masoretic text and the Dead Sea Scrolls[^145][^146]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>

    - **A narrowed Scripture:** Rejecting the prophets and writings leaves out the promises of a Davidic king, although the Samaritans do expect a coming figure, the *Taheb* ("restorer"), a prophet like Moses (Deuteronomy 18:15)[^147][^143]

    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>

  **Respectful Assessment:**   Samaritans appear repeatedly in the Gospels. Jesus speaks with a Samaritan woman about this very dispute, saying that "salvation is from the Jews" but that a time is coming when true worshippers will worship "in the Spirit and in truth" on neither mountain (John 4:20-24). The woman herself expects the Messiah (John 4:25), which fits the hope of the Taheb. The parable of the Good Samaritan makes a despised outsider the example of love (Luke 10:25-37), and Acts records the gospel reaching Samaria early (Acts 8:4-25).
</div>

**See also:** [Branches of Judaism](/categories/religions#section-jewish-movements).
`,
    },
    {
      id: "hinduism",
      title: "Hinduism",
      tags: ["Dharmic"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Hinduism:**

  Hinduism is one of the world's oldest religious traditions, encompassing a diverse range of beliefs and practices[^148][^149]. Central concepts include dharma (righteous living), karma (law of cause and effect), samsara (cycle of rebirth), and moksha (liberation from the cycle). Hindus worship multiple deities, with major ones including Brahma (creator), Vishnu (preserver), and Shiva (destroyer/transformer). The religion includes various texts like the Vedas, Upanishads, and epics like the Mahabharata and Ramayana. Hinduism emphasizes different paths to spiritual realization including devotion (bhakti), knowledge (jnana), and righteous action (karma yoga). As of 2024, Hinduism has approximately 1.16 billion followers worldwide, making it the third-largest religion globally[^150][^151].


  **📅 Date Founded:** c. 1500-500 BC, evolved gradually from Vedic traditions in the Indian subcontinent
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>



    - **Spiritual diversity:** Multiple paths to seek divine connection[^152]

      - **Ancient wisdom:** Deep philosophical traditions and meditation practices[^153][^154]

      - **Tolerance:** Generally inclusive attitude toward other beliefs[^155]

      - **Moral emphasis:** Strong focus on righteous living (dharma)[^156][^157]

      - **Rich culture:** Long traditions of temple art, devotional music and epic literature[^158][^159]

      - **Family values:** Emphasis on duty and respect for elders[^160]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>



    - **Diversity of scripture:** The Vedas, Upanishads, Puranas and epics contain several accounts of origins that do not harmonise into one narrative. Hindu tradition largely does not require them to, treating them as complementary approaches rather than as a single historical record, which is itself a substantial difference from the Christian view of Scripture rather than an internal inconsistency by Hindu standards[^161]

      - **Caste:** The fourfold varna order appears in the Purusha hymn of the Rig Veda and is elaborated in the Manusmriti into a hereditary hierarchy with severe disabilities for those at the bottom. This is the most serious moral objection to the tradition, and it has to be made accurately: caste discrimination and untouchability are prohibited by the Indian constitution, and reform from within Hinduism runs from the Bhakti poets through Ramakrishna, Vivekananda, Narayana Guru and Gandhi. The charge is that the texts underwrite the hierarchy, not that Hindus today defend it[^162]

      - **Karma and rebirth:** The strongest form of the difficulty is not circularity but unfalsifiability. An appeal to deeds in unremembered former lives can account for any distribution of suffering whatever, which means no observation can count against it. Christian theology faces the problem of suffering in its own form and answers it differently, so the point is a comparison of two accounts rather than a knock-down[^163][^153]

      - **Change over time:** Contemporary devotional Hinduism, centred on Vishnu, Shiva and the Goddess, differs considerably from the sacrificial religion of the Vedic hymns. Whether that constitutes organic development or departure is disputed among Hindu thinkers themselves, and the identical question is put to Christianity about its own first four centuries[^164]

      - **Divine attributes:** Texts describe deities in ways that are difficult to hold together, as supreme and yet limited, and Hindu philosophy divides internally over how to resolve it. Advaita Vedanta treats personal deities as accessible forms of a single impersonal Brahman, while the theistic Vaishnava and Shaiva schools resist that reduction. Christian theology reaches a different answer, but this is a live philosophical argument inside the tradition and not an oversight[^165][^153]

      - **Cosmology:** Puranic cosmology, with its concentric continents and central mountain, does not correspond to modern geography. The picture is mixed rather than uniformly hostile, since the immense cyclical timescales of the yugas and kalpas are frequently noted as closer in order of magnitude to modern cosmological ages than a literal short chronology is[^166]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>


  **Respectful Assessment:** Hinduism contains profound spiritual insights and demonstrates humanity's deep longing for the divine. Its emphasis on righteousness, meditation, and seeking ultimate reality reflects the image of God in humanity. However, several fundamental issues prevent it from providing the complete truth found in Christianity:


  <div style="margin: 10px 0;">
    **1. Polytheism vs. Monotheism:** While some Hindu traditions speak of ultimate unity (Brahman), popular practice involves worship of multiple deities, contradicting the biblical revelation of one personal God who is both transcendent and immanent[^167][^149].
  </div>

  <div style="margin: 10px 0;">
    **2. Karma vs. Grace:** The karma system creates endless cycles of debt and payment with no guarantee of liberation. Christianity offers immediate forgiveness and freedom through Christ's sacrifice, not earned through countless lifetimes of works[^168].
  </div>

  <div style="margin: 10px 0;">
    **3. Social Stratification vs. Human Equality:** While early Vedic texts spoke of functional divisions (varna), the rigid hereditary caste system that developed over centuries contradicts Christianity's teaching that all people are created equal in God's image ([Genesis 1:27](https://www.biblegateway.com/passage/?search=Genesis%201%3A27&version=NIV), [Galatians 3:28](https://www.biblegateway.com/passage/?search=Galatians%203%3A28&version=NIV))[^169].
  </div>

  <div style="margin: 10px 0;">
    **4. Impersonal vs. Personal God:** Hindu ultimate reality (Brahman) is often described as impersonal consciousness, while the Christian God is personal, relational, and knowable through Jesus Christ[^170].
  </div>

  <div style="margin: 10px 0;">
    **5. Uncertain Liberation vs. Assured Salvation:** While some Hindu schools teach eventual moksha (liberation), the various paths (karma, bhakti, jnana) offer no certain timeline or guarantee, and most require multiple lifetimes. Christianity provides immediate assurance of salvation and eternal life through faith in Christ[^171].
  </div>

  **Conclusion:** While appreciating Hinduism's spiritual depth and cultural richness, Christianity provides clearer revelation of God's nature, assured salvation, and ultimate hope beyond the cycles of karma and rebirth.

  <div style="margin: 15px 0; padding-top: 10px; border-top: 1px solid #bbdefb;">
**Deep Historical & Theological Context:**
  A profound difference between Hinduism and Christianity lies in their view of history and reality. Hinduism generally views history as cyclical: endless ages of creation, preservation, and destruction. In this worldview, the physical realm is often seen as Maya (illusion), and the ultimate goal is to escape it entirely. Christianity, rooted in the Hebrew tradition, views history as linear and purposeful, moving from a deliberate creation by a loving God toward a final redemption and bodily resurrection. The material world is fundamentally "good" (Genesis 1) and will ultimately be restored, not discarded. Moreover, the concept of Karma enforces a strict law of cause and effect across multiple lifetimes, and while the devotional bhakti traditions do speak of divine grace, that grace is not grounded in a historical act of atonement. In stark contrast, the Christian Gospel is built on Grace: God Himself steps into human history in the person of Jesus Christ to pay the debt of human sin, offering immediate, assured salvation to anyone who believes, completely breaking the exhausting cycle of karmic debt.
  </div>

</div>`
    },
    {
      id: "hindu-traditions",
      title: "Hindu Traditions and Schools",
      tags: ["Dharmic"],
      content: `
Hinduism has no single founder, creed or central authority, and the traditions inside it differ about as much as the branches of Christianity do. They can be divided in two ways: by the god at the centre of worship, and by the school of philosophy.

**The main traditions of worship.** Four traditions are usually distinguished[^165][^172][^173].

• **Vaishnavism** worships Vishnu as the supreme God, especially in his incarnations (*avatars*) as Krishna and Rama. Devotion (*bhakti*) is central[^174][^172]

• **Shaivism** worships Shiva as the supreme God, and includes both temple worship and ascetic and yogic traditions[^175][^165]

• **Shaktism** worships the Goddess (*Devi*), in forms such as Durga and Kali, as the supreme power behind all things[^176][^173]

• **Smartism** treats five deities, Ganesha, Shiva, the Goddess, Vishnu and Surya, as equal forms of one ultimate reality, and follows the philosopher Shankara[^177][^165]

**The schools of philosophy.** Classical Indian thought counted six schools as orthodox (*astika*) because they accepted the authority of the Vedas: Nyaya (logic), Vaisheshika (atoms and categories), Samkhya (the dualism of spirit and matter), Yoga, Mimamsa (Vedic ritual) and Vedanta (the teaching of the Upanishads). Buddhism, Jainism and the materialist Charvaka school were counted as unorthodox (*nastika*) because they rejected the Vedas[^154][^178][^179][^153].

**The Vedanta schools.** Vedanta became the dominant school, and it is itself divided over the central question of how God, the soul and the world relate[^180][^181].

• **Advaita** (non-dualism), taught by Shankara around the eighth century, holds that Brahman alone is real, that the self is identical with Brahman, and that the world of many things is an appearance. Personal gods are real at the level of worship, but not ultimately[^182][^183]

• **Vishishtadvaita** (qualified non-dualism), taught by Ramanuja in the eleventh and twelfth centuries, holds that souls and the world are real and distinct, and form the body of a personal God, Vishnu. Liberation comes through devotion and surrender (*prapatti*) to God, who saves by grace[^184][^185][^186]

• **Dvaita** (dualism), taught by Madhva in the thirteenth century, holds that God, souls and matter are eternally distinct, and that souls depend wholly on God[^187][^188][^189]

**A debate over grace.** Ramanuja's followers later split over how salvation happens. The Tenkalai school taught that God carries the soul as a mother cat carries her kitten, which does nothing, while the Vadakalai school held that the soul must cling to God as a baby monkey clings to its mother. Scholars have compared the Tenkalai view with the Protestant teaching of salvation by grace alone[^190][^191].

**Modern movements.** The Brahmo Samaj, founded by Ram Mohan Roy in Calcutta in 1828, rejected image worship[^192][^193]. The Arya Samaj, founded by Dayananda Saraswati in Bombay in 1875, called Hindus back to the Vedas alone[^194][^195]. The International Society for Krishna Consciousness, known as the Hare Krishna movement, was founded in New York in 1966 by A. C. Bhaktivedanta Swami Prabhupada and spread Vaishnava devotion to Krishna in the West[^196][^172].

**What this means for comparison.** Statements about "what Hindus believe" are often true only of one school. The devotional schools of Ramanuja and Madhva teach a personal God, a real world and salvation by grace, and stand much nearer to Christianity than Advaita does, with its impersonal Brahman and a world that is ultimately appearance. The difference that remains with all of them is that Christian grace rests on a historical death and resurrection rather than on a timeless divine nature.

**See also:** [Eastern Philosophy (Philosophy)](/categories/philosophy#section-eastern), [Monism and Oneness (Philosophy)](/categories/philosophy#section-monism-oneness).
`,
    },
    {
      id: "greek",
      title: "Greek Polytheism",
      tags: ["Ancient"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Greek Polytheism:**

  Greek polytheism was the religious system of ancient Greece, centered on the worship of the Olympian gods and goddesses[^197]. The pantheon included major deities like Zeus (king of gods), Hera (goddess of marriage), Poseidon (god of the sea), Athena (goddess of wisdom), and Apollo (god of prophecy and music, later identified with the sun). Greeks believed these gods controlled various aspects of life and nature, requiring worship, sacrifices, and rituals to gain favor. The religion included mystery cults, oracles (especially at Delphi), and elaborate festivals.


  **📅 Date Founded:** Systematic development c. 800-500 BC during the Archaic period, though rooted in earlier Bronze Age religious traditions including Minoan (c. 2700-1100 BC) and Mycenaean (c. 1600-1100 BC) practices[^198]
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>



    - **Cultural foundation:** Provided foundation for Western literature, art, and philosophy[^199][^200]

      - **Community cohesion:** Festivals and rituals strengthened social bonds[^201]

      - **Moral stories:** Myths taught lessons about hubris, justice, and virtue[^202]

      - **Democratic values:** Influenced development of democratic ideals in Athens[^203]

      - **Artistic inspiration:** Produced magnificent temples, sculptures, and literature[^204][^205]

      - **Mystery traditions:** Offered deeper spiritual experiences through mystery cults[^206]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>



    - **Internal mythological contradictions:** Greek sources give differing origin stories and genealogies for the same gods[^207][^208]

      - **Moral inconsistencies:** Gods praised for virtues while simultaneously committing acts condemned in mortals[^209]

      - **Historical extinction:** Public cult ended in late antiquity. Its decline owed much to imperial legislation, including the Theodosian bans on sacrifice in the 390s, so its disappearance is not by itself evidence that it failed its adherents[^210]

      - **Anthropomorphic limitations:** Gods displayed human emotions and limitations, contradicting claims of divinity[^211]

      - **Oracle reliability:** The most famous Delphic responses are ambiguous or known only from later literary sources, and modern study concludes that many of the dramatic ones are legendary rather than historical[^212]

      - **Lack of coherent theology:** No systematic doctrine - beliefs varied significantly between city-states[^213][^214]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>


  **Respectful Assessment:** Greek polytheism made significant contributions to Western civilization and demonstrated humanity's search for the divine. However, its fundamental flaws point to the need for a more complete revelation:


  <div style="margin: 10px 0;">
    **1. Moral Confusion:** The contradiction between divine behavior and human ethics shows the inadequacy of anthropomorphic gods as moral guides.
  </div>

  <div style="margin: 10px 0;">
    **2. Historical Abandonment:** Many adherents converted to Christianity over the third to fifth centuries, though from the late fourth century imperial pressure played a real part alongside persuasion.
  </div>

  <div style="margin: 10px 0;">
    **3. Lack of Historical Foundation:** Unlike Christianity, Greek mythology lacks historical verification for its core claims.
  </div>

  **Conclusion:** While Greek polytheism enriched human culture, it ultimately pointed beyond itself to the need for true divine revelation found in Christianity.

</div>

**See also:** [Dying and Rising Gods (Pagan Origins)](/categories/pagan-origins#section-dying-and-rising-gods).
`
    },
    {
      id: "roman",
      title: "Roman Polytheism",
      tags: ["Ancient"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Roman Polytheism:**

  Roman polytheism was the religious system of ancient Rome, heavily influenced by Greek religion but adapted to Roman culture and values. The Romans worshiped a pantheon including Jupiter (king of gods), Mars (god of war), Venus (goddess of love), and Minerva (goddess of wisdom). Roman religion emphasized duty to the state, proper ritual observance, and maintaining the pax deorum (peace with the gods). Deceased emperors were often deified by decree of the Senate, living emperors were honoured through the imperial cult (especially in the eastern provinces), and the state closely controlled public religious practice.


  **📅 Date Founded:** Traditionally dated to the founding of Rome (753 BC), with roots in earlier Latin, Etruscan and Italic cults, reaching full development during the Roman Republic (509-27 BC)
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>



    - **Social cohesion:** United diverse peoples under common religious framework[^215]

      - **Civic duty:** Public cult bound worship to duty toward the community and state[^216][^217]

      - **Religious tolerance:** Generally accepted foreign gods and practices[^218][^217]

      - **Legal framework:** Contributed to development of Roman law and jurisprudence[^219]

      - **Administrative efficiency:** Organized religious practices for vast empire[^217]

      - **Cultural preservation:** Preserved and transmitted Greek and other traditions[^220][^221]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>



    - **Internal mythological contradictions:** Competing and conflicting accounts of Rome's founding, including the Romulus and Aeneas traditions, between different sources[^222][^221]

      - **Religious syncretism:** Roman religion heavily adapted Greek deities and myths, often changing names while adopting similar attributes and stories, showing cultural borrowing rather than independent development[^223][^217]

      - **Political manipulation:** Religious practices were often changed to serve political purposes rather than spiritual truth[^224][^217]

      - **State-controlled theology:** Emperor worship contradicted earlier religious principles and was enforced through political pressure[^225]

      - **Historical extinction:** The religion was replaced by Christianity, a process driven by conversion and, from Theodosius I onward, by laws closing temples and banning sacrifice[^226]

      - **Limited theological development:** Roman religion had distinctive native elements, including Janus, Vesta, the household lares and penates and an elaborate augural system, but it centred on correct ritual rather than on doctrine, and it produced little systematic theology of its own[^227][^217]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>


  **Respectful Assessment:** Roman polytheism provided social structure and cultural unity for a vast empire. However, its fundamental weaknesses reveal the need for authentic divine revelation:


  <div style="margin: 10px 0;">
    **1. Political Corruption:** The subordination of religious truth to political expediency undermined authentic spiritual seeking.
  </div>

  <div style="margin: 10px 0;">
    **2. Borrowed Mythology:** Much of Roman mythology was adopted from Greece, and the religion's focus on ritual correctness left questions of truth largely unaddressed.
  </div>

  <div style="margin: 10px 0;">
    **3. Historical Replacement:** Christianity spread through the empire for three centuries while illegal and often persecuted, which is significant; the final suppression of the old cults, however, was a matter of imperial law.
  </div>

  **Conclusion:** While Roman religion served administrative purposes, it ultimately lacked the spiritual authenticity and historical foundation found in Christianity.

</div>

**See also:** [Rome and the Emperor (Pagan Origins)](/categories/pagan-origins#section-rome-and-the-emperor).
`
    },
    {
      id: "buddhism",
      title: "Buddhism",
      tags: ["Dharmic"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Buddhism:**

  Buddhism was founded by Siddhartha Gautama (the Buddha) and focuses on the path to enlightenment through understanding the Four Noble Truths and following the Eightfold Path. Buddhists believe in the cycle of rebirth (samsara) driven by karma, and seek to achieve nirvana - the cessation of suffering and release from the cycle of rebirth. The religion emphasizes meditation, ethical conduct, wisdom, and compassion. Pew Research Center estimated about 488 million Buddhists in 2010, making Buddhism the fourth-largest religion globally[^228][^229]. Major traditions include Theravada, Mahayana, and Vajrayana Buddhism.


  **📅 Date Founded:** c. 6th-4th century BC in northeastern India by Siddhartha Gautama (Buddha)
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>



    - **Compassion emphasis:** Strong focus on reducing suffering for all sentient beings[^230][^231]

      - **Meditation practices:** Developed sophisticated mindfulness and meditation techniques[^232][^233]

      - **Non-violence:** Commitment to ahimsa (non-harm) toward all living beings[^234][^235]

      - **Personal responsibility:** Emphasizes individual accountability for actions and their consequences[^236]

      - **Philosophical depth:** Addresses fundamental questions about suffering and existence[^237]

      - **Peaceful traditions:** Generally promoted peaceful coexistence and tolerance[^238]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>



    - **Diversity across schools:** Theravada, Mahayana and Vajrayana differ on major questions, including how many Buddhas there are and what exactly is denied by the doctrine of no-self. Christianity's own branches differ comparably on questions of similar weight, so this is recorded as a feature of a tradition spread over two and a half millennia rather than pressed as an objection[^239][^240]

      - **Karma without a self:** If there is no permanent self, what carries karma from one life to the next is a real question, and Buddhism has developed answers to it: dependent origination, the continuity of a causal mind-stream rather than a substance, and the argument in the *Milindapanha* that a chariot's identity is conventional yet serviceable. Critics reply that a purely conventional continuity does not obviously make a future rebirth *the same person's* reward or punishment, which is the point at which the moral force of karma is at stake. The objection is live and much discussed inside Buddhist philosophy, not an oversight[^241][^242]

      - **Textual development:** Miraculous birth accounts, supernatural powers and cosmic events appear in later strata of the Buddhist canon rather than in the earliest material. The same kind of historical-critical question is asked of the Christian sources, and Christians answer it by arguing for early dating and proximity to eyewitnesses rather than by denying that the question is legitimate. Applied here it is a fair observation about textual layering; it is not a charge only other religions have to answer[^243][^237]

      - **Compassion and detachment:** This is often listed as a contradiction and it is not one on Buddhist terms. Non-attachment means freedom from craving rather than indifference to others, and the Mahayana bodhisattva vow makes the liberation of all beings the purpose of the path. The genuine philosophical question is a narrower one, whether a tradition that regards the individual self as ultimately unreal can ground the value of persons in the way Christian theology does through the image of God[^231]

      - **Cosmology:** Traditional Buddhist cosmology, with Mount Meru and its world-systems, does not correspond to modern astronomy or geology. Modern Buddhist thinkers commonly treat it as cosmological myth rather than as physical description[^244][^245]

      - **Monasticism and the world:** Monastic withdrawal alongside a commitment to universal compassion has been criticised as inconsistent. The same criticism has long been made of Christian monasticism, which Christians defend as a life of prayer, learning and service, so this charge is not available without qualification to anyone making it from a Christian position[^246][^240]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>


  **Respectful Assessment:** Buddhism offers valuable insights into human suffering and the importance of compassion. However, several fundamental issues prevent it from providing the complete solution found in Christianity:


  <div style="margin: 10px 0;">
    **1. No Personal God:** Buddhism's lack of a personal, loving God leaves practitioners without divine relationship and ultimate meaning.
  </div>

  <div style="margin: 10px 0;">
    **2. Endless Cycles:** The karma system offers no certain escape from suffering, while Christianity provides immediate salvation and hope.
  </div>

  <div style="margin: 10px 0;">
    **3. No Self:** Christians argue that the doctrine of "no-self" sits uneasily with individual enlightenment and moral responsibility, though Buddhist philosophers have answers to this.
  </div>

  <div style="margin: 10px 0;">
    **4. History:** Buddhism does not rest on a datable public event in the way Christianity rests on the resurrection, and the accounts of the Buddha's life were written centuries after him.
  </div>

  **Conclusion:** While Buddhism correctly identifies human suffering as a central problem, Christianity provides the superior solution through personal relationship with God and assured salvation through Christ.

  <div style="margin: 15px 0; padding-top: 10px; border-top: 1px solid #bbdefb;">
**Deep Historical & Theological Context:**
  Buddhism perceptively diagnoses the human condition: the world is filled with suffering. The Buddha's solution, however, is the elimination of desire (extinguishing the self to reach Nirvana), positing that because desire causes suffering, one must cease to desire even good things. Christianity offers a radically different diagnosis and cure. It teaches that our fundamental problem is not desire itself, but misdirected desire, namely loving the creation more than the Creator. Instead of extinguishing the self, Christianity promises the redemption and glorification of the self. Instead of escaping the cycle of rebirth by fading into nothingness or undifferentiated consciousness, Christians look forward to eternal, joyful, bodily existence in a renewed creation. Furthermore, while the stories of the Buddha's life were written centuries after he lived and involve mythological elements to express spiritual truths, the accounts of Jesus' life, death, and bodily resurrection are rooted in first-century eyewitness testimony and historical evidence, demanding a response not just to a philosophy, but to an objective historical event.
  </div>

</div>`
    },
    {
      id: "buddhist-schools",
      title: "Branches of Buddhism",
      tags: ["Dharmic"],
      content: `
Buddhism divided in its first centuries into many schools, traditionally counted as eighteen, and only one of these survives. The three major branches today are Theravada, Mahayana and Vajrayana[^239][^228].

**Theravada.** Theravada, the "teaching of the elders", is the surviving early school. It is followed in Sri Lanka, Myanmar, Thailand, Cambodia and Laos, keeps the Pali Canon as its scripture, and gives monks a central place. Its ideal is the *arhat*, who reaches nirvana by his own practice of the Buddha's path[^247][^248][^240].

**Mahayana.** Mahayana, the "great vehicle", arose around the start of the first millennium AD with new scriptures such as the Lotus Sutra and the Perfection of Wisdom sutras. Its ideal is the *bodhisattva*, who postpones final nirvana in order to bring all beings to enlightenment, and it reveres many Buddhas and heavenly bodhisattvas such as Avalokiteshvara, known in China as Guanyin. It is the Buddhism of China, Japan, Korea and Vietnam[^249][^250][^251]. Mahayana includes several distinct schools.

• **Pure Land** Buddhism centres on devotion to Amitabha (Amida) Buddha, who vowed to bring everyone who calls on his name to rebirth in his Pure Land[^252][^253]. In Japan, Shinran (1173 to 1263) taught that salvation depends entirely on Amida's "other power" and not on one's own effort, so that even the act of faith is Amida's gift. His Jodo Shinshu is the most widely practised form of Buddhism in Japan[^254][^255]

• **Zen**, or Chan in China, stresses meditation and a direct awakening to one's own Buddha nature, using seated meditation and, in the Rinzai school, the paradoxical riddles called *koans*[^256][^257]

• **Nichiren** Buddhism, founded in thirteenth-century Japan, holds that the Lotus Sutra alone contains the full truth and centres on chanting its title. Soka Gakkai, the largest Nichiren lay movement, is active worldwide[^258][^259][^260]

**Vajrayana.** Vajrayana, the "diamond vehicle", grew out of Mahayana in India and adds tantric ritual, mantras, visualisation and close dependence on a guru, aiming at enlightenment within a single life[^261][^262]. It is the Buddhism of Tibet, Bhutan and Mongolia. Tibetan Buddhism has four major schools, the Nyingma, Kagyu, Sakya and Gelug; the Dalai Lama belongs to the Gelug[^263][^262].

**Navayana.** In 1956 B. R. Ambedkar, the Dalit leader who chaired the drafting of India's constitution, rejected Hinduism and its caste system and converted to Buddhism with about 380,000 followers at Nagpur. His reinterpreted Buddhism, called Navayana, stresses social equality[^264][^239].

**What this means for comparison.** The branches differ on the very point where Buddhism and Christianity most often meet: whether liberation is reached by one's own effort or received from another. Theravada and Zen stress self-effort, while Shinran's Pure Land teaching relies entirely on Amida's grace. The Christian difference with Pure Land lies in history: Amida is known from the sutras as a figure of an immeasurably distant past, while Jesus is a datable figure whose death and resurrection are put forward as historical events.

**See also:** [Eastern Philosophy (Philosophy)](/categories/philosophy#section-eastern).
`,
    },
    {
      id: "modern",
      title: "Modern Spiritual Movements",
      tags: ["New movements"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Modern Spiritual Movements:**

  Modern spiritual movements encompass various New Age, neo-pagan, and syncretic religious practices that have emerged primarily since the 20th century. These include movements like Wicca, New Age spirituality, neo-shamanism, and various forms of spiritual eclecticism. Common themes include personal spiritual experience, universal consciousness, energy healing, crystal therapy, astrology, and the blending of Eastern and Western religious concepts. Many emphasize individual spiritual authority and reject traditional religious structures.


  **📅 Date Founded:** Mid-20th century onwards, with roots in 19th-century spiritualism and Theosophy movements
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>



    - **Personal empowerment:** Encourages individual spiritual exploration and self-discovery[^265][^266]

      - **Environmental consciousness:** Often stresses connection with nature, and the Vatican's study of the movement notes its ecological concern[^267][^266]

      - **Holistic approach:** Considers physical, mental, and spiritual aspects of human experience[^268][^266]

      - **Gender equality:** Many movements emphasize feminine divine aspects and gender equality[^269]

      - **Cultural inclusivity:** Draws on many world traditions, Eastern and Western[^270][^266]

      - **Therapeutic elements:** Offers psychological benefits through meditation and self-reflection[^271]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>



    - **Internal contradictions:** Many movements combine mutually exclusive beliefs (e.g., claiming both Buddhist non-self and individualistic self-empowerment)[^272][^266]

      - **Lack of historical foundation:** Most practices claim ancient origins while being recently invented (e.g., modern Wicca created in the 1950s)[^273]

      - **Scientific contradictions:** Tests of energy healing and astrology have not supported their claims, and they have no basis in established physics or medicine[^274][^268][^275]

      - **Logical inconsistencies:** Simultaneous claims of universal truth and subjective relativism[^276]

      - **Commercialisation:** Paid courses, certifications and product ranges are central to the economics of several of these movements, and doctrine sometimes tracks what sells. The observation is fair; it is also one Christians have to accept about the prosperity gospel and parts of the televangelism industry, so it identifies a failure mode that religion in general is prone to rather than a feature unique to new movements[^277]

      - **Coercive group dynamics:** Some groups show the recognised marks of coercive control, including isolation from family, information restriction and financial exploitation. This applies to specific organisations rather than to the category as a whole, and Christian groups have produced their own documented examples of the same pattern[^278]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>


  **Respectful Assessment:** Modern spiritual movements reflect genuine human spiritual hunger and desire for meaning. However, their fundamental flaws reveal the need for authentic divine revelation:


  <div style="margin: 10px 0;">
    **1. Logical Incoherence:** The combination of contradictory worldviews undermines any claim to truth.
  </div>

  <div style="margin: 10px 0;">
    **2. Lack of Historical Grounding:** Unlike Christianity, these movements lack historical verification and often involve deliberate historical falsification.
  </div>

  <div style="margin: 10px 0;">
    **3. Commercial Pressure:** Where doctrine follows what sells, it is hard to treat it as revelation.
  </div>

  <div style="margin: 10px 0;">
    **4. Subjective Relativism:** Without objective truth claims, there is no agreed measure of spiritual progress.
  </div>

  **Conclusion:** While modern spiritual movements correctly identify human spiritual needs, Christianity provides the historically grounded, logically coherent, and divinely revealed solution.

</div>`
    },
    {
      id: "sikhism",
      title: "Sikhism",
      tags: ["Dharmic"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Sikhism:**

  Sikhism was founded by Guru Nanak in 15th-century Punjab and developed through nine successive Gurus. Sikhs believe in one God (Waheguru) and follow the teachings recorded in the Guru Granth Sahib, their holy scripture. The religion emphasizes devotion to God, equality of all people regardless of caste or gender, honest work, and sharing with others. Sikhs practice the three pillars: meditation on God's name (Naam Japna), honest livelihood (Kirat Karni), and sharing with the needy (Vand Chakna). The faith includes the concept of reincarnation and karma but focuses on liberation in this lifetime. Sikhism has approximately 25 to 30 million followers worldwide and is commonly listed as the fifth-largest organized religion[^279].


  **🌿 Branches:** Most Sikhs belong to no separate sect, although they differ over initiation into the Khalsa. Smaller groups include the Namdharis, who accept a living guru after Guru Gobind Singh, which most Sikhs reject; the Nihangs, an armed order keeping the dress and customs of the early Khalsa; and the Udasis, an ascetic order traced to Guru Nanak's son Sri Chand[^280][^281][^282][^283][^284][^285]

  **📅 Date Founded:** c. 1500 AD in Punjab (modern-day India/Pakistan) by Guru Nanak Dev (born 1469), who began his public teaching around 1499
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>



    - **Monotheistic clarity:** Clear belief in one supreme God (Waheguru)[^286]

      - **Social equality:** Rejected caste system and promoted equality regardless of birth[^287][^288]

      - **Gender equality:** Sikh teaching gives women equal spiritual status, and they may lead worship[^289][^279]

      - **Community service:** Strong tradition of selfless service (seva) and charity[^290][^287]

      - **Honest living:** Emphasis on earning through legitimate means and hard work[^291]

      - **Religious tolerance:** Generally peaceful coexistence with other faiths[^292][^293]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>



    - **Relationship to Hinduism and Islam:** Older Western scholarship described Sikhism as a synthesis of Hindu and Islamic ideas. Sikh scholars and most modern specialists reject that description, holding that Guru Nanak's teaching is a distinct revelation that rejects both, so the point is a matter of debate rather than an established defect[^294][^295]

      - **Karma-reincarnation problems:** Keeps karma and rebirth, so it meets the same objections Christians raise against the Hindu system[^296][^295]

      - **Historical anachronisms:** Some teachings attributed to early Gurus show later theological development[^297]

      - **Limited historical verification:** Many biographical details of Guru Nanak are legendary rather than historical[^288]

      - **Internal sectarian divisions:** Different groups interpret Guru's teachings differently[^298]

      - **Grace and effort:** Sikh scripture teaches that liberation comes by divine grace (*nadar*): in the Japji, good actions earn the "robe" but grace opens "the gate of liberation". The Christian disagreement is over whether that grace is grounded in an atonement, not over whether Sikhism has a doctrine of grace[^299]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>


  **Respectful Assessment:** Sikhism contains admirable moral teachings and demonstrates sincere seeking after God. However, several key issues prevent it from providing the complete revelation found in Christianity:


  <div style="margin: 10px 0;">
    **1. Karma and Grace:** Sikhism joins a sovereign, gracious God to the Indian framework of karma and rebirth, and Christians question whether the two can be held together without tension.
  </div>

  <div style="margin: 10px 0;">
    **2. Grace Without Atonement:** Sikhism teaches liberation by God's grace, but that grace is not tied to a historical act of atonement, and the soul remains within the cycle of rebirth until it is liberated.
  </div>

  <div style="margin: 10px 0;">
    **3. Reincarnation Problems:** The cycle of rebirth offers no final assurance of salvation, unlike Christian resurrection and eternal life.
  </div>

  <div style="margin: 10px 0;">
    **4. Limited Historical Foundation:** Unlike Christianity, Sikhism lacks historical verification for its supernatural claims and early biographical details.
  </div>

  **Conclusion:** While respecting Sikhism's emphasis on equality, service and grace, Christianity grounds salvation in Christ's historical work of atonement rather than in liberation from a cycle of rebirth.

  <div style="margin: 15px 0; padding-top: 10px; border-top: 1px solid #bbdefb;">
**Deep Historical & Theological Context:**
  Sikhism emerged in a region heavily influenced by both Hinduism and Islam, and its teachings naturally reflect a synthesis of monotheism and cyclical cosmology. While Sikhism's rejection of the caste system and emphasis on human equality closely parallel Christian ethics, its theological core reveals significant divergence. Sikhism retains the concept of karma and reincarnation (samsara), meaning that while God is one and sovereign, the human soul is still bound to a cycle of births dictated by human actions. The Christian revelation breaks completely from this paradigm: human beings are appointed to die once and then face judgment (Hebrews 9:27). Sikh teaching itself holds that liberation is a gift of grace received through devotion to God's name, but it places that grace within the cycle of rebirth. Christians hold that liberation comes at once through the completed, substitutionary sacrifice of Jesus Christ. The Christian God does not merely observe human effort from afar; He enters the suffering of the world directly through the Incarnation to accomplish what human effort never could.
  </div>

</div>`
    },
    {
      id: "jainism",
      title: "Jainism",
      tags: ["Dharmic"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Jainism:**

  Jainism was founded in 6th century BC India by Mahavira (though Jains trace their tradition to earlier Tirthankaras). Central to Jainism is the principle of ahimsa (non-violence) toward all living beings, extending even to microscopic life forms. Jains believe in karma, reincarnation, and liberation (moksha) through ethical conduct, right knowledge, and ascetic practices. The religion emphasizes strict vegetarianism, truth-telling, non-stealing, sexual restraint (celibacy for monastics, fidelity for laypeople), and non-attachment. Jains worship Tirthankaras (spiritual teachers) who have achieved liberation. As of 2024, Jainism has approximately 4.5 million followers worldwide, primarily concentrated in India[^300].


  **🌿 Branches:** Jainism divided in its early centuries into two main branches. Digambara ("sky-clad") monks go naked and hold that women cannot reach liberation without rebirth as men; Shvetambara ("white-clad") monks and nuns wear white robes and accept that women can be liberated[^301][^302][^303][^304][^305]. Within the Shvetambaras, the Sthanakvasi and Terapanthi movements reject the worship of images[^306][^307]

  **📅 Date Founded:** 6th century BC in India, with Mahavira as the 24th Tirthankara
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>



    - **Non-violence commitment:** Strongest possible commitment to avoiding harm to all life[^308]

      - **Environmental consciousness:** Deep respect for nature and all living beings[^309]

      - **Ethical strictness:** High moral standards and personal accountability[^235]

      - **Truth emphasis:** Strong commitment to honesty and truthfulness[^310][^235]

      - **Self-discipline:** Develops remarkable personal self-control and restraint[^311]

      - **Charitable giving:** Strong tradition of philanthropy and community support[^312]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>



    - **Extreme asceticism:** Self-starvation (sallekhana) and extreme practices can lead to death[^313][^314]

      - **Impractical ethics:** Absolute non-violence makes normal life nearly impossible[^315][^235]

      - **Karma and intention:** Jain teaching holds that harm done carelessly still binds karma, though it treats the passions behind an act as the chief factor in how strongly karma binds. Critics argue that assigning any karmic weight to unintended harm sits uneasily with ordinary ideas of moral responsibility[^316]

      - **Scientific conflicts:** The traditional classification of beings by number of senses includes souls embodied in earth, water, fire and air, which modern biology does not recognise as living[^317]

      - **Historical problems:** Many biographical details of Tirthankaras are clearly mythological[^318]

      - **Social isolation:** Monks and nuns renounce household life under strict vows, which limits ordinary community life[^319][^235]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>


  **Respectful Assessment:** Jainism demonstrates remarkable commitment to ethical principles and reverence for life. However, its extreme approach reveals fundamental misunderstandings about the nature of salvation and human responsibility:


  <div style="margin: 10px 0;">
    **1. Extreme vs. Balanced:** While non-violence is admirable, Jainism's extreme application becomes impractical and potentially harmful to human flourishing.
  </div>

  <div style="margin: 10px 0;">
    **2. Works-Based Salvation:** The belief that liberation comes through personal effort and perfect non-violence creates impossible standards and spiritual bondage rather than freedom.
  </div>

  <div style="margin: 10px 0;">
    **3. Karma Without Forgiveness:** Karma in Jainism is a quasi-material bond removed only by the soul's own discipline, leaving no place for forgiveness by a personal God.
  </div>

  <div style="margin: 10px 0;">
    **4. Social Withdrawal:** Extreme asceticism separates people from community and relationships that God designed for human flourishing.
  </div>

  **Conclusion:** While appreciating Jainism's ethical seriousness, Christianity provides a balanced approach to morality with assured salvation through divine grace rather than impossible human perfection.

</div>`
    },
    {
      id: "bahai",
      title: "Bahá'í Faith",
      tags: ["Abrahamic"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Bahá'í Faith:**

  The Bahá'í Faith was founded by Bahá'u'lláh in 19th-century Persia. Bahá'ís believe in the unity of God, unity of religion, and unity of humanity. They view all major religions as progressive revelations from the same God, with Bahá'u'lláh as the latest messenger for this age. The faith emphasizes world peace, universal education, gender equality, elimination of prejudice, and the harmony of science and religion. Bahá'ís practice devotional gatherings, study circles, and children's classes, working toward global unity and justice. As of 2024, the Bahá'í Faith has approximately 5-8 million adherents worldwide, spread across over 200 countries[^320].


  **📅 Date Founded:** 1844 AD in Persia with the Báb's declaration; 1863 AD when Bahá'u'lláh proclaimed his mission as the promised one foretold by the Báb
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>



    - **Unity emphasis:** Promotes unity among different races, nations, and religions[^321][^322]

      - **Gender equality:** Strong advocate for women's rights and equality[^323]

      - **Education focus:** Emphasizes universal education and literacy[^324][^325]

      - **Social justice:** Advocates for elimination of prejudice and poverty[^326][^325]

      - **Science and religion harmony:** Attempts to reconcile scientific and spiritual truth[^327][^328]

      - **World peace:** Works actively for global peace and international cooperation[^325]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>



    - **Progressive revelation:** Teaches that the major religions derive from successive revelations of one God, and explains their present contradictions as later human distortion. Christians object that the contradictions concern central claims, such as the death and resurrection of Jesus, which cannot all be later additions[^329][^330]


      - **Historical inaccuracies:** Bahá'u'lláh's Tablet of Wisdom makes Empedocles a contemporary of David and Pythagoras a contemporary of Solomon, a chronology at odds with modern historical dating that Bahá'í scholars have had to address[^331]

      - **Prophecy expectations:** 'Abdu'l-Bahá wrote that the unity of nations would be securely established in the twentieth century, and many Bahá'ís expected the Lesser Peace before 2000; the Universal House of Justice later stated that the Writings set no such date[^332]

      - **Authoritarian structure:** Despite universal principles, maintains strict hierarchical control[^333]

      - **Syncretistic inconsistencies:** Combines incompatible theological concepts from different traditions[^322]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>


  **Respectful Assessment:** The Bahá'í Faith promotes many admirable social goals and reflects genuine spiritual seeking. However, its fundamental premise undermines its own claims to truth:


  <div style="margin: 10px 0;">
    **1. Logical Contradictions:** Treating the major religions as stages of one revelation requires setting aside mutually exclusive truth claims (e.g., Trinity vs. Islamic monotheism) as later distortion.
  </div>

  <div style="margin: 10px 0;">
    **2. Progressive Revelation Problems:** If God's truth is unchanging, why would later revelations contradict earlier ones? This suggests human rather than divine origin.
  </div>

  <div style="margin: 10px 0;">
    **3. Historical Inaccuracy:** Bahá'í writings contain historical errors that Bahá'í scholars have had to address, which sits badly with a claim to infallible revelation.
  </div>

  <div style="margin: 10px 0;">
    **4. Unfulfilled Prophecies:** Failed predictions undermine claims to divine revelation.
  </div>

  **Conclusion:** While appreciating Bahá'í social ideals, Christianity provides a historically grounded, logically consistent revelation that doesn't compromise the uniqueness of God's truth for the sake of artificial unity.

</div>`
    },
    {
      id: "confucianism",
      title: "Confucianism",
      tags: ["East Asian"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Confucianism:**

  Confucianism is a comprehensive philosophical and ethical system based on the teachings of Confucius (Kong Qiu) in ancient China. While primarily philosophical, it functions as a complete worldview and belief system that has guided entire civilizations for over 2,000 years[^334][^335]. Confucianism emphasizes moral cultivation, social harmony, filial piety, respect for elders and authority, education, and proper relationships (ruler-subject, parent-child, husband-wife, elder-younger, friend-friend). The system focuses on virtue ethics, ritual propriety (li), humaneness (ren), and the cultivation of the "gentleman" (junzi) ideal. Adherent counts are not meaningful in the way they are for other traditions, because Confucian ethics shape the cultures of China, Korea, Japan and Vietnam while few people identify Confucianism as their sole religion[^336][^337][^338].


  **🌿 Branches:** Neo-Confucianism, from the eleventh century, answered Buddhism and Daoism with a Confucian metaphysics. It divided into the school of Zhu Xi, which became the basis of the Chinese civil service examinations, and the school of Wang Yangming, which stressed the unity of knowing and acting[^339][^340][^341]. New Confucianism is a twentieth-century revival that engages with Western philosophy[^342][^341]

  **📅 Date Founded:** 6th-5th century BC in China by Confucius (Kong Qiu)
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>



    - **Social harmony:** Promotes stable, harmonious relationships in society[^343]

      - **Educational emphasis:** Strong value placed on learning and self-improvement[^335]

      - **Family values:** Emphasizes respect for parents and family obligations[^344][^345]

      - **Moral cultivation:** Focus on developing personal virtue and character[^346]

      - **Social responsibility:** Encourages leaders to serve the common good[^345]

      - **Cultural preservation:** Maintained Chinese cultural traditions for millennia[^347][^335]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>



    - **Hierarchical rigidity:** Reinforces social stratification and limits social mobility[^348]

      - **Gender inequality:** Traditional interpretations subordinate women to male authority[^349][^343]

      - **Lack of transcendent foundation:** Provides no ultimate basis for moral claims beyond social convention[^350]

      - **Historical adaptability:** Has been used to justify various political systems, from authoritarianism to democracy[^351]

      - **Limited spiritual dimension:** Focuses on earthly relationships while neglecting eternal spiritual needs[^352][^335]

      - **Ancestor veneration problems:** Worship of deceased ancestors borders on idolatry[^353]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>


  **Respectful Assessment:** Confucianism offers valuable insights into social relationships and moral cultivation. However, as a complete worldview, it lacks essential elements found in Christianity:


  <div style="margin: 10px 0;">
    **1. No Transcendent Foundation:** Without a divine basis, Confucian ethics become mere social convention, lacking ultimate authority or meaning.
  </div>

  <div style="margin: 10px 0;">
    **2. Limited Scope:** Confucianism addresses earthly relationships but provides no solution for spiritual needs, eternal destiny, or relationship with God.
  </div>

  <div style="margin: 10px 0;">
    **3. Social Inequality:** While promoting harmony, traditional Confucianism has been used to justify rigid hierarchies that contradict Christian teachings about human equality.
  </div>

  <div style="margin: 10px 0;">
    **4. Self-Salvation:** Confucian moral cultivation relies entirely on human effort, offering no divine grace or forgiveness for moral failure.
  </div>

  **Conclusion:** While Confucian ethics can complement Christian living in areas like family relationships and education, Christianity provides the transcendent foundation and spiritual salvation that Confucianism lacks.

  <div style="margin: 15px 0; padding-top: 10px; border-top: 1px solid #bbdefb;">
**Deep Historical & Theological Context:**
  Confucianism provides a profound ethical system emphasizing social harmony, respect for authority, and moral cultivation. These values closely resonate with biblical teachings on honoring parents, submitting to governing authorities, and living virtuously. However, Confucianism functions primarily as a horizontal ethical framework, largely silent on the vertical relationship between humanity and a transcendent Creator. It relies entirely on human effort for moral perfection, a standard that the biblical narrative shows is impossible to achieve due to human depravity (Romans 3:23). Christianity offers what Confucianism cannot: a divine Savior who perfectly fulfilled the moral law on our behalf. True moral transformation in Christianity is not achieved through rigorous self-cultivation alone, but through the indwelling power of the Holy Spirit, which regenerates the human heart and enables a love that goes beyond societal duty.
  </div>

</div>`
    },
    {
      id: "taoism",
      title: "Taoism/Daoism",
      tags: ["East Asian"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Taoism/Daoism:**

  Taoism is a Chinese philosophical and religious tradition emphasizing living in harmony with the Tao (道), often translated as "the Way." Traditionally attributed to Laozi (dated to the 6th century BC, though his historicity is uncertain), and organised as a religion from the 2nd century AD with the Celestial Masters movement, Taoism teaches that the Tao is the ultimate reality underlying all existence. Key concepts include wu wei (non-action or effortless action), yin and yang (complementary opposites), and ziran (naturalness). Taoism emphasizes simplicity, spontaneity, and balance with nature, seeking to align human behavior with the natural order of the universe[^354].


  **🌿 Branches:** Religious Daoism began with the Way of the Celestial Masters, founded by Zhang Daoling in the second century AD[^355][^356][^354]. Its heir, the Zhengyi school, has married priests who perform rituals for local communities; the Quanzhen school, founded in the twelfth century, is monastic, celibate and focused on inner alchemy and meditation[^357][^358][^359][^354]

  **📅 Date Founded:** 6th century BC in China, traditionally attributed to Laozi
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>



    - **Environmental harmony:** Emphasizes living in balance with nature[^360]

      - **Humility and simplicity:** Values modesty and simple living[^361][^362]

      - **Peaceful approach:** The Tao Te Ching warns against force and war[^363][^364]

      - **Stress reduction:** Wu wei concept can reduce anxiety and striving[^365][^354]

      - **Holistic thinking:** Recognizes interconnectedness of all things[^366]

      - **Personal reflection:** Encourages introspection and self-awareness[^367][^361]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>



    - **Moral grounding:** The *Tao Te Ching* commends compassion, frugality and humility (its "three treasures"), but it also describes Heaven and Earth as not humane and treats conventional moral categories as signs that the Way has been lost. Christians object that an impersonal Way cannot ground moral obligation[^368]

      - **The nature of the Tao:** The Tao is described as both transcendent and immanent, and while philosophical Daoism treats it as impersonal, religious Daoism deified Laozi and developed a large pantheon, so the tradition holds two quite different pictures of ultimate reality[^369]

      - **Historical problems:** Laozi may be a legendary figure; the Tao Te Ching shows multiple authorship[^370][^371]

      - **Practical ineffectiveness:** Wu wei philosophy can lead to passivity in face of injustice[^372]

      - **Naturalistic fallacy:** Assumes what is natural is automatically good[^373]

      - **Lack of personal God:** The Tao is impersonal, offering no relationship or communication[^374]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>


  **Respectful Assessment:** Taoism offers valuable insights about balance and harmony that can complement Christian living. However, as a complete worldview, it lacks essential elements for human flourishing:


  <div style="margin: 10px 0;">
    **1. Moral Foundation:** Taoism offers real ethical guidance, but without a personal lawgiver it struggles to explain why its virtues are binding rather than merely wise.
  </div>

  <div style="margin: 10px 0;">
    **2. Impersonal Ultimate:** The Tao cannot love, forgive, or have personal relationship, which are core human needs that only a personal God can meet.
  </div>

  <div style="margin: 10px 0;">
    **3. Historical Weakness:** Unlike Christianity, Taoism lacks historical foundation and may be based on legendary rather than historical figures.
  </div>

  <div style="margin: 10px 0;">
    **4. Passivity Problem:** Wu wei can lead to inaction when justice and mercy require active intervention.
  </div>

  **Conclusion:** While appreciating Taoist wisdom about simplicity and balance, Christianity provides the personal God, moral framework, and call to action that human beings ultimately need.

  <div style="margin: 15px 0; padding-top: 10px; border-top: 1px solid #bbdefb;">
**Deep Historical & Theological Context:**
  Daoism (Taoism) emphasizes harmony with the Dao, an impersonal, transcendent principle that governs the universe. While its concepts of balance (yin and yang) and naturalness offer practical wisdom for reducing anxiety, the Dao remains an impersonal force incapable of personal relationship, love, or forgiveness. In contrast, Christianity reveals that the ultimate reality behind the universe is not an impersonal principle, but a deeply personal, loving Creator. Interestingly, when the Gospel of John was translated into Chinese, the word used for the Greek "Logos" (the Word) was "Dao": "In the beginning was the Dao, and the Dao was with God, and the Dao was God" (John 1:1). Christianity fulfills the philosophical longing of Daoism by revealing that the ultimate order of the universe became flesh in Jesus Christ, allowing humans to enter into a loving, personal relationship with the source of all existence rather than merely attempting to align with an impersonal flow.
  </div>

</div>`
    },
    {
      id: "chinese-folk",
      title: "Chinese Folk Religion",
      tags: ["East Asian"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Chinese Folk Religion:**

  Chinese folk religion is the everyday religion of most Chinese people, practised in homes, local temples and festivals rather than through a founder, creed or scripture. It combines the veneration of ancestors, the worship of local and regional gods, and practices drawn from Taoism, Buddhism and Confucianism, so that many people take part in all three without belonging to any[^375][^376].

  Families keep ancestral tablets, make offerings of food and incense, and sweep the graves at the Qingming festival; ancestors are believed to watch over their descendants and to depend on their offerings[^377][^378]. Popular gods include the sea goddess Mazu, widely worshipped along the coast and in Taiwan, the deified general Guan Yu, and the earth gods and city gods of each locality[^379][^380][^375][^376]. Pew Research counted about 405 million adherents of folk or traditional religions in 2010, most of them in China[^336].

  **📅 Date Founded:** No founder. Ancestor veneration and divination are recorded in the oracle bones of the Shang dynasty from about 1200 BC[^376][^377]
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>

    - **Honour for parents and forebears:** The whole system expresses filial piety and the bond between the living and the dead, a value close to the fifth commandment[^377][^378]

    - **Community life:** Temple festivals hold villages and neighbourhoods together, and local temples often provide charity[^375][^376]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>

    - **Fear and obligation:** Ancestors who are neglected, and the dead with no descendants to feed them, are believed to become hungry ghosts, propitiated at the Ghost Festival[^377][^375][^378]

    - **Gods as patrons:** Worship is often transactional, seeking wealth, health and success from gods who were once human beings[^375][^380][^376]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>

  **Respectful Assessment:**   The question of ancestors has divided Christian missions to China for four centuries. The Jesuit Matteo Ricci treated the rites as civil honour that Christians could keep; Rome condemned them in the Chinese Rites controversy in 1704 and 1715, and lifted the ban in 1939, judging the rites to be civil rather than religious. Christians generally distinguish honouring parents (Exodus 20:12), which Scripture commands, from praying or offering to the dead, which it does not. Chinese Christians commonly honour ancestors with memorial services and grave-sweeping without offerings.
</div>

**See also:** [Confucianism](/categories/religions#section-confucianism), [Taoism](/categories/religions#section-taoism).
`,
    },
    {
      id: "shintoism",
      title: "Shintoism",
      tags: ["East Asian"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Shintoism:**

  Shintoism is the indigenous spiritual tradition of Japan, focusing on the veneration of kami (spirits or deities) present in natural phenomena, ancestors, and sacred places. Shinto has no founder, central scripture, or systematic doctrine, but emphasizes purity, gratitude, and harmony with nature and community. Practices include shrine visits, purification rituals, festivals (matsuri), and offerings to kami. Shinto has coexisted with Buddhism and Confucianism throughout Japanese history, forming a syncretic religious landscape. Modern Shinto includes both shrine-based practices and state-related traditions. Japanese government figures, based on shrine registrations, count around 87 million Shinto adherents, but only a small percentage of Japanese identify Shinto as their religion in surveys, since shrine practice is widely treated as custom rather than confession[^381].


  **🌿 Branches:** Shrine Shinto, the worship carried on at Japan's shrines, is by far the largest form. Sect Shinto refers to thirteen independent religious groups recognised in the nineteenth century, some founded by individual teachers. Folk Shinto covers household and local practice. State Shinto, the official cult centred on the emperor, was abolished in 1945 after the Second World War[^382][^383][^384][^385][^386]

  **📅 Date Founded:** Ancient, prehistoric origins; systematized during 8th century AD in Japan
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>



    - **Environmental reverence:** Deep respect for nature and natural phenomena[^387]

      - **Cultural preservation:** Maintains traditional Japanese values and customs[^388][^389]

      - **Community emphasis:** Strengthens local and family bonds[^390][^386]

      - **Aesthetic appreciation:** Values beauty and purity in daily life[^391][^386]

      - **Gratitude practice:** Encourages thankfulness for natural gifts[^392][^387]

      - **Flexibility:** Adapts to other religious traditions without conflict[^393][^386]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>



    - **Animistic polytheism:** Worship of multiple kami contradicts monotheistic truth[^386][^394]

      - **Nationalist exploitation:** Historically used to justify militarism and emperor worship[^395][^384][^396]

      - **Ancestor veneration:** Worship of deceased humans approaches idolatry[^397]

      - **Lack of moral absolutes:** Emphasis on ritual purity over moral righteousness[^389]

      - **Ritual emptiness:** External purification without addressing internal spiritual condition[^398][^399]

      - **Theological confusion:** Syncretic mixing with Buddhism creates contradictory beliefs[^400]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>


  **Respectful Assessment:** Shintoism demonstrates admirable reverence for nature and community values. However, several fundamental issues prevent it from providing complete spiritual truth:


  <div style="margin: 10px 0;">
    **1. Polytheistic Confusion:** Worship of multiple kami contradicts the biblical revelation of one true God.
  </div>

  <div style="margin: 10px 0;">
    **2. Historical Corruption:** Shinto's use in supporting militarism and emperor worship demonstrates the danger of nationalism mixed with religion.
  </div>

  <div style="margin: 10px 0;">
    **3. Ritual Without Relationship:** External purification rituals cannot address the internal spiritual transformation that human beings need.
  </div>

  <div style="margin: 10px 0;">
    **4. Ancestor Worship Problems:** Venerating deceased humans violates the principle that worship belongs to God alone.
  </div>

  **Conclusion:** While respecting Shinto's cultural significance and environmental consciousness, Christianity offers the personal relationship with the one true God and inner transformation that ritual purification cannot provide.

  <div style="margin: 15px 0; padding-top: 10px; border-top: 1px solid #bbdefb;">
**Deep Historical & Theological Context:**
  Shintoism is deeply interwoven with Japanese culture, offering a beautiful appreciation for nature and ancestral heritage. However, its animistic worldview, which perceives spiritual forces (kami) in natural objects and phenomena, blurs the distinction between the Creator and the creation. The Apostle Paul addresses this human tendency in Romans 1:25, noting how humanity often worships created things rather than the Creator. Christianity affirms that while nature declares the glory of God (Psalm 19:1), it is not God. Furthermore, Shintoism lacks a comprehensive moral framework for addressing systemic evil or human sin, relying instead on concepts of ritual purity and defilement. The Christian Gospel addresses the deeper issue of moral corruption, offering true, internal purification through the blood of Christ rather than merely external, ceremonial cleansing.
  </div>

</div>`
    },
    {
      id: "rastafarianism",
      title: "Rastafarianism",
      tags: ["Christian offshoots"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Rastafarianism:**

  Rastafarianism is a religious and social movement that emerged in Jamaica in the 1930s[^401][^402]. Most Rastafarians regard Haile Selassie I, the former Emperor of Ethiopia, as God incarnate and the returned Messiah. The movement emphasizes Afrocentrism, resistance to oppression, and the eventual return to Africa (Zion). Key practices include the use of cannabis (ganja) as a sacrament, dietary laws (Ital food), and the wearing of dreadlocks. Rastafari was popularized globally through reggae music, particularly by Bob Marley. As of 2024, Rastafarianism has approximately 1 million adherents worldwide, primarily in Jamaica and Caribbean diaspora communities[^403][^404][^405].


  **📅 Date Founded:** 1930s in Jamaica, inspired by Marcus Garvey's teachings and Haile Selassie's coronation
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>



    - **Social justice emphasis:** Strong commitment to fighting oppression and inequality[^406]

      - **Cultural pride:** Celebrates African heritage and black identity[^407][^401]

      - **Environmental consciousness:** Ital living favours natural, unprocessed food[^408][^405]

      - **Peaceful resistance:** Generally advocates non-violent protest against injustice[^409]

      - **Community solidarity:** Strong bonds among believers and mutual support[^410]

      - **Biblical engagement:** Takes Scripture seriously, particularly Old Testament prophecy[^402]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>



    - **False messianic claims:** Haile Selassie remained a member of the Ethiopian Orthodox Church and is reported to have denied his own divinity in a 1967 interview, though he never rebuked Rastafari for their belief[^411][^403]

      - **Historical contradictions:** Selassie's life contradicts Rastafarian theological claims about him[^412]

      - **Biblical misinterpretation:** Forced interpretation of prophecies to support Ethiopian focus[^413]

      - **Drug use religious justification:** Christians object that religious cannabis use conflicts with the biblical call to sobriety (1 Peter 5:8)[^414][^402]

      - **Racial separation theology:** Some interpretations promote racial superiority concepts[^415][^403]

      - **Inconsistent doctrines:** Different Rastafarian groups hold contradictory beliefs about core teachings[^416][^406]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>


  **Respectful Assessment:** Rastafarianism demonstrates genuine spiritual seeking and admirable commitment to social justice. However, several fundamental theological issues prevent it from providing authentic Christian truth:


  <div style="margin: 10px 0;">
    **1. False Messiah:** Jesus Christ is the unique Son of God and Messiah. Claiming another person as the returned Christ contradicts Jesus' own warnings about false messiahs ([Matthew 24:23-24](https://www.biblegateway.com/passage/?search=Matthew%2024%3A23-24&version=NIV)).
  </div>

  <div style="margin: 10px 0;">
    **2. Historical Inaccuracy:** Haile Selassie's actual life, beliefs, and death contradict Rastafarian theological claims about his divine nature.
  </div>

  <div style="margin: 10px 0;">
    **3. Biblical Misinterpretation:** While engaging seriously with Scripture, Rastafarian interpretation forces meanings that contradict proper hermeneutical principles.
  </div>

  <div style="margin: 10px 0;">
    **4. Substance Use Issues:** The religious use of cannabis conflicts with biblical calls to sobriety and clear thinking ([1 Peter 5:8](https://www.biblegateway.com/passage/?search=1%20Peter%205%3A8&version=NIV), [1 Thessalonians 5:6-8](https://www.biblegateway.com/passage/?search=1%20Thessalonians%205%3A6-8&version=NIV)).
  </div>

  **Conclusion:** While respecting Rastafarian commitment to justice and biblical engagement, orthodox Christianity provides the true Messiah and authentic interpretation of Scripture without the theological errors found in Rastafarian doctrine.

</div>`
    },
    {
      id: "zoroastrianism",
      title: "Zoroastrianism",
      tags: ["Persian"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Zoroastrianism:**

  Zoroastrianism is one of the world's oldest monotheistic religions, founded by the prophet Zoroaster (Zarathustra) in ancient Persia[^417][^418]. The religion centers on the worship of Ahura Mazda ("Wise Lord") and emphasizes the cosmic struggle between good (Ahura Mazda) and evil (Angra Mainyu/Ahriman). Zoroastrians believe in free will, the final judgment, resurrection of the dead, and the eventual triumph of good over evil. Key practices include maintaining ritual purity, the sacred fire, and the three pillars: good thoughts, good words, and good deeds. Estimates of adherents range from about 110,000 to 200,000 worldwide, primarily in India (Parsis) and Iran, with a declining population[^419].


  **🌿 Branches:** The Parsis of India descend from Zoroastrians who left Iran after the Muslim conquest, and the Iranis came to India far later, mostly in the nineteenth and twentieth centuries. Zoroastrians in Iran form a third community[^419][^420][^421][^417]. The religion has no major doctrinal schism, but it is divided over its calendar: the Shahanshahi, Kadmi and Fasli reckonings place the same festivals on different days[^422][^420]

  **📅 Date Founded:** Traditionally c. 628-551 BC; most modern scholars place Zoroaster much earlier, roughly 1500-1000 BC, because the language of his Gathas is close to that of the Rigveda
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>



    - **Monotheistic foundation:** Early recognition of one supreme deity[^423]

      - **Moral emphasis:** Teaches good thoughts, good words and good deeds[^424][^425]

      - **Free will doctrine:** Emphasizes human choice and responsibility[^426]

      - **Eschatological concepts:** Developed ideas about judgment and resurrection[^427][^428]

      - **Environmental reverence:** Treats fire, water, earth and air as sacred[^429][^419][^425]

      - **Spiritual equality:** Teaches the spiritual equality and shared religious duty of men and women[^430]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>



    - **Dualistic confusion:** Sets Angra Mainyu against Ahura Mazda as a rival power, which Christians object compromises monotheism[^431][^425]

      - **Limited historical evidence:** Many claims about Zoroaster are legendary rather than historical[^418][^432]

      - **Contradictory manuscripts:** Different versions of Zoroastrian texts contain conflicting teachings[^433]

      - **Ritual complexity:** Elaborate purity laws create barriers to authentic spirituality[^434]

      - **Cultural isolation:** Restrictive practices have led to demographic decline[^420]

      - **Works-based salvation:** Weighs a person's good and evil deeds at the judgment, in contrast to salvation by grace[^435][^425]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>


  **Respectful Assessment:** Zoroastrianism contains remarkable insights that prefigure Christian truth, including monotheism, final judgment, and resurrection. However, several issues prevent it from providing the complete revelation found in Christianity:


  <div style="margin: 10px 0;">
    **1. Cosmic Dualism vs. Monotheism:** While Ahura Mazda remains supreme, Zoroastrian cosmic dualism grants significant independent power to Angra Mainyu (destructive spirit), creating tension with pure monotheism that attributes all ultimate authority to one God[^436][^437].
  </div>

  <div style="margin: 10px 0;">
    **2. Works-Based Uncertainty:** Salvation based on the balance of good vs. evil deeds provides no assurance, unlike the certainty offered through Christ's atoning work.
  </div>

  <div style="margin: 10px 0;">
    **3. Limited Historical Foundation:** Unlike Christianity, many core Zoroastrian claims lack historical verification.
  </div>

  <div style="margin: 10px 0;">
    **4. Incomplete Revelation:** While Zoroastrianism points toward truth, it lacks the personal revelation of God through Jesus Christ.
  </div>

  **Conclusion:** While respecting Zoroastrianism's early monotheistic insights, Christianity provides the complete revelation of God's nature and assured salvation that Zoroastrian dualism and works-righteousness cannot offer.

</div>

**See also:** [Persia and Zoroastrianism (Pagan Origins)](/categories/pagan-origins#section-persia-and-zoroastrianism).
`
    },
    {
      id: "manichaeism",
      title: "Manichaeism",
      tags: ["Persian"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Manichaeism:**

  Manichaeism was founded in Persia by the prophet Mani, who claimed to be the final apostle in a line that included Zoroaster, the Buddha and Jesus, and who wrote his scriptures himself so that his teaching would not be corrupted[^438][^439][^440]. It taught a radical dualism: two eternal principles, Light and Darkness, became mixed, and particles of light are trapped in matter and in human bodies. Salvation is knowledge of this condition and the gradual release of the light[^439][^441].

  The faithful were divided into the Elect, who kept strict vegetarianism and celibacy, and the Hearers, who supported them[^438][^441]. The religion spread from the Roman Empire to China, was persecuted by Persians, Romans and Christians alike, and was the state religion of the Uyghur kingdom in the eighth and ninth centuries[^438][^439].

  **📅 Date Founded:** Mani began preaching around AD 240 and was executed by the Persian king Bahram I around 274 to 277. The religion lasted in southern China until around the sixteenth century[^440][^438][^439]
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>

    - **Moral seriousness:** The Elect lived lives of strict self-discipline, non-violence and poverty[^441][^438]

    - **Taking evil seriously:** Its dualism was an attempt to explain suffering without making a good God its author[^439][^441]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>

    - **Matter as evil:** The body, procreation and the material world are treated as the prison of light, the opposite of Genesis, where God calls creation "very good" (Genesis 1:31)[^439][^441]

    - **Evil as eternal:** Darkness is a power co-eternal with good, so that good cannot finally be sovereign[^438][^439]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>

  **Respectful Assessment:**   Augustine was a Manichaean Hearer for nine years before his conversion, and his later answer to the problem of evil was shaped against it: evil is not a substance or a rival power but the corruption of something good. Christianity's answer to the same problem lies in a good creation spoiled by sin and redeemed bodily, not in escape from matter. "Manichaean" is still used of any view that divides the world into absolute good and absolute evil.
</div>

**See also:** [The Problem of Evil](/categories/problem-of-evil), [Heresies and Fallacies](/categories/heresies-and-fallacies#section-other-heresies).
`,
    },
    {
      id: "gnosticism",
      title: "Gnosticism",
      tags: ["Ancient"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Gnosticism:**

  Gnosticism is the name scholars give to a range of religious movements of the second and third centuries AD, many of them Christian in form, which taught that salvation comes through secret knowledge (*gnosis*) of one's divine origin[^442][^443][^444]. Typical Gnostic systems describe a remote, perfect God from whom divine beings emanate; the material world is the flawed work of a lesser creator, the *demiurge*, often identified with the God of the Old Testament, and sparks of the divine are trapped in human bodies[^445][^443].

  Christ, in these systems, is a revealer who brings the saving knowledge, and in many of them he only appeared to have a body and did not truly suffer. Teachers included Valentinus and Basilides, and the movements are known from Christian opponents such as Irenaeus and from the Nag Hammadi library, a collection of Coptic texts found in Egypt in 1945 that includes the Gospel of Thomas and the Gospel of Philip[^446][^444][^442].

  **📅 Date Founded:** No single founder. Gnostic teachers flourished from the early second century AD; most groups had disappeared by the fifth century, and the Mandaeans are the only surviving Gnostic religion[^442][^443]
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>

    - **A longing for God:** Gnostic writings express a deep sense of exile from God and a desire to return to him[^443][^444]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>

    - **A denied creation:** The world and the body are the work of an inferior or hostile god, contrary to Genesis and to the Christian hope of bodily resurrection[^445][^443]

    - **A Christ without a body:** Many Gnostics denied that Jesus truly took flesh or died, which 1 John 4:2-3 already rejects[^442][^444]

    - **Salvation for the few:** Saving knowledge was given to an elite of the spiritually awakened, and some systems divided humanity into classes by nature[^443][^442]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>

  **Respectful Assessment:**   The Gnostic gospels are much later than the four Gospels, mostly from the second century or after, and the church rejected them because they did not come from the apostles and contradicted their teaching. Irenaeus answered the Gnostics around 180 by appealing to the public teaching handed down in the churches from the apostles rather than to secret tradition. The claim that Gnostic Christianity was an equally old rival suppressed by later bishops is examined in the canon topic.
</div>

**See also:** [Gnostic Gospels (Canon)](/categories/canon#section-gnostic-gospels), [Other Heresies](/categories/heresies-and-fallacies#section-other-heresies).
`,
    },
    {
      id: "african-traditional",
      title: "African Traditional Religions",
      tags: ["Indigenous"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About African Traditional Religions:**

  Africa's traditional religions are many and varied, but most share common features: a supreme creator God, often seen as distant from daily affairs; lesser divinities or spirits who act on his behalf; reverence for the ancestors, who remain part of the family; and the use of divination, sacrifice and ritual to keep harmony between the living, the dead and the spirits[^447][^448][^449].

  Among the Yoruba of Nigeria and Benin the supreme God is Olodumare, and the *orishas*, such as Ogun, Shango, Yemoja and Eshu, mediate between God and people[^450][^451][^452][^453]. The Ifá system of divination, in which priests called *babalawo* consult a large body of verses, was recognised by UNESCO in 2008 as part of the heritage of humanity[^454][^451]. Taken to the Americas by enslaved Africans, Yoruba religion became Santería in Cuba and Candomblé in Brazil, where the orishas were identified with Catholic saints[^455][^456][^457][^458][^459][^460].

  **📅 Date Founded:** No founders; these religions are prehistoric in origin. They remain widespread, and Pew Research notes that in sub-Saharan Africa many committed Christians and Muslims also incorporate elements of traditional religion into their lives[^336][^447]
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>

    - **Belief in a creator:** A supreme God who made the world is found in religion after religion across the continent[^448][^447]

    - **Community and family:** Morality is rooted in the community, the living and the dead together, and in respect for elders[^448][^449]

    - **A religious view of all of life:** No sharp line separates the sacred from the everyday[^447][^448]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>

    - **A distant God and powerful spirits:** Daily religious life is directed to spirits and ancestors who must be appeased, rather than to the creator[^447][^451]

    - **Fear of witchcraft:** Misfortune is often blamed on witchcraft, and accusations of witchcraft still lead to violence against children and the elderly in parts of Africa[^447][^448]

    - **Sacrifice and divination:** Animal sacrifice and the consultation of diviners are central to many traditions[^450][^454][^455]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>

  **Respectful Assessment:**   African theologians such as John Mbiti and Kwame Bediako have argued that traditional belief in a supreme God prepared Africa for the gospel, much as Paul found an altar "to an unknown god" in Athens (Acts 17:23). The question it raises is the same that the Bible addresses: whether the living should seek the dead and the spirits (Deuteronomy 18:10-12; Isaiah 8:19), or whether one mediator, Christ, gives direct access to God (1 Timothy 2:5).
</div>

**See also:** [Vodou](/categories/religions#section-vodou), [White Man's Religion? (Christianity and the World)](/categories/christianity-and-the-world).
`,
    },
    {
      id: "vodou",
      title: "Vodou (Voodoo)",
      tags: ["Indigenous"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Vodou:**

  Vodou is a syncretic religion that developed among enslaved Africans in the French colony of Saint-Domingue (modern-day Haiti), combining West and Central African religious traditions with Catholicism[^461][^462]. Practitioners serve both the lwa (spirits) and the Christian God, believing that spirits mediate between humans and the divine. Vodou emphasizes healing, community support, and connection with ancestors. Rituals include drumming, dancing, possession by spirits, and offerings. The religion has been widely misunderstood due to Hollywood portrayals and colonial prejudices. Reliable adherent figures do not exist, because most practitioners also identify as Catholic; it is practised chiefly in Haiti and the Haitian diaspora, and is related to, but distinct from, the Vodun of Benin and Togo[^463].


  **📅 Date Founded:** 17th-18th centuries in colonial Saint-Domingue (modern-day Haiti), emerging from African diaspora traditions
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>



    - **Cultural preservation:** Maintained African heritage under oppressive conditions[^464][^465]

      - **Community healing:** Provides psychological and social support systems[^466]

      - **Resistance to oppression:** Helped sustain identity during slavery and colonialism[^467]

      - **Holistic approach:** Addresses physical, mental, and spiritual well-being[^468]

      - **Ancestor reverence:** Values wisdom and connection with predecessors[^469]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>



    - **Syncretistic confusion:** Mixing incompatible Christian and animistic beliefs creates theological contradictions[^470]

      - **Spirit possession dangers:** Spiritual possession contradicts biblical warnings about demonic activity[^471]

      - **Magical thinking:** Emphasis on spiritual manipulation rather than submission to God's will[^472]

      - **Polytheistic practices:** Service to multiple lwa conflicts with monotheistic worship[^473][^474]

      - **Fear-based elements:** Some practices involve curses and malevolent magic[^475]

      - **Limited theological development:** Lacks systematic doctrine or consistent theological framework[^476]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>


  **Respectful Assessment:** Vodou demonstrates remarkable cultural resilience and addresses real human needs for healing and community. However, its syncretistic nature creates fundamental theological problems:


  <div style="margin: 10px 0;">
    **1. Incompatible Worldviews:** Combining Christian monotheism with spirit worship creates irreconcilable contradictions about the nature of divine authority.
  </div>

  <div style="margin: 10px 0;">
    **2. Spiritual Dangers:** Biblical warnings about spiritual deception ([2 Corinthians 11:14](https://www.biblegateway.com/passage/?search=2%20Corinthians%2011%3A14&version=NIV)) suggest caution regarding spirit possession and mediation.
  </div>

  <div style="margin: 10px 0;">
    **3. Magical vs. Relationship:** Focus on spiritual manipulation contrasts with Christianity's emphasis on relationship with a personal God.
  </div>

  <div style="margin: 10px 0;">
    **4. Fear vs. Love:** Elements of fear and spiritual coercion conflict with the perfect love that casts out fear ([1 John 4:18](https://www.biblegateway.com/passage/?search=1%20John%204%3A18&version=NIV)).
  </div>

  **Conclusion:** While understanding Vodou's historical importance and community functions, Christianity offers authentic spiritual power through relationship with Jesus Christ without the theological confusion and spiritual dangers of syncretistic practices.

</div>`
    },
    {
      id: "norse",
      title: "Norse/Germanic Paganism",
      tags: ["Ancient"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Norse/Germanic Paganism:**

  Norse paganism was the indigenous religion of the Germanic peoples, including Scandinavians, before Christianity[^477]. The pantheon included gods like Odin (the All-Father), Thor (god of thunder), Freyja (goddess of love and fertility), and Loki (trickster god). Norse religion emphasized honor, courage in battle, and fate (wyrd). The cosmology featured nine worlds connected by Yggdrasil (world tree), with Ragnarök as the prophesied end of the world. Practices included animal sacrifice, seasonal festivals, and veneration of ancestors.


  **📅 Date Founded:** Developed from earlier Germanic traditions (c. 1st century BC - 11th century AD)
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>



    - **Cultural preservation:** Rich mythology preserved through Eddas and sagas[^478][^479]

      - **Honor emphasis:** Valued personal integrity and courage[^480][^481]

      - **Gender inclusion:** Featured powerful female deities and leaders[^482]

      - **Natural connection:** Deep reverence for nature and seasonal cycles[^483]

      - **Literary legacy:** Influenced modern fantasy literature and culture[^484]

      - **Democratic elements:** Thing assemblies showed early democratic practices[^485]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>



    - **Historical extinction:** Gradually displaced by Christianity through various factors[^486]

      - **Violence glorification:** Emphasized warfare and dying in battle as highest honor[^487][^488]

      - **Fatalistic worldview:** Belief in predetermined fate (wyrd) undermined human agency[^489]

      - **Inconsistent mythology:** Multiple conflicting versions of the same stories[^490][^39]

      - **Limited written sources:** Most knowledge comes from Christian-era compilations[^491][^492][^477]

      - **Cosmic pessimism:** Even the gods die at Ragnarök, and though a renewed world follows, few survive to see it[^493][^494]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>


  **Respectful Assessment:** Norse paganism demonstrated remarkable cultural creativity and contained admirable values like honor and courage. However, its fundamental limitations point to the need for divine revelation:


  <div style="margin: 10px 0;">
    **1. Historical Transformation:** The gradual conversion of Norse peoples to Christianity occurred through various factors including political influence, missionary efforts, and cultural adaptation, suggesting the appeal of Christianity's message within their historical context.
  </div>

  <div style="margin: 10px 0;">
    **2. Violence vs. Peace:** While courage is admirable, the glorification of violence contrasts with Christ's teachings about peace and forgiveness.
  </div>

  <div style="margin: 10px 0;">
    **3. Fatalism vs. Hope:** Norse fatalism offers no ultimate hope, while Christianity provides resurrection and eternal life.
  </div>

  <div style="margin: 10px 0;">
    **4. Mythological vs. Historical:** Unlike Christianity, Norse religion lacked historical verification for its supernatural claims.
  </div>

  **Conclusion:** While appreciating Norse cultural contributions and moral insights, Christianity provides historical foundation, ultimate hope, and divine grace that Germanic paganism could not offer.

</div>`
    },
    {
      id: "celtic",
      title: "Celtic Paganism",
      tags: ["Ancient"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Celtic Paganism:**

  Celtic paganism was the indigenous religion of Celtic peoples across Ireland, Britain, Gaul, and other regions of Europe[^495][^496]. The religion featured a complex pantheon including gods like Lugh (associated with skill and kingship, and once widely but doubtfully interpreted as a solar deity), Brigid (goddess of fire and poetry), and the Morrigan (war goddess). Druids served as priests, judges, and teachers, conducting rituals in sacred groves. Celtic religion emphasized the supernatural, with thin boundaries between the physical and spiritual worlds. Seasonal festivals like Samhain and Beltane marked important transitions.


  **📅 Date Founded:** Developed from earlier Indo-European traditions (c. 1200 BC - 500 AD)
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>



    - **Environmental reverence:** Deep respect for nature and sacred landscapes[^497]

      - **Educational emphasis:** Druids maintained learning and oral traditions[^498]

      - **Spiritual awareness:** Belief in an Otherworld beyond the visible one[^499][^495]

      - **Cultural richness:** Complex mythology and artistic traditions[^500]

      - **Gender balance:** Worshipped both gods and goddesses[^501][^495]

      - **Seasonal wisdom:** Celebrated natural cycles and transitions[^502][^503]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>



    - **Human sacrifice:** Greek and Roman writers report it, and some archaeological finds, such as certain bog bodies, are consistent with ritual killing, though the extent of the practice is debated and the classical reports were partly hostile propaganda[^504][^505]

      - **Limited historical records:** Most knowledge comes from Roman or later Christian sources[^506][^495]

      - **Historical abandonment:** Celtic peoples converted to Christianity, abandoning their ancestral faith[^507]

      - **Inconsistent practices:** Varied significantly between different Celtic groups[^508]

      - **Mythological contradictions:** Deities and stories vary by region and survive largely through later sources[^509][^495]

      - **Social stratification:** Rigid class system with druids as elite priestly class[^510][^511]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>


  **Respectful Assessment:** Celtic paganism demonstrated sophisticated spiritual awareness and environmental wisdom. However, several fundamental issues prevented it from providing complete spiritual truth:


  <div style="margin: 10px 0;">
    **1. Human Sacrifice vs. Divine Sacrifice:** Where Celts practiced human sacrifice, Christianity reveals God's sacrifice of Himself for humanity.
  </div>

  <div style="margin: 10px 0;">
    **2. Multiple Gods vs. One God:** Celtic polytheism lacked the clarity and unity found in biblical monotheism.
  </div>

  <div style="margin: 10px 0;">
    **3. Elite Priesthood vs. Universal Access:** Druidic religion limited spiritual knowledge to elites, while Christianity offers direct access to God for all.
  </div>

  <div style="margin: 10px 0;">
    **4. Historical Replacement:** The conversion of Ireland in particular was largely peaceful and not imposed by conquest, which is significant evidence of the message's appeal.
  </div>

  **Conclusion:** While appreciating Celtic spiritual sensitivity and environmental wisdom, Christianity provides historical foundation, moral clarity, and universal access to divine truth that Celtic paganism could not offer.

</div>`
    },
    {
      id: "slavic",
      title: "Slavic Paganism",
      tags: ["Ancient"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Slavic Paganism:**

  The pre-Christian Slavs of eastern and central Europe worshipped Perun, god of thunder and war, Veles, god of cattle, the underworld and wealth, and Mokosh, a goddess linked with women, spinning and the earth, among others. Worship took place in sacred groves and open-air sanctuaries more than in temples[^512][^513][^514].

  Little was written down by the Slavs themselves, so most of what is known comes from Christian chroniclers and later folklore. The Russian Primary Chronicle records that Prince Vladimir of Kiev set up idols of Perun and other gods in 980, then had them thrown into the Dnieper when he accepted Christianity in 988[^515][^516][^517][^513][^514].

  **📅 Date Founded:** No founder. The religion goes back to the common Indo-European heritage of the Slavs and is attested from the sixth century AD; it gave way to Christianity between the ninth and the twelfth centuries, and folk customs survived long after[^512][^513]
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>

    - **Reverence for nature:** Sacred groves, springs and the earth itself were honoured[^513][^512]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>

    - **Fragmentary sources:** The gods are known mostly from hostile or later accounts, and modern reconstructions often go beyond the evidence[^513][^512]

    - **Sacrifice:** Chroniclers record animal and occasionally human sacrifice[^512][^515][^513]

    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>

  **Respectful Assessment:**   The conversion of the Slavs, beginning with the mission of Cyril and Methodius in the ninth century, who created an alphabet to give the Slavs the Bible and liturgy in their own language, made Eastern Orthodoxy the faith of most Slavic peoples. As with Norse and Celtic religion, some old festivals and customs were absorbed into Christian practice.
</div>

**See also:** [Norse/Germanic Paganism](/categories/religions#section-norse), [Eastern Orthodox (Branches)](/categories/branches#section-easternOrthodox).
`,
    },
    {
      id: "maya",
      title: "Maya Religion",
      tags: ["Ancient"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Maya Religion:**

  The Maya of southern Mexico, Guatemala and Belize worshipped many gods, among them Itzamna, the first priest and inventor of writing, the rain god Chaak, who demanded blood offerings in return for rain, the lightning god K'awiil, protector of the royal line, and the maize god, whose death and return mirrored the planting and growth of the crop[^518][^519][^520]. Kings stood between their people and the gods, and offered their own blood in rites of bloodletting[^518][^521].

  The fullest surviving account of Maya belief is the Popol Vuh of the K'iche' Maya of Guatemala. It was written down in the Latin alphabet in the sixteenth century and survives in a copy made by the Dominican friar Francisco Ximénez around 1701[^522][^523]. In it the gods make human beings first from mud and then from wood, and destroy both because they cannot speak to or remember their makers; the people who succeed are made from maize dough[^524][^519][^525]. The dead went down to Xibalba, the "place of fear", ruled by lords of death with names such as One Death and Seven Death, whom the Hero Twins defeat by trickery[^526][^527].

  **📅 Date Founded:** No founder. Monumental ceremonial building began at Aguada Fénix between 1000 and 800 BC[^528][^529], and the murals at San Bartolo, painted around 100 BC, already show the maize god and the ordering of the world, beside Maya writing from about 300 BC[^530][^531]. The great cities flourished between about AD 250 and 900, and the last independent Maya kingdom, at Nojpetén, fell to Spain in 1697. Traditional practice survives among Maya communities today, blended with Catholicism, and daykeepers still keep the 260-day ritual calendar[^518][^532][^520]
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>

    - **Creation by the word:** In the Popol Vuh the creators bring the earth out of the primordial sea by speaking it into being, and they make people so that they will speak to them, remember them and give thanks[^522][^525][^524]

    - **Observation of the heavens:** The Dresden Codex holds tables predicting the cycles of Venus and the dates of eclipses, and the Maya calendar tracked time across thousands of years[^533][^532]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>

    - **Human sacrifice:** Captives were killed at temples and thrown into the Sacred Cenote at Chichen Itza, and the gods were held to be fed by human blood[^521][^519]

    - **Gods who need to be fed:** The gods almost destroyed even the maize people for being too wise, and they relied on offerings and blood from their worshippers[^519][^522]

    - **No hope beyond Xibalba:** Most of the dead went to the underworld whatever their conduct; reward or punishment for how a person had lived formed no part of the belief, and only those who died violent deaths escaped it[^526][^527]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>

  **Respectful Assessment:** The Popol Vuh comes close to Genesis at several points: creation by the spoken word, a humanity made to know and honour its maker, and earlier failed attempts swept away by a flood. Its gods differ in depending on what humans give them, where Paul says that God "is not served by human hands, as if he needed anything" (Acts 17:25), and in having no judgment of the dead by conduct.

  The Church's record here is mixed. In 1562 the Franciscan Diego de Landa held an inquisition at Maní in which, by his own count, 27 Maya books and about 5,000 images were burned, and only a handful of Maya books survive anywhere[^534][^533]. It was also friars, Landa among them and later Ximénez, who wrote down much of what is known, and Bartolomé de las Casas spent his life defending the native peoples of the Americas against the conquerors[^522][^535]. The wider history is set out in [the Church's own record](/categories/christianity-and-the-world#section-the-churchs-record).
</div>
`,
    },
    {
      id: "aztec",
      title: "Aztec Religion",
      tags: ["Ancient"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Aztec Religion:**

  The Mexica, usually called the Aztecs, founded Tenochtitlan on an island in Lake Texcoco, by tradition in 1325, and built the empire that ruled central Mexico until the Spanish conquest[^536][^537][^538]. Their great temple, the Templo Mayor, carried twin shrines to Huitzilopochtli, god of the sun and of war, and Tlaloc, god of rain[^539][^540][^541]. Quetzalcoatl, the feathered serpent, and Tezcatlipoca, the smoking mirror, were creator gods and rivals[^542][^543][^544].

  The world was believed to be the fifth in a series of suns, each of the earlier four having ended in catastrophe. In the myth of its making the gods gathered at Teotihuacan, one of them threw himself into a fire to become the sun, and the gods then gave their own blood to set it moving[^545][^544]. Human sacrifice repaid that debt and kept the sun on its course[^546][^547][^548]. The fullest record is the Florentine Codex, compiled by the Franciscan Bernardino de Sahagún with Nahua scholars from 1545 until his death in 1590, in Nahuatl and Spanish with more than 2,000 native illustrations[^549][^550].

  **📅 Date Founded:** No founder. The Mexica arrived in the Valley of Mexico in the thirteenth century and took over gods and rites far older than themselves, some from the much earlier city of Teotihuacan. Tenochtitlan is traditionally dated to 1325, and public worship ended with its fall to Hernán Cortés and his native allies in 1521[^536][^544][^537]
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>

    - **Gods who give themselves:** The world exists, in the myth of the Fifth Sun, because the gods sacrificed themselves to make the sun move[^545][^544]

    - **Moral instruction:** The book of the Florentine Codex on rhetoric and moral philosophy preserves the *huehuetlahtolli*, the "words of the elders", formal speeches in which parents and rulers urged humility, honesty, hard work and self-control[^549][^550]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>

    - **Human sacrifice on a large scale:** Captives, many taken in ritual "flower wars" fought for the purpose, were killed on temple summits. Colonial sources claim 80,400 deaths at the rededication of the Templo Mayor in 1487, a figure the historian Ross Hassig considers an exaggeration, putting it between 10,000 and 80,400[^546][^551][^547]. Archaeology confirms the practice: since 2015 excavations beside the Templo Mayor have uncovered the Huey Tzompantli, the great skull rack, with more than 650 skulls, women and children among them[^552][^553]

    - **Afterlife by manner of death:** Warriors who fell in battle and women who died in childbirth joined the sun, those killed by water or lightning went to Tlaloc's paradise, and most people made a four-year journey through the nine levels of Mictlan, the land of the dead. Where a person went depended on how they died rather than how they had lived[^554][^555][^544]

    - **A world always about to end:** At the close of every 52-year cycle all fires were put out, and the New Fire ceremony was held to ensure that the sun would rise again[^556][^544]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>

  **Respectful Assessment:** Aztec religion held that the world rests on sacrifice and that a god had to give himself for it to live. Its answer was a debt that could never be paid off, renewed in human blood every year. The New Testament makes the same starting point and reaches the opposite conclusion: God gives himself once, and the debt is paid in full, "by one sacrifice he has made perfect for ever those who are being made holy" (Hebrews 10:14). No further victims are required.

  The conquest that ended Aztec religion was itself brutal, and Spanish clergy were divided over it; Bartolomé de las Casas denounced the conquerors' cruelty to the native peoples[^535][^536]. Mass conversion followed in the decades after 1521. The appearance of Our Lady of Guadalupe, dated by tradition to 1531 on the hill of Tepeyac, became central to Mexican Catholicism, although some historians doubt that the account goes back to that date[^557]. The wider history is set out in [the Church's own record](/categories/christianity-and-the-world#section-the-churchs-record).
</div>
`,
    },
    {
      id: "inca",
      title: "Inca Religion",
      tags: ["Ancient"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Inca Religion:**

  The Inca, whose empire stretched along the Andes from Ecuador to Chile, worshipped Viracocha, the creator who made the world and humanity at Lake Titicaca, Inti, the sun god and divine ancestor of the Inca rulers, and Pachamama, the earth mother[^558][^559][^560][^561]. The emperor, the Sapa Inca, was the son of the Sun, and the Coricancha in Cusco, the Temple of the Sun, was the centre of the state cult[^562][^563].

  Alongside the gods, the Inca venerated *huacas*, sacred places and objects such as mountains, springs and stones, and kept the mummies of past rulers, who were consulted, fed and carried in processions as though still alive[^564][^563]. The great festival of Inti Raymi marked the winter solstice[^565][^566][^562].

  **📅 Date Founded:** No founder. The Inca state grew from Cusco from the early fifteenth century, drawing on far older Andean religion, and fell to Francisco Pizarro from 1532[^558][^562]
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>

    - **A creator God:** Viracocha was understood as the maker of all things, above the other gods[^559][^567]

    - **Care for the earth:** Reverence for Pachamama expressed dependence on and gratitude for the land[^561][^564]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>

    - **Child sacrifice:** In the *capacocha* rite chosen children were taken to mountain summits and killed. Mummies such as the "Maiden" of Llullaillaco and "Juanita" of Ampato have been studied in detail, and analysis of the Llullaillaco children's hair shows they were given increasing quantities of coca and alcohol in the year before their deaths[^568][^569][^570]

    - **A religion of the state:** Worship of the Sun and the divine emperor upheld the conquest and rule of other peoples[^563][^562]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>

  **Respectful Assessment:**   The Spanish conquest destroyed the Coricancha, on whose foundations the church of Santo Domingo still stands. Andean Christianity today often combines Catholic devotion with offerings to Pachamama. The capacocha children offer a sharp contrast with the God who stopped Abraham's hand (Genesis 22:12) and who gave his own Son rather than requiring the children of his people (Romans 8:32).
</div>

**See also:** [Aztec Religion](/categories/religions#section-aztec), [Maya Religion](/categories/religions#section-maya).
`,
    },
    {
      id: "wicca",
      title: "Wicca/Neo-Paganism",
      tags: ["New movements"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Wicca/Neo-Paganism:**

  Wicca is a modern neo-pagan religious movement developed in England in the 1940s and made public in the 1950s by Gerald Gardner[^571][^572]. Importantly, despite claims of ancient origins, modern Wicca is essentially a 20th-century creation that combines elements from various sources including ceremonial magic, folk practices, and Gardner's own innovations[^573]. Wiccans worship a Goddess and God, follow the Wheel of the Year (eight seasonal festivals), and practice magic (spelled "magick"). The religion emphasizes connection with nature, personal empowerment, and the Wiccan Rede: "An it harm none, do what ye will." This differs significantly from ancient Celtic and other historical pagan traditions, which had entirely different practices and beliefs. Estimates of practising Wiccans worldwide run to the hundreds of thousands, with a frequently cited median of about 800,000, concentrated mainly in English-speaking countries[^574].


  **📅 Date Founded:** 1950s in England by Gerald Gardner, despite claims of much older origins
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>



    - **Environmental awareness:** Treats nature as sacred[^572][^575]

      - **Gender equality:** Elevates feminine divine and promotes gender balance[^576]

      - **Personal empowerment:** Teaches responsibility for one's own actions[^577][^578]

      - **Peaceful principles:** "Harm none" ethic promotes non-violence[^579][^578]

      - **Seasonal celebration:** Keeps festivals tied to the seasons[^580][^578]

      - **Creative expression:** Encourages artistic and ritualistic creativity[^581]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>



    - **Historical fabrication:** Claims of an unbroken ancient witch religion are not supported by historians; Gardner assembled the tradition in the mid-twentieth century from ceremonial magic, Freemasonry, folklore and his own innovations[^582][^578]

      - **Occult practices:** Spell-casting and magic contradict biblical prohibitions on sorcery[^583][^584]

      - **Polytheistic confusion:** Worship of a goddess and god conflicts with the first commandment (Exodus 20:3)[^585][^586]

      - **Moral relativism:** "Do what ye will" philosophy lacks absolute moral standards[^587]

      - **Spiritual deception:** Claims of supernatural power often lead to disillusionment[^586]

      - **Theological inconsistency:** Different Wiccan traditions contradict each other on fundamental beliefs[^588][^589]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>


  **Respectful Assessment:** Wicca attracts people seeking authentic spirituality, connection with nature, and personal empowerment. However, several fundamental issues prevent it from providing genuine spiritual truth:


  <div style="margin: 10px 0;">
    **1. Founded on Falsehood:** Wicca's claims to ancient origins are historically false, undermining its credibility as an authentic spiritual tradition.
  </div>

  <div style="margin: 10px 0;">
    **2. Occult Dangers:** Biblical warnings about sorcery and witchcraft ([Deuteronomy 18:10-12](https://www.biblegateway.com/passage/?search=Deuteronomy%2018%3A10-12&version=NIV), [Galatians 5:20](https://www.biblegateway.com/passage/?search=Galatians%205%3A20&version=NIV)) suggest serious spiritual dangers in Wiccan practices.
  </div>

  <div style="margin: 10px 0;">
    **3. False Divine Concepts:** Goddess and God worship contradicts the biblical revelation of the one true God revealed through Jesus Christ.
  </div>

  <div style="margin: 10px 0;">
    **4. Moral Confusion:** Relativistic ethics provide no absolute foundation for distinguishing right from wrong.
  </div>

  **Conclusion:** While appreciating Wiccan environmental concerns and gender equality, Christianity provides authentic spiritual power, historical reliability, and moral clarity that modern witchcraft cannot offer.

</div>`
    },
    {
      id: "mormonism",
      title: "Mormonism (LDS)",
      tags: ["Christian offshoots"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Mormonism:**

  Mormonism, officially The Church of Jesus Christ of Latter-day Saints (LDS), was founded in the 19th century by Joseph Smith. LDS believe the Book of Mormon, Doctrine and Covenants, and Pearl of Great Price are additional divinely inspired scriptures alongside the Bible, restored for the 'Latter Days'[^590]. The faith teaches that God has a physical body, humans can become gods (Exaltation), and families can be eternally sealed. As of 2024, the LDS Church has approximately 17.2 million members worldwide[^591].


  **📅 Date Founded:** 1830 AD in Fayette, New York, by Joseph Smith
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>



    - **Family focus:** Strong emphasis on family unity and genealogical research[^592]

      - **Service ethic:** Strong commitment to community service and missionary work[^593]

      - **Health code:** Strict health code (Word of Wisdom) promotes healthy living[^594]

      - **Lay leadership:** Reliance on non-paid, local leaders builds community involvement[^595]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>



    - **Non-Trinitarian view of God:** God is an exalted man with a physical body, contradicting biblical monotheism and the Trinity[^596]

      - **Grace and works:** LDS teaching holds that resurrection is given to all, while exaltation requires ordinances and covenant faithfulness; the Book of Mormon says "it is by grace that we are saved, after all we can do" (2 Nephi 25:23). Some recent LDS teachers read "after" as "in spite of", but the system still makes exaltation conditional on obedience, which Christians regard as contrary to salvation by grace alone ([Ephesians 2:8-9](https://www.biblegateway.com/passage/?search=Ephesians%202%3A8-9&version=ESV))[^597][^598]

      - **Prophetic additions to Scripture:** The acceptance of additional sacred texts and ongoing revelation supersedes the final authority of the Bible[^599]

      - **Changing doctrines:** Early doctrines (e.g., polygamy, Black priesthood ban) were later reversed or abandoned[^600][^601][^602]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>


  **Respectful Assessment:** Mormons exhibit great dedication to family, community, and service. However, the fundamental differences in the nature of God and salvation place Mormonism outside of orthodox Christianity:


  <div style="margin: 10px 0;">
    **1. Different God:** The LDS doctrine of God (Exalted Man) and Exaltation (man becoming God) radically deviates from the biblical description of the eternal, transcendent, and unchangeable Triune God.
  </div>

  <div style="margin: 10px 0;">
    **2. Different Salvation:** Salvation 'after all we can do' fundamentally contradicts salvation by grace alone through faith alone ([Ephesians 2:8-9](https://www.biblegateway.com/passage/?search=Ephesians%202%3A8-9&version=KJV)), shifting the focus from Christ's finished work to human effort.
  </div>

  <div style="margin: 10px 0;">
    **3. Different Jesus:** LDS teaching holds that Jesus is the firstborn spirit child of Heavenly Father, which differs from the Nicene confession that the Son is eternally begotten, not made, and of one being with the Father.
  </div>

  **Conclusion:** While respecting LDS moral tenets, Christianity cannot accept Mormonism as an extension of the faith due to core doctrinal conflicts regarding the nature of God, Christ, and salvation.

</div>

**See also:** [Sectarian Versions: The New World Translation, the Joseph Smith Translation and The Passion Translation (Bible Translations)](/categories/bible-translations#section-sectarian-versions).
`
    },
    {
      id: "jehovahswitnesses",
      title: "Jehovah's Witnesses",
      tags: ["Christian offshoots"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Jehovah's Witnesses:**

  Jehovah's Witnesses (JWs) originated from the Bible Student movement founded by Charles Taze Russell. They are known for their door-to-door ministry, refusal to celebrate holidays like Christmas and birthdays, and rejection of blood transfusions. JWs believe that God's name is Jehovah and that only a select 144,000 will reign with Christ in heaven, while the majority of the faithful will live eternally on a restored earth. They rely on their own Bible translation, the New World Translation (NWT)[^603][^604].


  **📅 Date Founded:** Late 1870s in Pennsylvania (Charles Taze Russell)
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>



    - **Evangelistic zeal:** Strong commitment to worldwide ministry and personal evangelism[^605][^604]

      - **Moral discipline:** Encourages high moral and ethical standards, discouraging substance abuse[^606][^604]

      - **Community support:** Strong global community network providing mutual support[^604]

      - **Literacy promotion:** Encourages reading and extensive study of religious literature[^607]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>



    - **Denial of Christ's Divinity:** Teach Jesus is Michael the Archangel and a created being, denying the biblical Trinity[^608][^609]

      - **Altered Scripture:** Use of the New World Translation (NWT) which changes key verses (e.g., [John 1:1](https://www.biblegateway.com/passage/?search=John%201%3A1&version=NIV)) to support non-Trinitarian views[^610][^611]

      - **Failed predictions:** Watch Tower publications set expectations for 1914, 1925 and (less formally, but widely taught) 1975 that were not fulfilled. The organisation now says it never claimed inspired prophecy, but the expectations were published as its teaching[^612]

      - **Two-class hope:** Only the "anointed" 144,000 go to heaven; the "great crowd" of other faithful receive eternal life on a paradise earth, dividing believers in a way orthodox Christianity does not[^613]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>


  **Respectful Assessment:** Jehovah's Witnesses are highly committed to their faith and often display remarkable moral conviction. However, their doctrine fundamentally separates them from orthodox Christianity:


  <div style="margin: 10px 0;">
    **1. Denial of Divinity:** By claiming Jesus is a created archangel and denying the Trinity, JWs deny the core biblical teaching that Jesus is God incarnate ([John 1:1](https://www.biblegateway.com/passage/?search=John%201%3A1&version=ESV), [Colossians 2:9](https://www.biblegateway.com/passage/?search=Colossians%202%3A9&version=NIV)).
  </div>

  <div style="margin: 10px 0;">
    **2. Corrupted Text:** The NWT translation is widely criticized by biblical scholars for altering the text to support pre-determined non-Trinitarian theology.
  </div>

  <div style="margin: 10px 0;">
    **3. False Prophecy:** Multiple failed predictions place them outside the biblical test of a true prophet ([Deuteronomy 18:22](https://www.biblegateway.com/passage/?search=Deuteronomy%2018%3A22&version=NIV)).
  </div>

  **Conclusion:** While commending their zeal, their Christology (doctrine of Christ) and reliance on altered scripture means they teach a different gospel and a different Christ, making them incompatible with historic Christianity.

</div>

**See also:** [Sectarian Versions: The New World Translation, the Joseph Smith Translation and The Passion Translation (Bible Translations)](/categories/bible-translations#section-sectarian-versions), [Heresies About Jesus (Heresies and Fallacies)](/categories/heresies-and-fallacies#section-christ-heresies).
`
    },
    {
      id: "alevism",
      title: "Alevism",
      tags: ["Abrahamic"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Alevism:**

  Alevism is a syncretic, non-denominational religious and cultural tradition predominantly found among Turkish, Kurdish, and Zaza people. It draws on Twelver Shia devotion, Sufi (especially Bektashi) mysticism and pre-Islamic Turkic tradition, and some scholars also see Anatolian Christian influence. Unlike orthodox Islam, Alevis do not generally fast during Ramadan, pray five times a day, or perform the Hajj to Mecca. Their focus is on inner spirituality, love for the Prophet Muhammad's cousin Ali, and the religious gathering (cem) which features music, poetry, and ritual dancing[^614][^615].


  **📅 Date Founded:** Emerged in Anatolia/Middle East between the 13th and 16th centuries
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>



    - **Gender equality:** Men and women participate equally in religious ceremonies and gatherings[^616]

      - **Tolerance:** Generally promotes religious pluralism and non-discrimination[^617]

      - **Social justice:** Strong historical commitment to social justice and anti-authoritarianism[^618]

      - **Cultural preservation:** Maintains rich cultural traditions through music, poetry, and dancing[^619]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>



    - **Syncretism:** Christians and many Sunni Muslims regard the blending of Shia, Sufi and pre-Islamic elements as theologically unstable; Alevis themselves describe their path as an inward reading of Islam[^620]

      - **Esoteric/Secretive Practices:** Doctrines are transmitted secretly within communities, lacking openness and public accountability[^615]

      - **Gnostic/Mystical Focus:** Stresses inner knowledge (ma'rifa) and spiritual experience[^621][^620][^622]

      - **Focus on Ali:** Exalted status of Ali (and the Ahl al-Bayt) effectively supplants traditional Islamic focus on God alone[^623]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>


  **Respectful Assessment:** Alevism showcases a deep spiritual hunger and admirable commitment to equality. However, its esoteric and syncretic nature presents fundamental theological challenges:


  <div style="margin: 10px 0;">
    **1. Syncretism and Authority:** The merging of contradictory doctrines lacks a singular, authoritative divine source, unlike the coherent, historically grounded revelation of Christianity.
  </div>

  <div style="margin: 10px 0;">
    **2. Esoteric Focus:** Emphasis on secret, inner knowledge contrasts with Christ's public, universal call to salvation for all people ([Matthew 10:27](https://www.biblegateway.com/passage/?search=Matthew%2010%3A27&version=NIV)).
  </div>

  <div style="margin: 10px 0;">
    **3. Replacement of God:** Elevating human figures (like Ali) to a near-divine status deviates from the worship of the one true God.
  </div>

  **Conclusion:** While respecting their cultural and mystical approach, Christianity affirms that true revelation must be public, historically verified, and centered on the unique, divine person of Jesus Christ.

</div>`
    },
    {
      id: "sufism",
      title: "Sufism (Dervishes)",
      tags: ["Abrahamic"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Sufism:**

  Sufism is the mystical dimension of Islam, focusing on the inward search for God and a direct, personal experience of the Divine. Sufis (including the ascetic Dervishes) seek spiritual excellence (*ihsan*) through disciplines such as the remembrance of God (*dhikr*), which can be quiet or ecstatic, meditation, asceticism, and adherence to a spiritual master (*Sheikh* or *Pir*). Key tenets include the passing away of the self (*fana*) followed by subsistence in God (*baqa*); the "sober" school associated with al-Junayd understood this as the ego's surrender rather than a merging of substances, while "intoxicated" Sufis used bolder language of union. It grew out of the ascetic piety of the first Islamic centuries, partly in reaction to the worldliness of the early caliphate. As of 2024, Sufism is widely practiced within mainstream Islam, with various orders (*tariqas*) across the globe[^624][^622].


  **📅 Date Founded:** 8th century AD (as an ascetic and mystical stream within Islam)
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>



    - **Intense spiritual focus:** Emphasizes sincere devotion and inner transformation[^625][^622]

      - **Ethical discipline:** Promotes high moral and spiritual disciplines[^626]

      - **Tolerance:** Often promotes a non-judgmental and inclusive attitude toward others[^627][^628]

      - **Cultural contribution:** Produced world-renowned poetry, music, and art (e.g., Rumi)[^629][^630]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>



    - **Monistic tendencies:** Doctrine of *fana* (annihilation of self in God) blurs the creator/creature distinction[^631][^632][^633]

      - **Authority of the Sheikh:** Elevation of the spiritual master's authority potentially supersedes Qur'anic/Hadith authority[^634]

      - **Ecstatic practices:** Practices like whirling (Mevlevi Dervishes) and intense *dhikr* seek altered states of consciousness, which Christians and many Muslim critics regard as spiritually problematic[^635][^622]

      - **Syncretism with local religions:** Sufi orders often incorporate local non-Islamic traditions, undermining monotheistic purity[^636]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>


  **Respectful Assessment:** Sufism embodies a noble quest for deep, heartfelt union with the Divine, reflecting the innate human desire for true spiritual intimacy. However, their methods and theological conclusions are problematic from an orthodox Christian viewpoint:


  <div style="margin: 10px 0;">
    **1. Monism vs. Theism:** The goal of annihilation (*fana*) into God contradicts the personal, relational nature of the biblical God who preserves the individuality of His creation.
  </div>

  <div style="margin: 10px 0;">
    **2. Mystical Experience over Revelation:** Prioritizing ecstatic experience and the authority of human teachers over historical, objective divine revelation (Scripture) is contrary to the Christian foundation.
  </div>

  <div style="margin: 10px 0;">
    **3. Self-Effort:** The intense ascetic discipline relies heavily on human works for spiritual progress, contrasting with the Christian dependence on God's grace.
  </div>

  **Conclusion:** While commending the Sufi search for a deeper connection with God, Christianity provides that connection not through self-annihilation or human-led mysticism, but through the objective, atoning work of Jesus Christ.

</div>`
    },
    {
      id: "druze",
      title: "Druze Faith",
      tags: ["Middle Eastern"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About the Druze Faith:**

  The Druze faith arose in Cairo in 1017 to 1018 from the Ismaili Shia Islam of the Fatimid Caliphate. Its founding teachers, above all Hamza ibn Ali, proclaimed the divinity of the Fatimid caliph al-Hakim, who disappeared in 1021 and whom the Druze believe will return[^637][^638]. The Druze call themselves *al-Muwahhidun*, "the people of unity", and hold a strict monotheism, together with belief in reincarnation: each soul is reborn immediately into another human body[^637][^638].

  Their scriptures, the *Epistles of Wisdom*, are known in full only to initiates, the *uqqal*, while most Druze are uninitiated *juhhal*. The faith has accepted no converts since about 1043, and there are roughly one million Druze, mainly in Syria, Lebanon, Israel and Jordan[^637][^638].

  **📅 Date Founded:** 1017 to 1018 in Cairo, under the Fatimid caliph al-Hakim; the call to the faith was closed around 1043[^637][^638]
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>

    - **Loyalty and community:** The Druze are known for close-knit communities and loyalty to the states where they live; Druze men serve in the Israeli army[^637][^638]

    - **Strict morality:** Initiates abstain from alcohol and tobacco and follow a demanding code of honesty[^638][^637]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>

    - **A closed and secret faith:** Its teaching is hidden from most of its own members and from outsiders, and no one can join it[^637][^638]

    - **A deified ruler:** The divinity of al-Hakim rests on the claims of his own court; contemporary sources record a ruler of erratic and sometimes cruel decrees[^638][^637]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>

  **Respectful Assessment:**   The Druze revere Jesus, along with Jethro, the father-in-law of Moses, whose tomb is their chief shrine, but in a scheme of reincarnation and cosmic cycles that differs completely from the Christian claim. Hebrews 9:27 states that "people are destined to die once, and after that to face judgment", and Christianity offers its message openly to everyone.
</div>

**See also:** [Islam: Sunni, Shia and the Other Branches](/categories/islam#section-sunni-shia-and-other-branches).
`,
    },
    {
      id: "yazidism",
      title: "Yazidism",
      tags: ["Middle Eastern"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Yazidism:**

  Yazidism is the ancestral religion of the Yazidis, a Kurdish-speaking people of northern Iraq, Syria, Turkey and the Caucasus. Yazidis believe in one God who entrusted the world to seven holy beings, the chief of them Melek Taus, the Peacock Angel[^639][^640][^641]. The faith took shape around the twelfth-century Sufi Sheikh Adi ibn Musafir, whose tomb at Lalish is its holiest site, and it draws on older Iranian religion as well as Sufi Islam[^640][^641].

  Yazidis are born into the faith and marry within it, and their tradition was passed down orally[^639][^640][^641]. In 2014 the Islamic State attacked the Yazidis of Sinjar, killing thousands of men and enslaving thousands of women and children; the UN Commission of Inquiry on Syria judged this genocide in 2016[^642][^643].

  **📅 Date Founded:** Shaped from the twelfth century around Sheikh Adi ibn Musafir, with older Iranian roots[^640][^641]
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>

    - **Endurance under persecution:** The Yazidis have survived many massacres over the centuries and kept their faith[^639][^642][^641]

    - **One God:** Yazidis believe in a single creator[^640][^641]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>

    - **A misunderstood angel:** Neighbours have long accused the Yazidis of devil worship, because in Muslim tradition the angel who refused to bow to Adam is Satan, while in Yazidi belief Melek Taus is not evil but was forgiven and restored. The accusation has been used to justify their persecution[^644][^640][^641]

    - **A closed community:** Membership is by birth only, and marriage outside the faith, or across its castes, is forbidden[^639][^640][^641]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>

  **Respectful Assessment:**   The Christian disagreement with Yazidism lies in its account of the spiritual world and of salvation, but the charge of devil worship misrepresents what Yazidis believe, and Christians and Yazidis suffered side by side at the hands of the Islamic State. Many Yazidi survivors were rescued and sheltered by Christian and secular organisations.
</div>
`,
    },
    {
      id: "mandaeism",
      title: "Mandaeism",
      tags: ["Middle Eastern"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Mandaeism:**

  Mandaeism is the only surviving Gnostic religion. Mandaeans believe in a supreme God, the Great Life, from whom beings of light emanate, while the material world was formed by lesser powers; the soul comes from the world of light and returns to it after death[^645][^646][^647]. Their chief prophet is John the Baptist, and their central rite is repeated baptism (*masbuta*) in flowing water, which they call *yardena*, "Jordan"[^645][^647].

  Their main scripture is the *Ginza Rabba*, "the Great Treasure", written in Mandaic, a dialect of Aramaic[^648][^646]. They lived for centuries in southern Iraq and south-western Iran; war and persecution since 2003 have scattered most of them abroad, and they number roughly 60,000 to 100,000[^649][^645][^646].

  **📅 Date Founded:** Origins disputed. The Mandaeans say they came from the Jordan valley in the first century; scholars debate whether they began in Palestine or Mesopotamia, and their texts were set down by the third century AD[^645][^646][^647]
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>

    - **Peace and purity:** Mandaeans are pacifists who stress washing, truthfulness and charity[^647][^649]

    - **A unique heritage:** Their language and rites preserve one of the oldest living religious traditions of the Near East[^646][^649]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>

    - **A hostile view of Jesus:** Mandaean texts call Jesus a false messiah who corrupted John's teaching[^645][^648][^647]

    - **A flawed creation:** As in other Gnostic systems, the material world is not the good work of the supreme God[^646][^647]

    - **No converts:** Membership is by birth to Mandaean parents[^649][^645][^646]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>

  **Respectful Assessment:**   The Gospels present John the Baptist as the forerunner who pointed away from himself: "He must become greater; I must become less" (John 3:30). Acts records disciples of John who had not yet heard of Jesus (Acts 19:1-7), which shows that followers of John continued as a separate group. Christian baptism, unlike masbuta, is given once, as union with Christ's death and resurrection (Romans 6:3-4).
</div>

**See also:** [Gnosticism](/categories/religions#section-gnosticism).
`,
    },
    {
      id: "scientology",
      title: "Scientology",
      tags: ["New movements"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Scientology:**

  Scientology is a set of beliefs and practices created by science fiction author L. Ron Hubbard in the early 1950s. It developed from his earlier self-help system, Dianetics. Scientologists believe humans are immortal spiritual beings called "thetans" who have forgotten their true nature. The goal of the religion is to clear the mind of past traumatic memories (engrams) through a counseling process called "auditing" to achieve a state of "Clear" and eventually "Operating Thetan" (OT)[^650][^651][^652]. The church is known for its strict control over members, high financial costs for courses, and secrecy regarding its advanced teachings[^653].


  **📅 Date Founded:** 1953-1954 (first churches incorporated in New Jersey and California) by L. Ron Hubbard
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>



    - **Self-improvement focus:** Encourages personal responsibility and self-betterment[^654]

      - **Drug rehabilitation:** Operates extensive (though controversial) anti-drug programs[^655][^656]

      - **Community structure:** Runs as a tightly organised church[^656][^657]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>



    - **Financial exploitation:** Spiritual progress requires paying exorbitant fees for courses and auditing[^658][^659]

      - **Incompatible theology:** Leaves the Supreme Being (the "eighth dynamic") undefined, teaches that thetans pass through many lives, and centres salvation on recovering the thetan's own godlike abilities[^660][^661]

      - **Abusive practices:** Numerous reports of physical and psychological abuse of members[^662][^663][^653]

      - **Secrecy:** Core beliefs (like the Xenu narrative) are hidden from lower-level members[^664]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>


  **Respectful Assessment:** While Scientology appeals to the desire for self-improvement, it is fundamentally incompatible with Christianity. It replaces God with the human self ("thetan") and salvation by grace with a costly system of works ("auditing").


  <div style="margin: 10px 0;">
    **1. God vs. Self:** Scientology is essentially atheistic or polytheistic, teaching that individuals are "gods" in the making, whereas Christianity affirms one eternal Creator God.
  </div>

  <div style="margin: 10px 0;">
    **2. Sin vs. Engrams:** It redefines sin as mere psychological baggage (engrams) to be cleared by human technology, denying the reality of moral rebellion against God and the need for Christ's atonement.
  </div>

  <div style="margin: 10px 0;">
    **3. Commercialization:** The sale of spiritual freedom for money is directly contrary to the free gift of the Gospel ([Acts 8:18-20](https://www.biblegateway.com/passage/?search=Acts+8%3A18-20&version=NIV)).
  </div>

  **Conclusion:** Scientology offers a technological path to self-deification that stands in direct opposition to the Christian path of humble submission to a loving Savior.

</div>`
    },
    {
      id: "christianscience",
      title: "'Christian' Science",
      tags: ["Christian offshoots"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Christian Science:**

  Christian Science was founded by Mary Baker Eddy in the late 19th century. It is based on her book *Science and Health with Key to the Scriptures*. The central teaching is that God is all-in-all and purely spiritual; therefore, matter, sin, sickness, and death are illusions ("errors") of the mortal mind. Christian Scientists believe that realizing this spiritual reality brings physical healing. They typically rely on prayer for healing rather than medical treatment[^665][^666].


  **📅 Date Founded:** 1879 in Boston, Massachusetts, by Mary Baker Eddy
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>



    - **Emphasis on prayer:** Strong dedication to daily prayer and spiritual study[^667][^668]

      - **God's goodness:** Focuses heavily on the goodness and love of God[^669]

      - **Journalism:** Established the *Christian Science Monitor*, a highly respected secular newspaper[^670][^666]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>



    - **Denial of reality:** Denies the existence of matter, pain, and the physical body, contradicting both science and Scripture[^671][^666]

      - **Denial of the Atonement:** Teaches that Jesus did not die to pay for sins, as sin is considered an illusion[^672][^666]

      - **Distinction from Jesus:** Distinguishes between "Jesus" (the man) and "Christ" (the divine idea), denying the Incarnation[^666]

      - **Medical neglect:** Rejection of medical treatment has led to preventable deaths, including children[^673][^674]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>


  **Respectful Assessment:** Christian Science uses Christian terminology but redefines almost every major doctrine. While their focus on God's love is admirable, their denial of physical reality creates a theological chasm:


  <div style="margin: 10px 0;">
    **1. Creation is Real:** The Bible teaches that God created a physical world that was "very good" ([Genesis 1:31](https://www.biblegateway.com/passage/?search=Genesis+1%3A31&version=NIV)), not an illusion to be escaped or denied.
  </div>

  <div style="margin: 10px 0;">
    **2. Real Sin, Real Savior:** If sin and death are illusions, then Christ's physical death on the cross was unnecessary. Christianity affirms that Jesus died physically to save us from real sin.
  </div>

  <div style="margin: 10px 0;">
    **3. Compassion and Care:** While God can heal miraculously, Scripture also validates the use of medicine (e.g., Luke the physician, [1 Timothy 5:23](https://www.biblegateway.com/passage/?search=1+Timothy+5%3A23&version=NIV)). Neglecting care for the body ignores the temple of the Holy Spirit.
  </div>

  **Conclusion:** Christian Science is neither scientific nor historically Christian. It offers a gnostic-style escape from reality rather than the redemption of reality found in Jesus Christ.

</div>`
    },
    {
      id: "unification",
      title: "Unification Church",
      tags: ["Christian offshoots"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About the Unification Church:**

  The Unification Church, now the Family Federation for World Peace and Unification, was founded in Seoul in 1954 by Sun Myung Moon, who said that Jesus appeared to him in 1935 and asked him to complete his mission[^675][^676][^677]. Its teaching, the *Divine Principle*, holds that the Fall was a sexual sin between Eve and Satan, and that Jesus, killed before he could marry, achieved spiritual but not physical salvation. Moon and his wife Hak Ja Han are the "True Parents" who complete restoration[^678][^677][^675].

  The church is known for mass weddings, the Blessing, in which thousands of couples, often matched by Moon, married together, and for large business and media holdings, including the Washington Times. Moon died in 2012, and the movement has since split among his widow and sons[^675][^679][^676].

  **📅 Date Founded:** 1954 in Seoul, South Korea, by Sun Myung Moon[^675][^676]
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>

    - **Family values:** The movement places strong emphasis on marriage and family[^677][^675]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>

    - **Jesus' mission called a failure:** The claim that Jesus failed to complete his mission contradicts his own words, "It is finished" (John 19:30)[^678][^677]

    - **A new messiah:** Moon and his wife are given the role that the New Testament gives to Christ alone[^675][^678][^677]

    - **Recruitment and money:** The church has been accused of high-pressure recruitment, and Moon was imprisoned in the United States for tax fraud in 1984. In 2022 the killing of the former Japanese prime minister Shinzo Abe by a man angry at the church's demands on his mother led to a Japanese court order in 2025 to dissolve the church's Japanese branch[^679][^675][^676]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>

  **Respectful Assessment:**   Christian churches do not recognise the Unification Church as Christian, because it adds a new messiah and a new revelation to the gospel and denies that Christ's work was complete. Hebrews says that Christ "has appeared once for all at the culmination of the ages to do away with sin by the sacrifice of himself" (Hebrews 9:26).
</div>

**See also:** [Christ Heresies (Heresies and Fallacies)](/categories/heresies-and-fallacies#section-christ-heresies).
`,
    },
    {
      id: "falun-gong",
      title: "Falun Gong",
      tags: ["New movements"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Falun Gong:**

  Falun Gong, or Falun Dafa, was founded in China in 1992 by Li Hongzhi. It combines slow meditative exercises from the *qigong* tradition with moral teaching built on three principles, truthfulness, compassion and forbearance, drawing on Buddhist and Taoist ideas[^680][^681][^682].

  It grew rapidly in the 1990s, to tens of millions of practitioners on some estimates. After 10,000 followers gathered peacefully outside the government compound in Beijing in April 1999, the Chinese government banned it that July and began a campaign of arrests, imprisonment and torture[^683][^681]. In 2019 an independent tribunal in London, the China Tribunal, concluded that organs had been forcibly taken from prisoners of conscience, with Falun Gong practitioners probably the main source[^683][^684].

  **📅 Date Founded:** 1992 in Changchun, China, by Li Hongzhi, who has lived in the United States since 1998[^680][^682]
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>

    - **Moral ideals:** Truthfulness, compassion and forbearance are admirable virtues[^681][^680]

    - **Courage under persecution:** Practitioners have endured severe persecution without resorting to violence[^683][^681]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>

    - **Claims about its founder:** Li Hongzhi is presented as a figure of extraordinary spiritual power, and his writings make claims about aliens and about illness that critics describe as cultish[^680][^682]

    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>

  **Respectful Assessment:**   Christians and Falun Gong practitioners have both suffered under the Chinese state, and the persecution of either is a matter of religious freedom. The religious difference is that Falun Gong seeks self-cultivation toward enlightenment through the teaching of its master, where Christianity offers grace through the death and resurrection of Christ.
</div>
`,
    },
    {
      id: "caodaism",
      title: "Caodaism",
      tags: ["New movements"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Caodaism:**

  Caodaism was founded in southern Vietnam in 1926 by Ngo Van Chieu and others, who said they had received messages through séances from the Supreme Being, Cao Dai, "the high tower"[^685][^686]. It seeks to unite all religions, teaching that God revealed himself through Buddha, Lao Tzu, Confucius, Jesus and Moses, and that Caodaism is the third and final revelation[^686][^685].

  Its symbol is the Divine Eye in a triangle, its Holy See is at Tay Ninh, and it honours saints including the French writer Victor Hugo and the Chinese revolutionary Sun Yat-sen. Its hierarchy is modelled partly on the Catholic Church, with a pope, cardinals and bishops. It counts several million adherents, mostly in Vietnam[^685][^686].

  **📅 Date Founded:** 1926 in Tay Ninh, French Indochina[^685][^686]
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>

    - **Peace between religions:** It aims at harmony between faiths and teaches vegetarianism, non-violence and charity[^686][^685]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>

    - **Revelation by séance:** Its scriptures come from spirit messages, the practice Deuteronomy 18:10-12 forbids[^685][^686]

    - **All religions as one:** Treating Jesus as one revealer among many does not fit his own claims (John 14:6)[^686]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>

  **Respectful Assessment:**   Caodaism shares the hope that all people can be reconciled to God, but Christianity locates that reconciliation in one person, "For there is one God and one mediator between God and mankind, the man Christ Jesus" (1 Timothy 2:5).
</div>

**See also:** [Bahá'í Faith](/categories/religions#section-bahai).
`,
    },
    {
      id: "unitarian-universalism",
      title: "Unitarian Universalism",
      tags: ["New movements"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Unitarian Universalism:**

  Unitarian Universalism is a liberal religion with no creed. Its congregations include theists, humanists, atheists, pagans and Buddhists, united by shared values and a covenant rather than by doctrine[^687][^688][^689].

  It grew from two Christian movements. Unitarians denied the Trinity and held that God is one person, and Universalists taught that all people will finally be saved. The two merged in the United States in 1961 to form the Unitarian Universalist Association, and over time both moved beyond their Christian roots[^687][^688].

  **📅 Date Founded:** 1961 by the merger of the American Unitarian Association and the Universalist Church of America; Unitarian churches date back to the sixteenth century in Poland and Transylvania[^687][^688]
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>

    - **Social conscience:** Unitarians and Universalists were prominent in the abolition of slavery and in civil rights movements[^687][^688]

    - **Tolerance:** Congregations welcome people of every belief[^689][^687]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>

    - **No defined belief:** Without a creed there is no shared account of who God is or how people are saved[^689][^687]

    - **A denied Trinity and divinity of Christ:** The Unitarian root rejects the Christian teaching that Jesus is God incarnate[^687][^688]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>

  **Respectful Assessment:**   Unitarian Universalism shows what happens to a church that keeps its ethics while letting go of its doctrines: over a few generations it ceased to be Christian. Christianity rests on specific historical claims, above all the resurrection, which are either true or false and cannot be held as one option among many.
</div>

**See also:** [The Trinity](/categories/trinity), [Is Belief Reasonable?](/categories/is-belief-reasonable).
`,
    },
    {
      id: "spiritism",
      title: "Spiritism",
      tags: ["New movements"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Spiritism:**

  Spiritism was founded in France by the educator Hippolyte Rivail, writing as Allan Kardec, whose *The Spirits' Book* (1857) set out teachings he said had been received from spirits through mediums[^690][^691][^692]. It teaches that spirits are immortal, that they progress through repeated reincarnations, and that they can communicate with the living[^692][^690].

  Spiritism calls itself Christian and honours Jesus as the highest moral guide, but rejects his divinity, hell and atonement. Its largest following is in Brazil, where Spiritist centres run hospitals and charities and Spiritist ideas are widely held even among Catholics[^690][^691][^692].

  **📅 Date Founded:** 1857 in Paris, with the publication of Allan Kardec's *The Spirits' Book*[^691][^692]
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>

    - **Charity at the centre:** Kardec's motto was "without charity there is no salvation", and Spiritism stresses moral self-improvement and service to others[^691][^692]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>

    - **Communication with the dead:** Mediumship is the practice Scripture forbids (Deuteronomy 18:10-12; Leviticus 19:31), and King Saul's consultation of the medium at Endor is recorded as one of his sins (1 Chronicles 10:13)[^692][^690]

    - **Reincarnation:** Repeated lives replace the Christian hope of resurrection and judgment (Hebrews 9:27)[^692][^691]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>

  **Respectful Assessment:**   Spiritism keeps Christian ethics while replacing salvation by grace with progress through many lives. Its use of Jesus' words, such as "you must be born again" (John 3:3), as teaching on reincarnation, reverses their meaning: Jesus speaks of a new birth "of water and the Spirit" in this life (John 3:5).
</div>

**See also:** [Modern Spiritual Movements](/categories/religions#section-modern).
`,
    },
    {
      id: "satanism",
      title: "Satanism",
      tags: ["New movements"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Satanism:**

  Most organised Satanism is atheistic. The Church of Satan, founded in San Francisco in 1966 by Anton LaVey, treats Satan as a symbol of pride, carnal desire and individualism rather than a real being, and LaVey's *Satanic Bible* (1969) teaches self-interest and indulgence instead of self-denial[^693][^694][^695].

  The Satanic Temple, founded in 2013, is also non-theistic, and uses Satan as a symbol of rebellion against authority in campaigns over the separation of church and state[^696][^697]. Theistic Satanism, the worship of Satan as a real being, exists only in small groups[^693][^698].

  **📅 Date Founded:** 1966 in San Francisco, by Anton LaVey (Church of Satan); 2013 (The Satanic Temple)[^694][^696]
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>

    - **Honesty about motives:** LaVeyan Satanism is open about putting the self first[^695][^694]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>

    - **Self-worship:** Its morality rests on the will of the individual rather than on any good outside the self[^695][^698]

    - **Deliberate provocation:** Its symbols are chosen to mock Christianity[^693][^696][^698]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>

  **Respectful Assessment:**   The fears of the "Satanic panic" of the 1980s, about widespread secret ritual abuse, were investigated and found to be unfounded, and repeating them is false witness. The real claim of Satanism is the oldest one, the serpent's "you will be like God" (Genesis 3:5). Jesus' answer is that the one who seeks to save his life will lose it (Mark 8:35).
</div>

**See also:** [Wicca/Neo-Paganism](/categories/religions#section-wicca).
`,
    },
    {
      id: "native-american",
      title: "Native American Religions",
      tags: ["Indigenous"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Native American Religions:**

  The hundreds of Native American peoples have their own religious traditions, but many share common themes: a Great Spirit or creator, called *Wakan Tanka* by the Lakota; a world full of spiritual power in animals, places and natural forces; visions sought through fasting; and ceremonies tied to the land and the seasons[^699][^700].

  Major ceremonies include the Sun Dance of the Plains peoples, the sweat lodge and the vision quest. In 1890 the Ghost Dance movement, which promised the return of the dead and the restoration of the old world, spread across the West, and its suppression ended in the massacre at Wounded Knee[^701][^702][^703]. The Native American Church, incorporated in 1918, combines Christian elements with the sacramental use of peyote[^704][^705].

  **📅 Date Founded:** No founders; traditions are prehistoric in origin. Many ceremonies were banned in the United States from 1883 until the 1930s, and the American Indian Religious Freedom Act of 1978 protected their practice[^699][^706][^700]
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>

    - **Reverence for creation:** Respect for the land and its creatures, and gratitude to the Creator, run through these traditions[^700][^699]

    - **Community and generosity:** Gift-giving and the welfare of the people are central values[^699][^700]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>

    - **Spirits and visions:** Guidance is sought from spirits and visions, which Scripture tells believers to test (1 John 4:1)[^700][^699]

    - **Peyote:** The ritual use of a hallucinogen is central to the Native American Church[^704][^705]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>

  **Respectful Assessment:**   The record of Christian missions here is mixed. Church-run boarding schools in the United States and Canada separated children from their families and suppressed their languages, with lasting harm; Pope Francis apologised in Canada in 2022 for the Church's part in them. Many Native Americans are Christians, and figures such as Black Elk, the Lakota holy man who became a Catholic catechist, held both identities. The gospel claims to fulfil, not erase, a people's knowledge of the Creator (Acts 14:17).
</div>

**See also:** [The Church's Record (Christianity and the World)](/categories/christianity-and-the-world#section-the-churchs-record).
`,
    },
    {
      id: "aboriginal-australian",
      title: "Aboriginal Australian Religion",
      tags: ["Indigenous"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Aboriginal Australian Religion:**

  The religion of Aboriginal Australians centres on the Dreaming, the time when ancestral beings travelled across the land, shaping its features, creating its creatures and laying down the law that people must keep. The Dreaming is not only past: it continues in the land, in ceremony and in each person[^707][^708][^709].

  Each group has its own ancestral beings and sacred sites, joined by songlines, the tracks of the ancestors recorded in song, story and painting. The Rainbow Serpent, a creator and giver of water found across much of the continent, is among the best known[^710][^711][^709].

  **📅 Date Founded:** No founder. Aboriginal people have lived in Australia for at least 50,000 years, and their religious traditions are among the oldest continuous traditions in the world[^710][^709]
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>

    - **Bond with the land:** The land is sacred and to be cared for, a responsibility handed down through law and ceremony[^708][^709]

    - **Law and kinship:** The Dreaming gives a complete moral order of kinship and obligation[^710][^707][^708]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>

    - **Ancestral beings rather than one creator:** Creation is the work of many ancestral beings[^709][^710]

    - **Secret knowledge:** Much sacred knowledge is restricted by age, gender and initiation[^710][^709]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>

  **Respectful Assessment:**   Christian missions in Australia were bound up with colonisation and with the removal of Aboriginal children from their families, the Stolen Generations, a history the churches have since acknowledged and apologised for. Today many Aboriginal Australians are Christians, and Aboriginal Christian leaders read the Dreaming's sense of a land made and ordered by its Creator as a preparation for the gospel.
</div>

**See also:** [The Church's Record (Christianity and the World)](/categories/christianity-and-the-world#section-the-churchs-record).
`,
    },
    {
      id: "polynesian",
      title: "Polynesian and Māori Religion",
      tags: ["Indigenous"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Polynesian and Māori Religion:**

  The peoples of Polynesia, from Hawaii to New Zealand and Easter Island, shared related gods and ideas. In Māori tradition Ranginui, the sky father, and Papatūānuku, the earth mother, were pushed apart by their children, among them Tāne, god of forests and maker of the first woman, and Tangaroa, god of the sea. Related gods appear across the Pacific, such as Kāne and Kanaloa in Hawaii, where Pele is the goddess of volcanoes[^712][^713][^714][^715].

  Two concepts governed life: *mana*, spiritual power and authority, and *tapu*, the sacredness or restriction that surrounded people, places and things, which gave English the word "taboo"[^716][^717][^718][^719].

  **📅 Date Founded:** No founder; brought across the Pacific by Polynesian voyagers over the last three thousand years. Most Polynesians became Christian in the nineteenth century[^712][^713]
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>

    - **Respect for creation and ancestry:** Genealogy (*whakapapa*) links people to the gods, the land and the sea[^714][^715]

    - **Sacredness of life:** Tapu expressed reverence for what is holy[^718][^717]
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>

    - **Human sacrifice:** Several Polynesian societies, including Hawaii and Tahiti, offered human sacrifices to war gods[^712][^713]

    - **Fear-bound law:** Breaking tapu could be punished by death, and the kapu system in Hawaii was abolished by its own rulers in 1819[^717][^713]
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>

  **Respectful Assessment:**   Polynesians largely embraced Christianity themselves, often through Pacific Islander missionaries, and churches are central to Pacific life today; in New Zealand the Treaty of Waitangi of 1840 was promoted by missionaries, who translated it. Some Māori theologians have argued that the Supreme Being Io was known before the missionaries came, although many scholars think the Io tradition was shaped by contact with Christianity.
</div>
`,
    },
    {
      id: "tengrism",
      title: "Tengrism",
      tags: ["Indigenous"],
      content: `
<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
  **📚 About Tengrism:**

  Tengrism is a modern name for the traditional religion of the Central Asian steppe, characterized by shamanism, animism, ancestor veneration, and a supreme sky god, Tengri (also rendered Tangri)[^720][^721]. It was the religion of the early Turkic and Mongol peoples, and probably of the Xiongnu and the early Hungarians. Since the collapse of the Soviet Union it has undergone a revival, often tied to national identity, in Kyrgyzstan, Kazakhstan, Buryatia and Yakutia[^722][^723]. It emphasizes living in harmony with the surrounding world, reverence for nature spirits, and the veneration of ancestors.

  **📅 Date Founded:** Prehistoric origins in the Eurasian steppes, highly prominent during the Mongol Empire (13th century) and earlier Turkic Khaganates.
</div>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; width: 100%;">
  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745; box-sizing: border-box;">

<h3>✅ Positive Aspects</h3>

    - **Reverence for nature:** Strong emphasis on living in balance with the natural environment.

      - **Respect for ancestors:** Deep-rooted honor for family lineage and predecessors.

      - **Simplicity:** Focus on practical survival and harmony without rigid dogmatic structures.

      - **Tolerance:** Historically, Tengrist empires (like the Mongol Empire) often allowed freedom of religion[^724].
    </div>

  <div style="flex: 1 1 calc(50% - 10px); min-width: 280px; background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; box-sizing: border-box;">

<h3>❌ Areas of Concern</h3>

    - **Lack of fixed revelation:** Relies on oral traditions and individual shamans rather than a coherent, verifiable historical text.

      - **Animistic worldview:** Veneration of localized spirits can lead to fear and constant attempts to appease unpredictable forces.

      - **No revealed moral code:** Ethics rested mainly on custom (*töre*) and, under the Mongols, on imperial law such as the Yassa, rather than on a universal code grounded in revelation[^725][^726].

      - **Lack of redemption:** Offers no solution for human sin or a clear pathway to eternal salvation, focusing instead on temporal balance.
    </div>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">

<h3>🔍 Christian Response & Analysis</h3>

  **Respectful Assessment:** Tengrism's appreciation for creation and its emphasis on stewardship echo the biblical mandate given to humanity in Genesis. The recognition of a supreme "Sky God" reflects a general revelation of a Creator. However, it falls short of the full truth in several ways:

  <div style="margin: 10px 0;">
    **1. Creator vs. Creation:** Tengrism often blurs the line between the Creator and the creation (animism). Christianity teaches that God is distinct from His creation, and only the Creator is worthy of worship ([Romans 1:25](https://www.biblegateway.com/passage/?search=Romans+1%3A25&version=NIV)).
  </div>

  <div style="margin: 10px 0;">
    **2. Fear of Spirits vs. Freedom in Christ:** Shamanistic practices involve appeasing spirits. Christians are freed from the fear of spiritual forces because Christ has triumphed over them ([Colossians 2:15](https://www.biblegateway.com/passage/?search=Colossians+2%3A15&version=NIV)).
  </div>

  <div style="margin: 10px 0;">
    **3. Written Revelation:** While Tengrism relies on changing oral traditions and subjective shamanic experiences, Christianity is grounded in God's objective, historically verifiable written Word.
  </div>

  **Conclusion:** While Tengrism correctly senses the divine in the natural world, Christianity reveals the personal God who made that world and who entered it as Jesus Christ to bring true harmony and salvation.

</div>`
    }
  ],
  verses: [
    { reference: "John 14:6", text: "Jesus answered, \"I am the way and the truth and the life. No one comes to the Father except through me.\"" },
    { reference: "Acts 4:12", text: "Salvation is found in no one else, for there is no other name under heaven given to mankind by which we must be saved." },
    { reference: "1 Timothy 2:5", text: "For there is one God and one mediator between God and mankind, the man Christ Jesus." },
    { reference: "John 3:16", text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." },
    { reference: "John 3:18", text: "Whoever believes in him is not condemned, but whoever does not believe stands condemned already because they have not believed in the name of God’s one and only Son." },
    { reference: "1 John 5:11-12", text: "And this is the testimony: God has given us eternal life, and this life is in his Son. Whoever has the Son has life; whoever does not have the Son of God does not have life." },
    { reference: "Romans 1:16", text: "For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes: first to the Jew, then to the Gentile." }
  ],
                sources: [
    "1. [Reference] History.com. 'Religion.' https://www.history.com/topics/religion",
    "2. [Encyclopedia] Britannica. 'Jesus.' https://www.britannica.com/biography/Jesus",
    "3. [Academic] Stoner, Peter W. 'Science Speaks: Scientific Proof of the Accuracy of Prophecy and the Bible.' Moody Press, 1976. https://www.amazon.com/Science-Speaks-Scientific-Accuracy-Prophecy/dp/0802476309",
    "4. [Academic] Habermas, Gary R. 'The Resurrection of Jesus: New Historiographical Approach.' IVP Academic, 2010. https://www.amazon.com/Resurrection-Jesus-New-Historiographical-Approach/dp/0830827153",
    "5. [Academic] Internet Encyclopedia of Philosophy. 'Divine Command Theory.' https://iep.utm.edu/divine-command-theory/",
    "6. [Encyclopedia] World History Encyclopedia. 'Timeline: Mesopotamian Religion.' https://www.worldhistory.org/timeline/Mesopotamian_Religion/",
    "7. [Wikipedia] 'Min (god).' https://en.wikipedia.org/wiki/Min_(god)",
    "8. [Encyclopedia] World History Encyclopedia. 'The Pyramid Texts.' https://www.worldhistory.org/article/148/the-pyramid-texts-guide-to-the-afterlife/",
    "9. [Wikipedia] 'Rigveda.' https://en.wikipedia.org/wiki/Rigveda",
    "10. [Encyclopedia] World History Encyclopedia. 'The Vedas.' https://www.worldhistory.org/The_Vedas/",
    "11. [Academic] 'AVESTA i. Survey of the history and contents of the book.' Encyclopaedia Iranica. https://iranicaonline.org/articles/avesta-holy-book",
    "12. [Academic] Encyclopaedia Iranica. 'Zoroastrianism I: Historical Review.' https://www.iranicaonline.org/articles/zoroastrianism-i-historical-review/",
    "13. [Wikipedia] 'Zoroaster.' https://en.wikipedia.org/wiki/Zoroaster",
    "14. [Wikipedia] 'Merneptah Stele.' https://en.wikipedia.org/wiki/Merneptah_Stele",
    "15. [Reference] History of Information. 'The Merneptah Stele, the Only Egyptian Document that Mentions Israel.' https://www.historyofinformation.com/detail.php?id=1561",
    "16. [Wikipedia] 'Ketef Hinnom.' https://en.wikipedia.org/wiki/Ketef_Hinnom",
    "17. [Academic] Center for Online Judaic Studies. 'Silver Scroll Amulets from Ketef Hinnom, c. 600 BCE.' https://cojs.org/silver_scroll_amulets_from_ketef_hinnom-_c-_600_bce/",
    "18. [Wikipedia] 'Gobekli Tepe.' https://en.wikipedia.org/wiki/Gobekli_Tepe",
    "19. [Reference] Göbekli Tepe. UNESCO World Heritage Centre. https://whc.unesco.org/en/list/1572/",
    "20. [Wikipedia] 'Urmonotheismus.' https://en.wikipedia.org/wiki/Urmonotheismus",
    "21. [Encyclopedia] 'Schmidt, Wilhelm.' Encyclopedia.com. https://www.encyclopedia.com/people/social-sciences-and-law/anthropology-biographies/wilhelm-schmidt",
    "22. [Encyclopedia] Encyclopedia.com. 'Schmidt, Wilhelm.' https://www.encyclopedia.com/environment/encyclopedias-almanacs-transcripts-and-maps/schmidt-wilhelm",
    "23. [Academic] Heiser. Monotheism, Polytheism, Monolatry, or Henotheism? Toward an Assessment of Divine Plurality in the Hebrew Bible. Bulletin for Biblical Research, 2008. https://doi.org/10.2307/26423726",
    "24. [Wikipedia] 'Monolatry.' https://en.wikipedia.org/wiki/Monolatry",
    "25. [Encyclopedia] World History Encyclopedia. 'Sumer: The Cradle of Civilization.' https://www.worldhistory.org/Sumer/",
    "26. [Wikipedia] 'Sumerian religion.' https://en.wikipedia.org/wiki/Sumerian_religion",
    "27. [Wikipedia] 'Enuma Elish.' https://en.wikipedia.org/wiki/En%C5%ABma_Eli%C5%A1",
    "28. [Encyclopedia] World History Encyclopedia. 'Mesopotamian Religion.' https://www.worldhistory.org/Mesopotamian_Religion/",
    "29. [Wikipedia] 'Ancient Mesopotamian religion.' https://en.wikipedia.org/wiki/Ancient_Mesopotamian_religion",
    "30. [Encyclopedia] World History Encyclopedia. 'Eridu Genesis: The Oldest Mesopotamian Text on the Great Flood.' https://www.worldhistory.org/Eridu_Genesis/",
    "31. [Wikipedia] 'Eridu Genesis.' https://en.wikipedia.org/wiki/Eridu_Genesis",
    "32. [Encyclopedia] 'Ancient Mesopotamian Beliefs in the Afterlife.' World History Encyclopedia. https://www.worldhistory.org/article/701/ancient-mesopotamian-beliefs-in-the-afterlife/",
    "33. [Wikipedia] 'Kur.' https://en.wikipedia.org/wiki/Kur",
    "34. [Wikipedia] 'Atra-Hasis.' https://en.wikipedia.org/wiki/Atra-Hasis",
    "35. [Commentary] Commentaries on Genesis 1:27. Bible Hub. https://biblehub.com/commentaries/genesis/1-27.htm",
    "36. [Encyclopedia] World History Encyclopedia. 'Ma'at.' https://www.worldhistory.org/Maat/",
    "37. [Wikipedia] 'Maat.' https://en.wikipedia.org/wiki/Maat",
    "38. [Academic] 'Religion in the Lives of the Ancient Egyptians.' University of Chicago. https://fathom.lib.uchicago.edu/1/777777190168/",
    "39. [Wikipedia] 'Ancient Egyptian religion.' https://en.wikipedia.org/wiki/Ancient_Egyptian_religion",
    "40. [Encyclopedia] World History Encyclopedia. 'Akhenaten.' https://www.worldhistory.org/Akhenaten/",
    "41. [Encyclopedia] World History Encyclopedia. 'Egyptian Mythology.' https://www.worldhistory.org/Egyptian_Mythology/",
    "42. [Encyclopedia] Britannica. 'Pyramid Texts.' https://www.britannica.com/topic/Pyramid-Texts",
    "43. [Wikipedia] 'Pyramid Texts.' https://en.wikipedia.org/wiki/Pyramid_Texts",
    "44. [Wikipedia] 'Philae.' https://en.wikipedia.org/wiki/Philae",
    "45. [Encyclopedia] World History Encyclopedia. 'Ancient Egyptian Religion.' https://www.worldhistory.org/Egyptian_Religion/",
    "46. [Wikipedia] 'Book of the Dead.' https://en.wikipedia.org/wiki/Book_of_the_Dead",
    "47. [Encyclopedia] World History Encyclopedia. 'Egyptian Book of the Dead.' https://www.worldhistory.org/Egyptian_Book_of_the_Dead/",
    "48. [Wikipedia] 'Ancient Egyptian funerary practices.' https://en.wikipedia.org/wiki/Ancient_Egyptian_funerary_practices",
    "49. [Wikipedia] 'Atenism.' https://en.wikipedia.org/wiki/Atenism",
    "50. [Wikipedia] 'Ancient Canaanite religion.' https://en.wikipedia.org/wiki/Ancient_Canaanite_religion",
    "51. [Encyclopedia] Encyclopaedia Britannica. 'Canaanite religion.' https://www.britannica.com/topic/Canaanite-religion",
    "52. [Wikipedia] 'El (deity).' https://en.wikipedia.org/wiki/El_(deity)",
    "53. [Encyclopedia] Encyclopaedia Britannica. 'Baal.' https://www.britannica.com/topic/Baal-ancient-deity",
    "54. [Wikipedia] 'Ugarit.' https://en.wikipedia.org/wiki/Ugarit",
    "55. [Encyclopedia] World History Encyclopedia. 'Ugarit.' https://www.worldhistory.org/Ugarit/",
    "56. [Wikipedia] 'Baal Cycle.' https://en.wikipedia.org/wiki/Baal_Cycle",
    "57. [Encyclopedia] World History Encyclopedia. 'Baal.' https://www.worldhistory.org/Baal/",
    "58. [Wikipedia] 'Chemosh.' https://en.wikipedia.org/wiki/Chemosh",
    "59. [Wikipedia] 'Dagon.' https://en.wikipedia.org/wiki/Dagon",
    "60. [Encyclopedia] Encyclopaedia Britannica. 'Moloch.' https://www.britannica.com/topic/Moloch-ancient-god",
    "61. [Wikipedia] 'Baal.' https://en.wikipedia.org/wiki/Baal",
    "62. [Encyclopedia] Encyclopedia.com. 'Canaanite Religion.' https://www.encyclopedia.com/environment/encyclopedias-almanacs-transcripts-and-maps/canaanite-religion",
    "63. [Wikipedia] 'Moloch.' https://en.wikipedia.org/wiki/Moloch",
    "64. [Wikipedia] 'Asherah.' https://en.wikipedia.org/wiki/Asherah",
    "65. [Encyclopedia] Encyclopaedia Britannica. 'Asherah.' https://www.britannica.com/topic/Asherah-Semitic-goddess",
    "66. [Encyclopedia] Britannica. 'Islam: Beliefs.' https://www.britannica.com/topic/Islam",
    "67. [Academic] Stanford Encyclopedia of Philosophy. 'Religion and Science.' https://plato.stanford.edu/entries/religion-science/",
    "68. [Reference] BBC Religions. 'Islam: Five Pillars of Islam.' https://www.bbc.co.uk/religion/religions/islam/practices/fivepillars.shtml",
    "69. [Wikipedia] 'Five Pillars of Islam.' https://en.wikipedia.org/wiki/Five_Pillars_of_Islam",
    "70. [Academic] Pew Research Center. 'Why Muslims are the world’s fastest-growing religious group.' https://www.pewresearch.org/short-reads/2017/04/06/why-muslims-are-the-worlds-fastest-growing-religious-group/",
    "71. [Academic] Pew Research Center. 'Mapping the Global Muslim Population.' 2009. https://www.pewresearch.org/religion/2009/10/07/mapping-the-global-muslim-population/",
    "72. [Wikipedia] 'Islamic schools and branches.' https://en.wikipedia.org/wiki/Islamic_schools_and_branches",
    "73. [Encyclopedia] Jewish Virtual Library. 'Judaism: Covenant.' https://www.jewishvirtuallibrary.org/judaism",
    "74. [News] The Jerusalem Post. 'Jewish population increases by 100,000 this year, to 15.8 million worldwide.' https://www.jpost.com/judaism/article-823226",
    "75. [Encyclopedia] Britannica. 'Palestine.' Including the early history of Israel. https://www.britannica.com/place/Palestine",
    "76. [Reference] My Jewish Learning. 'Monotheism.' https://www.myjewishlearning.com/article/monotheism/",
    "77. [Encyclopedia] World History Encyclopedia. 'Ten Commandments.' https://www.worldhistory.org/Ten_Commandments/",
    "78. [Wikipedia] 'Ten Commandments.' https://en.wikipedia.org/wiki/Ten_Commandments",
    "79. [Reference] My Jewish Learning. 'Judaism 101'. https://www.myjewishlearning.com/judaism-101-an-intro-to-jewish-life-and-practice/",
    "80. [Encyclopedia] Britannica. 'Rabbi.' https://www.britannica.com/topic/rabbi",
    "81. [Reference] My Jewish Learning. 'The Torah.' https://www.myjewishlearning.com/article/the-torah/",
    "82. [Encyclopedia] 'ETHICS.' Jewish Encyclopedia (1906). https://www.jewishencyclopedia.com/view.jsp?artid=499&letter=E",
    "83. [Wikipedia] 'Jewish ethics.' https://en.wikipedia.org/wiki/Jewish_ethics",
    "84. [Wikipedia] 'Messiah in Judaism'. https://en.wikipedia.org/wiki/Messiah_in_Judaism",
    "85. [Encyclopedia] Jewish Encyclopedia (1906). 'Messiah.' https://www.jewishencyclopedia.com/articles/10729-messiah",
    "86. [Christian Source] Verse By Verse Ministry. 'Jewish Objections to Jesus.' https://versebyverseministry.org/bible-answers/answering_jewish_objections_to_jesus",
    "87. [Wikipedia] 'Oral Torah.' https://en.wikipedia.org/wiki/Oral_Torah",
    "88. [Encyclopedia] The Oral Law: Talmud and Mishna. Jewish Virtual Library. https://www.jewishvirtuallibrary.org/the-oral-law-talmud-and-mishna",
    "89. [Academic] 'The destruction of the Jerusalem Temple: its meaning and its consequences (Chapter 7) - The Cambridge History of Judaism.' Cambridge University Press. https://www.cambridge.org/core/books/abs/cambridge-history-of-judaism/destruction-of-the-jerusalem-temple-its-meaning-and-its-consequences/A3D597AAE094CCFDCCE188FFD48CD16C",
    "90. [Wikipedia] 'Siege of Jerusalem (70 CE).' https://en.wikipedia.org/wiki/Siege_of_Jerusalem_(70_CE)",
    "91. [Encyclopedia] Britannica. 'Yom Kippur.' https://www.britannica.com/topic/Yom-Kippur",
    "92. [Wikipedia] 'Jewish religious movements.' https://en.wikipedia.org/wiki/Jewish_religious_movements",
    "93. [Academic] Brill. 'Rabbinic Exegesis in Contradiction to the Simple Meaning.' https://brill.com/display/title/33923",
    "94. [Reference] Christian Book. 'Answering Jewish Objections to Jesus: Historical Objections.' https://www.christianbook.com/answering-jewish-objections-to-jesus-volume/michael-brown/9780801062896/pd/62891",
    "95. [Wikipedia] 'Korban.' https://en.wikipedia.org/wiki/Korban",
    "96. [Commentary] Commentaries on Hebrews 9:11. Bible Hub. https://biblehub.com/commentaries/hebrews/9-11.htm",
    "97. [Christian Source] Growing Christians. 'A New Covenant, But Not a New Israel'. https://www.growingchristians.org/devotions/a-new-covenant-but-not-a-new-israel",
    "98. [Apologetics] GotQuestions.org. 'What is the Abrahamic Covenant?' https://www.gotquestions.org/Abrahamic-covenant.html",
    "99. [Primary Source] Josephus. Antiquities of the Jews 18.1 (Whiston translation). https://penelope.uchicago.edu/josephus/ant-18.html",
    "100. [Wikipedia] 'Pharisees.' https://en.wikipedia.org/wiki/Pharisees",
    "101. [Encyclopedia] Encyclopaedia Britannica. 'Pharisee.' https://www.britannica.com/topic/Pharisee",
    "102. [Wikipedia] 'Sadducees.' https://en.wikipedia.org/wiki/Sadducees",
    "103. [Encyclopedia] Encyclopaedia Britannica. 'Sadducee.' https://www.britannica.com/topic/Sadducee",
    "104. [Wikipedia] 'Essenes.' https://en.wikipedia.org/wiki/Essenes",
    "105. [Encyclopedia] Encyclopaedia Britannica. 'Essene.' https://www.britannica.com/topic/Essene",
    "106. [Wikipedia] 'Karaite Judaism.' https://en.wikipedia.org/wiki/Karaite_Judaism",
    "107. [Reference] Jewish Virtual Library. 'Karaites.' https://www.jewishvirtuallibrary.org/karaites",
    "108. [Encyclopedia] Encyclopaedia Britannica. 'Karaite.' https://www.britannica.com/topic/Karaite",
    "109. [Wikipedia] 'Hasidic Judaism.' https://en.wikipedia.org/wiki/Hasidic_Judaism",
    "110. [Reference] Jewish Virtual Library. 'Hasidism.' https://www.jewishvirtuallibrary.org/hasidism",
    "111. [Wikipedia] 'Haredi Judaism.' https://en.wikipedia.org/wiki/Haredi_Judaism",
    "112. [Reference] My Jewish Learning. 'The Jewish Denominations.' https://www.myjewishlearning.com/article/the-jewish-denominations/",
    "113. [Wikipedia] 'Orthodox Judaism.' https://en.wikipedia.org/wiki/Orthodox_Judaism",
    "114. [Encyclopedia] Encyclopaedia Britannica. 'Orthodox Judaism.' https://www.britannica.com/topic/Orthodox-Judaism",
    "115. [Wikipedia] 'Reform Judaism.' https://en.wikipedia.org/wiki/Reform_Judaism",
    "116. [Encyclopedia] Encyclopaedia Britannica. 'Reform Judaism.' https://www.britannica.com/topic/Reform-Judaism",
    "117. [Reference] BBC Religions. 'Reform Judaism.' https://www.bbc.co.uk/religion/religions/judaism/subdivisions/reform_1.shtml",
    "118. [Wikipedia] 'Conservative Judaism.' https://en.wikipedia.org/wiki/Conservative_Judaism",
    "119. [Encyclopedia] Encyclopaedia Britannica. 'Conservative Judaism.' https://www.britannica.com/topic/Conservative-Judaism",
    "120. [Wikipedia] 'Reconstructionist Judaism.' https://en.wikipedia.org/wiki/Reconstructionist_Judaism",
    "121. [Encyclopedia] Encyclopaedia Britannica. 'Reconstructionism.' https://www.britannica.com/topic/Reconstructionism",
    "122. [Reference] Jewish Virtual Library. 'Reconstructionist Judaism.' https://www.jewishvirtuallibrary.org/reconstructionist-judaism",
    "123. [Academic] Pew Research Center. 'Jewish Americans in 2020.' 2021. https://www.pewresearch.org/religion/2021/05/11/jewish-americans-in-2020/",
    "124. [Academic] Pew Research Center. 'Israel's Religiously Divided Society.' 2016. https://www.pewresearch.org/religion/2016/03/08/israels-religiously-divided-society/",
    "125. [Wikipedia] 'Messianic Judaism.' https://en.wikipedia.org/wiki/Messianic_Judaism",
    "126. [Reference] Jewish Virtual Library. 'Messianic Judaism.' https://www.jewishvirtuallibrary.org/messianic-judaism",
    "127. [Primary Source] Maimonides, Mishneh Torah, Kings and Wars 11. Sefaria. https://www.sefaria.org/Mishneh_Torah,_Kings_and_Wars.11",
    "128. [Encyclopedia] Jewish Encyclopedia (1906). 'Jesus of Nazareth.' https://www.jewishencyclopedia.com/articles/8616-jesus-of-nazareth",
    "129. [Reference] Judaism 101. 'Mashiach: The Messiah.' https://www.jewfaq.org/mashiach",
    "130. [Primary Source] Babylonian Talmud, Sanhedrin 98a. Sefaria. https://www.sefaria.org/Sanhedrin.98a",
    "131. [Primary Source] Rashi on Isaiah 53:3. Sefaria. https://www.sefaria.org/Rashi_on_Isaiah.53.3",
    "132. [Primary Source] Targum Jonathan on Isaiah 52:13. Sefaria. https://www.sefaria.org/Targum_Jonathan_on_Isaiah.52.13",
    "133. [Commentary] Bible Hub. 'Commentaries on Isaiah 52:13.' https://biblehub.com/commentaries/isaiah/52-13.htm",
    "134. [Primary Source] Babylonian Talmud, Sanhedrin 98b. Sefaria. https://www.sefaria.org/Sanhedrin.98b",
    "135. [Lexicon] Bible Hub. Hebrew 259, echad. https://biblehub.com/hebrew/259.htm",
    "136. [Primary Source] Aish. 'Why Jews Don't Believe in Jesus.' https://aish.com/why-jews-dont-believe-in-jesus/",
    "137. [Lexicon] Bible Hub. Hebrew 3173, yachid. https://biblehub.com/hebrew/3173.htm",
    "138. [Apologetics] Got Questions. 'Why Are Jesus' Genealogies in Matthew and Luke So Different?' (2025). https://gotquestions.org/Jesus-genealogy.html",
    "139. [Lexicon] Bible Hub. Hebrew 817, asham. https://biblehub.com/hebrew/817.htm",
    "140. [Commentary] Commentaries on Isaiah 53:10. Bible Hub. https://biblehub.com/commentaries/isaiah/53-10.htm",
    "141. [Wikipedia] 'Michael L. Brown.' https://en.wikipedia.org/wiki/Michael_L._Brown",
    "142. [Wikipedia] 'Samaritans.' https://en.wikipedia.org/wiki/Samaritans",
    "143. [Encyclopedia] Encyclopaedia Britannica. 'Samaritan.' https://www.britannica.com/topic/Samaritan",
    "144. [Wikipedia] 'Mount Gerizim.' https://en.wikipedia.org/wiki/Mount_Gerizim",
    "145. [Wikipedia] 'Samaritan Pentateuch.' https://en.wikipedia.org/wiki/Samaritan_Pentateuch",
    "146. [Encyclopedia] Encyclopaedia Britannica. 'Samaritan Pentateuch.' https://www.britannica.com/topic/Samaritan-Pentateuch",
    "147. [Wikipedia] 'Samaritanism.' https://en.wikipedia.org/wiki/Samaritanism",
    "148. [Wikipedia] 'Hinduism.' https://en.wikipedia.org/wiki/Hinduism",
    "149. [Apologetics] What is Hinduism? GotQuestions.org. https://www.gotquestions.org/Hinduism.html",
    "150. [Academic] Pew Research Center. 'Hindus.' https://www.pewresearch.org/religion/2012/12/18/global-religious-landscape-hindu/",
    "151. [Wikipedia] 'Trimurti.' https://en.wikipedia.org/wiki/Trimurti",
    "152. [Encyclopedia] Britannica. 'Hinduism.' https://www.britannica.com/topic/Hinduism",
    "153. [Academic] Internet Encyclopedia of Philosophy. 'Hindu Philosophy.' https://iep.utm.edu/hindu-ph/",
    "154. [Wikipedia] 'Hindu philosophy.' https://en.wikipedia.org/wiki/Hindu_philosophy",
    "155. [Wikipedia] 'Religious pluralism.' https://en.wikipedia.org/wiki/Religious_pluralism",
    "156. [Encyclopedia] 'Dharma.' Encyclopedia.com. https://www.encyclopedia.com/topic/dharma.aspx",
    "157. [Wikipedia] 'Dharma.' https://en.wikipedia.org/wiki/Dharma",
    "158. [Wikipedia] 'Hindu art.' https://en.wikipedia.org/wiki/Hindu_art",
    "159. [Reference] Khajuraho Group of Monuments. UNESCO World Heritage Centre. https://whc.unesco.org/en/list/244/",
    "160. [Wikipedia] 'Grihastha.' https://en.wikipedia.org/wiki/Grihastha",
    "161. [Academic] IJSR. 'Triggering Problem in the Origin of the Universe: Hindu Mythology.' https://www.ijsr.net/getabstract.php?paperid=SR23602180244",
    "162. [Encyclopedia] Britannica. 'Caste.' https://www.britannica.com/topic/caste-social-differentiation",
    "163. [Wikipedia] 'Karma.' Including the problem of evil and Kaufman's objections. https://en.wikipedia.org/wiki/Karma",
    "164. [Wikipedia] 'Historical Vedic religion.' https://en.wikipedia.org/wiki/Historical_Vedic_religion",
    "165. [Wikipedia] 'Hindu Denominations.' https://en.wikipedia.org/wiki/Hindu_denominations",
    "166. [Wikipedia] 'Hindu cosmology.' https://en.wikipedia.org/wiki/Hindu_cosmology",
    "167. [Wikipedia] 'Polytheism.' https://en.wikipedia.org/wiki/Polytheism",
    "168. [Lexicon] Merriam-Webster. 'Samsara.' https://www.merriam-webster.com/dictionary/samsara",
    "169. [Wikipedia] 'Varna (Hinduism).' https://en.wikipedia.org/wiki/Varna_(Hinduism)",
    "170. [Encyclopedia] Encyclopedia Britannica. 'Hinduism: The Nature of the Divine.' https://www.britannica.com/topic/brahman-Hindu-concept",
    "171. [Christian Source] Christianity Today. 'Hinduism.' https://www.christianitytoday.com/topics/hinduism/",
    "172. [Encyclopedia] Encyclopaedia Britannica. 'Vaishnavism.' https://www.britannica.com/topic/Vaishnavism",
    "173. [Encyclopedia] Encyclopaedia Britannica. 'Shaktism.' https://www.britannica.com/topic/Shaktism",
    "174. [Wikipedia] 'Vaishnavism.' https://en.wikipedia.org/wiki/Vaishnavism",
    "175. [Wikipedia] 'Shaivism.' https://en.wikipedia.org/wiki/Shaivism",
    "176. [Wikipedia] 'Shaktism.' https://en.wikipedia.org/wiki/Shaktism",
    "177. [Wikipedia] 'Smartism.' https://en.wikipedia.org/wiki/Smartism",
    "178. [Wikipedia] 'Āstika and nāstika.' https://en.wikipedia.org/wiki/%C4%80stika_and_n%C4%81stika",
    "179. [Encyclopedia] Encyclopaedia Britannica. 'Mimamsa.' https://www.britannica.com/topic/Mimamsa",
    "180. [Wikipedia] 'Vedanta.' https://en.wikipedia.org/wiki/Vedanta",
    "181. [Encyclopedia] Encyclopaedia Britannica. 'Vedanta.' https://www.britannica.com/topic/Vedanta",
    "182. [Wikipedia] 'Advaita Vedanta.' https://en.wikipedia.org/wiki/Advaita_Vedanta",
    "183. [Academic] Internet Encyclopedia of Philosophy. 'Advaita Vedanta.' https://iep.utm.edu/advaita-vedanta/",
    "184. [Wikipedia] 'Vishishtadvaita.' https://en.wikipedia.org/wiki/Vishishtadvaita",
    "185. [Encyclopedia] Encyclopaedia Britannica. 'Vishishtadvaita.' https://www.britannica.com/topic/Vishishtadvaita",
    "186. [Academic] Internet Encyclopedia of Philosophy. 'Rāmānuja.' https://iep.utm.edu/ramanuja/",
    "187. [Wikipedia] 'Dvaita Vedanta.' https://en.wikipedia.org/wiki/Dvaita_Vedanta",
    "188. [Encyclopedia] Encyclopaedia Britannica. 'Dvaita.' https://www.britannica.com/topic/Dvaita",
    "189. [Academic] Internet Encyclopedia of Philosophy. 'Madhva.' https://iep.utm.edu/madhva/",
    "190. [Wikipedia] 'Tenkalai.' https://en.wikipedia.org/wiki/Tenkalai",
    "191. [Wikipedia] 'Vadakalai.' https://en.wikipedia.org/wiki/Vadakalai",
    "192. [Wikipedia] 'Brahmo Samaj.' https://en.wikipedia.org/wiki/Brahmo_Samaj",
    "193. [Encyclopedia] Encyclopaedia Britannica. 'Brahmo Samaj.' https://www.britannica.com/topic/Brahmo-Samaj",
    "194. [Wikipedia] 'Arya Samaj.' https://en.wikipedia.org/wiki/Arya_Samaj",
    "195. [Encyclopedia] Encyclopaedia Britannica. 'Arya Samaj.' https://www.britannica.com/topic/Arya-Samaj",
    "196. [Wikipedia] 'International Society for Krishna Consciousness.' https://en.wikipedia.org/wiki/International_Society_for_Krishna_Consciousness",
    "197. [Encyclopedia] Britannica. 'Greek mythology.' https://www.britannica.com/topic/Greek-mythology",
    "198. [Academic] Cambridge University Press. 'Mycenaean Greek Worship in Minoan Territory.' https://www.cambridge.org/core/books/local-horizon-of-ancient-greek-religion/mycenaean-greek-worship-in-minoan-territory/2F2598B389D602F29616D08438794A2C",
    "199. [Wikipedia] 'Classical tradition.' https://en.wikipedia.org/wiki/Classical_tradition",
    "200. [Encyclopedia] World History Encyclopedia. 'Greek Philosophy.' https://www.worldhistory.org/Greek_Philosophy/",
    "201. [Encyclopedia] World History Encyclopedia. 'Greek Religion.' https://www.worldhistory.org/Greek_Religion/",
    "202. [Reference] Theoi Project. 'Greek Mythology.' https://www.theoi.com/",
    "203. [Encyclopedia] Encyclopedia Britannica. 'Democracy: Ancient Greece.' https://www.britannica.com/topic/democracy",
    "204. [Wikipedia] 'Greek Art.' https://en.wikipedia.org/wiki/Greek_art",
    "205. [Encyclopedia] World History Encyclopedia. 'Greek Art.' https://www.worldhistory.org/Greek_Art/",
    "206. [Encyclopedia] Encyclopedia Britannica. 'Mystery Religion.' https://www.britannica.com/topic/mystery-religion",
    "207. [Wikipedia] 'Greek mythology.' https://en.wikipedia.org/wiki/Greek_mythology",
    "208. [Encyclopedia] World History Encyclopedia. 'Greek Mythology.' https://www.worldhistory.org/Greek_Mythology/",
    "209. [Encyclopedia] Britannica. 'Zeus.' https://www.britannica.com/topic/Zeus",
    "210. [Wikipedia] 'Persecution of pagans in the late Roman Empire.' https://en.wikipedia.org/wiki/Persecution_of_pagans_in_the_late_Roman_Empire",
    "211. [Encyclopedia] Encyclopedia Britannica. 'Anthropomorphism.' https://www.britannica.com/topic/anthropomorphism",
    "212. [Encyclopedia] Britannica. 'Oracle.' https://www.britannica.com/topic/Delphic-oracle",
    "213. [Wikipedia] 'Religion in Ancient Greece.' https://en.wikipedia.org/wiki/Religion_in_ancient_Greece",
    "214. [Academic] Cambridge Core. 'Religion without doctrine or clergy: the case of Ancient Greece'. https://www.cambridge.org/core/journals/journal-of-institutional-economics/article/religion-without-doctrine-or-clergy-the-case-of-ancient-greece/901613496165E373719D3B343E945156",
    "215. [Encyclopedia] Encyclopedia Britannica. 'Roman religion.' https://www.britannica.com/topic/Roman-religion",
    "216. [Wikipedia] 'Jupiter (mythology).' https://en.wikipedia.org/wiki/Jupiter_(mythology)",
    "217. [Encyclopedia] World History Encyclopedia. 'Roman Religion.' https://www.worldhistory.org/Roman_Religion/",
    "218. [Reference] Goodreads. 'Religions of Rome: Volume 1'. https://www.goodreads.com/book/show/167946.Religions_of_Rome_Volume_1",
    "219. [Encyclopedia] Encyclopedia Britannica. 'Roman law.' https://www.britannica.com/topic/Roman-law",
    "220. [Wikipedia] 'Roman mythology.' https://en.wikipedia.org/wiki/Roman_mythology",
    "221. [Encyclopedia] World History Encyclopedia. 'Roman Mythology.' https://www.worldhistory.org/Roman_Mythology/",
    "222. [Wikipedia] 'Founding of Rome.' https://en.wikipedia.org/wiki/Founding_of_Rome",
    "223. [Wikipedia] 'Interpretatio graeca.' https://en.wikipedia.org/wiki/Interpretatio_graeca",
    "224. [Wikipedia] 'Augur.' https://en.wikipedia.org/wiki/Augur",
    "225. [Encyclopedia] World History Encyclopedia. 'Imperial Cult of Ancient Rome.' https://www.worldhistory.org/Roman_Imperial_Cult/",
    "226. [Encyclopedia] New Advent, Catholic Encyclopedia. 'Theodosius I.' https://www.newadvent.org/cathen/14577d.htm",
    "227. [Wikipedia] 'Religion in ancient Rome.' https://en.wikipedia.org/wiki/Religion_in_ancient_Rome",
    "228. [Academic] Pew Research Center. 'Buddhists.' https://www.pewresearch.org/religion/2012/12/18/global-religious-landscape-buddhist/",
    "229. [Encyclopedia] Britannica. 'Nirvana.' https://www.britannica.com/topic/nirvana-religion",
    "230. [Encyclopedia] Britannica. 'Buddhism.' https://www.britannica.com/topic/Buddhism",
    "231. [Academic] Stanford Encyclopedia of Philosophy. 'Ethics in Indian Buddhism.' https://plato.stanford.edu/entries/ethics-indian-buddhism/",
    "232. [Wikipedia] 'Buddhist meditation.' https://en.wikipedia.org/wiki/Buddhist_meditation",
    "233. [Academic] Yamabe. Concentration and Visualization Techniques in Buddhist Meditation. The Oxford Handbook of Meditation, 2021. https://doi.org/10.1093/oxfordhb/9780198808640.013.19",
    "234. [Wikipedia] 'Five precepts.' https://en.wikipedia.org/wiki/Five_precepts",
    "235. [Academic] IEP. 'Jain Philosophy.' https://iep.utm.edu/jain/",
    "236. [Encyclopedia] Britannica. 'Karma.' https://www.britannica.com/topic/karma",
    "237. [Academic] Stanford Encyclopedia of Philosophy. 'The Buddha.' https://plato.stanford.edu/entries/buddha/",
    "238. [News] PBS. 'Buddhism and Peace.' https://www.pbs.org/edens/thailand/buddhism.htm",
    "239. [Wikipedia] 'Schools of Buddhism.' https://en.wikipedia.org/wiki/Schools_of_Buddhism",
    "240. [Reference] BBC Religions. 'Theravada Buddhism.' https://www.bbc.co.uk/religion/religions/buddhism/subdivisions/theravada_1.shtml",
    "241. [Academic] Polak. Does the not-Self (anattā) teaching in the Nikāyas presuppose the existence of a special type of consciousness?. Argument: Biannual Philosophical Journal, 2022. https://doi.org/10.24917/20841043.12.1.08",
    "242. [Wikipedia] 'Anattā.' https://en.wikipedia.org/wiki/Anatt%C4%81",
    "243. [Wikipedia] 'Early Buddhist texts.' https://en.wikipedia.org/wiki/Early_Buddhist_texts",
    "244. [Academic] Burley. Conundrums of Buddhist Cosmology and Psychology. Numen, 2017. https://doi.org/10.1163/15685276-12341470",
    "245. [Wikipedia] 'Buddhist cosmology.' https://en.wikipedia.org/wiki/Buddhist_cosmology",
    "246. [Wikipedia] 'Buddhist monasticism.' https://en.wikipedia.org/wiki/Buddhist_monasticism",
    "247. [Wikipedia] 'Theravada.' https://en.wikipedia.org/wiki/Theravada",
    "248. [Encyclopedia] Encyclopaedia Britannica. 'Theravada.' https://www.britannica.com/topic/Theravada",
    "249. [Wikipedia] 'Mahayana.' https://en.wikipedia.org/wiki/Mahayana",
    "250. [Encyclopedia] Encyclopaedia Britannica. 'Mahayana.' https://www.britannica.com/topic/Mahayana",
    "251. [Reference] BBC Religions. 'Mahayana Buddhism.' https://www.bbc.co.uk/religion/religions/buddhism/subdivisions/mahayana.shtml",
    "252. [Wikipedia] 'Pure Land Buddhism.' https://en.wikipedia.org/wiki/Pure_Land_Buddhism",
    "253. [Encyclopedia] Encyclopaedia Britannica. 'Pure Land Buddhism.' https://www.britannica.com/topic/Pure-Land-Buddhism",
    "254. [Wikipedia] 'Jōdo Shinshū.' https://en.wikipedia.org/wiki/J%C5%8Ddo_Shinsh%C5%AB",
    "255. [Academic] Stanford Encyclopedia of Philosophy. 'Japanese Pure Land Philosophy.' https://plato.stanford.edu/entries/japanese-pure-land/",
    "256. [Wikipedia] 'Zen.' https://en.wikipedia.org/wiki/Zen",
    "257. [Academic] Stanford Encyclopedia of Philosophy. 'Japanese Zen Buddhist Philosophy.' https://plato.stanford.edu/entries/japanese-zen/",
    "258. [Wikipedia] 'Nichiren Buddhism.' https://en.wikipedia.org/wiki/Nichiren_Buddhism",
    "259. [Encyclopedia] Encyclopaedia Britannica. 'Nichiren Buddhism.' https://www.britannica.com/topic/Nichiren-Buddhism",
    "260. [Wikipedia] 'Soka Gakkai.' https://en.wikipedia.org/wiki/Soka_Gakkai",
    "261. [Wikipedia] 'Vajrayana.' https://en.wikipedia.org/wiki/Vajrayana",
    "262. [Encyclopedia] Encyclopaedia Britannica. 'Vajrayana.' https://www.britannica.com/topic/Vajrayana",
    "263. [Wikipedia] 'Tibetan Buddhism.' https://en.wikipedia.org/wiki/Tibetan_Buddhism",
    "264. [Wikipedia] 'Navayana.' https://en.wikipedia.org/wiki/Navayana",
    "265. [Wikipedia] 'Human potential movement.' https://en.wikipedia.org/wiki/Human_Potential_Movement",
    "266. [Primary Source] Pontifical Councils. Jesus Christ the Bearer of the Water of Life: A Christian reflection on the New Age. Holy See. https://www.vatican.va/roman_curia/pontifical_councils/interelg/documents/rc_pc_interelg_doc_20030203_new-age_en.html",
    "267. [Wikipedia] 'Nature religion.' https://en.wikipedia.org/wiki/Nature_religion",
    "268. [Wikipedia] 'Alternative medicine.' Including holistic claims. https://en.wikipedia.org/wiki/Alternative_medicine",
    "269. [Encyclopedia] Encyclopedia.com. 'New Religious Movements and Women.' https://www.encyclopedia.com/environment/encyclopedias-almanacs-transcripts-and-maps/new-religious-movements-new-religious-movements-and-women",
    "270. [Wikipedia] 'Perennial philosophy.' https://en.wikipedia.org/wiki/Perennial_philosophy",
    "271. [Academic] NIH News in Health. 'Mindfulness for Your Health.' https://newsinhealth.nih.gov/2021/06/mindfulness-your-health",
    "272. [Wikipedia] 'New Age.' https://en.wikipedia.org/wiki/New_Age",
    "273. [Encyclopedia] Britannica. 'Gerald Gardner.' https://www.britannica.com/biography/Gerald-Brousseau-Gardner",
    "274. [Wikipedia] 'Energy medicine.' https://en.wikipedia.org/wiki/Energy_medicine",
    "275. [Academic] Reiki. National Center for Complementary and Integrative Health. https://www.nccih.nih.gov/health/reiki",
    "276. [Apologetics] GotQuestions.org. 'What is the New Age movement?' https://www.gotquestions.org/New-Age-movement.html",
    "277. [Academic] Cowan, Douglas. 'Cults and New Religions: A Brief History.' Wiley-Blackwell, 2007. https://www.amazon.com/Cults-New-Religions-Brief-History/dp/1405161272",
    "278. [Academic] Dawson, Lorne L. 'Comprehending Cults: The Sociology of New Religious Movements.' Oxford University Press. https://www.amazon.com/Comprehending-Cults-Sociology-Religious-Movements/dp/0195420098",
    "279. [Reference] BBC. 'Sikhism at a Glance.' https://www.bbc.co.uk/religion/religions/sikhism/ataglance/glance.shtml",
    "280. [Wikipedia] 'Namdhari.' https://en.wikipedia.org/wiki/Namdhari",
    "281. [Encyclopedia] Encyclopaedia Britannica. 'Namdhari.' https://www.britannica.com/topic/Namdhari",
    "282. [Wikipedia] 'Nihang.' https://en.wikipedia.org/wiki/Nihang",
    "283. [Wikipedia] 'Udasi.' https://en.wikipedia.org/wiki/Udasi",
    "284. [Encyclopedia] Encyclopaedia Britannica. 'Udasi.' https://www.britannica.com/topic/Udasi",
    "285. [Encyclopedia] Encyclopaedia Britannica. 'Sikhism.' https://www.britannica.com/topic/Sikhism",
    "286. [Reference] SikhiWiki. 'Waheguru.' https://www.sikhiwiki.org/index.php/Waheguru",
    "287. [Wikipedia] 'Langar (Sikhism).' https://en.wikipedia.org/wiki/Langar_(Sikhism)",
    "288. [Reference] BBC Religions. 'Guru Nanak.' https://www.bbc.co.uk/religion/religions/sikhism/people/nanak.shtml",
    "289. [Wikipedia] 'Women in Sikhism.' https://en.wikipedia.org/wiki/Women_in_Sikhism",
    "290. [Primary Source] SikhiWiki. 'Seva: Selfless Service.' https://www.sikhiwiki.org/index.php/Seva",
    "291. [Christian Source] SikhiWiki. 'Kirat Karni.' https://www.sikhiwiki.org/index.php/Kirat_Karni",
    "292. [Wikipedia] 'Guru Tegh Bahadur.' Executed in 1675 after defending the religious freedom of Kashmiri Hindus. https://en.wikipedia.org/wiki/Guru_Tegh_Bahadur",
    "293. [Academic] Stanford Encyclopedia of Philosophy. 'Religious Diversity (Pluralism).' https://plato.stanford.edu/entries/religious-pluralism/",
    "294. [Wikipedia] 'Sikhism.' https://en.wikipedia.org/wiki/Sikhism",
    "295. [Apologetics] What is Sikhism? GotQuestions.org. https://www.gotquestions.org/Sikhism.html",
    "296. [Wikipedia] 'Reincarnation.' https://en.wikipedia.org/wiki/Reincarnation",
    "297. [Wikipedia] 'Janamsakhis.' https://en.wikipedia.org/wiki/Janamsakhis",
    "298. [Academic] Singh, Nikky-Guninder Kaur. 'Sikhism: An Introduction.' I.B. Tauris, 2011. https://www.amazon.com/Sikhism-Introduction-Nikky-Guninder-Kaur-Singh/dp/1848853211",
    "299. [Encyclopedia] Britannica. 'Adi Granth.' https://www.britannica.com/topic/Adi-Granth-Sikh-sacred-scripture",
    "300. [Encyclopedia] Encyclopedia Britannica. 'Jainism.' https://www.britannica.com/topic/Jainism",
    "301. [Wikipedia] 'Digambara.' https://en.wikipedia.org/wiki/Digambara",
    "302. [Wikipedia] 'Śvetāmbara.' https://en.wikipedia.org/wiki/%C5%9Avet%C4%81mbara",
    "303. [Encyclopedia] Encyclopaedia Britannica. 'Shvetambara.' https://www.britannica.com/topic/Shvetambara",
    "304. [Encyclopedia] World History Encyclopedia. 'Jainism.' https://www.worldhistory.org/Jainism/",
    "305. [Reference] BBC Religions. 'Jainism.' https://www.bbc.co.uk/religion/religions/jainism/",
    "306. [Wikipedia] 'Sthanakvasi.' https://en.wikipedia.org/wiki/Sthanakvasi",
    "307. [Wikipedia] 'Terapanth.' https://en.wikipedia.org/wiki/Terapanth",
    "308. [Reference] BBC. 'Ahimsa.' https://www.bbc.co.uk/religion/religions/jainism/living/ahimsa_1.shtml",
    "309. [Academic] Yale Forum on Religion and Ecology. 'Jainism.' https://fore.yale.edu/World-Religions/Jainism",
    "310. [Wikipedia] 'Five Vows (Jain ethics).' https://en.wikipedia.org/wiki/Jain_ethics",
    "311. [Encyclopedia] Britannica. 'Mahavira (Vardhamana).' https://www.britannica.com/biography/Vardhamana",
    "312. [Encyclopedia] Britannica. 'Dana.' https://www.britannica.com/topic/almsgiving",
    "313. [Academic] Soni, Luitgard. 'Jaina Modes of Dying in Aradhana Texts.' International Journal of Jaina Studies 10.2 (2014). https://jainastudies.soas.ac.uk/ijjs/ijjs-1002-2014.pdf",
    "314. [Encyclopedia] Britannica. 'Sallekhana.' https://www.britannica.com/topic/sallekhana",
    "315. [Wikipedia] 'Ahimsa in Jainism.' https://en.wikipedia.org/wiki/Ahimsa_in_Jainism",
    "316. [Academic] Cort, John E. 'Jain Doctrine and Practice.' Oxford University Press, 2016. https://global.oup.com/academic/product/jain-doctrine-and-practice-9780199460555",
    "317. [Encyclopedia] New World Encyclopedia. 'Jainism.' https://www.newworldencyclopedia.org/entry/Jainism",
    "318. [Academic] Dundas, Paul. 'The Jains.' Routledge, 2002. https://www.amazon.com/Jains-Library-Religious-Beliefs-Practices/dp/0415266068",
    "319. [Wikipedia] 'Jain Monasticism.' https://en.wikipedia.org/wiki/Jain_monasticism",
    "320. [Encyclopedia] Britannica. 'Bahá'í Faith'. https://www.britannica.com/topic/Bahai-Faith",
    "321. [Christian Source] Bahá'í International Community. 'One Human Family.' https://www.bahai.org/beliefs/essential-relationships/one-human-family",
    "322. [Wikipedia] 'Baháʼí Faith and the Unity of Religion.' https://en.wikipedia.org/wiki/Bah%C3%A1%CA%BC%C3%AD_Faith_and_the_unity_of_religion",
    "323. [Christian Source] Bahai.org. 'Beliefs.' https://www.bahai.org/beliefs/",
    "324. [Wikipedia] 'Baháʼí Faith and education.' https://en.wikipedia.org/wiki/Bah%C3%A1%CA%BC%C3%AD_Faith_and_education",
    "325. [Christian Source] Bahá'í International Community. 'Universal Peace.' https://www.bahai.org/beliefs/universal-peace/",
    "326. [Wikipedia] 'Baháʼí Faith and the Unity of Humanity.' https://en.wikipedia.org/wiki/Bah%C3%A1%CA%BC%C3%AD_Faith_and_the_unity_of_humanity",
    "327. [Wikipedia] 'Baháʼí views on science.' https://en.wikipedia.org/wiki/Bah%C3%A1%CA%BC%C3%AD_Faith_and_science",
    "328. [Academic] Houghton. Science and Religion: how can the Bahá’í Faith contribute to the existing discourse?. Baha i Studies Review, 2025. https://doi.org/10.67743/e20251221",
    "329. [Reference] Stockman. 'Progressive Revelation'. https://bahai-library.com/stockman_encyclopedia_progressive_revelation",
    "330. [Wikipedia] 'Manifestation of God.' https://en.wikipedia.org/wiki/Manifestation_of_God",
    "331. [Academic] Terry, Peter. 'Some Chronological Issues in the Lawh-i-Hikmat of Bahá'u'lláh.' Lights of Irfán 1 (2000). https://bahai-library.com/terry_chronological_issues_hikmat",
    "332. [Christian Source] Bahaipedia. 'Lesser Peace.' https://bahaipedia.org/Lesser_Peace",
    "333. [Wikipedia] 'Bahai Administration.' https://en.wikipedia.org/wiki/Bahai_administration",
    "334. [Wikipedia] 'Confucianism.' https://en.wikipedia.org/wiki/Confucianism",
    "335. [Academic] Stanford Encyclopedia of Philosophy. 'Confucius.' https://plato.stanford.edu/entries/confucius/",
    "336. [Academic] Pew Research Center. 'Folk Religionists.' https://www.pewresearch.org/religion/2012/12/18/global-religious-landscape-folk/",
    "337. [Encyclopedia] Britannica. 'Ren.' https://www.britannica.com/topic/ren",
    "338. [Encyclopedia] Britannica. 'Junzi.' https://www.britannica.com/topic/junzi",
    "339. [Wikipedia] 'Neo-Confucianism.' https://en.wikipedia.org/wiki/Neo-Confucianism",
    "340. [Academic] Stanford Encyclopedia of Philosophy. 'Zhu Xi.' https://plato.stanford.edu/entries/zhu-xi/",
    "341. [Academic] Stanford Encyclopedia of Philosophy. 'Wang Yangming.' https://plato.stanford.edu/entries/wang-yangming/",
    "342. [Wikipedia] 'New Confucianism.' https://en.wikipedia.org/wiki/New_Confucianism",
    "343. [Encyclopedia] World History Encyclopedia. 'Confucianism.' https://www.worldhistory.org/Confucianism/",
    "344. [Wikipedia] 'Filial piety.' https://en.wikipedia.org/wiki/Filial_piety",
    "345. [Academic] Stanford Encyclopedia of Philosophy. 'Ethics in Chinese Tradition.' https://plato.stanford.edu/entries/ethics-chinese/",
    "346. [Encyclopedia] Britannica. 'Mencius.' https://www.britannica.com/biography/Mencius-Chinese-philosopher",
    "347. [Encyclopedia] World History Encyclopedia. 'Confucius.' https://www.worldhistory.org/Confucius/",
    "348. [Academic] Internet Encyclopedia of Philosophy. 'Confucius.' https://iep.utm.edu/confucius/",
    "349. [Wikipedia] 'Three Obediences and Four Virtues.' https://en.wikipedia.org/wiki/Three_Obediences_and_Four_Virtues",
    "350. [Academic] Stanford Encyclopedia of Philosophy. 'Xunzi.' https://plato.stanford.edu/entries/xunzi/",
    "351. [Academic] De Bary, Wm. Theodore. 'The Trouble with Confucianism.' Harvard University Press, 1991. https://www.hup.harvard.edu/books/9780674910164",
    "352. [Wikipedia] 'Analects.' https://en.wikipedia.org/wiki/Analects",
    "353. [Academic] Oxford Bibliographies. 'Ancestor Worship.' https://www.oxfordbibliographies.com/display/document/obo-9780199920082/obo-9780199920082-0171.xml",
    "354. [Academic] Stanford Encyclopedia of Philosophy. 'Daoism.' https://plato.stanford.edu/entries/daoism/",
    "355. [Wikipedia] 'Way of the Celestial Masters.' https://en.wikipedia.org/wiki/Way_of_the_Celestial_Masters",
    "356. [Encyclopedia] Encyclopaedia Britannica. 'Tianshi.' https://www.britannica.com/topic/Tianshi",
    "357. [Wikipedia] 'Zhengyi Dao.' https://en.wikipedia.org/wiki/Zhengyi_Dao",
    "358. [Wikipedia] 'Quanzhen School.' https://en.wikipedia.org/wiki/Quanzhen_School",
    "359. [Encyclopedia] Encyclopaedia Britannica. 'Quanzhen.' https://www.britannica.com/topic/Quanzhen",
    "360. [Encyclopedia] World History Encyclopedia. 'Taoism.' https://www.worldhistory.org/Taoism/",
    "361. [Academic] 'Daoist Philosophy.' Internet Encyclopedia of Philosophy. https://iep.utm.edu/daoismdaoist-philosophy/",
    "362. [Wikipedia] 'Taoism.' https://en.wikipedia.org/wiki/Taoism",
    "363. [Wikipedia] 'Tao Te Ching.' https://en.wikipedia.org/wiki/Tao_Te_Ching",
    "364. [Primary Source] Tao Te Ching, trans. James Legge. Internet Sacred Text Archive. https://sacred-texts.com/tao/taote.htm",
    "365. [Wikipedia] 'Wu Wei.' https://en.wikipedia.org/wiki/Wu_wei",
    "366. [Wikipedia] 'Yin and Yang.' https://en.wikipedia.org/wiki/Yin_and_yang",
    "367. [Wikipedia] 'Taoist Meditation.' https://en.wikipedia.org/wiki/Taoist_meditation",
    "368. [Wikipedia] 'Three Treasures (taoism).' https://en.wikipedia.org/wiki/Three_Treasures_(Taoism)",
    "369. [Academic] New World Encyclopedia. 'Taoism.' https://www.newworldencyclopedia.org/entry/Taoism",
    "370. [Encyclopedia] Encyclopedia Britannica. 'Daodejing.' https://www.britannica.com/topic/Tao-te-Ching",
    "371. [Academic] Stanford Encyclopedia of Philosophy. 'Laozi.' https://plato.stanford.edu/entries/laozi/",
    "372. [Encyclopedia] Britannica. 'Wuwei (Chinese Philosophy).' https://www.britannica.com/topic/wuwei-Chinese-philosophy",
    "373. [Reference] Khan Academy. 'Daoism.' https://www.khanacademy.org/humanities/world-history/ancient-medieval/classical-china/a/daoism",
    "374. [Wikipedia] 'Tao.' https://en.wikipedia.org/wiki/Tao",
    "375. [Wikipedia] 'Chinese folk religion.' https://en.wikipedia.org/wiki/Chinese_folk_religion",
    "376. [Encyclopedia] Encyclopaedia Britannica. 'Chinese religion.' https://www.britannica.com/topic/Chinese-religion",
    "377. [Wikipedia] 'Chinese ancestor veneration.' https://en.wikipedia.org/wiki/Chinese_ancestor_veneration",
    "378. [Encyclopedia] Encyclopaedia Britannica. 'Ancestor worship.' https://www.britannica.com/topic/ancestor-worship",
    "379. [Wikipedia] 'Mazu.' https://en.wikipedia.org/wiki/Mazu",
    "380. [Wikipedia] 'Guan Yu.' https://en.wikipedia.org/wiki/Guan_Yu",
    "381. [Encyclopedia] Britannica. 'Shrine Shinto.' https://www.britannica.com/topic/Shrine-Shinto",
    "382. [Wikipedia] 'Sect Shinto.' https://en.wikipedia.org/wiki/Sect_Shinto",
    "383. [Encyclopedia] Encyclopaedia Britannica. 'Kyōha Shintō.' https://www.britannica.com/topic/Kyoha-Shinto",
    "384. [Wikipedia] 'State Shinto.' https://en.wikipedia.org/wiki/State_Shinto",
    "385. [Encyclopedia] Encyclopaedia Britannica. 'State Shinto.' https://www.britannica.com/topic/State-Shinto",
    "386. [Encyclopedia] World History Encyclopedia. 'Shinto.' https://www.worldhistory.org/Shinto/",
    "387. [Reference] BBC Religions. 'Shinto: Kami.' https://www.bbc.co.uk/religion/religions/shinto/beliefs/kami_1.shtml",
    "388. [Reference] Japan Guide. 'Shinto.' https://www.japan-guide.com/e/e2056.html",
    "389. [Encyclopedia] New World Encyclopedia. 'Shinto: Ethics and Thought.' https://www.newworldencyclopedia.org/entry/Shinto#Ethics",
    "390. [Wikipedia] 'Matsuri.' https://en.wikipedia.org/wiki/Matsuri",
    "391. [Wikipedia] 'Shinto.' https://en.wikipedia.org/wiki/Shinto",
    "392. [Wikipedia] 'Kami.' https://en.wikipedia.org/wiki/Kami",
    "393. [Wikipedia] 'Shinbutsu-shugo.' The historical fusion of Shinto and Buddhism. https://en.wikipedia.org/wiki/Shinbutsu-sh%C5%ABg%C5%8D",
    "394. [Wikipedia] 'Animism.' https://en.wikipedia.org/wiki/Animism",
    "395. [Reference] 'BBC - Religions - Shinto: Shinto and nationalism.' BBC. https://www.bbc.co.uk/religion/religions/shinto/history/nationalism_1.shtml",
    "396. [Wikipedia] 'Shinto Directive.' https://en.wikipedia.org/wiki/Shinto_Directive",
    "397. [Apologetics] GotQuestions.org. 'What does the Bible say about ancestor worship?' https://www.gotquestions.org/ancestor-worship.html",
    "398. [Reference] BBC Religions. 'Shinto.' Including purification rites. https://www.bbc.co.uk/religion/religions/shinto/",
    "399. [Wikipedia] 'Harae.' https://en.wikipedia.org/wiki/Harae",
    "400. [Encyclopedia] Britannica. 'Shinto.' https://www.britannica.com/topic/Shinto",
    "401. [Encyclopedia] New World Encyclopedia. 'Rastafari Movement.' https://www.newworldencyclopedia.org/entry/Rastafari_movement",
    "402. [Apologetics] GotQuestions.org. 'What is Rastafarianism?' https://www.gotquestions.org/Rastafarianism.html",
    "403. [Reference] BBC Religions. 'Rastafari.' https://www.bbc.co.uk/religion/religions/rastafari/",
    "404. [Wikipedia] 'Bob Marley.' https://en.wikipedia.org/wiki/Bob_Marley",
    "405. [Reference] BBC. 'Rastafari Customs.' https://www.bbc.co.uk/religion/religions/rastafari/customs/customs_1.shtml",
    "406. [Reference] BBC. 'Rastafari Beliefs.' https://www.bbc.co.uk/religion/religions/rastafari/beliefs/beliefs_1.shtml",
    "407. [Reference] BBC Religions. 'Rastafari: Rastafarian history.' https://www.bbc.co.uk/religion/religions/rastafari/history/history.shtml",
    "408. [Wikipedia] 'Ital.' https://en.wikipedia.org/wiki/Ital",
    "409. [Academic] Hemispheric Institute. 'Rastafari, Reggae, and Resistance.' https://hemisphericinstitute.org/en/emisferica-21/2-1-review-essays/rastafari-reggae-and-resistance-by-katrina-lacey.html",
    "410. [Reference] BBC. 'Rastafari at a Glance.' https://www.bbc.co.uk/religion/religions/rastafari/ataglance/glance.shtml",
    "411. [Wikipedia] 'Haile Selassie.' https://en.wikipedia.org/wiki/Haile_Selassie",
    "412. [Reference] Biography.com. 'Haile Selassie I.' https://www.biography.com/political-figures/haile-selassie-i",
    "413. [Encyclopedia] Britannica. 'Ethiopianism.' https://www.britannica.com/topic/Ethiopianism",
    "414. [Wikipedia] 'Cannabis (drug).' https://en.wikipedia.org/wiki/Cannabis_(drug)",
    "415. [Wikipedia] 'Rastafari Movement.' https://en.wikipedia.org/wiki/Rastafari_movement",
    "416. [Wikipedia] 'Mansions of Rastafari.' https://en.wikipedia.org/wiki/Mansions_of_Rastafari",
    "417. [Reference] BBC Religions. 'Zoroastrianism.' https://www.bbc.co.uk/religion/religions/zoroastrian/",
    "418. [Reference] BBC. 'Zoroaster.' https://www.bbc.co.uk/religion/religions/zoroastrian/history/zoroaster_1.shtml",
    "419. [Wikipedia] 'Parsis.' Including their demographic decline. https://en.wikipedia.org/wiki/Parsis",
    "420. [Encyclopedia] Britannica. 'Parsi.' https://www.britannica.com/topic/Parsi",
    "421. [Wikipedia] 'Iranis (India).' https://en.wikipedia.org/wiki/Iranis_(India)",
    "422. [Wikipedia] 'Zoroastrian calendar.' https://en.wikipedia.org/wiki/Zoroastrian_calendar",
    "423. [Encyclopedia] Britannica. 'Ahura Mazda.' https://www.britannica.com/topic/Ahura-Mazda",
    "424. [Wikipedia] 'Asha.' https://en.wikipedia.org/wiki/Asha",
    "425. [Encyclopedia] World History Encyclopedia. 'Zoroastrianism.' https://www.worldhistory.org/Zoroastrianism/",
    "426. [Reference] BBC. 'Zoroastrian God.' https://www.bbc.co.uk/religion/religions/zoroastrian/beliefs/god.shtml",
    "427. [Academic] Encyclopaedia Iranica. 'SAOŠYANT.' https://www.iranicaonline.org/articles/saosyant",
    "428. [Wikipedia] 'Saoshyant.' https://en.wikipedia.org/wiki/Saoshyant",
    "429. [Wikipedia] 'Fire Temple.' https://en.wikipedia.org/wiki/Fire_temple",
    "430. [Wikipedia] 'Zoroastrianism.' https://en.wikipedia.org/wiki/Zoroastrianism",
    "431. [Wikipedia] 'Dualistic Cosmology.' https://en.wikipedia.org/wiki/Dualistic_cosmology",
    "432. [Encyclopedia] Britannica. 'Gatha.' https://www.britannica.com/topic/Gatha-Zoroastrian-literature",
    "433. [Encyclopedia] Encyclopedia Britannica. 'The Avesta.' https://www.britannica.com/topic/Avesta-Zoroastrian-scripture",
    "434. [Reference] BBC. 'Zoroastrian Worship.' https://www.bbc.co.uk/religion/religions/zoroastrian/worship/worship.shtml",
    "435. [Wikipedia] 'Zoroastrian Eschatology.' https://en.wikipedia.org/wiki/Zoroastrian_eschatology",
    "436. [Academic] De Jong. Ahriman. The Encyclopedia of Ancient History, 2012. https://doi.org/10.1002/9781444338386.wbeah17018",
    "437. [Wikipedia] 'Ahriman.' https://en.wikipedia.org/wiki/Ahriman",
    "438. [Wikipedia] 'Manichaeism.' https://en.wikipedia.org/wiki/Manichaeism",
    "439. [Encyclopedia] Encyclopaedia Britannica. 'Manichaeism.' https://www.britannica.com/topic/Manichaeism",
    "440. [Wikipedia] 'Mani (prophet).' https://en.wikipedia.org/wiki/Mani_(prophet)",
    "441. [Encyclopedia] Encyclopedia of Religion (via Encyclopedia.com). 'Manichaeism: An Overview.' https://www.encyclopedia.com/environment/encyclopedias-almanacs-transcripts-and-maps/manichaeism-overview",
    "442. [Wikipedia] 'Gnosticism.' https://en.wikipedia.org/wiki/Gnosticism",
    "443. [Encyclopedia] Encyclopaedia Britannica. 'Gnosticism.' https://www.britannica.com/topic/Gnosticism",
    "444. [Encyclopedia] World History Encyclopedia. 'Gnosticism.' https://www.worldhistory.org/Gnosticism/",
    "445. [Wikipedia] 'Demiurge.' https://en.wikipedia.org/wiki/Demiurge",
    "446. [Wikipedia] 'Nag Hammadi library.' https://en.wikipedia.org/wiki/Nag_Hammadi_library",
    "447. [Wikipedia] 'Traditional African religions.' https://en.wikipedia.org/wiki/Traditional_African_religions",
    "448. [Academic] Stanford Encyclopedia of Philosophy. 'African Religion.' https://plato.stanford.edu/entries/african-religion/",
    "449. [Wikipedia] 'Ancestor veneration.' https://en.wikipedia.org/wiki/Ancestor_veneration",
    "450. [Wikipedia] 'Yoruba religion.' https://en.wikipedia.org/wiki/Yoruba_religion",
    "451. [Encyclopedia] Encyclopedia of Religion (via Encyclopedia.com). 'Yoruba Religion.' https://www.encyclopedia.com/environment/encyclopedias-almanacs-transcripts-and-maps/yoruba-religion",
    "452. [Encyclopedia] Encyclopaedia Britannica. 'Orisha.' https://www.britannica.com/topic/Orisha",
    "453. [Wikipedia] 'Orisha.' https://en.wikipedia.org/wiki/Orisha",
    "454. [Wikipedia] 'Ifá.' https://en.wikipedia.org/wiki/If%C3%A1",
    "455. [Encyclopedia] Encyclopaedia Britannica. 'Santería.' https://www.britannica.com/topic/Santeria",
    "456. [Encyclopedia] Encyclopaedia Britannica. 'Candomblé.' https://www.britannica.com/topic/Candomble",
    "457. [Reference] BBC Religions. 'Santeria.' https://www.bbc.co.uk/religion/religions/santeria/",
    "458. [Reference] BBC Religions. 'Candomblé.' https://www.bbc.co.uk/religion/religions/candomble/",
    "459. [Wikipedia] 'Santería.' https://en.wikipedia.org/wiki/Santer%C3%ADa",
    "460. [Wikipedia] 'Candomblé.' https://en.wikipedia.org/wiki/Candombl%C3%A9",
    "461. [Academic] Weber. Haitian Vodou and Ecotheology. The Ecumenical Review, 2018. https://doi.org/10.1111/erev.12393",
    "462. [Wikipedia] 'Haitian Vodou.' https://en.wikipedia.org/wiki/Haitian_Vodou",
    "463. [Wikipedia] 'West African Vodun.' https://en.wikipedia.org/wiki/West_African_Vodun",
    "464. [Encyclopedia] 'African Diaspora.' Encyclopedia.com. https://www.encyclopedia.com/social-sciences-and-law/anthropology-and-archaeology/human-evolution/african-diaspora",
    "465. [Wikipedia] 'African diaspora religions.' https://en.wikipedia.org/wiki/African_diaspora_religions",
    "466. [Wikipedia] 'Houngan.' https://en.wikipedia.org/wiki/Houngan",
    "467. [Wikipedia] 'Bois Caïman.' https://en.wikipedia.org/wiki/Bois_Ca%C3%AFman",
    "468. [Wikipedia] 'Mambo (vodou).' https://en.wikipedia.org/wiki/Mambo_(Vodou)",
    "469. [Reference] Black History Month. 'Honouring Ancestors in Haiti and Africa.' https://www.blackhistorymonth.org.uk/article/section/african-history/honouring-ancestors-a-sacred-tradition-in-haiti-africa-and-latin-america/",
    "470. [Wikipedia] 'Catholic Church in Haiti.' https://en.wikipedia.org/wiki/Catholic_Church_in_Haiti",
    "471. [Wikipedia] 'Spirit Possession.' https://en.wikipedia.org/wiki/Spirit_possession",
    "472. [Wikipedia] 'Bokor.' https://en.wikipedia.org/wiki/Bokor",
    "473. [Wikipedia] 'Lwa, the Vodou Spirits.' https://en.wikipedia.org/wiki/Lwa",
    "474. [Encyclopedia] Britannica. 'Lwa.' https://www.britannica.com/topic/lwa-Vodou",
    "475. [Reference] Visit Haiti. 'Haitian Vodou Revealed: Secret Societies and Dark Magic.' https://visithaiti.com/art-culture/haitian-vodou-revealed/",
    "476. [Encyclopedia] Encyclopedia.com. 'Voodoo.' https://www.encyclopedia.com/philosophy-and-religion/other-religious-beliefs-and-general-terms/miscellaneous-religion/voodoo",
    "477. [Encyclopedia] World History Encyclopedia. 'Norse Mythology.' https://www.worldhistory.org/Norse_Mythology/",
    "478. [Encyclopedia] World History Encyclopedia. 'Edda.' https://www.worldhistory.org/Edda/",
    "479. [Wikipedia] 'Saga.' https://en.wikipedia.org/wiki/Saga",
    "480. [Primary Source] Hovamol, The Poetic Edda, trans. H. A. Bellows (1936). Internet Sacred Text Archive. https://sacred-texts.com/neu/poe/poe04.htm",
    "481. [Wikipedia] 'Hávamál.' https://en.wikipedia.org/wiki/H%C3%A1vam%C3%A1l",
    "482. [Wikipedia] 'Völva (Seeress).' https://en.wikipedia.org/wiki/V%C3%B6lva",
    "483. [Wikipedia] 'Vanir.' https://en.wikipedia.org/wiki/Vanir",
    "484. [News] The Guardian. 'Norse Mythology by Neil Gaiman review.' https://www.theguardian.com/books/2017/mar/29/norse-myths-by-neil-gaiman-review",
    "485. [Encyclopedia] Britannica. 'Thing (Scandinavian Assembly).' https://www.britannica.com/topic/thing-Scandinavian-political-assembly",
    "486. [Wikipedia] 'Christianization of Scandinavia.' https://en.wikipedia.org/wiki/Christianization_of_Scandinavia",
    "487. [Wikipedia] 'Valhalla.' https://en.wikipedia.org/wiki/Valhalla",
    "488. [Encyclopedia] World History Encyclopedia. 'Valhalla.' https://www.worldhistory.org/Valhalla/",
    "489. [Encyclopedia] Britannica. 'The Fate of the Norns.' https://www.britannica.com/topic/Norn",
    "490. [Wikipedia] 'Poetic Edda.' https://en.wikipedia.org/wiki/Poetic_Edda",
    "491. [Wikipedia] 'Snorri Sturluson.' The 13th-century Christian compiler of Norse myth. https://en.wikipedia.org/wiki/Snorri_Sturluson",
    "492. [Wikipedia] 'Prose Edda.' https://en.wikipedia.org/wiki/Prose_Edda",
    "493. [Wikipedia] 'Ragnarök.' https://en.wikipedia.org/wiki/Ragnar%C3%B6k",
    "494. [Encyclopedia] World History Encyclopedia. 'Ragnarok.' https://www.worldhistory.org/Ragnarok/",
    "495. [Encyclopedia] World History Encyclopedia. 'Ancient Celts.' https://www.worldhistory.org/Celts/",
    "496. [Wikipedia] 'Celts.' https://en.wikipedia.org/wiki/Celts",
    "497. [Encyclopedia] World History Encyclopedia. 'Celtic Religion.' https://www.worldhistory.org/Ancient_Celtic_Religion/",
    "498. [Encyclopedia] Britannica. 'Bard.' https://www.britannica.com/art/bard",
    "499. [Wikipedia] 'Otherworld.' https://en.wikipedia.org/wiki/Otherworld",
    "500. [Wikipedia] 'Celtic art.' https://en.wikipedia.org/wiki/Celtic_art",
    "501. [Wikipedia] 'Celtic deities.' https://en.wikipedia.org/wiki/Celtic_deities",
    "502. [Encyclopedia] World History Encyclopedia. 'Samhain.' https://www.worldhistory.org/Samhain/",
    "503. [Wikipedia] 'Samhain.' https://en.wikipedia.org/wiki/Samhain",
    "504. [Wikipedia] 'Human Sacrifice.' https://en.wikipedia.org/wiki/Human_sacrifice",
    "505. [Encyclopedia] Britannica. 'Human sacrifice.' https://www.britannica.com/topic/human-sacrifice",
    "506. [Encyclopedia] Britannica. 'Celt.' https://www.britannica.com/topic/Celt-people",
    "507. [Encyclopedia] New Advent, Catholic Encyclopedia. 'St. Patrick.' https://www.newadvent.org/cathen/11554a.htm",
    "508. [Encyclopedia] Britannica. 'Celtic religion.' https://www.britannica.com/topic/Celtic-religion",
    "509. [Wikipedia] 'Tuatha Dé Danann.' https://en.wikipedia.org/wiki/Tuatha_D%C3%A9_Danann",
    "510. [Wikipedia] 'Druid.' https://en.wikipedia.org/wiki/Druid",
    "511. [Encyclopedia] World History Encyclopedia. 'Druid.' https://www.worldhistory.org/Druid/",
    "512. [Wikipedia] 'Slavic paganism.' https://en.wikipedia.org/wiki/Slavic_paganism",
    "513. [Encyclopedia] Encyclopedia of Religion (via Encyclopedia.com). 'Slavic Religion.' https://www.encyclopedia.com/environment/encyclopedias-almanacs-transcripts-and-maps/slavic-religion",
    "514. [Encyclopedia] Encyclopaedia Britannica. 'Perun.' https://www.britannica.com/topic/Perun",
    "515. [Wikipedia] 'Primary Chronicle.' https://en.wikipedia.org/wiki/Primary_Chronicle",
    "516. [Wikipedia] 'Christianization of Kievan Rus'.' https://en.wikipedia.org/wiki/Christianization_of_Kievan_Rus%27",
    "517. [Wikipedia] 'Perun.' https://en.wikipedia.org/wiki/Perun",
    "518. [Wikipedia] 'Maya religion.' https://en.wikipedia.org/wiki/Maya_religion",
    "519. [Encyclopedia] World History Encyclopedia. 'Maya Religion.' https://www.worldhistory.org/Maya_Religion/",
    "520. [Encyclopedia] Encyclopaedia Britannica. 'Maya.' https://www.britannica.com/topic/Maya-people",
    "521. [Wikipedia] 'Human sacrifice in Maya culture.' https://en.wikipedia.org/wiki/Human_sacrifice_in_Maya_culture",
    "522. [Wikipedia] 'Popol Vuh.' https://en.wikipedia.org/wiki/Popol_Vuh",
    "523. [Encyclopedia] Encyclopaedia Britannica. 'Popol Vuh.' https://www.britannica.com/topic/Popol-Vuh",
    "524. [Encyclopedia] World History Encyclopedia. 'Popol Vuh.' https://www.worldhistory.org/Popol_Vuh/",
    "525. [Primary Source] Allen J. Christenson (trans.). Popol Vuh: The Sacred Book of the Maya. Mesoweb, 2007. https://www.mesoweb.com/publications/Christenson/PopolVuh.pdf",
    "526. [Encyclopedia] World History Encyclopedia. 'Xibalba.' https://www.worldhistory.org/Xibalba/",
    "527. [Wikipedia] 'Xibalba.' https://en.wikipedia.org/wiki/Xibalba",
    "528. [Academic] Takeshi Inomata et al. Monumental architecture at Aguada Fénix and the rise of Maya civilization. Nature, 2020. https://www.nature.com/articles/s41586-020-2343-4",
    "529. [Wikipedia] 'Aguada Fénix.' https://en.wikipedia.org/wiki/Aguada_F%C3%A9nix",
    "530. [Wikipedia] 'San Bartolo (Maya site).' https://en.wikipedia.org/wiki/San_Bartolo_(Maya_site)",
    "531. [Academic] William A. Saturno, David Stuart and Boris Beltrán. Early Maya Writing at San Bartolo, Guatemala. Science, 2006. https://www.science.org/doi/10.1126/science.1122895",
    "532. [Wikipedia] 'Maya calendar.' https://en.wikipedia.org/wiki/Maya_calendar",
    "533. [Wikipedia] 'Maya codices.' https://en.wikipedia.org/wiki/Maya_codices",
    "534. [Wikipedia] 'Diego de Landa.' https://en.wikipedia.org/wiki/Diego_de_Landa",
    "535. [Wikipedia] 'Bartolomé de las Casas.' https://en.wikipedia.org/wiki/Bartolom%C3%A9_de_las_Casas",
    "536. [Encyclopedia] Encyclopaedia Britannica. 'Aztec.' https://www.britannica.com/topic/Aztec",
    "537. [Encyclopedia] World History Encyclopedia. 'Tenochtitlan.' https://www.worldhistory.org/Tenochtitlan/",
    "538. [Encyclopedia] World History Encyclopedia. 'Aztec Civilization.' https://www.worldhistory.org/Aztec_Civilization/",
    "539. [Encyclopedia] World History Encyclopedia. 'Templo Mayor.' https://www.worldhistory.org/Templo_Mayor/",
    "540. [Wikipedia] 'Templo Mayor.' https://en.wikipedia.org/wiki/Templo_Mayor",
    "541. [Encyclopedia] Encyclopaedia Britannica. 'Tlaloc.' https://www.britannica.com/topic/Tlaloc",
    "542. [Encyclopedia] Encyclopaedia Britannica. 'Quetzalcóatl.' https://www.britannica.com/topic/Quetzalcoatl",
    "543. [Encyclopedia] Encyclopaedia Britannica. 'Tezcatlipoca.' https://www.britannica.com/topic/Tezcatlipoca",
    "544. [Wikipedia] 'Aztec religion.' https://en.wikipedia.org/wiki/Aztec_religion",
    "545. [Wikipedia] 'Five Suns.' https://en.wikipedia.org/wiki/Five_Suns",
    "546. [Wikipedia] 'Human sacrifice in Aztec culture.' https://en.wikipedia.org/wiki/Human_sacrifice_in_Aztec_culture",
    "547. [Encyclopedia] World History Encyclopedia. 'Aztec Sacrifice.' https://www.worldhistory.org/Aztec_Sacrifice/",
    "548. [Encyclopedia] World History Encyclopedia. 'Huitzilopochtli.' https://www.worldhistory.org/Huitzilopochtli/",
    "549. [Wikipedia] 'Florentine Codex.' https://en.wikipedia.org/wiki/Florentine_Codex",
    "550. [Primary Source] Bernardino de Sahagún. General History of the Things of New Spain (the Florentine Codex). Library of Congress, World Digital Library. https://www.loc.gov/item/2021667837/",
    "551. [Wikipedia] 'Flower war.' https://en.wikipedia.org/wiki/Flower_war",
    "552. [Wikipedia] 'Tzompantli.' https://en.wikipedia.org/wiki/Tzompantli",
    "553. [News] Smithsonian Magazine. 'Archaeologists Discover 119 More Human Skulls in Aztec Tower.' 2020. https://www.smithsonianmag.com/smart-news/archaeologists-discover-119-more-human-skulls-in-aztec-tower-180977280/",
    "554. [Wikipedia] 'Mictlan.' https://en.wikipedia.org/wiki/Mictlan",
    "555. [Encyclopedia] World History Encyclopedia. 'Mictlan.' https://www.worldhistory.org/Mictlan/",
    "556. [Wikipedia] 'New Fire ceremony.' https://en.wikipedia.org/wiki/New_Fire_ceremony",
    "557. [Wikipedia] 'Our Lady of Guadalupe.' https://en.wikipedia.org/wiki/Our_Lady_of_Guadalupe",
    "558. [Encyclopedia] Encyclopaedia Britannica. 'Inca religion.' https://www.britannica.com/topic/Inca-religion",
    "559. [Encyclopedia] Encyclopaedia Britannica. 'Viracocha.' https://www.britannica.com/topic/Viracocha",
    "560. [Encyclopedia] World History Encyclopedia. 'Inti.' https://www.worldhistory.org/Inti/",
    "561. [Wikipedia] 'Pachamama.' https://en.wikipedia.org/wiki/Pachamama",
    "562. [Encyclopedia] World History Encyclopedia. 'Inca Religion.' https://www.worldhistory.org/Inca_Religion/",
    "563. [Wikipedia] 'Inca religion.' https://en.wikipedia.org/wiki/Inca_religion",
    "564. [Encyclopedia] Encyclopedia of Religion (via Encyclopedia.com). 'Inca Religion.' https://www.encyclopedia.com/environment/encyclopedias-almanacs-transcripts-and-maps/inca-religion",
    "565. [Wikipedia] 'Inti Raymi.' https://en.wikipedia.org/wiki/Inti_Raymi",
    "566. [Wikipedia] 'Inti.' https://en.wikipedia.org/wiki/Inti",
    "567. [Wikipedia] 'Viracocha.' https://en.wikipedia.org/wiki/Viracocha",
    "568. [Wikipedia] 'Capacocha.' https://en.wikipedia.org/wiki/Capacocha",
    "569. [Academic] Andrew S. Wilson et al. Archaeological, radiological, and biological evidence offer insight into Inca child sacrifice. PNAS, 2013. https://www.pnas.org/doi/10.1073/pnas.1305117110",
    "570. [Wikipedia] 'Mummy Juanita.' https://en.wikipedia.org/wiki/Mummy_Juanita",
    "571. [Encyclopedia] Britannica. 'Witchcraft.' https://www.britannica.com/topic/witchcraft",
    "572. [Wikipedia] 'Contemporary Paganism.' https://en.wikipedia.org/wiki/Contemporary_Paganism",
    "573. [Encyclopedia] Britannica. 'Modern Paganism.' https://www.britannica.com/topic/modern-Paganism",
    "574. [Wikipedia] 'Wicca.' Including demographics. https://en.wikipedia.org/wiki/Wicca",
    "575. [Reference] BBC Religions. 'Pagan beliefs.' https://www.bbc.co.uk/religion/religions/paganism/beliefs/beliefs.shtml",
    "576. [Reference] Goddess and Green Man. 'Wicca & Witchcraft.' https://www.goddessandgreenman.co.uk/wicca-witchcraft",
    "577. [Wikipedia] 'Wiccan Rede.' https://en.wikipedia.org/wiki/Wiccan_Rede",
    "578. [Reference] BBC Religions. 'Wicca.' https://www.bbc.co.uk/religion/religions/paganism/subdivisions/wicca.shtml",
    "579. [Wikipedia] 'Rule of Three (Wicca).' https://en.wikipedia.org/wiki/Threefold_Law",
    "580. [Wikipedia] 'Esbat.' https://en.wikipedia.org/wiki/Esbat",
    "581. [Wikipedia] 'Charge of the Goddess.' https://en.wikipedia.org/wiki/Charge_of_the_Goddess",
    "582. [Wikipedia] 'History of Wicca.' https://en.wikipedia.org/wiki/History_of_Wicca",
    "583. [Encyclopedia] Britannica. 'Occultism.' https://www.britannica.com/topic/occultism",
    "584. [Apologetics] Catholic Answers. 'Witchcraft.' https://www.catholic.com/encyclopedia/witchcraft",
    "585. [Wikipedia] 'Goddess Movement.' https://en.wikipedia.org/wiki/Goddess_movement",
    "586. [Apologetics] GotQuestions.org. 'What is Wicca? Is Wicca witchcraft?' https://www.gotquestions.org/Wicca.html",
    "587. [Reference] Wicca Living. 'The Wiccan Rede.' https://wiccaliving.com/wiccan-rede/",
    "588. [Wikipedia] 'Gardnerian Wicca.' https://en.wikipedia.org/wiki/Gardnerian_Wicca",
    "589. [Wikipedia] 'Alexandrian Wicca.' https://en.wikipedia.org/wiki/Alexandrian_Wicca",
    "590. [Reference] BBC. 'Mormonism at a Glance.' https://www.bbc.co.uk/religion/religions/mormon/ataglance/glance.shtml",
    "591. [Primary Source] Church of Jesus Christ Newsroom. 'Facts and Statistics.' https://newsroom.churchofjesuschrist.org/facts-and-statistics",
    "592. [Christian Source] Church of Jesus Christ. 'Gospel Topics: Family.' https://www.churchofjesuschrist.org/study/manual/gospel-topics/family?lang=eng",
    "593. [Christian Source] Church of Jesus Christ. 'Gospel Topics: Service and Sacrifice.' https://www.churchofjesuschrist.org/study/manual/gospel-topics/service?lang=eng",
    "594. [Primary Source] Church of Jesus Christ. 'Word of Wisdom.' https://www.churchofjesuschrist.org/study/manual/gospel-topics/word-of-wisdom?lang=eng",
    "595. [Encyclopedia] Encyclopedia Britannica. 'The Church of Jesus Christ of Latter-day Saints.' https://www.britannica.com/topic/Church-of-Jesus-Christ-of-Latter-day-Saints",
    "596. [Apologetics] Christian Defense. 'The LDS God is an Exalted Man.' https://christiandefense.org/mormonism/the-lds-god-is-an-exalted-man-with-body-parts/",
    "597. [Wikipedia] 'Plan of Salvation (latter Day Saints).' https://en.wikipedia.org/wiki/Plan_of_salvation_(Latter_Day_Saints)",
    "598. [Commentary] Commentaries on Ephesians 2:8. Bible Hub. https://biblehub.com/commentaries/ephesians/2-8.htm",
    "599. [Primary Source] The Church of Jesus Christ of Latter-day Saints. 'The Book of Mormon.' https://www.churchofjesuschrist.org/study/scriptures/bofm?lang=eng",
    "600. [Encyclopedia] Britannica. 'Brigham Young.' https://www.britannica.com/biography/Brigham-Young",
    "601. [Academic] 'Spencer W. Kimball and the Revelation on Priesthood.' BYU Studies. https://byustudies.byu.edu/article/spencer-w-kimball-and-the-revelation-on-priesthood/",
    "602. [Wikipedia] 'Black people and Mormon priesthood.' https://en.wikipedia.org/wiki/Black_people_and_Mormon_priesthood",
    "603. [Reference] BBC Religions. 'Jehovah's Witnesses: Beliefs.' https://www.bbc.co.uk/religion/religions/witnesses/beliefs/beliefs.shtml",
    "604. [Academic] 'Jehovah's Witnesses.' Cambridge University Press. https://www.cambridge.org/core/elements/jehovahs-witnesses/605AED05C9FA13DC68BB74FE3D2C651D",
    "605. [Reference] BBC Religions. 'Jehovah's Witnesses.' https://www.bbc.co.uk/religion/religions/witnesses/",
    "606. [Wikipedia] 'Jehovah's Witnesses practices.' https://en.wikipedia.org/wiki/Jehovah%27s_Witnesses_practices",
    "607. [Christian Source] JW.org. 'Advancing Global Literacy.' https://www.jw.org/en/library/series/from-our-archives/advancing-global-literacy/",
    "608. [Apologetics] GotQuestions.org. 'Is Jesus Michael the archangel?' https://www.gotquestions.org/Jesus-Michael-archangel.html",
    "609. [Wikipedia] 'Arianism.' https://en.wikipedia.org/wiki/Arianism",
    "610. [Wikipedia] 'Criticism of Jehovah's Witnesses.' https://en.wikipedia.org/wiki/Criticism_of_Jehovah%27s_Witnesses",
    "611. [Apologetics] Is the New World Translation of the Bible a valid version? GotQuestions.org. https://www.gotquestions.org/New-World-Translation.html",
    "612. [Wikipedia] 'Unfulfilled Watch Tower Society predictions.' https://en.wikipedia.org/wiki/Unfulfilled_Watch_Tower_Society_predictions",
    "613. [Reference] BBC Religions. 'Jehovah's Witnesses: Organisation.' https://www.bbc.co.uk/religion/religions/witnesses/structure/structure.shtml",
    "614. [Encyclopedia] Britannica. 'Alevi.' https://www.britannica.com/topic/Alevi",
    "615. [Wikipedia] 'Alevism.' https://en.wikipedia.org/wiki/Alevism",
    "616. [Reference] Refworld (UNHCR), Minority Rights Group International. 'World Directory of Minorities and Indigenous Peoples: Turkey, Alevis' (2018). https://www.refworld.org/reference/countryrep/mrgi/2018/en/111484",
    "617. [Reference] Human Rights Watch. 'Alevis.' https://www.hrw.org/reports/2000/turkey2/Turk009-11.htm",
    "618. [Reference] Minority Rights Group. 'Alevis.' https://www.refworld.org/reference/countryrep/mrgi/2018/en/64583",
    "619. [Reference] UNESCO. 'Semah, Alevi-Bektasi ritual.' https://ich.unesco.org/en/RL/semah-alevi-bektasi-ritual-00384",
    "620. [Wikipedia] 'Bektashi Order.' https://en.wikipedia.org/wiki/Bektashi_Order",
    "621. [Wikipedia] 'Batiniyya.' https://en.wikipedia.org/wiki/Batiniyya",
    "622. [Reference] BBC Religions. 'Sufism.' https://www.bbc.co.uk/religion/religions/islam/subdivisions/sufism_1.shtml",
    "623. [Encyclopedia] Britannica. 'Kizilbash.' https://www.britannica.com/topic/Kizilbash",
    "624. [Wikipedia] 'Sufism.' https://en.wikipedia.org/wiki/Sufism",
    "625. [Wikipedia] 'Dhikr.' https://en.wikipedia.org/wiki/Dhikr",
    "626. [Encyclopedia] Britannica. 'Dervish.' https://www.britannica.com/topic/dervish",
    "627. [Wikipedia] 'Rumi.' https://en.wikipedia.org/wiki/Rumi",
    "628. [Encyclopedia] World History Encyclopedia. 'Rumi.' https://www.worldhistory.org/Rumi/",
    "629. [Reference] The New Yorker. 'The Erasure of Islam from the Poetry of Rumi.' https://www.newyorker.com/books/page-turner/the-erasure-of-islam-from-the-poetry-of-rumi",
    "630. [Encyclopedia] Britannica. 'Rumi.' https://www.britannica.com/biography/Rumi",
    "631. [Wikipedia] 'Fana (sufism).' https://en.wikipedia.org/wiki/Fana_(Sufism)",
    "632. [Wikipedia] 'Sufi Metaphysics.' https://en.wikipedia.org/wiki/Sufi_metaphysics",
    "633. [Academic] Stanford Encyclopedia of Philosophy. 'Ibn Arabi.' https://plato.stanford.edu/entries/ibn-arabi/",
    "634. [Encyclopedia] Britannica. 'Tariqa.' https://www.britannica.com/topic/tariqa",
    "635. [Wikipedia] 'Mevlevi Order.' https://en.wikipedia.org/wiki/Mevlevi_Order",
    "636. [Wikipedia] 'Dargah.' https://en.wikipedia.org/wiki/Dargah",
    "637. [Wikipedia] 'Druze.' https://en.wikipedia.org/wiki/Druze",
    "638. [Encyclopedia] Encyclopedia of Religion (via Encyclopedia.com). 'Druze.' https://www.encyclopedia.com/environment/encyclopedias-almanacs-transcripts-and-maps/druze",
    "639. [Wikipedia] 'Yazidis.' https://en.wikipedia.org/wiki/Yazidis",
    "640. [Wikipedia] 'Yazidism.' https://en.wikipedia.org/wiki/Yazidism",
    "641. [Encyclopedia] Encyclopaedia Britannica. 'Yazīdī.' https://www.britannica.com/topic/Yazidi",
    "642. [Wikipedia] 'Yazidi genocide.' https://en.wikipedia.org/wiki/Yazidi_genocide",
    "643. [Primary Source] UN Office of the High Commissioner for Human Rights. 'UN Commission of Inquiry on Syria: ISIS is committing genocide against the Yazidis.' 2016. https://www.ohchr.org/en/press-releases/2016/06/un-commission-inquiry-syria-isis-committing-genocide-against-yazidis",
    "644. [Wikipedia] 'Melek Taus.' https://en.wikipedia.org/wiki/Melek_Taus",
    "645. [Wikipedia] 'Mandaeism.' https://en.wikipedia.org/wiki/Mandaeism",
    "646. [Encyclopedia] Encyclopaedia Britannica. 'Mandaeanism.' https://www.britannica.com/topic/Mandaeanism",
    "647. [Encyclopedia] Encyclopedia of Religion (via Encyclopedia.com). 'Mandaean Religion.' https://www.encyclopedia.com/environment/encyclopedias-almanacs-transcripts-and-maps/mandaean-religion",
    "648. [Wikipedia] 'Ginza Rabba.' https://en.wikipedia.org/wiki/Ginza_Rabba",
    "649. [Wikipedia] 'Mandaeans.' https://en.wikipedia.org/wiki/Mandaeans",
    "650. [Encyclopedia] Britannica. 'L. Ron Hubbard.' https://www.britannica.com/biography/L-Ron-Hubbard",
    "651. [Academic] 'Secrets of Scientology: The E-Meter.' Carnegie Mellon University archive. https://www-2.cs.cmu.edu/~dst/Secrets/E-Meter/",
    "652. [Wikipedia] 'Auditing (Scientology).' https://en.wikipedia.org/wiki/Auditing_(Scientology)",
    "653. [Academic] 'Scientology -- Is This a Religion?.' Carnegie Mellon University archive. https://www.cs.cmu.edu/~dst/Library/Shelf/kent/religion.html",
    "654. [Christian Source] Scientology.org. 'What is Scientology?' https://www.scientology.org/what-is-scientology/",
    "655. [Primary Source] Narconon. 'About Narconon.' https://www.narconon.org/about-narconon/",
    "656. [Wikipedia] 'Church of Scientology.' https://en.wikipedia.org/wiki/Church_of_Scientology",
    "657. [Academic] Stephen Kent. Scientology: Is This a Religion? Carnegie Mellon University archive. https://www.cs.cmu.edu/%7Edst/Library/Shelf/kent/religion.html",
    "658. [Academic] 'THE DUMBLETON - POWLES REPORT: PART II.' Carnegie Mellon University archive. https://www.cs.cmu.edu/~dst/Cowen/audit/nz02.html",
    "659. [Wikipedia] 'Scientology controversies.' https://en.wikipedia.org/wiki/Scientology_controversies",
    "660. [Wikipedia] 'Scientology beliefs and practices.' https://en.wikipedia.org/wiki/Scientology_beliefs_and_practices",
    "661. [Wikipedia] 'Thetan.' https://en.wikipedia.org/wiki/Thetan",
    "662. [Wikipedia] 'Disconnection.' https://en.wikipedia.org/wiki/Disconnection",
    "663. [Wikipedia] 'Fair Game (scientology).' https://en.wikipedia.org/wiki/Fair_Game_(Scientology)",
    "664. [Academic] Carnegie Mellon. 'Scientology Secrets.' https://www.cs.cmu.edu/~dst/Secrets/",
    "665. [Encyclopedia] Britannica. 'Mary Baker Eddy.' https://www.britannica.com/biography/Mary-Baker-Eddy",
    "666. [Apologetics] GotQuestions.org. 'What is Christian Science?' https://www.gotquestions.org/Christian-Science.html",
    "667. [Wikipedia] 'Christian Science practitioner.' https://en.wikipedia.org/wiki/Christian_Science_practitioner",
    "668. [Christian Source] ChristianScience.com. 'What is Christian Science?' https://www.christianscience.com/what-is-christian-science",
    "669. [Christian Source] ChristianScience.com. 'Beliefs and Teachings.' https://www.christianscience.com/what-is-christian-science/beliefs-and-teachings",
    "670. [Wikipedia] 'The Christian Science Monitor.' https://en.wikipedia.org/wiki/The_Christian_Science_Monitor",
    "671. [Wikipedia] 'Science and Health with Key to the Scriptures.' https://en.wikipedia.org/wiki/Science_and_Health_with_Key_to_the_Scriptures",
    "672. [Wikipedia] 'Christian Science.' https://en.wikipedia.org/wiki/Christian_Science",
    "673. [Wikipedia] 'Children's Healthcare is a Legal Duty.' Including Asser and Swan, Pediatrics 1998. https://en.wikipedia.org/wiki/Children%27s_Healthcare_is_a_Legal_Duty",
    "674. [Academic] Asser. Child fatalities from religion-motivated medical neglect.. Pediatrics, 1998. https://pubmed.ncbi.nlm.nih.gov/9521945/",
    "675. [Wikipedia] 'Unification Church.' https://en.wikipedia.org/wiki/Unification_Church",
    "676. [Encyclopedia] Encyclopaedia Britannica. 'Sun Myung Moon.' https://www.britannica.com/biography/Sun-Myung-Moon",
    "677. [Encyclopedia] Encyclopedia.com. 'Unification Church.' https://www.encyclopedia.com/environment/encyclopedias-almanacs-transcripts-and-maps/unification-church",
    "678. [Wikipedia] 'Divine Principle.' https://en.wikipedia.org/wiki/Divine_Principle",
    "679. [Wikipedia] 'Sun Myung Moon.' https://en.wikipedia.org/wiki/Sun_Myung_Moon",
    "680. [Wikipedia] 'Falun Gong.' https://en.wikipedia.org/wiki/Falun_Gong",
    "681. [Encyclopedia] Encyclopaedia Britannica. 'Falun Gong.' https://www.britannica.com/topic/Falun-Gong",
    "682. [Encyclopedia] Encyclopaedia Britannica. 'Li Hongzhi.' https://www.britannica.com/biography/Li-Hongzhi",
    "683. [Wikipedia] 'Persecution of Falun Gong.' https://en.wikipedia.org/wiki/Persecution_of_Falun_Gong",
    "684. [Primary Source] China Tribunal. Independent Tribunal into Forced Organ Harvesting from Prisoners of Conscience in China, 2019. https://chinatribunal.com/",
    "685. [Wikipedia] 'Caodaism.' https://en.wikipedia.org/wiki/Caodaism",
    "686. [Encyclopedia] Encyclopaedia Britannica. 'Cao Dai.' https://www.britannica.com/topic/Cao-Dai",
    "687. [Wikipedia] 'Unitarian Universalism.' https://en.wikipedia.org/wiki/Unitarian_Universalism",
    "688. [Encyclopedia] Encyclopaedia Britannica. 'Unitarian Universalist Association.' https://www.britannica.com/topic/Unitarian-Universalist-Association",
    "689. [Primary Source] Unitarian Universalist Association. 'What We Believe.' https://www.uua.org/beliefs/what-we-believe",
    "690. [Wikipedia] 'Spiritism.' https://en.wikipedia.org/wiki/Spiritism",
    "691. [Wikipedia] 'Allan Kardec.' https://en.wikipedia.org/wiki/Allan_Kardec",
    "692. [Encyclopedia] Encyclopaedia Britannica. 'Spiritism.' https://www.britannica.com/topic/spiritism",
    "693. [Wikipedia] 'Satanism.' https://en.wikipedia.org/wiki/Satanism",
    "694. [Encyclopedia] Encyclopaedia Britannica. 'Church of Satan.' https://www.britannica.com/topic/Church-of-Satan",
    "695. [Wikipedia] 'LaVeyan Satanism.' https://en.wikipedia.org/wiki/LaVeyan_Satanism",
    "696. [Wikipedia] 'The Satanic Temple.' https://en.wikipedia.org/wiki/The_Satanic_Temple",
    "697. [Primary Source] The Satanic Temple. 'About Us.' https://thesatanictemple.com/pages/about-us",
    "698. [Encyclopedia] Encyclopaedia Britannica. 'Satanism.' https://www.britannica.com/topic/Satanism",
    "699. [Wikipedia] 'Native American religions.' https://en.wikipedia.org/wiki/Native_American_religions",
    "700. [Encyclopedia] Encyclopaedia Britannica. 'Native American religions.' https://www.britannica.com/topic/Native-American-religion",
    "701. [Wikipedia] 'Sun Dance.' https://en.wikipedia.org/wiki/Sun_Dance",
    "702. [Encyclopedia] Encyclopaedia Britannica. 'Ghost Dance.' https://www.britannica.com/topic/Ghost-Dance",
    "703. [Wikipedia] 'Ghost Dance.' https://en.wikipedia.org/wiki/Ghost_Dance",
    "704. [Wikipedia] 'Native American Church.' https://en.wikipedia.org/wiki/Native_American_Church",
    "705. [Encyclopedia] Encyclopaedia Britannica. 'Native American Church.' https://www.britannica.com/topic/Native-American-Church",
    "706. [Wikipedia] 'American Indian Religious Freedom Act.' https://en.wikipedia.org/wiki/American_Indian_Religious_Freedom_Act",
    "707. [Wikipedia] 'The Dreaming.' https://en.wikipedia.org/wiki/The_Dreaming",
    "708. [Reference] Australian Institute of Aboriginal and Torres Strait Islander Studies (AIATSIS). 'The Dreaming.' https://aiatsis.gov.au/explore/dreaming",
    "709. [Encyclopedia] Encyclopedia of Religion (via Encyclopedia.com). 'Australian Indigenous Religions: An Overview.' https://www.encyclopedia.com/environment/encyclopedias-almanacs-transcripts-and-maps/australian-indigenous-religions-overview",
    "710. [Wikipedia] 'Australian Aboriginal religion and mythology.' https://en.wikipedia.org/wiki/Australian_Aboriginal_religion_and_mythology",
    "711. [Wikipedia] 'Rainbow Serpent.' https://en.wikipedia.org/wiki/Rainbow_Serpent",
    "712. [Wikipedia] 'Polynesian mythology.' https://en.wikipedia.org/wiki/Polynesian_mythology",
    "713. [Encyclopedia] Encyclopedia of Religion (via Encyclopedia.com). 'Polynesian Religions.' https://www.encyclopedia.com/environment/encyclopedias-almanacs-transcripts-and-maps/polynesian-religions",
    "714. [Reference] Te Ara: The Encyclopedia of New Zealand. 'Māori creation traditions.' https://teara.govt.nz/en/maori-creation-traditions",
    "715. [Wikipedia] 'Māori religion.' https://en.wikipedia.org/wiki/M%C4%81ori_religion",
    "716. [Wikipedia] 'Mana.' https://en.wikipedia.org/wiki/Mana",
    "717. [Wikipedia] 'Tapu (Polynesian culture).' https://en.wikipedia.org/wiki/Tapu_(Polynesian_culture)",
    "718. [Reference] Te Ara: The Encyclopedia of New Zealand. 'Tapu and noa.' https://teara.govt.nz/en/tapu-and-noa",
    "719. [Encyclopedia] Encyclopaedia Britannica. 'Taboo.' https://www.britannica.com/topic/taboo-sociology",
    "720. [Wikipedia] 'Tengri.' https://en.wikipedia.org/wiki/Tengri",
    "721. [Encyclopedia] World History Encyclopedia. 'Tengri.' https://www.worldhistory.org/Tengri/",
    "722. [Academic] Marlène Agnès Laruelle et al. Religious revival, nationalism and the ‘invention of tradition’: political Tengrism in Central Asia and Tatarstan. Central Asian Survey, 2007. https://doi.org/10.1080/02634930701517433",
    "723. [Wikipedia] 'Tengrism.' https://en.wikipedia.org/wiki/Tengrism",
    "724. [Wikipedia] 'Religion in the Mongol Empire.' https://en.wikipedia.org/wiki/Religion_in_the_Mongol_Empire",
    "725. [Wikipedia] 'Yassa.' https://en.wikipedia.org/wiki/Yassa",
    "726. [Encyclopedia] World History Encyclopedia. 'Mongol Empire.' https://www.worldhistory.org/Mongol_Empire/"
  ],
  lastUpdated: "10-11-2026"
}