import { Link } from 'react-router-dom'
import PageMeta, { pageTitle } from '../components/PageMeta'
import Cta from '../components/Cta'
import Faq from '../components/Faq'
import PricingTable from '../components/PricingTable'
import { APP_URL, BRAND_ASSETS } from '../lib/site'

const BILLING_FAQS = [
  {
    question: 'Can I use SellerHQ without paying?',
    answer: 'Yes. Every new SellerHQ account starts on Basic, which is free for up to 50 products and one business. No payment card is needed to create the account.',
  },
  {
    question: 'How do I move to a paid plan?',
    answer: 'Create your SellerHQ account on Basic first. If you later need a higher plan, upgrade from the Billing area inside SellerHQ. Paid plans are not selected during registration.',
  },
  {
    question: 'How are paid plans billed?',
    answer: 'Growing, Pro and Business can be billed monthly or annually through Stripe. The in-app upgrade flow and Stripe checkout show the amount and renewal cycle before you commit.',
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
        description="SellerHQ pricing: every account starts on free Basic, with Growing, Pro and Business upgrades available from inside SellerHQ."
        image={BRAND_ASSETS.sellerHqOg}
      />

      <section className="ons-page-hero">
        <div className="ons-container">
          <p className="ons-eyebrow">SellerHQ · Pricing</p>
          <h1 className="ons-h1">Start on Basic. Upgrade inside SellerHQ when you need more.</h1>
          <p className="ons-lead">Basic covers the core inventory and business-record workflow. Growing, Pro and Business increase capacity and add deeper listings, reporting, forecasting, tax, team and in-person selling tools.</p>
          <div className="ons-hero__cta">
            <a className="ons-btn ons-btn--primary ons-btn--lg" href={`${APP_URL}/register`}>Start free on Basic</a>
            <Link className="ons-btn ons-btn--secondary ons-btn--lg" to="/products/sellerhq">Back to SellerHQ</Link>
          </div>
        </div>
      </section>

      <section className="ons-section ons-section--soft">
        <div className="ons-container">
          <div className="ons-support-notice" style={{ marginBottom: 34 }}>
            <strong>All new accounts begin on Basic.</strong>
            <p>Paid plans are upgrades from the Billing area inside SellerHQ. Registration never places you directly onto Growing, Pro or Business.</p>
          </div>
          <div className="ons-section-head ons-center">
            <p className="ons-eyebrow">Plans</p>
            <h2 className="ons-h2">Four levels, one underlying workflow.</h2>
            <p className="ons-lead">Use Basic first. The higher plans show what becomes available if your stock volume, reporting needs or team grows.</p>
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
            text="Create SellerHQ on Basic, put real stock into the system and upgrade from inside the app only when a higher plan solves a problem you actually have."
          >
            <a className="ons-btn ons-btn--light ons-btn--lg" href={`${APP_URL}/register`}>Start free on Basic →</a>
            <Link className="ons-btn ons-btn--outline-light ons-btn--lg" to="/support">Ask a product question</Link>
          </Cta>
        </div>
      </section>
    </>
  )
}
