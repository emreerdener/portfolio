'use client';

import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

interface AudioContextType {
  isPlaying: boolean;
  duration: string | null;
  toggleAudio: () => void;
  audioError: boolean;
  hasAudio: boolean;
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

const CaseStudyAudioContext = createContext<AudioContextType | null>(null);

export const useCaseStudyAudio = () => {
  const context = useContext(CaseStudyAudioContext);
  if (!context) {
    throw new Error('useCaseStudyAudio must be used within a CaseStudyAudioProvider');
  }
  return context;
};

interface CaseStudyAudioProviderProps {
  caseStudyId?: string;
  children: React.ReactNode;
}

export function CaseStudyAudioProvider({ caseStudyId, children }: CaseStudyAudioProviderProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState<string | null>(null);
  const [audioError, setAudioError] = useState(false);

  // Reset state when case study changes
  useEffect(() => {
    setIsPlaying(false);
    setAudioError(false);
    setDuration(null);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      // Force reload to pick up new source
      audioRef.current.load();
    }
  }, [caseStudyId]);

  const audioSrc = caseStudyId
    ? `/api/proxy-audio?url=${encodeURIComponent(
        `https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/audio/${caseStudyId}.mp3`
      )}`
    : undefined;

  const toggleAudio = () => {
    if (audioRef.current && !audioError) {
      if (audioRef.current.paused) {
        audioRef.current.play().catch((err) => {
          console.error('Playback failed:', err);
        });
      } else {
        audioRef.current.pause();
      }
    }
  };

  const formatTime = (seconds: number) => {
    if (!seconds) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <CaseStudyAudioContext.Provider
      value={{
        isPlaying,
        duration,
        toggleAudio,
        audioError,
        hasAudio: !!caseStudyId && !audioError,
        audioRef,
      }}
    >
      {caseStudyId && (
        <audio
          ref={audioRef}
          src={audioSrc}
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
          onLoadedMetadata={(e) => {
            const seconds = e.currentTarget.duration;
            if (seconds !== Infinity) {
              setDuration(formatTime(seconds));
            }
          }}
          onError={() => {
            console.warn(`Audio missing for ${caseStudyId}`);
            setAudioError(true);
            setIsPlaying(false);
          }}
        />
      )}
      {children}
    </CaseStudyAudioContext.Provider>
  );
}
