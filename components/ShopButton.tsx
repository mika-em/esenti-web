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
      className="inline-flex items-center 
      uppercase font-medium text-[11px] 
      tracking-[0.18em]  border-[#D4AF37] 
      opacity-90
      bg-[#D4AF37] text-white px-3 py-3
       hover:text-black hover:bg-[#B8960C] transition-all duration-200 whitespace-nowrap w-auto max-w-max"
      style={{
        fontFamily: SANS,
      }}
    >
      {label}
    </a>
  )
}
