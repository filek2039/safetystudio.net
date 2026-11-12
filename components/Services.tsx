import Container from '@/components/ui/Container'
import ClauseTag from '@/components/ui/ClauseTag'
import DimensionRule from '@/components/ui/DimensionRule'

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
    tags: ['On-site', 'Online', 'Training'],
    example: 'Training can be tailored to the work, hazards and responsibilities of your team.',
  },
  {
    title: 'HSE Consultancy',
    desc: 'Strategic advisory services to help you design, implement, and continuously improve your health, safety, and environmental management systems.',
    tags: ['ISO 45001', 'ISO 14001', 'Strategy'],
    example: 'Support can include a management system gap review, priorities for improvement and implementation planning.',
  },
  {
    title: 'Risk Analysis',
    desc: 'Systematic identification, assessment, and mitigation of workplace hazards — protecting your people, assets, and reputation before incidents occur.',
    tags: ['HAZOP', 'FMEA', 'Bow-Tie'],
    example: 'Examples include hazard identification workshops, risk assessments and reviews of critical controls.',
  },
  {
    title: 'Audit & Inspection',
    desc: 'Independent, thorough HSE audits that deliver clear, actionable findings — ensuring regulatory compliance and driving continuous performance improvement.',
    tags: ['Compliance', 'Gap Analysis', 'Reporting'],
    example: 'An engagement can include a review of documentation and field practices, followed by findings and recommended actions.',
  },
]

export default function Services() {
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
            <div
              key={s.title}
              className="reveal group relative grid grid-cols-1 md:grid-cols-[3rem_minmax(0,1fr)] lg:grid-cols-[3rem_minmax(0,1fr)_25rem] gap-x-6 lg:gap-x-10 gap-y-3 items-start py-8 border-b border-line transition-colors duration-300 hover:bg-paper-raised px-4 -mx-4"
            >
              <span
                className="font-data text-xl md:text-3xl leading-none md:pt-1 text-ink-soft group-hover:text-signal transition-colors duration-300 tabular-nums"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-head font-bold text-2xl md:text-3xl text-ink group-hover:text-signal transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="font-data text-xs uppercase tracking-[0.08em] text-steel mt-2">
                  {s.tags.join(' / ')}
                </p>
                <a
                  href="/about/#contact"
                  className="mt-4 inline-block w-fit font-data text-sm font-medium text-ink underline decoration-signal decoration-2 underline-offset-4 transition-colors duration-150 hover:text-signal group-hover:text-signal focus-visible:outline-none after:absolute after:inset-0 after:content-[''] focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:[outline-offset:-2px] focus-visible:after:outline-signal"
                >
                  Discuss this service<span className="sr-only">: {s.title}</span>{' '}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
              <div className="font-body text-base text-ink-soft leading-[1.7] md:col-start-2 lg:col-start-3">
                <p>{s.desc}</p>
                {s.example && <p className="mt-3 text-ink">{s.example}</p>}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
