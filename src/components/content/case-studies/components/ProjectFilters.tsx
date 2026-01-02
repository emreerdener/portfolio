'use client';

import {
  IconAdjustmentsHorizontal,
  IconCpu,
  IconDeviceDesktop,
  IconDeviceMobile,
  IconTag,
  IconX,
} from '@tabler/icons-react';
import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Checkbox,
  Divider,
  Drawer,
  Group,
  Indicator,
  ScrollArea,
  Stack,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import UnifiedFilter, { ClientFilterOption } from './UnifiedFilter';
import classes from './case-studies.module.css';

// Map platform strings to specific icons
const PLATFORM_ICONS: Record<string, React.ReactNode> = {
  Web: <IconDeviceDesktop size={20} />,
  Mobile: <IconDeviceMobile size={20} />,
  IoT: <IconCpu size={20} />,
};

interface ProjectFiltersProps {
  // Data
  clients: ClientFilterOption[];
  categories: string[];
  platforms: string[];
  resetFilters: () => void;
  resultCount: number;

  // State
  selectedCompanies: string[];
  setSelectedCompanies: React.Dispatch<React.SetStateAction<string[]>>;

  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;

  selectedPlatform: string | null;
  setSelectedPlatform: (val: string | null) => void;
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
  resetFilters,
  resultCount,
}: ProjectFiltersProps) {
  const [opened, { open, close }] = useDisclosure(false);

  const hasActiveFilters =
    selectedCompanies.length > 0 || selectedCategories.length > 0 || selectedPlatform !== null;

  // Common unified filter instance for Desktop
  const desktopFilterInput = (
    <UnifiedFilter
      clients={clients}
      categories={categories}
      selectedCompanies={selectedCompanies}
      setSelectedCompanies={setSelectedCompanies}
      selectedCategories={selectedCategories}
      setSelectedCategories={setSelectedCategories}
    />
  );

  // Helper component for mobile list rows
  const MobileFilterRow = ({
    label,
    icon,
    checked,
    onChange,
  }: {
    label: string;
    icon?: React.ReactNode;
    checked: boolean;
    onChange: () => void;
  }) => (
    <UnstyledButton onClick={onChange} py="sm" style={{ width: '100%' }}>
      <Group justify="space-between" wrap="nowrap" w="100%">
        <Group gap="md" wrap="nowrap">
          {icon && (
            <Box
              style={{
                width: 24,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: 0.7,
              }}
            >
              {icon}
            </Box>
          )}
          <Text size="md" fw={500}>
            {label}
          </Text>
        </Group>
        <Checkbox
          checked={checked}
          onChange={() => {}} // Event handled by parent button
          tabIndex={-1}
          size="md"
          aria-hidden
          style={{ cursor: 'pointer' }}
        />
      </Group>
    </UnstyledButton>
  );

  return (
    <>
      {/* --- Mobile Filter Drawer --- */}
      <Drawer
        opened={opened}
        onClose={close}
        title="Filter case studies"
        padding="lg"
        size="xl"
        position="bottom"
        radius="lg"
        styles={{
          content: {
            borderRadius: 'var(--mantine-radius-lg) var(--mantine-radius-lg) 0 0',
            display: 'flex',
            flexDirection: 'column',
          },
          body: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden', // Ensure ScrollArea handles the scroll
            paddingBottom: 0,
          },
        }}
      >
        <Stack gap={0} h="100%" style={{ overflow: 'hidden' }}>
          {/* Scrollable List of Filters */}
          <ScrollArea flex={1} type="scroll" scrollbars="y" offsetScrollbars>
            <Stack gap="xl" pb="xl">
              {/* Platform Section */}
              <Box>
                <Text size="xs" fw={700} c="dimmed" tt="uppercase" mb="xs">
                  Platform
                </Text>
                <Stack gap={0}>
                  {platforms.map((platform) => {
                    const isSelected = selectedPlatform === platform;
                    return (
                      <MobileFilterRow
                        key={platform}
                        label={platform}
                        icon={PLATFORM_ICONS[platform]}
                        checked={isSelected}
                        onChange={() => setSelectedPlatform(isSelected ? null : platform)}
                      />
                    );
                  })}
                </Stack>
              </Box>

              <Divider />

              {/* Categories Section */}
              <Box>
                <Text size="xs" fw={700} c="dimmed" tt="uppercase" mb="xs">
                  Categories
                </Text>
                <Stack gap={0}>
                  {categories.map((category) => {
                    const isSelected = selectedCategories.includes(category);
                    return (
                      <MobileFilterRow
                        key={category}
                        label={category}
                        icon={<IconTag size={20} />}
                        checked={isSelected}
                        onChange={() => {
                          if (isSelected) {
                            setSelectedCategories((prev) => prev.filter((c) => c !== category));
                          } else {
                            setSelectedCategories((prev) => [...prev, category]);
                          }
                        }}
                      />
                    );
                  })}
                </Stack>
              </Box>

              <Divider />

              {/* Clients Section */}
              <Box>
                <Text size="xs" fw={700} c="dimmed" tt="uppercase" mb="xs">
                  Clients
                </Text>
                <Stack gap={0}>
                  {clients.map((client) => {
                    const isSelected = selectedCompanies.includes(client.name);
                    return (
                      <MobileFilterRow
                        key={client.name}
                        label={client.name}
                        icon={<Avatar src={client.logoSrc} size={24} radius={4} />}
                        checked={isSelected}
                        onChange={() => {
                          if (isSelected) {
                            setSelectedCompanies((prev) => prev.filter((c) => c !== client.name));
                          } else {
                            setSelectedCompanies((prev) => [...prev, client.name]);
                          }
                        }}
                      />
                    );
                  })}
                </Stack>
              </Box>
            </Stack>
          </ScrollArea>

          {/* Fixed Footer Buttons */}
          <Box
            pt="md"
            pb="md"
            style={{
              borderTop: '1px solid var(--mantine-color-default-border)',
              backgroundColor: 'var(--mantine-color-body)',
            }}
          >
            <Button
              size="lg"
              fullWidth
              onClick={close}
              mb={hasActiveFilters ? 'sm' : 0}
              disabled={resultCount === 0}
            >
              {resultCount === 0
                ? 'No case studies'
                : `Show ${resultCount} case stud${resultCount === 1 ? 'y' : 'ies'}`}
            </Button>

            {hasActiveFilters && (
              <Button variant="transparent" c="dimmed" size="md" fullWidth onClick={resetFilters}>
                Clear all
              </Button>
            )}
          </Box>
        </Stack>
      </Drawer>

      {/* Mobile: Filter Button Trigger */}
      <Box
        hiddenFrom="sm"
        pos="fixed"
        top={20}
        right={20}
        style={{
          zIndex: 100,
        }}
      >
        <Indicator
          disabled={!hasActiveFilters}
          position="top-end"
          offset={4}
          withBorder
          color="orange"
          size={16}
        >
          <ActionIcon
            onClick={open}
            size={56}
            radius="md"
            variant="default"
            style={{
              boxShadow: 'var(--mantine-shadow-xs)',
            }}
          >
            <IconAdjustmentsHorizontal size={28} />
          </ActionIcon>
        </Indicator>
      </Box>

      {/* --- Main Bar (Desktop) --- */}
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

        {/* Tablet/Smaller Desktop Trigger */}
        <Indicator
          hiddenFrom="md"
          disabled={!hasActiveFilters}
          position="top-end"
          offset={4}
          size={12}
        >
          <ActionIcon onClick={open} size={50} radius="md" variant="default">
            <IconAdjustmentsHorizontal size={26} />
          </ActionIcon>
        </Indicator>

        {/* Unified Filter on Desktop (Takes up remaining space) */}
        <Box visibleFrom="md" style={{ flexGrow: 1, minWidth: '250px' }}>
          {desktopFilterInput}
        </Box>
      </Group>
    </>
  );
}
