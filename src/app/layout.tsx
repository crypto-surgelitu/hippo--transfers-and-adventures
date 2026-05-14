import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Noto_Serif } from 'next/font/google'
import '@/styles/globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

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
  title: 'Hippo Transfers and Adventures',
  description: 'Experience unforgettable safari adventures and transfers. Discover our safari packages and excursions.',
  openGraph: {
    title: 'Hippo Transfers and Adventures',
    description: 'Experience unforgettable safari adventures and transfers.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${notoSerif.variable}`}>
      <body className="bg-background text-on-background font-body-md antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}