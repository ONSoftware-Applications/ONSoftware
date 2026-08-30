import { Link } from 'react-router-dom'
import PageMeta, { pageTitle } from '../components/PageMeta'
import Cta from '../components/Cta'
import ProductCard from '../components/ProductCard'
import { APP_URL, BRAND_ASSETS, SITE_DESCRIPTION, SITE_TAGLINE } from '../lib/site'
import { PRODUCTS, PRODUCT_ROADMAP } from '../lib/products'
import { UPDATES } from '../lib/updates'

const PRINCIPLES = [
  {
    title: 'Tools',
    text: 'Build focused software around a real job instead of burying the job inside a giant platform.',
  },
  {
    title: 'Automate',
    text: 'Reduce repetitive administration, duplicate records and calculations that should not need to be done by hand.',
  },
  {
    title: 'Succeed',
    text: 'Turn operational data into something useful: clearer decisions, cleaner records and more control over the business.',
  },
]

const SELLERHQ_PROOF = [
  ['£0', 'Basic plan'],
  ['50', 'products on Basic'],
  ['4', 'current plans'],
  ['UK', 'tax-focused tools'],
]

export default function Home() {
  const sellerHQ = PRODUCTS[0]

  return (
    <>
      <PageMeta title={pageTitle('')} description={SITE_DESCRIPTION} />

      <section className="ons-hero ons-launch-hero">
        <div className="ons-container ons-hero__inner ons-launch-hero__inner">
          <div>
            <p className="ons-eyebrow">ONSoftware · UK software studio</p>
            <h1 className="ons-hero__title ons-h1">
              Software that turns repetitive work into <span className="ons-gradient-text">something manageable.</span>
            </h1>
            <p className="ons-hero__lead">
              {SITE_TAGLINE} ONSoftware builds focused digital tools for independent businesses and people running real operational workflows. SellerHQ is our first product: a back office for resellers who have outgrown scattered spreadsheets, notes and marketplace dashboards.
            </p>
            <div className="ons-hero__cta">
              <Link className="ons-btn ons-btn--primary ons-btn--lg" to="/products/sellerhq">
                Explore SellerHQ
              </Link>
              <a className="ons-btn ons-btn--secondary ons-btn--lg" href={`${APP_URL}/register`}>
                Create a free account
              </a>
            </div>
            <div className="ons-hero__proof">
              <span><span className="ons-signal">SellerHQ available now</span></span>
              <span>No card needed for Basic</span>
              <span>Built in the UK</span>
            </div>
          </div>

          <div className="ons-brand-stage" aria-label="ONSoftware logo">
            <img src={BRAND_ASSETS.logo} alt="ONSoftware — Tools. Automate. Succeed." />
          </div>
        </div>
      </section>

      <section className="ons-section--tight">
        <div className="ons-container">
          <div className="ons-kicker-grid">
            {PRINCIPLES.map((item) => (
              <div className="ons-kicker" key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ons-section ons-section--soft">
        <div className="ons-container ons-showcase ons-launch-showcase">
          <div className="ons-product-brand-stage">
            <img src={BRAND_ASSETS.sellerHqLogo} alt="SellerHQ — Inventory. Organize. Grow." />
          </div>
          <div className="ons-showcase__copy">
            <p className="ons-eyebrow">Flagship product · SellerHQ</p>
            <h2 className="ons-h2">The business side of reselling, in one place.</h2>
            <p className="ons-lead">
              SellerHQ manages the records and workflows marketplaces leave to you: stock, listings, sales, shipping status, expenses, profit, reports, forecasts and UK tax estimates.
            </p>
            <ul className="ons-check-list">
              <li>Track products from purchase through listing, shipping, sale, refund and archive.</li>
              <li>See purchase cost, fees, revenue and profit without rebuilding the maths every time.</li>
              <li>Use QR codes, labels, mobile scanning and CSV import/export to reduce manual handling.</li>
              <li>Scale from a free Basic plan to deeper reporting, tax, team, audit and Till Mode features.</li>
            </ul>
            <div className="ons-hero__cta">
              <Link className="ons-btn ons-btn--primary" to="/products/sellerhq">See everything SellerHQ does</Link>
              <Link className="ons-btn ons-btn--secondary" to="/products/sellerhq/pricing">Compare plans</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container">
          <div className="ons-section-head ons-center">
            <p className="ons-eyebrow">Launch snapshot</p>
            <h2 className="ons-h2">Start small. Keep the same system as the business grows.</h2>
            <p className="ons-lead">
              The launch model is deliberately simple: the core product is usable for free, and paid plans add capacity and deeper operational tools rather than forcing every seller into the same tier.
            </p>
          </div>
          <div className="ons-stat-grid">
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
          <div className="ons-section-head">
            <p className="ons-eyebrow">Products</p>
            <h2 className="ons-h2">One real product is more useful than a page full of placeholders.</h2>
            <p className="ons-lead">
              SellerHQ is the current ONSoftware product. New products will be named publicly when they move into genuine development, not before.
            </p>
          </div>
          <div className="ons-products-grid ons-products-grid--single">
            <ProductCard product={sellerHQ} featured />
          </div>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container">
          <div className="ons-section-head ons-center">
            <p className="ons-eyebrow">Roadmap</p>
            <h2 className="ons-h2">Launch first. Learn from real use. Expand deliberately.</h2>
          </div>
          <div className="ons-roadmap">
            {PRODUCT_ROADMAP.map((item) => (
              <article className="ons-roadmap__item" key={item.phase}>
                <span className="ons-roadmap__phase">{item.phase}</span>
                <h3 className="ons-h3">{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ons-section ons-section--soft">
        <div className="ons-container">
          <div className="ons-section-head">
            <p className="ons-eyebrow">Updates</p>
            <h2 className="ons-h2">What changed recently</h2>
          </div>
          <div className="ons-update-grid">
            {UPDATES.slice(0, 2).map((update) => (
              <article className="ons-update-card" key={update.title}>
                <span>{update.date} · {update.product}</span>
                <h3>{update.title}</h3>
                <p>{update.summary}</p>
              </article>
            ))}
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
            <a className="ons-btn ons-btn--light ons-btn--lg" href={`${APP_URL}/register`}>Create a free SellerHQ account →</a>
            <Link className="ons-btn ons-btn--outline-light ons-btn--lg" to="/legal/sellerhq-terms">Read the service terms</Link>
          </Cta>
        </div>
      </section>
    </>
  )
}
