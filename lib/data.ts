// Mock data store - Ready for Supabase integration
// When Supabase is connected, replace these with actual database queries

export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  category: string
  image: string
  featured: boolean
  downloads: number
  rating: number
  fileType: string
  fileSize: string
  createdAt: string
}

export interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'staff' | 'customer'
  createdAt: string
}

export interface Order {
  id: string
  userId: string
  customerName: string
  customerEmail: string
  items: { productId: string; productName: string; price: number }[]
  total: number
  status: 'pending' | 'completed' | 'cancelled' | 'refunded'
  paymentStatus: 'pending' | 'paid' | 'failed'
  createdAt: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  image: string
  published: boolean
  createdAt: string
}

export interface Page {
  id: string
  title: string
  slug: string
  content: string
  updatedAt: string
}

// Mock Products
export const products: Product[] = [
  {
    id: '1',
    name: 'Pro Design System',
    slug: 'pro-design-system',
    description: 'A comprehensive design system with 500+ components, design tokens, and documentation. Perfect for building consistent, scalable interfaces. Includes Figma files, React components, and style guides.',
    price: 79,
    category: 'Design',
    image: '/products/design-system.jpg',
    featured: true,
    downloads: 2450,
    rating: 4.9,
    fileType: 'ZIP',
    fileSize: '245 MB',
    createdAt: '2025-12-01',
  },
  {
    id: '2',
    name: 'Ultimate Icon Pack',
    slug: 'ultimate-icon-pack',
    description: 'Over 3,000 meticulously crafted icons in multiple formats. SVG, PNG, and icon font included. Perfect for web and mobile applications with consistent styling.',
    price: 49,
    category: 'Design',
    image: '/products/icon-pack.jpg',
    featured: true,
    downloads: 5820,
    rating: 4.8,
    fileType: 'ZIP',
    fileSize: '89 MB',
    createdAt: '2025-11-15',
  },
  {
    id: '3',
    name: 'SaaS Starter Kit',
    slug: 'saas-starter-kit',
    description: 'Full-stack SaaS boilerplate with authentication, billing, dashboards, and more. Built with Next.js, Tailwind, and Stripe. Launch your SaaS in days, not months.',
    price: 149,
    category: 'Development',
    image: '/products/saas-kit.jpg',
    featured: true,
    downloads: 1890,
    rating: 4.9,
    fileType: 'ZIP',
    fileSize: '12 MB',
    createdAt: '2025-10-20',
  },
  {
    id: '4',
    name: 'Marketing Templates Bundle',
    slug: 'marketing-templates-bundle',
    description: 'Professional email templates, landing pages, and social media graphics. 100+ templates ready to customize for your brand. Figma and HTML versions included.',
    price: 39,
    category: 'Marketing',
    image: '/products/marketing-bundle.jpg',
    featured: false,
    downloads: 3210,
    rating: 4.7,
    fileType: 'ZIP',
    fileSize: '156 MB',
    createdAt: '2025-09-10',
  },
  {
    id: '5',
    name: 'E-commerce UI Kit',
    slug: 'ecommerce-ui-kit',
    description: 'Complete e-commerce design system with product pages, cart, checkout, and account screens. Mobile-responsive and conversion-optimized.',
    price: 89,
    category: 'Design',
    image: '/products/ecommerce-kit.jpg',
    featured: true,
    downloads: 1560,
    rating: 4.8,
    fileType: 'ZIP',
    fileSize: '198 MB',
    createdAt: '2025-08-25',
  },
  {
    id: '6',
    name: 'Developer Productivity Course',
    slug: 'developer-productivity-course',
    description: '8-hour video course on mastering developer tools, workflows, and productivity techniques. Includes source files and cheat sheets.',
    price: 129,
    category: 'Courses',
    image: '/products/dev-course.jpg',
    featured: false,
    downloads: 890,
    rating: 4.9,
    fileType: 'MP4 + PDF',
    fileSize: '4.2 GB',
    createdAt: '2025-07-15',
  },
]

// Mock Blog Posts
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Better Design Systems',
    slug: 'building-better-design-systems',
    excerpt: 'Learn the principles and practices behind creating scalable, maintainable design systems that your team will actually use.',
    content: `Design systems are more than just component libraries. They're a shared language between designers and developers that enables teams to build consistent, high-quality products at scale.

## Why Design Systems Matter

In today's fast-paced development environment, consistency and efficiency are paramount. A well-crafted design system provides:

- **Consistency**: Every component looks and behaves the same across your entire product
- **Efficiency**: Designers and developers spend less time reinventing solutions
- **Scalability**: New features can be built faster with existing patterns
- **Quality**: Tested, accessible components out of the box

## Key Components

### Design Tokens

Design tokens are the foundation of any design system. They capture the smallest design decisions—colors, typography, spacing—in a format that can be used across platforms.

### Component Library

Your component library should include everything from basic elements like buttons and inputs to complex patterns like data tables and navigation.

### Documentation

Without good documentation, your design system won't be adopted. Include usage guidelines, code examples, and best practices.`,
    author: 'Alex Chen',
    image: '/blog/design-systems.jpg',
    published: true,
    createdAt: '2026-01-15',
  },
  {
    id: '2',
    title: 'The Future of Digital Products',
    slug: 'future-of-digital-products',
    excerpt: 'Exploring emerging trends in digital product design and development, from AI integration to immersive experiences.',
    content: `The landscape of digital products is evolving rapidly. Here's what we see shaping the future.

## AI-Powered Experiences

Artificial intelligence is no longer a novelty—it's becoming an essential part of how we design and build products. From personalized recommendations to intelligent automation, AI is changing user expectations.

## Immersive Interfaces

As AR and VR technology matures, we're seeing new paradigms for interaction. Spatial computing is opening up possibilities that go far beyond traditional screen-based interfaces.

## Privacy-First Design

Users are increasingly aware of their digital footprint. Products that prioritize privacy and transparency will have a significant advantage.`,
    author: 'Sarah Miller',
    image: '/blog/future-digital.jpg',
    published: true,
    createdAt: '2026-01-10',
  },
  {
    id: '3',
    title: 'Mastering CSS Grid Layout',
    slug: 'mastering-css-grid-layout',
    excerpt: 'A comprehensive guide to CSS Grid, from basics to advanced techniques for creating complex, responsive layouts.',
    content: `CSS Grid has revolutionized how we approach layout on the web. Let's dive deep into its capabilities.

## Getting Started

CSS Grid is a two-dimensional layout system. Unlike Flexbox, which is primarily one-dimensional, Grid lets you control both rows and columns simultaneously.

## Basic Syntax

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
\`\`\`

## Advanced Techniques

### Named Grid Lines

You can name your grid lines to make your code more readable and maintainable.

### Grid Areas

Define areas of your grid with names and place items into those areas.`,
    author: 'Marcus Johnson',
    image: '/blog/css-grid.jpg',
    published: true,
    createdAt: '2026-01-05',
  },
]

// Mock Pages
export const pages: Page[] = [
  {
    id: '1',
    title: 'About Us',
    slug: 'about',
    content: `# About DigitalHub

We're a team of designers and developers passionate about creating high-quality digital products that help creators and businesses succeed.

## Our Mission

To provide premium digital resources that empower creators to build amazing products faster and more efficiently.

## Our Story

Founded in 2024, DigitalHub started as a small collection of design resources. Today, we serve thousands of customers worldwide with our growing library of digital products.

## Our Values

- **Quality First**: Every product we create goes through rigorous testing and review.
- **Customer Success**: Your success is our success. We're here to help.
- **Continuous Improvement**: We're always learning and improving our products.`,
    updatedAt: '2026-01-01',
  },
  {
    id: '2',
    title: 'Privacy Policy',
    slug: 'privacy',
    content: `# Privacy Policy

Last updated: January 1, 2026

## Information We Collect

We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.

## How We Use Your Information

We use the information we collect to process transactions, send you technical notices, and respond to your comments and questions.

## Data Security

We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.`,
    updatedAt: '2026-01-01',
  },
  {
    id: '3',
    title: 'Terms of Service',
    slug: 'terms',
    content: `# Terms of Service

Last updated: January 1, 2026

## License

When you purchase a digital product from us, you receive a license to use that product according to the terms specified at the time of purchase.

## Refund Policy

Due to the digital nature of our products, we offer refunds on a case-by-case basis. Please contact support if you're unsatisfied with a purchase.

## Acceptable Use

You agree not to redistribute, resell, or share your purchased products without authorization.`,
    updatedAt: '2026-01-01',
  },
]

// Mock Orders
export const orders: Order[] = [
  {
    id: 'ORD-001',
    userId: '2',
    customerName: 'John Smith',
    customerEmail: 'john@example.com',
    items: [{ productId: '1', productName: 'Pro Design System', price: 79 }],
    total: 79,
    status: 'completed',
    paymentStatus: 'paid',
    createdAt: '2026-02-01T10:30:00Z',
  },
  {
    id: 'ORD-002',
    userId: '3',
    customerName: 'Emily Davis',
    customerEmail: 'emily@example.com',
    items: [
      { productId: '2', productName: 'Ultimate Icon Pack', price: 49 },
      { productId: '4', productName: 'Marketing Templates Bundle', price: 39 },
    ],
    total: 88,
    status: 'completed',
    paymentStatus: 'paid',
    createdAt: '2026-02-01T14:20:00Z',
  },
  {
    id: 'ORD-003',
    userId: '4',
    customerName: 'Michael Chen',
    customerEmail: 'michael@example.com',
    items: [{ productId: '3', productName: 'SaaS Starter Kit', price: 149 }],
    total: 149,
    status: 'pending',
    paymentStatus: 'pending',
    createdAt: '2026-02-02T09:15:00Z',
  },
  {
    id: 'ORD-004',
    userId: '5',
    customerName: 'Sarah Wilson',
    customerEmail: 'sarah@example.com',
    items: [{ productId: '5', productName: 'E-commerce UI Kit', price: 89 }],
    total: 89,
    status: 'cancelled',
    paymentStatus: 'failed',
    createdAt: '2026-02-02T16:45:00Z',
  },
]

// Mock Users
export const users: User[] = [
  {
    id: '1',
    email: 'admin@digitalhub.com',
    name: 'Admin User',
    role: 'admin',
    createdAt: '2025-01-01',
  },
  {
    id: '2',
    email: 'john@example.com',
    name: 'John Smith',
    role: 'customer',
    createdAt: '2025-06-15',
  },
  {
    id: '3',
    email: 'emily@example.com',
    name: 'Emily Davis',
    role: 'customer',
    createdAt: '2025-08-20',
  },
  {
    id: '4',
    email: 'michael@example.com',
    name: 'Michael Chen',
    role: 'customer',
    createdAt: '2025-10-10',
  },
  {
    id: '5',
    email: 'sarah@example.com',
    name: 'Sarah Wilson',
    role: 'customer',
    createdAt: '2025-12-01',
  },
  {
    id: '6',
    email: 'staff@digitalhub.com',
    name: 'Staff Member',
    role: 'staff',
    createdAt: '2025-03-15',
  },
]

// Helper functions
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category.toLowerCase() === category.toLowerCase())
}

export function searchProducts(query: string): Product[] {
  const searchTerm = query.toLowerCase()
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm) ||
      p.description.toLowerCase().includes(searchTerm) ||
      p.category.toLowerCase().includes(searchTerm)
  )
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getPublishedBlogPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.published)
}

export function getPageBySlug(slug: string): Page | undefined {
  return pages.find((p) => p.slug === slug)
}

export function getCategories(): string[] {
  return [...new Set(products.map((p) => p.category))]
}

// Analytics data
export function getAnalyticsData() {
  const totalRevenue = orders
    .filter((o) => o.paymentStatus === 'paid')
    .reduce((sum, o) => sum + o.total, 0)
  
  const totalOrders = orders.length
  const completedOrders = orders.filter((o) => o.status === 'completed').length
  const totalCustomers = users.filter((u) => u.role === 'customer').length
  const totalProducts = products.length

  const revenueByMonth = [
    { month: 'Sep', revenue: 2450 },
    { month: 'Oct', revenue: 3200 },
    { month: 'Nov', revenue: 4100 },
    { month: 'Dec', revenue: 3800 },
    { month: 'Jan', revenue: 5200 },
    { month: 'Feb', revenue: totalRevenue },
  ]

  const topProducts = products
    .sort((a, b) => b.downloads - a.downloads)
    .slice(0, 5)
    .map((p) => ({ name: p.name, downloads: p.downloads, revenue: p.downloads * p.price * 0.3 }))

  return {
    totalRevenue,
    totalOrders,
    completedOrders,
    totalCustomers,
    totalProducts,
    revenueByMonth,
    topProducts,
  }
}
