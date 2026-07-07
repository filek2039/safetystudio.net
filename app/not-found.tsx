import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SignalButton from '@/components/ui/SignalButton'

export default function NotFound() {
  return (
    <>
      <Nav />
      <main
        id="main-content"
        className="min-h-screen flex items-center justify-center px-16 max-md:px-6 bg-paper drafting-grid"
      >
        <div className="text-center">
          <div className="font-data text-xs uppercase tracking-[0.1em] text-ink-soft mb-6">
            <span className="text-signal">404</span>
            <span aria-hidden="true"> — </span>
            Page Not Found
          </div>
          <h1 className="font-head font-extrabold uppercase text-[clamp(4rem,10vw,8rem)] leading-[0.95] tracking-tight text-ink mb-6">
            404
          </h1>
          <p className="font-body text-ink-soft leading-[1.85] text-base max-w-[400px] mx-auto mb-10">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <SignalButton href="/" variant="solid">
            Back to Home
          </SignalButton>
        </div>
      </main>
      <Footer />
    </>
  )
}
