const projects = [
  {
    title: 'Multi-Sport Predictor',
    description: 'AI-powered prediction engine covering 7 sports and 11 leagues. Four-signal blend (ELO + Colley + Form + Odds) with ESPN API integration and real-time odds.',
    tags: ['Python', 'Flask', 'React', 'ESPN API', 'The-Odds-API'],
    link: 'https://multi-sport-predictor.onrender.com',
  },
  {
    title: 'Polymarket Edge',
    description: 'Modular prediction market trading platform with 6 strategies, backtesting engine, and live dashboard for Polymarket.',
    tags: ['Python', 'React', 'Polymarket API', 'Backtesting'],
    link: '#',
  },
  {
    title: 'Soccer Predictor',
    description: 'Premier League prediction web app with ESPN API, 6x/day data refresh, ELO rating system, and historical accuracy tracking.',
    tags: ['Python', 'Flask', 'ESPN API', 'ELO'],
    link: 'https://soccer-predictor.onrender.com',
  },
  {
    title: 'Analytics & Dashboards',
    description: 'Tableau dashboards and reporting solutions for financial analytics, KPI tracking, and operational efficiency monitoring.',
    tags: ['Tableau', 'SQL', 'Reporting', 'Analytics'],
    link: 'https://public.tableau.com/profile/erick.navarrete',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="section__inner fade-in">
        <h2 className="section__title">Portfolio</h2>

        <div className="portfolio__grid">
          {projects.map(p => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio__card"
            >
              <div className="portfolio__card-header">
                <h3>{p.title}</h3>
              </div>
              <p>{p.description}</p>
              <div className="portfolio__tags">
                {p.tags.map(t => (
                  <span key={t} className="portfolio__tag">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
