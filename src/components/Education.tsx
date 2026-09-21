import { motion } from 'framer-motion'

export function Education() {
  return (
    <section id="education" className="section-shell section-block">
      <div className="section-heading">
        <p className="eyebrow">Education</p>
        <h2>Mechanical & Automotive Engineering.</h2>
      </div>

      <motion.div
        className="education-card"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
      >
        <div className="education-header">
          <div>
            <h3>Kongju National University</h3>
            <p>Mechanical & Automotive Engineering</p>
          </div>
          <span className="pill">B.S. Candidate</span>
        </div>

        <p className="education-year">2023 – Present</p>

        <div className="coursework">
          <h4>Relevant Coursework</h4>
          <ul>
            <li>Engineering Mechanics</li>
            <li>Solid Mechanics</li>
            <li>Dynamics</li>
            <li>Calculus</li>
            <li>Programming</li>
            <li>Engineering Design</li>
          </ul>
        </div>
      </motion.div>
    </section>
  )
}
