'use client';

import Script from 'next/script';
import { Box } from '@mantine/core';

export default function CaseStudyVideo({ mediaId }: { mediaId: string }) {
  return (
    <Box
      w="100%"
      style={{
        borderRadius: 24,
        border: '1px solid var(--app-shell-border-color)',
        overflow: 'hidden',
        backgroundColor: '#000',
      }}
    >
      <Script src="https://fast.wistia.com/player.js" strategy="lazyOnload" />
      <Script
        src={`https://fast.wistia.com/embed/${mediaId}.js`}
        strategy="lazyOnload"
        type="module"
      />
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <style>
              wistia-player[media-id='${mediaId}'] {
                display: block;
                width: 100%;
                background-color: #000;
              }
              wistia-player[media-id='${mediaId}']:not(:defined) {
                background: #000 center / contain no-repeat url('https://fast.wistia.com/embed/medias/${mediaId}/swatch');
                display: block;
                padding-top: 56.25%;
              }
            </style>
            <wistia-player media-id="${mediaId}" aspect="1.7777777777777777"></wistia-player>
          `,
        }}
      />
    </Box>
  );
}
