'use client';

import { IconBrandFigma, IconExternalLink } from '@tabler/icons-react';
import { ActionIcon, Button, Group, Tooltip } from '@mantine/core';
import classes from '@/src/components/layout/components/shell.module.css';
import { CaseStudy } from '../data/case-studies';

export default function CaseStudyActions({
  study,
  compact = false,
}: {
  study?: CaseStudy;
  compact?: boolean;
}) {
  const actions =
    study?.prototypeUrl || study?.websiteUrl ? (
      <Group gap="sm" wrap="nowrap" className={classes.projectActions}>
        {study?.prototypeUrl &&
          (compact ? (
            <Tooltip label="Prototype" position="bottom">
              <ActionIcon
                component="a"
                href={study.prototypeUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="var(--toolbar-control-size, 44px)"
                aria-label="Open prototype"
              >
                <IconBrandFigma size={20} />
              </ActionIcon>
            </Tooltip>
          ) : (
            <Button
              size="md"
              h="var(--toolbar-control-size, 44px)"
              component="a"
              href={study.prototypeUrl}
              target="_blank"
              leftSection={<IconBrandFigma size={20} />}
            >
              Prototype
            </Button>
          ))}
        {study?.websiteUrl &&
          (compact ? (
            <Tooltip label="Website" position="bottom">
              <ActionIcon
                component="a"
                href={study.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="var(--toolbar-control-size, 44px)"
                aria-label="Open website"
              >
                <IconExternalLink size={20} />
              </ActionIcon>
            </Tooltip>
          ) : (
            <Button
              size="md"
              h="var(--toolbar-control-size, 44px)"
              component="a"
              href={study.websiteUrl}
              target="_blank"
              rightSection={<IconExternalLink size={20} />}
            >
              Website
            </Button>
          ))}
      </Group>
    ) : null;

  return actions;
}
