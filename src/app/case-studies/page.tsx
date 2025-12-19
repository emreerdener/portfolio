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

// 1. Centralized Project Data
const PROJECTS = [
  {
    title: 'Merchant Referral Program',
    company: 'Shopify',
    imageSrc: '/images/covers/shopify-m2m.png',
    logoSrc: '/images/apps/shopify.svg',
    href: '/case-studies/merchant-referrals',
  },
  {
    title: 'Inventory Management System',
    company: 'Eureka Software',
    imageSrc: '/images/covers/waxwing.png',
    logoSrc: '/images/apps/eureka.svg',
    href: '/',
  },
  {
    title: 'Booking Platform Redesign',
    company: 'The Squire Tarbox Inn',
    imageSrc: '/images/covers/tarbox.jpg',
    logoSrc: '/images/apps/tarbox.svg',
    href: '/',
  },
  {
    title: 'Admin Checkout 2.0',
    company: 'Shopify',
    imageSrc: '/images/covers/shopify-admin.png',
    logoSrc: '/images/apps/shopify.svg',
    href: '/',
  },
  {
    title: 'Audi Dyno Display',
    company: 'BTRES',
    imageSrc: '/images/covers/btres.png',
    logoSrc: '/images/apps/btres.svg',
    href: '/',
  },
  {
    title: 'Simplify Travel Expenses',
    company: 'Tripway',
    imageSrc: '/images/covers/tripway.png',
    logoSrc: '/images/apps/tripway.svg',
    href: '/',
  },
];

// Extract unique companies with their logos
const CLIENTS = Array.from(new Set(PROJECTS.map((p) => p.company)))
  .sort()
  .map((company) => {
    // Find the first project match to grab the correct logoSrc
    const project = PROJECTS.find((p) => p.company === company);
    return {
      name: company,
      logoSrc: project?.logoSrc,
    };
  });

export default function CaseStudiesPage() {
  // --- Combobox Logic ---
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });

  const [search, setSearch] = useState('');
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);

  const handleValueSelect = (val: string) => {
    setSearch('');
    setSelectedCompanies((current) =>
      current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
    );
  };

  const handleValueRemove = (val: string) =>
    setSelectedCompanies((current) => current.filter((v) => v !== val));

  // Filter available options based on search input
  const options = CLIENTS.filter((item) =>
    item.name.toLowerCase().includes(search.trim().toLowerCase())
  ).map((item) => (
    <Combobox.Option
      value={item.name}
      key={item.name}
      active={selectedCompanies.includes(item.name)}
    >
      <Group gap="sm">
        {/* Dropdown Logo */}
        <Avatar src={item.logoSrc} size="sm" radius="md" />
        <span>{item.name}</span>
        {selectedCompanies.includes(item.name) ? (
          <CheckIcon size={12} style={{ marginLeft: 'auto' }} />
        ) : null}
      </Group>
    </Combobox.Option>
  ));

  // Render selected pills
  const values = selectedCompanies.map((name) => {
    return (
      <Pill key={name} withRemoveButton onRemove={() => handleValueRemove(name)}>
        <Group gap="xs" align="center">
          {name}
        </Group>
      </Pill>
    );
  });

  // --- Filtering Projects ---
  const filteredProjects =
    selectedCompanies.length > 0
      ? PROJECTS.filter((p) => selectedCompanies.includes(p.company))
      : PROJECTS;

  return (
    <>
      <Stack gap="xl">
        {/* Filter Section */}
        <Group justify="space-between">
          <Group>
            <Combobox store={combobox} onOptionSubmit={handleValueSelect}>
              <Combobox.DropdownTarget>
                <PillsInput
                  onClick={() => combobox.openDropdown()}
                  radius="xl"
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

            <Select
              size="lg"
              radius="xl"
              placeholder="Filter by type"
              data={['Product', 'Web', 'Marketing']}
              rightSection={<IconCaretDownFilled size={20} />}
            />
          </Group>

          <Select
            size="lg"
            radius="xl"
            placeholder="Sort by"
            data={['Recent', 'Featured']}
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
                imageSrc={project.imageSrc}
                logoSrc={project.logoSrc}
                href={project.href}
              />
            </Grid.Col>
          ))}
        </Grid>
      </Stack>

      <Space h="xl" />
    </>
  );
}
