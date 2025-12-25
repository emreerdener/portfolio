'use client';

import { usePathname } from 'next/navigation';
import { CaseStudyShell } from '../../content/case-studies/components/CaseStudyShell';
import { HomeShell } from './HomeShell';

export function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // If the URL starts with /case-study/, render the CaseStudyShell
  if (pathname?.startsWith('/case-study/')) {
    return <CaseStudyShell>{children}</CaseStudyShell>;
  }

  // Otherwise, render the standard HomeShell
  return <HomeShell>{children}</HomeShell>;
}
