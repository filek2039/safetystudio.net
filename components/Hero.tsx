'use client'
import { motion, useReducedMotion } from 'framer-motion'
import SignalButton from './ui/SignalButton'
import Container from './ui/Container'
import ClauseTag from './ui/ClauseTag'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9 } },
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-paper pt-32 drafting-grid">
      <Container className="relative z-10 flex flex-1 items-center pb-16 pt-8 md:pb-20">
        <motion.div
          className="grid w-full grid-cols-1 items-end gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]"
          variants={container}
          initial={shouldReduceMotion ? 'show' : 'hidden'}
          animate="show"
        >
          <div className="min-w-0">
            <motion.div variants={item}>
              <ClauseTag label="Health / Safety / Environment" className="mb-7" />
            </motion.div>
            <motion.h1
              variants={item}
              className="max-w-4xl font-head text-[clamp(3.75rem,9vw,8.5rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.025em] text-ink"
            >
              Where Safety<br />
              Meets{' '}
              <span className="relative inline-block">
                Expertise
                <span className="absolute -bottom-1 left-0 right-0 h-[0.09em] bg-signal" aria-hidden="true" />
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mb-9 mt-8 max-w-[560px] font-body text-base font-normal leading-[1.8] text-ink-soft md:text-lg"
            >
              We help organizations build resilient safety cultures — through expert training,
              strategic consultancy, rigorous risk analysis, and independent audits.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap items-center gap-6">
              <SignalButton href="/services/" variant="solid">Explore Our Services</SignalButton>
              <SignalButton href="/about/#contact" variant="text">Discuss Your Needs</SignalButton>
            </motion.div>
          </div>

          <motion.aside variants={item} aria-label="Safety Studio approach" className="border-l-2 border-signal bg-paper-raised/80 p-6 backdrop-blur-sm">
            <p className="font-data text-xs uppercase tracking-[0.14em] text-steel">Field Standard / 01</p>
            <p className="mt-5 font-head text-3xl font-bold leading-none text-ink">Clear Advice.<br />Practical Action.</p>
            <p className="mt-4 font-body text-sm leading-[1.7] text-ink-soft">
              Built for high-hazard operations where recommendations must work beyond the report.
            </p>
          </motion.aside>
        </motion.div>
      </Container>

      <div className="relative z-10 bg-paper-raised/95">
        <Container className="grid grid-cols-1 border-x border-line sm:grid-cols-3">
          {[
            ['ISO 45001', 'Safety systems'],
            ['ISO 14001', 'Environmental systems'],
            ['High-Hazard', 'Operational sectors'],
          ].map(([label, detail]) => (
            <div key={label} className="border-b border-line px-5 py-4 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
              <span className="font-data text-xs font-medium text-signal">{label}</span>
              <span className="ml-3 font-body text-xs text-ink-soft">{detail}</span>
            </div>
          ))}
        </Container>
        <div className="hazard-stripe" />
      </div>
    </section>
  )
}
