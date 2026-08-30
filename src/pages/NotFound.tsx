import { Link } from 'react-router-dom'
import PageMeta, { pageTitle } from '../components/PageMeta'

export default function NotFound() {
  return (
    <>
      <PageMeta title={pageTitle('Page not found')} description="The requested ONSoftware page could not be found." />
      <section className="ons-hero">
        <div className="ons-container" style={{ maxWidth: '820px' }}>
          <p className="ons-eyebrow">404</p>
          <h1 className="ons-h1">This route does not belong to a live ONSoftware page.</h1>
          <p className="ons-hero__lead">The link may be outdated, the page may have moved, or the address may be incomplete.</p>
          <div className="ons-hero__cta">
            <Link className="ons-btn ons-btn--primary ons-btn--lg" to="/">Go to ONSoftware</Link>
            <Link className="ons-btn ons-btn--secondary ons-btn--lg" to="/products">Browse products</Link>
          </div>
        </div>
      </section>
    </>
  )
}
