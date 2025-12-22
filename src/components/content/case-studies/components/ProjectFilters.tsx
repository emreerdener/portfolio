'use client';

import { useState } from 'react';
import { IconCaretDownFilled } from '@tabler/icons-react';
import {
  Avatar,
  CheckIcon,
  Combobox,
  Group,
  Pill,
  PillsInput,
  Select,
  useCombobox,
} from '@mantine/core';

export type ClientFilterOption = {
  name: string;
  logoSrc?: string;
};

interface ProjectFiltersProps {
  // Data
  clients: ClientFilterOption[];
  categories: string[];
  platforms: string[];

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
}: ProjectFiltersProps) {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });

  const [search, setSearch] = useState('');

  const handleValueSelect = (val: string) => {
    setSearch('');
    setSelectedCompanies((current) =>
      current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
    );
  };

  const handleValueRemove = (val: string) =>
    setSelectedCompanies((current) => current.filter((v) => v !== val));

  const options = clients
    .filter((item) => item.name.toLowerCase().includes(search.trim().toLowerCase()))
    .map((item) => (
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

  const values = selectedCompanies.map((name) => (
    <Pill key={name} withRemoveButton onRemove={() => handleValueRemove(name)}>
      <Group gap="xs" align="center">
        {name}
      </Group>
    </Pill>
  ));

  return (
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
          data={categories}
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
          data={platforms}
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
  );
}
