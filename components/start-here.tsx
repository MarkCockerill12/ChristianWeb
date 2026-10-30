import Link from "next/link"
import { Compass } from "lucide-react"

import { START_HERE } from "@/topics/extras/organisation"

/** The suggested first route through the site, for someone new to these questions. */
export function StartHere({ className = "" }: { readonly className?: string }) {
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
