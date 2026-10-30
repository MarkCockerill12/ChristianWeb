"use client"

import { CompareTable, PassageCompare, SectionExplorer, VisualCard, type ExplorerItem } from "@/components/visuals/kit"
import { cn } from "@/lib/utils"

type Row = readonly [section: string, title: string, testament: string, kind: string, resolution: string, difficulty: string]

const ROWS: readonly Row[] = [
  ["GenAnimals", "Man before or after the animals?", "Old Testament", "Parallel accounts", "Different focus or order", "Straightforward"],
  ["GenArk", "Two of each, or seven pairs?", "Old Testament", "Parallel accounts", "Complementary details", "Straightforward"],
  ["GenFlood", "Forty days or 150?", "Old Testament", "Chronology", "Different sense of a word", "Straightforward"],
  ["CainsWife", "Where did Cain get his wife?", "Old Testament", "Family and genealogy", "Reading the context", "Straightforward"],
  ["chariots", "700 or 7,000 charioteers?", "Old Testament", "Numbers and copying", "Copyist error", "Straightforward"],
  ["jehoiachin", "Jehoiachin 18 or 8?", "Old Testament", "Numbers and copying", "Copyist error", "Straightforward"],
  ["genealogies", "Two genealogies of Jesus", "New Testament", "Family and genealogy", "Debated", "Hard"],
  ["DavidSin", "God or Satan incites David?", "Old Testament", "Theology", "Different focus or order", "Straightforward"],
  ["BlindMen", "One blind man or two?", "New Testament", "Parallel accounts", "Complementary details", "Straightforward"],
  ["JudasDeath", "How did Judas die?", "New Testament", "Parallel accounts", "Complementary details", "Moderate"],
  ["CrucifixionTiming", "Crucified at 9 a.m. or after noon?", "New Testament", "Chronology", "Debated", "Hard"],
  ["CrossCarrying", "Jesus or Simon carries the cross?", "New Testament", "Parallel accounts", "Complementary details", "Straightforward"],
  ["FinalCry", "Jesus' last words", "New Testament", "Parallel accounts", "Complementary details", "Straightforward"],
  ["GodSeen", "Can anyone see God?", "Old Testament", "Theology", "Different sense of a word", "Straightforward"],
  ["FaithAlone", "Faith alone, or works too?", "New Testament", "Theology", "Different sense of a word", "Moderate"],
  ["AhaziahsAge", "Ahaziah 22 or 42?", "Old Testament", "Numbers and copying", "Copyist error", "Straightforward"],
  ["TempleCleansing", "Temple cleansing early or late?", "New Testament", "Chronology", "Different focus or order", "Moderate"],
  ["HighPriest", "Abiathar or Ahimelech?", "New Testament", "Parallel accounts", "Different sense of a word", "Moderate"],
  ["ResurrectionAccounts", "The resurrection morning", "New Testament", "Parallel accounts", "Complementary details", "Moderate"],
  ["GodRepents", "Does God change his mind?", "Old Testament", "Theology", "Different sense of a word", "Straightforward"],
  ["LexTalionis", "Eye for an eye or other cheek?", "Both", "Theology", "Different focus or order", "Straightforward"],
  ["CrossInscription", "The words on the cross", "New Testament", "Parallel accounts", "Complementary details", "Straightforward"],
  ["PetersDenial", "Rooster crows once or twice?", "New Testament", "Parallel accounts", "Complementary details", "Straightforward"],
  ["PaulsConversion", "Paul's three conversion accounts", "New Testament", "Parallel accounts", "Different sense of a word", "Moderate"],
  ["Quirinius", "Luke's census and Quirinius", "New Testament", "Chronology", "Debated", "Hard"],
  ["StaffOrNoStaff", "Take a staff or not?", "New Testament", "Parallel accounts", "Different sense of a word", "Moderate"],
  ["CenturionServant", "Centurion in person or by messengers?", "New Testament", "Parallel accounts", "Complementary details", "Straightforward"],
  ["SaulsDeath", "Who killed Saul?", "Old Testament", "Parallel accounts", "A character's false report", "Straightforward"],
  ["WhoKilledGoliath", "David or Elhanan killed Goliath?", "Old Testament", "Numbers and copying", "Copyist error", "Moderate"],
  ["MichalsChildren", "Did Michal have children?", "Old Testament", "Numbers and copying", "Copyist error", "Straightforward"],
  ["SolomonsStalls", "40,000 or 4,000 stalls?", "Old Testament", "Numbers and copying", "Copyist error", "Straightforward"],
  ["PunishingSons", "Children punished for parents?", "Old Testament", "Theology", "Different focus or order", "Straightforward"],
  ["CaptivityLength", "430 years from when?", "Both", "Chronology", "Different manuscript traditions", "Moderate"],
  ["JacobsFamily", "70 or 75 went to Egypt?", "Both", "Numbers and copying", "Different manuscript traditions", "Straightforward"],
  ["PostResurrection", "Appearances in Galilee or Jerusalem?", "New Testament", "Parallel accounts", "Complementary details", "Straightforward"],
  ["PassoverTiming", "Crucified after or before Passover?", "New Testament", "Chronology", "Debated", "Hard"],
  ["TemptationOrder", "Order of the temptations", "New Testament", "Parallel accounts", "Different focus or order", "Straightforward"],
  ["MosesDeath", "Did Moses record his own death?", "Old Testament", "Authorship", "Different focus or order", "Moderate"],
  ["FatherGreater", "Is the Father greater than Jesus?", "New Testament", "Theology", "Different focus or order", "Moderate"],
]

const ITEMS: readonly ExplorerItem[] = ROWS.map(([section, title, testament, kind, resolution, difficulty]) => ({
  section,
  title,
  facets: { testament, kind, resolution, difficulty },
}))

function Explorer() {
  return (
    <VisualCard
      title="All 39 alleged contradictions, sorted"
      subtitle="Filter by testament, by the kind of difficulty, by the kind of answer each section gives, and by how hard the section itself judges the problem to be. Selecting a card opens it below."
      note={"\"Hard\" marks the four cases where the section itself says no answer commands agreement or that the harmonisation is among the most difficult."}
    >
      <SectionExplorer
        items={ITEMS}
        countLabel="contradictions"
        facets={[
          { key: "testament", label: "Testament" },
          { key: "kind", label: "Kind" },
          { key: "resolution", label: "Answer" },
          { key: "difficulty", label: "Difficulty" },
        ]}
      />
    </VisualCard>
  )
}

/* David to Jesus in each Gospel, NIV spellings. */
const MATTHEW = ["David", "Solomon", "Rehoboam", "Abijah", "Asa", "Jehoshaphat", "Jehoram", "Uzziah", "Jotham", "Ahaz", "Hezekiah", "Manasseh", "Amon", "Josiah", "Jeconiah", "Shealtiel", "Zerubbabel", "Abihud", "Eliakim", "Azor", "Zadok", "Akim", "Elihud", "Eleazar", "Matthan", "Jacob", "Joseph", "Jesus"]
const LUKE = ["David", "Nathan", "Mattatha", "Menna", "Melea", "Eliakim", "Jonam", "Joseph", "Judah", "Simeon", "Levi", "Matthat", "Jorim", "Eliezer", "Joshua", "Er", "Elmadam", "Cosam", "Addi", "Melki", "Neri", "Shealtiel", "Zerubbabel", "Rhesa", "Joanan", "Joda", "Josek", "Semein", "Mattathias", "Maath", "Naggai", "Esli", "Nahum", "Amos", "Mattathias", "Joseph", "Jannai", "Melki", "Levi", "Matthat", "Heli", "Joseph", "Jesus"]
const SHARED = new Set(["David", "Shealtiel", "Zerubbabel", "Jesus"])

function GenealogyColumn({ title, names, father }: { readonly title: string; readonly names: readonly string[]; readonly father: string }) {
  return (
    <div className="viz-info rounded-lg border p-3">
      <div className="font-semibold text-sm">{title}</div>
      <div className="text-[12px] text-[color:var(--viz-ink-2)] mb-2">{names.length} names, David to Jesus. Joseph&apos;s father: {father}.</div>
      <ol className="flex flex-wrap gap-1 list-none p-0 m-0">
        {names.map((n, i) => {
          const shared = SHARED.has(n) || (n === "Joseph" && i === names.length - 2)
          return (
            <li
              key={`${n}-${i}`}
              className={cn("text-[12px] rounded px-1.5 py-0.5 border", shared ? "font-semibold border-[color:var(--viz-1)]" : "border-transparent bg-[color:var(--viz-hover)]")}
            >
              {n}
            </li>
          )
        })}
      </ol>
    </div>
  )
}

function Genealogies() {
  return (
    <VisualCard
      title="Matthew's and Luke's lines from David"
      subtitle="Outlined names appear in both lists. The lines part after David (Solomon in Matthew, Nathan in Luke), meet at Shealtiel and Zerubbabel, part again, and meet at Joseph."
      note="Matthew 1:6-16 and Luke 3:23-31 (Luke runs backwards from Jesus; shown here in Matthew's direction). Matthew also selects names to make three groups of fourteen (Matthew 1:17)."
    >
      <div className="grid gap-3 md:grid-cols-2">
        <GenealogyColumn title="Matthew 1, through Solomon" names={MATTHEW} father="Jacob" />
        <GenealogyColumn title="Luke 3, through Nathan" names={LUKE} father="Heli" />
      </div>
    </VisualCard>
  )
}

function Inscription() {
  return (
    <VisualCard title="The charge over the cross, in four Gospels" subtitle="All four give the same core charge; none claims to quote the whole sign.">
      <PassageCompare
        highlightWords={["the king of the jews"]}
        passages={[
          { ref: "Matthew 27:37", text: "THIS IS JESUS, THE KING OF THE JEWS." },
          { ref: "Mark 15:26", text: "THE KING OF THE JEWS." },
          { ref: "Luke 23:38", text: "THIS IS THE KING OF THE JEWS." },
          { ref: "John 19:19", text: "JESUS OF NAZARETH, THE KING OF THE JEWS." },
        ]}
      />
    </VisualCard>
  )
}

function PaulAccounts() {
  return (
    <VisualCard title="Paul's conversion, told three times in Acts" subtitle="What the companions perceived, in each telling.">
      <PassageCompare
        highlightWords={["sound", "light", "voice", "fell to the ground", "heard"]}
        passages={[
          { ref: "Acts 9:7", label: "Luke narrating", text: "The men traveling with Saul stood there speechless; they heard the sound but did not see anyone." },
          { ref: "Acts 22:9", label: "Paul to the crowd", text: "My companions saw the light, but they did not understand the voice of him who was speaking to me." },
          { ref: "Acts 26:13-14", label: "Paul to Agrippa", text: "I saw a light from heaven, brighter than the sun, blazing around me and my companions. We all fell to the ground." },
        ]}
      />
    </VisualCard>
  )
}

function ResurrectionMorning() {
  return (
    <VisualCard
      title="The resurrection morning in four accounts"
      subtitle="The details each Gospel gives. Differences are of who is named and what is included; none says the tomb was occupied."
    >
      <CompareTable
        minWidth="52rem"
        compact
        columns={[
          { key: "q", label: "Detail" },
          { key: "mt", label: "Matthew 28:1-10" },
          { key: "mk", label: "Mark 16:1-8" },
          { key: "lk", label: "Luke 24:1-12" },
          { key: "jn", label: "John 20:1-18" },
        ]}
        rows={[
          { q: "Time", mt: "At dawn on the first day", mk: "Very early, just after sunrise", lk: "Very early in the morning", jn: "While it was still dark" },
          { q: "Women named", mt: "Mary Magdalene and \"the other Mary\"", mk: "Mary Magdalene, Mary the mother of James, Salome", lk: "Mary Magdalene, Joanna, Mary the mother of James, \"and the others\" (24:10)", jn: "Mary Magdalene (\"we\" in 20:2)" },
          { q: "Messengers", mt: "One angel, sitting on the stone", mk: "A young man in white, inside", lk: "Two men in gleaming clothes", jn: "Two angels in white, seen later by Mary" },
          { q: "Disciples at the tomb", mt: "@na", mk: "@na", lk: "Peter runs to the tomb (24:12)", jn: "Peter and the other disciple run to the tomb" },
          { q: "First appearance", mt: "To the women, on the way", mk: "None in 16:1-8; the longer ending is disputed", lk: "Two on the Emmaus road; Simon (24:34)", jn: "To Mary Magdalene in the garden" },
        ]}
      />
    </VisualCard>
  )
}

function Numbers() {
  return (
    <VisualCard
      title="Number and name differences between parallel books"
      subtitle="The discrepancies the sections explain as copying errors, with the mechanism each proposes."
    >
      <CompareTable
        minWidth="48rem"
        compact
        columns={[
          { key: "what", label: "What" },
          { key: "a", label: "One text" },
          { key: "b", label: "The other" },
          { key: "how", label: "Proposed mechanism" },
        ]}
        rows={[
          { what: "Aramean chariots", a: "700 (2 Samuel 10:18)", b: "7,000 (1 Chronicles 19:18)", how: "A miscopied numeral" },
          { what: "Jehoiachin's age", a: "18 (2 Kings 24:8)", b: "8 (2 Chronicles 36:9)", how: "\"Ten\" dropped in copying; some Septuagint manuscripts and the Syriac read 18" },
          { what: "Ahaziah's age", a: "22 (2 Kings 8:26)", b: "42 (2 Chronicles 22:2)", how: "His father died at 40; the Syriac and Arabic read 22" },
          { what: "Solomon's stalls", a: "40,000 (1 Kings 4:26)", b: "4,000 (2 Chronicles 9:25)", how: "A plural ending added to \"four\" multiplies it by ten" },
          { what: "Who killed Goliath", a: "Elhanan (2 Samuel 21:19)", b: "Elhanan killed Goliath's brother Lahmi (1 Chronicles 20:5)", how: "Copyist error on the conservative view; many critics think the Elhanan tradition is older" },
          { what: "Michal's sons", a: "No children (2 Samuel 6:23)", b: "Five sons (2 Samuel 21:8)", how: "Michal written for her sister Merab, as in two Hebrew manuscripts and some Septuagint manuscripts" },
        ]}
      />
    </VisualCard>
  )
}

function Hours() {
  const x = (h: number) => `${(h / 24) * 100}%`
  const marks = [
    { h: 6, label: "6 a.m.: John's \"sixth hour\" if counted from midnight (Roman reckoning)", color: "var(--viz-2)" },
    { h: 9, label: "9 a.m.: Mark's \"third hour\" counted from sunrise (Jewish reckoning)", color: "var(--viz-1)" },
    { h: 12, label: "Noon: John's \"sixth hour\" if counted from sunrise", color: "var(--viz-3)" },
  ]
  return (
    <VisualCard
      title="Two ways of counting the hours"
      subtitle={"Mark 15:25 puts the crucifixion at the third hour; John 19:14 has Jesus still before Pilate at the sixth. One answer is that John counts from midnight; the other is that both mean rough quarters of the day."}
      note="Against the first answer, John elsewhere appears to count from sunrise (John 4:6), which is why the section calls this one of the harder harmonisations."
    >
      <div className="relative h-16" role="img" aria-label="The day from midnight to midnight with 6 a.m., 9 a.m. and noon marked">
        <div className="absolute left-0 right-0 top-6 h-2 rounded-full bg-[color:var(--viz-hover)]" />
        <div className="absolute top-6 h-2 rounded-full bg-[color:var(--viz-grid)]" style={{ left: x(6), width: x(12) }} title="Daylight" />
        {marks.map((m) => (
          <div key={m.h} className="absolute top-3 h-8 w-[3px] rounded" style={{ left: x(m.h), background: m.color }} />
        ))}
        {[0, 6, 12, 18, 24].map((h) => (
          <div key={h} className="absolute top-11 text-[11px] text-[color:var(--viz-muted)] -translate-x-1/2 tabular-nums" style={{ left: x(h) }}>
            {h === 0 || h === 24 ? "midnight" : h === 12 ? "noon" : h < 12 ? `${h} a.m.` : `${h - 12} p.m.`}
          </div>
        ))}
      </div>
      <ul className="mt-2 space-y-1 list-none p-0 text-[13px]">
        {marks.map((m) => (
          <li key={m.h} className="flex items-start gap-2">
            <span className="mt-1.5 inline-block h-2.5 w-2.5 rounded-sm flex-shrink-0" style={{ background: m.color }} />
            {m.label}
          </li>
        ))}
      </ul>
    </VisualCard>
  )
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  explorer: Explorer,
  genealogies: Genealogies,
  inscription: Inscription,
  paul: PaulAccounts,
  "resurrection-morning": ResurrectionMorning,
  numbers: Numbers,
  hours: Hours,
}

export default function Visuals({ name }: { readonly name: string }) {
  const V = VISUALS[name]
  return V ? <V /> : null
}
