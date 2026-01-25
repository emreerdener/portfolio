import { Stack, Title } from '@mantine/core';
import { FadeInUp } from '../../../animations/FadeInUp';
import { StaggerContainer } from '../../../animations/StaggerContainer';
import ExperienceBlock from './ExperienceBlock';

const education = [
  {
    role: 'Bachelor of Arts - BA, Philosophy',
    company: 'The University of Texas at Austin',
    date: '2007 - 2012',
    location: 'Austin, TX',
    bullets: [],
    logoSrc: '/images/logos/experience/UT.jpg',
  },
];

export default function Education() {
  return (
    <Stack gap="xl" p={{ base: 'lg', lg: 'xl' }}>
      <Title order={4} size="sm" c="dimmed" tt="uppercase" lh={1}>
        Education
      </Title>
      <StaggerContainer>
        <Stack gap="md">
          {education.map((edu, index) => (
            <FadeInUp key={index}>
              <ExperienceBlock {...edu} />
            </FadeInUp>
          ))}
        </Stack>
      </StaggerContainer>
    </Stack>
  );
}
