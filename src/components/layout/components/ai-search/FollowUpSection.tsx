import { IconArrowRight } from '@tabler/icons-react';
import { Button, Stack, Text } from '@mantine/core';

interface FollowUpSectionProps {
  questions: string[];
  onQuestionClick: (question: string) => void;
}

export function FollowUpSection({ questions, onQuestionClick }: FollowUpSectionProps) {
  if (!questions || questions.length === 0) return null;

  return (
    <Stack>
      <Text size="sm" c="dimmed" tt="uppercase" fw={700}>
        Suggested Follow-ups
      </Text>
      <Stack gap="lg">
        {questions.map((q, idx) => (
          <Button
            key={idx}
            variant="default"
            onClick={() => onQuestionClick(q)}
            justify="flex-start"
            size="md"
            styles={{
              inner: { justifyContent: 'space-between' },
              label: {
                whiteSpace: 'normal',
                textAlign: 'left',
                lineHeight: '1.3',
                marginRight: 12,
              },
            }}
            fullWidth
            pl="xs"
            h="auto"
            py="xs"
            rightSection={
              <IconArrowRight size={24} color="var(--mantine-color-orange-light-color)" />
            }
          >
            {q}
          </Button>
        ))}
      </Stack>
    </Stack>
  );
}
