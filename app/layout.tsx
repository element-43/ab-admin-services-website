import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost, Geist_Mono } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const jost = Jost({
  variable: '--font-jost',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'AB Admin Services | Luxury Business Support, Administration & Development',
  description:
    'AB Admin Services provides premium administration, virtual assistance, property management, website and app development for trades, small businesses and growing companies.',
  icons: {
    icon: '/favicon.png',
  },
  keywords: [
    'business administration',
    'virtual assistant',
    'property management',
    'bookkeeping',
    'website development',
    'app development',
    'business support',
  ],
  openGraph: {
    title: 'AB Admin Services | Luxury Business Support',
    description:
      'Professional business support that gives you back your time. Administration, virtual assistance, property management, websites and app development.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${cormorant.variable} ${jost.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Toaster position="top-center" />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
