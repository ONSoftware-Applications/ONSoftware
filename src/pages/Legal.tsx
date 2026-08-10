import { Link, useParams } from 'react-router-dom'
import PageMeta, { pageTitle } from '../components/PageMeta'
import { LEGAL_PAGES, getLegalPage } from '../lib/legal'
import { CONTACT_EMAILS } from '../lib/site'

export default function Legal() {
  const { page } = useParams<{ page: string }>()

  if (!page) {
    return (
      <>
        <PageMeta
          title={pageTitle('Legal')}
          description="ONSoftware legal information — privacy policy, terms of use, cookie policy, acceptable use, refunds and accessibility."
        />
        <section className="ons-section">
          <div className="ons-container">
            <div className="ons-prose">
              <p className="ons-eyebrow">Legal</p>
              <h1>Legal information</h1>
              <p>
                ONSoftware’s company-wide policies. Individual applications may
                have additional product-specific terms where necessary.
              </p>
              <ul>
                {LEGAL_PAGES.map((item) => (
                  <li key={item.slug}>
                    <Link to={`/legal/${item.slug}`}>{item.title}</Link>
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: '28px' }}>
                Questions about any of these documents? Email{' '}
                <a href={`mailto:${CONTACT_EMAILS.general}`}>{CONTACT_EMAILS.general}</a>.
              </p>
            </div>
          </div>
        </section>
      </>
    )
  }

  const item = getLegalPage(page)

  if (!item) {
    return (
      <>
        <PageMeta
          title={pageTitle('Legal')}
          description="ONSoftware legal information."
        />
        <section className="ons-section">
          <div className="ons-container">
            <div className="ons-prose">
              <h1>Page not found</h1>
              <p>
                That legal page doesn’t exist.{' '}
                <Link to="/legal">Browse all legal documents</Link>.
              </p>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageMeta
        title={pageTitle(item.title)}
        description={item.intro}
      />
      <section className="ons-section">
        <div className="ons-container">
          <div className="ons-prose">
            <p className="ons-eyebrow">
              <Link to="/legal">Legal</Link> · {item.title}
            </p>
            <h1>{item.title}</h1>
            <p className="ons-prose__meta">Last updated: {item.updated}</p>
            <p>{item.intro}</p>

            {item.blocks.map((block) => (
              <div key={block.heading}>
                <h2>{block.heading}</h2>
                {block.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {block.list ? (
                  <ul>
                    {block.list.map((entry) => (
                      <li key={entry}>{entry}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
