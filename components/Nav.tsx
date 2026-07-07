'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'
import BrandMark from './ui/BrandMark'

const links = [
  { label: 'Services', href: '/services/' },
  { label: 'Free Tools', href: '/tools/' },
  { label: 'Library', href: '/library/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'About', href: '/about/' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

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

  const isActive = (href: string) => pathname === href

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-8 lg:px-16 py-5 flex justify-between items-center bg-paper border-b border-line transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_1px_24px_rgba(0,0,0,0.08)]' : ''
      }`}
    >
      {/* Logo */}
      <a href="/" className="font-head font-extrabold uppercase text-xl tracking-tight text-ink flex items-center gap-2.5">
        <BrandMark className="w-[22px] h-[22px]" />
        <span>
          Safety<span className="text-signal">Studio</span>
        </span>
      </a>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            aria-current={isActive(l.href) ? 'page' : undefined}
            className={`font-body text-sm transition-colors duration-200 pb-0.5 border-b-2 ${
              isActive(l.href)
                ? 'text-ink border-signal'
                : 'text-ink-soft border-transparent hover:text-ink'
            }`}
          >
            {l.label}
          </a>
        ))}
        <ThemeToggle />
        <a
          href="/about/#contact"
          className="bg-signal text-paper font-data text-sm font-medium px-5 py-2 transition-opacity duration-200 hover:opacity-90"
        >
          Get in Touch
        </a>
      </div>

      {/* Mobile: theme toggle + hamburger */}
      <div className="md:hidden flex items-center gap-2">
        <ThemeToggle />
        <button
          ref={hamburgerRef}
          className="text-ink p-1"
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
      </div>

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
            className="absolute top-full left-0 right-0 bg-paper border-b border-line overflow-hidden md:hidden"
            role="dialog"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={closeMenu}
                  aria-current={isActive(l.href) ? 'page' : undefined}
                  className={`font-body text-sm transition-colors ${
                    isActive(l.href) ? 'text-signal' : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/about/#contact"
                onClick={closeMenu}
                className="font-data text-signal text-sm border-t border-line pt-4"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
