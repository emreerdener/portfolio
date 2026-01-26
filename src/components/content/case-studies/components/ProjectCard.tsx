import { StaticImageData } from 'next/image';
import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';
import {
  ActionIcon,
  AspectRatio,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  Title,
  UnstyledButton,
} from '@mantine/core';

interface ProjectCardProps {
  title: string;
  company: string;
  coverSrc: string | StaticImageData;
  logoSrc?: string;
  href: string;
  onClick?: (event: React.MouseEvent) => void;
}

export default function ProjectCard({
  title,
  company,
  coverSrc,
  logoSrc,
  href,
  onClick,
}: ProjectCardProps) {
  const finalSrc = typeof coverSrc === 'string' ? coverSrc : coverSrc.src;
  return (
    <UnstyledButton component={Link} href={href} aria-label="Go to case study" onClick={onClick}>
      <Paper shadow="sm" radius="lg" withBorder style={{ overflow: 'hidden' }}>
        <AspectRatio ratio={16 / 10}>
          <Image src={finalSrc} alt={`${title} project image`} w="100%" h="100%" fit="cover" />
        </AspectRatio>

        <Group
          p="sm"
          wrap="nowrap"
          gap="xs"
          justify="space-between"
          style={{ borderTop: '1px solid var(--app-shell-border-color)' }}
        >
          {/* Left */}
          <Group wrap="nowrap">
            <Image src={logoSrc} alt={`${company} logo`} w={56} h={56} radius={12} />
            <Stack gap={3}>
              {/* Details */}
              <Text size="md" c="dimmed" lineClamp={1}>
                {company}
              </Text>
              <Title order={4} lineClamp={1} lts={-0.1}>
                {title}
              </Title>
            </Stack>
          </Group>

          {/* Right */}
          <ActionIcon visibleFrom="xs" component="div" variant="subtle" size={56}>
            <IconArrowRight size={32} />
          </ActionIcon>
        </Group>
      </Paper>
    </UnstyledButton>
  );
}
