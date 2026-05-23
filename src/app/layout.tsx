import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Noto_Serif } from 'next/font/google'
import '@/styles/globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import WhatsAppFloat from "@/components/WhatsAppFloat"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
})

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-noto-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://hippoadventureskenya.com'),
  title: {
    default: 'Hippo Transfers and Adventures | Kenya Safari Packages',
    template: '%s | Hippo Transfers and Adventures',
  },
  description: 'Experience unforgettable safari adventures and transfers in Kenya. Discover luxury safari packages, day tours, and excursions to Tsavo, Amboseli, Masai Mara and more.',
  keywords: ['kenya safari', 'tsavo safari', 'masai mara', 'amboseli', 'safari tours', 'kenya tours', 'luxury safari', 'day tours kenya'],
  authors: [{ name: 'Hippo Transfers and Adventures' }],
  creator: 'Hippo Transfers and Adventures',
  publisher: 'Hippo Transfers and Adventures',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Hippo Transfers and Adventures',
    title: 'Hippo Transfers and Adventures | Kenya Safari Packages',
    description: 'Experience unforgettable safari adventures and transfers in Kenya. Discover luxury safari packages, day tours, and excursions.',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Safari landscape with wildlife in Kenya',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hippo Transfers and Adventures | Kenya Safari Packages',
    description: 'Experience unforgettable safari adventures and transfers in Kenya.',
    images: ['/og-image.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`light ${plusJakartaSans.variable} ${notoSerif.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-background text-on-background font-body antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}