'use client'

import React from "react"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ArrowLeft, Lock, CreditCard, Check, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useCartStore } from '@/lib/cart-store'
import { useAuthStore } from '@/lib/auth-store'

export function CheckoutContent() {
  const router = useRouter()
  const { items, getTotal, clearCart } = useCartStore()
  const { user, isAuthenticated } = useAuthStore()
  const [mounted, setMounted] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
  })

  useEffect(() => {
    setMounted(true)
    if (user) {
      setFormData((prev) => ({
        ...prev,
        email: user.email,
        name: user.name,
      }))
    }
  }, [user])

  if (!mounted) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <h1 className="text-3xl font-bold sm:text-4xl">Checkout</h1>
        <div className="mt-8 animate-pulse">
          <div className="h-64 rounded-lg bg-secondary" />
        </div>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <h1 className="text-3xl font-bold sm:text-4xl">Checkout</h1>
        <div className="mt-12 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
            <ShoppingBag className="h-8 w-8 text-muted-foreground" />
          </div>
          <h2 className="mt-4 text-lg font-semibold">Your cart is empty</h2>
          <p className="mt-2 text-muted-foreground">
            Add some products to your cart before checking out.
          </p>
          <Link href="/products">
            <Button className="mt-6">Browse Products</Button>
          </Link>
        </div>
      </div>
    )
  }

  const total = getTotal()
  const tax = total * 0.1
  const grandTotal = total + tax

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    clearCart()
    router.push('/checkout/success')
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <Link
        href="/cart"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Cart
      </Link>

      <h1 className="text-3xl font-bold sm:text-4xl">Checkout</h1>

      <form onSubmit={handleSubmit} className="mt-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Checkout Form */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div>
              <h2 className="text-lg font-semibold">Contact Information</h2>
              <div className="mt-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                  />
                  <p className="text-xs text-muted-foreground">
                    Your receipt and download links will be sent here
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <h2 className="text-lg font-semibold">Payment Method</h2>
              <RadioGroup
                value={paymentMethod}
                onValueChange={setPaymentMethod}
                className="mt-4 space-y-3"
              >
                <div className="flex items-center space-x-3 rounded-lg border border-border p-4">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="flex flex-1 cursor-pointer items-center gap-3">
                    <CreditCard className="h-5 w-5" />
                    <div>
                      <p className="font-medium">Credit / Debit Card</p>
                      <p className="text-xs text-muted-foreground">Visa, Mastercard, Amex</p>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 rounded-lg border border-border p-4">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <Label htmlFor="paypal" className="flex flex-1 cursor-pointer items-center gap-3">
                    <div className="flex h-5 w-5 items-center justify-center text-sm font-bold text-blue-500">
                      P
                    </div>
                    <div>
                      <p className="font-medium">PayPal</p>
                      <p className="text-xs text-muted-foreground">Pay with your PayPal account</p>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Card Details */}
            {paymentMethod === 'card' && (
              <div>
                <h2 className="text-lg font-semibold">Card Details</h2>
                <div className="mt-4 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      required
                      value={formData.cardNumber}
                      onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input
                        id="expiry"
                        required
                        value={formData.expiry}
                        onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                        placeholder="MM / YY"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input
                        id="cvc"
                        required
                        value={formData.cvc}
                        onChange={(e) => setFormData({ ...formData, cvc: e.target.value })}
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === 'paypal' && (
              <div className="rounded-lg border border-border bg-secondary/30 p-6 text-center">
                <p className="text-sm text-muted-foreground">
                  You will be redirected to PayPal to complete your purchase.
                </p>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div>
            <div className="sticky top-24 rounded-lg border border-border bg-card p-6">
              <h2 className="text-lg font-semibold">Order Summary</h2>

              <div className="mt-4 space-y-3">
                {items.map((item) => (
                  <div key={item.product.id} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{item.product.name}</span>
                    <span>${item.product.price}</span>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax (10%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>

              <Button
                type="submit"
                disabled={isProcessing}
                className="mt-6 w-full gap-2"
                size="lg"
              >
                {isProcessing ? (
                  'Processing...'
                ) : (
                  <>
                    <Lock className="h-4 w-4" />
                    Pay ${grandTotal.toFixed(2)}
                  </>
                )}
              </Button>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Lock className="h-3 w-3" />
                Secure checkout - SSL encrypted
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
