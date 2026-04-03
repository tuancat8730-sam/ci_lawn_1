import './HowItWorks.css'

const STEPS = [
  {
    num: '01',
    icon: 'bi-clipboard2-check-fill',
    title: 'Request a Quote',
    desc: 'Fill out our quick online form or give us a call. Tell us about your lawn and the services you need — it only takes 2 minutes.',
  },
  {
    num: '02',
    icon: 'bi-calendar-check-fill',
    title: 'Lawn Care Confirmed',
    desc: 'We\'ll confirm your service and let you know ahead of time when we will be at your house.',
  },
  {
    num: '03',
    icon: 'bi-emoji-smile-fill',
    title: 'Enjoy Your Perfect Lawn',
    desc: 'Sit back and relax while our certified crew transforms your lawn. We clean up completely before we leave.',
  },
]

export default function HowItWorks() {
  return (
    <section className="section-pad how-section" id="how">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-label">Simple Process</span>
          <div className="divider-green" />
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Getting started is easy. Three simple steps and you'll have a beautiful lawn
            without lifting a finger.
          </p>
        </div>

        <div className="row g-0 align-items-start position-relative">
          {/* Connector line */}
          <div className="step-connector d-none d-lg-block" />

          {STEPS.map((step) => (
            <div className="col-lg-4" key={step.num}>
              <div className="step-card text-center">
                <div className="step-num">{step.num}</div>
                <div className="step-icon-wrap">
                  <i className={`bi ${step.icon}`} />
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <a href="#contact" className="btn-green btn btn-lg d-inline-flex align-items-center gap-2">
            <i className="bi bi-send-fill" />
            Request Your Free Quote
          </a>
        </div>
      </div>
    </section>
  )
}
