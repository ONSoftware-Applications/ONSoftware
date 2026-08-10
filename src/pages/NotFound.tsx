import { Link } from 'react-router-dom'
import PageMeta, { pageTitle } from '../components/PageMeta'

export default function NotFound() {
  return (
    <>
      <PageMeta
        title={pageTitle('Page not found')}
        description="The page you were looking for doesn’t exist."
      />
      <section className="ons-error">
        <div className="ons-container">
          <p className="ons-error__code">404</p>
          <h1 className="ons-h2">That page doesn’t exist</h1>
          <p className="ons-lead" style={{ margin: '0 auto 24px' }}>
            It may have moved, or the link may be out of date.
          </p>
          <div className="ons-row" style={{ justifyContent: 'center' }}>
            <Link className="ons-btn ons-btn--primary" to="/">
              Back to home
            </Link>
            <Link className="ons-btn ons-btn--secondary" to="/products">
              Browse products
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
