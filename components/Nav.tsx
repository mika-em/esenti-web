'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { WordmarkLogo } from './WordmarkLogo'
import { products } from '@/lib/products'
import { SERIF, SANS } from '@/lib/styles'

const navLinks = [
  { href: '/',          label: 'home'      },
  { href: '/products',  label: 'products'  },
  { href: '/our-story', label: 'our story' },
]

const searchablePages = [
  { href: '/',           label: 'home',        hint: 'esenti landing page'       },
  { href: '/products',   label: 'our products', hint: 'view the full collection'  },
  { href: '/our-story',  label: 'our story',   hint: 'about esenti skincare'     },
  { href: '/contact-us', label: 'contact',     hint: 'get in touch with the team' },
]

export function Nav() {
  const pathname = usePathname()
  const [searchOpen,     setSearchOpen]     = useState(false)
  const [mobileOpen,     setMobileOpen]     = useState(false)
  const [logoHidden,     setLogoHidden]     = useState(false)
  const [query,          setQuery]          = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  // Hide nav wordmark while the hero logo is on-screen (home page only)
  // setState only inside the observer callback and cleanup — avoids lint error
  useEffect(() => {
    if (pathname !== '/') return
    const el = document.getElementById('hero-logo')
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setLogoHidden(entry.isIntersecting),
      { rootMargin: '-68px 0px 0px 0px', threshold: 0.1 }
    )
    observer.observe(el)
    return () => { observer.disconnect(); setLogoHidden(false) }
  }, [pathname])

  // Close mobile menu on navigation
  useEffect(() => { setMobileOpen(false) }, [pathname])

  // Close search on ESC
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') closeSearch() }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [])

  useEffect(() => {
    if (searchOpen) setTimeout(() => inputRef.current?.focus(), 40)
  }, [searchOpen])

  function closeSearch() { setSearchOpen(false); setQuery('') }

  const q = query.toLowerCase().trim()
  const productHits = q.length > 1 ? products.filter(p =>
    p.name.toLowerCase().includes(q) || p.shortDescription.toLowerCase().includes(q)
  ) : []
  const pageHits = q.length > 1 ? searchablePages.filter(p =>
    p.label.toLowerCase().includes(q) || p.hint.toLowerCase().includes(q)
  ) : []
  const hasResults = productHits.length > 0 || pageHits.length > 0

  const linkStyle = (isActive: boolean) => ({
    fontFamily: SERIF, fontSize: '17px',
    fontWeight: isActive ? 400 : 300,
    color: isActive ? '#D4AF37' : '#181816',
    opacity: isActive ? 1 : 0.72,
    letterSpacing: '0.01em',
    textDecoration: 'none',
    borderBottom: isActive ? '0.5px solid #D4AF37' : 'none',
    paddingBottom: isActive ? '2px' : '0',
  })

  return (
    <>
      {/* ── Nav bar ── */}
      <nav className="sticky top-0 z-50 h-[68px]"
        style={{ background: '#faf9f7', borderBottom: '0.5px solid rgba(212,175,55,0.35)' }}>

        {/* Desktop — 3-column grid */}
        <div className="hidden md:grid h-full items-center px-[52px]"
          style={{ gridTemplateColumns: '1fr auto 1fr' }}>

          {/* Left — serif nav links */}
          <div className="flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href}
                className="hover:opacity-100 transition-opacity duration-200"
                style={linkStyle(pathname === href)}>
                {label}
              </Link>
            ))}
          </div>

          {/* Centre — logo (fades out when hero logo is visible) */}
          <Link href="/" aria-label="esenti — go to homepage" className="flex"
            style={{ opacity: logoHidden ? 0 : 1, pointerEvents: logoHidden ? 'none' : 'auto', transition: 'opacity 0.4s ease' }}>
            <WordmarkLogo width={80} />
          </Link>

          {/* Right — search + shop */}
          <div className="flex items-center gap-5 justify-end">
            <button onClick={() => setSearchOpen(true)} aria-label="Search"
              className="hover:opacity-100 transition-opacity duration-200 flex items-center"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: '#181816', opacity: 0.55 }}>
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="7" cy="7" r="5" /><line x1="11" y1="11" x2="15.5" y2="15.5" />
              </svg>
            </button>
            <a href="https://loveandnatural.com/collections/esenti" target="_blank" rel="noopener noreferrer"
              className="shop-btn shrink-0"
              style={{ fontFamily: SANS, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 500, color: '#D4AF37', border: '0.5px solid #D4AF37', padding: '7px 18px', textDecoration: 'none' }}>
              shop
            </a>
          </div>
        </div>

        {/* Mobile — logo left, hamburger right */}
        <div className="flex md:hidden h-full items-center justify-between px-5">
          <Link href="/" aria-label="esenti — go to homepage"
            style={{ opacity: logoHidden ? 0 : 1, pointerEvents: logoHidden ? 'none' : 'auto', transition: 'opacity 0.4s ease' }}>
            <WordmarkLogo width={64} />
          </Link>
          <button onClick={() => setMobileOpen(o => !o)} aria-label={mobileOpen ? 'close menu' : 'open menu'}
            className="flex flex-col justify-center items-center gap-[5px] p-2"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <span className="block transition-all duration-300"
              style={{ width: '22px', height: '1px', background: '#181816', opacity: 0.7,
                transform: mobileOpen ? 'translateY(6px) rotate(45deg)' : 'none' }} />
            <span className="block transition-all duration-300"
              style={{ width: '22px', height: '1px', background: '#181816', opacity: mobileOpen ? 0 : 0.7 }} />
            <span className="block transition-all duration-300"
              style={{ width: '22px', height: '1px', background: '#181816', opacity: 0.7,
                transform: mobileOpen ? 'translateY(-6px) rotate(-45deg)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* ── Mobile full-screen menu ── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden flex flex-col pt-[68px]"
          style={{ background: '#faf9f7' }}>
          <div className="flex flex-col px-8 py-10 gap-8 flex-1 overflow-y-auto">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} onClick={() => setMobileOpen(false)}
                style={{ fontFamily: SERIF, fontSize: '36px', fontWeight: 300, color: pathname === href ? '#D4AF37' : '#181816', textDecoration: 'none', letterSpacing: '0.02em' }}>
                {label}
              </Link>
            ))}
            <Link href="/contact-us" onClick={() => setMobileOpen(false)}
              style={{ fontFamily: SERIF, fontSize: '36px', fontWeight: 300, color: pathname === '/contact-us' ? '#D4AF37' : '#181816', textDecoration: 'none', letterSpacing: '0.02em' }}>
              contact
            </Link>
          </div>
          <div className="px-8 pb-10 flex flex-col gap-4 border-t" style={{ borderColor: 'rgba(212,175,55,0.25)' }}>
            <button onClick={() => { setMobileOpen(false); setSearchOpen(true) }}
              className="flex items-center gap-3 text-left"
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: SANS, fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#181816', opacity: 0.5, padding: '12px 0' }}>
              <svg width="14" height="14" viewBox="0 0 17 17" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="7" cy="7" r="5" /><line x1="11" y1="11" x2="15.5" y2="15.5" />
              </svg>
              search
            </button>
            <a href="https://loveandnatural.com/collections/esenti" target="_blank" rel="noopener noreferrer"
              className="shop-btn"
              style={{ fontFamily: SANS, fontSize: '12px', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 500, color: '#D4AF37', border: '0.5px solid #D4AF37', padding: '12px 0', textDecoration: 'none', textAlign: 'center' as const }}>
              shop at love &amp; natural
            </a>
          </div>
        </div>
      )}

      {/* ── Search overlay ── */}
      {searchOpen && (
        <div className="fixed inset-0 z-[200] flex flex-col items-center px-4 pt-24 md:pt-28"
          style={{ background: 'rgba(250,249,247,0.97)' }}
          onClick={e => { if (e.target === e.currentTarget) closeSearch() }}>
          <button onClick={closeSearch} className="absolute top-5 right-6 md:right-14 hover:opacity-80 transition-opacity"
            style={{ fontFamily: SANS, fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 400, color: '#181816', opacity: 0.4, background: 'none', border: 'none', cursor: 'pointer' }}>
            esc
          </button>
          <div className="w-full max-w-[580px]">
            <input ref={inputRef} type="text" value={query} onChange={e => setQuery(e.target.value)}
              placeholder="search..."
              style={{ fontFamily: SERIF, fontSize: 'clamp(20px, 5vw, 32px)', fontWeight: 300, fontStyle: 'italic', color: '#181816', background: 'transparent', border: 'none', borderBottom: '0.5px solid rgba(212,175,55,0.5)', width: '100%', outline: 'none', padding: '8px 0' }} />
            {!q && (
              <p style={{ fontFamily: SERIF, fontSize: '14px', fontStyle: 'italic', color: '#181816', opacity: 0.3, marginTop: '20px' }}>
                try &ldquo;face oil&rdquo;, &ldquo;soap&rdquo;, or &ldquo;body mist&rdquo;
              </p>
            )}
            {q.length > 1 && !hasResults && (
              <p style={{ fontFamily: SERIF, fontSize: '16px', fontStyle: 'italic', color: '#181816', opacity: 0.38, marginTop: '32px' }}>
                no results for &ldquo;{query}&rdquo;
              </p>
            )}
            {hasResults && (
              <div className="mt-9 flex flex-col gap-8">
                {productHits.length > 0 && (
                  <div>
                    <p style={{ fontFamily: SANS, fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#D4AF37', opacity: 0.75, marginBottom: '12px' }}>products</p>
                    {productHits.map(p => (
                      <Link key={p.id} href={`/products/${p.slug}`} onClick={closeSearch}
                        className="flex justify-between items-baseline hover:opacity-50 transition-opacity duration-200"
                        style={{ textDecoration: 'none', borderTop: '0.5px solid rgba(0,0,0,0.06)', padding: '14px 0' }}>
                        <span style={{ fontFamily: SERIF, fontSize: 'clamp(16px,3vw,22px)', fontWeight: 300, color: '#181816', letterSpacing: '0.04em' }}>{p.name}</span>
                        <span style={{ fontFamily: SANS, fontSize: '9px', color: '#D4AF37', letterSpacing: '0.16em', textTransform: 'uppercase' }}>{p.size}</span>
                      </Link>
                    ))}
                  </div>
                )}
                {pageHits.length > 0 && (
                  <div>
                    <p style={{ fontFamily: SANS, fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#D4AF37', opacity: 0.75, marginBottom: '12px' }}>pages</p>
                    {pageHits.map(p => (
                      <Link key={p.href} href={p.href} onClick={closeSearch}
                        className="flex justify-between items-baseline hover:opacity-50 transition-opacity duration-200"
                        style={{ textDecoration: 'none', borderTop: '0.5px solid rgba(0,0,0,0.06)', padding: '14px 0' }}>
                        <span style={{ fontFamily: SERIF, fontSize: 'clamp(16px,3vw,22px)', fontWeight: 300, color: '#181816', letterSpacing: '0.04em' }}>{p.label}</span>
                        <span style={{ fontFamily: SANS, fontSize: '9px', color: '#181816', opacity: 0.35, letterSpacing: '0.12em' }}>{p.hint}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
