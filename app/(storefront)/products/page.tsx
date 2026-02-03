import { Suspense } from 'react'
import type { Metadata } from 'next'
import { ProductsContent } from './products-content'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse our collection of premium digital products including design systems, templates, courses, and development tools.',
}

function ProductsLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="animate-pulse space-y-8">
        <div className="h-10 w-48 bg-muted rounded" />
        <div className="h-6 w-96 bg-muted rounded" />
        <div className="flex gap-4">
          <div className="h-10 flex-1 bg-muted rounded" />
          <div className="h-10 w-40 bg-muted rounded" />
          <div className="h-10 w-40 bg-muted rounded" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-[4/3] bg-muted rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductsLoading />}>
      <ProductsContent />
    </Suspense>
  )
}
