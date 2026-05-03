import Link from 'next/link'
import { ShopButton } from '@/components/ShopButton'
import { Product } from '@/lib/products'
import { SERIF, SANS } from '@/lib/styles'

type Props = {
  product: Product
}

const sectionLabel = (text: string) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '18px' }}>
    <p style={{ fontFamily: SANS, fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 500, color: '#D4AF37', whiteSpace: 'nowrap' }}>
      {text}
    </p>
    <div style={{ flex: 1, height: '0.5px', background: '#D4AF37', opacity: 0.45 }} />
  </div>
)

export function ProductPage({ product }: Props) {
  const steps = product.howToUse
    ? product.howToUse.split('. ').filter(s => s.trim()).map(s => s.endsWith('.') ? s : s + '.')
    : []

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'start' }}>

      {/* ── LEFT — sticky image ── */}
      <div
        style={{ position: 'sticky', top: '76px', height: 'calc(100vh - 76px)', background: '#ece9e3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        aria-label={`${product.name} — image coming soon`}
      >
        <span style={{ fontFamily: SANS, fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 300, opacity: 0.3 }}>
          image coming soon
        </span>
      </div>

      {/* ── RIGHT — continuous scroll ── */}
      <div>

        {/* Section 1 — identity */}
        <div style={{ padding: '72px 64px 64px 56px', borderBottom: '0.5px solid rgba(212,175,55,0.25)' }}>
          <Link
            href="/products"
            className="hover:opacity-60 transition-opacity duration-200"
            style={{ fontFamily: SANS, fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 400, color: '#D4AF37', opacity: 0.65, marginBottom: '48px', display: 'block' }}
          >
            ← all products
          </Link>

          <span style={{ fontFamily: SANS, fontSize: '11px', letterSpacing: '0.2em', fontWeight: 400, color: '#D4AF37', display: 'block', marginBottom: '12px' }}>
            {product.size}
          </span>

          <h1 style={{ fontFamily: SANS, fontSize: '28px', letterSpacing: '0.24em', fontWeight: 500, lineHeight: 1.15, color: '#181816', marginBottom: '22px' }}>
            {product.name}
          </h1>

          <div style={{ width: '40px', height: '0.5px', background: '#D4AF37', marginBottom: '26px' }} />

          <p style={{ fontFamily: SERIF, fontSize: '18px', fontWeight: 600, fontStyle: 'italic', lineHeight: 1.9, color: '#181816', opacity: 0.85, marginBottom: '40px' }}>
            {product.longDescription}
          </p>

          <div style={{ textAlign: 'center' }}>
            {product.shopUrl ? (
              <ShopButton href={product.shopUrl} label="shop on love & natural" />
            ) : (
              <div>
                <p style={{ fontFamily: SANS, fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 400, color: '#9A9A9A', marginBottom: '12px' }}>
                  available in store
                </p>
                <Link
                  href="/contact-us"
                  className="hover:opacity-80 transition-opacity duration-200"
                  style={{ fontFamily: SANS, fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 400, color: '#181816', opacity: 0.6, borderBottom: '0.5px solid rgba(0,0,0,0.25)', paddingBottom: '2px' }}
                >
                  contact us to order
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Section 2 — details */}
        <div style={{ padding: '56px 64px 80px 56px' }}>

          {/* Key ingredients — dot-joined inline list */}
          {product.ingredients && (
            <div style={{ marginBottom: '40px' }}>
              {sectionLabel('key ingredients')}
              <p style={{ fontFamily: SERIF, fontSize: '17px', fontWeight: 600, fontStyle: 'italic', lineHeight: 1.75, color: '#181816', opacity: 0.82 }}>
                {product.ingredients.join(' · ')}
              </p>
            </div>
          )}

          {/* Suitable for — inline text with gold circle separators */}
          {product.skinTypes && (
            <div style={{ marginBottom: '40px' }}>
              {sectionLabel('suitable for')}
              <p style={{ fontFamily: SERIF, fontSize: '17px', fontWeight: 600, fontStyle: 'italic', lineHeight: 1.75, color: '#181816', opacity: 0.82 }}>
                {product.skinTypes.map((type, i) => (
                  <span key={type}>
                    {i > 0 && (
                      <span style={{ color: '#D4AF37', fontSize: '9px', margin: '0 10px', verticalAlign: 'middle' }}>●</span>
                    )}
                    {type}
                  </span>
                ))}
              </p>
            </div>
          )}

          {/* How to use — numbered steps */}
          {steps.length > 0 && (
            <div>
              {sectionLabel('how to use')}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {steps.map((step, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: '12px', alignItems: 'baseline' }}>
                    <span style={{ fontFamily: SANS, fontSize: '11px', letterSpacing: '0.08em', fontWeight: 500, color: '#D4AF37' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p style={{ fontFamily: SERIF, fontSize: '17px', fontWeight: 600, fontStyle: 'italic', lineHeight: 1.65, color: '#181816', opacity: 0.82 }}>
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
