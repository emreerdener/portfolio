'use client';

import { ActionIcon, Button, createTheme, SegmentedControl } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'orange',
  components: {
    Button: Button.extend({
      defaultProps: {
        radius: 999,
      },
      styles: {
        root: {
          flexShrink: 0,
        },
      },
    }),
    SegmentedControl: SegmentedControl.extend({
      defaultProps: {
        radius: 999,
      },
    }),
    ActionIcon: ActionIcon.extend({
      defaultProps: {
        radius: 999,
      },
    }),
  },
});
