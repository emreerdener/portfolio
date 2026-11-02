import { Badge, Button, Group, Image, Paper, Stack, Text, Title } from '@mantine/core';

export default function NaturebookCard({ compact = false }: { compact?: boolean }) {
  const logo = (
    <Image
      src="/images/naturebook/naturebook-glyph-c.png"
      alt="Naturebook app logo"
      w={32}
      h={32}
      fit="contain"
      style={{ flexShrink: 0, background: 'transparent' }}
    />
  );

  const summary = (
    <Stack gap={4} style={{ flex: 1 }}>
      <Title order={4}>Naturebook</Title>
      <Text c="dimmed" size="sm">
        An app for discovering and identifying the nature around you through photos and sound.
      </Text>
    </Stack>
  );

  const action = (
    <Button
      component="a"
      href="https://naturebook.earth"
      target="_blank"
      rel="noopener noreferrer"
      variant="outline"
      style={{ alignSelf: compact ? 'center' : 'flex-start', flexShrink: 0 }}
    >
      Learn more
    </Button>
  );

  return (
    <Paper p="lg" radius="lg" withBorder shadow="sm">
      <Stack gap="md">
        <Group justify="space-between" align="flex-start" wrap="nowrap" gap="sm">
          {logo}
          <Badge color="green" variant="light" size="sm" style={{ flexShrink: 0 }}>
            Current project
          </Badge>
        </Group>
        {compact ? (
          <Group gap="md" wrap="wrap">
            <Stack style={{ flex: '1 1 200px' }}>{summary}</Stack>
            {action}
          </Group>
        ) : (
          <>
            {summary}
            {action}
          </>
        )}
      </Stack>
    </Paper>
  );
}
