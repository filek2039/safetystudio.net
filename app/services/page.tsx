import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Services from '@/components/Services'
import DimensionRule from '@/components/ui/DimensionRule'
import Footer from '@/components/Footer'
import BackToTop from '@/components/ui/BackToTop'

export const metadata: Metadata = {
  title: 'HSE Services — Safety Studio',
  description:
    'AI safety intelligence, digital HSE transformation, training, consultancy, risk analysis, and audit & inspection services for oil & gas, construction, and industrial sectors.',
  alternates: { canonical: 'https://safetystudio.net/services/' },
}

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="pt-16">
        <Services />
        <DimensionRule className="my-12" />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
