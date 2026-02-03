'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Package, Download, ExternalLink, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useAuthStore } from '@/lib/auth-store'
import { orders } from '@/lib/data'

export function OrdersContent() {
  const { user, isAuthenticated } = useAuthStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <h1 className="text-3xl font-bold sm:text-4xl">My Orders</h1>
        <div className="mt-8 animate-pulse space-y-4">
          <div className="h-32 rounded-lg bg-secondary" />
          <div className="h-32 rounded-lg bg-secondary" />
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <h1 className="text-3xl font-bold sm:text-4xl">My Orders</h1>
        <div className="mt-12 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
            <Package className="h-8 w-8 text-muted-foreground" />
          </div>
          <h2 className="mt-4 text-lg font-semibold">Sign in to view your orders</h2>
          <p className="mt-2 text-muted-foreground">
            You need to be logged in to see your order history.
          </p>
          <Link href="/login">
            <Button className="mt-6">Sign In</Button>
          </Link>
        </div>
      </div>
    )
  }

  // For demo, show orders for demo users or empty for new users
  const userOrders = user?.email.includes('example.com')
    ? orders.filter((o) => o.customerEmail === user.email)
    : []

  if (userOrders.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <h1 className="text-3xl font-bold sm:text-4xl">My Orders</h1>
        <div className="mt-12 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
            <ShoppingBag className="h-8 w-8 text-muted-foreground" />
          </div>
          <h2 className="mt-4 text-lg font-semibold">No orders yet</h2>
          <p className="mt-2 text-muted-foreground">
            When you make a purchase, your orders will appear here.
          </p>
          <Link href="/products">
            <Button className="mt-6">Browse Products</Button>
          </Link>
        </div>
      </div>
    )
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-accent/20 text-accent">Completed</Badge>
      case 'pending':
        return <Badge variant="secondary">Pending</Badge>
      case 'cancelled':
        return <Badge variant="destructive">Cancelled</Badge>
      case 'refunded':
        return <Badge variant="outline">Refunded</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <h1 className="text-3xl font-bold sm:text-4xl">My Orders</h1>
      <p className="mt-2 text-muted-foreground">
        View your order history and download purchased products
      </p>

      <div className="mt-8 space-y-4">
        {userOrders.map((order) => (
          <div
            key={order.id}
            className="rounded-lg border border-border bg-card overflow-hidden"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border bg-secondary/30 px-4 py-3">
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <span className="font-medium">{order.id}</span>
                <span className="text-muted-foreground">
                  {new Date(order.createdAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {getStatusBadge(order.status)}
              </div>
            </div>

            <div className="p-4">
              {order.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 shrink-0 rounded bg-secondary flex items-center justify-center text-sm font-medium text-muted-foreground/50">
                      {item.productName.charAt(0)}
                    </div>
                    <span className="font-medium">{item.productName}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span>${item.price}</span>
                    {order.status === 'completed' && (
                      <Button variant="ghost" size="sm" className="gap-1">
                        <Download className="h-4 w-4" />
                        <span className="hidden sm:inline">Download</span>
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-border px-4 py-3">
              <span className="text-sm text-muted-foreground">Total</span>
              <span className="font-semibold">${order.total}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
