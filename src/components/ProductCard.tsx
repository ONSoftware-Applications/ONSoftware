import { Link } from 'react-router-dom'
import type { Product } from '../lib/products'

type ProductCardProps = {
  product: Product
  featured?: boolean
}

export default function ProductCard({ product, featured = false }: ProductCardProps) {
  const isLive = product.status === 'live'

  return (
    <article
      className={featured ? 'ons-product ons-product--featured' : 'ons-product'}
    >
      <div className="ons-product__top">
        <span
          className={`ons-product__logo${product.accentClass ?? ''}`}
          aria-hidden="true"
        >
          {product.monogram}
        </span>
        {isLive ? (
          <span className="ons-badge ons-badge--live">
            <span className="ons-badge__dot" aria-hidden="true" />
            Live
          </span>
        ) : (
          <span className="ons-badge ons-badge--soon">In development</span>
        )}
      </div>

      <h3 className="ons-product__title ons-h3">{product.name}</h3>
      <p className="ons-product__tagline">{product.tagline}</p>
      <p className="ons-product__desc">{product.description}</p>

      <div className="ons-product__foot">
        {isLive ? (
          <Link className="ons-btn ons-btn--primary ons-btn--sm" to={product.href}>
            Open SellerHQ
          </Link>
        ) : (
          <span className="ons-product__soon">Coming soon</span>
        )}
        {isLive ? (
          <Link to={product.href} className="ons-product__tagline">
            Learn more →
          </Link>
        ) : null}
      </div>
    </article>
  )
}
