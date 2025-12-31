import { ReactNode } from 'react';
import { motion, PanInfo } from 'framer-motion';
import { Drawer } from '@mantine/core';

interface SwipeableDrawerProps {
  opened: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: ReactNode;
}

export function SwipeableDrawer({ opened, onClose, children, title }: SwipeableDrawerProps) {
  const handleDragEnd = (_: any, info: PanInfo) => {
    const shouldClose = info.offset.y > 100 || info.velocity.y > 200;
    if (shouldClose && onClose) {
      onClose();
    }
  };

  return (
    <Drawer.Root
      opened={opened}
      onClose={onClose}
      position="bottom"
      size="auto"
      padding="md"
      lockScroll
    >
      <Drawer.Overlay />

      <Drawer.Content
        style={{
          background: 'transparent',
          boxShadow: 'none',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          height: '100%',
          width: '100%',
          pointerEvents: 'none',
        }}
      >
        <motion.div
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={{ top: 0, bottom: 0.2 }}
          onDragEnd={handleDragEnd}
          style={{
            pointerEvents: 'auto',
            backgroundColor: 'var(--mantine-color-body)',
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px',
            boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.1)',
            width: '100%',
            height: 'auto',
            maxHeight: '85vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Optional: Drag Handle (Recommended for UX) */}
          <div className="flex justify-center pt-3 pb-1 cursor-grab active:cursor-grabbing shrink-0">
            <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
          </div>

          <Drawer.Header
            style={{
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              overflow: 'hidden',
              flexShrink: 0, // Prevent header from collapsing
            }}
          >
            {title && <Drawer.Title>{title}</Drawer.Title>}
            <Drawer.CloseButton />
          </Drawer.Header>

          <Drawer.Body
            style={{
              flex: 1,
              overflowY: 'auto',
              overscrollBehavior: 'contain',
              minHeight: 0,
            }}
          >
            {children}
          </Drawer.Body>
        </motion.div>
      </Drawer.Content>
    </Drawer.Root>
  );
}
