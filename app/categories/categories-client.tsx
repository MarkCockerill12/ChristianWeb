"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, BookOpen, AlertTriangle, Heart, Microscope, History, Scale, Globe, Zap, Shield, Cross, Flame, Scroll, Church, Atom, Mountain, Crown, Users, Brain, Gavel } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { iconTextClass } from "@/lib/colors"
import { StartHere } from "@/components/start-here"
import { LEVEL_MEANINGS, TOPIC_GROUPS, type TopicLevel } from "@/topics/extras/organisation"

// Icon mapping for topics
const iconMap = {
  AlertTriangle,
  BookOpen,
  Heart,
  Microscope,
  History,
  Scale,
  Globe,
  Zap,
  Shield,
  Cross,
  Flame,
  Scroll,
  Church,
  Atom,
  Mountain,
  Crown,
  Users,
  Brain,
  Gavel,
}

interface CategoryMetadata {
  id: string
  title: string
  description: string
  icon?: string
  color?: string
  tags: string[]
  level?: TopicLevel
  image?: string
  imagePosition?: string
  imageAlt?: string
}

interface CategoriesClientProps {
  readonly categories: CategoryMetadata[]
}

export default function CategoriesClient({ categories }: CategoriesClientProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [level, setLevel] = useState<TopicLevel | null>(null)

  const formattedCategories = useMemo(() => {
    return categories.map(cat => ({
      ...cat,
      iconElement: iconMap[cat.icon as keyof typeof iconMap] || BookOpen,
      // Precomputed search target so typing doesn't re-lowercase every field per keystroke
      haystack: `${cat.title}\n${cat.description}\n${cat.tags.join("\n")}`.toLowerCase(),
    }))
  }, [categories])

  const filteredCategories = useMemo(() => {
    const q = searchTerm.trim().toLowerCase()
    return formattedCategories.filter(
      (category) => (!q || category.haystack.includes(q)) && (!level || category.level === level),
    )
  }, [formattedCategories, searchTerm, level])

  // Topics stay in their groups while filtering, and empty groups drop out.
  const groups = useMemo(() => {
    const byId = new Map(filteredCategories.map((c) => [c.id, c]))
    return TOPIC_GROUPS.map((group) => ({
      ...group,
      items: group.topics.flatMap((id) => {
        const item = byId.get(id)
        return item ? [item] : []
      }),
    })).filter((group) => group.items.length > 0)
  }, [filteredCategories])

  const filtering = searchTerm.trim() !== "" || level !== null

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Apologetics Topics</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-5xl mx-auto">
            Comprehensive answers to common questions, objections, and challenges to the Christian faith. Each topic is
            thoroughly researched with biblical, historical, and philosophical perspectives.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Filter topics by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Levels */}
        <div className="mb-3 flex flex-wrap items-center justify-center gap-2" role="group" aria-label="Filter by level">
          <Button variant={level === null ? "default" : "outline"} size="sm" onClick={() => setLevel(null)}>
            All
          </Button>
          {(Object.keys(LEVEL_MEANINGS) as TopicLevel[]).map((name) => (
            <Button
              key={name}
              variant={level === name ? "default" : "outline"}
              size="sm"
              title={LEVEL_MEANINGS[name]}
              onClick={() => setLevel(level === name ? null : name)}
            >
              {name}
            </Button>
          ))}
        </div>
        <p className="mb-6 text-center text-xs text-gray-500">
          {level ? `${level}: ${LEVEL_MEANINGS[level]}.` : "General topics are the easiest place to begin. Specific ones answer one question. In depth ones are full references."}
        </p>

        {!filtering && <StartHere className="mb-10" />}

        {/* Results Count */}
        {filtering && (
          <div className="text-center mb-6">
            <p className="text-gray-600">
              Showing {filteredCategories.length} of {categories.length} topics
              {searchTerm.trim() && (
                <>
                  {". "}
                  <a href={`/search?q=${encodeURIComponent(searchTerm.trim())}`} className="text-blue-600 hover:underline">
                    Search inside every topic for &quot;{searchTerm.trim()}&quot;
                  </a>
                </>
              )}
            </p>
          </div>
        )}

        {/* Groups of topics */}
        <div className="space-y-10">
          {groups.map((group) => (
            <section key={group.id} aria-labelledby={`group-${group.id}`}>
              <h2 id={`group-${group.id}`} className="m-0 text-xl sm:text-2xl font-bold text-gray-900">
                {group.title}
              </h2>
              <p className="mb-4 mt-1 text-sm text-gray-600">{group.blurb}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {group.items.map((category) => {
                  const Icon = category.iconElement
                  return (
                    <Card key={category.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      {category.image && (
                        <div className="relative -mt-6 h-32 w-full bg-gray-100">
                          <Image
                            src={category.image}
                            alt={category.imageAlt ?? ""}
                            fill
                            sizes="(min-width: 1280px) 300px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                            className="object-cover"
                            style={{ objectPosition: category.imagePosition ?? "center" }}
                          />
                        </div>
                      )}
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <Icon className={`h-8 w-8 ${iconTextClass(category.color)}`} />
                          {category.level && (
                            <span className="rounded-full border border-gray-200 px-2 py-0.5 text-[11px] font-medium text-gray-600" title={LEVEL_MEANINGS[category.level]}>
                              {category.level}
                            </span>
                          )}
                        </div>
                        <CardTitle className="text-lg break-words hyphens-auto leading-tight">{category.title}</CardTitle>
                        <CardDescription>{category.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {category.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Button asChild className="w-full">
                          <Link href={`/categories/${category.id}`}>Explore Topic</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </section>
          ))}
        </div>

        {/* No Results */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No topics found</h3>
            <p className="text-gray-600">
              Try another word, or{" "}
              <a href={`/search?q=${encodeURIComponent(searchTerm.trim())}`} className="text-blue-600 hover:underline">
                search inside every topic
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
