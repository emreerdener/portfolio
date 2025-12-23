'use client';

import { useRouter } from 'next/navigation';
import { IconArrowLeft } from '@tabler/icons-react';
import { Button, Group, Stack } from '@mantine/core';

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <>
      <Stack gap="xl" maw={1000}>
        <Group>
          <Button
            onClick={() => router.push('/case-studies')}
            variant="transparent"
            p={0}
            size="md"
            leftSection={<IconArrowLeft size={24} />}
          >
            All case studies
          </Button>
        </Group>
        {children}
      </Stack>
    </>
  );
}
