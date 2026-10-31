'use client';

import { Box, Flex, Image, Stack, Text, Title } from '@mantine/core';
import spacing from '@/src/components/content/case-studies/components/CaseStudySpacing.module.css';
import { CASE_STUDIES } from '../data/case-studies';
import CaseStudyActions from './CaseStudyActions';
import CaseStudyImpact from './CaseStudyImpact';
import CaseStudyToolbar from './CaseStudyToolbar';
import CaseStudyVideo from './CaseStudyVideo';
import ChallengeProposal from './ChallengeProposal';

const FULL_LOGOS: Record<string, string> = {
  vivint: 'vivint',
  shopify: 'shopify',
  eureka: 'eureka',
  tarbox: 'squiretarboxinn',
  tinytails: 'tinytailstoyou',
  btres: 'btres',
  ufcu: 'ufcu',
  tripway: 'tripway',
  justuno: 'justuno',
};

interface Stat {
  label: string;
  value?: string;
  description: string;
}
interface CaseStudyHeaderProps {
  id: string;
  coverImage: string;
  coverAlt: string;
  metadata: string;
  title: string;
  description: string;
  prototypeUrl?: string;
  websiteUrl?: string;
  problem: string;
  proposal: string;
  stats?: Stat[];
  statsDescription?: string;
}

export default function CaseStudyHeader({
  id,
  coverImage,
  coverAlt,
  metadata,
  title,
  description,
  problem,
  proposal,
  stats,
  statsDescription,
}: CaseStudyHeaderProps) {
  const study = CASE_STUDIES.find((project) => project.id === id);
  const logoName = study?.logoSrc.split('/').pop()?.replace('.svg', '');
  const fullLogo = logoName ? FULL_LOGOS[logoName] : undefined;
  const usesSharedLogo = fullLogo === 'justuno' || fullLogo === 'ufcu';

  const actions =
    study?.prototypeUrl || study?.websiteUrl ? <CaseStudyActions study={study} /> : null;

  return (
    <Stack className={spacing.sections}>
      {/* Company and introduction */}
      <Stack align="flex-start" className={spacing.introduction} w="100%">
        <Flex justify="space-between" align="flex-start" gap="lg" w="100%">
          <Stack gap={16} align="flex-start">
            {study?.logoSrc &&
              (fullLogo ? (
                <>
                  <Image
                    src={`/images/logos/full/${fullLogo}.png`}
                    alt={`${study.company} logo`}
                    w={136}
                    h={34}
                    fit="contain"
                    darkHidden={!usesSharedLogo}
                    style={{ objectPosition: 'left center' }}
                  />
                  {!usesSharedLogo && (
                    <Image
                      src={`/images/logos/full/${fullLogo}-dark.png`}
                      alt={`${study.company} logo`}
                      w={136}
                      h={34}
                      fit="contain"
                      lightHidden
                      style={{ objectPosition: 'left center' }}
                    />
                  )}
                </>
              ) : (
                <Image
                  src={study.logoSrc}
                  alt={`${study.company} logo`}
                  w={48}
                  h={48}
                  radius={12}
                />
              ))}
            <Text size="lg" c="dimmed">
              {metadata}
            </Text>
          </Stack>
          {actions && <Box visibleFrom="xl">{actions}</Box>}
        </Flex>

        {/* Text */}
        <Stack gap={24} w="100%">
          <Title order={1} fz={{ base: '2.2rem', md: '2.8rem' }} lh={1.1} fw={800}>
            {title}
          </Title>
          <Text fz={{ base: 'md', md: 'xl' }}>{description}</Text>
        </Stack>
      </Stack>

      <CaseStudyToolbar />

      {study?.videoId && <CaseStudyVideo mediaId={study.videoId} />}

      <Image
        src={coverImage}
        alt={coverAlt}
        radius={24}
        style={{ border: '1px solid var(--app-shell-border-color)' }}
      />

      <ChallengeProposal problem={problem} proposal={proposal} />

      {stats && stats.length > 0 && (
        <CaseStudyImpact stats={stats} description={statsDescription} />
      )}
    </Stack>
  );
}
