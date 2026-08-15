import { Link } from 'react-router-dom'
import PageMeta, { pageTitle } from '../components/PageMeta'
import Cta from '../components/Cta'
import Faq from '../components/Faq'
import PricingTable from '../components/PricingTable'
import { APP_URL } from '../lib/site'

const BENEFITS = [
  {
    title: 'One place for everything',
    text: 'Inventory, listings, sales, expenses and finances — no more juggling spreadsheets and notebooks.',
  },
  {
    title: 'Know your real profit',
    text: 'See profit per item and overall after fees and costs, so you always know what’s actually worth selling.',
  },
  {
    title: 'Ready for tax season',
    text: 'Track purchases, expenses and sales with a UK tax estimate built in — come tax time, the numbers are there.',
  },
  {
    title: 'Works on any device',
    text: 'A fast, installable app for desktop and mobile with dark mode, built for life on the go.',
  },
]

const FEATURES = [
  {
    title: 'Inventory & statuses',
    text: 'Track products through the full lifecycle — unlisted, listed, shipping, sold, refunded and more.',
  },
  {
    title: 'Sales & bundles',
    text: 'Record single sales, quick listings and bundle sales, with fees, costs and profit per sale.',
  },
  {
    title: 'Till Mode & point of sale',
    text: 'A full point-of-sale with sessions, receipts and a cash drawer — built for markets, fairs and shop counters.',
  },
  {
    title: 'Listings & auto-relist',
    text: 'Keep an eye on your eBay, Vinted, Etsy and Depop listings, with auto-relist reminders.',
  },
  {
    title: 'Expenses & receipts',
    text: 'Log expenses, attach receipts and keep an archive of purchase receipts in one searchable place.',
  },
  {
    title: 'Dashboard & analytics',
    text: 'Revenue, profit, margin, sell-through rate and marketplace breakdowns at a glance.',
  },
  {
    title: 'Forecasts & reports',
    text: 'Predict future performance, plan scenarios and export P&L and stock-ageing reports.',
  },
  {
    title: 'UK tax',
    text: 'Income tax and Class 4 National Insurance estimates, with quarterly deadlines and filing on Pro.',
  },
  {
    title: 'Photos, QR & barcodes',
    text: 'Compressed product photos, printable labels, QR codes, a mobile scanner and QR relay to send phone scans to a laptop.',
  },
  {
    title: 'Team & white-label',
    text: '5 team seats with roles and a full audit log, plus white-label branding with your own name, logo and colour.',
  },
]

const STEPS = [
  {
    title: 'Create your account',
    text: 'Sign up free — no card required. Set up your business in a couple of minutes.',
  },
  {
    title: 'Add your stock',
    text: 'Add products with photos, costs and details. Import in bulk with CSV if you already have a list.',
  },
  {
    title: 'Run your sales',
    text: 'Record sales and expenses as they happen, from your phone or desktop.',
  },
  {
    title: 'See your numbers',
    text: 'Profit, taxes and forecasts update automatically. You always know where you stand.',
  },
]

const AUDIENCES = [
  {
    title: 'Solo resellers',
    text: 'One person, lots of stock. Keep everything organised without paying for enterprise software.',
  },
  {
    title: 'Small teams',
    text: 'Share a business with up to 5 people, with roles, permissions and an audit trail.',
  },
  {
    title: 'Side hustles',
    text: 'Selling as a hobby that grew? Start free and scale up when it makes sense.',
  },
  {
    title: 'Multi-channel sellers',
    text: 'One inventory across eBay, Vinted, Etsy and Depop, with marketplace analytics.',
  },
]

const FAQS = [
  {
    question: 'What is SellerHQ?',
    answer:
      'SellerHQ is a web app for resellers to manage inventory, record sales, track profit, capture expenses, estimate UK tax and forecast — all in one place.',
  },
  {
    question: 'Is SellerHQ free?',
    answer:
      'Yes. The Basic plan is free forever and covers up to 50 products and 1 business. Paid plans add products, businesses, reports, forecasts and team features.',
  },
  {
    question: 'Which marketplaces does it support?',
    answer:
      'SellerHQ is built for resellers on eBay, Vinted, Etsy and Depop. You can track listings and record sales on any marketplace.',
  },
  {
    question: 'Does SellerHQ help with taxes?',
    answer:
      'It gives a UK tax estimate from your sales and expenses, covering income tax and Class 4 National Insurance per tax year. Full tax tools are available on the Pro plan.',
  },
  {
    question: 'Can I use it with my team?',
    answer:
      'Yes. The Business plan includes 5 team seats with roles (owner, admin, member), invite codes, an audit log and white-label branding.',
  },
  {
    question: 'What is Till Mode?',
    answer:
      'Till Mode is SellerHQ’s point of sale, available on the Business plan. It gives you selling sessions, printed-style receipts and a cash drawer, so you can sell in person at markets, fairs or a shop counter.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Your data is stored securely with row-level access controls, and you can export or delete everything at any time. We never sell your data.',
  },
]

export default function SellerHQ() {
  return (
    <>
      <PageMeta
        title={pageTitle('SellerHQ')}
        description="SellerHQ by ONSoftware — reselling business management. Manage inventory, listings, sales, expenses and business finances in one place."
      />

      {/* Hero */}
      <section className="ons-hero ons-hero--dark">
        <div className="ons-container ons-hero__inner">
          <div>
            <p className="ons-eyebrow">SellerHQ by ONSoftware</p>
            <h1 className="ons-hero__title ons-h1">Reselling business management</h1>
            <p className="ons-hero__lead">
              Manage inventory, listings, sales, expenses and business finances
              in one place. Built for resellers on eBay, Vinted, Etsy and Depop.
            </p>
            <div className="ons-hero__cta">
              <a className="ons-btn ons-btn--light ons-btn--lg" href={`${APP_URL}/register`}>
                Start using SellerHQ →
              </a>
              <Link className="ons-btn ons-btn--outline-light ons-btn--lg" to="/products/sellerhq/pricing">
                See pricing
              </Link>
            </div>
            <div className="ons-hero__proof">
              <span className="ons-badge ons-badge--live">
                <span className="ons-badge__dot" aria-hidden="true" />
                Feature complete
              </span>
              <span>
                Free to start
              </span>
              <span>
                Made in the UK
              </span>
            </div>
          </div>

          <div className="ons-hero__visual">
            <div className="ons-panel">
              <div className="ons-panel__bar">
                <span className="ons-panel__dot" />
                <span className="ons-panel__dot" />
                <span className="ons-panel__dot" />
              </div>
              <div className="ons-panel__body">
                <p className="ons-panel__title">This month</p>
                <div className="ons-metric-grid">
                  <div className="ons-metric">
                    <p className="ons-metric__label">Revenue</p>
                    <p className="ons-metric__value">£1,284.50</p>
                  </div>
                  <div className="ons-metric">
                    <p className="ons-metric__label">Net profit</p>
                    <p className="ons-metric__value ons-metric__value--good">£386.20</p>
                  </div>
                  <div className="ons-metric">
                    <p className="ons-metric__label">Fees</p>
                    <p className="ons-metric__value">£102.40</p>
                  </div>
                  <div className="ons-metric">
                    <p className="ons-metric__label">Margin</p>
                    <p className="ons-metric__value">43%</p>
                  </div>
                </div>
                <div className="ons-list-row">
                  <span className="ons-list-row__name">Vintage Levi’s Jacket</span>
                  <span className="ons-list-row__status ons-list-row__status--sold">Sold +£32</span>
                </div>
                <div className="ons-list-row">
                  <span className="ons-list-row__name">Nike Air Max 90</span>
                  <span className="ons-list-row__status ons-list-row__status--sold">Sold +£48.50</span>
                </div>
                <div className="ons-list-row">
                  <span className="ons-list-row__name">Pokémon TCG Bundle</span>
                  <span className="ons-list-row__status ons-list-row__status--listed">Listed £21</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is SellerHQ */}
      <section className="ons-section">
        <div className="ons-container">
          <div className="ons-prose" style={{ maxWidth: '720px' }}>
            <p className="ons-eyebrow">What is SellerHQ?</p>
            <h2 className="ons-h2">
              The back office for your reselling business
            </h2>
            <p>
              If you sell on eBay, Vinted, Etsy or Depop, you already know how
              quickly stock, sales and expenses can get out of hand. SellerHQ
              gives you a single, simple place to run the business side of
              reselling — from the first product photo to the final tax
              estimate.
            </p>
            <p>
              It’s built for independent businesses and individuals, not
              enterprises. No bloat, no features you’ll never open — just the
              tools you need to manage, organise and grow.
            </p>
            <p>
              SellerHQ is feature-complete. Everything on the pricing page is
              available today — there’s nothing hidden behind a “coming soon”.
            </p>
          </div>
        </div>
      </section>

      {/* Key benefits */}
      <section className="ons-section ons-section--soft">
        <div className="ons-container">
          <div className="ons-section-head ons-center">
            <p className="ons-eyebrow">Key benefits</p>
            <h2 className="ons-h2">Why resellers use SellerHQ</h2>
          </div>
          <div className="ons-feature-grid">
            {BENEFITS.map((benefit) => (
              <div className="ons-card" key={benefit.title}>
                <h3 className="ons-card__title ons-h3">{benefit.title}</h3>
                <p className="ons-card__text">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="ons-section">
        <div className="ons-container">
          <div className="ons-section-head ons-center">
            <p className="ons-eyebrow">Features</p>
            <h2 className="ons-h2">Everything your reselling business needs</h2>
          </div>
          <div className="ons-feature-grid">
            {FEATURES.map((feature) => (
              <div className="ons-feature" key={feature.title}>
                <span className="ons-feature__tick" aria-hidden="true">
                  ✓
                </span>
                <div>
                  <h3 className="ons-feature__title">{feature.title}</h3>
                  <p className="ons-feature__text">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="ons-section ons-section--soft">
        <div className="ons-container">
          <div className="ons-section-head ons-center">
            <p className="ons-eyebrow">How it works</p>
            <h2 className="ons-h2">Set up in minutes, not days</h2>
          </div>
          <div className="ons-steps">
            {STEPS.map((step, index) => (
              <div className="ons-step" key={step.title}>
                <span className="ons-step__num" aria-hidden="true">
                  {index + 1}
                </span>
                <h3 className="ons-step__title ons-h3">{step.title}</h3>
                <p className="ons-step__text">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="ons-section">
        <div className="ons-container">
          <div className="ons-section-head ons-center">
            <p className="ons-eyebrow">Who it’s for</p>
            <h2 className="ons-h2">Built for people who sell things</h2>
          </div>
          <div className="ons-feature-grid">
            {AUDIENCES.map((audience) => (
              <div className="ons-card" key={audience.title}>
                <h3 className="ons-card__title ons-h3">{audience.title}</h3>
                <p className="ons-card__text">{audience.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="ons-section ons-section--soft">
        <div className="ons-container">
          <div className="ons-section-head ons-center">
            <p className="ons-eyebrow">Pricing</p>
            <h2 className="ons-h2">Simple plans that grow with you</h2>
            <p className="ons-lead">
              Start free. Upgrade when you need more. Cancel anytime from your
              billing portal.
            </p>
          </div>
          <PricingTable />
          <div className="ons-center" style={{ marginTop: '28px' }}>
            <Link to="/products/sellerhq/pricing" className="ons-btn ons-btn--secondary">
              Full pricing details →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="ons-section">
        <div className="ons-container">
          <div className="ons-section-head ons-center">
            <p className="ons-eyebrow">FAQs</p>
            <h2 className="ons-h2">Questions, answered</h2>
          </div>
          <Faq items={FAQS} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="ons-section">
        <div className="ons-container">
          <Cta
            title="Start using SellerHQ today"
            text="Join resellers who keep their inventory, sales and finances in one place — free to start."
          >
            <a className="ons-btn ons-btn--light ons-btn--lg" href={`${APP_URL}/register`}>
              Start using SellerHQ →
            </a>
            <Link className="ons-btn ons-btn--outline-light ons-btn--lg" to="/contact">
              Talk to us
            </Link>
          </Cta>
        </div>
      </section>
    </>
  )
}
