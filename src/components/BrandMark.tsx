import { BRAND_ASSETS } from '../lib/site'

type BrandMarkProps = {
  inverted?: boolean
}

export default function BrandMark({ inverted = false }: BrandMarkProps) {
  return (
    <span
      className={inverted ? 'ons-brand ons-brand--inverted' : 'ons-brand'}
      aria-label="ONSoftware"
    >
      <img className="ons-brand__mark" src={BRAND_ASSETS.mark} alt="" />
      <span className="ons-brand__name">ONSoftware</span>
    </span>
  )
}
