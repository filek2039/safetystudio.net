import SectionHeader from './ui/SectionHeader'
import ToolCard from './ui/ToolCard'
import IncidentRateCalc from './tools/IncidentRateCalc'

const irIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
    <path d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
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
        intro="Use this tool to quickly calculate key safety metrics — no sign-up required."
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
      </div>
    </section>
  )
}
