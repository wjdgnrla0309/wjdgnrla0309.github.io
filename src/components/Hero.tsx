import { ArrowRight, Download } from 'lucide-react'
import { motion } from 'framer-motion'

const tags = [
  'Mechanical Engineering',
  'Automotive Engineering',
  'Thermal Management',
  'EV Technology',
  'Undergraduate Researcher',
]

export function Hero() {
  return (
    <section id="top" className="hero-section section-shell">
      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="eyebrow">Mechanical Engineering Student & Undergraduate Researcher</p>
          <h1>
            KIM JEONGHU
            <span>Mechanical Engineering Student</span>
            <span>& Undergraduate Researcher</span>
          </h1>
          <p className="hero-lead">Engineering thermal solutions for the future of mobility.</p>

          <div className="tag-list" aria-label="Professional tags">
            {tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="hero-actions">
            <a href="#projects" className="primary-btn">
              View Projects
              <ArrowRight size={18} />
            </a>
            <a href="#about" className="secondary-btn">
              About Me
            </a>
            <a href="/resume.pdf" className="secondary-btn download-btn" download>
              <Download size={18} />
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
        >
          <div className="hero-panel">
            <div className="panel-header">
              <span className="status-dot" />
              <span>Thermal Systems Research</span>
            </div>
            <div className="panel-metrics">
              <div>
                <small>Focus</small>
                <strong>EV Thermal</strong>
              </div>
              <div>
                <small>Lab</small>
                <strong>TES Lab</strong>
              </div>
              <div>
                <small>Year</small>
                <strong>2nd Year</strong>
              </div>
            </div>
            <div className="signal-diagram" aria-hidden="true">
              <span className="line line-1" />
              <span className="line line-2" />
              <span className="line line-3" />
              <span className="pulse pulse-1" />
              <span className="pulse pulse-2" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
