import { Link } from 'react-router-dom'
import PageMeta, { pageTitle } from '../components/PageMeta'
import { APP_URL, BRAND_ASSETS } from '../lib/site'

export default function Account() {
  return (
    <>
      <PageMeta
        title={pageTitle('Product accounts')}
        description="Access ONSoftware product accounts. SellerHQ currently owns its own sign-in, registration and billing flows."
      />

      <section className="ons-page-hero">
        <div className="ons-container">
          <p className="ons-eyebrow">Product accounts</p>
          <h1 className="ons-h1">Your account belongs to the product you actually use.</h1>
          <p className="ons-lead">ONSoftware is the company and product hub, not a pretend universal login. SellerHQ currently owns the live account, subscription and billing experience.</p>
        </div>
      </section>

      <section className="ons-section ons-section--soft">
        <div className="ons-container">
          <article className="ons-product ons-product--featured" style={{ maxWidth: 780, marginInline: 'auto' }}>
            <div className="ons-product__top">
              <span className="ons-product__logo" aria-hidden="true"><img src={BRAND_ASSETS.sellerHqMark} alt="" /></span>
              <span className="ons-badge ons-badge--live"><span className="ons-badge__dot" />Available now</span>
            </div>
            <h2 className="ons-product__title ons-h2">SellerHQ</h2>
            <p className="ons-product__tagline">Inventory. Organize. Grow.</p>
            <p className="ons-product__desc">Sign in to manage your businesses, stock, sales, reports and subscription, or create a new Basic account without a payment card.</p>
            <div className="ons-product__foot">
              <div className="ons-row">
                <a className="ons-btn ons-btn--primary" href={`${APP_URL}/login`}>Sign in to SellerHQ</a>
                <a className="ons-btn ons-btn--secondary" href={`${APP_URL}/register`}>Create free account</a>
              </div>
              <Link className="ons-product__tagline" to="/products/sellerhq">About SellerHQ →</Link>
            </div>
          </article>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container ons-support-notice">
          <strong>Why there is no ONSoftware-wide account yet</strong>
          <p>A shared identity layer becomes useful when multiple products genuinely need it. Creating one before then would add login, billing and recovery complexity without giving SellerHQ users anything useful in return.</p>
        </div>
      </section>
    </>
  )
}
