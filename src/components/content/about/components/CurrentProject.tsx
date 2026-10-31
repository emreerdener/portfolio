import { Anchor, Group, Image, Stack, Text, Title } from '@mantine/core';

export default function CurrentProject() {
  return (
    <Stack gap="md" w="100%" pos="relative">
      <Title order={4} size="sm" c="dimmed" tt="uppercase" lh={1}>
        Currently building
      </Title>
      <Image
        src="/images/naturebook/journal-open.png"
        alt=""
        w={{ base: 96, sm: 124 }}
        h="auto"
        fit="contain"
        pos="absolute"
        top={0}
        right={0}
        style={{ pointerEvents: 'none' }}
      />
      <Group gap="sm" wrap="nowrap">
        <Image
          src="/images/logos/apps/naturebook-light.png"
          alt="Naturebook app logo"
          w={72}
          h={72}
          radius={18}
          darkHidden
          style={{ flexShrink: 0 }}
        />
        <Image
          src="/images/logos/apps/naturebook-dark.png"
          alt="Naturebook app logo"
          w={72}
          h={72}
          radius={18}
          lightHidden
          style={{ flexShrink: 0 }}
        />
        <Stack gap={2}>
          <Title order={3}>Naturebook</Title>
          <Anchor
            href="https://naturebook.earth"
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            underline="hover"
          >
            www.naturebook.earth
          </Anchor>
        </Stack>
      </Group>
      <Text size="md">
        Naturebook is a love letter to iNaturalist and Sky Guide—two apps I love and use. It started
        with a simple need: when I spot something on a walk, I want to open straight to the camera
        or audio identification tools and capture it before the moment passes.
      </Text>
    </Stack>
  );
}
