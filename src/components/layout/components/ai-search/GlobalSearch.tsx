'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { IconArrowRight, IconSparkles2 } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import Lottie from 'lottie-react';
import {
  ActionIcon,
  Autocomplete,
  Box,
  Center,
  Container,
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
import { FadeInUp } from '../../../animations/FadeInUp';
import { StaggerContainer } from '../../../animations/StaggerContainer';
import { Giraffes } from '../../../content/other-work/components/animations/data/giraffes';
import MoreBanner from '../MoreBanner';
import { AnalysisSection } from './AnalysisSection';
import { LOADING_MESSAGES, SEARCH_SUGGESTIONS_GROUPED } from './constants';
import { ContextSection } from './ContextSection';
import { FollowUpSection } from './FollowUpSection';

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const ROTATING_WORDS = ['work', 'experience', 'process', 'background', 'projects'];

const WORD_GRADIENTS = [
  'linear-gradient(45deg, #FF6B6B, #FF8E53)', // work: orange-red
  'linear-gradient(45deg, #4facfe, #00f2fe)', // experience: blue-cyan
  'linear-gradient(45deg, #43e97b, #38f9d7)', // process: green-teal
  'linear-gradient(45deg, #fa709a, #fee140)', // background: pink-yellow
  'linear-gradient(45deg, #667eea, #764ba2)', // projects: purple-indigo
];

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

  const [focused, setFocused] = useState(false);
  const [activeMessages, setActiveMessages] = useState<string[]>([]);
  const [messageIndex, setMessageIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const isMobile = useMediaQuery('(max-width: 62em)');
  const isSmallScreen = useMediaQuery('(max-width: 32em)');

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
      title={!data && !loading ? 'AI insights' : 'Search results'}
      scrollAreaComponent={TinyScrollArea}
      transitionProps={{ transition: 'fade', duration: 200 }}
      styles={{
        header: { top: -1 },
      }}
      overlayProps={{
        backgroundOpacity: 0.8,
        blur: 6,
      }}
    >
      <Container size="md" p={{ base: 0, md: 'sm' }} pb="xl">
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
              <Stack mb="md" gap="xs">
                <Title order={1} lh={1.2}>
                  <motion.div
                    layout
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: isSmallScreen ? 'center' : 'baseline',
                      flexDirection: isSmallScreen ? 'column' : 'row',
                      gap: isSmallScreen ? '0' : '0.2em',
                    }}
                  >
                    <motion.span layout>Ask about my</motion.span>
                    <motion.span
                      layout
                      style={{
                        display: 'inline-grid',
                        verticalAlign: 'bottom',
                        height: '1.2em',
                        overflow: 'hidden',
                        minWidth: '3ch',
                        textAlign: isSmallScreen ? 'center' : 'left',
                        alignItems: 'end',
                        position: 'relative',
                        justifyItems: isSmallScreen ? 'center' : 'start',
                      }}
                      transition={{ layout: { duration: 0.3, ease: 'easeOut' } }}
                    >
                      <AnimatePresence mode="popLayout">
                        <motion.span
                          key={ROTATING_WORDS[wordIndex]}
                          initial={{ y: '-100%', opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: '100%', opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{
                            whiteSpace: 'nowrap',
                            backgroundImage: WORD_GRADIENTS[wordIndex],
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                          }}
                        >
                          {ROTATING_WORDS[wordIndex]}
                        </motion.span>
                      </AnimatePresence>
                    </motion.span>
                  </motion.div>
                </Title>
              </Stack>
              <Autocomplete
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
                  <HoverCard width={230} shadow="md" position="bottom-start">
                    <HoverCard.Target>
                      <IconSparkles2 size={28} aria-label="AI search" color="orange" />
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                      <Text size="sm">Search my experience, profile, and design work with AI.</Text>
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
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
              />

              <Text size="sm" c="dimmed" ta="center">
                Answers are sourced from my portfolio, case studies, and resume
              </Text>
            </Stack>
          </Box>
        ) : (
          // Results State
          <StaggerContainer>
            <Stack gap="xl">
              <FadeInUp>
                <AnalysisSection summary={data?.summary || ''} query={submittedQuery} />
              </FadeInUp>

              {data?.suggestedLinks && (
                <FadeInUp>
                  <ContextSection
                    links={data.suggestedLinks}
                    onLinkClick={(url) => {
                      router.push(url);
                      closeSpotlight();
                    }}
                  />
                </FadeInUp>
              )}

              <Stack>
                {data?.followUpQuestions && data.followUpQuestions.length > 0 && (
                  <FadeInUp>
                    <FollowUpSection
                      questions={data.followUpQuestions}
                      onQuestionClick={(q) => performSearch(q)}
                    />
                  </FadeInUp>
                )}

                {!data?.disableInput && (
                  <FadeInUp>
                    <Autocomplete
                      maxLength={200}
                      placeholder="Ask your own question..."
                      value={query}
                      onChange={setQuery}
                      onKeyDown={handleKeyDown}
                      onOptionSubmit={(val) => performSearch(val)}
                      data={modalSuggestions}
                      rightSection={
                        <ActionIcon
                          variant="transparent"
                          size="lg"
                          aria-label="Search"
                          onClick={() => performSearch()}
                        >
                          <IconArrowRight size={24} />
                        </ActionIcon>
                      }
                      size="lg"
                      radius="md"
                      onFocus={() => setFocused(true)}
                      onBlur={() => setFocused(false)}
                      styles={autocompleteStyles}
                    />
                  </FadeInUp>
                )}
              </Stack>

              <FadeInUp>
                <MoreBanner />
              </FadeInUp>
            </Stack>
          </StaggerContainer>
        )}
      </Container>
    </Modal>
  );
}
