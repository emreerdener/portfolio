import { usePathname, useRouter } from 'next/navigation';
import {
  IconIcons,
  IconIconsFilled,
  IconPencilRuler,
  IconPlayerPlay,
  IconPlayerPlayFilled,
  IconUser,
  IconUserFilled,
} from '@tabler/icons-react';
import { Anchor, NavLink, SimpleGrid, Stack, Title } from '@mantine/core';
import NavAIButton from './ai-search/NavAIButton';
import { ThemeSwitch } from './ThemeSwitch';
import classes from './shell.module.css';

interface NavContentProps {
  large?: boolean;
  hideIdentity?: boolean;
  onNavClick?: () => void;
}

export function NavIdentity({ large = false, onNavClick }: NavContentProps) {
  const pathname = usePathname();
  const router = useRouter();
  const handleNavClick = (path: string) => {
    router.push(path);
    onNavClick?.();
  };
  return (
    <Stack gap={4} align="flex-start">
      <Anchor
        href="/"
        onClick={(event) => {
          event.preventDefault();
          handleNavClick('/');
        }}
        underline="never"
        className={classes.navName}
        data-active={pathname === '/' || undefined}
        aria-current={pathname === '/' ? 'page' : undefined}
      >
        <Title order={2} ta="left" fz={large ? 30 : 26} style={{ whiteSpace: 'nowrap' }}>
          Emre Erdener
        </Title>
      </Anchor>
      <Anchor
        href="mailto:erdener.emre@gmail.com"
        c="dimmed"
        fz={large ? 18 : 14}
        ta="left"
        underline="hover"
      >
        erdener.emre@gmail.com
      </Anchor>
    </Stack>
  );
}

export default function NavContent({
  onNavClick,
  large = false,
  hideIdentity = false,
}: NavContentProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (path: string) => {
    router.push(path);
    if (onNavClick) {
      onNavClick();
    }
  };

  return (
    <>
      <Stack gap="lg" w="100%">
        {!hideIdentity && <NavIdentity large={large} onNavClick={onNavClick} />}

        <SimpleGrid w="100%" cols={1} spacing={4}>
          <NavLink
            onClick={() => handleNavClick('/case-studies')}
            label="Case studies"
            rightSection={
              pathname === '/case-studies' ? (
                <IconIconsFilled size={large ? 26 : 20} />
              ) : (
                <IconIcons size={large ? 26 : 20} />
              )
            }
            className={`${classes.navlink} ${large ? classes.sheetNavlink : ''}`}
            active={pathname === '/case-studies'}
          />
          <NavLink
            onClick={() => handleNavClick('/presentation')}
            label="Presentation"
            rightSection={
              pathname === '/presentation' ? (
                <IconPlayerPlayFilled size={large ? 26 : 20} />
              ) : (
                <IconPlayerPlay size={large ? 26 : 20} />
              )
            }
            className={`${classes.navlink} ${large ? classes.sheetNavlink : ''}`}
            active={pathname === '/presentation'}
          />
          <NavLink
            onClick={() => handleNavClick('/profile')}
            label="Profile"
            rightSection={
              pathname === '/profile' ? (
                <IconUserFilled size={large ? 26 : 20} />
              ) : (
                <IconUser size={large ? 26 : 20} />
              )
            }
            className={`${classes.navlink} ${large ? classes.sheetNavlink : ''}`}
            active={pathname === '/profile'}
          />
          <NavLink
            onClick={() => handleNavClick('/other-work')}
            label="Other work"
            rightSection={<IconPencilRuler size={large ? 26 : 20} />}
            className={`${classes.navlink} ${large ? classes.sheetNavlink : ''}`}
            active={pathname === '/other-work'}
          />
        </SimpleGrid>
        <NavAIButton onOpen={onNavClick} large={large} />
        <Stack w="100%">
          <ThemeSwitch large={large} />
        </Stack>
      </Stack>
    </>
  );
}
