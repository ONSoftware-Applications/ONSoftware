import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import PageMeta, { pageTitle } from '../components/PageMeta'
import Cta from '../components/Cta'
import ProductCard from '../components/ProductCard'
import { APP_URL, SITE_DESCRIPTION } from '../lib/site'
import { PRODUCTS } from '../lib/products'

const PRINCIPLES = [
  {
    icon: 'target' as const,
    title: 'Focused by default',
    text: 'Each ONSoftware product starts with a specific workflow and earns every feature it adds. Less clutter means less time learning the tool.',
  },
  {
    icon: 'wrench' as const,
    title: 'Built around the work',
    text: 'The product should fit the job, not force the job to fit the product. We build around real tasks, edge cases and repeatable routines.',
  },
  {
    icon: 'lock' as const,
    title: 'Clear and accountable',
    text: 'Straightforward pricing, exportable data and no dark patterns. You should know what the software does and what you are paying for.',
  },
]

function SellerPreview() {
  return (
    <div className="ons-app-shell" aria-label="SellerHQ product preview">
      <div className="ons-app-shell__bar">
        <span className="ons-app-shell__dot" />
        <span className="ons-app-shell__dot" />
        <span className="ons-app-shell__dot" />
      </div>
      <div className="ons-app-shell__body">
        <aside className="ons-app-shell__side">
          <div className="ons-app-shell__brand"><span className="ons-app-shell__mini-logo">SH</span>SellerHQ</div>
          <div className="ons-app-shell__nav">
            <span>Dashboard</span><span>Inventory</span><span>Sales</span><span>Expenses</span><span>Reports</span>
          </div>
        </aside>
        <div className="ons-app-shell__main">
          <p className="ons-app-shell__heading">Business overview</p>
          <div className="ons-metric-grid">
            <div className="ons-metric"><p className="ons-metric__label">Revenue</p><p className="ons-metric__value">£1,284.50</p></div>
            <div className="ons-metric"><p className="ons-metric__label">Net profit</p><p className="ons-metric__value ons-metric__value--good">£386.20</p></div>
            <div className="ons-metric"><p className="ons-metric__label">Active stock</p><p className="ons-metric__value">126</p></div>
            <div className="ons-metric"><p className="ons-metric__label">Margin</p><p className="ons-metric__value">43%</p></div>
          </div>
          <div className="ons-list-row"><span className="ons-list-row__name">Vintage Levi’s Jacket</span><span className="ons-list-row__status ons-list-row__status--sold">Sold +£32</span></div>
          <div className="ons-list-row"><span className="ons-list-row__name">Nike Air Max 90</span><span className="ons-list-row__status ons-list-row__status--sold">Sold +£48.50</span></div>
          <div className="ons-list-row"><span className="ons-list-row__name">Pokémon TCG Bundle</span><span className="ons-list-row__status ons-list-row__status--listed">Listed £21</span></div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const live = PRODUCTS.find((product) => product.status === 'live')!
  const future = PRODUCTS.filter((product) => product.status !== 'live')

  return (
    <>
      <PageMeta title={pageTitle('')} description={SITE_DESCRIPTION} />

      <section className="ons-hero">
        <div className="ons-container ons-hero__inner">
          <div>
            <p className="ons-eyebrow">ONSoftware · Product company</p>
            <h1 className="ons-hero__title ons-h1">Practical software for <span className="ons-gradient-text">work that needs doing.</span></h1>
            <p className="ons-hero__lead">ONSoftware is the home of focused digital tools for independent businesses and everyday operators. We build software to remove admin, surface the numbers that matter and keep real workflows moving.</p>
            <div className="ons-hero__cta">
              <Link className="ons-btn ons-btn--primary ons-btn--lg" to="/products">Explore the product suite</Link>
              <Link className="ons-btn ons-btn--secondary ons-btn--lg" to="/products/sellerhq">Meet SellerHQ</Link>
            </div>
            <div className="ons-hero__proof">
              <span><span className="ons-signal">1 product live</span></span>
              <span>Free entry plan</span>
              <span>Built in the UK</span>
            </div>
          </div>

          <div className="ons-hero__visual ons-orbit" aria-hidden="true">
            <div className="ons-orbit__core"><img src="/logo.svg" alt="" /></div>
            <div className="ons-orbit__label ons-orbit__label--one"><strong>SellerHQ</strong><span>Live · Reselling operations</span></div>
            <div className="ons-orbit__label ons-orbit__label--two"><strong>ONSoftware Ledger</strong><span>Roadmap · Finance</span></div>
            <div className="ons-orbit__label ons-orbit__label--three"><strong>More tools</strong><span>One growing ecosystem</span></div>
          </div>
        </div>
      </section>

      <section className="ons-section--tight">
        <div className="ons-container">
          <div className="ons-kicker-grid">
            <div className="ons-kicker"><strong>One hub</strong><span>A clear home for every ONSoftware product.</span></div>
            <div className="ons-kicker"><strong>One philosophy</strong><span>Focused tools before bloated platforms.</span></div>
            <div className="ons-kicker"><strong>Built to grow</strong><span>New products can join without changing the company around them.</span></div>
          </div>
        </div>
      </section>

      <section className="ons-section ons-section--soft">
        <div className="ons-container">
          <div className="ons-section-head">
            <p className="ons-eyebrow">The product suite</p>
            <h2 className="ons-h2">One live product. A wider system taking shape.</h2>
            <p className="ons-lead">ONSoftware is designed as a product family. SellerHQ is live today; future tools will sit alongside it without being hidden inside one oversized application.</p>
          </div>
          <div className="ons-products-grid">
            <ProductCard product={live} featured />
            {future.slice(0, 2).map((product) => <ProductCard key={product.slug} product={product} />)}
          </div>
          <div className="ons-row" style={{ marginTop: '22px' }}><Link className="ons-btn ons-btn--secondary" to="/products">View the full roadmap →</Link></div>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container ons-showcase">
          <div className="ons-showcase__copy">
            <p className="ons-eyebrow">Flagship product</p>
            <h2 className="ons-h2">SellerHQ runs the business side of reselling.</h2>
            <p className="ons-lead">Inventory, listings, sales, expenses, profit, reporting and UK tax estimates in one purpose-built back office for sellers.</p>
            <ul className="ons-check-list">
              <li>Track stock from purchase through listing, shipping and sale.</li>
              <li>See real profit after purchase costs, expenses and marketplace fees.</li>
              <li>Use the same system on desktop or mobile, including QR workflows.</li>
              <li>Start on the free Basic plan and scale when the business needs it.</li>
            </ul>
            <div className="ons-hero__cta">
              <Link className="ons-btn ons-btn--primary" to="/products/sellerhq">Explore SellerHQ</Link>
              <a className="ons-btn ons-btn--secondary" href={`${APP_URL}/register`}>Create free account</a>
            </div>
          </div>
          <SellerPreview />
        </div>
      </section>

      <section className="ons-section ons-section--soft">
        <div className="ons-container">
          <div className="ons-section-head ons-center">
            <p className="ons-eyebrow">How we build</p>
            <h2 className="ons-h2">Software should reduce the work around the work.</h2>
          </div>
          <div className="ons-feature-grid">
            {PRINCIPLES.map((item) => (
              <article className="ons-card" key={item.title}>
                <div className="ons-card__icon" aria-hidden="true"><Icon name={item.icon} size={22} /></div>
                <h3 className="ons-card__title ons-h3">{item.title}</h3>
                <p className="ons-card__text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container">
          <Cta title="Start with the software that is live now" text="SellerHQ is available today with a free Basic plan. ONSoftware will grow around it product by product.">
            <a className="ons-btn ons-btn--light ons-btn--lg" href={`${APP_URL}/register`}>Start with SellerHQ →</a>
            <Link className="ons-btn ons-btn--outline-light ons-btn--lg" to="/about">How ONSoftware works</Link>
          </Cta>
        </div>
      </section>
    </>
  )
}
