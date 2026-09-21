import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="section-shell section-block">
      <div className="section-heading">
        <p className="eyebrow">소개</p>
        <h2>열 시스템과 모빌리티를 연구하는 공학도입니다.</h2>
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
            공주대학교에서 기계·자동차공학을 전공하며, 특히 전기차를 비롯한 미래 자동차의 열 시스템에 관심을 두고 있습니다.
          </p>
          <p>
            현재 Thermal & Energy Solutions Laboratory 학부연구생으로 배터리, 모터, 인버터 및 HVAC 열관리 주제를 탐구하고 있습니다.
          </p>
          <p>
            이론 학습에 머무르지 않고 설계, 실험, 시뮬레이션과 시제품 제작을 통해 공학 문제를 해결하는 것을 좋아합니다.
          </p>
        </div>

        <div className="info-panel">
          <div>
            <span className="label">이름</span><strong>Jeonghu Kim</strong>
          </div>
          <div>
            <span className="label">대학교</span><strong>공주대학교</strong>
          </div>
          <div>
            <span className="label">전공</span><strong>기계자동차공학</strong>
          </div>
          <div>
            <span className="label">현재 활동</span><strong>학부생 / 학부연구생</strong>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
