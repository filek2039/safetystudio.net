import SignalButton from '@/components/ui/SignalButton'
import Container from '@/components/ui/Container'
import HeroBarrierFigure from '@/components/HeroBarrierFigure'

/**
 * Entrance motion is CSS-only (see .hero-rise / .hero-fade in globals.css):
 * the h1 (LCP element) only translates and is never hidden; the paragraph
 * and CTAs fade in right after it. Content is fully visible without JS.
 */
export default function Hero() {
  return (
    <section className="relative min-h-svh flex flex-col pt-28 pb-0 overflow-hidden drafting-grid bg-paper">
      <Container className="relative flex flex-1 flex-col justify-center xl:grid xl:grid-cols-[minmax(0,1fr)_min(470px,36vw)] xl:content-center xl:items-center xl:gap-x-10">
        <div className="relative z-10 max-w-2xl pb-20">
          <h1 className="hero-rise font-head font-extrabold uppercase text-[clamp(3rem,8vw,7rem)] leading-[0.98] tracking-tight text-ink mb-6">
            Where Safety<br />Meets <span className="relative inline-block">Expertise<span className="absolute left-0 right-0 -bottom-1 h-[0.12em] bg-signal origin-left" aria-hidden="true" /></span>
          </h1>
          <p className="hero-fade [--hero-delay:120ms] font-body text-ink-soft font-normal leading-[1.85] text-base max-w-[480px] mb-10">
            We help organizations build resilient safety cultures — through expert training, strategic consultancy, rigorous risk analysis, and independent audits.
          </p>
          <div className="hero-fade [--hero-delay:200ms] flex flex-wrap items-center gap-6">
            <SignalButton href="/services/" variant="solid">Our Services</SignalButton>
            <SignalButton href="/about/#contact" variant="text">Contact Us</SignalButton>
          </div>
        </div>
        <HeroBarrierFigure className="relative z-0 w-full max-w-[440px] pb-14 xl:max-w-none xl:pb-0" />
      </Container>
      {/* Baseline stripe: sits at the bottom of the hero, on the same column */}
      <Container>
        <div className="hazard-stripe hero-stripe-draw relative z-10" />
      </Container>
    </section>
  )
}
