'use client';

import { Box, Space, Stack } from '@mantine/core';
import MoreBanner from '@/src/components/layout/MoreBanner';

export default function PresentationPage() {
  return (
    <>
      <Stack gap="xl">
        <Box
          component="iframe"
          src="https://embed.figma.com/proto/HJiWeAVq9BdNEXOK8ty5wi/Emre-Erdener--Presentation?page-id=0%3A1&node-id=1-2&p=f&viewport=29682%2C3758%2C0.45&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2&hotspot-hints=0&embed-host=share&hide-ui=1"
          allowFullScreen
          style={{
            border: '1px solid var(--app-shell-border-color)',
            width: '100%',
            borderRadius: 'var(--mantine-radius-lg)',
          }}
          h={{ base: '44vh', sm: '50vh', md: '60vh', lg: '70vh', xl: '90vh' }}
        />

        <MoreBanner />
        <Space h="xl" />
      </Stack>
    </>
  );
}
