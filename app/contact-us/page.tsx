'use client'

import { useState } from 'react'
import { TY } from '@/lib/styles'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: { preventDefault(): void; currentTarget: HTMLFormElement }) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST', body: data, headers: { Accept: 'application/json' },
      })
      if (res.ok) { setStatus('success'); form.reset() }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  // Serif input fields
  const inputStyle = {
    ...TY.body,
    fontStyle: 'normal' as const,
    fontSize: '16px',
    background: 'transparent',
    border: 'none',
    borderBottom: '0.5px solid rgba(212,175,55,0.4)',
    padding: '12px 0',
    width: '100%',
    outline: 'none',
    opacity: 1,
  }

  // DM Sans UPPERCASE gold form labels
  const labelStyle = {
    ...TY.detailLabel,
    color: '#D4AF37',
    opacity: 0.9,
    display: 'block' as const,
    marginBottom: '8px',
  }

  return (
    <>
      {/* Page header — serif h1, italic subtitle, gold rule */}
      <div className="px-6 md:px-16 pt-12 md:pt-14 pb-8 md:pb-10">
        <h1 style={{ ...TY.pageHeading, fontSize: '48px', marginBottom: '10px' }}>
          contact
        </h1>
        <p style={{ ...TY.pageSubtitle, fontSize: '15px', marginBottom: '24px' }}>
          we&rsquo;d love to hear from you — for product questions, custom orders, or just to say hello.
        </p>
        <div style={{ height: '0.5px', background: '#D4AF37', opacity: 0.4 }} />
      </div>

      <section className="px-6 md:px-16 py-10 md:py-16 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 items-start">

          {/* Left — serif italic intro */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p style={{ ...TY.body, fontSize: '16px', lineHeight: 1.9, opacity: 0.6 }}>
              whether you have a question about a product, want to learn more about our custom face oil process, or just want to say hello — we&rsquo;re here.
            </p>
            {/* Location — DM Sans UPPERCASE gold */}
            <p style={{ ...TY.sectionLabel, fontSize: '11px', color: '#D4AF37', opacity: 0.75 }}>
              Steveston Village, BC
            </p>
          </div>

          {/* Right — form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <label htmlFor="name" style={labelStyle}>name</label>
              <input id="name" name="name" type="text" required placeholder="your name" style={inputStyle} />
            </div>
            <div>
              <label htmlFor="email" style={labelStyle}>email</label>
              <input id="email" name="email" type="email" required placeholder="your@email.com" style={inputStyle} />
            </div>
            <div>
              <label htmlFor="message" style={labelStyle}>message</label>
              <textarea id="message" name="message" required rows={5}
                placeholder="tell us what's on your mind"
                style={{ ...inputStyle, resize: 'none' }} />
            </div>
            <div>
              <button type="submit" disabled={status === 'sending'}
                className={`shop-btn${status === 'sending' ? ' opacity-50' : ''}`}
                style={{ ...TY.sectionLabel, fontSize: '11px', letterSpacing: '0.18em', fontWeight: 500, border: '0.5px solid #B8960C', color: '#B8960C', padding: '12px 32px', background: 'transparent', cursor: 'pointer' }}>
                {status === 'sending' ? 'sending...' : 'send message'}
              </button>
              {status === 'success' && (
                <p style={{ ...TY.body, fontSize: '15px', color: '#A8A8A8', marginTop: '16px' }}>
                  thank you — we&rsquo;ll be in touch soon.
                </p>
              )}
              {status === 'error' && (
                <p style={{ ...TY.body, fontSize: '15px', marginTop: '16px', color: '#c0392b' }}>
                  something went wrong. please try again or email us directly.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
