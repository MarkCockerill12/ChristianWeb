/**
 * Tailwind cannot see interpolated class names like `text-${color}-600`, so every
 * class used from data must appear here as a complete literal string.
 *
 * Topic/timeline data also uses a few non-Tailwind colour names (brown, gold,
 * darkred, ...); those are aliased onto the nearest palette.
 */

type Palette =
  | "blue" | "green" | "indigo" | "orange" | "pink" | "purple"
  | "red" | "yellow" | "teal" | "gray" | "amber" | "rose" | "violet" | "slate"

const ALIASES: Record<string, Palette> = {
  brown: "amber",
  gold: "amber",
  darkpurple: "violet",
  darkred: "rose",
  black: "slate",
}

const PALETTES: readonly Palette[] = [
  "blue", "green", "indigo", "orange", "pink", "purple",
  "red", "yellow", "teal", "gray", "amber", "rose", "violet", "slate",
]

function resolve(color: string | undefined, fallback: Palette = "blue"): Palette {
  if (!color) return fallback
  const key = color.toLowerCase()
  if (ALIASES[key]) return ALIASES[key]
  return (PALETTES as readonly string[]).includes(key) ? (key as Palette) : fallback
}

const ICON_TEXT: Record<Palette, string> = {
  blue: "text-blue-600", green: "text-green-600", indigo: "text-indigo-600",
  orange: "text-orange-600", pink: "text-pink-600", purple: "text-purple-600",
  red: "text-red-600", yellow: "text-yellow-600", teal: "text-teal-600",
  gray: "text-gray-600", amber: "text-amber-600", rose: "text-rose-600",
  violet: "text-violet-600", slate: "text-slate-600",
}

const BADGE: Record<Palette, string> = {
  blue: "border-blue-400 text-blue-700", green: "border-green-400 text-green-700",
  indigo: "border-indigo-400 text-indigo-700", orange: "border-orange-400 text-orange-700",
  pink: "border-pink-400 text-pink-700", purple: "border-purple-400 text-purple-700",
  red: "border-red-400 text-red-700", yellow: "border-yellow-400 text-yellow-700",
  teal: "border-teal-400 text-teal-700", gray: "border-gray-400 text-gray-700",
  amber: "border-amber-400 text-amber-700", rose: "border-rose-400 text-rose-700",
  violet: "border-violet-400 text-violet-700", slate: "border-slate-400 text-slate-700",
}

const DOT: Record<Palette, string> = {
  blue: "bg-blue-500", green: "bg-green-500", indigo: "bg-indigo-500",
  orange: "bg-orange-500", pink: "bg-pink-500", purple: "bg-purple-500",
  red: "bg-red-500", yellow: "bg-yellow-500", teal: "bg-teal-500",
  gray: "bg-gray-500", amber: "bg-amber-500", rose: "bg-rose-500",
  violet: "bg-violet-500", slate: "bg-slate-500",
}

const RAIL: Record<Palette, string> = {
  blue: "from-blue-400", green: "from-green-400", indigo: "from-indigo-400",
  orange: "from-orange-400", pink: "from-pink-400", purple: "from-purple-400",
  red: "from-red-400", yellow: "from-yellow-400", teal: "from-teal-400",
  gray: "from-gray-400", amber: "from-amber-400", rose: "from-rose-400",
  violet: "from-violet-400", slate: "from-slate-400",
}

/** `text-<color>-600` for an icon. */
export const iconTextClass = (color?: string) => ICON_TEXT[resolve(color)]

/** Outlined date/period pill on the timeline. */
export const badgeClass = (color?: string) => BADGE[resolve(color)]

/** Filled timeline marker. */
export const dotClass = (color?: string) => DOT[resolve(color)]

/** Gradient start for the timeline's vertical rail. */
export const railClass = (color?: string) => RAIL[resolve(color)]
