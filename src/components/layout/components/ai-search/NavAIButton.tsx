'use client';

import { IconSparkles2 } from '@tabler/icons-react';
import { Button } from '@mantine/core';
import { useSearch } from '../../../../context/SearchContext';

export default function NavAIButton() {
  const { openSpotlight } = useSearch();

  return (
    <Button size="md" rightSection={<IconSparkles2 size={20} />} onClick={openSpotlight}>
      AI insights
    </Button>
  );
}
