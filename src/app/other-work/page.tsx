'use client';

import Link from 'next/link';
import { Button, Card, Group, Image, Paper, Space, Stack, Text, Title } from '@mantine/core';
import MoreCaseStudies from '@/src/components/content/case-studies/components/MoreCaseStudies';
import GiraffesAnimation from '@/src/components/content/other-work/components/animations/GiraffesAnimation';
import PolarBearAnimation from '@/src/components/content/other-work/components/animations/PolarBearAnimation';
import TurtleAnimation from '@/src/components/content/other-work/components/animations/TurtleAnimation';
import HealthCarousel from '@/src/components/content/other-work/components/HealthCarousel';

export default function OtherWork() {
  return (
    <>
      <Stack gap="xl">
        <Paper p="md" radius="lg" withBorder shadow="xs">
          <Group justify="space-between">
            <Group>
              <Title order={1}>🪵🪚</Title>
              <Stack gap={0}>
                <Title order={4}>Woodworking</Title>
                <Text c="dimmed">
                  I'm an aspiring woodworker! Check out some of my recent projects.
                </Text>
              </Stack>
            </Group>
            <Button
              size="md"
              aria-label="View woodworking projects"
              component={Link}
              href="/woodworking"
              variant="outline"
            >
              View projects
            </Button>
          </Group>
        </Paper>
        {/* Visual Health Literacy */}
        <HealthCarousel />

        {/* Kick Toys */}

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/other-work/kicktoys.png"
          alt="Kick Toys"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Card withBorder radius="lg" style={{ background: 'white' }}>
          <PolarBearAnimation />
        </Card>
        <Card withBorder radius="lg" style={{ background: 'white' }}>
          <TurtleAnimation />
        </Card>
        <Card withBorder radius="lg" style={{ background: 'white' }}>
          <GiraffesAnimation />
        </Card>

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/other-work/yoga.jpg"
          alt="Yoga and meditation illustrations"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/other-work/vintage-heart.jpg"
          alt="Vintage Heart logo"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/other-work/ironmarrow.jpg"
          alt="Ironmarrow logo"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />
        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/other-work/lotus.jpg"
          alt="Lotus logo"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <MoreCaseStudies />

        <Space h="xl" />
      </Stack>
    </>
  );
}
