'use client';

import { Button, Group, Image, Stack, Text, Title } from '@mantine/core';
import CaseStudyImpact from './CaseStudyImpact';
import ChallengeProposal from './ChallengeProposal';

interface Stat {
  label: string;
  value?: string;
  description: string;
}
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
  stats?: Stat[];
  statsDescription?: string;
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
  stats,
  statsDescription,
}: CaseStudyHeaderProps) {
  return (
    <Stack gap="xl">
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

      <Image
        src={coverImage}
        alt={coverAlt}
        radius="lg"
        style={{ border: '1px solid var(--app-shell-border-color)' }}
      />

      {stats && stats.length > 0 && (
        <CaseStudyImpact stats={stats} description={statsDescription} />
      )}

      <ChallengeProposal problem={problem} proposal={proposal} />
    </Stack>
  );
}
