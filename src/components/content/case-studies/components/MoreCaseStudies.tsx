'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { SimpleGrid, Space, Stack, Title } from '@mantine/core';
import MoreBanner from '@/src/components/layout/components/MoreBanner';
import { CASE_STUDIES, CaseStudy } from '../data/case-studies';
import ProjectCard from './ProjectCard';

export default function MoreCaseStudies() {
  const pathname = usePathname();
  const [randomStudies, setRandomStudies] = useState<CaseStudy[]>([]);

  useEffect(() => {
    // 1. Filter out the current case study based on the URL
    const otherStudies = CASE_STUDIES.filter((study) => study.href !== pathname);

    // 2. Shuffle the array randomly
    const shuffled = [...otherStudies].sort(() => 0.5 - Math.random());

    // 3. Pick the first 2 items
    setRandomStudies(shuffled.slice(0, 2));
  }, [pathname]);

  // Don't render anything until the random selection is ready
  if (randomStudies.length === 0) {
    return null;
  }

  return (
    <Stack gap="xl" py="xl" style={{ borderTop: '1px solid var(--app-shell-border-color)' }}>
      <Title order={2}>More of my work</Title>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={{ base: 'xl' }}>
        {randomStudies.map((study) => (
          <ProjectCard
            key={study.title}
            title={study.title}
            company={study.company}
            coverSrc={study.coverSrc}
            logoSrc={study.logoSrc}
            href={study.href}
          />
        ))}
      </SimpleGrid>

      <MoreBanner />
      <Space h="xl" />
    </Stack>
  );
}
