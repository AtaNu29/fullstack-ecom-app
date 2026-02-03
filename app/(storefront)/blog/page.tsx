import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { getPublishedBlogPosts } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read our latest articles on design, development, and digital products.',
}

export default function BlogPage() {
  const posts = getPublishedBlogPosts()

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold sm:text-4xl">Blog</h1>
        <p className="mt-2 text-muted-foreground">
          Insights, tutorials, and updates from the DigitalHub team
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.id} className="group flex flex-col overflow-hidden transition-all hover:border-muted-foreground/30">
            <div className="relative aspect-video overflow-hidden bg-secondary">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <CardContent className="flex flex-1 flex-col p-5">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{post.author}</span>
                <span>&bull;</span>
                <time>
                  {new Date(post.createdAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
              </div>
              <Link href={`/blog/${post.slug}`}>
                <h2 className="mt-2 text-lg font-semibold transition-colors group-hover:text-accent">
                  {post.title}
                </h2>
              </Link>
              <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-3">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent/80"
              >
                Read more
                <ArrowRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-lg font-medium">No blog posts yet</p>
          <p className="mt-2 text-muted-foreground">
            Check back soon for new content
          </p>
        </div>
      )}
    </div>
  )
}
