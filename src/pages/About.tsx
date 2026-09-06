import { Link } from 'react-router-dom'
import PageMeta, { pageTitle } from '../components/PageMeta'
import { BRAND_ASSETS, CONTACT_EMAILS } from '../lib/site'
import { UPDATES } from '../lib/updates'

const APPROACH = [
  ['Start with the job', 'We look for a workflow that is repetitive, fragmented or unnecessarily hard before deciding what software should exist.'],
  ['Keep the product focused', 'A useful tool does not need to become an all-purpose platform. Features should strengthen the main job, not dilute it.'],
  ['Make the system legible', 'Automation is valuable when users can still understand their records, export their data and see what the software is doing.'],
]

export default function About() {
  return (
    <>
      <PageMeta
        title={pageTitle('About')}
        description="ONSoftware is an independent UK software studio building focused operational tools, beginning with SellerHQ."
      />

      <section className="ons-page-hero ons-page-hero--dark">
        <div className="ons-container ons-about-intro">
          <div>
            <div className="ons-pill ons-pill--dark"><span /> About ONSoftware</div>
            <h1>A small software studio with a deliberately narrow brief.</h1>
            <p>Build tools that remove real operational friction. Make them clear enough to trust. Do not create complexity just to look like a bigger company.</p>
          </div>
          <div className="ons-about-intro__logo">
            <img src={BRAND_ASSETS.logo} alt="ONSoftware — Tools. Automate. Succeed." />
          </div>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container ons-two-col-story">
          <div className="ons-heading-block ons-heading-block--left">
            <div className="ons-pill"><span /> What we build</div>
            <h2>Software around the work people already have to do.</h2>
          </div>
          <div className="ons-prose ons-prose--large">
            <p>ONSoftware is not trying to create a giant suite of unrelated apps. The company exists to build focused products around workflows where information gets duplicated, calculations are repeated and the tools people start with eventually become the problem.</p>
            <p>SellerHQ is the first example: a back office for resellers who have outgrown scattered marketplace dashboards, spreadsheets and notes.</p>
            <Link className="ons-text-link" to="/products/sellerhq">Explore SellerHQ →</Link>
          </div>
        </div>
      </section>

      <section className="ons-section ons-section--paper">
        <div className="ons-container">
          <div className="ons-heading-block">
            <div className="ons-pill"><span /> Product principles</div>
            <h2>Three rules keep the company honest.</h2>
          </div>
          <div className="ons-principle-grid">
            {APPROACH.map(([title, text], index) => (
              <article className="ons-principle" key={title}>
                <span className="ons-principle__number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ons-section" id="updates">
        <div className="ons-container ons-updates-layout">
          <div className="ons-heading-block ons-heading-block--left">
            <div className="ons-pill"><span /> Product updates</div>
            <h2>What changed recently.</h2>
            <p>Updates live here rather than on a separate company-news page. If there is nothing meaningful to say, we do not manufacture an announcement.</p>
          </div>
          <div className="ons-update-list">
            {UPDATES.slice(0, 4).map((update) => (
              <article key={`${update.date}-${update.title}`}>
                <span>{update.date}</span>
                <div><strong>{update.title}</strong><p>{update.summary}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ons-section ons-section--paper">
        <div className="ons-container ons-contact-band">
          <div>
            <div className="ons-pill"><span /> Talk to us</div>
            <h2>Use the inbox that matches the reason.</h2>
            <p>That keeps product support separate from partnerships, legal requests and general company questions.</p>
          </div>
          <div className="ons-contact-links">
            <a href={`mailto:${CONTACT_EMAILS.business}`}><span>Business</span><strong>{CONTACT_EMAILS.business}</strong></a>
            <a href={`mailto:${CONTACT_EMAILS.feedback}`}><span>Product feedback</span><strong>{CONTACT_EMAILS.feedback}</strong></a>
            <a href={`mailto:${CONTACT_EMAILS.general}`}><span>General</span><strong>{CONTACT_EMAILS.general}</strong></a>
          </div>
        </div>
      </section>
    </>
  )
}
