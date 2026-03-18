import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'HSE Insights — Safety Studio Blog',
  description:
    'Practical articles on health, safety & environment — written for HSE professionals in oil & gas, construction, and industry.',
}

const posts = [
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
      <main className="min-h-screen">
        {/* Header */}
        <section className="pt-36 pb-16 px-16 max-md:px-6">
          <div className="max-w-3xl">
            <span className="inline-block text-[0.68rem] tracking-[0.22em] uppercase text-gold font-medium mb-4">
              HSE Insights
            </span>
            <h1 className="font-display font-light text-[clamp(2.4rem,5vw,4rem)] leading-[1.1] text-white mb-4">
              Practical Safety<br />
              <em className="not-italic text-gold">Knowledge</em>
            </h1>
            <p className="text-muted font-light leading-[1.8] text-sm max-w-[480px]">
              Articles on HSE management, risk analysis, and safety culture — written for
              professionals working in oil &amp; gas, construction, and industry. No fluff.
            </p>
          </div>
        </section>

        <div className="h-px mx-16 max-md:mx-6 bg-gradient-to-r from-transparent via-gold/25 to-transparent mb-16" />

        {/* Posts */}
        <section className="px-16 max-md:px-6 pb-24">
          <div className="max-w-3xl flex flex-col gap-8">
            {posts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="group block bg-navy-mid/60 border border-gold/12 rounded-sm p-8 hover:border-gold/35 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[0.62rem] tracking-[0.15em] uppercase text-gold font-medium border border-gold/30 px-2.5 py-0.5 rounded-sm">
                    {post.tag}
                  </span>
                  <span className="text-muted/60 text-xs">{post.date}</span>
                  <span className="text-muted/40 text-xs">·</span>
                  <span className="text-muted/60 text-xs">{post.readTime}</span>
                </div>
                <h2 className="font-display font-light text-[1.6rem] leading-[1.25] text-white mb-3 group-hover:text-gold/90 transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-muted font-light text-sm leading-[1.75]">{post.excerpt}</p>
                <div className="mt-5 flex items-center gap-2 text-gold text-xs tracking-widest uppercase font-medium">
                  Read article
                  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
