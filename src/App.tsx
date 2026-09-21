import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Research } from './components/Research'
import { Skills } from './components/Skills'
import './App.css'

const sections = ['about', 'research', 'experience', 'projects', 'skills', 'education', 'contact']

function App() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      {
        rootMargin: '-30% 0px -50% 0px',
        threshold: [0.1, 0.2, 0.35, 0.5],
      },
    )

    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="page-shell">
      <Navbar activeSection={activeSection} />

      <main>
        <Hero />
        <About />
        <Research />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      <motion.button
        type="button"
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        ↑
      </motion.button>

      <Footer />
    </div>
  )
}

export default App
