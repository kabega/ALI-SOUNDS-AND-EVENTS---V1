import { Hero } from './components/Hero'
import { Portfolio } from './components/Portfolio'
import { Awards } from './components/Awards'
import { About } from './components/About'
import { Services } from './components/Services'
import { Team } from './components/Team'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { FAQs } from './components/FAQs'
import { WhatsAppButton } from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ overflow: 'visible' }}>
      <main className="relative" role="main" style={{ overflow: 'visible' }}>
        <section id="hero" aria-label="Hero section">
          <Hero />
        </section>
        <section aria-label="Ali Sounds and Events experience">
          <Portfolio />
        </section>
        <section aria-label="Why Ali Sounds and Events">
          <Awards />
        </section>
        <section aria-label="About Ali Sounds and Events">
          <About />
        </section>
        <section aria-label="Services">
          <Services />
        </section>
        <section aria-label="Events we support" style={{ overflow: 'visible', height: 'auto', minHeight: '0', maxHeight: 'none' }}>
          <Team />
        </section>
        <section aria-label="Plan your event">
          <Contact />
        </section>
        <section aria-label="Frequently asked questions">
          <FAQs />
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}