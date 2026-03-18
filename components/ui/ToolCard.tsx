'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ToolCardProps {
  icon: React.ReactNode
  title: string
  subtitle: string
  children: React.ReactNode
}

export default function ToolCard({ icon, title, subtitle, children }: ToolCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative bg-navy-mid/80 backdrop-blur-sm border border-gold/15 rounded-sm overflow-hidden transition-colors duration-300 hover:border-gold/35">
      {/* Gold top line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] origin-left"
        style={{ background: 'linear-gradient(90deg, #c9a84c, #e8c96a)' }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: open ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "circOut" }}
      />

      {/* Header */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-8 py-6 text-left cursor-pointer"
        aria-expanded={open}
      >
        <div className="flex items-center gap-4">
          <div className="text-gold w-8 h-8 flex-shrink-0">{icon}</div>
          <div>
            <div className="text-white font-medium text-base tracking-wide">{title}</div>
            <div className="text-muted text-xs mt-0.5">{subtitle}</div>
          </div>
        </div>
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.35, ease: "circOut" }}
          className="w-5 h-5 text-muted flex-shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      {/* Body */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: "circOut" }}
            style={{ overflow: 'hidden' }}
          >
            <div className="border-t border-gold/10 px-8 pb-8 pt-6">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
