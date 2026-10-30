import type { TopicLevel } from "./extras/organisation"

export interface TimelineEvent {
  id: number
  date: string
  title: string
  period: string
  color: string
  description: string
  significance: string
}

export interface TopicHero {
  src: string
  alt: string
  caption: string
  credit: string
  license: string
  sourceUrl: string
  /** CSS object-position, for pictures whose subject is off-centre in the crop. */
  position?: string
  /** Show the whole picture over a blurred copy of itself; for portraits a banner would crop badly. */
  contain?: boolean
}

/** One challenge and the questions that test it, in the manner of Koukl's Columbo tactic. */
export interface ChallengeQuestion {
  claim: string
  asks: string[]
  /** What the questions bring into the open. */
  point: string
  /** Subtopic holding the full answer. */
  section?: string
}

export interface Topic {
  id: string
  title: string
  description: string
  content: string
  verses?: Array<{
    reference: string
    text: string
  }>
  sources: string[]
  lastUpdated: string
  tags: string[]
  icon?: string
  color?: string
  tldr?: string
  hero?: TopicHero
  questions?: ChallengeQuestion[]
  /** How demanding the topic is, shown on its card and page. */
  level?: TopicLevel
  /** Topics to read next, resolved to what the page needs to link to them. */
  relatedTopics?: ReadonlyArray<{ id: string; title: string; description: string }>
  timeline?: TimelineEvent[]
  subtopics?: Array<{
    id: string
    title: string
    tags: string[]
    content: string
  }>
}
