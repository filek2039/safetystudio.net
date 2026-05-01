import SectionHeader from './ui/SectionHeader'
import IncidentRateCalc from './tools/IncidentRateCalc'

export default function FreeTools() {
  return (
    <section id="tools" className="px-16 max-md:px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          tag="Free HSE Tools"
          headline={
            <>
              Practical <em className="not-italic text-gold">Tools</em>
              <br />
              For Every Safety Team
            </>
          }
          intro="Use these tools to quickly calculate key safety metrics — no sign-up required."
        />
        <IncidentRateCalc />
      </div>
    </section>
  )
}
