"use client"

import { useMemo, useState } from "react"

import { BIBLE_BOOKS } from "@/topics/bible-books"
import { headingId } from "@/components/content-renderer"
import { Rich, Toggle, VisualCard, Legend } from "@/components/visuals/kit"
import { RangeChart, SERIES } from "@/components/visuals/charts"
import { PinMap } from "@/components/visuals/geo"
import { useTopicPage } from "@/components/topic-context"
import { AEGEAN } from "@/components/visuals/maps/aegean"
import { cn } from "@/lib/utils"

/** The eight divisions follow the page's own sections, one categorical slot each. */
const DIVISIONS = [
  { key: "the-law", label: "Law" },
  { key: "historical-books", label: "History" },
  { key: "wisdom-literature", label: "Wisdom" },
  { key: "major-prophets", label: "Major Prophets" },
  { key: "minor-prophets", label: "Minor Prophets" },
  { key: "gospels-and-acts", label: "Gospels and Acts" },
  { key: "pauline-epistles", label: "Paul's letters" },
  { key: "general-epistles-and-revelation", label: "General letters and Revelation" },
] as const

type Division = (typeof DIVISIONS)[number]["key"]

/**
 * Chapter counts, and the dates most widely held in critical scholarship as
 * summarised by Wikipedia's "Dating the Bible". The traditional author, place,
 * date and theme are read from the page's own text, so they cannot drift.
 */
const BOOKS: ReadonlyArray<readonly [name: string, chapters: number, critical: string]> = [
  ["Genesis", 50, "Reached its present form after the exile (after 539 BC), combining Priestly and non-Priestly material"],
  ["Exodus", 40, "An anthology drawn from nearly all periods of Israel's history; final form after the exile"],
  ["Leviticus", 27, "Priestly; exilic or post-exilic (6th to 5th century BC)"],
  ["Numbers", 36, "A Priestly edition of an earlier original; final form after the exile"],
  ["Deuteronomy", 34, "Core laws extended in the early 6th century BC, later edited to close the Torah"],
  ["Joshua", 24, "Deuteronomistic history: a first edition under Josiah (late 7th century BC), completed in the exile"],
  ["Judges", 21, "Deuteronomistic history: late 7th century BC edition, completed in the 6th century BC"],
  ["Ruth", 4, "Commonly dated to the Persian period (539-332 BC)"],
  ["1 Samuel", 31, "Deuteronomistic history: late 7th to 6th century BC"],
  ["2 Samuel", 24, "Deuteronomistic history: late 7th to 6th century BC"],
  ["1 Kings", 22, "Deuteronomistic history: late 7th to 6th century BC"],
  ["2 Kings", 25, "Deuteronomistic history, completed after Jehoiachin's release in about 560 BC"],
  ["1 Chronicles", 29, "Between 400 and 250 BC, probably 350-300 BC"],
  ["2 Chronicles", 36, "Between 400 and 250 BC, probably 350-300 BC"],
  ["Ezra", 10, "Ezra-Nehemiah may have reached its final form as late as c. 300-200 BC"],
  ["Nehemiah", 13, "Ezra-Nehemiah may have reached its final form as late as c. 300-200 BC"],
  ["Esther", 10, "4th or 3rd century BC"],
  ["Job", 42, "Between the 6th and 4th centuries BC"],
  ["Psalms", 150, "Collected after the exile from older and newer psalms; revised into Hellenistic times"],
  ["Proverbs", 31, "A collection of collections spanning centuries; impossible to date as a whole"],
  ["Ecclesiastes", 12, "Between about 450 and 180 BC"],
  ["Song of Solomon", 8, "Any time after the 6th century BC"],
  ["Isaiah", 66, "Three parts: 8th-century Isaiah (1-39), an exilic prophet (40-55), and post-exilic authors (56-66)"],
  ["Jeremiah", 52, "A shorter Greek version from the early Persian period; the longer Hebrew version later"],
  ["Lamentations", 5, "Written against the background of Jerusalem's fall in 586 BC"],
  ["Ezekiel", 48, "Visions dated 593-571 BC, with additions by a later school"],
  ["Daniel", 12, "c. 164 BC, during the persecution of Antiochus IV"],
  ["Hosea", 14, "Second half of the 8th century BC"],
  ["Joel", 3, "Late Persian or Hellenistic period"],
  ["Amos", 9, "First half of the 8th century BC (earliest layer)"],
  ["Obadiah", 1, "Around the fall of Jerusalem, 586 BC"],
  ["Jonah", 4, "Persian or Hellenistic period, no later than the 2nd century BC"],
  ["Micah", 7, "c. 750-700 BC (core)"],
  ["Nahum", 3, "Around Nineveh's fall in 612 BC"],
  ["Habakkuk", 3, "Possibly shortly before the battle of Carchemish, 605 BC"],
  ["Zephaniah", 3, "The reign of Josiah (640-609 BC)"],
  ["Haggai", 2, "Self-dated to 520 BC"],
  ["Zechariah", 14, "Chapters 1-8 c. 520 BC; chapters 9-14 4th to 3rd century BC"],
  ["Malachi", 4, "5th century BC"],
  ["Matthew", 28, "c. AD 80-90"],
  ["Mark", 16, "c. AD 65-73"],
  ["Luke", 24, "c. AD 80-90"],
  ["John", 21, "c. AD 90-100"],
  ["Acts", 28, "c. AD 80-90"],
  ["Romans", 16, "c. AD 57-58 (undisputed letter of Paul)"],
  ["1 Corinthians", 16, "c. AD 53-57 (undisputed)"],
  ["2 Corinthians", 13, "c. AD 55-58 (undisputed)"],
  ["Galatians", 6, "c. AD 48 or 55 (undisputed)"],
  ["Ephesians", 6, "c. AD 80-90 if by a follower of Paul; earlier if by Paul"],
  ["Philippians", 4, "c. AD 54-55 (undisputed)"],
  ["Colossians", 4, "c. AD 62, or after 70 if by a follower"],
  ["1 Thessalonians", 5, "c. AD 51 (undisputed)"],
  ["2 Thessalonians", 3, "c. AD 51, or after 70 if by a follower"],
  ["1 Timothy", 6, "c. AD 100 on the majority critical view"],
  ["2 Timothy", 4, "c. AD 100 on the majority critical view"],
  ["Titus", 3, "c. AD 100 on the majority critical view"],
  ["Philemon", 1, "c. AD 54-55 (undisputed)"],
  ["Hebrews", 13, "c. AD 80-90"],
  ["James", 5, "c. AD 65-85"],
  ["1 Peter", 5, "c. AD 75-90"],
  ["2 Peter", 3, "c. AD 110, probably the latest New Testament writing"],
  ["1 John", 5, "c. AD 90-110"],
  ["2 John", 1, "c. AD 90-110"],
  ["3 John", 1, "c. AD 90-110"],
  ["Jude", 1, "Uncertain"],
  ["Revelation", 22, "c. AD 95, in the reign of Domitian"],
]

const TANAKH: ReadonlyArray<{ part: string; books: readonly string[] }> = [
  { part: "Torah (Law)", books: ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy"] },
  { part: "Nevi'im (Prophets)", books: ["Joshua", "Judges", "Samuel", "Kings", "Isaiah", "Jeremiah", "Ezekiel", "The Twelve"] },
  { part: "Ketuvim (Writings)", books: ["Psalms", "Proverbs", "Job", "Song of Songs", "Ruth", "Lamentations", "Ecclesiastes", "Esther", "Daniel", "Ezra-Nehemiah", "Chronicles"] },
]

interface Book {
  readonly name: string
  readonly chapters: number
  readonly critical: string
  readonly division: Division
  readonly fields: Readonly<Record<"author" | "place" | "date" | "theme", string>>
}

/** Pull each "### Book" block and its four labelled fields out of the section text. */
function useBooks(): Book[] {
  return useMemo(() => {
    const byName = new Map<string, { division: Division; text: string }>()
    for (const sub of BIBLE_BOOKS.subtopics ?? []) {
      const parts = sub.content.split(/^### /m).slice(1)
      for (const part of parts) {
        const [title, ...rest] = part.split("\n")
        byName.set(title.trim(), { division: sub.id as Division, text: rest.join("\n") })
      }
    }
    const field = (text: string, label: string) =>
      new RegExp(`\\*\\*${label}:\\*\\*\\s*(.+)`).exec(text)?.[1].replace(/\[\^\d+\]/g, "").trim() ?? ""
    return BOOKS.map(([name, chapters, critical]) => {
      const found = byName.get(name)
      const text = found?.text ?? ""
      return {
        name,
        chapters,
        critical,
        division: found?.division ?? "the-law",
        fields: {
          author: field(text, "Authorship Evidence"),
          place: field(text, "Where Written"),
          date: field(text, "Date of Writing"),
          theme: field(text, "Theological Theme"),
        },
      }
    })
  }, [])
}

/** Short spine labels for names too long to fit a 22px spine. */
const SPINE: Record<string, string> = {
  "Song of Solomon": "Song",
  "1 Thessalonians": "1 Thess",
  "2 Thessalonians": "2 Thess",
  "1 Corinthians": "1 Cor",
  "2 Corinthians": "2 Cor",
  "1 Chronicles": "1 Chron",
  "2 Chronicles": "2 Chron",
  Lamentations: "Lament.",
  Ecclesiastes: "Eccles.",
  Deuteronomy: "Deut.",
  Philippians: "Philipp.",
}

const colorOf = (d: Division) => SERIES[DIVISIONS.findIndex((x) => x.key === d)]

function Bookshelf() {
  const books = useBooks()
  const { openSection } = useTopicPage()
  const [selected, setSelected] = useState("Genesis")
  const [testament, setTestament] = useState<"all" | "ot" | "nt">("all")
  const [order, setOrder] = useState<"christian" | "tanakh">("christian")
  const book = books.find((b) => b.name === selected) ?? books[0]
  const shown = books.filter((b, i) => testament === "all" || (testament === "ot" ? i < 39 : i >= 39))

  return (
    <VisualCard
      title="The 66 books on one shelf"
      subtitle="Each spine is one book, its height set by its number of chapters and its colour by its division. Select a book for the traditional ascription given below alongside the date most critical scholars hold."
      sources={[
        { label: "Wikipedia, \"Dating the Bible\" (critical dates)", url: "https://en.wikipedia.org/wiki/Dating_the_Bible" },
        { label: "Wikipedia, \"Hebrew Bible\" (order of the Tanakh)", url: "https://en.wikipedia.org/wiki/Hebrew_Bible" },
      ]}
    >
      <div className="flex flex-wrap gap-2 mb-3">
        <Toggle label="Testament" value={testament} onChange={setTestament} options={[{ value: "all", label: "Whole Bible" }, { value: "ot", label: "Old Testament" }, { value: "nt", label: "New Testament" }]} />
        <Toggle label="Order" value={order} onChange={setOrder} options={[{ value: "christian", label: "Christian order" }, { value: "tanakh", label: "Hebrew Bible order" }]} />
      </div>
      <Legend items={DIVISIONS.map((d, i) => ({ label: d.label, color: SERIES[i] }))} />

      {order === "christian" ? (
        <div className="flex flex-wrap items-end gap-[3px] border-b-4 border-[color:var(--viz-axis)] pb-0.5 pt-2" role="listbox" aria-label="Books of the Bible">
          {shown.map((b) => {
            const on = b.name === book.name
            return (
              <button
                key={b.name}
                type="button"
                role="option"
                aria-selected={on}
                title={`${b.name}, ${b.chapters} chapter${b.chapters > 1 ? "s" : ""}`}
                onClick={() => setSelected(b.name)}
                className={cn("relative w-[22px] rounded-t-[3px] text-white transition-transform hover:-translate-y-1", on && "-translate-y-2 ring-2 ring-[color:var(--viz-ink)]")}
                style={{ height: `${44 + Math.sqrt(b.chapters) * 10}px`, background: colorOf(b.division) }}
              >
                <span className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold [writing-mode:vertical-rl] rotate-180 whitespace-nowrap overflow-hidden leading-none">
                  {SPINE[b.name] ?? b.name}
                </span>
              </button>
            )
          })}
        </div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-3">
          {TANAKH.map((t) => (
            <div key={t.part} className="viz-info rounded-lg border p-3">
              <div className="font-semibold text-sm mb-2">{t.part}</div>
              <ol className="list-decimal pl-5 text-[13px] space-y-0.5 text-[color:var(--viz-ink-2)]">
                {t.books.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ol>
            </div>
          ))}
          <p className="sm:col-span-3 text-[12px] text-[color:var(--viz-ink-2)]">
            The same books as the Protestant Old Testament, counted as 24: Samuel, Kings, Chronicles and Ezra-Nehemiah are one book each, and the twelve minor prophets are one book, &quot;The Twelve&quot;. Ending with Chronicles, the Hebrew order closes on the return from exile rather than on Malachi&apos;s promise of Elijah.
          </p>
        </div>
      )}

      <div className="mt-4 viz-info rounded-lg border p-4" aria-live="polite">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div className="text-lg font-semibold">{book.name}</div>
          <div className="text-xs text-[color:var(--viz-ink-2)]">
            {DIVISIONS.find((d) => d.key === book.division)?.label}, {book.chapters} chapter{book.chapters > 1 ? "s" : ""}
          </div>
        </div>
        {book.fields.theme && <Rich as="p" text={book.fields.theme} className="text-sm mt-2 leading-relaxed" />}
        <div className="grid gap-3 sm:grid-cols-2 mt-3 text-[13px] leading-relaxed">
          <div>
            <div className="text-[12px] font-semibold text-[color:var(--viz-muted)]">Traditional view</div>
            {book.fields.author && <Rich as="p" text={`**Author:** ${book.fields.author}`} className="mt-1" />}
            {book.fields.place && <Rich as="p" text={`**Written:** ${book.fields.place}`} className="mt-1" />}
            {book.fields.date && <Rich as="p" text={`**Date:** ${book.fields.date}`} className="mt-1" />}
          </div>
          <div>
            <div className="text-[12px] font-semibold text-[color:var(--viz-muted)]">Most critical scholars</div>
            <Rich as="p" text={`**Date:** ${book.critical}`} className="mt-1" />
          </div>
        </div>
        <button type="button" className="mt-3 text-sm text-blue-600 hover:underline" onClick={() => openSection(book.division, headingId(book.name))}>
          Read the full summary
        </button>
      </div>
    </VisualCard>
  )
}

function DatingCompare() {
  return (
    <VisualCard
      title="Where the dates diverge most"
      subtitle="Traditional and critical dates for the books whose dating is most disputed. Where the two overlap, the disagreement is about authorship rather than date."
      sources={[{ label: "Wikipedia, \"Dating the Bible\"", url: "https://en.wikipedia.org/wiki/Dating_the_Bible" }]}
    >
      <RangeChart
        min={-1500}
        max={150}
        ticks={[-1400, -1000, -600, -200, 100]}
        groups={["Traditional", "Critical"]}
        labelWidth={170}
        items={[
          { label: "Pentateuch", start: -1440, end: -1400, group: "Traditional", display: "1440-1400 BC" },
          { label: "Pentateuch", start: -539, end: -400, group: "Critical", display: "after the exile" },
          { label: "Isaiah 40-66", start: -740, end: -680, group: "Traditional", display: "8th c. BC" },
          { label: "Isaiah 40-66", start: -550, end: -450, group: "Critical", display: "exile and after" },
          { label: "Daniel", start: -532, end: -528, group: "Traditional", display: "c. 530 BC" },
          { label: "Daniel", start: -165, end: -164, group: "Critical", display: "c. 164 BC" },
          { label: "Pastoral letters", start: 63, end: 67, group: "Traditional", display: "c. AD 63-67" },
          { label: "Pastoral letters", start: 95, end: 105, group: "Critical", display: "c. AD 100" },
          { label: "2 Peter", start: 66, end: 68, group: "Traditional", display: "c. AD 66-68" },
          { label: "2 Peter", start: 105, end: 115, group: "Critical", display: "c. AD 110" },
        ]}
      />
    </VisualCard>
  )
}

function LettersMap() {
  return (
    <VisualCard
      title="Where the letters went"
      subtitle="The cities and regions addressed by Paul's letters, and the seven churches of Revelation 2-3, written from Patmos. Rome lies off the map to the west."
      note="Whether Galatians was sent to the cities of southern Galatia (such as Pisidian Antioch) or to ethnic Galatia further north is debated."
    >
      <PinMap
        geo={AEGEAN}
        groups={["Paul's letters", "Revelation's seven churches", "Other"]}
        areaLabels={[
          { lon: 25.2, lat: 39.0, text: "Aegean Sea", water: true },
          { lon: 20.2, lat: 41.6, text: "← Rome" },
          { lon: 24.9, lat: 35.25, text: "Crete (Titus 1:5)" },
        ]}
        pins={[
          { id: "corinth", lon: 22.879, lat: 37.906, label: "Corinth", group: "Paul's letters", detail: "1 and 2 Corinthians. Paul founded the church on his second journey (Acts 18)." },
          { id: "thessalonica", lon: 22.94, lat: 40.64, label: "Thessalonica", group: "Paul's letters", detail: "1 and 2 Thessalonians, among his earliest letters." },
          { id: "philippi", lon: 24.284, lat: 41.013, label: "Philippi", group: "Paul's letters", detail: "Philippians, written from prison. The first church in Europe (Acts 16)." },
          { id: "ephesus", lon: 27.342, lat: 37.941, label: "Ephesus", group: "Paul's letters", labelLeft: true, detail: "Ephesians; Timothy was left in Ephesus (1 Timothy 1:3). Also the first of Revelation's seven churches (Revelation 2:1)." },
          { id: "colossae", lon: 29.262, lat: 37.788, label: "Colossae", group: "Paul's letters", detail: "Colossians and Philemon: Onesimus was \"one of you\" (Colossians 4:9)." },
          { id: "antioch", lon: 31.189, lat: 38.306, label: "Pisidian Antioch", group: "Paul's letters", labelLeft: true, detail: "One of the south Galatian cities that may have received Galatians (Acts 13:14)." },
          { id: "smyrna", lon: 27.14, lat: 38.42, label: "Smyrna", group: "Revelation's seven churches", labelLeft: true, detail: "Revelation 2:8-11." },
          { id: "pergamum", lon: 27.184, lat: 39.132, label: "Pergamum", group: "Revelation's seven churches", labelLeft: true, detail: "Revelation 2:12-17." },
          { id: "thyatira", lon: 27.84, lat: 38.918, label: "Thyatira", group: "Revelation's seven churches", detail: "Revelation 2:18-29." },
          { id: "sardis", lon: 28.04, lat: 38.488, label: "Sardis", group: "Revelation's seven churches", detail: "Revelation 3:1-6." },
          { id: "philadelphia", lon: 28.52, lat: 38.35, label: "Philadelphia", group: "Revelation's seven churches", hideLabel: true, detail: "Revelation 3:7-13." },
          { id: "laodicea", lon: 29.107, lat: 37.836, label: "Laodicea", group: "Revelation's seven churches", hideLabel: true, detail: "Revelation 3:14-22; also mentioned in Colossians 4:16." },
          { id: "patmos", lon: 26.55, lat: 37.31, label: "Patmos", group: "Other", labelLeft: true, detail: "Where John received the visions of Revelation (Revelation 1:9)." },
        ]}
      />
    </VisualCard>
  )
}

type Testament = "ot" | "nt"

/** Events use the traditional chronology the book entries follow; written dates are the entries' own. */
const WRITTEN_VS_EVENTS: Record<Testament, ReadonlyArray<{ book: string; events: readonly [number, number]; eventsLabel: string; written: readonly [number, number]; writtenLabel: string }>> = {
  ot: [
    { book: "Exodus", events: [-1446, -1445], eventsLabel: "1446 BC", written: [-1440, -1400], writtenLabel: "1440-1400 BC" },
    { book: "Numbers", events: [-1445, -1406], eventsLabel: "1445-1406 BC", written: [-1400, -1400], writtenLabel: "c. 1400 BC" },
    { book: "Judges", events: [-1375, -1050], eventsLabel: "c. 1375-1050 BC", written: [-1045, -1000], writtenLabel: "1045-1000 BC" },
    { book: "1-2 Samuel", events: [-1100, -970], eventsLabel: "c. 1100-970 BC", written: [-930, -930], writtenLabel: "c. 930 BC" },
    { book: "1-2 Kings", events: [-970, -561], eventsLabel: "970-561 BC", written: [-550, -550], writtenLabel: "c. 550 BC" },
    { book: "1-2 Chronicles", events: [-1010, -538], eventsLabel: "1010-538 BC", written: [-450, -400], writtenLabel: "450-400 BC" },
    { book: "Daniel", events: [-605, -536], eventsLabel: "605-536 BC", written: [-530, -530], writtenLabel: "c. 530 BC" },
    { book: "Esther", events: [-483, -473], eventsLabel: "483-473 BC", written: [-470, -460], writtenLabel: "470-460 BC" },
    { book: "Ezra", events: [-538, -457], eventsLabel: "538-457 BC", written: [-440, -440], writtenLabel: "c. 440 BC" },
    { book: "Nehemiah", events: [-445, -432], eventsLabel: "445-432 BC", written: [-430, -430], writtenLabel: "c. 430 BC" },
  ],
  nt: [
    { book: "Matthew", events: [-5, 30], eventsLabel: "c. 5 BC-AD 30", written: [50, 60], writtenLabel: "AD 50-60" },
    { book: "Mark", events: [28, 30], eventsLabel: "c. AD 28-30", written: [55, 65], writtenLabel: "AD 55-65" },
    { book: "Luke", events: [-5, 30], eventsLabel: "c. 5 BC-AD 30", written: [60, 60], writtenLabel: "c. AD 60" },
    { book: "John", events: [28, 30], eventsLabel: "c. AD 28-30", written: [85, 90], writtenLabel: "AD 85-90" },
    { book: "Acts", events: [30, 62], eventsLabel: "c. AD 30-62", written: [62, 62], writtenLabel: "c. AD 62" },
  ],
}

function WrittenVsEvents() {
  const [t, setT] = useState<Testament>("ot")
  const rows = WRITTEN_VS_EVENTS[t]
  const items = rows.flatMap((r) => [
    { label: r.book, start: r.events[0], end: r.events[1], group: "Events described", display: r.eventsLabel },
    { label: r.book, start: r.written[0], end: r.written[1], group: "Written", display: r.writtenLabel },
  ])
  return (
    <VisualCard
      title="When it happened and when it was written"
      subtitle="The historical books, with the period each describes beside the date it was written. The written dates are the traditional ones given in each book's entry; critical dates are often later (see the chart of where dates diverge). Hover a bar for details."
      note="Event dates follow the traditional chronology, built from the books' own reign and year notes (for example 1 Kings 6:1; Daniel 1:1; Esther 1:3; Nehemiah 2:1 and 13:6), and are approximate. Chronicles' genealogies reach back to Adam; the bar shows its narrative from David onward."
      sources={[
        { label: "Wikipedia, \"Chronology of the Bible\"", url: "https://en.wikipedia.org/wiki/Chronology_of_the_Bible" },
        { label: "Wikipedia, \"Kings of Israel and Judah\"", url: "https://en.wikipedia.org/wiki/Kings_of_Israel_and_Judah" },
        { label: "Wikipedia, \"Chronology of Jesus\"", url: "https://en.wikipedia.org/wiki/Chronology_of_Jesus" },
      ]}
    >
      <div className="mb-3">
        <Toggle
          label="Testament"
          value={t}
          onChange={setT}
          options={[
            { value: "ot", label: "Old Testament" },
            { value: "nt", label: "New Testament" },
          ]}
        />
      </div>
      {t === "ot" ? (
        <RangeChart key="ot" min={-1500} max={-400} ticks={[-1400, -1200, -1000, -800, -600, -400]} groups={["Events described", "Written"]} labelWidth={130} items={items} />
      ) : (
        <RangeChart key="nt" min={-10} max={100} ticks={[0, 20, 40, 60, 80, 100]} format={(n) => (n < 0 ? `${-n} BC` : `AD ${n}`)} groups={["Events described", "Written"]} labelWidth={130} items={items} />
      )}
    </VisualCard>
  )
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  "written-vs-events": WrittenVsEvents,
  bookshelf: Bookshelf,
  "dating-compare": DatingCompare,
  "letters-map": LettersMap,
}

export default function Visuals({ name }: { readonly name: string }) {
  const V = VISUALS[name]
  return V ? <V /> : null
}
