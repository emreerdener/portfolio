'use client';

import { useState } from 'react';
import { IconCaretDownFilled } from '@tabler/icons-react';
import {
  Avatar,
  CheckIcon,
  Combobox,
  Grid,
  Group,
  Pill,
  PillsInput,
  Select,
  Space,
  Stack,
  useCombobox,
} from '@mantine/core';
import ProjectCard from '../../components/features/CaseStudies/ProjectCard';
import { CASE_STUDIES } from '../../data/case-studies';

// 1. Extract unique values for filters
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
  // --- Combobox Logic (Clients) ---
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });

  const [search, setSearch] = useState('');
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);

  // New State for Filters
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<string | null>('Recent');

  const handleValueSelect = (val: string) => {
    setSearch('');
    setSelectedCompanies((current) =>
      current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
    );
  };

  const handleValueRemove = (val: string) =>
    setSelectedCompanies((current) => current.filter((v) => v !== val));

  const options = CLIENTS.filter((item) =>
    item.name.toLowerCase().includes(search.trim().toLowerCase())
  ).map((item) => (
    <Combobox.Option
      value={item.name}
      key={item.name}
      active={selectedCompanies.includes(item.name)}
    >
      <Group gap="sm">
        <Avatar src={item.logoSrc} size="sm" radius="md" />
        <span>{item.name}</span>
        {selectedCompanies.includes(item.name) ? (
          <CheckIcon size={12} style={{ marginLeft: 'auto' }} />
        ) : null}
      </Group>
    </Combobox.Option>
  ));

  const values = selectedCompanies.map((name) => {
    return (
      <Pill key={name} withRemoveButton onRemove={() => handleValueRemove(name)}>
        <Group gap="xs" align="center">
          {name}
        </Group>
      </Pill>
    );
  });

  // --- Filtering Logic ---
  const filteredProjects = CASE_STUDIES.filter((project) => {
    // 1. Client Filter
    if (selectedCompanies.length > 0 && !selectedCompanies.includes(project.company)) {
      return false;
    }
    // 2. Category Filter
    if (selectedCategory && !project.categories.includes(selectedCategory as any)) {
      return false;
    }
    // 3. Platform Filter
    if (selectedPlatform && !project.platforms.includes(selectedPlatform as any)) {
      return false;
    }
    return true;
  });

  return (
    <>
      <Stack gap="xl">
        {/* Filter Section */}
        <Group justify="space-between">
          <Group>
            {/* Client Multi-Select */}
            <Combobox store={combobox} onOptionSubmit={handleValueSelect}>
              <Combobox.DropdownTarget>
                <PillsInput
                  onClick={() => combobox.openDropdown()}
                  radius="md"
                  size="lg"
                  rightSection={<IconCaretDownFilled size={20} />}
                  rightSectionPointerEvents="none"
                  pointer
                >
                  <Pill.Group>
                    {values}
                    <Combobox.EventsTarget>
                      <PillsInput.Field
                        onFocus={() => combobox.openDropdown()}
                        onBlur={() => combobox.closeDropdown()}
                        value={search}
                        placeholder="Filter by client"
                        onChange={(event) => {
                          combobox.updateSelectedOptionIndex();
                          setSearch(event.currentTarget.value);
                        }}
                        onKeyDown={(event) => {
                          if (
                            event.key === 'Backspace' &&
                            search.length === 0 &&
                            selectedCompanies.length > 0
                          ) {
                            event.preventDefault();
                            handleValueRemove(selectedCompanies[selectedCompanies.length - 1]);
                          }
                        }}
                      />
                    </Combobox.EventsTarget>
                  </Pill.Group>
                </PillsInput>
              </Combobox.DropdownTarget>

              <Combobox.Dropdown>
                <Combobox.Options>
                  {options.length > 0 ? options : <Combobox.Empty>Nothing found...</Combobox.Empty>}
                </Combobox.Options>
              </Combobox.Dropdown>
            </Combobox>

            {/* Category Filter */}
            <Select
              size="lg"
              radius="md"
              placeholder="Filter by type"
              data={CATEGORIES}
              value={selectedCategory}
              onChange={setSelectedCategory}
              clearable
              rightSection={<IconCaretDownFilled size={20} />}
            />

            {/* Platform Filter */}
            <Select
              size="lg"
              radius="md"
              placeholder="Filter by platform"
              data={PLATFORMS}
              value={selectedPlatform}
              onChange={setSelectedPlatform}
              clearable
              rightSection={<IconCaretDownFilled size={20} />}
            />
          </Group>

          {/* Sort */}
          <Select
            size="lg"
            radius="md"
            placeholder="Sort by"
            data={['Recent', 'Featured']}
            value={sortOrder}
            onChange={setSortOrder}
            rightSection={<IconCaretDownFilled size={20} />}
          />
        </Group>

        {/* Grid Section */}
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
