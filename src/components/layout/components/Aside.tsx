import Link from 'next/link';
import { Button, Divider, ScrollArea, Space, Stack } from '@mantine/core';
import { FadeInUp } from '../../animations/FadeInUp';
import { StaggerContainer } from '../../animations/StaggerContainer';
import AboutImageCarousel from '../../content/about/components/AboutImageCarousel';
import AboutMe from '../../content/about/components/AboutMe';
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
              <AboutMe paddingTop={0} />
            </FadeInUp>
          </Stack>
          <Divider />

          <Stack gap="xl" p={{ base: 'lg', lg: 'xl' }}>
            <FadeInUp>
              <Experience
                headerAction={
                  <Button
                    component={Link}
                    href="/profile#experience"
                    variant="light"
                    size="compact-sm"
                  >
                    View details
                  </Button>
                }
                showDownload={false}
                withPadding={false}
                overview
                roleTitleOrder={4}
                logoSize={56}
                logoRadius="lg"
                showDetails={false}
                listSize="md"
              />
            </FadeInUp>
            <FadeInUp>
              <Education roleTitleOrder={4} logoSize={56} logoRadius="lg" withPadding={false} />
            </FadeInUp>
          </Stack>
          <Space h="xl" />
        </Stack>
      </StaggerContainer>
    </ScrollArea>
  );
}
