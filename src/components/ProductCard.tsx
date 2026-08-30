import { Link } from 'react-router-dom'
import type { Product } from '../lib/products'

type ProductCardProps = {
  product: Product
  featured?: boolean
}

export default function ProductCard({ product, featured = false }: ProductCardProps) {
  const isLive = product.status === 'live'

  return (
    <article className={featured ? 'ons-product ons-product--featured' : 'ons-product'}>
      <div className="ons-product__top">
        <span className="ons-product__logo" aria-hidden="true">
          {product.mark ? <img src={product.mark} alt="" /> : product.monogram}
        </span>
        {isLive ? (
          <span className="ons-badge ons-badge--live">
            <span className="ons-badge__dot" aria-hidden="true" />
            Available now
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
            Explore {product.name}
          </Link>
        ) : (
          <span className="ons-product__soon">Not yet available</span>
        )}
        {isLive ? (
          <Link to={product.href} className="ons-product__tagline">
            Product details →
          </Link>
        ) : null}
      </div>
    </article>
  )
}
