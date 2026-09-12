import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'

const DIST_DIR = 'dist'
const SITE_URL = 'https://onsoftware.uk'
const SELLERHQ_IMAGE = `${SITE_URL}/brand/sellerhq-logo.webp`

const routes = [
  {
    path: '/products/sellerhq',
    title: 'SellerHQ — ONSoftware',
    description: 'SellerHQ by ONSoftware is a reselling back office for inventory, listings, sales, expenses, reporting, forecasting and UK tax estimates.',
    imageAlt: 'SellerHQ — Inventory. Organize. Grow.',
  },
  {
    path: '/products/sellerhq/pricing',
    title: 'SellerHQ pricing — ONSoftware',
    description: 'SellerHQ pricing: every account starts on free Basic, with Growing, Pro and Business upgrades available from inside SellerHQ.',
    imageAlt: 'SellerHQ pricing — start free on Basic and upgrade inside SellerHQ.',
  },
]

const sellerHqSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'SellerHQ',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: 'https://sellerhq.onsoftware.uk',
  description: 'A reselling back office for inventory, listings, sales, expenses, reporting, forecasting and UK tax estimates.',
  publisher: {
    '@type': 'Organization',
    name: 'ONSoftware',
    url: SITE_URL,
  },
  offers: [
    { '@type': 'Offer', name: 'Basic', price: '0.00', priceCurrency: 'GBP' },
    { '@type': 'Offer', name: 'Growing', price: '5.99', priceCurrency: 'GBP' },
    { '@type': 'Offer', name: 'Pro', price: '10.99', priceCurrency: 'GBP' },
    { '@type': 'Offer', name: 'Business', price: '15.99', priceCurrency: 'GBP' },
  ],
}

function replaceOrInsert(html, pattern, replacement) {
  if (pattern.test(html)) return html.replace(pattern, replacement)
  return html.replace('</head>', `  ${replacement}\n  </head>`)
}

function applyRouteMeta(baseHtml, route) {
  const canonical = `${SITE_URL}${route.path}`
  let html = baseHtml

  html = replaceOrInsert(html, /<title>[^<]*<\/title>/i, `<title>${route.title}</title>`)
  html = replaceOrInsert(html, /<meta\s+name=["']description["'][^>]*>/i, `<meta name="description" content="${route.description}" />`)
  html = replaceOrInsert(html, /<link\s+rel=["']canonical["'][^>]*>/i, `<link rel="canonical" href="${canonical}" />`)
  html = replaceOrInsert(html, /<meta\s+property=["']og:title["'][^>]*>/i, `<meta property="og:title" content="${route.title}" />`)
  html = replaceOrInsert(html, /<meta\s+property=["']og:description["'][^>]*>/i, `<meta property="og:description" content="${route.description}" />`)
  html = replaceOrInsert(html, /<meta\s+property=["']og:url["'][^>]*>/i, `<meta property="og:url" content="${canonical}" />`)
  html = replaceOrInsert(html, /<meta\s+property=["']og:image["'][^>]*>/i, `<meta property="og:image" content="${SELLERHQ_IMAGE}" />`)
  html = replaceOrInsert(html, /<meta\s+property=["']og:image:alt["'][^>]*>/i, `<meta property="og:image:alt" content="${route.imageAlt}" />`)
  html = replaceOrInsert(html, /<meta\s+name=["']twitter:card["'][^>]*>/i, '<meta name="twitter:card" content="summary_large_image" />')
  html = replaceOrInsert(html, /<meta\s+name=["']twitter:title["'][^>]*>/i, `<meta name="twitter:title" content="${route.title}" />`)
  html = replaceOrInsert(html, /<meta\s+name=["']twitter:description["'][^>]*>/i, `<meta name="twitter:description" content="${route.description}" />`)
  html = replaceOrInsert(html, /<meta\s+name=["']twitter:image["'][^>]*>/i, `<meta name="twitter:image" content="${SELLERHQ_IMAGE}" />`)

  const schemaTag = `<script type="application/ld+json">${JSON.stringify(sellerHqSchema)}</script>`
  html = html.replace('</head>', `  ${schemaTag}\n  </head>`)

  return html
}

const baseHtml = await readFile(join(DIST_DIR, 'index.html'), 'utf8')

for (const route of routes) {
  const outputPath = join(DIST_DIR, route.path.replace(/^\//, ''), 'index.html')
  await mkdir(dirname(outputPath), { recursive: true })
  await writeFile(outputPath, applyRouteMeta(baseHtml, route), 'utf8')
}
