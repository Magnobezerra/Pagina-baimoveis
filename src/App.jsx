import { About } from './components/About'
import { ContactCta } from './components/ContactCta'
import { Differentials } from './components/Differentials'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { InstagramSection } from './components/InstagramSection'
import { Stats } from './components/Stats'
import { Testimonials } from './components/Testimonials'
import { WhatsAppButton } from './components/WhatsAppButton'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Differentials />
        <Stats />
        <Testimonials />
        <InstagramSection />
        <ContactCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
