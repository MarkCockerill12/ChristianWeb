"use client"

import { CompareTable, PassageCompare, VisualCard } from "@/components/visuals/kit"
import { BibleArcs, type CuratedLink } from "@/components/visuals/bible-arcs"
import { RangeChart } from "@/components/visuals/charts"
import { Figure, Gallery } from "@/components/visuals/figure"

/* Facets: what the prophecy is about, which part of Scripture it comes from, and
   (for the messianic ones) whether Jesus could have chosen to act it out, which
   is the sceptic's main objection to this kind of evidence. */
const OUTSIDE = "Outside his control"
const ENACT = "Could be acted out"
const NOT_EVENT = "Not an event"

type Row = readonly [section: string, title: string, topic: string, source: string, control: string | null, meta: string]

const ROWS: readonly Row[] = [
  ["born-woman", "Born of a woman", "Birth", "Torah", OUTSIDE, "Genesis 3:15 → Galatians 4:4"],
  ["virgin-birth", "Virgin birth", "Birth", "Prophets", OUTSIDE, "Isaiah 7:14 → Matthew 1:18-25 (c. 735 BC)"],
  ["bethlehem-birth", "Born in Bethlehem", "Birth", "Prophets", OUTSIDE, "Micah 5:2 → Luke 2:1-7 (c. 700 BC)"],
  ["lineage-david", "Son of David", "Birth", "Prophets", OUTSIDE, "2 Samuel 7:12-16 → Matthew 1:1-17 (c. 1000 BC)"],
  ["flight-egypt", "Called out of Egypt", "Birth", "Prophets", OUTSIDE, "Hosea 11:1 → Matthew 2:13-15 (c. 750 BC)"],
  ["massacre-innocents", "Rachel weeping", "Birth", "Prophets", OUTSIDE, "Jeremiah 31:15 → Matthew 2:16-18 (c. 587 BC)"],
  ["forerunner-messenger", "A messenger goes ahead", "Ministry", "Prophets", OUTSIDE, "Isaiah 40:3; Malachi 3:1 → Matthew 3:1-3"],
  ["ministry-galilee", "Light in Galilee", "Ministry", "Prophets", ENACT, "Isaiah 9:1-2 → Matthew 4:12-16 (c. 740 BC)"],
  ["teaching-parables", "Teaching in parables", "Ministry", "Psalms", ENACT, "Psalm 78:2 → Matthew 13:34-35"],
  ["healing-ministry", "Good news to the poor", "Ministry", "Prophets", ENACT, "Isaiah 61:1-2 → Luke 4:16-21 (c. 700 BC)"],
  ["triumphal-entry", "King on a donkey", "Ministry", "Prophets", ENACT, "Zechariah 9:9 → Matthew 21:1-11 (c. 520 BC)"],
  ["betrayal-friend", "Betrayed by a friend", "Betrayal and trial", "Psalms", OUTSIDE, "Psalm 41:9 → John 13:18-21"],
  ["thirty-silver", "Thirty pieces of silver", "Betrayal and trial", "Prophets", OUTSIDE, "Zechariah 11:12-13 → Matthew 26:14-16 (c. 520 BC)"],
  ["silver-thrown-temple", "Silver thrown in the temple", "Betrayal and trial", "Prophets", OUTSIDE, "Zechariah 11:13 → Matthew 27:3-10"],
  ["false-witnesses", "False witnesses", "Betrayal and trial", "Psalms", OUTSIDE, "Psalm 35:11 → Matthew 26:59-61"],
  ["silent-accusation", "Silent before accusers", "Betrayal and trial", "Prophets", ENACT, "Isaiah 53:7 → Matthew 27:12-14 (c. 700 BC)"],
  ["struck-smitten", "Struck and spat on", "Betrayal and trial", "Prophets", OUTSIDE, "Isaiah 50:6 → Matthew 26:67-68"],
  ["isaiah-53-atonement", "Suffering for others' sins", "Crucifixion", "Prophets", NOT_EVENT, "Isaiah 53:5-6 → 1 Peter 2:24"],
  ["mocked-scorned", "Mocked and scorned", "Crucifixion", "Psalms", OUTSIDE, "Psalm 22:7-8 → Matthew 27:39-43"],
  ["hands-feet-pierced", "Hands and feet pierced", "Crucifixion", "Psalms", OUTSIDE, "Psalm 22:16 → John 20:25-27 (reading of the verse disputed)"],
  ["crucified-criminals", "Numbered with transgressors", "Crucifixion", "Prophets", OUTSIDE, "Isaiah 53:12 → Mark 15:27-28"],
  ["garments-divided", "Lots cast for his clothes", "Crucifixion", "Psalms", OUTSIDE, "Psalm 22:18 → John 19:23-24"],
  ["gall-vinegar", "Gall and vinegar", "Crucifixion", "Psalms", OUTSIDE, "Psalm 69:21 → Matthew 27:34"],
  ["forsaken-cry", "\"My God, my God\"", "Crucifixion", "Psalms", ENACT, "Psalm 22:1 → Matthew 27:46"],
  ["no-bones-broken", "No bone broken", "Crucifixion", "Psalms", OUTSIDE, "Psalm 34:20; Exodus 12:46 → John 19:31-36"],
  ["side-pierced", "The one they pierced", "Crucifixion", "Prophets", OUTSIDE, "Zechariah 12:10 → John 19:34-37"],
  ["darkness-land", "Darkness at noon", "Crucifixion", "Prophets", OUTSIDE, "Amos 8:9 → Matthew 27:45 (c. 760 BC)"],
  ["buried-rich", "With the rich in his death", "Burial and exaltation", "Prophets", OUTSIDE, "Isaiah 53:9 → Matthew 27:57-60"],
  ["resurrection-prophesied", "Not abandoned to the grave", "Burial and exaltation", "Psalms", OUTSIDE, "Psalm 16:10 → Acts 2:25-32"],
  ["ascension-heaven", "At God's right hand", "Burial and exaltation", "Psalms", OUTSIDE, "Psalm 110:1 → Acts 2:34-36"],
  ["daniel-timing", "Daniel's seventy weeks", "Messiah's identity", "Daniel", OUTSIDE, "Daniel 9:24-27 (timing disputed)"],
  ["prophet-like-moses", "A prophet like Moses", "Messiah's identity", "Torah", NOT_EVENT, "Deuteronomy 18:15-19 → Acts 3:20-23"],
  ["priest-melchizedek", "Priest like Melchizedek", "Messiah's identity", "Psalms", NOT_EVENT, "Psalm 110:4 → Hebrews 7:11-17"],
  ["stone-rejected", "The rejected cornerstone", "Messiah's identity", "Psalms", OUTSIDE, "Psalm 118:22 → Acts 4:11"],
  ["light-gentiles", "A light for the Gentiles", "Messiah's identity", "Prophets", OUTSIDE, "Isaiah 49:6 → Acts 13:47"],
  ["cyrus-named", "Cyrus named in advance", "Nations and empires", "Prophets", null, "Isaiah 44:28-45:1 → Ezra 1:1-4"],
  ["babylon-fall", "The fall of Babylon", "Nations and empires", "Prophets", null, "Isaiah 13:19-22 → 539 BC"],
  ["tyre-destruction", "The destruction of Tyre", "Nations and empires", "Prophets", null, "Ezekiel 26:3-14 → 585-572 and 332 BC"],
  ["nineveh-fall", "The fall of Nineveh", "Nations and empires", "Prophets", null, "Nahum 1:8-10 → 612 BC"],
  ["egypt-decline", "Egypt brought low", "Nations and empires", "Prophets", null, "Ezekiel 29:15 → 525 BC onward"],
  ["edom-desolation", "Edom's end", "Nations and empires", "Prophets", null, "Obadiah 1:18 → absorbed by c. 125 BC"],
  ["alexander-prophecy", "Alexander and the four horns", "Nations and empires", "Daniel", null, "Daniel 8:5-8 → 334-301 BC"],
  ["antiochus-persecution", "Antiochus Epiphanes", "Nations and empires", "Daniel", null, "Daniel 11:21-35 → 167 BC"],
  ["rome-iron-kingdom", "The iron kingdom", "Nations and empires", "Daniel", null, "Daniel 2:40-43 (Rome or Greece disputed)"],
  ["israel-scattering", "Israel scattered", "Israel and Jerusalem", "Torah", null, "Deuteronomy 28:64-67 → 722 BC, 586 BC, AD 70, 135"],
  ["israel-regathering", "Israel regathered", "Israel and Jerusalem", "Prophets", null, "Isaiah 11:11-12 (fulfilment debated)"],
  ["jerusalem-trampled", "Jerusalem trampled", "Israel and Jerusalem", "Jesus", null, "Luke 21:24 → AD 70 onward"],
  ["temple-destruction", "Not one stone left", "Israel and Jerusalem", "Jesus", null, "Matthew 24:2 → AD 70"],
  ["fig-tree-generation", "The fig tree generation", "Last days", "Jesus", null, "Matthew 24:32-34 (meaning debated)"],
  ["gospel-all-nations", "The gospel to all nations", "Last days", "Jesus", null, "Matthew 24:14"],
  ["knowledge-increase", "Knowledge shall increase", "Last days", "Daniel", null, "Daniel 12:4 (popular reading fails)"],
  ["perilous-times", "Terrible times", "Last days", "Letters", null, "2 Timothy 3:1-5"],
  ["scoffers-coming", "Scoffers will come", "Last days", "Letters", null, "2 Peter 3:3-4"],
]

const CURATED: readonly CuratedLink[] = ROWS.map(([section, title, topic, , control, meta]) => ({
  section,
  title,
  group: topic,
  note: control ?? "",
  meta,
}))

function Arcs() {
  return (
    <VisualCard
      title="How the Bible's prophecies and cross-references link together"
      subtitle={"One line of chapters, Genesis to Revelation, with an arc for each link. The first view draws the prophecies examined on this topic; select an arc to open its section. The other two views add every cross-reference, or only those running from the Old Testament to the New."}
      note={"A cross-reference is not a prophecy. Most mark a shared theme, phrase or allusion, and nobody has an agreed list of which of the Bible's links are predictions. The Old Testament to New Testament view is the nearest general filter, and the first view is this site's own selection. The full set is votes of 7 or more in OpenBible.info's data (64,568 of about 340,000 links), close in size to the 63,779 of the original chart."}
      sources={[
        { label: "OpenBible.info, \"Bible Cross References\" (data, CC BY; mainly the Treasury of Scripture Knowledge)", url: "https://www.openbible.info/labs/cross-references/" },
        { label: "Chris Harrison and Christoph Römhild, \"Bible Cross-References\" (2007), the chart this layout follows", url: "https://www.chrisharrison.net/index.php/Visualizations/BibleViz" },
      ]}
    >
      <BibleArcs curated={CURATED} />
    </VisualCard>
  )
}

function SeventyWeeks() {
  return (
    <VisualCard
      title="Four ways of counting Daniel's seventy weeks"
      subtitle={"Daniel 9:24-27 counts 69 \"sevens\" from a word to rebuild Jerusalem to an anointed one who is cut off. The result depends on where the count starts and what length of year it uses."}
      note="The 360-day year is inferred, not stated in Daniel. Critical scholars read the anointed one as the high priest Onias III and the final week as the persecution under Antiochus IV."
      sources={[
        { label: "Wikipedia, \"Prophecy of Seventy Weeks\"", url: "https://en.wikipedia.org/wiki/Prophecy_of_Seventy_Weeks" },
        { label: "Liberty University, \"Correcting Harold Hoehner's Interpretation of Daniel's Seventy Weeks\"", url: "https://digitalcommons.liberty.edu/cgi/viewcontent.cgi?article=1208&context=eleu" },
        { label: "Bible Hub commentaries on Daniel 9:24", url: "https://biblehub.com/commentaries/daniel/9-24.htm" },
      ]}
    >
      <RangeChart
        min={-620}
        max={50}
        ticks={[-600, -450, -300, -150, 1]}
        format={(n) => (n <= 0 ? `${-n || 1} BC` : `AD ${n}`)}
        labelWidth={220}
        groups={["Messianic readings", "Critical reading"]}
        items={[
          { label: "Anderson: Nehemiah's decree, 360-day years", start: -445, end: 32, group: "Messianic readings", display: "445 BC to AD 32", note: "173,880 days to the triumphal entry (Nehemiah 2:1-8)." },
          { label: "Hoehner: the same, refined", start: -444, end: 33, group: "Messianic readings", display: "444 BC to AD 33" },
          { label: "Ezra's decree, ordinary years", start: -458, end: 26, group: "Messianic readings", display: "458/7 BC to c. AD 26/27", note: "483 solar years from Artaxerxes' decree (Ezra 7) to the baptism of Jesus." },
          { label: "Jeremiah's word to Onias III", start: -605, end: -171, group: "Critical reading", display: "605 BC to 171 BC", note: "The anointed one cut off is the high priest Onias III, murdered in 171/0 BC (2 Maccabees 4:23-28); the final week is Antiochus's persecution, 167-164 BC." },
        ]}
      />
    </VisualCard>
  )
}

function Kingdoms() {
  return (
    <VisualCard
      title="Daniel's four kingdoms, read two ways"
      subtitle="The statue of Daniel 2 and the beasts of Daniel 7 describe the same sequence. Daniel 8:20-21 names two of the powers itself: Media-Persia and Greece."
      sources={[{ label: "Wikipedia, \"Four kingdoms of Daniel\"", url: "https://en.wikipedia.org/wiki/Four_kingdoms_of_Daniel" }]}
    >
      <CompareTable
        minWidth="44rem"
        columns={[
          { key: "statue", label: "Statue (Daniel 2)" },
          { key: "beast", label: "Beast (Daniel 7)" },
          { key: "trad", label: "Traditional reading" },
          { key: "crit", label: "Critical reading" },
        ]}
        rows={[
          { statue: "Head of gold", beast: "Lion with eagle's wings", trad: "Babylon", crit: "Babylon" },
          { statue: "Chest and arms of silver", beast: "Bear", trad: "Media-Persia", crit: "Media" },
          { statue: "Belly and thighs of bronze", beast: "Leopard with four heads", trad: "Greece, divided four ways", crit: "Persia" },
          { statue: "Legs of iron, feet of iron and clay", beast: "Terrifying beast with iron teeth and ten horns", trad: "Rome", crit: "Greece: Alexander and the divided Seleucid and Ptolemaic kingdoms" },
          { statue: "A stone not cut by human hands", beast: "One like a son of man (Daniel 7:13-14)", trad: "The kingdom of God brought by the Messiah", crit: "God's kingdom given to the holy people" },
        ]}
      />
    </VisualCard>
  )
}

function Gaps() {
  return (
    <VisualCard
      title="From oracle to event"
      subtitle="The span between each oracle about a nation, at its traditional date, and the event it is taken to describe. At critical dates, the Daniel prophecies and Isaiah 40-48 would fall after the events."
      sources={[
        { label: "Wikipedia, \"Battle of Nineveh (612 BC)\"", url: "https://en.wikipedia.org/wiki/Battle_of_Nineveh_(612_BC)" },
        { label: "Wikipedia, \"Fall of Babylon\"", url: "https://en.wikipedia.org/wiki/Fall_of_Babylon" },
        { label: "Wikipedia, \"Siege of Tyre (332 BC)\"", url: "https://en.wikipedia.org/wiki/Siege_of_Tyre_(332_BC)" },
        { label: "Wikipedia, \"Battle of Pelusium (525 BC)\"", url: "https://en.wikipedia.org/wiki/Battle_of_Pelusium_(525_BC)" },
        { label: "Wikipedia, \"Siege of Jerusalem (70 CE)\"", url: "https://en.wikipedia.org/wiki/Siege_of_Jerusalem_(70_CE)" },
      ]}
    >
      <RangeChart
        min={-720}
        max={80}
        ticks={[-700, -500, -300, -100, 70]}
        format={(n) => (n < 0 ? `${-n} BC` : `AD ${n}`)}
        labelWidth={170}
        items={[
          { label: "Nineveh (Nahum)", start: -650, end: -612, display: "650 to 612 BC" },
          { label: "Cyrus named (Isaiah)", start: -700, end: -539, display: "700 to 539 BC" },
          { label: "Babylon (Isaiah)", start: -700, end: -539, display: "700 to 539 BC" },
          { label: "Tyre (Ezekiel)", start: -587, end: -332, display: "587 to 332 BC" },
          { label: "Egypt (Ezekiel)", start: -587, end: -525, display: "587 to 525 BC" },
          { label: "Edom (Obadiah)", start: -586, end: -125, display: "586 to c. 125 BC" },
          { label: "Alexander (Daniel 8)", start: -550, end: -334, display: "550 to 334 BC" },
          { label: "Antiochus (Daniel 11)", start: -536, end: -167, display: "536 to 167 BC" },
          { label: "The temple (Jesus)", start: 30, end: 70, display: "AD 30 to 70" },
        ]}
      />
    </VisualCard>
  )
}

function Psalm22() {
  const pairs = [
    [
      { ref: "Psalm 22:1", text: "My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish?" },
      { ref: "Matthew 27:46", text: "About three in the afternoon Jesus cried out in a loud voice, \"Eli, Eli, lema sabachthani?\" (which means \"My God, my God, why have you forsaken me?\")." },
    ],
    [
      { ref: "Psalm 22:7-8", text: "All who see me mock me; they hurl insults, shaking their heads. \"He trusts in the LORD,\" they say, \"let the LORD rescue him.\"" },
      { ref: "Matthew 27:39, 43", text: "Those who passed by hurled insults at him, shaking their heads... \"He trusts in God. Let God rescue him now if he wants him.\"" },
    ],
    [
      { ref: "Psalm 22:16", text: "Dogs surround me, a pack of villains encircles me; they pierce my hands and my feet." },
      { ref: "John 20:25", text: "\"Unless I see the nail marks in his hands and put my finger where the nails were... I will not believe.\"" },
    ],
    [
      { ref: "Psalm 22:18", text: "They divide my clothes among them and cast lots for my garment." },
      { ref: "John 19:24", text: "\"Let's not tear it,\" they said to one another. \"Let's decide by lot who will get it.\"" },
    ],
  ] as const
  return (
    <VisualCard
      title="Psalm 22 beside the crucifixion"
      subtitle="Four lines of the psalm and the Gospel passages that echo them. Shared wording is highlighted. The reading of verse 16 is disputed (see the section on the pierced hands and feet)."
    >
      <div className="space-y-4">
        {pairs.map((p) => (
          <PassageCompare
            key={p[0].ref}
            passages={[
              { ...p[0], label: "Psalm" },
              { ...p[1], label: "Gospel" },
            ]}
            highlightWords={["forsaken me", "hurl insults", "hurled insults", "shaking their heads", "trusts in", "rescue him", "hands", "lot", "lots"]}
          />
        ))}
      </div>
    </VisualCard>
  )
}

function IsaiahScroll() {
  return (
    <VisualCard
      title="Isaiah 53 was written down before Jesus"
      subtitle="The Great Isaiah Scroll from Qumran, copied in the second century BC, contains the Suffering Servant passage. Whatever date is given to the prophecy's composition, this copy existed generations before the crucifixion."
      sources={[{ label: "Wikipedia, \"Isaiah Scroll\"", url: "https://en.wikipedia.org/wiki/Isaiah_Scroll" }]}
    >
      <div className="max-w-xl">
        <Figure
          image={{
            src: "/images/prophecy/isaiah-scroll-53.jpg",
            width: 1000,
            height: 1137,
            alt: "Columns of Hebrew text on a Dead Sea Scroll, including Isaiah 53",
            caption: "The columns of the Great Isaiah Scroll (1QIsa^a) containing Isaiah 53. Found in 1947 and held at the Shrine of the Book, Jerusalem.",
            credit: "Ardon Bar-Hama, Israel Museum",
            license: "Public domain",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Great_Isaiah_Scroll_Ch53.jpg",
          }}
        />
      </div>
    </VisualCard>
  )
}

function Tyre() {
  return (
    <VisualCard
      title="Tyre's island became a peninsula"
      subtitle="Alexander's causeway of 332 BC silted up into the isthmus that still joins the old island city to the mainland."
      sources={[
        { label: "Wikipedia, \"Siege of Tyre (332 BC)\"", url: "https://en.wikipedia.org/wiki/Siege_of_Tyre_(332_BC)" },
        { label: "Wikipedia, \"Ezekiel 26\"", url: "https://en.wikipedia.org/wiki/Ezekiel_26" },
      ]}
    >
      <div className="max-w-2xl">
        <Figure
          image={{
            src: "/images/prophecy/tyre-aerial-1918.jpg",
            width: 1000,
            height: 750,
            alt: "Black and white aerial photograph of the Tyre peninsula",
            caption: "Tyre from the air around 1918: the former island at the tip, joined to the coast by the silted causeway.",
            credit: "Australian Flying Corps, Australian War Memorial",
            license: "CC0",
            licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:AerialTyre_AustralianFlyingCorps1918_AustralianWarMemorial.jpg",
          }}
        />
      </div>
    </VisualCard>
  )
}

function Diadochi() {
  return (
    <VisualCard
      title="Four horns: Alexander's empire divided"
      subtitle="After the Battle of Ipsus in 301 BC, Alexander's empire settled into four main kingdoms under Cassander, Lysimachus, Seleucus and Ptolemy (Daniel 8:8, 22)."
      sources={[{ label: "Wikipedia, \"Diadochi\"", url: "https://en.wikipedia.org/wiki/Diadochi" }]}
    >
      <Gallery
        columns={2}
        images={[
          {
            src: "/images/prophecy/diadochi-301bc.png",
            width: 1000,
            height: 481,
            alt: "Map of the kingdoms of Alexander's successors around 300 BC",
            caption: "The successor kingdoms around 300 BC.",
            credit: "Luigi Chiesa, derivative by Morningstar1814",
            license: "CC BY-SA 4.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Diadochi_EN.png",
          },
        ]}
      />
    </VisualCard>
  )
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  arcs: Arcs,
  "seventy-weeks": SeventyWeeks,
  kingdoms: Kingdoms,
  gaps: Gaps,
  "psalm-22": Psalm22,
  "isaiah-scroll": IsaiahScroll,
  tyre: Tyre,
  diadochi: Diadochi,
}

export default function Visuals({ name }: { readonly name: string }) {
  const V = VISUALS[name]
  return V ? <V /> : null
}
