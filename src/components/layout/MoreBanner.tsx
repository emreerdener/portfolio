import { useRouter } from 'next/navigation';
import { Button, Group, Paper, Stack, Text, Title } from '@mantine/core';

export default function MoreBanner() {
  const router = useRouter();
  return (
    <Paper p="lg" withBorder radius="lg" shadow="sm">
      <Group justify="space-between" wrap="nowrap">
        <Stack gap={4}>
          <Title order={4}>Case studies</Title>
          <Text c="dimmed">
            Explore my design work across mobile apps, SaaS platforms, design systems, and more.
          </Text>
        </Stack>
        <Button onClick={() => router.push('/case-studies')} size="md">
          More work
        </Button>
      </Group>
    </Paper>
  );
}
