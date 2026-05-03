'use client'

import { useState } from 'react'
import { SERIF, SANS } from '@/lib/styles'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) { setStatus('success'); form.reset() }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  const inputStyle = {
    fontFamily: SERIF,
    fontSize: '17px',
    fontWeight: 500,
    background: 'transparent',
    border: 'none',
    borderBottom: '0.5px solid rgba(212,175,55,0.4)',
    padding: '12px 0',
    width: '100%',
    outline: 'none',
    color: '#181816',
  }

  const labelStyle = {
    fontFamily: SANS,
    fontSize: '11px',
    letterSpacing: '0.26em',
    textTransform: 'uppercase' as const,
    fontWeight: 500,
    color: '#D4AF37',
    display: 'block',
    marginBottom: '8px',
  }

  return (
    <section className="px-16" style={{ paddingTop: '96px', paddingBottom: '96px' }}>
      {/* Centered header */}
      <div style={{ textAlign: 'center', marginBottom: '72px' }}>
        <h1 style={{ fontFamily: SERIF, fontSize: '48px', fontWeight: 400, letterSpacing: '0.06em', color: '#D4AF37', marginBottom: '14px' }}>
          contact
        </h1>
        <p style={{ fontFamily: SERIF, fontSize: '18px', fontWeight: 600, fontStyle: 'italic', color: '#A8A8A8', marginBottom: '28px' }}>
          we'd love to hear from you.
        </p>
        <div style={{ width: '48px', height: '0.5px', background: '#D4AF37', opacity: 0.65, margin: '0 auto' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '96px', alignItems: 'start' }}>
        {/* Left — message */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <h2 style={{ fontFamily: SERIF, fontSize: '34px', fontWeight: 400, letterSpacing: '0.06em', lineHeight: 1.15, color: '#181816' }}>
            get in touch
          </h2>
          <p style={{ fontFamily: SERIF, fontSize: '18px', fontWeight: 600, fontStyle: 'italic', lineHeight: 1.9, color: '#181816', opacity: 0.82 }}>
            whether you have a question about a product, want to learn more about our custom face oil process, or just want to say hello — we're here.
          </p>
          <p style={{ fontFamily: SANS, fontSize: '12px', letterSpacing: '0.16em', fontWeight: 400, color: '#D4AF37' }}>
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
            <textarea id="message" name="message" required rows={5} placeholder="tell us what's on your mind" style={{ ...inputStyle, resize: 'none' }} />
          </div>
          <div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className={`shop-btn${status === 'sending' ? ' opacity-50' : ''}`}
              style={{ fontFamily: SANS, fontSize: '12px', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 500, border: '0.5px solid #B8960C', color: '#B8960C', padding: '12px 32px', background: 'transparent', cursor: 'pointer' }}
            >
              {status === 'sending' ? 'sending...' : 'send message'}
            </button>
            {status === 'success' && (
              <p style={{ fontFamily: SERIF, fontSize: '16px', fontWeight: 600, fontStyle: 'italic', color: '#A8A8A8', marginTop: '16px' }}>
                thank you — we'll be in touch soon.
              </p>
            )}
            {status === 'error' && (
              <p style={{ fontFamily: SERIF, fontSize: '16px', fontWeight: 600, fontStyle: 'italic', marginTop: '16px', color: '#c0392b' }}>
                something went wrong. please try again or email us directly.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
