import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import BrandMark from './BrandMark'
import {
  APP_URL,
  BRAND_ASSETS,
  COMPANY_YEAR,
  CONTACT_EMAILS,
  SITE_NAME,
  SITE_TAGLINE,
} from '../lib/site'

const NAV_LINKS = [
  { to: '/products', label: 'Products' },
  { to: '/updates', label: 'Updates' },
  { to: '/about', label: 'Company' },
  { to: '/support', label: 'Support' },
]

function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const stored = localStorage.getItem('ons-theme')
    if (stored === 'light' || stored === 'dark') return stored
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('ons-theme', theme)
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#07111f' : '#f7f9fc')
  }, [theme])

  return (
    <button
      type="button"
      className="ons-nav__toggle"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        {theme === 'dark' ? (
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        ) : (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </>
        )}
      </svg>
    </button>
  )
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="ons-nav">
      <div className="ons-container ons-nav__inner">
        <Link to="/" onClick={() => setMenuOpen(false)} aria-label="ONSoftware home">
          <BrandMark />
        </Link>

        <nav aria-label="Main navigation">
          <ul className="ons-nav__links">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive ? 'ons-nav__link ons-nav__link--active' : 'ons-nav__link'
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ons-nav__actions">
          <ThemeToggle />
          <Link className="ons-btn ons-btn--ghost ons-btn--sm" to="/products/sellerhq">
            SellerHQ
          </Link>
          <a className="ons-btn ons-btn--primary ons-btn--sm" href={`${APP_URL}/login`}>
            Open app
          </a>
          <button
            type="button"
            className="ons-nav__toggle ons-nav__menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="ons-nav__panel">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="ons-nav__link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="ons-nav__link" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
          <div className="ons-nav__panel-actions">
            <Link className="ons-btn ons-btn--secondary" to="/products/sellerhq" onClick={() => setMenuOpen(false)}>
              Explore SellerHQ
            </Link>
            <a className="ons-btn ons-btn--primary" href={`${APP_URL}/login`}>
              Open SellerHQ
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}

function Footer() {
  return (
    <footer className="ons-footer">
      <div className="ons-container">
        <div className="ons-footer__main">
          <div className="ons-footer__identity">
            <Link to="/" aria-label="ONSoftware home">
              <img className="ons-footer__logo" src={BRAND_ASSETS.logo} alt="ONSoftware — Tools. Automate. Succeed." />
            </Link>
            <p className="ons-footer__tagline">
              {SITE_TAGLINE} Focused digital tools that reduce repetitive admin and give independent operators more control.
            </p>
          </div>

          <div>
            <p className="ons-footer__col-title">Products</p>
            <ul className="ons-footer__links">
              <li><Link to="/products/sellerhq">SellerHQ</Link></li>
              <li><Link to="/products/sellerhq/pricing">SellerHQ pricing</Link></li>
              <li><Link to="/products">Product roadmap</Link></li>
              <li><Link to="/updates">Release updates</Link></li>
            </ul>
          </div>

          <div>
            <p className="ons-footer__col-title">Company</p>
            <ul className="ons-footer__links">
              <li><Link to="/about">About ONSoftware</Link></li>
              <li><Link to="/security">Security</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/account">Product accounts</Link></li>
            </ul>
          </div>

          <div>
            <p className="ons-footer__col-title">Support</p>
            <ul className="ons-footer__links">
              <li><Link to="/support">Help centre</Link></li>
              <li><a href={`mailto:${CONTACT_EMAILS.products}`}>SellerHQ support</a></li>
              <li><a href={`mailto:${CONTACT_EMAILS.feedback}`}>Product feedback</a></li>
            </ul>
          </div>

          <div>
            <p className="ons-footer__col-title">Legal</p>
            <ul className="ons-footer__links">
              <li><Link to="/legal/privacy">Privacy</Link></li>
              <li><Link to="/legal/sellerhq-terms">SellerHQ terms</Link></li>
              <li><Link to="/legal/subscriptions-refunds">Subscriptions & refunds</Link></li>
              <li><Link to="/legal">All legal documents</Link></li>
            </ul>
          </div>
        </div>

        <div className="ons-footer__bottom">
          <span>© {COMPANY_YEAR} {SITE_NAME}. All rights reserved.</span>
          <span className="ons-footer__badge"><span className="ons-signal">SellerHQ available</span> · Built in the UK</span>
        </div>
      </div>
    </footer>
  )
}

export default function Layout() {
  return (
    <>
      <Navbar />
      <main><Outlet /></main>
      <Footer />
    </>
  )
}
