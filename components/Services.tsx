'use client'
import { motion, useReducedMotion } from 'framer-motion'
import Container from './ui/Container'
import ClauseTag from './ui/ClauseTag'
import DimensionRule from './ui/DimensionRule'

const services = [
  {
    title: 'AI Safety Intelligence',
    desc: 'Harnessing machine learning and operational data analytics to identify risk patterns, predict incident likelihood, and surface leading indicators before incidents occur — shifting your safety programme from reactive to intelligence-driven.',
    tags: ['Predictive Analytics', 'Risk Modelling', 'Leading Indicators'],
  },
  {
    title: 'Digital HSE Transformation',
    desc: 'Integrating AI-powered tools, automated workflows, and smart management systems into your HSE operations — reducing administrative overhead while improving accuracy, traceability, and decision speed across your organisation.',
    tags: ['Automation', 'HSE Systems', 'Digital Strategy'],
  },
  {
    title: 'Training & Education',
    desc: 'Tailored HSE training programs that equip your workforce with the knowledge and skills to operate safely and confidently in any environment.',
    tags: ['On-site', 'Online', 'Certified'],
  },
  {
    title: 'HSE Consultancy',
    desc: 'Strategic advisory services to help you design, implement, and continuously improve your health, safety, and environmental management systems.',
    tags: ['ISO 45001', 'ISO 14001', 'Strategy'],
  },
  {
    title: 'Risk Analysis',
    desc: 'Systematic identification, assessment, and mitigation of workplace hazards — protecting your people, assets, and reputation before incidents occur.',
    tags: ['HAZOP', 'FMEA', 'Bow-Tie'],
  },
  {
    title: 'Audit & Inspection',
    desc: 'Independent, thorough HSE audits that deliver clear, actionable findings — ensuring regulatory compliance and driving continuous performance improvement.',
    tags: ['Compliance', 'Gap Analysis', 'Reporting'],
  },
]

export default function Services() {
  const shouldReduce = useReducedMotion()

  const rowVariants = {
    hidden: { opacity: shouldReduce ? 1 : 0, y: shouldReduce ? 0 : 24 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: shouldReduce ? 0 : i * 0.06 },
    }),
  }

  return (
    <section id="services" className="py-24 bg-paper">
      <Container>
        <ClauseTag label="What We Do" className="mb-6" />
        <h2 className="font-head font-extrabold uppercase text-[clamp(2.2rem,5vw,4rem)] leading-[0.98] tracking-tight text-ink mb-12">
          Comprehensive{' '}
          <span className="relative inline-block">
            HSE
            <span className="absolute left-0 right-0 -bottom-1 h-[0.1em] bg-signal" aria-hidden="true" />
          </span>
          <br />
          Services
        </h2>

        <DimensionRule label={`Services · ${services.length} Items`} className="mb-2" />

        <div>
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              variants={rowVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="group relative grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_22rem] gap-x-10 gap-y-3 items-start py-8 border-b border-line transition-colors duration-300 hover:bg-paper-raised px-4 -mx-4"
            >
              <div>
                <h3 className="font-head font-bold text-2xl md:text-3xl text-ink group-hover:text-signal transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="font-data text-xs uppercase tracking-[0.08em] text-steel mt-2">
                  {s.tags.join(' / ')}
                </p>
              </div>
              <p className="font-body text-sm text-ink-soft leading-[1.8]">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
