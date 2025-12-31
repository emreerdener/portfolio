'use client';

import { usePathname } from 'next/navigation';
import { ScrollArea, Stack, TableOfContents, Text } from '@mantine/core';

interface CaseStudyAsideProps {
  onLinkClick?: () => void;
  hideTitle?: boolean;
  noPadding?: boolean;
}

export default function CaseStudyAside({ onLinkClick, hideTitle, noPadding }: CaseStudyAsideProps) {
  const pathname = usePathname();
  return (
    <ScrollArea type="never" h="100%">
      <Stack gap="lg" px={noPadding ? 0 : 'lg'} py={noPadding ? 0 : 'xl'}>
        {hideTitle ? null : (
          <Text fw={700} fz={14} tt="uppercase" c="dimmed" lh={1}>
            On this page
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
              const headerOffset = 40;
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
              fontWeight: active ? 700 : 400,
            },
          })}
        />
      </Stack>
    </ScrollArea>
  );
}
