import type { Metadata } from 'next'
import { products } from '@/lib/products'
import { ProductPage } from '@/components/ProductPage'

const product = products.find((p) => p.slug === 'handmade-soap')!

// TODO: improve title format to `${product.name} — esenti` and add og:image once product photos are confirmed
export const metadata: Metadata = {
  title: product.name,
  description: product.shortDescription,
}

export default function Page() {
  return <ProductPage product={product} />
}
