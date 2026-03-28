'use client'
import { motion } from 'framer-motion'
import SectionHeader from './ui/SectionHeader'

const services = [
  {
    num: '01',
    title: 'AI Safety Intelligence',
    desc: 'Harnessing machine learning and operational data analytics to identify risk patterns, predict incident likelihood, and surface leading indicators before incidents occur — shifting your safety programme from reactive to intelligence-driven.',
    tags: ['Predictive Analytics', 'Risk Modelling', 'Leading Indicators'],
    icon: (
      <path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21a48.25 48.25 0 01-8.135-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    ),
  },
  {
    num: '02',
    title: 'Digital HSE Transformation',
    desc: 'Integrating AI-powered tools, automated workflows, and smart management systems into your HSE operations — reducing administrative overhead while improving accuracy, traceability, and decision speed across your organisation.',
    tags: ['Automation', 'HSE Systems', 'Digital Strategy'],
    icon: (
      <path d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
    ),
  },
  {
    num: '03',
    title: 'Training & Education',
    desc: 'Tailored HSE training programs that equip your workforce with the knowledge and skills to operate safely and confidently in any environment.',
    tags: ['On-site', 'Online', 'Certified'],
    icon: (
      <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    ),
  },
  {
    num: '04',
    title: 'HSE Consultancy',
    desc: 'Strategic advisory services to help you design, implement, and continuously improve your health, safety, and environmental management systems.',
    tags: ['ISO 45001', 'ISO 14001', 'Strategy'],
    icon: (
      <path d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
    ),
  },
  {
    num: '05',
    title: 'Risk Analysis',
    desc: 'Systematic identification, assessment, and mitigation of workplace hazards — protecting your people, assets, and reputation before incidents occur.',
    tags: ['HAZOP', 'FMEA', 'Bow-Tie'],
    icon: (
      <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    ),
  },
  {
    num: '06',
    title: 'Audit & Inspection',
    desc: 'Independent, thorough HSE audits that deliver clear, actionable findings — ensuring regulatory compliance and driving continuous performance improvement.',
    tags: ['Compliance', 'Gap Analysis', 'Reporting'],
    icon: (
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    ),
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1 },
  }),
}

export default function Services() {
  return (
    <section id="services" className="px-16 max-md:px-6 py-24">
      <SectionHeader
        tag="What We Do"
        headline={
          <>
            Comprehensive <em className="not-italic text-gold">HSE</em>
            <br />
            Services
          </>
        }
      />

      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.num}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="group relative bg-navy-mid/70 backdrop-blur-sm border border-gold/12 rounded-sm p-8 overflow-hidden transition-colors duration-300 hover:border-gold/35 card-depth"
          >
            {/* Hover gold line */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-[2px] origin-left"
              style={{ background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-light))' }}
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.4, ease: "circOut" }}
            />

            <div className="text-[0.65rem] tracking-[0.2em] text-gold/60 mb-5 font-medium">{s.num}</div>
            <svg
              className="w-7 h-7 text-gold mb-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              {s.icon}
            </svg>
            <h3 className="text-cream font-medium text-lg mb-3 tracking-wide">{s.title}</h3>
            <p className="text-muted text-sm font-light leading-[1.8] mb-5">{s.desc}</p>
            <div className="flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <span
                  key={t}
                  className="text-[0.65rem] tracking-[0.1em] uppercase text-gold/70 border border-gold/20 px-3 py-1 rounded-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
