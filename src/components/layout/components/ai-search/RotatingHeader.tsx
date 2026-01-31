import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MantineSize, StyleProp, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const ROTATING_WORDS = [
  'work',
  'experience',
  'process',
  'background',
  'projects',
  'skills',
  'education',
  'hobbies',
];

const WORD_GRADIENTS = [
  'linear-gradient(45deg, #FF6B6B, #FF8E53)', // work: orange-red
  'linear-gradient(45deg, #4facfe, #00f2fe)', // experience: blue-cyan
  'linear-gradient(45deg, #43e97b, #38f9d7)', // process: green-teal
  'linear-gradient(45deg, #fa709a, #fee140)', // background: pink-yellow
  'linear-gradient(45deg, #667eea, #764ba2)', // projects: purple-indigo
  'linear-gradient(45deg, #f093fb, #f5576c)', // skills: pink-red
  'linear-gradient(45deg, #4facfe, #00f2fe)', // education: blue-cyan
  'linear-gradient(45deg, #43e97b, #38f9d7)', // hobbies: green-teal
];

interface RotatingHeaderProps {
  prefix?: string;
  fontSize?: StyleProp<MantineSize | (string & {}) | number>;
}

export function RotatingHeader({
  prefix = 'Learn about my',
  fontSize = { base: '2.25rem', md: '3rem' },
}: RotatingHeaderProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const isSmallScreen = useMediaQuery('(max-width: 32em)');

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Title order={1} lh={1.1} ta="center" fz={fontSize}>
      <motion.div
        layout
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: isSmallScreen ? 'center' : 'baseline',
          flexDirection: isSmallScreen ? 'column' : 'row',
          gap: isSmallScreen ? '0' : '0.2em',
        }}
      >
        <motion.span layout>{prefix}</motion.span>
        <motion.span
          layout
          style={{
            display: 'inline-grid',
            verticalAlign: 'bottom',
            height: '1.2em',
            overflow: 'hidden',
            minWidth: '3ch',
            textAlign: isSmallScreen ? 'center' : 'left',
            alignItems: 'end',
            position: 'relative',
            justifyItems: isSmallScreen ? 'center' : 'start',
          }}
          transition={{ layout: { duration: 0.5, ease: 'easeOut' } }}
        >
          <AnimatePresence mode="popLayout">
            <motion.span
              key={ROTATING_WORDS[wordIndex]}
              initial={{ y: '-100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                whiteSpace: 'nowrap',
                backgroundImage: WORD_GRADIENTS[wordIndex],
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              {ROTATING_WORDS[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.span>
      </motion.div>
    </Title>
  );
}
