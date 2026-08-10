export type Plan = {
  id: 'basic' | 'growing' | 'pro' | 'business'
  name: string
  tagline: string
  monthlyPrice: number
  highlighted?: boolean
  available: string[]
  planned?: string[]
}

export const ANNUAL_DISCOUNT = 0.05

/**
 * SellerHQ pricing, kept in sync with the live app's plan data
 * (SellerHQ/src/lib/plans.ts). Monthly prices in GBP.
 */
export const PLANS: Plan[] = [
  {
    id: 'basic',
    name: 'Basic',
    tagline: 'Everything you need to start reselling.',
    monthlyPrice: 0,
    available: [
      'Up to 50 products',
      '1 business',
      'Full inventory tracking & statuses',
      'Product photos, labels & QR codes',
      'Dashboard overview & key metrics',
      'Record sales & sold list',
      'Expense tracking',
      'Pricing calculator',
      'Basic UK tax estimate',
      'PWA app, mobile & dark mode',
      'CSV export (up to 100 rows)',
    ],
  },
  {
    id: 'growing',
    name: 'Growing',
    tagline: 'For sellers scaling up their stock.',
    monthlyPrice: 5.99,
    available: [
      'Everything in Basic',
      'Up to 500 products & 2 businesses',
      'Bundle sales',
      'Listings module & auto-relist',
      'Shipping status flow',
      'Sales analytics by marketplace & month',
      'Reports (P&L, inventory health)',
      'Forecasts (historical trend & predictions)',
      'Multi-currency support',
      'Mobile QR scanner',
      'Full CSV import & export',
      'Bundle templates',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'Advanced insights for serious sellers.',
    monthlyPrice: 10.99,
    highlighted: true,
    available: [
      'Everything in Growing',
      'Up to 5,000 products & 5 businesses',
      'Advanced forecasts & scenario planning',
      'Full UK tax (quarterly deadlines, filing)',
      'Advanced reports & stock ageing',
      'Low-stock & reorder alerts',
      'Cash-flow projection',
      'Custom product fields',
      'Full backup export',
      'Price ladder & profit optimisation',
      'Priority support',
    ],
  },
  {
    id: 'business',
    name: 'Business',
    tagline: 'For teams and multi-channel sellers.',
    monthlyPrice: 15.99,
    available: [
      'Everything in Pro',
      'Unlimited products & businesses',
      '5 team seats',
      'Business customization (logo & branding)',
      'Full audit log',
      'Accounting export',
      'QR relay: send phone scans to a laptop',
      'Priority support',
    ],
    planned: [
      'Marketplace API integrations',
      'API & webhooks',
      'White-label branding',
    ],
  },
]

export function annualPerMonth(monthlyPrice: number): number {
  return monthlyPrice * 12 * (1 - ANNUAL_DISCOUNT)
}

export function formatGbp(value: number): string {
  return `£${value.toFixed(2)}`
}
