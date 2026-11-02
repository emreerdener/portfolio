import type { ReactNode } from 'react';
import { IconDownload } from '@tabler/icons-react';
import {
  Button,
  Divider,
  Group,
  ImageProps,
  MantineSize,
  Stack,
  StyleProp,
  Title,
  TitleOrder,
} from '@mantine/core';
import { JOBS } from '@/src/components/content/experience/data/jobs';
import { FadeInUp } from '../../../animations/FadeInUp';
import { StaggerContainer } from '../../../animations/StaggerContainer';
import { PROFILE_HIGHLIGHTS } from '../data/profileHighlights';
import ExperienceBlock from './ExperienceBlock';
import classes from './ExperienceBlock.module.css';

interface ExperienceProps {
  headerAction?: ReactNode;
  showDownload?: boolean;
  withPadding?: boolean;
  logoRadius?: ImageProps['radius'];
  logoSize?: StyleProp<number>;
  roleTitleOrder?: TitleOrder;
  showDetails?: boolean;
  showDividers?: boolean;
  overview?: boolean;
  listSize?: StyleProp<MantineSize>;
}

export default function Experience({
  headerAction,
  showDownload = true,
  withPadding = true,
  logoRadius,
  logoSize,
  roleTitleOrder = 3,
  showDetails = true,
  showDividers = false,
  listSize,
  overview = false,
}: ExperienceProps) {
  return (
    <Stack className={classes.container} gap="xl" p={withPadding ? { base: 'lg', lg: 'xl' } : 0}>
      {/* Experience */}
      <Group justify="space-between" w="100%" wrap="nowrap">
        <Title order={4} size={overview ? 'md' : 'sm'} fw={700} c="dimmed" tt="uppercase" lh={1}>
          Experience
        </Title>

        {headerAction}
        {showDownload && (
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
        )}
      </Group>

      <StaggerContainer>
        <Stack gap="xl">
          {JOBS.map((job, index) => (
            <FadeInUp key={index}>
              {showDividers && index > 0 && (
                <Divider
                  mb="xl"
                  mx={{
                    base: withPadding ? 'calc(-1 * var(--mantine-spacing-lg))' : 0,
                    lg: withPadding ? 'calc(-1 * var(--mantine-spacing-xl))' : 0,
                  }}
                />
              )}
              <ExperienceBlock
                {...job}
                logoRadius={logoRadius}
                logoSize={logoSize}
                roleTitleOrder={roleTitleOrder}
                showDetails={showDetails}
                highlights={overview ? PROFILE_HIGHLIGHTS[job.company] : undefined}
                listSize={listSize}
              />
            </FadeInUp>
          ))}
        </Stack>
      </StaggerContainer>
    </Stack>
  );
}
