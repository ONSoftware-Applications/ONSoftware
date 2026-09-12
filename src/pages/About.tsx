import { Link } from 'react-router-dom'
import PageMeta, { pageTitle } from '../components/PageMeta'
import Cta from '../components/Cta'
import { BRAND_ASSETS, CONTACT_EMAILS, SITE_TAGLINE } from '../lib/site'

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
    title: 'Improve from real use',
    text: 'Product decisions should come from the work people actually do, where they lose time and which constraints appear as their operation grows.',
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
            <p className="ons-lead">ONSoftware builds software for the work people already have to do. The aim is to reduce fragmented administration around a real workflow and make the underlying information more useful.</p>
          </div>
          <img className="ons-about-logo" src={BRAND_ASSETS.logo} alt="ONSoftware — Tools. Automate. Succeed." />
        </div>
      </section>

      <section className="ons-section ons-section--soft">
        <div className="ons-container ons-showcase">
          <div className="ons-showcase__copy">
            <p className="ons-eyebrow">SellerHQ</p>
            <h2 className="ons-h2">Reselling businesses need an operational system behind the marketplaces.</h2>
          </div>
          <div className="ons-prose">
            <p>Marketplaces handle transactions, but sellers still need to organise stock, purchase costs, listing status, fees, shipping, expenses, receipts, profit, forecasting and tax records. SellerHQ brings that operational layer into one coherent product.</p>
            <p><Link to="/products/sellerhq">Explore SellerHQ</Link> to see how the workflow is structured.</p>
          </div>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container">
          <div className="ons-section-head ons-center">
            <p className="ons-eyebrow">How we work</p>
            <h2 className="ons-h2">Practical software starts with practical constraints.</h2>
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
          <Cta title="See SellerHQ in detail" text="SellerHQ is available now with a free Basic starting plan.">
            <Link className="ons-btn ons-btn--light ons-btn--lg" to="/products/sellerhq">Explore SellerHQ →</Link>
          </Cta>
        </div>
      </section>
    </>
  )
}
