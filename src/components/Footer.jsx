import './Footer.css'

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

const SOCIAL = [
  { icon: 'bi-facebook', href: '#' },
  { icon: 'bi-instagram', href: '#' },
  { icon: 'bi-twitter-x', href: '#' },
  { icon: 'bi-google', href: '#' },
]

export default function Footer() {
  return (
    <footer className="footer">
      {/* CTA Band */}
      <div className="footer-cta-band">
        <div className="container d-flex align-items-center justify-content-between flex-wrap gap-3">
          <div>
            <h3 className="footer-cta-title">Ready for a Perfect Lawn?</h3>
            <p className="footer-cta-sub mb-0">Join 500+ happy clients who trust GreenPro every season.</p>
          </div>
          <a href="#contact" className="btn-outline-white btn btn-lg d-inline-flex align-items-center gap-2">
            <i className="bi bi-telephone-fill" />
            Get Free Quote Today
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="footer-main">
        <div className="container">
          <div className="row g-4">
            {/* Brand */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-brand">
                <a href="#home" className="footer-logo">
                  <i className="bi bi-flower1 me-2" />
                  GreenPro
                </a>
                <p className="footer-tagline">
                  Professional lawn care services that keep your outdoor spaces
                  beautiful, healthy, and thriving — all year long.
                </p>
                <div className="footer-social">
                  {SOCIAL.map(s => (
                    <a key={s.icon} href={s.href} className="social-link" aria-label={s.icon}>
                      <i className={`bi ${s.icon}`} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="col-lg-2 col-md-3 col-6">
              <h4 className="footer-col-title">Quick Links</h4>
              <ul className="footer-links">
                {QUICK_LINKS.map(l => (
                  <li key={l.href}>
                    <a href={l.href}>
                      <i className="bi bi-chevron-right me-1" />
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="col-lg-5 col-md-6">
              <h4 className="footer-col-title">Contact Us</h4>
              <ul className="footer-contact-list">
                <li>
                  <i className="bi bi-geo-alt-fill" />
                  <span>123 Garden Way, Ottawa, ON K1A 0B1</span>
                </li>
                <li>
                  <i className="bi bi-telephone-fill" />
                  <a href="tel:+16135550187">(613) 555-0187</a>
                </li>
                <li>
                  <i className="bi bi-envelope-fill" />
                  <a href="mailto:hello@greenprolawn.ca">hello@greenprolawn.ca</a>
                </li>
                <li>
                  <i className="bi bi-clock-fill" />
                  <span>Mon–Sat: 7am – 7pm</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container d-flex align-items-center justify-content-between flex-wrap gap-2">
          <p className="mb-0">© {new Date().getFullYear()} GreenPro Lawn Care. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
