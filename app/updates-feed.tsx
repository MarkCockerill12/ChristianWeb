"use client"

import { useState } from "react"
import Link from "next/link"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export interface UpdateItem {
  id: number
  title: string
  description: string
  date: string
  category: string
  link?: string
}

const VISIBLE = 3

function UpdateCard({ item }: { readonly item: UpdateItem }) {
  const card = (
    <Card className="hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary">{item.category}</Badge>
          <span className="text-sm text-gray-500">{item.date}</span>
        </div>
        <CardTitle className="text-lg">{item.title}</CardTitle>
      </CardHeader>
      <CardContent className="grow">
        <CardDescription className="text-sm leading-relaxed min-h-fit">
          {item.description}
        </CardDescription>
      </CardContent>
    </Card>
  )

  return item.link ? (
    <Link href={item.link} className="block h-full">
      {card}
    </Link>
  ) : (
    card
  )
}

/**
 * The only interactive part of the home page, kept as a small client island so the
 * rest of the page stays a server component and ships no JS.
 */
export function UpdatesFeed({ items }: { readonly items: readonly UpdateItem[] }) {
  const [showAll, setShowAll] = useState(false)
  const rest = items.slice(VISIBLE)
  const visible = showAll ? items : items.slice(0, VISIBLE)

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((item) => (
          <UpdateCard key={item.id} item={item} />
        ))}
      </div>

      {rest.length > 0 && (
        <div className="flex justify-center mt-8">
          <Button onClick={() => setShowAll((v) => !v)} variant="outline">
            {showAll ? "Show Less" : `Show ${rest.length} More Update${rest.length > 1 ? "s" : ""}`}
          </Button>
        </div>
      )}
    </>
  )
}
