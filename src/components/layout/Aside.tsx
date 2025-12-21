import { Divider, ScrollArea, Space, Stack } from '@mantine/core';
import AboutImageCarousel from '../features/About/AboutImageCarousel';
import AboutMe from '../features/About/AboutMe';
import Education from '../features/Experience/Education';
import Experience from '../features/Experience/Experience';

export default function Aside() {
  return (
    <ScrollArea type="never" h="100%">
      <Stack gap={0}>
        <Stack gap="xl" p="xl">
          <AboutImageCarousel />
          <AboutMe />
        </Stack>
        <Divider />
        <Experience />
        <Divider />
        <Education />
        <Space h="xl" />
      </Stack>
    </ScrollArea>
  );
}
