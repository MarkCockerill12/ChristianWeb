"use client"

import { BarChart, RangeChart } from "@/components/visuals/charts"
import { CompareTable, Rich, VisualCard } from "@/components/visuals/kit"
import { WorldMap } from "@/components/visuals/geo"
import { Gallery } from "@/components/visuals/figure"
import { WORLD } from "@/components/visuals/maps/world"
import BY_COUNTRY from "@/visuals/data/religion-by-country.json"
import { useTopicPage } from "@/components/topic-context"

const PEW_2025 = {
  label: "Pew Research Center, \"How the Global Religious Landscape Changed From 2010 to 2020\" (2025)",
  url: "https://www.pewresearch.org/religion/2025/06/09/how-the-global-religious-landscape-changed-from-2010-to-2020/",
}

function Shares() {
  return (
    <VisualCard
      title="The world's religions by share of population, 2020"
      subtitle="Pew Research Center's latest global estimates. Christians remain the largest group; Muslims grew fastest between 2010 and 2020; the religiously unaffiliated are now the third-largest group."
      note={"Pew revised its Buddhist figures downwards in this study, counting about 324 million in 2020. \"Other religions\" includes Sikhs, Bahá'ís, Jains, Shinto, Taoists and folk religions."}
      sources={[PEW_2025]}
    >
      <BarChart
        labelWidth="9rem"
        unit="%"
        max={30}
        data={[
          { label: "Christians", value: 28.8, display: "28.8% (2.3 billion)", highlight: true },
          { label: "Muslims", value: 25.6, display: "25.6% (2.0 billion)" },
          { label: "Unaffiliated", value: 24.2, display: "24.2% (1.9 billion)" },
          { label: "Hindus", value: 14.9, display: "14.9% (1.2 billion)" },
          { label: "Buddhists", value: 4.1, display: "4.1% (324 million)" },
          { label: "Other religions", value: 2.2, display: "2.2% (172 million)" },
          { label: "Jews", value: 0.2, display: "0.2% (14.8 million)" },
        ]}
      />
    </VisualCard>
  )
}

const GROUPS = ["Christians", "Muslims", "Unaffiliated", "Hindus", "Buddhists", "Jews", "Other religions"] as const

function ReligionMap() {
  const values = Object.fromEntries(Object.entries(BY_COUNTRY as Record<string, { g: string; s: number }>).map(([k, v]) => [k, v.g]))
  const details = Object.fromEntries(Object.entries(BY_COUNTRY as Record<string, { g: string; s: number }>).map(([k, v]) => [k, `${v.s}% of the population`]))
  return (
    <VisualCard
      title="The largest religious group in each country, 2020"
      subtitle="Coloured by whichever group is largest, which is not always a majority: in the United Kingdom, for example, Christians are the largest group at 49%."
      sources={[
        PEW_2025,
        { label: "Pew Research Center, \"Religious Composition by Country, 2010-2020\"", url: "https://www.pewresearch.org/religion/feature/religious-composition-by-country-2010-2020/" },
        { label: "Natural Earth (map outlines, public domain)", url: "https://www.naturalearthdata.com/" },
      ]}
    >
      <WorldMap geo={WORLD} values={values} details={details} categories={GROUPS.map((g) => ({ key: g, label: g }))} />
    </VisualCard>
  )
}

type R = readonly [section: string, name: string, family: string, god: string, founded: string, founder: string, jesus: string]

const ROWS: readonly R[] = [
  ["mesopotamian", "Sumerian and Mesopotamian", "Ancient", "Many gods", "Mid-4th millennium BC", "No founder", "@na"],
  ["egyptian", "Ancient Egyptian", "Ancient", "Many gods", "c. 3300-3100 BC", "No founder", "@na"],
  ["judaism", "Judaism", "Abrahamic", "One God", "Israel attested c. 1208 BC; tradition places Abraham c. 2000 BC", "Abraham; Moses", "Not the Messiah"],
  ["islam", "Islam", "Abrahamic", "One God", "c. AD 610", "Muhammad", "A prophet, not divine and not crucified"],
  ["sufism", "Sufism", "Abrahamic", "One God", "8th century AD", "Mystical stream within Islam", "As in Islam"],
  ["alevism", "Alevism", "Abrahamic", "One God", "13th-16th centuries", "No single founder", "As in Islam"],
  ["bahai", "Bahá'í Faith", "Abrahamic", "One God", "1844-1863", "The Báb; Bahá'u'lláh", "One of a line of messengers"],
  ["mormonism", "Latter-day Saints", "Restorationist", "Godhead of three separate beings", "1830", "Joseph Smith", "Divine Son, the firstborn spirit child of Heavenly Father"],
  ["jehovahswitnesses", "Jehovah's Witnesses", "Restorationist", "One God, non-Trinitarian", "Late 1870s", "Charles Taze Russell", "A created being, the archangel Michael"],
  ["christianscience", "Christian Science", "Restorationist", "God as wholly spiritual", "1879", "Mary Baker Eddy", "A man who embodied the divine Christ idea"],
  ["rastafarianism", "Rastafari", "Abrahamic", "One God (Jah)", "1930s", "Inspired by Marcus Garvey", "Haile Selassie seen as Christ returned"],
  ["zoroastrianism", "Zoroastrianism", "Iranian", "One God (Ahura Mazda)", "c. 1500-1000 BC (scholarly)", "Zoroaster", "@na"],
  ["hinduism", "Hinduism", "Dharmic", "Many gods; ultimate Brahman", "Vedas c. 1500-1000 BC", "No founder", "No set view"],
  ["buddhism", "Buddhism", "Dharmic", "No creator God", "6th-4th century BC", "Siddhartha Gautama", "No set view"],
  ["jainism", "Jainism", "Dharmic", "No creator God", "6th century BC", "Mahavira", "No set view"],
  ["sikhism", "Sikhism", "Dharmic", "One God (Waheguru)", "c. 1500", "Guru Nanak", "No set view"],
  ["confucianism", "Confucianism", "East Asian", "Heaven (Tian); largely ethical", "6th-5th century BC", "Confucius", "@na"],
  ["taoism", "Taoism", "East Asian", "The Tao; many deities in religious Taoism", "6th century BC (traditional)", "Laozi (traditional)", "@na"],
  ["shintoism", "Shinto", "East Asian", "Many kami", "Prehistoric; systematised 8th century AD", "No founder", "@na"],
  ["tengrism", "Tengrism", "Indigenous", "Sky god Tengri; spirits", "Prehistoric", "No founder", "@na"],
  ["vodou", "Vodou", "Indigenous and syncretic", "God and the lwa spirits", "17th-18th centuries", "No founder", "@na"],
  ["greek", "Greek polytheism", "Ancient", "Many gods", "c. 800-500 BC", "No founder", "@na"],
  ["roman", "Roman polytheism", "Ancient", "Many gods", "753 BC (traditional)", "No founder", "@na"],
  ["norse", "Norse paganism", "Ancient", "Many gods", "c. 1st century BC-11th century AD", "No founder", "@na"],
  ["celtic", "Celtic paganism", "Ancient", "Many gods", "c. 1200 BC-AD 500", "No founder", "@na"],
  ["wicca", "Wicca", "New religious movement", "Goddess and God", "1950s", "Gerald Gardner", "@na"],
  ["modern", "Modern spiritual movements", "New religious movement", "Varies; often universal consciousness", "Mid-20th century", "Various", "Varies"],
  ["scientology", "Scientology", "New religious movement", "No defined God", "1953-1954", "L. Ron Hubbard", "No set view"],
]

function Comparison() {
  const { openSection } = useTopicPage()
  return (
    <VisualCard
      title={`All ${ROWS.length} religions compared`}
      subtitle="The religions examined in depth, side by side. Filter by family or search; the names under the table open each religion's section."
      note={"\"No set view\" means the tradition has no official teaching about Jesus, though individual teachers may hold one."}
    >
      <CompareTable
        minWidth="64rem"
        compact
        searchable
        filterKeys={["family"]}
        columns={[
          { key: "name", label: "Religion" },
          { key: "family", label: "Family" },
          { key: "god", label: "Ultimate reality" },
          { key: "founded", label: "Origin", numeric: true },
          { key: "founder", label: "Founder" },
          { key: "jesus", label: "View of Jesus" },
        ]}
        rows={ROWS.map(([, name, family, god, founded, founder, jesus]) => ({ name, family, god, founded, founder, jesus }))}
      />
      <div className="mt-3 flex flex-wrap gap-1.5">
        {ROWS.map(([section, name]) => (
          <button key={section} type="button" className="viz-chip" onClick={() => openSection(section)}>
            {name}
          </button>
        ))}
      </div>
    </VisualCard>
  )
}

const SCRIPTURE_CLAIMS = [
  { ref: "Genesis 1-4", text: "Human beings know and worship the one God from the beginning. \"At that time people began to call on the name of the LORD\" (Genesis 4:26)." },
  { ref: "Genesis 14:18", text: "Melchizedek, \"priest of God Most High\", serves the same God outside Abraham's family and before Israel exists." },
  { ref: "Romans 1:21-23", text: "Paul describes many gods as a decline: people who knew God \"exchanged the glory of the immortal God for images\"." },
] as const

function Timeline() {
  return (
    <VisualCard
      title="How old is each religion?"
      subtitle="Each mark shows when the earliest evidence historians accept for that religion falls, not the date its own tradition gives. On that measure Sumerian and Egyptian religion come first, then the Vedic roots of Hinduism, Zoroastrianism and the religion of Israel."
      note="These are minimum ages, because a religion is older than its first inscription and writing itself only begins around 3500 BC. A bar marks a range of possible dates, not how long the religion lasted. The dates for the Rigveda and for Zoroaster are inferred from language and are approximate."
      sources={[
        { label: "Wikipedia, \"Ancient Mesopotamian religion\"", url: "https://en.wikipedia.org/wiki/Ancient_Mesopotamian_religion" },
        { label: "Wikipedia, \"Ancient Egyptian religion\"", url: "https://en.wikipedia.org/wiki/Ancient_Egyptian_religion" },
        { label: "Britannica, \"Pyramid Texts\"", url: "https://www.britannica.com/topic/Pyramid-Texts" },
        { label: "Wikipedia, \"Rigveda\"", url: "https://en.wikipedia.org/wiki/Rigveda" },
        { label: "Wikipedia, \"Zoroaster\"", url: "https://en.wikipedia.org/wiki/Zoroaster" },
        { label: "Wikipedia, \"Merneptah Stele\"", url: "https://en.wikipedia.org/wiki/Merneptah_Stele" },
        { label: "Wikipedia, \"Ketef Hinnom\"", url: "https://en.wikipedia.org/wiki/Ketef_Hinnom" },
      ]}
    >
      <RangeChart
        min={-3700}
        max={2000}
        ticks={[-3500, -2500, -1500, -500, 500, 1500]}
        format={(n) => (n < 0 ? `${-n} BC` : `AD ${n}`)}
        groups={["The oldest evidence", "First millennium BC", "From Jesus onward"]}
        labelWidth={170}
        items={[
          { label: "Sumerian", start: -3500, end: -3300, group: "The oldest evidence", display: "Mid-4th millennium BC", note: "Temples and the first written records of the gods. The religion continued in Babylon and Assyria until the first centuries AD." },
          { label: "Egyptian", start: -3300, end: -3100, group: "The oldest evidence", display: "c. 3300-3100 BC", note: "The earliest known images of a god date to about 3300 BC, and royal cult to the First Dynasty. The Pyramid Texts of c. 2400 BC are the oldest large body of Egyptian religious writing." },
          { label: "Hinduism (Vedic roots)", start: -1500, end: -1000, group: "The oldest evidence", display: "c. 1500-1000 BC", note: "The Rigveda, oral at first. Hindu tradition regards its truths as eternal, and the classical form took shape later." },
          { label: "Zoroastrianism", start: -1500, end: -1000, group: "The oldest evidence", display: "c. 1500-1000 BC", note: "Dated by the language of the Gathas. Many now favour a date close to 1000 BC." },
          { label: "Israel's religion", start: -1208, group: "The oldest evidence", display: "c. 1208 BC", note: "The Merneptah Stele is the first mention of Israel. The oldest surviving biblical text, the Ketef Hinnom scrolls, dates to c. 600 BC. Tradition places Abraham c. 2000 BC and Moses in the 15th or 13th century BC." },
          { label: "Buddhism", start: -600, end: -400, group: "First millennium BC", display: "6th-4th c. BC" },
          { label: "Jainism", start: -600, end: -500, group: "First millennium BC", display: "6th c. BC" },
          { label: "Confucianism", start: -551, end: -479, group: "First millennium BC", display: "6th-5th c. BC" },
          { label: "Taoism", start: -600, end: -500, group: "First millennium BC", display: "6th c. BC (traditional)" },
          { label: "Christianity", start: 30, end: 33, group: "From Jesus onward", display: "c. AD 30" },
          { label: "Islam", start: 610, group: "From Jesus onward", display: "AD 610" },
          { label: "Sikhism", start: 1500, group: "From Jesus onward", display: "c. 1500" },
          { label: "Latter-day Saints", start: 1830, group: "From Jesus onward", display: "1830" },
          { label: "Bahá'í Faith", start: 1844, end: 1863, group: "From Jesus onward", display: "1844-63" },
          { label: "Jehovah's Witnesses", start: 1876, end: 1879, group: "From Jesus onward", display: "1870s" },
          { label: "Rastafari", start: 1930, end: 1939, group: "From Jesus onward", display: "1930s" },
          { label: "Wicca and Scientology", start: 1950, end: 1959, group: "From Jesus onward", display: "1950s" },
        ]}
      />
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        <div className="viz-info rounded-lg border p-3">
          <div className="text-sm font-semibold">What the evidence measures</div>
          <p className="text-[13px] leading-relaxed mt-1 text-[color:var(--viz-ink-2)]">
            Historians can only date a religion from what survives: writing, temples and inscriptions. Sumer and Egypt developed writing and monumental building first, so their religions are the first to appear. Israel was a small people who enter the written record late. This dates the records, and it is the reason Israel&apos;s religion is not placed first.
          </p>
        </div>
        <div className="viz-info rounded-lg border p-3">
          <div className="text-sm font-semibold">What the Bible claims</div>
          <ul className="mt-1 space-y-1.5 list-none p-0 text-[13px] leading-relaxed text-[color:var(--viz-ink-2)]">
            {SCRIPTURE_CLAIMS.map((c) => (
              <li key={c.ref}>
                <Rich text={c.text} />
              </li>
            ))}
          </ul>
          <p className="text-[13px] leading-relaxed mt-2 text-[color:var(--viz-ink-2)]">
            The claim is that the God Israel came to worship is older than Israel and every other religion, because he was known before any of them. That lies before writing, so archaeology can neither confirm nor refute it.
          </p>
        </div>
      </div>
    </VisualCard>
  )
}

function AncientGallery() {
  return (
    <VisualCard title="The two oldest religions on record" subtitle="A worshipper from Sumer, placed in a temple to pray on the owner's behalf, and the Egyptian judgment of the dead.">
      <Gallery
        columns={2}
        images={[
          {
            src: "/images/religions/worshipper.jpg",
            width: 800,
            height: 1267,
            alt: "Small stone statue of a standing man with clasped hands and wide eyes",
            caption: "A Sumerian worshipper, Early Dynastic period (c. 2900-2350 BC), Metropolitan Museum of Art.",
            credit: "Metropolitan Museum of Art",
            license: "CC0",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Standing_male_worshiper_MET_DT850.jpg",
          },
          {
            src: "/images/religions/hunefer.jpg",
            width: 1000,
            height: 771,
            alt: "Egyptian papyrus painting of a heart being weighed against a feather",
            caption: "The weighing of the heart, Papyrus of Hunefer, c. 1300 BC, British Museum.",
            credit: "Hunefer",
            license: "Public domain",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:BD_Hunefer_cropped_1.jpg",
          },
        ]}
      />
    </VisualCard>
  )
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  shares: Shares,
  map: ReligionMap,
  comparison: Comparison,
  timeline: Timeline,
  "ancient-gallery": AncientGallery,
}

export default function Visuals({ name }: { readonly name: string }) {
  const V = VISUALS[name]
  return V ? <V /> : null
}
