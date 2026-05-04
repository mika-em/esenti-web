'use client'

import { useEffect, useState, CSSProperties } from 'react'

type Props = {
  text: string
  style?: CSSProperties
  className?: string
}

// Renders text with a staggered word-fade-in (replaces character-by-character typing)
export function TypewriterText({ text, style, className }: Props) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(false)
    const t = setTimeout(() => setVisible(true), 500)
    return () => clearTimeout(t)
  }, [text])

  // Build flat token list: words and line-breaks
  type Token =
    | { kind: 'word';  text: string; index: number }
    | { kind: 'break'; index: number }

  const tokens: Token[] = []
  let n = 0

  text.split('\n').forEach((line, li) => {
    if (li > 0) tokens.push({ kind: 'break', index: n++ })
    line.split(' ').filter(w => w.length > 0).forEach(word => {
      tokens.push({ kind: 'word', text: word, index: n++ })
    })
  })

  return (
    <span className={className} style={{ display: 'block', ...style }}>
      {tokens.map((tok, i) => {
        if (tok.kind === 'break') return <br key={i} />
        const delay = tok.index * 0.07
        return (
          <span
            key={i}
            style={{
              display: 'inline-block',
              marginRight: '0.28em',
              opacity:   visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(6px)',
              transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
            }}
          >
            {tok.text}
          </span>
        )
      })}
    </span>
  )
}
