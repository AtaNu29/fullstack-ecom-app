import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Users, Target, Heart, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about DigitalHub - our mission, story, and commitment to providing premium digital products.',
}

const values = [
  {
    icon: Target,
    title: 'Quality First',
    description: 'Every product we create goes through rigorous testing and review to ensure it meets our high standards.',
  },
  {
    icon: Users,
    title: 'Customer Success',
    description: "Your success is our success. We're here to help you achieve your goals with our products.",
  },
  {
    icon: Heart,
    title: 'Community Driven',
    description: 'We listen to our community and continuously improve based on your feedback.',
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    description: "We're always exploring new ideas and technologies to bring you cutting-edge products.",
  },
]

const team = [
  {
    name: 'Alex Chen',
    role: 'Founder & CEO',
    bio: 'Passionate about creating tools that empower creators.',
  },
  {
    name: 'Sarah Miller',
    role: 'Head of Design',
    bio: 'Designing beautiful and functional digital experiences.',
  },
  {
    name: 'Marcus Johnson',
    role: 'Lead Developer',
    bio: 'Building robust and scalable solutions for our products.',
  },
]

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      {/* Hero */}
      <section className="mb-16 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">About DigitalHub</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          We are a team of designers and developers passionate about creating high-quality digital 
          products that help creators and businesses succeed.
        </p>
      </section>

      {/* Mission */}
      <section className="mb-16">
        <div className="rounded-2xl bg-gradient-to-br from-accent/20 via-accent/10 to-transparent p-8 sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Our Mission</h2>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            To provide premium digital resources that empower creators to build amazing products faster 
            and more efficiently. We believe that great tools should be accessible to everyone, and we 
            are committed to making that a reality.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mb-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Our Story</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>
                Founded in 2024, DigitalHub started as a small collection of design resources shared 
                among friends. What began as a side project quickly grew into something much larger.
              </p>
              <p>
                Today, we serve thousands of customers worldwide with our growing library of digital 
                products. From design systems and templates to development tools and courses, we are 
                constantly expanding our offerings to meet the needs of our community.
              </p>
              <p>
                Our team is distributed across the globe, united by a shared passion for creating 
                tools that make a difference in how people work and create.
              </p>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg bg-secondary lg:aspect-square">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-8xl font-bold text-muted-foreground/20">DH</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mb-16">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">Our Values</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-muted-foreground">
          These principles guide everything we do at DigitalHub
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.title} className="rounded-lg border border-border bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <value.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-4 font-semibold">{value.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="mb-16">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">Meet the Team</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-muted-foreground">
          The people behind DigitalHub
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="mx-auto h-24 w-24 overflow-hidden rounded-full bg-secondary">
                <div className="flex h-full items-center justify-center text-2xl font-bold text-muted-foreground/50">
                  {member.name.split(' ').map((n) => n[0]).join('')}
                </div>
              </div>
              <h3 className="mt-4 font-semibold">{member.name}</h3>
              <p className="text-sm text-accent">{member.role}</p>
              <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">Ready to get started?</h2>
        <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
          Browse our collection of premium digital products or get in touch with our team.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link href="/products">
            <Button size="lg" className="gap-2">
              Browse Products
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
