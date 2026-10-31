import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get('url');

  if (!url) {
    return new NextResponse('Missing URL parameter', { status: 400 });
  }

  try {
    const range = request.headers.get('range');
    const response = await fetch(url, {
      headers: range ? { Range: range } : undefined,
    });

    if (!response.ok && response.status !== 416) {
      return new NextResponse(`Failed to fetch audio: ${response.statusText}`, {
        status: response.status,
      });
    }

    const contentType = response.headers.get('Content-Type') || 'audio/mpeg';
    const headers = new Headers({
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=31536000, immutable',
    });
    for (const name of ['Accept-Ranges', 'Content-Range', 'Content-Length']) {
      const value = response.headers.get(name);
      if (value) {
        headers.set(name, value);
      }
    }

    return new NextResponse(response.body, {
      status: response.status,
      headers,
    });
  } catch (error) {
    console.error('Proxy error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
