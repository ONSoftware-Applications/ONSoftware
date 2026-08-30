import { Link } from 'react-router-dom'
import PageMeta, { pageTitle } from '../components/PageMeta'
import Cta from '../components/Cta'
import Faq from '../components/Faq'
import PricingTable from '../components/PricingTable'
import { APP_URL } from '../lib/site'

const BENEFITS = [
  { title: 'Run the whole reselling workflow', text: 'Keep purchases, stock, listings, shipping, sales, expenses and reporting in one operational system.' },
  { title: 'See the numbers behind every sale', text: 'Track cost, fees, revenue and profit so you can understand what is actually working.' },
  { title: 'Keep business records usable', text: 'Sales, expenses, receipts and UK tax estimates stay connected instead of living across separate spreadsheets.' },
  { title: 'Work from desktop or phone', text: 'SellerHQ is an installable web app with mobile workflows, QR scanning and dark mode.' },
]

const FEATURES = [
  { title: 'Inventory lifecycle', text: 'Track products from purchase and storage through listing, shipping, sale, refund and archive.' },
  { title: 'Listings & relisting', text: 'Record marketplace listings for eBay, Vinted, Etsy and Depop, with relisting workflows and reminders.' },
  { title: 'Sales & bundles', text: 'Record individual sales, quick listings and multi-item bundles with fees, costs and profit.' },
  { title: 'Till Mode', text: 'Run in-person selling sessions with receipts and a cash-drawer workflow on the Business plan.' },
  { title: 'Expenses & receipts', text: 'Log business expenses, keep receipt records and connect spending to the wider business picture.' },
  { title: 'Analytics & reporting', text: 'Monitor revenue, profit, margin, sell-through, marketplace performance and stock health.' },
  { title: 'Forecasting', text: 'Use historical performance, scenarios and cash-flow projections to plan what happens next.' },
  { title: 'UK tax tools', text: 'Estimate income tax and Class 4 National Insurance, with expanded tax workflows on Pro.' },
  { title: 'QR, labels & scanning', text: 'Generate labels and QR codes, scan on mobile and use QR relay for phone-to-laptop workflows.' },
  { title: 'Teams & branding', text: 'Business adds team seats, audit history and branding controls for larger operations.' },
]

const STEPS = [
  { title: 'Create the business', text: 'Open a free account and set up the business you want SellerHQ to manage.' },
  { title: 'Bring in the stock', text: 'Add products manually or use CSV import when you already have inventory elsewhere.' },
  { title: 'Record what happens', text: 'Track listings, sales, shipping and expenses as part of the normal workflow.' },
  { title: 'Use the picture', text: 'Dashboard, reports, profit and tax estimates update from the records you have already entered.' },
]

const FAQS = [
  { question: 'What is SellerHQ?', answer: 'SellerHQ is a web app for resellers to manage inventory, listings, sales, expenses, profit, reporting, forecasting and UK tax estimates from one back office.' },
  { question: 'Is SellerHQ free?', answer: 'Yes. The Basic plan is free and supports up to 50 products and 1 business. Paid plans increase limits and add more operational, reporting and team features.' },
  { question: 'Which marketplaces does it support?', answer: 'SellerHQ is designed around sellers using eBay, Vinted, Etsy and Depop. Sales can also be recorded for other channels where needed.' },
  { question: 'Does it file my tax return for me?', answer: 'SellerHQ provides tax estimates and tax-management tools, but it is not a substitute for professional tax advice and should not be treated as an accountant or HMRC itself.' },
  { question: 'Can I use it with a team?', answer: 'Yes. The Business plan includes team seats, roles and an audit log, alongside business branding features.' },
  { question: 'What is Till Mode?', answer: 'Till Mode is the Business-plan point-of-sale workflow for in-person selling, including selling sessions, receipts and cash-drawer tracking.' },
  { question: 'Can I export my data?', answer: 'SellerHQ includes CSV and backup export capabilities depending on plan, so your business records are not intended to be trapped inside the app.' },
]

function SellerPreview() {
  return (
    <div className="ons-app-shell" aria-label="SellerHQ interface preview">
      <div className="ons-app-shell__bar"><span className="ons-app-shell__dot" /><span className="ons-app-shell__dot" /><span className="ons-app-shell__dot" /></div>
      <div className="ons-app-shell__body">
        <aside className="ons-app-shell__side">
          <div className="ons-app-shell__brand"><span className="ons-app-shell__mini-logo">SH</span>SellerHQ</div>
          <div className="ons-app-shell__nav"><span>Dashboard</span><span>Inventory</span><span>Listings</span><span>Sales</span><span>Expenses</span></div>
        </aside>
        <div className="ons-app-shell__main">
          <p className="ons-app-shell__heading">This month</p>
          <div className="ons-metric-grid">
            <div className="ons-metric"><p className="ons-metric__label">Revenue</p><p className="ons-metric__value">£1,284.50</p></div>
            <div className="ons-metric"><p className="ons-metric__label">Net profit</p><p className="ons-metric__value ons-metric__value--good">£386.20</p></div>
            <div className="ons-metric"><p className="ons-metric__label">Products</p><p className="ons-metric__value">126</p></div>
            <div className="ons-metric"><p className="ons-metric__label">Margin</p><p className="ons-metric__value">43%</p></div>
          </div>
          <div className="ons-list-row"><span className="ons-list-row__name">Vintage Levi’s Jacket</span><span className="ons-list-row__status ons-list-row__status--sold">Sold +£32</span></div>
          <div className="ons-list-row"><span className="ons-list-row__name">Nike Air Max 90</span><span className="ons-list-row__status ons-list-row__status--sold">Sold +£48.50</span></div>
          <div className="ons-list-row"><span className="ons-list-row__name">Pokémon TCG Bundle</span><span className="ons-list-row__status ons-list-row__status--listed">Listed £21</span></div>
        </div>
      </div>
    </div>
  )
}

export default function SellerHQ() {
  return (
    <>
      <PageMeta title={pageTitle('SellerHQ')} description="SellerHQ by ONSoftware: inventory, listings, sales, expenses, reporting and business management for resellers." />

      <section className="ons-hero ons-hero--dark">
        <div className="ons-container ons-hero__inner">
          <div>
            <p className="ons-eyebrow">SellerHQ · ONSoftware</p>
            <h1 className="ons-hero__title ons-h1">The back office for a reselling business.</h1>
            <p className="ons-hero__lead">Manage inventory, listings, sales, expenses, reporting and the financial picture in one purpose-built system for resellers.</p>
            <div className="ons-hero__cta">
              <a className="ons-btn ons-btn--light ons-btn--lg" href={`${APP_URL}/register`}>Start free →</a>
              <a className="ons-btn ons-btn--outline-light ons-btn--lg" href={`${APP_URL}/login`}>Open SellerHQ</a>
              <Link className="ons-btn ons-btn--outline-light ons-btn--lg" to="/products/sellerhq/pricing">Pricing</Link>
            </div>
            <div className="ons-hero__proof"><span className="ons-signal">Live now</span><span>Basic plan: £0</span><span>Desktop + mobile</span></div>
          </div>
          <div className="ons-hero__visual"><SellerPreview /></div>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container ons-showcase">
          <div className="ons-showcase__copy">
            <p className="ons-eyebrow">Why it exists</p>
            <h2 className="ons-h2">Reselling becomes a business before the admin catches up.</h2>
          </div>
          <div className="ons-prose">
            <p>Stock sits in one place, listings in another, sales on several marketplaces, expenses in bank statements and profit in a spreadsheet that only gets updated when there is time. SellerHQ is designed to turn those fragments into one working record.</p>
            <p>It is deliberately not a marketplace. SellerHQ sits behind the marketplaces and manages the operational work they do not manage for you.</p>
          </div>
        </div>
      </section>

      <section className="ons-section ons-section--soft">
        <div className="ons-container">
          <div className="ons-section-head ons-center"><p className="ons-eyebrow">Core value</p><h2 className="ons-h2">A clearer business, not another tab.</h2></div>
          <div className="ons-feature-grid">
            {BENEFITS.map((benefit) => <article className="ons-card" key={benefit.title}><h3 className="ons-card__title ons-h3">{benefit.title}</h3><p className="ons-card__text">{benefit.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container">
          <div className="ons-section-head"><p className="ons-eyebrow">Capabilities</p><h2 className="ons-h2">The operational toolkit.</h2><p className="ons-lead">Features are grouped around the way a seller actually works, from buying stock through selling it and understanding the outcome.</p></div>
          <div className="ons-feature-grid">
            {FEATURES.map((feature) => <div className="ons-feature" key={feature.title}><span className="ons-feature__tick" aria-hidden="true">✓</span><div><h3 className="ons-feature__title">{feature.title}</h3><p className="ons-feature__text">{feature.text}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="ons-section ons-section--soft">
        <div className="ons-container">
          <div className="ons-section-head ons-center"><p className="ons-eyebrow">Workflow</p><h2 className="ons-h2">Set up once. Keep the record current as you work.</h2></div>
          <div className="ons-steps">
            {STEPS.map((step, index) => <div className="ons-step" key={step.title}><span className="ons-step__num">{index + 1}</span><h3 className="ons-step__title ons-h3">{step.title}</h3><p className="ons-step__text">{step.text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container">
          <div className="ons-section-head ons-center"><p className="ons-eyebrow">Plans</p><h2 className="ons-h2">Start free, then scale the system with the business.</h2><p className="ons-lead">Basic is free. Paid plans increase limits and unlock deeper workflows rather than blocking the core idea behind the product.</p></div>
          <PricingTable />
          <div className="ons-center" style={{ marginTop: '26px' }}><Link className="ons-btn ons-btn--secondary" to="/products/sellerhq/pricing">Full pricing details →</Link></div>
        </div>
      </section>

      <section className="ons-section ons-section--soft">
        <div className="ons-container">
          <div className="ons-section-head ons-center"><p className="ons-eyebrow">Questions</p><h2 className="ons-h2">SellerHQ FAQ</h2></div>
          <Faq items={FAQS} />
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container">
          <Cta title="Put the business side of reselling in one place" text="Create a Basic account without a card, add your first products and move up only when you need more capacity.">
            <a className="ons-btn ons-btn--light ons-btn--lg" href={`${APP_URL}/register`}>Create free account →</a>
            <Link className="ons-btn ons-btn--outline-light ons-btn--lg" to="/support">Get support</Link>
          </Cta>
        </div>
      </section>
    </>
  )
}
