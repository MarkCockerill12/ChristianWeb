import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { getTopicById, getAllTopics } from "@/topics"
import { TopicPage } from "@/components/topic-page"
import { Timeline } from "@/components/timeline"
import BranchesPageClient from "./branches-page-client"
import { canonTimeline } from "@/topics/canon"

interface PageProps {
  readonly params: Promise<{ slug: string }>
}

// Static routes at build time: every topic page is prerendered, so serving one
// costs a CDN hit rather than a render.
export function generateStaticParams() {
  return getAllTopics().map((topic) => ({ slug: topic.id }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const topic = getTopicById(slug)
  if (!topic) return {}

  const title = `${topic.title} - Cross Examination ✝`
  return {
    title,
    description: topic.description,
    alternates: { canonical: `/categories/${topic.id}` },
    openGraph: {
      title,
      description: topic.description,
      type: "article",
      url: `/categories/${topic.id}`,
    },
  }
}

const TIMELINE_COPY: Record<string, { title: string; description: string; disclaimer: React.ReactNode }> = {
  canon: {
    title: "Biblical Canon Timeline",
    description:
      "Key events in the development and recognition of biblical canon from Moses to modern era",
    disclaimer: (
      <>
        <strong>
          The dates shown indicate when these books were written down, not when the events they
          describe occurred.
        </strong>{" "}
        For example, Moses wrote Genesis around 1445 BC, but it records events from Creation through
        Joseph&apos;s death (c. 1805 BC). Similarly, the Gospels were written 15-65 years after
        Christ&apos;s ministry but record His life and teachings from 30-33 AD.
      </>
    ),
  },
  science: {
    title: "Christianity and Science Timeline",
    description:
      "Milestones in the relationship, from the patristic rule for reading Genesis to the Human Genome Project",
    disclaimer: (
      <>
        <strong>
          The entries include the failures as well as the achievements.
        </strong>{" "}
        Galileo&apos;s condemnation in 1633 and the Scopes trial of 1925 are the two episodes from
        which a general law of conflict was wrongly inferred, and both are listed here rather than
        left out.
      </>
    ),
  },
  women: {
    title: "Women in Scripture and Church History",
    description:
      "From the ancient Near Eastern law codes the Mosaic legislation was written against, to the modern debate over office",
    disclaimer: (
      <>
        <strong>
          The ancient Near Eastern entries are included as the comparison the biblical laws should be
          measured against.
        </strong>{" "}
        Hammurabi and the Middle Assyrian Laws are the legal world Israel sat inside, and the fair
        historical question is how the Mosaic provisions compare with those rather than with modern
        statute. The European witch trials are listed for the same reason of honesty.
      </>
    ),
  },
  slavery: {
    title: "Biblical Slavery Timeline",
    description:
      "How Christianity transformed slavery from ancient times through abolition movements",
    disclaimer: (
      <>
        <strong>
          This timeline shows Christianity&apos;s progressive transformation of slavery from
          regulation to abolition.
        </strong>{" "}
        Rather than immediately abolishing slavery in ancient times (which would have caused economic
        collapse as well as social protest as seen with Israel&apos;s constant flip-flopping of
        beliefs), God worked through progressive revelation to plant principles of human dignity that
        ultimately led to slavery&apos;s complete abolition by Christian movements.
      </>
    ),
  },
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params
  const baseCategory = getTopicById(slug)

  if (!baseCategory) notFound()

  if (baseCategory.id === "branches") {
    return <BranchesPageClient category={baseCategory} />
  }

  // Inject the specialised canon timeline
  const category =
    baseCategory.id === "canon" ? { ...baseCategory, timeline: canonTimeline } : baseCategory

  const copy = TIMELINE_COPY[category.id]
  const timeline =
    category.timeline && copy ? (
      <Timeline
        key={`timeline-${category.id}`}
        events={category.timeline}
        title={copy.title}
        description={copy.description}
        disclaimer={copy.disclaimer}
      />
    ) : null

  return <TopicPage category={category} beforeSubtopics={timeline} />
}
