'use client';

import { IconMessageChatbotFilled } from '@tabler/icons-react';
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
      rightSection={<IconMessageChatbotFilled size={large ? 24 : 20} />}
      onClick={() => {
        onOpen?.();
        openSpotlight();
      }}
    >
      Ask about me
    </Button>
  );
}
