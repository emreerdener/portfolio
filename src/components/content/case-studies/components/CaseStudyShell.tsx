'use client';

import { useEffect } from 'react';
import { AppShell, Burger, Overlay, Stack, Transition } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import MobileHeader from '@/src/components/layout/components/MobileHeader';
import NavContent from '@/src/components/layout/components/NavContent';
import { useScrollLock } from '@/src/components/layout/hooks/use-scroll-lock';
import CaseStudyAside from './CaseStudyAside'; // The TOC component we created earlier

import MoreCaseStudies from './MoreCaseStudies';
import classes from '../../../layout/components/layout.module.css';

export function CaseStudyShell({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();
  const [_scrollLocked, setScrollLocked] = useScrollLock();

  useEffect(() => {
    setScrollLocked(opened);
  }, [opened, setScrollLocked]);

  return (
    <AppShell
      layout="alt"
      header={{ height: 76 }}
      navbar={{ width: 268, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      aside={{
        width: 360, // NARROWER width for TOC
        breakpoint: 'xl',
        collapsed: { desktop: false, mobile: true }, // Always show aside on desktop
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
            onClick={toggle}
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

      <AppShell.Main className={classes.main}>
        <Stack align="center">
          {children} <MoreCaseStudies />
        </Stack>
      </AppShell.Main>

      <AppShell.Aside className={classes.aside}>
        <CaseStudyAside />
      </AppShell.Aside>
    </AppShell>
  );
}
