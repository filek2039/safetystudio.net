import Link from 'next/link'
import BrandMark from '@/components/ui/BrandMark'

/** Shared link treatment: 44px tap area on mobile, compact on md+, visible focus ring. */
const linkBase =
  'inline-flex min-h-[44px] items-center text-ink-soft transition-colors duration-200 hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal md:min-h-0 md:py-1'

const quickLinks = [
  { label: 'Services', href: '/services/' },
  { label: 'Free Tools', href: '/tools/' },
  { label: 'Library', href: '/library/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/about/#contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper py-12">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8 max-md:gap-6">
          {/* Brand */}
          <div>
            <Link href="/" className="font-head font-extrabold uppercase text-xl tracking-tight text-ink inline-flex items-center gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal">
              <BrandMark className="w-[20px] h-[20px]" />
              <span>
                Safety<span className="text-signal">Studio</span>
              </span>
            </Link>
            <p className="font-body text-ink-soft text-sm leading-relaxed mt-2 max-w-[300px]">
              Expert HSE consultancy, training, risk analysis and audits for oil &amp; gas, construction, and industrial sectors.
            </p>
            <a
              href="mailto:safety@safetystudio.net"
              className={`${linkBase} mt-2 font-data text-sm`}
            >
              safety@safetystudio.net
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <div className="font-data text-xs tracking-[0.1em] uppercase text-ink-soft mb-3">
              Quick Links
            </div>
            <nav className="flex flex-col items-start md:gap-1" aria-label="Footer navigation">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`${linkBase} font-body text-sm`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Trust */}
          <div>
            <div className="font-data text-xs tracking-[0.1em] uppercase text-ink-soft mb-3">
              Industries We Serve
            </div>
            <p className="font-body text-ink-soft text-sm leading-relaxed">
              Oil &amp; Gas, Construction, Manufacturing, Energy, Logistics &amp; Transportation.
            </p>
            <p className="font-body text-ink-soft text-sm leading-relaxed mt-3">
              ISO 45001 &amp; ISO 14001 aligned services.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-line flex flex-wrap justify-between items-center gap-4">
          <p className="font-data text-ink-soft text-xs">
            &copy; 2026 Safety Studio. All rights reserved.
          </p>
          <a
            href="/privacy/"
            className={`${linkBase} font-data text-sm`}
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}
