const quickLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Free Tools', href: '/#tools' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

export default function Footer() {
  return (
    <footer className="px-16 max-md:px-6 py-12 border-t border-gold/10">
      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8 max-md:gap-6">
        {/* Brand */}
        <div>
          <a href="/" className="font-display text-xl font-semibold tracking-[0.04em] text-cream">
            Safety<span className="text-gold">Studio</span>
          </a>
          <p className="text-muted text-xs font-light leading-relaxed mt-2 max-w-[260px]">
            Expert HSE consultancy, training, risk analysis and audits for oil &amp; gas, construction, and industrial sectors.
          </p>
          <a
            href="mailto:safety@safetystudio.net"
            className="inline-block text-muted text-xs mt-3 hover:text-gold transition-colors duration-300"
          >
            safety@safetystudio.net
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <div className="text-[0.62rem] tracking-[0.18em] uppercase text-gold font-medium mb-3">
            Quick Links
          </div>
          <nav className="flex flex-col gap-2" aria-label="Footer navigation">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted text-xs font-light hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Trust */}
        <div>
          <div className="text-[0.62rem] tracking-[0.18em] uppercase text-gold font-medium mb-3">
            Industries We Serve
          </div>
          <p className="text-muted text-xs font-light leading-relaxed">
            Oil &amp; Gas, Construction, Manufacturing, Energy, Logistics &amp; Transportation, Mining.
          </p>
          <p className="text-muted/70 text-xs font-light leading-relaxed mt-3">
            ISO 45001 &amp; ISO 14001 aligned services.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 pt-6 border-t border-gold/8 flex flex-wrap justify-between items-center gap-4">
        <p className="text-muted/70 text-xs font-light">
          &copy; 2026 Safety Studio. All rights reserved.
        </p>
        <a
          href="/privacy/"
          className="text-muted/50 text-xs font-light hover:text-gold transition-colors duration-200"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  )
}
