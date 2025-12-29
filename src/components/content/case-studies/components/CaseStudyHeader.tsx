'use client';

import { IconCircleCheckFilled, IconExclamationCircleFilled } from '@tabler/icons-react';
import { Blockquote, Button, Group, Image, Stack, Text, Title } from '@mantine/core';

interface CaseStudyHeaderProps {
  coverImage: string;
  coverAlt: string;
  metadata: string;
  title: string;
  description: string;
  prototypeUrl?: string;
  websiteUrl?: string;
  problem: string;
  proposal: string;
}

export default function CaseStudyHeader({
  coverImage,
  coverAlt,
  metadata,
  title,
  description,
  prototypeUrl,
  websiteUrl,
  problem,
  proposal,
}: CaseStudyHeaderProps) {
  return (
    <Stack gap="xl">
      <Image
        src={coverImage}
        alt={coverAlt}
        radius="lg"
        style={{ border: '1px solid var(--app-shell-border-color)' }}
      />

      <Stack gap="xs" py="lg">
        <Stack align="flex-start" gap="lg">
          <Group justify="space-between">
            <Text size="lg" c="dimmed">
              {metadata}
            </Text>
          </Group>
          <Stack>
            <Title order={1} fz="2.8rem" lh={1.1} fw={800}>
              {title}
            </Title>
            <Text size="xl">{description}</Text>
          </Stack>

          {prototypeUrl && (
            <Button size="md" component="a" href={prototypeUrl} target="_blank">
              View prototype
            </Button>
          )}
          {websiteUrl && (
            <Button size="md" component="a" href={websiteUrl} target="_blank">
              View website
            </Button>
          )}
        </Stack>
      </Stack>

      <Blockquote p="xl" color="orange">
        <Stack>
          <Group justify="space-between" wrap="nowrap">
            <Title order={2}>Challenge</Title>
            <IconExclamationCircleFilled size={32} color="orange" />
          </Group>
          <Text size="xl">{problem}</Text>
        </Stack>
      </Blockquote>

      <Blockquote p="xl" color="green">
        <Stack>
          <Group justify="space-between" wrap="nowrap">
            <Title order={2}>Design proposal</Title>
            <IconCircleCheckFilled size={32} color="green" />
          </Group>

          <Text size="xl">{proposal}</Text>
        </Stack>
      </Blockquote>
    </Stack>
  );
}
