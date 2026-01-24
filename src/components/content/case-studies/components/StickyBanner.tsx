'use client';

import {
  IconBrandFigma,
  IconExternalLink,
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
} from '@tabler/icons-react';
import { Button, Group, rem, Transition } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { useCaseStudyAudio } from '../context/CaseStudyAudioContext';

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
  const show = scroll.y > 800 && (!!prototypeUrl || !!websiteUrl || hasAudio);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: rem(16),
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
            {hasAudio && (
              <Button
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
            {prototypeUrl && (
              <Button
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
                component="a"
                href={websiteUrl}
                target="_blank"
                variant="default"
                size="xs"
                radius="xl"
                rightSection={<IconExternalLink size={14} />}
              >
                Website
              </Button>
            )}
          </Group>
        )}
      </Transition>
    </div>
  );
}
