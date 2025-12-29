'use client';

import { ActionIcon, Blockquote, Button, createTheme, SegmentedControl } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'orange',
  components: {
    Blockquote: Blockquote.extend({
      styles: {
        root: {
          borderTopRightRadius: 'var(--mantine-radius-lg)',
          borderBottomRightRadius: 'var(--mantine-radius-lg)',
        },
      },
    }),
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
