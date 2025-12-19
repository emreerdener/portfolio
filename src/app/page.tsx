'use client';

import { Grid, Space } from '@mantine/core';
import ProjectCard from '../components/features/CaseStudies/ProjectCard';

export default function HomePage() {
  return (
    <>
      <Grid gutter={{ base: 'lg', xs: 'xl' }}>
        <Grid.Col span={{ base: 12, md: 12 }}>
          <ProjectCard
            title="Merchant Referral Program"
            company="Shopify"
            imageSrc="/images/covers/shopify-m2m.png"
            logoSrc="/images/apps/shopify.svg"
            href="/case-studies/merchant-referrals"
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <ProjectCard
            title="Inventory Management System"
            company="Eureka Software"
            imageSrc="/images/covers/waxwing.png"
            logoSrc="/images/apps/eureka.svg"
            href="/"
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <ProjectCard
            title="Booking Platform Redesign"
            company="The Squire Tarbox Inn"
            imageSrc="/images/covers/tarbox.jpg"
            logoSrc="/images/apps/tarbox.svg"
            href="/"
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <ProjectCard
            title="Admin Checkout 2.0"
            company="Shopify"
            imageSrc="/images/covers/shopify-admin.png"
            logoSrc="/images/apps/shopify.svg"
            href="/"
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <ProjectCard
            title="Audi Dyno Display"
            company="BTRES"
            imageSrc="/images/covers/btres.png"
            logoSrc="/images/apps/btres.svg"
            href="/"
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <ProjectCard
            title="Simplify Travel Expenses"
            company="Tripway"
            imageSrc="/images/covers/tripway.png"
            logoSrc="/images/apps/tripway.svg"
            href="/"
          />
        </Grid.Col>
      </Grid>

      <Space h="xl" />
    </>
  );
}
