'use client';

import { SimpleGrid, Space } from '@mantine/core';
import ProjectCard from '../components/features/CaseStudies/ProjectCard';

export default function HomePage() {
  return (
    <>
      <SimpleGrid
        cols={{ base: 1, lg: 1 }}
        spacing={{ base: 'lg', xs: 'lg', sm: 48 }}
        className="featuredGrid"
      >
        <ProjectCard
          title="Merchant Referral Program"
          company="Shopify"
          imageSrc="/images/covers/shopify-m2m.png"
          logoSrc="/images/apps/shopify.svg"
          href="/case-studies/merchant-referrals"
        />
        <ProjectCard
          title="Inventory Management System"
          company="Eureka Software"
          imageSrc="/images/covers/waxwing.png"
          logoSrc="/images/apps/eureka.svg"
          href="/"
        />
        <ProjectCard
          title="Booking Platform Redesign"
          company="The Squire Tarbox Inn"
          imageSrc="/images/covers/tarbox.jpg"
          logoSrc="/images/apps/tarbox.svg"
          href="/"
        />
        <ProjectCard
          title="Admin Checkout 2.0"
          company="Shopify"
          imageSrc="/images/covers/shopify-admin.png"
          logoSrc="/images/apps/shopify.svg"
          href="/"
        />
        <ProjectCard
          title="Audi Dyno Display"
          company="BTRES"
          imageSrc="/images/covers/btres.png"
          logoSrc="/images/apps/btres.svg"
          href="/"
        />
        <ProjectCard
          title="Simplify Travel Expenses"
          company="Tripway"
          imageSrc="/images/covers/tripway.png"
          logoSrc="/images/apps/tripway.svg"
          href="/"
        />

        <Space h="xl" />
      </SimpleGrid>
    </>
  );
}
