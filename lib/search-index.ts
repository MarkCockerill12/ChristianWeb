import { getAllTopics } from "@/topics"

export interface SearchEntry {
  /** Topic id, used for the link. */
  readonly t: string
  /** Topic title. */
  readonly tt: string
  /** Section id, when the entry is one section of a topic. */
  readonly s?: string
  /** Title of the section, or of the topic when `s` is absent. */
  readonly h: string
  /** Plain text to search and to show in the snippet. */
  readonly x: string
}

/** Reduces topic markup to the words a reader sees. */
export function plainText(markup: string): string {
  return markup
    .replace(/<p><strong>See also:<\/strong>.*?<\/p>/g, " ")
    .replace(/\*\*See also:\*\*.*/g, " ")
    .replace(/<\?viz[^?]*\?>/g, " ")
    .replace(/\[\^[^\]]+\]/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/[*#`]/g, "")
    .replace(/&[a-z]+;/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

export function buildSearchIndex(): SearchEntry[] {
  const entries: SearchEntry[] = []
  for (const topic of getAllTopics()) {
    const questions = (topic.questions ?? []).map((q) => `${q.claim} ${q.asks.join(" ")} ${q.point}`).join(" ")
    entries.push({
      t: topic.id,
      tt: topic.title,
      h: topic.title,
      x: plainText(`${topic.description} ${topic.tldr ?? ""} ${topic.content} ${questions}`),
    })
    for (const sub of topic.subtopics ?? []) {
      entries.push({ t: topic.id, tt: topic.title, s: sub.id, h: sub.title, x: plainText(sub.content) })
    }
  }
  return entries
}
