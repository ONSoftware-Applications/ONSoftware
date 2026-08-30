import { Link } from 'react-router-dom'
import PageMeta, { pageTitle } from '../components/PageMeta'
import { APP_URL, CONTACT_EMAILS } from '../lib/site'

const HELP = [
  {
    title: 'Getting started',
    topics: ['Create an account', 'Set up the first business', 'Add or import stock', 'Understand product statuses'],
  },
  {
    title: 'Inventory & listings',
    topics: ['Product records', 'Photos and locations', 'Labels and QR codes', 'Marketplace listings and relisting'],
  },
  {
    title: 'Sales & expenses',
    topics: ['Record a sale', 'Bundle sales', 'Shipping status', 'Expenses and receipt records'],
  },
  {
    title: 'Reports, forecasts & tax',
    topics: ['Profit and marketplace reports', 'Forecasting', 'Cash-flow tools', 'UK tax estimates and limitations'],
  },
  {
    title: 'Account & billing',
    topics: ['Plans and limits', 'Upgrade or downgrade', 'Cancel a subscription', 'Export or delete account data'],
  },
  {
    title: 'Business features',
    topics: ['Team access', 'Audit log', 'Business branding', 'QR relay and Till Mode'],
  },
]

export default function Support() {
  return (
    <>
      <PageMeta
        title={pageTitle('Support')}
        description="ONSoftware and SellerHQ support: getting started, inventory, sales, reporting, billing, account and launch help."
      />

      <section className="ons-page-hero">
        <div className="ons-container">
          <p className="ons-eyebrow">Support</p>
          <h1 className="ons-h1">Get SellerHQ working, then get back to selling.</h1>
          <p className="ons-lead">This hub covers the support routes and the main areas of the product. For account-specific help, contact the product inbox from the email address linked to your SellerHQ account where possible.</p>
          <div className="ons-hero__cta">
            <a className="ons-btn ons-btn--primary" href={`mailto:${CONTACT_EMAILS.products}`}>Email SellerHQ support</a>
            <a className="ons-btn ons-btn--secondary" href={`${APP_URL}/login`}>Open SellerHQ</a>
          </div>
        </div>
      </section>

      <section className="ons-section ons-section--soft">
        <div className="ons-container">
          <div className="ons-section-head ons-center">
            <p className="ons-eyebrow">Help areas</p>
            <h2 className="ons-h2">Most support starts in one of these workflows.</h2>
          </div>
          <div className="ons-help-grid">
            {HELP.map((category) => (
              <article className="ons-card" key={category.title}>
                <h3 className="ons-h3">{category.title}</h3>
                <ul className="ons-mini-list">
                  {category.topics.map((topic) => <li key={topic}>{topic}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container ons-split-panel">
          <div>
            <p className="ons-eyebrow">Before emailing</p>
            <h2 className="ons-h2">A useful support message gets resolved faster.</h2>
          </div>
          <div>
            <ul className="ons-check-list">
              <li>Tell us which page or workflow you were using and what you expected to happen.</li>
              <li>Include the exact error message where there is one.</li>
              <li>State your device/browser if the problem looks device-specific.</li>
              <li>Attach a screenshot if it helps, but remove unrelated personal or customer data first.</li>
              <li>Never send your password or full payment-card details.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="ons-section ons-section--soft">
        <div className="ons-container ons-legal-card-grid">
          <Link className="ons-legal-card" to="/legal/subscriptions-refunds"><strong>Billing & cancellations</strong><span>Renewal, cancellation and refund policy.</span></Link>
          <Link className="ons-legal-card" to="/legal/tax-disclaimer"><strong>Tax-tool limitations</strong><span>What the estimates do and do not replace.</span></Link>
          <Link className="ons-legal-card" to="/security"><strong>Security</strong><span>Security approach and vulnerability reporting.</span></Link>
          <a className="ons-legal-card" href={`mailto:${CONTACT_EMAILS.feedback}`}><strong>Feedback</strong><span>Tell us what would improve the workflow.</span></a>
        </div>
      </section>
    </>
  )
}
