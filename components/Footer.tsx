import Link from 'next/link'
import { WordmarkLogo } from './WordmarkLogo'
import { SANS, SERIF } from '@/lib/styles'

const footerLinks = [
  { href: '/contact-us', label: 'contact us' },
]

export function Footer() {
  return (
    <footer
      className="flex items-center justify-between px-16 py-8"      style={{ borderTop: '0.5px solid rgba(212,175,55,0.35)', backgroundColor: 'rgba(212, 175, 55, 0.8)' }}
    >

      <WordmarkLogo width={56} style={{ opacity: 1 }} />

      <div className="flex items-center gap-8">
        {footerLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="hover:opacity-70 transition-opacity duration-200"
            style={{
              fontFamily: SERIF,
              fontSize: '17px',
              letterSpacing: '0.12em',
              textTransform: 'lowercase',
              fontWeight: 600,
              color: '#181816',
              opacity: 0.5,
            }}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* <p
        className="flex items-center gap-1"
        style={{
          fontFamily: SANS,
          fontSize: '12px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          fontWeight: 400,
          color: '#181816',
          opacity: 0.4,
        }}
      >
        © {new Date().getFullYear()}{' '}
        <WordmarkLogo width={38} style={{ display: 'inline-block', verticalAlign: 'middle', marginBottom: '1px' }} />
        {' '}skincare · Steveston Village, BC
      </p> */}
    </footer>
  )
}
