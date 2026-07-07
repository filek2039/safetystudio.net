import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Library from '@/components/Library'
import DimensionRule from '@/components/ui/DimensionRule'
import Footer from '@/components/Footer'
import BackToTop from '@/components/ui/BackToTop'

export const metadata: Metadata = {
  title: 'Safety Moment Library — Safety Studio',
  description:
    '30 ready-to-use safety moments across 10 topic categories — copy and deliver in your next toolbox talk or daily briefing.',
  alternates: { canonical: 'https://safetystudio.net/library/' },
}

export default function LibraryPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="pt-16">
        <Library />
        <DimensionRule className="my-12" />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
