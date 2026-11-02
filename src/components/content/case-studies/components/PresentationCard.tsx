import Link from 'next/link';
import { Button, Group, Image, Paper, Stack, Text, Title } from '@mantine/core';

export default function PresentationCard({ compact = false }: { compact?: boolean }) {
  const logo = (
    <Image
      src="/images/logos/shopify-glyph.svg"
      alt="Shopify logo"
      w={32}
      h={32}
      fit="contain"
      style={{ flexShrink: 0 }}
    />
  );

  const summary = (
    <Stack gap={4} style={{ flex: 1 }}>
      <Title order={4}>Presentation</Title>
      <Text c="dimmed" size="sm">
        A walkthrough of two case studies from Shopify.
      </Text>
    </Stack>
  );

  const action = (
    <Button
      component={Link}
      href="/presentation"
      variant="outline"
      style={{ alignSelf: compact ? 'center' : 'flex-start', flexShrink: 0 }}
    >
      Play
    </Button>
  );

  return (
    <Paper p="lg" radius="lg" withBorder shadow="sm">
      {compact ? (
        <Group gap="md" wrap="wrap">
          <Group gap="md" wrap="nowrap" style={{ flex: '1 1 200px' }}>
            {logo}
            {summary}
          </Group>
          {action}
        </Group>
      ) : (
        <Stack gap="md">
          {logo}
          {summary}
          {action}
        </Stack>
      )}
    </Paper>
  );
}
