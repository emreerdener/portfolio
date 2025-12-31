'use client';

import { Center, Image, Stack, Text, Title } from '@mantine/core';
import CaseStudyHeader from '@/src/components/content/case-studies/components/CaseStudyHeader';
import CaseStudySkills from '@/src/components/content/case-studies/components/CaseStudySkills';
import { CASE_STUDIES } from '@/src/components/content/case-studies/data/case-studies';

export default function BTRES() {
  const study = CASE_STUDIES.find((s) => s.href === '/case-study/btres');

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
          alt="Case study cover image"
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
      </Stack>
    </>
  );
}
