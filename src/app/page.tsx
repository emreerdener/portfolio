'use client';

import { Grid, Space, Stack } from '@mantine/core';
import { FadeIn } from '../components/animations/FadeIn';
import ProjectCard from '../components/content/case-studies/components/ProjectCard';
import { CASE_STUDIES } from '../components/content/case-studies/data/case-studies';
import HomeSearchInput from '../components/layout/components/ai-search/HomeSearchInput';
import MoreBanner from '../components/layout/components/MoreBanner';

export default function HomePage() {
  const featuredProjects = CASE_STUDIES.filter((project) => project.featured);
  return (
    <>
      <Stack gap="xl" px={{ base: 0, lg: 'xl' }}>
        <FadeIn>
          <HomeSearchInput />
        </FadeIn>

        <Grid gutter={{ base: 32, xs: 48 }}>
          {featuredProjects.map((project, index) => (
            <Grid.Col
              key={project.title}
              span={{
                base: 12,
                md: index === 0 || index === 3 || index === 6 ? 12 : 6,
              }}
            >
              <FadeIn key={project.id} delay={index * 0.02}>
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
