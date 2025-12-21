'use client';

import { Box, Stack } from '@mantine/core';
import MoreBanner from '@/src/components/layout/MoreBanner';

export default function PresentationPage() {
  return (
    <>
      <Stack gap="xl">
        <Box
          component="iframe"
          src="https://embed.figma.com/proto/HJiWeAVq9BdNEXOK8ty5wi/Emre-Erdener--Presentation?page-id=0%3A1&node-id=1-2&p=f&viewport=1011%2C566%2C0.02&scaling=contain&content-scaling=fixed&starting-point-node-id=1%3A2&embed-host=share&hide-ui=1"
          allowFullScreen
          style={{
            border: '1px solid var(--app-shell-border-color)',
            width: '100%',
            height: '80vh',
            borderRadius: 'var(--mantine-radius-lg)',
          }}
        />

        <MoreBanner />
      </Stack>
    </>
  );
}
