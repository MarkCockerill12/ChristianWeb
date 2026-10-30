"use client"

import dynamic from "next/dynamic"
import type { ComponentType } from "react"

/**
 * Visuals are grouped one module per topic, so a topic page downloads only its
 * own charts. Each module default-exports a component taking the visual's name;
 * a marker `<?viz baptism/acts-order?>` loads visuals/baptism and renders
 * "acts-order" from it.
 */
type TopicVisuals = ComponentType<{ readonly name: string }>

const loading = () => <div className="viz-skeleton my-8 h-40 rounded-xl border" aria-hidden />

const MODULES: Record<string, TopicVisuals> = {
  abortion: dynamic(() => import("@/visuals/abortion"), { loading }),
  "christianity-and-the-world": dynamic(() => import("@/visuals/christianity-and-the-world"), { loading }),
  "is-belief-reasonable": dynamic(() => import("@/visuals/is-belief-reasonable"), { loading }),
  islam: dynamic(() => import("@/visuals/islam"), { loading }),
  archaeological: dynamic(() => import("@/visuals/archaeological"), { loading }),
  baptism: dynamic(() => import("@/visuals/baptism"), { loading }),
  "bible-books": dynamic(() => import("@/visuals/bible-books"), { loading }),
  "bible-translations": dynamic(() => import("@/visuals/bible-translations"), { loading }),
  branches: dynamic(() => import("@/visuals/branches"), { loading }),
  canon: dynamic(() => import("@/visuals/canon"), { loading }),
  contradictions: dynamic(() => import("@/visuals/contradictions"), { loading }),
  "did-god-change": dynamic(() => import("@/visuals/did-god-change"), { loading }),
  "end-times": dynamic(() => import("@/visuals/end-times"), { loading }),
  evolution: dynamic(() => import("@/visuals/evolution"), { loading }),
  "fine-tuning": dynamic(() => import("@/visuals/fine-tuning"), { loading }),
  "free-will": dynamic(() => import("@/visuals/free-will"), { loading }),
  godEvil: dynamic(() => import("@/visuals/god-evil"), { loading }),
  hell: dynamic(() => import("@/visuals/hell"), { loading }),
  homosexuality: dynamic(() => import("@/visuals/homosexuality"), { loading }),
  jesus: dynamic(() => import("@/visuals/jesus"), { loading }),
  lazarus: dynamic(() => import("@/visuals/lazarus"), { loading }),
  miracles: dynamic(() => import("@/visuals/miracles"), { loading }),
  morality: dynamic(() => import("@/visuals/morality"), { loading }),
  nasa: dynamic(() => import("@/visuals/nasa"), { loading }),
  "pagan-origins": dynamic(() => import("@/visuals/pagan-origins"), { loading }),
  prayer: dynamic(() => import("@/visuals/prayer"), { loading }),
  "problem-of-evil": dynamic(() => import("@/visuals/problem-of-evil"), { loading }),
  prophecy: dynamic(() => import("@/visuals/prophecy"), { loading }),
  religions: dynamic(() => import("@/visuals/religions"), { loading }),
  resurrection: dynamic(() => import("@/visuals/resurrection"), { loading }),
  science: dynamic(() => import("@/visuals/science"), { loading }),
  slavery: dynamic(() => import("@/visuals/slavery"), { loading }),
  "tree-of-knowledge": dynamic(() => import("@/visuals/tree-of-knowledge"), { loading }),
  trinity: dynamic(() => import("@/visuals/trinity"), { loading }),
  women: dynamic(() => import("@/visuals/women"), { loading }),
}

export function Visual({ id }: { readonly id: string }) {
  const [topic, name] = id.split("/")
  const Module = MODULES[topic]
  if (!Module || !name) {
    if (process.env.NODE_ENV !== "production") {
      return <div className="my-4 rounded border border-red-400 p-2 text-sm text-red-700">Unknown visual: {id}</div>
    }
    return null
  }
  return <Module name={name} />
}
