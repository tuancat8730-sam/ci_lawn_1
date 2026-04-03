import { useState, useRef } from 'react'
import './Gallery.css'

const IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1550159930-40066082a4fc?w=600&q=80',
    alt: 'Freshly mowed lawn',
    label: 'Lawn Mowing',
  },
  {
    src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
    alt: 'Hedge trimming service',
    label: 'Hedge Trimming',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    alt: 'Beautiful garden lawn',
    label: 'Full Maintenance',
  },
  {
    src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80',
    alt: 'Garden landscaping',
    label: 'Landscaping',
  },
  {
    src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
    alt: 'Lawn aeration',
    label: 'Aeration',
  },
  {
    src: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=600&q=80',
    alt: 'Backyard cleanup',
    label: 'Seasonal Cleanup',
  },
]

const FAQS = [
  {
    q: 'What happens if it is raining on my scheduled cut day?',
    a: 'If we are unable to cut on our usual day, we will complete your cut as soon as we are able and the weather has dried. There will be weeks where we need to work into the evenings to catch up.',
    icon: 'bi-cloud-rain-fill',
  },
  {
    q: 'Can my grass clippings be bagged?',
    a: 'We can bag your clippings or mulch them back into your lawn. Bagged clippings are either put into the city provided green bin or left in a plastic bag for the customer to dispose of. Unfortunately, we are unable to take your clippings away from your house.',
    icon: 'bi-bag-fill',
  },
  {
    q: 'How do I pay my invoice?',
    a: 'We will email your invoice, which will include payment options. We accept e-transfer, cheque or credit card payment through our website or over the phone.',
    icon: 'bi-credit-card-fill',
  },
]

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const sliderRef = useRef(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  const handleScroll = () => {
    const el = sliderRef.current
    if (!el) return
    const idx = Math.round(el.scrollLeft / el.clientWidth)
    setActiveSlide(idx)
  }

  const goToSlide = (i) => {
    const el = sliderRef.current
    if (!el) return
    el.scrollTo({ left: i * el.clientWidth, behavior: 'smooth' })
    setActiveSlide(i)
  }

  return (
    <section className="section-pad gallery-section" id="gallery">
      <div className="container">

        {/* Gallery */}
        <div className="text-center mb-5">
          <span className="section-label">Our Work</span>
          <div className="divider-green" />
          <h2 className="section-title">Recent Projects</h2>
          <p className="section-subtitle">
            A glimpse at the transformations we create for our clients every day.
          </p>
        </div>

        {/* Desktop grid */}
        <div className="gallery-grid mb-6 d-none d-md-grid">
          {IMAGES.map((img, i) => (
            <div className="gallery-item" key={i}>
              <img src={img.src} alt={img.alt} />
              <div className="gallery-overlay">
                <div className="gallery-info">
                  <i className="bi bi-zoom-in mb-2" />
                  <span>{img.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile slider */}
        <div className="gallery-slider-wrap d-md-none mb-6">
          <div className="gallery-slider" ref={sliderRef} onScroll={handleScroll}>
            {IMAGES.map((img, i) => (
              <div className="gallery-slide" key={i}>
                <img src={img.src} alt={img.alt} />
                <div className="gallery-slide-label">
                  <i className="bi bi-image" />
                  <span>{img.label}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="gallery-dots">
            {IMAGES.map((_, i) => (
              <button
                key={i}
                className={`gallery-dot${i === activeSlide ? ' gallery-dot--active' : ''}`}
                onClick={() => goToSlide(i)}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="faq-wrap">
          <div className="text-center mb-5">
            <span className="section-label">FAQ</span>
            <div className="divider-green" />
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Everything you need to know before booking your service.
            </p>
          </div>

          <div className="faq-list">
            {FAQS.map((faq, i) => (
              <div
                className={`faq-item ${openIndex === i ? 'faq-item--open' : ''}`}
                key={i}
              >
                <button
                  className="faq-question"
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                >
                  <span className="faq-icon-wrap">
                    <i className={`bi ${faq.icon}`} />
                  </span>
                  <span className="faq-q-text">{faq.q}</span>
                  <i className={`bi faq-chevron ${openIndex === i ? 'bi-chevron-up' : 'bi-chevron-down'}`} />
                </button>

                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
