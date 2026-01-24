'use client';

import { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

interface FadeInUpProps {
  children: ReactNode;
  className?: string;
  duration?: number;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (duration: number = 0.5) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: duration,
      ease: 'easeOut',
    },
  }),
};

export function FadeInUp({ children, className, duration = 0.5 }: FadeInUpProps) {
  return (
    <motion.div variants={itemVariants} custom={duration} className={className}>
      {children}
    </motion.div>
  );
}
