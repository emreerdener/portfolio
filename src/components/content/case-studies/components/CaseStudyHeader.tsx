'use client';

import { IconBrandFigma, IconPlayerPauseFilled, IconPlayerPlayFilled } from '@tabler/icons-react';
import { Button, Group, Image, Stack, Text, Title } from '@mantine/core';
import { useCaseStudyAudio } from '../context/CaseStudyAudioContext';
import CaseStudyImpact from './CaseStudyImpact';
import ChallengeProposal from './ChallengeProposal';

interface Stat {
  label: string;
  value?: string;
  description: string;
}
interface CaseStudyHeaderProps {
  id: string;
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
  id,
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
  // Audio State from Context
  const { isPlaying, duration, toggleAudio, hasAudio } = useCaseStudyAudio();

  return (
    <Stack gap="xl">
      <Stack gap="xs" pb="lg">
        <Stack align="flex-start" gap="lg">
          <Group justify="space-between">
            <Text size="lg" c="dimmed">
              {metadata}
            </Text>
          </Group>
          <Stack>
            <Title order={1} fz={{ base: '2.2rem', md: '2.8rem' }} lh={1.1} fw={800}>
              {title}
            </Title>
            <Text fz={{ base: 'md', md: 'xl' }}>{description}</Text>
          </Stack>

          <Group>
            {prototypeUrl && (
              <Button
                size="md"
                component="a"
                href={prototypeUrl}
                target="_blank"
                leftSection={<IconBrandFigma size={20} />}
              >
                View prototype
              </Button>
            )}
            {websiteUrl && (
              <Button size="md" component="a" href={websiteUrl} target="_blank">
                View website
              </Button>
            )}

            {/* Audio Player Button */}
            {hasAudio && (
              <Button
                variant="default"
                size="md"
                leftSection={
                  isPlaying ? (
                    <IconPlayerPauseFilled size={20} />
                  ) : (
                    <IconPlayerPlayFilled size={20} />
                  )
                }
                onClick={toggleAudio}
                disabled={!duration}
              >
                {isPlaying
                  ? 'Pause audio'
                  : duration
                    ? `Listen to case study (${duration})`
                    : 'Loading audio...'}
              </Button>
            )}
          </Group>
        </Stack>
      </Stack>

      <Image
        src={coverImage}
        alt={coverAlt}
        radius="lg"
        style={{ border: '1px solid var(--app-shell-border-color)' }}
      />

      <ChallengeProposal problem={problem} proposal={proposal} />

      {stats && stats.length > 0 && (
        <CaseStudyImpact stats={stats} description={statsDescription} />
      )}
    </Stack>
  );
}
