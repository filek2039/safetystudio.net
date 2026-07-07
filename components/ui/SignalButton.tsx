'use client'
import { motion } from 'framer-motion'

interface SignalButtonProps {
  variant?: 'solid' | 'text'
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
}

/**
 * "Field Standard" CTA: a solid signal-orange button paired with a plain
 * underlined text link — an asymmetric pair rather than matching twin
 * buttons. Additive alongside the legacy Button.tsx, which Library/FreeTools
 * still use until their own redesign pass.
 */
export default function SignalButton({
  variant = 'solid',
  href,
  onClick,
  children,
  className = '',
}: SignalButtonProps) {
  const base =
    variant === 'solid'
      ? 'inline-block px-7 py-3 bg-signal text-paper font-data text-sm font-medium tracking-wide transition-opacity duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-paper'
      : 'inline-block px-1 py-3 text-ink font-data text-sm font-medium tracking-wide underline decoration-signal decoration-2 underline-offset-4 transition-colors duration-200 hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-paper'

  const combined = `${base} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        className={combined}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
        transition={{ duration: 0.15 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      className={combined}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      transition={{ duration: 0.15 }}
    >
      {children}
    </motion.button>
  )
}
