import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { CertificationsSection } from './components/sections/CertificationsSection'
import { ContactSection } from './components/sections/ContactSection'
import { EducationSection } from './components/sections/EducationSection'
import { HeroSection } from './components/sections/HeroSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { SkillsSection } from './components/sections/SkillsSection'
import { Container } from './components/layout/Container'

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Header />

      <main id="top" className="space-y-28">
        <HeroSection />

        <Container>
          <div className="space-y-28">
            <EducationSection />
            <ProjectsSection />
            <SkillsSection />
            <CertificationsSection />
            <ContactSection />
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  )
}

export default App
