import { useMemo, useState } from 'react'
import Icon from '../components/Icon'
import PageMeta, { pageTitle } from '../components/PageMeta'
import { SELLERHQ_CATEGORIES, SUPPORT_LINKS } from '../lib/support'

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
            <span className="ons-search__icon">
              <Icon name="search" size={18} />
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
                    <span className="ons-category__icon">
                      <Icon name={category.icon} size={20} />
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
              <Icon name="search" size={20} />
              <p>
                <strong>Nothing matched.</strong> Email{' '}
                <a href={`mailto:${SUPPORT_LINKS.email}`}>{SUPPORT_LINKS.email}</a>{' '}
                and we’ll point you in the right direction.
              </p>
            </div>
          )}

          <div className="ons-support-notice" style={{ marginTop: '32px' }}>
            <Icon name="alert" size={20} />
            <p>
              <strong>Can’t find an answer?</strong> Open{' '}
              <a href={SUPPORT_LINKS.inAppSupport}>in-app support</a> or email{' '}
              <a href={`mailto:${SUPPORT_LINKS.email}`}>{SUPPORT_LINKS.email}</a>{' '}
              and we’ll help you directly. New guides are added regularly, and
              this help centre will move to a dedicated support subdomain as
              ONSoftware grows.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
