import { useRef, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import { Carousel } from '@mantine/carousel';
import { AspectRatio, Group, Image, SimpleGrid, Stack, Text, Title } from '@mantine/core';

const images = [
  '/images/about/1.jpg',
  '/images/about/2.jpg',
  '/images/about/3.jpg',
  '/images/about/4.jpg',
];

// Data array for easy management
const funFacts = [
  { emoji: '👯', text: 'A twin' },
  { emoji: '🦒', text: 'Taller than a baby giraffe: 6\'8" (2m)' },
  { emoji: '🎲', text: 'Riding my bike and playing backgammon' },
  { emoji: '🇹🇷', text: 'Named after a Sufi mystic and poet from the 13th century' },
  { emoji: '🚲', text: 'Building a cycling app' },
  { emoji: '🪵', text: 'Practicing woodworking' },
];

export default function AboutMe() {
  const autoplay = useRef(Autoplay({ delay: 8000, stopOnInteraction: true }));
  const fade = useRef(Fade());
  const [embla, setEmbla] = useState<any>(null);

  const handleNext = () => {
    if (embla) {
      embla.scrollNext();
    }
  };

  return (
    <Stack gap="xl" p="xl">
      {/* Image Carousel */}
      <AspectRatio ratio={16 / 15}>
        <Carousel
          withIndicators={false}
          withControls={false}
          height="100%"
          plugins={[autoplay.current, fade.current]}
          getEmblaApi={setEmbla}
          style={{
            cursor: 'pointer',
            border: '1px solid var(--app-shell-border-color)',
            borderRadius: 'var(--mantine-radius-lg)',
            overflow: 'hidden',
          }}
          onClick={handleNext}
          emblaOptions={{ loop: true, duration: 100 }}
        >
          {images.map((src, index) => (
            <Carousel.Slide key={index}>
              <Image src={src} alt={`About me slide ${index + 1}`} w="100%" h="100%" fit="cover" />
            </Carousel.Slide>
          ))}
        </Carousel>
      </AspectRatio>

      <Stack gap="xs">
        <Title order={1}>Hello, I'm Emre</Title>
        <Text c="dimmed">
          I am an interdisciplinary product designer helping businesses conceptualize, design, and
          build software, systems, experiences, websites, and brands.
        </Text>
      </Stack>

      <Stack gap="md">
        <Title order={4} size="sm" c="dimmed" tt="uppercase" lh={1}>
          I am also...
        </Title>
        <SimpleGrid cols={{ base: 1 }} spacing="md">
          {funFacts.map((item, index) => (
            <Group wrap="nowrap" gap="xs" key={index}>
              <Text size="1.4rem" lh={1}>
                {item.emoji}
              </Text>
              <Text size="sm" fw={500} lh={1.4}>
                {item.text}
              </Text>
            </Group>
          ))}
        </SimpleGrid>
      </Stack>
    </Stack>
  );
}
