import type { Metadata } from 'next'
import { FullLogo } from '@/components/FullLogo'
import { TypewriterText } from '@/components/TypewriterText'
import { ProductCarousel } from '@/components/ProductCarousel'
import { testimonials } from '@/lib/products'
import { TY } from '@/lib/styles'

export const metadata: Metadata = {
  title: 'esenti — the art of blending',
  description:
    'Hand-crafted organic skincare made to order in Steveston Village, BC. Custom face oils, hand-made soaps, essential oils and more — available at loveandnatural.com.',
}

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="text-center flex flex-col items-center justify-center px-6 md:px-16 py-20 md:py-24"
        style={{ borderBottom: '0.5px solid rgba(212,175,55,0.3)', minHeight: '60vh' }}>
        <div id="hero-logo" className="flex justify-center mb-6">
          <FullLogo width={280} className="w-50 sm:w-70 md:w-85 lg:w-100" />
        </div>
        <div className="min-h-18 mb-9 flex items-start justify-center">
          <TypewriterText
            text={`handcrafted skincare made with synergistic blends of\norganic & natural ingredients.`}
            className="mx-auto"
            style={{ ...TY.body, fontSize: 'clamp(14px,2vw,16px)', lineHeight: 1.9, maxWidth: '420px', opacity: 0.55, textAlign: 'center' }}
          />
        </div>
        <a href="/products" className="inline-block hover:opacity-70 transition-opacity duration-200"
          style={{ ...TY.sectionLabel, fontSize: '9.5px', letterSpacing: '0.24em', opacity: 0.4, paddingBottom: '2px', borderBottom: '0.5px solid rgba(0,0,0,0.22)' }}>
          explore our products
        </a>
      </section>

      {/* ── Product strip ── */}
      <ProductCarousel />

      {/* ── Testimonials ── */}
      <section className="px-6 md:px-16 py-16 md:py-24"
        style={{ borderBottom: '0.5px solid rgba(212,175,55,0.3)' }}>
        <h2 className="mb-10 md:mb-12" style={{ ...TY.pageHeading, fontSize: 'clamp(24px,4vw,36px)' }}>
          what people say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
          {testimonials.map((t, i) => (
            <div key={i} className="md:px-10 first:md:pl-0 last:md:pr-0"
              style={{ borderLeft: i > 0 ? '0.5px solid rgba(212,175,55,0.25)' : 'none' }}>
              <p className="mb-5" style={{ ...TY.body, fontSize: 'clamp(14px,1.5vw,15px)' }}>{t.quote}</p>
              <span style={{ ...TY.sectionLabel, fontSize: '9px', opacity: 0.32 }}>{t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Shop CTA ── */}
      <section className="flex flex-col items-center justify-center text-center px-6 md:px-16 py-20 md:py-28"
        style={{ borderBottom: '0.5px solid rgba(212,175,55,0.3)' }}>
        <span className="mb-6" style={{ ...TY.sectionLabel, fontSize: '9px', opacity: 0.35 }}>exclusively available at</span>
        <p className="mb-10" style={{ ...TY.pageHeading, fontSize: 'clamp(40px,7vw,80px)', lineHeight: 1.0, color: '#D4AF37' }}>
          Love &amp; Natural.
        </p>
        <a href="https://loveandnatural.com/collections/esenti" target="_blank" rel="noopener noreferrer"
          className="shop-btn"
          style={{ ...TY.sectionLabel, fontSize: '11px', letterSpacing: '0.18em', fontWeight: 500, border: '0.5px solid #B8960C', color: '#B8960C', padding: '14px 40px' }}>
          shop our products
        </a>
      </section>
    </>
  )
}
