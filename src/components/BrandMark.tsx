type BrandMarkProps = {
  inverted?: boolean
}

export default function BrandMark({ inverted = false }: BrandMarkProps) {
  return (
    <span
      className={inverted ? 'ons-brand ons-brand--inverted' : 'ons-brand'}
      aria-label="ONSoftware"
    >
      <span className="ons-brand__mark" aria-hidden="true">
        O
      </span>
      <span>ONSoftware</span>
    </span>
  )
}
