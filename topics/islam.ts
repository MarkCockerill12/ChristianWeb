import type { Topic } from './types'

export const ISLAM: Topic = {
  id: "islam",
  title: "Islam: Muhammad, the Quran and the Evidence",
  description: "What Islam teaches and gets right, the life, wives and death of Muhammad, his conduct, the sources and errors of the Quran, paradise and hell, the history of Islam, and answers to common objections.",
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
  tldr: "Islam teaches one God, honours Jesus and Mary, calls believers to prayer and charity, and brought real reforms to seventh-century Arabia. Its central claim is that the Quran, delivered through Muhammad between about 610 and 632, is God's final word. That claim can be tested from Islam's own sources. The Quran denies the crucifixion, one of the best attested events of the ancient world, and tells Christians to judge by a Gospel that contradicts it. The Quran and the most trusted hadith repeat the mistaken science of their age, and record rival Qurans burned, verses lost, a founder who led armies, had captives and married a nine-year-old, and revelations that served his own interests. No biblical passage foretells him. These are criticisms of claims, not of Muslims, who are to be loved as neighbours.",
  content: `
Islam is the world's second-largest religion, with about two billion followers[^1]. Much in it is good, and that is the place to begin. Its claim, however, is direct: Jesus was a prophet who was not crucified, the Bible has been corrupted, and God's final word came through Muhammad. If that is true, Christianity is false, so the claim has to be tested.

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
**The Five Pillars.** Islamic practice rests on the declaration of faith (*shahada*), the five daily prayers (*salah*), almsgiving (*zakat*), fasting in Ramadan (*sawm*) and the pilgrimage to Mecca (*hajj*)[^2][^3].

**The sources of authority.** Muslims hold the Quran to be God's own speech, delivered through the angel Gabriel to Muhammad. Beside it stand the hadith, the reports of what Muhammad said and did, which Sunni Muslims collected in authoritative compilations in the ninth century. Muhammad's example binds believers: "in the messenger of Allah you have an excellent example" (Quran 33:21)[^4]. The verse is why what he did matters as well as what he taught.

**Sunni and Shia.** The main division began as a dispute over who should succeed Muhammad. It turned violent in the civil war of 656 to 661 and was sealed by the killing of Muhammad's grandson Husayn at Karbala in 680[^5].

**Salvation.** Deeds are weighed at the judgment, and no one has assurance. The Quran has Muhammad say that he does not know what will happen to him (Quran 46:9)[^6], and he told his followers that even he would not enter paradise by his deeds unless God gave him mercy[^7]. The contrast with the New Testament is direct: "I write these things to you who believe in the name of the Son of God so that you may know that you have eternal life" (1 John 5:13).

**See also:** [Other Religions](/categories/religions).
`,
    },
    {
      id: "what-islam-gets-right",
      title: "What Islam Gets Right",
      tags: ["Basics"],
      content: `
Christians should say plainly what Islam gets right. Much of it is shared ground, and much of it has shaped good lives.

**One God.** Islam insists on one Creator, sovereign over all things, who will judge the world. It rejected the idols of seventh-century Arabia, and the Quran's call to worship God alone is the same call the prophets of Israel made.

**Honour for Jesus and Mary.** The Quran calls Jesus the Messiah and accepts his virgin birth, and it says of Mary that God has "selected you, purified you, and chosen you over all women of the world" (Quran 3:42)[^8]. It speaks warmly of Christians as "the most gracious" to believers, "because there are priests and monks among them and because they are not arrogant" (Quran 5:82)[^9].

**Righteousness as more than ritual.** "Righteousness is not in turning your faces towards the east or the west", but in faith and in giving "to relatives, orphans, the poor" (Quran 2:177)[^10]. The one who denies the judgment is described as the one who "repulses the orphan, and does not encourage the feeding of the poor" (Quran 107:1-3)[^11]. Almsgiving is a duty of the faith, not an optional kindness.

**Moral law.** "Allah commands justice, grace, as well as generosity to close relatives. He forbids indecency, wickedness, and aggression" (Quran 16:90)[^12]. Intoxicants and gambling are forbidden (Quran 5:90)[^13][^14]. "Whoever takes a life, unless as a punishment for murder or mischief in the land, it will be as if they killed all of humanity; and whoever saves a life, it will be as if they saved all of humanity" (Quran 5:32)[^15], which the verse presents as what God ordained for the Children of Israel. Muhammad also taught a form of the Golden Rule: "None of you will have faith till he loves for his believing brother what he loves for himself"[^16].

**Reforms for its time.** The Quran condemned the Arabian practice of burying baby girls alive, picturing them asked on the last day "for what crime they were put to death" (Quran 81:8-9)[^17], and forbade killing children for fear of poverty (Quran 6:151)[^18]. It gave women a fixed share of inheritance: "for women there is a share in what their parents and close relatives leave" (Quran 4:7)[^19]. Paradise is promised to "those who do good, whether male or female" (Quran 4:124)[^20]. Muhammad remained married to Khadijah alone until her death[^21], and he kept speaking of her with love for the rest of his life[^22].

**Mercy and devotion.** The Quran says "Do not lose hope in Allah's mercy" (Quran 39:53)[^23]. Daily prayer, the Ramadan fast and the pilgrimage form a discipline that puts many Christians to shame.

**Civilisation.** The Islamic Golden Age produced real achievement in mathematics, astronomy, optics and medicine, and preserved and extended Greek learning[^24][^25]. Its large public hospitals, the *bimaristan*, were among the most advanced of their day[^26].

None of this settles whether Muhammad was a prophet. Good teaching does not prove a claim to revelation, and the claim itself has to be tested against the evidence.
`,
    },
    {
      id: "life-of-muhammad",
      title: "The Life of Muhammad",
      tags: ["Muhammad"],
      content: `
**Mecca.** Muhammad was born in Mecca around 570. His father died before his birth and his mother when he was six, and he was raised by his grandfather and his uncle Abu Talib. He worked in trade and married the merchant Khadijah, and in later years he would withdraw to a cave on Mount Hira[^27].

**The first revelation.** Around 610 he reported a being in the cave commanding him to recite. Islamic sources describe him as terrified, and it was Khadijah who took him to her Christian cousin Waraqa, who told him it was the same messenger sent to Moses[^28][^29]. The following years brought opposition in Mecca from the leaders whose gods he attacked.

**Medina.** In 622 he and his followers moved to Medina, the migration from which the Islamic calendar is counted[^30][^31]. His role changed there from preacher to ruler and commander. Raids on Meccan caravans led to the Battle of Badr in 624[^32][^33], and his followers took Mecca in 630[^34][^27].

**War and treaty.** The Muslims lost at Uhud in 625[^33], withstood the siege of the Trench in 627, and agreed a ten-year truce with Mecca at Hudaybiyya in 628[^35]. When the truce broke down he marched on the city. His entry in 630 was largely bloodless, with a wide amnesty, which is to his credit.

**His death.** He died in 632, poisoned by his own account, as the next section sets out.
`,
    },
    {
      id: "muhammads-death",
      title: "How Muhammad Died",
      tags: ["Muhammad"],
      content: `
**The poison at Khaybar.** In 628, after Muhammad's forces conquered the Jewish oasis of Khaybar, "a roasted poisoned sheep was presented to the Prophet as a gift"[^36]. Accounts of what followed differ. Bukhari has him asked whether the woman responsible should be killed, and he answers "No", with the narrator adding: "I continued to see the effect of the poison on the palate of the mouth of Messenger of Allah"[^37]. Abu Dawud adds that a companion, Bishr, died from the meat, that she told Muhammad "If you were a prophet, it would not harm you", and that she was then put to death[^38].

**His last illness.** He fell ill in 632. He was brought to Aisha's house "walking between two men with his feet dragging on the ground", and asked for water from seven waterskins to be poured on him[^39]. During this illness he said: "O Aisha! I still feel the pain caused by the food I ate at Khaibar, and at this time, I feel as if my aorta is being cut from that poison"[^40][^36].

**The aorta.** The Quran states the test for a false prophet in these terms: had he invented anything in God's name, God would have "severed his aorta" (Quran 69:44-46)[^41]. The hadith uses the same word. The usual answer is that the poison gave him a martyr's death and that the verse addresses something else. That answer does not change what the two texts say side by side, in his own words and in his own scripture.

**The unfinished document.** Ibn Abbas wept when he recalled the Thursday before the death. Muhammad asked for writing material "so that I may write for you a document after which you will never go astray", and his companions argued over it, some saying that he was disoriented[^42][^43]. Umar said, "we have got Allah's Book with us and that is sufficient for us", and Muhammad sent them away[^43]. Sunni and Shia Muslims still read this episode differently.

**His final instructions.** In his fatal illness he said: "Allah cursed the Jews and the Christians because they took the graves of their Prophets as places for praying"[^44]. He instructed that polytheists be expelled from Arabia, and he is also reported as saying: "I will expel the Jews and Christians from the Arabian Peninsula and will not leave any but Muslim"[^45][^42].

**The death.** He died in Aisha's house, on her day in the rota, leaning against her chest[^46]. He died in debt, "while his (iron) armor was mortgaged to a Jew for thirty Sas of barley"[^47]. He named no undisputed successor, and the dispute at Saqifah over who should lead began straight away, the root of the Sunni and Shia division[^48][^31].

**The contrast.** Jesus prayed for those who killed him, rose on the third day, and left his followers a commission to all nations. His tomb is empty. The [resurrection topic](/categories/resurrection) sets out the evidence for that claim.
`,
    },
    {
      id: "muhammads-wives",
      title: "Muhammad's Wives",
      tags: ["Muhammad", "Ethics"],
      content: `
The Quran limits men to four wives (Quran 4:3), and grants Muhammad an exemption (Quran 33:50). Islamic tradition records around eleven to thirteen wives, with some disagreement over who counts, and Muslim sources call them "the mothers of the believers"[^49][^50].

* **Khadijah**, a wealthy merchant and his first wife, about fifteen years older by tradition. She was his first follower and his only wife until she died in 619.
* **Sawda**, an older widow, married soon after. Aisha reports that the Prophet "used to give me both my day and the day of Sauda"[^51], since Sawda gave up her turn.
* **Aisha**, daughter of his closest companion Abu Bakr, betrothed at six and taken to him at nine.
* **Hafsa**, daughter of Umar, a widow.
* **Zaynab bint Khuzayma**, a widow, who died within months.
* **Umm Salama**, a widow.
* **Zaynab bint Jahsh**, the former wife of his adopted son Zayd, whose marriage is set out under the revelations that suited him.
* **Juwayriya**, captured in the raid on the Banu Mustaliq.
* **Umm Habiba**, daughter of his Meccan opponent Abu Sufyan.
* **Safiyya**, a Jewish captive from Khaybar.
* **Maymuna**, his last marriage.
* **Mariyah**, a Coptic slave sent as a gift from Egypt, and **Rayhana**, a captive of the Banu Qurayza. Sources differ on whether each was a wife or a concubine.

**Aisha's age.** "The Prophet married her when she was six years old and he consummated his marriage when she was nine years old"[^52][^53]. Muslim records her own account: "he entered upon me when I was a girl of nine years". She was called in from a swing with her friends, her mother took her by the hand, and she was washed and prepared, and "nothing startled me except" finding him there[^53]. She still played with dolls in his presence, and a note in the standard translation explains that they were allowed because "she was a little girl, not yet reached the age of puberty"[^54]. Some modern writers argue from other reports that she was older, but the strongest collections state these ages[^55][^56]. The classical law on the matter drew the consequences: Quran 65:4 sets a waiting period after divorce for "those who have not menstruated"[^57][^58], which Ibn Kathir explains as "the young who have not reached the years of menstruation"[^58]. A divorce waiting period presupposes a marriage.

**Juwayriya.** Bukhari records that Muhammad "suddenly attacked Bani Mustaliq without warning while they were heedless". Their fighting men were killed, the women and children captured, "the Prophet got Juwairiya on that day"[^59][^60]. Aisha describes her as "a very beautiful woman, most attractive to the eye", and says she looked on with disapproval when Juwayriya came to ask his help[^61].

**Safiyya.** At Khaybar "their warriors were killed; the children and women were taken as captives. Safiya was taken by Dihya Al-Kalbi and later she belonged to Allah's Apostle who married her and her Mahr was her manumission"[^60]. She had been given to Dihya first, and was taken back when Muhammad was told of her standing[^62][^60]. Her husband and father had both been killed by Muhammad's forces[^63][^49].

**How he treated them.** Anas reports that "The Prophet used to visit all his wives in a round, during the day and night and they were eleven in number", and that the companions said he "was given the strength of thirty"[^64][^65]. Another report has nine wives in one night[^65][^64]. His rota could be set aside by revelation: "It is up to you to delay or receive whoever you please of your wives" (Quran 33:51)[^66]. No one else could marry them after him (Quran 33:53)[^67]. Disputes among them produced the warning in Quran 66, and Aisha's remark on how quickly his Lord fulfilled his wishes.

The Bible records polygamy too, and records the misery it caused, as the [women topic](/categories/women) sets out. The difference is that none of those men is offered as the perfect model for all time, and the New Testament requires the opposite pattern.
`,
    },
    {
      id: "muhammads-conduct",
      title: "Muhammad's Sins and Wrongs",
      tags: ["Muhammad", "Ethics"],
      content: `
Islam presents Muhammad as the "excellent example" (Quran 33:21), so his conduct is part of the argument. Each item below comes from Islam's own scriptures and traditions, with disputed reports marked as disputed.

**The Quran tells him to ask forgiveness.** "Seek forgiveness for your shortcomings" (Quran 47:19)[^68]; God will "forgive you for your past and future shortcomings" (Quran 48:2)[^69]; "Seek forgiveness for your shortcomings" again (Quran 40:55)[^70]. The Arabic word is *dhanb* (ذَنْب, sin), commonly rendered "sin", and some classical scholars argued it does not imply serious sin in a prophet. Muhammad himself said: "I seek forgiveness from Allah and turn to Him in repentance more than seventy times a day"[^71]. Jesus is treated differently. Gabriel promises Mary "a pure son" (Quran 19:19)[^72], and Muhammad said every child is touched by Satan at birth "except Mary and her child"[^73]. The Quran never records Jesus asking forgiveness.

**The Quran rebukes him.** "He frowned and turned away, simply because the blind man came to him" (Quran 80:1-2)[^74]. "May Allah pardon you! Why did you give them permission?" (Quran 9:43)[^75]. "It is not fit for a prophet that he should take captives until he has thoroughly subdued the land" (Quran 8:67)[^76]. He hid what he intended about Zaynab "out of fear of people" (Quran 33:37).

**Raiding caravans.** His followers attacked a Meccan caravan at Nakhla during a sacred month, when fighting was forbidden by Arab custom[^77][^78]. The revelation that followed conceded that fighting then "is a great sin", and said that opposing the faith is greater (Quran 2:217)[^78]. A fifth of all spoils went to "Allah and the Messenger" and those he supported (Quran 8:41)[^79].

**Attacking without warning.** Asked about night raids that exposed women and children, he replied: "They (i.e. women and children) are from them"[^80]. He also said he had nearly ordered the houses of men who missed congregational prayer to be burned[^81].

**Expelling the Jews of Medina.** "He exiled all the Jews from Medina", the Qaynuqa, the Nadir and the rest[^82][^83]. The Quran credits the expulsion of the Nadir to God and defends the cutting down of their palm trees (Quran 59:2-5)[^84]. The Quran also celebrates the end of the Qurayza: "You killed some, and took others captive", and gave believers "their lands, homes, and wealth" (Quran 33:26-27)[^85].

**The Banu Qurayza.** After the Battle of the Trench in 627, the Jewish tribe of Qurayza surrendered. Muhammad accepted the verdict of Sa'd ibn Mu'adh, that "their warriors should be killed, their women and children should be taken as captives"[^86][^60]. Ibn Ishaq numbers the men beheaded between 400 and 900[^87]. Some modern scholars dispute the scale, while the event itself is in Islam's strongest collection.

**Killing critics.** Muhammad asked, "Who is willing to kill Ka'b bin Al-Ashraf who has hurt Allah and His Apostle?", and when the volunteer asked leave to say something false in order to deceive the poet, replied, "You may say it"[^88]. Abu Rafi, a Jew who "used to hurt Messenger of Allah", was killed in his castle by a party Muhammad sent[^89]. Ibn Ishaq also records the killing of the poets Asma bint Marwan, a mother of small children, and the aged Abu Afak, for verses against him. These two reports come from the biographies and not from the canonical hadith, and hadith scholars have challenged the transmission of the Asma report, so they are weaker[^90][^91].

**Torture at Khaybar (disputed).** Ibn Ishaq reports that Kenana, Safiyya's husband, was tortured with fire on his chest to make him reveal hidden treasure, and then beheaded. Ibn Ishaq names no source, and the account is not in the six canonical hadith collections, so it should be stated as a report in the biography and no more[^92].

**Mutilation.** When men of the tribe of Ukl killed a shepherd and stole camels, he "ordered that their hands and legs should be cut off and that their eyes should be branded with heated pieces of iron, and that their cut hands and legs should not be cauterized, till they die"[^93][^94]. Another report adds that they were left in the heat, and "when they asked for water, no water was given to them". Quran 5:33 sets out this kind of penalty[^95].

**Slaves and captive women.** When a slave pledged allegiance to him and the master came to claim him, Muhammad bought him "for two black slaves"[^96]. The Quran permits relations with "those whom your right hands possess", including captured women who were already married (Quran 4:24)[^97][^98]. Muslim records the setting: at Awtas the companions held back from captive women whose husbands were alive, and the verse was revealed to permit them[^98]. Abu Said describes the raid on the Banu Mustaliq: "we received captives from among the Arab captives and we desired women and celibacy became hard on us", and when they asked about withdrawal, Muhammad said only that a soul destined to exist would exist[^99]. Another report shows the concern was also commercial: "we are interested in their prices"[^100]. Muslim tradition built a large body of law on slavery and concubinage from this, and abolition within Muslim lands came late and largely under outside pressure[^101][^102].

**Women.** Quran 4:34 authorises husbands to strike (وَاضْرِبُوهُنَّ, *wa-dribuhunna*) rebellious wives[^103]. Muhammad told a group of women that he had "not seen anyone more deficient in intelligence and religion than you"[^104][^105], and said of a woman's half-value testimony (Quran 2:282)[^106]: "This is because of the deficiency of a woman's mind"[^107][^104].

**Despair.** During the pause in revelation he "repeatedly went out intending to throw himself from the summits of high mountains", as set out under who taught him. Bukhari also records that a spell was cast on him, "until he would imagine that he had done something when he had not done it"[^108]. Yet his opponents' charge in the Quran is "You are only following a bewitched man" (Quran 25:8)[^109], which the Quran treats as false.

**Leaving Islam.** "If somebody (a Muslim) discards his religion, kill him"[^110][^111]. All the classical schools prescribed death for apostasy[^112][^111]. In Pew's 2013 survey, among Muslims who favour sharia as official law, medians of more than half in South Asia and the Middle East and North Africa backed the death penalty for leaving Islam, with lower support elsewhere[^113]. In 2019, 13 of the 20 countries in the Middle East and North Africa outlawed apostasy[^114].

Christians face hard texts of their own, and they are treated openly in [slavery](/categories/slavery), [women](/categories/women) and [is God evil](/categories/god-evil). The difference lies in the founder. Jesus ruled nothing, took no wife, killed no one, told Peter to put away his sword, and went to his death forgiving those who killed him.
`,
    },
    {
      id: "convenient-revelations",
      title: "Revelations That Suited Muhammad",
      tags: ["Muhammad", "Ethics"],
      content: `
A recurring pattern in the Quran is revelation that resolves a difficulty in Muhammad's private life in his favour.

**His adopted son's wife.** Muhammad's adopted son Zayd was married to Zaynab[^115][^116]. After the marriage ended, a revelation told Muhammad that God had given her to him in marriage, and rebuked him for hiding what he intended out of fear of people (Quran 33:37)[^116].

**Exemptions.** Muslim men may marry up to four wives (Quran 4:3)[^117]. Muhammad had more, and a revelation granted him women who offered themselves to him: "this is exclusively for you, not for the rest of the believers" (Quran 33:50)[^118]. In a dispute among his wives over a slave woman, Mariyah, tradition records another revelation releasing him from a promise and warning the wives (Quran 66:1-5)[^119][^120].

**Aisha noticed.** When these revelations came, his youngest wife told him: "I feel that your Lord hastens in fulfilling your wishes and desires"[^121]. The sentence is preserved in the most trusted hadith collection, in her own words.

**The satanic verses.** Early biographers, among them Ibn Ishaq as transmitted by al-Tabari, report that Muhammad, longing to win over the Meccans, recited words honouring their three goddesses as intercessors, and later withdrew them as having come from Satan[^122][^123]. Quran 53:19-20 names the goddesses[^124], and 22:52 says Satan interferes with the recitation of every prophet[^125]. Later orthodoxy rejected the story, and it is generally denied today. It is hard to explain why the earliest Muslim biographers would invent something so damaging.
`,
    },
    {
      id: "who-taught-muhammad",
      title: "Who Taught Muhammad?",
      tags: ["Muhammad", "Sources"],
      content: `
**The claim.** Muhammad could not read or write and had no human teacher, which is offered as proof that the Quran came from God (Quran 29:48)[^126].

**His own opponents said otherwise.** The Quran records the charge in his lifetime: "no one is teaching him except a human" (Quran 16:103). Its answer is that the man they mean speaks a foreign language, which does not address whether the ideas came from him[^127]. Others said he made it up "with the help of others" (Quran 25:4)[^128][^129][^130].

**Waraqa.** Islam's most trusted hadith collection places a Christian at the very start. Waraqa ibn Nawfal was Khadijah's cousin, a convert to Christianity who wrote out the Scriptures, and he was the first person to tell Muhammad he was a prophet. The same report continues: "But after a few days Waraqa died and the Divine Inspiration was also paused for a while"[^131][^132]. In that pause Muhammad "repeatedly went out intending to throw himself from the summits of high mountains", and each time was stopped by a voice telling him he was truly God's messenger[^132].

The sequence is striking and needs stating accurately. The pause ended, and revelations continued for over twenty years, so Waraqa's death did not stop them for good. What the sources show is that the one learned Christian in Muhammad's circle confirmed his call, that the revelation fell silent when that man died, and that its recipient was suicidal during the silence.

**The heretical monk.** Muslim biographers tell of a Christian monk, Bahira, who recognised the boy Muhammad as a future prophet on a caravan journey to Syria[^133]. Christian writers turned the story around and claimed that Bahira was a heretical monk whose errors inspired the Quran[^129]. John of Damascus, writing about a century after Muhammad, says he devised his teaching "after conversing with an Arian monk"[^134][^129].

No document proves that a particular heretic tutored him. John was a polemicist writing long afterwards, and the monk stories are legendary in their details on both sides. The strongest evidence is in the Quran itself: its picture of Jesus and Christianity matches the heretical and apocryphal writings of the time far more closely than it matches the New Testament, as the next section sets out.
`,
    },
    {
      id: "quran-sources",
      title: "Heresy and Legend in the Quran",
      tags: ["Quran", "Sources"],
      content: `
The Quran presents itself as revelation correcting what Christians had distorted. Yet several of its stories about Jesus and Mary are not in the New Testament and are found in later Christian legends and heretical writings that circulated in the centuries before Muhammad.

* **Birds made of clay.** Jesus says "I will make for you a bird from clay, breathe into it and it will become a real bird" (Quran 3:49)[^135]. The story of the child Jesus bringing clay sparrows to life comes from the *Infancy Gospel of Thomas*, a legendary work usually dated to the second century[^136][^137].
* **Speaking from the cradle.** The infant Jesus defends his mother in speech (Quran 19:29-30)[^138]. The miracle appears in the Arabic Infancy Gospel, not in the New Testament[^139][^140].
* **Mary's childhood.** Her dedication as a child and her upbringing in the sanctuary follow the *Protoevangelium of James*, a second-century text of pious legend[^141][^142].
* **The Sleepers in the Cave.** The Quran's companions of the cave are the late antique Christian legend of the Seven Sleepers of Ephesus[^143][^144].
* **Someone else on the cross.** The claim that Jesus only appeared to be crucified (Quran 4:157) has a precedent in Gnostic teaching: Irenaeus reports Basilides saying that Simon of Cyrene was substituted for him[^145][^146].
* **Mary in the Godhead.** The Quran has God ask Jesus whether he told people to worship "you and your mother as gods besides Allah" (Quran 5:116)[^147][^148]. No Christian creed teaches that[^149][^150]. A fourth-century bishop did report a fringe group, the Collyridians, who venerated Mary as a goddess, though their existence rests largely on his word[^151].

The usual reply is that these stories are true and that revelation confirmed them. That can be refuted on the dating: these are the writings that historians of every persuasion identify as late and legendary, while the earliest sources on Jesus are silent about any of it. A book correcting the Gospels from heaven would not be expected to repeat the legends of the age it appeared in, and one drawing on Christian hearsay in seventh-century Arabia would be. Norman Geisler and other Christian critics draw the same conclusion from the Quran's reliance on folklore, apocrypha and heretical traditions[^148].

**Pagan rites retained.** The pilgrimage rites Muhammad reformed were pre-Islamic[^152], and the Black Stone in the Kaaba was venerated before Islam[^153][^152]. Umar is reported as saying to the stone that he knew it could neither benefit nor harm, and that he kissed it only because he had seen the Prophet do so[^154][^153]. The rites are traced to Abraham, for which there is no evidence earlier than the Quran.
`,
    },
    {
      id: "medicine-of-the-time",
      title: "The Science and Medicine of His Day",
      tags: ["Errors", "Sources"],
      content: `
A revelation from the Creator would be expected to rise above the mistaken science of its day. Time and again the Quran and hadith instead repeat what educated people around the Mediterranean and Near East already believed. No source shows Muhammad reading these authors, and the ideas could have reached Arabia by many routes, but the match is the point: the beliefs are those of the age, with the same mistakes.

**A physician in his circle.** Al-Harith ibn Kalada, an Arab physician of Muhammad's time, is said to have travelled to the medical centre of Gundeshapur in Persia[^155]. Abu Dawud has Muhammad sending a sick companion to him: "Go to al-Harith ibn Kaladah, brother of Thaqif. He is a man who gives medical treatment", though Albani grades that report weak[^156].

**Semen and the backbone.** The Quran's statement that the fluid comes "from between the backbone and the ribcage" (Quran 86:7) matches the older Greek idea. Plato's *Timaeus* speaks of "the marrow which passes from the head along the neck and through the back, and which in the preceding discourse we have named the seed"[^157]. Hippocrates held that semen was drawn from the whole body[^158][^159].

**A woman's seed and the child's likeness.** Greek medicine disagreed over whether women produce seed, and Galen returned to the Hippocratic view that both parents do[^159], against Aristotle, who assigned semen the active role[^160][^159]. Abdullah b. Salam tested Muhammad with "three things that only a prophet knows", among them why a child resembles a parent. The answer was: "when a man has intercourse with a woman and his fluid precedes hers, the resemblance is to him; but if her fluid precedes his, the resemblance is to her"[^161]. The question was framed as knowledge only a prophet could have, and the answer is the two-seed theory of the physicians, with a mistake of its own. Children inherit from both parents through their genes, whatever the order of events[^162].

**Forty days.** Muhammad taught that each person "is brought together in his mother's womb for forty days; then he becomes a clinging clot for a similar period; then he becomes a morsel of flesh for a similar period"[^163]. Aristotle had recorded that a male child's first movement comes "about the fortieth day"[^164], so the figure was already in Greek writing on the embryo. Modern embryology has no such 120-day schedule: by day forty the embryo already has a beating heart and limb buds. The Quran's order runs from drop to clot to lump, "then developed the lump into bones, then clothed the bones with flesh" (Quran 23:14)[^165], and bone and muscle in fact form together from the same early tissue.

**Medicine and humours.** "Healing is in three things: A gulp of honey, cupping, and branding with fire", though he discouraged the last[^166]. Cupping goes back to Hippocrates[^167] and belongs with the theory of humours later systematised by Galen[^168][^169]. Later Muslim scholars such as Ibn Qayyim al-Jawziyya wrote a whole "prophetic medicine", working to reconcile the traditions with Galenic humoral theory[^170]. The fit was natural, since both came from the same world.

**Claims about health that do not hold up.**

* "In the black seed there is healing from every disease except al-sam", that is, death[^171].
* "If a house fly falls in the drink of anyone of you, he should dip it (in the drink) and take it out, for one of its wings has a disease and the other has the cure"[^172].
* He prescribed camel urine as medicine[^94][^173]. The World Health Organization warns against it as a route of MERS infection[^173].
* "He who eats seven 'Ajwa dates every morning, will not be affected by poison or magic on the day he eats them"[^174]. He himself was affected by both.
* "Fever is from the heat of Jahannam, so cool it with water"[^175][^166].
* "The effect of an evil eye is a fact"[^176].
* On contagion he said there is "no 'Adwa", and in the same breath that "one should run away from the leper as one runs away from a lion"[^177]. Scholars have long worked to reconcile the two.

**The edge of the world.** The Quran's journey of Dhu al-Qarnayn to where the sun sets in murky water (Quran 18:86) closely follows the Syriac legend of Alexander the Great, in which Alexander travels to the fetid sea at the edge of the world[^178]. Most modern scholars associate the two figures, though the date and direction of dependence are debated[^179].

**The reply.** The usual reply is that Muhammad spoke in the terms of his people, or that these matters were personal opinion rather than revelation. This can be refuted from the texts themselves: the Quran states the semen and embryo claims as God's word, and the resemblance answer is introduced with "Jibril informed me of them just now". The same question can fairly be put to the Bible, which also speaks in the idiom of its day, as the [evolution topic](/categories/evolution) discusses. The Bible, however, makes no claim to have been dictated word for word from heaven, and it does not offer the physiology of its age as proof of prophecy.
`,
    },
    {
      id: "factual-errors",
      title: "Errors That Cannot Be Reworded",
      tags: ["Errors"],
      content: `
Many popular criticisms of the Quran turn on the meaning of an Arabic word, and can be answered with another translation. The following do not. Each is a plain statement about the world, and the hadith often removes any doubt about what was meant.

**Semen comes from between the backbone and the ribs.** Man is "created from a spurting fluid, stemming from between the backbone and the ribcage" (الصُّلْبِ وَالتَّرَائِبِ, *al-sulb wa'l-tara'ib*, Quran 86:6-7)[^180]. The classical commentator Ibn Kathir reads it as "the backbone or loins of the man and the ribs of the woman"[^181]. Sperm is made in the testes, and the fluid is added by the seminal vesicles and prostate[^182]; none of it comes from there. Modern apologists point out that the testes begin their development in the embryo near the kidneys. They then descend long before birth, and the verse is describing where the fluid comes from when a person is conceived.

**The moon was split in two.** "The Hour has drawn near and the moon was split in two" (Quran 54:1)[^183]. Some commentators treat this as a future event, but the hadith leaves no room for that: the Meccans asked him "to show them a miracle, and so he showed them the splitting of the moon"[^184], and Muslim's collection reports the same event[^185][^111]. An event visible across half the world left no record among the astronomers of any other civilisation, and a NASA scientist answering the popular claim about a lunar rille said that "no current scientific evidence" indicates the moon was ever split and reassembled[^186]. The only outside support offered is a medieval Indian legend about a king, Cheraman Perumal, which is late.

**The sun goes to bow beneath God's throne.** Muhammad asked Abu Dharr where the sun goes at sunset, and answered: "it goes (i.e. travels) till it prostrates itself underneath the Throne and takes the permission to rise again"[^187][^188]. He also told him it "sets in a spring of warm water"[^188][^187], which matches the Quran's account of a traveller who found the sun setting in a spring of dark water (عَيْنٍ حَمِئَةٍ, *'aynin hami'ah*, Quran 18:86)[^189]. Translators often add that it only "appeared" so, and that softening might rescue the verse. It cannot rescue Muhammad's own explanation, in which the sun physically travels each night.

**Shooting stars are missiles thrown at devils.** God "adorned the lowest heaven with stars like lamps and made them as missiles for stoning eavesdropping devils" (Quran 67:5)[^190], devils who try to listen in on the angels (Quran 37:6-10)[^191]. Meteors are grains of rock and dust burning up in the atmosphere[^192], and stars are not in a lower heaven nearer than the planets.

**Adam was sixty cubits tall.** "Allah created Adam, making him 60 cubits tall", and "people have been decreasing in stature since Adam's creation"[^193]. That is about 27 metres. Skeletons of ancient humans show nothing of the kind, as the [human fossil record](/categories/evolution) makes clear.

**Why these reports cannot simply be discarded.** Sunni Muslims value Bukhari and Muslim as the most authentic texts after the Quran[^194]. To set these reports aside is to concede that the collection that defines Muhammad's example contains falsehoods, and the same collection supplies the details of prayer, fasting and pilgrimage.

**Weaker charges, stated as such.** Several other charges are often made and have standard replies that are harder to rule out. The Quran calls Mary "sister of Aaron" (Quran 19:28)[^195] and "daughter of Imran" (Quran 66:12)[^196], as though confusing her with Moses' sister, and Christians raised this in Muhammad's time. His reply was that people were named after earlier prophets[^197]. The Quran places Haman in Pharaoh's court building a tower (Quran 28:38)[^198][^199][^200], where the Bible's only Haman is a Persian official many centuries later[^201][^199], and the usual reply is that this is a different Haman[^199]. The Quran says the Jews called Ezra the son of God (Quran 9:30)[^202][^148]; no such Jewish belief is known, though a lost sect has been proposed. These are worth raising, and they are not the strongest points.
`,
    },
    {
      id: "late-sources",
      title: "How Late the Sources Are",
      tags: ["Sources"],
      content: `
The earliest full biography of Muhammad was composed by Ibn Ishaq, who died about 767, around 135 years after Muhammad, and his work has perished except as edited by Ibn Hisham in the ninth century[^203]. Al-Bukhari, compiler of the most trusted hadith collection, died in 870, more than two centuries after the events[^204][^205]. Non-Muslim references appear much earlier, with the *Doctrina Jacobi* of about 634 speaking of a prophet among the Saracens[^206], but these say little about his life.

By contrast, Paul's letters were written about twenty years after Jesus, and Mark's Gospel within about forty[^207][^208]. The usual answer is that the chains of named narrators (*isnad*) guarantee the hadith. Those chains were themselves recorded late, and Muslim scholars have always acknowledged that vast numbers of reports were forged, which is why they sifted them[^209].

<?viz islam/source-gap?>

The problem cuts two ways. Anyone who rejects the hadith to avoid such errors, as the Quranists do, loses the source for how to pray, for most of Muhammad's biography, and for the very occasions that make the Quran understandable[^210].
`,
    },
    {
      id: "preservation",
      title: "Was the Quran Perfectly Preserved?",
      tags: ["Quran"],
      content: `
**The claim.** "It is certainly We who have revealed the Reminder, and it is certainly We who will preserve it" (Quran 15:9)[^211]. Popular apologetics takes this to mean that every letter has been kept without variation.

**What Islam's own sources record.**

* **Rival Qurans were burned.** Under the caliph Uthman, around 650, a standard text was prepared because people were disputing over readings. He "ordered that all the other Quranic materials, whether written in fragmentary manuscripts or whole copies, be burnt"[^212][^213][^214]. Texts in perfect agreement would have needed no burning.
* **Companions' copies differed.** The codices of Ibn Masud and others, close companions of Muhammad, are reported to have differed from the Uthmanic text[^213].
* **A verse Umar said was lost.** The caliph Umar said that God revealed the verse of stoning, that "we did recite this verse", and that he feared people would one day say it was not in God's book[^215]. It is not in the Quran today.
* **A verse eaten by a goat.** Aisha is reported as saying the verse of stoning and a verse about suckling were on a paper under her bed, and that when the Prophet died a domestic animal came in and ate it[^216]. Scholars dispute this report's reliability, though it sits in a recognised collection.
* **Verses that changed.** Aisha is also reported as saying that the Quran had said ten sucklings establish a family bond, then five, and that this was still being recited when Muhammad died[^217].
* **Forgotten chapters.** A companion, Abu Musa, told the reciters of Basra that they used to recite a chapter about the length of the ninth, which he had forgotten except for one line[^218].

**What the manuscripts show.** The lower text of the Sana'a palimpsest, written over and erased, contains a version of the Quran that differs from the standard one in wording[^219][^148]. Radiocarbon dating placed the parchment of the Birmingham folios between 568 and 645, which fits an early date but dates the animal skin and not the writing[^220][^221]. Different recitations (*qira'at*), such as Hafs and Warsh, also survive with real differences in wording[^222].

<?viz islam/manuscripts?>

**A fair statement.** After Uthman the text was transmitted with considerable care, and the Quran is an unusually stable book from then on. That is not the claim being made. The claim is divine preservation of what was revealed, and on Islam's own reports some of it was burned, some forgotten and some lost.

The New Testament's variants, by contrast, are visible in thousands of manuscripts across several regions because no authority ever tried to destroy the alternatives, which is why the original can be reconstructed. The [Bible translations topic](/categories/bible-translations) sets out that evidence.

**See also:** [What Translators Actually Translate: The Manuscripts (Bible Translations)](/categories/bible-translations#section-manuscripts).
`,
    },
    {
      id: "contradictions",
      title: "Contradictions and Abrogation",
      tags: ["Quran", "Errors"],
      content: `
The Quran says that had it been from anyone other than God, people "would have certainly found in it many inconsistencies" (Quran 4:82)[^223]. It also tells Muslims that some of its verses have been replaced: "If We ever abrogate a verse or cause it to be forgotten, We replace it with a better or similar one" (Quran 2:106)[^224][^14]. Critics in Muhammad's lifetime saw what this meant: "when We replace a verse with another", the Quran reports, "they say, you are just a fabricator" (Quran 16:101)[^225]. Muslim scholars developed a whole science of which verses cancel which[^14][^148].

**No compulsion, or fighting until they pay?** "Let there be no compulsion in religion" (Quran 2:256)[^226][^111] is the verse most often quoted to outsiders. Against it stand "kill the polytheists who violated their treaties wherever you find them" (Quran 9:5)[^227][^148] and "fight those who do not believe in Allah and the Last Day" among the people of the Scripture "until they pay the tax, willingly submitting, fully humbled" (Quran 9:29)[^228]. Muhammad said: "I have been ordered to fight against the people until they testify that none has the right to be worshipped but Allah"[^229]. Classical scholars debated whether the sword verse abrogated earlier tolerant ones, and many held that it did[^230]. Modern Muslims often restrict the later verses to their historical setting. The order of the verses and the record of the conquests are harder to explain that way.

**Arithmetic that does not add up.** Quran 4:11-12 sets fixed shares of an estate[^231]. Take a man who dies leaving two daughters, both parents and a wife. The daughters receive two-thirds, each parent one-sixth, and the wife one-eighth. That comes to 27/24 of the estate, which is more than there is. Sunni jurists handle it by reducing every share proportionally, a procedure called *'awl* that is not in the Quran and that follows a ruling of the caliph Umar; Ibn Abbas opposed it, and Shia jurists reject it and reduce only some heirs[^232]. A rule given by an all-knowing God would not need a human correction for the sum.
`,
    },
    {
      id: "gospel-dilemma",
      title: "The Quran's Problem with the Bible",
      tags: ["Quran", "Bible"],
      content: `
This is the most serious difficulty in Islam, because it does not depend on any disputed science or history.

**The Quran affirms the Bible.** It tells the Christians of Muhammad's day: "let the people of the Gospel judge by what Allah has revealed in it" (Quran 5:47)[^233]. It tells Jews and Christians that they "have nothing to stand on unless you observe the Torah, the Gospel, and what has been revealed to you" (Quran 5:68)[^234]. It even tells Muhammad, if in doubt, to "ask those who read the Scripture before you" (Quran 10:94)[^235]. And it states that "none can change His words" (Quran 6:115)[^236].

**The Bible contradicts the Quran.** The Gospels teach that Jesus was crucified, died and rose, that he is the Son of God, and that he is the only way to the Father.

**The usual answer is that the Bible was corrupted.** This doctrine (*tahrif* (تَحْرِيف, corruption of Scripture)) is widely held[^237][^238], but it produces a dilemma with no exit.

* If the Bible of Muhammad's day was reliable, the Quran is false, because it contradicts that Bible on the central facts.
* If the Bible of Muhammad's day was already corrupted, the Quran is still false, because it tells Christians to judge by a corrupted book and to consult its readers, and says that God's words cannot be changed.

**The manuscripts close the remaining route.** The suggestion that the corruption came after Muhammad fails because the text survives from well before him. Codex Sinaiticus and Codex Vaticanus were copied in the fourth century, about three hundred years before the Quran[^239][^240][^241][^242]. The Bible that Muhammad's contemporaries held is the Bible Christians read now.
`,
    },
    {
      id: "does-the-bible-predict-muhammad",
      title: "Does the Bible Predict Muhammad?",
      tags: ["Bible", "Objections"],
      content: `
**The claim.** The Quran says that Jesus gave "good news of a messenger after me whose name will be Ahmad" (Quran 61:6)[^243][^244][^245], and that Muhammad is the one "whose description they find in their Torah and the Gospel" (Quran 7:157)[^246]. Many passages have therefore been offered as predictions of him. Every one of them can be refuted from its own context, and the Quran's claim sets up a test: if his description is not in the Torah and Gospel that existed in his day, the Quran is mistaken. Those texts survive from before his time.

**Deuteronomy 18:15-18.** God will raise up a prophet "like you from among their fellow Israelites". The argument is that Ishmael's descendants are the brothers of Israel. But the same phrase in Deuteronomy 17:15 forbids a foreign king, and it plainly means fellow Israelites. Deuteronomy 18:1-2 uses "fellow Israelites" of the other tribes of Israel. Deuteronomy 34:10 says that no prophet like Moses had arisen, one "whom the LORD knew face to face", and Muhammad by his own account never spoke with God face to face. Peter applies the passage to Jesus (Acts 3:22-26).

**Deuteronomy 33:2.** "The LORD came from Sinai... he shone forth from Mount Paran." Paran is identified with Mecca, because Ishmael lived in the desert of Paran (Genesis 21:21). Yet Israel camped in Paran after leaving Sinai (Numbers 10:12), in the wilderness south of Canaan and over a thousand kilometres from Mecca, and the verse describes the past, the LORD coming to give the law to Moses.

**Song of Songs 5:16.** The Hebrew *machmaddim* (מַחֲמַדִּים, desirable things) is said to be the name Muhammad, since the words share a root. It is a common word with a plural ending, meaning "desirable things", and is used of "treasures" in Hosea 9:6 and of valuables in 1 Kings 20:6. The speaker is a bride describing her lover, whom the next line calls "my beloved".

**Isaiah 42.** The servant, in whom God delights and who will bring justice to the nations, is linked to Muhammad because Kedar, an Arab tribe, is called to rejoice in verse 11. Kedar is one of several places in the list, Sela being another. The servant "will not shout or cry out", and "a bruised reed he will not break" (Isaiah 42:2-3), a description hard to apply to a military commander. Matthew 12:18-21 applies it to Jesus.

**Ishmael.** Genesis 17:20-21 promises Ishmael blessing and twelve rulers, and in the same sentence says, "But my covenant I will establish with Isaac." The promise to Ishmael is real, and the covenant line is explicitly elsewhere.

**The Paraclete.** The strongest and most popular claim concerns Jesus' promise of "another advocate" (*parakletos* (παράκλητος, advocate)) in John 14 to 16. Many Muslim writers argue that this is Muhammad[^244], and some say the original word was *periklytos* (περικλυτός, praised one), "praised one", which would match the meaning of Ahmad. No Greek manuscript of John has that reading. The text answers the claim directly:

* He is "the Spirit of truth", "the Holy Spirit" (John 14:17, 26).
* The world "neither sees him nor knows him. But you know him, for he lives with you and will be in you" (John 14:17). Those words were spoken to the disciples six centuries before Muhammad.
* He will be with them "forever" (John 14:16). Muhammad died.
* He comes in Jesus' name, and "will glorify me" (John 14:26; 16:14). Muhammad denied Jesus' divinity and crucifixion.
* Jesus told the disciples to wait in Jerusalem for him (Acts 1:4-5), and he came at Pentecost, days later (Acts 2).

**The Gospel of Barnabas.** This work has Jesus deny being the Messiah and foretell Muhammad by name, and it is sometimes offered as the true Gospel. Scholars date it to the late medieval period or later. It uses medieval Italian conventions, and it has a jubilee every hundred years, a rule introduced by Pope Boniface VIII in 1300, where the Jewish jubilee is every fifty[^247][^248]. It also contradicts the Quran by denying that Jesus is the Messiah.

**The result.** The Quran calls these Scriptures a witness to Muhammad, yet none of the proposed passages describes him. The [prophecy topic](/categories/prophecy) sets out what the Old Testament does foretell.

**See also:** [Jewish Objections to Jesus as Messiah (Other Religions)](/categories/religions#section-jewish-objections).
`,
    },
    {
      id: "heaven-and-hell",
      title: "Paradise and Hell in Islam",
      tags: ["Quran", "Basics"],
      content: `
Islam's picture of the afterlife is vivid and concrete, and comes in part from the highest-rated sources.

**Paradise.**

* **Gardens and rivers.** "Rivers of fresh water, rivers of milk that never changes in taste, rivers of wine delicious to drink, and rivers of pure honey" (Quran 47:15)[^249]. Wine forbidden on earth is promised there. Believers recline on thrones, "waited on by eternal youths" who look like "scattered pearls" (Quran 76:19)[^250].
* **The maidens.** "We will pair them to maidens with gorgeous eyes" (حُورٍ عِينٍ, *hurin 'in*, Quran 44:54)[^251], "like pristine pearls" (Quran 56:22-23)[^252], "reserved in pavilions" (Quran 55:72)[^253], whom "no human or jinn has ever touched" (Quran 55:56)[^254]. God has made them "virgins, loving and of equal age" (Quran 56:36-37)[^255], and the righteous receive "full-bosomed maidens of equal age" (كَوَاعِبَ, *kawa'iba*, Quran 78:33)[^256]. Ibn Kathir reports Ibn Abbas and Mujahid explaining the word as "round breasts", maidens "with fully developed breasts"[^257].
* **Their bodies.** "Everyone of them will have two wives; the marrow of the bones of the wives' legs will be seen through the flesh out of excessive beauty"[^258][^259], and "there would be none without a wife in Paradise"[^259][^258].
* **The pavilion.** "In Paradise there is a pavilion made of a single hollow pearl sixty miles wide, in each corner of which there are wives who will not see those in the other corners; and the believers will visit and enjoy them"[^260].
* **The martyr.** He "is married to seventy two wives" and may intercede for seventy relatives. Tirmidhi grades this report *hasan sahih*; it is not in Bukhari or Muslim[^261]. The popular "72 virgins for everyone" goes beyond the report.
* **Women.** "Whether male or female", believers enter paradise, and the Quran promises reward to men and women alike (Quran 33:35)[^262]. The specific descriptions of pleasure are nonetheless written from a man's point of view.
* **God.** The hadith above ends with nothing preventing believers from seeing their Lord "except the curtain of Majesty over His Face". Fellowship with God is not what the texts dwell on.

**Hell.**

* **Fire.** "Whenever their skin is burnt completely, We will replace it so they will constantly taste the punishment" (Quran 4:56)[^263]. Earthly fire is "one of 70 parts" of hell's[^264].
* **Clothing and water.** "Garments of Fire will be cut out for them and boiling water will be poured over their heads, melting whatever is in their bellies, along with their skin. And awaiting them are maces of iron" (Quran 22:19-21)[^265].
* **Food and drink.** They drink "oozing pus, which they will sip with difficulty", and "death will overwhelm them from every side, yet they will not be able to die" (Quran 14:16-17)[^266]. They eat from the tree of Zaqqum, which grows "in the depths of Hell" (Quran 37:64-67)[^267], and it boils in the belly "like molten metal" (Quran 44:45-46)[^268].
* **The lightest punishment.** "A man under whose arch of the feet a smoldering ember will be placed so that his brain will boil because of it"[^269]. Muhammad's uncle Abu Talib, who protected him all his life and did not convert, "is in a shallow fire"[^270].
* **Women in hell.** "I looked at Hell and saw that the majority of its inhabitants were women"[^271][^104], because they "are ungrateful to their husbands"[^105][^104].
* **Everyone passes over it.** "There is none of you who will not pass over it" (Quran 19:71)[^272]. Muhammad said that no one, including himself, enters paradise by deeds alone, only by God's mercy.
* **Ransom.** "When it will be the Day of Resurrection Allah would deliver to every Muslim a Jew or a Christian and say: That is your rescue from Hell-Fire"[^273].

**How this compares.** The Bible also speaks of hell in severe terms, as the [hell topic](/categories/hell) sets out. The largest differences are in what heaven is and how it is reached. Jesus said that at the resurrection people "will neither marry nor be given in marriage" (Matthew 22:30). The centre of the New Testament's hope is God himself: "God's dwelling place is now among the people... He will wipe every tear from their eyes" (Revelation 21:3-4). And the believer goes there on the ground of a finished work, with assurance, not on the outcome of a scale. Nobody is offered as a ransom for anyone else, except the one who gave himself.
`,
    },
    {
      id: "jesus-in-the-quran",
      title: "Jesus in the Quran",
      tags: ["Bible", "Quran"],
      content: `
The Quran honours Jesus: born of a virgin, called the Messiah, a worker of miracles. It denies the two things that matter most.

**He was not crucified.** "They neither killed nor crucified him, it was only made to appear so" (شُبِّهَ لَهُمْ, *shubbiha lahum*, Quran 4:157)[^274][^148]. This single verse, written about six hundred years after the event, by a man in Arabia with no access to the sources, stands against every first-century source there is. Christian writers, the Roman historian Tacitus and the Jewish historian Josephus all report the execution, and his crucifixion is among the most secure facts of ancient history[^275][^276]. If God made someone else look like Jesus, he deceived the disciples, and on the Quran's own account he founded Christianity by that deception. The [resurrection topic](/categories/resurrection) sets out the evidence.

**He is not the Son of God.** The Dome of the Rock in Jerusalem, built in 691 and the earliest large Islamic monument, carries inscriptions aimed directly at Christians[^277]. "Those who say Allah is one in a Trinity have certainly fallen into disbelief" (Quran 5:73)[^278][^148]. The reasoning given is that Jesus and Mary "both ate food" (Quran 5:75), which answers a belief Christians do not hold. The [Trinity topic](/categories/trinity) sets out what they do hold.

**What Islam itself says of the two.** Muslims teach that Jesus was born of a virgin and that Muhammad was not (Quran 19:20). They teach that Jesus was "a pure son" (Quran 19:19) who is never told to seek forgiveness, while Muhammad is told to do so more than once (Quran 47:19). The Quran credits Jesus with healing the blind and the leper and raising the dead (Quran 3:49), and when Muhammad is asked for signs it replies that "Signs are only with Allah" and that the Book is enough (Quran 29:50-51)[^279]. Later hadith attribute miracles to Muhammad, such as the splitting of the moon, but the Quran itself does not credit him with healing or raising anyone. On Islam's own account, then, the one it calls a lesser prophet is the one without sin, born of a virgin and raising the dead, and those facts raise the question of why he should not be followed above the one who came after him.

**The consequences.** Without the cross there is no atonement. Islam offers a scale and an unknown verdict; the gospel gives a sinner a substitute and a certain one.

**See also:** [Jesus' Claims](/categories/jesus).
`,
    },
    {
      id: "history-and-war",
      title: "Conquest and War",
      tags: ["History"],
      content: `
Christianity spread for three centuries as a persecuted minority with no army. Islam spread within a generation by conquest, as its own historians record with pride.

**The first wars.** When Muhammad died, Arabian tribes that tried to leave the new state were brought back by force in the Ridda (apostasy) wars of 632 to 633[^280][^281].

**The great conquests.** Muslim armies took Syria and Palestine between 634 and 638, breaking Byzantine power at the Yarmuk in 636[^282][^283][^31]. They broke the Persian army at al-Qadisiyyah[^284][^285] and ended the Sasanian Empire by 651[^286][^287], took Egypt between 639 and 642[^288][^283], and entered Spain in 711[^289][^290], until the advance into France was checked near Tours in 732[^291][^292]. Within about a century of Muhammad's death the old Christian heartlands of the Near East and North Africa were under Muslim rule[^293][^294].

**Life under Islam.** Jews and Christians could keep their faith as *dhimmi*, protected subjects who paid the jizya tax[^295][^296], with the humbling that Quran 9:29 requires, and the theologian al-Razi described the tax as an incentive to convert[^297][^228]. The Pact of Umar, the traditional statement of their terms, has Christians promise not to erect a monastery or church or restore any place of worship in need of repair[^298][^299]. Conversion was often gradual, and historians caution against imagining forced mass conversion as the rule[^300]. This was tolerance by the standards of its age, and it was also a permanent second-class status.

**Civil war.** The first civil war of 656 to 661 began within a generation of Muhammad[^301][^302]. Three of the first four caliphs were assassinated[^31][^303].

**Crusades and Constantinople.** After the Seljuk victory at Manzikert in 1071 opened Anatolia[^304][^305], the Byzantine emperor appealed to the West, and the First Crusade followed[^306][^307]. The Crusades included real atrocities by Christians, among them massacres, which Jesus' teaching condemns[^308][^309]. They were also a late response to four and a half centuries of conquest. The Ottomans took Constantinople in 1453[^310][^311] and took Christian boys as a levy for their army and state, the *devshirme*[^312].

**Slavery.** An estimated 10 to 18 million Africans were enslaved by Arab traders between the seventh and twentieth centuries[^313][^101]. **Armenians.** The Ottoman state's destruction of its Armenian Christians during the First World War is among the worst crimes of the modern era, though it had nationalist as well as religious motives[^314][^315].

**A fair statement.** Muslim civilisation also produced great achievement in medicine, mathematics and scholarship, and most Muslims living now are peaceful and want nothing to do with those who kill in Islam's name. The argument here concerns the founder and the pattern he set: a religion that spread by the sword in its first century has a different origin from one whose founder was killed by the sword and whose first followers died rather than draw it.
`,
    },
    {
      id: "after-muhammad",
      title: "From the Caliphs to Today",
      tags: ["History"],
      content: `
**The first caliphs (632 to 661).** Abu Bakr, Umar, Uthman and Ali succeeded Muhammad, and under them the conquests began[^316][^317]. Their rule ended in civil war.

**The Umayyads (661 to 750).** Ruling from Damascus, this dynasty took the empire from Spain to Central Asia and made Arabic the language of government[^318][^319]. The Dome of the Rock is theirs.

**The Abbasids (750 to 1258).** They overthrew the Umayyads, moved the capital to Baghdad, and presided over the height of Islamic learning, until the Mongols sacked Baghdad in 1258[^320][^321].

**Al-Andalus (711 to 1492).** Muslim rule in Spain produced a brilliant culture. Periods of relative tolerance alternated with periods of harsh rule, and it ended with the fall of Granada in 1492[^322].

**The Ottomans (about 1300 to 1924).** The Ottoman sultans claimed the caliphate, and Turkey abolished it in 1924[^323][^324]. It has not been restored by any widely recognised authority.

**Modern movements.** Muhammad ibn Abd al-Wahhab's strict reform movement of the eighteenth century allied with the House of Saud and shaped Saudi Arabia[^325][^326]. The Muslim Brotherhood, founded by Hassan al-Banna in Egypt in 1928, sought to order society by sharia[^327][^328]. In 2014 the Islamic State declared a caliphate in Iraq and Syria and restored slavery and public executions, citing the early sources[^329]. The great majority of Muslims and their scholars reject it, and its victims were mostly Muslims. Its existence still raises the question of what the founder's example permits.
`,
    },
    {
      id: "muslim-objections",
      title: "Common Objections to Christianity",
      tags: ["Objections"],
      content: `
**"The Bible has been corrupted."** When, by whom, and how, given that copies were already spread across three continents and in a dozen languages? See the section on the Quran's problem with the Bible.

**"Jesus never said 'I am God, worship me.'"** He claimed the divine name, forgave sins, accepted worship and was condemned for blasphemy. A specific form of words is not the only way to claim deity. The [topic on Jesus' claims](/categories/jesus) has the detail.

**"The Trinity is three gods, and it is illogical."** Christians confess one God. The doctrine says one in essence and three in person, not one and three in the same sense. See [the Trinity](/categories/trinity).

**"Paul invented Christianity."** The creed Paul quotes in 1 Corinthians 15 was formed within a few years of the crucifixion and received from those before him, and he records that Peter, James and John extended him fellowship (Galatians 2:9). The Quran also praises Jesus' disciples as standing up for God (Quran 61:14)[^330], which leaves it unexplained how the movement they led went wrong so early and left no trace of the supposed original.

**"No one can produce anything like the Quran."** The challenge (Quran 2:23)[^331] names no objective test. Literary excellence is not evidence of divine authorship, or Homer and Shakespeare would qualify. Muhammad's Meccan critics themselves dismissed its stories as tales of the ancients.

**"The Quran predicted modern science."** Such claims are read back after science discovers something, and depend on stretching Arabic words[^332]. A book with these errors cannot be saved by reading modern physics into its vaguest lines.
`,
    },
    {
      id: "arguments-to-leave-out",
      title: "Arguments Not Worth Making",
      tags: ["Objections"],
      content: `
A weak argument is easily refuted and damages the strong ones beside it, and several circulate among Christians.

* **"Allah is a moon god."** Arabic-speaking Christians and Jews use Allah as the word for God[^333][^334]. The problem with Islam's God lies in what the Quran says about him, not in the name.
* **"The seas that do not mix."** Critics and apologists both cite the Quran's two seas with a barrier between them (Quran 55:19-20)[^335]. The waters meant can always be redefined, and nothing is settled.
* **Word-level disputes over embryology.** The stages in Quran 23:14, where bones come before flesh, are argued over by reading the Arabic words loosely or strictly. The claim about the source of semen is plainer, and it is the better one to raise.
* **Treating all Muslims as the worst Muslims.** Most reject terrorism and many are ashamed of it. Pressing the point on the person in front of you is unjust, and it closes the conversation.
* **Winning the argument and losing the person.** Peter's instruction covers this: "with gentleness and respect" (1 Peter 3:15).
`,
    },
  ],
  sources: [
    "1. [Academic] Pew Research Center. 'How the Global Religious Landscape Changed From 2010 to 2020.' https://www.pewresearch.org/religion/2025/06/09/how-the-global-religious-landscape-changed-from-2010-to-2020/",
    "2. [Reference] BBC Religions. 'Islam: Five Pillars of Islam.' https://www.bbc.co.uk/religion/religions/islam/practices/fivepillars.shtml",
    "3. [Wikipedia] 'Five Pillars of Islam.' https://en.wikipedia.org/wiki/Five_Pillars_of_Islam",
    "4. [Primary Source] The Quran 33:21. Quran.com. https://quran.com/33/21",
    "5. [Wikipedia] 'Battle of Karbala.' https://en.wikipedia.org/wiki/Battle_of_Karbala",
    "6. [Primary Source] The Quran 46:9. Quran.com. https://quran.com/46/9",
    "7. [Primary Source] Sahih al-Bukhari 5673. Hadith Unlocked. https://hadithunlocked.com/bukhari:5673",
    "8. [Primary Source] The Quran 3:42. Quran.com. https://quran.com/3/42",
    "9. [Primary Source] The Quran 5:82. Quran.com. https://quran.com/5/82",
    "10. [Primary Source] The Quran 2:177. Quran.com. https://quran.com/2/177",
    "11. [Primary Source] The Quran 107:1-3. Quran.com. https://quran.com/107/1-3",
    "12. [Primary Source] The Quran 16:90. Quran.com. https://quran.com/16/90",
    "13. [Primary Source] The Quran 5:90. Quran.com. https://quran.com/5/90",
    "14. [Wikipedia] 'Abrogation in Islam.' https://en.wikipedia.org/wiki/Abrogation_in_Islam",
    "15. [Primary Source] The Quran 5:32. Quran.com. https://quran.com/5/32",
    "16. [Primary Source] Sahih al-Bukhari 13. Hadith Unlocked. https://hadithunlocked.com/bukhari:13",
    "17. [Primary Source] The Quran 81:8-9. Quran.com. https://quran.com/81/8-9",
    "18. [Primary Source] The Quran 6:151. Quran.com. https://quran.com/6/151",
    "19. [Primary Source] The Quran 4:7. Quran.com. https://quran.com/4/7",
    "20. [Primary Source] The Quran 4:124. Quran.com. https://quran.com/4/124",
    "21. [Primary Source] Sahih Muslim 2436. Hadith Unlocked. https://hadithunlocked.com/muslim:2436",
    "22. [Primary Source] Sahih al-Bukhari 3818. Hadith Unlocked. https://hadithunlocked.com/bukhari:3818",
    "23. [Primary Source] The Quran 39:53. Quran.com. https://quran.com/39/53",
    "24. [Academic] 'Influence of Arabic and Islamic Philosophy on the Latin West.' Stanford Encyclopedia of Philosophy. https://plato.stanford.edu/entries/arabic-islamic-influence/",
    "25. [Wikipedia] 'Islamic Golden Age.' https://en.wikipedia.org/wiki/Islamic_Golden_Age",
    "26. [Wikipedia] 'Bimaristan.' https://en.wikipedia.org/wiki/Bimaristan",
    "27. [Wikipedia] 'Muhammad.' https://en.wikipedia.org/wiki/Muhammad",
    "28. [Wikipedia] 'Waraqah ibn Nawfal.' https://en.wikipedia.org/wiki/Waraqah_ibn_Nawfal",
    "29. [Primary Source] Sahih al-Bukhari 3. Sunnah.com. https://sunnah.com/bukhari:3",
    "30. [Wikipedia] 'Hijrah.' https://en.wikipedia.org/wiki/Hijrah",
    "31. [Encyclopedia] World History Encyclopedia. 'Rashidun Caliphate.' https://www.worldhistory.org/Rashidun_Caliphate/",
    "32. [Wikipedia] 'Battle of Badr.' https://en.wikipedia.org/wiki/Battle_of_Badr",
    "33. [Wikipedia] 'Battle of Uhud.' https://en.wikipedia.org/wiki/Battle_of_Uhud",
    "34. [Wikipedia] 'Conquest of Mecca.' https://en.wikipedia.org/wiki/Conquest_of_Mecca",
    "35. [Wikipedia] 'Treaty of Hudaybiyya.' https://en.wikipedia.org/wiki/Treaty_of_Hudaybiyya",
    "36. [Primary Source] Sahih al-Bukhari 3169. Hadith Unlocked. https://hadithunlocked.com/bukhari:3169",
    "37. [Primary Source] Sahih al-Bukhari 2617. Hadith Unlocked. https://hadithunlocked.com/bukhari:2617",
    "38. [Primary Source] Sunan Abi Dawud 4512. Hadith Unlocked. https://hadithunlocked.com/abudawud:4512",
    "39. [Primary Source] Sahih al-Bukhari 4442. Hadith Unlocked. https://hadithunlocked.com/bukhari:4442",
    "40. [Primary Source] Sahih al-Bukhari 4428. Hadith Unlocked. https://hadithunlocked.com/bukhari:4428",
    "41. [Primary Source] The Quran 69:44-46. Quran.com. https://quran.com/69/44-46",
    "42. [Primary Source] Sahih al-Bukhari 3053. Hadith Unlocked. https://hadithunlocked.com/bukhari:3053",
    "43. [Primary Source] Sahih al-Bukhari 114. Hadith Unlocked. https://hadithunlocked.com/bukhari:114",
    "44. [Primary Source] Sahih al-Bukhari 1330. Hadith Unlocked. https://hadithunlocked.com/bukhari:1330",
    "45. [Primary Source] Sahih Muslim 1767a. Hadith Unlocked. https://hadithunlocked.com/muslim:1767a",
    "46. [Primary Source] Sahih al-Bukhari 4449. Hadith Unlocked. https://hadithunlocked.com/bukhari:4449",
    "47. [Primary Source] Sahih al-Bukhari 2916. Hadith Unlocked. https://hadithunlocked.com/bukhari:2916",
    "48. [Wikipedia] 'Saqifah.' https://en.wikipedia.org/wiki/Saqifah",
    "49. [Wikipedia] 'Muhammad's wives.' https://en.wikipedia.org/wiki/Muhammad%27s_wives",
    "50. [Primary Source] The Quran 33:6, trans. Mustafa Khattab, The Clear Quran. Quran.com. https://quran.com/33/6",
    "51. [Primary Source] Sahih al-Bukhari 5212. Hadith Unlocked. https://hadithunlocked.com/bukhari:5212",
    "52. [Primary Source] Sahih al-Bukhari 5134. Hadith Unlocked. https://hadithunlocked.com/bukhari:5134",
    "53. [Primary Source] Sahih Muslim 1422a. Hadith Unlocked. https://hadithunlocked.com/muslim:1422a",
    "54. [Primary Source] Sahih al-Bukhari 6130. Hadith Unlocked. https://hadithunlocked.com/bukhari:6130",
    "55. [Wikipedia] 'Aisha.' https://en.wikipedia.org/wiki/Aisha",
    "56. [Primary Source] Sahih Muslim 1422a. Sunnah.com. https://sunnah.com/muslim:1422a",
    "57. [Primary Source] The Quran 65:4. Quran.com. https://quran.com/65/4",
    "58. [Primary Source] Ibn Kathir, Tafsir on Quran 65:4. Quran.com. https://quran.com/65/4/tafsirs/en-tafisr-ibn-kathir",
    "59. [Primary Source] Sahih al-Bukhari 2541. Hadith Unlocked. https://hadithunlocked.com/bukhari:2541",
    "60. [Primary Source] Sahih al-Bukhari 947. Hadith Unlocked. https://hadithunlocked.com/bukhari:947",
    "61. [Primary Source] Sunan Abi Dawud 3931. Hadith Unlocked. https://hadithunlocked.com/abudawud:3931",
    "62. [Primary Source] Sahih al-Bukhari 371. Hadith Unlocked. https://hadithunlocked.com/bukhari:371",
    "63. [Wikipedia] 'Safiyya bint Huyayy.' https://en.wikipedia.org/wiki/Safiyya_bint_Huyayy",
    "64. [Primary Source] Sahih al-Bukhari 268. Hadith Unlocked. https://hadithunlocked.com/bukhari:268",
    "65. [Primary Source] Sahih al-Bukhari 5068. Hadith Unlocked. https://hadithunlocked.com/bukhari:5068",
    "66. [Primary Source] The Quran 33:51. Quran.com. https://quran.com/33/51",
    "67. [Primary Source] The Quran 33:53. Quran.com. https://quran.com/33/53",
    "68. [Primary Source] The Quran 47:19. Quran.com. https://quran.com/47/19",
    "69. [Primary Source] The Quran 48:2. Quran.com. https://quran.com/48/2",
    "70. [Primary Source] The Quran 40:55. Quran.com. https://quran.com/40/55",
    "71. [Primary Source] Sahih al-Bukhari 6307. Hadith Unlocked. https://hadithunlocked.com/bukhari:6307",
    "72. [Primary Source] The Quran 19:19. Quran.com. https://quran.com/19/19",
    "73. [Primary Source] Sahih al-Bukhari 3431. Hadith Unlocked. https://hadithunlocked.com/bukhari:3431",
    "74. [Primary Source] The Quran 80:1-2. Quran.com. https://quran.com/80/1-2",
    "75. [Primary Source] The Quran 9:43. Quran.com. https://quran.com/9/43",
    "76. [Primary Source] The Quran 8:67. Quran.com. https://quran.com/8/67",
    "77. [Wikipedia] 'Nakhla raid.' https://en.wikipedia.org/wiki/Nakhla_raid",
    "78. [Primary Source] The Quran 2:217. Quran.com. https://quran.com/2/217",
    "79. [Primary Source] The Quran 8:41. Quran.com. https://quran.com/8/41",
    "80. [Primary Source] Sahih al-Bukhari 3012. Hadith Unlocked. https://hadithunlocked.com/bukhari:3012",
    "81. [Primary Source] Sahih al-Bukhari 644. Hadith Unlocked. https://hadithunlocked.com/bukhari:644",
    "82. [Primary Source] Sahih al-Bukhari 4028. Hadith Unlocked. https://hadithunlocked.com/bukhari:4028",
    "83. [Wikipedia] 'Banu Qaynuqa.' https://en.wikipedia.org/wiki/Banu_Qaynuqa",
    "84. [Primary Source] The Quran 59:2-5. Quran.com. https://quran.com/59/2-5",
    "85. [Primary Source] The Quran 33:26-27. Quran.com. https://quran.com/33/26-27",
    "86. [Primary Source] Sahih al-Bukhari 4122. Hadith Unlocked. https://hadithunlocked.com/bukhari:4122",
    "87. [Wikipedia] 'Banu Qurayza.' https://en.wikipedia.org/wiki/Banu_Qurayza",
    "88. [Primary Source] Sahih al-Bukhari 4037. Hadith Unlocked. https://hadithunlocked.com/bukhari:4037",
    "89. [Primary Source] Sahih al-Bukhari 4039. Hadith Unlocked. https://hadithunlocked.com/bukhari:4039",
    "90. [Wikipedia] 'Asma bint Marwan.' https://en.wikipedia.org/wiki/Asma_bint_Marwan",
    "91. [Wikipedia] 'Abu Afak.' https://en.wikipedia.org/wiki/Abu_Afak",
    "92. [Wikipedia] 'Kenana ibn al-Rabi.' https://en.wikipedia.org/wiki/Kenana_ibn_al-Rabi",
    "93. [Primary Source] Sahih al-Bukhari 6802. Hadith Unlocked. https://hadithunlocked.com/bukhari:6802",
    "94. [Primary Source] Sahih al-Bukhari 5686. Hadith Unlocked. https://hadithunlocked.com/bukhari:5686",
    "95. [Primary Source] The Quran 5:33. Quran.com. https://quran.com/5/33",
    "96. [Primary Source] Sahih Muslim 1602. Hadith Unlocked. https://hadithunlocked.com/muslim:1602",
    "97. [Primary Source] The Quran 4:24. Quran.com. https://quran.com/4/24",
    "98. [Primary Source] Sahih Muslim 1456a. Hadith Unlocked. https://hadithunlocked.com/muslim:1456a",
    "99. [Primary Source] Sahih al-Bukhari 4138. Hadith Unlocked. https://hadithunlocked.com/bukhari:4138",
    "100. [Primary Source] Sahih al-Bukhari 2229. Hadith Unlocked. https://hadithunlocked.com/bukhari:2229",
    "101. [Reference] 'BBC - Religions - Islam: Slavery in Islam.' BBC. https://www.bbc.co.uk/religion/religions/islam/history/slavery_1.shtml",
    "102. [Wikipedia] 'Islamic views on slavery.' https://en.wikipedia.org/wiki/Islamic_views_on_slavery",
    "103. [Primary Source] The Quran 4:34. Quran.com. https://quran.com/4/34",
    "104. [Primary Source] Sahih al-Bukhari 304. Hadith Unlocked. https://hadithunlocked.com/bukhari:304",
    "105. [Primary Source] Sahih al-Bukhari 29. Hadith Unlocked. https://hadithunlocked.com/bukhari:29",
    "106. [Primary Source] The Quran 2:282. Quran.com. https://quran.com/2/282",
    "107. [Primary Source] Sahih al-Bukhari 2658. Hadith Unlocked. https://hadithunlocked.com/bukhari:2658",
    "108. [Primary Source] Sahih al-Bukhari 5763. Hadith Unlocked. https://hadithunlocked.com/bukhari:5763",
    "109. [Primary Source] The Quran 25:8. Quran.com. https://quran.com/25/8",
    "110. [Primary Source] Sahih al-Bukhari 3017. Hadith Unlocked. https://hadithunlocked.com/bukhari:3017",
    "111. [Wikipedia] 'Apostasy in Islam.' https://en.wikipedia.org/wiki/Apostasy_in_Islam",
    "112. [Academic] Christine Schirrmacher. Leaving Islam. BRILL eBooks, 2019. https://doi.org/10.1163/9789004331471_008",
    "113. [Academic] Pew Research Center. 'The World's Muslims: Religion, Politics and Society' (2013). https://www.pewresearch.org/religion/2013/04/30/the-worlds-muslims-religion-politics-society-overview/",
    "114. [Academic] Pew Research Center. 'Four in ten countries and territories worldwide had blasphemy laws in 2019.' https://www.pewresearch.org/short-reads/2022/01/25/four-in-ten-countries-and-territories-worldwide-had-blasphemy-laws-in-2019-2/",
    "115. [Wikipedia] 'Zaynab bint Jahsh.' https://en.wikipedia.org/wiki/Zaynab_bint_Jahsh",
    "116. [Primary Source] The Quran 33:37. Quran.com. https://quran.com/33/37",
    "117. [Primary Source] The Quran 4:3. Quran.com. https://quran.com/4/3",
    "118. [Primary Source] The Quran 33:50. Quran.com. https://quran.com/33/50",
    "119. [Primary Source] The Quran 66:1. Quran.com. https://quran.com/66/1",
    "120. [Wikipedia] 'Maria al-Qibtiyya.' https://en.wikipedia.org/wiki/Maria_al-Qibtiyya",
    "121. [Primary Source] Sahih al-Bukhari 4788. Hadith Unlocked. https://hadithunlocked.com/bukhari:4788",
    "122. [Wikipedia] 'Satanic Verses.' https://en.wikipedia.org/wiki/Satanic_Verses",
    "123. [Primary Source] The Quran 53:19, trans. Mustafa Khattab, The Clear Quran. Quran.com. https://quran.com/53/19",
    "124. [Primary Source] The Quran 53:19-20. Quran.com. https://quran.com/53/19-20",
    "125. [Primary Source] The Quran 22:52. Quran.com. https://quran.com/22/52",
    "126. [Primary Source] The Quran 29:48. Quran.com. https://quran.com/29/48",
    "127. [Primary Source] The Quran 16:103. Quran.com. https://quran.com/16/103",
    "128. [Primary Source] The Quran 25:4-5. Quran.com. https://quran.com/25/4-5",
    "129. [Wikipedia] 'Criticism of Muhammad.' https://en.wikipedia.org/wiki/Criticism_of_Muhammad",
    "130. [Reference] John of Damascus, Critique of Islam. OrthodoxInfo. https://orthodoxinfo.com/general/stjohn_islam.aspx",
    "131. [Primary Source] Sahih al-Bukhari 3, the beginning of revelation. Hadith Unlocked. https://hadithunlocked.com/bukhari:3",
    "132. [Primary Source] Sahih al-Bukhari 6982. Hadith Unlocked. https://hadithunlocked.com/bukhari:6982",
    "133. [Wikipedia] 'Bahira.' https://en.wikipedia.org/wiki/Bahira",
    "134. [Academic] Roger Pearse. 'The De Haeresibus of John Damascene and his chapter 100/101 on Islam.' https://www.roger-pearse.com/weblog/2026/04/17/the-de-haeresibus-of-john-damascene-and-his-chapter-100-101-on-islam/",
    "135. [Primary Source] The Quran 3:49. Quran.com. https://quran.com/3/49",
    "136. [Primary Source] Infancy Gospel of Thomas. New Advent. https://www.newadvent.org/fathers/0846.htm",
    "137. [Wikipedia] 'Infancy Gospel of Thomas.' https://en.wikipedia.org/wiki/Infancy_Gospel_of_Thomas",
    "138. [Primary Source] The Quran 19:29-30. Quran.com. https://quran.com/19/29-30",
    "139. [Primary Source] The Arabic Gospel of the Infancy of the Saviour. New Advent. https://www.newadvent.org/fathers/0806.htm",
    "140. [Wikipedia] 'Arabic Infancy Gospel.' https://en.wikipedia.org/wiki/Arabic_Infancy_Gospel",
    "141. [Primary Source] Protoevangelium of James. New Advent. https://www.newadvent.org/fathers/0847.htm",
    "142. [Wikipedia] 'Protoevangelium of James.' https://en.wikipedia.org/wiki/Protoevangelium_of_James",
    "143. [Academic] 'Internet History Sourcebooks: Medieval Sourcebook.' Internet History Sourcebooks, Fordham University. https://www.fordham.edu/halsall/basis/7Sleepers.html",
    "144. [Wikipedia] 'Seven Sleepers.' https://en.wikipedia.org/wiki/Seven_Sleepers",
    "145. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Basilides.' https://www.newadvent.org/cathen/02326a.htm",
    "146. [Wikipedia] 'Basilides.' https://en.wikipedia.org/wiki/Basilides",
    "147. [Primary Source] The Quran 5:116. Quran.com. https://quran.com/5/116",
    "148. [Wikipedia] 'Criticism of the Quran.' https://en.wikipedia.org/wiki/Criticism_of_the_Quran",
    "149. [Wikipedia] 'Nicene Creed.' https://en.wikipedia.org/wiki/Nicene_Creed",
    "150. [Primary Source] First Council of Nicaea (325). Papal Encyclicals Online. https://www.papalencyclicals.net/councils/ecum01.htm",
    "151. [Wikipedia] 'Collyridianism.' https://en.wikipedia.org/wiki/Collyridianism",
    "152. [Wikipedia] 'Hajj.' https://en.wikipedia.org/wiki/Hajj",
    "153. [Wikipedia] 'Black Stone.' https://en.wikipedia.org/wiki/Black_Stone",
    "154. [Primary Source] Sahih al-Bukhari 1597. Hadith Unlocked. https://hadithunlocked.com/bukhari:1597",
    "155. [Wikipedia] 'Al-Harith ibn Kalada.' https://en.wikipedia.org/wiki/Al-Harith_ibn_Kalada",
    "156. [Primary Source] Sunan Abi Dawud 3875. Hadith Unlocked. https://hadithunlocked.com/abudawud:3875",
    "157. [Primary Source] Plato, Timaeus, trans. Benjamin Jowett. MIT Internet Classics Archive. http://classics.mit.edu/Plato/timaeus.html",
    "158. [Wikipedia] 'Pangenesis.' https://en.wikipedia.org/wiki/Pangenesis",
    "159. [Academic] 'The Power of Semen: Aristotle and Some Galen's Fallacies.' Schole (2017). https://cyberleninka.ru/article/n/the-power-of-semen-aristotle-and-some-galen-s-fallacies",
    "160. [Academic] Embryo Project Encyclopedia, Arizona State University. 'On the Generation of Animals, by Aristotle.' https://embryo.asu.edu/pages/generation-animals-aristotle-0",
    "161. [Primary Source] Sahih al-Bukhari 3329. Hadith Unlocked. https://hadithunlocked.com/bukhari:3329",
    "162. [Wikipedia] 'Heredity.' https://en.wikipedia.org/wiki/Heredity",
    "163. [Primary Source] Sahih al-Bukhari 3208. Hadith Unlocked. https://hadithunlocked.com/bukhari:3208",
    "164. [Primary Source] Aristotle, History of Animals VII, trans. D'Arcy Thompson. MIT Internet Classics Archive. http://classics.mit.edu/Aristotle/history_anim.7.vii.html",
    "165. [Primary Source] The Quran 23:14. Quran.com. https://quran.com/23/14",
    "166. [Primary Source] Sahih al-Bukhari 5680. Hadith Unlocked. https://hadithunlocked.com/bukhari:5680",
    "167. [Wikipedia] 'Cupping therapy.' https://en.wikipedia.org/wiki/Cupping_therapy",
    "168. [Encyclopedia] World History Encyclopedia. 'Galen.' https://www.worldhistory.org/Galen/",
    "169. [Wikipedia] 'Humorism.' https://en.wikipedia.org/wiki/Humorism",
    "170. [Wikipedia] 'Prophetic medicine.' https://en.wikipedia.org/wiki/Prophetic_medicine",
    "171. [Primary Source] Sahih al-Bukhari 5688. Hadith Unlocked. https://hadithunlocked.com/bukhari:5688",
    "172. [Primary Source] Sahih al-Bukhari 3320. Hadith Unlocked. https://hadithunlocked.com/bukhari:3320",
    "173. [Reference] World Health Organization. 'Middle East respiratory syndrome coronavirus (MERS-CoV).' https://www.who.int/news-room/fact-sheets/detail/middle-east-respiratory-syndrome-coronavirus-(mers-cov)",
    "174. [Primary Source] Sahih al-Bukhari 5445. Hadith Unlocked. https://hadithunlocked.com/bukhari:5445",
    "175. [Primary Source] Sahih al-Bukhari 3263. Hadith Unlocked. https://hadithunlocked.com/bukhari:3263",
    "176. [Primary Source] Sahih al-Bukhari 5740. Hadith Unlocked. https://hadithunlocked.com/bukhari:5740",
    "177. [Primary Source] Sahih al-Bukhari 5707. Hadith Unlocked. https://hadithunlocked.com/bukhari:5707",
    "178. [Wikipedia] 'Syriac Alexander Legend.' https://en.wikipedia.org/wiki/Syriac_Alexander_Legend",
    "179. [Wikipedia] 'Dhu al-Qarnayn.' https://en.wikipedia.org/wiki/Dhu_al-Qarnayn",
    "180. [Primary Source] The Quran 86:6-7. Quran.com. https://quran.com/86/6-7",
    "181. [Primary Source] Tafsir Ibn Kathir on Quran 86:7. Quran.com. https://quran.com/86:7/tafsirs/en-tafisr-ibn-kathir",
    "182. [Wikipedia] 'Semen.' https://en.wikipedia.org/wiki/Semen",
    "183. [Primary Source] The Quran 54:1-2. Quran.com. https://quran.com/54/1-2",
    "184. [Primary Source] Sahih al-Bukhari 3637. Hadith Unlocked. https://hadithunlocked.com/bukhari:3637",
    "185. [Primary Source] Sahih Muslim 2802. Hadith Unlocked. https://hadithunlocked.com/muslim:2802",
    "186. [Wikipedia] 'Splitting of the Moon.' https://en.wikipedia.org/wiki/Splitting_of_the_Moon",
    "187. [Primary Source] Sahih al-Bukhari 3199. Hadith Unlocked. https://hadithunlocked.com/bukhari:3199",
    "188. [Primary Source] Sunan Abi Dawud 4002. Hadith Unlocked. https://hadithunlocked.com/abudawud:4002",
    "189. [Primary Source] The Quran 18:86. Quran.com. https://quran.com/18/86",
    "190. [Primary Source] The Quran 67:5. Quran.com. https://quran.com/67/5",
    "191. [Primary Source] The Quran 37:6-10. Quran.com. https://quran.com/37/6-10",
    "192. [Reference] NASA. 'Meteors and Meteorites.' https://science.nasa.gov/solar-system/meteors-meteorites/",
    "193. [Primary Source] Sahih al-Bukhari 3326. Hadith Unlocked. https://hadithunlocked.com/bukhari:3326",
    "194. [Wikipedia] 'Sahih al-Bukhari.' https://en.wikipedia.org/wiki/Sahih_al-Bukhari",
    "195. [Primary Source] The Quran 19:28. Quran.com. https://quran.com/19/28",
    "196. [Primary Source] The Quran 66:12. Quran.com. https://quran.com/66/12",
    "197. [Primary Source] Sahih Muslim 2135. Hadith Unlocked. https://hadithunlocked.com/muslim:2135",
    "198. [Primary Source] The Quran 28:38. Quran.com. https://quran.com/28/38",
    "199. [Wikipedia] 'Haman (Islam).' https://en.wikipedia.org/wiki/Haman_(Islam)",
    "200. [Commentary] Commentaries on Esther 3:1. Bible Hub. https://biblehub.com/commentaries/esther/3-1.htm",
    "201. [Wikipedia] 'Haman.' https://en.wikipedia.org/wiki/Haman",
    "202. [Primary Source] The Quran 9:30. Quran.com. https://quran.com/9/30",
    "203. [Wikipedia] 'Ibn Ishaq.' https://en.wikipedia.org/wiki/Ibn_Ishaq",
    "204. [Wikipedia] 'Muhammad al-Bukhari.' https://en.wikipedia.org/wiki/Muhammad_al-Bukhari",
    "205. [Academic] Sahih al-Bukhari 870. Milestone Documents of World Religions, 2011. https://doi.org/10.3735/9781935306191.book-part-045",
    "206. [Wikipedia] 'Doctrina Jacobi.' https://en.wikipedia.org/wiki/Doctrina_Jacobi",
    "207. [Wikipedia] 'Gospel of Mark.' https://en.wikipedia.org/wiki/Gospel_of_Mark",
    "208. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Gospel of Mark.' https://www.newadvent.org/cathen/09674b.htm",
    "209. [Wikipedia] 'Criticism of Hadith.' https://en.wikipedia.org/wiki/Criticism_of_Hadith",
    "210. [Wikipedia] 'Quranism.' https://en.wikipedia.org/wiki/Quranism",
    "211. [Primary Source] The Quran 15:9. Quran.com. https://quran.com/15/9",
    "212. [Primary Source] Sahih al-Bukhari 4987. Hadith Unlocked. https://hadithunlocked.com/bukhari:4987",
    "213. [Wikipedia] 'Abdullah ibn Masud.' https://en.wikipedia.org/wiki/Abdullah_ibn_Masud",
    "214. [Primary Source] Sahih al-Bukhari 4987. Sunnah.com. https://sunnah.com/bukhari:4987",
    "215. [Primary Source] Sahih al-Bukhari 6830. Hadith Unlocked. https://hadithunlocked.com/bukhari:6830",
    "216. [Primary Source] Sunan Ibn Majah 1944. Hadith Unlocked. https://hadithunlocked.com/ibnmajah:1944",
    "217. [Primary Source] Sahih Muslim 1452. Hadith Unlocked. https://hadithunlocked.com/muslim:1452",
    "218. [Primary Source] Sahih Muslim 1050. Hadith Unlocked. https://hadithunlocked.com/muslim:1050",
    "219. [Wikipedia] 'Sana'a manuscript.' https://en.wikipedia.org/wiki/Sana%27a_manuscript",
    "220. [Academic] 'Birmingham Qur'an manuscript dated among the oldest in the world - University of Birmingham.' University of Birmingham. https://www.birmingham.ac.uk/news/latest/2015/07/quran-manuscript-22-07-15.aspx",
    "221. [Wikipedia] 'Birmingham Quran manuscript.' https://en.wikipedia.org/wiki/Birmingham_Quran_manuscript",
    "222. [Wikipedia] 'Qira'at.' https://en.wikipedia.org/wiki/Qira%27at",
    "223. [Primary Source] The Quran 4:82. Quran.com. https://quran.com/4/82",
    "224. [Primary Source] The Quran 2:106. Quran.com. https://quran.com/2/106",
    "225. [Primary Source] The Quran 16:101. Quran.com. https://quran.com/16/101",
    "226. [Primary Source] The Quran 2:256. Quran.com. https://quran.com/2/256",
    "227. [Primary Source] The Quran 9:5. Quran.com. https://quran.com/9/5",
    "228. [Primary Source] The Quran 9:29. Quran.com. https://quran.com/9/29",
    "229. [Primary Source] Sahih al-Bukhari 25. Hadith Unlocked. https://hadithunlocked.com/bukhari:25",
    "230. [Wikipedia] 'Sword Verse.' https://en.wikipedia.org/wiki/Sword_Verse",
    "231. [Primary Source] The Quran 4:11-12. Quran.com. https://quran.com/4/11-12",
    "232. [Reference] Majalla. ''Awl.' https://majalla.org/ilm/awl/",
    "233. [Primary Source] The Quran 5:47. Quran.com. https://quran.com/5/47",
    "234. [Primary Source] The Quran 5:68. Quran.com. https://quran.com/5/68",
    "235. [Primary Source] The Quran 10:94. Quran.com. https://quran.com/10/94",
    "236. [Primary Source] The Quran 6:115. Quran.com. https://quran.com/6/115",
    "237. [Wikipedia] 'Tahrif.' https://en.wikipedia.org/wiki/Tahrif",
    "238. [Academic] Gordon Nickel. Early Muslim Accusations of Taḥrīf:Muqātil Ibn Sulaymān’s Commentary On Key Qur’anic Verses. BRILL eBooks, 2007. https://doi.org/10.1163/ej.9789004155589.i-421.53",
    "239. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Codex Vaticanus.' https://www.newadvent.org/cathen/04086a.htm",
    "240. [Archaeology] 'What’s Missing from Codex Sinaiticus, the Oldest New Testament?.' Biblical Archaeology Society. https://www.biblicalarchaeology.org/daily/biblical-topics/bible-versions-and-translations/absent-from-codex-sinaiticus-oldest-new-testament/",
    "241. [Wikipedia] 'Codex Vaticanus.' https://en.wikipedia.org/wiki/Codex_Vaticanus",
    "242. [Wikipedia] 'Codex Sinaiticus.' https://en.wikipedia.org/wiki/Codex_Sinaiticus",
    "243. [Primary Source] The Quran 61:6. Quran.com. https://quran.com/61/6",
    "244. [Wikipedia] 'Paraclete.' https://en.wikipedia.org/wiki/Paraclete",
    "245. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Paraclete.' https://www.newadvent.org/cathen/11469a.htm",
    "246. [Primary Source] The Quran 7:157. Quran.com. https://quran.com/7/157",
    "247. [Wikipedia] 'Gospel of Barnabas.' https://en.wikipedia.org/wiki/Gospel_of_Barnabas",
    "248. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Holy Year of Jubilee.' https://www.newadvent.org/cathen/08531c.htm",
    "249. [Primary Source] The Quran 47:15. Quran.com. https://quran.com/47/15",
    "250. [Primary Source] The Quran 76:19. Quran.com. https://quran.com/76/19",
    "251. [Primary Source] The Quran 44:54. Quran.com. https://quran.com/44/54",
    "252. [Primary Source] The Quran 56:22-23. Quran.com. https://quran.com/56/22-23",
    "253. [Primary Source] The Quran 55:72. Quran.com. https://quran.com/55/72",
    "254. [Primary Source] The Quran 55:56. Quran.com. https://quran.com/55/56",
    "255. [Primary Source] The Quran 56:36-37. Quran.com. https://quran.com/56/36-37",
    "256. [Primary Source] The Quran 78:33. Quran.com. https://quran.com/78/33",
    "257. [Primary Source] Ibn Kathir, Tafsir on Quran 78:33. Quran.com. https://quran.com/78/33/tafsirs/en-tafisr-ibn-kathir",
    "258. [Primary Source] Sahih al-Bukhari 3245. Hadith Unlocked. https://hadithunlocked.com/bukhari:3245",
    "259. [Primary Source] Sahih Muslim 2834a. Hadith Unlocked. https://hadithunlocked.com/muslim:2834a",
    "260. [Primary Source] Sahih al-Bukhari 4879. Hadith Unlocked. https://hadithunlocked.com/bukhari:4879",
    "261. [Primary Source] Jami at-Tirmidhi 1663. Hadith Unlocked. https://hadithunlocked.com/tirmidhi:1663",
    "262. [Primary Source] The Quran 33:35. Quran.com. https://quran.com/33/35",
    "263. [Primary Source] The Quran 4:56. Quran.com. https://quran.com/4/56",
    "264. [Primary Source] Sahih al-Bukhari 3265. Hadith Unlocked. https://hadithunlocked.com/bukhari:3265",
    "265. [Primary Source] The Quran 22:19-21. Quran.com. https://quran.com/22/19-21",
    "266. [Primary Source] The Quran 14:16-17. Quran.com. https://quran.com/14/16-17",
    "267. [Primary Source] The Quran 37:64-67. Quran.com. https://quran.com/37/64-67",
    "268. [Primary Source] The Quran 44:45-46. Quran.com. https://quran.com/44/45-46",
    "269. [Primary Source] Sahih al-Bukhari 6561. Hadith Unlocked. https://hadithunlocked.com/bukhari:6561",
    "270. [Primary Source] Sahih al-Bukhari 3883. Hadith Unlocked. https://hadithunlocked.com/bukhari:3883",
    "271. [Primary Source] Sahih al-Bukhari 3241. Hadith Unlocked. https://hadithunlocked.com/bukhari:3241",
    "272. [Primary Source] The Quran 19:71. Quran.com. https://quran.com/19/71",
    "273. [Primary Source] Sahih Muslim 2767a. Hadith Unlocked. https://hadithunlocked.com/muslim:2767a",
    "274. [Primary Source] The Quran 4:157. Quran.com. https://quran.com/4/157",
    "275. [Wikipedia] 'Crucifixion of Jesus.' https://en.wikipedia.org/wiki/Crucifixion_of_Jesus",
    "276. [Primary Source] Tacitus, Annals, book 15. Internet Classics Archive, MIT. https://classics.mit.edu/Tacitus/annals.11.xv.html",
    "277. [Wikipedia] 'Dome of the Rock.' https://en.wikipedia.org/wiki/Dome_of_the_Rock",
    "278. [Primary Source] The Quran 5:73-75. Quran.com. https://quran.com/5/72-75",
    "279. [Primary Source] The Quran 29:50-51. Quran.com. https://quran.com/29/50-51",
    "280. [Encyclopedia] World History Encyclopedia. 'Ridda Wars.' https://www.worldhistory.org/Ridda_Wars/",
    "281. [Wikipedia] 'Ridda Wars.' https://en.wikipedia.org/wiki/Ridda_Wars",
    "282. [Wikipedia] 'Muslim conquest of the Levant.' https://en.wikipedia.org/wiki/Muslim_conquest_of_the_Levant",
    "283. [Wikipedia] 'Battle of Yarmuk.' https://en.wikipedia.org/wiki/Battle_of_Yarmuk",
    "284. [Academic] 'ʿARAB ii. Arab conquest of Iran.' Encyclopaedia Iranica. https://www.iranicaonline.org/articles/arab-ii",
    "285. [Wikipedia] 'Battle of al-Qādisiyyah.' https://en.wikipedia.org/wiki/Battle_of_al-Q%C4%81disiyyah",
    "286. [Encyclopedia] World History Encyclopedia. 'Sasanian Empire.' https://www.worldhistory.org/Sasanian_Empire/",
    "287. [Wikipedia] 'Sasanian Empire.' https://en.wikipedia.org/wiki/Sasanian_Empire",
    "288. [Wikipedia] 'Muslim conquest of Egypt.' https://en.wikipedia.org/wiki/Muslim_conquest_of_Egypt",
    "289. [Wikipedia] 'Umayyad conquest of Hispania.' https://en.wikipedia.org/wiki/Umayyad_conquest_of_Hispania",
    "290. [Academic] Collins. Visigothic Spain 409–711. Spain, 2000. https://doi.org/10.1093/oso/9780198206194.003.0003",
    "291. [Wikipedia] 'Battle of Tours.' https://en.wikipedia.org/wiki/Battle_of_Tours",
    "292. [Primary Source] Edward Gibbon, The Decline and Fall of the Roman Empire, chapter 52. Christian Classics Ethereal Library. https://www.ccel.org/g/gibbon/decline/volume2/chap52.htm",
    "293. [Wikipedia] 'Early Muslim conquests.' https://en.wikipedia.org/wiki/Early_Muslim_conquests",
    "294. [Academic] Millar. Epilogue Connecting to Muhammad?. Religion, Language and Community in the Roman Near East, 2013. https://doi.org/10.5871/bacad/9780197265574.003.0005",
    "295. [Wikipedia] 'Dhimmi.' https://en.wikipedia.org/wiki/Dhimmi",
    "296. [Academic] Bernard Lewis, on non-Muslims under Islamic rule. Internet History Sourcebooks, Fordham University. https://www.fordham.edu/halsall/med/lewis1.html",
    "297. [Wikipedia] 'Jizya.' https://en.wikipedia.org/wiki/Jizya",
    "298. [Primary Source] The Pact of Umar. Internet History Sourcebooks, Fordham University. https://sourcebooks.fordham.edu/source/pact-umar.asp",
    "299. [Wikipedia] 'Pact of Umar.' https://en.wikipedia.org/wiki/Pact_of_Umar",
    "300. [Wikipedia] 'Spread of Islam.' https://en.wikipedia.org/wiki/Spread_of_Islam",
    "301. [Encyclopedia] World History Encyclopedia. 'First Fitna.' https://www.worldhistory.org/First_Fitna/",
    "302. [Wikipedia] 'First Fitna.' https://en.wikipedia.org/wiki/First_Fitna",
    "303. [Wikipedia] 'Rashidun Caliphate.' https://en.wikipedia.org/wiki/Rashidun_Caliphate",
    "304. [Academic] Kaya. 1071 BATTLE OF MANZIKERT AND THE MULTILAYERED POLITICAL STRUCTURE OF ANATOLIA A Critical Review Based on Turkish, Kurdish, and Byzantine Sources., 2026. https://doi.org/10.2139/ssrn.7436660",
    "305. [Wikipedia] 'Battle of Manzikert.' https://en.wikipedia.org/wiki/Battle_of_Manzikert",
    "306. [Encyclopedia] World History Encyclopedia. 'First Crusade.' https://www.worldhistory.org/First_Crusade/",
    "307. [Wikipedia] 'First Crusade.' https://en.wikipedia.org/wiki/First_Crusade",
    "308. [Wikipedia] 'Crusades.' https://en.wikipedia.org/wiki/Crusades",
    "309. [Encyclopedia] World History Encyclopedia. 'Crusades.' https://www.worldhistory.org/Crusades/",
    "310. [Academic] Harris. The Fall of Constantinople. The Oxford Handbook of History and International Relations, 2023. https://doi.org/10.1093/oxfordhb/9780198873457.013.35",
    "311. [Wikipedia] 'Fall of Constantinople.' https://en.wikipedia.org/wiki/Fall_of_Constantinople",
    "312. [Wikipedia] 'Devshirme.' https://en.wikipedia.org/wiki/Devshirme",
    "313. [Wikipedia] 'Arab slave trade.' https://en.wikipedia.org/wiki/Arab_slave_trade",
    "314. [Academic] United States Holocaust Memorial Museum, Holocaust Encyclopedia. 'The Armenian Genocide (1915-16): Overview.' https://encyclopedia.ushmm.org/content/en/article/the-armenian-genocide-1915-16-overview",
    "315. [Wikipedia] 'Armenian genocide.' https://en.wikipedia.org/wiki/Armenian_genocide",
    "316. [Encyclopedia] World History Encyclopedia. 'Islamic Caliphates.' https://www.worldhistory.org/Caliphate/",
    "317. [Wikipedia] 'Caliphate.' https://en.wikipedia.org/wiki/Caliphate",
    "318. [Encyclopedia] World History Encyclopedia. 'Umayyad Dynasty.' https://www.worldhistory.org/Umayyad_Caliphate/",
    "319. [Wikipedia] 'Umayyad Caliphate.' https://en.wikipedia.org/wiki/Umayyad_Caliphate",
    "320. [Encyclopedia] World History Encyclopedia. 'Abbasid Dynasty.' https://www.worldhistory.org/Abbasid_Caliphate/",
    "321. [Wikipedia] 'Abbasid Caliphate.' https://en.wikipedia.org/wiki/Abbasid_Caliphate",
    "322. [Wikipedia] 'Al-Andalus.' https://en.wikipedia.org/wiki/Al-Andalus",
    "323. [Encyclopedia] World History Encyclopedia. 'Ottoman Empire.' https://www.worldhistory.org/Ottoman_Empire/",
    "324. [Wikipedia] 'Ottoman Caliphate.' https://en.wikipedia.org/wiki/Ottoman_Caliphate",
    "325. [Academic] David Commins. From Wahhabi to Salafi. Cambridge University Press eBooks, 2015. https://doi.org/10.1017/cbo9781139047586.011",
    "326. [Wikipedia] 'Wahhabism.' https://en.wikipedia.org/wiki/Wahhabism",
    "327. [Academic] Rachel Ehrenfeld. The Muslim Brotherhood Evolution: An Overview. American Foreign Policy Interests, 2011. https://doi.org/10.1080/10803920.2011.571059",
    "328. [Wikipedia] 'Muslim Brotherhood.' https://en.wikipedia.org/wiki/Muslim_Brotherhood",
    "329. [Wikipedia] 'Islamic State.' https://en.wikipedia.org/wiki/Islamic_State",
    "330. [Primary Source] The Quran 61:14. Quran.com. https://quran.com/61/14",
    "331. [Primary Source] The Quran 2:23. Quran.com. https://quran.com/2/23",
    "332. [Wikipedia] 'Quran and miracles.' https://en.wikipedia.org/wiki/Quran_and_miracles",
    "333. [Wikipedia] 'Allah.' https://en.wikipedia.org/wiki/Allah",
    "334. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Allah.' https://www.newadvent.org/cathen/01316a.htm",
    "335. [Primary Source] The Quran 55:19-20. Quran.com. https://quran.com/55/19-20"
  ],
  lastUpdated: "30-10-2026"
}
