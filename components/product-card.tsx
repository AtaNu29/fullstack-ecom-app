'use client'

import Link from 'next/link'
import { Star, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useCartStore } from '@/lib/cart-store'
import type { Product } from '@/lib/data'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem, items } = useCartStore()
  const isInCart = items.some((item) => item.product.id === product.id)

  return (
    <Card className="group flex flex-col overflow-hidden transition-all hover:border-muted-foreground/30">
      <Link href={`/products/${product.slug}`} className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.featured && (
          <Badge className="absolute left-3 top-3 bg-accent text-accent-foreground">
            Featured
          </Badge>
        )}
      </Link>
      
      <CardContent className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-center gap-2">
          <Badge variant="secondary" className="text-xs">
            {product.category}
          </Badge>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Star className="h-3 w-3 fill-accent text-accent" />
            {product.rating}
          </div>
        </div>
        
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-semibold leading-tight transition-colors group-hover:text-accent">
            {product.name}
          </h3>
        </Link>
        
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">
          {product.description}
        </p>
        
        <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Download className="h-3 w-3" />
            {product.downloads.toLocaleString()}
          </span>
          <span>{product.fileType}</span>
          <span>{product.fileSize}</span>
        </div>
      </CardContent>
      
      <CardFooter className="flex items-center justify-between border-t border-border p-4">
        <span className="text-lg font-bold">${product.price}</span>
        <Button
          size="sm"
          onClick={() => addItem(product)}
          disabled={isInCart}
          variant={isInCart ? 'secondary' : 'default'}
        >
          {isInCart ? 'In Cart' : 'Add to Cart'}
        </Button>
      </CardFooter>
    </Card>
  )
}
