'use client';

import Script from 'next/script';
import { Blockquote, Box, Card, Center, Image, Stack, Text, Title } from '@mantine/core';
import CaseStudyHeader from '@/src/components/content/case-studies/components/CaseStudyHeader';
import CaseStudySkills from '@/src/components/content/case-studies/components/CaseStudySkills';
import { CASE_STUDIES } from '@/src/components/content/case-studies/data/case-studies';

export default function ShopifyWebsitePlatform() {
  const study = CASE_STUDIES.find((s) => s.href === '/case-study/shopify-website-platform');

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
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-website/shopify-website-cover.png"
          alt="Shopify website platform cover image"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Stack py="xl">
          <Title order={2}>Product roadmap and MVP</Title>
          <Text size="xl">
            One of the interesting challenges in this project has been finding the balance between
            limitation and power. On the one hand we want to empower users across the company to
            manage pages on the website, but on the other hand we want to limit them in such a way
            that the output of their work is consistent with brand guidelines, best practices,
            accessibility standards, content design principals, etc. An additional layer of
            complexity is added to this project since it is being built on top of Github. Every
            "publish" of a CMS page creates a pull request in GitHub, so we are not working with a
            standard database to store and pass data.
          </Text>
        </Stack>

        <Blockquote>
          <Text size="xl">
            The Website Platform will provide Shopify with a world-class content management system
            that delivers on the complex needs of an international SaaS company with millions of
            monthly visitors. The CMS forms the basis for an entirely new publishing system, set of
            page components, and localized layout templates that showcase Shopify to the world and
            supporting marketing across the entire org, especially Brand, Merchant Services, and
            Core.
          </Text>
        </Blockquote>

        <Center>
          <Card withBorder radius="lg" p="xl" style={{ background: 'white' }}>
            <Stack>
              <Image
                src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-website/personas-1.png"
                alt="Website platform personas"
              />
              <Image
                src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-website/personas-2.png"
                alt="Website platform personas"
              />
            </Stack>
          </Card>
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-website/user%20stories.png"
            alt="Website platform user stories"
            radius="lg"
            p="lg"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-website/design-canvas.png"
            alt="Website platform design canvas"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>The initial design</Title>
          <Text size="xl">
            The initial design was explored by two designers for several months prior to me joining
            the team. To get a sense of the project, the design decisions, and the interface, I
            redesigned the product. While doing this, I updated some design elements and prototyped
            the app. This file became the new source of truth for the design team, product managers,
            senior leadership, and engineering. With the initial review of the product complete, I
            reorganized the file, added section pattern components, and further explored the asset
            library. The prototype needed to be refactored in some places to build using components
            and interactive variants.
          </Text>
        </Stack>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-website/prototype.png"
            alt="Website platform prototype"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Asset library</Title>
          <Text size="xl">
            Including an asset library is part of the initial release of the CMS product, to allow
            users to store and manage their assets. Until the asset library is built into the CMS,
            all image components within a page section are individual file uploads. Once the asset
            library is built, these individual file uploads will be replaced by an asset library
            side shelf component, allowing users to select assets they already uploaded. Each asset
            has an asset overview page to view file info, update alt text, and see which pages that
            asset has been used across the CMS.
          </Text>
        </Stack>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-website/asset-library.png"
            alt="Website platform UI"
            radius="lg"
            p="lg"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-website/asset-details.png"
            alt="Website platform UI"
            radius="lg"
            p="lg"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-website/asset-components.png"
            alt="Website platform UI"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-website/asset-library-canvas.png"
            alt="Website platform UI"
            radius="lg"
            p="lg"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-website/devices-mockup.png"
          alt="Shopify website platform mockup"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Stack py="xl">
          <Title order={2}>Pages in the CMS</Title>
          <Text size="xl">
            Individual pages are created within the CMS on Shopify's Hydrogen React-based framework,
            and managed through GitHub. The CMS is the user interface between page level components,
            page settings, and Github pull requests. Pages are designed using page sections. These
            page sections are pre-designed templates, created by the rebrand design team. The visual
            templates define the data schema, which is reflected on the page level by their
            corresponding input fields. For example, the "heading" in a page section template is a
            text input, labeled "Title (H1)." This allows more Shopify teams (like marketing and
            SEO) to build and manage website pages, without needing as much product help (design and
            engineering).
          </Text>
        </Stack>

        <Blockquote>
          <Text size="xl">
            All pages are visible, with access to saved views. Table data includes: page name, page
            status, URL, last modified date, language, localization, and connected template. New
            pages can be made regionally on specific domains in different languages, connected to a
            template, or custom made.
          </Text>
        </Blockquote>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-website/pages-canvas.png"
            alt="Website platform UI"
            radius="lg"
            p="lg"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-website/pages-overview.png"
            alt="Website platform UI"
            radius="lg"
            p="lg"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-website/pages-editing.png"
            alt="Website platform UI"
            radius="lg"
            p="lg"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-website/pages-components.png"
            alt="Website platform UI"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Localization</Title>
          <Text size="xl">
            One of the main features that led to designing and building a custom CMS with Shopify
            was the need to create pages for the brochure site, translate, and customize each page
            for localized content across all regions and markets around the world. Localized pages
            are hosted on country specific domains, and the URL slug is also localized. Pages are
            organized into "localization groups" to quickly switch between localized pages, manage
            content, and get an overview of which pages are associated with their corresponding page
            statuses.
          </Text>
        </Stack>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-website/localization.png"
            alt="Website platform localization UI"
            radius="lg"
            p="lg"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>CMS collections and items</Title>
          <Text size="xl">
            CMS collections contain a library of CMS items, to organize and manage content. This
            allows teams to create content that can be used across website pages, and be updated
            across the board. CMS items are then dynamically added to page templates, and
            automatically mapped to localizations for the correct translations across localized
            pages. Each CMS item data type is defined by the section templates that comprise the
            page components.
          </Text>
        </Stack>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-website/cms-canvas.png"
            alt="Website platform CMS UI"
            radius="lg"
            p="lg"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-website/cms-collections.png"
            alt="Website platform UI"
            radius="lg"
            p="lg"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-website/cms-collection.png"
            alt="Website platform UI"
            radius="lg"
            p="lg"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-website/cms-new.png"
            alt="Website platform UI"
            radius="lg"
            p="lg"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-website/laptop-mockup.png"
            alt="Website platform UI mockup"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-website/settings-canvas.png"
            alt="Website platform UI"
            radius="lg"
            p="lg"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

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
              src="https://fast.wistia.com/embed/zkwzhxzk35.js"
              strategy="lazyOnload"
              type="module"
            />

            {/* Render Styles and Player using dangerouslySetInnerHTML to avoid JSX errors with custom elements */}
            <div
              dangerouslySetInnerHTML={{
                __html: `
                <style>
                  wistia-player[media-id='zkwzhxzk35']:not(:defined) {
                    background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/zkwzhxzk35/swatch');
                    display: block;
                    filter: blur(5px);
                    padding-top: 56.25%;
                  }
                </style>
                <wistia-player media-id="zkwzhxzk35" aspect="1.7777777777777777"></wistia-player>
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
