"use client"

import { BarChart } from "@/components/visuals/charts"
import { ClaimLegend, CompareTable, VisualCard } from "@/components/visuals/kit"
import { PinMap } from "@/components/visuals/geo"
import { LEVANT } from "@/components/visuals/maps/levant"
import { NEAREAST } from "@/components/visuals/maps/neareast"

const WIKI = (page: string, label = page) => ({ label: `Wikipedia, "${label}"`, url: `https://en.wikipedia.org/wiki/${page}` })

function Maps() {
  return (
    <VisualCard
      title="Where the finds were made"
      subtitle="The discoveries discussed below, in the land of Israel and across the empires that ruled it. Select a point for what was found there."
    >
      <div className="space-y-6">
        <PinMap
          geo={LEVANT}
          initial="jerusalem"
          groups={["Old Testament period", "New Testament period", "Manuscripts", "Contested"]}
          areaLabels={[
            { lon: 34.45, lat: 32.6, text: "Mediterranean", water: true },
            { lon: 36.05, lat: 31.25, text: "MOAB" },
          ]}
          pins={[
            { id: "jerusalem", lon: 35.2354, lat: 31.778, label: "Jerusalem", group: "Old Testament period", labelLeft: true, detail: "Hezekiah's Tunnel and the Siloam Inscription, the Pool of Siloam and the Pool of Bethesda, Hezekiah's seal, the Caiaphas ossuary, the Ketef Hinnom silver scrolls and the Temple warning stone." },
            { id: "dan", lon: 35.6526, lat: 33.2486, label: "Tel Dan", group: "Old Testament period", detail: "The Tel Dan Stele (9th century BC), naming the \"House of David\"." },
            { id: "dhiban", lon: 35.776, lat: 31.501, label: "Dhiban", group: "Old Testament period", detail: "The Mesha Stele (c. 840 BC), Moab's account of its revolt against Israel." },
            { id: "lachish", lon: 34.849, lat: 31.565, label: "Lachish", group: "Old Testament period", labelLeft: true, detail: "The Lachish Letters, written as Babylon closed in (c. 588 BC)." },
            { id: "caesarea", lon: 34.89, lat: 32.5, label: "Caesarea", group: "New Testament period", labelLeft: true, detail: "The Pilate Stone (1961), naming Pontius Pilate as prefect of Judaea." },
            { id: "capernaum", lon: 35.575, lat: 32.88, label: "Capernaum", group: "New Testament period", labelLeft: true, detail: "A first-century fishing town and the house venerated as Peter's." },
            { id: "bethsaida", lon: 35.63, lat: 32.91, label: "Bethsaida", group: "Contested", detail: "Et-Tell and el-Araj both claim to be biblical Bethsaida." },
            { id: "qumran", lon: 35.459, lat: 31.741, label: "Qumran", group: "Manuscripts", detail: "The Dead Sea Scrolls, including the Great Isaiah Scroll." },
            { id: "hammam", lon: 35.669, lat: 31.84, label: "Tall el-Hammam", group: "Contested", detail: "Claimed as Sodom; the airburst paper about it was retracted in 2025." },
          ]}
        />
        <PinMap
          geo={NEAREAST}
          groups={["Old Testament period"]}
          areaLabels={[
            { lon: 20, lat: 34.5, text: "Mediterranean", water: true },
            { lon: 30.5, lat: 27, text: "EGYPT" },
            { lon: 41.4, lat: 37.6, text: "ASSYRIA" },
          ]}
          pins={[
            { id: "thebes", lon: 32.6, lat: 25.72, label: "Thebes", group: "Old Testament period", detail: "The Merneptah Stele (c. 1208 BC), the earliest mention of Israel outside the Bible." },
            { id: "nimrud", lon: 43.328, lat: 36.098, label: "Nimrud", group: "Old Testament period", labelLeft: true, detail: "The Black Obelisk of Shalmaneser III, showing Jehu of Israel paying tribute." },
            { id: "nineveh", lon: 43.153, lat: 36.359, label: "Nineveh", group: "Old Testament period", detail: "Sennacherib's annals on clay prisms: Hezekiah shut up in Jerusalem \"like a bird in a cage\"." },
            { id: "babylon", lon: 44.421, lat: 32.536, label: "Babylon", group: "Old Testament period", detail: "The Cyrus Cylinder (c. 539 BC), on returning exiled peoples to their homes." },
            { id: "jerusalem2", lon: 35.2354, lat: 31.778, label: "Jerusalem", group: "Old Testament period", labelLeft: true, detail: "See the map of Israel above." },
          ]}
        />
      </div>
    </VisualCard>
  )
}

function Artifacts() {
  return (
    <VisualCard
      title="The artifacts at a glance"
      subtitle="Each find discussed below, with its date, where it is now, what it attests, and how secure that connection is. Sort by any column."
      sources={[
        WIKI("Tel_Dan_stele", "Tel Dan stele"),
        WIKI("Mesha_Stele", "Mesha Stele"),
        WIKI("Merneptah_Stele", "Merneptah Stele"),
        WIKI("Black_Obelisk_of_Shalmaneser_III", "Black Obelisk of Shalmaneser III"),
        WIKI("Sennacherib%27s_Annals", "Sennacherib's Annals"),
        WIKI("Cyrus_Cylinder", "Cyrus Cylinder"),
        WIKI("Siloam_inscription", "Siloam inscription"),
        WIKI("Lachish_letters", "Lachish letters"),
        WIKI("Ketef_Hinnom_scrolls", "Ketef Hinnom scrolls"),
        WIKI("Pilate_stone", "Pilate stone"),
        WIKI("Caiaphas_ossuary", "Caiaphas ossuary"),
        WIKI("Temple_Warning_inscription", "Temple Warning inscription"),
        WIKI("Shroud_of_Turin", "Shroud of Turin"),
      ]}
    >
      <ClaimLegend levels={["established", "debated", "retracted"]} />
      <CompareTable
        minWidth="60rem"
        compact
        searchable
        initialSort="date"
        columns={[
          { key: "name", label: "Artifact" },
          { key: "date", label: "Date", numeric: true },
          { key: "found", label: "Found" },
          { key: "held", label: "Now held" },
          { key: "attests", label: "Attests" },
          { key: "level", label: "Connection" },
        ]}
        rows={[
          { name: "Merneptah Stele", date: "c. 1208 BC", found: "Thebes, 1896", held: "Egyptian Museum, Cairo", attests: "A people called Israel in Canaan", level: "!established" },
          { name: "Mesha Stele", date: "c. 840 BC", found: "Dhiban, 1868", held: "Louvre", attests: "Omri's Israel and Moab's revolt (2 Kings 3); \"House of David\" in line 31 is disputed", level: "!debated The David reading" },
          { name: "Tel Dan Stele", date: "9th c. BC", found: "Tel Dan, 1993", held: "Israel Museum", attests: "\"House of David\", a dynasty named after David", level: "!established" },
          { name: "Black Obelisk", date: "c. 825 BC", found: "Nimrud, 1846", held: "British Museum", attests: "Jehu of Israel paying tribute to Assyria", level: "!established" },
          { name: "Siloam Inscription", date: "c. 700 BC", found: "Hezekiah's Tunnel, 1880", held: "Istanbul Archaeology Museums", attests: "The tunnel of 2 Kings 20:20, though it does not name Hezekiah", level: "!established" },
          { name: "Sennacherib's annals (Taylor Prism)", date: "691 BC", found: "Nineveh", held: "British Museum", attests: "The siege of Hezekiah's Jerusalem (2 Kings 18-19)", level: "!established" },
          { name: "Ketef Hinnom scrolls", date: "c. 600 BC", found: "Jerusalem, 1979", held: "Israel Museum", attests: "The priestly blessing of Numbers 6:24-26, the oldest biblical text found", level: "!established" },
          { name: "Lachish Letters", date: "c. 588 BC", found: "Lachish, 1935", held: "British Museum and Israel Museum", attests: "The Babylonian advance in Jeremiah's time", level: "!established" },
          { name: "Cyrus Cylinder", date: "c. 539 BC", found: "Babylon, 1879", held: "British Museum", attests: "A policy of returning exiles, as in Ezra 1:1-4, without naming the Jews", level: "!established" },
          { name: "Temple warning stone", date: "1st c. BC-AD", found: "Jerusalem, 1871", held: "Istanbul Archaeology Museums", attests: "The ban on Gentiles entering the inner temple courts", level: "!established" },
          { name: "Pilate Stone", date: "AD 26-36", found: "Caesarea, 1961", held: "Israel Museum", attests: "Pontius Pilate, prefect of Judaea", level: "!established" },
          { name: "Caiaphas ossuary", date: "1st c. AD", found: "Jerusalem, 1990", held: "Israel Museum", attests: "The high priest at Jesus' trial", level: "!established" },
          { name: "Tall el-Hammam airburst", date: "c. 1650 BC", found: "Jordan valley", held: "@na", attests: "Claimed destruction of Sodom by a cosmic airburst", level: "!retracted" },
          { name: "Shroud of Turin", date: "Disputed", found: "First recorded c. 1354", held: "Turin Cathedral", attests: "Claimed burial cloth of Jesus", level: "!debated Radiocarbon dated 1260-1390" },
        ]}
      />
    </VisualCard>
  )
}

function ManuscriptCounts() {
  return (
    <VisualCard
      title="Surviving manuscripts of ancient works"
      subtitle="Counts from Clay Jones's 2012 update, which corrected the figures apologists had repeated for decades. Many of the classical counts are higher than the older lists claimed; the New Testament remains far ahead."
      note="Counts are not everything: most New Testament manuscripts are medieval, and what matters most is how early and how independent the earliest copies are."
      sources={[
        { label: "Clay Jones, \"The Bibliographical Test Updated\", Christian Research Journal 35 (2012)", url: "https://www.equip.org/articles/the-bibliographical-test-updated/" },
      ]}
    >
      <BarChart
        labelWidth="12rem"
        data={[
          { label: "New Testament (Greek)", value: 5795, highlight: true, note: "2,903 minuscules, 320 majuscules, 127 papyri and 2,445 lectionaries (2010 count)." },
          { label: "Homer, *Iliad*", value: 1757 },
          { label: "Demosthenes, *Speeches*", value: 340, display: "at least 340" },
          { label: "Caesar, *Gallic War*", value: 251 },
          { label: "Plato, *Tetralogies*", value: 210 },
          { label: "Pliny the Elder, *Natural History*", value: 200, display: "c. 200" },
          { label: "Sophocles, *Tragedies*", value: 193, display: "c. 193" },
          { label: "Livy, *History of Rome*", value: 100, display: "c. 100" },
          { label: "Tacitus, *Annals*", value: 2, display: "2 (plus 31 later copies)" },
        ]}
      />
    </VisualCard>
  )
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  maps: Maps,
  artifacts: Artifacts,
  "manuscript-counts": ManuscriptCounts,
}

export default function Visuals({ name }: { readonly name: string }) {
  const V = VISUALS[name]
  return V ? <V /> : null
}
