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
        <Divider />
        <Experience />
        <Divider />
        <Education />
        <Divider />
        <Group grow gap="lg" p="xl">
          <Button size="lg" leftSection={<IconFile size={24} />}>
            Resume
          </Button>
          <Button size="lg" variant="default" leftSection={<IconBrandLinkedin size={24} />}>
            LinkedIn
          </Button>
        </Group>

        <Space h="xl" />
      </Stack>
    </ScrollArea>
  );
}
