import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="section-shell section-block">
      <div className="section-heading">
        <p className="eyebrow">About Me</p>
        <h2>Engineering student focused on thermal systems and mobility.</h2>
      </div>

      <motion.div
        className="about-grid"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="about-copy">
          <p>
            I am a mechanical engineering student at Kongju National University, studying
            mechanical and automotive engineering with a strong interest in the thermal systems
            of modern vehicles, especially electric vehicles.
          </p>
          <p>
            I am currently an undergraduate researcher in the Thermal & Energy Solutions
            Laboratory, where I am exploring research questions related to battery, motor,
            inverter, and HVAC thermal management.
          </p>
          <p>
            I prefer solving engineering problems through design, experimentation,
            simulation, and prototype development rather than theoretical study alone. My
            experience includes Formula Student activities, Arduino-based control systems,
            automation concept work, and engineering web development.
          </p>
        </div>

        <div className="info-panel">
          <div>
            <span className="label">Name</span>
            <strong>Kim Jeonghu</strong>
          </div>
          <div>
            <span className="label">University</span>
            <strong>Kongju National University</strong>
          </div>
          <div>
            <span className="label">Major</span>
            <strong>Mechanical & Automotive Engineering</strong>
          </div>
          <div>
            <span className="label">Position</span>
            <strong>Undergraduate Student / Researcher</strong>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
