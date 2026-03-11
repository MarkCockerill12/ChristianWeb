"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"

interface ContentRendererProps {
  readonly content: string
  readonly className?: string
  readonly wrapInCard?: boolean
}

export function ContentRenderer({ 
  content, 
  className = "", 
  wrapInCard = true 
}: ContentRendererProps) {
  if (!content || !content.trim()) return null

  const renderedContent = (
    <div
      className={`prose prose-lg max-w-none ${className}`}
      dangerouslySetInnerHTML={{
        __html: content
          .replaceAll("\n", "<br>")
          .replace(/#{1,6}\s/g, (match) => {
            const level = match.trim().length
            return `<h${level} class="text-${4 - level}xl font-bold mt-8 mb-4 text-gray-900">`
          })
          .replaceAll(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
      }}
    />
  )

  if (wrapInCard) {
    return (
      <Card className="mb-8">
        <CardContent className="py-8">
          {renderedContent}
        </CardContent>
      </Card>
    )
  }

  return renderedContent
}
