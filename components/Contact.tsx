'use client'
import { motion } from 'framer-motion'
import Container from './ui/Container'
import ClauseTag from './ui/ClauseTag'
import ContactForm from './ContactForm'

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

          <div className="relative z-10 flex flex-col md:flex-row items-start justify-between gap-10">
            <div>
              <ClauseTag label="Get Started" className="mb-6" />
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

            <div className="w-full md:max-w-[440px] flex-shrink-0">
              <ContactForm />
              <p className="font-data text-xs text-ink-soft mt-4">
                Or write to us directly:{' '}
                <a href="mailto:safety@safetystudio.net" className="text-signal underline decoration-signal/40 underline-offset-4 hover:decoration-signal">safety@safetystudio.net</a>
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
