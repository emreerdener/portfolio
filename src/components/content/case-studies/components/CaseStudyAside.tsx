'use client';

import { RefObject, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, useReducedMotion } from 'framer-motion';
import { Box, ScrollArea, Stack, Text, UnstyledButton } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { CASE_STUDIES } from '../data/case-studies';
import CaseStudyNavigation from './CaseStudyNavigation';
import classes from './CaseStudyAside.module.css';

interface CaseStudyAsideProps {
  onLinkClick?: () => void;
  noPadding?: boolean;
  viewportRef?: RefObject<HTMLDivElement | null>;
}

export default function CaseStudyAside({
  onLinkClick,
  noPadding,
  viewportRef,
}: CaseStudyAsideProps) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const isMobile = useMediaQuery('(max-width: 48em)');
  const pageTitle = CASE_STUDIES.find((study) => study.href === pathname)?.title;
  const [data, setData] = useState<
    { id: string; depth: number; value: string; getNode: () => HTMLElement }[]
  >([]);
  const [active, setActive] = useState(-1);
  const listRef = useRef<HTMLDivElement>(null);
  const [dotY, setDotY] = useState<number | null>(null);

  useLayoutEffect(() => {
    const updatePosition = () => {
      const row = listRef.current?.querySelector<HTMLElement>('[data-active]');
      if (row) {
        setDotY(row.offsetTop + row.offsetHeight / 2 - 3);
      }
    };
    updatePosition();
    const observer = new ResizeObserver(updatePosition);
    if (listRef.current) {
      observer.observe(listRef.current);
    }
    return () => observer.disconnect();
  }, [active, data]);

  useEffect(() => {
    const content = document.querySelector<HTMLElement>('[data-case-study-content]');
    if (!content) {
      return;
    }
    const headings = Array.from(content.querySelectorAll<HTMLElement>('h1, h2, h3'));
    setData(
      headings.map((node, index) => ({
        id: `${pathname}-${index}`,
        depth: Number(node.tagName[1]),
        value: node.textContent || '',
        getNode: () => node,
      }))
    );
    let frame = 0;
    const update = () => {
      const offset = isMobile ? 112 : 120;
      let current = headings.length ? 0 : -1;
      headings.forEach((heading, index) => {
        if (heading.getClientRects().length && heading.getBoundingClientRect().top <= offset) {
          current = index;
        }
      });
      setActive(current);
    };
    const scheduleUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    const observer = new ResizeObserver(scheduleUpdate);
    observer.observe(content);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      observer.disconnect();
    };
  }, [pathname, isMobile]);

  return (
    <ScrollArea type="never" h="100%" viewportRef={viewportRef}>
      <Stack gap="lg" px={noPadding ? 0 : 'lg'} py={noPadding ? 0 : 'xl'}>
        <Box visibleFrom="xl" mb="sm">
          <CaseStudyNavigation />
        </Box>

        {pageTitle && (
          <Text fw={600} fz={20} lh={1.35}>
            {pageTitle}
          </Text>
        )}

        <div ref={listRef} className={classes.list}>
          {dotY !== null && (
            <motion.span
              aria-hidden="true"
              className={classes.dot}
              initial={false}
              animate={{
                y: dotY,
                scaleY: reduceMotion ? 1 : [1, 1.7, 0.9, 1],
                scaleX: reduceMotion ? 1 : [1, 0.8, 1.08, 1],
              }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : {
                      y: { type: 'spring', stiffness: 650, damping: 30, mass: 0.45 },
                      scaleY: { duration: 0.26, times: [0, 0.3, 0.75, 1] },
                      scaleX: { duration: 0.26, times: [0, 0.3, 0.75, 1] },
                    }
              }
            />
          )}
          {data.map((heading, index) => (
            <UnstyledButton
              key={heading.id}
              className={classes.control}
              data-active={active === index || undefined}
              aria-current={active === index ? 'location' : undefined}
              onClick={() => {
                const element = heading.getNode();
                if (!element) {
                  return;
                }
                window.scrollTo({
                  top:
                    heading.depth === 1
                      ? 0
                      : element.getBoundingClientRect().top +
                        window.scrollY -
                        (isMobile ? 112 : 120),
                  behavior: reduceMotion ? 'instant' : 'smooth',
                });
                onLinkClick?.();
              }}
            >
              {heading.depth === 1 ? 'Overview' : heading.value}
            </UnstyledButton>
          ))}
        </div>
      </Stack>
    </ScrollArea>
  );
}
