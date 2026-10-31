import { Stack, Title } from '@mantine/core';
import { FadeInUp } from '../../../animations/FadeInUp';
import { StaggerContainer } from '../../../animations/StaggerContainer';
import { education } from '../data/education';
import ExperienceBlock from './ExperienceBlock';

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
