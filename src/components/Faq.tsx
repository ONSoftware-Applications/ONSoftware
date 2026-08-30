export type FaqItem = {
  question: string
  answer: string
}

type FaqProps = {
  items: FaqItem[]
}

export default function Faq({ items }: FaqProps) {
  return (
    <div className="ons-faq">
      {items.map((item, index) => (
        <details key={item.question} open={index === 0}>
          <summary>{item.question}</summary>
          <div className="ons-faq__answer"><p>{item.answer}</p></div>
        </details>
      ))}
    </div>
  )
}
