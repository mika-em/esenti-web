import type { Metadata } from 'next'
import { TY } from '@/lib/styles'

export const metadata: Metadata = {
  title: 'our story',
  description:
    'Learn about esenti skincare — a hand-crafted organic skincare brand rooted in Steveston Village, BC. The art of blending, made personal.',
}

export default function OurStoryPage() {
  return (
    <>
      {/* Page header — serif h1, italic subtitle, gold rule */}
      <div className="px-6 md:px-16 pt-12 md:pt-14 pb-8 md:pb-10">
        <h1 style={{ ...TY.pageHeading, fontSize: '48px', marginBottom: '10px' }}>
          our story
        </h1>
        <p style={{ ...TY.pageSubtitle, fontSize: '15px', marginBottom: '24px' }}>
          the art of blending, made personal.
        </p>
        <div style={{ height: '0.5px', background: '#D4AF37', opacity: 0.4 }} />
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 px-6 md:px-16 py-12 md:py-16">
        <div className="flex items-center justify-center"
          style={{ background: '#ece9e3', aspectRatio: '3/4' }}
          aria-label="esenti founder — image coming soon">
          <span style={{ ...TY.sectionLabel, fontSize: '8px' }}>image coming soon</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingTop: '8px' }}>
          {/* Sub-heading — serif */}
          <h2 style={{ ...TY.pageHeading, fontSize: '32px', lineHeight: 1.2 }}>
            rooted in Steveston Village
          </h2>
          {/* Body — serif italic */}
          <p style={{ ...TY.body, fontSize: '16px', lineHeight: 1.9, opacity: 0.6 }}>
            our story and the inspiration behind esenti skincare will be shared here soon.
          </p>
          <p style={{ ...TY.body, fontStyle: 'normal', fontSize: '16px', lineHeight: 1.9, opacity: 0.5 }}>
            placeholder — coming soon.
          </p>
        </div>
      </div>
    </>
  )
}
