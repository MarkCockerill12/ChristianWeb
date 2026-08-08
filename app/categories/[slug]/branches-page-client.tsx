"use client"

import React, { useCallback } from "react"
import { BookOpen, CheckCircle2, Clock, ExternalLink, Heart, Users } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TopicPage } from "@/components/topic-page"
import { BranchingTimeline } from "@/components/branching-timeline"
import { branchBeliefs, branchBeliefMap, branchTimeline } from "@/topics/branches"
import type { Topic } from "@/topics/types"

const iconMap = { BookOpen, Clock, Heart, ExternalLink, CheckCircle2, Users } as const

const LEGEND: ReadonlyArray<{ icon: keyof typeof iconMap; title: string; body: string; span?: string }> = [
  {
    icon: "ExternalLink",
    title: "Church Authority",
    body: "Do they believe in direct visible church authority (hierarchies, councils)?",
  },
  {
    icon: "Clock",
    title: "Tradition",
    body: "Do they place heavy emphasis on apostolic tradition and liturgy?",
  },
  {
    icon: "CheckCircle2",
    title: "Sacraments",
    body: "Do they believe sacraments physically convey grace (e.g., real presence)?",
  },
  {
    icon: "Heart",
    title: "Papal Authority",
    body: "Do they recognize the Bishop of Rome as supreme leader?",
  },
  {
    icon: "Users",
    title: "Priesthood of All Believers",
    body: "Do they believe all Christians have the authority to perform sacraments without ordained priests?",
    span: "md:col-span-2 lg:col-span-1",
  },
]

function BranchBadgeCluster({ branchId }: { readonly branchId: string }) {
  const beliefs = branchBeliefMap[branchId]
  return (
    <div className="flex gap-2 flex-wrap mt-2">
      {branchBeliefs.map((belief) => {
        const Icon = iconMap[belief.icon as keyof typeof iconMap]
        return (
          <span key={belief.key} className="relative group" title={belief.description}>
            <Icon className={`h-5 w-5 ${beliefs?.[belief.key] ? "text-green-600" : "text-red-600"}`} />
          </span>
        )
      })}
    </div>
  )
}

function Legend() {
  return (
    <Card className="mb-8 border-l-4 border-purple-500 bg-slate-50/50 shadow-xs">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-bold text-slate-800 flex items-center gap-2">
          📜 Legend &amp; Beliefs Key
        </CardTitle>
        <CardDescription className="text-sm text-slate-600">
          Each branch below displays colored icons indicating their core theological beliefs (
          <span className="text-green-700 font-bold">green for yes</span>,{" "}
          <span className="text-red-600 font-bold">red for no</span>).
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {LEGEND.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <div
                key={item.title}
                className={`flex gap-3 items-start bg-white p-3 rounded-lg border border-slate-100 shadow-2xs ${item.span ?? ""}`}
              >
                <Icon className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-800">{item.title}</h4>
                  <p className="text-xs text-slate-500">{item.body}</p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

interface BranchesPageClientProps {
  readonly category: Topic
}

export default function BranchesPageClient({ category }: BranchesPageClientProps) {
  const renderSubtopicHeader = useCallback(
    (sub: { id: string }) =>
      branchBeliefMap[sub.id] ? (
        <div className="mt-2">
          <BranchBadgeCluster branchId={sub.id} />
        </div>
      ) : null,
    [],
  )

  // Each branch card sits on a vertical timeline rail with its own date marker.
  const renderSubtopicWrapper = useCallback((sub: { id: string }, card: React.ReactNode) => {
    const date = branchTimeline.find((t) => t.id === sub.id)?.date
    return (
      <div id={`subtopic-${sub.id}`} className="relative">
        <div className="absolute -left-[22px] sm:-left-[28px] top-6 w-3.5 h-3.5 rounded-full border-2 border-white shadow-md bg-purple-600 z-10" />
        {date && (
          <div className="mb-2">
            <span className="bg-purple-100 text-purple-800 font-bold px-2.5 py-0.5 rounded-full text-xs shadow-xs">
              {date}
            </span>
          </div>
        )}
        {card}
      </div>
    )
  }, [])

  return (
    <TopicPage
      category={category}
      beforeSearch={<Legend />}
      renderSubtopicHeader={renderSubtopicHeader}
      renderSubtopicWrapper={renderSubtopicWrapper}
      subtopicListClassName="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-1.5 sm:before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-purple-200 before:rounded-full"
      afterSubtopics={({ expand }) => (
        <Card className="mb-8 mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-6 w-6 text-purple-600" />
              Christian Branches Timeline
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 sm:px-6">
            <BranchingTimeline
              onSelectNode={(id) => {
                expand(id)
                // Let the expand render before scrolling to the card
                requestAnimationFrame(() =>
                  document
                    .getElementById(`subtopic-${id}`)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" }),
                )
              }}
            />
          </CardContent>
        </Card>
      )}
    />
  )
}
