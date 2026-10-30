import Link from "next/link"
import { Compass } from "lucide-react"

import { START_HERE } from "@/topics/extras/organisation"

/** The suggested first route through the site, for someone new to these questions. */
export function StartHere({ className = "", compact = false }: { readonly className?: string; readonly compact?: boolean }) {
  if (compact) {
    return (
      <nav aria-label="Suggested first topics" className={className}>
        <ol className="m-0 flex list-none flex-wrap items-center justify-center gap-1.5 p-0">
          <li className="mr-1 text-xs font-semibold text-gray-700">New here?</li>
          {START_HERE.map((step, i) => (
            <li key={step.id}>
              <Link
                href={`/categories/${step.id}`}
                className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white py-0.5 pl-0.5 pr-2.5 text-xs font-medium text-gray-900 no-underline transition-shadow hover:shadow-md"
              >
                <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-[10px] font-semibold text-white" aria-hidden>
                  {i + 1}
                </span>
                {step.question}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    )
  }

  return (
    <section aria-labelledby="start-here" className={className}>
      <div className="mb-3 flex items-center gap-2">
        <Compass className="h-5 w-5 text-blue-600" aria-hidden />
        <h2 id="start-here" className="m-0 text-lg font-bold text-gray-900">
          New here? Start with these
        </h2>
      </div>
      <ol className="m-0 grid list-none gap-2 p-0 sm:grid-cols-2 lg:grid-cols-3">
        {START_HERE.map((step, i) => (
          <li key={step.id}>
            <Link
              href={`/categories/${step.id}`}
              className="flex h-full items-center gap-3 rounded-lg border border-gray-200 bg-white p-3 no-underline transition-shadow hover:shadow-md"
            >
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white" aria-hidden>
                {i + 1}
              </span>
              <span className="text-sm font-medium leading-snug text-gray-900">{step.question}</span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  )
}
