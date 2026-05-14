'use client';

import Image from 'next/image';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useState } from 'react';
import masaiMaraBg from '@/assets/Masai Mara National Reserve, Kenya_ The Complete Guide.jpg';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Create form data object
    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      dates: formData.get('dates'),
      travelers: formData.get('travelers'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to send message');
      
      setSubmitStatus({ type: 'success', message: 'Your inquiry has been sent successfully. Our team will contact you soon.' });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'There was an error sending your message. Please try again or contact us directly via WhatsApp.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="w-full pb-24">
      {/* Hero Section */}
      <section className="relative w-full h-[64svh] min-h-[520px] md:h-[68vh] lg:h-[72vh] 2xl:h-[760px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={masaiMaraBg}
            alt="Masai Mara Landscape"
            placeholder="blur"
            quality={90}
            fill
            sizes="100vw"
            className="object-cover object-[28%_center] sm:object-[34%_center] md:object-[42%_center] lg:object-center"
            priority
          />
          {/* Matches approved contact design with a natural safari-green wash */}
          <div className="absolute inset-0 bg-[#2D3921]/50 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-background/75"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/10"></div>
          {/* Seamless bottom fade into page background */}
          <div className="absolute bottom-0 left-0 right-0 h-56 md:h-64 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-6 w-full max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="font-display-lg text-3xl sm:text-4xl md:text-display-lg leading-tight text-surface-container-lowest mb-6 uppercase w-full max-w-[20rem] sm:max-w-none">
            Your Journey Begins Here
          </h1>
          <p className="font-body-lg text-body-lg text-surface-container-lowest/90 w-full max-w-2xl mx-auto">
            Connect with our safari specialists to craft a personalized, luxury expedition into the heart of wild Kenya.
          </p>
        </div>
      </section>

      {/* Contact Layout (Bento-style Split) */}
      <section className="max-w-7xl mx-auto px-5 md:px-16 -mt-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Information & Map Area */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Direct Contact Card */}
            <div className="bg-[#FDFCF8] p-10 shadow-lg border border-surface-variant rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10 bg-[radial-gradient(circle_at_2px_2px,#2D3921_1px,transparent_0)] bg-[length:24px_24px] -mr-16 -mt-16 rounded-full"></div>
              <h2 className="font-headline-md text-3xl font-bold text-[#2D3921] mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f0eee9] flex items-center justify-center shrink-0">
                    <MapPin className="text-[#C6893F]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-label-sm text-xs text-stone-500 uppercase tracking-widest mb-1 font-semibold">Headquarters</h3>
                    <p className="font-body-md text-[#2D3921] font-medium leading-relaxed">
                      Kwarandu business square Box 55<br/>
                      Kaloleni, Mombasa County<br/>
                      80200 Kenya
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f0eee9] flex items-center justify-center shrink-0">
                    <Phone className="text-[#C6893F]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-label-sm text-xs text-stone-500 uppercase tracking-widest mb-1 font-semibold">Call or WhatsApp</h3>
                    <p className="font-body-md text-[#2D3921] font-medium">+254 720 899 402</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f0eee9] flex items-center justify-center shrink-0">
                    <Mail className="text-[#C6893F]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-label-sm text-xs text-stone-500 uppercase tracking-widest mb-1 font-semibold">Email</h3>
                    <p className="font-body-md text-[#2D3921] font-medium break-all">hippotransfer@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Card */}
            <div className="bg-surface-container-low h-64 rounded-xl overflow-hidden border border-surface-variant shadow-sm relative">
              <div className="absolute inset-0 bg-[#f0eee9] flex flex-col items-center justify-center">
                <Image 
                  src="https://lh3.googleusercontent.com/aida/ADBb0uhdoUuZO2HVWvK0m5alzMkzWVAIPjYVpZEZeeDY9vwS5YXTVVILviyZec2dhE2_JWPhgJYQjExCi7LK7h9ca8W-jjw4VxuaRFWyzYQus497IpGWcFNnMB-i40TR_Nzip9idZo91zhcaOYl8T-guvKsSOTe_DLsXXkbPJhE9cTNuyddQH-r_fLnEZ3yT-ZdOe2y2Q5jYnoh0pi06OJhoSZxchv6dRsgcHluPh6QFubYzaboT2dCEk033JDITyTzOVSZTR2JqyqlcbA"
                  alt="Map of Mombasa County"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-[#FDFCF8] p-10 md:p-14 shadow-lg border border-surface-variant rounded-xl relative">
            <h2 className="font-headline-md text-3xl font-bold text-[#2D3921] mb-2">Send an Inquiry</h2>
            <p className="font-body-md text-stone-600 mb-10">
              Please provide details about your desired experience, and our concierges will return with a bespoke proposal.
            </p>
            
            {submitStatus && (
              <div className={`p-4 rounded-md mb-8 ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Full Name */}
                <div className="flex flex-col">
                  <label htmlFor="fullName" className="text-xs font-semibold uppercase tracking-widest text-stone-500 mb-2">Full Name *</label>
                  <input 
                    id="fullName" 
                    name="fullName"
                    type="text" 
                    required 
                    className="w-full px-0 py-2 bg-transparent border-0 border-b border-stone-300 text-[#2D3921] focus:ring-0 focus:border-[#2D3921] font-body-md"
                  />
                </div>
                {/* Email */}
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-stone-500 mb-2">Email Address *</label>
                  <input 
                    id="email" 
                    name="email"
                    type="email" 
                    required 
                    className="w-full px-0 py-2 bg-transparent border-0 border-b border-stone-300 text-[#2D3921] focus:ring-0 focus:border-[#2D3921] font-body-md"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Phone */}
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-widest text-stone-500 mb-2">Phone Number (Opt)</label>
                  <input 
                    id="phone" 
                    name="phone"
                    type="tel" 
                    className="w-full px-0 py-2 bg-transparent border-0 border-b border-stone-300 text-[#2D3921] focus:ring-0 focus:border-[#2D3921] font-body-md"
                  />
                </div>
                {/* Subject Dropdown */}
                <div className="flex flex-col">
                  <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-widest text-stone-500 mb-2">Inquiry Subject</label>
                  <select 
                    id="subject" 
                    name="subject"
                    defaultValue=""
                    className="w-full px-0 py-2 bg-transparent border-0 border-b border-stone-300 text-[#2D3921] focus:ring-0 focus:border-[#2D3921] font-body-md appearance-none"
                  >
                    <option disabled value=""></option>
                    <option value="safari">Safari Inquiry</option>
                    <option value="tour">Day Tour Inquiry</option>
                    <option value="general">General Question</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Dates */}
                <div className="flex flex-col">
                  <label htmlFor="dates" className="text-xs font-semibold uppercase tracking-widest text-stone-500 mb-2">Preferred Travel Dates</label>
                  <input 
                    id="dates" 
                    name="dates"
                    type="date" 
                    className="w-full px-0 py-2 bg-transparent border-0 border-b border-stone-300 text-[#2D3921] focus:ring-0 focus:border-[#2D3921] font-body-md"
                  />
                </div>
                {/* Travelers */}
                <div className="flex flex-col">
                  <label htmlFor="travelers" className="text-xs font-semibold uppercase tracking-widest text-stone-500 mb-2">Number of Travelers</label>
                  <input 
                    id="travelers" 
                    name="travelers"
                    type="number" 
                    min="1" 
                    className="w-full px-0 py-2 bg-transparent border-0 border-b border-stone-300 text-[#2D3921] focus:ring-0 focus:border-[#2D3921] font-body-md"
                  />
                </div>
              </div>
              
              {/* Message */}
              <div className="flex flex-col mt-8">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-stone-500 mb-2">Your Message / Requirements *</label>
                <textarea 
                  id="message" 
                  name="message"
                  required 
                  rows={4}
                  className="w-full px-0 py-2 bg-transparent border-0 border-b border-stone-300 text-[#2D3921] focus:ring-0 focus:border-[#2D3921] font-body-md resize-none"
                ></textarea>
              </div>
              
              {/* Submit Area */}
              <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-stone-200">
                <p className="text-xs text-stone-500 max-w-xs leading-relaxed">
                  By submitting this form, you agree to our <a href="#" className="underline hover:text-[#2D3921]">Privacy Policy</a> regarding your data.
                </p>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-[#C6893F] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 rounded disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                  <Send size={16} />
                </button>
              </div>
            </form>
          </div>
          
        </div>
      </section>
    </main>
  );
}
