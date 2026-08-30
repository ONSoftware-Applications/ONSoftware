export type ProductUpdate = {
  date: string
  title: string
  product: 'ONSoftware' | 'SellerHQ'
  summary: string
  details: string[]
}

export const UPDATES: ProductUpdate[] = [
  {
    date: '30 August 2026',
    title: 'ONSoftware launch hub prepared for SellerHQ',
    product: 'ONSoftware',
    summary:
      'The ONSoftware hub has been rebuilt around the real brand, product ownership, launch support and a clearer legal structure.',
    details: [
      'Introduced the production ONSoftware and SellerHQ brand assets.',
      'Separated company-level information from SellerHQ product accounts and billing.',
      'Added launch-focused legal, security, support and product information.',
      'Removed speculative named products from the public roadmap.',
    ],
  },
  {
    date: 'August 2026',
    title: 'SellerHQ launch feature set',
    product: 'SellerHQ',
    summary:
      'SellerHQ enters launch with four plans ranging from a free Basic tier to Business, with the operational features already represented in the live application.',
    details: [
      'Inventory, product photos, labels, QR codes, sales and expenses on Basic.',
      'Listings, reports, forecasts, bundles, multi-currency and mobile QR scanning on Growing.',
      'Advanced forecasts, tax tools, cash-flow, stock ageing and custom fields on Pro.',
      'Team seats, audit log, business branding, accounting export, QR relay and Till Mode on Business.',
    ],
  },
]
