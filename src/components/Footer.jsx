import './Footer.css'

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]


export default function Footer() {
  return (
    <footer className="footer">
      {/* CTA Band */}
      <div className="footer-cta-band">
        <div className="container d-flex align-items-center justify-content-between flex-wrap gap-3">
          <div>
            <h3 className="footer-cta-title">Ready for a Perfect Lawn?</h3>
            <p className="footer-cta-sub mb-0">Join 500+ happy clients who trust Capital Lawn Care every season.</p>
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
                  <img
                    src="/images/logo3.PNG"
                    alt="Capital Lawn Care"
                    className="footer-logo-img"
                  />
                  <span className="footer-logo-text">Capital Lawn Care</span>
                </a>
                <p className="footer-tagline">
                  Professional lawn care services that keep your outdoor spaces
                  beautiful, healthy, and thriving — all year long.
                </p>
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
                  <span>4505 97 St NW, Edmonton, AB T6E 5Y8</span>
                </li>
                <li>
                  <i className="bi bi-telephone-fill" />
                  <a href="tel:+17809893987">780-989-3987</a>
                </li>
                <li>
                  <i className="bi bi-envelope-fill" />
                  <a href="mailto:lawncare@capitalirrigation.com">lawncare@capitalirrigation.com</a>
                </li>
                <li>
                  <i className="bi bi-clock-fill" />
                  <span>Monday – Friday: 9am – 4pm</span>
                </li>
              </ul>

              {/* Mini map */}
              <div className="footer-map-wrap">
                <iframe
                  title="Edmonton Office"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2373.7!2d-113.4955!3d53.4903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0224a8b5f1b3d%3A0x1!2s4505+97+St+NW%2C+Edmonton%2C+AB+T6E+5Y8!5e0!3m2!1sen!2sca!4v1"
                  width="100%"
                  height="160"
                  style={{ border: 0, borderRadius: '10px', display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <p className="footer-map-label">
                  <i className="bi bi-geo-fill" /> Edmonton, AB — We service the Edmonton area
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container d-flex align-items-center justify-content-between flex-wrap gap-2">
          <p className="mb-0">© {new Date().getFullYear()} Capital Lawn Care. All rights reserved.</p>
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
