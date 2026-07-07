import Container from './ui/Container'
import ClauseTag from './ui/ClauseTag'
import SafetyMomentLibrary from './tools/SafetyMomentLibrary'

export default function Library() {
  return (
    <section id="library" className="py-24 bg-paper">
      <Container className="max-w-3xl">
        <ClauseTag num="06" label="Safety Resource Library" className="mb-6" />
        <h2 className="font-head font-extrabold uppercase text-[clamp(2.2rem,5vw,3.6rem)] leading-[0.98] tracking-tight text-ink mb-4">
          Ready-to-Use{' '}
          <span className="relative inline-block">
            Safety Moments
            <span className="absolute left-0 right-0 -bottom-1 h-[0.1em] bg-signal" aria-hidden="true" />
          </span>
          <br />
          For Your Team
        </h2>
        <p className="font-body text-ink-soft text-sm leading-[1.8] mb-12 max-w-[540px]">
          10 topic categories, 30 ready-to-use safety moments — copy and deliver in your next toolbox talk or daily briefing.
        </p>
        <SafetyMomentLibrary />
      </Container>
    </section>
  )
}
