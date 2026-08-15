import Icon from '../components/Icon'
import PageMeta, { pageTitle } from '../components/PageMeta'
import Cta from '../components/Cta'
import ProductCard from '../components/ProductCard'
import { APP_URL } from '../lib/site'
import { PRODUCTS } from '../lib/products'

export default function Products() {
  const live = PRODUCTS.filter((product) => product.status === 'live')
  const future = PRODUCTS.filter((product) => product.status !== 'live')

  return (
    <>
      <PageMeta
        title={pageTitle('Products')}
        description="Browse ONSoftware applications. SellerHQ is live today, with more practical tools in development."
      />

      <section className="ons-section">
        <div className="ons-container">
          <div className="ons-section-head ons-center">
            <p className="ons-eyebrow">Our products</p>
            <h1 className="ons-h1">Software for real problems</h1>
            <p className="ons-lead">
              Every ONSoftware application is built to help you manage, organise
              and grow. Start with what’s live today — and keep an eye on what’s
              coming.
            </p>
          </div>

          <div className="ons-products-grid">
            {live.map((product) => (
              <ProductCard key={product.slug} product={product} featured />
            ))}
            {future.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="ons-section--tight ons-section--soft">
        <div className="ons-container">
          <div className="ons-support-notice">
            <Icon name="lightbulb" size={20} />
            <p>
              <strong>We show you everything we’re working on.</strong>{' '}
              Unreleased products appear here so you can see where ONSoftware
              is heading — and so nothing gets lost while it’s being built.
            </p>
          </div>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container">
          <Cta
            title="SellerHQ is finished and live"
            text="The first ONSoftware application is feature-complete. Manage inventory, sales, expenses and taxes in one place — free to start."
          >
            <a className="ons-btn ons-btn--light ons-btn--lg" href={`${APP_URL}/register`}>
              Get started free →
            </a>
          </Cta>
        </div>
      </section>
    </>
  )
}
