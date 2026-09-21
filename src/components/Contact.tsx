import { Download, ExternalLink, GitBranch, Mail } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="section-shell section-block contact-section">
      <div className="section-heading centered">
        <p className="eyebrow">연락처</p>
        <h2>함께 이야기해요</h2>
      </div>

      <div className="contact-card">
        <p>
          자동차 열관리, 공학 연구와 모빌리티 기술에 관심이 있습니다.
        </p>

        <div className="contact-list">
          <a href="mailto:YOUR_EMAIL">
            <Mail size={16} />
            <span>Email</span>
            <strong>YOUR_EMAIL</strong>
          </a>
          <a href="YOUR_GITHUB_URL" target="_blank" rel="noreferrer">
            <GitBranch size={16} />
            <span>GitHub</span>
            <strong>YOUR_GITHUB_URL</strong>
          </a>
          <a href="YOUR_LINKEDIN_URL" target="_blank" rel="noreferrer">
            <ExternalLink size={16} />
            <span>LinkedIn</span>
            <strong>YOUR_LINKEDIN_URL</strong>
          </a>
        </div>

        <a href="/resume.pdf" className="primary-btn contact-download" download>
          <Download size={18} />
          이력서 다운로드
        </a>
      </div>
    </section>
  )
}
