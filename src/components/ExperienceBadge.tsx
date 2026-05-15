'use client';

import { motion } from 'framer-motion';

export default function ExperienceBadge() {
  return (
    <motion.div 
      className="absolute -bottom-8 -left-8 bg-surface-container p-6 rounded-lg shadow-sm hidden md:block border border-outline-variant/30"
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <p className="font-headline-md text-headline-md text-secondary mb-1">10+</p>
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">Years Experience</p>
    </motion.div>
  );
}
