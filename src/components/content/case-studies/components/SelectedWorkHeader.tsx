import Link from 'next/link';
import { Button, Group, Title } from '@mantine/core';
import { CASE_STUDIES } from '../data/case-studies';

export default function SelectedWorkHeader() {
  return (
    <Group justify="space-between" gap="md">
      <Title order={2}>Selected work</Title>
      <Button component={Link} href="/case-studies" variant="light" size="md">
        View all {CASE_STUDIES.length}
      </Button>
    </Group>
  );
}
