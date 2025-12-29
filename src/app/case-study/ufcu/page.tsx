'use client';

import Script from 'next/script';
import { Blockquote, Box, Center, Image, Stack, Text, Title } from '@mantine/core';
import CaseStudyHeader from '@/src/components/content/case-studies/components/CaseStudyHeader';
import CaseStudyImpact from '@/src/components/content/case-studies/components/CaseStudyImpact';
import CaseStudySkills from '@/src/components/content/case-studies/components/CaseStudySkills';

export default function UFCUBankingApp() {
  return (
    <>
      <Stack gap="xl">
        <CaseStudyHeader
          coverImage="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/ufcu/cover.png"
          coverAlt="UFCU app cover image"
          metadata="University Federal Credit Union • Design Proposal • 2023"
          title="Redesigning mobile banking"
          description="The University Federal Credit Union mobile app was released a few years ago, and while the functionality is okay, the user experience has a lot of room for improvement. In an effort to improve the app for myself and others, I completely redesigned the mobile app from the ground up. One of the goals of this redesign was to maintain the data, just display it better and design a cleaner, more streamlined user experience."
          prototypeUrl="https://www.figma.com/proto/iCXwkVG4Qw3PiLMq5Djdmd/UFCU?page-id=3%3A186&node-id=90-3270&viewport=124%2C2421%2C0.33&scaling=scale-down&starting-point-node-id=90%3A3270&show-proto-sidebar=1"
          problem="The user experience is confusing, difficult to use, and broken in certain areas of the product. The app is slow and the interface is not accessible, as the buttons are small and the text is challenging to read."
          proposal="Redesign the mobile interface and user experience to deliver a comprehensive suite of financial tools for UFCU members. This redesign needs to maintain, improve, and add features, while also improving accessibility and usability."
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/ufcu/ufcu-cover.png"
          alt="UFCU cover image"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Stack py="xl">
          <Title order={2}>Lightweight design system</Title>
          <Text size="xl">
            Defining color tokens, typography styles, and components is key to iterating and
            managing a design file as it scales. For example, if a color needs to change, you can
            simply update the base color token and all instances where that token was used are
            updated. The example below is what I consider a "lightweight" design system, which is
            another way of saying the baseline fundamentals of what's needed to work faster and
            scale easier.
          </Text>
        </Stack>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/ufcu/colors.png"
            alt="UFCU design system elements"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/ufcu/ds-elements.png"
            alt="UFCU design system elements"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/ufcu/ui-cover.png"
            alt="UFCU UI elements"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Redesigning the mobile experience</Title>
          <Text size="xl">
            The mobile app needed a range of important updates to the user interface and the user
            experience. Certain areas of the product left the user with no way to navigate back once
            there, buttons and links were way too small to easily use on a mobile device, the layout
            was inefficient, and the information architecture was confusing.
          </Text>
        </Stack>

        <Blockquote>
          <Text size="xl">
            My focus with the redesign was to maintain all of the current app's data sources and
            work on improving the user interface, the user experience, and the information
            architecture.
          </Text>
        </Blockquote>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/ufcu/figma-canvas.png"
            alt="UFCU redesign Figma canvas"
            radius="lg"
            p="lg"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Login and Express View</Title>
          <Text size="xl">
            The improvements to the login page are to make the interface more accessible, by
            increasing the size and space for all of the interactive elements on the page, as well
            as presenting a clearer visual language to the user. Other improvements are to
            consolidate the two "forget password" and "forget login ID" into a single link, move the
            "Enroll" button to the bottom of the screen (since this is not a primary user action),
            include a more accessible phone link in the top navigation, and give the user access to
            Express View.
          </Text>
          <Text size="xl">
            Express View is a quick snapshot of a user's account balances and recent transactions,
            without needing to log in. In the previous app design, Express View opens once the app
            is launched--if the user leaves Express View there is no way back to this view without
            closing the app and opening it again. The redesign introduces a section nav, which
            includes the section heading and a tabbed navigation for each subsection. These sections
            can also be navigated with a side swipe.
          </Text>
        </Stack>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/ufcu/login-before-after.png"
            alt="UFCU app redesign screenshots"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/ufcu/login-frames.png"
            alt="UFCU app redesign screenshots"
            radius="lg"
            p="md"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/ufcu/login-designs.png"
            alt="UFCU app redesign screenshots"
            radius="lg"
            p="md"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Main menu and settings</Title>
          <Text size="xl">
            The order of the menu items in the main nav have been rearranged to position higher
            priority elements at the top (like contact info), and the interface takes up the full
            screen width, allowing more room for icons, labels, and interactions. Settings has been
            completely overhauled to include editable profile information, and settings associated
            with features in the app, like Express View and notification settings. A security
            section has also been introduced for the possibility of including a pin number to login
            to the app, etc. In the previous app, users did not have an option to log out of their
            account, so a "log out" button has also been added.
          </Text>
        </Stack>

        <Blockquote>
          <Text size="xl">
            Each subsection from the main menu has been redesigned to improve user interactions,
            functionality, accessibility, and information architecture.
          </Text>
        </Blockquote>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/ufcu/settings-before-after.png"
            alt="UFCU app redesign screenshots"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/ufcu/locations.png"
            alt="UFCU app redesign screenshots"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/ufcu/routing-number.png"
            alt="UFCU app redesign screenshots"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/ufcu/frames.png"
            alt="UFCU app redesign screenshots"
            radius="lg"
            p="md"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/ufcu/phones-mockup.png"
            alt="UFCU app redesign phones mockup"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Accounts</Title>
          <Text size="xl">
            The redesign focused on bringing clarity to account balances and transactions. This was
            accomplished by increasing the size of the account balance number and improving the
            layout to more easily parse the information. Transactions are now grouped by date, which
            provides room to include transaction categories for each record. The search and filter
            features are consolidated and setup within overlays to allow more screen space and
            reduce cognitive overload. Transaction details have been redesigned from a modal into a
            overlay, with additional functionality to change transaction title, category, and submit
            a transaction inquiry.
          </Text>
        </Stack>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/ufcu/accounts.png"
            alt="UFCU app redesign phones mockup"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/ufcu/accounts-frames.png"
            alt="UFCU app redesign phones mockup"
            radius="lg"
            p="md"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Transfers and deposits</Title>
          <Text size="xl">
            Transfers and deposits in the original app started with a modal that was not optimized
            for mobile: the buttons were too close together and the cancel button was difficult to
            tap. Additionally, users were not able to see a history of the transfers or deposits
            they made from these sections. The redesign presented a history of transfers and
            deposits, as well as a clearer transfer and deposit creation flow.
          </Text>
        </Stack>

        <Blockquote>
          <Text size="xl">
            The redesign offers more accessible inputs and a clearer user experience.
          </Text>
        </Blockquote>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/ufcu/transfers.png"
            alt="UFCU app app redesigns"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/ufcu/transfers-frames.png"
            alt="UFCU app app redesigns"
            radius="lg"
            p="md"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/ufcu/deposit-check.png"
            alt="UFCU app app redesigns"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/ufcu/deposit-frames.png"
            alt="UFCU app app redesigns"
            radius="lg"
            p="md"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Spending and activity</Title>
          <Text size="xl">
            The activity section has been completely redesigned to be integrated into the product.
            The previous app was designed where transactions in the Account section were not managed
            the same as from the "Money Manager" section. The two remained separated, which meant
            maintaining two separate records of transactions, that were otherwise the same thing. I
            renamed this product space from "Money Manager" to Activity. Now users can manage
            transactions on an account level from Accounts, or on a transaction level from Activity.
            Activity allows the user to see all transactions by date, across accounts.
          </Text>
        </Stack>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/ufcu/activity.png"
            alt="UFCU app app redesigns"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/ufcu/activity-frames.png"
            alt="UFCU app app redesigns"
            radius="lg"
            p="md"
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
              src="https://fast.wistia.com/embed/5gld8ybmmd.js"
              strategy="lazyOnload"
              type="module"
            />

            {/* Render Styles and Player using dangerouslySetInnerHTML to avoid JSX errors with custom elements */}
            <div
              dangerouslySetInnerHTML={{
                __html: `
                <style>
                  wistia-player[media-id='5gld8ybmmd']:not(:defined) {
                    background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/5gld8ybmmd/swatch');
                    display: block;
                    filter: blur(5px);
                    padding-top: 56.25%;
                  }
                </style>
                <wistia-player media-id="5gld8ybmmd" aspect="1.7777777777777777"></wistia-player>
              `,
              }}
            />
          </Box>
        </Center>

        <CaseStudyImpact
          stats={[
            {
              label: 'Accessibility improvements',
              description:
                'Through higher contrast ratios, larger font sizes, and a better information architecture, the app is much more accessible to all users, especially the visually impaired.',
            },
            {
              label: 'A better user experience',
              description:
                'Consistency across all user interactions and the interface improves the user experience, from viewing account balances and transactions to making deposits.',
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
            'Redesign',
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
