import Link from 'next/link'
import { products } from '@/lib/products'
import { TY } from '@/lib/styles'

const signatures: Record<string, string> = {
  'handmade-soap':    'coconut milk · mango butter',
  'custom-face-oil':  'cold-pressed · custom blended',
  'luminere-eye-oil': 'argan · jojoba · carrot seed',
  'essential-oil':    'bottled on demand',
  'body-mist':        'six botanical blends',
}

const imageTones = ['#ece9e3', '#e5e1d9', '#dedad2', '#d6d1c9', '#d0cbc3']

export function ProductCarousel() {
  return (
    <section id="collection" style={{ borderBottom: '0.5px solid rgba(212,175,55,0.3)' }}>

      {/* Section heading */}
      <div className="flex items-center gap-5 px-6 md:px-16 pt-12 md:pt-16 pb-8 md:pb-10">
        <span style={{ ...TY.pageHeading, fontSize: 'clamp(22px,3.5vw,32px)', whiteSpace: 'nowrap' }}>
          our products
        </span>
        <div className="flex-1 h-px" style={{ background: '#D4AF37', opacity: 0.35 }} />
      </div>

      {/* Responsive grid: 2 cols mobile → 3 cols tablet → 5 cols desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
        style={{ gap: '1px', background: 'rgba(0,0,0,0.05)' }}>
        {products.map((product, i) => (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="group"
            style={{ background: 'var(--background)', textDecoration: 'none', color: 'inherit', overflow: 'hidden' }}
          >
            {/* Image */}
            <div className="relative" style={{ aspectRatio: '4/5', background: imageTones[i], overflow: 'hidden' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <span style={{ ...TY.sectionLabel, fontSize: '7px' }}>coming soon</span>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'rgba(212,175,55,0.16)' }} />
            </div>

            {/* Caption */}
            <div className="px-4 md:px-5 pt-3 pb-5 md:pb-6 text-center">
              <h3 className="transition-colors duration-300 group-hover:text-[#D4AF37]! mb-1"
                style={{ ...TY.productTitle, fontSize: 'clamp(10px,1.2vw,12px)' }}>
                {product.name}
              </h3>
              <p style={{ ...TY.productTagline, fontSize: '12px', opacity: 0.48 }}>
                {signatures[product.id]}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
