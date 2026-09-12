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
        description="Explore ONSoftware products. SellerHQ is available now, with future tools added as ONSoftware expands into new operational workflows."
      />

      <section className="ons-page-hero">
        <div className="ons-container">
          <p className="ons-eyebrow">ONSoftware products</p>
          <h1 className="ons-h1">Software built around specific operational jobs.</h1>
          <p className="ons-lead">
            ONSoftware builds focused tools for repetitive, fragmented work. SellerHQ is available now for resellers, and this page will grow as new products move from development into real use.
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
            <p className="ons-eyebrow">Current roadmap</p>
            <h2 className="ons-h2">Make the live product better, then expand the product family.</h2>
            <p className="ons-lead">Current work is centred on SellerHQ reliability, workflow depth and learning from real use before ONSoftware broadens into additional operational tools.</p>
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
            <p className="ons-eyebrow">Product feedback</p>
            <h2 className="ons-h2">Tell us where the workflow breaks down.</h2>
          </div>
          <div>
            <p className="ons-lead">If repetitive business work is expensive, confusing or still held together with spreadsheets, tell us what happens today and where the friction is.</p>
            <a className="ons-btn ons-btn--secondary" href={`mailto:${CONTACT_EMAILS.feedback}`}>Send product feedback</a>
          </div>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container">
          <Cta title="Start with SellerHQ" text="SellerHQ is available now, and every new account begins on the free Basic plan.">
            <Link className="ons-btn ons-btn--light ons-btn--lg" to="/products/sellerhq">Explore SellerHQ →</Link>
          </Cta>
        </div>
      </section>
    </>
  )
}
