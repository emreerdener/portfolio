'use client';

import { useEffect, useState } from 'react';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { Center, SegmentedControl, useMantineColorScheme } from '@mantine/core';

export function ThemeSwitch() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const [mounted, setMounted] = useState(false);

  // Wait for client-side hydration to avoid mismatch errors
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <SegmentedControl data={['light', 'dark']} size="xs" radius="xl" />;
  }

  return (
    <SegmentedControl
      value={colorScheme}
      onChange={(value) => setColorScheme(value as 'light' | 'dark')}
      radius="md"
      size="md"
      data={[
        {
          value: 'light',
          label: (
            <Center style={{ gap: 10 }}>
              <IconSun size={20} />
            </Center>
          ),
        },
        {
          value: 'dark',
          label: (
            <Center style={{ gap: 10 }}>
              <IconMoon size={20} />
            </Center>
          ),
        },
      ]}
    />
  );
}
