'use client'
import { motion, useReducedMotion } from 'framer-motion'
import SignalButton from './ui/SignalButton'
import HeroBarrierFigure from '@/components/HeroBarrierFigure'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } } }
const item = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: { duration: 0.9 } } }

export default function Hero() {
  const reduced = useReducedMotion()
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-16 max-md:px-6 pt-28 pb-0 overflow-hidden drafting-grid bg-paper">
      <motion.div className="relative z-10 max-w-2xl pb-20" variants={container} initial={reduced ? false : 'hidden'} animate="show">
        <motion.h1 variants={item} className="font-head font-extrabold uppercase text-[clamp(3rem,8vw,7rem)] leading-[0.98] tracking-tight text-ink mb-6">
          Where Safety<br />Meets <span className="relative inline-block">Expertise<span className="absolute left-0 right-0 -bottom-1 h-[0.12em] bg-signal origin-left" aria-hidden="true" /></span>
        </motion.h1>
        <motion.p variants={item} className="font-body text-ink-soft font-normal leading-[1.85] text-base max-w-[480px] mb-10">
          We help organizations build resilient safety cultures — through expert training, strategic consultancy, rigorous risk analysis, and independent audits.
        </motion.p>
        <motion.div variants={item} className="flex flex-wrap items-center gap-6">
          <SignalButton href="/services/" variant="solid">Our Services</SignalButton>
          <SignalButton href="/about/#contact" variant="text">Contact Us</SignalButton>
        </motion.div>
      </motion.div>
      <HeroBarrierFigure className="relative z-0 w-full max-w-[440px] pb-14 xl:absolute xl:right-16 xl:top-[calc(50%+3.5rem)] xl:-translate-y-1/2 xl:w-[min(470px,36vw)] xl:max-w-none xl:pb-0" />
      <div className="hazard-stripe hero-stripe-draw relative z-10" />
    </section>
  )
}
