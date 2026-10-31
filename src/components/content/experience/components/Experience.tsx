import { IconDownload } from '@tabler/icons-react';
import { Button, Divider, Group, MantineSize, Stack, StyleProp, Title } from '@mantine/core';
import { JOBS } from '@/src/components/content/experience/data/jobs';
import { FadeInUp } from '../../../animations/FadeInUp';
import { StaggerContainer } from '../../../animations/StaggerContainer';
import { PROFILE_HIGHLIGHTS } from '../data/profileHighlights';
import ExperienceBlock from './ExperienceBlock';
import classes from './ExperienceBlock.module.css';

interface ExperienceProps {
  defaultExpanded?: boolean;
  overview?: boolean;
  listSize?: StyleProp<MantineSize>;
}

export default function Experience({
  defaultExpanded = false,
  listSize,
  overview = false,
}: ExperienceProps) {
  return (
    <Stack className={classes.container} gap="xl" p={{ base: 'lg', lg: 'xl' }}>
      {/* Experience */}
      <Group justify="space-between" w="100%" wrap="nowrap">
        <Title order={4} size={overview ? 'md' : 'sm'} fw={700} c="dimmed" tt="uppercase" lh={1}>
          Experience
        </Title>

        <Button
          component="a"
          href="/Emre-Erdener-Resume.pdf"
          download="Emre-Erdener-Resume.pdf"
          size="compact-sm"
          variant="light"
          rightSection={<IconDownload size={16} />}
        >
          Download PDF
        </Button>
      </Group>
      <StaggerContainer>
        <Stack gap="xl">
          {JOBS.map((job, index) => (
            <FadeInUp key={index}>
              {index > 0 && <Divider className={classes.roleDivider} mb="xl" />}
              <ExperienceBlock
                {...job}
                highlights={overview ? PROFILE_HIGHLIGHTS[job.company] : undefined}
                defaultExpanded={defaultExpanded}
                listSize={listSize}
              />
            </FadeInUp>
          ))}
        </Stack>
      </StaggerContainer>
    </Stack>
  );
}
