"use client"

import React, { useState } from "react"
import { ExternalLink, ChevronUp, ChevronDown } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface BibleVerseProps {
  readonly verse: {
    reference: string
    text: string
  }
}

export function BibleVerse({ verse }: BibleVerseProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggleExpansion = () => {
    setIsExpanded(!isExpanded)
  }

  const getBibleGatewayUrl = (reference: string) => {
    const encodedReference = encodeURIComponent(reference)
    return `https://www.biblegateway.com/passage/?search=${encodedReference}&version=NIV`
  }

  return (
    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 h-full">
      <Badge variant="outline" className="mb-2">
        {verse.reference}
      </Badge>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={handleToggleExpansion}
        className="text-sm text-blue-600 hover:text-blue-800 p-0 h-auto font-normal mb-2 w-full justify-start"
      >
        {isExpanded ? "Hide full verse" : "Click to show full verse"}
        {isExpanded ? (
          <ChevronUp className="ml-1 h-3 w-3" />
        ) : (
          <ChevronDown className="ml-1 h-3 w-3" />
        )}
      </Button>
      
      {isExpanded && (
        <div className="mt-3 space-y-3">
          <p className="text-sm text-gray-700 italic leading-relaxed border-l-2 border-blue-300 pl-3">
            &quot;{verse.text}&quot;
          </p>
          <Button asChild size="sm" variant="outline">
            <Link 
              href={getBibleGatewayUrl(verse.reference)} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <ExternalLink className="mr-1 h-3 w-3" />
              Read in full context
            </Link>
          </Button>
        </div>
      )}
    </div>
  )
}
