export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__layout fade-in">
        <div className="hero__photo hero__photo--left">
          <img src="/images/photo1.svg" alt="Erick Navarrete" />
        </div>

        <div className="hero__content">
          <h1 className="hero__name">ERICK<br />NAVARRETE</h1>
          <p className="hero__bio">
            As a Financial Transformation Office (FTO) leader, I specialize in modernizing
            the finance function into a strategic engine for growth — bridging legacy systems
            with future-ready solutions to streamline workflows, ensure uncompromising
            compliance, and drive overall business efficiency.
          </p>
          <a href="#portfolio" className="hero__cta">View Portfolio</a>
        </div>

        <div className="hero__photo hero__photo--right">
          <img src="/images/photo2.svg" alt="Erick Navarrete" />
        </div>
      </div>
    </section>
  )
}
