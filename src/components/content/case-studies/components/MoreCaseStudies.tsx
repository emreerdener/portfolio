'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Space, Stack, Title } from '@mantine/core';
import MoreBanner from '@/src/components/layout/components/MoreBanner';
import { CASE_STUDIES, CaseStudy } from '../data/case-studies';
import ProjectCard from './ProjectCard';
import classes from './ProjectCard.module.css';

interface MoreCaseStudiesProps {
  heading?: string;
}

export default function MoreCaseStudies({ heading = 'More of my work' }: MoreCaseStudiesProps) {
  const pathname = usePathname();
  const [randomStudies, setRandomStudies] = useState<CaseStudy[]>([]);

  useEffect(() => {
    // 1. Filter out the current case study based on the URL
    const otherStudies = CASE_STUDIES.filter((study) => study.href !== pathname);

    // 2. Shuffle the array randomly
    const shuffled = [...otherStudies].sort(() => 0.5 - Math.random());

    // 3. Pick the first 2 items
    setRandomStudies(shuffled.slice(0, 4));
  }, [pathname]);

  // Don't render anything until the random selection is ready
  if (randomStudies.length === 0) {
    return null;
  }

  return (
    <Stack
      className={classes.sections}
      py={{ base: 32, md: 48 }}
      w="100%"
      style={{
        containerType: 'inline-size',
        containerName: 'project-list',
      }}
    >
      <Title order={2}>{heading}</Title>
      <div className={`${classes.gridList} ${classes.moreGrid}`}>
        {randomStudies.map((study) => (
          <ProjectCard
            key={study.title}
            title={study.title}
            company={study.company}
            description={study.description}
            coverSrc={study.coverSrc}
            logoSrc={study.logoSrc}
            href={study.href}
          />
        ))}
      </div>

      <MoreBanner visibleStudyHrefs={[pathname, ...randomStudies.map((study) => study.href)]} />
      <Space h="xl" />
    </Stack>
  );
}
