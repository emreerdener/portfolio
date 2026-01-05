import React from 'react';
import { Badge, Group, Stack, Text, Title } from '@mantine/core';

export default function TechnicalSkills() {
  const TECHNICAL_SKILLS = [
    {
      category: 'Design & Strategy',
      skills: [
        'Product Strategy',
        'User Research',
        'Interaction Design',
        'Visual Design',
        'Information Architecture',
        'Wireframing',
        'Rapid Prototyping',
        'Usability Testing',
        'Journey Mapping',
        'Motion Design',
      ],
    },
    {
      category: 'Engineering & Development',
      skills: [
        'Full-Stack Development',
        'React',
        'Next.js',
        'Node.js',
        'TypeScript',
        'JavaScript (ES6+)',
        'HTML5',
        'CSS3',
        'Git/GitHub',
        'CI/CD Workflows',
      ],
    },
    {
      category: 'Design Systems',
      skills: [
        'Atomic Design',
        'Token Architecture',
        'Component Library Management',
        'Accessibility Standards (WCAG)',
      ],
    },
    {
      category: 'Tools',
      skills: [
        'Figma',
        'Sketch',
        'Adobe Creative Suite (XD, Photoshop, Illustrator, AfterEffects)',
      ],
    },
  ];

  return (
    <Stack p="xl">
      <Title order={4} size="sm" c="dimmed" tt="uppercase" mb="sm">
        Technical Skills
      </Title>
      <Stack gap="lg">
        {TECHNICAL_SKILLS.map((group) => (
          <Stack key={group.category} gap="xs">
            <Text size="sm" fw={500} c="dimmed">
              {group.category}
            </Text>
            <Group gap="xs">
              {group.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="light"
                  color="gray"
                  radius="sm"
                  size="lg"
                  style={{
                    textTransform: 'none',
                    fontWeight: 500,
                    color: 'var(--mantine-color-text)',
                  }}
                >
                  {skill}
                </Badge>
              ))}
            </Group>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}
