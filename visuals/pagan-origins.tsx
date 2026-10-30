"use client"

import { RangeChart } from "@/components/visuals/charts"
import { Figure, Gallery } from "@/components/visuals/figure"
import { ClaimLegend, CompareTable, ObjectionCards, Rich, StepStrip, VisualCard } from "@/components/visuals/kit"

const WIKI = (title: string, label = title) => ({ label: `Wikipedia, "${label}"`, url: `https://en.wikipedia.org/wiki/${title.replace(/ /g, "_")}` })

function ParallelTest() {
  return (
    <VisualCard
      title="Four questions for any claimed parallel"
      subtitle="A likeness shows borrowing only if it survives all four. Most popular parallels to Jesus fail the first or second."
      sources={[WIKI("Parallelomania"), WIKI("Jesus in comparative mythology")]}
    >
      <StepStrip
        steps={[
          { label: "Real?", title: "Is it in an ancient source?", body: "Check the myth itself, not a modern summary of it. Many listed parallels have no ancient text behind them." },
          { label: "Earlier?", title: "Is the source older than the Gospels?", body: "A text written after AD 100 cannot be where the Gospels came from, and may itself be borrowing from Christians." },
          { label: "Specific?", title: "Is the likeness specific?", body: "A god's son, a sacred meal or a hero's death appear in many cultures. Generic themes do not show that one story copied another." },
          { label: "Better?", title: "Does it explain more than the Jewish background?", body: "The earliest Christian claims (messiah, resurrection, Passover, covenant) are Jewish categories. A pagan source has to explain the evidence better than Judaism does." },
        ]}
      />
    </VisualCard>
  )
}

function SourceDates() {
  return (
    <VisualCard
      title="When the sources were written"
      subtitle="The texts behind the most-cited parallels, set against the New Testament. Egyptian myths of Osiris and Horus are far older (the Pyramid Texts go back to the third millennium BC), but the fullest connected telling is Plutarch's. Hover a bar for details."
      note="Ranges are approximate scholarly dates. The Gospel dates follow the canon topic."
      sources={[
        WIKI("Dating the Bible"),
        WIKI("Plutarch"),
        WIKI("Mithraic mysteries"),
        WIKI("Pausanias (geographer)", "Pausanias"),
        WIKI("Apollonius of Tyana"),
        WIKI("Sol Invictus"),
        WIKI("Bhagavata Purana"),
      ]}
    >
      <RangeChart
        min={0}
        max={1000}
        ticks={[0, 200, 400, 600, 800, 1000]}
        format={(n) => `AD ${n}`}
        groups={["New Testament", "Claimed parallel"]}
        labelWidth={210}
        markers={[{ at: 30, label: "Crucifixion" }]}
        items={[
          { label: "Paul's letters", start: 50, end: 60, group: "New Testament", display: "c. 50-60" },
          { label: "Mark", start: 65, end: 73, group: "New Testament" },
          { label: "Matthew and Luke", start: 80, end: 90, group: "New Testament" },
          { label: "John", start: 90, end: 100, group: "New Testament" },
          { label: "Roman Mithras cult (monuments)", start: 80, end: 400, group: "Claimed parallel", display: "late 1st to 4th c.", note: "Mithraic temples appear suddenly in the last quarter of the first century AD; the cult was suppressed by the end of the fourth." },
          { label: "Plutarch on Isis and Osiris", start: 100, group: "Claimed parallel", display: "c. AD 100" },
          { label: "Pausanias: wine miracle at Elis", start: 150, end: 180, group: "Claimed parallel", display: "2nd century" },
          { label: "Philostratus, Life of Apollonius", start: 220, end: 240, group: "Claimed parallel", display: "220s or 230s" },
          { label: "Sol's birthday on 25 December", start: 336, end: 354, group: "Claimed parallel", display: "Chronograph of 354", note: "Aurelian dedicated Sol's temple on 25 December 274, but a regular festival on that day is first recorded in the Chronograph of 354, which lists Christ's birth on the same day." },
          { label: "Bhagavata Purana (Krishna)", start: 400, end: 1000, group: "Claimed parallel", display: "4th to 10th c." },
        ]}
      />
    </VisualCard>
  )
}

function ClaimChecker() {
  return (
    <VisualCard
      title="The popular parallels, checked"
      subtitle="Claims that circulate in books and online videos, against what the ancient sources say. Filter by figure or search."
      sources={[
        WIKI("Horus"),
        WIKI("Osiris myth"),
        WIKI("Mithraic mysteries"),
        WIKI("Jesus in comparative mythology"),
        WIKI("Krishna"),
        WIKI("Dionysus"),
        { label: "Pausanias, Description of Greece 6.26 (Perseus)", url: "https://www.perseus.tufts.edu/hopper/text?doc=Paus.+6.26.1" },
        WIKI("Attis"),
        { label: "J.Z. Smith, \"Dying and Rising Gods\", Encyclopedia of Religion (1987)", url: "https://www.encyclopedia.com/environment/encyclopedias-almanacs-transcripts-and-maps/dying-and-rising-gods" },
      ]}
    >
      <ClaimLegend levels={["myth", "fails", "weak", "debated"]} />
      <CompareTable
        minWidth="52rem"
        compact
        filterKeys={["figure"]}
        searchable
        columns={[
          { key: "figure", label: "Figure" },
          { key: "claim", label: "Claim" },
          { key: "sources", label: "What the ancient sources say" },
          { key: "verdict", label: "Verdict" },
        ]}
        rows={[
          { figure: "Horus", claim: "Born of a virgin", sources: "Isis conceives him by her husband Osiris, whom she has restored by magic after his murder.", verdict: "!myth Not a virgin birth" },
          { figure: "Horus", claim: "Born on 25 December", sources: "No native Egyptian source. A winter-solstice festival of Horus is mentioned only by Macrobius and Epiphanius, writing in the Christian era.", verdict: "!fails Not in Egyptian sources" },
          { figure: "Horus", claim: "Had twelve disciples", sources: "No ancient text gives Horus disciples.", verdict: "!myth No source" },
          { figure: "Horus", claim: "Crucified, rose after three days", sources: "Horus is not killed in the myth. His father Osiris is killed and dismembered, then rules the dead.", verdict: "!myth No source" },
          { figure: "Osiris", claim: "Died and rose again", sources: "Killed by Set, reassembled and revived by Isis, then becomes king of the underworld rather than returning to life.", verdict: "!weak A revival into the underworld, not a resurrection" },
          { figure: "Mithras", claim: "Born of a virgin on 25 December", sources: "Shown born from a rock as a youth, with a dagger and a torch. The December date was a general solar feast; scholars dispute that it was ever his.", verdict: "!fails Born from a rock" },
          { figure: "Mithras", claim: "Died and rose again", sources: "No Mithraic myth of his death is known. He was not believed to bring salvation by suffering and dying.", verdict: "!myth No source" },
          { figure: "Mithras", claim: "A sacred meal of bread and cup", sources: "Real: Justin Martyr (mid-2nd century) says bread and a cup of water were used in Mithraic rites. Roman Mithraism is attested only from the late first century AD.", verdict: "!debated Real, but later than Paul (1 Corinthians 11)" },
          { figure: "Krishna", claim: "Born of a virgin", sources: "The eighth child of Devaki and her husband Vasudeva.", verdict: "!myth Married parents" },
          { figure: "Krishna", claim: "Crucified", sources: "Killed by an arrow in the foot, shot by a hunter who mistook him for a deer.", verdict: "!myth No source" },
          { figure: "Dionysus", claim: "Born of a virgin", sources: "Son of Zeus and the mortal Semele; carried to term in Zeus's thigh.", verdict: "!fails Not a virgin birth" },
          { figure: "Dionysus", claim: "Turned water into wine", sources: "Real wine miracles: at Elis, sealed empty jars found full of wine (Pausanias, 2nd century AD). No water-into-wine story.", verdict: "!debated Wine miracles exist; the Cana story differs" },
          { figure: "Dionysus", claim: "Died and rose again", sources: "In the Orphic Zagreus myth he is torn apart by the Titans and reborn; scholars note key differences from Jesus.", verdict: "!weak A rebirth myth, very different in kind" },
          { figure: "Attis", claim: "Died and rose in spring", sources: "Earliest myth: he dies and his body is kept from decay. A Roman imperial festival, the Hilaria, later celebrated his rebirth.", verdict: "!weak Rebirth theme is late" },
        ]}
      />
    </VisualCard>
  )
}

function IsisImage() {
  return (
    <div className="my-6 mx-auto max-w-xs">
      <Figure
        image={{
          src: "/images/pagan-origins/isis-horus.jpg",
          width: 700,
          height: 1293,
          alt: "Ancient Egyptian statuette of the goddess Isis seated with the infant Horus on her lap",
          caption: "Statuette of Isis nursing the infant Horus, Metropolitan Museum of Art (17.190.1641).",
          credit: "Metropolitan Museum of Art",
          license: "CC0",
          licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Isis_nursing_Horus_MET_17.190.1641_front.jpg",
        }}
      />
    </div>
  )
}

function Tauroctony() {
  return (
    <div className="my-6 mx-auto max-w-2xl">
      <Figure
        image={{
          src: "/images/pagan-origins/tauroctony.jpg",
          width: 900,
          height: 639,
          alt: "Marble relief of Mithras in a cave, kneeling on a bull and stabbing it",
          caption: "Mithras killing the bull, the scene at the centre of every Mithraic temple. Relief from Aquileia, second half of the second century AD, Kunsthistorisches Museum, Vienna.",
          credit: "Photo: Andreas Praefcke",
          license: "Public domain",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Kunsthistorisches_Museum_Mithras-Relief.jpg",
        }}
      />
    </div>
  )
}

function OtParallels() {
  return (
    <VisualCard
      title="Old Testament texts and their neighbours"
      subtitle="The best-known parallels, with what they share, where they part, and how scholars explain the link. Sort any column or filter by culture."
      sources={[
        WIKI("En%C5%ABma_Eli%C5%A1", "Enūma Eliš"),
        WIKI("Atra-Hasis"),
        WIKI("Gilgamesh flood myth"),
        WIKI("Sargon of Akkad"),
        WIKI("Code of Hammurabi"),
        WIKI("Instruction of Amenemope"),
        WIKI("Great Hymn to the Aten"),
        WIKI("Lotan"),
      ]}
    >
      <CompareTable
        minWidth="68rem"
        compact
        filterKeys={["culture"]}
        columns={[
          { key: "text", label: "Ancient text" },
          { key: "culture", label: "Culture" },
          { key: "date", label: "Date", numeric: true },
          { key: "bible", label: "Biblical text" },
          { key: "shared", label: "Shared" },
          { key: "differs", label: "Differs" },
          { key: "link", label: "Likely link" },
        ]}
        rows={[
          {
            text: "*Enūma Eliš*",
            culture: "Babylonian",
            date: "900 BC (earliest copy)",
            bible: "Genesis 1",
            shared: "Watery deep before creation; waters divided; a sequence of seven",
            differs: "Many gods, born and at war; the sky made from a slain goddess; humans made to serve the gods",
            link: "!debated Shared world-picture; Genesis often read as a polemic answering such myths",
          },
          {
            text: "*Atrahasis* and *Gilgamesh* XI",
            culture: "Babylonian",
            date: "1646 BC (oldest dated copy)",
            bible: "Genesis 6-9",
            shared: "Warned hero, boat, animals, mountain, birds sent out, sacrifice the gods smell",
            differs: "Flood sent because human noise kept the gods awake; Genesis: one God judges violence, saves the righteous, makes a covenant",
            link: "!established Related accounts of a common flood tradition",
          },
          {
            text: "Legend of Sargon",
            culture: "Akkadian",
            date: "700 BC (surviving text)",
            bible: "Exodus 2:1-10",
            shared: "Secret birth, basket of rushes sealed with bitumen, river, raised by a stranger",
            differs: "Sargon: unknown father, commoner to king. Moses: named slave parents, raised by royalty, sides with slaves",
            link: "!debated Common exposed-infant motif; direct dependence uncertain",
          },
          {
            text: "Code of Hammurabi",
            culture: "Babylonian",
            date: "1753 BC",
            bible: "Exodus 21-23",
            shared: "\"If a man...\" case law; eye for an eye; goring-ox laws (§250-252; Exodus 21:28-32)",
            differs: "Biblical laws given by God within a covenant; see [the slavery comparison](/categories/slavery)",
            link: "!strong Common legal tradition (consensus); direct dependence argued by some",
          },
          {
            text: "Instruction of Amenemope",
            culture: "Egyptian",
            date: "1300-1075 BC",
            bible: "Proverbs 22:17-23:11",
            shared: "Thirty chapters / \"thirty sayings\"; \"incline your ear\"; \"do not move the landmark\"",
            differs: "Proverbs aims the advice at trust in the LORD (Proverbs 22:19)",
            link: "!strong Most scholars: Proverbs draws on Amenemope",
          },
          {
            text: "Great Hymn to the Aten",
            culture: "Egyptian",
            date: "1350 BC",
            bible: "Psalm 104",
            shared: "Night and lions, day and work, ships at sea, creatures waiting on their creator",
            differs: "In the psalm the sun is a creature (Psalm 104:19), not the god",
            link: "!debated Direct influence argued; others see a shared genre",
          },
          {
            text: "*Baal Cycle* (Lotan)",
            culture: "Canaanite (Ugarit)",
            date: "1200 BC",
            bible: "Isaiah 27:1; Psalm 74:14",
            shared: "\"Fleeing serpent\", \"twisting serpent\", many heads",
            differs: "Leviathan is a creature God made (Psalm 104:26), not a rival god",
            link: "!strong Isaiah echoes the Ugaritic wording",
          },
        ]}
      />
    </VisualCard>
  )
}

function AneGallery() {
  return (
    <VisualCard title="Two of the texts" subtitle="The Flood Tablet from Nineveh and a copy of the Instruction of Amenemope, both in the British Museum.">
      <Gallery
        columns={2}
        images={[
          {
            src: "/images/pagan-origins/flood-tablet.jpg",
            width: 900,
            height: 1018,
            alt: "Cracked clay tablet covered in cuneiform writing",
            caption: "Tablet XI of the *Epic of Gilgamesh*, the \"Flood Tablet\", from the library of Ashurbanipal at Nineveh, seventh century BC.",
            credit: "BabelStone",
            license: "CC0",
            licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:British_Museum_Flood_Tablet.jpg",
          },
          {
            src: "/images/pagan-origins/amenemope.jpg",
            width: 900,
            height: 438,
            alt: "Papyrus sheet with columns of Egyptian hieratic script",
            caption: "Papyrus of the *Instruction of Amenemope*, copied by the scribe Senu in the Third Intermediate Period.",
            credit: "Scribe Senu, son of Pemu",
            license: "Public domain",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Papyrus_with_the_Instruction_of_Amenemope.jpg",
          },
        ]}
      />
    </VisualCard>
  )
}

type Kind = "Date" | "Custom" | "Santa"

const CHRISTMAS: ReadonlyArray<{ when: string; kind: Kind; text: string }> = [
  { when: "c. 200", kind: "Date", text: "Tertullian equates the date of the crucifixion with 25 March. Counting nine months from a conception on that day gives 25 December." },
  { when: "274", kind: "Date", text: "The emperor Aurelian dedicates a temple to Sol Invictus on 25 December." },
  { when: "354", kind: "Date", text: "The Chronograph of 354 lists Christ's birth in Bethlehem on 25 December, the first record of the date. The same almanac lists Sol's birthday on that day." },
  { when: "4th century", kind: "Santa", text: "Nicholas, bishop of Myra (traditionally died 343), later remembered for secret gifts to three poor sisters." },
  { when: "1441", kind: "Custom", text: "The Brotherhood of Blackheads puts up a decorated tree in Reval (Tallinn); more follow there and in Riga." },
  { when: "1539", kind: "Custom", text: "A tree stands in Strasbourg Cathedral." },
  { when: "1576", kind: "Custom", text: "The earliest firmly dated picture of a Christmas tree, a carved keystone at Turckheim, Alsace." },
  { when: "1823", kind: "Santa", text: "\"A Visit from St. Nicholas\" brings Santa by sleigh with eight reindeer." },
  { when: "1848", kind: "Custom", text: "The *Illustrated London News* pictures the royal tree at Windsor, and the custom spreads through Britain." },
]

const KIND_CLASS: Record<Kind, string> = {
  Date: "bg-[color:var(--viz-1)]",
  Custom: "bg-[color:var(--viz-2)]",
  Santa: "bg-[color:var(--viz-3)]",
}

function ChristmasTimeline() {
  return (
    <VisualCard
      title="How Christmas took shape"
      subtitle="The date was fixed by the fourth century. The tree and Santa Claus came more than a thousand years later."
      sources={[
        { label: "Andrew McGowan, \"How December 25 Became Christmas\" (Biblical Archaeology Society)", url: "https://www.biblicalarchaeology.org/daily/people-cultures-in-the-bible/jesus-historical-jesus/how-december-25-became-christmas/" },
        WIKI("Sol Invictus"),
        WIKI("Christmas"),
        WIKI("Saint Nicholas"),
        WIKI("Christmas tree"),
        WIKI("A Visit from St. Nicholas"),
      ]}
    >
      <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4 text-[12px] text-[color:var(--viz-muted)]">
        {(Object.keys(KIND_CLASS) as Kind[]).map((k) => (
          <span key={k} className="inline-flex items-center gap-1.5">
            <span className={`h-2.5 w-2.5 rounded-full ${KIND_CLASS[k]}`} aria-hidden />
            {k === "Date" ? "The date" : k === "Custom" ? "The tree" : "Santa Claus"}
          </span>
        ))}
      </div>
      <ol className="relative list-none p-0 m-0 border-l border-[color:var(--viz-axis)] ml-2">
        {CHRISTMAS.map((e) => (
          <li key={e.when + e.kind} className="relative m-0 pl-5 pb-4 last:pb-0">
            <span className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full ${KIND_CLASS[e.kind]}`} aria-hidden />
            <div className="viz-title text-[15px] tabular-nums">{e.when}</div>
            <Rich as="p" text={e.text} className="text-sm leading-relaxed m-0 text-[color:var(--viz-ink-2)]" />
          </li>
        ))}
      </ol>
    </VisualCard>
  )
}

function Nicholas() {
  return (
    <div className="my-6 mx-auto max-w-[14rem]">
      <Figure
        image={{
          src: "/images/pagan-origins/nicholas.jpg",
          width: 700,
          height: 1480,
          alt: "Orthodox icon of Saint Nicholas as a bearded bishop holding a book",
          caption: "Icon of St Nicholas of Myra, Church of Saint Paraskevi, Langadas, Greece.",
          credit: "Margaritis Lambou",
          license: "Public domain",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:003_Saint_Nicholas_Icon_from_Saint_Paraskevi_Church_in_Langadas.jpg",
        }}
      />
    </div>
  )
}

const PASCHA: ReadonlyArray<readonly [lang: string, word: string]> = [
  ["Hebrew", "Pesach"],
  ["Greek", "Pascha"],
  ["Latin", "Pascha"],
  ["Italian", "Pasqua"],
  ["Spanish", "Pascua"],
  ["Portuguese", "Páscoa"],
  ["French", "Pâques"],
  ["Dutch", "Pasen"],
  ["Swedish", "Påsk"],
  ["Danish", "Påske"],
  ["Russian", "Paskha"],
  ["Welsh", "Pasg"],
]

function EasterNames() {
  return (
    <VisualCard
      title="What Easter is called"
      subtitle="Most languages name the festival after Passover. English and German are the exceptions."
      sources={[WIKI("Easter"), WIKI("%C4%92ostre", "Ēostre")]}
    >
      <div className="grid gap-4 md:grid-cols-[1fr_auto]">
        <div>
          <div className="text-[12px] font-semibold text-[color:var(--viz-muted)] mb-2">From the Hebrew Pesach, Passover</div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 list-none p-0 m-0">
            {PASCHA.map(([lang, word]) => (
              <li key={lang} className="viz-info m-0 rounded-md border px-3 py-2">
                <div className="viz-title text-base leading-tight">{word}</div>
                <div className="text-[12px] text-[color:var(--viz-muted)]">{lang}</div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-[12px] font-semibold text-[color:var(--viz-muted)] mb-2">From an old spring month name</div>
          <ul className="grid grid-cols-2 md:grid-cols-1 gap-2 list-none p-0 m-0">
            {[["English", "Easter"], ["German", "Ostern"]].map(([lang, word]) => (
              <li key={lang} className="viz-chip-active m-0 rounded-md border px-3 py-2 md:w-40">
                <div className="viz-title text-base leading-tight">{word}</div>
                <div className="text-[12px] opacity-80">{lang}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </VisualCard>
  )
}

function CustomScorecard() {
  return (
    <VisualCard
      title="Is it pagan? Custom by custom"
      subtitle="Each holiday custom, when it is first recorded, and how well the claim of a pagan origin holds up. Filter by holiday."
      sources={[
        { label: "Andrew McGowan, \"How December 25 Became Christmas\"", url: "https://www.biblicalarchaeology.org/daily/people-cultures-in-the-bible/jesus-historical-jesus/how-december-25-became-christmas/" },
        WIKI("Sol Invictus"),
        WIKI("Saturnalia"),
        WIKI("Christmas tree"),
        WIKI("Saint Nicholas"),
        WIKI("Easter"),
        WIKI("Easter egg"),
        WIKI("Easter Bunny"),
        { label: "AAP FactCheck, \"No, Easter wasn't named after a Mesopotamian goddess\"", url: "https://www.aap.com.au/factcheck/no-easter-wasnt-named-after-a-mesopotamian-goddess/" },
        WIKI("Halloween"),
        WIKI("Sunday"),
        WIKI("Saint Valentine"),
        WIKI("Halo (religious iconography)", "Halo"),
      ]}
    >
      <ClaimLegend levels={["established", "strong", "debated", "weak", "fails", "myth"]} />
      <CompareTable
        minWidth="56rem"
        compact
        filterKeys={["holiday"]}
        columns={[
          { key: "custom", label: "Custom" },
          { key: "holiday", label: "Holiday" },
          { key: "first", label: "First recorded" },
          { key: "origin", label: "What the evidence shows" },
          { key: "verdict", label: "\"It's pagan\"" },
        ]}
        rows={[
          { custom: "The date, 25 December", holiday: "Christmas", first: "Chronograph of 354", origin: "Either counted from 25 March as the day of conception and death, or set against a solar feast that is itself first recorded in the same almanac", verdict: "!debated Scholars disagree" },
          { custom: "Gift-giving", holiday: "Christmas", first: "Roman Sigillaria; feast of St Nicholas", origin: "Echoes the gifts of Saturnalia; also the legend of Nicholas's secret dowries", verdict: "!debated One possible influence" },
          { custom: "Christmas tree", holiday: "Christmas", first: "1441, Reval", origin: "Renaissance guild custom; the paradise tree of medieval plays; older evergreen customs proposed", verdict: "!weak Late, mixed roots" },
          { custom: "Santa Claus", holiday: "Christmas", first: "4th-century bishop; 1823 poem", origin: "Nicholas of Myra through the Dutch Sinterklaas", verdict: "!fails A Christian bishop" },
          { custom: "The name \"Easter\"", holiday: "Easter", first: "Bede, 8th century", origin: "Named after an Anglo-Saxon spring goddess, Ēostre, in English and German only", verdict: "!established In English, yes" },
          { custom: "Named after Ishtar", holiday: "Easter", first: "Modern internet claim", origin: "No evidence; the festival is called Pascha almost everywhere", verdict: "!myth False" },
          { custom: "The date", holiday: "Easter", first: "Council of Nicaea, 325", origin: "Tied to Passover and the first full moon of spring", verdict: "!fails Jewish calendar" },
          { custom: "Easter eggs", holiday: "Easter", first: "Medieval Europe", origin: "Eggs forbidden in Lent and eaten at Easter; red eggs among Mesopotamian Christians", verdict: "!myth No link to Ostara before Grimm" },
          { custom: "Easter Bunny", holiday: "Easter", first: "Late 17th century", origin: "German Lutheran folk custom", verdict: "!myth \"No shred of evidence\" for Ēostre" },
          { custom: "The date, 1 November", holiday: "Halloween", first: "By 800 in Ireland and Northumbria", origin: "All Saints' Day; Samhain fell on the same day", verdict: "!debated Scholars disagree" },
          { custom: "Trick-or-treating", holiday: "Halloween", first: "Souling, 15th century", origin: "Soul cakes given for prayers for the dead; guising; phrase first printed 1917", verdict: "!weak Mainly Christian folk practice" },
          { custom: "Jack-o'-lantern", holiday: "Halloween", first: "Turnip lanterns; pumpkins by 1837", origin: "Lanterns carried by soulers and guisers; the Irish tale of Stingy Jack", verdict: "!weak Folk custom" },
          { custom: "Sunday worship", holiday: "Every week", first: "1st century (Acts 20:7)", origin: "The day of the resurrection; Constantine's rest law came in 321", verdict: "!fails Christian from the start" },
          { custom: "Valentine's Day", holiday: "14 February", first: "Feast from the 8th century; romance from Chaucer", origin: "Lupercalia link dismissed by scholars", verdict: "!myth Not Lupercalia" },
          { custom: "The halo", holiday: "Art", first: "Christian art, 4th century", origin: "Taken from images of sun gods and emperors", verdict: "!established Borrowed" },
        ]}
      />
    </VisualCard>
  )
}

function ChristSol() {
  return (
    <div className="my-6 mx-auto max-w-sm">
      <Figure
        image={{
          src: "/images/pagan-origins/christ-sol.jpg",
          width: 900,
          height: 962,
          alt: "Gold and green ceiling mosaic of a haloed figure driving a chariot, framed by vine leaves",
          caption: "Ceiling mosaic in the Tomb of the Julii (Mausoleum M) beneath St Peter's Basilica, third century, usually read as Christ pictured as the Sun.",
          credit: "User:Leinad-Z",
          license: "Public domain",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:ChristAsSol.jpg",
        }}
      />
    </div>
  )
}

function Objections() {
  return (
    <VisualCard
      title="Objections and responses"
      subtitle="Select an objection to see the response."
      sources={[
        { label: "Justin Martyr, First Apology 21, 54, 66 (New Advent)", url: "https://www.newadvent.org/fathers/0126.htm" },
        WIKI("Parallelomania"),
        WIKI("Christ myth theory"),
        WIKI("Mellitus"),
        WIKI("En%C5%ABma_Eli%C5%A1", "Enūma Eliš"),
      ]}
    >
      <ObjectionCards
        items={[
          {
            objection: "Justin Martyr, an early Christian, admitted that the Jesus story matched pagan myths.",
            response: "Justin told the emperor that in claiming Jesus was born without sexual union, crucified, risen and ascended, Christians \"propound nothing different from what you believe regarding those whom you esteem sons of Jupiter\" (*First Apology* 21). His point was legal: Romans should not persecute Christians for beliefs they tolerated in their own myths. In the same work (54, 66) he argues that demons imitated Christian prophecy and worship. It shows the early church knew the pagan stories and argued about them openly; it is not a confession of borrowing.",
          },
          {
            objection: "There are far too many parallels for coincidence.",
            response: "Most of the parallels in popular lists disappear when checked against the ancient texts: no virgin birth for Horus, no death for Mithras, no crucifixion for Krishna. What remains is generic (gods with sons, sacred meals, heroes who die) or later than the Gospels. Samuel Sandmel called the habit of piling up such likenesses \"parallelomania\".",
          },
          {
            objection: "Jesus never existed, so of course his story was copied.",
            response: "The Christ myth theory is rejected by almost all historians of the period, including sceptics such as Bart Ehrman. The evidence is set out in [the Jesus topic](/categories/jesus).",
          },
          {
            objection: "The church admits it took over pagan festivals.",
            response: "In 601 Pope Gregory the Great advised the mission to England to turn pagan temples into churches and replace animal sacrifices with Christian feasts, a letter Bede preserved. That is real adaptation, but of local practice in a missionary setting. Christmas and Easter were already centuries old by then, and their dates came from the Gospels and the Jewish calendar.",
          },
          {
            objection: "If Christmas customs have pagan roots, keeping them is idolatry.",
            response: "Paul leaves the keeping of days to conscience (Romans 14:5-6; Colossians 2:16-17), and treats food once offered to idols as harmless in itself, since \"an idol has no real existence\" (1 Corinthians 8:4-8). A custom means what it is used for. Jeremiah 10:3-5 is about carving an idol, not decorating a tree. Some churches, out of conscience, choose not to keep these customs.",
          },
          {
            objection: "Genesis echoes Babylonian myths, so it is just another myth.",
            response: "Sharing a genre and an image of the world is expected of texts from the same region. The differences are deliberate: one God who creates by speaking, a world that is good, humans made in God's image, and a flood sent in moral judgment. Many scholars read Genesis 1 as a polemic against the very myths it resembles.",
          },
        ]}
      />
    </VisualCard>
  )
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  "parallel-test": ParallelTest,
  "source-dates": SourceDates,
  "claim-checker": ClaimChecker,
  isis: IsisImage,
  tauroctony: Tauroctony,
  "ot-parallels": OtParallels,
  "ane-gallery": AneGallery,
  "christmas-timeline": ChristmasTimeline,
  nicholas: Nicholas,
  "easter-names": EasterNames,
  "custom-scorecard": CustomScorecard,
  "christ-sol": ChristSol,
  objections: Objections,
}

export default function Visuals({ name }: { readonly name: string }) {
  const V = VISUALS[name]
  return V ? <V /> : null
}
