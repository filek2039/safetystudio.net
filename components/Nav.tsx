'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Services', href: '/#services' },
  { label: 'Free Tools', href: '/#tools' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/#about' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 60))

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
    hamburgerRef.current?.focus()
  }, [])

  // Escape key closes mobile menu
  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
      // Focus trap
      if (e.key === 'Tab' && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>('a, button')
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen, closeMenu])

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-16 max-md:px-6 py-5 flex justify-between items-center border-b border-gold/[0.12] backdrop-blur-md transition-shadow duration-300"
      animate={{
        backgroundColor: scrolled ? 'rgba(10,22,40,0.97)' : 'rgba(10,22,40,0.82)',
        boxShadow: scrolled ? '0 1px 24px rgba(0,0,0,0.35)' : 'none',
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Logo */}
      <a href="/" className="font-display text-2xl font-semibold tracking-[0.04em] text-white">
        Safety<span className="text-gold">Studio</span>
      </a>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-10">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-muted text-[0.8rem] font-medium tracking-[0.1em] uppercase hover:text-gold transition-colors duration-300"
          >
            {l.label}
          </a>
        ))}
        <motion.a
          href="/#contact"
          className="text-gold text-[0.8rem] font-medium tracking-[0.1em] uppercase border border-gold px-5 py-2 rounded-sm transition-colors duration-300 hover:bg-gold hover:text-navy"
          whileHover={{ y: -1 }}
          transition={{ duration: 0.15 }}
        >
          Get in Touch
        </motion.a>
      </div>

      {/* Mobile hamburger */}
      <button
        ref={hamburgerRef}
        className="md:hidden text-cream p-1"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          {menuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "circOut" }}
            className="absolute top-full left-0 right-0 bg-navy-mid border-b border-gold/15 overflow-hidden md:hidden"
            role="dialog"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={closeMenu}
                  className="text-muted text-sm tracking-widest uppercase hover:text-gold transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/#contact"
                onClick={closeMenu}
                className="text-gold text-sm tracking-widest uppercase border-t border-gold/20 pt-4"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
