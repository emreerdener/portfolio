import { IconBook, IconPlayerPlay, IconSparkles2, IconUserCircle } from '@tabler/icons-react';
import { Button, Image, NavLink, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { ThemeSwitch } from './ThemeSwitch';
import classes from './layout.module.css';

export default function NavContent() {
  return (
    <>
      <Stack align="center">
        <Image
          src="/images/profile-pic.png"
          alt="Profile picture"
          w={160}
          h={160}
          radius="100%"
          fit="cover"
          className={classes.profilepic}
        />
        <Stack gap={0} align="center">
          <Title order={2} ta="center">
            Emre Erdener
          </Title>
          <Text size="sm" ta="center" c="dimmed">
            Product Designer
          </Text>
        </Stack>
        <SimpleGrid maw={200} w="100%" cols={{ base: 1 }} spacing="xs">
          <NavLink
            href="#required-for-focus"
            label="Featured work"
            rightSection={<IconSparkles2 size={24} />}
            className={classes.navlink}
          />
          <NavLink
            href="#required-for-focus"
            label="Case studies"
            rightSection={<IconBook size={24} />}
            className={classes.navlink}
          />
          <NavLink
            href="#required-for-focus"
            label="Presentation"
            rightSection={<IconPlayerPlay size={24} />}
            className={classes.navlink}
          />
          <NavLink
            href="#required-for-focus"
            label="Profile"
            rightSection={<IconUserCircle size={24} />}
            className={classes.navlink}
          />
        </SimpleGrid>
        <Stack maw={200} w="100%">
          <Button size="md" w="100%" variant="light">
            Email me
          </Button>
          <ThemeSwitch />
        </Stack>
      </Stack>
    </>
  );
}
