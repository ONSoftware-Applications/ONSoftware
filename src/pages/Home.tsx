import { Link } from 'react-router-dom'
import PageMeta, { pageTitle } from '../components/PageMeta'
import { APP_URL, BRAND_ASSETS, SITE_DESCRIPTION } from '../lib/site'

const PRINCIPLES = [
  {
    number: '01',
    title: 'Useful before impressive.',
    text: 'We start with a real workflow, remove the repeated admin around it and only add complexity when it earns its place.',
  },
  {
    number: '02',
    title: 'Automation you can understand.',
    text: 'Good software should quietly remove duplicated work without making the underlying process impossible to inspect or control.',
  },
  {
    number: '03',
    title: 'Your data stays useful.',
    text: 'Operational records should help you make decisions and remain portable when you need them somewhere else.',
  },
]

const WORKFLOW = [
  ['01', 'Buy stock', 'Create one product record with cost, source and details.'],
  ['02', 'List it', 'Track where the item is listed and what state it is in.'],
  ['03', 'Sell it', 'Record revenue, fees, bundles, shipping and status changes.'],
  ['04', 'Know the numbers', 'Turn the same records into profit, reports, forecasts and tax estimates.'],
]

export default function Home() {
  return (
    <>
      <PageMeta title={pageTitle('')} description={SITE_DESCRIPTION} />

      <section className="ons-home-hero">
        <div className="ons-home-hero__glow" aria-hidden="true" />
        <div className="ons-container ons-home-hero__grid">
          <div className="ons-home-hero__copy">
            <div className="ons-pill ons-pill--dark"><span /> Independent software studio · UK</div>
            <h1>Software for the <span>work behind the work.</span></h1>
            <p>
              ONSoftware builds focused business tools that replace scattered spreadsheets, repeated admin and manual tracking with one calmer system.
            </p>
            <div className="ons-actions">
              <Link className="ons-btn ons-btn--primary ons-btn--lg" to="/products/sellerhq">Meet SellerHQ</Link>
              <a className="ons-btn ons-btn--glass ons-btn--lg" href={`${APP_URL}/login`}>Open SellerHQ ↗</a>
            </div>
            <div className="ons-home-hero__meta" aria-label="ONSoftware principles">
              <span>Purpose-built</span>
              <span>Portable data</span>
              <span>Clear pricing</span>
            </div>
          </div>

          <div className="ons-orbit" aria-label="ONSoftware product system visual">
            <div className="ons-orbit__brand">
              <img src={BRAND_ASSETS.logo} alt="ONSoftware — Tools. Automate. Succeed." />
            </div>
            <div className="ons-orbit__product">
              <div className="ons-orbit__product-head">
                <img src={BRAND_ASSETS.sellerHqMark} alt="" />
                <div><strong>SellerHQ</strong><span>Live product</span></div>
              </div>
              <div className="ons-orbit__rows">
                <span><i /> Inventory</span>
                <span><i /> Sales</span>
                <span><i /> Expenses</span>
                <span><i /> Reports</span>
              </div>
            </div>
            <div className="ons-orbit__chip ons-orbit__chip--one">One source of truth</div>
            <div className="ons-orbit__chip ons-orbit__chip--two">Less repeated admin</div>
          </div>
        </div>
      </section>

      <section className="ons-strip">
        <div className="ons-container ons-strip__inner">
          <span className="ons-strip__label">What ONSoftware is</span>
          <p>A small product studio building serious tools one operational problem at a time.</p>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container ons-product-feature">
          <div className="ons-product-feature__visual">
            <div className="ons-window">
              <div className="ons-window__bar">
                <div className="ons-window__dots"><span /><span /><span /></div>
                <span>sellerhq.onsoftware.uk</span>
              </div>
              <div className="ons-window__body">
                <div className="ons-window__sidebar">
                  <img src={BRAND_ASSETS.sellerHqMark} alt="" />
                  <span className="is-active" />
                  <span />
                  <span />
                  <span />
                </div>
                <div className="ons-window__content">
                  <div className="ons-window__eyebrow">Overview</div>
                  <div className="ons-window__headline">£2,418.60</div>
                  <div className="ons-window__sub">Net profit this period</div>
                  <div className="ons-window__stats">
                    <div><span>Stock</span><strong>184</strong></div>
                    <div><span>Listed</span><strong>129</strong></div>
                    <div><span>Sold</span><strong>47</strong></div>
                  </div>
                  <div className="ons-window__chart" aria-hidden="true">
                    <i style={{ height: '34%' }} /><i style={{ height: '52%' }} /><i style={{ height: '44%' }} /><i style={{ height: '70%' }} /><i style={{ height: '63%' }} /><i style={{ height: '88%' }} /><i style={{ height: '76%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ons-product-feature__copy">
            <div className="ons-pill"><span /> Flagship product</div>
            <img className="ons-product-feature__logo" src={BRAND_ASSETS.sellerHqLogo} alt="SellerHQ — Inventory. Organize. Grow." />
            <h2>The back office resellers usually build by accident.</h2>
            <p>
              SellerHQ brings inventory, listings, sales, expenses, reports, forecasts and UK tax estimates into one connected workflow — without turning a small business into an enterprise IT project.
            </p>
            <div className="ons-actions">
              <Link className="ons-btn ons-btn--primary" to="/products/sellerhq">Explore SellerHQ</Link>
              <a className="ons-text-link" href={`${APP_URL}/register`}>Start free →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="ons-section ons-section--paper">
        <div className="ons-container">
          <div className="ons-heading-block">
            <div className="ons-pill"><span /> How we build</div>
            <h2>Less software theatre. More useful systems.</h2>
            <p>ONSoftware is deliberately narrow: solve a problem properly, make the product dependable, then decide what deserves to come next.</p>
          </div>

          <div className="ons-principle-grid">
            {PRINCIPLES.map((item) => (
              <article className="ons-principle" key={item.number}>
                <span className="ons-principle__number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container ons-workflow-section">
          <div className="ons-heading-block ons-heading-block--left">
            <div className="ons-pill"><span /> Product thinking</div>
            <h2>Enter information once. Use it everywhere.</h2>
            <p>SellerHQ is a good example of the kind of system we want to build: each normal action improves the records you need later.</p>
          </div>
          <div className="ons-workflow">
            {WORKFLOW.map(([number, title, text]) => (
              <div className="ons-workflow__item" key={number}>
                <span>{number}</span>
                <div><strong>{title}</strong><p>{text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ons-section ons-section--cta">
        <div className="ons-container">
          <div className="ons-big-cta">
            <div>
              <div className="ons-pill ons-pill--dark"><span /> Available now</div>
              <h2>Start with the product that already exists.</h2>
              <p>SellerHQ Basic is free. No payment card is required to get started.</p>
            </div>
            <div className="ons-actions">
              <a className="ons-btn ons-btn--light ons-btn--lg" href={`${APP_URL}/register`}>Create free account</a>
              <Link className="ons-btn ons-btn--outline-light ons-btn--lg" to="/products/sellerhq">See what it does</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
