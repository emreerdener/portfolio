'use client';

import { Stack } from '@mantine/core';

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Stack gap="xl" maw={1000}>
        {children}
      </Stack>
    </>
  );
}
