'use client';

import { useEffect, useRef, useState } from 'react';
import { IconPlayerPauseFilled, IconPlayerPlayFilled } from '@tabler/icons-react';
import WaveSurfer from 'wavesurfer.js';
import { ActionIcon, Loader, Text, useComputedColorScheme } from '@mantine/core';
import { useCaseStudyAudio } from '../context/CaseStudyAudioContext';
import classes from './toolbar.module.css';

const formatTime = (seconds: number) =>
  `${Math.floor(seconds / 60)}:${Math.floor(seconds % 60)
    .toString()
    .padStart(2, '0')}`;

export default function WaveformPlayer() {
  const { isPlaying, toggleAudio, hasAudio, audioRef, audioError, caseStudyId } =
    useCaseStudyAudio();
  const containerRef = useRef<HTMLDivElement>(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [waveUnavailable, setWaveUnavailable] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const scheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const waveColor = scheme === 'dark' ? '#696969' : '#adb5bd';

  useEffect(() => {
    wavesurfer.current?.setOptions({ waveColor });
  }, [waveColor]);

  useEffect(() => {
    setIsReady(false);
    setWaveUnavailable(false);
    setCurrentTime(0);
    setDuration(0);
    const media = audioRef.current;
    if (!containerRef.current || !media || !hasAudio) {
      return;
    }
    const wave = WaveSurfer.create({
      container: containerRef.current,
      media,
      waveColor,
      progressColor: '#fd7e14',
      cursorColor: 'transparent',
      barWidth: 2,
      barGap: 2,
      barRadius: 99,
      height: 36,
      normalize: true,
      interact: true,
      dragToSeek: true,
    });
    wavesurfer.current = wave;
    wave.on('ready', () => setIsReady(true));
    let waveformFailed = false;
    wave.on('error', () => {
      waveformFailed = true;
      setWaveUnavailable(true);
      setIsReady(media.readyState >= 1);
    });
    const update = () => {
      if (waveformFailed && media.readyState >= 1) {
        setIsReady(true);
      }
      setCurrentTime(media.currentTime);
      setDuration(Number.isFinite(media.duration) ? media.duration : 0);
    };
    media.addEventListener('timeupdate', update);
    media.addEventListener('loadedmetadata', update);
    update();
    return () => {
      media.removeEventListener('timeupdate', update);
      media.removeEventListener('loadedmetadata', update);
      wave.destroy();
      wavesurfer.current = null;
    };
  }, [audioRef, hasAudio, caseStudyId]);

  return (
    <div
      className={classes.player}
      role="group"
      aria-label="Case study audio"
      aria-busy={!isReady && !audioError}
      data-ready={isReady || undefined}
      data-wave-unavailable={waveUnavailable || undefined}
      data-error={audioError || undefined}
    >
      <ActionIcon
        size={44}
        variant="light"
        disabled={!isReady || audioError}
        onClick={toggleAudio}
        aria-label={isPlaying ? 'Pause case study audio' : 'Play case study audio'}
        style={{ flexShrink: 0 }}
      >
        {audioError || isReady ? (
          isPlaying ? (
            <IconPlayerPauseFilled size={18} />
          ) : (
            <IconPlayerPlayFilled size={18} />
          )
        ) : (
          <Loader size={16} />
        )}
      </ActionIcon>
      {audioError && (
        <Text size="sm" className={classes.audioLabel}>
          Audio unavailable
        </Text>
      )}
      <div className={classes.waveTrack} aria-hidden="true">
        <div className={classes.wavePlaceholder}>
          {Array.from({ length: 180 }, (_, index) => (
            <span
              key={index}
              style={{ height: `${35 + ((index * 17 + index * index * 7) % 66)}%` }}
            />
          ))}
        </div>
        <div className={classes.waveform} ref={containerRef} />
      </div>
      <input
        className={classes.seek}
        type="range"
        min={0}
        max={duration || 1}
        step={0.1}
        value={currentTime}
        disabled={!isReady || audioError}
        aria-label="Seek case study audio"
        aria-valuetext={`${formatTime(currentTime)} of ${formatTime(duration)}`}
        onChange={(event) => {
          if (audioRef.current) {
            audioRef.current.currentTime = Number(event.target.value);
          }
          setCurrentTime(Number(event.target.value));
        }}
      />
      <Text size="xs" c="dimmed" className={classes.time}>
        {formatTime(currentTime)} / {formatTime(duration)}
      </Text>
    </div>
  );
}
