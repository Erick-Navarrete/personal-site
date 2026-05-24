export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <nav className="footer__nav">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
        </nav>

        <p className="footer__name">ERICK NAVARRETE</p>

        <div className="footer__legal">
          <a href="#privacy">Privacy Policy</a>
          <a href="#accessibility">Accessibility Statement</a>
        </div>

        <p className="footer__copy">&copy; {new Date().getFullYear()} Erick Navarrete</p>
      </div>
    </footer>
  )
}
