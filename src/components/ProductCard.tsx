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
        <span
          className={`ons-product__logo ${product.accentClass ?? ''}`.trim()}
          aria-hidden="true"
        >
          {product.monogram}
        </span>
        {isLive ? (
          <span className="ons-badge ons-badge--live">
            <span className="ons-badge__dot" aria-hidden="true" />
            Live now
          </span>
        ) : (
          <span className="ons-badge ons-badge--soon">Roadmap</span>
        )}
      </div>

      <h3 className="ons-product__title ons-h3">{product.name}</h3>
      <p className="ons-product__tagline">{product.category}</p>
      <p className="ons-product__desc">{product.description}</p>

      <div className="ons-product__foot">
        {isLive ? (
          <>
            <Link className="ons-btn ons-btn--primary ons-btn--sm" to={product.href}>
              Explore {product.name}
            </Link>
            <Link to={product.href} className="ons-product__tagline">
              Product details →
            </Link>
          </>
        ) : (
          <span className="ons-product__soon">Planned for the ONSoftware ecosystem</span>
        )}
      </div>
    </article>
  )
}
