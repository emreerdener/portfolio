import { useRouter } from 'next/navigation';
import { IconBook } from '@tabler/icons-react';
import { Button, Group, Paper, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import classes from './layout.module.css';

export default function MoreBanner() {
  const router = useRouter();
  return (
    <Paper withBorder radius="lg" shadow="sm" className={classes.bannerPaper}>
      <Group justify="space-between" wrap="nowrap" className={classes.bannerLayout}>
        <Group wrap="nowrap" className={classes.bannerHeader}>
          <ThemeIcon size={56} variant="light" radius={12}>
            <IconBook size={32} />
          </ThemeIcon>
          <Stack gap={4}>
            <Title order={4}>Case studies</Title>
            <Text c="dimmed" size="sm">
              Explore my design work across mobile apps, SaaS platforms, design systems, and more.
            </Text>
          </Stack>
        </Group>
        <Button
          onClick={() => router.push('/case-studies')}
          size="md"
          className={classes.bannerButton}
        >
          View work
        </Button>
      </Group>
    </Paper>
  );
}
