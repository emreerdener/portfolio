'use client';

import Script from 'next/script';
import { Blockquote, Box, Card, Center, Image, Stack, Text, Title } from '@mantine/core';
import CaseStudyHeader from '@/src/components/content/case-studies/components/CaseStudyHeader';
import CaseStudyImpact from '@/src/components/content/case-studies/components/CaseStudyImpact';
import CaseStudySkills from '@/src/components/content/case-studies/components/CaseStudySkills';
import HippoBambooAnimation from '@/src/components/content/case-studies/components/tripway/animations/HippoBambooAnimation';
import HippoBikeAnimation from '@/src/components/content/case-studies/components/tripway/animations/HippoBikeAnimation';
import HippoChairAnimation from '@/src/components/content/case-studies/components/tripway/animations/HippoChairAnimation';
import HippoGlideAnimation from '@/src/components/content/case-studies/components/tripway/animations/HippoGlideAnimation';
import HippoLogoAnimation from '@/src/components/content/case-studies/components/tripway/animations/HippoLogoAnimation';

export default function Tripway() {
  return (
    <>
      <Stack gap="xl">
        <CaseStudyHeader
          coverImage="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tripway/cover.jpg"
          coverAlt="Tripway cover image"
          metadata="Tripway • Design Proposal • 2023"
          title="Simplify travel expenses"
          description="Tripway helps you track your travel expenses, split payments with friends, and gain insight into your travel spending patterns. Keep track of who owes what, how much you've paid for different trip and expense categories, and make payments to friends and family through your trusted payment service, like Venmo or PayPal."
          prototypeUrl="https://www.figma.com/proto/ru0w8LnUiE2P3uofc25ity/Tripway?page-id=0%3A1&node-id=386-16643&viewport=277%2C514%2C0.05&scaling=scale-down&starting-point-node-id=386%3A16643"
          problem="It is difficult and time-consuming to track travel expenses with friends, and calculating expense splits can be tricky. If expenses are kept in an external document, it takes a lot of back and forth to sync payments, requests, etc. Additionally, there is not an easy way to identify spending patterns, view travel insights, and learn about your spending."
          proposal="Design a mobile app to help users track and split travel spending. This app needs to have a defined data structure and a seamless user experience. Along with the app there needs to be a brand, custom assets and animations, and a frontend marketing website."
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tripway/tripway.png"
          alt="Tripway cover image"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Stack py="xl">
          <Title order={2}>Actionable data</Title>
          <Text size="xl">
            Mapping out the relation between data points, what inputs are necessary, and how data is
            stored was an important step in setting up the conceptual foundation of the user
            interface. This provided a way to put a view on the data, which streamlined the product
            requirements and clearly outlined the organization of the app.
          </Text>
        </Stack>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tripway/database-monitor.png"
            alt="Tripway database mockup"
            radius="lg"
            p="lg"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Conceptual framework</Title>
          <Text size="xl">
            Mapping out the database schema defines different ways the product is organized. For
            example, the Trips table lists each trip record that expenses are linked with. When
            considering the layout of the user interface, Trips is represented as its own section. A
            trip also needs to be created first, in order for expenses to then be linked. This also
            outlines some of the initial user flows for creating new records.
          </Text>
        </Stack>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tripway/schema.png"
            alt="Tripway database schema diagram"
          />
        </Center>

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tripway/3phones.png"
          alt="Tripway phones mockup image"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Stack py="xl">
          <Title order={2}>Designing the interface</Title>
          <Text size="xl">
            I started this project working directly in Figma. I began with the trips page,
            representing all of the data points available for that page. These included: the trip
            name, description, location, category tags, the dates, the expense total, which profiles
            were tagged on that trip (who was included on the trip), and the paid status (paid or
            not paid).
          </Text>
        </Stack>

        <Blockquote>
          <Text size="xl">
            Once the framework of the design was in place, new features were incorporated into the
            concept. These included liking posts, uploading photos, comments, and exporting posts.
          </Text>
        </Blockquote>

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tripway/design-canvas.png"
          alt="Tripway designs"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Stack py="xl">
          <Title order={2}>Interactions & prototype</Title>
          <Text size="xl">
            Interactions were carefully chosen based on the visual input from the user interface.
            Pages that push in from the right side can be closed by swiping from the left side, tabs
            pan the corresponding way, fly up menus close down, etc. More importantly are the
            sections that open as an overlay instead of a navigation / view reload. If a user closes
            an overlay the previous section is still visible, uninterrupted. This can be especially
            beneficial in scenarios where the user needs to engage a creation flow (like creating a
            new category), without needing to change the view.
          </Text>
        </Stack>

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tripway/prototype.png"
          alt="Tripway design prototype"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Stack py="xl">
          <Title order={2}>User testing</Title>
          <Text size="xl">
            I conducted a series of user tests with the prototype to get some feedback on the user
            experience and learn more about the app's potential users. The main test asked users to
            sign in and pay for an expense request. This required users to navigate through the app,
            to locate an expense request, and then pay. This task is the core functionality of the
            app, so if done right everything else is added around this. Feedback indicated that the
            user experience was intuitive and easy to use.
          </Text>
        </Stack>

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tripway/user-research.png"
          alt="Tripway user research"
          radius="lg"
          pt="lg"
          style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tripway/phones-greece.png"
          alt="Tripway mockup"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Stack py="xl">
          <Title order={2}>Creating a travel brand</Title>
          <Text size="xl">
            The project was originally called "Trippo" which is the inspiration for the hippo
            graphics and animations. The logo mark is a hippo face and a suitcase (easier to see in
            the animation below). Due to trademarks the project had to be renamed to Tripway. The
            brand colors are bold and contrast well across the website and the product. The Tripway
            brand is meant to convey a fun, playful spirit, with a clean and professional aesthetic.
          </Text>
        </Stack>

        <Card withBorder radius="lg" style={{ background: 'white' }}>
          <HippoChairAnimation />
        </Card>

        <Card withBorder radius="lg" style={{ background: 'white' }}>
          <HippoBambooAnimation />
        </Card>

        <Card withBorder radius="lg" style={{ background: 'white' }}>
          <HippoGlideAnimation />
        </Card>

        <Card withBorder radius="lg" style={{ background: 'white' }}>
          <HippoBikeAnimation />
        </Card>

        <Card withBorder radius="lg" style={{ background: 'white' }}>
          <Center>
            <Stack maw={400}>
              <HippoLogoAnimation />
            </Stack>
          </Center>
        </Card>

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tripway/logo.png"
          alt="Tripway logo"
          radius="lg"
          p="lg"
          style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tripway/logo2.png"
          alt="Tripway logo"
          radius="lg"
          p="sm"
          style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tripway/design-system.png"
          alt="Tripway design system"
          radius="lg"
          p="sm"
          style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
        />
        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tripway/illustrations.png"
          alt="Tripway illustrations and icons"
          radius="lg"
          p="sm"
          style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tripway/app-store.png"
          alt="Tripway app store mockups"
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
              src="https://fast.wistia.com/embed/rl8hsnw49n.js"
              strategy="lazyOnload"
              type="module"
            />

            {/* Render Styles and Player using dangerouslySetInnerHTML to avoid JSX errors with custom elements */}
            <div
              dangerouslySetInnerHTML={{
                __html: `
                <style>
                  wistia-player[media-id='rl8hsnw49n']:not(:defined) {
                    background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/rl8hsnw49n/swatch');
                    display: block;
                    filter: blur(5px);
                    padding-top: 56.25%;
                  }
                </style>
                <wistia-player media-id="rl8hsnw49n" aspect="1.7777777777777777"></wistia-player>
              `,
              }}
            />
          </Box>
        </Center>

        <CaseStudyImpact
          stats={[
            {
              label: 'Complete design',
              description:
                'Fully designed and prototyped app, from sign up and getting started, to tracking payments and splitting expenses.',
            },
            {
              label: 'Brand & marketing',
              description:
                'Complete brand and website design, from logo and brand guidelines, to animations and copy.',
            },
          ]}
          description="This comprehensive design proposal resolves the friction of group travel finance, delivering a cohesive brand and product ecosystem that transforms complex expense splitting into an intuitive and stress-free experience."
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
      </Stack>
    </>
  );
}
