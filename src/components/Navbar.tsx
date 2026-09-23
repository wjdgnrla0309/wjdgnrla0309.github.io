import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../LanguageContext'
import { F1Mark } from './F1Mark'
const navItems = { ko: [['소개','about'],['연구','research'],['경험','experience'],['프로젝트','projects'],['역량','skills'],['학력','education'],['연락처','contact']], en: [['ABOUT','about'],['RESEARCH','research'],['EXPERIENCE','experience'],['PROJECTS','projects'],['SKILLS','skills'],['EDUCATION','education'],['CONTACT','contact']] } as const
export function Navbar({ activeSection }: { activeSection: string }) {
  const [open, setOpen] = useState(false)
  const { language, toggleLanguage } = useLanguage()
  const go = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setOpen(false) }
  return <header className="site-header"><nav className="navbar" aria-label={language === 'ko' ? '주요 메뉴' : 'Primary navigation'}><button className="brand f1-mark" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label={language === 'ko' ? '맨 위로 이동' : 'Back to top'}><F1Mark /></button><div className="nav-actions"><button className="language-button" onClick={toggleLanguage} aria-label={language === 'ko' ? '영어로 보기' : 'View in Korean'}>{language === 'ko' ? 'EN' : '한국어'}</button><button className="menu-button" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-label={language === 'ko' ? '메뉴 열기' : 'Open menu'}>{open ? <X /> : <Menu />}</button></div><div className={`nav-links ${open ? 'open' : ''}`}>{navItems[language].map(([label,id]) => <button key={id} className={`nav-link ${activeSection === id ? 'active' : ''}`} onClick={() => go(id)}>{label}</button>)}</div></nav></header>
}
