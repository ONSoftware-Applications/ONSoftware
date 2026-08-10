import { Link } from 'react-router-dom'
import PageMeta, { pageTitle } from '../components/PageMeta'
import Cta from '../components/Cta'
import { SITE_TAGLINE } from '../lib/site'

const VALUES = [
  {
    title: 'Solve real problems',
    text: 'We build software for things people actually do — not trends. If a tool doesn’t make life simpler, we don’t build it.',
  },
  {
    title: 'Keep it practical',
    text: 'Every feature earns its place. We’d rather have ten features people use than a hundred they ignore.',
  },
  {
    title: 'Be honest',
    text: 'Clear pricing, straightforward terms and no dark patterns. Your data is yours, always.',
  },
  {
    title: 'Stay accessible',
    text: 'Small businesses shouldn’t need enterprise budgets. Practical software should be within reach.',
  },
]

export default function About() {
  return (
    <>
      <PageMeta
        title={pageTitle('About')}
        description="About ONSoftware — a small software company building practical applications for independent businesses and individuals."
      />

      <section className="ons-section">
        <div className="ons-container">
          <div className="ons-prose">
            <p className="ons-eyebrow">About ONSoftware</p>
            <h1>Building software that makes business simpler</h1>
            <p className="ons-lead">{SITE_TAGLINE}</p>
          </div>
        </div>
      </section>

      <section className="ons-section ons-section--tight">
        <div className="ons-container">
          <div className="ons-prose">
            <p>
              ONSoftware is a small software company. We develop practical
              applications designed around real-world problems — starting with
              the reselling business, where sellers juggle inventory, sales,
              expenses and taxes across multiple marketplaces.
            </p>
            <p>
              Our first application, <Link to="/products/sellerhq">SellerHQ</Link>,
              is live. More applications are in development, and every one is
              built on the same idea: give people a clear, reliable tool that
              does one job properly.
            </p>
            <h2>Why we build software</h2>
            <p>
              Most small-business owners don’t want software. They want the
              problem solved. That’s why we focus on practical, accessible
              tools — things you can start using in minutes, that quietly save
              you hours, and that you can trust with the day-to-day running of
              your business.
            </p>
            <h2>How we work</h2>
            <ul>
              <li>We build in the open, product by product, and keep tools simple.</li>
              <li>We listen to the people who use our software and iterate.</li>
              <li>We’re honest about what exists and what’s still being built.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="ons-section ons-section--soft">
        <div className="ons-container">
          <div className="ons-section-head ons-center">
            <p className="ons-eyebrow">What we stand for</p>
            <h2 className="ons-h2">Our approach to product development</h2>
          </div>
          <div className="ons-feature-grid">
            {VALUES.map((value) => (
              <div className="ons-card" key={value.title}>
                <h3 className="ons-card__title ons-h3">{value.title}</h3>
                <p className="ons-card__text">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container">
          <Cta
            title="See what we’ve built"
            text="The best way to understand ONSoftware is to try it. SellerHQ is live and free to start."
          >
            <Link className="ons-btn ons-btn--light ons-btn--lg" to="/products">
              Explore our products →
            </Link>
          </Cta>
        </div>
      </section>
    </>
  )
}
