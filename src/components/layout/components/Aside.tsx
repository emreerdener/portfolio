import { Divider, ScrollArea, Space, Stack } from '@mantine/core';
import AboutImageCarousel from '../../content/about/components/AboutImageCarousel';
import AboutMe from '../../content/about/components/AboutMe';
import Education from '../../content/experience/components/Education';
import Experience from '../../content/experience/components/Experience';

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
