// src/components/Shell.tsx
'use client';

import {
  AppShell,
  Burger,
  Group,
  Image,
  Overlay,
  Stack,
  Text,
  Title,
  Transition,
  UnstyledButton,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import NavContent from './NavContent';
import classes from './layout.module.css';

export function Shell({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      layout="alt"
      header={{ height: 86 }}
      navbar={{ width: 268, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      aside={{ width: 300, breakpoint: 'md', collapsed: { desktop: false, mobile: true } }}
      padding="xl"
      className={classes.shell}
    >
      <AppShell.Header
        hiddenFrom="sm"
        // Hide the header entirely when the menu is open to prevent duplicate close buttons and visual overlap
        style={{ display: opened ? 'none' : undefined }}
        className={classes.header}
      >
        <UnstyledButton onClick={toggle} className={classes.headerButton}>
          <Group gap="xs">
            <Image
              src="/images/amos.jpg"
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
                Product Designer
              </Text>
            </Stack>
          </Group>
        </UnstyledButton>
      </AppShell.Header>

      <Transition transition="fade" duration={100} mounted={opened}>
        {(styles) => (
          <Overlay
            color="#000"
            backgroundOpacity={0.6}
            zIndex={101}
            hiddenFrom="sm"
            onClick={toggle} // Close menu when clicking backdrop
            style={styles}
          />
        )}
      </Transition>

      <AppShell.Navbar className={classes.navbar}>
        <Stack className={classes.navbarContainer}>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <NavContent />
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main className={classes.main}>{children}</AppShell.Main>
      <AppShell.Aside p="md">Aside</AppShell.Aside>
    </AppShell>
  );
}
