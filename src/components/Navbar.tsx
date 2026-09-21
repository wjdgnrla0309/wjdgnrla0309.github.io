import { GitBranch } from 'lucide-react'

const navItems = [
  { label: '소개', id: 'about' }, { label: '연구', id: 'research' },
  { label: '경험', id: 'experience' }, { label: '프로젝트', id: 'projects' },
  { label: '기술', id: 'skills' }, { label: '학력', id: 'education' }, { label: '연락처', id: 'contact' },
]

type NavbarProps = {
  activeSection: string
}

export function Navbar({ activeSection }: NavbarProps) {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <div className="nav-links" role="menubar" aria-label="Main sections">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={activeSection === item.id ? 'nav-link active' : 'nav-link'}
              onClick={() => handleScroll(item.id)}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              {item.label}
            </button>
          ))}
        </div>

        <a
          href="YOUR_GITHUB_URL"
          className="github-link"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
        >
          <GitBranch size={18} />
        </a>
      </nav>
    </header>
  )
}
