'use client';

import Script from 'next/script';
import { Blockquote, Box, Center, Image, Stack, Text, Title } from '@mantine/core';
import CaseStudyHeader from '@/src/components/content/case-studies/components/CaseStudyHeader';
import CaseStudySkills from '@/src/components/content/case-studies/components/CaseStudySkills';
import BunnyAnimation from '@/src/components/content/case-studies/components/tiny-tails/animation/BunnyAnimation';
import { CASE_STUDIES } from '@/src/components/content/case-studies/data/case-studies';

export default function TinyTails() {
  const study = CASE_STUDIES.find((s) => s.href === '/case-study/tiny-tails');

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
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tiny-tails/hedgehog.png"
          alt="Tiny Tails cover image"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Stack py="xl">
          <Title order={2}>Refining a growing business</Title>
          <Text size="xl">
            The scope of this project began with considering how the business could become more
            streamlined to open in a new city the following year. This lead to designing an
            automated ordering process, while maintaining manual control of important aspects of the
            order.
          </Text>
          <Text size="xl">
            Designing a seamless customer experience necessitated considering every detail of the
            customer's experience, from initial interest to purchase. This experience needed to
            coordinate equally as seamlessly with the operations and administration team.
          </Text>
        </Stack>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tiny-tails/original.png"
            alt="Tiny Tails original website screenshot"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tiny-tails/process.jpg"
            alt="Tiny Tails design process proposal"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tiny-tails/features.jpg"
            alt="Tiny Tails design features proposal"
            radius="lg"
            p="xl"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tiny-tails/timeline.png"
            alt="Tiny Tails design timeline proposal"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tiny-tails/repitle.jpg"
            alt="Tiny Tails repitle"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Simplified services</Title>
          <Text size="xl">
            Each service was defined by the number of people interacting with the animals. This
            informed how many animals and staff were needed. A large group of people required a
            larger number of animals, to ensure the safety of the animals and respect not
            over-handling them. This, in turn, required more staff members to run the event.
          </Text>
          <Text size="xl">
            One of the biggest challenges Tiny Tails to You faced was bargain shoppers. Unlike other
            services, where customers can shop sizes and prices, Tiny Tails to You events have a
            size requirement. Part of their time was spent explaining to customers why they had to
            have a larger size for their event. This lead to frustrated customers and lost sales.
          </Text>
        </Stack>

        <Blockquote color="green">
          <Text size="xl">
            The solution: remove the user's ability to select the size of the zoo themselves. The
            answer to the question "How many people do you expect to interact with our animals?"
            automatically selects the corresponding size. This also sets up the base price for that
            customer's instant quote.
          </Text>
        </Blockquote>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tiny-tails/lead-form.png"
            alt="The lead form for tiny tails web customers"
            radius="lg"
            p="lg"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tiny-tails/animal-groups.png"
            alt="Animal groups for tiny tails"
            radius="lg"
            py="lg"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>The lead form</Title>
          <Text size="xl">
            On average, customers were spending upwards of thirty minutes filling out the
            reservation form on their website. Thirty minutes is an absurdly long time to spend
            ordering a luxury / playful service. We needed a way to reduce the time for each
            reservation and get the essential information for what the Tiny Tails to You staff
            needed in order to assess if a customer was serviceable. We came up with 8 fields: Age
            Group, Date, Flexible, Number of People, Zip Code, Name, Email, Phone.
          </Text>

          <Center py="xl">
            <Image
              src=" https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tiny-tails/data-flow.png"
              alt="Data flow for tiny tails"
              radius="lg"
              py="lg"
              style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
            />
          </Center>

          <Text size="xl">
            The lead form submits the information to their CRM database, and passes the information
            to hidden fields on the "Experience" form. This way customers are seamlessly brought
            into the more complicated experience form, and if they bounce or abandon the experience
            form, Tiny Tails to You is still able to capture their information and put that lead
            into a sales funnel.
          </Text>
          <Text size="xl">
            Once implemented, the average time customers spent on their forms went down by over 68%
            percent. The average time spent on the lead form is around 90 seconds, and the
            reservation form is just under 7-8 minutes. The experience form also presents customers
            with a quote price for their event, including travel fees (calculated from the zip code
            entered on the lead form). This simplifies the price even more, making the buying
            experience that much easier.
          </Text>
        </Stack>

        <Blockquote>
          <Text size="xl">
            The order form is fully customizable, allowing customers to upgrade their size, add
            extra animals, glitter tattoo artist, a photographer, and more.
          </Text>
        </Blockquote>

        <Center py="md">
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tiny-tails/order-form.png"
            alt="Tiny tails web order form screenshot"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Automated efficiency</Title>
          <Text size="xl">
            Automation is a key part of running a business at any scale. With clean, organized, and
            structured data we were able to setup automated marketing emails, automated service and
            transactional messages, weather alerts, feedback requests, dynamic invoice creation and
            sends, reminders, internal company alerts, and more.
          </Text>
          <Text size="xl">
            Staff are able to process customer orders significantly faster, with the average
            processing time becoming 12 times faster, from almost an hour per customer to just under
            5 minutes per customer.
          </Text>
        </Stack>

        <Blockquote>
          <Text size="xl">
            With most of the system automated, this allowed the team to focus on other parts of
            their work, while continuing to provide an individualized and personable customer
            experience.
          </Text>
        </Blockquote>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tiny-tails/database-schema.png"
            alt="Tiny tails database schema diagram"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tiny-tails/database-monitor.png"
            alt="Tiny tails database mockup"
            radius="lg"
            py="lg"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Analytics</Title>
          <Text size="xl">
            With every customer data point, interaction, and touchpoint saved in a database, we are
            able to build custom reporting to analyze the data and get insights on customer behavior
            and business performance. This has allowed Tiny Tails to You to understand their target
            demographic, average customer value, gender, seasonal growth, sales trends, marketing
            efforts, and more.
          </Text>

          <Text size="xl">
            The analytics is fully customizable through Airtable, allowing staff to build new
            insight reports, or update their dashboard as the company evolves and grows.
          </Text>
        </Stack>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tiny-tails/analytics.png"
            alt="Tiny tails analytics mockup"
            radius="lg"
            py="lg"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tiny-tails/hedgehog-held.jpg"
            alt="A hedgehog held in hands"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Stack py="xl">
          <Stack align="center">
            <Box w="100%" maw={400}>
              <BunnyAnimation />
            </Box>
          </Stack>

          <Title order={2}>The experience</Title>
          <Text size="xl">
            The website was designed to showcase an organized, clean, and simple experience. The
            goal is to translate the ease, simplicity, and clarity of the user experience all the
            way through to the event. Every event is highly organized and efficient, while also
            being adorable, fun, and engaging.
          </Text>

          <Text size="xl">
            At its core, the purpose of the website is to get customers to fill out the Availability
            (lead) form. With that in mind, every page converts the visitor to this form. The
            evolving reasons for why they should complete the form range from checking availability,
            getting pricing, booking your event, or requesting a call. This funnels all visitors
            into a single, optimizable, and trackable funnel.
          </Text>
        </Stack>

        <Blockquote>
          <Text size="xl">
            As a customer, you are not just getting a "petting zoo," you are getting the Tiny Tails
            to You Experience.
          </Text>
        </Blockquote>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tiny-tails/party-bunny.jpg"
            alt="Party bunny"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tiny-tails/devices-mockup.png"
            alt="Website mockup"
            radius="lg"
            p="lg"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tiny-tails/illustrations.png"
            alt="Animal illustrations"
            radius="lg"
            p="xl"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tiny-tails/animals.png"
            alt="Animal groups"
            radius="lg"
            p="xl"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tiny-tails/baskets.jpg"
            alt="Chelsea and coworkers with animal baskets"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tiny-tails/chelsea-joe.jpg"
            alt="Chelsea and Joe co-owners"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Center py="xl">
          <div
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
              src="https://fast.wistia.com/embed/wh5jf1eeh6.js"
              strategy="lazyOnload"
              type="module"
            />

            {/* Render Styles and Player using dangerouslySetInnerHTML to avoid JSX errors with custom elements */}
            <div
              dangerouslySetInnerHTML={{
                __html: `
                <style>
                  wistia-player[media-id='wh5jf1eeh6']:not(:defined) {
                    background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/wh5jf1eeh6/swatch');
                    display: block;
                    filter: blur(5px);
                    padding-top: 56.25%;
                  }
                </style>
                <wistia-player media-id="wh5jf1eeh6" aspect="1.7777777777777777"></wistia-player>
              `,
              }}
            />
          </div>
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
