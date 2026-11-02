import { Box, Divider, Grid, Paper, Space, Stack } from '@mantine/core';
import { FadeInUp } from '../../../animations/FadeInUp';
import { StaggerContainer } from '../../../animations/StaggerContainer';
import MoreBanner from '../../../layout/components/MoreBanner';
import ProjectCard from '../../case-studies/components/ProjectCard';
import SelectedWorkHeader from '../../case-studies/components/SelectedWorkHeader';
import { CASE_STUDIES } from '../../case-studies/data/case-studies';
import Education from '../../experience/components/Education';
import Experience from '../../experience/components/Experience';
import OtherWorkCard from '../../other-work/components/OtherWorkCard';
import AboutImageCarousel from './AboutImageCarousel';
import AboutMe from './AboutMe';
import projectClasses from '../../case-studies/components/ProjectCard.module.css';
import spacing from './ProfileSpacing.module.css';

const SELECTED_WORK_IDS = [
  'vivint-energy',
  'vivint-design-system',
  'merchant-referrals',
  'admin-checkout',
];
const selectedWork = SELECTED_WORK_IDS.flatMap((id) =>
  CASE_STUDIES.filter((study) => study.id === id)
);

export default function AboutLayout() {
  return (
    <StaggerContainer>
      <Stack className={spacing.sections}>
        <FadeInUp>
          <Grid align="center" gutter={{ base: 32, md: 48 }}>
            <Grid.Col
              span={{ base: 12, lg: 6 }}
              order={{ base: 2, lg: 1 }}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <AboutMe
                paddingTop={0}
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
          <Paper
            id="experience"
            radius="lg"
            withBorder
            shadow="sm"
            style={{ scrollMarginTop: 'calc(var(--app-shell-header-offset, 0px) + 24px)' }}
          >
            <Experience
              overview
              showDividers
              showDownload={false}
              listSize={{ base: 'sm', md: 'lg' }}
            />
            <Divider />
            <Education />
          </Paper>
        </FadeInUp>

        <FadeInUp>
          <Stack gap="lg" style={{ containerType: 'inline-size', containerName: 'project-list' }}>
            <SelectedWorkHeader />
            <div className={projectClasses.gridList}>
              {selectedWork.map((study) => (
                <ProjectCard
                  key={study.id}
                  title={study.title}
                  company={study.company}
                  description={study.description}
                  coverSrc={study.coverSrc}
                  logoSrc={study.logoSrc}
                  href={study.href}
                />
              ))}
            </div>
          </Stack>
        </FadeInUp>

        <MoreBanner visibleStudyHrefs={selectedWork.map((study) => study.href)} />

        <Box hiddenFrom="sm">
          <OtherWorkCard compact />
        </Box>

        <Space h="xl" />
      </Stack>
    </StaggerContainer>
  );
}
