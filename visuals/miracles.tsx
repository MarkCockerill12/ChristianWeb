"use client"

import { ColumnChart, ForestPlot } from "@/components/visuals/charts"
import { CompareTable, StepStrip, VisualCard } from "@/components/visuals/kit"

/* Recognition years from the sanctuary's published list (70 dated entries),
   plus John Traynor (2024) and Antonia Raco (2025). */
const BY_DECADE: ReadonlyArray<readonly [string, number]> = [
  ["1860s", 7], ["1870s", 0], ["1880s", 0], ["1890s", 0], ["1900s", 23], ["1910s", 10], ["1920s", 0], ["1930s", 0],
  ["1940s", 3], ["1950s", 13], ["1960s", 6], ["1970s", 2], ["1980s", 1], ["1990s", 1], ["2000s", 1], ["2010s", 3], ["2020s", 2],
]

function Lourdes() {
  return (
    <VisualCard
      title="72 recognised healings out of more than 7,000 reported"
      subtitle="Lourdes healings recognised as miraculous by the Church, by decade of recognition. Recognitions cluster in two periods, 1907-1913 and 1946-1965, and have been rare since."
      note="Cures are examined by the sanctuary's Medical Bureau before any recognition, and the year of recognition can be decades after the healing itself: John Traynor, healed in 1923, was recognised in 2024."
      sources={[
        { label: "Sanctuary of Our Lady of Lourdes, \"Miraculous healings\" (official list)", url: "https://www.lourdes-france.com/en/miraculous-healings/" },
      ]}
    >
      <ColumnChart
        height={200}
        yLabel="Healings recognised in each decade"
        data={BY_DECADE.map(([label, value]) => ({ label: label.slice(0, 4), value, display: `${value} in the ${label}` }))}
      />
    </VisualCard>
  )
}

function Trials() {
  return (
    <VisualCard
      title="Controlled trials of distant intercessory prayer"
      subtitle="The main randomised trials and the Cochrane review that pooled them. Byrd and Harris reported benefits on composite scores; the larger later trials found none."
      sources={[
        { label: "Byrd, Southern Medical Journal 81 (1988): 826-9", url: "https://pubmed.ncbi.nlm.nih.gov/3393937/" },
        { label: "Harris et al., Archives of Internal Medicine 159 (1999): 2273-8", url: "https://pubmed.ncbi.nlm.nih.gov/10547166/" },
        { label: "Krucoff et al. (MANTRA II), The Lancet 366 (2005): 211-7", url: "https://pubmed.ncbi.nlm.nih.gov/16023511/" },
        { label: "Benson et al. (STEP), American Heart Journal 151 (2006): 934-42", url: "https://pubmed.ncbi.nlm.nih.gov/16569567/" },
        { label: "Roberts et al., Cochrane Database of Systematic Reviews (2009), CD000368", url: "https://pubmed.ncbi.nlm.nih.gov/19370557/" },
      ]}
    >
      <CompareTable
        minWidth="46rem"
        compact
        initialSort="year"
        columns={[
          { key: "study", label: "Study" },
          { key: "year", label: "Year", numeric: true },
          { key: "n", label: "Patients", numeric: true },
          { key: "setting", label: "Setting" },
          { key: "result", label: "Result" },
        ]}
        rows={[
          { study: "Byrd", year: "1988", n: "393", setting: "Coronary care unit, San Francisco", result: "@yes Lower severity score in the prayed-for group" },
          { study: "Harris et al.", year: "1999", n: "990", setting: "Coronary care unit, Kansas City", result: "@partial Lower course score; no difference in length of stay" },
          { study: "MANTRA II", year: "2005", n: "748", setting: "Cardiac catheterisation, nine US centres", result: "@no No significant difference" },
          { study: "STEP", year: "2006", n: "1,802", setting: "Heart bypass surgery, six US hospitals", result: "@no No benefit; worse outcomes for those told they were prayed for" },
          { study: "Cochrane review", year: "2009", n: "7,646", setting: "Ten trials pooled", result: "@no \"No clear effect\" on death or clinical state" },
        ]}
      />
      <div className="mt-5">
        <div className="text-[12px] font-semibold text-[color:var(--viz-muted)] mb-1">Relative risk with 95% confidence interval (left of 1 favours prayer)</div>
        <ForestPlot
          metric="RR"
          nullValue={1}
          min={0.4}
          max={1.6}
          ticks={[0.5, 0.75, 1, 1.25, 1.5]}
          leftLabel="favours prayer"
          rightLabel="favours no prayer"
          studies={[
            { label: "STEP: prayed for vs not", detail: "Complications after surgery", estimate: 1.02, low: 0.92, high: 1.15 },
            { label: "STEP: told vs not told", detail: "Complications, patients certain they were prayed for", estimate: 1.14, low: 1.02, high: 1.28 },
            { label: "Cochrane: 6 trials", detail: "Death, random-effects pooled estimate", estimate: 0.77, low: 0.51, high: 1.16 },
          ]}
        />
      </div>
    </VisualCard>
  )
}

function Ladder() {
  return (
    <VisualCard
      title="What makes a healing claim strong"
      subtitle="The standard of evidence described in the section on assessing the evidence, as a ladder: each rung rules out an explanation the one below cannot."
    >
      <StepStrip
        steps={[
          { label: "Weakest", title: "A testimony", body: "Sincere, but open to misdiagnosis, remission and embellishment." },
          { label: "Better", title: "Records before", body: "A diagnosis documented before the event, not reconstructed afterwards." },
          { label: "Stronger", title: "Records after", body: "Examination showing the change, by doctors not involved in the claim." },
          { label: "Stronger still", title: "Time", body: "Years without relapse, ruling out a temporary remission." },
          { label: "Strongest", title: "An irreversible condition", body: "Destroyed bone reforming or a malignant tumour regressing without treatment." },
        ]}
      />
    </VisualCard>
  )
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  lourdes: Lourdes,
  trials: Trials,
  ladder: Ladder,
}

export default function Visuals({ name }: { readonly name: string }) {
  const V = VISUALS[name]
  return V ? <V /> : null
}
