import { SimpleGrid, Skeleton } from '@mantine/core';

export default function HomePage() {
  return (
    <>
      <SimpleGrid cols={{ base: 1, lg: 1, xxl: 2 }} spacing="xl">
        <Skeleton h={600} w="100%" radius="lg" />
        <Skeleton h={600} w="100%" radius="lg" />
        <Skeleton h={600} w="100%" radius="lg" />
        <Skeleton h={600} w="100%" radius="lg" />
      </SimpleGrid>
    </>
  );
}
