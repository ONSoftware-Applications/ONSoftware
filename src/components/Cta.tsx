import type { ReactNode } from 'react'

type CtaProps = {
  title: string
  text: string
  children?: ReactNode
}

export default function Cta({ title, text, children }: CtaProps) {
  return (
    <div className="ons-cta">
      <div className="ons-cta__content">
        <div>
          <h2 className="ons-cta__title ons-h2">{title}</h2>
          <p className="ons-cta__text">{text}</p>
        </div>
        {children ? <div className="ons-cta__actions">{children}</div> : null}
      </div>
    </div>
  )
}
