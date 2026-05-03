// Design tokens — import these in any component
export const SERIF = "'Cormorant Garamond', Georgia, serif"
export const SANS = "'DM Sans', system-ui, sans-serif"

export const COLOR = {
  background: '#faf9f7',
  foreground: '#181816',
  gold: '#D4AF37',
  rule: 'rgba(0,0,0,0.07)',
  ruleLight: 'rgba(0,0,0,0.06)',
}

export const goldRule = {
  height: '0.5px',
  background: '#D4AF37',
  opacity: 0.35,
} as const

export const hairline = {
  height: '0.5px' ,
  background: 'rgba(0,0,0,0.07)',
} as const
