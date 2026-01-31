'use client';

import { useMemo, useState } from 'react';
import { IconArrowRight, IconSparkles2 } from '@tabler/icons-react';
import { ActionIcon, Autocomplete, Box, HoverCard, Stack, Text, Tooltip } from '@mantine/core';
import { useSearch } from '../../../../context/SearchContext';
import { SEARCH_SUGGESTIONS_GROUPED, shuffleArray } from './constants';

export default function HomeSearchInput() {
  const { query, setQuery, performSearch, loading } = useSearch();
  const [focused, setFocused] = useState(false);

  const randomizedSuggestions = useMemo(() => {
    const groupsWithShuffledItems = SEARCH_SUGGESTIONS_GROUPED.map((group) => ({
      ...group,
      items: shuffleArray(group.items),
    }));
    return shuffleArray(groupsWithShuffledItems);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  };

  const autocompleteStyles = {
    option: {
      fontSize: 'var(--mantine-font-size-md)',
    },
    groupLabel: {
      fontSize: 'var(--mantine-font-size-md)',
    },
  };

  return (
    <Stack align="center" mt="lg" mb={{ base: 'xs', lg: 'lg' }}>
      <Box pos="relative" w="100%">
        <Box
          pos="absolute"
          inset={0}
          style={{
            zIndex: 0,
            borderRadius: 'var(--mantine-radius-xl)',
            backgroundImage:
              'linear-gradient(135deg, var(--mantine-color-orange-7) 0%, var(--mantine-color-orange-4) 100%)',
            transition: 'opacity 0.4s ease, filter 0.4s ease',
            opacity: focused ? 0.6 : 0,
            filter: focused ? 'blur(2px)' : 'blur(0px)',
          }}
        />

        <Box
          style={{
            position: 'relative',
            zIndex: 1,
            borderRadius: 'var(--mantine-radius-xl)',
            padding: '1px',
            transition: 'background 0.3s ease',
            background: focused
              ? 'linear-gradient(135deg, var(--mantine-color-orange-7) 0%, var(--mantine-color-orange-4) 100%)'
              : 'var(--mantine-color-default-border)',
          }}
        >
          <Stack gap={0}>
            <Autocomplete
              maxLength={200}
              placeholder="Ask a question..."
              value={query}
              onChange={setQuery}
              onKeyDown={handleKeyDown}
              onOptionSubmit={(val) => {
                performSearch(val);
              }}
              data={randomizedSuggestions}
              leftSection={
                <HoverCard width={230} shadow="md" position="bottom-start">
                  <HoverCard.Target>
                    <IconSparkles2 size={28} aria-label="AI search" color="orange" />
                  </HoverCard.Target>
                  <HoverCard.Dropdown>
                    <Text size="sm">Search my experience, profile, and design work with AI.</Text>
                  </HoverCard.Dropdown>
                </HoverCard>
              }
              rightSection={
                <Tooltip label="Search" position="left">
                  <ActionIcon
                    variant="light"
                    size="xl"
                    radius="xl"
                    aria-label="Search"
                    onClick={() => performSearch()}
                    loading={loading}
                  >
                    <IconArrowRight size={24} />
                  </ActionIcon>
                </Tooltip>
              }
              size="xl"
              radius="xl"
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              styles={{
                ...autocompleteStyles,
                root: { width: '100%' },
                input: {
                  border: 'none',
                  backgroundColor: 'var(--mantine-color-body)',
                  borderRadius: 'calc(var(--mantine-radius-xl) - 2px)',
                },
              }}
            />
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
}
