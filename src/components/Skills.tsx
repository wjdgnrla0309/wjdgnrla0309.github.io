import { motion } from 'framer-motion'
import { skillGroups } from '../data/skills'

export function Skills() {
  return (
    <section id="skills" className="section-shell section-block">
      <div className="section-heading">
        <p className="eyebrow">Skills</p>
        <h2>Technical foundations and engineering tools.</h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            className="skill-group"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
          >
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
