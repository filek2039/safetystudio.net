import SectionHeader from './ui/SectionHeader'
import SafetyMomentLibrary from './tools/SafetyMomentLibrary'

export default function Library() {
  return (
    <section id="library" className="px-16 max-md:px-6 py-24">
      <SectionHeader
        tag="Safety Resource Library"
        headline={
          <>
            Ready-to-Use <em className="not-italic text-gold">Safety Moments</em>
            <br />
            For Your Team
          </>
        }
        intro="10 topic categories, 30 ready-to-use safety moments — copy and deliver in your next toolbox talk or daily briefing."
      />

      <div className="max-w-3xl">
        <SafetyMomentLibrary />
      </div>
    </section>
  )
}
