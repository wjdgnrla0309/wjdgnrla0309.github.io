import { ArrowRight, Download } from 'lucide-react'
import { motion } from 'framer-motion'

const tags = [
  '기계공학', '자동차공학', '열관리', '전기차 기술', '학부연구생',
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
          <p className="eyebrow">기계공학도 & 학부연구생</p>
          <h1>
            Jeonghu Kim
            <span>기계·자동차공학 전공</span>
            <span>학부연구생</span>
          </h1>
          <p className="hero-lead">미래 모빌리티를 위한 열관리 기술을 연구합니다.</p>

          <div className="tag-list" aria-label="Professional tags">
            {tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="hero-actions">
            <a href="#projects" className="primary-btn">
              프로젝트 보기
              <ArrowRight size={18} />
            </a>
            <a href="#about" className="secondary-btn">
              소개
            </a>
            <a href="/resume.pdf" className="secondary-btn download-btn" download>
              <Download size={18} />
              이력서 다운로드
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
        >
          <div className="hero-panel profile-panel">
            <img className="profile-photo" src="/profile.jpg" alt="Jeonghu Kim 프로필 사진" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
