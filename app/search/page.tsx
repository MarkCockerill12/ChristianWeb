import type { Metadata } from "next"

import { SearchFromUrl } from "@/components/site-search"

export const metadata: Metadata = {
  title: "Search",
  description: "Search every topic on Cross Examination.",
  alternates: { canonical: "/search" },
}

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">Search the whole site</h1>
        <p className="mb-6 text-gray-600">Searches the text of every section of every topic.</p>
        <SearchFromUrl />
      </div>
    </div>
  )
}
