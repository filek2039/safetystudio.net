import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const siteUrl = 'https://safetystudio.net'

export const metadata: Metadata = {
  title: 'Safety Studio — HSE Consultancy',
  description:
    'Expert HSE consultancy, training, risk analysis and audits. Building resilient safety cultures across oil & gas, construction and industrial sectors.',
  keywords: ['HSE', 'safety consultancy', 'LTIF', 'TRCF', 'risk assessment', 'health safety environment', 'incident rate calculator', 'safety moment'],
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: 'Safety Studio — HSE Consultancy',
    description:
      'Expert HSE consultancy, training, risk analysis and audits. Building resilient safety cultures across oil & gas, construction and industrial sectors.',
    url: siteUrl,
    siteName: 'Safety Studio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Safety Studio — HSE Consultancy',
    description:
      'Expert HSE consultancy, training, risk analysis and audits.',
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="bg-navy text-cream font-sans antialiased">
        {/* Skip to content link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-gold focus:text-navy focus:px-4 focus:py-2 focus:rounded-sm focus:text-sm focus:font-medium focus:tracking-wide"
        >
          Skip to content
        </a>

        {children}

        {/* Organization structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Safety Studio',
              url: siteUrl,
              description:
                'Expert HSE consultancy, training, risk analysis and audits across oil & gas, construction and industrial sectors.',
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'safety@safetystudio.net',
                contactType: 'customer service',
              },
              sameAs: [],
            }),
          }}
        />
      </body>
    </html>
  )
}
