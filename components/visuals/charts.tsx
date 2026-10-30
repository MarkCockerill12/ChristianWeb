"use client"

import React, { useEffect, useMemo, useRef, useState } from "react"

import { Legend, Rich } from "@/components/visuals/kit"
import { cn } from "@/lib/utils"

/** Categorical slots, in the validated fixed order (never cycled past 8). */
export const SERIES = ["var(--viz-1)", "var(--viz-2)", "var(--viz-3)", "var(--viz-4)", "var(--viz-5)", "var(--viz-6)", "var(--viz-7)", "var(--viz-8)"] as const

/** Width of a container, so SVG charts draw at real pixels and text never shrinks. */
function useWidth<T extends HTMLElement>(fallback = 640) {
  const ref = useRef<T>(null)
  const [width, setWidth] = useState(fallback)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => setWidth(Math.max(260, Math.round(entry.contentRect.width))))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])
  return [ref, width] as const
}

const fmt = (n: number) => (Math.abs(n) >= 10000 ? n.toLocaleString("en-GB") : String(n))

/* ------------------------------------------------------------------ */
/* Horizontal bars                                                     */
/* ------------------------------------------------------------------ */

export interface BarDatum {
  readonly label: string
  readonly value: number
  /** Text shown at the bar tip instead of the raw value. */
  readonly display?: string
  readonly note?: string
  readonly color?: string
  readonly highlight?: boolean
}

/**
 * Ranked bars with the value at each tip. One series, so one colour; a
 * highlighted bar takes slot 2 to carry the point of the chart.
 */
export function BarChart({
  data,
  max,
  unit = "",
  labelWidth = "9rem",
}: {
  readonly data: readonly BarDatum[]
  readonly max?: number
  readonly unit?: string
  readonly labelWidth?: string
}) {
  const top = max ?? Math.max(...data.map((d) => d.value))
  const [hover, setHover] = useState<number | null>(null)
  return (
    <div className="space-y-1.5">
      {data.map((d, i) => (
        <div
          key={d.label}
          className="grid items-center gap-2 text-[13px]"
          style={{ gridTemplateColumns: `minmax(5rem, ${labelWidth}) 1fr` }}
          onMouseEnter={() => setHover(i)}
          onMouseLeave={() => setHover(null)}
        >
          <Rich text={d.label} className="text-right leading-tight text-[color:var(--viz-ink-2)]" />
          <div className="flex items-center gap-2 min-w-0">
            <div
              className="h-4 rounded-r-[4px] transition-opacity"
              style={{
                width: `${Math.max(0.6, (d.value / top) * 100)}%`,
                maxWidth: "calc(100% - 4.5rem)",
                background: d.color ?? (d.highlight ? SERIES[1] : SERIES[0]),
                opacity: hover === null || hover === i ? 1 : 0.55,
              }}
            />
            <span className="tabular-nums text-[12px] whitespace-nowrap text-[color:var(--viz-ink)]">
              {d.display ?? `${fmt(d.value)}${unit}`}
            </span>
          </div>
          {hover === i && d.note && (
            <Rich as="div" text={d.note} className="col-start-2 text-[12px] text-[color:var(--viz-ink-2)] -mt-1 mb-1" />
          )}
        </div>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Columns                                                             */
/* ------------------------------------------------------------------ */

export function ColumnChart({
  data,
  height = 200,
  yLabel,
  max,
}: {
  readonly data: readonly BarDatum[]
  readonly height?: number
  readonly yLabel?: string
  readonly max?: number
}) {
  const [ref, width] = useWidth<HTMLDivElement>()
  const [hover, setHover] = useState<number | null>(null)
  const top = max ?? Math.max(...data.map((d) => d.value))
  const step = niceStep(top)
  const ceil = Math.ceil(top / step) * step
  const pad = { l: 36, r: 8, t: 18, b: 34 }
  const plotW = width - pad.l - pad.r
  const band = plotW / data.length
  const bar = Math.min(24, band * 0.7)
  const y = (v: number) => pad.t + (height - pad.t - pad.b) * (1 - v / ceil)
  const ticks = Array.from({ length: Math.round(ceil / step) + 1 }, (_, i) => i * step)
  const labelEvery = Math.ceil(data.length / Math.max(1, Math.floor(plotW / 44)))

  return (
    <div ref={ref} className="relative">
      <svg width={width} height={height} role="img" aria-label={yLabel ?? "Column chart"} className="block">
        {ticks.map((t) => (
          <g key={t}>
            <line x1={pad.l} x2={width - pad.r} y1={y(t)} y2={y(t)} stroke="var(--viz-grid)" />
            <text x={pad.l - 6} y={y(t) + 4} textAnchor="end" fontSize={11} fill="var(--viz-muted)" className="tabular-nums">
              {fmt(t)}
            </text>
          </g>
        ))}
        {data.map((d, i) => {
          const cx = pad.l + band * i + band / 2
          const top = y(d.value)
          const h = y(0) - top
          return (
            <g key={d.label} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}>
              <rect x={pad.l + band * i} y={pad.t} width={band} height={height - pad.t - pad.b} fill="transparent" />
              <path
                d={h > 0 ? roundedTop(cx - bar / 2, top, bar, h, Math.min(4, h)) : ""}
                fill={d.color ?? (d.highlight ? SERIES[1] : SERIES[0])}
                opacity={hover === null || hover === i ? 1 : 0.55}
              />
              {i % labelEvery === 0 && (
                <text x={cx} y={height - pad.b + 16} textAnchor="middle" fontSize={11} fill="var(--viz-muted)">
                  {d.label}
                </text>
              )}
            </g>
          )
        })}
        <line x1={pad.l} x2={width - pad.r} y1={y(0)} y2={y(0)} stroke="var(--viz-axis)" />
      </svg>
      {hover !== null && (
        <div
          className="viz-tooltip absolute pointer-events-none"
          style={{ left: Math.min(width - 180, Math.max(0, pad.l + band * hover)), top: 0 }}
        >
          <div className="font-semibold">{data[hover].label}</div>
          <div className="tabular-nums">{data[hover].display ?? fmt(data[hover].value)}</div>
          {data[hover].note && <Rich as="div" text={data[hover].note!} className="mt-0.5" />}
        </div>
      )}
      {yLabel && <div className="text-[11px] text-[color:var(--viz-muted)] mt-1">{yLabel}</div>}
    </div>
  )
}

function roundedTop(x: number, y: number, w: number, h: number, r: number) {
  return `M${x},${y + h}V${y + r}Q${x},${y} ${x + r},${y}H${x + w - r}Q${x + w},${y} ${x + w},${y + r}V${y + h}Z`
}

function niceStep(max: number) {
  const raw = max / 4
  const mag = 10 ** Math.floor(Math.log10(raw || 1))
  const n = raw / mag
  return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * mag
}

/* ------------------------------------------------------------------ */
/* Date ranges                                                         */
/* ------------------------------------------------------------------ */

export interface RangeItem {
  readonly label: string
  readonly start: number
  /** Omit for a single point in time. */
  readonly end?: number
  readonly group?: string
  readonly note?: string
  /** Shown beside the bar, e.g. "c. 50-60". */
  readonly display?: string
}

/**
 * Horizontal range bars on one shared axis: composition dates, fossil ranges,
 * manuscript dates. Negative numbers are BC (or "millions of years ago" when
 * the caller formats them that way).
 */
export function RangeChart({
  items,
  min,
  max,
  ticks,
  format = (n) => (n < 0 ? `${-n} BC` : `AD ${n}`),
  groups,
  markers = [],
  labelWidth = 150,
  reverse = false,
}: {
  readonly items: readonly RangeItem[]
  readonly min: number
  readonly max: number
  readonly ticks: readonly number[]
  readonly format?: (n: number) => string
  readonly groups?: readonly string[]
  readonly markers?: ReadonlyArray<{ readonly at: number; readonly label: string }>
  readonly labelWidth?: number
  readonly reverse?: boolean
}) {
  const [ref, width] = useWidth<HTMLDivElement>()
  const [hover, setHover] = useState<number | null>(null)
  const narrow = width < 520
  const lw = narrow ? 0 : labelWidth
  const rowH = narrow ? 40 : 26
  const pad = { t: markers.length ? 22 : 6, b: 26, r: 12 }
  const plotW = width - lw - pad.r - 8
  const x = (v: number) => {
    const t = (v - min) / (max - min)
    return lw + 8 + plotW * (reverse ? 1 - t : t)
  }
  const height = pad.t + items.length * rowH + pad.b
  const groupList = groups ?? Array.from(new Set(items.map((i) => i.group).filter(Boolean) as string[]))
  const colorOf = (g?: string) => SERIES[Math.max(0, groupList.indexOf(g ?? "")) % SERIES.length]

  return (
    <div ref={ref} className="relative">
      {groupList.length > 1 && <Legend items={groupList.map((g, i) => ({ label: g, color: SERIES[i % SERIES.length] }))} />}
      <svg width={width} height={height} className="block" role="img" aria-label="Date range chart">
        {ticks.map((t, k) => {
          const tx = x(t)
          // Thin the labels on narrow screens so neighbouring ticks never collide,
          // and keep the outermost labels inside the chart.
          const prev = k > 0 ? x(ticks[k - 1]) : -Infinity
          const showLabel = !narrow || k === 0 || Math.abs(tx - prev) >= 56 || k % 2 === 0
          const anchor = tx < 24 ? "start" : tx > width - 24 ? "end" : "middle"
          return (
            <g key={t}>
              <line x1={tx} x2={tx} y1={pad.t - 4} y2={height - pad.b} stroke="var(--viz-grid)" />
              {showLabel && (
                <text x={tx} y={height - pad.b + 16} textAnchor={anchor} fontSize={11} fill="var(--viz-muted)">
                  {format(t)}
                </text>
              )}
            </g>
          )
        })}
        {markers.map((m) => {
          // Keep the label inside the chart when the marker sits near either edge.
          const mx = x(m.at)
          const half = m.label.length * 3.3
          const anchor = mx - half < 0 ? "start" : mx + half > width ? "end" : "middle"
          const tx = anchor === "start" ? Math.max(0, mx - 4) : anchor === "end" ? Math.min(width, mx + 4) : mx
          return (
            <g key={m.label}>
              <line x1={mx} x2={mx} y1={pad.t - 6} y2={height - pad.b} stroke="var(--viz-ink-2)" strokeWidth={1.5} />
              <text x={tx} y={12} textAnchor={anchor} fontSize={11} fontWeight={600} fill="var(--viz-ink)">
                {m.label}
              </text>
            </g>
          )
        })}
        {items.map((it, i) => {
          const y0 = pad.t + i * rowH
          const barY = narrow ? y0 + 22 : y0 + 7
          const a = x(it.start)
          const b = x(it.end ?? it.start)
          const left = Math.min(a, b)
          const w = Math.abs(b - a)
          const color = colorOf(it.group)
          return (
            <g key={it.label + i} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} opacity={hover === null || hover === i ? 1 : 0.6}>
              <rect x={0} y={y0} width={width} height={rowH} fill="transparent" />
              <text x={narrow ? lw + 8 : lw} y={narrow ? y0 + 14 : y0 + 17} textAnchor={narrow ? "start" : "end"} fontSize={12} fill="var(--viz-ink)">
                {it.label}
              </text>
              {w < 8 ? (
                <circle cx={left + w / 2} cy={barY + 6} r={5} fill={color} stroke="var(--viz-surface)" strokeWidth={2} />
              ) : (
                <rect x={left} y={barY} width={w} height={12} rx={4} fill={color} />
              )}
              {it.display && !narrow && (
                <text
                  x={Math.max(a, b) + 8 > width - 70 ? left - 6 : Math.max(a, b) + 8}
                  y={barY + 10}
                  textAnchor={Math.max(a, b) + 8 > width - 70 ? "end" : "start"}
                  fontSize={11}
                  fill="var(--viz-ink-2)"
                >
                  {it.display}
                </text>
              )}
            </g>
          )
        })}
      </svg>
      {hover !== null && (
        <div
          className="viz-tooltip absolute pointer-events-none"
          style={{
            // Beside the bar's far end, on the same row, so it never hides other rows.
            left: Math.min(width - 230, Math.max(0, Math.max(x(items[hover].start), x(items[hover].end ?? items[hover].start)) + 14)),
            top: Math.max(0, pad.t + hover * rowH - 6),
          }}
        >
          <div className="font-semibold">{items[hover].label}</div>
          <div>{items[hover].display ?? (items[hover].end === undefined ? format(items[hover].start) : `${format(items[hover].start)} to ${format(items[hover].end!)}`)}</div>
          {items[hover].note && <Rich as="div" text={items[hover].note!} className="mt-0.5" />}
        </div>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Forest plot                                                         */
/* ------------------------------------------------------------------ */

export interface Study {
  readonly label: string
  readonly detail?: string
  readonly estimate: number
  readonly low: number
  readonly high: number
  readonly note?: string
}

/** Point estimates with confidence intervals against a line of no effect. */
export function ForestPlot({
  studies,
  nullValue = 1,
  min,
  max,
  ticks,
  log = true,
  leftLabel,
  rightLabel,
  metric,
}: {
  readonly studies: readonly Study[]
  readonly nullValue?: number
  readonly min: number
  readonly max: number
  readonly ticks: readonly number[]
  readonly log?: boolean
  readonly leftLabel: string
  readonly rightLabel: string
  readonly metric: string
}) {
  const [ref, width] = useWidth<HTMLDivElement>()
  const [hover, setHover] = useState<number | null>(null)
  const narrow = width < 520
  const lw = narrow ? 0 : 190
  const rowH = narrow ? 44 : 32
  const pad = { t: 8, b: 44, r: 16 }
  const plotW = width - lw - pad.r - 10
  const f = (v: number) => (log ? Math.log(v) : v)
  const x = (v: number) => lw + 10 + (plotW * (f(v) - f(min))) / (f(max) - f(min))
  const height = pad.t + studies.length * rowH + pad.b
  return (
    <div ref={ref} className="relative">
      <svg width={width} height={height} className="block" role="img" aria-label={`Forest plot of ${metric}`}>
        {ticks.map((t) => (
          <g key={t}>
            <line x1={x(t)} x2={x(t)} y1={pad.t} y2={height - pad.b} stroke="var(--viz-grid)" />
            <text x={x(t)} y={height - pad.b + 15} textAnchor="middle" fontSize={11} fill="var(--viz-muted)">
              {t}
            </text>
          </g>
        ))}
        <line x1={x(nullValue)} x2={x(nullValue)} y1={pad.t} y2={height - pad.b} stroke="var(--viz-ink-2)" strokeWidth={1.5} />
        <text x={x(nullValue) - 6} y={height - 6} textAnchor="end" fontSize={11} fill="var(--viz-ink-2)">
          ← {leftLabel}
        </text>
        <text x={x(nullValue) + 6} y={height - 6} fontSize={11} fill="var(--viz-ink-2)">
          {rightLabel} →
        </text>
        {studies.map((s, i) => {
          const y0 = pad.t + i * rowH
          const cy = narrow ? y0 + 30 : y0 + rowH / 2
          return (
            <g key={s.label} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}>
              <rect x={0} y={y0} width={width} height={rowH} fill="transparent" />
              <text x={narrow ? 10 : lw} y={narrow ? y0 + 14 : cy + 4} textAnchor={narrow ? "start" : "end"} fontSize={12} fill="var(--viz-ink)">
                {s.label}
              </text>
              <line x1={x(Math.max(min, s.low))} x2={x(Math.min(max, s.high))} y1={cy} y2={cy} stroke={SERIES[0]} strokeWidth={2} strokeLinecap="round" />
              <circle cx={x(s.estimate)} cy={cy} r={5.5} fill={SERIES[0]} stroke="var(--viz-surface)" strokeWidth={2} />
            </g>
          )
        })}
      </svg>
      {hover !== null && (
        <div className="viz-tooltip absolute pointer-events-none" style={{ left: Math.min(width - 240, Math.max(0, x(studies[hover].estimate) - 40)), top: pad.t + hover * rowH + rowH }}>
          <div className="font-semibold">{studies[hover].label}</div>
          {studies[hover].detail && <div>{studies[hover].detail}</div>}
          <div className="tabular-nums">
            {metric} {studies[hover].estimate} ({studies[hover].low} to {studies[hover].high})
          </div>
          {studies[hover].note && <Rich as="div" text={studies[hover].note!} className="mt-0.5" />}
        </div>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Lines                                                               */
/* ------------------------------------------------------------------ */

export interface LineSeries {
  readonly name: string
  readonly points: ReadonlyArray<{ readonly x: number; readonly y: number; readonly label?: string }>
  readonly color?: string
  /** Draw dots only (no connecting line). */
  readonly dots?: boolean
}

/** Crosshair + tooltip line chart. One y axis only. */
export function LineChart({
  series,
  xMin,
  xMax,
  yMin = 0,
  yMax,
  xTicks,
  yTicks,
  xFormat = String,
  yFormat = String,
  xLabel,
  yLabel,
  height = 260,
  annotations = [],
}: {
  readonly series: readonly LineSeries[]
  readonly xMin: number
  readonly xMax: number
  readonly yMin?: number
  readonly yMax: number
  readonly xTicks: readonly number[]
  readonly yTicks: readonly number[]
  readonly xFormat?: (n: number) => string
  readonly yFormat?: (n: number) => string
  readonly xLabel?: string
  readonly yLabel?: string
  readonly height?: number
  readonly annotations?: ReadonlyArray<{ readonly x: number; readonly label: string }>
}) {
  const [ref, width] = useWidth<HTMLDivElement>()
  const [hoverX, setHoverX] = useState<number | null>(null)
  const pad = { l: 44, r: 16, t: annotations.length ? 22 : 10, b: 40 }
  const x = (v: number) => pad.l + ((width - pad.l - pad.r) * (v - xMin)) / (xMax - xMin)
  const y = (v: number) => pad.t + ((height - pad.t - pad.b) * (yMax - v)) / (yMax - yMin)
  const allX = useMemo(() => Array.from(new Set(series.flatMap((s) => s.points.map((p) => p.x)))).sort((a, b) => a - b), [series])

  const onMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = e.clientX - rect.left
    let best = allX[0]
    for (const v of allX) if (Math.abs(x(v) - px) < Math.abs(x(best) - px)) best = v
    setHoverX(best)
  }

  return (
    <div ref={ref} className="relative">
      {series.length > 1 && <Legend items={series.map((s, i) => ({ label: s.name, color: s.color ?? SERIES[i] }))} />}
      <svg width={width} height={height} className="block" onMouseMove={onMove} onMouseLeave={() => setHoverX(null)} role="img" aria-label={yLabel ?? "Line chart"}>
        {yTicks.map((t) => (
          <g key={t}>
            <line x1={pad.l} x2={width - pad.r} y1={y(t)} y2={y(t)} stroke="var(--viz-grid)" />
            <text x={pad.l - 6} y={y(t) + 4} textAnchor="end" fontSize={11} fill="var(--viz-muted)" className="tabular-nums">
              {yFormat(t)}
            </text>
          </g>
        ))}
        {xTicks.map((t) => (
          <text key={t} x={x(t)} y={height - pad.b + 16} textAnchor="middle" fontSize={11} fill="var(--viz-muted)">
            {xFormat(t)}
          </text>
        ))}
        <line x1={pad.l} x2={width - pad.r} y1={y(yMin)} y2={y(yMin)} stroke="var(--viz-axis)" />
        {annotations.map((a) => (
          <g key={a.label}>
            <line x1={x(a.x)} x2={x(a.x)} y1={pad.t - 4} y2={y(yMin)} stroke="var(--viz-axis)" />
            <text x={x(a.x)} y={12} textAnchor="middle" fontSize={11} fill="var(--viz-ink-2)">
              {a.label}
            </text>
          </g>
        ))}
        {series.map((s, si) => {
          const color = s.color ?? SERIES[si]
          const d = s.points.map((p, i) => `${i ? "L" : "M"}${x(p.x)},${y(p.y)}`).join("")
          return (
            <g key={s.name}>
              {!s.dots && <path d={d} fill="none" stroke={color} strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />}
              {(s.dots || s.points.length < 30) &&
                s.points.map((p) => (
                  <circle key={p.x} cx={x(p.x)} cy={y(p.y)} r={s.dots ? 4.5 : 3.5} fill={color} stroke="var(--viz-surface)" strokeWidth={2} />
                ))}
            </g>
          )
        })}
        {hoverX !== null && <line x1={x(hoverX)} x2={x(hoverX)} y1={pad.t} y2={y(yMin)} stroke="var(--viz-ink-2)" strokeOpacity={0.5} />}
        {xLabel && (
          <text x={(width + pad.l) / 2} y={height - 4} textAnchor="middle" fontSize={11} fill="var(--viz-ink-2)">
            {xLabel}
          </text>
        )}
      </svg>
      {hoverX !== null && (
        <div className="viz-tooltip absolute pointer-events-none" style={{ left: Math.min(width - 200, Math.max(0, x(hoverX) + 10)), top: pad.t }}>
          <div className="font-semibold">{xFormat(hoverX)}</div>
          {series.map((s, si) => {
            const p = s.points.find((q) => q.x === hoverX)
            return p ? (
              <div key={s.name} className="flex items-center gap-1.5">
                <span className="inline-block h-2 w-2 rounded-full" style={{ background: s.color ?? SERIES[si] }} />
                {p.label ?? s.name}: <span className="tabular-nums">{yFormat(p.y)}</span>
              </div>
            ) : null
          })}
        </div>
      )}
      {yLabel && <div className="text-[11px] text-[color:var(--viz-muted)] mt-1">{yLabel}</div>}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Part to whole                                                       */
/* ------------------------------------------------------------------ */

export function StackedBar({
  segments,
  total,
  unit = "",
}: {
  readonly segments: ReadonlyArray<{ readonly label: string; readonly value: number; readonly color?: string; readonly note?: string }>
  readonly total?: number
  readonly unit?: string
}) {
  const sum = total ?? segments.reduce((a, s) => a + s.value, 0)
  const [hover, setHover] = useState<number | null>(null)
  return (
    <div>
      <Legend items={segments.map((s, i) => ({ label: `${s.label} (${s.value}${unit})`, color: s.color ?? SERIES[i] }))} />
      <div className="flex h-7 w-full gap-[2px]" role="img" aria-label={segments.map((s) => `${s.label} ${s.value}${unit}`).join(", ")}>
        {segments.map((s, i) => (
          <div
            key={s.label}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            className={cn("h-full first:rounded-l-[4px] last:rounded-r-[4px] transition-opacity")}
            style={{ width: `${(s.value / sum) * 100}%`, background: s.color ?? SERIES[i], opacity: hover === null || hover === i ? 1 : 0.55 }}
          />
        ))}
      </div>
      {hover !== null && segments[hover].note && (
        <Rich as="div" text={`**${segments[hover].label}:** ${segments[hover].note}`} className="text-[12px] mt-2 text-[color:var(--viz-ink-2)]" />
      )}
    </div>
  )
}
