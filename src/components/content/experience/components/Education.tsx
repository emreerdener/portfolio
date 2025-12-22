import { Stack, Title } from '@mantine/core';
import ExperienceBlock from './ExperienceBlock';

const education = [
  {
    role: 'Bachelor of Arts - BA, Philosophy',
    company: 'The University of Texas at Austin',
    date: '2007 - 2012',
    location: 'Austin, TX',
    bullets: [],
    logoSrc: '/images/logos/UT.jpg',
  },
];

export default function Education() {
  return (
    <Stack gap="xl" p="xl">
      <Title order={4} size="sm" c="dimmed" tt="uppercase" lh={1}>
        Education
      </Title>
      <Stack gap="md">
        {education.map((edu, index) => (
          <ExperienceBlock key={index} {...edu} />
        ))}
      </Stack>
    </Stack>
  );
}
