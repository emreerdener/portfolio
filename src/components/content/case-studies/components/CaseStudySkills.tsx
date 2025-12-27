'use client';

import { Badge, Group, Stack, Text, Title } from '@mantine/core';

interface CaseStudySkillsProps {
  skills: string[];
}

export default function CaseStudySkills({ skills }: CaseStudySkillsProps) {
  return (
    <Stack gap="lg" py="xl">
      <Stack gap="xs">
        <Title order={2}>Skills & competencies</Title>
        <Text c="dimmed" size="lg">
          Key areas of expertise and methodologies applied during this project.
        </Text>
      </Stack>
      <Group gap="sm">
        {skills.map((skill) => (
          <Badge
            key={skill}
            size="lg"
            variant="light"
            color="gray"
            radius="sm"
            style={{ textTransform: 'none', fontWeight: 500 }}
          >
            {skill}
          </Badge>
        ))}
      </Group>
    </Stack>
  );
}
