import { IconBrandLinkedin, IconFileCv } from '@tabler/icons-react';
import { Button, Group, MantineSize, Stack, StyleProp, Text, Title } from '@mantine/core';
import { FadeInUp } from '../../../animations/FadeInUp';
import { StaggerContainer } from '../../../animations/StaggerContainer';

interface AboutMeProps {
  showActions?: boolean;
  titleSize?: StyleProp<MantineSize | (string & {}) | number>;
  bodySize?: StyleProp<MantineSize | (string & {}) | number>;
  paddingTop?: StyleProp<MantineSize | (string & {}) | number>;
}

export default function AboutMe({
  showActions = true,
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
            I’m a Staff Product Designer and Design Engineer with 10+ years of experience. I combine
            product strategy and systems thinking with AI-native design and development. I shape
            product direction, build design systems, and craft how products look, feel, and
            function.
          </Text>
        </Stack>

        {showActions && <AboutMeActions />}
      </Stack>
    </Stack>
  );
}

export function AboutMeActions() {
  return (
    <StaggerContainer>
      <Group gap="lg" mb="md">
        <FadeInUp>
          <Button
            component="a"
            href="/Emre-Erdener-Resume.pdf"
            target="_blank"
            size="md"
            leftSection={<IconFileCv size={24} />}
          >
            Resume
          </Button>
        </FadeInUp>
        <FadeInUp>
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
        </FadeInUp>
      </Group>
    </StaggerContainer>
  );
}
