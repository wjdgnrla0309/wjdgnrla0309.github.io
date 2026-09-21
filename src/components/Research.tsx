import { motion } from 'framer-motion'
import { researchTopics } from '../data/research'

export function Research() {
  return (
    <section id="research" className="section-shell section-block">
      <div className="section-heading">
        <p className="eyebrow">연구 관심 분야</p>
        <h2>열 시스템과 에너지 효율적인 모빌리티.</h2>
      </div>

      <div className="card-grid research-grid">
        {researchTopics.map(({ title, description, icon: Icon }, index) => (
          <motion.article
            key={title}
            className="research-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
          >
            <div className="card-icon">
              <Icon size={24} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
