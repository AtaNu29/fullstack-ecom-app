import type { Metadata } from 'next'
import { getPageBySlug } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read the terms and conditions for using DigitalHub products and services.',
}

export default function TermsPage() {
  const page = getPageBySlug('terms')

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <h1 className="text-3xl font-bold sm:text-4xl">Terms of Service</h1>
      <p className="mt-2 text-muted-foreground">
        Last updated: {page?.updatedAt ? new Date(page.updatedAt).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        }) : 'January 1, 2026'}
      </p>

      <div className="prose prose-invert mt-8 max-w-none">
        <h2>Agreement to Terms</h2>
        <p>
          By accessing or using DigitalHub, you agree to be bound by these Terms of Service and 
          all applicable laws and regulations. If you do not agree with any of these terms, you 
          are prohibited from using or accessing this site.
        </p>

        <h2>License</h2>
        <p>
          When you purchase a digital product from us, you receive a license to use that product 
          according to the terms specified at the time of purchase. Unless otherwise stated, 
          licenses are:
        </p>
        <ul>
          <li>For personal and commercial use</li>
          <li>Non-transferable to third parties</li>
          <li>Valid for the lifetime of the product</li>
          <li>Inclusive of future updates at no extra cost</li>
        </ul>

        <h2>Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Redistribute, resell, or share your purchased products without authorization</li>
          <li>Use our products for any illegal or unauthorized purpose</li>
          <li>Remove any copyright or proprietary notations from the products</li>
          <li>Transfer your license to another party without our written consent</li>
        </ul>

        <h2>Refund Policy</h2>
        <p>
          Due to the digital nature of our products, we offer refunds on a case-by-case basis. 
          If you are unsatisfied with your purchase, please contact our support team within 
          14 days of your purchase to discuss your options.
        </p>
        <p>
          Refunds are generally not available for products that have been downloaded or accessed.
        </p>

        <h2>Product Updates</h2>
        <p>
          We may update our products from time to time. When we do, you will have access to the 
          latest version at no additional cost. However, we reserve the right to discontinue 
          products or features at any time.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          All content, features, and functionality of DigitalHub, including but not limited to 
          text, graphics, logos, and software, are the exclusive property of DigitalHub and are 
          protected by international copyright, trademark, and other intellectual property laws.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          In no event shall DigitalHub be liable for any indirect, incidental, special, 
          consequential, or punitive damages, including without limitation, loss of profits, 
          data, use, goodwill, or other intangible losses.
        </p>

        <h2>Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. We will notify users of any 
          changes by posting the new Terms of Service on this page and updating the last 
          updated date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about these Terms of Service, please contact us at 
          legal@digitalhub.com.
        </p>
      </div>
    </div>
  )
}
