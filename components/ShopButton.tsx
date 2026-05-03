import { SANS } from '@/lib/styles'

type Props = {
  href: string
  label?: string
}

export function ShopButton({ href, label = 'shop this product' }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block shop-btn"
      style={{
        fontFamily: SANS,
        fontSize: '10px',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        fontWeight: 300,
        border: '0.5px solid #B8960C',
        color: '#B8960C',
        padding: '7px 18px',
      }}
    >
      {label}
    </a>
  )
}
