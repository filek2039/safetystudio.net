export default function Footer() {
  return (
    <footer className="px-16 max-md:px-6 py-8 border-t border-gold/10 flex flex-wrap justify-between items-center gap-4">
      <p className="text-muted text-xs font-light">
        © 2026 <strong className="text-cream font-medium">Safety Studio</strong> · safetystudio.net
      </p>
      <a
        href="mailto:safety@safetystudio.net"
        className="text-muted text-xs hover:text-gold transition-colors duration-300"
      >
        safety@safetystudio.net
      </a>
    </footer>
  )
}
