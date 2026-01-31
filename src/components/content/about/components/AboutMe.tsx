import { IconBrandLinkedin, IconFile } from '@tabler/icons-react';
import { Button, Group, MantineSize, Stack, StyleProp, Text, Title } from '@mantine/core';
import { FunFactSlotMachine } from './FunFactSlotMachine';

interface AboutMeProps {
  titleSize?: StyleProp<MantineSize | (string & {}) | number>;
  bodySize?: StyleProp<MantineSize | (string & {}) | number>;
  paddingTop?: StyleProp<MantineSize | (string & {}) | number>;
}

export default function AboutMe({
  titleSize,
  bodySize = 'lg',
  paddingTop = { base: 0, lg: 'lg' },
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
      <Group gap="lg" mb="md">
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

      <FunFactSlotMachine />
    </Stack>
  );
}
