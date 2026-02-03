import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Download, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { WhatsAppButton } from '@/components/whatsapp-button'

export const metadata: Metadata = {
  title: 'Order Confirmed',
  description: 'Your order has been confirmed. Thank you for your purchase!',
}

export default function CheckoutSuccessPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
          <CheckCircle className="h-8 w-8 text-accent" />
        </div>
        <h1 className="mt-6 text-3xl font-bold sm:text-4xl">Order Confirmed!</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Thank you for your purchase. Your order has been successfully processed.
        </p>
      </div>

      <div className="mt-12 rounded-lg border border-border bg-card p-6">
        <h2 className="text-lg font-semibold">What happens next?</h2>
        <ul className="mt-4 space-y-4">
          <li className="flex gap-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/20 text-xs font-medium text-accent">
              1
            </div>
            <div>
              <p className="font-medium">Check your email</p>
              <p className="mt-1 text-sm text-muted-foreground">
                We have sent a confirmation email with your receipt and download links.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/20 text-xs font-medium text-accent">
              2
            </div>
            <div>
              <p className="font-medium">Download your products</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Click the download links in your email or visit your orders page to access your purchases.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/20 text-xs font-medium text-accent">
              3
            </div>
            <div>
              <p className="font-medium">Get started</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Unzip your files and follow the included documentation to start using your new products.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
        <Link href="/orders">
          <Button size="lg" className="w-full gap-2 sm:w-auto">
            <Download className="h-4 w-4" />
            Go to My Orders
          </Button>
        </Link>
        <Link href="/products">
          <Button size="lg" variant="outline" className="w-full gap-2 sm:w-auto bg-transparent">
            Continue Shopping
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      <div className="mt-12 rounded-lg border border-border bg-secondary/30 p-6 text-center">
        <h3 className="font-semibold">Need help with your purchase?</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Our support team is here to help you get the most out of your products.
        </p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-center">
          <WhatsAppButton message="Hi! I just made a purchase and have a question." />
          <Link href="/contact">
            <Button variant="outline">Contact Support</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
