import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import PageMeta, { pageTitle } from '../components/PageMeta'
import Cta from '../components/Cta'

const VALUES = [
  { icon: 'target' as const, title: 'Specific beats generic', text: 'A product should know who it is for, what job it owns and where its responsibility ends.' },
  { icon: 'wrench' as const, title: 'Workflows before feature lists', text: 'We design around sequences of real tasks so features connect into something people can actually run a business with.' },
  { icon: 'lock' as const, title: 'Trust is a product feature', text: 'Clear pricing, honest release status and portable data matter as much as dashboards and buttons.' },
  { icon: 'lightbulb' as const, title: 'Small software can still be serious', text: 'Independent businesses deserve reliable tools without enterprise pricing, enterprise complexity or unnecessary ceremony.' },
]

export default function About() {
  return (
    <>
      <PageMeta title={pageTitle('About')} description="About ONSoftware: a UK product company building focused software for independent businesses and practical everyday workflows." />

      <section className="ons-hero">
        <div className="ons-container" style={{ maxWidth: '950px' }}>
          <p className="ons-eyebrow">Company</p>
          <h1 className="ons-h1">ONSoftware exists to make useful software feel smaller, clearer and more intentional.</h1>
          <p className="ons-hero__lead">We build focused applications for independent businesses and people who need to manage real work without adopting an oversized enterprise stack.</p>
        </div>
      </section>

      <section className="ons-section ons-section--soft">
        <div className="ons-container ons-showcase">
          <div>
            <p className="ons-eyebrow">The model</p>
            <h2 className="ons-h2">One company. Distinct products.</h2>
          </div>
          <div className="ons-prose">
            <p>ONSoftware is the company and product hub. Individual applications such as <Link to="/products/sellerhq">SellerHQ</Link> solve their own problems, run on their own product surfaces and can evolve without turning the ONSoftware website into the application itself.</p>
            <p>That structure matters because the product family is intended to grow. The hub should explain what exists, what each product does and where to go next. The application should do the work.</p>
          </div>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container">
          <div className="ons-section-head ons-center"><p className="ons-eyebrow">Principles</p><h2 className="ons-h2">What every ONSoftware product should have in common.</h2></div>
          <div className="ons-feature-grid">
            {VALUES.map((value) => (
              <article className="ons-card" key={value.title}>
                <div className="ons-card__icon" aria-hidden="true"><Icon name={value.icon} size={22} /></div>
                <h3 className="ons-card__title ons-h3">{value.title}</h3>
                <p className="ons-card__text">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ons-section ons-section--soft">
        <div className="ons-container">
          <div className="ons-section-head"><p className="ons-eyebrow">Product lifecycle</p><h2 className="ons-h2">Planned should mean planned. Live should mean usable.</h2></div>
          <div className="ons-steps">
            <div className="ons-step"><span className="ons-step__num">1</span><h3 className="ons-step__title ons-h3">Find the workflow</h3><p className="ons-step__text">Start from a real operational problem with a clear user and repeatable job.</p></div>
            <div className="ons-step"><span className="ons-step__num">2</span><h3 className="ons-step__title ons-h3">Build the core</h3><p className="ons-step__text">Create the smallest product that can own that workflow coherently.</p></div>
            <div className="ons-step"><span className="ons-step__num">3</span><h3 className="ons-step__title ons-h3">Make it dependable</h3><p className="ons-step__text">Refine edge cases, data handling, mobile use, support and the boring parts that make software trustworthy.</p></div>
            <div className="ons-step"><span className="ons-step__num">4</span><h3 className="ons-step__title ons-h3">Grow deliberately</h3><p className="ons-step__text">Add depth when the workflow needs it, or create a separate product when the problem is genuinely different.</p></div>
          </div>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container">
          <Cta title="See the product model in practice" text="SellerHQ is the first live ONSoftware application and the current example of how the wider product family is intended to work.">
            <Link className="ons-btn ons-btn--light ons-btn--lg" to="/products/sellerhq">Explore SellerHQ →</Link>
            <Link className="ons-btn ons-btn--outline-light ons-btn--lg" to="/products">View product roadmap</Link>
          </Cta>
        </div>
      </section>
    </>
  )
}
