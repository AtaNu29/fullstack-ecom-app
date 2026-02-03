'use client'

import Link from 'next/link'
import { Search, MoreVertical, Pencil, Eye, Plus } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { pages, blogPosts } from '@/lib/data'

export default function AdminPagesPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const allContent = [
    ...pages.map((p) => ({ ...p, type: 'page' as const })),
    ...blogPosts.map((p) => ({ ...p, type: 'blog' as const })),
  ]

  const filteredContent = allContent.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold sm:text-3xl">Pages & Content</h1>
          <p className="text-muted-foreground">
            Manage static pages and blog posts
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2 bg-transparent">
            <Plus className="h-4 w-4" />
            New Page
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Blog Post
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 sm:max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search content..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="rounded-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredContent.map((item) => (
              <TableRow key={`${item.type}-${item.id}`}>
                <TableCell>
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-xs text-muted-foreground">/{item.slug}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={item.type === 'blog' ? 'secondary' : 'outline'}>
                    {item.type === 'blog' ? 'Blog Post' : 'Page'}
                  </Badge>
                </TableCell>
                <TableCell>
                  {item.type === 'blog' ? (
                    item.published ? (
                      <Badge className="bg-accent/20 text-accent">Published</Badge>
                    ) : (
                      <Badge variant="secondary">Draft</Badge>
                    )
                  ) : (
                    <Badge className="bg-accent/20 text-accent">Published</Badge>
                  )}
                </TableCell>
                <TableCell>
                  {new Date(item.type === 'blog' ? item.createdAt : item.updatedAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link
                          href={item.type === 'blog' ? `/blog/${item.slug}` : `/${item.slug}`}
                          target="_blank"
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          View
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Pencil className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {filteredContent.length === 0 && (
          <div className="p-8 text-center">
            <p className="text-muted-foreground">No content found</p>
          </div>
        )}
      </div>
    </div>
  )
}
