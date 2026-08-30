import { Link } from 'react-router-dom'
import PageMeta, { pageTitle } from '../components/PageMeta'
import { CONTACT_EMAILS } from '../lib/site'

const CONTROLS = [
  {
    title: 'Managed infrastructure',
    text: 'SellerHQ uses managed application infrastructure rather than storing payment-card details or business data in an ad-hoc local server environment.',
  },
  {
    title: 'Access controls',
    text: 'Application access is designed around authenticated accounts and scoped access to the data associated with the relevant user or business.',
  },
  {
    title: 'Encrypted transport',
    text: 'Public ONSoftware services are intended to use HTTPS so credentials and application traffic are encrypted in transit.',
  },
  {
    title: 'Payment separation',
    text: 'Stripe handles payment-card processing. ONSoftware does not need to store users’ full card numbers in SellerHQ.',
  },
  {
    title: 'Export and recovery',
    text: 'SellerHQ includes export capabilities so important business records are not intended to exist only inside the application.',
  },
  {
    title: 'Responsible disclosure',
    text: 'We provide a private route for vulnerability reports and ask researchers to avoid accessing unrelated user data or disrupting the service.',
  },
]

export default function Security() {
  return (
    <>
      <PageMeta
        title={pageTitle('Security')}
        description="ONSoftware security approach and responsible vulnerability disclosure information for SellerHQ and onsoftware.uk."
      />

      <section className="ons-page-hero">
        <div className="ons-container">
          <p className="ons-eyebrow">Security</p>
          <h1 className="ons-h1">Business software should make its security responsibilities visible.</h1>
          <p className="ons-lead">This page explains the practical security approach used around ONSoftware services and gives researchers a private route to report suspected vulnerabilities.</p>
        </div>
      </section>

      <section className="ons-section ons-section--soft">
        <div className="ons-container">
          <div className="ons-feature-grid">
            {CONTROLS.map((item) => (
              <article className="ons-card" key={item.title}>
                <h2 className="ons-h3">{item.title}</h2>
                <p className="ons-card__text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container ons-split-panel">
          <div>
            <p className="ons-eyebrow">Report a vulnerability</p>
            <h2 className="ons-h2">Tell us privately first.</h2>
          </div>
          <div className="ons-prose">
            <p>Email <a href={`mailto:${CONTACT_EMAILS.admin}`}>{CONTACT_EMAILS.admin}</a> with a clear description, affected URL or feature, steps to reproduce and evidence that can be shared safely.</p>
            <p>Please avoid denial-of-service activity, social engineering, destructive testing or accessing more data than is necessary to demonstrate the problem.</p>
            <Link className="ons-btn ons-btn--secondary" to="/legal/security">Read the responsible disclosure statement</Link>
          </div>
        </div>
      </section>
    </>
  )
}
