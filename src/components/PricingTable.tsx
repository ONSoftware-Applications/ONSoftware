import { APP_URL } from '../lib/site'
import { ANNUAL_DISCOUNT, PLANS, annualPerMonth, formatGbp } from '../lib/plans'

export default function PricingTable() {
  return (
    <div className="ons-plans">
      {PLANS.map((plan) => {
        const annual = annualPerMonth(plan.monthlyPrice)
        return (
          <div
            className={plan.highlighted ? 'ons-plan ons-plan--highlighted' : 'ons-plan'}
            key={plan.id}
          >
            {plan.highlighted ? (
              <span className="ons-plan__flag">Most popular</span>
            ) : null}

            <h3 className="ons-plan__name">{plan.name}</h3>
            <p className="ons-plan__tagline">{plan.tagline}</p>

            <div className="ons-plan__price">
              <span className="ons-plan__amount">
                {plan.monthlyPrice === 0 ? 'Free' : formatGbp(plan.monthlyPrice)}
              </span>
              {plan.monthlyPrice !== 0 ? <span className="ons-plan__period">/mo</span> : null}
            </div>

            {plan.monthlyPrice !== 0 ? (
              <p className="ons-plan__annual">
                {formatGbp(annual)}/mo billed annually ({Math.round(ANNUAL_DISCOUNT * 100)}% off)
              </p>
            ) : (
              <p className="ons-plan__annual ons-plan__annual--zero">Free to start, upgrade anytime</p>
            )}

            <ul className="ons-plan__list">
              {plan.available.map((feature) => (
                <li className="ons-plan__item" key={feature}>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              className={
                plan.highlighted
                  ? 'ons-btn ons-btn--primary'
                  : 'ons-btn ons-btn--secondary'
              }
              href={`${APP_URL}/register`}
            >
              Start with {plan.name}
            </a>
          </div>
        )
      })}
    </div>
  )
}
