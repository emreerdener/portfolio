'use client';

import { IconBrandFigma, IconExternalLink } from '@tabler/icons-react';
import { Button, Group, rem, Transition } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';

interface CaseStudyStickyBannerProps {
  prototypeUrl?: string;
  websiteUrl?: string;
}

export default function CaseStudyStickyBanner({
  prototypeUrl,
  websiteUrl,
}: CaseStudyStickyBannerProps) {
  const [scroll] = useWindowScroll();
  const show = scroll.y > 800 && (!!prototypeUrl || !!websiteUrl);

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
          <Group gap="md" style={{ ...transitionStyles, pointerEvents: 'auto' }}>
            {prototypeUrl && (
              <Button
                component="a"
                href={prototypeUrl}
                target="_blank"
                variant="default"
                size="sm"
                radius="xl"
                leftSection={prototypeUrl ? <IconBrandFigma size={16} /> : null}
                rightSection={websiteUrl ? <IconExternalLink size={14} /> : null}
                style={{ boxShadow: 'var(--mantine-shadow-md)' }}
              >
                View prototype
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
                View website
              </Button>
            )}
          </Group>
        )}
      </Transition>
    </div>
  );
}
