import { usePathname, useRouter } from 'next/navigation';
import {
  IconIcons,
  IconIconsFilled,
  IconMessageChatbot,
  IconMessageChatbotFilled,
  IconUser,
  IconUserFilled,
} from '@tabler/icons-react';
import { Anchor, NavLink, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { useSearch } from '../../../context/SearchContext';
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
        <Title order={2} ta="left" fz={large ? 30 : 32} style={{ whiteSpace: 'nowrap' }}>
          Emre Erdener
        </Title>
      </Anchor>
      <Text c="dimmed" fz={large ? 18 : 18} ta="left">
        Staff Product Designer
      </Text>
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
  const { openSpotlight, opened: spotlightOpened } = useSearch();

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
            leftSection={
              pathname === '/case-studies' ? (
                <IconIconsFilled size={large ? 26 : 24} />
              ) : (
                <IconIcons size={large ? 26 : 24} />
              )
            }
            className={`${classes.navlink} ${large ? classes.sheetNavlink : ''}`}
            active={pathname === '/case-studies'}
          />
          <NavLink
            onClick={() => handleNavClick('/profile')}
            label="Profile"
            leftSection={
              pathname === '/profile' ? (
                <IconUserFilled size={large ? 26 : 24} />
              ) : (
                <IconUser size={large ? 26 : 24} />
              )
            }
            className={`${classes.navlink} ${large ? classes.sheetNavlink : ''}`}
            active={pathname === '/profile'}
          />
          <NavLink
            onClick={() => {
              onNavClick?.();
              openSpotlight();
            }}
            label="Ask about me"
            leftSection={
              spotlightOpened ? (
                <IconMessageChatbotFilled size={large ? 26 : 24} />
              ) : (
                <IconMessageChatbot size={large ? 26 : 24} />
              )
            }
            className={`${classes.navlink} ${large ? classes.sheetNavlink : ''}`}
            active={spotlightOpened}
          />
        </SimpleGrid>
        <Stack w="100%">
          <ThemeSwitch large={large} />
        </Stack>
      </Stack>
    </>
  );
}
