import { SimpleGrid, Skeleton } from '@mantine/core';

export default function HomePage() {
  return (
    <>
      <SimpleGrid cols={{ base: 1, sm: 1, md: 1, lg: 2 }} spacing="xl">
        <Skeleton h={400} w="100%" radius="lg" />
        <Skeleton h={400} w="100%" radius="lg" />
        <Skeleton h={400} w="100%" radius="lg" />
        <Skeleton h={400} w="100%" radius="lg" />
      </SimpleGrid>
    </>
  );
}
