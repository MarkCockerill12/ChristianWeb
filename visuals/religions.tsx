"use client"

import { BarChart, RangeChart } from "@/components/visuals/charts"
import { CompareTable, VisualCard } from "@/components/visuals/kit"
import { WorldMap } from "@/components/visuals/geo"
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
  ["judaism", "Judaism", "Abrahamic", "One God", "c. 2000-1200 BC (traditional)", "Abraham; Moses", "Not the Messiah"],
  ["islam", "Islam", "Abrahamic", "One God", "c. AD 610", "Muhammad", "A prophet, not divine and not crucified"],
  ["sufism", "Sufism", "Abrahamic", "One God", "8th century AD", "Mystical stream within Islam", "As in Islam"],
  ["alevism", "Alevism", "Abrahamic", "One God", "13th-16th centuries", "No single founder", "As in Islam"],
  ["bahai", "Bahá'í Faith", "Abrahamic", "One God", "1844-1863", "The Báb; Bahá'u'lláh", "One of a line of messengers"],
  ["mormonism", "Latter-day Saints", "Restorationist", "Godhead of three separate beings", "1830", "Joseph Smith", "Divine Son, the firstborn spirit child of Heavenly Father"],
  ["jehovahswitnesses", "Jehovah's Witnesses", "Restorationist", "One God, non-Trinitarian", "Late 1870s", "Charles Taze Russell", "A created being, the archangel Michael"],
  ["christianscience", "Christian Science", "Restorationist", "God as wholly spiritual", "1879", "Mary Baker Eddy", "A man who embodied the divine Christ idea"],
  ["rastafarianism", "Rastafari", "Abrahamic", "One God (Jah)", "1930s", "Inspired by Marcus Garvey", "Haile Selassie seen as Christ returned"],
  ["zoroastrianism", "Zoroastrianism", "Iranian", "One God (Ahura Mazda)", "c. 1500-1000 BC (scholarly)", "Zoroaster", "@na"],
  ["hinduism", "Hinduism", "Dharmic", "Many gods; ultimate Brahman", "c. 1500-500 BC", "No founder", "No set view"],
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
      title="All 26 religions compared"
      subtitle="The religions examined below, side by side. Filter by family or search; the names under the table open each religion's full section."
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

function Timeline() {
  return (
    <VisualCard
      title="When the religions began"
      subtitle="Approximate origins as given in each section, on one axis. Several dates are traditional or disputed; ranges show the span scholars propose."
    >
      <RangeChart
        min={-2100}
        max={2000}
        ticks={[-2000, -1000, 1, 1000, 2000]}
        format={(n) => (n < 0 ? `${-n} BC` : n === 1 ? "AD 1" : `AD ${n}`)}
        groups={["Abrahamic and Iranian", "Dharmic", "East Asian", "New movements"]}
        labelWidth={170}
        items={[
          { label: "Judaism", start: -2000, end: -1200, group: "Abrahamic and Iranian", display: "c. 2000-1200 BC" },
          { label: "Zoroastrianism", start: -1500, end: -1000, group: "Abrahamic and Iranian", display: "c. 1500-1000 BC" },
          { label: "Hinduism", start: -1500, end: -500, group: "Dharmic", display: "c. 1500-500 BC" },
          { label: "Buddhism", start: -600, end: -400, group: "Dharmic", display: "6th-4th c. BC" },
          { label: "Jainism", start: -600, end: -500, group: "Dharmic", display: "6th c. BC" },
          { label: "Confucianism", start: -551, end: -479, group: "East Asian", display: "6th-5th c. BC" },
          { label: "Taoism", start: -600, end: -500, group: "East Asian", display: "6th c. BC (traditional)" },
          { label: "Christianity", start: 30, end: 33, group: "Abrahamic and Iranian", display: "c. AD 30" },
          { label: "Islam", start: 610, group: "Abrahamic and Iranian", display: "AD 610" },
          { label: "Sikhism", start: 1500, group: "Dharmic", display: "c. 1500" },
          { label: "Latter-day Saints", start: 1830, group: "New movements", display: "1830" },
          { label: "Bahá'í Faith", start: 1844, end: 1863, group: "Abrahamic and Iranian", display: "1844-63" },
          { label: "Jehovah's Witnesses", start: 1876, end: 1879, group: "New movements", display: "1870s" },
          { label: "Christian Science", start: 1879, group: "New movements", display: "1879" },
          { label: "Rastafari", start: 1930, end: 1939, group: "New movements", display: "1930s" },
          { label: "Wicca", start: 1950, end: 1959, group: "New movements", display: "1950s" },
          { label: "Scientology", start: 1953, end: 1954, group: "New movements", display: "1953-54" },
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
}

export default function Visuals({ name }: { readonly name: string }) {
  const V = VISUALS[name]
  return V ? <V /> : null
}
