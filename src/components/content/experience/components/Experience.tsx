import { IconDownload } from '@tabler/icons-react';
import { Button, Group, Stack, Title } from '@mantine/core';
import { JOBS } from '@/src/components/content/experience/data/jobs';
import ExperienceBlock from './ExperienceBlock';
import classes from './experience.module.css';

interface ExperienceProps {
  defaultExpanded?: boolean;
}

export default function Experience({ defaultExpanded = false }: ExperienceProps) {
  return (
    <Stack gap="xl" className={classes.experienceWrapper}>
      {/* Experience */}
      <Group justify="space-between" w="100%">
        <Title order={4} size="sm" c="dimmed" tt="uppercase" lh={1}>
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
      <Stack gap="xl">
        {JOBS.map((job, index) => (
          <ExperienceBlock key={index} {...job} defaultExpanded={defaultExpanded} />
        ))}
      </Stack>
    </Stack>
  );
}
