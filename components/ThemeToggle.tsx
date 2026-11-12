'use client'
import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type Theme = 'dark' | 'light'

/** Browser-chrome colours; must match the anti-flash script in app/layout.tsx. */
const THEME_COLOR: Record<Theme, string> = { dark: '#14181D', light: '#F4F2EC' }

/** A stored explicit choice wins; otherwise follow the OS preference. */
function resolveTheme(): Theme {
  let stored: string | null = null
  try {
    stored = localStorage.getItem('theme')
  } catch {
    // Storage blocked (private mode etc.) — fall through to the system preference.
  }
  if (stored === 'dark' || stored === 'light') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(theme: Theme): void {
  document.documentElement.setAttribute('data-theme', theme)
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[theme])
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light')
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const initial = resolveTheme()
    // Synchronize the control with the theme applied before hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(initial)
    applyTheme(initial)
  }, [])

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    applyTheme(next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      // Storage blocked — the choice still applies for this page view.
    }
  }

  return (
    <motion.button
      type="button"
      onClick={toggle}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.06 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
      transition={{ duration: 0.15 }}
      className="relative flex h-10 w-10 items-center justify-center border border-line bg-paper-raised text-ink-soft transition-colors duration-150 hover:border-signal/50 hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        /* Sun icon */
        <svg aria-hidden="true" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      ) : (
        /* Moon icon */
        <svg aria-hidden="true" className="w-[17px] h-[17px]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
        </svg>
      )}
    </motion.button>
  )
}
