import type { Metadata } from 'next'
import Link from 'next/link'
import { products } from '@/lib/products'
import { SERIF, SANS } from '@/lib/styles'

export const metadata: Metadata = {
  title: 'our products',
  description:
    'Explore the esenti skincare collection — custom face oils, handmade soaps, luminere eye oil, body mists, and pure essential oils. Hand-crafted in Steveston Village, BC.',
}

export default function ProductsPage() {
  return (
    <section className="px-16" style={{ paddingTop: '96px', paddingBottom: '120px' }}>
      {/* Centered header */}
      <div style={{ textAlign: 'center', marginBottom: '72px' }}>
        <h1 style={{ fontFamily: SERIF, fontSize: '48px', fontWeight: 400, letterSpacing: '0.06em', color: '#D4AF37', marginBottom: '14px' }}>
          our products
        </h1>
        <p style={{ fontFamily: SERIF, fontSize: '18px', fontWeight: 600, fontStyle: 'italic', color: '#A8A8A8', marginBottom: '28px' }}>
          handcrafted skincare made with synergistic blends of organic & natural ingredients
        </p>
        <div style={{ width: '48px', height: '0.5px', background: '#D4AF37', opacity: 0.65, margin: '0 auto' }} />
      </div>

      {/* Flex grid — last row auto-centers */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '48px' }}>
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="group block text-center"
            style={{ flex: '0 0 calc(33.333% - 32px)', maxWidth: '420px' }}
          >
            {/* Image with hover overlay */}
            <div style={{ position: 'relative', marginBottom: '24px', overflow: 'hidden' }}>
              <div
                className="flex items-center justify-center"
                style={{ background: '#ece9e3', aspectRatio: '3/4' }}
                aria-label={`${product.name} — image coming soon`}
              >
                <span style={{ fontFamily: SANS, fontSize: '8px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 300, opacity: 0.4 }}>
                  coming soon
                </span>
              </div>
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'rgba(212,175,55,0.1)' }}
              >
                <span style={{ fontFamily: SANS, fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 500, color: '#8A6F0A', border: '0.5px solid #8A6F0A', padding: '10px 22px', background: 'rgba(250,249,247,0.92)' }}>
                  view product
                </span>
              </div>
            </div>

            <h2
              style={{ fontFamily: SANS, fontSize: '16px', letterSpacing: '0.22em', fontWeight: 500, lineHeight: 1.2, color: '#181816', marginBottom: '10px' }}
            >
              {product.name}
            </h2>

            <span style={{ fontFamily: SANS, fontSize: '11px', letterSpacing: '0.2em', fontWeight: 400, color: '#D4AF37', display: 'block', marginBottom: '14px' }}>
              {product.size}
            </span>

            <p
              style={{ fontFamily: SERIF, fontSize: '16px', fontWeight: 600, fontStyle: 'italic', lineHeight: 1.85, color: '#A8A8A8', maxWidth: '360px', margin: '0 auto' }}
            >
              {product.shortDescription.split('.')[0]}.
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
