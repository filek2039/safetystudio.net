'use client'
import { motion } from 'framer-motion'
import SectionHeader from './ui/SectionHeader'

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
  return (
    <section id="about" className="px-16 max-md:px-6 py-24 grid grid-cols-2 max-lg:grid-cols-1 gap-20 items-center">
      {/* Left */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "circOut" }}
      >
        <SectionHeader
          tag="Why Safety Studio"
          headline={
            <>
              A Partner You<br />
              Can <em className="not-italic text-gold">Trust</em>
            </>
          }
        />
        <p className="text-muted font-light leading-[1.85] text-sm mb-10 -mt-4">
          We combine deep technical expertise with a practical, people-first approach. Our team
          brings real-world experience across industries — from energy and construction to
          manufacturing and logistics.
        </p>
        <div className="flex flex-col gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              className="flex gap-4 items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "circOut" }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
              <div>
                <div className="text-cream font-medium text-sm mb-0.5">{p.title}</div>
                <div className="text-muted text-sm font-light leading-relaxed">{p.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right visual */}
      <motion.div
        className="relative h-[360px] max-md:h-[260px]"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "circOut" }}
      >
        {/* Main box */}
        <div className="absolute inset-0 bg-navy-light border border-gold/20 rounded-sm flex flex-col items-center justify-center text-center p-10 card-depth">
          <div className="text-[0.65rem] tracking-[0.25em] uppercase text-gold mb-4 font-medium">
            Our Mission
          </div>
          <div className="font-display font-light text-[clamp(1.8rem,3vw,2.4rem)] text-cream leading-[1.2]">
            Zero harm.<br />Every workplace.
          </div>
        </div>
        {/* Overlay quote */}
        <div className="absolute bottom-0 right-0 -mb-6 max-md:-mb-4 translate-x-6 max-md:translate-x-3 bg-navy-mid border border-gold/25 rounded-sm px-6 py-4 max-w-[220px] shadow-xl card-depth-lg">
          <p className="text-cream text-xs font-light leading-relaxed italic">
            "Safety is not a priority —<br />it is a <strong className="text-gold not-italic font-medium">value</strong>."
          </p>
        </div>
      </motion.div>
    </section>
  )
}
