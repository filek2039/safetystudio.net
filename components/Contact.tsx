'use client'
import { motion } from 'framer-motion'
import Container from './ui/Container'
import SignalButton from './ui/SignalButton'
import ClauseTag from './ui/ClauseTag'

export default function Contact() {
  return (
    <section id="contact" className="py-16 pb-24 bg-paper">
      <Container>
        <motion.div
          className="relative bg-paper-raised border border-line px-12 max-md:px-8 py-16 overflow-hidden"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "circOut" }}
        >
          <div className="hazard-stripe absolute top-0 left-0 right-0" />

          {/* Watermark */}
          <div
            className="absolute right-8 bottom-0 font-head font-extrabold uppercase text-[8rem] leading-none text-ink/[0.04] pointer-events-none select-none"
            aria-hidden
          >
            HSE
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            <div>
              <ClauseTag num="04" label="Get Started" className="mb-6" />
              <h2 className="font-head font-extrabold uppercase text-[clamp(1.8rem,3.5vw,2.8rem)] text-ink leading-[1.05] mb-4">
                Ready to Build a<br />
                <span className="relative inline-block">
                  Safer
                  <span className="absolute left-0 right-0 -bottom-1 h-[0.1em] bg-signal" aria-hidden="true" />
                </span>{' '}
                Workplace?
              </h2>
              <p className="font-body text-ink-soft text-sm leading-relaxed max-w-[400px]">
                Let's discuss your HSE needs and create a tailored plan for your organization.
              </p>
            </div>

            <div className="flex flex-col gap-4 flex-shrink-0">
              <SignalButton href="mailto:safety@safetystudio.net" variant="solid" className="font-data text-base">
                safety@safetystudio.net
              </SignalButton>
              <SignalButton href="/services/" variant="text">
                View All Services
              </SignalButton>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
