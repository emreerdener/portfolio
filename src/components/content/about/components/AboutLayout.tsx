import { Divider, Grid, Paper, Space, Stack } from '@mantine/core';
import { FadeInUp } from '../../../animations/FadeInUp';
import { StaggerContainer } from '../../../animations/StaggerContainer';
import MoreBanner from '../../../layout/components/MoreBanner';
import Education from '../../experience/components/Education';
import Experience from '../../experience/components/Experience';
import TechnicalSkills from '../../experience/components/TechnicalSkills';
import AboutImageCarousel from './AboutImageCarousel';
import AboutMe from './AboutMe';

export default function AboutLayout() {
  return (
    <StaggerContainer>
      <Stack gap="xl" px={{ base: 0, lg: 'lg' }}>
        <FadeInUp>
          <Grid align="stretch" gutter="xl">
            <Grid.Col span={{ base: 12, lg: 6 }} order={{ base: 2, lg: 1 }}>
              <AboutMe
                titleSize={{ base: '2.5rem', sm: '3.5rem' }}
                bodySize={{ base: 'lg', md: '1.4rem' }}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 6 }} order={{ base: 1, lg: 2 }}>
              <AboutImageCarousel />
            </Grid.Col>
          </Grid>
        </FadeInUp>

        <FadeInUp>
          <Paper radius="lg" withBorder shadow="sm">
            <Experience defaultExpanded listSize={{ base: 'sm', md: 'lg' }} />
            <Divider />
            <Education />
          </Paper>
        </FadeInUp>

        <FadeInUp>
          <MoreBanner />
        </FadeInUp>

        <Space h="xl" />
      </Stack>
    </StaggerContainer>
  );
}
