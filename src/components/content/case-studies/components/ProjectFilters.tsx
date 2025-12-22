'use client';

import {
  IconAdjustmentsHorizontal,
  IconCpu,
  IconDeviceDesktop,
  IconDeviceMobile,
  IconX,
} from '@tabler/icons-react';
import { ActionIcon, Box, Button, Drawer, Group, Select, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import UnifiedFilter, { ClientFilterOption } from './UnifiedFilter';
import classes from './case-studies.module.css';

// Map platform strings to specific icons
const PLATFORM_ICONS: Record<string, React.ReactNode> = {
  Web: <IconDeviceDesktop size={18} />,
  Mobile: <IconDeviceMobile size={18} />,
  IoT: <IconCpu size={18} />,
};

interface ProjectFiltersProps {
  // Data
  clients: ClientFilterOption[];
  categories: string[];
  platforms: string[];
  resetFilters: () => void;

  // State
  selectedCompanies: string[];
  setSelectedCompanies: React.Dispatch<React.SetStateAction<string[]>>;

  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;

  selectedPlatform: string | null;
  setSelectedPlatform: (val: string | null) => void;

  sortOrder: string | null;
  setSortOrder: (val: string | null) => void;
}

export default function ProjectFilters({
  clients,
  categories,
  platforms,
  selectedCompanies,
  setSelectedCompanies,
  selectedCategories,
  setSelectedCategories,
  selectedPlatform,
  setSelectedPlatform,
  sortOrder,
  setSortOrder,
  resetFilters,
}: ProjectFiltersProps) {
  const [opened, { open, close }] = useDisclosure(false);

  const hasActiveFilters =
    selectedCompanies.length > 0 || selectedCategories.length > 0 || selectedPlatform !== null;

  // Common unified filter instance to reuse in Drawer and Desktop
  const filterInput = (
    <UnifiedFilter
      clients={clients}
      categories={categories}
      selectedCompanies={selectedCompanies}
      setSelectedCompanies={setSelectedCompanies}
      selectedCategories={selectedCategories}
      setSelectedCategories={setSelectedCategories}
    />
  );

  return (
    <>
      {/* --- Mobile Filter Drawer --- */}
      <Drawer
        opened={opened}
        onClose={close}
        title="Case study filters"
        padding="lg"
        size="lg"
        position="bottom"
        radius="lg"
      >
        <Stack gap="md">
          {/* Replaced separate inputs with unified filter */}
          {filterInput}

          <Select
            size="lg"
            radius="md"
            placeholder="Filter by platform"
            data={platforms}
            value={selectedPlatform}
            onChange={setSelectedPlatform}
            clearable
          />

          <Select
            size="lg"
            radius="md"
            placeholder="Sort by"
            data={['Recent', 'Featured']}
            value={sortOrder}
            onChange={setSortOrder}
          />

          <Button size="lg" fullWidth onClick={close} mt="md">
            Apply filters
          </Button>

          {hasActiveFilters && (
            <Button variant="default" onClick={resetFilters} size="lg">
              Clear all filters
            </Button>
          )}
        </Stack>
      </Drawer>

      {/* Mobile: Filter Button Trigger */}
      <ActionIcon
        hiddenFrom="sm"
        onClick={open}
        size={56}
        radius="lg"
        variant="default"
        pos="fixed"
        top={20}
        right={20}
        style={{
          zIndex: 100,
          boxShadow: 'var(--mantine-shadow-xs)',
        }}
      >
        <IconAdjustmentsHorizontal size={26} />
      </ActionIcon>

      {/* --- Main Bar --- */}
      <Group
        justify="space-between"
        align="flex-start"
        w="100%"
        visibleFrom="sm"
        wrap="nowrap"
        className={classes.filtersBar}
      >
        {/* Desktop Platform Buttons */}
        <Group wrap="nowrap">
          {platforms.map((platform) => {
            const isActive = selectedPlatform === platform;
            return (
              <Button
                key={platform}
                size="lg"
                radius="md"
                variant={isActive ? 'filled' : 'default'}
                leftSection={PLATFORM_ICONS[platform]}
                rightSection={isActive ? <IconX size={24} /> : undefined}
                onClick={() => setSelectedPlatform(isActive ? null : platform)}
              >
                {platform}
              </Button>
            );
          })}
        </Group>

        <ActionIcon hiddenFrom="md" onClick={open} size={50} radius="md" variant="default">
          <IconAdjustmentsHorizontal size={26} />
        </ActionIcon>

        {/* Unified Filter on Desktop (Takes up remaining space) */}
        <Box visibleFrom="md" style={{ flexGrow: 1, minWidth: '250px' }}>
          {filterInput}
        </Box>
      </Group>
    </>
  );
}
