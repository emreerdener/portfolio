'use client';

import { usePathname } from 'next/navigation';
import { Stack } from '@mantine/core';
import spacing from '@/src/components/content/case-studies/components/CaseStudySpacing.module.css';
import CaseStudyStickyBanner from '@/src/components/content/case-studies/components/StickyBanner';
import { CaseStudyAudioProvider } from '@/src/components/content/case-studies/context/CaseStudyAudioContext';
import { CASE_STUDIES } from '@/src/components/content/case-studies/data/case-studies';

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const study = CASE_STUDIES.find((s) => s.href === pathname);

  return (
    <CaseStudyAudioProvider caseStudyId={study?.id}>
      <Stack className={spacing.pageIntro} maw={1000}>
        {children}
      </Stack>

      {study && (
        <CaseStudyStickyBanner prototypeUrl={study.prototypeUrl} websiteUrl={study.websiteUrl} />
      )}
    </CaseStudyAudioProvider>
  );
}
