'use client'

import { useEffect, useState } from 'react'

interface TocItem {
  id: string
  text: string
}

export default function TableOfContents() {
  const [items, setItems] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const article = document.querySelector('article')
    if (!article) return

    const headings = Array.from(article.querySelectorAll('h2[id]'))
    setItems(
      headings.map((h) => ({
        id: h.id,
        text: h.textContent ?? '',
      }))
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-15% 0% -70% 0%' }
    )

    headings.forEach((h) => observer.observe(h))
    return () => observer.disconnect()
  }, [])

  if (items.length === 0) return null

  return (
    <nav aria-label="Table of contents">
      <div className="text-[0.6rem] tracking-[0.2em] uppercase text-gold font-medium mb-4">
        Contents
      </div>
      <ol className="space-y-2.5 list-none pl-0">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block text-[0.73rem] font-light leading-snug transition-colors duration-200 ${
                activeId === item.id
                  ? 'text-gold'
                  : 'text-muted/70 hover:text-cream'
              }`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
