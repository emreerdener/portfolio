'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { IconArrowRight, IconSparkles2, IconSparkles2Filled } from '@tabler/icons-react';
import Lottie from 'lottie-react';
import {
  ActionIcon,
  Autocomplete,
  Box,
  Button,
  Center,
  Container,
  Group,
  HoverCard,
  Loader,
  Modal,
  ScrollArea,
  Stack,
  Text,
  Title,
  Tooltip,
} from '@mantine/core';
import { useHotkeys, useMediaQuery } from '@mantine/hooks';
import { useSearch } from '../../../../context/SearchContext';
import { funFacts } from '../../../content/about/data/funFacts';
import { Giraffes } from '../../../content/other-work/components/animations/data/giraffes';
import { AnalysisSection } from './AnalysisSection';
import { LOADING_MESSAGES, SEARCH_SUGGESTIONS_GROUPED } from './constants';
import { ContextSection } from './ContextSection';
import { FollowUpSection } from './FollowUpSection';
import FunFactCards from './FunFactCards';
import { RotatingHeader } from './RotatingHeader';
import classes from './SearchResults.module.css';

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const TinyScrollArea = (props: any) => (
  <ScrollArea.Autosize
    {...props}
    scrollbarSize={0}
    scrollbars="y"
    classNames={{ content: classes.modalScrollContent }}
  />
);

export default function GlobalSearch() {
  const router = useRouter();
  const {
    opened,
    closeSpotlight,
    openSpotlight,
    query,
    setQuery,
    submittedQuery,
    loading,
    data,
    performSearch,
  } = useSearch();

  useHotkeys([['mod+K', () => openSpotlight()]]);

  const [activeMessages, setActiveMessages] = useState<string[]>([]);
  const [messageIndex, setMessageIndex] = useState(0);
  const [focused, setFocused] = useState(false);
  const loadingHeaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loading) {
      return;
    }
    const frame = requestAnimationFrame(() => {
      const viewport = loadingHeaderRef.current?.closest<HTMLElement>(
        '.mantine-ScrollArea-viewport'
      );
      if (viewport) {
        viewport.scrollTop = 0;
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [loading, submittedQuery]);
  const [facts, setFacts] = useState(funFacts);

  useEffect(() => {
    if (opened) {
      setFacts(shuffleArray(funFacts));
    }
  }, [opened]);

  const isMobile = useMediaQuery('(max-width: 62em)');

  const SparkleIcon = focused || query.length > 0 ? IconSparkles2Filled : IconSparkles2;

  const randomizedSuggestions = useMemo(() => {
    const groupsWithShuffledItems = SEARCH_SUGGESTIONS_GROUPED.map((group) => ({
      ...group,
      items: shuffleArray(group.items),
    }));
    return shuffleArray(groupsWithShuffledItems);
  }, []);

  const modalSuggestions = data?.followUpQuestions
    ? [{ group: 'Suggested follow-ups', items: data.followUpQuestions }, ...randomizedSuggestions]
    : randomizedSuggestions;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (loading) {
      const shuffle = (array: string[]) => [...array].sort(() => Math.random() - 0.5);
      const shuffled = shuffle(LOADING_MESSAGES);
      setActiveMessages(shuffled);
      setMessageIndex(0);

      interval = setInterval(() => {
        setMessageIndex((prev) => {
          if (prev >= shuffled.length - 1) {
            setActiveMessages(shuffle(LOADING_MESSAGES));
            return 0;
          }
          return prev + 1;
        });
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [loading]);

  const autocompleteStyles = {
    option: {
      fontSize: 'var(--mantine-font-size-md)',
    },
    groupLabel: {
      fontSize: 'var(--mantine-font-size-md)',
    },
  };

  return (
    <Modal
      opened={opened}
      onClose={closeSpotlight}
      size="xl"
      fullScreen={isMobile}
      radius="lg"
      centered
      title="About me"
      scrollAreaComponent={TinyScrollArea}
      transitionProps={{ transition: 'fade', duration: 200 }}
      styles={{
        header: { top: 0 },
        title: { fontSize: 16, fontWeight: 600 },
        body: { padding: 0 },
      }}
      overlayProps={{
        backgroundOpacity: 0.8,
        blur: 6,
      }}
    >
      <Container
        size="md"
        px="var(--search-inset)"
        pb={0}
        style={{
          '--search-inset': 'var(--mantine-spacing-lg)',
          width: '100%',
          minWidth: 0,
          maxWidth: '100%',
        }}
      >
        {loading ? (
          <>
            <Stack ref={loadingHeaderRef} gap="sm" pt={16}>
              <Title order={2} className={classes.question}>
                {submittedQuery}
              </Title>
              <Group gap="sm" wrap="nowrap">
                <Loader size="sm" type="dots" color="orange" style={{ flexShrink: 0 }} />
                <Text size="md" c="dimmed" role="status">
                  {activeMessages[messageIndex] || 'Analyzing portfolio...'}
                </Text>
              </Group>
            </Stack>
            <Center mih={320}>
              <Stack>
                <Box w="100%" maw={500}>
                  <Lottie animationData={Giraffes} loop autoplay />
                </Box>
              </Stack>
            </Center>
            <FunFactCards facts={facts} />
          </>
        ) : !data ? (
          // Initial "Spotlight" State
          <>
            <Box pt={{ base: 32, sm: 48 }} pb={24} px={{ base: 8, sm: 32 }}>
              <Stack gap="sm" align="center" w="100%">
                <Stack mb="md">
                  <RotatingHeader prefix="Ask about my" />
                </Stack>
                <Autocomplete
                  mt="xs"
                  w="100%"
                  maxLength={200}
                  maw={600}
                  placeholder="Ask a question..."
                  value={query}
                  onChange={setQuery}
                  onKeyDown={handleKeyDown}
                  onOptionSubmit={(val) => performSearch(val)}
                  data={randomizedSuggestions}
                  size="xl"
                  radius="xl"
                  autoFocus
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  leftSection={
                    <HoverCard width={195} shadow="md" position="bottom-start">
                      <HoverCard.Target>
                        <SparkleIcon size={28} aria-label="AI search" color="orange" />
                      </HoverCard.Target>
                      <HoverCard.Dropdown>
                        <Text size="sm">Generated with ChatGPT</Text>
                      </HoverCard.Dropdown>
                    </HoverCard>
                  }
                  rightSection={
                    <Tooltip label="Search" position="left">
                      <ActionIcon
                        variant="light"
                        size="xl"
                        radius="xl"
                        aria-label="Search"
                        onClick={() => performSearch()}
                      >
                        <IconArrowRight size={24} />
                      </ActionIcon>
                    </Tooltip>
                  }
                  styles={{
                    ...autocompleteStyles,
                  }}
                />

                <Text size="sm" c="dimmed" ta="center">
                  Answers are sourced from my portfolio, case studies, and resume
                </Text>
              </Stack>
            </Box>
            <FunFactCards facts={facts} />
          </>
        ) : (
          <>
            <Stack gap={32} pt={16}>
              <AnalysisSection summary={data.summary || ''} query={submittedQuery} />
              {data.suggestedLinks && (
                <ContextSection
                  links={data.suggestedLinks}
                  onLinkClick={(url) => {
                    router.push(url);
                    closeSpotlight();
                  }}
                />
              )}
              <FollowUpSection
                questions={data.followUpQuestions || []}
                onQuestionClick={performSearch}
              />
              <FunFactCards facts={facts} />
              <Group gap="sm">
                <Button
                  component="a"
                  href="/Emre-Erdener-Resume.pdf"
                  download
                  variant="filled"
                  size="md"
                >
                  Download resume
                </Button>
                <Button
                  component="a"
                  href="/case-studies"
                  onClick={closeSpotlight}
                  variant="light"
                  size="md"
                  w="fit-content"
                >
                  View all case studies
                </Button>
              </Group>
            </Stack>
            {!data.disableInput && (
              <Box className={classes.composer}>
                <Autocomplete
                  aria-label="Ask about me"
                  maxLength={200}
                  placeholder="Ask another question…"
                  value={query}
                  onChange={setQuery}
                  onKeyDown={handleKeyDown}
                  onOptionSubmit={(value) => performSearch(value)}
                  data={modalSuggestions}
                  rightSection={
                    <ActionIcon
                      variant="light"
                      size="lg"
                      aria-label="Submit question"
                      onClick={() => performSearch()}
                    >
                      <IconArrowRight size={18} />
                    </ActionIcon>
                  }
                  size="lg"
                  radius="md"
                  styles={autocompleteStyles}
                  comboboxProps={{ position: 'top', withinPortal: true }}
                />
                <Text size="xs" c="dimmed" mt={8}>
                  AI answers based on my portfolio and resume.
                </Text>
              </Box>
            )}
          </>
        )}
      </Container>
    </Modal>
  );
}
