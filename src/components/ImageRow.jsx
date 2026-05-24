export default function ImageRow({ photos, z }) {
  return (
    <section className={`sticky-section image-row`} data-z={z}>
      <div className="image-row__spacer" />
      <div className="image-row__photos">
        {photos.map((src, i) => (
          <div key={i} className="image-row__item">
            <img src={src} alt={`Portfolio photo ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  )
}
