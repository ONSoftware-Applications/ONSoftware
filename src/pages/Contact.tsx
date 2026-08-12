import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import PageMeta, { pageTitle } from '../components/PageMeta'
import { CONTACT_EMAILS } from '../lib/site'

const ROUTES = [
  {
    label: 'General enquiries',
    title: 'General enquiries',
    text: 'Questions about ONSoftware, partnerships or anything else — start here.',
    email: CONTACT_EMAILS.general,
    cta: 'Email adminonsoftware@gmail.com',
  },
  {
    label: 'Product support',
    title: 'Product support',
    text: 'Need help using a product or hit a problem? Our support team will get back to you.',
    email: CONTACT_EMAILS.support,
    cta: 'Email adminonsoftware@gmail.com',
  },
  {
    label: 'Business enquiries',
    title: 'Business enquiries',
    text: 'Working together, reseller programmes or media — let’s talk.',
    email: CONTACT_EMAILS.business,
    cta: 'Email adminonsoftware@gmail.com',
  },
  {
    label: 'Feedback',
    title: 'Feedback',
    text: 'Tell us what works, what doesn’t and what you’d like to see next.',
    email: CONTACT_EMAILS.feedback,
    cta: 'Email adminonsoftware@gmail.com',
  },
]

export default function Contact() {
  return (
    <>
      <PageMeta
        title={pageTitle('Contact')}
        description="Contact ONSoftware — general enquiries, product support, business enquiries and feedback."
      />

      <section className="ons-section">
        <div className="ons-container">
          <div className="ons-section-head ons-center">
            <p className="ons-eyebrow">Contact</p>
            <h1 className="ons-h1">How can we help?</h1>
            <p className="ons-lead">
              Pick the route that fits, so your message reaches the right
              people without bouncing between inboxes.
            </p>
          </div>

          <div className="ons-contact-grid">
            {ROUTES.map((route) => (
              <div className="ons-contact-card" key={route.label}>
                <span className="ons-contact-card__label">{route.label}</span>
                <h3 className="ons-h3">{route.title}</h3>
                <p>{route.text}</p>
                <a className="ons-btn ons-btn--secondary" href={`mailto:${route.email}`}>
                  {route.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="ons-support-notice" style={{ marginTop: '28px' }}>
            <Icon name="info" size={20} />
            <p>
              <strong>Already using a product?</strong> For the fastest help,
              open the in-app support page, or see the{' '}
              <Link to="/support">help centre</Link> for guides and
              troubleshooting.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
