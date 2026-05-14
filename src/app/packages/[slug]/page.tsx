import Image from 'next/image';
import { Clock, Map, PlaneTakeoff, CheckCircle2, XCircle, Bed, Compass, Camera } from 'lucide-react';
import Link from 'next/link';

export default function PackageItineraryPage({ params }: { params: { slug: string } }) {
  // In a real app, we would fetch the package details based on the slug.
  // For now, we'll hardcode the 7-day safari data based on the Stitch design.
  
  return (
    <main className="pt-20 pb-24 md:pt-[100px]">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full flex flex-col justify-end pb-16 px-5 md:px-16 bg-cover bg-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvN2wVWxhFnnh5WZMqNUW8vgoYmCiBuBGH0y67lF-eutd0iBLJuvtFmoPxBoNZRWda7ZiXQKWAP_-Fu0bbI3FODNeDU1jeheIiIz7QOm9T7vde7UEAQabmZi38SRiP0e6uycUFBG_XAd04ywVykIn4xXMq0li6VKdnFzprsu90wpo8kaS2gq2pNZwKDD421W_5HIy4VGlKa67iN4eTLYNQV7-52DQKSF0XxOKT2JY22PvAsRA2npVn089ilvS_x80tr1tqhIrOcXU"
            alt="Golden hour sunset over the vast African savanna"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030a00]/80 to-[#030a00]/20 mix-blend-multiply"></div>
        </div>
        
        <div className="max-w-7xl mx-auto w-full text-white z-10">
          <span className="block font-label-sm text-xs uppercase tracking-widest text-secondary-container mb-4 font-semibold">
            Premium Safari Itinerary
          </span>
          <h1 className="font-display-lg text-5xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl">
            7 Days: Masai Mara to Tsavo East
          </h1>
          <p className="font-quote text-xl md:text-2xl mb-10 max-w-2xl text-stone-200">
            A grand tour across Kenya&apos;s most famous landscapes, curated for the discerning traveler.
          </p>
          
          <div className="flex flex-wrap gap-8 items-center border-t border-white/20 pt-6">
            <div className="flex items-center gap-3">
              <Clock className="text-secondary-container" size={24} />
              <div>
                <p className="font-label-sm text-xs text-stone-300 uppercase tracking-widest font-semibold">Duration</p>
                <p className="font-body-lg text-lg">7 Days</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Map className="text-secondary-container" size={24} />
              <div>
                <p className="font-label-sm text-xs text-stone-300 uppercase tracking-widest font-semibold">Destinations</p>
                <p className="font-body-lg text-lg">6 Locations</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <PlaneTakeoff className="text-secondary-container" size={24} />
              <div>
                <p className="font-label-sm text-xs text-stone-300 uppercase tracking-widest font-semibold">Starts</p>
                <p className="font-body-lg text-lg">Mombasa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary Flow */}
      <section className="max-w-7xl mx-auto px-5 md:px-16 py-24">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="font-headline-xl text-4xl md:text-5xl font-bold text-primary">The Journey</h2>
          <div className="h-px bg-surface-variant flex-1"></div>
        </div>
        
        <div className="relative pl-4 md:pl-12 border-l border-surface-variant space-y-24">
          
          {/* Day 1 */}
          <div className="relative group">
            <div className="absolute -left-[21px] md:-left-[53px] top-0 w-10 h-10 rounded-full bg-surface-container-high border-4 border-background flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
              <span className="font-label-sm text-xs font-bold">01</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-5 md:pr-12 pt-1">
                <span className="font-label-sm text-xs text-secondary tracking-widest uppercase mb-2 block font-semibold">Day 1</span>
                <h3 className="font-headline-md text-3xl font-bold text-primary mb-4">Mombasa to Masai Mara</h3>
                <p className="font-body-md text-stone-600 mb-6">
                  Begin your adventure with a scenic flight or drive from Mombasa into the heart of the Masai Mara. Arrive in time for an afternoon game drive, settling into your luxury tented camp as the sun sets over the plains.
                </p>
                <div className="flex items-center gap-2 text-surface-tint font-semibold">
                  <Bed size={20} />
                  <span className="font-label-sm text-sm">Luxury Tented Camp</span>
                </div>
              </div>
              <div className="md:col-span-7 h-80 md:h-[400px] w-full overflow-hidden rounded-lg relative">
                <Image 
                  src="https://lh3.googleusercontent.com/aida/ADBb0uhqYmWe9lDZPa-s3Q0XIcLD8fofviPqBTrBYgXBTVqqOze1bXLP_IjFMiYfnuzgBjOKrgWvAeAAUP1_ts-p9_6bZw_UlG51ysGNhLnSsLPH9fD3vq6GuVHOijDGORGaGy_mN-1xC-RdD31XZMSqhZDZWgSFvH-hlhQqABp7DT-ipQH42iutJM1ooumr1Zd62HEZ9CH53cAd4qiRs5OFIWlBxIUEXsUhHMOx4LzJ_UeXvkwwTDKKdF3VCODfqbZ6-2rpiNJPaola"
                  alt="Luxury Tented Camp in Masai Mara"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Days 2-3 */}
          <div className="relative group">
            <div className="absolute -left-[21px] md:-left-[53px] top-0 w-10 h-10 rounded-full bg-surface-container-high border-4 border-background flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
              <span className="font-label-sm text-xs font-bold">2-3</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-7 h-80 md:h-[400px] w-full overflow-hidden rounded-lg relative md:order-1 order-2">
                <Image 
                  src="https://lh3.googleusercontent.com/aida/ADBb0ug75IAbUbi3TVSZy4KcJnpKnF9PH1zNtVxGLmJFH5vAsRgCEJPfPXWIbSsr8jcK6pA6gtd3DdI4rBSECSgneU5Va17IGTso8Pgc2q8l68W8sZQJzirlLiR0eZ6-1s6MrkSpLPRW3j-oX7pERtGvRKtAlT8OR9etNxOjBT-CIxI8F5MsTj23QMoVbb1sxlDs8sKqqOugkViu3aNLr4Pw-o1V2GPfyQOqVvkTos20XoagC5u_iPJHJg9_soagH-42SC5cOh170uHx"
                  alt="Great Migration river crossing"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="md:col-span-5 md:pl-12 pt-1 md:order-2 order-1">
                <span className="font-label-sm text-xs text-secondary tracking-widest uppercase mb-2 block font-semibold">Days 2-3</span>
                <h3 className="font-headline-md text-3xl font-bold text-primary mb-4">The Great Migration</h3>
                <p className="font-body-md text-stone-600 mb-6">
                  Spend two full days immersed in the greatest wildlife spectacle on earth. Track predators across the rolling savannah and witness dramatic river crossings as herds brave the crocodile-infested waters.
                </p>
                <div className="flex items-center gap-2 text-surface-tint font-semibold">
                  <Compass size={20} />
                  <span className="font-label-sm text-sm">Predator tracking & river crossings</span>
                </div>
              </div>
            </div>
          </div>

          {/* Day 4 */}
          <div className="relative group">
            <div className="absolute -left-[21px] md:-left-[53px] top-0 w-10 h-10 rounded-full bg-surface-container-high border-4 border-background flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
              <span className="font-label-sm text-xs font-bold">04</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-5 md:pr-12 pt-1">
                <span className="font-label-sm text-xs text-secondary tracking-widest uppercase mb-2 block font-semibold">Day 4</span>
                <h3 className="font-headline-md text-3xl font-bold text-primary mb-4">Lake Nakuru & Naivasha</h3>
                <p className="font-body-md text-stone-600 mb-6">
                  Journey to the Great Rift Valley lakes. Observe endangered rhinos in Lake Nakuru National Park and take a serene boat ride on Lake Naivasha amidst a vibrant array of birdlife, including iconic flamingos.
                </p>
                <div className="flex items-center gap-2 text-surface-tint font-semibold">
                  <Camera size={20} />
                  <span className="font-label-sm text-sm">Rhinos and flamingos</span>
                </div>
              </div>
              <div className="md:col-span-7 h-80 md:h-[400px] w-full overflow-hidden rounded-lg relative">
                <Image 
                  src="https://lh3.googleusercontent.com/aida/ADBb0ujspqqaCCAUjZ4Imuvm2XrV3yaAvs1hL2omDniJhzyQJMt19EzuuZ-glWkMpdO3s_KEYcGRC47CnH9o-Gld5lLkCW-UXZ_CoocCif-JU2rCfTvNyd24tIqr4HxF16DjQG18b6jbgrjPIIo-crrA6FZEPYsZOR3C63TOYr2sSOwzJ7ZDGvOw0QQlQP5oFlGY9PQK1x5WAdIZ09hy0ozgX_VI5p1PVwtttbNQtejpMsyF1gWAySY9V_09eSiEbVLkKoAQWdqQTZ9LUQ"
                  alt="Flamingos at Lake Nakuru"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Inclusions/Exclusions Bento */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Inclusions */}
            <div className="bg-white p-12 rounded-xl shadow-sm border border-surface-variant/50">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="text-primary" size={24} />
                </div>
                <h3 className="font-headline-md text-3xl font-bold text-primary">Inclusions</h3>
              </div>
              <ul className="space-y-4">
                {['Professional Guide', '4x4 Safari Vehicle', 'Park Fees', 'All Meals', 'Luxury Lodging'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-secondary mt-1" size={20} />
                    <span className="font-body-lg text-lg text-stone-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="bg-stone-50 p-12 rounded-xl border border-surface-variant/50">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-surface-variant rounded-full flex items-center justify-center">
                  <XCircle className="text-stone-500" size={24} />
                </div>
                <h3 className="font-headline-md text-3xl font-bold text-primary">Exclusions</h3>
              </div>
              <ul className="space-y-4">
                {['International flights', 'Tips', 'Personal expenses'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 opacity-70">
                    <XCircle className="text-stone-500 mt-1" size={20} />
                    <span className="font-body-lg text-lg text-stone-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-5 text-center py-24">
        <h2 className="font-headline-md text-4xl font-bold text-primary mb-6">Ready to Experience the Wild?</h2>
        <p className="font-body-lg text-lg text-stone-600 mb-10 max-w-2xl mx-auto">
          Connect with our safari experts directly via WhatsApp to customize your journey or secure your dates.
        </p>
        <Link 
          href="https://wa.me/254786868977" 
          className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform shadow-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
          Contact Us to Book via WhatsApp
        </Link>
      </section>
    </main>
  );
}
