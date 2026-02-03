import type { Metadata } from 'next'
import { OrdersContent } from './orders-content'

export const metadata: Metadata = {
  title: 'My Orders',
  description: 'View your order history and download purchased products.',
}

export default function OrdersPage() {
  return <OrdersContent />
}
