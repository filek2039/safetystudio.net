import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import FreeTools from '@/components/FreeTools'
import DimensionRule from '@/components/ui/DimensionRule'
import Footer from '@/components/Footer'
import BackToTop from '@/components/ui/BackToTop'

export const metadata: Metadata = {
  title: 'Free HSE Tools — Safety Studio',
  description:
    'Free incident rate calculators for personal injury, SIF potential events, and motor vehicle incidents — LTIF and TRCF, no sign-up required.',
  alternates: { canonical: 'https://safetystudio.net/tools/' },
}

export default function ToolsPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="pt-16">
        <FreeTools />
        <DimensionRule className="my-12" />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
