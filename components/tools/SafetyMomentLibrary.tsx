'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SM_CATEGORIES, SMCategory } from '@/data/safetyMoments'

export default function SafetyMomentLibrary() {
  const [activeCat, setActiveCat] = useState<string>(SM_CATEGORIES[0].id)
  const [copied, setCopied] = useState<string | null>(null)

  const category = SM_CATEGORIES.find((c) => c.id === activeCat) as SMCategory

  const handleCopy = async (id: string, body: string) => {
    try {
      await navigator.clipboard.writeText(body)
      setCopied(id)
      setTimeout(() => setCopied(null), 2000)
      window.gtag?.('event', 'tool_used', {
        tool_name: 'safety_moment_library',
        action: 'copy_moment',
        moment_id: id,
        category: activeCat,
      })
    } catch {
      // clipboard not available
    }
  }

  return (
    <div id="safety-moment-library">
      {/* Category tabs */}
      <div className="flex gap-2 flex-wrap pb-2 mb-6 border-b border-line">
        {SM_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setActiveCat(cat.id)
              window.gtag?.('event', 'tool_used', {
                tool_name: 'safety_moment_library',
                action: 'category_switch',
                category: cat.id,
              })
            }}
            className={`font-data text-[0.68rem] tracking-[0.08em] uppercase px-3.5 py-1.5 transition-all duration-200 whitespace-nowrap border ${
              activeCat === cat.id
                ? 'text-signal border-signal/50 bg-paper-raised'
                : 'text-ink-soft border-transparent hover:text-ink hover:border-line'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Moments */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCat}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="flex flex-col gap-4"
        >
          {category.moments.map((moment, i) => (
            <div
              key={moment.id}
              className="relative bg-paper-raised border border-line pl-5 pr-5 py-4"
            >
              <button
                onClick={() => handleCopy(moment.id, moment.body)}
                className={`absolute top-3 right-3 font-data text-[0.62rem] tracking-[0.1em] uppercase px-2.5 py-1 border transition-all duration-200 ${
                  copied === moment.id
                    ? 'text-ok border-ok/40'
                    : 'text-ink-soft border-line hover:text-signal hover:border-signal/40'
                }`}
                title="Copy to clipboard"
              >
                {copied === moment.id ? 'Copied ✓' : 'Copy'}
              </button>
              <div className="font-data text-[0.65rem] tracking-[0.1em] uppercase text-ink-soft mb-2 pr-16">
                <span className="text-signal">{String(i + 1).padStart(2, '0')}</span>
                <span aria-hidden="true"> — </span>
                {moment.title}
              </div>
              <p className="font-body text-ink text-sm leading-[1.8] pr-10">{moment.body}</p>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      <p className="font-data text-[0.6rem] text-ink-soft mt-6 text-center">
        These safety moments are for training and awareness purposes. Always follow your site-specific procedures and regulations.
      </p>
    </div>
  )
}
