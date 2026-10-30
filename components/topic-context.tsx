"use client"

import { createContext, useContext } from "react"

export interface TopicPageContextValue {
  /** Expand a subtopic card without moving the page. */
  readonly expand: (subtopicId: string) => void
  /** Expand a subtopic card and scroll it (or an element inside it) into view. */
  readonly openSection: (subtopicId: string, anchorId?: string) => void
}

/** DOM id of a subtopic card, shared by the contents list, explorers and deep links. */
export const sectionDomId = (subtopicId: string) => `section-${subtopicId}`

const fallback: TopicPageContextValue = {
  expand: () => {},
  openSection: (id, anchor) =>
    document.getElementById(anchor ?? sectionDomId(id))?.scrollIntoView({ behavior: "smooth" }),
}

export const TopicPageContext = createContext<TopicPageContextValue>(fallback)

/** Lets a visual inside topic content open another section of the same page. */
export const useTopicPage = () => useContext(TopicPageContext)
