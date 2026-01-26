'use client';

import { IconMenu2 } from '@tabler/icons-react';
import { AppShell, Group, Stack, Text, Title, UnstyledButton } from '@mantine/core';
import classes from './layout.module.css';

interface MobileHeaderProps {
  opened: boolean;
  toggle: () => void;
}

export default function MobileHeader({ opened, toggle }: MobileHeaderProps) {
  return (
    <AppShell.Header
      hiddenFrom="sm"
      // Hide the header entirely when the menu is open to prevent duplicate close buttons and visual overlap
      style={{ display: opened ? 'none' : undefined }}
      className={classes.header}
    >
      <UnstyledButton onClick={toggle} className={classes.headerButton}>
        <Group gap="xs">
          <IconMenu2 size={26} />
          <Stack gap={0}>
            <Title order={5} lh={1.1}>
              Emre Erdener
            </Title>
            <Text size="xs" c="dimmed">
              hello@emre.design
            </Text>
          </Stack>
        </Group>
      </UnstyledButton>
    </AppShell.Header>
  );
}
