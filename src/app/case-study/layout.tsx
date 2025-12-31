'use client';

import { usePathname, useRouter } from 'next/navigation';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { Button, Group, Stack } from '@mantine/core';
import CaseStudyStickyBanner from '@/src/components/content/case-studies/components/StickyBanner';
import { CASE_STUDIES } from '@/src/components/content/case-studies/data/case-studies';

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const study = CASE_STUDIES.find((s) => s.href === pathname);

  const handleNextCaseStudy = () => {
    const currentIndex = CASE_STUDIES.findIndex((s) => s.href === pathname);

    // Calculate the next index, wrapping around to 0 if we are at the end
    const nextIndex = (currentIndex + 1) % CASE_STUDIES.length;
    const nextStudy = CASE_STUDIES[nextIndex];

    router.push(nextStudy.href);
  };

  return (
    <>
      <Stack gap="xl" maw={1000}>
        <Group justify="space-between">
          <Button
            onClick={() => router.push('/case-studies')}
            variant="default"
            size="md"
            leftSection={<IconArrowLeft size={24} />}
            aria-label="All case studies"
          >
            All
          </Button>

          <Button
            onClick={handleNextCaseStudy}
            variant="light"
            size="md"
            rightSection={<IconArrowRight size={24} />}
            aria-label="Next case study"
          >
            Next
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
