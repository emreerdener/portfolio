// src/components/layout/components/CaseStudyAside.tsx
'use client';

import { ScrollArea, Stack, TableOfContents, Text } from '@mantine/core';

export default function CaseStudyAside() {
  return (
    <ScrollArea type="never" h="100%">
      <Stack gap="md" p="lg">
        <Text fw={700} size="sm" tt="uppercase" c="dimmed">
          On this page
        </Text>

        <TableOfContents
          variant="light"
          size="md"
          radius="md"
          scrollSpyOptions={{
            selector: 'main :is(h1, h2, h3)',
          }}
          getControlProps={({ data }) => ({
            onClick: () => {
              const element = data.getNode();
              const headerOffset = 40; // Adjust this value (Header height + padding)
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.scrollY - headerOffset;

              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
              });
            },
            children: data.value,
            style: {
              paddingLeft: 'var(--mantine-spacing-md)',
              marginBottom: 'var(--mantine-spacing-xs)',
            },
          })}
        />
      </Stack>
    </ScrollArea>
  );
}
