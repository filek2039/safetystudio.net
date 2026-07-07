interface DimensionRuleProps {
  /** Optional centered label, e.g. "SERVICES · 6 ITEMS" */
  label?: string
  className?: string
}

/**
 * Section divider styled like a dimension line in a technical drawing:
 * end ticks, hairline rule, optional centered mono label.
 * Replaces the legacy GoldDivider (redesign plan §2.3).
 */
export default function DimensionRule({ label, className = '' }: DimensionRuleProps) {
  return (
    <div
      role="separator"
      aria-label={label}
      className={`flex items-center gap-4 text-line ${className}`}
    >
      <span className="h-2 w-px bg-current" aria-hidden="true" />
      <span className="h-px flex-1 bg-current" aria-hidden="true" />
      {label && (
        <span className="font-data text-[0.7rem] uppercase tracking-[0.15em] text-ink-soft whitespace-nowrap">
          {label}
        </span>
      )}
      <span className="h-px flex-1 bg-current" aria-hidden="true" />
      <span className="h-2 w-px bg-current" aria-hidden="true" />
    </div>
  )
}
