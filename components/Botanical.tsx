import { CSSProperties } from 'react'

type Props = {
  style?: CSSProperties
  flip?: boolean
}

export function Botanical({ style, flip }: Props) {
  return (
    <svg
      viewBox="0 0 90 200"
      fill="none"
      stroke="#D4AF37"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      style={{
        pointerEvents: 'none',
        transform: flip ? 'scaleX(-1)' : undefined,
        ...style,
      }}
    >
      {/* main stem — gently curved */}
      <path d="M45 192 C43 155 47 115 45 10" />

      {/* left leaves — alternating heights */}
      <path d="M45 158 C28 144 20 124 23 112 C35 120 45 158" />
      <path d="M45 118 C30 106 23 88 26 77 C38 85 45 118" />
      <path d="M45 80  C31 70  25 54  27 44  C38 52 45 80" />
      <path d="M45 44  C33 36  28 22  30 14  C40 21 45 44" />

      {/* right leaves */}
      <path d="M45 138 C61 124 68 104 65 92  C53 100 45 138" />
      <path d="M45 98  C59 86  65 68  62 58  C51 66 45 98" />
      <path d="M45 62  C58 52  64 36  61 28  C51 35 45 62" />
      <path d="M45 28  C57 20  62 8   59 2   C50 8  45 28" />

      {/* small tendril tip */}
      <path d="M45 10 C43 4 47 0 45 0" />
    </svg>
  )
}
