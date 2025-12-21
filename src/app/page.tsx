'use client';

import { useRouter } from 'next/navigation';
import { Button, Grid, Group, Paper, Space, Stack, Text, Title } from '@mantine/core';
import ProjectCard from '../components/features/CaseStudies/ProjectCard';
import { CASE_STUDIES } from '../data/case-studies';

export default function HomePage() {
  const router = useRouter();

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

        <Paper p="lg" withBorder radius="lg" shadow="sm">
          <Group justify="space-between" wrap="nowrap">
            <Stack gap={4}>
              <Title order={4}>More design work</Title>
              <Text c="dimmed">
                Explore more of my design work across mobile apps, SaaS platforms, and design
                systems.
              </Text>
            </Stack>
            <Button onClick={() => router.push('/case-studies')} size="md">
              View more
            </Button>
          </Group>
        </Paper>

        <Space h="xl" />
      </Stack>
    </>
  );
}
