'use client'

import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface WhatsAppButtonProps {
  phoneNumber?: string
  message?: string
  variant?: 'default' | 'floating'
  className?: string
}

export function WhatsAppButton({
  phoneNumber = '1234567890', // Replace with actual number
  message = 'Hello! I have a question about your products.',
  variant = 'default',
  className,
}: WhatsAppButtonProps) {
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  if (variant === 'floating') {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 ${className}`}
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">Contact us on WhatsApp</span>
      </a>
    )
  }

  return (
    <Button
      asChild
      variant="outline"
      className={`gap-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white ${className}`}
    >
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="h-4 w-4" />
        Chat on WhatsApp
      </a>
    </Button>
  )
}
