'use client'
import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'

interface CounterStatProps {
  value: number
  suffix?: string
  label: string
}

export default function CounterStat({ value, suffix = '', label }: CounterStatProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [displayed, setDisplayed] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true

    const duration = 1800
    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayed(Math.floor(eased * value))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [inView, value])

  return (
    <div ref={ref} className="text-left">
      <div className="font-display font-light text-[clamp(2.2rem,4vw,3.2rem)] leading-none text-white">
        {displayed}
        <span className="text-gold">{suffix}</span>
      </div>
      <div className="text-muted text-xs tracking-widest uppercase mt-1">{label}</div>
    </div>
  )
}
