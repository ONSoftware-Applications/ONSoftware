import { Link } from 'react-router-dom'
import PageMeta, { pageTitle } from '../components/PageMeta'
import Cta from '../components/Cta'
import ProductCard from '../components/ProductCard'
import { APP_URL, SITE_DESCRIPTION, SITE_TAGLINE } from '../lib/site'
import { PRODUCTS } from '../lib/products'

const APPROACH = [
  {
    icon: '🔧',
    title: 'Practical first',
    text: 'We build tools for real workflows — the kind of software you open every day because it actually saves you time.',
  },
  {
    icon: '🎯',
    title: 'Focused scope',
    text: 'Each application does one job properly instead of trying to be everything. Simple to learn, simple to use.',
  },
  {
    icon: '🔒',
    title: 'Honest by design',
    text: 'Clear pricing, no dark patterns, and data that belongs to you. We earn trust by being straightforward.',
  },
]

export default function Home() {
  const featured = PRODUCTS[0]
  const future = PRODUCTS.filter((product) => product.status !== 'live')

  return (
    <>
      <PageMeta title={pageTitle('')} description={SITE_DESCRIPTION} />

      {/* Hero */}
      <section className="ons-hero ons-hero--home">
        <div className="ons-container ons-hero__inner">
          <div>
            <p className="ons-eyebrow">ONSoftware</p>
            <h1 className="ons-hero__title ons-h1">{SITE_TAGLINE}</h1>
            <p className="ons-hero__lead">
              ONSoftware creates practical software designed to help
              independent businesses and individuals manage, organise and
              grow. {featured.name} is our first application — more are on the
              way.
            </p>
            <div className="ons-hero__cta">
              <Link className="ons-btn ons-btn--primary ons-btn--lg" to="/products">
                Explore our products
              </Link>
              <a className="ons-btn ons-btn--secondary ons-btn--lg" href={`${APP_URL}/register`}>
                Get started
              </a>
            </div>
            <div className="ons-hero__proof">
              <span>
                <strong>1</strong> live product
              </span>
              <span>
                <strong>{future.length}</strong> in development
              </span>
              <span>
                <strong>UK</strong> based
              </span>
            </div>
          </div>

          <div className="ons-hero__visual">
            <div className="ons-panel">
              <div className="ons-panel__bar">
                <span className="ons-panel__dot" />
                <span className="ons-panel__dot" />
                <span className="ons-panel__dot" />
              </div>
              <div className="ons-panel__body">
                <p className="ons-panel__title">This month</p>
                <div className="ons-metric-grid">
                  <div className="ons-metric">
                    <p className="ons-metric__label">Revenue</p>
                    <p className="ons-metric__value">£1,284.50</p>
                  </div>
                  <div className="ons-metric">
                    <p className="ons-metric__label">Net profit</p>
                    <p className="ons-metric__value ons-metric__value--good">£386.20</p>
                  </div>
                  <div className="ons-metric">
                    <p className="ons-metric__label">Fees</p>
                    <p className="ons-metric__value">£102.40</p>
                  </div>
                  <div className="ons-metric">
                    <p className="ons-metric__label">Margin</p>
                    <p className="ons-metric__value">43%</p>
                  </div>
                </div>
                <div className="ons-list-row">
                  <span className="ons-list-row__name">Vintage Levi’s Jacket</span>
                  <span className="ons-list-row__status ons-list-row__status--sold">Sold +£32</span>
                </div>
                <div className="ons-list-row">
                  <span className="ons-list-row__name">Nike Air Max 90</span>
                  <span className="ons-list-row__status ons-list-row__status--sold">Sold +£48.50</span>
                </div>
                <div className="ons-list-row">
                  <span className="ons-list-row__name">Pokémon TCG Bundle</span>
                  <span className="ons-list-row__status ons-list-row__status--listed">Listed £21</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="ons-section ons-section--soft">
        <div className="ons-container">
          <div className="ons-section-head ons-center">
            <p className="ons-eyebrow">Our software</p>
            <h2 className="ons-h2">Practical applications designed to solve real problems</h2>
          </div>

          <div className="ons-products-grid">
            <ProductCard product={featured} featured />
            {future.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="ons-section">
        <div className="ons-container">
          <div className="ons-section-head ons-center">
            <p className="ons-eyebrow">How we build</p>
            <h2 className="ons-h2">Software that respects your time</h2>
            <p className="ons-lead">
              We’re a small software company with a simple idea: useful tools,
              done well.
            </p>
          </div>

          <div className="ons-feature-grid">
            {APPROACH.map((item) => (
              <div className="ons-card" key={item.title}>
                <div className="ons-card__icon" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="ons-card__title ons-h3">{item.title}</h3>
                <p className="ons-card__text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ons-section">
        <div className="ons-container">
          <Cta
            title="Ready to make business simpler?"
            text="SellerHQ is live today. Create your account for free and see what practical software feels like."
          >
            <a className="ons-btn ons-btn--light ons-btn--lg" href={`${APP_URL}/register`}>
              Start using SellerHQ →
            </a>
            <Link className="ons-btn ons-btn--outline-light ons-btn--lg" to="/products/sellerhq">
              Learn more about SellerHQ
            </Link>
          </Cta>
        </div>
      </section>
    </>
  )
}
