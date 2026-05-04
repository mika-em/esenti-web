// Design tokens — import these in any component
export const SERIF = "'Cormorant Garamond', Georgia, serif"
export const SANS  = "'DM Sans', system-ui, sans-serif"

export const COLOR = {
  background: '#faf9f7',
  foreground: '#181816',
  gold:        '#D4AF37',
  goldDark:    '#B8960C',
  rule:        'rgba(0,0,0,0.07)',
}

// ── Typography system ────────────────────────────────────────────
//
//  Product title    DM Sans · lowercase · 600 · ls 0.22em
//  Product tagline  Cormorant · italic · 400 · sentence case
//  Page h1          Cormorant · normal · 300 · lowercase
//  Page subtitle    Cormorant · italic · 400 · lowercase
//  Section label    DM Sans · UPPERCASE · 400 · ls 0.3em · op 0.35
//  Detail label     DM Sans · UPPERCASE · 500 · ls 0.26em · op 0.30
//  Body copy        Cormorant · italic · 400 · sentence case
//  CTA / button     DM Sans · UPPERCASE · 500 · ls 0.18em
//
// ─────────────────────────────────────────────────────────────────

export const TY = {
  // Product name chips & headings
  productTitle: {
    fontFamily: SANS,
    fontWeight: 500,
    letterSpacing: '0.27em',
    color: '#181816',
  } as const,

  // Short tagline / first-sentence description under a product
  productTagline: {
    fontFamily: SERIF,
    fontStyle: 'italic' as const,
    fontWeight: 400,
    lineHeight: 1.72,
    color: '#181816',
    opacity: 0.52,
  } as const,

  // Large page titles (h1)
  pageHeading: {
    fontFamily: SERIF,
    fontWeight: 300,
    letterSpacing: '0.04em',
    color: '#181816',
  } as const,

  // Italic subtitle beneath h1
  pageSubtitle: {
    fontFamily: SERIF,
    
    fontStyle: 'italic' as const,
    fontWeight: 400,
    lineHeight: 1.75,
    color: '#181816',
    opacity: 0.45,
  } as const,

  // DM Sans UPPERCASE section labels ("the collection", "what people say")
  sectionLabel: {
    fontFamily: SANS,
    fontSize: '15px',
    letterSpacing: '0.3em',
    textTransform: 'uppercase' as const,
    fontWeight: 400,
    color: '#181816',
    opacity: 0.35,
  } as const,

  // DM Sans UPPERCASE detail labels ("key ingredients", "suitable for")
  detailLabel: {
    fontFamily: SANS,
    fontSize: '10px',
    letterSpacing: '0.26em',
    textTransform: 'uppercase' as const,
    fontWeight: 500,
    color: '#181816',
    opacity: 0.70,
  } as const,

  // Italic serif body copy
  body: {
    fontFamily: SERIF,
    fontStyle: 'italic' as const,
    fontWeight: 400,
    lineHeight: 1.88,
    color: '#181816',
    opacity: 0.58,
   
  } as const,
} as const

export const goldRule = {
  height: '0.5px',
  background: '#D4AF37',
  opacity: 0.4,
} as const

export const hairline = {
  height: '0.5px',
  background: 'rgba(0,0,0,0.07)',
} as const
