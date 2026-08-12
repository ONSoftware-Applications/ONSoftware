type BrandMarkProps = {
  inverted?: boolean
}

export default function BrandMark({ inverted = false }: BrandMarkProps) {
  return (
    <span
      className={inverted ? 'ons-brand ons-brand--inverted' : 'ons-brand'}
      aria-label="ONSoftware"
    >
      <img className="ons-brand__mark" src="/logo.svg" alt="" />
      <span>ONSoftware</span>
    </span>
  )
}
