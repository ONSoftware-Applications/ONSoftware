import { useMemo, useState } from 'react'
import PageMeta, { pageTitle } from '../components/PageMeta'
import { APP_URL, SUPPORT_URL } from '../lib/site'
import { SELLERHQ_CATEGORIES } from '../lib/support'

export default function Support() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase()
    if (!term) return SELLERHQ_CATEGORIES
    return SELLERHQ_CATEGORIES.map((category) => ({
      ...category,
      topics: category.topics.filter((topic) => topic.toLowerCase().includes(term)),
    })).filter((category) => category.topics.length > 0)
  }, [query])

  const totalTopics = SELLERHQ_CATEGORIES.reduce((sum, category) => sum + category.topics.length, 0)

  return (
    <>
      <PageMeta
        title={pageTitle('Support')}
        description="ONSoftware help centre — guides and support for SellerHQ and future ONSoftware products."
      />

      <section className="ons-section ons-section--soft">
        <div className="ons-container">
          <div className="ons-section-head ons-center">
            <p className="ons-eyebrow">Help centre</p>
            <h1 className="ons-h1">What can we help you with?</h1>
            <p className="ons-lead">
              Guides and support for every ONSoftware product, in one place.
            </p>
          </div>

          <div className="ons-search">
            <span className="ons-search__icon" aria-hidden="true">
              🔍
            </span>
            <input
              type="search"
              className="ons-search__input"
              placeholder="Search ONSoftware help..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-label="Search ONSoftware help"
            />
          </div>

          <p
            className="ons-center"
            style={{ color: 'var(--ons-ink-faint)', marginTop: '12px', fontSize: '0.85rem' }}
          >
            {query.trim() && filtered.length === 0
              ? `No results for "${query}". Try another search, or email support.`
              : `${totalTopics} guides across ${SELLERHQ_CATEGORIES.length} categories`}
          </p>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container">
          <div className="ons-section-head">
            <p className="ons-eyebrow">SellerHQ</p>
            <h2 className="ons-h2">Popular topics</h2>
          </div>

          {filtered.length > 0 ? (
            <div className="ons-category-grid">
              {filtered.map((category) => (
                <div className="ons-category" key={category.id}>
                  <h3 className="ons-category__title">
                    <span className="ons-category__icon" aria-hidden="true">
                      {category.icon}
                    </span>
                    {category.label}
                  </h3>
                  <ul className="ons-category__links">
                    {category.topics.map((topic) => (
                      <li key={topic}>{topic}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className="ons-support-notice" style={{ marginTop: '20px' }}>
              <span aria-hidden="true">🔎</span>
              <p>
                <strong>Nothing matched.</strong> Email{' '}
                <a href="mailto:support@onsoftware.uk">support@onsoftware.uk</a>{' '}
                and we’ll point you in the right direction.
              </p>
            </div>
          )}

          <div className="ons-support-notice" style={{ marginTop: '32px' }}>
            <span aria-hidden="true">🚧</span>
            <p>
              <strong>The full knowledge base is coming.</strong> This help
              centre will move to{' '}
              <a href={SUPPORT_URL}>support.onsoftware.uk</a> and expand as
              more ONSoftware products launch. For help right now, open{' '}
              <a href={`${APP_URL}/support`}>in-app support</a> or email{' '}
              <a href="mailto:support@onsoftware.uk">support@onsoftware.uk</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
