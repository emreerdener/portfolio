import { useRouter } from 'next/navigation';
import { IconIcons } from '@tabler/icons-react';
import { Button, Group, Paper, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import { CASE_STUDIES } from '../../content/case-studies/data/case-studies';
import classes from './shell.module.css';

interface MoreBannerProps {
  visibleStudyHrefs?: string[];
}

export default function MoreBanner({ visibleStudyHrefs = [] }: MoreBannerProps) {
  const router = useRouter();
  const remainingCount = CASE_STUDIES.filter(
    (study) => !visibleStudyHrefs.includes(study.href)
  ).length;
  const hasVisibleStudies = visibleStudyHrefs.some((href) =>
    CASE_STUDIES.some((study) => study.href === href)
  );

  if (remainingCount === 0) {
    return null;
  }
  return (
    <Paper withBorder radius="lg" shadow="sm" className={classes.bannerPaper}>
      <Group justify="space-between" wrap="nowrap" className={classes.bannerLayout}>
        <Group wrap="nowrap" className={classes.bannerHeader}>
          <ThemeIcon size={56} variant="light" radius={12}>
            <IconIcons size={32} />
          </ThemeIcon>
          <Stack gap={4}>
            <Title
              order={3}
              fz={{ base: 'var(--mantine-h4-font-size)', sm: 'var(--mantine-h3-font-size)' }}
              lh={1.2}
            >
              {remainingCount} {hasVisibleStudies ? 'more ' : ''}
              {remainingCount === 1 ? 'case study' : 'case studies'}
            </Title>
            <Text c="dimmed" size="sm">
              Explore my design work across mobile apps, SaaS platforms, design systems, and more.
            </Text>
          </Stack>
        </Group>
        <Button
          onClick={() => router.push('/case-studies')}
          size="md"
          className={classes.bannerButton}
          variant="outline"
        >
          View more
        </Button>
      </Group>
    </Paper>
  );
}
