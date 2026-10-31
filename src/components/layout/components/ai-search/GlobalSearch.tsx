'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { IconArrowRight, IconSparkles2 } from '@tabler/icons-react';
import Lottie from 'lottie-react';
import {
  ActionIcon,
  Autocomplete,
  Box,
  Button,
  Center,
  Container,
  HoverCard,
  Loader,
  Modal,
  ScrollArea,
  Stack,
  Text,
  Tooltip,
} from '@mantine/core';
import { useHotkeys, useMediaQuery } from '@mantine/hooks';
import { useSearch } from '../../../../context/SearchContext';
import { Giraffes } from '../../../content/other-work/components/animations/data/giraffes';
import { AnalysisSection } from './AnalysisSection';
import { LOADING_MESSAGES, SEARCH_SUGGESTIONS_GROUPED } from './constants';
import { ContextSection } from './ContextSection';
import { FollowUpSection } from './FollowUpSection';
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

const TinyScrollArea = (props: any) => <ScrollArea.Autosize scrollbarSize={0} {...props} />;

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

  const isMobile = useMediaQuery('(max-width: 62em)');

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
      title="Ask about my work"
      scrollAreaComponent={TinyScrollArea}
      transitionProps={{ transition: 'fade', duration: 200 }}
      styles={{
        header: { top: 0 },
        title: { fontSize: 16, fontWeight: 600 },
        body: { paddingBottom: 0 },
      }}
      overlayProps={{
        backgroundOpacity: 0.8,
        blur: 6,
      }}
    >
      <Container size="md" p={{ base: 0, md: 'sm' }} pb={0}>
        {loading ? (
          <Center style={{ height: '70vh' }}>
            <Stack>
              <Stack align="center" gap={0}>
                <Loader size="xl" type="dots" color="orange" />
                <Text size="lg" fw={500} c="dimmed" ta="center">
                  {activeMessages[messageIndex] || 'Analyzing portfolio...'}
                </Text>
              </Stack>

              <Box w="100%" maw={500}>
                <Lottie animationData={Giraffes} loop autoplay />
              </Box>
            </Stack>
          </Center>
        ) : !data ? (
          // Initial "Spotlight" State
          <Box py="xl">
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
                leftSection={
                  <HoverCard width={195} shadow="md" position="bottom-start">
                    <HoverCard.Target>
                      <IconSparkles2 size={28} aria-label="AI search" color="orange" />
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
              <Button
                component="a"
                href="/case-studies"
                onClick={closeSpotlight}
                variant="light"
                size="sm"
                w="fit-content"
              >
                View all case studies
              </Button>
            </Stack>
            {!data.disableInput && (
              <Box className={classes.composer}>
                <Autocomplete
                  aria-label="Ask about my work"
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
