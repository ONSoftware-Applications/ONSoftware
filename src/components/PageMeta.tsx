import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { BRAND_ASSETS, SITE_NAME, SITE_URL } from '../lib/site'

type PageMetaProps = {
  title: string
  description: string
  image?: string
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let meta = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute(attr, key)
    document.head.appendChild(meta)
  }
  meta.setAttribute('content', content)
}

function absoluteAssetUrl(asset: string): string {
  if (asset.startsWith('http://') || asset.startsWith('https://')) return asset
  return `${SITE_URL}${asset.startsWith('/') ? asset : `/${asset}`}`
}

export default function PageMeta({ title, description, image = BRAND_ASSETS.logo }: PageMetaProps) {
  const { pathname } = useLocation()

  useEffect(() => {
    const imageUrl = absoluteAssetUrl(image)

    document.title = title

    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:url', `${SITE_URL}${pathname}`)
    upsertMeta('property', 'og:image', imageUrl)
    upsertMeta('property', 'og:image:alt', title)
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', imageUrl)

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', `${SITE_URL}${pathname}`)
  }, [title, description, image, pathname])

  return null
}

export function pageTitle(page: string): string {
  return page ? `${page} — ${SITE_NAME}` : SITE_NAME
}
