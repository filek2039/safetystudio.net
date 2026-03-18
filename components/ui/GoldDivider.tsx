'use client'
import { motion } from 'framer-motion'

export default function GoldDivider() {
  return (
    <motion.div
      className="h-px mx-16 max-md:mx-6"
      style={{
        background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)',
      }}
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 0.3 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.9, ease: "circOut" }}
    />
  )
}
