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
  tldr: "The New Testament places the 'last days' as beginning at Pentecost, so the church has been living in them for two thousand years. Scripture forbids date-setting, and every attempt to ignore that instruction has failed. Christians read Revelation through four distinct frameworks, and several popular modern 'signs' do not survive examination.",
  content: `
The question of whether we are in the end times combines two questions that Scripture answers very differently[^1].

Whether we are in the "last days" is answered plainly in the affirmative, and has been since the first century. Peter, at Pentecost, declared Joel's last days prophecy fulfilled that morning, Hebrews states that God has spoken in these last days through His Son, and John wrote that it was the last hour around AD 90[^2].

Whether we are in the final generation before Christ's return is a separate question, and Scripture states directly that no one knows the answer[^3].
`,
  subtopics: [
    {
      id: "inaugurated-eschatology",
      title: "Defining the End Times and Prophetic Context",
      tags: ["inaugurated eschatology", "new testament", "pentecost"],
      content: `
From a biblical perspective the last days are the entire period between Christ's ascension and His second coming, which places the church within them for over two thousand years[^4]. The kingdom of God has already begun in the life, death and resurrection of Jesus, while awaiting its final consummation, a framework theologians describe as inaugurated eschatology[^5].

*   **Peter at Pentecost.** Quoting Joel, Peter identified his own moment as the last days that the prophet foretold[^6].
*   **The apostolic writings.** Hebrews places the last days at the incarnation, and Peter writes that Christ was revealed in these last times for the sake of believers[^7].

Scripture also describes a specific period of tribulation immediately preceding the return of Christ. That timeline is drawn principally from Daniel, from the Olivet Discourse in Matthew 24, and from Revelation[^8]. Daniel outlines a succession of Gentile empires and a coming kingdom that will never be destroyed, and includes the seventieth week that many interpreters read as a future seven-year period[^9]. Revelation details the progressive judgments of seals, trumpets and bowls, culminating in the return of the King of Kings[^10].
`
    },
    {
      id: "interpretive-frameworks",
      title: "Four Ways Christians Read Revelation",
      tags: ["hermeneutics", "revelation", "frameworks"],
      content: `
Orthodox Christians have read the prophetic texts in four distinct ways for centuries, and the differences are substantial[^11].

*   **Preterism.** Most of Revelation's prophecies were fulfilled in the first century, particularly in the destruction of Jerusalem and the Temple in AD 70. Preterists point to the text's own time markers, which state that the events are near[^12].
*   **Historicism.** The prophecies unfold progressively across church history. This was the dominant view among the Reformers and is comparatively rare today[^13].
*   **Futurism.** Most of Revelation chapters 4 to 20 describes events still to come. This is the dominant view in modern evangelicalism, especially in its dispensationalist form[^14].
*   **Idealism.** The imagery depicts timeless spiritual realities, the conflict of good and evil in every age, rather than a datable sequence[^15].

<?viz end-times/frameworks?>


The millennium forms a separate axis. Premillennialism holds that Christ returns before a literal thousand-year reign, postmillennialism that He returns after a golden age, and amillennialism that the millennium is the present church age described symbolically[^16][^17]. These correlate loosely with the frameworks above, with futurists tending premillennial and idealists tending amillennial.

<?viz end-times/millennium?>


The signs framework set out in the following sections is largely a futurist reading. Amillennial and preterist Christians, who together account for much of the global church including most of the Reformed and Catholic traditions, do not treat current events as prophetic countdown markers[^18].
`
    },
    {
      id: "signs-jesus-named",
      title: "Traditional and Historical Signs of the End",
      tags: ["olivet discourse", "matthew 24", "signs"],
      content: `
In the Olivet Discourse Jesus lists indicators, and the way He frames them differs from the way they are commonly used[^19].

*   **Wars, famines and earthquakes.** Jesus calls these the beginning of birth pains and immediately adds that His hearers should not be alarmed, because such things must happen and the end is still to come. The stated function is to prevent premature excitement[^20][^21][^22].

<?viz end-times/earthquakes?>

*   **False messiahs and false prophets.** Jesus warns specifically about those claiming the end has arrived, and instructs His followers not to go out after them[^23].
*   **The gospel preached to all nations.** Matthew 24:14 is the one sign given an explicit connection to the end. Bible translation and global missions have advanced enormously, though the completion criterion is debated and cannot be verified[^24][^25].
*   **The restoration of Israel.** The re-establishment of the State of Israel in 1948 is the most cited modern prophetic argument. Ezekiel foretells God gathering His people from the nations back to their land, and futurist interpreters regard this as a necessary precursor to later events[^26]. Amillennial and preterist interpreters hold that the relevant prophecies were fulfilled in the return from Babylonian exile, and that the New Testament reads promises to Israel as fulfilled in Christ and the church[^27][^28].
*   **Moral decline.** Paul's warning to Timothy describes the last days in terms many find recognisable. Every generation has read its own decline into that passage, and Paul's instruction to have nothing to do with such people assumes they were present in Timothy's own congregation[^29].

These signs have characterised most of church history, which fits the reading that they describe the whole already-and-not-yet era rather than pinpointing its end[^30].
`
    },
    {
      id: "modern-claims",
      title: "Modern Claims That Do Not Hold Up",
      tags: ["correction", "science", "assessment"],
      content: `
Several arguments circulating in prophecy material fail under examination.

**The rusting moon.** In 2020 researchers led by Shuai Li reported hematite at high lunar latitudes, a genuine and surprising finding published in *Science Advances*[^31][^32]. Some prophecy writing links this to Revelation's moon like blood. The hematite is explained by oxygen from the earth's own upper atmosphere, carried to the moon by solar wind while the moon passes through the earth's magnetotail, a process operating over billions of years[^33]. A blood moon is a total lunar eclipse, in which the moon reddens because the earth's atmosphere refracts and scatters sunlight. It is ordinary optics, predictable centuries ahead, and observed throughout recorded history[^34][^35]. The two phenomena are unrelated, one being surface mineralogy and the other atmospheric optics.

**Sunspots and scorching heat.** Solar Cycle 25 has been more active than Cycle 24, but activity remains within the normal historical range of the roughly eleven-year cycle. Large sunspots are a routine feature of solar maxima, documented since Galileo[^36].

**The drying Euphrates.** Water levels have fallen sharply, driven by drought and by upstream dam construction in Turkey and Syria, which is well documented[^37][^38]. Revelation describes a sudden judgment during the tribulation, and human hydrological engineering is a different thing. At most this demonstrates that such an event is physically possible[^39].

**Mark of the Beast technology.** Digital payments and biometrics make a buying and selling restriction technically feasible, as prior centuries could have claimed of their own control mechanisms. Feasibility is not fulfilment, and identifying specific technologies as the mark has a long record of failure[^40].
`
    },
    {
      id: "date-setting",
      title: "The Track Record of Date-Setting",
      tags: ["date setting", "history", "warning"],
      content: `
Jesus stated that no one knows the day or hour, not the angels and not the Son, but only the Father, and told the apostles directly that it was not for them to know times or dates[^41].

*   **William Miller.** Preached that Christ would return in 1843, then recalculated to 22 October 1844, attracting perhaps 100,000 followers. The failure became known as the Great Disappointment[^42].
*   **Edgar Whisenant.** A former NASA engineer whose booklet *88 Reasons Why the Rapture Will Be in 1988* was mailed free to some 300,000 ministers and reportedly distributed in about 4.5 million copies. He followed the failure with revised dates for 1989, 1993 and 1994[^43].
*   **Harold Camping.** Predicted judgment day for September 1994, then 21 May 2011, then 21 October 2011, backed by a national radio campaign. He later described his attempts to set a date as sinful[^44].

<?viz end-times/date-setting?>


Any framework flexible enough to map current headlines onto prophecy is flexible enough to have mapped every previous generation's headlines, which is why the method has never produced a correct prediction[^45][^46].
`
    },
    {
      id: "how-to-respond",
      title: "How Christians Should Respond",
      tags: ["application", "watchfulness", "hope"],
      content: `
Scripture's own application of eschatology is practical rather than speculative[^47].

*   **Watchfulness rather than calculation.** The commands attached to Christ's return are to stay awake, be ready, and keep working. The parables in Matthew 24 and 25 commend the servant found doing his job rather than the one predicting the master's arrival[^48].
*   **Hope rather than fear.** The return is called the blessed hope, and the day of the Lord is described as arriving like a thief, which is a reason for readiness rather than for anxiety[^49][^50].
*   **Holiness and mission.** Peter's conclusion from cosmic dissolution is a question about character, asking what sort of people believers ought to be, and the expected outcomes are godliness, evangelism and service[^51][^52].
*   **Accuracy in argument.** Claims that collapse under a few minutes of checking make the central message harder to hear, so distinguishing what Scripture clearly teaches from what a particular framework infers is part of faithful teaching[^53].

In the New Testament sense the answer to the question is yes, since the last days began at Pentecost. Whether this is the final generation is unknowable, and Scripture treats the desire to know it as a distraction from what it actually commands[^54].
`
    }
  ],
          sources: [
    "1. [Apologetics] GotQuestions.org. What does the Bible say about the end times? Overview of the biblical framework. https://www.gotquestions.org/end-times.html",
    "2. [Commentary] Bible Hub. 1 John 2:18 Commentaries. https://biblehub.com/commentaries/1_john/2-18.htm",
    "3. [Commentary] Bible Hub. 'Commentaries on Mark 13:32.' https://biblehub.com/commentaries/mark/13-32.htm",
    "4. [Evangelical] The Gospel Coalition. The Return of Christ. Theological essay on the second coming. https://www.thegospelcoalition.org/essay/the-return-of-christ/",
    "5. [Encyclopedia] Britannica. Eschatology. Academic overview of eschatological belief. https://www.britannica.com/topic/eschatology",
    "6. [Commentary] Bible Hub. Acts 2:17 Commentaries. https://biblehub.com/commentaries/acts/2-17.htm",
    "7. [Commentary] Bible Hub. 1 Peter 1:20 Commentaries. https://biblehub.com/commentaries/1_peter/1-20.htm",
    "8. [Reference] Wikipedia. Olivet Discourse. The structure and content of Matthew 24. https://en.wikipedia.org/wiki/Olivet_Discourse",
    "9. [Reference] Wikipedia. Abomination of desolation. The image Daniel and the Olivet discourse share. https://en.wikipedia.org/wiki/Abomination_of_desolation",
    "10. [Reference] Wikipedia. Great Tribulation. The period described in the prophetic texts. https://en.wikipedia.org/wiki/Great_Tribulation",
    "11. [Encyclopedia] Wikipedia. Christian eschatology (preterism, historicism, futurism, idealism). https://en.wikipedia.org/wiki/Christian_eschatology",
    "12. [Encyclopedia] Wikipedia. Preterism. https://en.wikipedia.org/wiki/Preterism",
    "13. [Encyclopedia] Wikipedia. Historicism (Christianity). https://en.wikipedia.org/wiki/Historicism_(Christianity)",
    "14. [Encyclopedia] Wikipedia. Futurism (Christianity). https://en.wikipedia.org/wiki/Futurism_(Christianity)",
    "15. [Reference] Wikipedia. Idealism (Christian eschatology). The symbolic reading of the imagery. https://en.wikipedia.org/wiki/Idealism_(Christian_eschatology)",
    "16. [Reference] Wikipedia. Premillennialism. Christ returning before the thousand year reign. https://en.wikipedia.org/wiki/Premillennialism",
    "17. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Millennium and Millenarianism.' https://www.newadvent.org/cathen/10307a.htm",
    "18. [Encyclopedia] Wikipedia. Amillennialism. https://en.wikipedia.org/wiki/Amillennialism",
    "19. [Evangelical] Desiring God. Stop Dating Jesus. Argument against date-setting from Matthew 24:36. https://www.desiringgod.org/articles/stop-dating-jesus",
    "20. [Commentary] Bible Hub. 'Commentaries on Matthew 24:6.' https://biblehub.com/commentaries/matthew/24-6.htm",
    "21. [Commentary] Bible Hub. 'Commentaries on Luke 21:11.' https://biblehub.com/commentaries/luke/21-11.htm",
    "22. [Creation Ministry] Answers in Genesis. Are You Ready for the End of the World? Warning against speculative sign-reading. https://answersingenesis.org/christianity/are-you-ready-for-the-end-of-the-world/",
    "23. [Commentary] Bible Hub. Matthew 24:26 Commentaries. https://biblehub.com/commentaries/matthew/24-26.htm",
    "24. [Commentary] Bible Hub. Matthew 24:14 Commentaries. https://biblehub.com/commentaries/matthew/24-14.htm",
    "25. [Reference] Wikipedia. Great Commission. The task assigned before the return. https://en.wikipedia.org/wiki/Great_Commission",
    "26. [Commentary] Bible Hub. Ezekiel 36:24 Commentaries. https://biblehub.com/commentaries/ezekiel/36-24.htm",
    "27. [Reference] Wikipedia. Covenant theology. The framework reading the promises as fulfilled in Christ and the church. https://en.wikipedia.org/wiki/Covenant_theology",
    "28. [Reference] Wikipedia. Supersessionism. The disputed question of Israel's ongoing status. https://en.wikipedia.org/wiki/Supersessionism",
    "29. [Reference] Wikipedia. Second Epistle to Timothy. Setting and purpose of the letter. https://en.wikipedia.org/wiki/Second_Epistle_to_Timothy",
    "30. [Reference] Wikipedia. Kingdom of God (Christianity). The already inaugurated and not yet consummated reign. https://en.wikipedia.org/wiki/Kingdom_of_God_(Christianity)",
    "31. [Peer-Reviewed] Li, Shuai et al. Widespread hematite at high latitudes of the Moon. Science Advances, 2 September 2020. https://www.science.org/doi/10.1126/sciadv.aba1940",
    "32. [NASA] Jet Propulsion Laboratory. The Moon Is Rusting, and Researchers Want to Know Why. https://www.jpl.nasa.gov/news/the-moon-is-rusting-and-researchers-want-to-know-why/",
    "33. [University] University of Hawaii. Has Earth's oxygen rusted the Moon for billions of years? https://www.hawaii.edu/news/2020/09/02/earth-oxygen-moon-rust/",
    "34. [NASA] NASA. Blood Moon Lunar Eclipse. Why the moon reddens during totality. https://www.nasa.gov/image-article/blood-moon-lunar-eclipse/",
    "35. [Science Media] Space.com. Why does the moon turn red during a total lunar eclipse? https://www.space.com/why-moon-turns-red-total-lunar-eclipse",
    "36. [Reference] Wikipedia. Solar cycle 25. Observed activity relative to historical cycles. https://en.wikipedia.org/wiki/Solar_cycle_25",
    "37. [Encyclopedia] Britannica. Euphrates River. Hydrology and the effect of upstream dams. https://www.britannica.com/place/Euphrates-River",
    "38. [Reference] Wikipedia. Southeastern Anatolia Project. The Turkish dam programme affecting the river. https://en.wikipedia.org/wiki/Southeastern_Anatolia_Project",
    "39. [Commentary] Bible Hub. Revelation 16:12 Commentaries. https://biblehub.com/commentaries/revelation/16-12.htm",
    "40. [Reference] Wikipedia. Number of the beast. The identifications proposed across the centuries. https://en.wikipedia.org/wiki/Number_of_the_beast",
    "41. [Commentary] Bible Hub. 'Commentaries on Matthew 24:36.' https://biblehub.com/commentaries/matthew/24-36.htm",
    "42. [Encyclopedia] Wikipedia. Great Disappointment. https://en.wikipedia.org/wiki/Great_Disappointment",
    "43. [Encyclopedia] Wikipedia. Edgar C. Whisenant. https://en.wikipedia.org/wiki/Edgar_C._Whisenant",
    "44. [Encyclopedia] Wikipedia. Harold Camping. https://en.wikipedia.org/wiki/Harold_Camping",
    "45. [Encyclopedia] Britannica. 10 Failed Doomsday Predictions. Miller, Whisenant, Camping and others. https://www.britannica.com/list/10-failed-doomsday-predictions",
    "46. [Reference] Wikipedia. Doomsday cult. The recurring social pattern following failed predictions. https://en.wikipedia.org/wiki/Doomsday_cult",
    "47. [Commentary] Bible Hub. 'Commentaries on 2 Timothy 4:8.' https://biblehub.com/commentaries/2_timothy/4-8.htm",
    "48. [Commentary] Bible Hub. 'Commentaries on Matthew 24:44.' https://biblehub.com/commentaries/matthew/24-44.htm",
    "49. [Commentary] Bible Hub. 'Commentaries on Titus 2:13.' https://biblehub.com/commentaries/titus/2-13.htm",
    "50. [Commentary] Bible Hub. 'Commentaries on 1 Thessalonians 5:2.' https://biblehub.com/commentaries/1_thessalonians/5-2.htm",
    "51. [Commentary] Bible Hub. 'Commentaries on 2 Peter 3:10.' https://biblehub.com/commentaries/2_peter/3-10.htm",
    "52. [Commentary] Bible Hub. 'Commentaries on 1 John 3:2.' https://biblehub.com/commentaries/1_john/3-2.htm",
    "53. [Reference] Wikipedia. Biblical hermeneutics. Principles distinguishing text from inference. https://en.wikipedia.org/wiki/Biblical_hermeneutics",
    "54. [Commentary] Bible Hub. 'Commentaries on Acts 1:7.' https://biblehub.com/commentaries/acts/1-7.htm"
  ],
  lastUpdated: "26-10-2026"
}
