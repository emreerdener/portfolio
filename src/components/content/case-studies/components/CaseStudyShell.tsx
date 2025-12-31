'use client';

import { useEffect } from 'react';
import { IconList } from '@tabler/icons-react';
import {
  ActionIcon,
  AppShell,
  Box,
  Burger,
  Drawer,
  Overlay,
  Space,
  Stack,
  Transition,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import MobileHeader from '@/src/components/layout/components/MobileHeader';
import NavContent from '@/src/components/layout/components/NavContent';
import { SwipeableDrawer } from '@/src/components/layout/components/SwipeableDrawer';
import { useScrollLock } from '@/src/components/layout/hooks/use-scroll-lock';
import CaseStudyAside from './CaseStudyAside';
import MoreCaseStudies from './MoreCaseStudies';
import classes from '../../../layout/components/layout.module.css';

export function CaseStudyShell({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();
  // State for the TOC Drawer
  const [tocOpened, { open: openToc, close: closeToc }] = useDisclosure(false);
  const [_scrollLocked, setScrollLocked] = useScrollLock();

  useEffect(() => {
    // Lock scroll if either menu or TOC is open
    setScrollLocked(opened || tocOpened);
  }, [opened, tocOpened, setScrollLocked]);

  return (
    <AppShell
      layout="alt"
      header={{ height: 76 }}
      navbar={{ width: 268, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      aside={{
        width: 360,
        breakpoint: 'xl',
        collapsed: { desktop: false, mobile: true },
      }}
      padding="xl"
      className={classes.shell}
    >
      <MobileHeader opened={opened} toggle={toggle} />

      {/* Mobile TOC Trigger Button */}
      <Box
        hiddenFrom="sm" // Only show when the desktop Aside is hidden
        pos="fixed"
        top={20}
        right={20}
        style={{
          zIndex: 100,
        }}
      >
        <ActionIcon
          onClick={openToc}
          size={56}
          radius="md"
          variant="default"
          aria-label="Table of contents"
          style={{
            boxShadow: 'var(--mantine-shadow-xs)',
          }}
        >
          <IconList size={28} />
        </ActionIcon>
      </Box>

      {/* Mobile TOC Drawer */}
      {/* <Drawer
        opened={tocOpened}
        onClose={closeToc}
        title="On this page"
        padding="md"
        size="lg"
        position="bottom"
        radius="lg"
        hiddenFrom="xl"
      >
        <Box h="100%">
          <CaseStudyAside onLinkClick={closeToc} hideTitle noPadding />
          <Space h="xl" />
        </Box>
      </Drawer> */}

      <SwipeableDrawer opened={tocOpened} onClose={closeToc} title="On this page">
        <Box h="100%">
          <CaseStudyAside onLinkClick={closeToc} hideTitle noPadding />
          <Space h="xl" />
        </Box>
      </SwipeableDrawer>

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
          <NavContent onNavClick={close} />
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
