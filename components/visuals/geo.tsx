"use client"

import React, { useState } from "react"

import { Legend, Rich } from "@/components/visuals/kit"
import { SERIES } from "@/components/visuals/charts"
import { cn } from "@/lib/utils"

export interface RegionGeometry {
  readonly width: number
  readonly height: number
  readonly bounds: readonly number[]
  readonly land: string
  readonly lakes?: string
  readonly rivers?: string
}

export interface Pin {
  readonly id: string
  readonly lon: number
  readonly lat: number
  readonly label: string
  readonly detail?: string
  readonly group?: string
  /** Put the label on the left of the dot where it would otherwise collide. */
  readonly labelLeft?: boolean
  readonly hideLabel?: boolean
}

/** Same projection as scripts/build_maps.py: equirectangular, x scaled by cos(mid-latitude). */
function project(geo: RegionGeometry) {
  const [lon0, lat0, lon1, lat1] = geo.bounds
  const k = Math.cos((((lat0 + lat1) / 2) * Math.PI) / 180)
  const sx = geo.width / ((lon1 - lon0) * k)
  return (lon: number, lat: number) => [(lon - lon0) * k * sx, (lat1 - lat) * sx] as const
}

/**
 * Regional map with clickable pins. The pin list under the map is the
 * accessible (and phone-friendly) way into the same details.
 */
export function PinMap({
  geo,
  pins,
  groups,
  areaLabels = [],
  routes = [],
  initial,
}: {
  readonly geo: RegionGeometry
  readonly pins: readonly Pin[]
  readonly groups?: readonly string[]
  readonly areaLabels?: ReadonlyArray<{ readonly lon: number; readonly lat: number; readonly text: string; readonly water?: boolean }>
  readonly routes?: ReadonlyArray<{ readonly points: ReadonlyArray<readonly [number, number]>; readonly label?: string }>
  readonly initial?: string
}) {
  const p = project(geo)
  const [selected, setSelected] = useState<string | null>(initial ?? null)
  const groupList = groups ?? Array.from(new Set(pins.map((x) => x.group).filter(Boolean) as string[]))
  const colorOf = (g?: string) => SERIES[Math.max(0, groupList.indexOf(g ?? "")) % SERIES.length]
  const sel = pins.find((x) => x.id === selected)
  const fs = geo.width / 42

  return (
    <div>
      {groupList.length > 1 && <Legend items={groupList.map((g, i) => ({ label: g, color: SERIES[i % SERIES.length] }))} />}
      <div className="grid gap-4 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
        <svg viewBox={`0 0 ${geo.width} ${geo.height}`} className="w-full h-auto rounded-lg border viz-map" role="img" aria-label="Map">
          <rect width={geo.width} height={geo.height} fill="var(--viz-water)" />
          <path d={geo.land} fill="var(--viz-land)" stroke="var(--viz-coast)" strokeWidth={0.8} />
          {geo.lakes && <path d={geo.lakes} fill="var(--viz-water)" stroke="var(--viz-coast)" strokeWidth={0.6} />}
          {geo.rivers && <path d={geo.rivers} fill="none" stroke="var(--viz-river)" strokeWidth={1.2} />}
          {areaLabels.map((a) => {
            const [x, y] = p(a.lon, a.lat)
            return (
              <text key={a.text} x={x} y={y} textAnchor="middle" fontSize={fs * 0.9} fontStyle={a.water ? "italic" : "normal"} fill={a.water ? "var(--viz-water-ink)" : "var(--viz-muted)"} letterSpacing={a.water ? 1 : 2}>
                {a.text}
              </text>
            )
          })}
          {routes.map((r, i) => (
            <path
              key={i}
              d={r.points.map(([lon, lat], j) => `${j ? "L" : "M"}${p(lon, lat).join(",")}`).join("")}
              fill="none"
              stroke="var(--viz-ink-2)"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              markerEnd="url(#arrow)"
            />
          ))}
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M0,0L10,5L0,10z" fill="var(--viz-ink-2)" />
            </marker>
          </defs>
          {pins.map((pin) => {
            const [x, y] = p(pin.lon, pin.lat)
            const on = pin.id === selected
            return (
              <g key={pin.id} onClick={() => setSelected(on ? null : pin.id)} className="cursor-pointer" role="button" aria-label={pin.label}>
                <circle cx={x} cy={y} r={fs * 1.1} fill="transparent" />
                <circle cx={x} cy={y} r={on ? fs * 0.55 : fs * 0.42} fill={colorOf(pin.group)} stroke="var(--viz-surface)" strokeWidth={fs * 0.16} />
                {!pin.hideLabel && (
                  <text
                    x={pin.labelLeft ? x - fs * 0.75 : x + fs * 0.75}
                    y={y + fs * 0.35}
                    textAnchor={pin.labelLeft ? "end" : "start"}
                    fontSize={fs}
                    fontWeight={on ? 700 : 500}
                    fill="var(--viz-ink)"
                    stroke="var(--viz-land)"
                    strokeWidth={fs * 0.22}
                    paintOrder="stroke"
                  >
                    {pin.label}
                  </text>
                )}
              </g>
            )
          })}
        </svg>
        <div>
          <div className="viz-info rounded-lg border p-3 min-h-24">
            {sel ? (
              <>
                <div className="font-semibold text-sm">{sel.label}</div>
                {sel.group && <div className="text-[11px] text-[color:var(--viz-muted)] mt-0.5">{sel.group}</div>}
                {sel.detail && <Rich as="div" text={sel.detail} className="text-[13px] leading-relaxed mt-1.5 text-[color:var(--viz-ink-2)]" />}
              </>
            ) : (
              <div className="text-[13px] text-[color:var(--viz-ink-2)]">Select a point on the map or in the list.</div>
            )}
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {pins.map((pin) => (
              <button
                key={pin.id}
                type="button"
                onClick={() => setSelected(pin.id === selected ? null : pin.id)}
                className={cn("viz-chip inline-flex items-center gap-1.5", pin.id === selected && "viz-chip-active")}
                aria-pressed={pin.id === selected}
              >
                <span className="inline-block h-2 w-2 rounded-full" style={{ background: colorOf(pin.group) }} />
                {pin.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export interface WorldGeometry {
  readonly width: number
  readonly height: number
  readonly countries: Readonly<Record<string, { readonly name: string; readonly d: string }>>
}

/**
 * Choropleth by category. Categories are nominal, so each takes a fixed
 * categorical slot and the legend names them; hover or tap a country for its
 * value.
 */
export function WorldMap({
  geo,
  values,
  categories,
  details = {},
}: {
  readonly geo: WorldGeometry
  readonly values: Readonly<Record<string, string>>
  readonly categories: ReadonlyArray<{ readonly key: string; readonly label: string; readonly color?: string }>
  readonly details?: Readonly<Record<string, string>>
}) {
  const [hover, setHover] = useState<string | null>(null)
  const color = (iso: string) => {
    const i = categories.findIndex((c) => c.key === values[iso])
    return i < 0 ? "var(--viz-land-empty)" : (categories[i].color ?? SERIES[i])
  }
  const h = hover ? geo.countries[hover] : null
  return (
    <div>
      <Legend items={categories.map((c, i) => ({ label: c.label, color: c.color ?? SERIES[i] }))} />
      <div className="relative">
        <svg viewBox={`0 0 ${geo.width} ${geo.height}`} className="w-full h-auto rounded-lg border viz-map" role="img" aria-label="World map">
          <rect width={geo.width} height={geo.height} fill="var(--viz-water)" />
          {Object.entries(geo.countries).map(([iso, c]) => (
            <path
              key={iso}
              d={c.d}
              fill={color(iso)}
              stroke="var(--viz-surface)"
              strokeWidth={hover === iso ? 1.6 : 0.5}
              onMouseEnter={() => setHover(iso)}
              onMouseLeave={() => setHover(null)}
              onClick={() => setHover(iso)}
              opacity={hover && hover !== iso ? 0.8 : 1}
            >
              <title>{c.name}</title>
            </path>
          ))}
        </svg>
        <div className="mt-2 min-h-10 text-[13px] text-[color:var(--viz-ink-2)]">
          {h ? (
            <>
              <span className="font-semibold text-[color:var(--viz-ink)]">{h.name}</span>
              {": "}
              {categories.find((c) => c.key === values[hover!])?.label ?? "No data"}
              {details[hover!] && <> ({details[hover!]})</>}
            </>
          ) : (
            "Hover over or tap a country."
          )}
        </div>
      </div>
    </div>
  )
}
