// src/components/layout/components/CaseStudyAside.tsx
'use client';

import { ScrollArea, Stack, TableOfContents, Text } from '@mantine/core';

export default function CaseStudyAside() {
  return (
    <ScrollArea type="never" h="100%">
      <Stack gap="lg" px="lg" py="xl">
        <Text fw={700} fz={14} tt="uppercase" c="dimmed" lh={1}>
          On this page
        </Text>

        <TableOfContents
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
