'use client';

import { Grid, Space, Stack } from '@mantine/core';
import ProjectCard from '@/src/components/content/case-studies/components/ProjectCard';
import ProjectFilters from '@/src/components/content/case-studies/components/ProjectFilters';
import { useProjectFilters } from '@/src/components/content/case-studies/hooks/use-project-filters';
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
const PLATFORMS = Array.from(new Set(CASE_STUDIES.flatMap((p) => p.platforms))).sort();

export default function CaseStudiesPage() {
  const {
    selectedCompanies,
    setSelectedCompanies,
    selectedCategory,
    setSelectedCategory,
    selectedPlatform,
    setSelectedPlatform,
    sortOrder,
    setSortOrder,
    filteredProjects,
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
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedPlatform={selectedPlatform}
          setSelectedPlatform={setSelectedPlatform}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />

        <Grid gutter={{ base: 'lg', xs: 'xl' }}>
          {filteredProjects.map((project, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 6 }}>
              <ProjectCard
                title={project.title}
                company={project.company}
                coverSrc={project.coverSrc}
                logoSrc={project.logoSrc}
                href={project.href}
              />
            </Grid.Col>
          ))}
          {filteredProjects.length === 0 && (
            <Grid.Col span={12}>
              <Stack align="center" py="xl" c="dimmed">
                No projects match the selected filters.
              </Stack>
            </Grid.Col>
          )}
        </Grid>
      </Stack>

      <Space h="xl" />
    </>
  );
}
