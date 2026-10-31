'use client';

import { createElement, useEffect, useState } from 'react';
import Script from 'next/script';
import classes from './CaseStudyVideo.module.css';

export default function CaseStudyVideo({ mediaId }: { mediaId: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className={classes.container}>
      {mounted && (
        <>
          <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" />
          <Script
            src={`https://fast.wistia.com/embed/${mediaId}.js`}
            strategy="afterInteractive"
            type="module"
          />
          {createElement('wistia-player', {
            key: mediaId,
            'media-id': mediaId,
            aspect: '1.7777777777777777',
          })}
        </>
      )}
    </div>
  );
}
