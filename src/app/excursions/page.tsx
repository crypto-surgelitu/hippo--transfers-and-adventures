import type { Metadata } from 'next'
import { ExcursionCard } from '@/components/ExcursionCard';
import { Sailboat } from 'lucide-react';
import { excursions } from '@/data/excursions';
import { BRAND_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Day Tours & Excursions',
  description: 'Explore our curated day excursions and coastal adventures in Kenya. Wasini Island, Marafa Hell\'s Kitchen, marine parks, and more. Book your perfect day tour today.',
  keywords: ['kenya day tours', 'kenyan excursions', 'wasini island', 'marafa canyon', 'coastal tours', 'marine park tours', 'kenya activities', 'hippo transfers and adventures'],
  alternates: {
    canonical: '/excursions',
  },
  openGraph: {
    title: `Day Tours & Excursions | ${BRAND_NAME}`,
    description: 'Explore our curated day excursions and coastal adventures in Kenya.',
    url: '/excursions',
  },
}

export default function ExcursionsPage() {
  return (
    <div className="pt-8 lg:pt-16 px-margin-mobile md:px-margin-desktop pb-12 flex flex-col items-center max-w-container-max mx-auto w-full">
      {/* Header Section */}
      <header className="text-center mb-12 md:mb-16 w-full max-w-[800px]">
        <h1 className="font-headline-xl text-3xl md:text-headline-xl text-on-surface mb-6">Day Tours & Excursions</h1>
        <p className="font-body-lg text-base md:text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Discover unforgettable coastal adventures and day tours. From marine park snorkeling to stunning canyon sunsets, each excursion is designed for maximum adventure and comfort.
        </p>
      </header>

      {/* Excursions Grid */}
      <section className="w-full">
        <div className="flex items-center justify-between mb-8 w-full px-4 border-b border-surface-variant pb-4">
          <h2 className="font-headline-md text-2xl md:text-3xl text-primary flex items-center gap-3">
            <Sailboat className="text-secondary" size={28} />
            Available Excursions
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {excursions.map((exc, index) => (
            <ExcursionCard key={index} {...exc} />
          ))}
        </div>
      </section>
    </div>
  );
}
