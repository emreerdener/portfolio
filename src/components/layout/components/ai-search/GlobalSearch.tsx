'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { IconArrowRight } from '@tabler/icons-react';
import Lottie from 'lottie-react';
import {
  ActionIcon,
  Autocomplete,
  Box,
  Center,
  Container,
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
      title={!data && !loading ? 'AI search' : 'Search results'}
      scrollAreaComponent={TinyScrollArea}
      transitionProps={{ transition: 'fade', duration: 200 }}
      styles={{
        header: { top: -1 },
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
            <Stack gap="lg" align="center" w="100%">
              <Stack mb="md" gap="xs">
                <Title order={2} ta="center" lh={1.2}>
                  Learn about my work and experience
                </Title>
                <Text size="md" c="dimmed" ta="center">
                  Powered by ChatGPT. Answers are generated from the content of my portfolio and
                  resume.
                </Text>
              </Stack>
              <Autocomplete
                w="100%"
                maxLength={200}
                placeholder="What would you like to know?"
                value={query}
                onChange={setQuery}
                onKeyDown={handleKeyDown}
                onOptionSubmit={(val) => performSearch(val)}
                data={randomizedSuggestions}
                size="xl"
                radius="xl"
                autoFocus
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
