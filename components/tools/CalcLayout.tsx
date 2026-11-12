'use client'
import { useEffect, useState } from 'react'

/** Bordered calculator panel with a mono title bar. */
export function CalcFrame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-line bg-paper">
      <div className="px-5 py-3.5 border-b border-line bg-paper-raised">
        <h3 className="font-data text-[0.72rem] tracking-[0.15em] uppercase text-ink-soft">{title}</h3>
      </div>
      <div className="px-5 py-6">{children}</div>
    </div>
  )
}

/**
 * Inputs left / results right on lg+, single stacked column below.
 * The results column sticks below the fixed nav (5.5rem) so figures stay in
 * view while the user works down a long input column.
 */
export function CalcColumns({
  inputs,
  results,
  sticky = true,
}: {
  inputs: React.ReactNode
  results: React.ReactNode
  sticky?: boolean
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 lg:items-start">
      <div className="min-w-0 space-y-5">{inputs}</div>
      <div className={`min-w-0 space-y-5 ${sticky ? 'lg:sticky lg:top-[5.5rem] print:static' : ''}`}>
        {results}
      </div>
    </div>
  )
}

/**
 * Screen-reader-only live region. Announces a short summary of the computed
 * rates once the user pauses typing, instead of making the visual result
 * cards live (which would re-read every card on every keystroke).
 */
export function LiveSummary({ message, delay = 1000 }: { message: string; delay?: number }) {
  const [announced, setAnnounced] = useState('')

  useEffect(() => {
    const t = setTimeout(() => setAnnounced(message), delay)
    return () => clearTimeout(t)
  }, [message, delay])

  return (
    <p className="sr-only" aria-live="polite" aria-atomic="true">
      {announced}
    </p>
  )
}
