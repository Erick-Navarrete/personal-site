import { useState, useEffect } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'HOME', href: '#hero' },
    { label: 'ABOUT', href: '#about' },
    { label: 'PORTFOLIO', href: '#portfolio' },
    { label: 'CONTACT', href: '#contact' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <a className="navbar__logo" href="#hero">EN</a>

      <button
        className={`navbar__toggle ${open ? 'navbar__toggle--active' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
