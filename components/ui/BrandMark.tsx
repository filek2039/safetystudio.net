interface BrandMarkProps {
  className?: string
}

/**
 * The SafetyStudio brand mark: three staggered barriers (Reason's
 * defense-in-depth model) whose gaps never align — no straight path
 * through to harm. The signal-orange bar is the barrier that held.
 * Colors follow the theme via CSS variables.
 */
export default function BrandMark({ className = 'w-5 h-5' }: BrandMarkProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" role="img">
      <g fill="rgb(var(--ink))">
        <rect x="2" y="4" width="17" height="6" rx="1.5" />
        <rect x="24" y="4" width="6" height="6" rx="1.5" />
        <rect x="2" y="13" width="6" height="6" rx="1.5" />
        <rect x="2" y="22" width="12" height="6" rx="1.5" />
        <rect x="19" y="22" width="11" height="6" rx="1.5" />
      </g>
      <rect x="13" y="13" width="17" height="6" rx="1.5" fill="rgb(var(--signal))" />
    </svg>
  )
}
