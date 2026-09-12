export type ProductStatus = 'live' | 'development' | 'planned'

export type Product = {
  slug: string
  name: string
  category: string
  tagline: string
  description: string
  status: ProductStatus
  href: string
  monogram: string
  logo?: string
  mark?: string
}

export const PRODUCTS: Product[] = [
  {
    slug: 'sellerhq',
    name: 'SellerHQ',
    category: 'Reselling business management',
    tagline: 'Inventory. Organize. Grow.',
    description:
      'A purpose-built back office for resellers: inventory, listings, sales, expenses, reporting, forecasting and UK tax estimates in one place.',
    status: 'live',
    href: '/products/sellerhq',
    monogram: 'SH',
    logo: '/brand/sellerhq-logo.webp',
    mark: '/brand/sellerhq-mark.webp',
  },
]

export const PRODUCT_ROADMAP = [
  {
    phase: 'Now',
    title: 'Launch and harden SellerHQ',
    description:
      'Focus on reliability, onboarding, support, billing clarity and feedback from real resellers after launch.',
  },
  {
    phase: 'Next',
    title: 'Deepen the SellerHQ workflow',
    description:
      'Improve the everyday path from stock intake through listings, sales, reporting and higher-volume operations based on real usage.',
  },
  {
    phase: 'Later',
    title: 'Expand into additional operational tools',
    description:
      'Use what ONSoftware learns from building and supporting SellerHQ to identify other repetitive business workflows worth solving.',
  },
] as const

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((product) => product.slug === slug)
}

export const LIVE_PRODUCTS = PRODUCTS.filter((product) => product.status === 'live')
export const FUTURE_PRODUCTS = PRODUCTS.filter((product) => product.status !== 'live')
