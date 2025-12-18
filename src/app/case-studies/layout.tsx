'use client';

import { useRouter } from 'next/navigation';
import { IconArrowLeft } from '@tabler/icons-react';
import { Button, Container, Group, Stack } from '@mantine/core';

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <>
      <Container>
        <Stack>
          <Group>
            <Button
              onClick={() => router.push('/case-studies')}
              variant="subtle"
              color="gray"
              size="md"
              leftSection={<IconArrowLeft size={24} />}
            >
              Case studies
            </Button>
          </Group>
          {children}
        </Stack>
      </Container>
    </>
  );
}
