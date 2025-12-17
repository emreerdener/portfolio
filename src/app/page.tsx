import { SimpleGrid, Space } from '@mantine/core';
import ProjectCard from '../components/features/CaseStudies/ProjectCard';

export default function HomePage() {
  return (
    <>
      <SimpleGrid cols={{ base: 1, lg: 1 }} spacing={48} className="featuredGrid">
        <ProjectCard
          title="Merchant Referral Program"
          company="Shopify"
          imageSrc="/images/covers/shopify-m2m.png"
          logoSrc="/images/apps/shopify.svg"
        />
        <ProjectCard
          title="Audi Dyno Display"
          company="BTRES"
          imageSrc="/images/covers/btres.png"
          logoSrc="/images/apps/btres.svg"
        />
        <ProjectCard
          title="Simplify Travel Expenses"
          company="Tripway"
          imageSrc="/images/covers/tripway.png"
          logoSrc="/images/apps/tripway.svg"
        />
        <ProjectCard
          title="Inventory Management System"
          company="Eureka Software"
          imageSrc="/images/covers/waxwing.png"
          logoSrc="/images/apps/eureka.svg"
        />
        <ProjectCard
          title="Booking Platform Redesign"
          company="The Squire Tarbox Inn"
          imageSrc="/images/covers/tarbox.jpg"
          logoSrc="/images/apps/tarbox.svg"
        />

        <Space h="xl" />
      </SimpleGrid>
    </>
  );
}
