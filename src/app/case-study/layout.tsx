'use client';

import { usePathname, useRouter } from 'next/navigation';
import { IconArrowLeft } from '@tabler/icons-react';
import { Button, Group, Stack } from '@mantine/core';
import CaseStudyStickyBanner from '@/src/components/content/case-studies/components/StickyBanner';
import { CASE_STUDIES } from '@/src/components/content/case-studies/data/case-studies';

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const study = CASE_STUDIES.find((s) => s.href === pathname);
  return (
    <>
      <Stack gap="xl" maw={1000}>
        <Group>
          <Button
            onClick={() => router.push('/case-studies')}
            variant="light"
            size="md"
            leftSection={<IconArrowLeft size={24} />}
          >
            All case studies
          </Button>
        </Group>
        {children}
      </Stack>

      {study && (
        <CaseStudyStickyBanner prototypeUrl={study.prototypeUrl} websiteUrl={study.websiteUrl} />
      )}
    </>
  );
}
