'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { IconArrowUp } from '@tabler/icons-react';
import { Affix, AppShell, Box, Button, Group, Stack, Tooltip, Transition } from '@mantine/core';
import { useDisclosure, useReducedMotion, useWindowScroll } from '@mantine/hooks';
import MobileHeader from '@/src/components/layout/components/MobileHeader';
import MobileSheet from '@/src/components/layout/components/MobileSheet';
import NavContent, { NavIdentity } from '@/src/components/layout/components/NavContent';
import { CASE_STUDIES } from '../data/case-studies';
import CaseStudyActions from './CaseStudyActions';
import CaseStudyAside from './CaseStudyAside';
import CaseStudyNavigation from './CaseStudyNavigation';
import MoreCaseStudies from './MoreCaseStudies';
import classes from '../../../layout/components/shell.module.css';

export function CaseStudyShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [scroll] = useWindowScroll();
  const reduceMotion = useReducedMotion();
  const desktopContentsRef = useRef<HTMLDivElement>(null);
  const sheetContentsRef = useRef<HTMLDivElement>(null);
  const study = CASE_STUDIES.find((item) => item.href === pathname);
  const toolbarRef = useRef<HTMLDivElement>(null);
  const actionMeasureRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);
  const sectionsMeasureRef = useRef<HTMLDivElement>(null);
  const visibleActionsRef = useRef<HTMLDivElement>(null);
  const [showSectionsLabel, setShowSectionsLabel] = useState(false);
  const [showToolbarActions, setShowToolbarActions] = useState(false);

  useLayoutEffect(() => {
    const toolbar = toolbarRef.current;
    const actions = actionMeasureRef.current;
    const sections = sectionsMeasureRef.current;
    const visibleActions = visibleActionsRef.current;
    const pages = toolbar?.querySelector<HTMLElement>('[data-page-navigation]');
    if (!toolbar || !actions || !sections || !pages || !visibleActions) {
      return;
    }

    const update = () => {
      // Measure intrinsic controls, independent of the action's current placement.
      const requiredWidth =
        pages.getBoundingClientRect().width +
        actions.getBoundingClientRect().width +
        sections.getBoundingClientRect().width +
        48;
      setShowToolbarActions(toolbar.clientWidth >= requiredWidth && toolbar.clientWidth > 0);
      setShowSectionsLabel(
        toolbar.clientWidth >=
          pages.getBoundingClientRect().width +
            visibleActions.getBoundingClientRect().width +
            sections.getBoundingClientRect().width +
            48
      );
    };
    const observer = new ResizeObserver(update);
    [toolbar, actions, sections, pages, visibleActions].forEach((element) =>
      observer.observe(element)
    );
    update();
    document.fonts.ready.then(() => {
      if (toolbar.isConnected) {
        update();
      }
    });
    return () => observer.disconnect();
  }, [pathname]);
  const [opened, { toggle, close }] = useDisclosure();
  const [tocOpened, { open: openToc, close: closeToc }] = useDisclosure(false);

  return (
    <AppShell
      layout="alt"
      header={{ height: { base: 104, xl: 0 } }}
      navbar={{
        width: 360,
        breakpoint: 'xl',
        collapsed: { desktop: false, mobile: true },
      }}
      aside={{ width: { base: 280, md: 296 }, breakpoint: 'sm', collapsed: { mobile: true } }}
      padding={{ base: 'xl', md: 48 }}
      className={classes.shell}
    >
      <MobileHeader
        hiddenFrom="xl"
        opened={opened}
        toggle={() => {
          closeToc();
          toggle();
        }}
        onContentsClick={() => {
          close();
          openToc();
        }}
        contentsOpened={tocOpened}
        navigation={(profile, contents) => (
          <Box ref={toolbarRef} w="100%" pos="relative">
            <Box
              ref={actionMeasureRef}
              aria-hidden="true"
              inert
              pos="absolute"
              style={{ visibility: 'hidden', width: 'max-content', pointerEvents: 'none' }}
            >
              <CaseStudyActions study={study} />
            </Box>
            <Box
              ref={sectionsMeasureRef}
              aria-hidden="true"
              inert
              pos="absolute"
              style={{ visibility: 'hidden', width: 'max-content', pointerEvents: 'none' }}
            >
              {contents}
            </Box>
            <CaseStudyNavigation
              compact
              leading={profile}
              trailing={
                <Group gap="md" className={classes.toolbarGroup} wrap="nowrap">
                  <Box ref={visibleActionsRef}>
                    <CaseStudyActions study={study} compact={!showToolbarActions} />
                  </Box>
                  <Box
                    ref={sectionsRef}
                    data-sections-compact={!showSectionsLabel || undefined}
                    style={{ flexShrink: 0 }}
                  >
                    {contents}
                  </Box>
                </Group>
              }
            />
          </Box>
        )}
      />

      <MobileSheet opened={tocOpened} onClose={closeToc} title="Sections" hiddenFrom="xl">
        <Box h="60dvh">
          <CaseStudyAside onLinkClick={closeToc} noPadding viewportRef={sheetContentsRef} />
        </Box>
      </MobileSheet>

      <MobileSheet
        opened={opened}
        onClose={close}
        title="Menu"
        headerContent={<NavIdentity large onNavClick={close} />}
      >
        <NavContent onNavClick={close} large hideIdentity />
      </MobileSheet>

      <AppShell.Navbar className={classes.aside}>
        <CaseStudyAside viewportRef={desktopContentsRef} />
      </AppShell.Navbar>

      <AppShell.Main className={`${classes.main} ${classes.caseStudyMain}`}>
        <Stack align="center">
          <Box data-case-study-content w="100%">
            {children}
          </Box>
          <MoreCaseStudies />
        </Stack>
      </AppShell.Main>

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
      </AppShell.Aside>
      <Affix
        position={{ bottom: 'calc(16px + env(safe-area-inset-bottom, 0px))', right: 24 }}
        zIndex={201}
      >
        <Transition
          mounted={scroll.y > 100 && !opened && !tocOpened}
          transition="slide-up"
          duration={reduceMotion ? 0 : 200}
        >
          {(styles) => (
            <Tooltip label="Scroll to top" position="left">
              <Button
                className={classes.floatingButton}
                style={{
                  ...styles,
                  width: 'var(--button-height)',
                  boxShadow: 'var(--mantine-shadow-md)',
                }}
                size="sm"
                px={0}
                radius="xl"
                variant="default"
                aria-label="Scroll to top"
                onClick={() => {
                  const options: ScrollToOptions = {
                    top: 0,
                    behavior: reduceMotion ? 'instant' : 'smooth',
                  };
                  window.scrollTo(options);
                  desktopContentsRef.current?.scrollTo(options);
                  sheetContentsRef.current?.scrollTo(options);
                }}
              >
                <IconArrowUp size={20} stroke={2.5} />
              </Button>
            </Tooltip>
          )}
        </Transition>
      </Affix>
    </AppShell>
  );
}
