'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconArrowLeft, IconArrowRight, IconIcons } from '@tabler/icons-react';
import { ActionIcon, Group, Tooltip } from '@mantine/core';
import classes from '@/src/components/layout/components/shell.module.css';
import { CASE_STUDIES } from '../data/case-studies';

const ORDERED_CASE_STUDIES = [...CASE_STUDIES].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export default function CaseStudyNavigation({
  compact = false,
  leading,
  trailing,
}: {
  compact?: boolean;
  leading?: ReactNode;
  trailing?: ReactNode;
}) {
  const pathname = usePathname();
  const index = ORDERED_CASE_STUDIES.findIndex((study) => study.href === pathname);
  const total = ORDERED_CASE_STUDIES.length;
  const previous =
    index >= 0 && total > 1 ? ORDERED_CASE_STUDIES[(index - 1 + total) % total] : undefined;
  const next = index >= 0 && total > 1 ? ORDERED_CASE_STUDIES[(index + 1) % total] : undefined;
  const allCaseStudies = (
    <Tooltip label="All case studies" position="right">
      <ActionIcon
        component={Link}
        href="/case-studies"
        variant="default"
        size="var(--toolbar-control-size, 44px)"
        radius="md"
        className={`${classes.toolbarControl} ${compact ? classes.toolbarAllStudies : ''}`}
        aria-label="All case studies"
      >
        <IconIcons size={24} />
      </ActionIcon>
    </Tooltip>
  );
  const arrows = (
    <>
      {previous && (
        <Tooltip label={`Previous: ${previous.title}`} position="left">
          <ActionIcon
            className={classes.toolbarControl}
            component={Link}
            href={previous.href}
            variant="default"
            size="var(--toolbar-control-size, 44px)"
            radius="md"
            aria-label={`Previous: ${previous.title}`}
          >
            <IconArrowLeft size={24} />
          </ActionIcon>
        </Tooltip>
      )}
      {next && (
        <Tooltip label={`Next: ${next.title}`} position="right">
          <ActionIcon
            className={classes.toolbarControl}
            component={Link}
            href={next.href}
            variant="default"
            size="var(--toolbar-control-size, 44px)"
            radius="md"
            aria-label={`Next: ${next.title}`}
          >
            <IconArrowRight size={24} />
          </ActionIcon>
        </Tooltip>
      )}
    </>
  );
  return (
    <Group
      gap={8}
      className={compact ? classes.toolbarGroup : undefined}
      wrap="nowrap"
      justify="space-between"
      w="100%"
      aria-label="Case study navigation"
    >
      <Group
        data-page-navigation
        gap={8}
        className={compact ? classes.toolbarGroup : undefined}
        wrap="nowrap"
      >
        {leading}
        {allCaseStudies}
        {compact && arrows}
      </Group>
      {compact ? (
        trailing
      ) : (
        <Group gap={8} wrap="nowrap">
          {arrows}
        </Group>
      )}
    </Group>
  );
}
