'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BedDouble, Compass, Camera, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBg from '@/assets/Golden Hour Safari_ Lions Awaken in Masai Mara.webp';
import aboutImg from '@/assets/picture 1 of safari .webp';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={heroBg} 
            alt="Hero Safari Landscape" 
            placeholder="blur"
            quality={90}
            fill
            sizes="100vw"
            className="object-cover object-bottom"
            priority
          />
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/20 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-margin-mobile md:px-gutter max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="font-display-lg text-3xl md:text-5xl lg:text-display-lg text-surface-container-lowest mb-6 md:mb-8 uppercase tracking-wide">Kenya Safari Adventures Await</h1>
          <p className="font-body-lg text-base md:text-lg lg:text-body-lg text-surface-container-lowest max-w-2xl mb-8 md:mb-10">
            Experience the raw beauty of Africa with our curated, luxury safari journeys. Expertly guided, deeply immersive, and unforgettably comfortable.
          </p>
          <div className="flex gap-4 flex-col sm:flex-row">
              <Link href="/packages" className="bg-secondary text-on-secondary font-label-sm text-label-sm uppercase px-6 md:px-8 py-3 md:py-4 rounded hover:scale-105 transition-transform duration-150">
              Explore Safaris
            </Link>
              <Link href="/packages" className="bg-transparent border border-surface-container-lowest text-surface-container-lowest font-label-sm text-label-sm uppercase px-6 md:px-8 py-3 md:py-4 rounded hover:bg-surface-container-lowest/20 transition-colors duration-150">
              View Day Tours
            </Link>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-16 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-surface max-w-container-max mx-auto">
        <div className="grid md:grid-cols-2 gap-gutter items-center">
          <div>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-4 block">Our Heritage</span>
            <h2 className="font-headline-xl text-3xl md:text-headline-xl text-primary mb-6">Crafting Extraordinary Journeys for Over a Decade</h2>
            <p className="font-body-lg text-base md:text-body-lg text-on-surface-variant mb-6">
              Welcome to <span className="hover:text-secondary underline underline-offset-4 cursor-pointer align-baseline">Hippo Adventures Kenya</span> — your trusted safari partner with over 10 years of experience creating luxury and unforgettable adventures across Kenya. We specialize in tailor-made safaris, day trips, and wildlife experiences designed for comfort, excitement, and lasting memories. From Nairobi to the coast, we deliver seamless journeys, breathtaking encounters, and personalized service every step of the way.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-primary font-label-sm text-label-sm uppercase hover:text-secondary transition-colors">
              Read Our Story <ArrowRight size={18} />
            </Link>
          </div>
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] mt-8 md:mt-0">
            <Image 
              src={aboutImg} 
              alt="Professional safari guide representing Hippo Adventures Kenya" 
              fill
              className="object-cover rounded-xl shadow-sm"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <motion.div 
              className="absolute -bottom-8 -left-8 bg-surface-container p-6 rounded-lg shadow-sm hidden md:block border border-outline-variant/30"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <p className="font-headline-md text-headline-md text-secondary mb-1">10+</p>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">Years Experience</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 md:py-section-gap px-margin-mobile md:px-gutter bg-surface-container-low">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-xl text-3xl md:text-headline-xl text-primary mb-4">Why Choose Hippo Adventures</h2>
            <p className="font-body-lg text-base md:text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              We elevate the traditional safari experience, ensuring every moment is steeped in comfort, expertise, and unforgettable wonder.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Value 1 */}
            <div className="bg-surface p-6 md:p-8 rounded-xl border border-surface-container-highest hover:-translate-y-1 transition-transform duration-150">
              <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mb-6 text-secondary">
                <BedDouble size={32} />
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4 text-2xl">Luxury & Comfort</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Retreat to world-class lodges and premium camps that offer unparalleled comfort amidst the untamed wilderness. Rest, rejuvenate, and prepare for the next day&apos;s adventure.
              </p>
            </div>
            {/* Value 2 */}
            <div className="bg-surface p-6 md:p-8 rounded-xl border border-surface-container-highest hover:-translate-y-1 transition-transform duration-150">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-surface-container rounded-full flex items-center justify-center mb-4 md:mb-6 text-primary">
                <Compass size={32} />
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4 text-2xl">Professional Guides</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Our certified local guides possess an intimate knowledge of the land, wildlife patterns, and cultural heritage, guaranteeing safe and deeply enriching encounters.
              </p>
            </div>
            {/* Value 3 */}
            <div className="bg-surface p-6 md:p-8 rounded-xl border border-surface-container-highest hover:-translate-y-1 transition-transform duration-150">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-surface-container rounded-full flex items-center justify-center mb-4 md:mb-6 text-secondary">
                <Camera size={32} />
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4 text-2xl">Memorable Experiences</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                From heart-pounding predator sightings to serene sundowners overlooking the plains, we curate moments that turn into lifelong memories.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}