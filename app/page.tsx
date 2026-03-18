import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import GoldDivider from '@/components/ui/GoldDivider'
import Services from '@/components/Services'
import FreeTools from '@/components/FreeTools'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <GoldDivider />
        <Services />
        <GoldDivider />
        <FreeTools />
        <GoldDivider />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
