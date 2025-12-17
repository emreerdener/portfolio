import {
  IconBook,
  IconMoodSmile,
  IconPlayerPlay,
  IconSparkles2,
  IconUserCircle,
} from '@tabler/icons-react';
import { Image as MantineImage, NavLink, Stack, Text, Title } from '@mantine/core';
import { ThemeSwitch } from './ThemeSwitch';
import classes from './layout.module.css';

export default function NavContent() {
  return (
    <>
      <Stack align="center">
        <MantineImage
          src="/images/amos.jpg"
          alt="Profile picture"
          w={160}
          h={160}
          radius="100%"
          fit="cover"
          className={classes.profilepic}
        />
        <Stack gap={0} align="center">
          <Title order={3} ta="center">
            Emre Erdener
          </Title>
          <Text size="sm" ta="center" c="dimmed">
            Product Designer
          </Text>
        </Stack>
        <Stack w="100%" gap="xs">
          <NavLink
            href="#required-for-focus"
            label="Featured work"
            leftSection={<IconSparkles2 size={24} />}
            className={classes.navlink}
          />
          <NavLink
            href="#required-for-focus"
            label="Case studies"
            leftSection={<IconBook size={24} />}
            className={classes.navlink}
          />
          <NavLink
            href="#required-for-focus"
            label="Presentation"
            leftSection={<IconPlayerPlay size={24} />}
            className={classes.navlink}
          />
          <NavLink
            href="#required-for-focus"
            label="Clients"
            leftSection={<IconMoodSmile size={24} />}
            className={classes.navlink}
          />
          <NavLink
            href="#required-for-focus"
            label="About me"
            leftSection={<IconUserCircle size={24} />}
            className={classes.navlink}
          />
          <ThemeSwitch />
        </Stack>
      </Stack>
    </>
  );
}
