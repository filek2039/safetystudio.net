'use client'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Hero from '@/components/Hero'
import GoldDivider from '@/components/ui/GoldDivider'
import Services from '@/components/Services'
import FreeTools from '@/components/FreeTools'
import Library from '@/components/Library'
import About from '@/components/About'
import Contact from '@/components/Contact'

type Section = 'home' | 'services' | 'tools' | 'library' | 'about'

/**
 * Maps URL hash values to their corresponding section.
 * Tool-specific deep-link hashes (e.g. `#safety-moment-library`) map to their
 * parent tab so `TabbedContent` shows the right section before the tool auto-opens.
 */
const HASH_SECTION_MAP: Record<string, Section> = {
  '#services': 'services',
  '#tools': 'tools',
  '#library': 'library',
  '#safety-moment-library': 'library',
  '#about': 'about',
  '#contact': 'about',
}

/** Resolves a URL hash to its section; unrecognised hashes default to 'home'. */
function getSection(hash: string): Section {
  return HASH_SECTION_MAP[hash] ?? 'home'
}

const TRANSITION = { duration: 0.25, ease: 'easeOut' } as const

const SECTION_CONTENT: Record<Section, React.ReactNode> = {
  home: <Hero />,
  services: <Services />,
  tools: <FreeTools />,
  library: <Library />,
  about: (
    <>
      <About />
      <Contact />
    </>
  ),
}

/**
 * Hash-driven tab router that swaps homepage sections without a full-page navigation.
 * Listens for `hashchange` events and scrolls to the top on each transition.
 */
export default function TabbedContent() {
  const [active, setActive] = useState<Section>('home')

  useEffect(() => {
    const handleHashChange = () => {
      setActive(getSection(window.location.hash))
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    setActive(getSection(window.location.hash))
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={TRANSITION}
      >
        {SECTION_CONTENT[active]}
        {active !== 'home' && <GoldDivider />}
      </motion.div>
    </AnimatePresence>
  )
}
