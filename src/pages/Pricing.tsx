import { Link } from 'react-router-dom'
import PageMeta, { pageTitle } from '../components/PageMeta'
import Cta from '../components/Cta'
import Faq from '../components/Faq'
import PricingTable from '../components/PricingTable'
import { APP_URL } from '../lib/site'

const BILLING_FAQS = [
  {
    question: 'Can I use SellerHQ without paying?',
    answer: 'Yes. Basic is a free plan for up to 50 products and one business. No payment card is needed to create the account.',
  },
  {
    question: 'How are paid plans billed?',
    answer: 'Growing, Pro and Business can be billed monthly or annually through Stripe. The checkout and billing portal show the amount and renewal cycle before you commit.',
  },
  {
    question: 'Is there an annual discount?',
    answer: 'Yes. Annual billing currently applies a 5% saving compared with paying the same plan month by month. The table shows both the annual total and its monthly equivalent.',
  },
  {
    question: 'Can I cancel?',
    answer: 'Yes. You can cancel through SellerHQ billing controls. Unless the cancellation flow says otherwise, paid access continues to the end of the current billing period and then stops renewing.',
  },
  {
    question: 'What happens to my data if I downgrade?',
    answer: 'Your underlying business records remain associated with your account, while the lower plan’s capacity and feature access apply once the downgrade takes effect. Export important records before making a major plan change if you want an independent copy.',
  },
  {
    question: 'Are refunds automatic if I cancel part-way through a month or year?',
    answer: 'No automatic pro-rata refund is promised merely because you cancel during a paid period. Billing errors, duplicate charges, statutory rights and other refund requests are handled under the Subscription, Cancellation & Refund Policy.',
  },
]

export default function Pricing() {
  return (
    <>
      <PageMeta
        title={pageTitle('SellerHQ pricing')}
        description="SellerHQ launch pricing: Basic free, Growing £5.99/month, Pro £10.99/month and Business £15.99/month, with 5% annual savings."
      />

      <section className="ons-page-hero">
        <div className="ons-container">
          <p className="ons-eyebrow">SellerHQ · Pricing</p>
          <h1 className="ons-h1">Start free. Pay when a higher plan solves a real constraint.</h1>
          <p className="ons-lead">Basic covers the core inventory and business-record workflow. Growing, Pro and Business increase capacity and add deeper listings, reporting, forecasting, tax, team and in-person selling tools.</p>
          <div className="ons-hero__cta">
            <a className="ons-btn ons-btn--primary ons-btn--lg" href={`${APP_URL}/register`}>Create free account</a>
            <Link className="ons-btn ons-btn--secondary ons-btn--lg" to="/products/sellerhq">Back to SellerHQ</Link>
          </div>
        </div>
      </section>

      <section className="ons-section ons-section--soft">
        <div className="ons-container">
          <div className="ons-section-head ons-center">
            <p className="ons-eyebrow">Launch plans</p>
            <h2 className="ons-h2">Four plans, one underlying workflow.</h2>
            <p className="ons-lead">Prices below are the current launch prices mirrored from SellerHQ. The amount shown by Stripe at checkout is the final price for the purchase you make.</p>
          </div>
          <PricingTable />
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container">
          <div className="ons-section-head ons-center">
            <p className="ons-eyebrow">Billing</p>
            <h2 className="ons-h2">Questions before you upgrade.</h2>
          </div>
          <Faq items={BILLING_FAQS} />
          <div className="ons-center" style={{ marginTop: 26 }}>
            <Link className="ons-btn ons-btn--secondary" to="/legal/subscriptions-refunds">Read subscription, cancellation & refund policy →</Link>
          </div>
        </div>
      </section>

      <section className="ons-section ons-section--soft">
        <div className="ons-container ons-support-notice">
          <strong>Tax and financial features are administrative tools.</strong>
          <p>They do not replace HMRC guidance, an accountant or personalised professional advice. <Link to="/legal/tax-disclaimer">Read the Tax & Financial Tools Disclaimer.</Link></p>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container">
          <Cta
            title="You do not need to choose a paid plan first"
            text="Create SellerHQ on Basic, put real stock into the system and upgrade only when a higher plan solves a problem you actually have."
          >
            <a className="ons-btn ons-btn--light ons-btn--lg" href={`${APP_URL}/register`}>Start on Basic →</a>
            <Link className="ons-btn ons-btn--outline-light ons-btn--lg" to="/support">Ask a product question</Link>
          </Cta>
        </div>
      </section>
    </>
  )
}
