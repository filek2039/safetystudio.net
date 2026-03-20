'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import CounterStat from './ui/CounterStat'
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

  return (
    <section ref={ref} className="relative min-h-screen flex items-center px-16 max-md:px-6 pt-28 pb-20 overflow-hidden">
      {/* Radial background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 60% 40%, rgb(var(--navy-light) / 0.45) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 80% 80%, rgb(var(--gold) / 0.06) 0%, transparent 60%)',
        }}
      />

      {/* Parallax grid */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
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

      {/* Stats */}
      <motion.div
        className="absolute right-16 bottom-16 max-md:static max-md:mt-12 flex flex-col max-md:flex-row gap-10 max-md:gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <CounterStat value={100} suffix="+" label="Projects Completed" />
        <CounterStat value={15} suffix="+" label="Years of Experience" />
        <CounterStat value={0} label="Compromise on Safety" />
      </motion.div>
    </section>
  )
}
