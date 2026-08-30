import { Link } from 'react-router-dom'
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
        description="Explore the ONSoftware product suite: SellerHQ is live now, with focused business and admin tools on the roadmap."
      />

      <section className="ons-hero">
        <div className="ons-container" style={{ maxWidth: '930px' }}>
          <p className="ons-eyebrow">Products</p>
          <h1 className="ons-h1">A product family built around specific jobs.</h1>
          <p className="ons-hero__lead">ONSoftware is not one giant platform. Each application gets a clear purpose, its own workflows and room to grow—while still belonging to one consistent ecosystem.</p>
          <div className="ons-hero__cta">
            <Link className="ons-btn ons-btn--primary ons-btn--lg" to="/products/sellerhq">Explore SellerHQ</Link>
            <a className="ons-btn ons-btn--secondary ons-btn--lg" href={`${APP_URL}/login`}>Open live app</a>
          </div>
        </div>
      </section>

      <section className="ons-section ons-section--soft">
        <div className="ons-container">
          <div className="ons-section-head">
            <p className="ons-eyebrow">Available now</p>
            <h2 className="ons-h2">Software you can use today.</h2>
          </div>
          <div className="ons-products-grid">
            {live.map((product) => <ProductCard key={product.slug} product={product} featured />)}
          </div>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container">
          <div className="ons-section-head">
            <p className="ons-eyebrow">Roadmap</p>
            <h2 className="ons-h2">The ecosystem after SellerHQ.</h2>
            <p className="ons-lead">These products are planned directions, not promises of release dates. They show the kinds of focused workflows ONSoftware is designed to support next.</p>
          </div>

          <div className="ons-roadmap">
            {future.map((product, index) => (
              <div className="ons-roadmap__item" key={product.slug}>
                <span className="ons-roadmap__phase">Roadmap {index + 1}</span>
                <div>
                  <p className="ons-roadmap__name">{product.name}</p>
                  <p className="ons-roadmap__text">{product.description}</p>
                </div>
                <span className="ons-badge ons-badge--soon">Planned</span>
              </div>
            ))}
          </div>

          <div className="ons-support-notice" style={{ marginTop: '22px' }}>
            <p><strong>Roadmap status is intentionally explicit.</strong> ONSoftware will not present unreleased tools as though they are available. Live products are labelled live; future ideas stay labelled planned until they ship.</p>
          </div>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container">
          <Cta title="Use the product that is live now" text="SellerHQ is ONSoftware’s current flagship: a purpose-built back office for resellers, with a free Basic plan.">
            <a className="ons-btn ons-btn--light ons-btn--lg" href={`${APP_URL}/register`}>Create a SellerHQ account →</a>
            <Link className="ons-btn ons-btn--outline-light ons-btn--lg" to="/products/sellerhq">See product details</Link>
          </Cta>
        </div>
      </section>
    </>
  )
}
