'use client'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Hero from '@/components/Hero'
import GoldDivider from '@/components/ui/GoldDivider'
import Services from '@/components/Services'
import FreeTools from '@/components/FreeTools'
import About from '@/components/About'
import Contact from '@/components/Contact'

type Section = 'home' | 'services' | 'tools' | 'about'

function getSection(hash: string): Section {
  switch (hash) {
    case '#services': return 'services'
    case '#tools':    return 'tools'
    case '#about':
    case '#contact':  return 'about'
    default:          return 'home'
  }
}

const sectionContent: Record<Section, React.ReactNode> = {
  home: <Hero />,
  services: <Services />,
  tools: <FreeTools />,
  about: (
    <>
      <About />
      <Contact />
    </>
  ),
}

export default function TabbedContent() {
  const [active, setActive] = useState<Section>('home')

  useEffect(() => {
    setActive(getSection(window.location.hash))

    const onHashChange = () => {
      setActive(getSection(window.location.hash))
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        {sectionContent[active]}
        {active !== 'home' && <GoldDivider />}
      </motion.div>
    </AnimatePresence>
  )
}
