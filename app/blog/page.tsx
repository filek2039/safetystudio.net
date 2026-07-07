import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BackToTop from '@/components/ui/BackToTop'
import Container from '@/components/ui/Container'
import ClauseTag from '@/components/ui/ClauseTag'
import DimensionRule from '@/components/ui/DimensionRule'

export const metadata: Metadata = {
  title: 'HSE Insights — Safety Studio Blog',
  description:
    'Practical articles on health, safety & environment — written for HSE professionals in oil & gas, construction, and industry.',
  alternates: { canonical: 'https://safetystudio.net/blog/' },
}

const posts = [
  {
    slug: 'chronic-unease-and-complacency',
    tag: 'Safety Culture',
    date: 'April 2026',
    readTime: '9 min read',
    title: 'Chronic Unease and Complacency: Why Safety Success Can Become a Hazard',
    excerpt:
      'Prolonged periods without a major incident do not mean an organisation is safe — they can signal the onset of complacency. Chronic unease is the antidote. Here is what it looks like in practice.',
  },
  {
    slug: 'human-performance-improvement',
    tag: 'Human Factors',
    date: 'April 2026',
    readTime: '8 min read',
    title: 'Stop Blaming the Worker: What Human Performance Improvement Actually Means for Your Site',
    excerpt:
      'Most incident investigations conclude with "human error" — and stop there. HPI asks the more useful question: what made error the predictable outcome? Here is what that shift looks like in practice.',
  },
  {
    slug: 'sif-serious-injury-fatality',
    tag: 'Risk Management',
    date: 'March 2026',
    readTime: '7 min read',
    title: 'When LTIF Doesn\'t Tell the Whole Story: Understanding Serious Injury and Fatality (SIF)',
    excerpt:
      'Most safety professionals know the numbers — LTIF, TRCF, near-miss rates. But there\'s a category of event that traditional frequency metrics are surprisingly bad at predicting: the ones that kill people.',
  },
]

export default function BlogIndex() {
  return (
    <>
      <Nav />
      <main id="main-content" className="min-h-screen bg-paper">
        {/* Header */}
        <section className="pt-36 pb-16">
          <Container className="max-w-3xl">
            <ClauseTag label="HSE Insights" className="mb-6" />
            <h1 className="font-head font-extrabold uppercase text-[clamp(2.2rem,5vw,3.6rem)] leading-[0.98] tracking-tight text-ink mb-4">
              Practical Safety{' '}
              <span className="relative inline-block">
                Knowledge
                <span className="absolute left-0 right-0 -bottom-1 h-[0.1em] bg-signal" aria-hidden="true" />
              </span>
            </h1>
            <p className="font-body text-ink-soft leading-[1.8] text-sm max-w-[480px]">
              Articles on HSE management, risk analysis, and safety culture — written for
              professionals working in oil &amp; gas, construction, and industry. No fluff.
            </p>
          </Container>
        </section>

        <Container className="max-w-3xl mb-4">
          <DimensionRule label={`Articles · ${posts.length}`} />
        </Container>

        {/* Posts */}
        <section className="pb-24">
          <Container className="max-w-3xl">
            {posts.map((post, i) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="group grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 items-start py-8 border-b border-line transition-colors duration-300 hover:bg-paper-raised px-4 -mx-4"
              >
                <span className="font-data text-3xl text-ink-soft group-hover:text-signal transition-colors duration-300 tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span className="font-data text-[0.62rem] tracking-[0.1em] uppercase text-signal border border-signal/30 px-2.5 py-0.5">
                      {post.tag}
                    </span>
                    <span className="font-data text-ink-soft text-xs">{post.date}</span>
                    <span className="font-data text-ink-soft/50 text-xs">·</span>
                    <span className="font-data text-ink-soft text-xs">{post.readTime}</span>
                  </div>
                  <h2 className="font-head font-bold text-xl text-ink mb-3 group-hover:text-signal transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="font-body text-ink-soft text-sm leading-[1.75] mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-2 font-data text-signal text-xs uppercase tracking-[0.08em]">
                    Read article
                    <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </Container>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
