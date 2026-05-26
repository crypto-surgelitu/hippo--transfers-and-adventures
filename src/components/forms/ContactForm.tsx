'use client';

import { Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
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
    <div className="lg:col-span-7 bg-[#FDFCF8] p-6 sm:p-10 md:p-14 shadow-lg border border-surface-variant rounded-xl relative">
      <h2 className="font-headline-md text-2xl md:text-3xl font-bold text-[#2D3921] mb-2">Send an Inquiry</h2>
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
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-widest text-stone-500 mb-2">Phone Number (Opt)</label>
            <input 
              id="phone" 
              name="phone"
              type="tel" 
              className="w-full px-0 py-2 bg-transparent border-0 border-b border-stone-300 text-[#2D3921] focus:ring-0 focus:border-[#2D3921] font-body-md"
            />
          </div>
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
          <div className="flex flex-col">
            <label htmlFor="dates" className="text-xs font-semibold uppercase tracking-widest text-stone-500 mb-2">Preferred Travel Dates</label>
            <input 
              id="dates" 
              name="dates"
              type="date" 
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-0 py-2 bg-transparent border-0 border-b border-stone-300 text-[#2D3921] focus:ring-0 focus:border-[#2D3921] font-body-md cursor-pointer"
            />
          </div>
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
        
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-stone-200">
          <p className="text-xs text-stone-500 max-w-xs leading-relaxed">
            By submitting this form, you agree to our <a href="/privacy-policy" className="underline hover:text-[#2D3921]">Privacy Policy</a> regarding your data.
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
  );
}
