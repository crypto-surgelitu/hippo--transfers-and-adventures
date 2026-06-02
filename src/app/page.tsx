import type { Metadata } from 'next'
import Image from 'next/image';
import Link from 'next/link';
import { BedDouble, Compass, Camera, ArrowRight } from 'lucide-react';
import aboutImg from '@/assets/picture-1-of-safari.webp';
import ExperienceBadge from '@/components/ExperienceBadge';
import { HeroSlideshow } from '@/components/layout/HeroSlideshow';

import { BRAND_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `${BRAND_NAME} | Luxury Safari Experiences`,
  description: 'Experience the raw beauty of Africa with our curated, luxury safari journeys. Expertly guided, deeply immersive, and unforgettably comfortable.',
  keywords: ['kenya safari', 'luxury safari', 'masai mara safari', 'tsavo east safari', 'hippo adventures', 'hippo transfers and adventures'],
}

const homeSlideshowImages = [
  '/images/slideshow/home/lions.webp',
  '/images/slideshow/home/elephant.webp',
  '/images/slideshow/home/rhino.webp',
  '/images/slideshow/home/leopard.webp',
  '/images/slideshow/home/giraffes.webp',
  '/images/slideshow/home/lioness.webp',
];

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Hippo Transfers and Adventures",
  "url": "https://www.hippotransfersandadventures.com",
  "logo": "https://www.hippotransfersandadventures.com/logo.webp",
  "image": "https://www.hippotransfersandadventures.com/og-image.webp",
  "description": "Luxury safari packages, airport transfers, and coastal excursions in Kenya. Explore Tsavo, Amboseli, Masai Mara and more with expert local guides.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "KE",
    "addressLocality": "Mombasa"
  },
  "areaServed": [
    { "@type": "City", "name": "Mombasa" },
    { "@type": "City", "name": "Diani Beach" },
    { "@type": "City", "name": "Nairobi" },
    { "@type": "City", "name": "Malindi" },
    { "@type": "City", "name": "Watamu" }
  ],
  "telephone": "+254-720-899-402",
  "email": "info@hippotransfersandadventures.com",
  "priceRange": "$$",
  "sameAs": [
    "https://www.facebook.com/hippotransfer",
    "https://www.instagram.com/hippotransfer"
  ]
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
        <HeroSlideshow images={homeSlideshowImages} />
        <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop w-full max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="font-display-lg text-3xl md:text-5xl lg:text-display-lg text-surface-container-lowest mb-6 md:mb-8 uppercase tracking-wide">Kenya Safari Adventures Await</h1>
          <p className="font-body-lg text-base md:text-lg lg:text-body-lg text-surface-container-lowest max-w-2xl mb-8 md:mb-10">
            Experience the raw beauty of Africa with our curated, luxury safari journeys. Expertly guided, deeply immersive, and unforgettably comfortable.
          </p>
          <div className="flex gap-4 flex-col sm:flex-row">
            <Link href="/packages" className="bg-secondary text-on-secondary font-label-sm text-label-sm uppercase px-6 md:px-8 py-3 md:py-4 rounded hover:scale-105 transition-transform duration-150">
              Explore Safaris
            </Link>
            <Link href="/packages#day-tours" className="bg-transparent border border-surface-container-lowest text-surface-container-lowest font-label-sm text-label-sm uppercase px-6 md:px-8 py-3 md:py-4 rounded hover:bg-surface-container-lowest/20 transition-colors duration-150">
              View Day Tours
            </Link>
          </div>
        </div>

        {/* Experience Badge - Positioned in Hero */}
        <div className="absolute bottom-margin-mobile left-margin-mobile md:bottom-12 md:left-12 z-20">
          <ExperienceBadge />
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-16 md:py-section-gap bg-surface">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-4 block">Our Heritage</span>
            <h2 className="font-headline-xl text-3xl md:text-headline-xl text-primary mb-6">Crafting Extraordinary Journeys for Over a Decade</h2>
            <p className="font-body-lg text-base md:text-lg text-on-surface-variant mb-6 leading-relaxed">
              Welcome to <span className="text-secondary font-semibold">{BRAND_NAME}</span> — your trusted safari partner with over 10 years of experience creating luxury and unforgettable adventures across Kenya. We specialize in tailor-made safaris, day trips, and wildlife experiences designed for comfort, excitement, and lasting memories.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-primary font-label-sm text-label-sm uppercase hover:text-secondary transition-colors font-bold">
              Read Our Story <ArrowRight size={18} />
            </Link>
          </div>
          <div className="relative h-[350px] sm:h-[450px] md:h-[550px] mt-8 md:mt-0">
            <Image 
              src={aboutImg} 
              alt={`Professional safari guide representing ${BRAND_NAME}`} 
              fill
              className="object-cover rounded-xl shadow-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-xl text-3xl md:text-headline-xl text-primary mb-4">Why Choose {BRAND_NAME}</h2>
            <p className="font-body-lg text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto">
              We elevate the traditional safari experience, ensuring every moment is steeped in comfort, expertise, and unforgettable wonder.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-surface p-8 rounded-xl border border-surface-variant/30 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6 text-secondary">
                <BedDouble size={32} />
              </div>
              <h3 className="font-headline-md text-2xl font-bold text-primary mb-4">Luxury & Comfort</h3>
              <p className="font-body-md text-stone-600 leading-relaxed">
                Retreat to world-class lodges and premium camps that offer unparalleled comfort amidst the untamed wilderness. Rest, rejuvenate, and prepare for the next day&apos;s adventure.
              </p>
            </div>
            {/* Value 2 */}
            <div className="bg-surface p-8 rounded-xl border border-surface-variant/30 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                <Compass size={32} />
              </div>
              <h3 className="font-headline-md text-2xl font-bold text-primary mb-4">Professional Guides</h3>
              <p className="font-body-md text-stone-600 leading-relaxed">
                Our certified local guides possess an intimate knowledge of the land, wildlife patterns, and cultural heritage, guaranteeing safe and deeply enriching encounters.
              </p>
            </div>
            {/* Value 3 */}
            <div className="bg-surface p-8 rounded-xl border border-surface-variant/30 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6 text-secondary">
                <Camera size={32} />
              </div>
              <h3 className="font-headline-md text-2xl font-bold text-primary mb-4">Memorable Experiences</h3>
              <p className="font-body-md text-stone-600 leading-relaxed">
                From heart-pounding predator sightings to serene sundowners overlooking the plains, we curate moments that turn into lifelong memories.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}