import Link from 'next/link';
import { Button, Paper, Stack, Text, Title } from '@mantine/core';

export default function WoodworkingCard() {
  return (
    <Paper p="lg" radius="lg" withBorder shadow="sm">
      <Stack gap="md">
        <Text fz={32} aria-hidden>
          🪵🪚
        </Text>
        <Stack gap={4}>
          <Title order={4}>Woodworking</Title>
          <Text c="dimmed" size="sm">
            I'm an aspiring woodworker! Check out some of my recent projects.
          </Text>
        </Stack>
        <Button
          component={Link}
          href="/woodworking"
          variant="outline"
          style={{ alignSelf: 'flex-start' }}
        >
          View projects
        </Button>
      </Stack>
    </Paper>
  );
}
