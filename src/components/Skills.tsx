import { motion } from 'framer-motion'
import { skillGroups } from '../data/skills'

export function Skills() {
  return (
    <section id="skills" className="section-shell section-block">
      <div className="section-heading">
        <p className="eyebrow">기술</p>
        <h2>공학 기초 지식과 활용 도구.</h2>
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
