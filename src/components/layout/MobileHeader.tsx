'use client';

import { AppShell, Group, Image, Stack, Text, Title, UnstyledButton } from '@mantine/core';
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
          <Image
            src="/images/profile-pic.png"
            alt="Profile picture"
            w={40}
            h={40}
            radius="100%"
            fit="cover"
            className={classes.profilepic}
          />
          <Stack gap={0}>
            <Title order={4} lh={1.1}>
              Emre Erdener
            </Title>
            <Text size="xs" c="dimmed">
              erdener.emre@gmail.com
            </Text>
          </Stack>
        </Group>
      </UnstyledButton>
    </AppShell.Header>
  );
}
