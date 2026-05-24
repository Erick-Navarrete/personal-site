const photos = [
  { src: '/images/photo1.svg', alt: 'Photo 1' },
  { src: '/images/photo2.svg', alt: 'Photo 2' },
  { src: '/images/photo3.svg', alt: 'Photo 3' },
  { src: '/images/photo4.svg', alt: 'Photo 4' },
  { src: '/images/photo5.svg', alt: 'Photo 5' },
  { src: '/images/photo6.svg', alt: 'Photo 6' },
]

export default function Gallery() {
  return (
    <section id="portfolio" className="gallery">
      <div className="section__inner fade-in">
        <h2 className="section__title">Portfolio</h2>
        <div className="gallery__grid">
          {photos.map((photo, i) => (
            <div key={i} className="gallery__item">
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
