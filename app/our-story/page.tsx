import type { Metadata } from 'next'
import { SERIF, SANS } from '@/lib/styles'

export const metadata: Metadata = {
  title: 'our story',
  description:
    'Learn about esenti skincare — a hand-crafted organic skincare brand rooted in Steveston Village, BC. The art of blending, made personal.',
}

export default function OurStoryPage() {
  return (
    <section className="px-16" style={{ paddingTop: '96px', paddingBottom: '96px' }}>
      {/* Centered header */}
      <div style={{ textAlign: 'center', marginBottom: '72px' }}>
        <h1 style={{ fontFamily: SERIF, fontSize: '48px', fontWeight: 400, letterSpacing: '0.06em', color: '#D4AF37', marginBottom: '14px' }}>
          our story
        </h1>
        <p style={{ fontFamily: SERIF, fontSize: '18px', fontWeight: 600, fontStyle: 'italic', color: '#A8A8A8', marginBottom: '28px' }}>
          the art of blending.
        </p>
        <div style={{ width: '48px', height: '0.5px', background: '#D4AF37', opacity: 0.65, margin: '0 auto' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '96px', alignItems: 'start' }}>
        {/* Placeholder image */}
        <div
          className="flex items-center justify-center"
          style={{ background: '#ece9e3', aspectRatio: '3/4' }}
          aria-label="esenti founder — image coming soon"
        >
          <span style={{ fontFamily: SANS, fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 300, opacity: 0.3 }}>
            image coming soon
          </span>
        </div>

        {/* Story copy */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', paddingTop: '8px' }}>
          <h2 style={{ fontFamily: SERIF, fontSize: '34px', fontWeight: 400, letterSpacing: '0.06em', lineHeight: 1.2, color: '#181816', opacity: 0.9 }}>
            rooted in Steveston Village
          </h2>
          <p style={{ fontFamily: SERIF, fontSize: '18px', fontWeight: 600, fontStyle: 'italic', lineHeight: 1.9, color: '#181816', opacity: 0.82 }}>
            our story and the inspiration behind esenti skincare will be shared here soon.
          </p>
          <p style={{ fontFamily: SERIF, fontSize: '18px', fontWeight: 600, lineHeight: 1.9, color: '#181816', opacity: 0.82 }}>
            placeholder — coming soon.
          </p>
        </div>
      </div>
    </section>
  )
}
