import React from 'react';
import { IconBrandLinkedin, IconFile } from '@tabler/icons-react';
import { Button, Divider, Group, ScrollArea, Space, Stack } from '@mantine/core';
import AboutMe from '../features/AboutMe';
import Education from '../features/Experience/Education';
import Experience from '../features/Experience/Experience';

export default function Aside() {
  return (
    <ScrollArea type="never" h="100%">
      <Stack gap={0}>
        <AboutMe />
        <Group grow gap="lg" p="xl" pt={0}>
          <Button size="md" variant="light" leftSection={<IconFile size={24} />}>
            Resume
          </Button>
          <Button size="md" variant="default" leftSection={<IconBrandLinkedin size={24} />}>
            LinkedIn
          </Button>
        </Group>
        <Divider />
        <Experience />
        <Divider />
        <Education />
        <Space h="xl" />
      </Stack>
    </ScrollArea>
  );
}
