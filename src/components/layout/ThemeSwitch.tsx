'use client';

import { useEffect, useState } from 'react';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { Center, rem, SegmentedControl, useMantineColorScheme } from '@mantine/core';

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
      radius="xl"
      data={[
        {
          value: 'light',
          label: (
            <Center style={{ gap: 10 }}>
              Light
              <IconSun style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
            </Center>
          ),
        },
        {
          value: 'dark',
          label: (
            <Center style={{ gap: 10 }}>
              Dark
              <IconMoon style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
            </Center>
          ),
        },
      ]}
    />
  );
}
