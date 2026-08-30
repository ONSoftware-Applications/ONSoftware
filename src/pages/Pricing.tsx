import { Link } from 'react-router-dom'
import PageMeta, { pageTitle } from '../components/PageMeta'
import Cta from '../components/Cta'
import Faq from '../components/Faq'
import PricingTable from '../components/PricingTable'
import { APP_URL } from '../lib/site'

const BILLING_FAQS = [
  { question: 'Can I use SellerHQ without paying?', answer: 'Yes. Basic is a permanent free plan for up to 50 products and 1 business. No payment card is needed to create the account.' },
  { question: 'How are paid plans billed?', answer: 'Paid plans can be billed monthly or annually through Stripe. Plan changes and cancellation are handled through the SellerHQ billing flow.' },
  { question: 'Is there an annual discount?', answer: 'Yes. Annual billing applies a 5% discount compared with paying the same plan month by month.' },
  { question: 'What happens if I downgrade?', answer: 'Your subscription remains active for the relevant billing period. When the lower plan takes effect, plan limits and features apply to the account while your underlying business records remain yours.' },
  { question: 'Are the plan features shown here live?', answer: 'The pricing data on this site is intended to mirror SellerHQ’s current plan model. Where a feature depends on a particular plan, the plan list identifies that access level.' },
]

export default function Pricing() {
  return (
    <>
      <PageMeta title={pageTitle('SellerHQ pricing')} description="SellerHQ plans from free Basic through Growing, Pro and Business, with pricing and feature comparisons." />

      <section className="ons-hero">
        <div className="ons-container" style={{ maxWidth: '950px' }}>
          <p className="ons-eyebrow">SellerHQ · Pricing</p>
          <h1 className="ons-h1">Start with the system for free. Pay when the business needs more.</h1>
          <p className="ons-hero__lead">Every plan builds on the same SellerHQ workflow. Higher tiers increase capacity and add deeper reporting, tax, team and in-person selling tools.</p>
          <div className="ons-hero__cta">
            <a className="ons-btn ons-btn--primary ons-btn--lg" href={`${APP_URL}/register`}>Create free account</a>
            <Link className="ons-btn ons-btn--secondary ons-btn--lg" to="/products/sellerhq">Back to SellerHQ</Link>
          </div>
        </div>
      </section>

      <section className="ons-section ons-section--soft">
        <div className="ons-container">
          <div className="ons-section-head ons-center"><p className="ons-eyebrow">Plans</p><h2 className="ons-h2">Choose by workflow and scale, not by guesswork.</h2></div>
          <PricingTable />
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container">
          <div className="ons-section-head ons-center"><p className="ons-eyebrow">Billing</p><h2 className="ons-h2">Questions before you upgrade.</h2></div>
          <Faq items={BILLING_FAQS} />
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container">
          <Cta title="You do not need to choose a paid plan first" text="Create SellerHQ on Basic, put real stock into the system and upgrade only when a higher plan solves a problem you actually have.">
            <a className="ons-btn ons-btn--light ons-btn--lg" href={`${APP_URL}/register`}>Start on Basic →</a>
            <Link className="ons-btn ons-btn--outline-light ons-btn--lg" to="/support">Ask a question</Link>
          </Cta>
        </div>
      </section>
    </>
  )
}
