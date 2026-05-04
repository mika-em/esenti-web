import Link from 'next/link'
import { ShopButton } from '@/components/ShopButton'
import { Product } from '@/lib/products'
import { TY } from '@/lib/styles'

type Props = { product: Product }

const DetailLabel = ({ text }: { text: string }) => (
  <p className="mb-2" style={{ ...TY.detailLabel }}>{text}</p>
)

export function ProductPage({ product }: Props) {
  const imageTones = ['#ece9e3', '#e5e1d9', '#dedad2', '#d6d1c9']
  const steps = product.howToUse
    ? product.howToUse.split('. ').filter(s => s.trim()).map(s => s.endsWith('.') ? s : s + '.')
    : []

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2" style={{ alignItems: 'start' }}>

      {/* LEFT — stacked images (hidden on mobile, shown lg+) */}
      <div className="hidden lg:block" style={{ borderRight: '0.5px solid rgba(0,0,0,0.07)' }}>
        {imageTones.map((bg, i) => (
          <div key={i}>
            <div className="flex items-center justify-center" style={{ aspectRatio: '4/5', background: bg }}
              aria-label={`${product.name} — image ${i + 1} coming soon`}>
              <span style={{ ...TY.sectionLabel, fontSize: '8px' }}>
                {i === 0 ? 'product image' : `image ${i + 1}`}
              </span>
            </div>
            {i < imageTones.length - 1 && <div style={{ height: '0.5px', background: 'rgba(0,0,0,0.06)' }} />}
          </div>
        ))}
      </div>

      {/* Mobile image — single placeholder shown on small screens */}
      <div className="lg:hidden flex items-center justify-center" style={{ aspectRatio: '4/5', background: imageTones[0] }}>
        <span style={{ ...TY.sectionLabel, fontSize: '8px' }}>product image</span>
      </div>

      {/* RIGHT — info panel (sticky on desktop, normal flow on mobile) */}
      <div className="hide-scrollbar px-6 md:px-14 py-8 md:py-10 flex flex-col gap-4"
        style={{ position: 'sticky', top: '68px', maxHeight: 'calc(100vh - 68px)', overflowY: 'auto' }}>

        {/* Back link */}
        <Link href="/products" className="hover:opacity-60 transition-opacity duration-200"
          style={{ ...TY.sectionLabel, fontSize: '9px', opacity: 0.35 }}>
          ← all products
        </Link>

        {/* Product name + size */}
        <div>
          <h1 className="mb-1" style={{ ...TY.productTitle, fontSize: 'clamp(22px,3vw,30px)', letterSpacing: '0.22em', lineHeight: 1.1 }}>
            {product.name}
          </h1>
          <span style={{ ...TY.sectionLabel, fontSize: '9px', color: '#D4AF37', opacity: 0.85 }}>
            {product.size}
          </span>
        </div>

        <div style={{ height: '0.5px', background: '#D4AF37', opacity: 0.28 }} />

        {/* Description */}
        <p style={{ ...TY.body, fontSize: 'clamp(14px,1.5vw,15px)', lineHeight: 1.92, opacity: 0.6 }}>
          {product.longDescription}
        </p>

        {/* CTA */}
        {product.shopUrl ? (
          <ShopButton href={product.shopUrl} label="shop on love & natural" />
        ) : (
          <div>
            <p className="mb-2" style={{ ...TY.sectionLabel, fontSize: '9px', opacity: 0.3 }}>available in store</p>
            <Link href="/contact-us" className="hover:opacity-70 transition-opacity duration-200"
              style={{ ...TY.sectionLabel, fontSize: '9px', opacity: 0.5, borderBottom: '0.5px solid rgba(0,0,0,0.25)', paddingBottom: '2px' }}>
              contact us to order
            </Link>
          </div>
        )}

        <div style={{ height: '0.5px', background: 'rgba(0,0,0,0.07)' }} />

        {/* Details */}
        <div className="flex flex-col gap-5">
          {product.ingredients && (
            <div>
              <DetailLabel text="key ingredients" />
              <p style={{ ...TY.body, fontSize: '14px', lineHeight: 1.7 }}>
                {product.ingredients.map((ing, i) => (
                  <span key={ing}>{i > 0 && <span style={{ opacity: 0.4, margin: '0 6px' }}>·</span>}{ing}</span>
                ))}
              </p>
            </div>
          )}
          {product.skinTypes && (
            <div>
              <DetailLabel text="suitable for" />
              <p style={{ ...TY.body, fontSize: '14px', lineHeight: 1.7 }}>
                {product.skinTypes.map((type, i) => (
                  <span key={type}>
                    {i > 0 && <span style={{ color: '#D4AF37', fontSize: '9px', margin: '0 10px', verticalAlign: 'middle' }}>●</span>}
                    {type}
                  </span>
                ))}
              </p>
            </div>
          )}
          {steps.length > 0 && (
            <div>
              <DetailLabel text="how to use" />
              <div className="flex flex-col gap-2">
                {steps.map((step, i) => (
                  <p key={i} style={{ ...TY.body, fontSize: '14px', lineHeight: 1.65 }}>
                    <span style={{ color: '#D4AF37', marginRight: '12px', fontStyle: 'normal', fontWeight: 400 }}>—</span>
                    {step}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
