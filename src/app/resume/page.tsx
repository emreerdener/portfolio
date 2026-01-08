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
          <Text size="xl">Staff Product Designer & Frontend Engineer</Text>
          <Text c="dimmed">erdener.emre@gmail.com • 512-740-3719 • Austin, TX</Text>
        </Stack>

        <Stack px="xl" pb="xl">
          <Text>
            I am an interdisciplinary product designer and frontend engineer. I have 8+ years of
            experience leading design, strategy, end-to-end execution, and user research, bridging
            the gap between stakeholders, engineering, and users. I have a proven track record of
            leading major product initiatives and integrating AI-driven solutions to deliver
            impactful business results.
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
