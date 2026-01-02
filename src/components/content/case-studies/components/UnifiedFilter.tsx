'use client';

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

  // Removed search state to restrict typing
  const hasActiveFilters = selectedCompanies.length > 0 || selectedCategories.length > 0;

  const handleClear = () => {
    setSelectedCompanies([]);
    setSelectedCategories([]);
  };

  const handleValueSelect = (val: string) => {
    const [type, value] = val.split(':');

    if (type === 'company') {
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

  // Removed search filtering logic
  const companyOptions = clients
    .filter((item) => !selectedCompanies.includes(item.name))
    .map((item) => (
      <Combobox.Option value={`company:${item.name}`} key={`company:${item.name}`}>
        <Group gap="sm" wrap="nowrap">
          <Avatar src={item.logoSrc} size="sm" radius={4} />
          <Text size="md" lineClamp={1}>
            {item.name}
          </Text>
        </Group>
      </Combobox.Option>
    ));

  const categoryOptions = categories
    .filter((item) => !selectedCategories.includes(item))
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
                value="" /* Force empty value */
                readOnly /* Prevent typing and keyboard popup */
                pointer /* Show pointer cursor */
                placeholder={
                  companyPills.length + categoryPills.length === 0
                    ? 'Filter by category or client...'
                    : ''
                }
                onKeyDown={(event) => {
                  if (event.key === 'Backspace') {
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
