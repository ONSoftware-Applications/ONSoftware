import { useState } from 'react'

export type FaqItem = {
  question: string
  answer: string
}

type FaqProps = {
  items: FaqItem[]
}

export default function Faq({ items }: FaqProps) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="ons-faq">
      {items.map((item, index) => {
        const isOpen = open === index
        return (
          <div
            className="ons-faq__item"
            key={item.question}
            data-open={isOpen}
          >
            <button
              type="button"
              className="ons-faq__q"
              onClick={() => setOpen(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              {item.question}
              <span className="ons-faq__icon" aria-hidden="true" />
            </button>
            {isOpen ? (
              <p className="ons-faq__a">{item.answer}</p>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
