import Link from 'next/link'
import { TY, SANS } from '@/lib/styles'
import { navLinks } from '@/lib/products'

export function Footer() {
  return (
    <footer style={{ borderTop: '0.5px solid rgba(212,175,55,0.35)' }}>

      {/* Main row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 px-6 md:px-16 py-10 md:py-12">

        {/* Brand */}
        <div className="flex flex-col gap-1">
          <span style={{ ...TY.pageHeading, fontSize: '18px', letterSpacing: '0.12em' }}>esenti</span>
          <span style={{ ...TY.sectionLabel, fontSize: '8px', opacity: 0.35 }}>steveston village, bc</span>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap gap-6 md:gap-8">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href}
              className="hover:opacity-100 transition-opacity duration-200"
              style={{ ...TY.sectionLabel, fontSize: '9px', opacity: 0.45 }}>
              {label}
            </Link>
          ))}
        </nav>

        {/* Social */}
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
          className="hover:opacity-100 transition-opacity duration-200 self-start md:self-auto"
          style={{ ...TY.sectionLabel, fontSize: '9px', opacity: 0.45 }}>
          instagram
        </a>

      </div>

      {/* Bottom rule + copyright */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-6 md:px-16 pb-8"
        style={{ borderTop: '0.5px solid rgba(0,0,0,0.06)', paddingTop: '20px' }}>
        <p style={{ fontFamily: SANS, fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: '#181816', opacity: 0.28 }}>
          © {new Date().getFullYear()} esenti skincare
        </p>
        <Link href="/contact-us"
          className="hover:opacity-60 transition-opacity duration-200"
          style={{ fontFamily: SANS, fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: '#181816', opacity: 0.28 }}>
          privacy &amp; contact
        </Link>
      </div>

    </footer>
  )
}
