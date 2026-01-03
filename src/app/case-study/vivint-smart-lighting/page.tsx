'use client';

import { Center, Image, Stack, Text, Title } from '@mantine/core';
import CaseStudyHeader from '@/src/components/content/case-studies/components/CaseStudyHeader';
import CaseStudySkills from '@/src/components/content/case-studies/components/CaseStudySkills';
import { CASE_STUDIES } from '@/src/components/content/case-studies/data/case-studies';

export default function VivintSmartLighting() {
  const study = CASE_STUDIES.find((s) => s.href === '/case-study/vivint-smart-lighting');

  if (!study) {
    return null;
  }
  return (
    <>
      <Stack gap="xl">
        <CaseStudyHeader
          coverImage={study.headerImage}
          coverAlt={study.coverAlt || study.title}
          metadata={study.metadata || ''}
          title={study.heading || study.title}
          description={study.description || ''}
          websiteUrl={study.websiteUrl}
          prototypeUrl={study.prototypeUrl}
          problem={study.problem || ''}
          proposal={study.proposal || ''}
          stats={study.stats}
          statsDescription={study.statsDescription}
        />

        <Image
          src={study.coverSrc}
          alt="Vivint case study cover image"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Stack py="xl">
          <Title order={2}>Overview</Title>
          <Text size="xl">
            Smart lighting is often complicated to install and difficult to manage. Vivint's new
            smart lighting solution solves the hardware problem with a unique "cover plate" switch
            that goes over existing toggles, and Zigbee-enabled bulbs.
          </Text>
          <Text size="xl">
            My challenge was to redesign the digital experience to match this simplicity. This
            involved creating intuitive onboarding flows for both the smart bulbs and the switches,
            as well as redesigning the control interfaces within the Vivint app.
          </Text>
        </Stack>

        <Stack py="xl">
          <Title order={2}>Key Goals</Title>
          <Text size="xl">
            Simplify the pairing process for multi-component lighting systems. Create a unified
            onboarding flow for bulbs, bridges, and switches. Validate the new UX through rigorous
            beta testing and user feedback cycles.
          </Text>
        </Stack>

        <Stack py="xl">
          <Title order={2}>User Research & Insights</Title>
          <Text size="xl">
            We kicked off the project with deep user research to understand how people mentally
            model their home lighting. We found that users think in terms of "Rooms" and "Fixtures"
            rather than individual bulbs or switches.
          </Text>
        </Stack>

        <Stack py="xl">
          <Title order={2}>Defining User Stories</Title>
          <Text size="xl">
            To ensure we covered all edge cases, we mapped out detailed user stories for both the
            Lights (bulbs) and the Switches. This helped us identify friction points in scenarios
            like "Replacing an existing smart bulb" vs. "Installing a fresh system."
          </Text>
        </Stack>

        <Stack py="xl">
          <Title order={2}>Beta Testing & Validation</Title>
          <Text size="xl">
            We ran several beta programs to validate our design direction. Beta 1 focused heavily on
            the installation experience ("Post Install"). We collected qualitative feedback via PDF
            reports and surveys to iterate on the flow.
          </Text>
        </Stack>

        <Stack py="xl">
          <Title order={2}>Final Outcomes</Title>
          <Text size="xl">
            The redesign significantly improved the installation success rate. By grouping devices
            into logical "Rooms" during setup and providing clear visual guidance for the physical
            switch installation, we reduced confusion and improved user satisfaction.
          </Text>
        </Stack>

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-smart-lighting/photos/kitchen.jpg"
          alt="Vivint original design system"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-smart-lighting/photos/house-night-2.jpg"
          alt="Vivint original design system"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Center>
          <div
            style={{
              width: '100%',
              maxWidth: '1000px',
              borderRadius: 'var(--mantine-radius-lg)',
              border: '1px solid var(--app-shell-border-color)',
              overflow: 'hidden',
              aspectRatio: '16 / 9',
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/5_QkSGJpC3w?si=3jeYbgyqP9GUJTKb"
              title="YouTube video player"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </Center>

        <CaseStudySkills
          skills={[
            'UX design',
            'Product strategy',
            'Interaction design',
            'Visual design',
            'Research & validation',
            'Redesign',
            '0 to 1',
            'Information architecture',
            'Design systems',
            'Cross-functional leadership',
          ]}
        />
      </Stack>
    </>
  );
}
