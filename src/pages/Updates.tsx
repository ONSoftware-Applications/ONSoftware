import PageMeta, { pageTitle } from '../components/PageMeta'
import { UPDATES } from '../lib/updates'

export default function Updates() {
  return (
    <>
      <PageMeta
        title={pageTitle('Updates')}
        description="ONSoftware and SellerHQ release updates, launch notes and product changes."
      />

      <section className="ons-page-hero">
        <div className="ons-container">
          <p className="ons-eyebrow">Updates</p>
          <h1 className="ons-h1">What changed, without making you hunt for it.</h1>
          <p className="ons-lead">This page records meaningful company and product changes. It is intentionally short at launch and will grow as SellerHQ receives post-launch updates.</p>
        </div>
      </section>

      <section className="ons-section ons-section--soft">
        <div className="ons-container ons-update-list">
          {UPDATES.map((update) => (
            <article className="ons-update-entry" key={`${update.date}-${update.title}`}>
              <div className="ons-update-entry__meta">
                <span>{update.date}</span>
                <span>{update.product}</span>
              </div>
              <div>
                <h2 className="ons-h2">{update.title}</h2>
                <p className="ons-lead">{update.summary}</p>
                <ul className="ons-check-list">
                  {update.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
