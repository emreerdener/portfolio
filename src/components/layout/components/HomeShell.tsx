'use client';

import { usePathname } from 'next/navigation';
import { AppShell, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import NaturebookCard from '../../content/about/components/NaturebookCard';
import PresentationCard from '../../content/case-studies/components/PresentationCard';
import OtherWorkCard from '../../content/other-work/components/OtherWorkCard';
import WoodworkingCard from '../../content/other-work/components/WoodworkingCard';
import Aside from './Aside';
import MobileHeader from './MobileHeader';
import MobileSheet from './MobileSheet';
import NavContent, { NavIdentity } from './NavContent';
import classes from './shell.module.css';

export function HomeShell({ children }: { children: React.ReactNode }) {
  const [opened, { toggle, close }] = useDisclosure();
  const pathname = usePathname();

  // Standard Logic: Hide aside on any page that is not the home page
  const shouldHideAside = pathname !== '/';

  return (
    <AppShell
      layout="alt"
      header={{ height: { base: 80, sm: 0 } }}
      navbar={{
        width: 360,
        breakpoint: 'xl',
        collapsed: { desktop: shouldHideAside, mobile: true },
      }}
      aside={{ width: { base: 280, md: 296 }, breakpoint: 'sm', collapsed: { mobile: true } }}
      padding={{ base: 'xl', md: 48 }}
      className={classes.shell}
    >
      <MobileHeader opened={opened} toggle={toggle} />

      <MobileSheet
        opened={opened}
        onClose={close}
        title="Menu"
        headerContent={<NavIdentity large onNavClick={close} />}
      >
        <NavContent onNavClick={close} large hideIdentity />
      </MobileSheet>

      {!shouldHideAside && (
        <AppShell.Navbar className={classes.aside}>
          <Aside />
        </AppShell.Navbar>
      )}

      <AppShell.Main className={classes.main}>{children}</AppShell.Main>

      <AppShell.Aside
        visibleFrom="sm"
        className={`${classes.navbar} ${classes.rightNav}`}
        pt={{ base: 'xl', md: 48 }}
        pr={{ base: 'xl', md: 48 }}
        onClick={close}
      >
        <Stack gap={0} className={classes.navbarContainer} onClick={(e) => e.stopPropagation()}>
          <NavContent onNavClick={close} />
        </Stack>
        {pathname === '/' && (
          <Stack visibleFrom="sm" mt={{ base: 32, md: 48 }} onClick={(e) => e.stopPropagation()}>
            <NaturebookCard />
          </Stack>
        )}
        {pathname === '/case-studies' && (
          <Stack visibleFrom="sm" mt={{ base: 32, md: 48 }} onClick={(e) => e.stopPropagation()}>
            <PresentationCard />
          </Stack>
        )}
        {pathname === '/profile' && (
          <Stack visibleFrom="sm" mt={{ base: 32, md: 48 }} onClick={(e) => e.stopPropagation()}>
            <OtherWorkCard />
          </Stack>
        )}
        {pathname === '/other-work' && (
          <Stack visibleFrom="sm" mt={{ base: 32, md: 48 }} onClick={(e) => e.stopPropagation()}>
            <WoodworkingCard />
          </Stack>
        )}
      </AppShell.Aside>
    </AppShell>
  );
}
