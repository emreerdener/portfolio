'use client';

import { useEffect, useRef, useState } from 'react';
import { IconInfoCircle, IconPlayerPauseFilled, IconPlayerPlayFilled } from '@tabler/icons-react';
import WaveSurfer from 'wavesurfer.js';
import {
  ActionIcon,
  Box,
  Group,
  HoverCard,
  Loader,
  Paper,
  Stack,
  Text,
  Title,
  Tooltip,
  useComputedColorScheme,
} from '@mantine/core';
import { useCaseStudyAudio } from '../context/CaseStudyAudioContext';

interface WaveformPlayerProps {
  audioSrc?: string; // Optional: If provided, can be used for logging or validation, otherwise unused as audio is from context
}

export default function WaveformPlayer({}: WaveformPlayerProps) {
  const { isPlaying, toggleAudio, hasAudio, audioRef, audioError, caseStudyId } =
    useCaseStudyAudio();
  const containerRef = useRef<HTMLDivElement>(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);
  const [isReady, setIsReady] = useState(false);

  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const activeWaveColor = computedColorScheme === 'dark' ? '#424242' : '#dee2e6';

  // Update wave color when theme changes
  useEffect(() => {
    if (wavesurfer.current) {
      wavesurfer.current.setOptions({
        waveColor: activeWaveColor,
      });
    }
  }, [activeWaveColor]);

  useEffect(() => {
    if (!containerRef.current || !audioRef.current || !hasAudio) return;

    // 1. Initialize Wavesurfer with shared media element
    wavesurfer.current = WaveSurfer.create({
      container: containerRef.current,
      media: audioRef.current, // Use the shared audio element
      waveColor: activeWaveColor,
      progressColor: '#fd7e14',
      cursorColor: 'transparent',
      barWidth: 2,
      barGap: 2,
      barRadius: 99,
      height: 40,
      normalize: true,
    });

    // 2. Event Listeners
    wavesurfer.current.on('ready', () => {
      setIsReady(true);
    });

    wavesurfer.current.on('error', (err) => {
      console.error('WaveSurfer error:', err);
    });

    return () => {
      wavesurfer.current?.destroy();
    };
  }, [audioRef, hasAudio, caseStudyId]);

  if (audioError) {
    return (
      <Group
        align="center"
        gap="md"
        w="100%"
        style={{
          border: '1px solid var(--mantine-color-error)',
          padding: '12px 16px',
          borderRadius: 'var(--mantine-radius-xl)',
          backgroundColor: 'var(--mantine-color-body)',
        }}
      >
        <Text size="sm" c="red">
          Audio unavailable
        </Text>
      </Group>
    );
  }

  return (
    <Stack w="100%" gap={0} pt="sm">
      <Group wrap="nowrap" gap="xs">
        <Title order={4} size="sm" c="dimmed" tt="uppercase">
          Listen to case study
        </Title>

        <HoverCard width={210} shadow="md" position="top">
          <HoverCard.Target>
            <IconInfoCircle size={16} aria-label="Info" color="gray" />
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Text size="sm">AI-generated audio transcript for accessibility.</Text>
          </HoverCard.Dropdown>
        </HoverCard>
      </Group>
      <Paper radius="md" withBorder py="xs" px="sm" w="100%" my="sm">
        <Group align="center" gap="sm" w="100%">
          {/* Play/Pause Button */}
          <Tooltip label={`${isPlaying ? 'Pause' : 'Listen to case study'}`} position="right">
            <ActionIcon
              size="lg"
              radius="md"
              variant="outline"
              disabled={!isReady}
              onClick={toggleAudio} // Use context toggle
              style={{ flexShrink: 0 }}
              w={42}
              h={42}
            >
              {isReady ? (
                isPlaying ? (
                  <IconPlayerPauseFilled size={18} />
                ) : (
                  <IconPlayerPlayFilled size={18} />
                )
              ) : (
                <Loader size="xs" color="white" />
              )}
            </ActionIcon>
          </Tooltip>
          {/* Waveform Container */}
          <Box style={{ flex: 1, position: 'relative', height: '40px' }} w="100%">
            {/* The actual waveform canvas gets injected here */}
            <div ref={containerRef} style={{ width: '100%', height: '100%' }} />

            {/* Fallback loading text if slow */}
            {!isReady && (
              <Text
                size="sm"
                c="dimmed"
                style={{ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)' }}
              >
                Loading case study audio...
              </Text>
            )}
          </Box>
        </Group>
      </Paper>
    </Stack>
  );
}
