/**
 * How the topics are arranged for readers: which group each belongs to, how demanding it
 * is, what to read next, and the suggested first route. Kept apart from the prose and
 * joined in topics/index.ts. scripts/check_extras.ts checks every id here.
 */

export type TopicLevel = "General" | "Specific" | "In depth" | "Scientific"

export const LEVEL_MEANINGS: Record<TopicLevel, string> = {
  General: "A broad question, and a good place to begin",
  Specific: "One focused question, answered briefly",
  "In depth": "A long, detailed reference",
  Scientific: "Works through scientific evidence",
}

export const TOPIC_LEVELS: Record<string, TopicLevel> = {
  "is-belief-reasonable": "General",
  jesus: "General",
  "problem-of-evil": "General",
  morality: "General",
  "christianity-and-the-world": "General",
  "end-times": "General",
  prayer: "General",
  "bible-books": "General",
  "did-god-change": "General",
  "free-will": "General",

  "tree-of-knowledge": "Specific",
  "why-did-jesus-let-lazarus-die": "Specific",
  baptism: "Specific",
  abortion: "Specific",
  homosexuality: "Specific",
  trinity: "Specific",
  "heresies-and-fallacies": "Specific",

  religions: "In depth",
  prophecy: "In depth",
  islam: "In depth",
  contradictions: "In depth",
  canon: "In depth",
  "bible-translations": "In depth",
  women: "In depth",
  branches: "In depth",
  hell: "In depth",
  "god-evil": "In depth",
  "pagan-origins": "In depth",
  slavery: "In depth",
  archaeological: "In depth",
  resurrection: "In depth",
  miracles: "In depth",

  "fine-tuning": "Scientific",
  evolution: "Scientific",
  science: "Scientific",
  nasa: "Scientific",
}

export interface TopicGroup {
  readonly id: string
  readonly title: string
  readonly blurb: string
  readonly topics: readonly string[]
}

export const TOPIC_GROUPS: readonly TopicGroup[] = [
  {
    id: "evidence",
    title: "The Evidence for Christianity",
    blurb: "Whether belief is reasonable, who Jesus claimed to be, and what the historical record shows.",
    topics: ["is-belief-reasonable", "jesus", "resurrection", "prophecy", "archaeological", "miracles"],
  },
  {
    id: "science",
    title: "Science and Origins",
    blurb: "The universe, life, the age of the earth, and how faith and science relate.",
    topics: ["fine-tuning", "evolution", "science", "nasa"],
  },
  {
    id: "bible",
    title: "The Bible",
    blurb: "What is in it, how it reached us, and the challenges made against it.",
    topics: ["bible-books", "canon", "bible-translations", "contradictions", "pagan-origins", "did-god-change", "tree-of-knowledge", "why-did-jesus-let-lazarus-die"],
  },
  {
    id: "hard-questions",
    title: "Hard Questions",
    blurb: "Suffering, judgment, morality, and what Christians have done in the world.",
    topics: ["problem-of-evil", "god-evil", "hell", "morality", "free-will", "christianity-and-the-world"],
  },
  {
    id: "ethics",
    title: "Ethics and Society",
    blurb: "What Scripture teaches on the moral questions most often raised today.",
    topics: ["slavery", "women", "homosexuality", "abortion"],
  },
  {
    id: "faiths",
    title: "Other Faiths",
    blurb: "The world's religions, and a full examination of Islam.",
    topics: ["religions", "islam"],
  },
  {
    id: "belief-and-life",
    title: "Christian Belief and Life",
    blurb: "The doctrines, the traditions, and how Christians live and pray.",
    topics: ["trinity", "heresies-and-fallacies", "branches", "baptism", "prayer", "end-times"],
  },
]

/** Topics a reader of this one is likely to want next, most relevant first. */
export const RELATED_TOPICS: Record<string, readonly string[]> = {
  abortion: ["morality", "women", "homosexuality", "christianity-and-the-world"],
  archaeological: ["resurrection", "prophecy", "nasa", "canon"],
  baptism: ["branches", "contradictions", "resurrection"],
  "bible-books": ["canon", "bible-translations", "contradictions", "archaeological"],
  "bible-translations": ["canon", "bible-books", "contradictions", "homosexuality"],
  branches: ["baptism", "heresies-and-fallacies", "canon", "trinity"],
  canon: ["bible-translations", "bible-books", "pagan-origins", "branches"],
  "christianity-and-the-world": ["slavery", "women", "science", "morality", "is-belief-reasonable"],
  contradictions: ["bible-translations", "resurrection", "canon", "did-god-change"],
  "did-god-change": ["god-evil", "slavery", "heresies-and-fallacies", "hell"],
  "end-times": ["prophecy", "hell", "nasa"],
  evolution: ["fine-tuning", "science", "tree-of-knowledge", "problem-of-evil"],
  "fine-tuning": ["is-belief-reasonable", "evolution", "science", "nasa"],
  "free-will": ["problem-of-evil", "tree-of-knowledge", "prayer", "branches"],
  "god-evil": ["problem-of-evil", "did-god-change", "hell", "morality", "nasa"],
  "heresies-and-fallacies": ["trinity", "jesus", "branches", "religions"],
  hell: ["god-evil", "problem-of-evil", "morality", "bible-translations"],
  homosexuality: ["morality", "bible-translations", "women", "did-god-change"],
  "is-belief-reasonable": ["fine-tuning", "resurrection", "science", "religions", "problem-of-evil"],
  islam: ["religions", "jesus", "resurrection", "canon", "bible-translations"],
  jesus: ["resurrection", "trinity", "prophecy", "heresies-and-fallacies", "pagan-origins"],
  "why-did-jesus-let-lazarus-die": ["resurrection", "problem-of-evil", "jesus", "prayer"],
  miracles: ["resurrection", "nasa", "prayer", "is-belief-reasonable"],
  morality: ["problem-of-evil", "god-evil", "christianity-and-the-world", "is-belief-reasonable"],
  nasa: ["archaeological", "miracles", "god-evil", "fine-tuning"],
  "pagan-origins": ["resurrection", "jesus", "religions", "evolution"],
  prayer: ["miracles", "free-will", "trinity", "problem-of-evil"],
  "problem-of-evil": ["god-evil", "hell", "free-will", "morality", "evolution"],
  prophecy: ["jesus", "end-times", "archaeological", "religions", "bible-translations"],
  religions: ["islam", "pagan-origins", "heresies-and-fallacies", "is-belief-reasonable", "jesus"],
  resurrection: ["jesus", "contradictions", "pagan-origins", "archaeological", "prophecy"],
  science: ["evolution", "fine-tuning", "is-belief-reasonable", "christianity-and-the-world"],
  slavery: ["christianity-and-the-world", "did-god-change", "women", "morality"],
  "tree-of-knowledge": ["free-will", "evolution", "problem-of-evil"],
  trinity: ["heresies-and-fallacies", "jesus", "contradictions", "religions"],
  women: ["slavery", "christianity-and-the-world", "did-god-change", "homosexuality"],
}

/** The suggested first route through the site for someone new to these questions. */
export const START_HERE: ReadonlyArray<{ readonly id: string; readonly question: string }> = [
  { id: "is-belief-reasonable", question: "Is it reasonable to believe at all?" },
  { id: "fine-tuning", question: "Is there a God?" },
  { id: "archaeological", question: "Can the Bible be trusted?" },
  { id: "jesus", question: "Who did Jesus claim to be?" },
  { id: "resurrection", question: "Did he rise from the dead?" },
  { id: "problem-of-evil", question: "Then why is there so much suffering?" },
]
