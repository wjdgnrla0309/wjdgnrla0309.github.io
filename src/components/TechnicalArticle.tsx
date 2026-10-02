import { FileText } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

export function TechnicalArticle() {
  const { language } = useLanguage()
  const ko = language === 'ko'
  const imageUrl = `${import.meta.env.BASE_URL}images/articles/auto-journal-2026-10-kuma.png`

  return <article className="technical-article" aria-labelledby="kuma-article-title" lang="ko">
    <div className="technical-article-label">
      <details className="technical-article-disclosure" lang={language}>
        <summary><span className="article-show">{ko ? '원문 보기' : 'Show article'}</span><span className="article-hide">{ko ? '원문 접기' : 'Hide article'}</span></summary>
      <a className="technical-article-preview" href={imageUrl} target="_blank" rel="noopener noreferrer" lang={language}>
        <img src={imageUrl} alt={ko ? 'Auto Journal 2026년 10월호 KUMA 파워트레인 기고, 60–61쪽' : 'KUMA powertrain technical article in Auto Journal, October 2026, pages 60–61'} loading="lazy" width={1287} height={852} />
        <span>{ko ? '원문 확대 보기 ↗ (새 탭)' : 'View full-size article ↗ (new tab)'}</span>
      </a>
      </details>
      <div className="technical-article-type">
      <FileText size={20} aria-hidden="true" />
      <p className="technical-label">Technical Article{ko ? ' / 기고' : ''}</p>
      </div>
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
