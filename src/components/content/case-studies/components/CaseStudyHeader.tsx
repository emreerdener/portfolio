'use client';

import { IconBrandFigma } from '@tabler/icons-react';
import { Button, Group, Image, Stack, Text, Title } from '@mantine/core';
import CaseStudyImpact from './CaseStudyImpact';
import ChallengeProposal from './ChallengeProposal';
import WaveformPlayer from './WaveformPlayer';

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
  problem,
  proposal,
  stats,
  statsDescription,
}: CaseStudyHeaderProps) {
  const rawAudioSrc = id
    ? `https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/audio/${id}.mp3`
    : undefined;
  const audioSrc = rawAudioSrc
    ? `/api/proxy-audio?url=${encodeURIComponent(rawAudioSrc)}`
    : undefined;
  return (
    <Stack gap="xl">
      {/* Text and audio player*/}
      <Stack align="flex-start" gap="lg">
        <Text size="lg" c="dimmed">
          {metadata}
        </Text>

        {/* Text */}
        <Stack>
          <Title order={1} fz={{ base: '2.2rem', md: '2.8rem' }} lh={1.1} fw={800}>
            {title}
          </Title>
          <Text fz={{ base: 'md', md: 'xl' }}>{description}</Text>
        </Stack>

        {audioSrc && <WaveformPlayer />}
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
