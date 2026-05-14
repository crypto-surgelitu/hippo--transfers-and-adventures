import Image from 'next/image';
import { Compass, Eye } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://lh3.googleusercontent.com/aida/ADBb0uhUs-mROTv-qAtAbiF_8_ijOP9JHORx8Av0FyWIwIdnnGlf9jI8YouX2xbMprS9DjNT3GACO_obnhfJ6JmaxAhDviDPzHMKICnA5baCQ1d1m6MSuGFc57SSqYUUtQR7VcEUwEMN5tsBmRWOd2MH7wSj2onbVHWMX0zS_i7KCJqbW_AwieO4iYoPyaUAuN9c7Hj6ME2BFgZyuZyw7LEw2lbJnhyK2j9CxJipg3c7Fd4aD5FlcdsRH1yxnrml2xB470p0JwoxRkSG"
            alt="Three lions sitting in the tall grass of the savannah at sunset"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-12">
          <h1 className="font-display-lg text-5xl md:text-6xl lg:text-7xl font-bold text-on-primary mb-6 drop-shadow-lg text-white">
            A Legacy of Discovery
          </h1>
          <p className="font-quote text-xl md:text-2xl text-on-primary max-w-2xl mx-auto font-light drop-shadow-md text-white">
            Crafting extraordinary journeys with soul. Over a decade of passion, deep-rooted local expertise, and an unwavering commitment to the wild.
          </p>
        </div>
      </section>

      {/* Our Story - Asymmetric Layout */}
      <section className="py-24 px-5 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 lg:col-start-1 relative">
            <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-lg z-10">
              <Image 
                src="https://lh3.googleusercontent.com/aida/ADBb0uhy6LqABXSwvJt38P844FIiyVnnbwkOxYOJzK2-1Ir31Y5SKe1pRypZLbbdPcT2uQN4ovJZGY3ytsY91pT78twJn9QgOzGNVX31VbOidV1w25DWrzdDS5n_ySPulAezjp4SWRWhL_JfGzRY7Eu5e5DYYSAmRJsvwxP-unJC9aHgeQPrFS1nVp3EVDbFlrY4SnBHAjwypEWXk0O44f7Ix5FqYqfV6K4HKsHWIYu4OMeAtkJtfjVs02zTinscFFqPJB1kvZr4Jqit"
                alt="Emmanuel AMANI K, Founder of Hippo Adventures"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-surface-container-low -z-10 rounded"></div>
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
                  src="https://lh3.googleusercontent.com/aida/ADBb0uh3vTmuHIC1AxHjFyk8L-Dp-5LocV3sgC5lqO69TDNCx9_d1EMr19A1ReiS_GUruhMFIqCVWoxHfR-w7W997pk6LHW_X3rvVT03fMgWWitXDeZQ4GCv4y8w6E26qsFu6nfHjLSd2EdVW3C6SsQNqc4JxM4D80EadK8QDYAwaz4a1QHNXgWWrm2V481MG73M3oJJMJW-yOaqIkJB2K0VpBoqSbGUzvZn-pX1Sv-s8XQqT3mh-vorjd742lYiv0AgR7jdqYRDrZMVcQ"
                  alt="Founder Portrait"
                  fill
                  className="object-cover"
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
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform duration-300">
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
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform duration-300">
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
