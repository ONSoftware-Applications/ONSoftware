import Icon from '../components/Icon'
import PageMeta, { pageTitle } from '../components/PageMeta'
import { SELLERHQ_CATEGORIES, SUPPORT_LINKS } from '../lib/support'
import { CONTACT_EMAILS } from '../lib/site'

export default function Support() {
  return (
    <>
      <PageMeta title={pageTitle('Support')} description="ONSoftware support: help with SellerHQ, accounts, billing, product workflows and technical issues." />

      <section className="ons-hero">
        <div className="ons-container" style={{ maxWidth: '930px' }}>
          <p className="ons-eyebrow">Support</p>
          <h1 className="ons-h1">Get to the right help without hunting for it.</h1>
          <p className="ons-hero__lead">ONSoftware support is organised by product. SellerHQ users can open the in-app support area or use the topic directory below; company and general enquiries can go straight to email.</p>
          <div className="ons-hero__cta">
            <a className="ons-btn ons-btn--primary ons-btn--lg" href={SUPPORT_LINKS.inAppSupport}>Open SellerHQ support</a>
            <a className="ons-btn ons-btn--secondary ons-btn--lg" href={`mailto:${CONTACT_EMAILS.support}`}>Email support</a>
          </div>
        </div>
      </section>

      <section className="ons-section ons-section--soft">
        <div className="ons-container">
          <div className="ons-section-head"><p className="ons-eyebrow">SellerHQ help topics</p><h2 className="ons-h2">Find the part of the workflow you are working on.</h2><p className="ons-lead">These categories mirror the main areas of SellerHQ so support information stays connected to the way the product is actually used.</p></div>
          <div className="ons-support-grid">
            {SELLERHQ_CATEGORIES.map((category) => (
              <article className="ons-support-card" key={category.id}>
                <h3 className="ons-support-card__title ons-h3"><Icon name={category.icon} size={20} />{category.label}</h3>
                <ul>{category.topics.slice(0, 5).map((topic) => <li key={topic}>{topic}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container ons-contact-grid">
          <article className="ons-contact-card">
            <p className="ons-eyebrow">Product problem</p>
            <h2 className="ons-h3">Something in SellerHQ is not working</h2>
            <p>Use the SellerHQ support area when possible so you are already in the context of the product. For account-access problems, email support directly.</p>
            <div className="ons-row"><a className="ons-btn ons-btn--primary" href={SUPPORT_LINKS.inAppSupport}>Open product support</a></div>
          </article>
          <article className="ons-contact-card">
            <p className="ons-eyebrow">Direct contact</p>
            <h2 className="ons-h3">Need a person instead</h2>
            <p>Send the issue, the product you are using, what you expected to happen and what happened instead. Include screenshots where they help explain the problem.</p>
            <div className="ons-row"><a className="ons-btn ons-btn--secondary" href={`mailto:${SUPPORT_LINKS.email}`}>{SUPPORT_LINKS.email}</a></div>
          </article>
        </div>
      </section>
    </>
  )
}
