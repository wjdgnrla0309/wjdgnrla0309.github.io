import { motion } from 'framer-motion'

export function Experience() {
  return (
    <section id="experience" className="section-shell section-block">
      <div className="section-heading">
        <p className="eyebrow">Research Experience</p>
        <h2>Current exploration in thermal engineering and process automation.</h2>
      </div>

      <motion.div
        className="timeline"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="timeline-item">
          <div className="timeline-marker" aria-hidden="true" />
          <div className="timeline-content">
            <div className="timeline-topline">
              <h3>Thermal & Energy Solutions Laboratory</h3>
              <span>2026 – Present</span>
            </div>
            <p className="timeline-role">Undergraduate Researcher</p>
            <p className="timeline-body">
              Main interests include thermal engineering, experimental research, automation of
              laboratory processes, engineering measurement, and data-driven experimentation.
            </p>

            <div className="timeline-project">
              <h4>Laboratory Process Automation</h4>
              <p>
                To reduce variability in manual surface coating and swabbing work, I am
                reviewing an automation concept using a Cartesian motion platform. The goal is
                to achieve consistent movement speed, contact pressure, travel distance, and
                repeatable experimental conditions by adapting a 3D Printer or CNC-style
                motion system.
              </p>
              <ul>
                <li>Research concept</li>
                <li>Experiment automation study</li>
                <li>Current exploration in motion-based process control</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
