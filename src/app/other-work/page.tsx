'use client';

import { Card, Image, Space, Stack } from '@mantine/core';
import GiraffesAnimation from '@/src/components/content/other-work/components/animations/GiraffesAnimation';
import PolarBearAnimation from '@/src/components/content/other-work/components/animations/PolarBearAnimation';
import TurtleAnimation from '@/src/components/content/other-work/components/animations/TurtleAnimation';
import HealthCarousel from '@/src/components/content/other-work/components/HealthCarousel';

export default function page() {
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
        />

        <Card withBorder radius="lg">
          <PolarBearAnimation />
        </Card>
        <Card withBorder radius="lg">
          <TurtleAnimation />
        </Card>
        <Card withBorder radius="lg">
          <GiraffesAnimation />
        </Card>

        <Space h="xl" />
      </Stack>
    </>
  );
}
