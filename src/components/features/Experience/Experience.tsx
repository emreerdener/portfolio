import { IconDownload, IconFile, IconUserCircle } from '@tabler/icons-react';
import { Button, Divider, Group, ScrollArea, Space, Stack, Title } from '@mantine/core';
import ExperienceBlock from './ExperienceBlock';

const jobs = [
  {
    role: 'Senior UX Designer',
    company: 'Vivint',
    date: '2024 - present',
    location: 'Remote',
    logoSrc: '/images/logos/vivint.jpg',
    bullets: [
      'Lead design strategy and execution across 4+ product initiatives, directly collaborating with C-suite executives and cross-functional teams to align design vision with business objectives.',
      'Spearheaded the Energy Intelligence UX design for Vivint and NRG platforms, transforming complex energy data into intuitive interfaces.',
      'Designed the UX for smart lighting controls, as well as introducing new lighting features like color controls, lighting groups, and onboarding optimizations.',
      'Completely redesigned critical bridge device setup process, resolving multiple technical issues while improving efficiency by 45% and reducing average setup time by 1:45 minutes, directly impacting customer satisfaction scores.',
    ],
  },
  {
    role: 'Senior Product Designer',
    company: 'Shopify',
    date: '2021 - 2023',
    location: 'Remote',
    logoSrc: '/images/logos/shopify.jpg',
    bullets: [
      'Researched, designed, prototyped, tested, and shipped a merchant referral program. The feature is a successful growth lever, continuing to increase signups, user retention, and user engagement.',
      'Led design for several key projects on the Monetization team during an org-wide “code red.” All key metrics and signup rates surpassed our goals, breaking company records and successfully ending the code red.',
      'Spearheaded the redesign and successful launch of an improved admin checkout experience for both new and existing users of the product.',
      'Designed, tested, and shipped conversion rate optimizations for shopify.com/pricing. The results led the direction for the redesign and implementation with the rebrand and website 3.0 launch.',
      'Champion of a CMS internal tool for the Website Platform team. I published weekly status updates to the team and leadership. I designed the app, documented components and user flows, presented interactive prototypes, and organized project deliverables.',
      'Conceptualized multiple new initiatives for the Growth organization, innovating product features and user experiences.',
      'Mentored and coached junior designers, providing ongoing feedback and guidance through weekly critiques and team rituals.',
    ],
  },
  {
    role: 'Senior Product Designer',
    company: 'Mello Studio',
    date: '2016 - 2021',
    location: '🇺🇸 Austin, TX',
    logoSrc: '/images/logos/mello.jpg',
    bullets: [
      'Product, web, and marketing design for startups and enterprise clients.',
      'User research, user flows, onboarding optimization, usability testing, and user experience audits to define product roadmaps.',
      'Wireframes, mockups, and clickable prototypes for concept, usability and accessibility requirements, stakeholder approval, and developer handoffs.',
      'Designed and maintained design systems and component libraries.',
      'Optimization at scale through lead funnel automation, multivariate testing, conditional workflows, transactional automation, and dynamic reporting.',
    ],
  },
  {
    role: 'Product Designer',
    company: 'Justuno',
    date: '2018 - 2020',
    location: '🇺🇸 Austin, TX',
    logoSrc: '/images/logos/justuno.png',
    bullets: [
      'Conceptualized product, usability, and design based on requirements gathered during interviews with key stakeholders and users.',
      'Created high-fidelity wireframes and clickable prototypes to define visual and interactive product design and direction.',
      'Conducted user workshops and user testing to evaluate design concept effectiveness and identify potential opportunities for usability enhancements.',
      'Presented product design concepts and prototypes to key stakeholders, to explain user experience, brand alignment, and accessibility standards.',
      'Coordinated internal and outsourced development teams to ensure usability alignment, brand continuity, and design implementation standards.',
      'Developed a design system for rapid prototyping, continuity, and communication across products and development teams.',
      'Designed the brand identity, created assets, and coordinated implementation between Marketing, Sales, Client Success, and Partnership teams.',
    ],
  },
];

const education = [
  {
    role: 'Bachelor of Arts - BA, Philosophy',
    company: 'The University of Texas at Austin',
    date: '2007 - 2012',
    location: 'Austin, TX',
    bullets: [],
    logoSrc: '/images/logos/UT.jpg',
  },
];

export default function Experience() {
  return (
    <ScrollArea type="never" h="100%">
      <Stack gap="xl" p="lg">
        {/* Experience */}
        <Group justify="space-between" w="100%">
          <Title order={4} size="sm" c="dimmed" tt="uppercase" lh={1}>
            Experience
          </Title>

          <Button size="compact-sm" variant="subtle" rightSection={<IconDownload size={16} />}>
            Download PDF
          </Button>
        </Group>
        <Stack gap="lg">
          {jobs.map((job, index) => (
            <ExperienceBlock key={index} {...job} />
          ))}
        </Stack>

        <Divider />

        {/* Education */}
        <Title order={4} size="sm" c="dimmed" tt="uppercase" lh={1}>
          Education
        </Title>
        <Stack gap="md">
          {education.map((edu, index) => (
            <ExperienceBlock key={index} {...edu} />
          ))}
        </Stack>

        <Divider />

        <Stack gap="md">
          <Button size="lg" leftSection={<IconFile size={24} />}>
            View resume
          </Button>
          <Button size="lg" variant="outline" leftSection={<IconUserCircle size={24} />}>
            View profile
          </Button>
        </Stack>
      </Stack>

      <Space h="xl" />
    </ScrollArea>
  );
}
