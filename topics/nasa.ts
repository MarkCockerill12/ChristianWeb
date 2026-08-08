import type { Topic } from './types'

export const nasa: Topic = {
  id: "nasa",
  title: "NASA & Space Science: Evidence for Biblical History",
  description: `How NASA satellite imagery, astrophysics, and atmospheric data provide scientific context for biblical events`,
  icon: "Zap",
  color: "indigo",
  tags: ["Cosmology", "Archaeology", "Physics", "NASA"],
  verses: [
    { reference: "Joshua 10:12-13", text: "On the day the Lord gave the Amorites over to Israel, Joshua said to the Lord in the presence of Israel: 'Sun, stand still over Gibeon, and you, moon, over the Valley of Aijalon.' So the sun stood still, and the moon stopped, till the nation avenged itself on its enemies." },
    { reference: "Exodus 14:21", text: "Then Moses stretched out his hand over the sea, and all that night the Lord drove the sea back with a strong east wind and turned it into dry land. The waters were divided." },
    { reference: "Genesis 19:24", text: "Then the Lord rained down burning sulfur on Sodom and Gomorrah, from the Lord out of the heavens." },
    { reference: "Acts 2:20", text: "The sun will be turned to darkness and the moon to blood before the coming of the great and glorious day of the Lord." },
    { reference: "Matthew 27:51", text: "At that moment the curtain of the temple was torn in two from top to bottom. The earth shook, the rocks split." },
    { reference: "Isaiah 40:22", text: "He sits enthroned above the circle of the earth, and its people are like grasshoppers. He stretches out the heavens like a canopy, and spreads them out like a tent to live in." },
    { reference: "Job 26:7", text: "He spreads out the northern skies over empty space; he suspends the earth over nothing." }
  ],
  tldr: `Tools built for space exploration, including eclipse catalogues, orbital ephemerides, radar imaging and ocean-wind modelling, can date events precisely and demonstrate that described mechanisms are physically possible. Several biblical narratives sit comfortably alongside that data. One widely repeated claim on this subject rested on a paper retracted in 2025, and several others are plausible reconstructions rather than confirmations.`,
  content: `
Modern science does not disprove the Bible. Tools developed for space exploration, including satellite radar, orbital mechanics software and atmospheric modelling, supply physical context for events recorded in Scripture[^1][^2].

These tools establish that an event was physically possible, and in several cases they date it precisely. They cannot establish that a specific biblical episode occurred exactly as described[^3][^4].
`,
  subtopics: [
    {
      id: "joshua-long-day",
      title: "Joshua's Long Day and the 1207 BC Eclipse",
      tags: ["joshua", "astronomy", "eclipse", "cambridge"],
      content: `
The popular story that NASA computers discovered a missing day in history is fiction. It has circulated since the 1930s, predates NASA entirely, and no such calculation is possible, since orbital models are calibrated from observations and therefore cannot reveal a gap in them[^5].

The serious research is different. Cambridge physicists Colin Humphreys and Graeme Waddington published an analysis in *Astronomy & Geophysics* in 2017 proposing that the event was an annular solar eclipse[^6].

*   **The translation argument.** The Hebrew verbs usually rendered "stand still" can carry the sense of ceasing to shine or growing dark, which would describe an eclipse rather than a halt in the earth's rotation[^7][^8].
*   **The date.** Working from eclipse canons, the authors identify an annular eclipse over Canaan on 30 October 1207 BC, which would be the oldest solar eclipse recorded anywhere[^9].
*   **The chronological payoff.** If correct, it fixes an absolute date in the period, with implications for Egyptian chronology and the reign of Merneptah[^10].

The reading depends on a non-standard translation that many Hebraists do not accept, and it requires a particular Exodus chronology. It is a serious peer-reviewed proposal rather than a settled result, and it reinterprets the miracle rather than confirming the traditional reading of it[^11].
`
    },
    {
      id: "red-sea-crossing",
      title: "The Red Sea Crossing and Wind Setdown",
      tags: ["exodus", "moses", "physics", "oceanography"],
      content: `
Carl Drews and Weiqing Han published a study in *PLOS ONE* in 2010, supported by the NASA Ocean Vector Winds Science Team, modelling wind setdown, the displacement of shallow water by sustained strong wind[^12].

*   **The simulation.** Using the Regional Ocean Modeling System, the authors found that a sustained east wind of roughly 63 mph over about twelve hours could expose a land bridge several kilometres across in a shallow coastal lagoon[^13].
*   **The mechanism matches the text.** Exodus 14:21 attributes the parting to a strong east wind blowing all night, so the model matches the mechanism the narrative itself describes rather than replacing it[^14].
*   **The return.** When the wind drops, water returns rapidly as a bore wave, consistent with the account of the pursuing force being overwhelmed[^15].

The authors modelled a site in the eastern Nile Delta rather than the modern Red Sea, and were explicit that the study demonstrates physical plausibility rather than proving the event occurred. The location of the crossing remains disputed, and a 63 mph wind blowing all night is itself an extreme condition[^16].
`
    },
    {
      id: "sodom-gomorrah",
      title: "Sodom and the Retracted Airburst Paper",
      tags: ["sodom", "retraction", "correction", "impact"],
      content: `
A widely circulated claim held that a Tunguska-scale cosmic airburst destroyed Tall el-Hammam and inspired the Sodom account. It rested on a 2021 paper in *Scientific Reports* that has since been retracted[^17][^18].

*   **The original claim.** The 2021 paper reported melted pottery, bubbled mudbrick and shocked quartz, arguing for an airburst around 1650 BC[^19][^20].
*   **The mineralogical rebuttal.** A 2022 response by geologists Jaret and Harris found no mineralogic or geochemical evidence of impact, disputing the shocked-quartz identification in particular[^21].
*   **The physics rebuttal.** Boslough and Bruno later showed that the Tunguska comparison rested on errors overestimating temperatures, wind speeds and blast effects[^22].
*   **The retraction.** *Scientific Reports* formally retracted the paper on 24 April 2025. Several authors disagreed with the decision and stated an intention to republish with new data[^23].

Melted material at the site is real and still requires explanation, and Tall el-Hammam remains a significant Bronze Age destruction layer. The airburst interpretation no longer stands in the published literature[^24].

Airbursts remain a genuine and well-documented phenomenon, independent of the Tall el-Hammam claim[^25].
`
    },
    {
      id: "lost-city-ubar",
      title: "Ubar and Radar Archaeology",
      tags: ["archaeology", "radar", "shuttle", "arabia"],
      content: `
Space Shuttle Endeavour's SIR-C/X-SAR radar can penetrate dry sand and reveal buried features, and NASA imagery in the early 1990s helped identify ancient caravan tracks converging in the Rub' al Khali[^26].

*   **The find.** Excavation at Shisr in Oman revealed a fortified caravan site associated with the frankincense trade, partly collapsed into a limestone sinkhole[^27].
*   **The trade connection.** Frankincense and its Arabian trade routes appear in the Old Testament, and the commerce the site served is the commerce those texts describe[^28].

The "lost city of Ubar" identification was largely a media framing. Archaeologists dispute whether Shisr is Ubar at all, and some regard the site as a modest caravan waystation rather than a great city. Ubar is not named in the Bible, so the scriptural connection is the frankincense trade generally rather than the site specifically[^29].
`
    },
    {
      id: "crucifixion-earthquake",
      title: "Dating the Crucifixion: Eclipse and Seismite",
      tags: ["crucifixion", "seismology", "eclipse", "geology"],
      content: `
Two independent lines of data converge on a narrow window, though neither is decisive alone[^30].

*   **The lunar eclipse.** NASA's eclipse catalogue confirms a partial lunar eclipse on 3 April AD 33, visible at moonrise from Jerusalem, which Humphreys and Waddington argued illuminates Peter's Pentecost citation of Joel[^31].
*   **Why the moon reddens.** During an eclipse the earth's atmosphere refracts and scatters sunlight, allowing long-wavelength red light through. This is ordinary optics rather than an anomaly[^32].
*   **The competing date.** Many scholars prefer AD 30, on which the eclipse argument does not work, so the date of the crucifixion remains genuinely unsettled[^33].
*   **The earthquake.** Williams and colleagues, analysing laminated Dead Sea sediments, identified a seismite layer dated to roughly AD 26 to 36, overlapping Pilate's governorship[^34].

The seismite dating has limits. The authors noted that the layer could reflect an earthquake in that window, or an earlier quake whose signature was reworked. Sediment dating at this resolution cannot isolate a single day, and the study does not claim to confirm Matthew's account, only that a regional seismic event in that period is consistent with it[^35].
`
    },
    {
      id: "star-bethlehem",
      title: "The Star of Bethlehem",
      tags: ["bethlehem", "star", "conjunction", "magi"],
      content: `
NASA JPL's HORIZONS ephemeris system reconstructs planetary positions for any date with high precision, and the candidate events below genuinely occurred[^36].

*   **Jupiter and Saturn, 7 BC, in Pisces.** A real and rare triple conjunction. Babylonian astrology associated Jupiter with kingship and Pisces with the Levant, which would give Magi a reason to travel[^37].
*   **Jupiter and Venus, 17 June 2 BC, in Leo.** The two planets closed to within a few arcminutes, appearing nearly as a single very bright object[^38].

No candidate is conclusive. Matthew describes a star that went ahead of the Magi and stopped over a specific location, behaviour no conjunction, comet, nova or planet exhibits. Proposals include a supernova, a comet, a purely astrological interpretation, and a non-natural sign, each fitting parts of the account and straining others[^39].

The dating problem cuts both ways. The 2 BC option conflicts with the traditional dating of Herod's death to 4 BC, while the 7 BC option requires a longer journey. Presenting any one of these as the Star of Bethlehem overstates what the astronomy can settle[^40].
`
    },
    {
      id: "hezekiah-sundial",
      title: "Hezekiah's Sundial and Atmospheric Refraction",
      tags: ["hezekiah", "sundial", "refraction", "physics"],
      content: `
The shadow moving backward on the steps of Ahaz has been explained by anomalous atmospheric refraction, in which light bends passing through air layers of sharply differing density and shifts the sun's apparent position[^41].

*   **The physics is real.** Refraction genuinely displaces the sun's apparent position near the horizon, and unusual temperature inversions produce documented distortions such as mirages and the Novaya Zemlya effect[^42].
*   **The scale required is not established.** Producing a shadow retreat large enough to be read as a sign on a stepped dial is a much stronger effect than ordinary refraction delivers, and no observation of that magnitude has been recorded[^43].

Refraction remains a physically conceivable mechanism rather than a corroborated explanation. The narrative frames the event as a sign given at Hezekiah's request, a category that a natural mechanism does not obviously improve on[^44].
`
    }
  ],
          sources: [
    "1. [NASA] Five Millennium Catalog of Solar Eclipses. NASA GSFC eclipse database. https://eclipse.gsfc.nasa.gov/SEcat5/catalog.html",
    "2. [NASA] NASA JPL. HORIZONS ephemeris system, used to reconstruct historical planetary positions. https://ssd.jpl.nasa.gov/horizons/",
    "3. [Peer-Reviewed] Retraction Note: A Tunguska sized airburst destroyed Tall el-Hammam. Scientific Reports, 24 April 2025. https://www.nature.com/articles/s41598-025-99265-5",
    "4. [Science Journalism] SAPIENS. Pseudoscience About the Tall el-Hammam Site. https://www.sapiens.org/archaeology/tall-el-hammam/",
    "5. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Astronomy in the Bible.' https://www.newadvent.org/cathen/02029a.htm",
    "6. [Peer-Reviewed] Humphreys, C. and Waddington, G. Solar eclipse of 1207 BC helps to date pharaohs. Astronomy & Geophysics 58.5 (2017). https://academic.oup.com/astrogeo/article/58/5/5.39/4159289",
    "7. [Lexical] Bible Hub. Hebrew 1826, damam, the verb rendered stand still or be silent. https://biblehub.com/hebrew/1826.htm",
    "8. [Academic] Biblical Research Institute. Exegetical resources on Old Testament narrative. https://www.adventistbiblicalresearch.org/materials/genesis-217/",
    "9. [NASA] NASA GSFC. Solar eclipse catalogue, 1299 to 1200 BC, the interval containing the proposed Joshua eclipse. https://eclipse.gsfc.nasa.gov/SEcat5/SE-1299--1200.html",
    "10. [Encyclopedia] Britannica. Biblical literature. Scholarly overview of the texts and their study. https://www.britannica.com/topic/biblical-literature",
    "11. [Commentary] Bible Hub. 'Commentaries on Joshua 10:13.' https://biblehub.com/commentaries/joshua/10-13.htm",
    "12. [Peer-Reviewed] Drews, C. and Han, W. Dynamics of Wind Setdown at Suez and the Eastern Nile Delta. PLOS ONE (2010), supported by the NASA Ocean Vector Winds Science Team. https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0012481",
    "13. [NASA] Lunar and Planetary Institute. Background resources on modelling extreme natural events. https://www.lpi.usra.edu/education/explore/planetary-defense/background/",
    "14. [Commentary] Bible Hub. 'Commentaries on Exodus 14:21.' https://biblehub.com/commentaries/exodus/14-21.htm",
    "15. [Reference] Wikipedia. Book of Exodus. Composition, setting and historical questions. https://en.wikipedia.org/wiki/Book_of_Exodus",
    "16. [NASA] NASA Planetary Defense overview. Near-Earth objects and airburst events. https://www.nasa.gov/planetarydefense/overview",
    "17. [Peer-Reviewed] Bunch, T. et al. RETRACTED ARTICLE: A Tunguska sized airburst destroyed Tall el-Hammam. Scientific Reports (2021). https://www.nature.com/articles/s41598-021-97778-3",
    "18. [Index] PubMed. Retraction notice record for the Tall el-Hammam airburst paper. https://pubmed.ncbi.nlm.nih.gov/40275027/",
    "19. [Peer-Reviewed] Jaret, S. and Harris, R.S. No mineralogic or geochemical evidence of impact at Tall el-Hammam. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8956582/",
    "20. [NASA] NASA Earth Observatory. Secrets Beneath the Sand. Shuttle radar imaging in Arabia. https://earthobservatory.nasa.gov/images/90847/secrets-beneath-the-sand",
    "21. [Commentary] Bible Hub. 'Commentaries on Genesis 19:24.' https://biblehub.com/commentaries/genesis/19-24.htm",
    "22. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Theodicy.' https://www.newadvent.org/cathen/14569a.htm",
    "23. [NASA] NASA Eclipse Web Site. Lunar Eclipses: 0001 to 0100 AD, including 3 April AD 33. https://eclipse.gsfc.nasa.gov/LEcat5/LE0001-0100.html",
    "24. [NASA] NASA. Blood Moon Lunar Eclipse. Why the moon reddens during totality. https://www.nasa.gov/image-article/blood-moon-lunar-eclipse/",
    "25. [Peer-Reviewed] Williams, J. et al. An early first-century earthquake in the Dead Sea. International Geology Review 54 (2012). https://ui.adsabs.harvard.edu/abs/2012IGRv...54.1219W/abstract",
    "26. [Reference] Wikipedia. Scientific Reports. The journal that issued the retraction. https://en.wikipedia.org/wiki/Scientific_Reports",
    "27. [Reference] Wikipedia. Star of Bethlehem. Survey of the conjunction, comet, nova and astrological proposals. https://en.wikipedia.org/wiki/Star_of_Bethlehem",
    "28. [NASA] NASA Eclipse Web Site. Atmospheric refraction and the appearance of eclipsed bodies. https://eclipse.gsfc.nasa.gov/LEcat5/appearance.html",
    "29. [Reference] Wikipedia. Novaya Zemlya effect. A documented extreme refraction phenomenon. https://en.wikipedia.org/wiki/Novaya_Zemlya_effect",
    "30. [Commentary] Bible Hub. 'Commentaries on Matthew 27:51.' https://biblehub.com/commentaries/matthew/27-51.htm",
    "31. [Reference] Wikipedia. Incense trade route. The commerce the Arabian site served. https://en.wikipedia.org/wiki/Incense_trade_route",
    "32. [Reference] Wikipedia. Hezekiah's Tunnel. Archaeological confirmation of works attributed to Hezekiah. https://en.wikipedia.org/wiki/Hezekiah%27s_Tunnel",
    "33. [Reference] Wikipedia. Chronology of Jesus. The competing dates for the crucifixion. https://en.wikipedia.org/wiki/Chronology_of_Jesus",
    "34. [Reference] Wikipedia. Dead Sea. Geology and the laminated sediment record. https://en.wikipedia.org/wiki/Dead_Sea",
    "35. [Reference] Wikipedia. Pontius Pilate. Dates of his governorship of Judea. https://en.wikipedia.org/wiki/Pontius_Pilate",
    "36. [Catholic Reference] New Advent, Catholic Encyclopedia. 'The Wise Men (Magi).' https://www.newadvent.org/cathen/09527a.htm",
    "37. [Commentary] Bible Hub. 'Commentaries on Matthew 2:2.' https://biblehub.com/commentaries/matthew/2-2.htm",
    "38. [Reference] Wikipedia. Venus. The planet's brightness and its conjunctions. https://en.wikipedia.org/wiki/Venus",
    "39. [Reference] Wikipedia. Pisces (constellation). The constellation of the 7 BC triple conjunction. https://en.wikipedia.org/wiki/Pisces_(constellation)",
    "40. [Reference] Wikipedia. Herod the Great. The dating of his death and its bearing on the nativity. https://en.wikipedia.org/wiki/Herod_the_Great",
    "41. [Commentary] Bible Hub. 'Commentaries on 2 Kings 20:11.' https://biblehub.com/commentaries/2_kings/20-11.htm",
    "42. [Reference] Wikipedia. Mirage. Refraction phenomena produced by temperature gradients. https://en.wikipedia.org/wiki/Mirage",
    "43. [Encyclopedia] Britannica. Adam and Eve. Reference overview of biblical narrative study. https://www.britannica.com/topic/Adam-and-Eve-biblical-literary-figures",
    "44. [Reference] Wikipedia. Book of Kings. Composition and content of the account. https://en.wikipedia.org/wiki/Books_of_Kings"
  ],
  lastUpdated: "06-08-2026"
}
