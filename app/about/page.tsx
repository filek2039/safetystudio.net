import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import About from '@/components/About'
import Contact from '@/components/Contact'
import DimensionRule from '@/components/ui/DimensionRule'
import Footer from '@/components/Footer'
import BackToTop from '@/components/ui/BackToTop'

export const metadata: Metadata = {
  title: 'About Us — Safety Studio',
  description:
    'Industry-specific HSE expertise with a practical, people-first approach — serving oil & gas, construction, manufacturing, energy, logistics and mining.',
  alternates: { canonical: 'https://safetystudio.net/about/' },
}

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="pt-16">
        <About />
        <Contact />
        <DimensionRule className="my-12" />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
