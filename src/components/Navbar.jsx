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
    <>
      {/* Top bar */}
      <div className="top-bar">
        <div className="container d-flex align-items-center justify-content-center gap-2">
          <i className="bi bi-credit-card-fill" />
          <span>Pay your invoice online — quick and secure.</span>
          <a
            href="https://capitalirrigation.com/payment/"
            target="_blank"
            rel="noopener noreferrer"
            className="top-bar-link"
          >
            Pay Now <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>

    <nav className={`gp-navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container d-flex align-items-center justify-content-between">
        {/* Logo */}
        <a href="#home" className="gp-logo">
          <img
            src="./images/logo3.PNG"
            alt="Capital Lawn Care"
            className="gp-logo-img"
          />
          <span className="gp-logo-text">Capital Lawn Care</span>
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
    </>
  )
}
