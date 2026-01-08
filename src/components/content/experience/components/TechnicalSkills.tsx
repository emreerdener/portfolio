import { Badge, Group, Stack, Text, Title } from '@mantine/core';

export default function TechnicalSkills() {
  const TECHNICAL_SKILLS = [
    {
      category: 'AI & Emerging Tech',
      skills: [
        'Generative AI',
        'LLM Integration',
        'AI-Driven UX',
        'Prompt Engineering',
        'Predictive Analytics',
        'Voice UI (VUI)',
        'IoT Design',
      ],
    },
    {
      category: 'Design & Strategy',
      skills: [
        'Product Strategy',
        'Growth Design',
        'Data-Driven Design',
        'User Research',
        'Interaction Design',
        'Visual Design',
        'Information Architecture',
        'Wireframing',
        'Rapid Prototyping',
        'Usability Testing',
        'Journey Mapping',
        'Motion Design',
        'Service Design',
      ],
    },
    {
      category: 'Leadership & Ops',
      skills: [
        'Design Leadership',
        'Stakeholder Management',
        'Mentorship',
        'Design Operations (DesignOps)',
        'Cross-functional Collaboration',
      ],
    },
    {
      category: 'Engineering',
      skills: [
        'Full-Stack Development',
        'React',
        'Next.js',
        'TypeScript',
        'Node.js',
        'JavaScript (ES6+)',
        'Jest',
        'React Testing Library',
        'Storybook',
        'Git/GitHub',
        'CI/CD Workflows',
        'HTML5 / CSS3',
      ],
    },
    {
      category: 'Design Systems',
      skills: [
        'System Architecture',
        'Atomic Design',
        'Token Architecture',
        'Component Library Management',
        'Accessibility Standards (WCAG)',
        'Documentation',
      ],
    },
    {
      category: 'Tools',
      skills: [
        'Figma',
        'Sketch',
        'Adobe Creative Suite (XD, Photoshop, Illustrator, AfterEffects)',
        'Amplitude/Mixpanel',
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
