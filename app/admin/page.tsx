'use client'

import Link from 'next/link'
import { DollarSign, Package, ShoppingCart, Users, ArrowUp, ArrowDown, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { getAnalyticsData, orders, products } from '@/lib/data'

const stats = [
  {
    title: 'Total Revenue',
    icon: DollarSign,
    getValue: (data: ReturnType<typeof getAnalyticsData>) => `$${data.totalRevenue.toLocaleString()}`,
    change: '+12.5%',
    trend: 'up' as const,
  },
  {
    title: 'Total Orders',
    icon: ShoppingCart,
    getValue: (data: ReturnType<typeof getAnalyticsData>) => data.totalOrders.toString(),
    change: '+8.2%',
    trend: 'up' as const,
  },
  {
    title: 'Products',
    icon: Package,
    getValue: (data: ReturnType<typeof getAnalyticsData>) => data.totalProducts.toString(),
    change: '+2',
    trend: 'up' as const,
  },
  {
    title: 'Customers',
    icon: Users,
    getValue: (data: ReturnType<typeof getAnalyticsData>) => data.totalCustomers.toString(),
    change: '+15.3%',
    trend: 'up' as const,
  },
]

export default function AdminDashboard() {
  const analytics = getAnalyticsData()
  const recentOrders = orders.slice(0, 5)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-accent/20 text-accent">Completed</Badge>
      case 'pending':
        return <Badge variant="secondary">Pending</Badge>
      case 'cancelled':
        return <Badge variant="destructive">Cancelled</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold sm:text-3xl">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your store performance
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.getValue(analytics)}</div>
              <div className="flex items-center text-xs">
                {stat.trend === 'up' ? (
                  <ArrowUp className="mr-1 h-3 w-3 text-accent" />
                ) : (
                  <ArrowDown className="mr-1 h-3 w-3 text-destructive" />
                )}
                <span className={stat.trend === 'up' ? 'text-accent' : 'text-destructive'}>
                  {stat.change}
                </span>
                <span className="ml-1 text-muted-foreground">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Orders */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Orders</CardTitle>
            <Link href="/admin/orders">
              <Button variant="ghost" size="sm" className="gap-1">
                View All
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium">{order.customerName}</p>
                    <p className="text-sm text-muted-foreground">{order.id}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    {getStatusBadge(order.status)}
                    <span className="font-medium">${order.total}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Top Products</CardTitle>
            <Link href="/admin/products">
              <Button variant="ghost" size="sm" className="gap-1">
                View All
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analytics.topProducts.map((product, index) => (
                <div
                  key={product.name}
                  className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-sm font-medium">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {product.downloads.toLocaleString()} downloads
                      </p>
                    </div>
                  </div>
                  <span className="font-medium text-accent">
                    ${Math.round(product.revenue).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Link href="/admin/products/new">
              <Button>Add New Product</Button>
            </Link>
            <Link href="/admin/orders">
              <Button variant="outline">View Orders</Button>
            </Link>
            <Link href="/admin/analytics">
              <Button variant="outline">View Analytics</Button>
            </Link>
            <Link href="/" target="_blank">
              <Button variant="outline">View Store</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
