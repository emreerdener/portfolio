'use client';

import { Center, Image, Space, Stack, Text, Title } from '@mantine/core';
import CaseStudyHeader from '@/src/components/content/case-studies/components/CaseStudyHeader';
import CaseStudyImpact from '@/src/components/content/case-studies/components/CaseStudyImpact';
import CaseStudySkills from '@/src/components/content/case-studies/components/CaseStudySkills';
import MoreBanner from '@/src/components/layout/components/MoreBanner';

export default function BTRES() {
  return (
    <>
      <Stack gap="xl">
        <CaseStudyHeader
          coverImage="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/btres/gauges.png"
          coverAlt="BTRES cover image"
          metadata="BTRES • Lead Designer • 2019"
          title="Audi dyno display"
          description="Multiple touchscreen gauge displays, auto logging, auto dyno, map switching, fault checking, and more for Audi cars. Built on the power of Dyno Spectrum, this system presents a dynamic interface for complete transparency on your car's performance, as well as data storage for all logs."
          websiteUrl="https://betterthan.shop/"
          problem="There is not a clean and easy-to-read display for Audi engine performance. The current solutions require viewing the data after-the-fact, or not having one entirely."
          proposal="Design an interface, dials, and meters for a touch panel to reflect engine performance for Audis. This UI needs to be implemented via CSS and some additional SVG graphics. Additionally, the company needs branding and a logo."
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/btres/btres.png"
          alt="BTRES cover image"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Stack py="xl">
          <Title order={2}>Branding</Title>
          <Text size="xl">
            Designing the branding began with the company's name "better than." They were looking
            for a logo and a brand mark to include as a badge on the gauge dashboard. "Resolutions"
            was added to the company name, which resulted in the "Res" in the final logo. Red was
            the chosen logo accent color, to match the color of the gauges and dials.
          </Text>
        </Stack>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/btres/logos.svg"
            alt="BTRES logo image"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Center>
          <Image
            src=" https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/btres/logo-mockup.png"
            alt="BTRES logo mockup image"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/btres/dashboard.png"
            alt="BTRES dashboard image"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Animations and style</Title>
          <Text size="xl">
            The dials were designed as stackable shapes with linear and radial gradients. The layers
            could be rendered as CSS with CSS animations to give motion to the gauge displays. CSS
            styling was key because the unit was capable of hosting it's own CSS, without needing to
            import any asset libraries for images.
          </Text>
        </Stack>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/btres/css.png"
            alt="BTRES style image"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/btres/device.webp"
            alt="BTRES device mockup image"
            py="xl"
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/btres/screen.webp"
            alt="BTRES screen mockup image"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/btres/product.png"
            alt="BTRES product image"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <CaseStudyImpact
          stats={[
            {
              label: 'User interface design',
              description:
                'Real-time KPIs on one screen with dynamic gauges, min and max, labels, graphs, and more.',
            },
            {
              label: 'Brand identity',
              description:
                "I designed the logo and brand mark for the company's marketing, website, and product.",
            },
          ]}
          description="By operationalizing word-of-mouth, we achieved immediate improvements in acquisition costs and cross-team alignment."
        />

        <CaseStudySkills
          skills={[
            'UX design',
            'Product strategy',
            'Interaction design',
            'Visual design',
            'Research & validation',
            '0 to 1',
            'Information architecture',
            'Prototyping',
            'Design systems',
            'Cross-functional leadership',
          ]}
        />

        <MoreBanner />
        <Space h="xl" />
      </Stack>
    </>
  );
}
