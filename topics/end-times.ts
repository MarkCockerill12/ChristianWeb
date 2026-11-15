import type { Topic } from './types'

export const END_TIMES: Topic = {
  id: "end-times",
  title: "Are We in the End Times?",
  description: "A comprehensive biblical perspective on eschatology, the 'last days', prophetic signs, and what Christians should expect regarding the return of Christ.",
  icon: "Clock",
  color: "red",
  tags: ["Eschatology", "Prophecy", "End Times", "Revelation"],
  verses: [
    { reference: "Matthew 24:36", text: "But concerning that day and hour no one knows, not even the angels of heaven, nor the Son, but the Father only." },
    { reference: "Acts 2:16-17", text: "This is what was spoken by the prophet Joel: 'In the last days, God says, I will pour out my Spirit on all people.'" },
    { reference: "1 John 2:18", text: "Children, it is the last hour, and as you have heard that antichrist is coming, so now many antichrists have come. Therefore we know that it is the last hour." },
    { reference: "Hebrews 1:1-2", text: "In the past God spoke to our ancestors through the prophets at many times and in various ways, but in these last days he has spoken to us by his Son." },
    { reference: "Luke 21:25", text: "And there will be signs in sun and moon and stars, and on the earth distress of nations in perplexity because of the roaring of the sea and the waves." }
  ],
  tldr: "The New Testament places the 'last days' as beginning at Pentecost, so the church has been living in them for two thousand years. Christians read Revelation through four distinct frameworks. Many see modern developments, such as rust on the moon, the shrinking Euphrates and global digital payments, as signs that the end is drawing nearer, and Jesus told his followers to watch. He also said that no one knows the day or the hour, and every attempt to set a date has failed.",
  content: `
The question of whether we are in the end times combines two questions that Scripture answers very differently[^1].

Whether we are in the "last days" is answered plainly in the affirmative, and has been since the first century. Peter, at Pentecost, declared Joel's last days prophecy fulfilled that morning, Hebrews states that God has spoken in these last days through His Son, and John wrote that it was the last hour around AD 90[^2].

Whether we are in the final generation before Christ's return is a separate question, and Scripture states directly that no one knows the answer[^3].

<?viz end-times/frameworks?>
`,
  subtopics: [
    {
      id: "inaugurated-eschatology",
      title: "Defining the End Times and Prophetic Context",
      tags: ["Scripture"],
      content: `
From a biblical perspective the last days are the entire period between Christ's ascension and His second coming, which places the church within them for over two thousand years[^4]. Peter applies Joel's phrase *en tais eschatais hēmerais* (ἐν ταῖς ἐσχάταις ἡμέραις, in the last days) to Pentecost itself (Acts 2:17), and Hebrews 1:2 says God has spoken "in these last days" by His Son[^5]. The kingdom of God has already begun in the life, death and resurrection of Jesus, while awaiting its final consummation, a framework theologians describe as inaugurated eschatology[^6].

*   **Peter at Pentecost.** Quoting Joel, Peter identified his own moment as the last days that the prophet foretold[^7].
*   **The apostolic writings.** Hebrews places the last days at the incarnation, and Peter writes that Christ was revealed in these last times for the sake of believers[^8].

Scripture also describes a specific period of tribulation immediately preceding the return of Christ. That timeline is drawn principally from Daniel, from the Olivet Discourse in Matthew 24, and from Revelation[^9][^10]. Daniel outlines a succession of Gentile empires and a coming kingdom that will never be destroyed, and includes the seventieth week that many interpreters read as a future seven-year period[^11][^12]. The Hebrew of Daniel 9:24 is *shavu'im shiv'im* (שָׁבֻעִים שִׁבְעִים, seventy sevens): the word means a unit of seven without naming days, which is why the "weeks" are commonly read as periods of seven years[^13]. Revelation details the progressive judgments of seals, trumpets and bowls, culminating in the return of the King of Kings[^14][^15].
`
    },
    {
      id: "interpretive-frameworks",
      title: "Four Ways Christians Read Revelation",
      tags: ["Revelation"],
      content: `
Orthodox Christians have read the prophetic texts in four distinct ways for centuries, and the differences are substantial[^16][^17].

*   **Preterism.** Most of Revelation's prophecies were fulfilled in the first century, particularly in the destruction of Jerusalem and the Temple in AD 70. Preterists point to the text's own time markers, which state that the events are near[^18][^19]. Revelation opens with what must happen *en tachei* (ἐν τάχει, soon, or quickly) and says *ho kairos engys* (ὁ καιρὸς ἐγγύς, the time is near) (Revelation 1:1-3). Futurists read *en tachei* as describing how swiftly the events unfold once they begin[^20].
*   **Historicism.** The prophecies unfold progressively across church history. This was the dominant view among the Reformers and is comparatively rare today[^21][^22][^23].
*   **Futurism.** Most of Revelation chapters 4 to 20 describes events still to come. This is the dominant view in modern evangelicalism, especially in its dispensationalist form[^24].
*   **Idealism.** The imagery depicts timeless spiritual realities, the conflict of good and evil in every age, rather than a datable sequence[^25].



The millennium forms a separate axis. The word comes from the Latin for the *chilia etē* (χίλια ἔτη, a thousand years) of Revelation 20:2-7[^26]. Premillennialism holds that Christ returns before a literal thousand-year reign, postmillennialism that He returns after a golden age, and amillennialism that the millennium is the present church age described symbolically[^27][^23]. These correlate loosely with the frameworks above, with futurists tending premillennial and idealists tending amillennial.

<?viz end-times/millennium?>


The signs framework set out in the following sections is largely a futurist reading. Amillennial and preterist Christians, who together account for much of the global church including most of the Reformed and Catholic traditions, do not treat current events as prophetic countdown markers[^22].

**See also:** [New Testament: General Epistles and Revelation (The 66 Books)](/categories/bible-books#section-general-epistles-and-revelation).
`
    },
    {
      id: "the-rapture",
      title: "The Rapture: Before, During or After the Tribulation?",
      tags: ["Scripture"],
      content: `
The word "rapture" comes from 1 Thessalonians 4:17, where believers alive at Christ's return will be "caught up together with them in the clouds to meet the Lord in the air". The Greek verb is *harpazō* (ἁρπάζω, to seize, snatch away), which the Latin Vulgate rendered *rapiemur* (we shall be caught up)[^28][^29][^30].

Every Christian tradition believes that believers will meet Christ at his return. The dispute among futurists is about timing: whether the gathering comes before a seven-year tribulation, in the middle of it, or at its end[^30][^31].

*   **Pretribulation.** Christ comes for his church before the tribulation, and returns with it seven years later. The case rests on promises such as "I will also keep you from the hour of trial" (Revelation 3:10) and "God did not appoint us to suffer wrath" (1 Thessalonians 5:9), and on the belief that Christ's coming could happen at any moment. The view was systematised by John Nelson Darby in the 1830s, spread by the *Scofield Reference Bible* (1909), and popularised by the *Left Behind* novels from 1995[^31][^32][^30].
*   **Midtribulation and pre-wrath.** The church is taken partway through, before the worst of God's judgments, a view that tries to do justice to both sets of texts[^31][^30].
*   **Posttribulation.** The gathering and the return are one event at the end. Jesus places the gathering of the elect "immediately after the distress of those days" (Matthew 24:29-31), and Paul says that "our being gathered to him" will not come until the rebellion and the man of lawlessness have appeared (2 Thessalonians 2:1-3). This was the view of the early church fathers who wrote on the subject and of historic premillennialists such as George Ladd[^33][^34][^30].

The word Paul uses for "meet" also bears on the question. *Apantēsis* (ἀπάντησις, a meeting) was used of citizens going out of a city to welcome a visiting ruler and escort him back in, and Luke uses it for the believers who came out to meet Paul and walked with him to Rome (Acts 28:15). On that reading believers rise to meet Christ and return with him, rather than leaving with him for heaven[^35][^28].

Amillennial and postmillennial Christians, together with the Catholic, Orthodox and most Reformed traditions, see no separate rapture at all: Christ returns once, the dead are raised and the living are changed at the same moment. In "one will be taken and the other left" (Matthew 24:40), the parallel with the flood, which "took them all away", suggests to many commentators that those taken are taken in judgment[^36][^31].
`
    },
    {
      id: "signs-jesus-named",
      title: "Traditional and Historical Signs of the End",
      tags: ["Scripture"],
      content: `
In the Olivet Discourse Jesus lists indicators, and the way He frames them differs from the way they are commonly used[^37].

*   **Wars, famines and earthquakes.** Jesus calls these the beginning of birth pains and immediately adds that His hearers should not be alarmed, because such things must happen and the end is still to come. The stated function is to prevent premature excitement[^38][^39][^40].

<?viz end-times/earthquakes?>

*   **False messiahs and false prophets.** Jesus warns specifically about those claiming the end has arrived, and instructs His followers not to go out after them[^41].
*   **The gospel preached to all nations.** Matthew 24:14 is the one sign given an explicit connection to the end. Bible translation and global missions have advanced enormously, though the completion criterion is debated and cannot be verified[^42][^43].
*   **The restoration of Israel.** The re-establishment of the State of Israel in 1948 is the most cited modern prophetic argument. Ezekiel foretells God gathering His people from the nations back to their land, and futurist interpreters regard this as a necessary precursor to later events[^44]. Amillennial and preterist interpreters hold that the relevant prophecies were fulfilled in the return from Babylonian exile, and that the New Testament reads promises to Israel as fulfilled in Christ and the church[^45][^46][^47].
*   **Moral decline.** Paul's warning to Timothy describes the last days in terms many find recognisable. Every generation has read its own decline into that passage, and Paul's instruction to have nothing to do with such people assumes they were present in Timothy's own congregation[^48][^49].

These signs have characterised most of church history, which fits the reading that they describe the whole already-and-not-yet era rather than pinpointing its end[^50][^38].

**See also:** [Temple Destruction (Prophecy)](/categories/prophecy#section-temple-destruction).
`
    },
    {
      id: "modern-claims",
      title: "Modern Signs Christians Point To",
      tags: ["Modern claims"],
      content: `
Jesus told his followers to watch: there will be "signs in the sun, moon and stars" (Luke 21:25), and "when you see these things happening, you know that the kingdom of God is near" (Luke 21:31). Many Christians see the developments below as reasons to think that the end is drawing nearer. They are a reason for readiness, and not for fear, and none of them sets a date (Matthew 24:36).

**The moon turning red.** Revelation says that "the whole moon turned blood red" (Revelation 6:12), and Joel that the moon will turn "to blood" (Joel 2:31). In 2020 researchers led by Shuai Li reported hematite, a red iron oxide and a form of rust, at high latitudes on the moon, a discovery that surprised scientists because the moon has so little oxygen or water[^51][^52]. The researchers attribute it to oxygen from the earth's upper atmosphere, carried to the moon over a very long period[^53][^52]. A "blood moon" is also the familiar name for a total lunar eclipse, when sunlight scattered by the earth's atmosphere turns the moon red[^54][^55]. Christians differ over whether either is what Revelation has in view, and the fact remains that the moon is literally rusting.

**The sun and scorching heat.** Revelation describes the sun being "allowed to scorch people with fire" (Revelation 16:8). Solar Cycle 25 has been more active than the cycle before it, with large sunspots and strong solar storms[^56][^57]. Such activity rises and falls in a roughly eleven-year cycle, so it is a development to watch and no more than that so far.

**The drying Euphrates.** Revelation says that the great river Euphrates "dried up to prepare the way for the kings from the East" (Revelation 16:12). Its water levels have fallen sharply, through drought and through dams upstream in Turkey and Syria[^58][^59]. Revelation does not say how the river will dry up, and interpreters read the verse in different ways[^60]. A river that once seemed too great to fail is now visibly shrinking.

**Buying and selling.** Revelation says that no one could "buy or sell unless they had the mark" (Revelation 13:16-17). Digital payments, digital identity and biometrics make such control possible on a worldwide scale for the first time. Past generations have identified many people and things as the mark, and all of them proved wrong, so no technology today should be named as the mark itself[^61][^62]. What has changed is that the verse no longer describes something impossible.

**How much weight these can bear.** Christians in many past ages have seen signs in their own days, and the failed predictions set out next are a warning against certainty. The signs do not tell us when. Jesus' instruction is to keep watch and to live ready, whichever generation it turns out to be (Matthew 24:42).

**See also:** [Israel's Regathering (Prophecy)](/categories/prophecy#section-israel-regathering).
`
    },
    {
      id: "mark-of-the-beast",
      title: "The Mark of the Beast and 666",
      tags: ["Modern claims"],
      content: `
Revelation 13 describes a second beast that forces everyone to receive a mark on the right hand or forehead, so that no one can buy or sell without it, and ends: "Let the person who has insight calculate the number of the beast, for it is the number of a man. That number is 666" (Revelation 13:18)[^62][^61].

**What the text says.** The mark is a *charagma* (χάραγμα, a stamp, engraved mark), the word used for the emperor's stamp on documents and coins. It stands in deliberate contrast with the seal of God on the foreheads of his servants (Revelation 7:3, 14:1). It is given to those who worship the beast and its image (14:9-11), so in the text it is a mark of allegiance and worship. Nobody in Revelation receives it by accident[^63][^64][^65].

**Nero.** In Hebrew and Greek, letters also stand for numbers. "Nero Caesar" written in Hebrew letters, *nrwn qsr* (נרון קסר), adds up to 666. Some early manuscripts, including Papyrus 115, read 616 instead, which is the total for the Latin spelling *nrw qsr* (נרו קסר). Irenaeus, writing around AD 180, already knew of the 616 reading and rejected it[^61][^66][^67].

**Modern claims.** The number has been fitted to popes, Napoleon, Hitler and many others, and the mark to credit cards, barcodes, implanted microchips and, from 2020, COVID-19 vaccines and vaccine passports[^61][^65]. A vaccine or a payment chip involves no worship and no pledge of loyalty, which is what the mark represents in Revelation, so most commentators across the interpretive traditions reject these identifications. Digital control of buying and selling is a real development, but receiving a medical treatment or a technology is not the act Revelation describes[^65][^64].
`
    },
    {
      id: "third-temple-and-gog",
      title: "The Third Temple, and Gog and Magog",
      tags: ["Modern claims"],
      content: `
**The third temple.** Dispensationalists expect a rebuilt temple in Jerusalem. Paul says the man of lawlessness "sets himself up in God's temple, proclaiming himself to be God" (2 Thessalonians 2:4), Daniel speaks of sacrifice ending and an "abomination that causes desolation" (Daniel 9:27), and John is told to measure the temple of God (Revelation 11:1-2). For these to happen literally, a temple must stand again[^68][^69].

The Temple Institute in Jerusalem, founded in 1987, has made vessels and priestly garments ready for a rebuilt temple. In 2022 red heifers were flown from Texas to Israel, because the ashes of a flawless red heifer are needed for ritual purification under Numbers 19. The site itself holds the Dome of the Rock and the al-Aqsa Mosque, and under the arrangement in force since 1967 Jews may visit but not pray there[^70][^71][^68][^72].

Other Christians read these texts differently. Paul elsewhere calls the church God's temple (1 Corinthians 3:16, Ephesians 2:21), the temple in 2 Thessalonians may be the one standing when Paul wrote, and Hebrews teaches that Christ's single sacrifice has ended the need for any other (Hebrews 10:12-18), so a restored sacrificial system would have no place in Christian hope[^69][^73].

**Gog and Magog.** Ezekiel 38 and 39 describe Gog "of the land of Magog", the chief prince of Meshech and Tubal, leading an alliance including Persia, Cush and Put against a restored Israel, and being destroyed by God on its mountains[^74][^75].

From the Scofield Reference Bible to Hal Lindsey's *The Late Great Planet Earth* (1970), popular prophecy writers identified Gog with Russia. They read the Hebrew *rosh* (רֹאשׁ, head, chief) as the name "Rosh", taken as Russia, with Meshech as Moscow and Tubal as Tobolsk[^75][^76]. Most scholars translate *rosh* as "chief", as the NIV and ESV do, and identify Meshech and Tubal with Iron Age peoples of Anatolia, known from Assyrian records as Mushki and Tabal, which have no link to the Russian names[^74][^75]. Revelation 20:8 uses "Gog and Magog" for all the nations gathered against God at the end of the thousand years, which shows that by the New Testament the names had become symbols for the final enemies of God's people[^77][^75].
`
    },
    {
      id: "date-setting",
      title: "The Track Record of Date-Setting",
      tags: ["Modern claims"],
      content: `
Jesus stated that no one knows the day or hour, not the angels and not the Son, but only the Father, and told the apostles directly that it was not for them to know times or dates[^78].

*   **William Miller.** Preached that Christ would return in 1843, then recalculated to 22 October 1844, attracting perhaps 100,000 followers. The failure became known as the Great Disappointment[^79][^80].
*   **Edgar Whisenant.** A former NASA engineer whose booklet *88 Reasons Why the Rapture Will Be in 1988* was mailed free to some 300,000 ministers and reportedly distributed in about 4.5 million copies. He followed the failure with revised dates for 1989, 1993 and 1994[^81][^82].
*   **Harold Camping.** Predicted judgment day for September 1994, then 21 May 2011, then 21 October 2011, backed by a national radio campaign. He later described his attempts to set a date as sinful[^83][^84].

<?viz end-times/date-setting?>


Any framework flexible enough to map current headlines onto prophecy is flexible enough to have mapped every previous generation's headlines, which is why the method has never produced a correct prediction[^85][^86].

**See also:** [Fig Tree Generation (Prophecy)](/categories/prophecy#section-fig-tree-generation).
`
    },
    {
      id: "how-to-respond",
      title: "How Christians Should Respond",
      tags: ["Response"],
      content: `
Scripture's own application of eschatology is practical rather than speculative[^87].

*   **Watchfulness rather than calculation.** The commands attached to Christ's return are to stay awake, be ready, and keep working. The parables in Matthew 24 and 25 commend the servant found doing his job rather than the one predicting the master's arrival[^88].
*   **Hope rather than fear.** The return is called the blessed hope, and the day of the Lord is described as arriving like a thief, which is a reason for readiness rather than for anxiety[^89][^90].
*   **Holiness and mission.** Peter's conclusion from cosmic dissolution is a question about character, asking what sort of people believers ought to be, and the expected outcomes are godliness, evangelism and service[^91][^92].
*   **Accuracy in argument.** Claims that collapse under a few minutes of checking make the central message harder to hear, so distinguishing what Scripture clearly teaches from what a particular framework infers is part of faithful teaching[^93].

In the New Testament sense the answer to the question is yes, since the last days began at Pentecost. Whether this is the final generation is unknowable, and Scripture treats the desire to know it as a distraction from what it actually commands[^94].
`
    }
  ],
              sources: [
    "1. [Apologetics] GotQuestions.org. What does the Bible say about the end times? Overview of the biblical framework. https://www.gotquestions.org/end-times.html",
    "2. [Commentary] Bible Hub. 1 John 2:18 Commentaries. https://biblehub.com/commentaries/1_john/2-18.htm",
    "3. [Commentary] Bible Hub. 'Commentaries on Mark 13:32.' https://biblehub.com/commentaries/mark/13-32.htm",
    "4. [Apologetics] The Gospel Coalition. The Return of Christ. Theological essay on the second coming. https://www.thegospelcoalition.org/essay/the-return-of-christ/",
    "5. [Reference] Bible Hub Interlinear Bible. 'Acts 2:17.' https://biblehub.com/interlinear/acts/2-17.htm",
    "6. [Encyclopedia] Britannica. Eschatology. Academic overview of eschatological belief. https://www.britannica.com/topic/eschatology",
    "7. [Commentary] Bible Hub. Acts 2:17 Commentaries. https://biblehub.com/commentaries/acts/2-17.htm",
    "8. [Commentary] Bible Hub. 1 Peter 1:20 Commentaries. https://biblehub.com/commentaries/1_peter/1-20.htm",
    "9. [Academic] ''An Interpretation of Matthew 24-25' by Thomas D. Ice.' Liberty University. https://digitalcommons.liberty.edu/pretrib_arch/2/",
    "10. [Wikipedia] 'Olivet Discourse.' https://en.wikipedia.org/wiki/Olivet_Discourse",
    "11. [Wikipedia] Abomination of desolation. The image Daniel and the Olivet discourse share. https://en.wikipedia.org/wiki/Abomination_of_desolation",
    "12. [Commentary] Commentaries on Daniel 9:27. Bible Hub. https://biblehub.com/commentaries/daniel/9-27.htm",
    "13. [Reference] Bible Hub Interlinear Bible. 'Daniel 9:24.' https://biblehub.com/interlinear/daniel/9-24.htm",
    "14. [Wikipedia] Great Tribulation. The period described in the prophetic texts. https://en.wikipedia.org/wiki/Great_Tribulation",
    "15. [Commentary] Commentaries on Revelation 16:1. Bible Hub. https://biblehub.com/commentaries/revelation/16-1.htm",
    "16. [Wikipedia] Christian eschatology (preterism, historicism, futurism, idealism). https://en.wikipedia.org/wiki/Christian_eschatology",
    "17. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Eschatology.' https://www.newadvent.org/cathen/05528b.htm",
    "18. [Wikipedia] Preterism. https://en.wikipedia.org/wiki/Preterism",
    "19. [Commentary] Commentaries on Revelation 1:1. Bible Hub. https://biblehub.com/commentaries/revelation/1-1.htm",
    "20. [Reference] Bible Hub Interlinear Bible. 'Revelation 1:1.' https://biblehub.com/interlinear/revelation/1-1.htm",
    "21. [Wikipedia] Historicism (Christianity). https://en.wikipedia.org/wiki/Historicism_(Christianity)",
    "22. [Wikipedia] Amillennialism. https://en.wikipedia.org/wiki/Amillennialism",
    "23. [Encyclopedia] New Advent, Catholic Encyclopedia. 'Millennium and Millenarianism.' https://www.newadvent.org/cathen/10307a.htm",
    "24. [Wikipedia] Futurism (Christianity). https://en.wikipedia.org/wiki/Futurism_(Christianity)",
    "25. [Wikipedia] Idealism (Christian eschatology). The symbolic reading of the imagery. https://en.wikipedia.org/wiki/Idealism_(Christian_eschatology)",
    "26. [Reference] Bible Hub Interlinear Bible. 'Revelation 20:2.' https://biblehub.com/interlinear/revelation/20-2.htm",
    "27. [Wikipedia] Premillennialism. Christ returning before the thousand year reign. https://en.wikipedia.org/wiki/Premillennialism",
    "28. [Commentary] Bible Hub. 'Commentaries on 1 Thessalonians 4:17.' https://biblehub.com/commentaries/1_thessalonians/4-17.htm",
    "29. [Lexicon] Bible Hub. Greek 726, harpazo (to seize, catch up, snatch away). https://biblehub.com/greek/726.htm",
    "30. [Wikipedia] 'Rapture.' The word, its history and the views on its timing. https://en.wikipedia.org/wiki/Rapture",
    "31. [Apologetics] GotQuestions.org. 'When will the rapture occur in relation to the tribulation?' https://www.gotquestions.org/rapture-tribulation.html",
    "32. [Wikipedia] 'John Nelson Darby.' https://en.wikipedia.org/wiki/John_Nelson_Darby",
    "33. [Commentary] Bible Hub. 'Commentaries on Matthew 24:29.' https://biblehub.com/commentaries/matthew/24-29.htm",
    "34. [Commentary] Bible Hub. 'Commentaries on 2 Thessalonians 2:3.' https://biblehub.com/commentaries/2_thessalonians/2-3.htm",
    "35. [Lexicon] Bible Hub. Greek 529, apantesis (a meeting). https://biblehub.com/greek/529.htm",
    "36. [Commentary] Bible Hub. 'Commentaries on Matthew 24:40.' https://biblehub.com/commentaries/matthew/24-40.htm",
    "37. [Apologetics] Desiring God. Stop Dating Jesus. Argument against date-setting from Matthew 24:36. https://www.desiringgod.org/articles/stop-dating-jesus",
    "38. [Commentary] Bible Hub. 'Commentaries on Matthew 24:6.' https://biblehub.com/commentaries/matthew/24-6.htm",
    "39. [Commentary] Bible Hub. 'Commentaries on Luke 21:11.' https://biblehub.com/commentaries/luke/21-11.htm",
    "40. [Creationist] Answers in Genesis. Are You Ready for the End of the World? Warning against speculative sign-reading. https://answersingenesis.org/christianity/are-you-ready-for-the-end-of-the-world/",
    "41. [Commentary] Bible Hub. Matthew 24:26 Commentaries. https://biblehub.com/commentaries/matthew/24-26.htm",
    "42. [Commentary] Bible Hub. Matthew 24:14 Commentaries. https://biblehub.com/commentaries/matthew/24-14.htm",
    "43. [Wikipedia] Great Commission. The task assigned before the return. https://en.wikipedia.org/wiki/Great_Commission",
    "44. [Commentary] Bible Hub. Ezekiel 36:24 Commentaries. https://biblehub.com/commentaries/ezekiel/36-24.htm",
    "45. [Wikipedia] Covenant theology. The framework reading the promises as fulfilled in Christ and the church. https://en.wikipedia.org/wiki/Covenant_theology",
    "46. [Academic] 'Christians and Jews - Starting Over.' Boston College. https://www.bc.edu/content/dam/files/research_sites/cjl/texts/cjrelations/resources/articles/johnson.htm",
    "47. [Wikipedia] 'Supersessionism.' https://en.wikipedia.org/wiki/Supersessionism",
    "48. [Wikipedia] Second Epistle to Timothy. Setting and purpose of the letter. https://en.wikipedia.org/wiki/Second_Epistle_to_Timothy",
    "49. [Commentary] Commentaries on 2 Timothy 3:5. Bible Hub. https://biblehub.com/commentaries/2_timothy/3-5.htm",
    "50. [Wikipedia] Kingdom of God (Christianity). The already inaugurated and not yet consummated reign. https://en.wikipedia.org/wiki/Kingdom_of_God_(Christianity)",
    "51. [Academic] Li, Shuai et al. Widespread hematite at high latitudes of the Moon. Science Advances, 2 September 2020. https://www.science.org/doi/10.1126/sciadv.aba1940",
    "52. [Reference] Jet Propulsion Laboratory. The Moon Is Rusting, and Researchers Want to Know Why. https://www.jpl.nasa.gov/news/the-moon-is-rusting-and-researchers-want-to-know-why/",
    "53. [Academic] University of Hawaii. Has Earth's oxygen rusted the Moon for billions of years? https://www.hawaii.edu/news/2020/09/02/earth-oxygen-moon-rust/",
    "54. [Reference] NASA. Blood Moon Lunar Eclipse. Why the moon reddens during totality. https://www.nasa.gov/image-article/blood-moon-lunar-eclipse/",
    "55. [News] Space.com. Why does the moon turn red during a total lunar eclipse? https://www.space.com/why-moon-turns-red-total-lunar-eclipse",
    "56. [Academic] Garg S et al. Analyzing long-term trends and variations in the sunspot cycle across Solar Cycles 1-24, and the rising phase of Solar Cycle 25., 2026. https://doi.org/10.21203/rs.3.rs-8639010/v1",
    "57. [Wikipedia] 'Solar cycle 25.' https://en.wikipedia.org/wiki/Solar_cycle_25",
    "58. [Encyclopedia] Britannica. Euphrates River. Hydrology and the effect of upstream dams. https://www.britannica.com/place/Euphrates-River",
    "59. [Wikipedia] Southeastern Anatolia Project. The Turkish dam programme affecting the river. https://en.wikipedia.org/wiki/Southeastern_Anatolia_Project",
    "60. [Commentary] Bible Hub. Revelation 16:12 Commentaries. https://biblehub.com/commentaries/revelation/16-12.htm",
    "61. [Wikipedia] Number of the beast. The identifications proposed across the centuries. https://en.wikipedia.org/wiki/Number_of_the_beast",
    "62. [Commentary] Commentaries on Revelation 13:18. Bible Hub. https://biblehub.com/commentaries/revelation/13-18.htm",
    "63. [Lexicon] Bible Hub. Greek 5480, charagma (a stamp, an impress). https://biblehub.com/greek/5480.htm",
    "64. [Commentary] Bible Hub. 'Commentaries on Revelation 14:9.' https://biblehub.com/commentaries/revelation/14-9.htm",
    "65. [Apologetics] GotQuestions.org. 'What is the mark of the beast?' https://www.gotquestions.org/mark-beast.html",
    "66. [Primary Source] New Advent, Church Fathers. Irenaeus, Against Heresies, Book 5, chapter 30. https://www.newadvent.org/fathers/0103530.htm",
    "67. [Wikipedia] 'Papyrus 115.' The Oxyrhynchus fragment of Revelation reading 616. https://en.wikipedia.org/wiki/Papyrus_115",
    "68. [Wikipedia] 'Third Temple.' https://en.wikipedia.org/wiki/Third_Temple",
    "69. [Commentary] Bible Hub. 'Commentaries on 2 Thessalonians 2:4.' https://biblehub.com/commentaries/2_thessalonians/2-4.htm",
    "70. [Wikipedia] 'Temple Institute.' https://en.wikipedia.org/wiki/Temple_Institute",
    "71. [Wikipedia] 'Red heifer.' Including the heifers brought to Israel in 2022. https://en.wikipedia.org/wiki/Red_heifer",
    "72. [Primary Source] The Temple Institute. 'About Us.' https://templeinstitute.org/about-us/",
    "73. [Commentary] Bible Hub. 'Commentaries on Hebrews 10:12.' https://biblehub.com/commentaries/hebrews/10-12.htm",
    "74. [Commentary] Bible Hub. 'Commentaries on Ezekiel 38:2.' https://biblehub.com/commentaries/ezekiel/38-2.htm",
    "75. [Wikipedia] 'Gog and Magog.' https://en.wikipedia.org/wiki/Gog_and_Magog",
    "76. [Lexicon] Bible Hub. Hebrew 7218, rosh (head, chief). https://biblehub.com/hebrew/7218.htm",
    "77. [Commentary] Bible Hub. 'Commentaries on Revelation 20:8.' https://biblehub.com/commentaries/revelation/20-8.htm",
    "78. [Commentary] Bible Hub. 'Commentaries on Matthew 24:36.' https://biblehub.com/commentaries/matthew/24-36.htm",
    "79. [Wikipedia] Great Disappointment. https://en.wikipedia.org/wiki/Great_Disappointment",
    "80. [Reference] Church history: The Great Disappointment. Grace Communion International. https://gci.org/articles/the-great-disappointment",
    "81. [Wikipedia] Edgar C. Whisenant. https://en.wikipedia.org/wiki/Edgar_C._Whisenant",
    "82. [News] Edgar Whisenant. Time. https://content.time.com/time/specials/packages/article/0,28804,2072678_2072683_2072696,00.html",
    "83. [News] ''Rapture' apocalypse prediction sparks atheist reaction.' BBC. https://www.bbc.co.uk/news/world-us-canada-13468131",
    "84. [Wikipedia] 'Harold Camping.' https://en.wikipedia.org/wiki/Harold_Camping",
    "85. [Encyclopedia] Britannica. 10 Failed Doomsday Predictions. Miller, Whisenant, Camping and others. https://www.britannica.com/list/10-failed-doomsday-predictions",
    "86. [Wikipedia] Doomsday cult. The recurring social pattern following failed predictions. https://en.wikipedia.org/wiki/Doomsday_cult",
    "87. [Commentary] Bible Hub. 'Commentaries on 2 Timothy 4:8.' https://biblehub.com/commentaries/2_timothy/4-8.htm",
    "88. [Commentary] Bible Hub. 'Commentaries on Matthew 24:44.' https://biblehub.com/commentaries/matthew/24-44.htm",
    "89. [Commentary] Bible Hub. 'Commentaries on Titus 2:13.' https://biblehub.com/commentaries/titus/2-13.htm",
    "90. [Commentary] Bible Hub. 'Commentaries on 1 Thessalonians 5:2.' https://biblehub.com/commentaries/1_thessalonians/5-2.htm",
    "91. [Commentary] Bible Hub. 'Commentaries on 2 Peter 3:10.' https://biblehub.com/commentaries/2_peter/3-10.htm",
    "92. [Commentary] Bible Hub. 'Commentaries on 1 John 3:2.' https://biblehub.com/commentaries/1_john/3-2.htm",
    "93. [Wikipedia] Biblical hermeneutics. Principles distinguishing text from inference. https://en.wikipedia.org/wiki/Biblical_hermeneutics",
    "94. [Commentary] Bible Hub. 'Commentaries on Acts 1:7.' https://biblehub.com/commentaries/acts/1-7.htm"
  ],
  lastUpdated: "30-10-2026"
}
