import { IconArrowRight } from '@tabler/icons-react';
import { Group, Stack, Text, Title, UnstyledButton } from '@mantine/core';
import classes from './SearchResults.module.css';

interface FollowUpSectionProps {
  questions: string[];
  onQuestionClick: (question: string) => void;
}

export function FollowUpSection({ questions, onQuestionClick }: FollowUpSectionProps) {
  if (!questions?.length) {
    return null;
  }
  return (
    <Stack gap={16}>
      <Title order={3} fz={{ base: 18, sm: 20 }} fw={600}>
        Explore further
      </Title>
      <Stack gap={8}>
        {questions.map((question) => (
          <UnstyledButton
            key={question}
            className={classes.followUp}
            onClick={() => onQuestionClick(question)}
          >
            <Group wrap="nowrap" justify="space-between" gap="md">
              <Text fz={16} fw={400} lh={1.5}>
                {question}
              </Text>
              <IconArrowRight size={18} style={{ flexShrink: 0 }} aria-hidden="true" />
            </Group>
          </UnstyledButton>
        ))}
      </Stack>
    </Stack>
  );
}
