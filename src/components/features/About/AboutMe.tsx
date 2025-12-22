import { IconBrandLinkedin, IconFile } from '@tabler/icons-react';
import {
  Button,
  Group,
  MantineSize,
  SimpleGrid,
  Stack,
  StyleProp,
  Text,
  Title,
} from '@mantine/core';

// Data array for easy management
const funFacts = [
  { emoji: '👯', text: 'A twin' },
  { emoji: '🦒', text: 'Taller than a baby giraffe: 6\'8" (2m)' },
  { emoji: '🎲', text: 'Playing backgammon' },
  { emoji: '🇹🇷', text: 'Named after a Sufi mystic & poet from the 13th century' },
  { emoji: '🚲', text: 'Riding my bicycle' },
];

interface AboutMeProps {
  titleSize?: StyleProp<MantineSize | (string & {}) | number>;
  bodySize?: StyleProp<MantineSize | (string & {}) | number>;
  emojiSize?: StyleProp<MantineSize | (string & {}) | number>;
  funFactSize?: StyleProp<MantineSize | (string & {}) | number>;
}

export default function AboutMe({
  titleSize,
  bodySize = 'lg',
  emojiSize = '1.4rem',
  funFactSize = 'sm',
}: AboutMeProps) {
  return (
    <Stack gap="xl">
      <Stack gap="xs">
        <Title order={1} fz={titleSize}>
          Hello, I'm Emre
        </Title>
        <Text c="dimmed" fz={bodySize} lh={1.3}>
          I am an interdisciplinary designer, helping businesses conceptualize and build software,
          systems, experiences, websites, and brands.
        </Text>
      </Stack>

      <Stack gap="md">
        <Title order={4} size="sm" c="dimmed" tt="uppercase" lh={1}>
          I'm also...
        </Title>
        <SimpleGrid cols={{ base: 1 }} spacing="md">
          {funFacts.map((item, index) => (
            <Group wrap="nowrap" gap="xs" key={index}>
              <Text fz={emojiSize} lh={1}>
                {item.emoji}
              </Text>
              <Text fz={funFactSize} fw={500} lh={1.4}>
                {item.text}
              </Text>
            </Group>
          ))}
        </SimpleGrid>
      </Stack>
      <Group gap="lg">
        <Button size="md" leftSection={<IconFile size={24} />}>
          Resume
        </Button>
        <Button size="md" variant="default" leftSection={<IconBrandLinkedin size={24} />}>
          LinkedIn
        </Button>
      </Group>
    </Stack>
  );
}
