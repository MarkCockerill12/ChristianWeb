"use client"

import { BarChart, RangeChart } from "@/components/visuals/charts"
import { CompareTable, Mark, VisualCard } from "@/components/visuals/kit"
import { Gallery } from "@/components/visuals/figure"

function Counts() {
  return (
    <VisualCard
      title="How many books are in the Bible?"
      subtitle="Every tradition has the same 27-book New Testament. The difference is in the Old Testament."
      note="Eastern Orthodox lists vary by church; the Russian Orthodox Bible counts 50 Old Testament books. Catholic and Orthodox Bibles also include additions to Esther and Daniel within those books."
      sources={[
        { label: "Wikipedia, \"Biblical canon\"", url: "https://en.wikipedia.org/wiki/Biblical_canon" },
        { label: "Wikipedia, \"Orthodox Tewahedo biblical canon\" (81 books)", url: "https://en.wikipedia.org/wiki/Orthodox_Tewahedo_biblical_canon" },
      ]}
    >
      <BarChart
        labelWidth="11rem"
        max={81}
        data={[
          { label: "Protestant", value: 66, display: "66 (39 + 27)", note: "The Hebrew Bible's books, counted as 39." },
          { label: "Roman Catholic", value: 73, display: "73 (46 + 27)", note: "Adds Tobit, Judith, 1 and 2 Maccabees, Wisdom, Sirach and Baruch, defined at Trent (1546)." },
          { label: "Russian Orthodox", value: 77, display: "77 (50 + 27)", note: "Also 1 Esdras, 3 Maccabees, 3 Esdras and the Letter of Jeremiah as a separate book." },
          { label: "Ethiopian Orthodox", value: 81, display: "81", highlight: true, note: "Includes 1 Enoch and Jubilees, the largest traditional canon." },
        ]}
      />
    </VisualCard>
  )
}

function EarlyLists() {
  return (
    <VisualCard
      title="The disputed books in the earliest lists"
      subtitle="Most of the New Testament was never in question. These are the books on the edges, and how each early list or manuscript treated them."
      note="Sinaiticus is a manuscript, not a list: it shows what one fourth-century Bible bound together. Origen's position is taken from his list in the Homilies on Joshua and from Eusebius's report of his doubts."
      sources={[
        { label: "Wikipedia, \"Muratorian fragment\"", url: "https://en.wikipedia.org/wiki/Muratorian_fragment" },
        { label: "Wikipedia, \"Development of the New Testament canon\"", url: "https://en.wikipedia.org/wiki/Development_of_the_New_Testament_canon" },
        { label: "Eusebius, Church History 3.25 (New Advent)", url: "https://www.newadvent.org/fathers/250103.htm" },
        { label: "Athanasius, Festal Letter 39 (New Advent)", url: "https://www.newadvent.org/fathers/2806039.htm" },
        { label: "Wikipedia, \"Codex Sinaiticus\"", url: "https://en.wikipedia.org/wiki/Codex_Sinaiticus" },
      ]}
    >
      <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3 text-xs text-[color:var(--viz-ink-2)]">
        <Mark kind="yes" text="Accepted" />
        <Mark kind="partial" text="Disputed or doubted" />
        <Mark kind="no" text="Not Scripture (may be read)" />
        <Mark kind="na" text="Not mentioned" />
      </div>
      <CompareTable
        minWidth="56rem"
        compact
        columns={[
          { key: "book", label: "Book" },
          { key: "mur", label: "Muratorian (c. 170-200)" },
          { key: "ori", label: "Origen (c. 230-250)" },
          { key: "eus", label: "Eusebius (c. 325)" },
          { key: "sin", label: "Sinaiticus (c. 350)" },
          { key: "ath", label: "Athanasius (367)" },
          { key: "car", label: "Hippo and Carthage (393, 397)" },
        ]}
        rows={[
          { book: "Hebrews", mur: "@na", ori: "@yes", eus: "@partial Listed with Paul; some at Rome rejected it", sin: "@yes", ath: "@yes", car: "@yes" },
          { book: "James", mur: "@na", ori: "@yes", eus: "@partial", sin: "@yes", ath: "@yes", car: "@yes" },
          { book: "1 Peter", mur: "@na", ori: "@yes", eus: "@yes", sin: "@yes", ath: "@yes", car: "@yes" },
          { book: "2 Peter", mur: "@na", ori: "@partial In his list; doubts reported", eus: "@partial", sin: "@yes", ath: "@yes", car: "@yes" },
          { book: "2 and 3 John", mur: "@partial Two letters of John", ori: "@partial", eus: "@partial", sin: "@yes", ath: "@yes", car: "@yes" },
          { book: "Jude", mur: "@yes", ori: "@yes", eus: "@partial", sin: "@yes", ath: "@yes", car: "@yes" },
          { book: "Revelation", mur: "@yes", ori: "@yes", eus: "@partial Accepted \"if it seem proper\", rejected by others", sin: "@yes", ath: "@yes", car: "@yes" },
          { book: "Apocalypse of Peter", mur: "@partial Some would not have it read in church", ori: "@na", eus: "@no Spurious", sin: "@na", ath: "@na", car: "@na" },
          { book: "Shepherd of Hermas", mur: "@no To be read, not in church", ori: "@no Not in his list", eus: "@no Spurious", sin: "@yes Bound after Revelation", ath: "@no Read for instruction", car: "@na" },
          { book: "Epistle of Barnabas", mur: "@na", ori: "@no Not in his list", eus: "@no Spurious", sin: "@yes Bound after Revelation", ath: "@na", car: "@na" },
        ]}
      />
    </VisualCard>
  )
}

function GospelDates() {
  return (
    <VisualCard
      title="When the gospels were written"
      subtitle="The four canonical Gospels set against the best-known gospels that were left out, using the dates given in the sections below. The Gospel of Thomas has the widest range; most scholars place it in the second century."
      sources={[
        { label: "Wikipedia, \"Dating the Bible\" (canonical Gospels)", url: "https://en.wikipedia.org/wiki/Dating_the_Bible" },
        { label: "Early Christian Writings, Gospel of Thomas", url: "https://www.earlychristianwritings.com/thomas.html" },
        { label: "Early Christian Writings, Gospel of Judas", url: "https://www.earlychristianwritings.com/gospeljudas.html" },
      ]}
    >
      <RangeChart
        min={40}
        max={260}
        ticks={[50, 100, 150, 200, 250]}
        format={(n) => `AD ${n}`}
        groups={["Canonical", "Not canonical"]}
        labelWidth={180}
        items={[
          { label: "Mark", start: 65, end: 73, group: "Canonical" },
          { label: "Matthew", start: 80, end: 90, group: "Canonical" },
          { label: "Luke", start: 80, end: 90, group: "Canonical" },
          { label: "John", start: 90, end: 100, group: "Canonical" },
          { label: "Gospel of Thomas", start: 50, end: 140, group: "Not canonical" },
          { label: "Apocryphon of John", start: 120, end: 180, group: "Not canonical" },
          { label: "Gospel of Truth", start: 140, end: 180, group: "Not canonical" },
          { label: "Protoevangelium of James", start: 150, group: "Not canonical", display: "c. 150" },
          { label: "Gospel of Peter", start: 150, end: 200, group: "Not canonical" },
          { label: "Gospel of Judas", start: 180, group: "Not canonical", display: "c. 180" },
          { label: "Gospel of Mary", start: 180, end: 200, group: "Not canonical" },
          { label: "Infancy Gospel of Thomas", start: 180, end: 200, group: "Not canonical" },
          { label: "Gospel of Philip", start: 200, end: 250, group: "Not canonical" },
        ]}
      />
    </VisualCard>
  )
}

function Manuscripts() {
  return (
    <VisualCard
      title="What the manuscripts show"
      subtitle="The oldest complete New Testament, and the codex in which the Gospel of Thomas survives in full."
      sources={[
        { label: "Wikipedia, \"Codex Sinaiticus\"", url: "https://en.wikipedia.org/wiki/Codex_Sinaiticus" },
        { label: "Wikipedia, \"Nag Hammadi library\"", url: "https://en.wikipedia.org/wiki/Nag_Hammadi_library" },
      ]}
    >
      <Gallery
        columns={2}
        images={[
          {
            src: "/images/canon/codex-sinaiticus-matthew.jpg",
            width: 800,
            height: 774,
            alt: "Page of a Greek uncial manuscript in four columns",
            caption: "Codex Sinaiticus, the opening of Matthew. Copied around 350, it is the oldest complete New Testament, and also contains the Epistle of Barnabas and part of the Shepherd of Hermas.",
            credit: "British Library",
            license: "Public domain",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Codex_Sinaiticus_Matthew_1,1-2,5.JPG",
          },
          {
            src: "/images/canon/nag-hammadi-thomas.jpg",
            width: 700,
            height: 1263,
            alt: "Coptic papyrus page with the end of the Gospel of Thomas",
            caption: "Nag Hammadi Codex II, page 51: the end of the Gospel of Thomas in Coptic. The codices were buried in Egypt in the fourth century and found in 1945.",
            credit: "Coptic Museum, Cairo",
            license: "Public domain",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Gospel_of_Thomas_-_Nag_Hammadi_II-51.jpg",
          },
        ]}
      />
    </VisualCard>
  )
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  counts: Counts,
  "early-lists": EarlyLists,
  "gospel-dates": GospelDates,
  manuscripts: Manuscripts,
}

export default function Visuals({ name }: { readonly name: string }) {
  const V = VISUALS[name]
  return V ? <V /> : null
}
