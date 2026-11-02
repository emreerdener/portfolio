'use client';

import { ReactNode } from 'react';
import { IconList, IconMail } from '@tabler/icons-react';
import { ActionIcon, AppShell, Avatar, Box, Button, Group } from '@mantine/core';
import classes from './shell.module.css';

interface MobileHeaderProps {
  hiddenFrom?: 'sm' | 'xl';
  opened: boolean;
  toggle: () => void;
  onContentsClick?: () => void;
  contentsOpened?: boolean;
  navigation?: (profile: ReactNode, contents: ReactNode) => ReactNode;
}

export default function MobileHeader({
  hiddenFrom = 'sm',
  opened,
  toggle,
  onContentsClick,
  contentsOpened,
  navigation,
}: MobileHeaderProps) {
  const profile = (
    <Box hiddenFrom="sm">
      {!navigation ? (
        <Button
          className={classes.toolbarControl}
          onClick={toggle}
          variant="default"
          radius="md"
          h="var(--toolbar-control-size, 44px)"
          px="sm"
          fz="md"
          leftSection={<Avatar src="/images/profile-pic.png" alt="" size={28} radius="xl" />}
          aria-label="Open navigation"
          aria-expanded={opened}
        >
          Emre Erdener
        </Button>
      ) : (
        <ActionIcon
          className={classes.toolbarControl}
          onClick={toggle}
          variant="default"
          radius="md"
          size="var(--toolbar-control-size, 44px)"
          aria-label="Open navigation"
          aria-expanded={opened}
        >
          <Avatar src="/images/profile-pic.png" alt="" size={28} radius="xl" />
        </ActionIcon>
      )}
    </Box>
  );
  const contents = onContentsClick ? (
    <Button
      className={classes.sectionsButton}
      h="var(--toolbar-control-size, 44px)"
      size="md"
      onClick={onContentsClick}
      variant="default"
      radius="md"
      leftSection={<IconList size={20} />}
      aria-label="Open sections"
      aria-expanded={contentsOpened}
      aria-haspopup="dialog"
      style={{ flexShrink: 0 }}
    >
      Sections
    </Button>
  ) : null;

  return (
    <AppShell.Header
      hiddenFrom={hiddenFrom}
      style={{ display: opened ? 'none' : undefined }}
      className={`${classes.header} ${navigation ? classes.caseStudyHeader : ''}`}
    >
      {navigation ? (
        <Box className={classes.headerContent}>{navigation(profile, contents)}</Box>
      ) : (
        <Group justify="space-between" wrap="nowrap" gap="xs">
          {profile}
          <Group id="mobile-header-actions" wrap="nowrap" gap="xs" style={{ flexShrink: 0 }}>
            <Button
              component="a"
              href="mailto:erdener.emre@gmail.com"
              leftSection={<IconMail size={20} />}
              variant="filled"
              radius="md"
              h="var(--toolbar-control-size, 44px)"
              size="md"
              aria-label="Contact"
              className={classes.contactButton}
            >
              Contact
            </Button>
          </Group>
        </Group>
      )}
    </AppShell.Header>
  );
}
