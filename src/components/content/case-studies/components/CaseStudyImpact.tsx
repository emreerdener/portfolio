'use client';

import { Card, Paper, rem, SimpleGrid, Stack, Text, Title } from '@mantine/core';

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
    <Card
      my="lg"
      px={{ base: 'md', sm: 'xl' }}
      pt={{ base: 'xl', sm: 'xl' }}
      pb={{ base: 'md', sm: 'xl' }}
      radius="lg"
      withBorder
      shadow="sm"
    >
      <Stack gap="xl">
        {/* Heading */}
        <Stack gap="xs">
          <Title order={2}>Impact & outcomes</Title>
          <Text fz={{ base: 'md', md: 'xl' }}>
            {description ||
              'Key performance indicators and outcomes achieved through this project.'}
          </Text>
        </Stack>

        {/* Stats */}
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          {stats.map((stat, index) => (
            <Paper key={index} radius="lg" p="xl" withBorder shadow="none">
              <Stack gap="md">
                <Text fw={600} tt="uppercase" size="sm">
                  {stat.label}
                </Text>

                {stat.value && (
                  <Text fz={{ base: rem(38), md: rem(48) }} fw={800} lh={1}>
                    {stat.value}
                  </Text>
                )}

                <Text fz={{ base: 'md', md: 'lg' }} c="dimmed" lh={1.4}>
                  {stat.description}
                </Text>
              </Stack>
            </Paper>
          ))}
        </SimpleGrid>
      </Stack>
    </Card>
  );
}
