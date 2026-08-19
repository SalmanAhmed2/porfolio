import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { TechMarquee } from '../components/TechMarquee'
import { Stats } from '../components/Stats'
import { About } from '../components/About'
import { Skills } from '../components/Skills'
import { Projects } from '../components/Projects'
import { Experience } from '../components/Experience'
import { Services } from '../components/Services'
import { DevelopmentProcess } from '../components/DevelopmentProcess'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

export function HomePage() {
  return (
    <>
      <a href="#home" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <DevelopmentProcess />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
