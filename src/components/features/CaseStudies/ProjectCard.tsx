import { IconArrowRight } from '@tabler/icons-react';
import { ActionIcon, AspectRatio, Group, Image, Paper, Stack, Text, Title } from '@mantine/core';

interface ProjectCardProps {
  title: string;
  company: string;
  date: string;
  imageSrc?: string;
  logoSrc?: string;
}

export default function ProjectCard({ title, company, date, imageSrc, logoSrc }: ProjectCardProps) {
  return (
    <Paper shadow="sm" radius="xl" withBorder style={{ overflow: 'hidden' }}>
      <AspectRatio ratio={16 / 10}>
        <Image
          src={imageSrc}
          alt={`${title} project image`}
          w="100%"
          h="100%"
          fit="cover"
          style={{ borderBottom: '1px solid var(--app-shell-border-color)' }}
        />
      </AspectRatio>

      <Group p="lg" wrap="nowrap" justify="space-between">
        {/* Left */}
        <Group>
          <Image src={logoSrc} alt={`${company} logo`} w={48} h={48} />
          <Stack gap={0}>
            <Title order={4}>{title}</Title>
            {/* Details */}
            <Group gap={6} wrap="nowrap" align="center">
              <Text size="md" c="dimmed">
                {company}
              </Text>
              <Text size="md" c="dimmed">
                •
              </Text>
              <Text size="md" c="dimmed">
                {date}
              </Text>
            </Group>
          </Stack>
        </Group>

        {/* Right */}
        <ActionIcon component="div" variant="subtle" size="xl">
          <IconArrowRight size={32} />
        </ActionIcon>
      </Group>
    </Paper>
  );
}
