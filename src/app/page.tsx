import { Skeleton, Stack } from '@mantine/core';

export default function HomePage() {
  return (
    <>
      <Stack gap="xl">
        <Skeleton h={400} w="100%" radius="lg" />
        <Skeleton h={400} w="100%" radius="lg" />
        <Skeleton h={400} w="100%" radius="lg" />
        <Skeleton h={400} w="100%" radius="lg" />
      </Stack>
    </>
  );
}
