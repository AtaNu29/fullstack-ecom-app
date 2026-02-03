'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Trash2, ShoppingBag, ArrowRight, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useCartStore } from '@/lib/cart-store'

export function CartContent() {
  const { items, removeItem, clearCart, getTotal } = useCartStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <h1 className="text-3xl font-bold sm:text-4xl">Shopping Cart</h1>
        <div className="mt-8 animate-pulse">
          <div className="h-32 rounded-lg bg-secondary" />
        </div>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <h1 className="text-3xl font-bold sm:text-4xl">Shopping Cart</h1>
        <div className="mt-12 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
            <ShoppingBag className="h-8 w-8 text-muted-foreground" />
          </div>
          <h2 className="mt-4 text-lg font-semibold">Your cart is empty</h2>
          <p className="mt-2 text-muted-foreground">
            Looks like you have not added anything to your cart yet.
          </p>
          <Link href="/products">
            <Button className="mt-6 gap-2">
              Browse Products
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const total = getTotal()
  const tax = total * 0.1 // 10% tax for demo
  const grandTotal = total + tax

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold sm:text-4xl">Shopping Cart</h1>
        <Button
          variant="ghost"
          size="sm"
          onClick={clearCart}
          className="text-muted-foreground hover:text-destructive"
        >
          Clear Cart
        </Button>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-4 rounded-lg border border-border bg-card p-4"
              >
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-md bg-secondary">
                  <div className="flex h-full items-center justify-center text-2xl font-bold text-muted-foreground/30">
                    {item.product.name.charAt(0)}
                  </div>
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between">
                    <div>
                      <Link
                        href={`/products/${item.product.slug}`}
                        className="font-medium hover:text-accent"
                      >
                        {item.product.name}
                      </Link>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.product.category} &bull; {item.product.fileType}
                      </p>
                    </div>
                    <span className="font-semibold">${item.product.price}</span>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-2">
                    <span className="text-sm text-muted-foreground">
                      Digital product - Instant download
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(item.product.id)}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Remove</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/products"
            className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Continue Shopping
          </Link>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-lg border border-border bg-card p-6">
            <h2 className="text-lg font-semibold">Order Summary</h2>

            <div className="mt-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tax (10%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            <Link href="/checkout" className="mt-6 block">
              <Button className="w-full gap-2">
                Proceed to Checkout
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              Secure checkout powered by industry-standard encryption
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
