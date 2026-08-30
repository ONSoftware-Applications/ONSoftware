import { Link } from 'react-router-dom'
import PageMeta, { pageTitle } from '../components/PageMeta'
import { APP_URL } from '../lib/site'

export default function Account() {
  return (
    <>
      <PageMeta title={pageTitle('Product accounts')} description="Access ONSoftware product accounts. SellerHQ currently manages its own sign-in, registration and billing flows." />

      <section className="ons-hero">
        <div className="ons-container" style={{ maxWidth: '930px' }}>
          <p className="ons-eyebrow">Accounts</p>
          <h1 className="ons-h1">Your account belongs to the product you use.</h1>
          <p className="ons-hero__lead">ONSoftware is the company hub, not a universal account portal. Each application owns the account and billing flows it actually needs. Right now, the live account system is SellerHQ.</p>
        </div>
      </section>

      <section className="ons-section ons-section--soft">
        <div className="ons-container">
          <article className="ons-product ons-product--featured" style={{ maxWidth: '760px', marginInline: 'auto' }}>
            <div className="ons-product__top">
              <span className="ons-product__logo ons-product__logo--amber" aria-hidden="true">SH</span>
              <span className="ons-badge ons-badge--live"><span className="ons-badge__dot" />Live account system</span>
            </div>
            <h2 className="ons-product__title ons-h2">SellerHQ</h2>
            <p className="ons-product__tagline">Reselling business management</p>
            <p className="ons-product__desc">Sign in to manage inventory, sales, expenses, reports and your SellerHQ subscription, or create a new Basic account for free.</p>
            <div className="ons-product__foot">
              <div className="ons-row">
                <a className="ons-btn ons-btn--primary" href={`${APP_URL}/login`}>Sign in</a>
                <a className="ons-btn ons-btn--secondary" href={`${APP_URL}/register`}>Create account</a>
              </div>
              <Link className="ons-product__tagline" to="/products/sellerhq">About SellerHQ →</Link>
            </div>
          </article>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container">
          <div className="ons-support-notice"><p><strong>Why there is no ONSoftware-wide login:</strong> a company account layer would add complexity before multiple products need shared identity. Keeping account ownership inside the live product avoids a fake portal that simply redirects somewhere else.</p></div>
        </div>
      </section>
    </>
  )
}
