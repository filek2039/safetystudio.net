'use client'
import { motion } from 'framer-motion'

interface SectionHeaderProps {
  tag: string
  headline: React.ReactNode
  intro?: string
  center?: boolean
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

export default function SectionHeader({ tag, headline, intro, center = false }: SectionHeaderProps) {
  return (
    <motion.div
      className={`mb-12 ${center ? 'text-center' : ''}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      <motion.span
        variants={item}
        className="inline-block text-[0.68rem] tracking-[0.2em] uppercase text-gold font-medium mb-4"
      >
        {tag}
      </motion.span>
      <motion.h2
        variants={item}
        className="font-display font-light text-[clamp(2rem,4vw,3rem)] leading-[1.15] text-white"
      >
        {headline}
      </motion.h2>
      {intro && (
        <motion.p
          variants={item}
          className="mt-4 text-muted font-light leading-[1.8] max-w-[540px] text-sm"
        >
          {intro}
        </motion.p>
      )}
    </motion.div>
  )
}
