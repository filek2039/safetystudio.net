'use client'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import Button from './ui/Button'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9 } },
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const shouldReduce = useReducedMotion()

  return (
    <section ref={ref} className="relative min-h-screen flex items-center px-16 max-md:px-6 pt-28 pb-20 overflow-hidden">
      {/* Background video */}
      {!shouldReduce && (
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          src="/videos/refinery.mp4"
        />
      )}

      {/* Dark overlay — ensures text contrast over video */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(10,22,40,0.78) 0%, rgba(10,22,40,0.55) 50%, rgba(10,22,40,0.35) 100%), linear-gradient(to top, rgba(10,22,40,0.45) 0%, transparent 40%)',
        }}
      />

      {/* Parallax grid */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          y: gridY,
          backgroundImage:
            'linear-gradient(var(--color-gold) 1px, transparent 1px), linear-gradient(90deg, var(--color-gold) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-2xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={item}
          className="text-[0.68rem] tracking-[0.25em] uppercase text-gold mb-6 font-medium"
        >
          Health · Safety · Environment
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display font-light text-[clamp(3rem,6vw,5.5rem)] leading-[1.08] text-cream mb-6"
        >
          Where Safety<br />
          Meets <em className="not-italic text-gold">Expertise</em>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-muted font-light leading-[1.85] text-base max-w-[480px] mb-10"
        >
          We help organizations build resilient safety cultures — through expert training,
          strategic consultancy, rigorous risk analysis, and independent audits.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-4">
          <Button href="#services" variant="primary">Our Services</Button>
          <Button href="#contact" variant="secondary">Contact Us</Button>
        </motion.div>
      </motion.div>

    </section>
  )
}
