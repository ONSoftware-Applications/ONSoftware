import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import BrandMark from './BrandMark'
import { APP_URL, BRAND_ASSETS, COMPANY_YEAR, CONTACT_EMAILS, SITE_NAME } from '../lib/site'

const NAV_LINKS = [
  { to: '/products/sellerhq', label: 'SellerHQ' },
  { to: '/about', label: 'About' },
  { to: '/support', label: 'Support' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="ons-nav">
      <div className="ons-container ons-nav__inner">
        <Link className="ons-nav__brand" to="/" onClick={() => setMenuOpen(false)} aria-label="ONSoftware home">
          <BrandMark inverted />
        </Link>

        <nav className="ons-nav__desktop" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => isActive ? 'ons-nav__link ons-nav__link--active' : 'ons-nav__link'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="ons-nav__actions">
          <a className="ons-btn ons-btn--nav" href={`${APP_URL}/login`}>Open SellerHQ</a>
          <button
            type="button"
            className="ons-nav__menu"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="ons-nav__panel">
          <div className="ons-container ons-nav__panel-inner">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} onClick={() => setMenuOpen(false)}>{link.label}</NavLink>
            ))}
            <a href={`${APP_URL}/login`}>Open SellerHQ ↗</a>
          </div>
        </div>
      ) : null}
    </header>
  )
}

function Footer() {
  return (
    <footer className="ons-footer">
      <div className="ons-container ons-footer__top">
        <div className="ons-footer__brand">
          <img src={BRAND_ASSETS.logo} alt="ONSoftware — Tools. Automate. Succeed." />
          <p>Focused software for the operational work that should be simpler.</p>
        </div>

        <div className="ons-footer__links">
          <div>
            <span className="ons-footer__label">Explore</span>
            <Link to="/products/sellerhq">SellerHQ</Link>
            <Link to="/about">About</Link>
            <Link to="/support">Support</Link>
          </div>
          <div>
            <span className="ons-footer__label">Contact</span>
            <a href={`mailto:${CONTACT_EMAILS.general}`}>General</a>
            <a href={`mailto:${CONTACT_EMAILS.business}`}>Business</a>
            <a href={`mailto:${CONTACT_EMAILS.feedback}`}>Feedback</a>
          </div>
          <div>
            <span className="ons-footer__label">Legal</span>
            <Link to="/legal/privacy">Privacy</Link>
            <Link to="/legal/sellerhq-terms">SellerHQ terms</Link>
            <Link to="/legal">All legal</Link>
          </div>
        </div>
      </div>

      <div className="ons-container ons-footer__bottom">
        <span>© {COMPANY_YEAR} {SITE_NAME}</span>
        <span>Built in the UK · Independent software studio</span>
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
