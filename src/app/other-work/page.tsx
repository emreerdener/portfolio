'use client';

import { Card, Image, Space, Stack } from '@mantine/core';
import MoreCaseStudies from '@/src/components/content/case-studies/components/MoreCaseStudies';
import GiraffesAnimation from '@/src/components/content/other-work/components/animations/GiraffesAnimation';
import PolarBearAnimation from '@/src/components/content/other-work/components/animations/PolarBearAnimation';
import TurtleAnimation from '@/src/components/content/other-work/components/animations/TurtleAnimation';
import HealthCarousel from '@/src/components/content/other-work/components/HealthCarousel';

export default function OtherWork() {
  return (
    <>
      <Stack gap="xl">
        {/* Visual Health Literacy */}
        <HealthCarousel />

        {/* Kick Toys */}

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/other-work/kicktoys.png"
          alt="Kick Toys"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Card withBorder radius="lg" style={{ background: 'white' }}>
          <PolarBearAnimation />
        </Card>
        <Card withBorder radius="lg" style={{ background: 'white' }}>
          <TurtleAnimation />
        </Card>
        <Card withBorder radius="lg" style={{ background: 'white' }}>
          <GiraffesAnimation />
        </Card>

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/other-work/yoga.jpg"
          alt="Yoga and meditation illustrations"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/other-work/vintage-heart.jpg"
          alt="Vintage Heart logo"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/other-work/ironmarrow.jpg"
          alt="Ironmarrow logo"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />
        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/other-work/lotus.jpg"
          alt="Lotus logo"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <MoreCaseStudies />

        <Space h="xl" />
      </Stack>
    </>
  );
}
