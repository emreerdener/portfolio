'use client';

import { Box, Card, Image, Space, Stack } from '@mantine/core';
import MoreCaseStudies from '@/src/components/content/case-studies/components/MoreCaseStudies';
import classes from '@/src/components/content/case-studies/components/ProjectCard.module.css';
import GiraffesAnimation from '@/src/components/content/other-work/components/animations/GiraffesAnimation';
import PolarBearAnimation from '@/src/components/content/other-work/components/animations/PolarBearAnimation';
import TurtleAnimation from '@/src/components/content/other-work/components/animations/TurtleAnimation';
import HealthCarousel from '@/src/components/content/other-work/components/HealthCarousel';
import WoodworkingCard from '@/src/components/content/other-work/components/WoodworkingCard';

export default function OtherWork() {
  return (
    <>
      <Stack className={classes.sections}>
        <Box hiddenFrom="sm">
          <WoodworkingCard />
        </Box>
        {/* Visual Health Literacy */}
        <HealthCarousel />

        {/* Kick Toys */}

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/other-work/kicktoys.png"
          alt="Kick Toys"
          radius={24}
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
          radius={24}
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/other-work/vintage-heart.jpg"
          alt="Vintage Heart logo"
          radius={24}
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/other-work/ironmarrow.jpg"
          alt="Ironmarrow logo"
          radius={24}
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />
        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/other-work/lotus.jpg"
          alt="Lotus logo"
          radius={24}
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <MoreCaseStudies />

        <Space h="xl" />
      </Stack>
    </>
  );
}
