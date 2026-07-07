const quickLinks = [
  { label: 'Services', href: '/services/' },
  { label: 'Free Tools', href: '/tools/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/about/#contact' },
]

export default function Footer() {
  return (
    <footer className="px-16 max-md:px-6 py-12 border-t border-line bg-paper">
      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8 max-md:gap-6">
        {/* Brand */}
        <div>
          <a href="/" className="font-head font-extrabold uppercase text-xl tracking-tight text-ink">
            Safety<span className="text-signal">Studio</span>
          </a>
          <p className="font-body text-ink-soft text-xs leading-relaxed mt-2 max-w-[260px]">
            Expert HSE consultancy, training, risk analysis and audits for oil &amp; gas, construction, and industrial sectors.
          </p>
          <a
            href="mailto:safety@safetystudio.net"
            className="inline-block font-data text-ink-soft text-xs mt-3 hover:text-signal transition-colors duration-300"
          >
            safety@safetystudio.net
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <div className="font-data text-xs tracking-[0.1em] uppercase text-ink-soft mb-3">
            Quick Links
          </div>
          <nav className="flex flex-col gap-2" aria-label="Footer navigation">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-ink-soft text-xs hover:text-signal transition-colors duration-200"
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
          <p className="font-body text-ink-soft text-xs leading-relaxed">
            Oil &amp; Gas, Construction, Manufacturing, Energy, Logistics &amp; Transportation, Mining.
          </p>
          <p className="font-body text-ink-soft text-xs leading-relaxed mt-3">
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
          className="font-data text-ink-soft text-xs hover:text-signal transition-colors duration-200"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  )
}
