'use client';

import { usePathname } from 'next/navigation';
import { CaseStudyShell } from '../../content/case-studies/components/CaseStudyShell';
import GlobalSearch from './ai-search/GlobalSearch';
import { HomeShell } from './HomeShell';

export function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div>
      <GlobalSearch />
      {pathname?.startsWith('/case-study/') ? (
        <CaseStudyShell>{children}</CaseStudyShell>
      ) : (
        <HomeShell>{children}</HomeShell>
      )}
    </div>
  );
}
