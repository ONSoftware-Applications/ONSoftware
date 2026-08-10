import PageMeta, { pageTitle } from '../components/PageMeta'
import Cta from '../components/Cta'
import { APP_URL } from '../lib/site'

export default function Account() {
  return (
    <>
      <PageMeta
        title={pageTitle('Account')}
        description="One ONSoftware account for every application — including SellerHQ."
      />

      <section className="ons-section">
        <div className="ons-container">
          <div className="ons-section-head ons-center">
            <p className="ons-eyebrow">Accounts</p>
            <h1 className="ons-h1">One account across the ecosystem</h1>
            <p className="ons-lead">
              The long-term direction for ONSoftware is a single account
              identity that works across every application — including SellerHQ.
            </p>
          </div>

          <div className="ons-account-map" aria-hidden="true">
            <div className="ons-account-node ons-account-node--root">
              <p className="ons-account-node__title">ONSoftware Account</p>
              <p className="ons-account-node__sub">Sign in once, use every product</p>
            </div>
            <div className="ons-account-connector" />
            <div className="ons-account-node">
              <p className="ons-account-node__title">SellerHQ</p>
              <p className="ons-account-node__sub">Reselling business management</p>
            </div>
            <div className="ons-account-connector" />
            <div className="ons-account-node">
              <p className="ons-account-node__title">Businesses</p>
              <p className="ons-account-node__sub">Managed inside SellerHQ</p>
            </div>
            <div className="ons-account-connector" />
            <div className="ons-account-node">
              <p className="ons-account-node__title">Business 1 · Business 2</p>
              <p className="ons-account-node__sub">Each with its own inventory, sales and team</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ons-section ons-section--soft">
        <div className="ons-container">
          <div className="ons-prose" style={{ maxWidth: '720px' }}>
            <h2>How accounts work today</h2>
            <p>
              Right now, SellerHQ has its own sign-in, powered by Supabase
              authentication. That keeps the live application simple and
              working while we grow the ecosystem.
            </p>
            <h2>Where this is heading</h2>
            <p>
              Central ONSoftware authentication is a platform-level project. As
              new applications launch, they’ll plug into one account identity,
              so you sign in once and move between products without separate
              logins.
            </p>
            <p>
              In the meantime, you can start using SellerHQ today with its own
              account — your data and progress will carry forward.
            </p>
          </div>
        </div>
      </section>

      <section className="ons-section">
        <div className="ons-container">
          <Cta
            title="Get started with SellerHQ"
            text="Your ONSoftware journey starts with one account — and one free plan."
          >
            <a className="ons-btn ons-btn--light ons-btn--lg" href={`${APP_URL}/register`}>
              Create your account →
            </a>
            <a className="ons-btn ons-btn--outline-light ons-btn--lg" href={`${APP_URL}/login`}>
              Sign in
            </a>
          </Cta>
        </div>
      </section>
    </>
  )
}
