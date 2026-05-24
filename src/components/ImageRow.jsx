export default function ImageRow({ photos }) {
  return (
    <section className="image-row">
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
