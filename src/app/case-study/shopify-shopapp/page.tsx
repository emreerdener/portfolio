'use client';

import Script from 'next/script';
import { Blockquote, Box, Center, Image, Space, Stack, Text, Title } from '@mantine/core';
import CaseStudyHeader from '@/src/components/content/case-studies/components/CaseStudyHeader';
import CaseStudyImpact from '@/src/components/content/case-studies/components/CaseStudyImpact';
import CaseStudySkills from '@/src/components/content/case-studies/components/CaseStudySkills';
import MoreBanner from '@/src/components/layout/components/MoreBanner';

export default function ShopifyShopApp() {
  return (
    <>
      <Stack gap="xl">
        <CaseStudyHeader
          coverImage="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-shopapp/cover.png"
          coverAlt="Shopify Shop app cover image"
          metadata="Shopify • Lead Designer • 2023"
          title="Shop App curator profiles"
          description="Curator profiles are a new feature for the Shop App, which allow users to create collections of products from within Shopify's merchant ecosystem. This feature allows users to earn Shop Cash each time a purchase is made from their curated list. This feature will provide users with a more practical means of saving products and also create a growth intiative to attract more users to the app."
          prototypeUrl="https://www.figma.com/proto/J8U5yHemWSFg0hqXKypImf/Big-Bets-Monetization?page-id=118%3A28036&type=design&node-id=120-19905&viewport=480%2C801%2C0.04&scaling=scale-down&starting-point-node-id=120%3A19905"
          problem="Finding products on the Shop app poses a challenge, and the creation of curated lists by the Shop team requires a substantial amount of time and resources. Users are currently restricted to a single favorites list, and they lack the ability to share this list with their friends or social networks."
          proposal="The objective behind curator profiles is to offer a practical function to users (both for reference and sharing), while simultaneously encouraging use of the Shop app. The anticipated outcome is a better shopping experience for all users, an increase in purchases made through the app, and a growth flywheel for Shop user acquisition."
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-shopapp/shopify-shop-cover.png"
          alt="Shopify shop app cover image"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Stack py="xl">
          <Title order={2}>Key user groups</Title>
          <Text size="xl">
            We have identified four primary user groups that this feature will primarily cater to:
            individuals (personal), groups, friends, and influencers. Individual users will utilize
            this feature to create a personalized log of products they wish to keep track of for
            future purchases. Groups will create collections as communal lists for occasions such as
            wedding registries, supplies for an upcoming trip, etc. Friends will use this feature to
            create collections for sharing product recommendations with their family and friends.
            Lastly, influencers, both established and aspiring, will create collections to share
            with their audience as a means of earning rewards.
          </Text>
        </Stack>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-shopapp/stories.png"
            alt="Shopify user groups"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Profiles</Title>
          <Text size="xl">
            In the Shop app, curator profiles refer to public profiles available to all users who
            participate. These profiles can be made either private or public, allowing users to
            share their lists or profiles on social media. This provides Shop users with the option
            of having a private purchasing account for handling transactions, orders, etc., as well
            as a curated public profile featuring their product collections.
          </Text>
        </Stack>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-shopapp/profiles.png"
            alt="Shopify profiles designs"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Collections</Title>
          <Text size="xl">
            In the Shop app, collections refer to saved product lists. Currently, users can only add
            products to a single "Favorites" list by selecting the "favorite" option on a product.
            However, with the introduction of the collection feature, users can create multiple
            customized lists to store their "favorited" products. A good comparison to the concept
            of collection lists would be music playlists.
          </Text>
        </Stack>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-shopapp/collection.png"
            alt="Shopify shop app collections designs"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-shopapp/phones-mockup.png"
            alt="Shopify shop app phones mockup"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Introducing the feature</Title>
          <Text size="xl">
            Curator profiles and creating collections can be introduced to the user in two ways. The
            first is through a new option in their account: Curator profile. This will prompt the
            user to create their curator profile and afterwards create a collection. The second is
            by introducing an "Add to collection" option when a user likes a product. Once a user
            has created a collection, they will be prompted to create their curator profile.
          </Text>
        </Stack>

        <Center>
          <Image
            src=" https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-shopapp/account.png"
            alt="Shopify shop account designs"
            radius="lg"
            pt="xl"
            pb="md"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-shopapp/phones-mockup-2.png"
            alt="Shopify shop app phones mockup"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Opportunities</Title>
          <Text size="xl">
            The curator profiles feature in the Shop app aims to provide several advantages.
            Firstly, it offers a user-generated approach to help more users navigate and discover
            products within the Shop app. Currently, the process of creating a Collab collection
            with an influencer or celebrity can be arduous and time-consuming, which the curator
            profiles feature can alleviate.
          </Text>
          <Text size="xl">
            Secondly, users can create public or private collection lists and profiles, expanding
            upon the "favorites" functionality and allowing users to organize and curate specific
            product lists. Publicly shared collection lists can drive more users to the Shop app. To
            incentivize users to shop from a particular list, double-sided incentives, such as Shop
            Cash, can be offered.
          </Text>
        </Stack>

        <Blockquote>
          <Text size="xl">
            By enabling users to create their own collections there will be a greater amount of
            content available, backed by Shopify's extensive merchant ecosystem.
          </Text>
        </Blockquote>

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
              src="https://fast.wistia.com/embed/5gz2w33elv.js"
              strategy="lazyOnload"
              type="module"
            />

            {/* Render Styles and Player using dangerouslySetInnerHTML to avoid JSX errors with custom elements */}
            <div
              dangerouslySetInnerHTML={{
                __html: `
                <style>
                  wistia-player[media-id='5gz2w33elv']:not(:defined) {
                    background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/5gz2w33elv/swatch');
                    display: block;
                    filter: blur(5px);
                    padding-top: 56.25%;
                  }
                </style>
                <wistia-player media-id="5gz2w33elv" aspect="1.7777777777777777"></wistia-player>
              `,
              }}
            />
          </Box>
        </Center>

        <CaseStudyImpact
          stats={[
            {
              label: 'New growth loop',
              description:
                'Creates a growth loop that incentivizes users to drive increased shopping within the Shop app.',
            },
            {
              label: 'New feature',
              description:
                'Introduces a new feature that allows users better organization and greater customization of their accounts.',
            },
          ]}
        />

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

        <MoreBanner />
        <Space h="xl" />
      </Stack>
    </>
  );
}
