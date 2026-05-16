import Image from 'next/image';
import { Clock, Map, PlaneTakeoff, CheckCircle2, XCircle, Bed, Compass, Camera } from 'lucide-react';
import Link from 'next/link';
import { excursions } from '@/data/excursions';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

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
        <Link 
          href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '254720899402'}`} 
          className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform shadow-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
          Book Now via WhatsApp
        </Link>
      </section>
    </main>
  );
}
