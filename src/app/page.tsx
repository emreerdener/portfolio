'use client';

import { Grid, Space, Stack } from '@mantine/core';
import ProjectCard from '../components/features/CaseStudies/ProjectCard';
import MoreBanner from '../components/layout/MoreBanner';
import { CASE_STUDIES } from '../data/case-studies';

export default function HomePage() {
  // We only want to show the first 5 items on the homepage
  const featuredProjects = CASE_STUDIES.slice(0, 5);

  return (
    <>
      <Stack gap="xl">
        <Grid gutter={{ base: 'lg', xs: 'xl' }}>
          {featuredProjects.map((project, index) => (
            <Grid.Col key={project.title} span={{ base: 12, md: index === 0 ? 12 : 6 }}>
              <ProjectCard
                title={project.title}
                company={project.company}
                coverSrc={project.coverSrc}
                logoSrc={project.logoSrc}
                href={project.href}
              />
            </Grid.Col>
          ))}
        </Grid>

        <MoreBanner />

        <Space h="xl" />
      </Stack>
    </>
  );
}
