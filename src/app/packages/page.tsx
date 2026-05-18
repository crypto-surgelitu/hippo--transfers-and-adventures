import type { Metadata } from 'next'
import { PackageCard } from '@/components/PackageCard';
import { ExcursionCard } from '@/components/ExcursionCard';
import { Compass, Sailboat } from 'lucide-react';

import { safariPackages } from '@/data/packages';
import { excursions } from '@/data/excursions';

import { BRAND_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Safari Packages & Excursions | ${BRAND_NAME}`,
  description: 'Explore our curated safari packages and day excursions in Kenya. From 1-day Tsavo trips to 10-day national park tours. Luxury safaris for every traveler.',
  keywords: ['kenya safari packages', 'tsavo safari', 'masai mara tours', 'amboseli safari', 'kenya day tours', 'kenya excursions', 'hippo transfers and adventures'],
  openGraph: {
    title: `Safari Packages & Excursions | ${BRAND_NAME}`,
    description: 'Explore our curated safari packages and day excursions in Kenya.',
  },
}

export default function PackagesPage() {

  return (
    <div className="pt-8 lg:pt-16 px-margin-mobile md:px-gutter pb-12 flex flex-col items-center max-w-container-max mx-auto w-full">
      {/* Header Section */}
      <header className="text-center mb-12 md:mb-16 w-full max-w-[800px]">
        <h1 className="font-headline-xl text-3xl md:text-headline-xl text-on-surface mb-6">Safari Packages & Excursions</h1>
        <p className="font-body-lg text-base md:text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Discover the untamed beauty of Kenya with our meticulously crafted itineraries. From the vast plains of Tsavo to the vibrant coastlines, experience service beyond expectation.
        </p>
      </header>

      {/* Safari Experience Packages */}
      <section className="w-full mb-12 md:mb-20">
        <div className="flex items-center justify-between mb-8 w-full px-4 border-b border-surface-variant pb-4">
          <h2 className="font-headline-md text-2xl md:text-3xl text-primary flex items-center gap-3">
            <Compass className="text-secondary" size={28} />
            Safari Experience Packages
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 w-full">
          {safariPackages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>
      </section>

      {/* Day Tours & Excursions */}
      <section className="w-full">
        <div className="flex items-center justify-between mb-8 w-full px-4 border-b border-surface-variant pb-4">
          <h2 className="font-headline-md text-2xl md:text-3xl text-primary flex items-center gap-3">
            <Sailboat className="text-secondary" size={28} />
            Day Tours & Excursions
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
