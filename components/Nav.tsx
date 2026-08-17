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
      className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-line bg-paper/95 px-6 py-4 backdrop-blur-md transition-shadow duration-300 md:px-8 lg:px-16 ${
        scrolled ? 'shadow-[0_1px_24px_rgba(0,0,0,0.08)]' : ''
      }`}
    >
      {/* Logo */}
      <a href="/" className="flex items-center gap-2.5 font-head text-xl font-extrabold uppercase tracking-tight text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal">
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
            className={`border-b-2 pb-1 font-body text-sm transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal ${
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
          className="bg-signal px-5 py-2.5 font-data text-sm font-medium text-paper transition-opacity duration-150 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
        >
          Get in Touch
        </a>
      </div>

      {/* Mobile: theme toggle + hamburger */}
      <div className="md:hidden flex items-center gap-2">
        <ThemeToggle />
        <button
          ref={hamburgerRef}
          className="flex h-10 w-10 items-center justify-center border border-line text-ink transition-colors duration-150 hover:border-signal/50 hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
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
            className="absolute left-0 right-0 top-full max-h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain border-b border-line bg-paper md:hidden"
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
                  className={`py-2 font-body text-base transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal ${
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
