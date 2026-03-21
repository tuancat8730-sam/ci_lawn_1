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

export default function Gallery() {
  return (
    <section className="section-pad gallery-section" id="gallery">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-label">Our Work</span>
          <div className="divider-green" />
          <h2 className="section-title">Recent Projects</h2>
          <p className="section-subtitle">
            A glimpse at the transformations we create for our clients every day.
          </p>
        </div>

        <div className="gallery-grid">
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
      </div>
    </section>
  )
}
