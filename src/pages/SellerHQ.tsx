import { Link } from 'react-router-dom'
import PageMeta, { pageTitle } from '../components/PageMeta'
import Cta from '../components/Cta'
import Faq from '../components/Faq'
import PricingTable from '../components/PricingTable'
import { APP_URL, BRAND_ASSETS } from '../lib/site'

const WORKFLOWS = [
  {
    title: 'Inventory',
    text: 'Store product details, purchase cost, photos, location and status so stock has one working record from the moment you buy it.',
  },
  {
    title: 'Listings',
    text: 'Track where an item is listed and manage relisting workflows for marketplaces including eBay, Vinted, Etsy and Depop.',
  },
  {
    title: 'Sales & shipping',
    text: 'Record single or bundle sales, marketplace fees and shipping progress while keeping the product lifecycle connected.',
  },
  {
    title: 'Expenses & receipts',
    text: 'Record business spending and preserve supporting records alongside the sales and inventory they affect.',
  },
  {
    title: 'Reports & forecasts',
    text: 'Turn transaction history into profit, stock-health, marketplace, cash-flow and forecasting views as your plan expands.',
  },
  {
    title: 'Tax administration',
    text: 'Use UK-focused tax estimates and, on higher plans, deeper tax workflow tools while keeping responsibility for filing and professional advice where needed.',
  },
]

const ADVANCED = [
  'CSV import and export for moving stock records in and out of the system.',
  'Product labels, QR codes, mobile QR scanning and QR relay on eligible plans.',
  'Bundle sales and reusable bundle templates for multi-item transactions.',
  'Multi-currency support for sellers operating across more than one currency.',
  'Low-stock alerts, stock ageing, cash-flow projection and advanced forecasts on Pro.',
  'Team seats, audit log, business branding, accounting export and Till Mode on Business.',
]

const FAQS = [
  {
    question: 'What is SellerHQ?',
    answer:
      'SellerHQ is a web application for the operational side of reselling. It keeps inventory, listings, sales, expenses, reporting, forecasting and UK tax estimates together instead of spreading the business across separate spreadsheets and marketplace dashboards.',
  },
  {
    question: 'Is SellerHQ free?',
    answer:
      'Yes. Basic costs £0 and supports up to 50 products and one business. Growing, Pro and Business increase limits and add progressively deeper workflows.',
  },
  {
    question: 'Does SellerHQ connect directly to eBay, Vinted, Etsy or Depop?',
    answer:
      'SellerHQ is designed around sellers who use those marketplaces and can track marketplace-related listings and sales. A marketplace name does not by itself mean an official API integration or partnership. Where a direct integration exists, it will be described explicitly.',
  },
  {
    question: 'Does SellerHQ file my tax return?',
    answer:
      'No. SellerHQ provides administrative tax estimates and tools based on the information you enter. It is not HMRC, an accountant or personalised tax advice, and you remain responsible for checking current rules and filing correctly.',
  },
  {
    question: 'Can I install SellerHQ on my phone?',
    answer:
      'SellerHQ is built as an installable web app and supports mobile workflows. Eligible plans also include mobile QR scanning, with QR relay available on Business.',
  },
  {
    question: 'Can a team use SellerHQ?',
    answer:
      'Yes. The Business plan includes five team seats together with business customisation, audit history and other higher-volume features.',
  },
  {
    question: 'Can I get my data back out?',
    answer:
      'SellerHQ includes CSV export and broader import/export capabilities depending on plan, with full backup export on Pro and above. The product is designed so business records are not intended to be trapped inside the application.',
  },
]

export default function SellerHQ() {
  return (
    <>
      <PageMeta
        title={pageTitle('SellerHQ')}
        description="SellerHQ by ONSoftware is a reselling back office for inventory, listings, sales, expenses, reporting, forecasting and UK tax estimates."
      />

      <section className="ons-hero ons-hero--dark ons-seller-hero">
        <div className="ons-container ons-hero__inner">
          <div>
            <p className="ons-eyebrow">SellerHQ by ONSoftware</p>
            <h1 className="ons-hero__title ons-h1">Inventory. Organize. Grow.</h1>
            <p className="ons-hero__lead">
              SellerHQ is the back office for resellers who need more than a marketplace account and less than an enterprise system. Track the stock, money and admin behind every listing from one product record.
            </p>
            <div className="ons-hero__cta">
              <a className="ons-btn ons-btn--light ons-btn--lg" href={`${APP_URL}/register`}>Create a free account →</a>
              <a className="ons-btn ons-btn--outline-light ons-btn--lg" href={`${APP_URL}/login`}>Open SellerHQ</a>
              <Link className="ons-btn ons-btn--outline-light ons-btn--lg" to="/products/sellerhq/pricing">Compare plans</Link>
            </div>
            <div className="ons-hero__proof">
              <span className="ons-signal">Available now</span>
              <span>Basic: £0</span>
              <span>No card required to start</span>
            </div>
          </div>
          <div className="ons-product-brand-stage ons-product-brand-stage--dark">
            <img src={BRAND_ASSETS.sellerHqLogo} alt="SellerHQ — Inventory. Organize. Grow." />
          </div>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container ons-showcase">
          <div className="ons-showcase__copy">
            <p className="ons-eyebrow">Why SellerHQ exists</p>
            <h2 className="ons-h2">Marketplaces help you sell. They do not run the rest of the business.</h2>
          </div>
          <div className="ons-prose">
            <p>Once reselling grows beyond a few items, the operational record usually fragments: purchase costs in one sheet, listings on several marketplaces, receipts elsewhere, sales in messages, and tax figures reconstructed later.</p>
            <p>SellerHQ sits behind the marketplaces. It is deliberately designed around the lifecycle of the item and the business records around it, so the information entered during normal work can feed the reports and calculations you need later.</p>
          </div>
        </div>
      </section>

      <section className="ons-section ons-section--soft">
        <div className="ons-container">
          <div className="ons-section-head ons-center">
            <p className="ons-eyebrow">Core workflows</p>
            <h2 className="ons-h2">One record from stock intake to final numbers.</h2>
          </div>
          <div className="ons-feature-grid">
            {WORKFLOWS.map((item) => (
              <article className="ons-card" key={item.title}>
                <h3 className="ons-card__title ons-h3">{item.title}</h3>
                <p className="ons-card__text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container ons-split-panel">
          <div>
            <p className="ons-eyebrow">Beyond the basics</p>
            <h2 className="ons-h2">The deeper tools appear when the business actually needs them.</h2>
          </div>
          <div>
            <ul className="ons-check-list">
              {ADVANCED.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="ons-section ons-section--soft">
        <div className="ons-container">
          <div className="ons-section-head ons-center">
            <p className="ons-eyebrow">Pricing</p>
            <h2 className="ons-h2">Start free. Upgrade for capacity and deeper operations.</h2>
            <p className="ons-lead">Current launch pricing is shown below. Checkout is the final source of truth for the price and billing cycle you choose.</p>
          </div>
          <PricingTable />
          <div className="ons-center" style={{ marginTop: 28 }}>
            <Link className="ons-btn ons-btn--secondary" to="/products/sellerhq/pricing">Full plan and billing details →</Link>
          </div>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container ons-split-panel">
          <div>
            <p className="ons-eyebrow">Marketplace support</p>
            <h2 className="ons-h2">Built around eBay, Vinted, Etsy and Depop workflows.</h2>
          </div>
          <div className="ons-prose">
            <p>SellerHQ lets you record and analyse the marketplaces you use without pretending every marketplace is automatically connected. Fee structures, listing rules and platform behaviour can change independently.</p>
            <p>Where SellerHQ introduces a direct API connection or official integration, it will be labelled as an integration. Otherwise, marketplace names describe supported workflow and reporting context.</p>
          </div>
        </div>
      </section>

      <section className="ons-section ons-section--soft">
        <div className="ons-container">
          <div className="ons-section-head ons-center">
            <p className="ons-eyebrow">Before you launch your account</p>
            <h2 className="ons-h2">Clear terms around the tools that handle business records.</h2>
          </div>
          <div className="ons-legal-card-grid">
            <Link className="ons-legal-card" to="/legal/sellerhq-terms"><strong>SellerHQ Service Terms</strong><span>Accounts, plans, data, availability and use.</span></Link>
            <Link className="ons-legal-card" to="/legal/subscriptions-refunds"><strong>Subscriptions & refunds</strong><span>Renewal, cancellation and refund requests.</span></Link>
            <Link className="ons-legal-card" to="/legal/tax-disclaimer"><strong>Tax & financial disclaimer</strong><span>What estimates can and cannot tell you.</span></Link>
            <Link className="ons-legal-card" to="/legal/privacy"><strong>Privacy Notice</strong><span>How personal and business data is handled.</span></Link>
          </div>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container">
          <div className="ons-section-head ons-center">
            <p className="ons-eyebrow">Questions</p>
            <h2 className="ons-h2">SellerHQ FAQ</h2>
          </div>
          <Faq items={FAQS} />
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container">
          <Cta
            title="Give the business behind the listings a proper system."
            text="Create a SellerHQ Basic account for free, add your first stock and upgrade only when you need more capacity or deeper tools."
          >
            <a className="ons-btn ons-btn--light ons-btn--lg" href={`${APP_URL}/register`}>Start free →</a>
            <Link className="ons-btn ons-btn--outline-light ons-btn--lg" to="/support">Get product support</Link>
          </Cta>
        </div>
      </section>
    </>
  )
}
