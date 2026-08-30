import { Link, useParams } from 'react-router-dom'
import PageMeta, { pageTitle } from '../components/PageMeta'
import { LEGAL_PAGES, getLegalPage } from '../lib/legal'
import { CONTACT_EMAILS } from '../lib/site'

const LEGAL_ALIASES: Record<string, string> = {
  terms: 'website-terms',
  refunds: 'subscriptions-refunds',
}

export default function Legal() {
  const { page } = useParams<{ page: string }>()

  if (!page) {
    const company = LEGAL_PAGES.filter((item) => item.product === 'ONSoftware')
    const seller = LEGAL_PAGES.filter((item) => item.product === 'SellerHQ')

    return (
      <>
        <PageMeta
          title={pageTitle('Legal')}
          description="ONSoftware and SellerHQ legal documents: privacy, terms, subscriptions, refunds, tax disclaimers, cookies, acceptable use, security and accessibility."
        />

        <section className="ons-page-hero">
          <div className="ons-container">
            <p className="ons-eyebrow">Legal</p>
            <h1 className="ons-h1">The rules around the company and the product should be easy to find.</h1>
            <p className="ons-lead">Company-wide documents apply across ONSoftware. SellerHQ also has product-specific terms for accounts, subscriptions and business calculations.</p>
          </div>
        </section>

        <section className="ons-section ons-section--soft">
          <div className="ons-container">
            <div className="ons-section-head">
              <p className="ons-eyebrow">ONSoftware</p>
              <h2 className="ons-h2">Company-wide documents</h2>
            </div>
            <div className="ons-legal-card-grid">
              {company.map((item) => (
                <Link className="ons-legal-card" key={item.slug} to={`/legal/${item.slug}`}>
                  <strong>{item.title}</strong>
                  <span>{item.intro}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="ons-section">
          <div className="ons-container">
            <div className="ons-section-head">
              <p className="ons-eyebrow">SellerHQ</p>
              <h2 className="ons-h2">Product-specific documents</h2>
            </div>
            <div className="ons-legal-card-grid">
              {seller.map((item) => (
                <Link className="ons-legal-card" key={item.slug} to={`/legal/${item.slug}`}>
                  <strong>{item.title}</strong>
                  <span>{item.intro}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="ons-section ons-section--soft">
          <div className="ons-container ons-support-notice">
            <strong>Legal contact</strong>
            <p>Questions, privacy requests or formal notices can be sent to <a href={`mailto:${CONTACT_EMAILS.legal}`}>{CONTACT_EMAILS.legal}</a>.</p>
          </div>
        </section>
      </>
    )
  }

  const canonicalSlug = LEGAL_ALIASES[page] ?? page
  const item = getLegalPage(canonicalSlug)

  if (!item) {
    return (
      <>
        <PageMeta title={pageTitle('Legal')} description="ONSoftware legal information." />
        <section className="ons-section">
          <div className="ons-container ons-prose">
            <h1>Legal document not found</h1>
            <p><Link to="/legal">Browse all legal documents</Link>.</p>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageMeta title={pageTitle(item.title)} description={item.intro} />
      <section className="ons-section">
        <div className="ons-container ons-legal-layout">
          <aside className="ons-legal-sidebar">
            <Link to="/legal">← All legal documents</Link>
            <span>{item.product}</span>
            <span>Updated {item.updated}</span>
          </aside>
          <article className="ons-prose ons-legal-document">
            <p className="ons-eyebrow">{item.product} · Legal</p>
            <h1>{item.title}</h1>
            <p className="ons-lead">{item.intro}</p>
            {item.blocks.map((block) => (
              <section key={block.heading}>
                <h2>{block.heading}</h2>
                {block.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {block.list ? <ul>{block.list.map((entry) => <li key={entry}>{entry}</li>)}</ul> : null}
              </section>
            ))}
          </article>
        </div>
      </section>
    </>
  )
}
