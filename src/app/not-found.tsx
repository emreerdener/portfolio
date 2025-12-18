'use client';

import { useRouter } from 'next/navigation';
import { Button, Container, Stack, Text, Title } from '@mantine/core';

export default function NotFound() {
  const router = useRouter();
  return (
    <Container size="md" py={80}>
      <Stack align="center" gap="md">
        <Title
          order={1}
          style={{
            fontSize: 120,
            fontWeight: 900,
            lineHeight: 1,
            opacity: 0.1,
          }}
        >
          404
        </Title>
        <Title order={2}>Page Not Found</Title>
        <Text c="dimmed" ta="center" maw={400}>
          The page you are looking for does not exist. It might have been moved or deleted.
        </Text>
        <Button onClick={() => router.push('/')} variant="outline" size="md">
          Go back home
        </Button>
      </Stack>
    </Container>
  );
}
