'use client';

import { Box, Space, Stack } from '@mantine/core';
import classes from '@/src/components/content/case-studies/components/ProjectCard.module.css';
import { FadeIn } from '../components/animations/FadeIn';
import AboutImageCarousel from '../components/content/about/components/AboutImageCarousel';
import AboutMe from '../components/content/about/components/AboutMe';
import NaturebookCard from '../components/content/about/components/NaturebookCard';
import ProjectCard from '../components/content/case-studies/components/ProjectCard';
import SelectedWorkHeader from '../components/content/case-studies/components/SelectedWorkHeader';
import { CASE_STUDIES } from '../components/content/case-studies/data/case-studies';
import MoreBanner from '../components/layout/components/MoreBanner';

export default function HomePage() {
  const featuredProjects = CASE_STUDIES.filter((project) => project.featured);
  return (
    <>
      <Stack
        className={classes.sections}
        style={{ containerType: 'inline-size', containerName: 'project-list' }}
      >
        <Stack hiddenFrom="xl" gap="xl">
          <AboutImageCarousel />
          <AboutMe paddingTop={0} />
        </Stack>

        <Stack gap="lg">
          <FadeIn>
            <SelectedWorkHeader />
          </FadeIn>
          <div className={classes.gridList}>
            {featuredProjects.map((project, index) => (
              <div key={project.title}>
                <FadeIn key={project.id} delay={index * 0.02}>
                  <ProjectCard
                    title={project.title}
                    company={project.company}
                    description={project.description}
                    coverSrc={project.coverSrc}
                    logoSrc={project.logoSrc}
                    href={project.href}
                  />
                </FadeIn>
              </div>
            ))}
          </div>
        </Stack>

        <MoreBanner visibleStudyHrefs={featuredProjects.map((project) => project.href)} />

        <Box hiddenFrom="sm">
          <NaturebookCard compact />
        </Box>

        <Space h="xl" />
      </Stack>
    </>
  );
}
