// src/components/Shell.tsx
'use client';

import { AppShell, Burger, Group, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import NavLinks from './NavLinks';

export function Shell({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      aside={{ width: 300, breakpoint: 'md', collapsed: { desktop: false, mobile: true } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          Header
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Stack>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <NavLinks />
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
      <AppShell.Aside p="md">Aside</AppShell.Aside>
    </AppShell>
  );
}
