import { useEffect, useRef, useState } from 'react'
import { useMotion } from '../hooks/useMotion'
import useActiveSection from '../hooks/useActiveSection'
import MagneticLink from './MagneticLink'
import { navLinks, sectionIds } from '../data/content'

export default function Header() {
  const { motionOn, toggleMotion } = useMotion()
  const active = useActiveSection(sectionIds)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuBtnRef = useRef(null)

  // Escape closes the mobile menu
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        menuBtnRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <header>
      <div className="wrap bar">
        <a className="mark" href="#top" aria-label="Deep Narayan Baidya, back to top">
          DEEP BAIDYA<i className="sq" aria-hidden="true"></i>
        </a>

        <nav
          id="nav"
          aria-label="Main"
          className={menuOpen ? 'open' : undefined}
          onClick={(e) => {
            if (e.target.tagName === 'A') setMenuOpen(false)
          }}
        >
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className={active === link.id ? 'on' : undefined}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="tools">
          <button
            className="btn ghost"
            type="button"
            aria-pressed={motionOn}
            onClick={toggleMotion}
          >
            Motion: {motionOn ? 'on' : 'off'}
          </button>
          <MagneticLink className="hide-s" href="#contact">
            Contact
          </MagneticLink>
          <button
            className="btn"
            id="menu"
            type="button"
            ref={menuBtnRef}
            aria-expanded={menuOpen}
            aria-controls="nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            Menu
          </button>
        </div>
      </div>
    </header>
  )
}
