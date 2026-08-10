import { useEffect } from 'react'
import { SITE_NAME } from '../lib/site'

type PageMetaProps = {
  title: string
  description: string
}

export default function PageMeta({ title, description }: PageMetaProps) {
  useEffect(() => {
    document.title = title
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    meta.content = description
  }, [title, description])

  return null
}

export function pageTitle(page: string): string {
  return page ? `${page} — ${SITE_NAME}` : SITE_NAME
}
