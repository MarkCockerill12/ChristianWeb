"use client"

import { CompareTable, VisualCard } from "@/components/visuals/kit"

function Table() {
  return (
    <VisualCard title="The classic errors at a glance" subtitle="What each one claims, and the text it runs against. The sections below give the history and the reply.">
      <CompareTable
        minWidth="44rem"
        compact
        columns={[
          { key: "name", label: "Error" },
          { key: "claim", label: "What it claims" },
          { key: "text", label: "Against" },
        ]}
        rows={[
          { name: "Tritheism", claim: "Three gods", text: "Deuteronomy 6:4" },
          { name: "Modalism", claim: "One person in three modes", text: "Matthew 3:16-17" },
          { name: "Partialism", claim: "Each person is a third of God", text: "Colossians 2:9" },
          { name: "Patripassianism", claim: "The Father suffered on the cross", text: "Luke 23:46" },
          { name: "Arianism", claim: "The Son is a created being", text: "John 1:1-3" },
          { name: "Adoptionism", claim: "Jesus was a man adopted by God", text: "John 1:14" },
          { name: "Docetism", claim: "Jesus only seemed human", text: "1 John 4:2-3" },
          { name: "Apollinarianism", claim: "A human body with a divine mind", text: "Hebrews 2:17" },
          { name: "Nestorianism", claim: "Jesus is two persons", text: "John 1:14" },
          { name: "Monophysitism", claim: "His humanity was absorbed", text: "Hebrews 4:15" },
          { name: "Monothelitism", claim: "Christ had only a divine will", text: "Luke 22:42" },
          { name: "Pelagianism", claim: "We can obey without grace", text: "Ephesians 2:8-9" },
          { name: "Gnosticism", claim: "Secret knowledge saves; matter is evil", text: "Genesis 1:31" },
          { name: "Marcionism", claim: "The Old Testament God is another god", text: "Malachi 3:6" },
        ]}
      />
    </VisualCard>
  )
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  table: Table,
}

export default function Visuals({ name }: { readonly name: string }) {
  const V = VISUALS[name]
  return V ? <V /> : null
}
