import type { Metadata } from 'next'
import { Mail, MapPin, Clock } from 'lucide-react'
import { ContactForm } from './contact-form'
import { WhatsAppButton } from '@/components/whatsapp-button'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the DigitalHub team. We are here to help with any questions about our products.',
}

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'support@digitalhub.com',
    description: 'We typically respond within 24 hours',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'San Francisco, CA',
    description: 'Serving customers worldwide',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    value: 'Mon - Fri, 9am - 6pm PST',
    description: 'Support available during business hours',
  },
]

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl">Contact Us</h1>
        <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
          Have questions about our products? Need help with a purchase? We are here to help.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Contact Form */}
        <div>
          <h2 className="text-xl font-semibold">Send us a message</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Fill out the form below and we will get back to you as soon as possible.
          </p>
          <ContactForm />
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold">Other ways to reach us</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Choose the method that works best for you.
          </p>

          <div className="mt-6 space-y-6">
            {contactInfo.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-foreground">{item.value}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-border bg-card p-6">
            <h3 className="font-semibold">Prefer instant messaging?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Chat with us directly on WhatsApp for quick responses to your questions.
            </p>
            <div className="mt-4">
              <WhatsAppButton message="Hi! I have a question about your products." />
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-border bg-card p-6">
            <h3 className="font-semibold">FAQ</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Check out our frequently asked questions for quick answers to common inquiries.
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <h4 className="text-sm font-medium">How do I download my purchase?</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  After completing your purchase, you will receive an email with download links. You can also access your purchases from your account dashboard.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium">What is your refund policy?</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  We offer refunds on a case-by-case basis for digital products. Please contact us if you are not satisfied with your purchase.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium">Do you offer bulk discounts?</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Yes! Contact us for team licenses and bulk pricing options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
