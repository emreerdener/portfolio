'use client';

import { AspectRatio, Image, SimpleGrid, Space, Stack } from '@mantine/core';
import { FadeIn } from '@/src/components/animations/FadeIn';
import MoreCaseStudies from '@/src/components/content/case-studies/components/MoreCaseStudies';

const IMAGES = [
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/woodworking/bee-cover.jpg',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/woodworking/bee-trace.jpg',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/woodworking/bee-cut.jpg',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/woodworking/bee-stain.jpg',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/woodworking/bee-final1.jpg',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/woodworking/bee-final-light.jpg',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/woodworking/lines-grass.jpg',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/woodworking/lines-couch.jpg',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/woodworking/elephant-trace.jpg',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/woodworking/elephant-cut.jpg',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/woodworking/elephant-final.jpg',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/woodworking/buffalo-raw.jpg',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/woodworking/buffalo-final.jpg',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/woodworking/thunder-bird.jpg',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/woodworking/bass.jpg',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/woodworking/goat.jpg',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/woodworking/sun.jpg',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/woodworking/cocopeli.jpg',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/woodworking/cactus-raw.jpg',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/woodworking/cactus-final.jpg',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/woodworking/skeleton-trace.jpg',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/woodworking/skeleton-grass.jpg',
];

export default function Woodworking() {
  return (
    <Stack gap="xl">
      <SimpleGrid cols={{ base: 1, xs: 2, md: 3 }} spacing="lg">
        {IMAGES.map((src, index) => (
          <FadeIn key={src} delay={index * 0.02}>
            <AspectRatio
              ratio={1}
              style={{
                borderRadius: 'var(--mantine-radius-lg)',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <Image
                src={src}
                alt={`Woodworking project ${index + 1}`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fit="cover"
              />
            </AspectRatio>
          </FadeIn>
        ))}
      </SimpleGrid>

      <Space h="xl" />
      <MoreCaseStudies />
      <Space h="xl" />
    </Stack>
  );
}
