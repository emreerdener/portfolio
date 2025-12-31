'use client';

import { Grid, Space, Stack } from '@mantine/core';
import { FadeIn } from '../components/animations/FadeIn';
import ProjectCard from '../components/content/case-studies/components/ProjectCard';
import { CASE_STUDIES } from '../components/content/case-studies/data/case-studies';
import MoreBanner from '../components/layout/components/MoreBanner';

export default function HomePage() {
  const featuredProjects = CASE_STUDIES.filter((project) => project.featured);
  return (
    <>
      <Stack gap="xl">
        <Grid gutter={{ base: 'lg', xs: 'xl' }}>
          {featuredProjects.map((project, index) => (
            <Grid.Col
              key={project.title}
              span={{ base: 12, md: index === 0 || index === 5 ? 12 : 6 }}
            >
              <FadeIn key={project.id} delay={index * 0.05}>
                <ProjectCard
                  title={project.title}
                  company={project.company}
                  coverSrc={project.coverSrc}
                  logoSrc={project.logoSrc}
                  href={project.href}
                />
              </FadeIn>
            </Grid.Col>
          ))}
        </Grid>

        <MoreBanner />

        <Space h="xl" />
      </Stack>
    </>
  );
}
