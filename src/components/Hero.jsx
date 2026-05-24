export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__text fade-in">
        <p className="hero__subtitle">FINANCE &amp; TECHNOLOGY LEADER</p>
        <h1 className="hero__name">ERICK<br />NAVARRETE</h1>
        <p className="hero__bio">
          As a Financial Transformation Office (FTO) leader, I specialize in modernizing
          the finance function into a strategic engine for growth — bridging legacy systems
          with future-ready solutions to streamline workflows, ensure uncompromising
          compliance, and drive overall business efficiency.
        </p>
        <a href="#contact" className="hero__cta">Get in Touch</a>
      </div>

      <div className="hero__photos">
        <div className="hero__photo">
          <img src="/images/about-photo.svg" alt="Erick Navarrete" />
        </div>
        <div className="hero__photo">
          <img src="/images/photo1.svg" alt="Erick Navarrete" />
        </div>
      </div>
    </section>
  )
}
