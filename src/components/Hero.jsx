import './Hero.css'

const STATS = [
  { icon: 'bi-award-fill', value: '10+', label: 'Years Experience' },
  { icon: 'bi-people-fill', value: '100+', label: 'Happy Clients' },
  { icon: 'bi-patch-check-fill', value: '100%', label: 'Insured & Licensed' },
]

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-overlay" />

      <div className="container hero-content">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <span className="hero-badge">
              <i className="bi bi-flower1 me-2" />
              Professional Lawn Care Services
            </span>

            <h1 className="hero-title">
              Professional Lawn Care<br />
              <span className="text-green-accent">You Can Trust</span>
            </h1>

            <p className="hero-subtitle">
              Capital Lawncare is a full service lawn care company, serving the Edmonton area since 2020.
              Scheduled and efficient service, working to meet customer expectations.
              We have employees who care and customers who are satisfied.
            </p>

            <div className="hero-actions d-flex gap-3 justify-content-center flex-wrap">
              <a href="#about" className="btn-green btn btn-lg d-inline-flex align-items-center gap-2">
                <i className="bi bi-grid-fill" />
                Our Services
              </a>
              <a href="#contact" className="btn-outline-white btn btn-lg d-inline-flex align-items-center gap-2">
                <i className="bi bi-envelope-fill" />
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="hero-stats">
          {STATS.map(stat => (
            <div className="hero-stat-item" key={stat.label}>
              <i className={`bi ${stat.icon}`} />
              <div>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#services" className="hero-scroll-down">
        <i className="bi bi-chevron-double-down" />
      </a>
    </section>
  )
}
