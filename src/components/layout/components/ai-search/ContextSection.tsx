import { IconExternalLink, IconFileDescription } from '@tabler/icons-react';
import {
  Box,
  Card,
  Group,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  UnstyledButton,
} from '@mantine/core';
import ProjectCard from '../../../content/case-studies/components/ProjectCard';
import { CASE_STUDIES } from '../../../content/case-studies/data/case-studies';
import classes from '../layout.module.css';

interface LinkItem {
  label: string;
  url: string;
  excerpt?: string;
}

interface ContextSectionProps {
  links: LinkItem[];
  onLinkClick: (url: string) => void;
}

export function ContextSection({ links, onLinkClick }: ContextSectionProps) {
  if (!links || links.length === 0) return null;

  // Separate links into case studies and other links
  const caseStudyLinks: { link: LinkItem; caseStudy: (typeof CASE_STUDIES)[0] }[] = [];
  const otherLinks: LinkItem[] = [];

  links.forEach((link) => {
    const caseStudy = CASE_STUDIES.find((cs) => link.url.includes(cs.href));
    if (caseStudy) {
      caseStudyLinks.push({ link, caseStudy });
    } else {
      otherLinks.push(link);
    }
  });

  return (
    <Stack gap="xl">
      <Text size="sm" c="dimmed" tt="uppercase" fw={700}>
        Recommended for you
      </Text>

      {/* Other Links Grid */}
      {otherLinks.length > 0 && (
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
          {otherLinks.map((link, idx) => (
            <UnstyledButton key={`link-${idx}`} onClick={() => onLinkClick(link.url)} w="100%">
              <Card
                withBorder
                padding="sm"
                shadow="xs"
                radius="lg"
                className={classes.interactiveCard}
              >
                <Stack>
                  <Group justify="space-between" wrap="nowrap" w="100%" align="flex-start">
                    <ThemeIcon variant="light" size="lg" radius="md" mt={2}>
                      <IconFileDescription size={24} />
                    </ThemeIcon>

                    <IconExternalLink size={20} color="var(--mantine-color-dimmed)" />
                  </Group>

                  <Stack gap={0}>
                    <Text size="md" fw={600} lh={1.3}>
                      {link.label.replace(/\s*page$/i, '')}
                    </Text>
                    {link.excerpt && (
                      <Text size="sm" c="dimmed" mt={4} lh={1.4}>
                        {link.excerpt}
                      </Text>
                    )}
                  </Stack>
                </Stack>
              </Card>
            </UnstyledButton>
          ))}
        </SimpleGrid>
      )}

      {/* Case Studies Grid */}
      {caseStudyLinks.length > 0 && (
        <SimpleGrid cols={caseStudyLinks.length === 1 ? 1 : { base: 1, sm: 2 }} spacing="xl">
          {caseStudyLinks.map(({ link, caseStudy }, idx) => (
            <ProjectCard
              key={`cs-${idx}`}
              title={caseStudy.title}
              company={caseStudy.company}
              coverSrc={caseStudy.coverSrc}
              logoSrc={caseStudy.logoSrc}
              href={caseStudy.href}
              onClick={(e) => {
                e.preventDefault();
                onLinkClick(caseStudy.href);
              }}
            />
          ))}
        </SimpleGrid>
      )}
    </Stack>
  );
}
