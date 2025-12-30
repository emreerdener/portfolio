'use client';

import { Paper, rem, SimpleGrid, Stack, Text, Title } from '@mantine/core';

interface Stat {
  label: string;
  value?: string;
  description: string;
}

interface CaseStudyImpactProps {
  stats: Stat[];
  description?: string;
}

export default function CaseStudyImpact({ stats, description }: CaseStudyImpactProps) {
  return (
    <Stack gap="lg" py="lg">
      <Stack gap="xs">
        <Title order={2}>Impact & outcomes</Title>
        <Text c="dimmed" size="lg">
          {description || 'Key performance indicators and outcomes achieved through this project.'}
        </Text>
      </Stack>

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
        {stats.map((stat, index) => (
          <Paper key={index} radius="lg" p="xl" withBorder shadow="sm">
            <Stack gap="md">
              <Text fw={600} tt="uppercase" size="sm">
                {stat.label}
              </Text>

              {stat.value && (
                <Text fz={rem(48)} fw={800} lh={1}>
                  {stat.value}
                </Text>
              )}

              <Text size="lg" c="dimmed" lh={1.4}>
                {stat.description}
              </Text>
            </Stack>
          </Paper>
        ))}
      </SimpleGrid>
    </Stack>
  );
}
