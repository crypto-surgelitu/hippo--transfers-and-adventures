import Image from 'next/image';
import { Compass, Eye } from 'lucide-react';
import lionsHero from '@/assets/Golden Hour Safari_ Lions Awaken in Masai Mara.jpg';
import safariStory from '@/assets/picture 3 of safari.png';
import founderPortrait from '@/assets/picture 1 of safari .jpeg';

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section - matches home page style */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={lionsHero}
            alt="Lions in Masai Mara during Golden Hour"
            placeholder="blur"
            quality={90}
            fill
            sizes="100vw"
            className="object-cover object-bottom"
            priority
          />
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/20 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="font-display-lg text-4xl md:text-display-lg text-surface-container-lowest mb-6 uppercase">
            A Legacy of Discovery
          </h1>
          <p className="font-quote text-xl md:text-2xl text-surface-container-lowest/90 max-w-2xl mx-auto font-light">
            Crafting extraordinary journeys with soul. Over a decade of passion, deep-rooted local expertise, and an unwavering commitment to the wild.
          </p>
        </div>
      </section>

      {/* Our Story - Asymmetric Layout */}
      <section className="py-24 px-5 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 lg:col-start-1 relative">
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden shadow-2xl z-10">
              <Image 
                src={safariStory}
                alt="Safari Experience in Kenya"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-surface-container -z-10 rounded-xl opacity-50 hidden md:block"></div>
          </div>
          
          <div className="lg:col-span-6 lg:col-start-7 pt-12 lg:pt-0">
            <span className="font-label-sm text-xs text-secondary uppercase tracking-[0.2em] mb-4 block font-semibold">
              Our Origin
            </span>
            <h2 className="font-headline-xl text-4xl md:text-5xl font-bold text-primary mb-8">
              Born from the dust of the Mara.
            </h2>
            <div className="space-y-6 font-body-lg text-lg text-on-surface-variant text-stone-600">
              <p>
                Hippo Adventures Kenya didn&apos;t start in a boardroom; it began around a campfire over ten years ago. Our founders, driven by an insatiable passion for the untamed beauty of East Africa, sought to share a more authentic, profound connection to the wild.
              </p>
              <p>
                We believe that a true safari is not just a tour, but an immersion. It&apos;s the rhythm of the Great Migration, the silence of a desert morning, and the stories shared beneath a canopy of stars. We pair this raw experience with the pinnacle of luxury hospitality, ensuring every journey is as comfortable as it is thrilling.
              </p>
            </div>
            
            <blockquote className="border-l-2 border-secondary-container pl-6 py-2 my-8">
              <p className="font-quote text-2xl text-on-surface italic text-stone-800">
                &quot;Kenya isn&apos;t just a destination; it&apos;s a feeling of coming home to the earth itself.&quot;
              </p>
              <footer className="mt-4 font-label-sm text-xs uppercase tracking-[0.1em] text-on-surface-variant font-semibold text-stone-500">
                — Emmanuel AMANI K, Founder
              </footer>
            </blockquote>

            <div className="mt-12 flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-secondary-container relative">
                <Image 
                  src={founderPortrait}
                  alt="Founder Portrait"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <p className="font-headline-md text-lg font-bold text-primary mb-1">
                  Emmanuel amani K
                </p>
                <p className="font-label-sm text-xs text-stone-500 uppercase tracking-wider font-semibold">
                  Founder & Head Guide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Bento Grid Style */}
      <section className="bg-surface-container-low py-24 px-5 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-xl text-4xl md:text-5xl font-bold text-primary mb-4">Our Guiding Stars</h2>
            <p className="font-body-lg text-lg text-stone-600 max-w-2xl mx-auto">
              The principles that drive every itinerary we craft and every guest we welcome.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-white rounded-xl p-12 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#18230D]/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform duration-150">
                <Compass size={32} />
              </div>
              <h3 className="font-headline-md text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="font-body-lg text-lg text-stone-600 leading-relaxed">
                To curate transformative travel experiences that connect our guests deeply with the natural wonders and diverse cultures of Kenya, while championing sustainable tourism practices that protect these treasures for future generations.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-xl p-12 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform duration-150">
                <Eye size={32} />
              </div>
              <h3 className="font-headline-md text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="font-body-lg text-lg text-stone-600 leading-relaxed">
                To be the undisputed pinnacle of luxury, ethical safari travel in East Africa. We aim to redefine the standard of experiential travel, where untamed adventure seamlessly meets uncompromising elegance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
