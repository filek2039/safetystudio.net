interface SignalButtonProps {
  variant?: 'solid' | 'text'
  href?: string
  onClick?: () => void
  disabled?: boolean
  children: React.ReactNode
  className?: string
}

/**
 * "Field Standard" CTA: a solid signal-orange button paired with a plain
 * underlined text link — an asymmetric pair rather than matching twin
 * buttons. Additive alongside the legacy Button.tsx, which Library/FreeTools
 * still use until their own redesign pass.
 *
 * Hover lifts 2px and :active settles back with a pressed look — pure CSS,
 * so it works without hydration and is dropped under reduced motion.
 */
export default function SignalButton({
  variant = 'solid',
  href,
  onClick,
  disabled = false,
  children,
  className = '',
}: SignalButtonProps) {
  const motion =
    'transition-[opacity,transform,color,filter] duration-150 ease-out hover:-translate-y-0.5 active:translate-y-0 disabled:hover:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0'

  const base =
    variant === 'solid'
      ? 'inline-block px-7 py-3 bg-signal text-paper font-data text-sm font-medium tracking-wide hover:opacity-90 active:opacity-100 active:brightness-90 disabled:cursor-wait disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-paper'
      : 'inline-block px-1 py-3 text-ink font-data text-sm font-medium tracking-wide underline decoration-signal decoration-2 underline-offset-4 hover:text-signal active:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-paper'

  const combined = `${base} ${motion} ${className}`

  if (href) {
    return (
      <a href={href} className={combined}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} disabled={disabled} aria-disabled={disabled} className={combined}>
      {children}
    </button>
  )
}
