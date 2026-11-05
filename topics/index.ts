import type { Topic } from "./types"

import { ABORTION } from "./abortion"
import { PHILOSOPHY } from "./philosophy"
import { PSYCHOSIS } from "./psychosis"
import { HERESIES } from "./heresies-and-fallacies"
import { CHRISTIANITY_AND_THE_WORLD } from "./christianity-and-the-world"
import { archaeological } from "./archaeological"
import { BAPTISM } from "./baptism"
import { BIBLE_BOOKS } from "./bible-books"
import { BIBLE_TRANSLATIONS } from "./bible-translations"
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
import { IS_BELIEF_REASONABLE } from "./is-belief-reasonable"
import { ISLAM } from "./islam"
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
import { PAGAN_ORIGINS } from "./pagan-origins"
import { RELATED_TOPICS, TOPIC_LEVELS } from "./extras/organisation"
import { HEROES } from "./extras/heroes"
import { QUESTIONS } from "./extras/questions"

export type { Topic } from "./types"

/**
 * The single registry of published topics. Adding a topic means adding it here
 * and nowhere else, since routing, the index page and the sitemap all read from this.
 */
const publishedTopics: readonly Topic[] = [

  archaeological,
  BAPTISM,
  CHRISTIANITY_AND_THE_WORLD,
  BIBLE_BOOKS,
  BIBLE_TRANSLATIONS,
  branches,
  canon,
  contradictions,
  DID_GOD_CHANGE,
  END_TIMES,
  EVOLUTION,
  tuning,
  FREE_WILL,
  godEvil,
  HERESIES,
  hell,
  HOMOSEXUALITY,
  IS_BELIEF_REASONABLE,
  ISLAM,
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
  PAGAN_ORIGINS,
  PHILOSOPHY,
  PSYCHOSIS,
  ABORTION,
]

/** Banner pictures, challenge questions and levels are kept apart from the prose and joined here. */
const joinedTopics: readonly Topic[] = publishedTopics.map((topic) => ({
  ...topic,
  hero: HEROES[topic.id],
  questions: QUESTIONS[topic.id],
  level: TOPIC_LEVELS[topic.id],
}))

const joinedById = new Map(joinedTopics.map((topic) => [topic.id, topic]))

const availableTopics: readonly Topic[] = joinedTopics.map((topic) => ({
  ...topic,
  relatedTopics: (RELATED_TOPICS[topic.id] ?? []).flatMap((id) => {
    const related = joinedById.get(id)
    return related ? [{ id, title: related.title, description: related.description }] : []
  }),
}))

const topicsById = new Map(availableTopics.map((topic) => [topic.id, topic]))

export function getAllTopics(): readonly Topic[] {
  return availableTopics
}

export function getTopicById(id: string): Topic | undefined {
  return topicsById.get(id)
}
