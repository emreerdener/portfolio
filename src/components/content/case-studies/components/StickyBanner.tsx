'use client';

import {
  IconBrandFigma,
  IconExternalLink,
  IconList,
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
} from '@tabler/icons-react';
import { Button, Group, Transition, useMantineTheme } from '@mantine/core';
import { useMediaQuery, useWindowScroll } from '@mantine/hooks';
import classes from '@/src/components/layout/components/shell.module.css';
import { useCaseStudyAudio } from '../context/CaseStudyAudioContext';
import { useCaseStudyContents } from '../context/CaseStudyContentsContext';

interface CaseStudyStickyBannerProps {
  prototypeUrl?: string;
  websiteUrl?: string;
}

export default function CaseStudyStickyBanner({
  prototypeUrl,
  websiteUrl,
}: CaseStudyStickyBannerProps) {
  const [scroll] = useWindowScroll();
  const { isPlaying, toggleAudio, hasAudio } = useCaseStudyAudio();
  const { openContents, contentsOpened, navigationOpened } = useCaseStudyContents();
  const theme = useMantineTheme();
  const contentsSidebarVisible = useMediaQuery(`(min-width: ${theme.breakpoints.xl})`);
  const show =
    scroll.y > 300 &&
    !contentsOpened &&
    !navigationOpened &&
    (!contentsSidebarVisible || !!prototypeUrl || !!websiteUrl || hasAudio);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 'calc(16px + env(safe-area-inset-bottom, 0px))',
        left: 'var(--app-shell-navbar-offset, 0rem)',
        right: 'var(--app-shell-aside-offset, 0rem)',
        zIndex: 100,
        pointerEvents: 'none',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Transition transition="slide-up" mounted={show} duration={300}>
        {(transitionStyles) => (
          <Group gap="xs" style={{ ...transitionStyles, pointerEvents: 'auto' }}>
            <Button
              hiddenFrom="xl"
              className={classes.floatingButton}
              variant="default"
              size="sm"
              radius="xl"
              leftSection={<IconList size={16} />}
              onClick={openContents}
              aria-label="Open table of contents"
              aria-haspopup="dialog"
              aria-expanded={contentsOpened}
              style={{ boxShadow: 'var(--mantine-shadow-md)' }}
            >
              Contents
            </Button>
            {prototypeUrl && (
              <Button
                className={classes.floatingButton}
                visibleFrom="xl"
                component="a"
                href={prototypeUrl}
                target="_blank"
                variant="default"
                size="sm"
                radius="xl"
                leftSection={<IconBrandFigma size={16} />}
                rightSection={websiteUrl ? <IconExternalLink size={14} /> : null}
                style={{ boxShadow: 'var(--mantine-shadow-md)' }}
              >
                Prototype
              </Button>
            )}
            {websiteUrl && (
              <Button
                className={classes.floatingButton}
                visibleFrom="xl"
                component="a"
                href={websiteUrl}
                target="_blank"
                variant="default"
                size="sm"
                radius="xl"
                rightSection={<IconExternalLink size={14} />}
              >
                Website
              </Button>
            )}

            {hasAudio && (
              <Button
                className={classes.floatingButton}
                variant="default"
                size="sm"
                radius="xl"
                leftSection={
                  isPlaying ? (
                    <IconPlayerPauseFilled size={16} />
                  ) : (
                    <IconPlayerPlayFilled size={16} />
                  )
                }
                onClick={toggleAudio}
                style={{ boxShadow: 'var(--mantine-shadow-md)' }}
              >
                {isPlaying ? 'Pause' : 'Listen'}
              </Button>
            )}
          </Group>
        )}
      </Transition>
    </div>
  );
}
