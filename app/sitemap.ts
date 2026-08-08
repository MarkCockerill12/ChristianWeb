import type { MetadataRoute } from "next"
import { getAllTopics } from "@/topics"

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")

/** Parses the topics' "DD-MM-YYYY" / "DD/MM/YYYY" lastUpdated strings. */
function parseLastUpdated(value: string | undefined): Date | undefined {
  const m = /^(\d{2})[-/](\d{2})[-/](\d{4})$/.exec(value?.trim() ?? "")
  if (!m) return undefined
  const date = new Date(Number(m[3]), Number(m[2]) - 1, Number(m[1]))
  return Number.isNaN(date.getTime()) ? undefined : date
}

// Generated at build time alongside the static pages, so there is no request-time work.
export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/categories", "/timeline", "/resources", "/personal"].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }))

  const topicRoutes = getAllTopics().map((topic) => ({
    url: `${siteUrl}/categories/${topic.id}`,
    lastModified: parseLastUpdated(topic.lastUpdated),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...topicRoutes]
}
