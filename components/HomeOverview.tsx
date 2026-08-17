import Container from './ui/Container'
import ClauseTag from './ui/ClauseTag'
import DimensionRule from './ui/DimensionRule'

const pathways = [
  {
    number: '01',
    eyebrow: 'Advisory & Delivery',
    title: 'Strengthen Your HSE System',
    description:
      'From AI safety intelligence and digital transformation to field audits, risk analysis, and workforce training.',
    href: '/services/',
    link: 'Explore Services',
  },
  {
    number: '02',
    eyebrow: 'Free Practical Tools',
    title: 'Turn Exposure Data Into Insight',
    description:
      'Calculate personal injury, SIF potential event, and motor vehicle incident rates with report-ready outputs.',
    href: '/tools/',
    link: 'Use the Calculators',
  },
  {
    number: '03',
    eyebrow: 'Field Learning',
    title: 'Lead a Better Safety Moment',
    description:
      'Browse concise, ready-to-use topics designed for toolbox talks, shift briefings, and team conversations.',
    href: '/library/',
    link: 'Open the Library',
  },
]

const principles = [
  ['Field-Led', 'Advice grounded in operational reality'],
  ['Evidence-Driven', 'Decisions supported by data & observation'],
  ['Actionable', 'Clear ownership, priorities & next steps'],
]

export default function HomeOverview() {
  return (
    <section aria-labelledby="home-overview-title" className="bg-paper py-24">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-end">
          <div>
            <ClauseTag label="Choose Your Starting Point" className="mb-6" />
            <h2
              id="home-overview-title"
              className="max-w-3xl font-head text-[clamp(2.5rem,6vw,5rem)] font-extrabold uppercase leading-[0.96] tracking-tight text-ink"
            >
              Practical Safety Support, Built for the Real World
            </h2>
          </div>
          <p className="max-w-md font-body text-base leading-[1.8] text-ink-soft lg:pb-2">
            Start with the challenge in front of you. Build stronger systems with expert support,
            benchmark performance with focused tools, or equip your next team conversation.
          </p>
        </div>

        <DimensionRule label="3 Ways to Start" className="mb-2 mt-14" />

        <div className="grid grid-cols-1 border-l border-line lg:grid-cols-3">
          {pathways.map((pathway) => (
            <article
              key={pathway.number}
              className="group flex min-w-0 flex-col border-b border-r border-line bg-paper px-6 py-8 transition-colors duration-150 hover:bg-paper-raised md:px-8"
            >
              <div className="mb-10 flex items-center justify-between gap-4 font-data text-xs uppercase tracking-[0.12em] text-ink-soft">
                <span>{pathway.number}</span>
                <span className="text-right">{pathway.eyebrow}</span>
              </div>
              <h3 className="font-head text-3xl font-bold leading-none text-ink transition-colors duration-150 group-hover:text-signal">
                {pathway.title}
              </h3>
              <p className="mb-8 mt-4 flex-1 font-body text-sm leading-[1.8] text-ink-soft">
                {pathway.description}
              </p>
              <a
                href={pathway.href}
                className="w-fit font-data text-sm font-medium text-ink underline decoration-signal decoration-2 underline-offset-4 transition-colors duration-150 hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
              >
                {pathway.link} <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 border-y border-line md:grid-cols-3">
          {principles.map(([label, detail]) => (
            <div key={label} className="border-b border-line px-5 py-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
              <p className="font-data text-sm font-medium text-signal">{label}</p>
              <p className="mt-1 font-body text-sm text-ink-soft">{detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-l-4 border-signal bg-paper-raised px-6 py-7 sm:flex-row sm:items-center md:px-8">
          <div>
            <p className="font-head text-2xl font-bold text-ink">Not Sure Where to Begin?</p>
            <p className="mt-1 font-body text-sm leading-relaxed text-ink-soft">
              Describe the operational challenge. We’ll help define a practical first step.
            </p>
          </div>
          <a
            href="/about/#contact"
            className="shrink-0 bg-signal px-6 py-3 font-data text-sm font-medium text-paper transition-opacity duration-150 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
          >
            Discuss Your Needs
          </a>
        </div>
      </Container>
    </section>
  )
}
