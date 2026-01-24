'use client';

import { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

const containerVariants: Variants = {
  hidden: {},
  show: (staggerDelay: number = 0.1) => ({
    transition: {
      staggerChildren: staggerDelay,
    },
  }),
};

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  className,
}: StaggerContainerProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      custom={staggerDelay}
      className={className}
    >
      {children}
    </motion.div>
  );
}
