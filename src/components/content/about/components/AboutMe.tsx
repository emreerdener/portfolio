import { IconBrandLinkedin, IconFileCv } from '@tabler/icons-react';
import { Button, Group, MantineSize, Stack, StyleProp, Text, Title } from '@mantine/core';

interface AboutMeProps {
  titleSize?: StyleProp<MantineSize | (string & {}) | number>;
  bodySize?: StyleProp<MantineSize | (string & {}) | number>;
  paddingTop?: StyleProp<MantineSize | (string & {}) | number>;
}

export default function AboutMe({
  titleSize,
  bodySize = 'md',
  paddingTop = { base: 0, lg: 'lg' },
}: AboutMeProps) {
  return (
    <Stack gap="xl" style={{ flex: 1 }}>
      <Stack gap="xl">
        {/* Text */}
        <Stack gap="xs" pt={paddingTop}>
          <Title order={1} fz={titleSize}>
            Hello, I'm Emre
          </Title>
          <Text fz={bodySize}>
            I’m a Staff Product Designer and Design Engineer with 10+ years of experience. I bring
            strategy, process, and design thinking to my work across design, engineering, and
            product. AI-native design and development enables me to ship thoughtful, well-crafted
            products.
          </Text>
        </Stack>

        {/* Buttons */}
        <Group gap="lg" mb="md">
          <Button
            component="a"
            href="/Emre-Erdener-Resume.pdf"
            target="_blank"
            size="md"
            leftSection={<IconFileCv size={24} />}
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
      </Stack>
    </Stack>
  );
}
