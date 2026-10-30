"use client"

import { useEffect, useState } from "react"
import { Monitor, Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"

type Theme = "light" | "dark" | "system"

const KEY = "theme"
const ORDER: readonly Theme[] = ["system", "light", "dark"]

function readStored(): Theme {
  try {
    const v = localStorage.getItem(KEY)
    return v === "light" || v === "dark" ? v : "system"
  } catch {
    return "system"
  }
}

function apply(theme: Theme) {
  const dark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
  document.documentElement.classList.toggle("dark", dark)
}

/**
 * Runs before React hydrates (inlined in the layout <head>) so a dark-mode
 * visitor never sees a white flash. Kept as a string because it must not
 * depend on any bundle.
 */
export const THEME_INIT_SCRIPT = `try{var t=localStorage.getItem("${KEY}");if(t==="dark"||(t!=="light"&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`

/** Cycles system, light and dark; the choice is remembered on this device only. */
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system")

  useEffect(() => {
    setTheme(readStored())
  }, [])

  // Follow the operating system while on "system".
  useEffect(() => {
    if (theme !== "system") return
    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    const onChange = () => apply("system")
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [theme])

  const next = () => {
    const t = ORDER[(ORDER.indexOf(theme) + 1) % ORDER.length]
    setTheme(t)
    try {
      if (t === "system") localStorage.removeItem(KEY)
      else localStorage.setItem(KEY, t)
    } catch {
      // Storage can be unavailable (private mode); the choice then lasts for this page only.
    }
    apply(t)
  }

  const Icon = theme === "dark" ? Moon : theme === "light" ? Sun : Monitor
  const label = theme === "dark" ? "Dark theme" : theme === "light" ? "Light theme" : "System theme"

  return (
    <Button variant="ghost" size="icon" onClick={next} aria-label={`${label}. Switch theme`} title={label}>
      <Icon className="h-5 w-5" />
    </Button>
  )
}
