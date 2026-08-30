import PageMeta, { pageTitle } from '../components/PageMeta'
import { CONTACT_EMAILS } from '../lib/site'

const CONTACT_ROUTES = [
  { label: 'General', email: CONTACT_EMAILS.general, title: 'General enquiries', text: 'Questions about ONSoftware, the company, products or anything that does not fit a more specific route.' },
  { label: 'Support', email: CONTACT_EMAILS.support, title: 'Product support', text: 'SellerHQ account, billing, workflow or technical issues. Include the product and enough detail to reproduce the problem.' },
  { label: 'Business', email: CONTACT_EMAILS.business, title: 'Business enquiries', text: 'Partnerships, commercial conversations and enquiries involving ONSoftware as a company.' },
  { label: 'Feedback', email: CONTACT_EMAILS.feedback, title: 'Product feedback', text: 'Ideas, friction points and workflow feedback from people using or evaluating an ONSoftware product.' },
]

export default function Contact() {
  return (
    <>
      <PageMeta title={pageTitle('Contact')} description="Contact ONSoftware for product support, business enquiries, product feedback and general questions." />

      <section className="ons-hero">
        <div className="ons-container" style={{ maxWidth: '900px' }}>
          <p className="ons-eyebrow">Contact</p>
          <h1 className="ons-h1">Talk to the right part of ONSoftware.</h1>
          <p className="ons-hero__lead">The current contact routes use one managed inbox, but labelling the purpose of the message helps it get handled in the right context.</p>
        </div>
      </section>

      <section className="ons-section ons-section--soft">
        <div className="ons-container">
          <div className="ons-contact-grid">
            {CONTACT_ROUTES.map((route) => (
              <article className="ons-contact-card" key={route.label}>
                <p className="ons-eyebrow">{route.label}</p>
                <h2 className="ons-h3">{route.title}</h2>
                <p>{route.text}</p>
                <p className="ons-contact-card__meta">Current inbox: {route.email}</p>
                <a className="ons-btn ons-btn--secondary" href={`mailto:${route.email}?subject=${encodeURIComponent(`ONSoftware ${route.label} enquiry`)}`}>Email ONSoftware</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container">
          <div className="ons-support-notice">
            <p><strong>For technical support:</strong> include the affected product, browser/device, the page or workflow involved, the expected result and the actual result. That information is usually more useful than a long description without reproduction steps.</p>
          </div>
        </div>
      </section>
    </>
  )
}
