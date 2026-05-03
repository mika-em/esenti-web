'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { WordmarkLogo } from './WordmarkLogo'
import { navLinks } from '@/lib/products'
import { SANS } from '@/lib/styles'

export function Nav() {
  const pathname = usePathname()

  return (
    <nav
      className="flex items-center justify-between px-16 py-7 sticky top-0 z-50"
      style={{ background: '#faf9f7', borderBottom: '0.5px solid rgba(212,175,55,0.35)' }}
    >
      <Link href="/" aria-label="esenti — go to homepage">
        <WordmarkLogo width={80} />
      </Link>

      <div className="flex items-center gap-9">
        {navLinks.map(({ href, label }) => {
          const isActive = pathname === href
          return (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: SANS,
                fontSize: '13px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 400,
                color: isActive ? '#D4AF37' : '#181816',
                opacity: isActive ? 1 : 0.55,
                borderBottom: isActive ? '0.5px solid #D4AF37' : 'none',
                paddingBottom: isActive ? '2px' : '0',
                transition: 'opacity 0.2s',
              }}
              className="hover:opacity-80"
            >
              {label}
            </Link>
          )
        })}

        <a
          href="https://loveandnatural.com/collections/esenti"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition-opacity duration-200"
          style={{
            fontFamily: SANS,
            fontSize: '13px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontWeight: 400,
            color: '#D4AF37',
            border: '0.5px solid #D4AF37',
            padding: '8px 20px',
          }}
        >
          shop
        </a>
      </div>
    </nav>
  )
}
