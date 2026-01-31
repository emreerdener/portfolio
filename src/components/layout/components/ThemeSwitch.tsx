'use client';

import { useEffect, useState } from 'react';
import { IconMoon, IconSun } from '@tabler/icons-react';
import {
  Center,
  SegmentedControl,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';

export function ThemeSwitch() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const [mounted, setMounted] = useState(false);

  // Wait for client-side hydration to avoid mismatch errors
  useEffect(() => {
    setMounted(true);
  }, []);

  const data = [
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
  ];

  if (!mounted) {
    return <SegmentedControl data={data} size="md" />;
  }

  return (
    <SegmentedControl
      value={computedColorScheme}
      onChange={(value) => setColorScheme(value as 'light' | 'dark')}
      size="md"
      data={data}
    />
  );
}
