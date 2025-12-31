'use client';

import Script from 'next/script';
import { Blockquote, Box, Center, Image, Stack, Text, Title } from '@mantine/core';
import CaseStudyHeader from '@/src/components/content/case-studies/components/CaseStudyHeader';
import CaseStudySkills from '@/src/components/content/case-studies/components/CaseStudySkills';
import { CASE_STUDIES } from '@/src/components/content/case-studies/data/case-studies';

export default function ShopifyShopApp() {
  const study = CASE_STUDIES.find((s) => s.href === '/case-study/shopify-shopapp');

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
          prototypeUrl={study.prototypeUrl}
          problem={study.problem || ''}
          proposal={study.proposal || ''}
          stats={study.stats}
          statsDescription={study.statsDescription}
        />

        <Image
          src={study.coverSrc}
          alt="Case study cover image"
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
