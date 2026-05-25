const milestones = [
  {
    year: '2011',
    title: 'North Park University',
    detail: 'Business & Economics Degree — Chicago',
  },
  {
    year: '2011',
    title: 'Fifth Third Bank',
    detail: 'Customer Service Rep → Reporting & Analytics',
  },
  {
    year: '2018',
    title: 'Tableau & Analytics',
    detail: 'Expansion into data visualization and business intelligence',
  },
  {
    year: '2021',
    title: 'MBA',
    detail: 'Completed Master of Business Administration',
  },
  {
    year: 'Current',
    title: 'Financial Transformation Office',
    detail: 'Leading modernization of finance operations through technology integration and process optimization',
  },
]

const areas = [
  { title: 'Process Optimization', desc: 'Redesigning workflows for maximum output' },
  { title: 'Technology Integration', desc: 'Automating tasks through modern system scaling' },
  { title: 'Change Management', desc: 'Leading cultural and operational shifts for long-term adoption' },
  { title: 'Strategic Alignment', desc: 'Ensuring finance initiatives accelerate business objectives' },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section__inner fade-in">
        <h2 className="section__title">About</h2>

        <div className="about__grid">
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
            <h3 className="about__label">Key Areas of Impact</h3>
            <ul className="about__list">
              {areas.map(a => (
                <li key={a.title}>
                  <strong>{a.title}</strong> — {a.desc}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="about__timeline">
          <h3 className="about__label">Background</h3>
          {milestones.map(m => (
            <div key={m.title + m.year} className="about__milestone">
              <span className="about__year">{m.year}</span>
              <div className="about__milestone-body">
                <strong>{m.title}</strong>
                <span>{m.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
