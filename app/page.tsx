import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import HomeOverview from '@/components/HomeOverview'
import Footer from '@/components/Footer'
import BackToTop from '@/components/ui/BackToTop'
import LegacyHashRedirect from '@/components/LegacyHashRedirect'

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <HomeOverview />
      </main>
      <Footer />
      <BackToTop />
      <LegacyHashRedirect />
    </>
  )
}
