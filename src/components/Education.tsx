import { motion } from 'framer-motion'

export function Education() {
  return (
    <section id="education" className="section-shell section-block">
      <div className="section-heading"><p className="eyebrow">학력</p><h2>기계자동차공학.</h2></div>
      <motion.div className="education-card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }}>
        <div className="education-header"><div><h3>공주대학교</h3><p>기계자동차공학부</p></div><span className="pill">학사 과정</span></div>
        <p className="education-year">2023 – 현재</p>
        <div className="coursework"><h4>주요 이수 과목</h4><ul><li>공업역학</li><li>재료역학</li><li>동역학</li><li>미적분학</li><li>프로그래밍</li><li>공학설계</li></ul></div>
      </motion.div>
    </section>
  )
}
