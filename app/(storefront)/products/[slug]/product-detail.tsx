'use client'

import Link from 'next/link'
import { Star, Download, FileType, HardDrive, ShoppingCart, Check, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { useCartStore } from '@/lib/cart-store'
import type { Product } from '@/lib/data'

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const { addItem, items } = useCartStore()
  const isInCart = items.some((item) => item.product.id === product.id)

  const features = [
    'Instant digital download',
    'Lifetime access to updates',
    'Commercial license included',
    'Premium support',
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <Link
        href="/products"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Products
      </Link>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="h-full w-full object-cover"
          />
          {product.featured && (
            <Badge className="absolute left-4 top-4 bg-accent text-accent-foreground">
              Featured
            </Badge>
          )}
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <Badge variant="secondary">{product.category}</Badge>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="text-sm font-medium">{product.rating}</span>
            </div>
          </div>

          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">{product.name}</h1>

          <p className="mt-4 text-lg text-muted-foreground">{product.description}</p>

          <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Download className="h-4 w-4" />
              {product.downloads.toLocaleString()} downloads
            </span>
            <span className="flex items-center gap-1">
              <FileType className="h-4 w-4" />
              {product.fileType}
            </span>
            <span className="flex items-center gap-1">
              <HardDrive className="h-4 w-4" />
              {product.fileSize}
            </span>
          </div>

          <Separator className="my-6" />

          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold">${product.price}</span>
            <span className="text-muted-foreground">one-time purchase</span>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="flex-1 gap-2"
              onClick={() => addItem(product)}
              disabled={isInCart}
            >
              {isInCart ? (
                <>
                  <Check className="h-4 w-4" />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </>
              )}
            </Button>
            {isInCart && (
              <Link href="/cart">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                  View Cart
                </Button>
              </Link>
            )}
          </div>

          <div className="mt-4">
            <WhatsAppButton
              message={`Hi! I have a question about ${product.name} ($${product.price})`}
              className="w-full sm:w-auto"
            />
          </div>

          <Separator className="my-6" />

          {/* Features */}
          <div>
            <h3 className="font-semibold">What&apos;s Included</h3>
            <ul className="mt-4 space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-accent" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold">About this product</h2>
          <div className="prose prose-invert mt-4 max-w-none">
            <p>{product.description}</p>
            <p>
              This premium digital product comes with everything you need to get started quickly.
              Whether you&apos;re a seasoned professional or just getting started, our comprehensive
              resources will help you achieve your goals faster.
            </p>
            <h3>Key Features</h3>
            <ul>
              <li>Professionally designed and thoroughly tested</li>
              <li>Well-documented with usage examples</li>
              <li>Regular updates and improvements</li>
              <li>Compatible with popular tools and frameworks</li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="font-semibold">Product Details</h3>
            <dl className="mt-4 space-y-4 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Category</dt>
                <dd className="font-medium">{product.category}</dd>
              </div>
              <Separator />
              <div className="flex justify-between">
                <dt className="text-muted-foreground">File Type</dt>
                <dd className="font-medium">{product.fileType}</dd>
              </div>
              <Separator />
              <div className="flex justify-between">
                <dt className="text-muted-foreground">File Size</dt>
                <dd className="font-medium">{product.fileSize}</dd>
              </div>
              <Separator />
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Downloads</dt>
                <dd className="font-medium">{product.downloads.toLocaleString()}</dd>
              </div>
              <Separator />
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Rating</dt>
                <dd className="flex items-center gap-1 font-medium">
                  <Star className="h-3 w-3 fill-accent text-accent" />
                  {product.rating}
                </dd>
              </div>
              <Separator />
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Released</dt>
                <dd className="font-medium">
                  {new Date(product.createdAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
