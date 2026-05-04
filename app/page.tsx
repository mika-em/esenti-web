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

      {/* ── Our Approach ── */}
      <section className="px-6 md:px-16 py-16 md:py-24 text-center"
        style={{ borderBottom: '0.5px solid rgba(212,175,55,0.3)' }}>
        <h2 className="mb-8 md:mb-10" style={{ ...TY.pageHeading, fontSize: 'clamp(24px,4vw,36px)' }}>
          our approach
        </h2>
        <p className="mx-auto" style={{ ...TY.body, fontSize: 'clamp(18px,2.5vw,26px)', lineHeight: 1.7, maxWidth: '640px', opacity: 0.72 }}>
          &ldquo;we believe skincare should be as individual as the person wearing it — blended only when you order, so the ingredients arrive at their most potent.&rdquo;
        </p>
        <div className="mt-8" style={{ ...TY.sectionLabel, color: '#D4AF37', opacity: 0.7 }}>
          esenti · Steveston Village, BC
        </div>
      </section>

      {/* ── Shop CTA ── */}
      <section className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 px-6 md:px-16 py-14 md:py-20"
        style={{ borderBottom: '0.5px solid rgba(212,175,55,0.3)', borderTop: '0.5px solid rgba(212,175,55,0.15)' }}>
        {/* Left — brand + url */}
        <div className="flex flex-col gap-2">
          <span style={{ ...TY.sectionLabel, fontSize: '9px', opacity: 0.35 }}>where to shop</span>
          <p style={{ ...TY.pageHeading, fontSize: 'clamp(36px,6vw,72px)', lineHeight: 1.05, color: '#D4AF37' }}>
            Love &amp; Natural.
          </p>
          <span style={{ ...TY.sectionLabel, fontSize: '9px', opacity: 0.28 }}>loveandnatural.com</span>
        </div>
        {/* Right — button */}
        <a href="https://loveandnatural.com/collections/esenti" target="_blank" rel="noopener noreferrer"
          className="shop-btn shrink-0"
          style={{ ...TY.sectionLabel, fontSize: '11px', letterSpacing: '0.18em', fontWeight: 500, border: '0.5px solid #B8960C', color: '#B8960C', padding: '12px 32px' }}>
          shop the collection
        </a>
      </section>
    </>
  )
}
