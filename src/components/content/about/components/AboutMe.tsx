import { IconBrandLinkedin, IconFile } from '@tabler/icons-react';
import { Button, Group, MantineSize, Paper, Stack, StyleProp, Text, Title } from '@mantine/core';
import CurrentProject from './CurrentProject';
import spacing from './ProfileSpacing.module.css';

interface AboutMeProps {
  showCurrentProject?: boolean;
  titleSize?: StyleProp<MantineSize | (string & {}) | number>;
  bodySize?: StyleProp<MantineSize | (string & {}) | number>;
  paddingTop?: StyleProp<MantineSize | (string & {}) | number>;
}

export default function AboutMe({
  showCurrentProject = true,
  titleSize,
  bodySize = 'lg',
  paddingTop = { base: 0, lg: 'lg' },
}: AboutMeProps) {
  return (
    <Stack
      gap="xl"
      className={showCurrentProject ? spacing.sections : undefined}
      style={{ flex: 1 }}
    >
      <Stack gap="xl">
        {/* Text */}
        <Stack gap="xs" pt={paddingTop}>
          <Title order={1} fz={titleSize}>
            Hello, I'm Emre
          </Title>
          <Text fz={bodySize}>
            I’m a Staff Product Designer and Design Engineer with 10+ years of experience. I bring
            strategy, systems thinking, and code together to turn complexity into intuitive
            products. My technical background helps me bridge design and development, using AI to
            move from concepts to working prototypes and shipped experiences.
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
      </Stack>
      {showCurrentProject && (
        <Paper mt="auto" withBorder radius="lg" p={{ base: 'lg', lg: 'xl' }} shadow="sm">
          <CurrentProject />
        </Paper>
      )}
    </Stack>
  );
}
