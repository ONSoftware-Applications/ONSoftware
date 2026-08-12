# ONSoftware

The ONSoftware company and product hub — a React + Vite + TypeScript website
that introduces ONSoftware and its applications (starting with SellerHQ).

## Development

```bash
npm install
npm run dev       # start the dev server
npm run build     # type-check + production build
npm run lint      # oxlint
npm run typecheck # tsc -b
```

## Structure

- `src/pages/` — one component per route
- `src/components/` — shared UI (Layout, BrandMark, Icon, Faq, etc.)
- `src/lib/` — data + config (`site.ts` holds URLs and contact email)
- `public/` — logo, favicon, robots.txt, sitemap.xml
- `vercel.json` — SPA rewrite + security headers

## URLs and contact

- Hub: `https://onsoftware.uk`
- SellerHQ app: `https://sellerhq.onsoftware.uk`
- Contact email: `adminonsoftware@gmail.com`

All of these are configured in `src/lib/site.ts` so they can be changed in one
place.

## Deploy

The site is deployed on Vercel with an SPA rewrite (`/(.*)` → `/index.html`)
so client-side routes work on refresh and deep links.
