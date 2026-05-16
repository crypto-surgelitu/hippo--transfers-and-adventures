import Image from 'next/image';
import { Clock, Map, PlaneTakeoff, CheckCircle2, XCircle, Bed, Compass, Camera } from 'lucide-react';
import { excursions } from '@/data/excursions';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { WhatsAppCTA } from '@/components/WhatsAppCTA';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const excursion = excursions.find(e => e.slug === params.slug);
  if (!excursion) return {};

  return {
    title: `${excursion.title} | Hippo Adventures Kenya`,
    description: excursion.description,
  };
}

export default function ExcursionDetailPage({ params }: { params: { slug: string } }) {
  const excursion = excursions.find(e => e.slug === params.slug);

  if (!excursion) {
    notFound();
  }

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'bed': return <Bed size={20} />;
      case 'compass': return <Compass size={20} />;
      case 'camera': return <Camera size={20} />;
      default: return <Compass size={20} />;
    }
  };

  return (
    <main className="pt-0 pb-24">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full flex flex-col justify-end pb-16 px-5 md:px-16 bg-cover bg-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src={excursion.heroImage}
            alt={excursion.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030a00]/80 to-[#030a00]/20 mix-blend-multiply"></div>
        </div>
        
        <div className="max-w-7xl mx-auto w-full text-white z-10">
          <span className="block font-label-sm text-xs uppercase tracking-widest text-secondary-container mb-4 font-semibold">
            Day Tour & Excursion
          </span>
          <h1 className="font-display-lg text-3xl md:text-5xl lg:text-7xl font-bold mb-6 max-w-4xl">
            {excursion.title}
          </h1>
          <p className="font-quote text-base md:text-2xl mb-10 max-w-2xl text-stone-200">
            {excursion.description}
          </p>
          
          <div className="flex flex-wrap gap-8 items-center border-t border-white/20 pt-6">
            <div className="flex items-center gap-3">
              <Clock className="text-secondary-container" size={24} />
              <div>
                <p className="font-label-sm text-xs text-stone-300 uppercase tracking-widest font-semibold">Duration</p>
                <p className="font-body-lg text-base md:text-lg">{excursion.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Map className="text-secondary-container" size={24} />
              <div>
                <p className="font-label-sm text-xs text-stone-300 uppercase tracking-widest font-semibold">Location</p>
                <p className="font-body-lg text-base md:text-lg">{excursion.location}</p>
              </div>
            </div>
            {excursion.starts && (
              <div className="flex items-center gap-3">
                <PlaneTakeoff className="text-secondary-container" size={24} />
                <div>
                  <p className="font-label-sm text-xs text-stone-300 uppercase tracking-widest font-semibold">Starts From</p>
                  <p className="font-body-lg text-base md:text-lg">{excursion.starts}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Experience Flow */}
      <section className="max-w-7xl mx-auto px-margin-mobile md:px-16 py-16 md:py-24">
        <div className="flex items-center gap-4 mb-12 md:mb-16">
          <h2 className="font-headline-xl text-3xl md:text-5xl font-bold text-primary">The Experience</h2>
          <div className="h-px bg-surface-variant flex-1"></div>
        </div>
        
        <div className="relative pl-4 md:pl-12 border-l border-surface-variant space-y-24">
          {excursion.itinerary.map((item, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[21px] md:-left-[53px] top-0 w-10 h-10 rounded-full bg-surface-container-high border-4 border-background flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                <span className="font-label-sm text-[10px] font-bold text-center px-1">{item.day}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className={`md:col-span-5 pt-1 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:order-2'}`}>
                  <span className="font-label-sm text-xs text-secondary tracking-widest uppercase mb-2 block font-semibold">{item.day}</span>
                  <h3 className="font-headline-md text-xl md:text-3xl font-bold text-primary mb-4">{item.title}</h3>
                  <p className="font-body-md text-sm md:text-base text-stone-600 mb-6">
                    {item.description}
                  </p>
                  {item.accommodation && (
                    <div className="flex items-center gap-2 text-surface-tint font-semibold">
                      {getIcon(item.icon)}
                      <span className="font-label-sm text-sm">{item.accommodation}</span>
                    </div>
                  )}
                </div>
                <div className={`md:col-span-7 h-64 md:h-[400px] w-full overflow-hidden rounded-lg relative ${idx % 2 === 0 ? '' : 'md:order-1'}`}>
                  <Image 
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inclusions/Exclusions Bento */}
      <section className="bg-surface-container-low py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Inclusions */}
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-surface-variant/50">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="text-primary" size={24} />
                </div>
                <h3 className="font-headline-md text-2xl md:text-3xl font-bold text-primary">Inclusions</h3>
              </div>
              <ul className="space-y-4">
                {excursion.inclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <span className="font-body-lg text-base md:text-lg text-stone-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="bg-stone-50 p-8 md:p-12 rounded-xl border border-surface-variant/50">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-surface-variant rounded-full flex items-center justify-center">
                  <XCircle className="text-stone-500" size={24} />
                </div>
                <h3 className="font-headline-md text-2xl md:text-3xl font-bold text-primary">Exclusions</h3>
              </div>
              <ul className="space-y-4">
                {excursion.exclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 opacity-70">
                    <XCircle className="text-stone-500 mt-1 flex-shrink-0" size={18} />
                    <span className="font-body-lg text-base md:text-lg text-stone-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-5 text-center py-24">
        <h2 className="font-headline-md text-3xl md:text-4xl font-bold text-primary mb-6">Ready to Join the Adventure?</h2>
        <p className="font-body-lg text-lg text-stone-600 mb-10 max-w-2xl mx-auto">
          Connect with us on WhatsApp to check availability and book your excursion. We are ready to make your coastal experience unforgettable.
        </p>
        <WhatsAppCTA 
          text="Book Now via WhatsApp" 
          href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '254720899402'}`}
        />
      </section>
    </main>
  );
}
