import { buildSearchIndex } from "@/lib/search-index"

// Built once at deploy time and fetched by the browser on the first search, so the text
// of every topic stays out of the page bundles.
export const dynamic = "force-static"

export function GET() {
  return Response.json(buildSearchIndex())
}
