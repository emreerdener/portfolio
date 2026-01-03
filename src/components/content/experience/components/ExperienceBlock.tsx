import { useState } from 'react';
import { Box, Group, Image, List, Spoiler, Stack, Text, Title } from '@mantine/core';

interface ExperienceBlockProps {
  role: string;
  company: string;
  date: string;
  location: string;
  bullets?: string[];
  logoSrc?: string;
  defaultExpanded?: boolean;
}

export default function ExperienceBlock({
  role,
  company,
  date,
  location,
  bullets = [],
  logoSrc,
  defaultExpanded = false,
}: ExperienceBlockProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  // 2. Define the height at which the content is cut off
  const MAX_HEIGHT = 110;

  return (
    <Stack gap="md">
      <Group>
        {logoSrc && (
          <Image
            src={logoSrc}
            alt="Company logo"
            w={64}
            h={64}
            radius={12}
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        )}

        <Stack gap={4}>
          <Text size="sm" fw={500} lh={1}>
            {company}
          </Text>
          <Title order={5} lh={1.2}>
            {role}
          </Title>
          <Group gap={6} wrap="nowrap" align="center">
            <Text size="sm" c="dimmed">
              {date}
            </Text>
            <Text size="sm" c="dimmed">
              •
            </Text>
            <Text size="sm" c="dimmed">
              {location}
            </Text>
          </Group>
        </Stack>
      </Group>

      {bullets.length > 0 && (
        <Box pos="relative">
          {/* 3. Wrap List in Spoiler */}
          <Spoiler
            maxHeight={MAX_HEIGHT}
            showLabel="Show more"
            hideLabel="Show less"
            expanded={expanded}
            onExpandedChange={setExpanded}
            // Style the control button to match your dimmed text style
            styles={{
              control: {
                // If defaultExpanded is true, hide the button entirely
                display: defaultExpanded ? 'none' : undefined,
                fontSize: 'var(--mantine-font-size-sm)',
                marginTop: 4,
                marginLeft: 20,
                color: 'var(--mantine-color-dimmed)',
              },
            }}
          >
            <List spacing={6} size="sm" center={false}>
              {bullets.map((item, index) => (
                <List.Item key={index} style={{ lineHeight: 1.4, opacity: 0.85 }}>
                  {item}
                </List.Item>
              ))}
            </List>
          </Spoiler>

          {/* 4. Custom Fade Overlay 
              - Only visible when collapsed AND we have enough content to likely need it
          */}
          {!expanded && bullets.length > 2 && (
            <Box
              pos="absolute"
              top={MAX_HEIGHT - 40}
              left={0}
              right={0}
              h={40}
              style={{
                pointerEvents: 'none',
                background: 'linear-gradient(to bottom, transparent, var(--mantine-color-body))',
              }}
            />
          )}
        </Box>
      )}
    </Stack>
  );
}
