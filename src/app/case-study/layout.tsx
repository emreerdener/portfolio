'use client';

import { usePathname, useRouter } from 'next/navigation';
import {
  IconArrowLeft,
  IconArrowRight,
  IconBrandFigma,
  IconExternalLink,
} from '@tabler/icons-react';
import { ActionIcon, Button, Group, Stack, Tooltip } from '@mantine/core';
import CaseStudyStickyBanner from '@/src/components/content/case-studies/components/StickyBanner';
import { CaseStudyAudioProvider } from '@/src/components/content/case-studies/context/CaseStudyAudioContext';
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
    <CaseStudyAudioProvider caseStudyId={study?.id}>
      <Stack gap="xl" maw={1000}>
        <Group justify="space-between">
          <Group>
            <Tooltip label="All case studies" position="right">
              <ActionIcon
                onClick={() => router.push('/case-studies')}
                variant="default"
                size={42} // Matching the height of standard md Button
                radius="md" // Matching the radius of standard md Button
                aria-label="All case studies"
              >
                <IconArrowLeft size={24} />
              </ActionIcon>
            </Tooltip>

            <Tooltip label="Next case study" position="right">
              <ActionIcon
                onClick={handleNextCaseStudy}
                variant="default"
                size={42}
                radius="md"
                aria-label="Next case study"
              >
                <IconArrowRight size={24} />
              </ActionIcon>
            </Tooltip>
          </Group>

          {study?.prototypeUrl && (
            <Button
              size="md"
              component="a"
              href={study.prototypeUrl}
              target="_blank"
              leftSection={<IconBrandFigma size={20} />}
            >
              Prototype
            </Button>
          )}
          {study?.websiteUrl && (
            <Button
              size="md"
              component="a"
              href={study.websiteUrl}
              target="_blank"
              rightSection={<IconExternalLink size={20} />}
            >
              Website
            </Button>
          )}
        </Group>
        {children}
      </Stack>

      {study && (
        <CaseStudyStickyBanner prototypeUrl={study.prototypeUrl} websiteUrl={study.websiteUrl} />
      )}
    </CaseStudyAudioProvider>
  );
}
