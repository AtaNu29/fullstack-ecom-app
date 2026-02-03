'use client'

import React from "react"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2, ShieldAlert } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuthStore, isAdmin, isStaff } from '@/lib/auth-store'
import Link from 'next/link'

interface AdminGuardProps {
  children: React.ReactNode
  requireAdmin?: boolean
}

export function AdminGuard({ children, requireAdmin = false }: AdminGuardProps) {
  const router = useRouter()
  const { user, isAuthenticated } = useAuthStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-4 text-center">
        <ShieldAlert className="h-16 w-16 text-muted-foreground" />
        <h1 className="text-2xl font-bold">Authentication Required</h1>
        <p className="text-muted-foreground">
          Please log in to access the admin dashboard.
        </p>
        <Link href="/login">
          <Button>Log In</Button>
        </Link>
      </div>
    )
  }

  const hasAccess = requireAdmin ? isAdmin(user) : isStaff(user)

  if (!hasAccess) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-4 text-center">
        <ShieldAlert className="h-16 w-16 text-destructive" />
        <h1 className="text-2xl font-bold">Access Denied</h1>
        <p className="text-muted-foreground">
          You don't have permission to access this area.
        </p>
        <p className="text-sm text-muted-foreground">
          Tip: Log in with an email containing "admin" to access the admin dashboard in demo mode.
        </p>
        <Link href="/">
          <Button>Go to Store</Button>
        </Link>
      </div>
    )
  }

  return <>{children}</>
}
