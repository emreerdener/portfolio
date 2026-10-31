import { IconX } from '@tabler/icons-react';
import { ActionIcon, Group } from '@mantine/core';

export default function MobileNavClose({ onClose }: { onClose: () => void }) {
  return (
    <Group hiddenFrom="sm" h={44} mb={12}>
      <ActionIcon
        pos="absolute"
        top={8}
        right={8}
        onClick={onClose}
        size={44}
        variant="subtle"
        color="gray"
        aria-label="Close navigation"
      >
        <IconX size={24} />
      </ActionIcon>
    </Group>
  );
}
