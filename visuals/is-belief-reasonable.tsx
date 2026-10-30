"use client"

import { CompareTable, VisualCard } from "@/components/visuals/kit"

function Objections() {
  return (
    <VisualCard title="The objections in brief" subtitle="Each one suggests that belief can be explained away, and each is answered in full in the sections below.">
      <CompareTable
        minWidth="40rem"
        compact
        columns={[
          { key: "claim", label: "Objection" },
          { key: "reply", label: "The reply in a line" },
        ]}
        rows={[
          { claim: "You were just born into it", reply: "That applies equally to unbelief, and how a belief arose does not show it is false." },
          { claim: "One god less than you", reply: "Rejecting other gods for specific reasons does not rule out every god." },
          { claim: "God is wish fulfilment", reply: "Atheism could be a wish too, and wanting something does not make it unreal." },
          { claim: "Belief simply evolved", reply: "Describing how a tendency works does not decide whether it points to something real." },
          { claim: "It's just brain activity", reply: "All experience involves the brain, including seeing things that are really there." },
          { claim: "Faith means no evidence", reply: "Biblical faith is trust based on what is known." },
          { claim: "The teapot in space", reply: "A teapot explains nothing, while God is offered as an explanation of why anything exists." },
          { claim: "Who made God?", reply: "The argument concerns what begins to exist, and God is defined as eternal." },
          { claim: "Occam's razor", reply: "It applies only between explanations that account equally well for the facts." },
        ]}
      />
    </VisualCard>
  )
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  objections: Objections,
}

export default function Visuals({ name }: { readonly name: string }) {
  const V = VISUALS[name]
  return V ? <V /> : null
}
