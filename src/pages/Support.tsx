import { Link } from 'react-router-dom'
import PageMeta, { pageTitle } from '../components/PageMeta'
import { APP_URL, CONTACT_EMAILS } from '../lib/site'

const HELP = [
  ['Account & setup', 'Account access, business setup, first stock, imports and getting started.'],
  ['Inventory & listings', 'Product records, photos, locations, labels, QR codes and marketplace listing workflows.'],
  ['Sales & expenses', 'Sales, bundles, shipping progress, fees, expenses and receipt records.'],
  ['Reports & tax tools', 'Profit views, forecasts, cash flow, UK tax estimates and data exports.'],
]

export default function Support() {
  return (
    <>
      <PageMeta
        title={pageTitle('Support')}
        description="SellerHQ support, ONSoftware contact routes and security reporting in one place."
      />

      <section className="ons-page-hero ons-page-hero--dark">
        <div className="ons-container ons-support-hero">
          <div>
            <div className="ons-pill ons-pill--dark"><span /> Support</div>
            <h1>Get the problem to the right place quickly.</h1>
            <p>Product help, company contact and security reporting are all handled here rather than split across separate pages.</p>
            <div className="ons-actions">
              <a className="ons-btn ons-btn--light ons-btn--lg" href={`mailto:${CONTACT_EMAILS.products}`}>Email SellerHQ support</a>
              <a className="ons-btn ons-btn--glass ons-btn--lg" href={`${APP_URL}/login`}>Open SellerHQ ↗</a>
            </div>
          </div>
          <div className="ons-support-hero__card">
            <span>Best first message</span>
            <strong>Tell us what you were doing, what you expected and what happened instead.</strong>
            <p>Include the exact error and a screenshot when useful. Never send your password or full payment-card details.</p>
          </div>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container">
          <div className="ons-heading-block">
            <div className="ons-pill"><span /> SellerHQ help</div>
            <h2>Most questions fit into four areas.</h2>
          </div>
          <div className="ons-help-grid">
            {HELP.map(([title, text], index) => (
              <article className="ons-help-card" key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ons-section ons-section--paper" id="contact">
        <div className="ons-container ons-contact-band">
          <div>
            <div className="ons-pill"><span /> Contact</div>
            <h2>Choose the inbox by purpose.</h2>
            <p>Using the right address avoids support messages disappearing into a general mailbox.</p>
          </div>
          <div className="ons-contact-links">
            <a href={`mailto:${CONTACT_EMAILS.products}`}><span>SellerHQ support</span><strong>{CONTACT_EMAILS.products}</strong></a>
            <a href={`mailto:${CONTACT_EMAILS.general}`}><span>General</span><strong>{CONTACT_EMAILS.general}</strong></a>
            <a href={`mailto:${CONTACT_EMAILS.business}`}><span>Business & partnerships</span><strong>{CONTACT_EMAILS.business}</strong></a>
            <a href={`mailto:${CONTACT_EMAILS.feedback}`}><span>Product feedback</span><strong>{CONTACT_EMAILS.feedback}</strong></a>
            <a href={`mailto:${CONTACT_EMAILS.legal}`}><span>Legal & privacy</span><strong>{CONTACT_EMAILS.legal}</strong></a>
          </div>
        </div>
      </section>

      <section className="ons-section" id="security">
        <div className="ons-container ons-security-panel">
          <div>
            <div className="ons-pill"><span /> Security</div>
            <h2>Found a security issue?</h2>
            <p>Send a clear reproduction to the product/support address. Do not access, alter or retain data that is not yours, and do not use a vulnerability to disrupt the service.</p>
          </div>
          <div className="ons-security-panel__actions">
            <a className="ons-btn ons-btn--primary" href={`mailto:${CONTACT_EMAILS.products}?subject=Security%20report`}>Report a security issue</a>
            <Link className="ons-text-link" to="/legal/security">Read security information →</Link>
          </div>
        </div>
      </section>

      <section className="ons-section ons-section--paper">
        <div className="ons-container ons-support-links">
          <Link to="/legal/subscriptions-refunds"><span>Billing</span><strong>Subscriptions, cancellations & refunds →</strong></Link>
          <Link to="/legal/tax-disclaimer"><span>Tax tools</span><strong>What SellerHQ estimates do and do not replace →</strong></Link>
          <Link to="/legal/privacy"><span>Privacy</span><strong>How ONSoftware handles personal data →</strong></Link>
        </div>
      </section>
    </>
  )
}
