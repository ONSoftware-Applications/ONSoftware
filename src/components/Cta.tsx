import type { ReactNode } from 'react'

type CtaProps = {
  title: string
  text: string
  children?: ReactNode
}

export default function Cta({ title, text, children }: CtaProps) {
  return (
    <div className="ons-cta">
      <h2>{title}</h2>
      <p>{text}</p>
      {children ? <div className="ons-cta__actions">{children}</div> : null}
    </div>
  )
}
