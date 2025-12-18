import { usePathname, useRouter } from 'next/navigation';
import {
  IconBook,
  IconBookFilled,
  IconPlayerPlay,
  IconPlayerPlayFilled,
  IconStar,
  IconStarFilled,
  IconUser,
  IconUserFilled,
} from '@tabler/icons-react';
import { Anchor, Image, NavLink, SimpleGrid, Stack, Title } from '@mantine/core';
import { ThemeSwitch } from './ThemeSwitch';
import classes from './layout.module.css';

export default function NavContent() {
  const pathname = usePathname();
  const router = useRouter();
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
            onClick={() => router.push('/')}
            label="Featured work"
            rightSection={pathname === '/' ? <IconStarFilled size={24} /> : <IconStar size={24} />}
            className={classes.navlink}
            active={pathname === '/'}
          />
          <NavLink
            onClick={() => router.push('/case-studies')}
            label="Case studies"
            rightSection={
              pathname === '/case-studies' ? <IconBookFilled size={24} /> : <IconBook size={24} />
            }
            className={classes.navlink}
            active={pathname === '/case-studies'}
          />
          <NavLink
            onClick={() => router.push('/presentation')}
            label="Presentation"
            rightSection={
              pathname === '/presentation' ? (
                <IconPlayerPlayFilled size={24} />
              ) : (
                <IconPlayerPlay size={24} />
              )
            }
            className={classes.navlink}
            active={pathname === '/presentation'}
          />
          <NavLink
            onClick={() => router.push('/profile')}
            label="Profile"
            rightSection={
              pathname === '/profile' ? <IconUserFilled size={24} /> : <IconUser size={24} />
            }
            className={classes.navlink}
            active={pathname === '/profile'}
          />
        </SimpleGrid>
        <Stack maw={260} w="100%">
          <ThemeSwitch />
        </Stack>
      </Stack>
    </>
  );
}
