"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"
import type { TimelineEvent } from "@/topics/types"
import { badgeClass, dotClass, iconTextClass, railClass } from "@/lib/colors"
import { renderInline } from "@/components/content-renderer"

interface TimelineProps {
  readonly events: TimelineEvent[]
  readonly title: string
  readonly description: string
  readonly disclaimer?: React.ReactNode
  readonly accentColor?: string
}

export function Timeline({ 
  events, 
  title, 
  description, 
  disclaimer,
  accentColor = "blue"
}: TimelineProps) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className={`h-6 w-6 ${iconTextClass(accentColor)}`} />
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
        
        {disclaimer && (
          <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="flex items-start gap-2">
              <div className="text-amber-600 font-semibold text-sm">⚠️ Important Note:</div>
            </div>
            <div className="text-sm text-amber-800 mt-1">
              {disclaimer}
            </div>
          </div>
        )}
      </CardHeader>
      <CardContent>
        {/* Timeline Container */}
        <div className="relative py-8">
          {/* Timeline center line (desktop only) */}
          <div className={`hidden md:block absolute left-34 lg:left-41.5 top-0 bottom-0 w-1 bg-linear-to-b ${railClass(accentColor)} to-green-400 z-0 rounded-full`}></div>

          {/* Timeline events */}
          <div className="flex flex-col gap-8 md:gap-12">
            {events.map((event) => (
              <div key={event.id} className="relative">
                {/* Mobile Layout */}
                <div className="block md:hidden">
                  <div className="mb-3">
                    <span className={`bg-white border-2 ${badgeClass(event.color)} font-bold px-2 py-1 rounded-full shadow-md text-xs`}>
                      {event.date}
                    </span>
                  </div>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex flex-col gap-2">
                        <div>
                          <CardTitle className="text-lg" dangerouslySetInnerHTML={{ __html: renderInline(event.title) }}></CardTitle>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                            <Badge variant="secondary" className="text-xs">{event.period}</Badge>
                          </div>
                        </div>
                      </div>
                      <CardDescription
                        className="text-sm"
                        dangerouslySetInnerHTML={{ __html: renderInline(event.description) }}
                      />
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div>
                        <h4 className="font-semibold text-xs text-gray-700 mb-1">Significance</h4>
                        <p className="text-xs text-gray-600" dangerouslySetInnerHTML={{ __html: renderInline(event.significance) }} />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:flex items-center w-full relative">
                  <div className="shrink-0 w-32 lg:w-40 text-right pr-4">
                    <span className={`bg-white border-2 ${badgeClass(event.color)} font-bold px-2 lg:px-3 py-1 rounded-full shadow-md text-xs whitespace-nowrap inline-block`}>
                      {event.date}
                    </span>
                  </div>
                  
                  <div className="absolute left-33 lg:left-40.5 z-10">
                    <div className={`w-3 h-3 rounded-full border-2 border-white shadow-lg ${dotClass(event.color)}`}></div>
                  </div>
                  
                  <div className="flex-1 max-w-4xl ml-8 lg:ml-12">
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader className="pb-3">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div>
                            <CardTitle className="text-lg" dangerouslySetInnerHTML={{ __html: renderInline(event.title) }}></CardTitle>
                            <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                              <Badge variant="secondary" className="text-xs">{event.period}</Badge>
                            </div>
                          </div>
                        </div>
                        <CardDescription
                          className="text-sm"
                          dangerouslySetInnerHTML={{ __html: renderInline(event.description) }}
                        />
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div>
                          <h4 className="font-semibold text-xs text-gray-700 mb-1">Significance</h4>
                          <p className="text-xs text-gray-600" dangerouslySetInnerHTML={{ __html: renderInline(event.significance) }} />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
