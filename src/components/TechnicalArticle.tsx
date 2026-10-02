import { FileText } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

export function TechnicalArticle() {
  const { language } = useLanguage()
  const ko = language === 'ko'

  return <article className="technical-article" aria-labelledby="kuma-article-title" lang="ko">
    <div className="technical-article-label">
      <FileText size={20} aria-hidden="true" />
      <p className="technical-label">Technical Article{ko ? ' / 기고' : ''}</p>
    </div>
    <div className="technical-article-content">
      <p className="technical-article-context">KUMA / POWERTRAIN</p>
      <h3 id="kuma-article-title">트랙 위에서 증명한 공학의 본질: KUMA 파워트레인 팀 첫 포뮬러 도전기</h3>
      <p lang={language}>{ko
        ? 'KUMA 파워트레인 팀의 첫 포뮬러 도전 경험을 담은 기술 기고.'
        : 'A technical article on the KUMA powertrain team’s first Formula challenge.'}</p>
      <p className="technical-article-meta" lang={language}>
        Auto Journal · <time dateTime="2026-10">{ko ? '2026년 10월' : 'October 2026'}</time> · pp. 60–61
      </p>
    </div>
  </article>
}
