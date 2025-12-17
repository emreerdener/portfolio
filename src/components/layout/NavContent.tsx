import { IconBook, IconPlayerPlay, IconSparkles2, IconUserCircle } from '@tabler/icons-react';
import { Anchor, Image, NavLink, SimpleGrid, Stack, Title } from '@mantine/core';
import { ThemeSwitch } from './ThemeSwitch';
import classes from './layout.module.css';

export default function NavContent() {
  return (
    <>
      <Stack align="center">
        <Image
          src="/images/profile-pic.png"
          alt="Profile picture"
          w={140}
          h={140}
          radius="100%"
          fit="cover"
          className={classes.profilepic}
        />
        <Stack gap={0} align="center">
          <Title order={2} ta="center">
            Emre Erdener
          </Title>
          <Anchor href="mailto: erdener.emre@gmail.com" td="none" size="sm" ta="center">
            erdener.emre@gmail.com
          </Anchor>
        </Stack>
        <SimpleGrid maw={260} w="100%" cols={{ base: 1 }} spacing="xs">
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
        <Stack maw={260} w="100%">
          <ThemeSwitch />
        </Stack>
      </Stack>
    </>
  );
}
