import { Link, useParams } from 'react-router-dom'
import PageMeta, { pageTitle } from '../components/PageMeta'
import { LEGAL_PAGES, getLegalPage } from '../lib/legal'
import { CONTACT_EMAILS } from '../lib/site'

export default function Legal() {
  const { page } = useParams<{ page: string }>()

  if (!page) {
    return (
      <>
        <PageMeta title={pageTitle('Legal')} description="ONSoftware legal documents, including privacy, terms, cookies and company policies." />
        <section className="ons-hero">
          <div className="ons-container" style={{ maxWidth: '900px' }}>
            <p className="ons-eyebrow">Legal</p>
            <h1 className="ons-h1">Company policies in one place.</h1>
            <p className="ons-hero__lead">These documents apply across ONSoftware where relevant. Individual products may also present product-specific terms or notices inside the application.</p>
          </div>
        </section>
        <section className="ons-section ons-section--soft">
          <div className="ons-container">
            <div className="ons-legal-index">
              {LEGAL_PAGES.map((item) => <Link key={item.slug} to={`/legal/${item.slug}`}>{item.title} →</Link>)}
            </div>
            <div className="ons-support-notice" style={{ marginTop: '24px' }}><p>Questions about a policy can be sent to <a href={`mailto:${CONTACT_EMAILS.general}`}>{CONTACT_EMAILS.general}</a>.</p></div>
          </div>
        </section>
      </>
    )
  }

  const item = getLegalPage(page)

  if (!item) {
    return (
      <>
        <PageMeta title={pageTitle('Legal')} description="ONSoftware legal information." />
        <section className="ons-section">
          <div className="ons-container ons-prose">
            <p className="ons-eyebrow">Legal</p>
            <h1>Document not found</h1>
            <p>That legal document does not exist. <Link to="/legal">Return to the legal index</Link>.</p>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageMeta title={pageTitle(item.title)} description={item.intro} />
      <section className="ons-section">
        <div className="ons-container">
          <article className="ons-prose">
            <p className="ons-eyebrow"><Link to="/legal">Legal</Link> · {item.title}</p>
            <h1>{item.title}</h1>
            <p className="ons-prose__meta">Last updated: {item.updated}</p>
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
