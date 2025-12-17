import { SimpleGrid, Skeleton } from '@mantine/core';
import ProjectCard from '../components/features/CaseStudies/ProjectCard';

export default function HomePage() {
  return (
    <>
      <SimpleGrid cols={{ base: 1, lg: 1, xxl: 2 }} spacing="xl">
        <ProjectCard
          title="Merchant Referral Program"
          company="Shopify"
          date="2022"
          imageSrc="/images/covers/shopify-m2m.png"
          logoSrc="/images/apps/shopify.svg"
        />
        <ProjectCard
          title="Audi Dyno Display"
          company="BTRES"
          date="2019"
          imageSrc="/images/covers/btres.png"
          logoSrc="/images/apps/btres.svg"
        />
        <ProjectCard
          title="Simplify Travel Expenses"
          company="Tripway"
          date="2022"
          imageSrc="/images/covers/tripway.png"
          logoSrc="/images/apps/tripway.svg"
        />

        <Skeleton h={600} w="100%" radius="xl" />
        <Skeleton h={600} w="100%" radius="xl" />
        <Skeleton h={600} w="100%" radius="xl" />
      </SimpleGrid>
    </>
  );
}
