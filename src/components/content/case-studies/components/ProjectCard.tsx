import { StaticImageData } from 'next/image';
import Link from 'next/link';
import {
  AspectRatio,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  Title,
  Tooltip,
  UnstyledButton,
} from '@mantine/core';
import classes from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  company: string;
  description?: string;
  coverSrc: string | StaticImageData;
  logoSrc?: string;
  href: string;
  onClick?: (event: React.MouseEvent) => void;
}

export default function ProjectCard({
  title,
  company,
  description,
  coverSrc,
  logoSrc,
  href,
  onClick,
}: ProjectCardProps) {
  const finalSrc = typeof coverSrc === 'string' ? coverSrc : coverSrc.src;
  return (
    <UnstyledButton
      component={Link}
      href={href}
      aria-label={`${title} — ${company} case study`}
      onClick={onClick}
      className={classes.container}
    >
      <Paper
        shadow="sm"
        radius={24}
        withBorder
        className={classes.card}
        style={{ overflow: 'hidden' }}
      >
        <AspectRatio ratio={16 / 10}>
          <Image src={finalSrc} alt={`${title} project image`} w="100%" h="100%" fit="cover" />
        </AspectRatio>

        <Group
          p="lg"
          wrap="nowrap"
          gap="xs"
          justify="space-between"
          style={{ borderTop: '1px solid var(--app-shell-border-color)' }}
        >
          {/* Left */}
          <Group wrap="nowrap" align="flex-start" gap="lg" style={{ flex: 1, minWidth: 0 }}>
            <Tooltip label={company}>
              <Image
                src={logoSrc}
                alt={`${company} logo`}
                visibleFrom="sm"
                w={56}
                h={56}
                radius={12}
              />
            </Tooltip>
            <Stack gap={8} style={{ flex: 1, minWidth: 0 }}>
              {/* Details */}
              <Title
                order={3}
                fz={{ base: 'var(--mantine-h4-font-size)', sm: 'var(--mantine-h3-font-size)' }}
                lineClamp={1}
                lts={-0.1}
              >
                {title}
              </Title>
              {description && (
                <Text
                  c="dimmed"
                  lineClamp={2}
                  className={`${classes.detailText} ${classes.description}`}
                >
                  {description}
                </Text>
              )}
            </Stack>
          </Group>
        </Group>
      </Paper>
    </UnstyledButton>
  );
}
