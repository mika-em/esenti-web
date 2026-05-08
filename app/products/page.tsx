import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { products } from '@/lib/products'
import { TY } from '@/lib/styles'

export const metadata: Metadata = {
  title: 'our products',
  description: 'Explore the esenti skincare collection — hand-crafted organic skincare made to order in Steveston Village, BC.',
}

const imageTones = ['#ece9e3', '#e5e1d9', '#dedad2', '#d6d1c9', '#d0cbc3']

function ProductCell({ product, bg, wide = false }: { product: (typeof products)[0]; bg: string; wide?: boolean }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block"
      style={{ gridColumn: wide ? 'span 2' : 'span 1', background: 'var(--background)', textDecoration: 'none', color: 'inherit' }}>
      <div className="relative overflow-hidden"
        style={{ aspectRatio: wide ? '5/2' : '3/2', background: bg }}>
        {product.images?.[0] ? (
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span style={{ ...TY.sectionLabel, fontSize: '7px' }}>coming soon</span>
          </div>
        )}
      </div>
      <div className="flex justify-between items-end p-5 md:p-7">
        <div className="flex-1 min-w-0 pr-4">
          <h2 className="transition-colors duration-300 group-hover:text-[#D4AF37]! mb-1"
            style={{ ...TY.productTitle, fontSize: 'clamp(13px,1.5vw,15px)' }}>
            {product.name}
          </h2>
          <span style={{ ...TY.sectionLabel, fontSize: '8px', color: '#D4AF37', opacity: 0.8 }}>
            {product.size}
          </span>
          <p className="mt-1 line-clamp-2"
            style={{ ...TY.productTagline, fontSize: '12px', maxWidth: wide ? '380px' : '220px' }}>
            {product.shortDescription.split('.')[0]}.
          </p>
        </div>
        <span style={{ ...TY.pageHeading, fontSize: '16px', opacity: 0.2, flexShrink: 0 }}>→</span>
      </div>
    </Link>
  )
}

export default function ProductsPage() {
  return (
    <>
      <div className="px-6 md:px-16 pt-12 md:pt-14 pb-8 md:pb-10">
        <h1 className="mb-2" style={{ ...TY.pageHeading, fontSize: 'clamp(32px,5vw,48px)' }}>
          our products
        </h1>
        <p className="mb-6" style={{ ...TY.pageSubtitle, fontSize: '15px' }}>
          hand-crafted organic skincare, made to order in Steveston Village, BC.
        </p>
        <div style={{ height: '0.5px', background: '#D4AF37', opacity: 0.4 }} />
      </div>

      {/* Responsive mosaic: 1 col mobile, 2 col sm+, 2 col lg (with wide spanning 2) */}
      <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '1px', background: 'rgba(0,0,0,0.06)' }}>
        {products.slice(0, 4).map((product, i) => (
          <ProductCell key={product.id} product={product} bg={imageTones[i]} />
        ))}
        {/* Last product — full width on all sizes */}
        <ProductCell product={products[4]} bg={imageTones[4]} wide />
      </div>
    </>
  )
}
