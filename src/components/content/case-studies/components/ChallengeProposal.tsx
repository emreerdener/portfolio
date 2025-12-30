import { IconCircleCheckFilled, IconExclamationCircleFilled } from '@tabler/icons-react';
import { Blockquote, Group, Stack, Text, Title } from '@mantine/core';

interface ChallengeProposalProps {
  problem: string;
  proposal: string;
}

export default function ChallengeProposal({ problem, proposal }: ChallengeProposalProps) {
  return (
    <Stack gap="xl">
      <Blockquote p="xl" color="orange">
        <Stack>
          <Group justify="space-between" wrap="nowrap">
            <Title order={2}>Challenge</Title>
            <IconExclamationCircleFilled size={32} color="orange" />
          </Group>
          <Text size="xl">{problem}</Text>
        </Stack>
      </Blockquote>

      <Blockquote p="xl" color="green">
        <Stack>
          <Group justify="space-between" wrap="nowrap">
            <Title order={2}>Design proposal</Title>
            <IconCircleCheckFilled size={32} color="green" />
          </Group>

          <Text size="xl">{proposal}</Text>
        </Stack>
      </Blockquote>
    </Stack>
  );
}
