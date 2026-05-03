import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'esenti — the art of blending',
    template: '%s | esenti skincare',
  },
  icons: {
    icon: '/logo.svg',
  },
  description:
    'Hand-crafted organic skincare made to order in Stevestion Village, BC. Custom face oils, handmade soaps, essential oils and more.',
  openGraph: {
    title: 'esenti — the art of blending',
    description:
      'Hand-crafted organic skincare made to order in Stevestion Village, BC.',
    siteName: 'esenti skincare',
    locale: 'en_CA',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body
        className="min-h-screen flex flex-col"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
