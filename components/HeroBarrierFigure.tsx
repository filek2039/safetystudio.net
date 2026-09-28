'use client'
import { useState, type CSSProperties } from 'react'

interface HeroBarrierFigureProps {
  className?: string
}

/** Animation delay helper — keeps the timeline readable below. */
const at = (s: number): CSSProperties => ({ animationDelay: `${s}s` })

/* Barrier-stack geometry: the brand mark (components/ui/BrandMark.tsx, 32×32)
   at 10× scale, offset 60 units down to leave headroom for the hazard source.
   Gaps are NOT realigned — this is the mark, exactly, drawn large. */
const INK_BARS = [
  { x: 20, y: 100, w: 170, from: -32, delay: 0.7 },  // B-01, left
  { x: 240, y: 100, w: 60, from: 32, delay: 0.8 },   // B-01, right
  { x: 20, y: 190, w: 60, from: -32, delay: 0.95 },  // B-02, left
  { x: 20, y: 280, w: 120, from: -32, delay: 1.1 },  // B-03, left
  { x: 190, y: 280, w: 110, from: 32, delay: 1.2 },  // B-03, right
]

const LABELS = [
  { y: 130, text: 'B-01', note: 'BREACHED', delay: 1.4 },
  { y: 220, text: 'B-02', note: 'HELD', delay: 3.5, held: true },
  { y: 310, text: 'B-03', note: 'STANDBY', delay: 1.6 },
]

/**
 * Hero figure: the barrier stack as a technical drawing that plays out
 * Reason's defense-in-depth model. Construction lines draw, the barriers
 * slide into place, then a hazard falls through the gap in B-01 and is
 * arrested by the signal barrier (B-02). Hovering the figure re-tests it.
 *
 * Motion is pure CSS (see "Hero barrier figure" in globals.css); under
 * prefers-reduced-motion every animation is removed and the final frame
 * renders statically. Decorative — hidden from assistive tech.
 */
export default function HeroBarrierFigure({ className = '' }: HeroBarrierFigureProps) {
  // Bumping the key remounts the hazard group, replaying its sequence.
  const [run, setRun] = useState(0)
  const replay = run > 0
  const t0 = replay ? 0 : 2.3 // hazard release time

  return (
    <figure
      className={`bs-figure no-print ${className}`}
      aria-hidden="true"
      onMouseEnter={() => setRun((r) => r + 1)}
    >
      <svg viewBox="0 0 470 380" className="w-full h-auto overflow-visible" fill="none">
        <defs>
          <mask id="bs-trace-mask" maskUnits="userSpaceOnUse">
            <rect
              key={run}
              className="bs-trace-reveal"
              style={at(t0)}
              x="205" y="34" width="20" height="156"
              fill="white"
            />
          </mask>
        </defs>

        {/* ── Construction layer ─────────────────────────────── */}
        <g stroke="rgb(var(--line))" strokeWidth="1">
          {/* hazard axis (centerline) */}
          <line
            className="bs-fade" style={at(0.2)}
            x1="215" y1="16" x2="215" y2="364"
            strokeDasharray="10 4 2 4"
          />
          {/* stack extents */}
          {[100, 340].map((y, i) => (
            <line
              key={y} className="bs-draw" style={at(0.25 + i * 0.1)} pathLength={1}
              x1="4" y1={y} x2="330" y2={y}
            />
          ))}
          {/* gap dimension over B-01 */}
          <g className="bs-fade" style={at(1.3)} stroke="rgb(var(--ink-soft))">
            <line x1="190" y1="84" x2="240" y2="84" />
            <line x1="190" y1="78" x2="190" y2="90" />
            <line x1="240" y1="78" x2="240" y2="90" />
          </g>
          {/* leaders from each barrier to its label */}
          {LABELS.map((l) => (
            <line
              key={l.y} className="bs-draw" style={at(l.delay - 0.3)} pathLength={1}
              x1="306" y1={l.y} x2="336" y2={l.y}
              stroke="rgb(var(--ink-soft))"
            />
          ))}
        </g>

        {/* ── Barriers ───────────────────────────────────────── */}
        <g fill="rgb(var(--ink))">
          {INK_BARS.map((b) => (
            <rect
              key={`${b.x}-${b.y}`}
              className="bs-bar"
              style={{ ...at(b.delay), ['--bs-from' as string]: `${b.from}px` }}
              x={b.x} y={b.y} width={b.w} height="60" rx="15"
            />
          ))}
        </g>
        {/* the barrier that holds — lands last, absorbs the hit */}
        <g className="bs-held" style={at(3.3)}>
          <rect
            className="bs-bar"
            style={{ ...at(1.45), ['--bs-from' as string]: '48px' }}
            x="130" y="190" width="170" height="60" rx="15"
            fill="rgb(var(--signal))"
          />
        </g>

        {/* ── Labels ─────────────────────────────────────────── */}
        <g className="font-data" fontSize="11" letterSpacing="1.2">
          <text className="bs-fade" style={at(1.4)} x="182" y="88" textAnchor="end" fill="rgb(var(--ink-soft))">
            GAP
          </text>
          {LABELS.map((l) => (
            <text key={l.y} className="bs-fade" style={at(l.delay)} x="344" y={l.y + 4} fill="rgb(var(--ink-soft))">
              {l.text}
              <tspan fill={l.held ? 'rgb(var(--signal))' : undefined} dx="8">{l.note}</tspan>
            </text>
          ))}
        </g>

        {/* ── Hazard (remounted on hover to replay) ──────────── */}
        <g key={run}>
          <text
            className="font-data bs-fade" style={at(t0 - 0.4)}
            x="227" y="30" fontSize="11" letterSpacing="1.2" fill="rgb(var(--signal))"
          >
            HAZARD
          </text>
          <circle
            className="bs-fade" style={at(t0 - 0.4)}
            cx="215" cy="26" r="5" stroke="rgb(var(--signal))" strokeWidth="1.5"
          />
          <line
            mask="url(#bs-trace-mask)"
            x1="215" y1="34" x2="215" y2="188"
            stroke="rgb(var(--signal))" strokeWidth="1.5" strokeDasharray="4 5"
          />
          {/* impact at the face of B-02 */}
          <circle
            className="bs-impact" style={at(t0 + 1)}
            cx="215" cy="190" r="9" stroke="rgb(var(--signal))" strokeWidth="1.5"
          />
          <circle
            className="bs-impact" style={at(t0 + 1.12)}
            cx="215" cy="190" r="9" stroke="rgb(var(--signal))" strokeWidth="1"
          />
        </g>
      </svg>

      <figcaption className="bs-fade mt-6 flex items-center gap-4 text-line" style={at(1.8)}>
        <span className="h-px flex-1 bg-current" />
        <span className="font-data text-[0.7rem] uppercase tracking-[0.15em] text-ink-soft whitespace-nowrap">
          Fig. 1 — Defense in depth
        </span>
        <span className="h-px flex-1 bg-current" />
      </figcaption>
    </figure>
  )
}
