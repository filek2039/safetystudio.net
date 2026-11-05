'use client'
import { motion, useReducedMotion } from 'framer-motion'
import SignalButton from './ui/SignalButton'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } } }
const item = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: { duration: 0.9 } } }

export default function Hero() {
  const reduced = useReducedMotion()
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-16 max-md:px-6 pt-28 pb-0 overflow-hidden drafting-grid bg-paper">
      <motion.div className="relative z-10 max-w-2xl pb-20" variants={container} initial={reduced ? false : 'hidden'} animate="show">
        <motion.h1 variants={item} className="font-head font-extrabold uppercase text-[clamp(3rem,8vw,7rem)] leading-[0.98] tracking-tight text-ink mb-6">
          Where Safety<br />Meets <span className="relative inline-block">Expertise<span className="absolute left-0 right-0 -bottom-1 h-[0.12em] bg-signal origin-left" aria-hidden="true" /></span>
        </motion.h1>
        <motion.p variants={item} className="font-body text-ink-soft font-normal leading-[1.85] text-base max-w-[480px] mb-10">
          We help organizations build resilient safety cultures — through expert training, strategic consultancy, rigorous risk analysis, and independent audits.
        </motion.p>
        <motion.div variants={item} className="flex flex-wrap items-center gap-6">
          <SignalButton href="/services/" variant="solid">Our Services</SignalButton>
          <SignalButton href="/about/#contact" variant="text">Contact Us</SignalButton>
        </motion.div>
      </motion.div>
      <div className="no-print relative z-0 w-full max-w-[440px] pb-14 xl:absolute xl:right-16 xl:top-[calc(50%+3.5rem)] xl:-translate-y-1/2 xl:w-[min(470px,36vw)] xl:max-w-none xl:pb-0">
        <figure className="bs-figure" aria-hidden="true">
          <svg viewBox="0 0 470 380" className="w-full h-auto overflow-visible" fill="none">
            <defs><mask id="bs-trace-mask" maskUnits="userSpaceOnUse"><rect className="bs-trace-reveal" x="205" y="34" width="20" height="156" fill="white" /></mask></defs>
            <g stroke="rgb(var(--line))" strokeWidth="1">
              <line className="bs-fade" style={{animationDelay: '0.2s'}} x1="215" y1="16" x2="215" y2="364" strokeDasharray="10 4 2 4" />
              <line className="bs-draw" style={{animationDelay: '0.25s'}} pathLength="1" x1="4" y1="100" x2="330" y2="100" />
              <line className="bs-draw" style={{animationDelay: '0.35s'}} pathLength="1" x1="4" y1="340" x2="330" y2="340" />
              <g className="bs-fade" style={{animationDelay: '1.3s'}} stroke="rgb(var(--ink-soft))"><line x1="190" y1="84" x2="240" y2="84" /><line x1="190" y1="78" x2="190" y2="90" /><line x1="240" y1="78" x2="240" y2="90" /></g>
              <line className="bs-draw" style={{animationDelay: '1.1s'}} pathLength="1" x1="306" y1="130" x2="336" y2="130" stroke="rgb(var(--ink-soft))" />
              <line className="bs-draw" style={{animationDelay: '3.2s'}} pathLength="1" x1="306" y1="220" x2="336" y2="220" stroke="rgb(var(--ink-soft))" />
              <line className="bs-draw" style={{animationDelay: '1.3s'}} pathLength="1" x1="306" y1="310" x2="336" y2="310" stroke="rgb(var(--ink-soft))" />
            </g>
            <g className="bs-shake" fill="rgb(var(--ink))">
              {[[20,100,170,'0.7s','-32px'],[240,100,60,'0.8s','32px'],[20,190,60,'0.95s','-32px'],[20,280,120,'1.1s','-32px'],[190,280,110,'1.2s','32px']].map(([x,y,w,delay,from]) => <rect key={`${x}-${y}`} className="bs-bar" style={{animationDelay: String(delay), '--bs-from': from} as React.CSSProperties} x={x} y={y} width={w} height="60" rx="15" />)}
            </g>
            <g className="bs-held"><rect className="bs-bar" style={{animationDelay:'1.45s', '--bs-from':'48px'} as React.CSSProperties} x="130" y="190" width="170" height="60" rx="15" fill="rgb(var(--signal))" /></g>
            <g className="font-data" fontSize="11" letterSpacing="1.2">
              <text className="bs-fade" style={{animationDelay:'1.4s'}} x="182" y="88" textAnchor="end" fill="rgb(var(--ink-soft))">GAP</text>
              <text className="bs-fade" style={{animationDelay:'1.4s'}} x="344" y="134" fill="rgb(var(--ink-soft))">B-01<tspan dx="8">BREACHED</tspan></text>
              <text className="bs-fade" style={{animationDelay:'3.5s'}} x="344" y="224" fill="rgb(var(--ink-soft))">B-02<tspan fill="rgb(var(--signal))" dx="8">HELD</tspan></text>
              <text className="bs-fade" style={{animationDelay:'1.6s'}} x="344" y="314" fill="rgb(var(--ink-soft))">B-03<tspan dx="8">STANDBY</tspan></text>
            </g>
            <g className="bs-src"><text className="font-data" x="227" y="30" fontSize="11" letterSpacing="1.2" fill="rgb(var(--signal))">HAZARD</text><circle cx="215" cy="26" r="5" stroke="rgb(var(--signal))" strokeWidth="1.5" /></g>
            <line mask="url(#bs-trace-mask)" x1="215" y1="34" x2="215" y2="188" stroke="rgb(var(--signal))" strokeWidth="1.5" strokeDasharray="4 5" />
            <g className="bs-fall"><circle className="bs-head" cx="215" cy="34" r="4.5" fill="rgb(var(--signal))" /></g>
            <circle className="bs-flash" cx="215" cy="190" r="8" fill="rgb(var(--signal))" />
            {[0,0.12,0.24].map((delay) => <circle key={delay} className="bs-ring" style={{'--d':`${delay}s`} as React.CSSProperties} cx="215" cy="190" r="10" stroke="rgb(var(--signal))" strokeWidth={delay === 0 ? 2 : 1.25} />)}
            <g className="bs-sparks" stroke="rgb(var(--signal))" strokeWidth="2" strokeLinecap="round"><line x1="201.84" y1="185.21" x2="188.69" y2="180.42" /><line x1="206.38" y1="178.97" x2="197.76" y2="167.94" /><line x1="215" y1="176" x2="215" y2="156" /><line x1="223.62" y1="178.97" x2="232.24" y2="167.94" /><line x1="228.16" y1="185.21" x2="241.31" y2="180.42" /></g>
          </svg>
        </figure>
      </div>
      <div className="hazard-stripe hero-stripe-draw relative z-10" />
    </section>
  )
}
