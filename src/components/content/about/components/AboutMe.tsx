import Link from 'next/link';
import { IconBrandLinkedin, IconFile } from '@tabler/icons-react';
import {
  Anchor,
  Button,
  Group,
  MantineSize,
  Paper,
  SimpleGrid,
  Stack,
  StyleProp,
  Text,
  Title,
} from '@mantine/core';

const funFacts = [
  { emoji: '👯', text: 'I have a twin sister and an older sister' },
  { emoji: '🦒', text: `I am taller than a baby giraffe: 6'8" (~2 meters)` },
  { emoji: '🎲', text: 'I love playing backgammon' },
  {
    emoji: '🇹🇷',
    text: 'I am half Turkish, named after a Sufi mystic and poet from the 13th century',
  },
  { emoji: '🚲', text: 'I enjoy riding my titanium gravel bike' },
  { emoji: '🪵', text: 'I practice crafting wooden sculptures', link: '/woodworking' },
];

interface AboutMeProps {
  titleSize?: StyleProp<MantineSize | (string & {}) | number>;
  bodySize?: StyleProp<MantineSize | (string & {}) | number>;
  emojiSize?: StyleProp<MantineSize | (string & {}) | number>;
  funFactSize?: StyleProp<MantineSize | (string & {}) | number>;
  paddingTop?: StyleProp<MantineSize | (string & {}) | number>;
  padding?: StyleProp<MantineSize | (string & {}) | number>;
}

export default function AboutMe({
  titleSize,
  bodySize = 'lg',
  emojiSize = '1.5rem',
  funFactSize = 'md',
  paddingTop = { base: 0, lg: 'lg' },
  padding = { base: 'lg', lg: 'xl' },
}: AboutMeProps) {
  return (
    <Stack gap="xl">
      {/* Text */}
      <Stack gap="xs" pt={paddingTop}>
        <Title order={1} fz={titleSize}>
          Hello, I'm Emre
        </Title>
        <Text fz={bodySize}>
          I am an interdisciplinary product designer and frontend engineer. I have 8+ years of
          experience leading design, strategy, end-to-end execution, and user research, bridging the
          gap between stakeholders, engineering, and users.
        </Text>
      </Stack>

      {/* Buttons */}
      <Group gap="lg">
        <Button
          component="a"
          href="/Emre-Erdener-Resume.pdf"
          target="_blank"
          size="md"
          leftSection={<IconFile size={24} />}
        >
          Resume
        </Button>
        <Button
          component="a"
          href="https://www.linkedin.com/in/emre-erdener/"
          target="_blank"
          size="md"
          variant="default"
          leftSection={<IconBrandLinkedin size={24} />}
        >
          LinkedIn
        </Button>
      </Group>

      {/* Fun facts */}
      <Paper withBorder radius="lg" p={padding}>
        <Stack gap="lg">
          <Title order={4} size="sm" c="dimmed" tt="uppercase" lh={1}>
            Fun facts
          </Title>
          <SimpleGrid cols={{ base: 1 }} spacing="lg">
            {funFacts.map((item, index) => (
              <Group wrap="nowrap" gap="md" key={index}>
                <Text fz={emojiSize} lh={1}>
                  {item.emoji}
                </Text>
                {item.link ? (
                  <Anchor
                    component={Link}
                    href={item.link}
                    fz={funFactSize}
                    fw={400}
                    lh={1.4}
                    c="var(--mantine-color-text)"
                    style={{
                      textDecoration: 'underline',
                      textDecorationColor: 'var(--mantine-color-dimmed)',
                    }}
                  >
                    {item.text}
                  </Anchor>
                ) : (
                  <Text fz={funFactSize} fw={400} lh={1.4}>
                    {item.text}
                  </Text>
                )}
              </Group>
            ))}
          </SimpleGrid>
        </Stack>
      </Paper>
    </Stack>
  );
}
