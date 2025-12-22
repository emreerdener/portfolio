'use client';

import {
  IconAdjustmentsHorizontal,
  IconCaretDownFilled,
  IconCpu,
  IconDeviceDesktop,
  IconDeviceMobile,
  IconX,
} from '@tabler/icons-react';
import { Button, Drawer, Group, Select, Stack } from '@mantine/core';
import { useDisclosure, useViewportSize } from '@mantine/hooks';
import ClientFilter, { ClientFilterOption } from './ClientFilter';

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

  selectedCategory: string | null;
  setSelectedCategory: (val: string | null) => void;

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
  selectedCategory,
  setSelectedCategory,
  selectedPlatform,
  setSelectedPlatform,
  sortOrder,
  setSortOrder,
  resetFilters,
}: ProjectFiltersProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useViewportSize().width < 768;

  // Helper to check if any filter is active
  const hasActiveFilters =
    selectedCompanies.length > 0 || selectedCategory !== null || selectedPlatform !== null;

  return (
    <>
      {/* --- Mobile Filter Drawer --- */}
      <Drawer
        opened={opened}
        onClose={close}
        title="Filters"
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

          <Select
            size="lg"
            radius="md"
            placeholder="Filter by type"
            data={categories}
            value={selectedCategory}
            onChange={setSelectedCategory}
            clearable
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
      <Button
        hiddenFrom="sm"
        onClick={open}
        size="xl"
        h={66}
        radius="lg"
        variant="default"
        leftSection={<IconAdjustmentsHorizontal size={isMobile ? 26 : 20} />}
        pl={isMobile ? 14 : 'xs'}
        pr={isMobile ? 6 : 'xs'}
        pos="fixed"
        top={20}
        right={20}
        style={{
          zIndex: 100,
          boxShadow: 'var(--mantine-shadow-xs)',
        }}
      >
        {isMobile ? null : 'Filters'}
      </Button>

      {/* --- Main Bar --- */}
      <Group justify="space-between" align="flex-start" w="100%" visibleFrom="sm">
        <Group align="flex-start" w={{ base: 'auto', sm: 'auto' }}>
          {/* Desktop: Visible Filters */}
          <Group align="flex-start">
            <ClientFilter
              clients={clients}
              selectedCompanies={selectedCompanies}
              setSelectedCompanies={setSelectedCompanies}
            />

            <Select
              size="lg"
              radius="md"
              placeholder="Filter by type"
              data={categories}
              value={selectedCategory}
              onChange={setSelectedCategory}
              clearable
              rightSection={<IconCaretDownFilled size={20} />}
              w={{ base: '100%', sm: 'auto' }}
            />

            {/* Desktop Platform Buttons */}
            <Group gap="xs">
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
          </Group>
        </Group>

        {/* Sort (Visible on Desktop only) */}
        <Select
          visibleFrom="sm"
          size="lg"
          radius="md"
          placeholder="Sort by"
          data={['Recent', 'Featured']}
          value={sortOrder}
          onChange={setSortOrder}
          rightSection={<IconCaretDownFilled size={20} />}
          w={{ base: 'auto', sm: 'auto' }}
          style={{ flexGrow: 0, minWidth: '130px' }}
        />
      </Group>
    </>
  );
}
