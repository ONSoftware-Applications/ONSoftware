import { Link } from 'react-router-dom'
import PageMeta, { pageTitle } from '../components/PageMeta'
import ProductCard from '../components/ProductCard'
import Cta from '../components/Cta'
import { PRODUCTS, PRODUCT_ROADMAP } from '../lib/products'
import { CONTACT_EMAILS } from '../lib/site'

export default function Products() {
  return (
    <>
      <PageMeta
        title={pageTitle('Products')}
        description="Explore ONSoftware products. SellerHQ is available now; future products are announced only when they enter genuine development."
      />

      <section className="ons-page-hero">
        <div className="ons-container">
          <p className="ons-eyebrow">ONSoftware products</p>
          <h1 className="ons-h1">Focused products, not a catalogue of promises.</h1>
          <p className="ons-lead">
            ONSoftware exists to build practical software around specific operational problems. SellerHQ is the first product. The roadmap below explains where the company is going without inventing public product names before the work is real.
          </p>
        </div>
      </section>

      <section className="ons-section ons-section--soft">
        <div className="ons-container">
          <div className="ons-section-head">
            <p className="ons-eyebrow">Available now</p>
            <h2 className="ons-h2">SellerHQ</h2>
          </div>
          <div className="ons-products-grid ons-products-grid--single">
            {PRODUCTS.map((product) => <ProductCard key={product.slug} product={product} featured />)}
          </div>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container">
          <div className="ons-section-head ons-center">
            <p className="ons-eyebrow">Company roadmap</p>
            <h2 className="ons-h2">The next priority is making the first product excellent.</h2>
            <p className="ons-lead">Product names will be published when they have a real scope, build and reason to exist.</p>
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
        <div className="ons-container ons-split-panel">
          <div>
            <p className="ons-eyebrow">Have a product problem worth solving?</p>
            <h2 className="ons-h2">We want problems, not feature wish-lists.</h2>
          </div>
          <div>
            <p className="ons-lead">If a repetitive business workflow is expensive, confusing or still held together with spreadsheets, tell us what actually happens today.</p>
            <a className="ons-btn ons-btn--secondary" href={`mailto:${CONTACT_EMAILS.feedback}`}>Send product feedback</a>
          </div>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container">
          <Cta title="Start with SellerHQ" text="The first ONSoftware product is available now with a free Basic plan.">
            <Link className="ons-btn ons-btn--light ons-btn--lg" to="/products/sellerhq">Explore SellerHQ →</Link>
          </Cta>
        </div>
      </section>
    </>
  )
}
