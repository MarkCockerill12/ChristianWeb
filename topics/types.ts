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
  subtopics?: Array<{
    id: string
    title: string
    tags: string[]
    content: string
  }>
}
