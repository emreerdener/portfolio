'use client';

import { IconSparkles2 } from '@tabler/icons-react';
import { Button } from '@mantine/core';
import { useSearch } from '../../../../context/SearchContext';

export default function NavAIButton() {
  const { openSpotlight } = useSearch();

  return (
    <Button
      variant="gradient"
      gradient={{
        deg: 135,
        from: 'var(--mantine-color-orange-6)',
        to: 'var(--mantine-color-orange-8)',
      }}
      size="sm"
      leftSection={<IconSparkles2 size={24} />}
      onClick={openSpotlight}
    >
      Ask AI
    </Button>
  );
}
