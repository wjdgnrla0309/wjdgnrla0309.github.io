import { FileText } from 'lucide-react'
import { useRef } from 'react'
import { useLanguage } from '../LanguageContext'

export function TechnicalArticle() {
  const { language } = useLanguage()
  const ko = language === 'ko'
  const dialogRef = useRef<HTMLDialogElement>(null)
  const imageUrl = `${import.meta.env.BASE_URL}images/articles/auto-journal-2026-10-kuma.png`

  return <article className="technical-article" aria-labelledby="kuma-article-title" lang="ko">
    <div className="technical-article-label">
      <button className="technical-article-preview" type="button" onClick={() => dialogRef.current?.showModal()} aria-haspopup="dialog" lang={language}>
        <img src={imageUrl} alt={ko ? 'Auto Journal 2026년 10월호 KUMA 파워트레인 기고, 60–61쪽' : 'KUMA powertrain technical article in Auto Journal, October 2026, pages 60–61'} loading="lazy" width={1287} height={852} />
        <span>{ko ? '클릭하여 크게 보기' : 'Click to enlarge'}</span>
      </button>
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
    <dialog ref={dialogRef} className="article-image-dialog" aria-label={ko ? 'Auto Journal 기고 원문 확대' : 'Auto Journal article enlarged'} lang={language} onClick={event => { if (event.target === event.currentTarget) dialogRef.current?.close() }}>
      <div className="article-image-toolbar">
        <p>Auto Journal · 2026.10 · pp. 60–61</p>
        <button type="button" autoFocus onClick={() => dialogRef.current?.close()}>{ko ? '← 돌아가기 / 닫기' : '← Back / Close'}</button>
      </div>
      <div className="article-image-scroll"><img src={imageUrl} alt={ko ? 'KUMA 파워트레인 기고 원문 60–61쪽' : 'KUMA powertrain article, pages 60–61'} width={1287} height={852} /></div>
    </dialog>
  </article>
}
