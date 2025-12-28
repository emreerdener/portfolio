'use client';

import { Blockquote, Card, Center, Image, Space, Stack, Text, Title } from '@mantine/core';
import CaseStudyHeader from '@/src/components/content/case-studies/components/CaseStudyHeader';
import CaseStudyImpact from '@/src/components/content/case-studies/components/CaseStudyImpact';
import CaseStudySkills from '@/src/components/content/case-studies/components/CaseStudySkills';
import BedAnimation from '@/src/components/content/case-studies/components/tarbox/animations/BedAnimation';
import CheersAnimation from '@/src/components/content/case-studies/components/tarbox/animations/CheersAnimation';
import RingAnimation from '@/src/components/content/case-studies/components/tarbox/animations/RingAnimation';
import MoreBanner from '@/src/components/layout/components/MoreBanner';

export default function Tarbox() {
  return (
    <>
      <Stack gap="xl">
        <CaseStudyHeader
          coverImage="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tarbox/tarbox-cover.jpg"
          coverAlt="Tarbox cover image"
          metadata="Tarbox • Lead Designer • 2021"
          title="Redefining the booking experience"
          description="A boutique inn, surrounded by 12 acres of pastoral farmland, heritage woods, and a tranquil salt marsh. Built in 1763 and restored in 2018, the historic property is a peaceful retreat. Fifteen minutes from Wiscasset and the Boothbay region, in midcoast Maine. Rest, unwind, and explore our favorite local spots in Maine."
          websiteUrl="https://www.squiretarboxinn.com/"
          problem="The customer experience cannot be handled efficiently by a small team while maintaining an individual, personalized experience. The brand has no guidelines for content or design, and the company lacks marketing automation and content. Additionally, there is no reporting on marketing, business performance, or customer metadata."
          proposal="Optimize the brand, business processes, and customer experience across all channels, as well as introduce a new brand, tech stack, and business logic to increase conversions and business efficiency."
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tarbox/tarbox.jpg"
          alt="Tarbox cover image"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Stack py="xl">
          <Title order={2}>Refining the brand</Title>
          <Text size="xl">
            The Squire Tarbox brand had a promising start, but required clearer direction and
            guidelines for style and implementation. To initiate the project, I began by organizing
            all of their existing brand assets to gain an understanding of how they present
            themselves and identify areas that require improvement. The first order of business was
            to enhance their logo by increasing the stroke width, resulting in a higher contrast and
            more prominent presence (previously, the thin lettering was difficult to discern). The
            subsequent step involved establishing brand guidelines encompassing typography (fonts,
            headings, weights, styles, etc.), brand colors, design guidelines, mission statement,
            and style rules.
          </Text>
        </Stack>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tarbox/logo.jpg"
            alt="Tarbox logo image"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tarbox/brand-guide.png"
            alt="Tarbox brand guide image"
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tarbox/sitemap.png"
            alt="Tarbox sitemap image"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Components & architecture</Title>
          <Text size="xl">
            Outlining the core component blocks is a critical part of setting up the information
            architecture. The three primary products of the Squire Tarbox are: inn reservations,
            weddings, and private events. Setting up the information architecture around these
            products allows for cross-referencing content across the website through reusable
            components, as well as defining specific sales funnels for each type. For example, one
            area of the website was the Local Guide ("things to do"). These posts are valuable SEO
            content, partner relationships, and a cross-functional way to add content to the inn
            reservation funnel. "Stay at the inn, and check out all these great things to do while
            you are here!"
          </Text>
        </Stack>

        <Blockquote>
          <Text size="xl">
            With these modular components, the Squire Tarbox staff can add, update, or edit featured
            businesses from a single data source and have that automatically update in multiple
            areas across the website.
          </Text>
        </Blockquote>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tarbox/components.png"
            alt="Tarbox components image"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tarbox/monitors-mockup.png"
            alt="Tarbox monitors mockup image"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Card withBorder radius="lg" style={{ background: 'white' }}>
          <RingAnimation />
        </Card>

        <Card withBorder radius="lg" style={{ background: 'white' }}>
          <BedAnimation />
        </Card>

        <Card withBorder radius="lg" style={{ background: 'white' }}>
          <CheersAnimation />
        </Card>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tarbox/barn.jpg"
            alt="Tarbox barn image"
            radius="md"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Marketing ecosystem</Title>
          <Text size="xl">
            A successful customer experience is one that not only works seamlessly, but delights the
            customer in the process. With the Squire Tarbox's small operational team, the attention
            and nurturing that improves a customer's experience is difficult to attain at scale. A
            seamless experience for the company and team translates to a seamless experience for the
            customer, driving more sales and positive reviews.
          </Text>
        </Stack>

        <Blockquote>
          <Text size="xl">
            I began by outlining the customer's journey and how data flows through the system. I
            automated different touch-points, to provide that personal touch at scale. Setting up
            separate funnels for each service allowed me to create unique customer experiences, as
            well as track the success of each process (allowing for data driven optimization and
            customer behavior insights).
          </Text>
        </Blockquote>

        <Center py="md">
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tarbox/data-flow.png"
            alt="Tarbox data flow image"
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>The guest experience</Title>
          <Text size="xl">
            The objective is to represent the products and services with a consistent high level of
            quality from the first point a customer interacts with the brand, all the way through to
            payment and checkout, and on into getting feedback and reviews. With the website as the
            framework for communicating and directing customers into different lead and sales
            funnels, I created a series of email marketing templates, social posts, sales materials,
            and other marketing assets, to focus on different ways to create customer engagement and
            showcase the brand, products, and company.
          </Text>
        </Stack>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tarbox/devices-mockup.jpg"
            alt="Tarbox devices mockup image"
            radius="lg"
            py="xl"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tarbox/emails.png"
            alt="Tarbox emails mockup image"
            radius="lg"
            py="xl"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tarbox/giftcard.jpg"
            alt="Tarbox giftcard image"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tarbox/room.jpg"
            alt="Tarbox room image"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Improved performance</Title>
          <Text size="xl">
            Rebuilding and redesigning the Squire Tarbox website was a critical part of their
            success. The primary goals I focused on achieving were to improve the usability and
            accessibility of the site on desktop and mobile, offer clearer navigation and richer
            content, significantly reduce page weight (the previous homepage was over 10MB!) to
            increase load speed and SEO performance, and improve the responsiveness of the design
            for all devices. The results were huge performance improvements, considerably improving
            page speed, SEO keywords and content, structured data and schema, and all around
            engagement and conversions.
          </Text>
        </Stack>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tarbox/page-speed.png"
            alt="Tarbox page speed image"
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Detailed metrics</Title>
          <Text size="xl">
            Clean, reliable, and automatically updated data is enormously valuable to every
            business, from customer profile information to order information. All inquiry and order
            data is automatically synced with a custom database, to track ROI on advertising
            campaigns, analyze website performance, attribute brand ambassador revenue, and more. As
            customers evolve through the customer journey, we are able to update the customer
            profile status to ensure leads, new guests, and returning guests are all enrolled in the
            correct marketing funnels. With an ever growing data set, we are able to build reports
            to discover insights about the business, learn their customer behavior, identify average
            customer values, and more.
          </Text>
        </Stack>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tarbox/database-laptop.png"
            alt="Tarbox database laptop image"
            radius="lg"
            py="md"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tarbox/data-points.png"
            alt="Tarbox data points image"
            radius="lg"
            py="xl"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tarbox/stats.png"
            alt="Tarbox stats image"
            radius="lg"
            py="xl"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <CaseStudyImpact
          stats={[
            {
              label: 'Faster loading speed',
              value: '10X',
              description:
                'With a more efficient design, build, and optimized content, the page speed improved by more than 4 seconds on desktop and mobile.',
            },
            {
              label: 'Increased bookings',
              value: '300%',
              description:
                'The site brings in higher organic traffic with better SEO performance, delivers a seamless user experience, and has significantly faster load times.',
            },
          ]}
          description="The redesigned website and marketing ecosystem led to a substantial increase in bookings, improved user engagement, and enhanced overall business performance."
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
