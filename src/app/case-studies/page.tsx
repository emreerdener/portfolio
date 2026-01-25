'use client';

import { IconSearch } from '@tabler/icons-react';
import Lottie from 'lottie-react';
import { Box, Button, Grid, Space, Stack, Text, Title } from '@mantine/core';
import { FadeIn } from '@/src/components/animations/FadeIn';
import ProjectCard from '@/src/components/content/case-studies/components/ProjectCard';
import ProjectFilters from '@/src/components/content/case-studies/components/ProjectFilters';
import { useProjectFilters } from '@/src/components/content/case-studies/hooks/use-project-filters';
import { PolarBear } from '@/src/components/content/other-work/components/animations/data/polar-bear';
import { CASE_STUDIES } from '../../components/content/case-studies/data/case-studies';

// Constant data for filter dropdowns (derived from full dataset)
const CLIENTS = Array.from(new Set(CASE_STUDIES.map((p) => p.company)))
  .sort()
  .map((company) => {
    const project = CASE_STUDIES.find((p) => p.company === company);
    return {
      name: company,
      logoSrc: project?.logoSrc,
    };
  });

const CATEGORIES = Array.from(new Set(CASE_STUDIES.flatMap((p) => p.categories))).sort();

// Custom order for platforms: Mobile, Web (Desktop), IoT
const PLATFORM_ORDER = ['Mobile', 'Web', 'IoT'];

const PLATFORMS = Array.from(new Set(CASE_STUDIES.flatMap((p) => p.platforms))).sort(
  (a, b) => PLATFORM_ORDER.indexOf(a) - PLATFORM_ORDER.indexOf(b)
);

export default function CaseStudiesPage() {
  const {
    selectedCompanies,
    setSelectedCompanies,
    selectedCategories,
    setSelectedCategories,
    selectedPlatform,
    setSelectedPlatform,
    filteredProjects,
    resetFilters,
  } = useProjectFilters(CASE_STUDIES);

  return (
    <>
      <Stack gap="xl">
        <ProjectFilters
          clients={CLIENTS}
          categories={CATEGORIES}
          platforms={PLATFORMS}
          selectedCompanies={selectedCompanies}
          setSelectedCompanies={setSelectedCompanies}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          selectedPlatform={selectedPlatform}
          setSelectedPlatform={setSelectedPlatform}
          resetFilters={resetFilters}
          resultCount={filteredProjects.length}
        />

        <Grid gutter={{ base: 'xl', xl: '3rem' }}>
          {filteredProjects.map((project, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 6 }}>
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

          {/* Empty */}
          {filteredProjects.length === 0 && (
            <Grid.Col span={12}>
              <Stack align="center" py={60} gap="md">
                <Title order={2}>No projects found</Title>
                <Text c="dimmed" ta="center" maw={420}>
                  We couldn&apos;t find any case studies matching your current filters. Try
                  adjusting your search criteria.
                </Text>
                <Button variant="light" size="md" onClick={resetFilters}>
                  Clear all filters
                </Button>

                <Box w="100%" maw={500}>
                  <Lottie animationData={PolarBear} loop autoplay />
                </Box>
              </Stack>
            </Grid.Col>
          )}
        </Grid>
      </Stack>

      <Space h="xl" />
    </>
  );
}
