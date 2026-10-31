import { Divider, ScrollArea, Space, Stack } from '@mantine/core';
import { FadeInUp } from '../../animations/FadeInUp';
import { StaggerContainer } from '../../animations/StaggerContainer';
import AboutImageCarousel from '../../content/about/components/AboutImageCarousel';
import AboutMe from '../../content/about/components/AboutMe';
import CurrentProject from '../../content/about/components/CurrentProject';
import Education from '../../content/experience/components/Education';
import Experience from '../../content/experience/components/Experience';

export default function Aside() {
  return (
    <ScrollArea type="never" h="100%">
      <StaggerContainer>
        <Stack gap={0}>
          <Stack gap="xl" p="xl" pt={{ base: 'xl', xl: 48 }}>
            <FadeInUp>
              <AboutImageCarousel />
            </FadeInUp>
            <FadeInUp>
              <AboutMe paddingTop={0} showCurrentProject={false} />
            </FadeInUp>
          </Stack>
          <Divider />
          <Stack p="xl">
            <FadeInUp>
              <CurrentProject />
            </FadeInUp>
          </Stack>
          <Divider />
          <FadeInUp>
            <Experience overview listSize="md" />
          </FadeInUp>
          <Divider />
          <FadeInUp>
            <Education />
          </FadeInUp>
          <Space h="xl" />
        </Stack>
      </StaggerContainer>
    </ScrollArea>
  );
}
