import { Link } from 'react-router-dom'
import PageMeta, { pageTitle } from '../components/PageMeta'
import Cta from '../components/Cta'
import Faq from '../components/Faq'
import PricingTable from '../components/PricingTable'
import { APP_URL } from '../lib/site'

const BILLING_FAQS = [
  {
    question: 'How does billing work?',
    answer:
      'Paid plans are billed monthly or annually through Stripe. You can upgrade, downgrade or cancel anytime from the billing portal inside SellerHQ.',
  },
  {
    question: 'Is there an annual discount?',
    answer:
      'Yes — choosing annual billing saves you 5% compared to paying monthly.',
  },
  {
    question: 'Are all the listed features available today?',
    answer:
      'Yes. SellerHQ is feature-complete — every feature shown on a plan ships with that plan. There are no “coming soon” placeholders.',
  },
  {
    question: 'What happens if I cancel?',
    answer:
      'Your plan stays active until the end of the current billing period. After that you drop to the free Basic plan, and your data is always safe.',
  },
  {
    question: 'Do I need a card to start?',
    answer:
      'No. The Basic plan is free and needs no card. You only enter payment details when you choose to upgrade.',
  },
]

export default function Pricing() {
  return (
    <>
      <PageMeta
        title={pageTitle('SellerHQ pricing')}
        description="SellerHQ pricing — free Basic plan, plus Growing, Pro and Business plans for serious and multi-channel resellers."
      />

      <section className="ons-section">
        <div className="ons-container">
          <div className="ons-section-head ons-center">
            <p className="ons-eyebrow">SellerHQ · Pricing</p>
            <h1 className="ons-h1">Pricing that pays for itself</h1>
            <p className="ons-lead">
              From free to full business management — pick the plan that fits
              how you sell, and upgrade when you’re ready.
            </p>
          </div>

          <PricingTable />

          <div className="ons-center" style={{ marginTop: '28px' }}>
            <Link to="/products/sellerhq" className="ons-btn ons-btn--secondary">
              ← Back to SellerHQ
            </Link>
          </div>
        </div>
      </section>

      <section className="ons-section ons-section--soft">
        <div className="ons-container">
          <div className="ons-section-head ons-center">
            <p className="ons-eyebrow">Billing FAQs</p>
            <h2 className="ons-h2">Before you sign up</h2>
          </div>
          <Faq items={BILLING_FAQS} />
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container">
          <Cta
            title="Try SellerHQ free"
            text="No card needed. Start with up to 50 products and see what a proper reselling back office feels like."
          >
            <a className="ons-btn ons-btn--light ons-btn--lg" href={`${APP_URL}/register`}>
              Create your free account →
            </a>
          </Cta>
        </div>
      </section>
    </>
  )
}
