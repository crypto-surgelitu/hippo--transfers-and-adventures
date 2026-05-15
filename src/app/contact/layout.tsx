import type { Metadata } from 'next'
import ContactPage from './page'

export const metadata: Metadata = {
  title: 'Contact Us | Hippo Adventures Kenya',
  description: 'Get in touch with our safari specialists. Plan your luxury Kenya safari, day tour, or excursion. Contact us via form, WhatsApp, email, or phone.',
  keywords: ['contact hippo adventures', 'kenya safari inquiry', 'book safari kenya', 'safari contact'],
  openGraph: {
    title: 'Contact Us | Hippo Adventures Kenya',
    description: 'Get in touch with our safari specialists to plan your Kenya adventure.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}