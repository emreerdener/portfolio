// src/components/layout/Shell.tsx
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AppShell, Burger, Overlay, Stack, Transition } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useScrollLock } from '@/src/components/layout/hooks/use-scroll-lock';
import Aside from './Aside';
import MobileHeader from './MobileHeader';
import NavContent from './NavContent';
import classes from './layout.module.css';

export function Shell({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();
  const [_scrollLocked, setScrollLocked] = useScrollLock();
  const pathname = usePathname();

  // Hide aside on any page that is not the home page ('/')
  const shouldHideAside = pathname !== '/';

  useEffect(() => {
    setScrollLocked(opened);
  }, [opened, setScrollLocked]);

  return (
    <AppShell
      layout="alt"
      header={{ height: 76 }}
      navbar={{ width: 268, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      aside={{
        width: 480,
        breakpoint: 'xl',
        collapsed: { desktop: shouldHideAside, mobile: true },
      }}
      padding="xl"
      className={classes.shell}
    >
      <MobileHeader opened={opened} toggle={toggle} />

      <Transition transition="fade" duration={100} mounted={opened}>
        {(styles) => (
          <Overlay
            color="#000"
            backgroundOpacity={0.6}
            zIndex={101}
            hiddenFrom="sm"
            onClick={toggle} // Close menu when clicking backdrop
            style={styles}
            fixed
          />
        )}
      </Transition>

      <AppShell.Navbar className={classes.navbar}>
        <Stack gap={0} className={classes.navbarContainer}>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <NavContent />
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main className={classes.main}>{children}</AppShell.Main>
      {!shouldHideAside && (
        <AppShell.Aside className={classes.aside}>
          <Aside />
        </AppShell.Aside>
      )}
    </AppShell>
  );
}
