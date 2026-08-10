export type ProductStatus = 'live' | 'development' | 'planned'

export type Product = {
  slug: string
  name: string
  category: string
  tagline: string
  description: string
  status: ProductStatus
  href: string
  /** CSS background used for the product tile monogram. */
  accentClass?: string
  monogram: string
}

export const PRODUCTS: Product[] = [
  {
    slug: 'sellerhq',
    name: 'SellerHQ',
    category: 'Reselling business management',
    tagline: 'Reselling business management',
    description:
      'Manage inventory, listings, sales, expenses and business finances in one place. Built for resellers on eBay, Vinted, Etsy and Depop.',
    status: 'live',
    href: '/products/sellerhq',
    accentClass: 'ons-product__logo--amber',
    monogram: 'SH',
  },
  {
    slug: 'coming-soon-1',
    name: 'ONSoftware Inbox',
    category: 'Personal admin',
    tagline: 'Coming soon',
    description:
      'A practical tool for keeping personal and business correspondence organised. In early design.',
    status: 'planned',
    href: '/products',
    monogram: 'OI',
  },
  {
    slug: 'coming-soon-2',
    name: 'ONSoftware Orders',
    category: 'Order management',
    tagline: 'Coming soon',
    description:
      'A lightweight order management tool for sellers and small retailers. Being scoped for a future release.',
    status: 'planned',
    href: '/products',
    monogram: 'OO',
  },
  {
    slug: 'coming-soon-3',
    name: 'ONSoftware Ledger',
    category: 'Personal & small business finance',
    tagline: 'Coming soon',
    description:
      'Simple bookkeeping for sole traders and side hustles. Planned as part of the ONSoftware ecosystem.',
    status: 'planned',
    href: '/products',
    monogram: 'OL',
  },
]

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((product) => product.slug === slug)
}

export const LIVE_PRODUCTS = PRODUCTS.filter((product) => product.status === 'live')
export const FUTURE_PRODUCTS = PRODUCTS.filter((product) => product.status !== 'live')
