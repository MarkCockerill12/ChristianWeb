"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, BookOpen, AlertTriangle, Heart, Microscope, History, Scale, Globe, Zap, Shield, Cross, Flame, Scroll, Church, Atom, Mountain, Crown, Users, Brain, Gavel } from "lucide-react"
import Link from "next/link"
import { iconTextClass } from "@/lib/colors"

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
}

interface CategoriesClientProps {
  readonly categories: CategoryMetadata[]
}

export default function CategoriesClient({ categories }: CategoriesClientProps) {
  const [searchTerm, setSearchTerm] = useState("")

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
    if (!q) return formattedCategories
    return formattedCategories.filter((category) => category.haystack.includes(q))
  }, [formattedCategories, searchTerm])

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
              placeholder="Search topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-6">
          <p className="text-gray-600">
            Showing {filteredCategories.length} of {categories.length} topics
          </p>
        </div>

        {/* Categories Grid - Responsive with dynamic columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredCategories.map((category) => {
            const Icon = category.iconElement
            return (
              <Card key={category.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Icon className={`h-8 w-8 ${iconTextClass(category.color)}`} />
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

        {/* No Results */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No topics found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters.</p>
          </div>
        )}
      </div>
    </div>
  )
}
