import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="text-center max-w-lg">
        <Search className="h-16 w-16 text-gray-400 mx-auto mb-6" />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Page not found</h1>
        <p className="text-gray-600 mb-8">
          That page doesn&apos;t exist. It may have been renamed or moved.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild>
            <Link href="/categories">Browse Topics</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
