'use client';

import { ActionIcon, Button, createTheme, SegmentedControl } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'orange',
  components: {
    Button: Button.extend({
      defaultProps: {
        radius: 'md',
      },
      styles: {
        root: {
          flexShrink: 0,
        },
      },
    }),
    SegmentedControl: SegmentedControl.extend({
      defaultProps: {
        radius: 'md',
      },
    }),
    ActionIcon: ActionIcon.extend({
      defaultProps: {
        radius: 'md',
      },
    }),
  },
});
