'use client';

import { ReactNode } from 'react';
import { Box, Drawer, VisuallyHidden } from '@mantine/core';

interface MobileSheetProps {
  opened: boolean;
  onClose: () => void;
  title: string;
  headerContent?: ReactNode;
  children: ReactNode;
  hiddenFrom?: 'sm' | 'xl';
}

export default function MobileSheet({
  opened,
  onClose,
  title,
  headerContent,
  children,
  hiddenFrom = 'sm',
}: MobileSheetProps) {
  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      title={headerContent ?? (title === 'Menu' ? <VisuallyHidden>Menu</VisuallyHidden> : title)}
      position="bottom"
      size="auto"
      padding="lg"
      hiddenFrom={hiddenFrom}
      overlayProps={{ backgroundOpacity: 0.6 }}
      closeButtonProps={{ size: 44, 'aria-label': `Close ${title.toLowerCase()}` }}
      styles={{
        content: {
          height: 'auto',
          maxHeight: '85dvh',
          borderRadius: '24px 24px 0 0',
        },
        body: {
          paddingBottom: 'calc(var(--mantine-spacing-lg) + env(safe-area-inset-bottom, 0px))',
        },
        header: { position: 'relative', paddingTop: 24, alignItems: 'flex-start' },
        title: { fontWeight: 700, minWidth: 0 },
      }}
    >
      <Box
        aria-hidden="true"
        pos="absolute"
        top={10}
        left="50%"
        w={40}
        h={5}
        bg="dimmed"
        style={{ borderRadius: 999, transform: 'translateX(-50%)', pointerEvents: 'none' }}
      />
      {children}
    </Drawer>
  );
}
