import Nav from '@/components/Nav'
import TabbedContent from '@/components/TabbedContent'
import Footer from '@/components/Footer'
import BackToTop from '@/components/ui/BackToTop'

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <TabbedContent />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
