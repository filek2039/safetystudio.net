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
    } catch {
      // clipboard not available
    }
  }

  return (
    <div>
      {/* Category tabs */}
      <div className="flex gap-2 flex-wrap pb-2 mb-6 border-b border-gold/10">
        {SM_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCat(cat.id)}
            className={`text-[0.68rem] tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-sm transition-all duration-200 whitespace-nowrap ${
              activeCat === cat.id
                ? 'text-gold border border-gold/50 bg-gold/8'
                : 'text-muted border border-transparent hover:text-cream hover:border-gold/20'
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
          {category.moments.map((moment) => (
            <div
              key={moment.id}
              className="relative bg-navy/60 border-l-2 border-gold/40 pl-5 pr-5 py-4 rounded-r-sm"
            >
              <button
                onClick={() => handleCopy(moment.id, moment.body)}
                className={`absolute top-3 right-3 text-[0.62rem] tracking-[0.12em] uppercase px-2.5 py-1 rounded-sm border transition-all duration-200 ${
                  copied === moment.id
                    ? 'text-emerald-400 border-emerald-400/40'
                    : 'text-muted border-muted/20 hover:text-gold hover:border-gold/30'
                }`}
                title="Copy to clipboard"
              >
                {copied === moment.id ? 'Copied ✓' : 'Copy'}
              </button>
              <div className="text-[0.65rem] tracking-[0.18em] uppercase text-gold mb-2 font-medium pr-16">
                {moment.title}
              </div>
              <p className="text-cream/85 text-sm font-light leading-[1.8] pr-10">{moment.body}</p>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      <p className="text-[0.6rem] text-muted/40 italic mt-6 text-center">
        These safety moments are for training and awareness purposes. Always follow your site-specific procedures and regulations.
      </p>
    </div>
  )
}
