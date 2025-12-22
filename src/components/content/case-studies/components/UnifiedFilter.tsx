'use client';

import { useState } from 'react';
import { IconCaretDownFilled, IconCategory2, IconCheck } from '@tabler/icons-react';
import { Avatar, Combobox, Group, Pill, PillsInput, useCombobox } from '@mantine/core';

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

  // Helper to parse the composite value "type:value"
  const handleValueSelect = (val: string) => {
    setSearch('');
    const [type, value] = val.split(':');

    if (type === 'company') {
      setSelectedCompanies((current) =>
        current.includes(value) ? current.filter((v) => v !== value) : [...current, value]
      );
    } else if (type === 'category') {
      setSelectedCategories((current) =>
        current.includes(value) ? current.filter((v) => v !== value) : [...current, value]
      );
    }
  };

  const handleRemoveCompany = (val: string) =>
    setSelectedCompanies((current) => current.filter((v) => v !== val));

  const handleRemoveCategory = (val: string) =>
    setSelectedCategories((current) => current.filter((v) => v !== val));

  // --- Render Options ---

  const companyOptions = clients
    .filter((item) => item.name.toLowerCase().includes(search.trim().toLowerCase()))
    .map((item) => (
      <Combobox.Option
        value={`company:${item.name}`}
        key={`company:${item.name}`}
        active={selectedCompanies.includes(item.name)}
      >
        <Group gap="sm">
          <Avatar src={item.logoSrc} size="xs" radius="sm" />
          <span>{item.name}</span>
          {selectedCompanies.includes(item.name) && (
            <IconCheck size={12} style={{ marginLeft: 'auto' }} />
          )}
        </Group>
      </Combobox.Option>
    ));

  const categoryOptions = categories
    .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
    .map((item) => (
      <Combobox.Option
        value={`category:${item}`}
        key={`category:${item}`}
        active={selectedCategories.includes(item)}
      >
        <Group gap="sm">
          <IconCategory2 size={16} style={{ opacity: 0.5 }} />
          <span>{item}</span>
          {selectedCategories.includes(item) && (
            <IconCheck size={12} style={{ marginLeft: 'auto' }} />
          )}
        </Group>
      </Combobox.Option>
    ));

  // --- Render Pills ---

  const companyPills = selectedCompanies.map((name) => {
    return (
      <Pill key={`company-${name}`} withRemoveButton onRemove={() => handleRemoveCompany(name)}>
        <Group gap="xs" align="center">
          {name}
        </Group>
      </Pill>
    );
  });

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
          rightSection={<IconCaretDownFilled size={20} />}
          rightSectionPointerEvents="none"
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
                    // Remove last added item (check categories first as they are rendered last)
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
                <Combobox.Group label="Categories">{categoryOptions}</Combobox.Group>
              )}

              {companyOptions.length > 0 && (
                <Combobox.Group label="Clients">{companyOptions}</Combobox.Group>
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
