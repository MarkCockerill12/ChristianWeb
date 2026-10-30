import type { Topic } from './types'

export const ISLAM: Topic = {
  id: "islam",
  title: "Islam: Muhammad, the Quran and the Case Against Them",
  description: "What Muslims believe, the life of Muhammad, where the Quran's material came from, its errors, the history of Islamic conquest, and how Christians answer Muslim objections.",
  icon: "Scroll",
  color: "teal",
  tags: ["Religions", "Islam", "Muhammad", "Quran", "Objections"],
  verses: [
    { reference: "Galatians 1:8", text: "But even if we or an angel from heaven should preach a gospel other than the one we preached to you, let them be under God's curse!" },
    { reference: "1 Corinthians 15:3-4", text: "For what I received I passed on to you as of first importance: that Christ died for our sins according to the Scriptures, that he was buried, that he was raised on the third day according to the Scriptures." },
    { reference: "John 14:26", text: "But the Advocate, the Holy Spirit, whom the Father will send in my name, will teach you all things and will remind you of everything I have said to you." },
    { reference: "Matthew 26:52", text: "\"Put your sword back in its place,\" Jesus said to him, \"for all who draw the sword will die by the sword.\"" },
    { reference: "1 Peter 3:15", text: "But in your hearts revere Christ as Lord. Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have. But do this with gentleness and respect." },
  ],
  tldr: "Islam teaches one God and treats the Quran, delivered through Muhammad between about 610 and 632, as his final word. The Quran denies the crucifixion, which is among the best attested events of the ancient world. It tells Christians to judge by a Gospel that contradicts it. It and the hadith collections Sunni Muslims hold most reliable make claims that are simply false, such as a split moon, semen from between the backbone and the ribs, and a sun that bows beneath God's throne. Muslim sources themselves record the burning of rival Qurans, verses that were lost, and a founder who led armies, married a nine-year-old and received revelations that served his own interests. These are criticisms of claims, not of Muslims, who are to be loved as neighbours.",
  content: `
Islam is the world's second-largest religion, with about two billion followers[^1]. Its claim is direct: Jesus was a prophet who was not crucified, the Bible has been corrupted, and God's final word came through Muhammad. If that is true, Christianity is false, so the claim has to be tested.

The most damaging evidence comes from Islam's own texts, so those are cited directly. Muslims are the people Christ commands Christians to love. The criticisms here are aimed at claims, and none of them is a judgement on any Muslim's sincerity.

<?viz islam/compare?>

<?viz islam/errors?>

<?viz islam/timeline?>

<?viz islam/conquest-map?>
`,
  subtopics: [
    {
      id: "what-muslims-believe",
      title: "What Muslims Believe",
      tags: ["Basics"],
      content: `
**The Five Pillars.** Islamic practice rests on the declaration of faith (*shahada*), the five daily prayers (*salah*), almsgiving (*zakat*), fasting in Ramadan (*sawm*) and the pilgrimage to Mecca (*hajj*)[^2].

**The sources of authority.** Muslims hold the Quran to be God's own speech, delivered through the angel Gabriel to Muhammad. Beside it stand the hadith, the reports of what Muhammad said and did, which Sunni Muslims collected in authoritative compilations in the ninth century. Muhammad's example binds believers: "in the messenger of Allah you have an excellent example" (Quran 33:21)[^3]. The verse is why what he did matters as well as what he taught.

**Sunni and Shia.** The main division began as a dispute over who should succeed Muhammad. It turned violent in the civil war of 656 to 661 and was sealed by the killing of Muhammad's grandson Husayn at Karbala in 680[^4].

**Salvation.** Deeds are weighed at the judgment, and no one has assurance. The Quran has Muhammad say that he does not know what will happen to him (Quran 46:9)[^5], and he told his followers that even he would not enter paradise by his deeds unless God gave him mercy[^6]. The contrast with the New Testament is direct: "I write these things to you who believe in the name of the Son of God so that you may know that you have eternal life" (1 John 5:13).
`,
    },
    {
      id: "life-of-muhammad",
      title: "The Life of Muhammad",
      tags: ["Muhammad"],
      content: `
**Mecca.** Muhammad was born in Mecca around 570. His father died before his birth and his mother when he was six, and he was raised by his grandfather and his uncle Abu Talib. He worked in trade and married the merchant Khadijah, and in later years he would withdraw to a cave on Mount Hira[^7].

**The first revelation.** Around 610 he reported a being in the cave commanding him to recite. Islamic sources describe him as terrified, and it was Khadijah who took him to her Christian cousin Waraqa, who told him it was the same messenger sent to Moses[^8]. The following years brought opposition in Mecca from the leaders whose gods he attacked.

**Medina.** In 622 he and his followers moved to Medina, the migration from which the Islamic calendar is counted[^9]. His role changed there from preacher to ruler and commander. Raids on Meccan caravans led to the Battle of Badr in 624[^10], and his followers took Mecca in 630[^11].

**His death.** He died in 632. Bukhari records him saying in his last illness that he felt his aorta being cut from the poison he had eaten at Khaybar[^12]. The detail is awkward, because the Quran says that had he invented anything in God's name, God would have "severed his aorta" (Quran 69:44-46)[^13]. The hadith uses the same word as the verse. Muslims answer that the poison gave him a martyr's death and that the verse addresses something else, but it remains his own description of how he was dying, set beside his own scripture's test for a false prophet.
`,
    },
    {
      id: "who-taught-muhammad",
      title: "Who Taught Muhammad?",
      tags: ["Muhammad", "Sources"],
      content: `
**The Muslim claim.** Muhammad could not read or write and had no human teacher, which is offered as proof that the Quran came from God (Quran 29:48)[^14].

**His own opponents said otherwise.** The Quran records the charge in his lifetime: "no one is teaching him except a human" (Quran 16:103). Its answer is that the man they mean speaks a foreign language, which does not address whether the ideas came from him[^15]. Others said he made it up "with the help of others" (Quran 25:4)[^16].

**Waraqa.** Islam's most trusted hadith collection places a Christian at the very start. Waraqa ibn Nawfal was Khadijah's cousin, a convert to Christianity who wrote out the Scriptures, and he was the first person to tell Muhammad he was a prophet. The same report continues: "But after a few days Waraqa died and the Divine Inspiration was also paused for a while"[^17]. In that pause Muhammad "repeatedly went out intending to throw himself from the summits of high mountains", and each time was stopped by a voice telling him he was truly God's messenger[^18].

The sequence is striking and needs stating accurately. The pause ended, and revelations continued for over twenty years, so Waraqa's death did not stop them for good. What the sources show is that the one learned Christian in Muhammad's circle confirmed his call, that the revelation fell silent when that man died, and that its recipient was suicidal during the silence.

**The heretical monk.** Muslim biographers tell of a Christian monk, Bahira, who recognised the boy Muhammad as a future prophet on a caravan journey to Syria[^19]. Christian writers turned the story around and claimed that Bahira was a heretical monk whose errors inspired the Quran[^20]. John of Damascus, writing about a century after Muhammad, says he devised his teaching "after conversing with an Arian monk"[^21].

No document proves that a particular heretic tutored him. John was a polemicist writing long afterwards, and the monk stories are legendary in their details on both sides. The strongest evidence is in the Quran itself: its picture of Jesus and Christianity matches the heretical and apocryphal writings of the time far more closely than it matches the New Testament, as the next section sets out.
`,
    },
    {
      id: "quran-sources",
      title: "Heresy and Legend in the Quran",
      tags: ["Quran", "Sources"],
      content: `
The Quran presents itself as revelation correcting what Christians had distorted. Yet several of its stories about Jesus and Mary are not in the New Testament and are found in later Christian legends and heretical writings that circulated in the centuries before Muhammad.

* **Birds made of clay.** Jesus says "I will make for you a bird from clay, breathe into it and it will become a real bird" (Quran 3:49)[^22]. The story of the child Jesus bringing clay sparrows to life comes from the *Infancy Gospel of Thomas*, a legendary work usually dated to the second century[^23].
* **Speaking from the cradle.** The infant Jesus defends his mother in speech (Quran 19:29-30)[^24]. The miracle appears in the Arabic Infancy Gospel, not in the New Testament[^25].
* **Mary's childhood.** Her dedication as a child and her upbringing in the sanctuary follow the *Protoevangelium of James*, a second-century text of pious legend[^26].
* **The Sleepers in the Cave.** The Quran's companions of the cave are the late antique Christian legend of the Seven Sleepers of Ephesus[^27].
* **Someone else on the cross.** The claim that Jesus only appeared to be crucified (Quran 4:157) has a precedent in Gnostic teaching: Irenaeus reports Basilides saying that Simon of Cyrene was substituted for him[^28].
* **Mary in the Godhead.** The Quran has God ask Jesus whether he told people to worship "you and your mother as gods besides Allah" (Quran 5:116)[^29]. No Christian creed teaches that[^30]. A fourth-century bishop did report a fringe group, the Collyridians, who venerated Mary as a goddess, though their existence rests largely on his word[^31].

Muslims reply that these stories are true and that revelation confirmed them. The objection stands on the dating: these are the writings that historians of every persuasion identify as late and legendary, while the earliest sources on Jesus are silent about any of it. A book correcting the Gospels from heaven would not be expected to repeat the legends of the age it appeared in, and one drawing on Christian hearsay in seventh-century Arabia would be. Norman Geisler and other Christian critics draw the same conclusion from the Quran's reliance on folklore, apocrypha and heretical traditions[^32].

**Pagan rites retained.** The pilgrimage rites Muhammad reformed were pre-Islamic[^33], and the Black Stone in the Kaaba was venerated before Islam[^34]. Umar is reported as saying to the stone that he knew it could neither benefit nor harm, and that he kissed it only because he had seen the Prophet do so[^35]. Muslims explain the rites by tracing them to Abraham, for which there is no evidence earlier than the Quran.
`,
    },
    {
      id: "late-sources",
      title: "How Late the Sources Are",
      tags: ["Sources"],
      content: `
The earliest full biography of Muhammad was composed by Ibn Ishaq, who died about 767, around 135 years after Muhammad, and his work has perished except as edited by Ibn Hisham in the ninth century[^36]. Al-Bukhari, compiler of the most trusted hadith collection, died in 870, more than two centuries after the events[^37]. Non-Muslim references appear much earlier, with the *Doctrina Jacobi* of about 634 speaking of a prophet among the Saracens[^38], but these say little about his life.

By contrast, Paul's letters were written about twenty years after Jesus, and Mark's Gospel within about forty[^39]. The usual Muslim answer is that the chains of named narrators (*isnad*) guarantee the hadith. Those chains were themselves recorded late, and Muslim scholars have always acknowledged that vast numbers of reports were forged, which is why they sifted them[^40].

<?viz islam/source-gap?>

The problem cuts two ways for a modern Muslim. A person who rejects the hadith to avoid such errors, as the Quranists do, loses the source for how to pray, for most of Muhammad's biography, and for the very occasions that make the Quran understandable[^41].
`,
    },
    {
      id: "preservation",
      title: "Was the Quran Perfectly Preserved?",
      tags: ["Quran"],
      content: `
**The claim.** "It is certainly We who have revealed the Reminder, and it is certainly We who will preserve it" (Quran 15:9)[^42]. Popular Muslim apologetics takes this to mean that every letter has been kept without variation.

**What Islam's own sources record.**

* **Rival Qurans were burned.** Under the caliph Uthman, around 650, a standard text was prepared because people were disputing over readings. He "ordered that all the other Quranic materials, whether written in fragmentary manuscripts or whole copies, be burnt"[^43]. Texts in perfect agreement would have needed no burning.
* **Companions' copies differed.** The codices of Ibn Masud and others, close companions of Muhammad, are reported to have differed from the Uthmanic text[^44].
* **A verse Umar said was lost.** The caliph Umar said that God revealed the verse of stoning, that "we did recite this verse", and that he feared people would one day say it was not in God's book[^45]. It is not in the Quran today.
* **A verse eaten by a goat.** Aisha is reported as saying the verse of stoning and a verse about suckling were on a paper under her bed, and that when the Prophet died a domestic animal came in and ate it[^46]. Muslim scholars dispute this report's reliability, though it sits in a recognised collection.
* **Verses that changed.** Aisha is also reported as saying that the Quran had said ten sucklings establish a family bond, then five, and that this was still being recited when Muhammad died[^47].
* **Forgotten chapters.** A companion, Abu Musa, told the reciters of Basra that they used to recite a chapter about the length of the ninth, which he had forgotten except for one line[^48].

**What the manuscripts show.** The lower text of the Sana'a palimpsest, written over and erased, contains a version of the Quran that differs from the standard one in wording[^49]. Radiocarbon dating placed the parchment of the Birmingham folios between 568 and 645, which fits an early date but dates the animal skin and not the writing[^50]. Different recitations (*qira'at*), such as Hafs and Warsh, also survive with real differences in wording[^51].

<?viz islam/manuscripts?>

**A fair statement.** After Uthman the text was transmitted with considerable care, and the Quran is an unusually stable book from then on. That is not the claim being made. The claim is divine preservation of what was revealed, and on Islam's own reports some of it was burned, some forgotten and some lost.

The New Testament's variants, by contrast, are visible in thousands of manuscripts across several regions because no authority ever tried to destroy the alternatives, which is why the original can be reconstructed. The [Bible translations topic](/categories/bible-translations) sets out that evidence.
`,
    },
    {
      id: "factual-errors",
      title: "Errors That Cannot Be Reworded",
      tags: ["Errors"],
      content: `
Many popular criticisms of the Quran turn on the meaning of an Arabic word, and a Muslim can reasonably reply with another translation. The following do not. Each is a plain statement about the world, and the hadith often removes any doubt about what was meant.

**Semen comes from between the backbone and the ribs.** Man is "created from a spurting fluid, stemming from between the backbone and the ribcage" (Quran 86:6-7)[^52]. The classical commentator Ibn Kathir reads it as "the backbone or loins of the man and the ribs of the woman"[^53]. Sperm is made in the testes, and the fluid is added by the seminal vesicles and prostate[^54]; none of it comes from there. Modern apologists point out that the testes begin their development in the embryo near the kidneys. They then descend long before birth, and the verse is describing where the fluid comes from when a person is conceived.

**The moon was split in two.** "The Hour has drawn near and the moon was split in two" (Quran 54:1)[^55]. Some commentators treat this as a future event, but the hadith leaves no room for that: the Meccans asked him "to show them a miracle, and so he showed them the splitting of the moon"[^56], and Muslim's collection reports the same event[^57]. An event visible across half the world left no record among the astronomers of any other civilisation, and a NASA scientist answering the popular claim about a lunar rille said that "no current scientific evidence" indicates the moon was ever split and reassembled[^58]. The only outside support offered is a medieval Indian legend about a king, Cheraman Perumal, which is late.

**The sun goes to bow beneath God's throne.** Muhammad asked Abu Dharr where the sun goes at sunset, and answered: "it goes (i.e. travels) till it prostrates itself underneath the Throne and takes the permission to rise again"[^59]. He also told him it "sets in a spring of warm water"[^60], which matches the Quran's account of a traveller who found the sun setting in a spring of dark water (Quran 18:86)[^61]. Translators often add that it only "appeared" so, and that softening might rescue the verse. It cannot rescue Muhammad's own explanation, in which the sun physically travels each night.

**Shooting stars are missiles thrown at devils.** God "adorned the lowest heaven with stars like lamps and made them as missiles for stoning eavesdropping devils" (Quran 67:5)[^62], devils who try to listen in on the angels (Quran 37:6-10)[^63]. Meteors are grains of rock and dust burning up in the atmosphere[^64], and stars are not in a lower heaven nearer than the planets.

**Adam was sixty cubits tall.** "Allah created Adam, making him 60 cubits tall", and "people have been decreasing in stature since Adam's creation"[^65]. That is about 27 metres. Skeletons of ancient humans show nothing of the kind, as the [human fossil record](/categories/evolution) makes clear.

**A child resembles whichever parent reaches climax first.** Muhammad said that if a man "gets discharge first, the child will resemble the father, and if the woman gets discharge first, the child will resemble her"[^66]. Children inherit from both parents through their genes, whatever the order of events[^67].

**A fly's wing carries the cure.** If a fly falls into a drink, it is to be dipped fully, because one wing carries disease and the other the cure[^68]. Muhammad also prescribed camel urine as medicine[^69]. The World Health Organization warns against camel urine as a route of MERS infection[^70].

**Why Muslims cannot simply discard these.** Sunni Muslims value Bukhari and Muslim as the most authentic texts after the Quran[^71]. To set these reports aside is to concede that the collection that defines Muhammad's example contains falsehoods, and the same collection supplies the details of prayer, fasting and pilgrimage.

**Weaker charges, stated as such.** Several other charges are often made and have standard replies that are harder to rule out. The Quran calls Mary "sister of Aaron" (Quran 19:28)[^72] and "daughter of Imran" (Quran 66:12)[^73], as though confusing her with Moses' sister, and Christians raised this in Muhammad's time. His reply was that people were named after earlier prophets[^74]. The Quran places Haman in Pharaoh's court building a tower (Quran 28:38)[^75], where the Bible's only Haman is a Persian official many centuries later[^76], and Muslims reply that this is a different Haman[^77]. The Quran says the Jews called Ezra the son of God (Quran 9:30)[^78]; no such Jewish belief is known, though some Muslims propose a lost sect. These are worth raising, and they are not the strongest points.
`,
    },
    {
      id: "gospel-dilemma",
      title: "The Quran's Problem with the Bible",
      tags: ["Quran", "Bible"],
      content: `
This is the most serious difficulty in Islam, because it does not depend on any disputed science or history.

**The Quran affirms the Bible.** It tells the Christians of Muhammad's day: "let the people of the Gospel judge by what Allah has revealed in it" (Quran 5:47)[^79]. It tells Jews and Christians that they "have nothing to stand on unless you observe the Torah, the Gospel, and what has been revealed to you" (Quran 5:68)[^80]. It even tells Muhammad, if in doubt, to "ask those who read the Scripture before you" (Quran 10:94)[^81]. And it states that "none can change His words" (Quran 6:115)[^82].

**The Bible contradicts the Quran.** The Gospels teach that Jesus was crucified, died and rose, that he is the Son of God, and that he is the only way to the Father.

**Muslims therefore teach that the Bible was corrupted.** This doctrine (*tahrif*) is held by most Muslims[^83], but it produces a dilemma with no exit.

* If the Bible of Muhammad's day was reliable, the Quran is false, because it contradicts that Bible on the central facts.
* If the Bible of Muhammad's day was already corrupted, the Quran is still false, because it tells Christians to judge by a corrupted book and to consult its readers, and says that God's words cannot be changed.

**The manuscripts close the remaining route.** The suggestion that the corruption came after Muhammad fails because the text survives from well before him. Codex Sinaiticus and Codex Vaticanus were copied in the fourth century, about three hundred years before the Quran[^84][^85]. The Bible that Muhammad's contemporaries held is the Bible Christians read now.
`,
    },
    {
      id: "contradictions",
      title: "Contradictions and Abrogation",
      tags: ["Quran", "Errors"],
      content: `
The Quran says that had it been from anyone other than God, people "would have certainly found in it many inconsistencies" (Quran 4:82)[^86]. It also tells Muslims that some of its verses have been replaced: "If We ever abrogate a verse or cause it to be forgotten, We replace it with a better or similar one" (Quran 2:106)[^87]. Critics in Muhammad's lifetime saw what this meant: "when We replace a verse with another", the Quran reports, "they say, you are just a fabricator" (Quran 16:101)[^88]. Muslim scholars developed a whole science of which verses cancel which[^89].

**No compulsion, or fighting until they pay?** "Let there be no compulsion in religion" (Quran 2:256)[^90] is the verse most often quoted to outsiders. Against it stand "kill the polytheists who violated their treaties wherever you find them" (Quran 9:5)[^91] and "fight those who do not believe in Allah and the Last Day" among the people of the Scripture "until they pay the tax, willingly submitting, fully humbled" (Quran 9:29)[^92]. Muhammad said: "I have been ordered to fight against the people until they testify that none has the right to be worshipped but Allah"[^93]. Classical scholars debated whether the sword verse abrogated earlier tolerant ones, and many held that it did[^94]. Modern Muslims often restrict the later verses to their historical setting. The order of the verses and the record of the conquests are harder to explain that way.

**Arithmetic that does not add up.** Quran 4:11-12 sets fixed shares of an estate[^95]. Take a man who dies leaving two daughters, both parents and a wife. The daughters receive two-thirds, each parent one-sixth, and the wife one-eighth. That comes to 27/24 of the estate, which is more than there is. Sunni jurists handle it by reducing every share proportionally, a procedure called *'awl* that is not in the Quran and that follows a ruling of the caliph Umar; Ibn Abbas opposed it, and Shia jurists reject it and reduce only some heirs[^96]. A rule given by an all-knowing God would not need a human correction for the sum.
`,
    },
    {
      id: "convenient-revelations",
      title: "Revelations That Suited Muhammad",
      tags: ["Muhammad", "Ethics"],
      content: `
A recurring pattern in the Quran is revelation that resolves a difficulty in Muhammad's private life in his favour.

**His adopted son's wife.** Muhammad's adopted son Zayd was married to Zaynab[^97]. After the marriage ended, a revelation told Muhammad that God had given her to him in marriage, and rebuked him for hiding what he intended out of fear of people (Quran 33:37)[^98].

**Exemptions.** Muslim men may marry up to four wives (Quran 4:3)[^99]. Muhammad had more, and a revelation granted him women who offered themselves to him: "this is exclusively for you, not for the rest of the believers" (Quran 33:50)[^100]. In a dispute among his wives over a slave woman, Mariyah, tradition records another revelation releasing him from a promise and warning the wives (Quran 66:1-5)[^101][^102].

**Aisha noticed.** When these revelations came, his youngest wife told him: "I feel that your Lord hastens in fulfilling your wishes and desires"[^103]. The sentence is preserved in the most trusted hadith collection, in her own words.

**The satanic verses.** Early biographers, among them Ibn Ishaq as transmitted by al-Tabari, report that Muhammad, longing to win over the Meccans, recited words honouring their three goddesses as intercessors, and later withdrew them as having come from Satan[^104]. Quran 53:19-20 names the goddesses[^105], and 22:52 says Satan interferes with the recitation of every prophet[^106]. Later orthodoxy rejected the story, and Muslims today generally deny it. It is hard to explain why the earliest Muslim biographers would invent something so damaging.
`,
    },
    {
      id: "muhammads-conduct",
      title: "Muhammad's Conduct: Violence, Marriage and Captives",
      tags: ["Muhammad", "Ethics"],
      content: `
Muhammad is the Muslim's model (Quran 33:21). What he did therefore carries a weight that the actions of Old Testament figures, recorded without endorsement, do not.

**Aisha.** "The Prophet married her when she was six years old and he consummated his marriage when she was nine years old"[^107]. Some modern Muslims argue from other reports that she was older, but most early Islamic sources state these ages[^108].

**The Banu Qurayza.** After the Battle of the Trench in 627, the Jewish tribe of Qurayza surrendered. Muhammad accepted the verdict of Sa'd ibn Mu'adh, that "their warriors should be killed, their women and children should be taken as captives"[^109]. Ibn Ishaq numbers the men beheaded between 400 and 900[^110]. Some modern scholars dispute the scale, while the event itself is in Islam's strongest collection.

**Killing critics.** Muhammad asked, "Who is ready to kill Ka'b bin al-Ashraf, who has really hurt Allah and His Apostle?" The poet was killed[^111].

**Captive women.** The Quran permits sexual relations with "those whom your right hands possess", including captured women who were already married (Quran 4:24)[^112]. Muslim tradition built a large body of law on slavery and concubinage from this, and abolition within Muslim lands came late and largely under outside pressure[^113].

**Women generally.** Quran 4:34 authorises husbands to strike rebellious wives[^114], and Muhammad told a group of women that he had "not seen anyone more deficient in intelligence and religion than you"[^115].

**Leaving Islam.** "If somebody (a Muslim) discards his religion, kill him"[^116]. All the classical schools prescribed death for apostasy[^117]. In Pew's 2013 survey, among Muslims who favour sharia as official law, medians of more than half in South Asia and the Middle East and North Africa backed the death penalty for leaving Islam, with lower support elsewhere[^118]. In 2019, 13 of the 20 countries in the Middle East and North Africa outlawed apostasy[^119].

Christians face hard texts of their own, and the site treats them openly in [slavery](/categories/slavery), [women](/categories/women) and [is God evil](/categories/god-evil). The difference lies in the founder. Jesus ruled nothing, took no wife, killed no one, told Peter to put away his sword, and went to his death forgiving those who killed him.
`,
    },
    {
      id: "history-and-war",
      title: "Conquest and War",
      tags: ["History"],
      content: `
Christianity spread for three centuries as a persecuted minority with no army. Islam spread within a generation by conquest, as its own historians record with pride.

**The first wars.** When Muhammad died, Arabian tribes that tried to leave the new state were brought back by force in the Ridda (apostasy) wars of 632 to 633[^120].

**The great conquests.** Muslim armies took Syria and Palestine between 634 and 638, breaking Byzantine power at the Yarmuk in 636[^121][^122]. They broke the Persian army at al-Qadisiyyah[^123] and ended the Sasanian Empire by 651[^124], took Egypt between 639 and 642[^125], and entered Spain in 711[^126], until the advance into France was checked near Tours in 732[^127]. Within about a century of Muhammad's death the old Christian heartlands of the Near East and North Africa were under Muslim rule[^128].

**Life under Islam.** Jews and Christians could keep their faith as *dhimmi*, protected subjects who paid the jizya tax[^129], with the humbling that Quran 9:29 requires, and the theologian al-Razi described the tax as an incentive to convert[^130]. The Pact of Umar, the traditional statement of their terms, has Christians promise not to erect a monastery or church or restore any place of worship in need of repair[^131]. Conversion was often gradual, and historians caution against imagining forced mass conversion as the rule[^132]. This was tolerance by the standards of its age, and it was also a permanent second-class status.

**Muslim against Muslim.** The first civil war of 656 to 661 began within a generation of Muhammad[^133]. Three of the first four caliphs were assassinated[^134].

**Crusades and Constantinople.** After the Seljuk victory at Manzikert in 1071 opened Anatolia[^135], the Byzantine emperor appealed to the West, and the First Crusade followed[^136]. The Crusades included real atrocities by Christians, among them massacres, which Jesus' teaching condemns[^137]. They were also a late response to four and a half centuries of conquest. The Ottomans took Constantinople in 1453[^138] and took Christian boys as a levy for their army and state, the *devshirme*[^139].

**Slavery.** An estimated 10 to 18 million Africans were enslaved by Arab traders between the seventh and twentieth centuries[^140]. **Armenians.** The Ottoman state's destruction of its Armenian Christians during the First World War is among the worst crimes of the modern era, though it had nationalist as well as religious motives[^141].

**A fair statement.** Muslim civilisation also produced great achievement in medicine, mathematics and scholarship, and most Muslims living now are peaceful and want nothing to do with those who kill in Islam's name. The argument here concerns the founder and the pattern he set: a religion that spread by the sword in its first century has a different origin from one whose founder was killed by the sword and whose first followers died rather than draw it.
`,
    },
    {
      id: "jesus-in-the-quran",
      title: "Jesus in the Quran",
      tags: ["Bible", "Quran"],
      content: `
The Quran honours Jesus: born of a virgin, called the Messiah, a worker of miracles. It denies the two things that matter most.

**He was not crucified.** "They neither killed nor crucified him, it was only made to appear so" (Quran 4:157)[^142]. This single verse, written about six hundred years after the event, by a man in Arabia with no access to the sources, stands against every first-century source there is. Christian writers, the Roman historian Tacitus and the Jewish historian Josephus all report the execution, and his crucifixion is among the most secure facts of ancient history[^143]. If God made someone else look like Jesus, he deceived the disciples, and on the Quran's own account he founded Christianity by that deception. The [resurrection topic](/categories/resurrection) sets out the evidence.

**He is not the Son of God.** The Dome of the Rock in Jerusalem, built in 691 and the earliest large Islamic monument, carries inscriptions aimed directly at Christians[^144]. "Those who say Allah is one in a Trinity have certainly fallen into disbelief" (Quran 5:73)[^145]. The reasoning given is that Jesus and Mary "both ate food" (Quran 5:75), which answers a belief Christians do not hold. The [Trinity topic](/categories/trinity) sets out what they do hold.

**The consequences.** Without the cross there is no atonement. Islam gives a Muslim a scale and an unknown verdict; the gospel gives a sinner a substitute and a certain one.
`,
    },
    {
      id: "muslim-objections",
      title: "Muslim Objections to Christianity",
      tags: ["Objections"],
      content: `
**"The Bible has been corrupted."** When, by whom, and how, given that copies were already spread across three continents and in a dozen languages? See the section on the Quran's problem with the Bible.

**"Jesus never said 'I am God, worship me.'"** He claimed the divine name, forgave sins, accepted worship and was condemned for blasphemy. A specific form of words is not the only way to claim deity. The [topic on Jesus' claims](/categories/jesus) has the detail.

**"The Trinity is three gods, and it is illogical."** Christians confess one God. The doctrine says one in essence and three in person, not one and three in the same sense. See [the Trinity](/categories/trinity).

**"Paul invented Christianity."** The creed Paul quotes in 1 Corinthians 15 was formed within a few years of the crucifixion and received from those before him, and he records that Peter, James and John extended him fellowship (Galatians 2:9). The Quran also praises Jesus' disciples as standing up for God (Quran 61:14)[^146], so a Muslim has to explain how the movement they led went wrong so early and left no trace of the supposed original.

**"The Bible predicts Muhammad."** Muslim writers cite Deuteronomy 18, Song of Songs 5:16 and John's promise of the Paraclete[^147]. Deuteronomy 18:15 says the prophet will come "from among your own brothers", and the same phrase in Deuteronomy 17:15 means fellow Israelites. As for the Paraclete, Jesus identifies him himself: "the Advocate, the Holy Spirit" (John 14:26), who "lives with you and will be in you" (John 14:17), which was addressed to disciples six centuries before Muhammad[^148].

**"No one can produce anything like the Quran."** The challenge (Quran 2:23)[^149] names no objective test. Literary excellence is not evidence of divine authorship, or Homer and Shakespeare would qualify. Muhammad's Meccan critics themselves dismissed its stories as tales of the ancients.

**"The Quran predicted modern science."** Such claims are read back after science discovers something, and depend on stretching Arabic words[^150]. A book with these errors cannot be saved by reading modern physics into its vaguest lines.
`,
    },
    {
      id: "arguments-to-leave-out",
      title: "Arguments Not Worth Making",
      tags: ["Objections"],
      content: `
A weak argument hands the other side an easy win, and several circulate among Christians.

* **"Allah is a moon god."** Arabic-speaking Christians and Jews use Allah as the word for God[^151]. The problem with Islam's God lies in what the Quran says about him, not in the name.
* **"The seas that do not mix."** Critics and apologists both cite the Quran's two seas with a barrier between them (Quran 55:19-20)[^152]. A Muslim can always redefine which waters are meant, and nothing is settled.
* **Word-level disputes over embryology.** The stages in Quran 23:14, where bones come before flesh[^153], are argued over by reading the Arabic words loosely or strictly. The claim about the source of semen is plainer, and it is the better one to raise.
* **Treating all Muslims as the worst Muslims.** Most reject terrorism and many are ashamed of it. Pressing the point on the person in front of you is unjust, and it closes the conversation.
* **Winning the argument and losing the person.** Peter's instruction covers this: "with gentleness and respect" (1 Peter 3:15).
`,
    },
  ],
  sources: [
    "1. [Research] Pew Research Center. 'How the Global Religious Landscape Changed From 2010 to 2020.' https://www.pewresearch.org/religion/2025/06/09/how-the-global-religious-landscape-changed-from-2010-to-2020/",
    "2. [Encyclopedia] Wikipedia. 'Five Pillars of Islam.' https://en.wikipedia.org/wiki/Five_Pillars_of_Islam",
    "3. [Primary Source] The Quran 33:21. Quran.com. https://quran.com/33/21",
    "4. [Encyclopedia] Wikipedia. 'Battle of Karbala.' https://en.wikipedia.org/wiki/Battle_of_Karbala",
    "5. [Primary Source] The Quran 46:9. Quran.com. https://quran.com/46/9",
    "6. [Primary Source] Sahih al-Bukhari 5673. Hadith Unlocked. https://hadithunlocked.com/bukhari:5673",
    "7. [Encyclopedia] Wikipedia. 'Muhammad.' https://en.wikipedia.org/wiki/Muhammad",
    "8. [Encyclopedia] Wikipedia. 'Waraqah ibn Nawfal.' https://en.wikipedia.org/wiki/Waraqah_ibn_Nawfal",
    "9. [Encyclopedia] Wikipedia. 'Hijrah.' https://en.wikipedia.org/wiki/Hijrah",
    "10. [Encyclopedia] Wikipedia. 'Battle of Badr.' https://en.wikipedia.org/wiki/Battle_of_Badr",
    "11. [Encyclopedia] Wikipedia. 'Conquest of Mecca.' https://en.wikipedia.org/wiki/Conquest_of_Mecca",
    "12. [Primary Source] Sahih al-Bukhari 4428. Hadith Unlocked. https://hadithunlocked.com/bukhari:4428",
    "13. [Primary Source] The Quran 69:44-46. Quran.com. https://quran.com/69/44-46",
    "14. [Primary Source] The Quran 29:48. Quran.com. https://quran.com/29/48",
    "15. [Primary Source] The Quran 16:103. Quran.com. https://quran.com/16/103",
    "16. [Primary Source] The Quran 25:4-5. Quran.com. https://quran.com/25/4-5",
    "17. [Primary Source] Sahih al-Bukhari 3, the beginning of revelation. Hadith Unlocked. https://hadithunlocked.com/bukhari:3",
    "18. [Primary Source] Sahih al-Bukhari 6982. Hadith Unlocked. https://hadithunlocked.com/bukhari:6982",
    "19. [Encyclopedia] Wikipedia. 'Bahira.' https://en.wikipedia.org/wiki/Bahira",
    "20. [Encyclopedia] Wikipedia. 'Criticism of Muhammad.' https://en.wikipedia.org/wiki/Criticism_of_Muhammad",
    "21. [Academic] Roger Pearse. 'The De Haeresibus of John Damascene and his chapter 100/101 on Islam.' https://www.roger-pearse.com/weblog/2026/04/17/the-de-haeresibus-of-john-damascene-and-his-chapter-100-101-on-islam/",
    "22. [Primary Source] The Quran 3:49. Quran.com. https://quran.com/3/49",
    "23. [Encyclopedia] Wikipedia. 'Infancy Gospel of Thomas.' https://en.wikipedia.org/wiki/Infancy_Gospel_of_Thomas",
    "24. [Primary Source] The Quran 19:29-30. Quran.com. https://quran.com/19/29-30",
    "25. [Encyclopedia] Wikipedia. 'Arabic Infancy Gospel.' https://en.wikipedia.org/wiki/Arabic_Infancy_Gospel",
    "26. [Encyclopedia] Wikipedia. 'Protoevangelium of James.' https://en.wikipedia.org/wiki/Protoevangelium_of_James",
    "27. [Encyclopedia] Wikipedia. 'Seven Sleepers.' https://en.wikipedia.org/wiki/Seven_Sleepers",
    "28. [Encyclopedia] Wikipedia. 'Basilides.' https://en.wikipedia.org/wiki/Basilides",
    "29. [Primary Source] The Quran 5:116. Quran.com. https://quran.com/5/116",
    "30. [Encyclopedia] Wikipedia. 'Nicene Creed.' https://en.wikipedia.org/wiki/Nicene_Creed",
    "31. [Encyclopedia] Wikipedia. 'Collyridianism.' https://en.wikipedia.org/wiki/Collyridianism",
    "32. [Encyclopedia] Wikipedia. 'Criticism of the Quran.' https://en.wikipedia.org/wiki/Criticism_of_the_Quran",
    "33. [Encyclopedia] Wikipedia. 'Hajj.' https://en.wikipedia.org/wiki/Hajj",
    "34. [Encyclopedia] Wikipedia. 'Black Stone.' https://en.wikipedia.org/wiki/Black_Stone",
    "35. [Primary Source] Sahih al-Bukhari 1597. Hadith Unlocked. https://hadithunlocked.com/bukhari:1597",
    "36. [Encyclopedia] Wikipedia. 'Ibn Ishaq.' https://en.wikipedia.org/wiki/Ibn_Ishaq",
    "37. [Encyclopedia] Wikipedia. 'Muhammad al-Bukhari.' https://en.wikipedia.org/wiki/Muhammad_al-Bukhari",
    "38. [Encyclopedia] Wikipedia. 'Doctrina Jacobi.' https://en.wikipedia.org/wiki/Doctrina_Jacobi",
    "39. [Encyclopedia] Wikipedia. 'Gospel of Mark.' https://en.wikipedia.org/wiki/Gospel_of_Mark",
    "40. [Encyclopedia] Wikipedia. 'Criticism of Hadith.' https://en.wikipedia.org/wiki/Criticism_of_Hadith",
    "41. [Encyclopedia] Wikipedia. 'Quranism.' https://en.wikipedia.org/wiki/Quranism",
    "42. [Primary Source] The Quran 15:9. Quran.com. https://quran.com/15/9",
    "43. [Primary Source] Sahih al-Bukhari 4987. Hadith Unlocked. https://hadithunlocked.com/bukhari:4987",
    "44. [Encyclopedia] Wikipedia. 'Abdullah ibn Masud.' https://en.wikipedia.org/wiki/Abdullah_ibn_Masud",
    "45. [Primary Source] Sahih al-Bukhari 6830. Hadith Unlocked. https://hadithunlocked.com/bukhari:6830",
    "46. [Primary Source] Sunan Ibn Majah 1944. Hadith Unlocked. https://hadithunlocked.com/ibnmajah:1944",
    "47. [Primary Source] Sahih Muslim 1452. Hadith Unlocked. https://hadithunlocked.com/muslim:1452",
    "48. [Primary Source] Sahih Muslim 1050. Hadith Unlocked. https://hadithunlocked.com/muslim:1050",
    "49. [Encyclopedia] Wikipedia. 'Sana'a manuscript.' https://en.wikipedia.org/wiki/Sana%27a_manuscript",
    "50. [Encyclopedia] Wikipedia. 'Birmingham Quran manuscript.' https://en.wikipedia.org/wiki/Birmingham_Quran_manuscript",
    "51. [Encyclopedia] Wikipedia. 'Qira'at.' https://en.wikipedia.org/wiki/Qira%27at",
    "52. [Primary Source] The Quran 86:6-7. Quran.com. https://quran.com/86/6-7",
    "53. [Primary Source] Tafsir Ibn Kathir on Quran 86:7. Quran.com. https://quran.com/86:7/tafsirs/en-tafisr-ibn-kathir",
    "54. [Encyclopedia] Wikipedia. 'Semen.' https://en.wikipedia.org/wiki/Semen",
    "55. [Primary Source] The Quran 54:1-2. Quran.com. https://quran.com/54/1-2",
    "56. [Primary Source] Sahih al-Bukhari 3637. Hadith Unlocked. https://hadithunlocked.com/bukhari:3637",
    "57. [Primary Source] Sahih Muslim 2802. Hadith Unlocked. https://hadithunlocked.com/muslim:2802",
    "58. [Encyclopedia] Wikipedia. 'Splitting of the Moon.' https://en.wikipedia.org/wiki/Splitting_of_the_Moon",
    "59. [Primary Source] Sahih al-Bukhari 3199. Hadith Unlocked. https://hadithunlocked.com/bukhari:3199",
    "60. [Primary Source] Sunan Abi Dawud 4002. Hadith Unlocked. https://hadithunlocked.com/abudawud:4002",
    "61. [Primary Source] The Quran 18:86. Quran.com. https://quran.com/18/86",
    "62. [Primary Source] The Quran 67:5. Quran.com. https://quran.com/67/5",
    "63. [Primary Source] The Quran 37:6-10. Quran.com. https://quran.com/37/6-10",
    "64. [Reference] NASA. 'Meteors and Meteorites.' https://science.nasa.gov/solar-system/meteors-meteorites/",
    "65. [Primary Source] Sahih al-Bukhari 3326. Hadith Unlocked. https://hadithunlocked.com/bukhari:3326",
    "66. [Primary Source] Sahih al-Bukhari 3329. Hadith Unlocked. https://hadithunlocked.com/bukhari:3329",
    "67. [Encyclopedia] Wikipedia. 'Heredity.' https://en.wikipedia.org/wiki/Heredity",
    "68. [Primary Source] Sahih al-Bukhari 3320. Hadith Unlocked. https://hadithunlocked.com/bukhari:3320",
    "69. [Primary Source] Sahih al-Bukhari 5686. Hadith Unlocked. https://hadithunlocked.com/bukhari:5686",
    "70. [Reference] World Health Organization. 'Middle East respiratory syndrome coronavirus (MERS-CoV).' https://www.who.int/news-room/fact-sheets/detail/middle-east-respiratory-syndrome-coronavirus-(mers-cov)",
    "71. [Encyclopedia] Wikipedia. 'Sahih al-Bukhari.' https://en.wikipedia.org/wiki/Sahih_al-Bukhari",
    "72. [Primary Source] The Quran 19:28. Quran.com. https://quran.com/19/28",
    "73. [Primary Source] The Quran 66:12. Quran.com. https://quran.com/66/12",
    "74. [Primary Source] Sahih Muslim 2135. Hadith Unlocked. https://hadithunlocked.com/muslim:2135",
    "75. [Primary Source] The Quran 28:38. Quran.com. https://quran.com/28/38",
    "76. [Encyclopedia] Wikipedia. 'Haman.' https://en.wikipedia.org/wiki/Haman",
    "77. [Encyclopedia] Wikipedia. 'Haman (Islam).' https://en.wikipedia.org/wiki/Haman_(Islam)",
    "78. [Primary Source] The Quran 9:30. Quran.com. https://quran.com/9/30",
    "79. [Primary Source] The Quran 5:47. Quran.com. https://quran.com/5/47",
    "80. [Primary Source] The Quran 5:68. Quran.com. https://quran.com/5/68",
    "81. [Primary Source] The Quran 10:94. Quran.com. https://quran.com/10/94",
    "82. [Primary Source] The Quran 6:115. Quran.com. https://quran.com/6/115",
    "83. [Encyclopedia] Wikipedia. 'Tahrif.' https://en.wikipedia.org/wiki/Tahrif",
    "84. [Encyclopedia] Wikipedia. 'Codex Vaticanus.' https://en.wikipedia.org/wiki/Codex_Vaticanus",
    "85. [Encyclopedia] Wikipedia. 'Codex Sinaiticus.' https://en.wikipedia.org/wiki/Codex_Sinaiticus",
    "86. [Primary Source] The Quran 4:82. Quran.com. https://quran.com/4/82",
    "87. [Primary Source] The Quran 2:106. Quran.com. https://quran.com/2/106",
    "88. [Primary Source] The Quran 16:101. Quran.com. https://quran.com/16/101",
    "89. [Encyclopedia] Wikipedia. 'Abrogation in Islam.' https://en.wikipedia.org/wiki/Abrogation_in_Islam",
    "90. [Primary Source] The Quran 2:256. Quran.com. https://quran.com/2/256",
    "91. [Primary Source] The Quran 9:5. Quran.com. https://quran.com/9/5",
    "92. [Primary Source] The Quran 9:29. Quran.com. https://quran.com/9/29",
    "93. [Primary Source] Sahih al-Bukhari 25. Hadith Unlocked. https://hadithunlocked.com/bukhari:25",
    "94. [Encyclopedia] Wikipedia. 'Sword Verse.' https://en.wikipedia.org/wiki/Sword_Verse",
    "95. [Primary Source] The Quran 4:11-12. Quran.com. https://quran.com/4/11-12",
    "96. [Reference] Majalla. ''Awl.' https://majalla.org/ilm/awl/",
    "97. [Encyclopedia] Wikipedia. 'Zaynab bint Jahsh.' https://en.wikipedia.org/wiki/Zaynab_bint_Jahsh",
    "98. [Primary Source] The Quran 33:37. Quran.com. https://quran.com/33/37",
    "99. [Primary Source] The Quran 4:3. Quran.com. https://quran.com/4/3",
    "100. [Primary Source] The Quran 33:50. Quran.com. https://quran.com/33/50",
    "101. [Primary Source] The Quran 66:1. Quran.com. https://quran.com/66/1",
    "102. [Encyclopedia] Wikipedia. 'Maria al-Qibtiyya.' https://en.wikipedia.org/wiki/Maria_al-Qibtiyya",
    "103. [Primary Source] Sahih al-Bukhari 4788. Hadith Unlocked. https://hadithunlocked.com/bukhari:4788",
    "104. [Encyclopedia] Wikipedia. 'Satanic Verses.' https://en.wikipedia.org/wiki/Satanic_Verses",
    "105. [Primary Source] The Quran 53:19-20. Quran.com. https://quran.com/53/19-20",
    "106. [Primary Source] The Quran 22:52. Quran.com. https://quran.com/22/52",
    "107. [Primary Source] Sahih al-Bukhari 5134. Hadith Unlocked. https://hadithunlocked.com/bukhari:5134",
    "108. [Encyclopedia] Wikipedia. 'Aisha.' https://en.wikipedia.org/wiki/Aisha",
    "109. [Primary Source] Sahih al-Bukhari 4122. Hadith Unlocked. https://hadithunlocked.com/bukhari:4122",
    "110. [Encyclopedia] Wikipedia. 'Banu Qurayza.' https://en.wikipedia.org/wiki/Banu_Qurayza",
    "111. [Primary Source] Sahih al-Bukhari 3031. Hadith Unlocked. https://hadithunlocked.com/bukhari:3031",
    "112. [Primary Source] The Quran 4:24. Quran.com. https://quran.com/4/24",
    "113. [Encyclopedia] Wikipedia. 'Islamic views on slavery.' https://en.wikipedia.org/wiki/Islamic_views_on_slavery",
    "114. [Primary Source] The Quran 4:34. Quran.com. https://quran.com/4/34",
    "115. [Primary Source] Sahih al-Bukhari 304. Hadith Unlocked. https://hadithunlocked.com/bukhari:304",
    "116. [Primary Source] Sahih al-Bukhari 3017. Hadith Unlocked. https://hadithunlocked.com/bukhari:3017",
    "117. [Encyclopedia] Wikipedia. 'Apostasy in Islam.' https://en.wikipedia.org/wiki/Apostasy_in_Islam",
    "118. [Research] Pew Research Center. 'The World's Muslims: Religion, Politics and Society' (2013). https://www.pewresearch.org/religion/2013/04/30/the-worlds-muslims-religion-politics-society-overview/",
    "119. [Research] Pew Research Center. 'Four in ten countries and territories worldwide had blasphemy laws in 2019.' https://www.pewresearch.org/short-reads/2022/01/25/four-in-ten-countries-and-territories-worldwide-had-blasphemy-laws-in-2019-2/",
    "120. [Encyclopedia] Wikipedia. 'Ridda Wars.' https://en.wikipedia.org/wiki/Ridda_Wars",
    "121. [Encyclopedia] Wikipedia. 'Muslim conquest of the Levant.' https://en.wikipedia.org/wiki/Muslim_conquest_of_the_Levant",
    "122. [Encyclopedia] Wikipedia. 'Battle of Yarmuk.' https://en.wikipedia.org/wiki/Battle_of_Yarmuk",
    "123. [Encyclopedia] Wikipedia. 'Battle of al-Qadisiyyah.' https://en.wikipedia.org/wiki/Battle_of_al-Q%C4%81disiyyah",
    "124. [Encyclopedia] Wikipedia. 'Sasanian Empire.' https://en.wikipedia.org/wiki/Sasanian_Empire",
    "125. [Encyclopedia] Wikipedia. 'Muslim conquest of Egypt.' https://en.wikipedia.org/wiki/Muslim_conquest_of_Egypt",
    "126. [Encyclopedia] Wikipedia. 'Umayyad conquest of Hispania.' https://en.wikipedia.org/wiki/Umayyad_conquest_of_Hispania",
    "127. [Encyclopedia] Wikipedia. 'Battle of Tours.' https://en.wikipedia.org/wiki/Battle_of_Tours",
    "128. [Encyclopedia] Wikipedia. 'Early Muslim conquests.' https://en.wikipedia.org/wiki/Early_Muslim_conquests",
    "129. [Encyclopedia] Wikipedia. 'Dhimmi.' https://en.wikipedia.org/wiki/Dhimmi",
    "130. [Encyclopedia] Wikipedia. 'Jizya.' https://en.wikipedia.org/wiki/Jizya",
    "131. [Encyclopedia] Wikipedia. 'Pact of Umar.' https://en.wikipedia.org/wiki/Pact_of_Umar",
    "132. [Encyclopedia] Wikipedia. 'Spread of Islam.' https://en.wikipedia.org/wiki/Spread_of_Islam",
    "133. [Encyclopedia] Wikipedia. 'First Fitna.' https://en.wikipedia.org/wiki/First_Fitna",
    "134. [Encyclopedia] Wikipedia. 'Rashidun Caliphate.' https://en.wikipedia.org/wiki/Rashidun_Caliphate",
    "135. [Encyclopedia] Wikipedia. 'Battle of Manzikert.' https://en.wikipedia.org/wiki/Battle_of_Manzikert",
    "136. [Encyclopedia] Wikipedia. 'First Crusade.' https://en.wikipedia.org/wiki/First_Crusade",
    "137. [Encyclopedia] Wikipedia. 'Crusades.' https://en.wikipedia.org/wiki/Crusades",
    "138. [Encyclopedia] Wikipedia. 'Fall of Constantinople.' https://en.wikipedia.org/wiki/Fall_of_Constantinople",
    "139. [Encyclopedia] Wikipedia. 'Devshirme.' https://en.wikipedia.org/wiki/Devshirme",
    "140. [Encyclopedia] Wikipedia. 'Arab slave trade.' https://en.wikipedia.org/wiki/Arab_slave_trade",
    "141. [Encyclopedia] Wikipedia. 'Armenian genocide.' https://en.wikipedia.org/wiki/Armenian_genocide",
    "142. [Primary Source] The Quran 4:157. Quran.com. https://quran.com/4/157",
    "143. [Encyclopedia] Wikipedia. 'Crucifixion of Jesus.' https://en.wikipedia.org/wiki/Crucifixion_of_Jesus",
    "144. [Encyclopedia] Wikipedia. 'Dome of the Rock.' https://en.wikipedia.org/wiki/Dome_of_the_Rock",
    "145. [Primary Source] The Quran 5:73-75. Quran.com. https://quran.com/5/72-75",
    "146. [Primary Source] The Quran 61:14. Quran.com. https://quran.com/61/14",
    "147. [Encyclopedia] Wikipedia. 'Muhammad in the Bible.' https://en.wikipedia.org/wiki/Muhammad_in_the_Bible",
    "148. [Encyclopedia] Wikipedia. 'Paraclete.' https://en.wikipedia.org/wiki/Paraclete",
    "149. [Primary Source] The Quran 2:23. Quran.com. https://quran.com/2/23",
    "150. [Encyclopedia] Wikipedia. 'Quran and miracles.' https://en.wikipedia.org/wiki/Quran_and_miracles",
    "151. [Encyclopedia] Wikipedia. 'Allah.' https://en.wikipedia.org/wiki/Allah",
    "152. [Primary Source] The Quran 55:19-20. Quran.com. https://quran.com/55/19-20",
    "153. [Primary Source] The Quran 23:14. Quran.com. https://quran.com/23/14"
  ],
  lastUpdated: "30-10-2026"
}
