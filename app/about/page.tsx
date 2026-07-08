import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import About from '@/components/About'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import DimensionRule from '@/components/ui/DimensionRule'
import Footer from '@/components/Footer'
import BackToTop from '@/components/ui/BackToTop'
import { FAQ_ITEMS } from '@/data/faq'

export const metadata: Metadata = {
  title: 'About Us — Safety Studio',
  description:
    'Industry-specific HSE expertise with a practical, people-first approach — serving oil & gas, construction, manufacturing, energy and logistics.',
  alternates: { canonical: 'https://safetystudio.net/about/' },
}

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="pt-16">
        <About />
        <FAQ />
        <Contact />
        <DimensionRule className="my-12" />
      </main>
      <Footer />
      <BackToTop />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQ_ITEMS.map((i) => ({
              '@type': 'Question',
              name: i.q,
              acceptedAnswer: { '@type': 'Answer', text: i.a },
            })),
          }),
        }}
      />
    </>
  )
}
