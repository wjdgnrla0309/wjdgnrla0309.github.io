import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Research } from './components/Research'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import './App.css'
import { LanguageProvider } from './LanguageContext'

const sections = ['about', 'research', 'experience', 'projects', 'skills', 'education', 'contact']
export default function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [showTop, setShowTop] = useState(false)
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700)
    const observer = new IntersectionObserver(entries => {
      const hit = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (hit) setActiveSection(hit.target.id)
    }, { rootMargin: '-25% 0px -55%', threshold: [0.1, 0.3, 0.5] })
    sections.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el) })
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll) }
  }, [])
  return <LanguageProvider><div className="page-shell"><Navbar activeSection={activeSection} /><main><Hero /><About /><Research /><Experience /><Projects /><Skills /><Education /><Contact /></main><button className={`scroll-top ${showTop ? 'visible' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="맨 위로 이동"><ArrowUp size={18} /></button><Footer /></div></LanguageProvider>
}
