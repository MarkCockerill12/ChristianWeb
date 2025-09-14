export interface TimelineEvent {
  id: number
  date: string
  title: string
  period: string
  color: string
  description: string
  significance: string
}

export interface Topic {
  id: string
  title: string
  description: string
  content: string
  verses: string[]
  sources: string[]
  lastUpdated: string
  tags: string[]
  icon?: string
  color?: string
  tldr?: string
  timeline?: TimelineEvent[]
  subtopics?: Array<{
    id: string
    title: string
    tags: string[]
    content: string
  }>
}
