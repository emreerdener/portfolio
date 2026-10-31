'use client';

import { Button } from '@mantine/core';
import { useSearch } from '../../../../context/SearchContext';

export default function NavAIButton({
  onOpen,
  large = false,
}: {
  onOpen?: () => void;
  large?: boolean;
}) {
  const { openSpotlight } = useSearch();

  return (
    <Button
      size={large ? 'lg' : 'md'}
      variant="default"
      fullWidth
      onClick={() => {
        onOpen?.();
        openSpotlight();
      }}
    >
      Ask about my work
    </Button>
  );
}
