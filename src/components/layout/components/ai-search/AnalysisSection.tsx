import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import { Box, Card, Text } from '@mantine/core';
import classes from '../../components/layout.module.css';

interface AnalysisSectionProps {
  summary: string;
  query?: string;
}

export function AnalysisSection({ summary, query }: AnalysisSectionProps) {
  return (
    <Box>
      {query && (
        <Box mb="xl">
          <Text size="sm" c="dimmed" tt="uppercase" fw={700} mb="xs">
            You asked
          </Text>
          <Text fz={{ base: 'md', lg: 'lg' }} fw={600} style={{ lineHeight: 1.3 }}>
            "{query}"
          </Text>
        </Box>
      )}

      <Card withBorder radius="lg" shadow="sm">
        <Text size="sm" c="dimmed" tt="uppercase" fw={700} mb="xs">
          Analysis
        </Text>
        <Box
          className={classes.markdownContent}
          style={{ lineHeight: 1.6, fontSize: 'var(--mantine-font-size-xl)' }}
        >
          <ReactMarkdown
            remarkPlugins={[remarkBreaks]}
            components={{
              p: ({ node, ...props }) => <Text component="p" {...(props as any)} />,
              strong: ({ node, ...props }) => <Text span fw={700} {...(props as any)} />,
              ul: ({ node, ...props }) => (
                <Box
                  component="ul"
                  pl="lg"
                  mt="xs"
                  mb="md"
                  style={{ listStyleType: 'disc' }}
                  {...(props as any)}
                />
              ),
              li: ({ node, ...props }) => <Box component="li" mb="xs" {...(props as any)} />,
            }}
          >
            {summary}
          </ReactMarkdown>
        </Box>
      </Card>
    </Box>
  );
}
