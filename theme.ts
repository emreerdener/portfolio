'use client';

import { Button, createTheme, SegmentedControl } from '@mantine/core';

export const theme = createTheme({
  components: {
    Button: Button.extend({
      defaultProps: {
        radius: 999,
      },
    }),
    SegmentedControl: SegmentedControl.extend({
      defaultProps: {
        radius: 999,
      },
    }),
  },
});
