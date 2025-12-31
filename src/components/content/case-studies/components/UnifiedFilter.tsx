'use client';

import { useState } from 'react';
import { IconCaretDownFilled, IconTag, IconX } from '@tabler/icons-react';
import {
  Avatar,
  Combobox,
  Group,
  Pill,
  PillsInput,
  SimpleGrid,
  Text,
  useCombobox,
} from '@mantine/core';

export type ClientFilterOption = {
  name: string;
  logoSrc?: string;
};

interface UnifiedFilterProps {
  clients: ClientFilterOption[];
  categories: string[];
  selectedCompanies: string[];
  setSelectedCompanies: React.Dispatch<React.SetStateAction<string[]>>;
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function UnifiedFilter({
  clients,
  categories,
  selectedCompanies,
  setSelectedCompanies,
  selectedCategories,
  setSelectedCategories,
}: UnifiedFilterProps) {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });

  const [search, setSearch] = useState('');

  const hasActiveFilters = selectedCompanies.length > 0 || selectedCategories.length > 0;

  const handleClear = () => {
    setSelectedCompanies([]);
    setSelectedCategories([]);
    setSearch('');
  };

  const handleValueSelect = (val: string) => {
    setSearch('');
    const [type, value] = val.split(':');

    if (type === 'company') {
      // We only need to add, since selection hides it from the list
      setSelectedCompanies((current) => [...current, value]);
    } else if (type === 'category') {
      setSelectedCategories((current) => [...current, value]);
    }
  };

  const handleRemoveCompany = (val: string) =>
    setSelectedCompanies((current) => current.filter((v) => v !== val));

  const handleRemoveCategory = (val: string) =>
    setSelectedCategories((current) => current.filter((v) => v !== val));

  // --- Render Options ---

  const companyOptions = clients
    .filter(
      (item) =>
        item.name.toLowerCase().includes(search.trim().toLowerCase()) &&
        !selectedCompanies.includes(item.name) // <--- Hide selected
    )
    .map((item) => (
      <Combobox.Option value={`company:${item.name}`} key={`company:${item.name}`}>
        <Group gap="sm" wrap="nowrap">
          <Avatar src={item.logoSrc} size="sm" radius="sm" />
          <Text size="md" lineClamp={1}>
            {item.name}
          </Text>
        </Group>
      </Combobox.Option>
    ));

  const categoryOptions = categories
    .filter(
      (item) =>
        item.toLowerCase().includes(search.trim().toLowerCase()) &&
        !selectedCategories.includes(item) // <--- Hide selected
    )
    .map((item) => (
      <Combobox.Option value={`category:${item}`} key={`category:${item}`}>
        <Group gap="sm">
          <IconTag size={20} style={{ opacity: 0.5 }} />
          <Text size="md" lineClamp={1}>
            {item}
          </Text>
        </Group>
      </Combobox.Option>
    ));

  // --- Render Pills ---

  const companyPills = selectedCompanies.map((name) => (
    <Pill key={`company-${name}`} withRemoveButton onRemove={() => handleRemoveCompany(name)}>
      <Group gap="xs" align="center">
        {name}
      </Group>
    </Pill>
  ));

  const categoryPills = selectedCategories.map((name) => (
    <Pill key={`cat-${name}`} withRemoveButton onRemove={() => handleRemoveCategory(name)}>
      <Group gap="xs" align="center">
        {name}
      </Group>
    </Pill>
  ));

  const hasOptions = companyOptions.length > 0 || categoryOptions.length > 0;

  return (
    <Combobox store={combobox} onOptionSubmit={handleValueSelect}>
      <Combobox.DropdownTarget>
        <PillsInput
          onClick={() => combobox.openDropdown()}
          radius="md"
          size="lg"
          rightSection={
            hasActiveFilters ? (
              <IconX
                size={24}
                style={{ cursor: 'pointer' }}
                onClick={(event) => {
                  event.stopPropagation();
                  handleClear();
                }}
              />
            ) : (
              <IconCaretDownFilled size={20} />
            )
          }
          rightSectionPointerEvents={hasActiveFilters ? 'all' : 'none'}
          pointer
          w={{ base: '100%' }}
        >
          <Pill.Group>
            {companyPills}
            {categoryPills}
            <Combobox.EventsTarget>
              <PillsInput.Field
                onFocus={() => combobox.openDropdown()}
                onBlur={() => combobox.closeDropdown()}
                value={search}
                placeholder={
                  companyPills.length + categoryPills.length === 0
                    ? 'Filter by client or category...'
                    : ''
                }
                onChange={(event) => {
                  combobox.updateSelectedOptionIndex();
                  setSearch(event.currentTarget.value);
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Backspace' && search.length === 0) {
                    event.preventDefault();
                    if (selectedCategories.length > 0) {
                      handleRemoveCategory(selectedCategories[selectedCategories.length - 1]);
                    } else if (selectedCompanies.length > 0) {
                      handleRemoveCompany(selectedCompanies[selectedCompanies.length - 1]);
                    }
                  }
                }}
              />
            </Combobox.EventsTarget>
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown>
        <Combobox.Options>
          {hasOptions ? (
            <>
              {categoryOptions.length > 0 && (
                <Combobox.Group label="Categories">
                  <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={4} verticalSpacing={4}>
                    {categoryOptions}
                  </SimpleGrid>
                </Combobox.Group>
              )}

              {companyOptions.length > 0 && (
                <Combobox.Group label="Clients">
                  <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={4} verticalSpacing={4}>
                    {companyOptions}
                  </SimpleGrid>
                </Combobox.Group>
              )}
            </>
          ) : (
            <Combobox.Empty>Nothing found</Combobox.Empty>
          )}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
