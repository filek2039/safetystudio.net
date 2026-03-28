'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ToolCardProps {
  icon: React.ReactNode
  title: string
  subtitle: string
  children: React.ReactNode
  defaultOpen?: boolean
  /** When set, the card receives this DOM id and auto-opens when the URL hash matches. */
  id?: string
}

/** Hash values that represent top-level navigation tabs, not specific tool anchors. */
const TAB_HASHES = new Set(['', '#tools', '#services', '#about', '#contact'])

/**
 * Returns whether this card should start open on initial render.
 * Suppresses `defaultOpen` when the URL hash targets a different specific tool,
 * so only the intended card is expanded on deep-link navigation.
 */
function resolveInitialOpen(defaultOpen: boolean): boolean {
  if (!defaultOpen || typeof window === 'undefined') return defaultOpen
  const { hash } = window.location
  return !hash || TAB_HASHES.has(hash)
}

/** Accordion card that presents a single HSE tool with a collapsible body. */
export default function ToolCard({
  icon,
  title,
  subtitle,
  children,
  defaultOpen = false,
  id,
}: ToolCardProps) {
  const [open, setOpen] = useState(() => resolveInitialOpen(defaultOpen))

  /** Auto-opens this card when the URL hash matches its id on mount. */
  useEffect(() => {
    if (id && window.location.hash === `#${id}`) {
      setOpen(true)
    }
  }, [id])

  return (
    <div
      id={id}
      className="relative bg-navy-mid/80 backdrop-blur-sm border border-gold/15 rounded-sm overflow-hidden transition-colors duration-300 hover:border-gold/35 card-depth"
    >
      {/* Animated gold accent line along the top edge */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] origin-left"
        style={{ background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-light))' }}
        initial={{ scaleX: defaultOpen ? 1 : 0 }}
        animate={{ scaleX: open ? 1 : 0 }}
        transition={{ duration: 0.4, ease: 'circOut' }}
      />

      {/* Clickable header row */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-8 py-6 text-left cursor-pointer"
        aria-expanded={open}
      >
        <div className="flex items-center gap-4">
          <div className="text-gold w-8 h-8 flex-shrink-0">{icon}</div>
          <div>
            <div className="text-cream font-medium text-base tracking-wide">{title}</div>
            <div className="text-muted text-xs mt-0.5">{subtitle}</div>
          </div>
        </div>
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.35, ease: 'circOut' }}
          className="w-5 h-5 text-muted flex-shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      {/* Collapsible body */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: 'circOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div className="border-t border-gold/10 px-8 pb-8 pt-6">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
