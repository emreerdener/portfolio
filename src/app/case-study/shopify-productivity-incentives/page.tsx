'use client';

import Script from 'next/script';
import { Blockquote, Box, Center, Image, Stack, Text, Title } from '@mantine/core';
import CaseStudyHeader from '@/src/components/content/case-studies/components/CaseStudyHeader';
import CaseStudySkills from '@/src/components/content/case-studies/components/CaseStudySkills';
import { CASE_STUDIES } from '@/src/components/content/case-studies/data/case-studies';

export default function ShopifyProductivityIncentives() {
  const study = CASE_STUDIES.find((s) => s.href === '/case-study/shopify-productivity-incentives');

  if (!study) {
    return null;
  }
  return (
    <>
      <Stack gap="xl">
        <CaseStudyHeader
          coverImage={study.headerImage}
          coverAlt={study.coverAlt || study.title}
          metadata={study.metadata || ''}
          title={study.heading || study.title}
          description={study.description || ''}
          websiteUrl={study.websiteUrl}
          problem={study.problem || ''}
          proposal={study.proposal || ''}
          stats={study.stats}
          statsDescription={study.statsDescription}
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-productivity/shopify-incentives-cover.png"
          alt="Shopify productivity incentives cover image"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Stack py="xl">
          <Title order={2}>User journey</Title>
          <Text size="xl">
            The user journey for early-stage merchants on Shopify begins when they sign up or log in
            to the Admin. Incentives are presented to the merchant within the Setup Guide on an
            individual task. Currently, we are offering $50 App Store credit as part of the initial
            user experience. After completing a task, the App Store credit takes three days to clear
            fraud checks (as required by the legal department) before being deposited into the
            merchant's account. Once the credits are granted, the merchant receives an email
            notification along with an in-app notification. If the merchant revisits the Setup
            Guide, the incentive information will be updated to confirm that they have received
            their credits and provide instructions for accessing the App Store.
          </Text>
        </Stack>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-productivity/flow.svg"
            alt="Incentive flow chart"
            radius="lg"
            p="xl"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-productivity/domain.png"
            alt="Incentive UX"
            radius="lg"
            p="sm"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-productivity/first-product.png"
            alt="Incentive UX"
            radius="lg"
            p="sm"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-productivity/edit-theme.png"
            alt="Incentive UX"
            radius="lg"
            p="sm"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-productivity/payments.png"
            alt="Incentive UX"
            radius="lg"
            p="sm"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-productivity/UI.png"
          alt="Productivity incentives UI"
        />

        <Stack py="xl">
          <Title order={2}>Key milestones</Title>
          <Text size="xl">
            When new users sign up for a Shopify store, they are presented with the initial Setup
            Guide, which will include our incentives. However, users will only receive a maximum of
            one incentive at a time. The tasks featured in the Setup Guide have been selected
            because they are known to correlate with higher merchant success rates over time. For
            instance, users who add a custom domain are more likely to attain weekly active sales.
            By motivating more users to complete this action, we could potentially create more
            successful merchants.
          </Text>
        </Stack>

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-productivity/milestones.png"
          alt="Shopify productivity incentives cover image"
        />

        <Stack py="xl">
          <Title order={2}>User experience</Title>
          <Text size="xl">
            For each task featured in the Setup Guide, the incentive user experience adheres to a
            similar pattern. A small badge displaying the incentive offer (e.g., "Get $50 credit")
            is displayed on the task. Users can view additional details about the incentive by
            hovering over the badge, which reveals a tooltip. The incentive remains persistent in
            the Setup Guide once a task has been initiated. Once the user completes the task, the
            message is updated to inform them that they will receive their credit in a few days.
            This delay is necessary to allow the legal team to conduct fraud checks before releasing
            the incentive amount. Users will be notified of the credit's arrival via email, app
            notification, and Setup Guide task messaging. They can then use the credits to purchase
            items in Shopify's App Store.
          </Text>
        </Stack>

        <Blockquote>
          <Text size="xl">
            Incentives should not be overly distracting or compete with the user's focus. Rather,
            they should serve to increase engagement with a particular task, and ultimately guide
            the user to what's best for them.
          </Text>
        </Blockquote>

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-productivity/incentives-ui.png"
          alt="Shopify productivity incentives UI"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Stack py="xl">
          <Title order={2}>Incentive guidelines</Title>
          <Text size="xl">
            The current project serves as the cornerstone for the future of incentives in the Admin.
            The UI design has been thoughtfully crafted to facilitate the use of a flexible
            "incentive" feature across numerous surfaces and components. This UX reintroduces links
            to the Polaris component library within tooltips and outlines the opportunities and
            limitations of how incentives can and should be utilized.
          </Text>
        </Stack>

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-productivity/do-dont.svg"
          alt="Shopify productivity incentives guidelines"
          radius="lg"
          p="xl"
          style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-productivity/laptops-mockup.png"
          alt="Shopify productivity incentives laptop mockup"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        {/* Video */}
        <Center>
          <Box
            style={{
              width: '100%',
              maxWidth: '1000px',
              borderRadius: 'var(--mantine-radius-lg',
              border: '1px solid var(--app-shell-border-color)',
              overflow: 'hidden',
            }}
          >
            {/* Load Wistia Scripts */}
            <Script src="https://fast.wistia.com/player.js" strategy="lazyOnload" />
            <Script
              src="https://fast.wistia.com/embed/lmrsk9q71f.js"
              strategy="lazyOnload"
              type="module"
            />

            {/* Render Styles and Player using dangerouslySetInnerHTML to avoid JSX errors with custom elements */}
            <div
              dangerouslySetInnerHTML={{
                __html: `
                <style>
                  wistia-player[media-id='lmrsk9q71f']:not(:defined) {
                    background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/lmrsk9q71f/swatch');
                    display: block;
                    filter: blur(5px);
                    padding-top: 56.25%;
                  }
                </style>
                <wistia-player media-id="lmrsk9q71f" aspect="1.7777777777777777"></wistia-player>
              `,
              }}
            />
          </Box>
        </Center>

        <CaseStudySkills
          skills={[
            'UX design',
            'Product strategy',
            'Interaction design',
            'Visual design',
            'Research & validation',
            '0 to 1',
            'Information architecture',
            'Prototyping',
            'Design systems',
            'Cross-functional leadership',
          ]}
        />
      </Stack>
    </>
  );
}
