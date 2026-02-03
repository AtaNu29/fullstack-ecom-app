import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { getBlogPostBySlug, blogPosts, getPublishedBlogPosts } from '@/lib/data'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return { title: 'Post Not Found' }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.createdAt,
      authors: [post.author],
    },
  }
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post || !post.published) {
    notFound()
  }

  const relatedPosts = getPublishedBlogPosts()
    .filter((p) => p.id !== post.id)
    .slice(0, 2)

  return (
    <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Blog
      </Link>

      <header className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{post.author}</span>
          <span>&bull;</span>
          <time>
            {new Date(post.createdAt).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>
        </div>
        <h1 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl text-balance">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>
      </header>

      <div className="relative aspect-video mb-8 overflow-hidden rounded-lg bg-secondary">
        <img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="prose prose-invert max-w-none">
        {post.content.split('\n\n').map((paragraph, index) => {
          if (paragraph.startsWith('## ')) {
            return (
              <h2 key={index} className="mt-8 text-2xl font-bold">
                {paragraph.replace('## ', '')}
              </h2>
            )
          }
          if (paragraph.startsWith('### ')) {
            return (
              <h3 key={index} className="mt-6 text-xl font-semibold">
                {paragraph.replace('### ', '')}
              </h3>
            )
          }
          if (paragraph.startsWith('- ')) {
            const items = paragraph.split('\n').map((item) => item.replace('- ', ''))
            return (
              <ul key={index} className="mt-4 list-disc pl-6 space-y-2">
                {items.map((item, i) => (
                  <li key={i} className="text-muted-foreground">
                    {item.startsWith('**') ? (
                      <span>
                        <strong className="text-foreground">{item.match(/\*\*(.*?)\*\*/)?.[1]}</strong>
                        {item.replace(/\*\*.*?\*\*/, '')}
                      </span>
                    ) : (
                      item
                    )}
                  </li>
                ))}
              </ul>
            )
          }
          return (
            <p key={index} className="mt-4 text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          )
        })}
      </div>

      {relatedPosts.length > 0 && (
        <>
          <Separator className="my-12" />
          <section>
            <h2 className="text-xl font-semibold">Related Posts</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group rounded-lg border border-border p-5 transition-all hover:border-muted-foreground/30"
                >
                  <h3 className="font-semibold transition-colors group-hover:text-accent">
                    {relatedPost.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </>
      )}
    </article>
  )
}
