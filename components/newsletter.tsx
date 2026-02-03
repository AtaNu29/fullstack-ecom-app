'use client'

import React from "react"

import { useState } from 'react'
import { Mail, Loader2, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setStatus('success')
    setEmail('')
    
    // Reset after 3 seconds
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <div className="flex items-center gap-2">
        <Mail className="h-5 w-5 text-accent" />
        <h3 className="font-semibold">Subscribe to our newsletter</h3>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        Get the latest products, updates, and exclusive offers delivered to your inbox.
      </p>
      
      {status === 'success' ? (
        <div className="mt-4 flex items-center gap-2 text-sm text-accent">
          <CheckCircle className="h-4 w-4" />
          Thanks for subscribing!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
            required
          />
          <Button type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              'Subscribe'
            )}
          </Button>
        </form>
      )}
    </div>
  )
}
