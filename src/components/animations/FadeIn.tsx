'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
  children: ReactNode;
  delay?: number; // Optional delay for staggered effects
  duration?: number;
  className?: string; // Allow passing styles/classes
}

export function FadeIn({ children, delay = 0, duration = 0.5, className }: FadeInProps) {
  return (
    <motion.div
      // 1. Start invisible and slightly lower
      initial={{ opacity: 0, y: 20 }}
      // 2. Animate to full opacity and original position when in view
      whileInView={{ opacity: 1, y: 0 }}
      // 3. Only animate once (don't fade out when scrolling up)
      //    'margin' triggers the animation a bit before the element is fully on screen
      viewport={{ once: true, margin: '-50px' }}
      // 4. Smooth easing curve
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
