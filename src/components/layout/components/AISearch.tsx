import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { IconArrowRight, IconSparkles2 } from '@tabler/icons-react';
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
  Tooltip,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Giraffes } from '../../content/other-work/components/animations/data/giraffes';
import { AnalysisSection } from './ai-search/AnalysisSection';
import { ContextSection } from './ai-search/ContextSection';
import { FollowUpSection } from './ai-search/FollowUpSection';
import MoreBanner from './MoreBanner';

interface SearchResponse {
  summary: string;
  suggestedLinks: Array<{ label: string; url: string; excerpt?: string }>;
  followUpQuestions?: string[];
}

const SEARCH_SUGGESTIONS_GROUPED = [
  {
    group: 'Strategy & leadership',
    items: [
      'What is your approach to aligning design strategy with business goals?',
      'How have you led cross-functional teams to deliver product outcomes?',
      'What is your experience with zero-to-one product development?',
      'How do you measure and communicate the business impact of design?',
    ],
  },
  {
    group: 'Design engineering & systems',
    items: [
      'How do you architect and scale design systems for large organizations?',
      'What is your process for improving development velocity through design?',
      'How do you handle technical debt and component governance at scale?',
      'Describe your experience bridging the gap between design and code.',
    ],
  },
  {
    group: 'Emerging tech & AI',
    items: [
      'How do you approach designing for AI-powered and agentic workflows?',
      'What are your principles for establishing trust in automated systems?',
      'How does your philosophy background influence your view on tech ethics?',
    ],
  },
  {
    group: 'Specialized domain expertise',
    items: [
      'What are the challenges of designing for IoT and hardware ecosystems?',
      'How do you design for complex, multi-sided e-commerce marketplaces?',
      'How do you handle latency and connectivity constraints in product design?',
      'Describe your approach to designing for highly regulated environments.',
    ],
  },
  {
    group: 'Professional profile',
    items: [
      'What are the core pillars of your design philosophy?',
      'How do you mentor junior designers and foster a critique culture?',
      'Summarize your professional background and key career milestones.',
    ],
  },
];

const LOADING_MESSAGES = [
  'Analyzing portfolio...',
  'Searching experience...',
  'Digging into case studies...',
  'Writing analysis...',
  'Reviewing design systems...',
  'Polishing the pixels...',
  'Auditing UX flows...',
  'Curating artifacts...',
  'Outlining an answer...',
];

const TinyScrollArea = (props: any) => <ScrollArea.Autosize scrollbarSize={0} {...props} />;

export default function AISearch() {
  const router = useRouter();
  const [focused, setFocused] = useState(false);
  const [query, setQuery] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState('');
  const [loading, setLoading] = useState(false);

  // Rotating messages state
  const [activeMessages, setActiveMessages] = useState<string[]>([]);
  const [messageIndex, setMessageIndex] = useState(0);

  // Drawer state
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: 62em)');
  const [data, setData] = useState<SearchResponse | null>(null);

  const modalSuggestions = data?.followUpQuestions
    ? [
        { group: 'Suggested follow-ups', items: data.followUpQuestions },
        ...SEARCH_SUGGESTIONS_GROUPED,
      ]
    : SEARCH_SUGGESTIONS_GROUPED;

  const handleSearch = async (overrideQuery?: string) => {
    const searchQuery = overrideQuery || query;
    if (!searchQuery.trim()) return;

    setSubmittedQuery(searchQuery);
    setTimeout(() => setQuery(''), 0);

    setLoading(true);
    if (!opened) open();

    try {
      const res = await fetch('/api/ai-search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: searchQuery }),
      });

      const responseData = await res.json();

      if (!res.ok) {
        throw new Error(responseData.error || 'Failed to fetch results');
      }

      setData(responseData);
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
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

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        size="xl"
        fullScreen={isMobile}
        radius="lg"
        centered
        title="Search results"
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
                <Stack align="center" gap="xs">
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
          ) : (
            <Stack gap="xl">
              {/* Summary Section */}
              <AnalysisSection summary={data?.summary || ''} query={submittedQuery} />

              {/* Suggested Links Section */}
              {data?.suggestedLinks && (
                <ContextSection
                  links={data.suggestedLinks}
                  onLinkClick={(url) => {
                    router.push(url);
                    close();
                  }}
                />
              )}

              <Stack>
                {/* Follow-up Questions */}
                {data?.followUpQuestions && (
                  <FollowUpSection
                    questions={data.followUpQuestions}
                    onQuestionClick={(q) => handleSearch(q)}
                  />
                )}

                {/* Internal Search Input */}
                <Autocomplete
                  maxLength={200}
                  placeholder="Ask a follow-up question..."
                  value={query}
                  onChange={setQuery}
                  onKeyDown={handleKeyDown}
                  onOptionSubmit={(val) => {
                    handleSearch(val);
                  }}
                  data={modalSuggestions}
                  rightSection={
                    <ActionIcon
                      variant="transparent"
                      size="lg"
                      aria-label="Search"
                      onClick={() => handleSearch()}
                      loading={loading}
                    >
                      <IconArrowRight size={24} />
                    </ActionIcon>
                  }
                  size="lg"
                  radius="md"
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                />
              </Stack>

              <MoreBanner />
            </Stack>
          )}
        </Container>
      </Modal>

      <Stack align="center" my="lg">
        <Box pos="relative" w="100%">
          {/* 1. The Background Glow Layer (Blurry Cloud) */}
          <Box
            pos="absolute"
            inset={0}
            style={{
              zIndex: 0,
              borderRadius: 'var(--mantine-radius-xl)',
              backgroundImage:
                'linear-gradient(135deg, var(--mantine-color-orange-7) 0%, var(--mantine-color-orange-4) 100%)',
              transition: 'opacity 0.4s ease, filter 0.4s ease',
              opacity: focused ? 0.6 : 0,
              filter: focused ? 'blur(2px)' : 'blur(0px)',
            }}
          />

          {/* 2. The "Border" Wrapper */}
          <Box
            style={{
              position: 'relative',
              zIndex: 1,
              borderRadius: 'var(--mantine-radius-xl)',
              padding: '1px',
              transition: 'background 0.3s ease',
              background: focused
                ? 'linear-gradient(135deg, var(--mantine-color-orange-7) 0%, var(--mantine-color-orange-4) 100%)'
                : 'var(--mantine-color-default-border)',
            }}
          >
            <Stack gap={0}>
              <Autocomplete
                maxLength={200}
                placeholder="Ask about my work..."
                value={query}
                onChange={setQuery}
                onKeyDown={handleKeyDown}
                onOptionSubmit={(val) => {
                  handleSearch(val);
                }}
                data={SEARCH_SUGGESTIONS_GROUPED}
                leftSection={
                  <HoverCard width={230} shadow="md" position="bottom-start">
                    <HoverCard.Target>
                      <IconSparkles2 size={28} aria-label="AI search" color="orange" />
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                      <Text size="sm">
                        Search my experience, profile, and design work with AI.{' '}
                      </Text>
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
                      onClick={() => handleSearch()}
                      loading={loading}
                    >
                      <IconArrowRight size={24} />
                    </ActionIcon>
                  </Tooltip>
                }
                size="xl"
                radius="xl"
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                styles={{
                  root: { width: '100%' },
                  input: {
                    border: 'none',
                    backgroundColor: 'var(--mantine-color-body)',
                    borderRadius: 'calc(var(--mantine-radius-xl) - 2px)',
                  },
                }}
              />
            </Stack>
          </Box>
        </Box>
      </Stack>
    </>
  );
}
