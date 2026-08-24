import type { Topic } from "./types"

import { archaeological } from "./archaeological"
import { BAPTISM } from "./baptism"
import { BIBLE_BOOKS } from "./bible-books"
import { branches } from "./branches"
import { canon } from "./canon"
import { contradictions } from "./contradictions"
import { DID_GOD_CHANGE } from "./did-god-change"
import { END_TIMES } from "./end-times"
import { EVOLUTION } from "./evolution"
import { tuning } from "./fine-tuning"
import { FREE_WILL } from "./free-will"
import { godEvil } from "./godEvil"
import { hell } from "./hell"
import { HOMOSEXUALITY } from "./homosexuality"
import { jesus } from "./jesus"
import { LAZARUS } from "./lazarus"
import { miracles } from "./miracles"
import { morality } from "./morality"
import { nasa } from "./nasa"
import { problemOfEvil } from "./problem-of-evil"
import { prophecy } from "./prophecy"
import { religions } from "./religions"
import { resurrection } from "./resurrection"
import { science } from "./science"
import { slavery } from "./slavery"
import { TREE_OF_KNOWLEDGE } from "./tree-of-knowledge"
import { trinity } from "./trinity"
import { women } from "./women"
import { prayer } from "./prayer"

export type { Topic, TimelineEvent } from "./types"

/**
 * The single registry of published topics. Adding a topic means adding it here
 * and nowhere else, since routing, the index page and the sitemap all read from this.
 */
export const availableTopics: readonly Topic[] = [
  archaeological,
  BAPTISM,
  BIBLE_BOOKS,
  branches,
  canon,
  contradictions,
  DID_GOD_CHANGE,
  END_TIMES,
  EVOLUTION,
  tuning,
  FREE_WILL,
  godEvil,
  hell,
  HOMOSEXUALITY,
  jesus,
  LAZARUS,
  miracles,
  morality,
  nasa,
  problemOfEvil,
  prophecy,
  religions,
  resurrection,
  science,
  slavery,
  TREE_OF_KNOWLEDGE,
  trinity,
  women,
  prayer,
]

const topicsById = new Map(availableTopics.map((topic) => [topic.id, topic]))

export function getAllTopics(): readonly Topic[] {
  return availableTopics
}

export function getTopicById(id: string): Topic | undefined {
  return topicsById.get(id)
}

export function getTopicsByTag(tag: string): Topic[] {
  const needle = tag.toLowerCase()
  return availableTopics.filter((topic) =>
    topic.tags.some((t) => t.toLowerCase().includes(needle)),
  )
}
