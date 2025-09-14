import Link from "next/link"
import { Cross, } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Cross className="h-6 w-6 text-blue-400" />
              <span className="font-bold text-xl">Cross ✝ Examination</span>
            </div>
            <p className="text-gray-400 text-sm">
              Exploring Christianity through evidence, scholarship, and honest inquiry.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/timeline" className="text-gray-400 hover:text-white transition-colors">
                  Biblical Timeline
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-400 hover:text-white transition-colors">
                  Apologetics Topics
                </Link>
              </li>
              <li>
                <Link href="/personal" className="text-gray-400 hover:text-white transition-colors">
                  Personal Journey
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Topics */}
          <div>
            <h3 className="font-semibold mb-4">Popular Topics</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/categories/problem-of-evil" className="text-gray-400 hover:text-white transition-colors">
                  Problem of Evil
                </Link>
              </li>
              <li>
                <Link href="/categories/resurrection" className="text-gray-400 hover:text-white transition-colors">
                  The Resurrection
                </Link>
              </li>
              <li>
                <Link href="/categories/contradictions" className="text-gray-400 hover:text-white transition-colors">
                  Biblical Contradictions
                </Link>
              </li>
              <li>
                <Link href="/categories/historical-jesus" className="text-gray-400 hover:text-white transition-colors">
                  Historical Jesus
                </Link>
              </li>
            </ul>
          </div>

          
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Faith &amp; Reason. </p>
          <p className="mt-2 italic">&quot;And you will know the truth, and the truth will set you free.&quot; - John 8:32</p>
        </div>
      </div>
    </footer>
  )
}
