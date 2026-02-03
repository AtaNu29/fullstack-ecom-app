import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const _inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'DigitalHub - Premium Digital Products',
    template: '%s | DigitalHub',
  },
  description: 'Discover premium digital products including design systems, templates, courses, and development tools. Quality resources for creators and developers.',
  keywords: ['digital products', 'design system', 'templates', 'courses', 'development tools'],
  authors: [{ name: 'DigitalHub' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'DigitalHub',
    title: 'DigitalHub - Premium Digital Products',
    description: 'Discover premium digital products including design systems, templates, courses, and development tools.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DigitalHub - Premium Digital Products',
    description: 'Discover premium digital products including design systems, templates, courses, and development tools.',
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export const viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
