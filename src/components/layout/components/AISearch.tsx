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
    group: 'Impact & experience',
    items: [
      'What was your biggest impact at Shopify?',
      'How did you lead design at Vivint?',
      'Show me projects involving zero-to-one product growth',
      'Tell me about your experience with Smart Home & Energy design',
    ],
  },
  {
    group: 'Design & engineering',
    items: [
      'Show me your work on Design Systems and Component Libraries',
      'How do you bridge the gap between design and engineering?',
      'Tell me about the technical stack used for this portfolio',
    ],
  },
  {
    group: 'Process & leadership',
    items: [
      'What is your philosophy on product design?',
      'How do you balance user needs with business goals?',
      'Tell me about your approach to rapid prototyping',
      'Why should we hire a designer who can code?',
    ],
  },
  {
    group: 'About me',
    items: ['What do you do for fun?', 'What are some fun facts about you?'],
  },
];

const TinyScrollArea = (props: any) => <ScrollArea.Autosize scrollbarSize={0} {...props} />;

export default function AISearch() {
  const router = useRouter();
  const [focused, setFocused] = useState(false);
  const [query, setQuery] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState('');
  const [loading, setLoading] = useState(false);

  // Drawer state
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: 62em)');
  const [data, setData] = useState<SearchResponse | null>(null);

  const modalSuggestions = data?.followUpQuestions
    ? [
        { group: 'Suggested Follow-ups', items: data.followUpQuestions },
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

  // Rotating messages state
  const [loadingMessageIndex, setLoadingMessageIndex] = useState(0);
  const loadingMessages = [
    'Analyzing portfolio...',
    'Searching relevant experience...',
    'Digging into case studies...',
    'Writing analysis...',
    'Reviewing design systems...',
    'Polishing the pixels...',
    'Auditing user experience flows...',
    'Curating relevant artifacts...',
    'Outlining an answer...',
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (loading) {
      setLoadingMessageIndex(0);
      interval = setInterval(() => {
        setLoadingMessageIndex((prev) => (prev + 1) % loadingMessages.length);
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
                <Stack align="center" gap="md">
                  <Loader size="xl" type="dots" color="orange" />
                  <Text size="lg" fw={500} c="dimmed">
                    {loadingMessages[loadingMessageIndex]}
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
