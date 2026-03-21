import { useState } from 'react'
import './Contact.css'

const SERVICES = [
  'Lawn Mowing',
  'Fertilization & Weed Control',
  'Aeration & Overseeding',
  'Hedge & Shrub Trimming',
  'Leaf Cleanup',
  'Seasonal Maintenance',
  'Other / Multiple Services',
]

const INFO = [
  { icon: 'bi-geo-alt-fill', label: 'Our Location', value: '123 Garden Way, Ottawa, ON K1A 0B1' },
  { icon: 'bi-telephone-fill', label: 'Phone', value: '(613) 555-0187' },
  { icon: 'bi-envelope-fill', label: 'Email', value: 'hello@greenprolawn.ca' },
  { icon: 'bi-clock-fill', label: 'Hours', value: 'Mon–Sat: 7am – 7pm\nSunday: By appointment' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="section-pad contact-section" id="contact">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-label">Contact Us</span>
          <div className="divider-green" />
          <h2 className="section-title">Get Your Free Quote</h2>
          <p className="section-subtitle">
            Ready for a greener lawn? Reach out today and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="row g-5">
          {/* Form */}
          <div className="col-lg-7">
            <div className="contact-form-wrap">
              {sent ? (
                <div className="contact-success">
                  <i className="bi bi-check-circle-fill" />
                  <h3>Message Sent!</h3>
                  <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
                  <button className="btn-green btn" onClick={() => setSent(false)}>Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label contact-label">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control contact-input"
                        placeholder="John Smith"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label contact-label">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control contact-input"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label contact-label">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        className="form-control contact-input"
                        placeholder="(613) 555-0000"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label contact-label">Service Needed *</label>
                      <select
                        name="service"
                        className="form-select contact-input"
                        value={form.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a service…</option>
                        {SERVICES.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label contact-label">Message</label>
                      <textarea
                        name="message"
                        className="form-control contact-input"
                        rows={5}
                        placeholder="Tell us about your lawn, property size, or any specific concerns…"
                        value={form.message}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn-green btn btn-lg w-100 d-flex align-items-center justify-content-center gap-2">
                        <i className="bi bi-send-fill" />
                        Send My Free Quote Request
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="col-lg-5">
            <div className="contact-info-wrap">
              <h3 className="contact-info-title">Get in Touch</h3>
              <p className="contact-info-intro">
                Have questions before you book? We're happy to help. Reach us by phone, email,
                or just fill out the form.
              </p>

              <div className="contact-info-list">
                {INFO.map(item => (
                  <div className="contact-info-item" key={item.label}>
                    <div className="contact-info-icon">
                      <i className={`bi ${item.icon}`} />
                    </div>
                    <div>
                      <span className="contact-info-label">{item.label}</span>
                      <p className="contact-info-value" style={{ whiteSpace: 'pre-line' }}>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="contact-map-placeholder">
                <i className="bi bi-map-fill" />
                <span>Ottawa, ON</span>
                <p>We service the Greater Ottawa Area</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
