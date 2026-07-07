'use client'
import { motion, useReducedMotion } from 'framer-motion'
import Container from './ui/Container'
import ClauseTag from './ui/ClauseTag'

const pillars = [
  {
    title: 'Industry-Specific Expertise',
    desc: "Tailored solutions for your sector's unique challenges and regulations.",
  },
  {
    title: 'Practical & Actionable',
    desc: 'No generic templates — every deliverable is built for your context.',
  },
  {
    title: 'End-to-End Support',
    desc: 'From initial assessment through implementation and beyond.',
  },
]

export default function About() {
  const shouldReduce = useReducedMotion()

  return (
    <section id="about" className="py-24 bg-paper">
      <Container className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
        {/* Left — 7 cols */}
        <motion.div
          className="md:col-span-7"
          initial={{ opacity: shouldReduce ? 1 : 0, x: shouldReduce ? 0 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "circOut" }}
        >
          <ClauseTag num="03" label="Why Safety Studio" className="mb-6" />
          <h2 className="font-head font-extrabold uppercase text-[clamp(2.2rem,5vw,3.6rem)] leading-[0.98] tracking-tight text-ink mb-6">
            A Partner You Can{' '}
            <span className="relative inline-block">
              Trust
              <span className="absolute left-0 right-0 -bottom-1 h-[0.1em] bg-signal" aria-hidden="true" />
            </span>
          </h2>
          <p className="font-body text-ink-soft leading-[1.85] text-sm mb-10 max-w-[520px]">
            We combine deep technical expertise with a practical, people-first approach. Our team
            brings real-world experience across industries — from energy and construction to
            manufacturing and logistics.
          </p>
          <div className="flex flex-col gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                className="flex gap-4 items-start border-l-2 border-line pl-4"
                initial={{ opacity: shouldReduce ? 1 : 0, x: shouldReduce ? 0 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: shouldReduce ? 0 : i * 0.1, ease: "circOut" }}
              >
                <div>
                  <div className="font-head font-bold text-ink text-base mb-0.5">{p.title}</div>
                  <div className="font-body text-ink-soft text-sm leading-relaxed">{p.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — 5 cols: editorial pull-quote + mission */}
        <motion.div
          className="md:col-span-5"
          initial={{ opacity: shouldReduce ? 1 : 0, x: shouldReduce ? 0 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "circOut" }}
        >
          <blockquote className="border-l-4 border-signal pl-6 mb-10">
            <p className="font-head font-bold text-[clamp(1.6rem,2.6vw,2.2rem)] leading-[1.15] text-ink">
              &ldquo;Safety is not a priority —<br />it is a value.&rdquo;
            </p>
          </blockquote>
          <div className="font-data text-xs uppercase tracking-[0.15em] text-ink-soft mb-2">
            Our Mission
          </div>
          <p className="font-data text-lg text-ink">
            Zero harm. Every workplace.
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
