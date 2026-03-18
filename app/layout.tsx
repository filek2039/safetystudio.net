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

export const metadata: Metadata = {
  title: 'Safety Studio — HSE Consultancy',
  description:
    'Expert HSE consultancy, training, risk analysis and audits. Building resilient safety cultures across oil & gas, construction and industrial sectors.',
  keywords: ['HSE', 'safety consultancy', 'LTIF', 'TRCF', 'risk assessment', 'health safety environment'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="bg-navy text-cream font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
