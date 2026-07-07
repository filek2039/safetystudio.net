interface ClauseTagProps {
  label: string
  className?: string
}

/**
 * Section label typeset like a clause reference in a safety standard.
 * Replaces the legacy uppercase gold micro-tags (redesign plan §2.3).
 */
export default function ClauseTag({ label, className = '' }: ClauseTagProps) {
  return (
    <p
      className={`font-data text-xs uppercase tracking-[0.08em] text-ink-soft border-l-2 border-signal pl-3 ${className}`}
    >
      {label}
    </p>
  )
}
