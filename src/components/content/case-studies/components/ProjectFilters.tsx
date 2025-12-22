'use client';

import {
  IconAdjustmentsHorizontal,
  IconCaretDownFilled,
  IconCpu,
  IconDeviceDesktop,
  IconDeviceMobile,
  IconX,
} from '@tabler/icons-react';
import { ActionIcon, Button, Drawer, Group, MultiSelect, Select, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ClientFilter, { ClientFilterOption } from './ClientFilter';
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

  // Helper to check if any filter is active
  const hasActiveFilters =
    selectedCompanies.length > 0 || selectedCategories.length > 0 || selectedPlatform !== null;

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
          <ClientFilter
            clients={clients}
            selectedCompanies={selectedCompanies}
            setSelectedCompanies={setSelectedCompanies}
          />

          <MultiSelect
            size="lg"
            radius="md"
            placeholder="Filter by type"
            data={categories}
            value={selectedCategories}
            onChange={setSelectedCategories}
            clearable
            searchable
            hidePickedOptions
            rightSection={<IconCaretDownFilled size={20} />}
          />

          <Select
            size="lg"
            radius="md"
            placeholder="Filter by platform"
            data={platforms}
            value={selectedPlatform}
            onChange={setSelectedPlatform}
            clearable
            rightSection={<IconCaretDownFilled size={20} />}
          />

          <Select
            size="lg"
            radius="md"
            placeholder="Sort by"
            data={['Recent', 'Featured']}
            value={sortOrder}
            onChange={setSortOrder}
            rightSection={<IconCaretDownFilled size={20} />}
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
        top={24}
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

        <MultiSelect
          visibleFrom="md"
          size="lg"
          radius="md"
          placeholder="More filters"
          data={categories}
          value={selectedCategories}
          onChange={setSelectedCategories}
          clearable
          searchable
          hidePickedOptions
          rightSection={<IconCaretDownFilled size={20} />}
          w={{ base: '100%' }}
          style={{ minWidth: '200px', flexGrow: 1 }}
        />
      </Group>
    </>
  );
}
