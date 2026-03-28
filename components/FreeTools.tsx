import SectionHeader from './ui/SectionHeader'
import ToolCard from './ui/ToolCard'
import IncidentRateCalc from './tools/IncidentRateCalc'
import SafetyMomentLibrary from './tools/SafetyMomentLibrary'

const irIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
    <path d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
  </svg>
)

const smIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
    <path d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
  </svg>
)

export default function FreeTools() {
  return (
    <section id="tools" className="px-16 max-md:px-6 py-24">
      <SectionHeader
        tag="Free HSE Tools"
        headline={
          <>
            Practical <em className="not-italic text-gold">Tools</em>
            <br />
            For Every Safety Team
          </>
        }
        intro="Use these tools to quickly calculate key safety metrics and run safety moments with your team — no sign-up required."
      />

      <div className="flex flex-col gap-4 max-w-3xl">
        <ToolCard
          icon={irIcon}
          title="Incident Rate Calculator"
          subtitle="LTIF & TRCF with benchmarks, MVI rates & targets"
          defaultOpen
        >
          <IncidentRateCalc />
        </ToolCard>

        <ToolCard
          id="safety-moment-library"
          icon={smIcon}
          title="Safety Moment Library"
          subtitle="10 categories · 30 ready-to-use safety moments"
        >
          <SafetyMomentLibrary />
        </ToolCard>
      </div>
    </section>
  )
}
