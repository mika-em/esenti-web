'use client'

import { useState, useEffect, CSSProperties } from 'react'

type Props = {
  text: string
  style?: CSSProperties
  className?: string
}

export function TypewriterText({ text, style, className }: Props) {
  const [displayed, setDisplayed] = useState('')
  const [cursorVisible, setCursorVisible] = useState(true)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const delay = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1))
          i++
        } else {
          clearInterval(interval)
          // fade cursor out after a beat
          setTimeout(() => setDone(true), 800)
        }
      }, 38)
      return () => clearInterval(interval)
    }, 500)
    return () => clearTimeout(delay)
  }, [text])

  // blink cursor while typing
  useEffect(() => {
    if (done) { setCursorVisible(false); return }
    const blink = setInterval(() => setCursorVisible(v => !v), 530)
    return () => clearInterval(blink)
  }, [done])

  return (
    <span className={className} style={style}>
      {displayed}
      <span
        aria-hidden
        style={{
          display: 'inline-block',
          width: '1.5px',
          height: '0.85em',
          background: 'currentColor',
          marginLeft: '3px',
          verticalAlign: 'text-bottom',
          opacity: done ? 0 : cursorVisible ? 0.7 : 0,
          transition: done ? 'opacity 0.6s ease' : 'none',
        }}
      />
    </span>
  )
}
