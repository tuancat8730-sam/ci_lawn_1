import './WhyUs.css'

const PLANS = [
  {
    name: 'Spring Clean-Up',
    icon: 'bi-flower1',
    originalPrice: '$299',
    price: '$229',
    badge: null,
    features: [
      'Debris & leaf removal',
      'Edge trimming & cleanup',
      'Garden bed clearing',
      'Sidewalk & driveway blowing',
      'First mow of the season',
    ],
    cta: 'Book Now',
    featured: false,
  },
  {
    name: 'Regular Lawn Maintenance',
    icon: 'bi-scissors',
    originalPrice: null,
    price: '$89',
    badge: 'Most Popular',
    features: [
      'Weekly or bi-weekly mowing',
      'Edge trimming every visit',
      'Grass clipping cleanup',
      'Sidewalk & driveway blowing',
      'Season-long scheduling',
    ],
    cta: 'Get Started',
    featured: true,
  },
  {
    name: 'Fertilizer & Weed Control',
    icon: 'bi-bug-fill',
    originalPrice: '$259',
    price: '$200',
    badge: null,
    features: [
      'Full lawn weed treatment',
      'Eco-friendly products',
      'Safe for kids & pets',
      'Dandelion & thistle removal',
      'Follow-up inspection included',
    ],
    cta: 'Book Now',
    featured: false,
  },
]

export default function WhyUs() {
  return (
    <section className="section-pad why-us-section" id="about">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-label">Our Lawn Care Services</span>
          <div className="divider-green mx-auto" />
          <h2 className="section-title mt-2">Simple, Transparent Pricing</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: 520, fontSize: '1rem', lineHeight: 1.8 }}>
            No hidden fees. Choose the service that fits your lawn — and your budget.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {PLANS.map(plan => (
            <div className="col-lg-4 col-md-6" key={plan.name}>
              <div className={`pricing-card ${plan.featured ? 'pricing-card--featured' : ''}`}>
                {plan.badge && (
                  <div className="pricing-badge">{plan.badge}</div>
                )}

                <div className="pricing-icon">
                  <i className={`bi ${plan.icon}`} />
                </div>

                <h3 className="pricing-name">{plan.name}</h3>

                <div className="pricing-price">
                  {plan.originalPrice && (
                    <span className="pricing-original">{plan.originalPrice}</span>
                  )}
                  <span className="pricing-current">{plan.price}</span>
                  <span className="pricing-unit">/visit</span>
                </div>

                <ul className="pricing-features">
                  {plan.features.map(f => (
                    <li key={f}>
                      <i className="bi bi-check-circle-fill" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`btn btn-lg w-100 mt-auto ${plan.featured ? 'btn-green' : 'btn-outline-green'}`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
