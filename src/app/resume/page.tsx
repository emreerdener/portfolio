'use client';

import { Container, Divider, Space, Stack, Text, Title } from '@mantine/core';
import MoreCaseStudies from '@/src/components/content/case-studies/components/MoreCaseStudies';
import Education from '@/src/components/content/experience/components/Education';
import Experience from '@/src/components/content/experience/components/Experience';
import TechnicalSkills from '@/src/components/content/experience/components/TechnicalSkills';

export default function ResumePage() {
  return (
    <Container size="lg" p={0} py="xl">
      <Stack>
        <Stack gap="xs">
          <Title order={1} fz="3rem">
            Emre Erdener
          </Title>
          <Text size="xl" fw={600}>
            Staff Product Designer
          </Text>
        </Stack>

        <Stack pb="xl">
          <Text size="lg">
            I’m a Staff Product Designer and Design Engineer with 10+ years of experience. I combine
            product strategy and systems thinking with AI-native design and development. I shape
            product direction, build design systems, and craft how products look, feel, and
            function.
          </Text>
        </Stack>

        <Divider />

        <Experience listSize="lg" />

        <Divider />

        <Education />

        <Divider />

        <TechnicalSkills />

        <Space h="xl" />
      </Stack>

      <MoreCaseStudies heading="My design work" />
    </Container>
  );
}
