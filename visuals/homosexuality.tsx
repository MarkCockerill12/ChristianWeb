"use client"

import { CardGrid, CompareTable, Rich, VisualCard } from "@/components/visuals/kit"
import { SERIES } from "@/components/visuals/charts"

/** One line of Greek with the words that matter picked out in the same colours throughout. */
function GreekLine({
  label,
  parts,
  gloss,
}: {
  readonly label: string
  readonly parts: ReadonlyArray<readonly [text: string, key?: "arsen" | "koite" | "compound"]>
  readonly gloss: string
}) {
  const color = { arsen: SERIES[0], koite: SERIES[1], compound: SERIES[6] } as const
  return (
    <div className="viz-info rounded-lg border p-3">
      <Rich as="div" text={label} className="text-[12px] font-semibold text-[color:var(--viz-muted)]" />
      <div className="mt-1 text-lg leading-relaxed" lang="grc">
        {parts.map(([t, k], i) =>
          k ? (
            <span key={i} className="font-semibold rounded px-0.5" style={{ boxShadow: `inset 0 -3px 0 ${color[k]}` }}>
              {t}
            </span>
          ) : (
            <span key={i}>{t}</span>
          ),
        )}
      </div>
      <Rich as="div" text={gloss} className="text-[13px] mt-1 text-[color:var(--viz-ink-2)]" />
    </div>
  )
}

function Coinage() {
  return (
    <VisualCard
      title="How Paul's word was built"
      subtitle="The Greek Old Testament of Leviticus 18:22 and 20:13 puts *arsenos* (male) beside *koitēn* (bed, lying). 1 Corinthians 6:9 joins the two into one word, *arsenokoitai*, found nowhere earlier in surviving Greek."
      sources={[
        { label: "Wikipedia, \"Arsenokoites\"", url: "https://en.wikipedia.org/wiki/Arsenokoites" },
        { label: "Bible Hub, Greek 733 (arsenokoités)", url: "https://biblehub.com/greek/733.htm" },
      ]}
    >
      <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3 text-xs text-[color:var(--viz-ink-2)]">
        <span className="inline-flex items-center gap-1.5"><span className="h-1 w-4 rounded" style={{ background: SERIES[0] }} />arsen-: male</span>
        <span className="inline-flex items-center gap-1.5"><span className="h-1 w-4 rounded" style={{ background: SERIES[1] }} />koitē: bed</span>
        <span className="inline-flex items-center gap-1.5"><span className="h-1 w-4 rounded" style={{ background: SERIES[6] }} />the compound</span>
      </div>
      <div className="grid gap-3">
        <GreekLine
          label="Leviticus 18:22, Septuagint"
          parts={[["καὶ μετὰ "], ["ἄρσενος", "arsen"], [" οὐ κοιμηθήσῃ "], ["κοίτην", "koite"], [" γυναικός"]]}
          gloss={"\"And with a male you shall not lie the lying of a woman.\""}
        />
        <GreekLine
          label="Leviticus 20:13, Septuagint"
          parts={[["καὶ ὃς ἂν κοιμηθῇ μετὰ "], ["ἄρσενος", "arsen"], [" "], ["κοίτην", "koite"], [" γυναικός"]]}
          gloss={"\"And whoever lies with a male the lying of a woman...\""}
        />
        <GreekLine
          label="1 Corinthians 6:9 (also 1 Timothy 1:10)"
          parts={[["οὔτε μαλακοὶ οὔτε "], ["ἀρσενο", "arsen"], ["κοῖται", "koite"]]}
          gloss={"\"...nor *malakoi* nor *arsenokoitai*...\""}
        />
      </div>
    </VisualCard>
  )
}

function Words() {
  return (
    <VisualCard
      title="The two disputed words"
      subtitle="The traditional reading set out in the sections below, and the alternatives it answers."
      sources={[
        { label: "Wikipedia, \"Arsenokoites\"", url: "https://en.wikipedia.org/wiki/Arsenokoites" },
        { label: "Bible Hub, Greek 3120 (malakos)", url: "https://biblehub.com/greek/3120.htm" },
      ]}
    >
      <CardGrid
        columns={2}
        cards={[
          { kicker: "Arsenokoitai", title: "Men who lie with males", body: "Formed from the Levitical prohibition, so its sense is set by those texts: male same-sex intercourse as such.", footer: "**Proposed alternatives:** male prostitutes; exploitative pederasts. Greek had ordinary words for both, and Paul used neither." },
          { kicker: "Malakoi", title: "Literally \"soft ones\"", body: "Beside *arsenokoitai*, read as the passive partner, so that the pair covers both roles. The KJV has \"effeminate\".", footer: "**Proposed alternatives:** men of soft, self-indulgent character; male prostitutes. The word's wider range is the reason it is less decisive than *arsenokoitai*." },
        ]}
      />
    </VisualCard>
  )
}

function Denominations() {
  return (
    <VisualCard
      title="Where the churches stand"
      subtitle="Changes in recent decades, and the largest bodies that keep the historic teaching that marriage is between a man and a woman."
      sources={[
        { label: "Wikipedia, \"Christian denominational positions on homosexuality\"", url: "https://en.wikipedia.org/wiki/Christian_denominational_positions_on_homosexuality" },
        { label: "Church of England, \"Prayers asking for God's blessing for same-sex couples\"", url: "https://www.churchofengland.org/life-events/your-church-wedding/just-engaged/prayers-asking-gods-blessing-same-sex-couples" },
        { label: "Wikipedia, \"Southern Baptist Convention\"", url: "https://en.wikipedia.org/wiki/Southern_Baptist_Convention" },
      ]}
    >
      <CompareTable
        minWidth="44rem"
        compact
        initialSort="year"
        filterKeys={["position"]}
        columns={[
          { key: "year", label: "Year", numeric: true },
          { key: "body", label: "Church" },
          { key: "what", label: "What happened" },
          { key: "position", label: "Position" },
        ]}
        rows={[
          { year: "2003", body: "Episcopal Church (US)", what: "Consecrated Gene Robinson, a partnered gay man, as Bishop of New Hampshire", position: "Changed" },
          { year: "2009", body: "Evangelical Lutheran Church in America", what: "Allowed clergy in committed same-sex relationships", position: "Changed" },
          { year: "2015", body: "Presbyterian Church (USA)", what: "Redefined marriage as between \"two people\" after presbytery votes", position: "Changed" },
          { year: "2023", body: "Church of England", what: "Bishops commended Prayers of Love and Faith for blessing same-sex couples; clergy cannot marry them", position: "Partly changed" },
          { year: "2023", body: "Catholic Church", what: "*Fiducia supplicans* allows non-liturgical blessings of couples that do not \"resemble marriage\"; the doctrine of marriage is unchanged", position: "Teaching kept" },
          { year: "2024", body: "United Methodist Church", what: "Removed the bans on same-sex weddings and gay clergy, after many traditional churches had left to form the Global Methodist Church", position: "Changed" },
          { year: "Ongoing", body: "Eastern Orthodox churches", what: "Marriage is the union of a man and a woman", position: "Teaching kept" },
          { year: "Ongoing", body: "Southern Baptist Convention", what: "Affiliated churches deny the legitimacy of same-sex marriage", position: "Teaching kept" },
          { year: "Ongoing", body: "Lutheran Church-Missouri Synod; Presbyterian Church in America", what: "Do not permit same-sex marriage", position: "Teaching kept" },
        ]}
      />
    </VisualCard>
  )
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  coinage: Coinage,
  words: Words,
  denominations: Denominations,
}

export default function Visuals({ name }: { readonly name: string }) {
  const V = VISUALS[name]
  return V ? <V /> : null
}
