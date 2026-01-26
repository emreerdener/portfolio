'use client';

import Link from 'next/link';
import Lottie from 'lottie-react';
import { Box, Button, Container, Stack, Text, Title } from '@mantine/core';
import { PolarBear } from '../components/content/other-work/components/animations/data/polar-bear';

export default function NotFound() {
  return (
    <Container size="md" py={80}>
      <Stack align="center" gap="lg">
        <Stack align="center" gap={8}>
          <Title order={1} ta="center" lh={1.1}>
            Page not found
          </Title>
          <Text c="dimmed" ta="center" maw={400}>
            The page you are looking for does not exist. It might have been moved or deleted.
          </Text>
        </Stack>
        <Button component={Link} href="/" variant="outline" size="md">
          Go back home
        </Button>

        <Box w="100%" maw={500}>
          <Lottie animationData={PolarBear} loop autoplay />
        </Box>
      </Stack>
    </Container>
  );
}
