import type { Metadata } from 'next'
import { getPageBySlug } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how DigitalHub collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
  const page = getPageBySlug('privacy')

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <h1 className="text-3xl font-bold sm:text-4xl">Privacy Policy</h1>
      <p className="mt-2 text-muted-foreground">
        Last updated: {page?.updatedAt ? new Date(page.updatedAt).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        }) : 'January 1, 2026'}
      </p>

      <div className="prose prose-invert mt-8 max-w-none">
        <h2>Information We Collect</h2>
        <p>
          We collect information you provide directly to us, such as when you create an account, 
          make a purchase, subscribe to our newsletter, or contact us for support.
        </p>
        <p>This information may include:</p>
        <ul>
          <li>Name and email address</li>
          <li>Billing information and payment details</li>
          <li>Account credentials</li>
          <li>Communications you send to us</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Process transactions and send related information</li>
          <li>Send you technical notices, updates, and support messages</li>
          <li>Respond to your comments, questions, and requests</li>
          <li>Monitor and analyze trends, usage, and activities</li>
          <li>Personalize and improve your experience</li>
        </ul>

        <h2>Information Sharing</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personal information to outside parties. 
          This does not include trusted third parties who assist us in operating our website, 
          conducting our business, or servicing you, as long as those parties agree to keep this 
          information confidential.
        </p>

        <h2>Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal information against 
          unauthorized access, alteration, disclosure, or destruction. This includes internal 
          reviews of our data collection, storage, and processing practices.
        </p>

        <h2>Cookies</h2>
        <p>
          We use cookies to understand and save your preferences for future visits and compile 
          aggregate data about site traffic and site interaction.
        </p>

        <h2>Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access the personal information we hold about you</li>
          <li>Request correction of any inaccurate information</li>
          <li>Request deletion of your personal information</li>
          <li>Opt out of marketing communications</li>
        </ul>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at 
          privacy@digitalhub.com.
        </p>
      </div>
    </div>
  )
}
