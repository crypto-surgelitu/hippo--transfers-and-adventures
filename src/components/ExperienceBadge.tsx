'use client';

import { motion } from 'framer-motion';

export default function ExperienceBadge() {
  return (
    <motion.div 
      className="absolute bottom-0 left-0 md:-bottom-8 md:-left-8 bg-white p-4 md:p-6 rounded-xl shadow-2xl flex flex-col items-center justify-center border border-secondary/20 z-20 min-w-[110px] md:min-w-[140px]"
      animate={{
        y: [0, -20, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="text-center">
        <p className="font-serif text-3xl md:text-4xl lg:text-5xl font-black text-primary leading-none mb-1">10+</p>
        <p className="font-label-sm text-[8px] md:text-[10px] lg:text-xs text-secondary uppercase tracking-[0.2em] font-bold">
          Years of <br /> Excellence
        </p>
      </div>
    </motion.div>
  );
}
