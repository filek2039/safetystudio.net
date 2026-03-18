'use client'
import { motion } from 'framer-motion'
import Button from './ui/Button'

export default function Contact() {
  return (
    <section id="contact" className="px-16 max-md:px-6 py-16 pb-24">
      <motion.div
        className="relative bg-gradient-to-br from-navy-light to-navy-mid border border-gold/20 rounded-sm px-12 max-md:px-8 py-16 overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "circOut" }}
      >
        {/* Watermark */}
        <div
          className="absolute right-8 bottom-0 font-display font-light text-[8rem] leading-none text-white/[0.03] pointer-events-none select-none"
          aria-hidden
        >
          HSE
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div>
            <span className="inline-block text-[0.68rem] tracking-[0.2em] uppercase text-gold mb-4 font-medium">
              Get Started
            </span>
            <h2 className="font-display font-light text-[clamp(1.8rem,3.5vw,2.8rem)] text-white leading-[1.2] mb-4">
              Ready to Build a<br />
              <em className="not-italic text-gold">Safer</em> Workplace?
            </h2>
            <p className="text-muted font-light text-sm leading-relaxed max-w-[400px]">
              Let's discuss your HSE needs and create a tailored plan for your organization.
            </p>
          </div>

          <div className="flex flex-col gap-4 flex-shrink-0">
            <Button href="mailto:safety@safetystudio.net" variant="primary">
              safety@safetystudio.net
            </Button>
            <Button href="#services" variant="secondary">
              View All Services
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
