import { Link } from 'react-router-dom'
import PageMeta, { pageTitle } from '../components/PageMeta'
import Cta from '../components/Cta'
import { BRAND_ASSETS, CONTACT_EMAILS, SITE_TAGLINE } from '../lib/site'
import { PRODUCT_ROADMAP } from '../lib/products'

const VALUES = [
  {
    title: 'Solve the operational problem first',
    text: 'A product starts with a workflow that is repetitive, fragmented or unnecessarily difficult. Features come after the problem is understood.',
  },
  {
    title: 'Keep ownership clear',
    text: 'ONSoftware is the company hub; products such as SellerHQ own their application accounts, product terms and operational experience.',
  },
  {
    title: 'Make data useful and portable',
    text: 'Business records should help the user make decisions and should not be deliberately trapped inside a product.',
  },
  {
    title: 'Say what exists',
    text: 'We would rather show one real product than invent a portfolio of names for software that has not entered genuine development.',
  },
]

export default function About() {
  return (
    <>
      <PageMeta
        title={pageTitle('About')}
        description="About ONSoftware — a UK software studio building focused digital tools around real operational problems."
      />

      <section className="ons-page-hero">
        <div className="ons-container ons-about-hero">
          <div>
            <p className="ons-eyebrow">About ONSoftware</p>
            <h1 className="ons-h1">{SITE_TAGLINE}</h1>
            <p className="ons-lead">ONSoftware builds software for the work people already have to do. The aim is not to add another dashboard; it is to reduce the fragmented admin around a real workflow and make the underlying information more useful.</p>
          </div>
          <img className="ons-about-logo" src={BRAND_ASSETS.logo} alt="ONSoftware — Tools. Automate. Succeed." />
        </div>
      </section>

      <section className="ons-section ons-section--soft">
        <div className="ons-container ons-showcase">
          <div className="ons-showcase__copy">
            <p className="ons-eyebrow">The first product</p>
            <h2 className="ons-h2">SellerHQ started with a familiar problem: reselling businesses outgrow the tools they began with.</h2>
          </div>
          <div className="ons-prose">
            <p>Marketplaces handle transactions, but sellers still need to organise stock, purchase costs, listing status, fees, shipping, expenses, receipts, profit, forecasting and tax records. SellerHQ is ONSoftware’s first attempt to solve that operational layer as one coherent product.</p>
            <p><Link to="/products/sellerhq">Explore SellerHQ</Link> to see how that product is structured.</p>
          </div>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container">
          <div className="ons-section-head ons-center">
            <p className="ons-eyebrow">How we work</p>
            <h2 className="ons-h2">A product company should be clear about what is real.</h2>
          </div>
          <div className="ons-feature-grid">
            {VALUES.map((value) => (
              <article className="ons-card" key={value.title}>
                <h3 className="ons-card__title ons-h3">{value.title}</h3>
                <p className="ons-card__text">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ons-section ons-section--soft">
        <div className="ons-container">
          <div className="ons-section-head ons-center">
            <p className="ons-eyebrow">Roadmap</p>
            <h2 className="ons-h2">The company grows after the product earns it.</h2>
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

      <section className="ons-section">
        <div className="ons-container ons-split-panel">
          <div>
            <p className="ons-eyebrow">Talk to ONSoftware</p>
            <h2 className="ons-h2">Different enquiries should reach the right inbox.</h2>
          </div>
          <div className="ons-prose">
            <p>Business and partnership enquiries can go to <a href={`mailto:${CONTACT_EMAILS.business}`}>{CONTACT_EMAILS.business}</a>. Product ideas and experience feedback can go to <a href={`mailto:${CONTACT_EMAILS.feedback}`}>{CONTACT_EMAILS.feedback}</a>.</p>
            <Link className="ons-btn ons-btn--secondary" to="/contact">See all contact routes</Link>
          </div>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container">
          <Cta title="See the product that is live now" text="SellerHQ is the first ONSoftware application and is available with a free Basic plan.">
            <Link className="ons-btn ons-btn--light ons-btn--lg" to="/products/sellerhq">Explore SellerHQ →</Link>
          </Cta>
        </div>
      </section>
    </>
  )
}
