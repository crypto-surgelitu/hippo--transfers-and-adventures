'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroSlideshowProps {
  images: string[];
  interval?: number;
}

export const HeroSlideshow = ({ images, interval = 5000 }: HeroSlideshowProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt="Safari Landscape Slideshow"
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
            quality={90}
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/20 to-transparent"></div>
    </div>
  );
};
