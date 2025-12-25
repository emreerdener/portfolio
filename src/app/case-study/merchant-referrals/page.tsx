'use client';

import { useRouter } from 'next/navigation';
import {
  IconArrowLeft,
  IconCircleCheckFilled,
  IconExclamationCircleFilled,
} from '@tabler/icons-react';
import {
  Alert,
  Blockquote,
  Button,
  Center,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import MoreBanner from '@/src/components/layout/components/MoreBanner';

export default function MerchantReferrals() {
  const router = useRouter();
  return (
    <>
      <Stack gap="xl">
        <Group wrap="nowrap" justify="space-between">
          <Button
            onClick={() => router.push('/case-studies')}
            variant="light"
            size="md"
            leftSection={<IconArrowLeft size={24} />}
          >
            All case studies
          </Button>

          <Button size="md">View prototype</Button>
        </Group>

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-m2m/m2m-cover.svg"
          alt="Shopify Merchant Referral Program cover image"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Stack gap="xs" py="lg">
          <Group justify="space-between">
            <Text size="lg" c="dimmed">
              Shopify • Lead Designer • 2022
            </Text>
          </Group>
          <Stack>
            <Title order={1} fz="2.8rem" lh={1.1} fw={800}>
              Shopify Merchant Referral Program
            </Title>
            <Text size="lg">
              I was responsible for designing a referral program for Shopify merchants, which
              enables them to recommend Shopify to other entrepreneurs in their network, provide
              signup rewards, and receive rewards for their efforts. I oversaw the design process
              from the initial MVP launch in the US and UK, to conceptualizing a north-star
              incentive platform within the Shopify product ecosystem, to full feature release.
            </Text>
          </Stack>
        </Stack>

        <SimpleGrid cols={{ base: 1, xs: 2 }} spacing="xl">
          <Paper radius="lg" p="xl" withBorder shadow="xs">
            <Stack gap="xs">
              <Text c="dimmed">Lead to customer</Text>
              <Text fz={40} fw="bold">
                +24%
              </Text>
              <Text lh={1.2}>UX optimizations led to an increase in customer acquisition.</Text>
            </Stack>
          </Paper>

          <Paper radius="lg" p="xl" withBorder shadow="xs">
            <Stack gap="xs">
              <Text c="dimmed">Cross-functional teams</Text>
              <Text fz={40} fw="bold">
                6
              </Text>
              <Text lh={1.2}>
                Coordinated design across billing, retention, activation, plans & pricing, and core
                teams.
              </Text>
            </Stack>
          </Paper>
        </SimpleGrid>

        <Alert radius="lg" p="xl" color="red">
          <Stack>
            <Group justify="space-between" wrap="nowrap">
              <Title order={3}>Problem</Title>
              <IconExclamationCircleFilled size={32} color="red" />
            </Group>
            <Text size="lg">
              The expenses associated with acquiring users through paid ads are excessively high,
              without necessarily yielding the highest quality leads. The payback period for paid
              ads is prolonged and frequently fails to achieve a successful return on investment,
              ultimately leading to a net loss for the company.
            </Text>
          </Stack>
        </Alert>

        <Alert radius="lg" p="xl" color="green">
          <Stack>
            <Group justify="space-between" wrap="nowrap">
              <Title order={3}>Proposal</Title>
              <IconCircleCheckFilled size={32} color="green" />
            </Group>

            <Text size="xl">
              Develop and implement an innovative growth strategy for Shopify that reduces
              dependence on costly paid advertisements and instead utilizes existing research data
              on user sign-ups, particularly through referrals. The primary objective is to create
              avenues to engage and activate users within the Shopify ecosystem by incorporating
              incentive mechanisms.
            </Text>
          </Stack>
        </Alert>

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-m2m/shopify-m2m.png"
          alt="Shopify Merchant Referral Program cover image"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Stack py="xl">
          <Title order={2}>Activating a new growth lever</Title>
          <Text size="xl">
            The aim of the Shopify merchant referral program is to leverage an existing referral
            user behavior and activate a new growth channel for Shopify. Our research showed that
            organic referrals already accounted for around 29% of new merchant signups, with 59% of
            existing merchants referring others. By optimizing this behavior through a double-sided
            referral program integrated into the product, we estimated that it would bring in
            approximately 50,000 new leads in the first year, for less than half the cost of paid
            acquisition per lead.
          </Text>
        </Stack>

        <Center py="md">
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-m2m/loop.svg"
            alt="Shopify Merchant Referral Program loop image"
            maw={600}
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Referrers and referees</Title>
          <Text size="xl">
            By considering the likely users of the referral program, we gained valuable insights
            that guided our product thinking. We focused on the primary user groups in Shopify's
            admin, identified from preexisting research and reasonable assumptions. These user
            personas were defined by factors such as their motivations, personality types, core
            needs, app use, engagement level, and percentage of Shopify's user base. From there, we
            categorized them into two groups: referrers and referees. The program initially targeted
            existing Shopify users (referrers) who would invite new users (referees) to participate.
          </Text>
        </Stack>

        <Center py="md">
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-m2m/personas.png"
            alt="Shopify Merchant Referral Program personas image"
          />
        </Center>

        <Blockquote>
          <Text size="xl">
            Our findings suggest that referees have the potential to be the most effective referrers
            due to their high level of user engagement and already being familiar with, and
            understanding the value of the referral program.
          </Text>
        </Blockquote>

        <Center py="md">
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-m2m/referees.png"
            alt="Shopify Merchant Referral Program referees image"
            radius="md"
          />
        </Center>

        <Blockquote>
          <Text size="xl">
            29% of all merchants were referred to Shopify, and 59% claim to have recommended others.
          </Text>
        </Blockquote>

        <Center py="md">
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-m2m/phone-m2m.png"
            alt="Shopify Merchant Referral Program phone mockup image"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Experimentation</Title>
          <Text size="xl">
            The objective of phase 1 was to validate the investment into a full backend
            infrastructure and product with minimal development resources. The experiment ran for
            approximately 7 weeks in the US and UK for all users, where they were assigned a variant
            (control, variant A, or variant B) upon logging into their admin. The data collected
            from this experiment validated the program's interest, determined the entry points with
            the highest engagement, identified where and how referral links were shared, established
            expected payouts, and provided some preliminary validation on user personas.
          </Text>
        </Stack>

        <Center py="md">
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-m2m/User%20flow.svg"
            alt="Shopify Merchant Referral Program flow image"
          />
        </Center>

        <Center py="md">
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-m2m/phase1.png"
            alt="Shopify Merchant Referral Program phase 1 image"
            radius="md"
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Initial admin entry points</Title>
          <Text size="xl">
            As a growth product, careful consideration must be given to its positioning within the
            overall user experience. It should enhance the core experience and avoid disrupting it.
            Initially, we considered integrating the program into the admin settings, but ultimately
            opted to leverage existing notification and messaging areas within the product. This
            allowed us to validate the program's position before making it a permanent fixture
            within settings. To surface the program to users, we explored various entry points such
            as the home dashboard, account dropdown, congratulations notification (for unlocking the
            storefront), billing email, login page, billing page, users & permissions section in
            settings, and search results.
          </Text>
        </Stack>

        <Center py="md">
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-m2m/entry-points.png"
            alt="Shopify Merchant Referral Program entry points image"
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Incentive variants</Title>
          <Text size="xl">
            We conducted tests to determine which incentive variant generated more referral
            engagement, in addition to testing user interest in the program. Variant A offered a
            $200 reward for a referral, while variant B offered a $100 reward. We also planned to
            conduct tests with no incentives and higher incentive amounts. The variant assigned to a
            user remained the same throughout their engagement with the program, including within
            the product, landing pages, and emails.
          </Text>
        </Stack>

        <Center py="md">
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-m2m/incentives.svg"
            alt="Shopify Merchant Referral Program incentives image"
          />
        </Center>

        <Center py="md">
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-m2m/macbook-m2m.png"
            alt="Shopify Merchant Referral Program mackbook mockup image"
            radius="lg"
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Gauging user interest</Title>
          <Text size="xl">
            The primary objective of the project's first phase was to confirm the users' interest in
            a merchant referral program. Prior research had shown that users were already informally
            referring to Shopify, but there was no concrete data on the extent of this referral
            behavior. To keep development resources minimal, we designed a "scrappy" Phase 1 product
            that utilized existing areas within the product to showcase the program to users, as
            well as marketing landing pages for program details and referral link creation, and
            marketing and transaction emails to claim rewards. We aimed to track click-through rates
            for all entry points, as well as the number of referrals and signups.
          </Text>
        </Stack>

        <Center py="md">
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-m2m/north-star.png"
            alt="Shopify Merchant Referral Program north star image"
            radius="lg"
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Phase 2</Title>
          <Text size="xl">
            The second phase aimed to refine the user experience, add new features, and increase
            user engagement and conversion rates. The primary objective was to integrate the sharing
            experience (copying and sharing the referral link) into the native product and create an
            internal admin to manage referrals. Additional improvements were made to the marketing
            assets, graphics, landing pages, and messaging.
          </Text>
        </Stack>

        <Center py="md">
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-m2m/phase2.png"
            alt="Shopify Merchant Referral Program phase 2 image"
            radius="md"
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Share sheet</Title>
          <Text size="xl">
            An important and notable improvement in phase 2 was the introduction of a share sheet or
            modal directly in the admin. Previously, to generate a merchant's unique referral link,
            a user was required to leave the admin and go to a landing page with URL parameters.
            Building the share modal into the admin (without needing an external landing page) makes
            it much easier to share a referral link and also keep users in the app. This is also a
            more efficient and adaptable way to build sharing into the app--any updates to sharing
            requirements can be managed from a single share modal that gets initiated from multiple
            sources across the admin.
          </Text>
        </Stack>

        <Center py="md">
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-m2m/share-sheet.png"
            alt="Shopify Merchant Referral Program share sheet image"
            radius="md"
          />
        </Center>

        <Center py="md">
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-m2m/admin-updates.png"
            alt="Shopify Merchant Referral Program admin updates image"
            radius="md"
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Services Internal</Title>
          <Text size="xl">
            The initial experiment (phase 1) was conducted with several manual and time-consuming
            (and potentially error prone) tasks, like compiling email lists, tracking referred
            accounts, etc. This process could not be scaled well or efficiently. Once the program
            proved viable, referral actions were connected directly within Shopify's "Services
            Internal" user management app. Initial actions available for Shopify staff included
            putting a referral on hold, releasing a referral hold, and potentially marking a
            referral as complete or ineligible. The data displayed is intended to help Shopify
            support staff in addressing user concerns or questions about their referral behavior (or
            more likely referral credit).
          </Text>
        </Stack>

        <Center py="md">
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-m2m/internal.png"
            alt="Shopify Merchant Referral Program internal tool image"
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>North star</Title>
          <Text size="xl">
            The north star of the merchant referral program explored the need for a centralized
            incentive platform. Referrals are a conceptual currency, with rewards changing from a
            store level to a user level. User level rewards meant creating a "Rewards and Invites"
            section, in the user settings. Users could unlock rewards based on the number of
            referrals completed. These rewards included various product marketing initiatives, such
            as offering shipping labels for onboarding users to that service, product gifts, blog
            features, plan discounts, subscription credits, and more.
          </Text>
        </Stack>

        <Center py="md">
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-m2m/home-cards.png"
            alt="Shopify Merchant Referral Program home cards image"
            maw={650}
          />
        </Center>
        <Center py="md">
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-m2m/monitor-m2m.png"
            alt="Shopify Merchant Referral Program monitor mockup image"
            radius="lg"
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>100% release</Title>
          <Text size="xl">
            The merchant referral program has been successfully launched to all users on Shopify,
            and is an effective new growth lever. The user acquisition cost is considerably less
            (compared to paid ads) and users brought in through a referral are much more likely to
            stay on Shopify for longer periods of time. The merchant referral program proved to be a
            significant factor in growth performance on all key metrics and signup rates, surpassing
            goals and breaking company records!
          </Text>
        </Stack>

        <Center py="md">
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-m2m/share-preview.png"
            alt="Shopify Merchant Referral Program share preview image"
          />
        </Center>

        <Center py="md">
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-m2m/twitter.png"
            alt="Shopify Merchant Referral Program tweet image"
            maw={650}
          />
        </Center>

        <MoreBanner />
        <Space h="xl" />
      </Stack>
    </>
  );
}
