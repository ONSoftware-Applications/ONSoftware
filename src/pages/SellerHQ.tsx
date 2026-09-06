import { Link } from 'react-router-dom'
import PageMeta, { pageTitle } from '../components/PageMeta'
import PricingTable from '../components/PricingTable'
import { APP_URL, BRAND_ASSETS } from '../lib/site'

const FEATURES = [
  ['Inventory', 'Keep product details, purchase cost, photos, location and lifecycle status together from day one.'],
  ['Listings', 'Track marketplace listings and relisting work across eBay, Vinted, Etsy and Depop workflows.'],
  ['Sales', 'Record sales, bundles, marketplace fees and shipping without disconnecting them from the original stock record.'],
  ['Expenses', 'Keep business spending and receipt records close to the activity they support.'],
  ['Reports', 'Turn normal operational records into profit, stock-health, marketplace and cash-flow views.'],
  ['Tax estimates', 'Use UK-focused administrative tax tools while keeping filing decisions and professional advice separate.'],
]

const FAQS = [
  ['Is SellerHQ actually free?', 'Yes. Basic costs £0, supports up to 50 products and one business, and does not require a payment card to start.'],
  ['Does SellerHQ directly integrate with marketplaces?', 'SellerHQ supports workflows around eBay, Vinted, Etsy and Depop. A marketplace name does not imply an official API integration unless the product explicitly says one exists.'],
  ['Does SellerHQ file my tax return?', 'No. Tax features provide administrative estimates based on the information you enter. They do not replace HMRC guidance, an accountant or your responsibility to file correctly.'],
  ['Can I export my data?', 'Yes. CSV export is available from Basic, with broader import/export and backup capability on higher plans.'],
]

export default function SellerHQ() {
  return (
    <>
      <PageMeta
        title={pageTitle('SellerHQ')}
        description="SellerHQ by ONSoftware brings inventory, listings, sales, expenses, reports, forecasts and UK tax estimates into one connected reselling workflow."
      />

      <section className="ons-product-hero">
        <div className="ons-product-hero__glow" aria-hidden="true" />
        <div className="ons-container ons-product-hero__grid">
          <div className="ons-product-hero__copy">
            <div className="ons-pill ons-pill--dark"><span /> ONSoftware product · Live now</div>
            <img className="ons-product-hero__logo" src={BRAND_ASSETS.sellerHqLogo} alt="SellerHQ — Inventory. Organize. Grow." />
            <h1>Run the business behind the listings.</h1>
            <p>
              SellerHQ is a purpose-built back office for resellers. It connects the stock you buy, the places you list it, the money you make and the records you need later.
            </p>
            <div className="ons-actions">
              <a className="ons-btn ons-btn--light ons-btn--lg" href={`${APP_URL}/register`}>Start free</a>
              <a className="ons-btn ons-btn--glass ons-btn--lg" href={`${APP_URL}/login`}>Open SellerHQ ↗</a>
            </div>
            <div className="ons-product-hero__facts">
              <div><strong>£0</strong><span>Basic plan</span></div>
              <div><strong>50</strong><span>products on Basic</span></div>
              <div><strong>4</strong><span>plans as you grow</span></div>
            </div>
          </div>

          <div className="ons-dashboard-stage" aria-label="SellerHQ dashboard illustration">
            <div className="ons-dashboard-stage__shell">
              <div className="ons-dashboard-stage__top">
                <div className="ons-dashboard-stage__brand"><img src={BRAND_ASSETS.sellerHqMark} alt="" /><span>SellerHQ</span></div>
                <span className="ons-dashboard-stage__avatar">ON</span>
              </div>
              <div className="ons-dashboard-stage__body">
                <aside><span className="is-active" /><span /><span /><span /><span /></aside>
                <div className="ons-dashboard-stage__main">
                  <span className="ons-dashboard-stage__eyebrow">Business overview</span>
                  <h3>Good evening.</h3>
                  <div className="ons-dashboard-stage__metrics">
                    <div><span>Revenue</span><strong>£4,982</strong><small>+12.4%</small></div>
                    <div><span>Profit</span><strong>£2,419</strong><small>+8.1%</small></div>
                    <div><span>Stock value</span><strong>£3,104</strong><small>184 items</small></div>
                  </div>
                  <div className="ons-dashboard-stage__lower">
                    <div className="ons-dashboard-stage__bars" aria-hidden="true">
                      <i style={{ height: '32%' }} /><i style={{ height: '46%' }} /><i style={{ height: '39%' }} /><i style={{ height: '64%' }} /><i style={{ height: '58%' }} /><i style={{ height: '82%' }} /><i style={{ height: '74%' }} /><i style={{ height: '92%' }} />
                    </div>
                    <div className="ons-dashboard-stage__activity">
                      <span><i /> Item sold</span>
                      <span><i /> Stock added</span>
                      <span><i /> Expense logged</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ons-strip ons-strip--light">
        <div className="ons-container ons-strip__features">
          <span>Inventory</span><i />
          <span>Listings</span><i />
          <span>Sales</span><i />
          <span>Expenses</span><i />
          <span>Reports</span><i />
          <span>Forecasts</span>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container">
          <div className="ons-heading-block">
            <div className="ons-pill"><span /> One connected workflow</div>
            <h2>Stop rebuilding the same business record in six different places.</h2>
            <p>SellerHQ follows the item from purchase to archive, so each action adds to one useful history instead of creating another disconnected note or spreadsheet row.</p>
          </div>
          <div className="ons-feature-bento">
            {FEATURES.map(([title, text], index) => (
              <article className={index === 0 || index === 3 ? 'ons-feature-tile ons-feature-tile--wide' : 'ons-feature-tile'} key={title}>
                <span className="ons-feature-tile__icon">{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ons-section ons-section--paper">
        <div className="ons-container ons-two-col-story">
          <div className="ons-heading-block ons-heading-block--left">
            <div className="ons-pill"><span /> Designed for reselling</div>
            <h2>Marketplaces sell the item. SellerHQ runs everything around it.</h2>
          </div>
          <div className="ons-story-list">
            <div><span>01</span><p><strong>Buy stock.</strong> Capture cost, source, images, location and product details once.</p></div>
            <div><span>02</span><p><strong>List it.</strong> Record where the item is listed and keep relisting work visible.</p></div>
            <div><span>03</span><p><strong>Sell it.</strong> Add sale value, fees, bundles and shipping without losing the original record.</p></div>
            <div><span>04</span><p><strong>Use the history.</strong> Let reports, forecasts and tax estimates work from the records you already created.</p></div>
          </div>
        </div>
      </section>

      <section className="ons-section" id="pricing">
        <div className="ons-container">
          <div className="ons-heading-block">
            <div className="ons-pill"><span /> Pricing</div>
            <h2>Start free. Pay for scale, not permission to begin.</h2>
            <p>Basic handles the essentials at no cost. Growing, Pro and Business add capacity and deeper workflows when the operation needs them.</p>
          </div>
          <PricingTable />
          <p className="ons-pricing-note">Annual billing receives a 5% saving. Checkout is the final source of truth for the plan, price and billing cycle selected.</p>
        </div>
      </section>

      <section className="ons-section ons-section--paper">
        <div className="ons-container ons-faq-layout">
          <div className="ons-heading-block ons-heading-block--left">
            <div className="ons-pill"><span /> FAQ</div>
            <h2>The important questions, without a 30-page help article.</h2>
          </div>
          <div className="ons-faq-list">
            {FAQS.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}<span>+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="ons-section ons-section--cta">
        <div className="ons-container">
          <div className="ons-big-cta">
            <div>
              <div className="ons-pill ons-pill--dark"><span /> Basic is free</div>
              <h2>Give the business behind the listings one proper home.</h2>
              <p>Create an account, add your first stock and upgrade only if the business outgrows Basic.</p>
            </div>
            <div className="ons-actions">
              <a className="ons-btn ons-btn--light ons-btn--lg" href={`${APP_URL}/register`}>Create free account</a>
              <Link className="ons-btn ons-btn--outline-light ons-btn--lg" to="/support">Get support</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
