'use client';

import { usePathname } from 'next/navigation';
import { IconArrowUp } from '@tabler/icons-react';
import { Button, ScrollArea, Stack, TableOfContents, Text, Transition } from '@mantine/core';
import { useMediaQuery, useWindowScroll } from '@mantine/hooks';

interface CaseStudyAsideProps {
  onLinkClick?: () => void;
  hideTitle?: boolean;
  noPadding?: boolean;
}

export default function CaseStudyAside({ onLinkClick, hideTitle, noPadding }: CaseStudyAsideProps) {
  const pathname = usePathname();
  const isMobile = useMediaQuery('(max-width: 48em)');
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <ScrollArea type="never" h="100%">
      <Stack gap="lg" px={noPadding ? 0 : 'lg'} py={noPadding ? 0 : 'xl'}>
        {hideTitle ? null : (
          <Text fw={700} fz={14} tt="uppercase" c="dimmed" lh={1}>
            Table of contents
          </Text>
        )}

        <TableOfContents
          key={pathname}
          variant="light"
          size="md"
          radius="md"
          scrollSpyOptions={{
            selector: 'main :is(h1, h2, h3)',
          }}
          getControlProps={({ active, data }) => ({
            onClick: () => {
              const element = data.getNode();
              // Mobile navigation is 76px height, so we need more offset
              const headerOffset = isMobile ? 112 : 40;
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.scrollY - headerOffset;

              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
              });

              // Close the drawer if the prop is provided
              onLinkClick?.();
            },
            children: data.value,
            style: {
              paddingLeft: 12,
              paddingRight: 12,
              paddingTop: 8,
              paddingBottom: 8,
              marginBottom: 4,
              letterSpacing: '-0.5px',
              lineHeight: 1.2,
              fontWeight: active ? 600 : 500,
            },
          })}
        />

        <Transition
          mounted={scroll.y > 100}
          transition="slide-up"
          duration={200}
          timingFunction="ease"
        >
          {(styles) => (
            <Button
              style={styles}
              onClick={() => {
                scrollTo({ y: 0 });
                onLinkClick?.();
              }}
              variant="outline"
              rightSection={<IconArrowUp size={20} />}
              size="md"
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Stack>
    </ScrollArea>
  );
}
