import { GitBranch } from 'lucide-react'

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Research', id: 'research' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
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
        <a href="#top" className="brand" aria-label="KJ home">
          KJ.
        </a>

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
