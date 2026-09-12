import { Link } from 'react-router-dom'
import PageMeta, { pageTitle } from '../components/PageMeta'
import Cta from '../components/Cta'
import { APP_URL, BRAND_ASSETS, SITE_DESCRIPTION, SITE_TAGLINE } from '../lib/site'
import { PLANS, formatGbp } from '../lib/plans'
import { UPDATES } from '../lib/updates'

const BUSINESS_PROOF = [
  {
    title: 'One product record',
    text: 'Keep purchase cost, listing status, sale value, fees, shipping and the final outcome connected instead of rebuilding the story later.',
  },
  {
    title: 'Numbers from normal work',
    text: 'Use the records you already create to understand profit, stock health, expenses, forecasts and tax estimates without maintaining parallel spreadsheets.',
  },
  {
    title: 'Room to grow',
    text: 'Start on Basic for free, then upgrade inside SellerHQ only when more capacity or deeper operational tools become useful.',
  },
]

const SELLERHQ_PROOF = [
  ['£0', 'Basic plan'],
  ['50', 'products on Basic'],
  ['4', 'plans as you grow'],
  ['UK', 'tax-focused tools'],
]

export default function Home() {
  const latestUpdate = UPDATES[0]

  return (
    <>
      <PageMeta title={pageTitle('')} description={SITE_DESCRIPTION} />

      <section className="ons-hero ons-launch-hero">
        <div className="ons-container ons-hero__inner ons-launch-hero__inner">
          <div>
            <p className="ons-eyebrow">ONSoftware · UK software studio</p>
            <h1 className="ons-hero__title ons-h1">
              Focused software for the operational work that <span className="ons-gradient-text">eats your time.</span>
            </h1>
            <p className="ons-hero__lead">
              {SITE_TAGLINE} ONSoftware builds practical digital tools around real business workflows. SellerHQ is our first product: a back office for resellers who need their stock, sales, expenses and reporting in one system.
            </p>
            <div className="ons-hero__cta">
              <Link className="ons-btn ons-btn--primary ons-btn--lg" to="/products/sellerhq">
                Explore SellerHQ
              </Link>
              <a className="ons-btn ons-btn--secondary ons-btn--lg" href={`${APP_URL}/register`}>
                Start free on Basic
              </a>
            </div>
            <div className="ons-hero__proof">
              <span><span className="ons-signal">SellerHQ available now</span></span>
              <span>No card required</span>
              <span>Built in the UK</span>
            </div>
          </div>

          <div className="ons-brand-stage" aria-label="ONSoftware logo">
            <img src={BRAND_ASSETS.logo} alt="ONSoftware — Tools. Automate. Succeed." />
          </div>
        </div>
      </section>

      <section className="ons-section ons-section--soft">
        <div className="ons-container ons-showcase ons-launch-showcase">
          <div className="ons-product-brand-stage">
            <img src={BRAND_ASSETS.sellerHqLogo} alt="SellerHQ — Inventory. Organize. Grow." />
          </div>
          <div className="ons-showcase__copy">
            <p className="ons-eyebrow">SellerHQ</p>
            <h2 className="ons-h2">The business side of reselling, in one place.</h2>
            <p className="ons-lead">
              Marketplaces help you sell. SellerHQ handles the operational record around the sale: inventory, listings, shipping, expenses, profit, reporting, forecasts and UK tax estimates.
            </p>
            <ul className="ons-check-list">
              <li>Track products from purchase through listing, shipping, sale, refund and archive.</li>
              <li>See purchase cost, fees, revenue and profit without rebuilding the maths every time.</li>
              <li>Use labels, QR codes, mobile workflows and CSV import/export to reduce manual handling.</li>
            </ul>
            <div className="ons-hero__cta">
              <Link className="ons-btn ons-btn--primary" to="/products/sellerhq">See how SellerHQ works</Link>
              <Link className="ons-btn ons-btn--secondary" to="/products/sellerhq/pricing">Compare plans</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container">
          <div className="ons-section-head ons-center">
            <p className="ons-eyebrow">Why it helps</p>
            <h2 className="ons-h2">Keep the operational record together while the business gets busier.</h2>
          </div>
          <div className="ons-feature-grid">
            {BUSINESS_PROOF.map((item) => (
              <article className="ons-card" key={item.title}>
                <h3 className="ons-card__title ons-h3">{item.title}</h3>
                <p className="ons-card__text">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="ons-stat-grid" style={{ marginTop: 24 }}>
            {SELLERHQ_PROOF.map(([value, label]) => (
              <div className="ons-stat" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ons-section ons-section--soft">
        <div className="ons-container">
          <div className="ons-section-head ons-center">
            <p className="ons-eyebrow">Pricing</p>
            <h2 className="ons-h2">Every account starts on Basic.</h2>
            <p className="ons-lead">
              Create SellerHQ for free, put real stock into the system, then upgrade from inside SellerHQ if a higher plan solves a real constraint.
            </p>
          </div>
          <div className="ons-stat-grid">
            {PLANS.map((plan) => (
              <div className="ons-stat" key={plan.id}>
                <strong>{plan.monthlyPrice === 0 ? 'Free' : formatGbp(plan.monthlyPrice)}</strong>
                <span>{plan.name}{plan.monthlyPrice === 0 ? '' : ' / month'}</span>
              </div>
            ))}
          </div>
          <div className="ons-center" style={{ marginTop: 28 }}>
            <Link className="ons-btn ons-btn--secondary" to="/products/sellerhq/pricing">Compare plan limits and features →</Link>
          </div>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container">
          <div className="ons-section-head">
            <p className="ons-eyebrow">Latest update</p>
            <h2 className="ons-h2">What changed recently</h2>
          </div>
          <div className="ons-update-grid">
            <article className="ons-update-card">
              <span>{latestUpdate.date} · {latestUpdate.product}</span>
              <h3>{latestUpdate.title}</h3>
              <p>{latestUpdate.summary}</p>
            </article>
          </div>
          <div className="ons-row" style={{ marginTop: 24 }}>
            <Link className="ons-btn ons-btn--secondary" to="/updates">View release updates →</Link>
          </div>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container">
          <Cta
            title="Ready to organise the business behind the listings?"
            text="SellerHQ Basic is free, supports up to 50 products and does not require a payment card to start."
          >
            <a className="ons-btn ons-btn--light ons-btn--lg" href={`${APP_URL}/register`}>Start free on Basic →</a>
            <Link className="ons-btn ons-btn--outline-light ons-btn--lg" to="/products/sellerhq">Explore SellerHQ</Link>
          </Cta>
        </div>
      </section>
    </>
  )
}
