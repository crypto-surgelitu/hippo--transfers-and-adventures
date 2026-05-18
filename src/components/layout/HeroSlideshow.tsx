'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroSlideshowProps {
  images: string[];
  interval?: number;
}

export const HeroSlideshow = ({ images, interval = 6000 }: HeroSlideshowProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [images, interval]);

  if (!images || images.length === 0) return null;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-stone-950">
      <AnimatePresence initial={true}>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 2.5,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="absolute inset-0"
        >
          {/* Internal zoom container that doesn't reset on fade exit */}
          <motion.div
            initial={{ scale: 1.15 }}
            animate={{ scale: 1.05 }}
            transition={{
              duration: interval / 1000 + 2, // Slight overlap for smooth movement
              ease: "linear"
            }}
            className="absolute inset-0"
          >
            <Image
              src={images[index]}
              alt="Safari Experience Cinematic Backdrop"
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
              quality={90}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
      
      {/* Premium Gradient Overlay — ensures text readability and cinematic depth */}
      <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent"></div>
    </div>
  );
};
