import { useState } from 'react';
import { Box, Group, Image, List, Spoiler, Stack, Text, Title } from '@mantine/core';

interface ExperienceBlockProps {
  role: string;
  company: string;
  date: string;
  location: string;
  bullets?: string[];
  logoSrc?: string;
}

export default function ExperienceBlock({
  role,
  company,
  date,
  location,
  bullets = [],
  logoSrc,
}: ExperienceBlockProps) {
  // 1. Manage the expanded state to toggle the fade overlay
  const [expanded, setExpanded] = useState(false);

  // 2. Define the height at which the content is cut off
  const MAX_HEIGHT = 110;

  return (
    <Stack gap="xs">
      <Group>
        {logoSrc && (
          <Image
            src={logoSrc}
            alt="Company logo"
            w={64}
            h={64}
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        )}

        <Stack gap={6}>
          <Text size="sm" fw={500} lh={1}>
            {company}
          </Text>
          <Title order={5} lh={1.2}>
            {role}
          </Title>
          <Group gap={6} wrap="nowrap" align="center">
            <Text size="xs" c="dimmed">
              {date}
            </Text>
            <Text size="xs" c="dimmed">
              •
            </Text>
            <Text size="xs" c="dimmed">
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
                fontSize: 'var(--mantine-font-size-xs)',
                color: 'var(--mantine-color-dimmed)',
                marginTop: 0,
                marginLeft: 20,
              },
            }}
          >
            <List spacing={6} size="xs" center={false}>
              {bullets.map((item, index) => (
                <List.Item key={index} style={{ lineHeight: 1.4, opacity: 0.85 }}>
                  {item}
                </List.Item>
              ))}
            </List>
          </Spoiler>

          {/* 4. Custom Fade Overlay 
              - Positioned absolutely relative to the container
              - Sits at the bottom of the visible MAX_HEIGHT area
              - Uses a gradient from transparent to the body background color
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
