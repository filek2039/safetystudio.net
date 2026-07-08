import Container from '@/components/ui/Container'
import ClauseTag from '@/components/ui/ClauseTag'
import { FAQ_ITEMS } from '@/data/faq'

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-paper">
      <Container className="max-w-3xl">
        <ClauseTag label="Questions" className="mb-6" />
        <h2 className="font-head font-extrabold uppercase text-[clamp(2.2rem,5vw,3.6rem)] leading-[0.98] tracking-tight text-ink mb-12">
          Frequently Asked{' '}
          <span className="relative inline-block">
            Questions
            <span className="absolute left-0 right-0 -bottom-1 h-[0.1em] bg-signal" aria-hidden="true" />
          </span>
        </h2>
        <div className="border-t border-line">
          {FAQ_ITEMS.map((item) => (
            <details key={item.q} className="group border-b border-line">
              <summary className="flex items-center justify-between gap-6 py-5 cursor-pointer list-none font-head font-bold text-lg md:text-xl text-ink hover:text-signal transition-colors duration-200 [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="font-data text-signal text-xl leading-none transition-transform duration-200 group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="font-body text-sm text-ink-soft leading-[1.8] pb-6 max-w-[600px]">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  )
}
