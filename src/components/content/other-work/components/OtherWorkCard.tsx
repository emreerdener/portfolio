import Link from 'next/link';
import { Button, Group, Paper, Stack, Text, Title } from '@mantine/core';

export default function OtherWorkCard({ compact = false }: { compact?: boolean }) {
  const summary = (
    <Stack gap={4} style={{ flex: 1 }}>
      <Title order={4}>Other work</Title>
      <Text c="dimmed" size="sm">
        Visual design, motion design, illustrations, and more.
      </Text>
    </Stack>
  );

  const action = (
    <Button
      component={Link}
      href="/other-work"
      variant="outline"
      style={{ alignSelf: compact ? 'center' : 'flex-start', flexShrink: 0 }}
    >
      Explore
    </Button>
  );

  return (
    <Paper p="lg" radius="lg" withBorder shadow="sm">
      {compact ? (
        <Group gap="md" wrap="wrap">
          <Group gap="md" wrap="nowrap" style={{ flex: '1 1 200px' }}>
            <Text fz={32} lh={1} h={32} aria-hidden>
              🎨
            </Text>
            {summary}
          </Group>
          {action}
        </Group>
      ) : (
        <Stack gap="md">
          <Text fz={32} lh={1} h={32} aria-hidden>
            🎨
          </Text>
          {summary}
          {action}
        </Stack>
      )}
    </Paper>
  );
}
