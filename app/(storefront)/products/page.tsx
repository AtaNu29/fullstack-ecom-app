import type { Metadata } from 'next'
import { ProductsContent } from './products-content'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse our collection of premium digital products including design systems, templates, courses, and development tools.',
}

export default function ProductsPage() {
  return <ProductsContent />
}
