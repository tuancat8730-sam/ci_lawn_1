import { useState, useEffect } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`gp-navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container d-flex align-items-center justify-content-between">
        {/* Logo */}
        <a href="#home" className="gp-logo">
          <i className="bi bi-flower1 me-2" />
          GreenPro
        </a>

        {/* Desktop Nav */}
        <ul className="gp-nav-links mb-0">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#contact" className="btn-green btn gp-cta d-none d-lg-inline-flex align-items-center gap-2">
          <i className="bi bi-telephone-fill" />
          Get Free Quote
        </a>

        {/* Hamburger */}
        <button
          className="gp-hamburger d-lg-none"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <i className={`bi ${menuOpen ? 'bi-x-lg' : 'bi-list'}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="gp-mobile-menu d-lg-none">
          <ul>
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
              </li>
            ))}
            <li>
              <a href="#contact" className="btn-green btn w-100 mt-2" onClick={() => setMenuOpen(false)}>
                Get Free Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
