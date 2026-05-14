"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const WhatsAppFloat = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Read and clean the phone number from environment variables
  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const cleanNumber = rawNumber.replace(/\D/g, "");
  
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=Hello%2C%20I%27m%20interested%20in%20your%20safari%20packages.`;

  return (
    <div className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-50 flex items-center">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
            className="mr-3 hidden sm:block pointer-events-none"
          >
            <div className="bg-white px-4 py-2 rounded-lg shadow-lg border border-stone-100 whitespace-nowrap">
              <span className="text-stone-700 text-sm font-semibold">Chat with us on WhatsApp</span>
              {/* Tooltip Arrow */}
              <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-white border-r border-t border-stone-100 rotate-45"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1.5,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-2xl transition-shadow hover:shadow-green-500/20"
      >
        {/* Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
        
        {/* WhatsApp Icon */}
        <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28" className="relative z-10">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.112 1.524 5.84L.057 23.49a.75.75 0 00.921.921l5.649-1.468A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.666-.5-5.207-1.378l-.374-.214-3.875 1.007 1.007-3.875-.215-.375A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 5.477 10 10-4.477 10-10 10z"/>
        </svg>
      </motion.a>
    </div>
  );
};

export default WhatsAppFloat;
