'use client';

import { Container, Divider, Space, Stack, Text, Title } from '@mantine/core';
import MoreCaseStudies from '@/src/components/content/case-studies/components/MoreCaseStudies';
import Education from '@/src/components/content/experience/components/Education';
import Experience from '@/src/components/content/experience/components/Experience';
import TechnicalSkills from '@/src/components/content/experience/components/TechnicalSkills';

export default function ResumePage() {
  return (
    <Container size="lg" p={0}>
      <Stack>
        <Stack gap="xs" px="xl">
          <Title order={1}>Emre Erdener</Title>
          <Text size="xl">Lead Product Designer & Frontend Engineer</Text>
          <Text c="dimmed">erdener.emre@gmail.com • 512-740-3719 • Austin, TX</Text>
        </Stack>

        <Stack px="xl" pb="xl">
          <Text>
            I am an interdisciplinary product designer with full-stack engineering experience. I
            have over 8 years of experience leading product strategy, end-to-end execution, and user
            research, bridging the gap between stakeholders, design, and engineering. I have a
            proven track record of spearheading major product initiatives to deliver impactful
            business results.
          </Text>
        </Stack>

        <Divider />

        <Experience defaultExpanded listSize="lg" />

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
