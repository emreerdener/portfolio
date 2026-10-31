import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import { Box, Stack, Title } from '@mantine/core';
import classes from './SearchResults.module.css';

interface AnalysisSectionProps {
  summary: string;
  query?: string;
}

export function AnalysisSection({ summary, query }: AnalysisSectionProps) {
  return (
    <Stack gap={24}>
      {query && (
        <Title order={2} className={classes.question}>
          {query}
        </Title>
      )}
      <Box className={classes.answer}>
        <ReactMarkdown remarkPlugins={[remarkBreaks]}>{summary}</ReactMarkdown>
      </Box>
    </Stack>
  );
}
