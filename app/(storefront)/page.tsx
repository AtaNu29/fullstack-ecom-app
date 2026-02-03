import Link from 'next/link'
import { ArrowRight, Download, Users, Shield, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProductCard } from '@/components/product-card'
import { getFeaturedProducts, getCategories } from '@/lib/data'

const stats = [
  { label: 'Products', value: '50+' },
  { label: 'Downloads', value: '15K+' },
  { label: 'Happy Customers', value: '5K+' },
  { label: 'Countries', value: '80+' },
]

const features = [
  {
    icon: Download,
    title: 'Instant Downloads',
    description: 'Get immediate access to your purchased products with secure, fast downloads.',
  },
  {
    icon: Shield,
    title: 'Lifetime Access',
    description: 'Once purchased, your products are yours forever with free updates included.',
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Join our community of creators and get help when you need it.',
  },
  {
    icon: Zap,
    title: 'Quality Guaranteed',
    description: 'Every product is thoroughly tested and reviewed for quality assurance.',
  },
]

export default function HomePage() {
  const featuredProducts = getFeaturedProducts()
  const categories = getCategories()

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-balance">Premium digital products for creators</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">
              Discover high-quality design systems, templates, courses, and development tools. 
              Everything you need to build better products, faster.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/products">
                <Button size="lg" className="gap-2">
                  Browse Products
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-border bg-card p-6">
                <p className="text-3xl font-bold text-accent">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="border-t border-border bg-card/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Featured Products</h2>
              <p className="mt-2 text-muted-foreground">
                Our most popular and highly-rated digital products
              </p>
            </div>
            <Link href="/products" className="hidden sm:block">
              <Button variant="ghost" className="gap-2">
                View All
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/products">
              <Button variant="outline" className="gap-2 bg-transparent">
                View All Products
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <h2 className="text-2xl font-bold sm:text-3xl">Browse by Category</h2>
          <p className="mt-2 text-muted-foreground">
            Find exactly what you need in our organized collection
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/products?category=${category.toLowerCase()}`}
                className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-accent hover:bg-card/80"
              >
                <h3 className="text-lg font-semibold transition-colors group-hover:text-accent">
                  {category}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Browse {category.toLowerCase()} products
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-card/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">Why Choose DigitalHub?</h2>
            <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
              We are committed to providing the best digital products and customer experience
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-br from-accent/20 via-accent/10 to-transparent p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold sm:text-3xl">Ready to get started?</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Join thousands of creators and developers who trust DigitalHub for their digital needs.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/products">
                <Button size="lg">Browse Products</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
