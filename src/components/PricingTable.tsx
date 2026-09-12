import { APP_URL } from '../lib/site'
import {
  ANNUAL_DISCOUNT,
  PLANS,
  annualMonthlyEquivalent,
  annualTotal,
  formatGbp,
} from '../lib/plans'

const CARD_FEATURES: Record<(typeof PLANS)[number]['id'], string[]> = {
  basic: [
    'Up to 50 products and 1 business',
    'Inventory, photos, labels and QR codes',
    'Sales and expense tracking',
    'Dashboard metrics and pricing calculator',
    'Basic UK tax estimate',
    'CSV export and installable web app',
  ],
  growing: [
    'Up to 500 products and 2 businesses',
    'Listings, shipping and auto-relist workflows',
    'Bundle sales and reusable bundle templates',
    'Reports, sales analytics and forecasts',
    'Multi-currency and mobile QR scanning',
    'Full CSV import and export',
  ],
  pro: [
    'Up to 5,000 products and 5 businesses',
    'Advanced forecasts and scenario planning',
    'Full UK tax tools',
    'Stock ageing, low-stock alerts and cash-flow projection',
    'Custom product fields and full backup export',
    'Priority support',
  ],
  business: [
    'Unlimited products and businesses',
    '5 team seats and a full audit log',
    'Business branding and accounting export',
    'QR relay from phone to laptop',
    'Till Mode for in-person selling',
    'Priority support',
  ],
}

const COMPARISON_ROWS = [
  { feature: 'Products', values: ['50', '500', '5,000', 'Unlimited'] },
  { feature: 'Businesses', values: ['1', '2', '5', 'Unlimited'] },
  { feature: 'Inventory, photos, labels & QR codes', values: ['Included', 'Included', 'Included', 'Included'] },
  { feature: 'Sales & expense tracking', values: ['Included', 'Included', 'Included', 'Included'] },
  { feature: 'Basic UK tax estimate', values: ['Included', 'Included', 'Included', 'Included'] },
  { feature: 'Listings & shipping workflows', values: ['—', 'Included', 'Included', 'Included'] },
  { feature: 'Bundle sales & templates', values: ['—', 'Included', 'Included', 'Included'] },
  { feature: 'Reports & forecasts', values: ['Dashboard only', 'Standard', 'Advanced', 'Advanced'] },
  { feature: 'Multi-currency', values: ['—', 'Included', 'Included', 'Included'] },
  { feature: 'Mobile QR scanner', values: ['—', 'Included', 'Included', 'Included'] },
  { feature: 'Full UK tax tools', values: ['—', '—', 'Included', 'Included'] },
  { feature: 'Cash-flow & stock ageing', values: ['—', '—', 'Included', 'Included'] },
  { feature: 'Custom fields & full backup export', values: ['—', '—', 'Included', 'Included'] },
  { feature: 'Team seats', values: ['—', '—', '—', '5'] },
  { feature: 'Audit log & accounting export', values: ['—', '—', '—', 'Included'] },
  { feature: 'QR relay & Till Mode', values: ['—', '—', '—', 'Included'] },
]

export default function PricingTable() {
  return (
    <>
      <div className="ons-plans">
        {PLANS.map((plan) => {
          const annual = annualTotal(plan.monthlyPrice)
          const equivalent = annualMonthlyEquivalent(plan.monthlyPrice)

          return (
            <article
              className={plan.highlighted ? 'ons-plan ons-plan--highlighted' : 'ons-plan'}
              key={plan.id}
            >
              {plan.highlighted ? <span className="ons-plan__flag">Most popular</span> : null}

              <h3 className="ons-plan__name">{plan.name}</h3>
              <p className="ons-plan__tagline">{plan.tagline}</p>

              <div className="ons-plan__price">
                <span className="ons-plan__amount">
                  {plan.monthlyPrice === 0 ? 'Free' : formatGbp(plan.monthlyPrice)}
                </span>
                {plan.monthlyPrice !== 0 ? <span className="ons-plan__period">/month</span> : null}
              </div>

              {plan.monthlyPrice !== 0 ? (
                <p className="ons-plan__annual">
                  Annual: {formatGbp(annual)}/year · {formatGbp(equivalent)}/month equivalent · {Math.round(ANNUAL_DISCOUNT * 100)}% saving
                </p>
              ) : (
                <p className="ons-plan__annual ons-plan__annual--zero">No payment card required to start</p>
              )}

              <ul className="ons-plan__list">
                {CARD_FEATURES[plan.id].map((feature) => (
                  <li className="ons-plan__item" key={feature}>{feature}</li>
                ))}
              </ul>

              <a
                className={plan.highlighted ? 'ons-btn ons-btn--primary' : 'ons-btn ons-btn--secondary'}
                href={`${APP_URL}/register`}
              >
                Start free on Basic
              </a>
              {plan.monthlyPrice !== 0 ? (
                <p className="ons-plan__annual">Upgrade to {plan.name} from Billing inside SellerHQ when you are ready.</p>
              ) : null}
            </article>
          )
        })}
      </div>

      <div style={{ marginTop: 48 }}>
        <div className="ons-section-head ons-center" style={{ marginBottom: 24 }}>
          <p className="ons-eyebrow">Full comparison</p>
          <h3 className="ons-h2">Compare the limits and deeper tools.</h3>
        </div>
        <div style={{ overflowX: 'auto', border: '1px solid var(--ons-line)', borderRadius: 'var(--ons-radius-lg)', background: 'var(--ons-surface)' }}>
          <table style={{ width: '100%', minWidth: 760, borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ padding: '18px 20px', textAlign: 'left', borderBottom: '1px solid var(--ons-line)' }}>Feature</th>
                {PLANS.map((plan) => (
                  <th key={plan.id} style={{ padding: '18px 16px', textAlign: 'left', borderBottom: '1px solid var(--ons-line)' }}>{plan.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row) => (
                <tr key={row.feature}>
                  <th scope="row" style={{ padding: '15px 20px', textAlign: 'left', borderBottom: '1px solid var(--ons-line)', color: 'var(--ons-ink)' }}>{row.feature}</th>
                  {row.values.map((value, index) => (
                    <td key={`${row.feature}-${PLANS[index].id}`} style={{ padding: '15px 16px', borderBottom: '1px solid var(--ons-line)', color: 'var(--ons-ink-soft)' }}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
