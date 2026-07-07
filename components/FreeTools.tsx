import Container from './ui/Container'
import ClauseTag from './ui/ClauseTag'
import IncidentRateCalc from './tools/IncidentRateCalc'

export default function FreeTools() {
  return (
    <section id="tools" className="py-24 bg-paper">
      <Container className="max-w-3xl">
        <ClauseTag label="Free HSE Tools" className="mb-6" />
        <h2 className="font-head font-extrabold uppercase text-[clamp(2.2rem,5vw,3.6rem)] leading-[0.98] tracking-tight text-ink mb-4">
          Practical{' '}
          <span className="relative inline-block">
            Tools
            <span className="absolute left-0 right-0 -bottom-1 h-[0.1em] bg-signal" aria-hidden="true" />
          </span>
          <br />
          For Every Safety Team
        </h2>
        <p className="font-body text-ink-soft text-sm leading-[1.8] mb-12 max-w-[540px]">
          Use these tools to quickly calculate key safety metrics — no sign-up required.
        </p>
        <IncidentRateCalc />
      </Container>
    </section>
  )
}
