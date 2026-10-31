/** @jest-environment node */
import { NextRequest } from 'next/server';
import { GET } from '../route';

afterEach(() => jest.restoreAllMocks());

test('forwards audio byte ranges and preserves partial response headers', async () => {
  const fetchMock = jest.spyOn(global, 'fetch').mockResolvedValue(
    new Response('audio', {
      status: 206,
      headers: {
        'Content-Type': 'audio/mpeg',
        'Accept-Ranges': 'bytes',
        'Content-Range': 'bytes 100-104/500',
        'Content-Length': '5',
      },
    })
  );
  const response = await GET(
    new NextRequest('http://localhost/api/proxy-audio?url=https://example.com/audio.mp3', {
      headers: { Range: 'bytes=100-104' },
    })
  );

  expect(fetchMock).toHaveBeenCalledWith('https://example.com/audio.mp3', {
    headers: { Range: 'bytes=100-104' },
  });
  expect(response.status).toBe(206);
  expect(response.headers.get('Content-Range')).toBe('bytes 100-104/500');
  expect(response.headers.get('Accept-Ranges')).toBe('bytes');
  expect(response.headers.get('Content-Length')).toBe('5');
  expect(await response.text()).toBe('audio');
});
