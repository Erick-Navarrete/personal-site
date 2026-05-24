export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section__inner fade-in">
        <h2 className="section__title">Contact</h2>

        <div className="contact__content">
          <div className="contact__info">
            <a href="mailto:Navarrete.Erick@outlook.com" className="contact__email">
              NAVARRETE.ERICK@OUTLOOK.COM
            </a>
          </div>

          <div className="contact__socials-block">
            <h3 className="contact__follow-title">Follow Me</h3>
            <div className="contact__socials">
              <a href="https://linkedin.com/in/erick-nav" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/Erick-Navarrete" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://bitbucket.org/e1_capitan/" target="_blank" rel="noopener noreferrer">
                Bitbucket
              </a>
              <a href="https://public.tableau.com/profile/erick.navarrete" target="_blank" rel="noopener noreferrer">
                Tableau
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
