import { useState } from 'react'
import { Menu, X } from 'lucide-react'
const navItems = [['ABOUT','about'],['RESEARCH','research'],['EXPERIENCE','experience'],['PROJECTS','projects'],['SKILLS','skills'],['EDUCATION','education'],['CONTACT','contact']]
export function Navbar({ activeSection }: { activeSection: string }) {
  const [open, setOpen] = useState(false)
  const go = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setOpen(false) }
  return <header className="site-header"><nav className="navbar" aria-label="주요 메뉴"><button className="brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>KJ<span>.</span></button><button className="menu-button" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-label="메뉴 열기">{open ? <X /> : <Menu />}</button><div className={`nav-links ${open ? 'open' : ''}`}>{navItems.map(([label,id]) => <button key={id} className={`nav-link ${activeSection === id ? 'active' : ''}`} onClick={() => go(id)}>{label}</button>)}</div></nav></header>
}
