'use client';

import { Blockquote, Center, Image, Stack, Text, Title } from '@mantine/core';
import CaseStudyHeader from '@/src/components/content/case-studies/components/CaseStudyHeader';
import CaseStudySkills from '@/src/components/content/case-studies/components/CaseStudySkills';
import { CASE_STUDIES } from '@/src/components/content/case-studies/data/case-studies';

export default function VivintBridge() {
  const study = CASE_STUDIES.find((s) => s.href === '/case-study/vivint-bridge');

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
          problem={study.problem || ''}
          proposal={study.proposal || ''}
          stats={study.stats}
          statsDescription={study.statsDescription}
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-bridge/bridge.jpg"
          alt="Vivint case study cover image of woman unboxing the bridge device"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Stack py="xl">
          <Title order={2}>Key challenges</Title>
          <Text size="xl">
            Through extensive beta testing, user feedback, QA audits, and in-house evaluations, our
            team uncovered significant issues impacting device setup success rates and onboarding
            times. Our challenge was magnified by the bridge hardware being manufactured by an
            external third-party vendor—limiting our direct access to the source code. This
            dependency created substantial friction, as any proposed updates or modifications
            required routing through this external partner, resulting in prolonged implementation
            cycles and frequently suboptimal outcomes.
          </Text>
        </Stack>

        <Blockquote>
          <Text size="xl">
            The primary issue was the bridge connection method (scan a QR code or manually enter the
            local MAC address), which created a significant blind spot—our app had no visibility
            into the bridge status or firmware updates.
          </Text>
        </Blockquote>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-bridge/user-frustrations.png"
            alt="Vivint user frustrations"
            radius="lg"
            p="xl"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>OTA firmware updates</Title>
          <Text size="xl">
            The most severe consequence of the legacy bridge connection protocols are when bridge
            required over-the-air (OTA) firmware updates. These could take up to 15 minutes to
            complete, yet the app couldn't detect this activity or communicate it to users. This
            information gap frequently resulted in confused users abandoning the process, leading to
            failed onboarding and poor user experiences.
          </Text>
        </Stack>

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-bridge/phones-mockup.png"
          alt="Vivint bridge phones mockup"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-bridge/canvas.png"
          alt="Vivint designs"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
        />

        <Stack py="xl">
          <Title order={2}>Moving from QR codes to mDNS</Title>
          <Text size="xl">
            The breakthrough came when we replaced QR code scanning with mDNS connectivity. By
            leveraging mDNS to automatically discover devices on the same network, we eliminated the
            entire QR scanning process—resulting in fewer steps and significantly faster
            connections. Most crucially, mDNS integration provided visibility into over-the-air
            firmware updates, enabling us to keep users informed about their bridge's current status
            in real-time.
          </Text>
        </Stack>

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-bridge/qrcodes-drawbacks.png"
          alt="QR code drawbacks"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-bridge/mdns-benefits.png"
          alt="Benefits of mDNS"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-bridge/bridge-photo.jpg"
          alt="Photo of the bridge device"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
        />

        <CaseStudySkills
          skills={[
            'UX design',
            'Product strategy',
            'Interaction design',
            'Visual design',
            'Research & validation',
            'Redesign',
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
