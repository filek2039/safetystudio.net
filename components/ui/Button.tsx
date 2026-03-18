'use client'
import { motion } from 'framer-motion'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
}

export default function Button({ variant = 'primary', href, onClick, children, className = '' }: ButtonProps) {
  const base =
    variant === 'primary'
      ? 'inline-block px-8 py-3.5 bg-gold text-navy text-sm font-medium tracking-widest uppercase rounded-sm transition-colors duration-300 hover:bg-gold-light'
      : 'inline-block px-8 py-3.5 border border-gold/60 text-cream text-sm font-medium tracking-widest uppercase rounded-sm transition-colors duration-300 hover:border-gold hover:text-gold'

  const combined = `${base} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        className={combined}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
        transition={{ duration: 0.15 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      className={combined}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      transition={{ duration: 0.15 }}
    >
      {children}
    </motion.button>
  )
}
