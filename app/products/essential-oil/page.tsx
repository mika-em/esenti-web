import type { Metadata } from 'next'
import { products } from '@/lib/products'
import { ProductPage } from '@/components/ProductPage'

const product = products.find((p) => p.slug === 'essential-oil')!

export const metadata: Metadata = {
  title: product.name,
  description: product.shortDescription,
}

export default function Page() {
  return <ProductPage product={product} />
}
