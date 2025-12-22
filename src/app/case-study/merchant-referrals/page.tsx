import { Group, Image, Skeleton, Stack, Text, Title } from '@mantine/core';

export default function MerchantReferrals() {
  return (
    <>
      <Stack gap={60}>
        <Stack gap="xs">
          <Group justify="space-between">
            <Text size="lg" c="dimmed">
              Shopify • Lead Designer • 2022
            </Text>
          </Group>
          <Title order={1} fz="2.8rem">
            Shopify Merchant Referral Program
          </Title>
          <Text size="xl">
            I was responsible for designing a referral program for Shopify merchants, which enables
            them to recommend Shopify to other entrepreneurs in their network, provide signup
            rewards, and receive rewards for their efforts. I oversaw the design process from the
            initial MVP launch in the US and UK, to conceptualizing a north-star incentive platform
            within the Shopify product ecosystem, to full feature release.
          </Text>
        </Stack>

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-m2m/m2m-cover.svg"
          alt="Shopify Merchant Referral Program cover image"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Skeleton h={400} radius="lg" />
        <Skeleton h={400} radius="lg" />
      </Stack>
    </>
  );
}
