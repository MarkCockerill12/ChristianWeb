"use client"

import { CompareTable, VisualCard } from "@/components/visuals/kit"

const WIKI = (page: string, label = page.replace(/_/g, " ")) => ({ label: `Wikipedia, "${label}"`, url: `https://en.wikipedia.org/wiki/${page}` })

const STAGES = [
  ["About week 2", "Fertilisation", "A new organism, with its own genetic identity"],
  ["Week 5", "Heart tube pulsing", "The neural tube forms too"],
  ["Week 6", "Limb buds", "Circulation begins, and pulses can usually be seen on ultrasound"],
  ["Week 8", "Major organs developing", "Hands and feet are web-like, and the eyes become visible"],
  ["Week 10", "Fingers and toes", "Fully formed, with fingernails beginning"],
  ["Week 11", "Movement", "Opening and closing fists and mouth"],
  ["Week 22", "Hearing", "Can hear the mother's heartbeat and touch the umbilical cord"],
  ["Week 23", "Possible survival", "May survive outside the womb with intensive care"],
] as const

function Development() {
  return (
    <VisualCard
      title="Before birth, week by week"
      subtitle="Stages in the weeks of pregnancy as doctors count them, from the first day of the last period, so fertilisation comes at about week 2."
      note="Survival from week 23 needs intensive care and carries high risks. The earliest pulsing is that of a heart tube, not yet a fully formed heart."
      sources={[
        { label: "Cleveland Clinic, \"Fetal Development: Stages of Growth\"", url: "https://my.clevelandclinic.org/health/articles/7247-fetal-development-stages-of-growth" },
        { label: "American College of Obstetricians and Gynecologists, \"How Your Fetus Grows During Pregnancy\"", url: "https://www.acog.org/womens-health/faqs/how-your-fetus-grows-during-pregnancy" },
        WIKI("Human_embryonic_development"),
      ]}
    >
      <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4 list-none p-0 m-0">
        {STAGES.map(([week, title, body]) => (
          <li key={title} className="viz-step rounded-lg border p-3">
            <div className="text-[12px] font-semibold text-[color:var(--viz-muted)]">{week}</div>
            <div className="font-semibold text-sm leading-snug">{title}</div>
            <div className="text-[13px] leading-relaxed mt-1 text-[color:var(--viz-ink-2)]">{body}</div>
          </li>
        ))}
      </ol>
    </VisualCard>
  )
}

function Cases() {
  return (
    <VisualCard
      title="Situations that are often run together"
      subtitle="Much of the argument about abortion turns on treating very different cases as though they were one. Each is examined in the sections below."
    >
      <CompareTable
        minWidth="48rem"
        compact
        columns={[
          { key: "s", label: "Situation" },
          { key: "life", label: "Mother's life at risk?" },
          { key: "reason", label: "Christian reasoning" },
        ]}
        rows={[
          { s: "Ectopic pregnancy", life: "@yes", reason: "The child cannot survive and the mother may die. Treatment saves the one life that can be saved. Not murder." },
          { s: "Sepsis or severe pre-eclampsia before the baby can live outside the womb", life: "@yes", reason: "A doctor acts to save the mother when otherwise both may die. Not murder." },
          { s: "Treating a miscarriage", life: "@partial Sometimes", reason: "The child has already died. Not an abortion at all, and the mother needs comfort." },
          { s: "Pregnancy after rape", life: "@no Not of itself", reason: "A terrible wrong to the mother, and the child is also innocent. She is owed protection, justice and care." },
          { s: "A diagnosis of disability", life: "@no Not of itself", reason: "Worth is given by God, not by ability. The family needs long-term support." },
          { s: "Poverty, fear or lack of support", life: "@no", reason: "The most common reasons given. Real pressures that the church can do something about." },
        ]}
      />
    </VisualCard>
  )
}

function Positions() {
  return (
    <VisualCard
      title="Where the churches stand"
      subtitle="The historic Christian traditions oppose abortion and differ over how to reason about a threat to the mother's life. Some mainline Protestant bodies have taken more permissive positions."
      sources={[
        { label: "Catechism of the Catholic Church 2270-2275", url: "https://www.vatican.va/archive/ENG0015/__P7Z.HTM" },
        { label: "Southern Baptist Convention, \"Resolution on Abortion and Infanticide\"", url: "https://www.sbc.net/resource-library/resolutions/resolution-on-abortion-and-infanticide/" },
        { label: "Mitchell and Land, Public Discourse (2021)", url: "https://www.thepublicdiscourse.com/2021/06/76465/" },
        { label: "Logia, \"Moral Action in the Face of Life-Threatening Pregnancies\"", url: "https://logia.org/logia-online/511" },
        WIKI("Christian_views_on_abortion"),
      ]}
    >
      <CompareTable
        minWidth="44rem"
        compact
        columns={[
          { key: "t", label: "Tradition" },
          { key: "general", label: "In general" },
          { key: "mother", label: "When the mother's life is at risk" },
        ]}
        rows={[
          { t: "Roman Catholic", general: "Direct abortion is always gravely wrong", mother: "Treatment of the mother that has the child's death as an unintended result is allowed (double effect)" },
          { t: "Southern Baptist", general: "Opposed", mother: "Long-standing resolutions except saving the physical life of the mother; a 2021 resolution omitted this and was criticised for it" },
          { t: "Confessional Lutheran", general: "Opposed", mother: "Saving the mother distinguished from murder; every effort made for a baby who could survive (Grobien, *Logia*)" },
          { t: "Some mainline Protestants", general: "Accept abortion more widely", mother: "Allowed" },
        ]}
      />
    </VisualCard>
  )
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  development: Development,
  cases: Cases,
  positions: Positions,
}

export default function Visuals({ name }: { readonly name: string }) {
  const V = VISUALS[name]
  return V ? <V /> : null
}
