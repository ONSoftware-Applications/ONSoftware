import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE_NAME, SITE_URL } from '../lib/site'

type PageMetaProps = {
  title: string
  description: string
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

export default function PageMeta({ title, description }: PageMetaProps) {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = title

    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:url', `${SITE_URL}${pathname}`)
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', `${SITE_URL}${pathname}`)
  }, [title, description, pathname])

  return null
}

export function pageTitle(page: string): string {
  return page ? `${page} — ${SITE_NAME}` : SITE_NAME
}
