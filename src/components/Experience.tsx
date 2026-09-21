import { motion } from 'framer-motion'

export function Experience() {
  return (
    <section id="experience" className="section-shell section-block">
      <div className="section-heading"><p className="eyebrow">연구 경험</p><h2>열공학 연구와 실험 공정 자동화를 탐구하고 있습니다.</h2></div>
      <motion.div className="timeline" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
        <div className="timeline-item"><div className="timeline-marker" aria-hidden="true" /><div className="timeline-content">
          <div className="timeline-topline"><h3>Thermal & Energy Solutions Laboratory</h3><span>2026 – 현재</span></div>
          <p className="timeline-role">학부연구생</p>
          <p className="timeline-body">열공학, 실험 연구, 실험 공정 자동화, 공학 측정과 데이터 기반 실험에 관심을 두고 있습니다.</p>
          <div className="timeline-project"><h4>실험 공정 자동화</h4><p>수작업 표면 코팅과 스와빙 과정의 편차를 줄이기 위해 직교좌표형 모션 플랫폼을 활용한 자동화 방식을 검토하고 있습니다.</p><ul><li>연구 개념 설계</li><li>실험 자동화 검토</li><li>모션 기반 공정 제어 탐구</li></ul></div>
        </div></div>
      </motion.div>
    </section>
  )
}
