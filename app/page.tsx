import type { Metadata } from 'next'
import Link from 'next/link'
import { FullLogo } from '@/components/FullLogo'
import { TypewriterText } from '@/components/TypewriterText'
import { products, testimonials } from '@/lib/products'
import { SERIF, SANS } from '@/lib/styles'

export const metadata: Metadata = {
  title: 'esenti — the art of blending',
  description:
    'Hand-crafted organic skincare made to order in Steveston Village, BC. Custom face oils, handmade soaps, essential oils and more — available at loveandnatural.com.',
}

function SectionHeader({ title, description }: { title: string; description?: string }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
      <h2 style={{ fontFamily: SERIF, fontSize: '44px', fontWeight: 400, letterSpacing: '0.06em', color: '#D4AF37', marginBottom: description ? '12px' : '24px' }}>
        {title}
      </h2>
      {description && (
        <p style={{ fontFamily: SERIF, fontSize: '18px', fontWeight: 600, fontStyle: 'italic', color: '#A8A8A8' }}>
          {description}
        </p>
      )}
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="px-16 text-center h-screen snap-start flex flex-col justify-center items-center"
        style={{ borderBottom: '0.5px solid rgba(212,175,55,0.3)' }}
      >
        <div className="flex justify-center mb-10">
          <FullLogo width={300} />
        </div>
        <p
          className="mx-auto mb-8"
          style={{ fontFamily: SERIF, fontSize: '22px', fontWeight: 600, fontStyle: 'italic', lineHeight: 1.8, maxWidth: '480px', color: '#181816', opacity: 0.82 }}
        >
          handcrafted skincare made with synergistic blends of organic &amp; natural ingredients.
        </p>
        <a
          href="/products"
          className="inline-block hover:opacity-70 transition-opacity duration-200"
          style={{ fontFamily: SANS, fontSize: '12px', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 500, color: '#D4AF37', paddingBottom: '4px', borderBottom: '0.5px solid #D4AF37' }}
        >
          explore the collection
        </a>
      </section>

      {/* ── Products ── */}
      <section
        id="products"
        className="px-16 h-screen snap-start flex flex-col justify-center"
        style={{ borderBottom: '0.5px solid rgba(212,175,55,0.3)' }}
      >
        <SectionHeader title="our products" />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px' }}>
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.slug}`} className="group block text-center">
              <div
                className="flex items-center justify-center mb-4"
                style={{ background: '#ece9e3', aspectRatio: '3/4' }}
                aria-label={`${product.name} — image coming soon`}
              >
                <span style={{ fontFamily: SANS, fontSize: '8px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 300, opacity: 0.4 }}>
                  coming soon
                </span>
              </div>
              <h3
                className="group-hover:opacity-50 transition-opacity duration-200"
                style={{ fontFamily: SANS, fontSize: '16px', letterSpacing: '0.27em', fontWeight: 300, lineHeight: 1.2, color: '#181816' }}
              >
                {product.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section
        className="px-16 h-screen snap-start flex flex-col justify-center items-center"
        style={{ borderBottom: '0.5px solid rgba(212,175,55,0.3)' }}
      >
        <SectionHeader
          title="what our customers say"
        />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '40px', width: '100%' }}>
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col items-center text-center" style={{ gap: '16px' }}>
              <div style={{ width: '40px', height: '1px', background: '#D4AF37', opacity: 0.7 }} />
              <p style={{ fontFamily: SERIF, fontSize: '21px', fontWeight: 600, fontStyle: 'italic', lineHeight: 1.8, color: '#181816', opacity: 0.9 }}>
                {t.quote}
              </p>
              <span style={{ fontFamily: SANS, fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500, color: '#181816', opacity: 0.45 }}>
                {t.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Our Approach ── */}
      <section
        className="px-16 h-screen snap-start flex flex-col justify-center items-center text-center"
        style={{ borderBottom: '0.5px solid rgba(212,175,55,0.3)' }}
      >
        <SectionHeader
          title="our approach"
        />
        <p style={{ fontFamily: SERIF, fontSize: '24px', fontWeight: 600, lineHeight: 1.8, color: '#181816', opacity: 0.88, maxWidth: '780px' }}>
          we believe skincare should be as individual as the person wearing it. at esenti, every product is made by hand in Steveston Village, BC —{' '}
          <em>blended only when you order</em>, so the ingredients arrive at their most potent. no shelf-sitting. no compromise.
        </p>
      </section>

      {/* ── Shop CTA ── */}
      <section
        className="px-16 h-screen snap-start flex flex-col justify-center items-center text-center"
        style={{ gap: '28px' }}
      >
        <p style={{ fontFamily: SERIF, fontSize: '36px', fontWeight: 400, fontStyle: 'italic', lineHeight: 1.45, color: '#181816', opacity: 0.88 }}>
          available exclusively through
          <br />
          <span style={{ color: '#D4AF37' }}>Love &amp; Natural.</span>
        </p>
        <span style={{ fontFamily: SANS, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 400, color: '#181816', opacity: 0.35 }}>
          loveandnatural.com
        </span>
        <a
          href="https://loveandnatural.com/collections/esenti"
          target="_blank"
          rel="noopener noreferrer"
          className="shop-btn"
          style={{ fontFamily: SANS, fontSize: '12px', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 500, border: '0.5px solid #B8960C', color: '#B8960C', padding: '12px 32px' }}
        >
          shop the collection
        </a>
      </section>
    </>
  )
}
