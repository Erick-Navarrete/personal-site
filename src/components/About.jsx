export default function About() {
  return (
    <section id="about" className="about">
      <div className="section__inner fade-in">
        <h2 className="section__title">About</h2>

        <div className="about__content">
          <div className="about__photo">
            <img src="/images/about-photo.svg" alt="Erick Navarrete" loading="lazy" />
          </div>

          <div className="about__text">
            <div className="about__bio">
              <p>
                As a Financial Transformation Office (FTO) leader, I specialize in modernizing
                the finance function into a strategic engine for growth. I evolve traditional
                operations into digitally-forward, high-performing departments by integrating
                advanced technologies and optimizing core processes. My focus is on bridging
                legacy systems with future-ready solutions to streamline workflows, ensure
                uncompromising compliance, and drive overall business efficiency.
              </p>
            </div>

            <div className="about__areas">
              <h3>Key Areas of Impact</h3>
              <ul>
                <li>
                  <strong>Process Optimization</strong> — Redesigning workflows for maximum output.
                </li>
                <li>
                  <strong>Technology Integration</strong> — Automating tasks through modern system scaling.
                </li>
                <li>
                  <strong>Change Management</strong> — Leading cultural and operational shifts for long-term adoption.
                </li>
                <li>
                  <strong>Strategic Alignment</strong> — Ensuring finance initiatives accelerate business objectives.
                </li>
              </ul>
            </div>

            <div className="about__background">
              <h3>Background</h3>
              <ul>
                <li>
                  <strong>MBA</strong> — 2021
                </li>
                <li>
                  <strong>North Park University</strong> — Business &amp; Economics, 2011
                </li>
                <li>
                  <strong>Fifth Third Bank</strong> — Customer Service Rep → Reporting &amp; Analytics
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
