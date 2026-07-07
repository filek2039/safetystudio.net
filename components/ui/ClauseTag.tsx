interface ClauseTagProps {
  /** Clause number as typeset in a standard, e.g. "04" or "04.2" */
  num: string
  label: string
  className?: string
}

/**
 * Section label typeset like a clause reference in a safety standard:
 * `04 — RISK ANALYSIS`. Replaces the legacy uppercase gold micro-tags
 * (redesign plan §2.3).
 */
export default function ClauseTag({ num, label, className = '' }: ClauseTagProps) {
  return (
    <p
      className={`font-data text-xs uppercase tracking-[0.08em] text-ink-soft border-l-2 border-signal pl-3 ${className}`}
    >
      <span className="text-signal">{num}</span>
      <span aria-hidden="true"> — </span>
      {label}
    </p>
  )
}
