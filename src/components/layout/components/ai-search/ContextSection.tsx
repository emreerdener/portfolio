import { IconExternalLink, IconFileDescription } from '@tabler/icons-react';
import {
  Card,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
  UnstyledButton,
} from '@mantine/core';
import { validPortfolioLinks } from '../../../../utils/portfolio-links';
import { CASE_STUDIES } from '../../../content/case-studies/data/case-studies';
import classes from '../shell.module.css';
import resultClasses from './SearchResults.module.css';

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
  const validLinks = validPortfolioLinks(links);
  if (validLinks.length === 0) {
    return null;
  }

  // Separate links into case studies and other links
  const caseStudyLinks: { link: LinkItem; caseStudy: (typeof CASE_STUDIES)[0] }[] = [];
  const otherLinks: LinkItem[] = [];

  validLinks.forEach((link) => {
    const caseStudy = CASE_STUDIES.find((cs) => link.url === cs.href);
    if (caseStudy) {
      caseStudyLinks.push({ link, caseStudy });
    } else {
      otherLinks.push(link);
    }
  });

  return (
    <Stack gap={16}>
      <Title order={3} fz={{ base: 18, sm: 20 }} fw={600}>
        {caseStudyLinks.length > 0 && otherLinks.length === 0
          ? 'Related case studies'
          : 'Related links'}
      </Title>

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
        <SimpleGrid cols={1} spacing="md">
          {caseStudyLinks.map(({ caseStudy }) => (
            <UnstyledButton
              key={caseStudy.id}
              className={resultClasses.recommendation}
              onClick={() => onLinkClick(caseStudy.href)}
              aria-label={`${caseStudy.title} — ${caseStudy.company} case study`}
            >
              <Image
                className={resultClasses.thumbnail}
                src={caseStudy.coverSrc}
                alt=""
                fit="cover"
              />
              <Stack gap={8} style={{ flex: 1, minWidth: 0 }}>
                <Text fw={600} fz={18} lh={1.3}>
                  {caseStudy.title}
                </Text>
                <Text c="dimmed" fz={16} lh={1.5} lineClamp={2}>
                  {caseStudy.description}
                </Text>
              </Stack>
            </UnstyledButton>
          ))}
        </SimpleGrid>
      )}
    </Stack>
  );
}
