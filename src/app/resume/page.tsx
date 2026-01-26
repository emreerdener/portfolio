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
