import PageMeta, { pageTitle } from '../components/PageMeta'
import { CONTACT_EMAILS } from '../lib/site'

const ROUTES = [
  {
    name: 'General',
    email: CONTACT_EMAILS.general,
    text: 'General questions about ONSoftware, the website or where an enquiry should go.',
  },
  {
    name: 'Products & SellerHQ support',
    email: CONTACT_EMAILS.products,
    text: 'SellerHQ account, billing, product behaviour, launch support and other product-specific questions.',
  },
  {
    name: 'Feedback',
    email: CONTACT_EMAILS.feedback,
    text: 'Product feedback, workflow problems, accessibility feedback and suggestions based on real use.',
  },
  {
    name: 'Business',
    email: CONTACT_EMAILS.business,
    text: 'Commercial, partnership, supplier and other business-to-business enquiries.',
  },
  {
    name: 'Legal',
    email: CONTACT_EMAILS.legal,
    text: 'Privacy requests, legal notices, contractual questions and data-protection enquiries.',
  },
  {
    name: 'Administration',
    email: CONTACT_EMAILS.admin,
    text: 'Administrative and technical-security matters that do not belong in a customer product-support thread.',
  },
]

export default function Contact() {
  return (
    <>
      <PageMeta
        title={pageTitle('Contact')}
        description="Contact ONSoftware through the correct company, product, feedback, business, legal or administrative inbox."
      />

      <section className="ons-page-hero">
        <div className="ons-container">
          <p className="ons-eyebrow">Contact ONSoftware</p>
          <h1 className="ons-h1">Send the message to the people handling that part of the company.</h1>
          <p className="ons-lead">We use separate ONSoftware inboxes so product support, feedback, business and legal requests do not disappear into one general mailbox.</p>
        </div>
      </section>

      <section className="ons-section ons-section--soft">
        <div className="ons-container">
          <div className="ons-contact-grid">
            {ROUTES.map((route) => (
              <article className="ons-contact-card" key={route.name}>
                <p className="ons-eyebrow">{route.name}</p>
                <a className="ons-contact-card__email" href={`mailto:${route.email}`}>{route.email}</a>
                <p>{route.text}</p>
                <a className="ons-btn ons-btn--secondary ons-btn--sm" href={`mailto:${route.email}`}>Email {route.name}</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container ons-support-notice">
          <strong>For SellerHQ support:</strong>
          <p>Use <a href={`mailto:${CONTACT_EMAILS.products}`}>{CONTACT_EMAILS.products}</a> and send the message from the email address associated with the account where possible. Do not send passwords, full payment-card details or unnecessary sensitive information.</p>
        </div>
      </section>
    </>
  )
}
