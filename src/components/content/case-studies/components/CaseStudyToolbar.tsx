'use client';

import { usePathname } from 'next/navigation';
import { CASE_STUDIES } from '../data/case-studies';
import WaveformPlayer from './WaveformPlayer';
import classes from './toolbar.module.css';

export default function CaseStudyToolbar() {
  const pathname = usePathname();
  const study = CASE_STUDIES.find((s) => s.href === pathname);

  return (
    <div className={classes.container}>
      <div>
        <WaveformPlayer key={study?.id} />
      </div>
    </div>
  );
}
