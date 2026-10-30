"use client"

import { CompareTable, VisualCard } from "@/components/visuals/kit"

function Reforms() {
  return (
    <VisualCard
      title="What changed, and who drove it"
      subtitle="A few of the changes in which Christians played a leading part. Others often worked alongside them, and other Christians were sometimes on the wrong side."
    >
      <CompareTable
        minWidth="46rem"
        compact
        columns={[
          { key: "area", label: "Area" },
          { key: "before", label: "Before" },
          { key: "who", label: "Christians involved" },
          { key: "when", label: "When" },
        ]}
        rows={[
          { area: "Public hospitals", before: "Care mostly for soldiers, slaves or those who could pay", who: "Basil of Caesarea and the Byzantine church", when: "4th century" },
          { area: "Unwanted babies", before: "Exposure was common and legal", who: "Early church teaching, then Christian emperors", when: "4th century" },
          { area: "Gladiator games", before: "Mass public entertainment", who: "Tertullian's condemnation, then Honorius", when: "3rd to 5th centuries" },
          { area: "Slave trade", before: "Legal across the British Empire", who: "Quakers, Wilberforce and the Clapham Sect", when: "1787 to 1807" },
          { area: "Prisons", before: "Disease and disorder in English jails", who: "John Howard, Elizabeth Fry", when: "18th to 19th centuries" },
          { area: "Child labour", before: "Children in mines and mills", who: "Lord Shaftesbury", when: "19th century" },
          { area: "Widow burning in India", before: "A practised custom", who: "William Carey and others, with Indian reformers", when: "Banned 1829" },
          { area: "War wounded", before: "No neutral relief", who: "Henry Dunant and the Red Cross", when: "1863" },
          { area: "The dying", before: "Little specialist care", who: "Cicely Saunders and the hospice movement", when: "1967" },
          { area: "Civil rights", before: "Legal segregation in the American South", who: "Martin Luther King Jr. and Black churches", when: "1950s and 60s" },
        ]}
      />
    </VisualCard>
  )
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  reforms: Reforms,
}

export default function Visuals({ name }: { readonly name: string }) {
  const V = VISUALS[name]
  return V ? <V /> : null
}
