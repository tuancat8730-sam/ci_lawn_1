import './WhyUs.css'

const BENEFITS = [
  { icon: 'bi-patch-check-fill', title: 'Licensed & Fully Insured', desc: 'All our crews are trained, certified, and fully insured for your peace of mind.' },
  { icon: 'bi-lightning-charge-fill', title: 'Same-Week Service', desc: 'Book today and we\'ll be at your property within the same week — guaranteed.' },
  { icon: 'bi-leaf-fill', title: 'Eco-Friendly Products', desc: 'We use organic and low-impact treatments that are safe for kids, pets, and the environment.' },
  { icon: 'bi-shield-check', title: 'Satisfaction Guarantee', desc: 'Not 100% happy? We\'ll come back and make it right at no extra cost.' },
  { icon: 'bi-chat-dots-fill', title: 'Free Estimates', desc: 'Get a detailed, no-obligation quote for any job — big or small.' },
]

export default function WhyUs() {
  return (
    <section className="section-pad why-us-section" id="about">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Image */}
          <div className="col-lg-5">
            <div className="why-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80"
                alt="Professional lawn care team"
                className="why-main-img"
              />
              <div className="why-badge-card">
                <i className="bi bi-trophy-fill" />
                <div>
                  <strong>Award-Winning</strong>
                  <span>Best Lawn Service 2023</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="col-lg-7">
            <span className="section-label">Why Choose Us</span>
            <div className="divider-green" style={{ margin: '0 0 1rem' }} />
            <h2 className="section-title text-start mb-3">
              The GreenPro Difference
            </h2>
            <p className="text-muted mb-4" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
              We're not just another lawn company. We're your neighbors — and we treat every
              lawn as if it were our own. Our commitment to quality, reliability, and
              environmental responsibility sets us apart.
            </p>

            <div className="why-benefits">
              {BENEFITS.map(b => (
                <div className="benefit-item" key={b.title}>
                  <div className="benefit-icon">
                    <i className={`bi ${b.icon}`} />
                  </div>
                  <div>
                    <h4 className="benefit-title">{b.title}</h4>
                    <p className="benefit-desc">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-green btn btn-lg mt-4 d-inline-flex align-items-center gap-2">
              <i className="bi bi-telephone-fill" />
              Get Your Free Estimate
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
