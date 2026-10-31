import { act, fireEvent, render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import WaveformPlayer from '../WaveformPlayer';

const mockDestroy = jest.fn();
const mockToggle = jest.fn();
const mockListeners: Record<string, (...args: any[]) => void> = {};
const mockMedia = document.createElement('audio');
const mockAudioRef = { current: mockMedia };

jest.mock('wavesurfer.js', () => ({
  __esModule: true,
  default: {
    create: () => ({
      on: (event: string, callback: (...args: any[]) => void) => {
        mockListeners[event] = callback;
      },
      destroy: mockDestroy,
      setOptions: jest.fn(),
    }),
  },
}));

jest.mock('../../context/CaseStudyAudioContext', () => ({
  useCaseStudyAudio: () => ({
    isPlaying: false,
    toggleAudio: mockToggle,
    hasAudio: true,
    audioRef: mockAudioRef,
    audioError: false,
    caseStudyId: 'test-study',
  }),
}));

test('keeps audio usable when waveform decoding fails and cleans up on unmount', () => {
  Object.defineProperty(mockMedia, 'readyState', { configurable: true, value: 1 });
  Object.defineProperty(mockMedia, 'duration', { configurable: true, value: 120 });
  const { unmount } = render(
    <MantineProvider>
      <WaveformPlayer />
    </MantineProvider>
  );
  const play = screen.getByRole('button', { name: 'Play case study audio' });
  expect(play).toBeDisabled();

  act(() => mockListeners.error(new Error('Waveform decode failed')));
  expect(play).toBeEnabled();
  expect(screen.getByRole('group', { name: 'Case study audio' })).toHaveAttribute(
    'data-wave-unavailable'
  );
  fireEvent.click(play);
  expect(mockToggle).toHaveBeenCalledTimes(1);

  fireEvent.change(screen.getByRole('slider'), { target: { value: '30' } });
  expect(mockMedia.currentTime).toBe(30);
  unmount();
  expect(mockDestroy).toHaveBeenCalledTimes(1);
});
