import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <Nav />
      <main id="main-content" className="min-h-screen flex items-center justify-center px-16 max-md:px-6">
        <div className="text-center">
          <div className="text-[0.68rem] tracking-[0.25em] uppercase text-gold mb-6 font-medium">
            Page Not Found
          </div>
          <h1 className="font-display font-light text-[clamp(3rem,6vw,5rem)] leading-[1.1] text-white mb-6">
            404
          </h1>
          <p className="text-muted font-light leading-[1.85] text-base max-w-[400px] mx-auto mb-10">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <a
            href="/"
            className="inline-block px-8 py-3.5 bg-gold text-navy text-sm font-medium tracking-widest uppercase rounded-sm transition-colors duration-300 hover:bg-gold-light"
          >
            Back to Home
          </a>
        </div>
      </main>
      <Footer />
    </>
  )
}
