'use client';

import { Center, Image, Space, Stack, Text, Title } from '@mantine/core';
import CaseStudyHeader from '@/src/components/content/case-studies/components/CaseStudyHeader';
import CaseStudyImpact from '@/src/components/content/case-studies/components/CaseStudyImpact';
import CaseStudySkills from '@/src/components/content/case-studies/components/CaseStudySkills';
import MoreBanner from '@/src/components/layout/components/MoreBanner';

export default function Waxwing() {
  return (
    <>
      <Stack gap="xl">
        <CaseStudyHeader
          coverImage="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/waxwing/cover.png"
          coverAlt="Waxwing software cover image"
          metadata="Eureka Software • Lead Designer • 2022"
          title="Inventory management system"
          description="Waxwing is a custom internal tool to manage customer relationships (CRM), order management (OMS), and staff activity. The app is for Hase Petroleum Wax Company, a wax reseller for wax producers throughout North America. This app evolves the company's decade-long workflow of handwritten papers into a functional and organized digital database."
          prototypeUrl="https://www.figma.com/proto/w72Xw17cWu46VIH12qobMq/Waxwing---HP-Wax?page-id=0%3A1&node-id=77-8053&viewport=38%2C3579%2C0.29&scaling=min-zoom&starting-point-node-id=77%3A8053"
          problem="The company currently relies on manual paper-based methods to manage its inventory and orders, resulting in time-consuming processes and an increased risk of errors. Moreover, the documentation of orders lacks consistency among employees, making it challenging to refer to past orders or seamlessly handle orders between team members."
          proposal="Design a custom order management tool for a wholesale wax company that meets and builds on the company's current order management process. This app also needs to allow for flexibility to extend functionality as the company and processes evolve."
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/waxwing/waxwing.png"
          alt="Waxwing software cover image"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Stack py="xl">
          <Title order={2}>User stories</Title>
          <Text size="xl">
            Given the variable and unique nature of the company's products (bulk wax), it was
            especially important to understand the client's users, their needs, and business
            workflows. The company's three primary user personas are Admin staff, Sales staff, and
            Account Managers, all with varying degrees of technical fluency and estimated app usage.
            From there the team and I created user stories, prioritized by the MoSCoW method: "must
            have," "should have," "could have," and "won't have."
          </Text>
        </Stack>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/waxwing/up-fade-c.png"
            alt="Waxwing user stories image"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Design system</Title>
          <Text size="xl">
            The design system uses Google's Material 3 design system, with some customizations like
            color, typography, and grid spacing. Starting with a predefined design system allows the
            development team a much faster development cycle, since most of the components are
            "defined" out of the box. The color customizations are mainly the primary and secondary
            colors, in addition to border colors and background surfaces. Most (if not all) of the
            component styling remains the default Material design.
          </Text>
        </Stack>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/waxwing/ds-elements.png"
            alt="Waxwing design system elements image"
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/waxwing/ui-cover.png"
            alt="Waxwing UI mockup image"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Information architecture</Title>
          <Text size="xl">
            The product was designed so that "Orders" are the central pillar, supported by several
            different data types. For example, customer records, products, carriers, and suppliers
            all compile into what fills out an order. In other words, these data types are the
            foundational setup for an order. Orders are then connected back to user accounts,
            products, carriers, etc. The primary influence this has on functionality is that orders
            can be created from multiple places throughout the product admin. This streamlines and
            simplifies the user experience.
          </Text>
        </Stack>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/waxwing/canvas.png"
            alt="Waxwing design image"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Security and access control</Title>
          <Text size="xl">
            This product is an internal tool, so users should not be able to sign up without having
            to request access from a system admin. Because of this, users are presented with a login
            screen where they can either log in or request access. Requesting access sends account
            admins a notification within the app that a user is requesting access. If accepted, that
            user is sent an email with a link to create their user profile. Additionally, social
            logins allow easier access to the app for existing a new users.
          </Text>
        </Stack>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/waxwing/start.png"
            alt="Waxwing start screen image"
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Dashboard</Title>
          <Text size="xl">
            The home dashboard gives a quick snapshot of the account, with big stats for total
            orders, total sales, and average order value. Line graphs for customer orders and
            purchase orders can be filtered by dates. A recent orders table displays 10 of the most
            recent orders (either by created date or by last updated). The right column of the
            dashboard displays recent account activity, and an overview of the staff user profiles.
          </Text>
        </Stack>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/waxwing/home.png"
            alt="Waxwing home screen image"
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Settings</Title>
          <Text size="xl">
            Settings opens as a nearly fullscreen modal, which allows users to update account
            settings without needing to leave where they were in the app. Within settings is a
            user's individual profile page (and all of their connected orders), staff user accounts,
            account access requests, pending account invites, roles and permissions, 2 factor
            authentication settings, and an account activity feed.
          </Text>
        </Stack>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/waxwing/settings.png"
            alt="Waxwing settings screen image"
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Orders</Title>
          <Text size="xl">
            Orders are the centralizing content element in the app. All data sources ladder up to an
            order. Orders can be found from the orders overview page, which is a table of order
            records that users can search, sort, and filter. New orders can be created from the
            overview, but clicking on an order record will take the user to that order's individual
            page. The order page is where users can manage an order, including updating the order
            status, adding notes, assigning staff to the order, adding or removing products, adding
            or editing a carrier, uploading documents (like bill of lading, invoices, etc.), and
            managing customer info.
          </Text>
        </Stack>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/waxwing/orders.png"
            alt="Waxwing orders screen image"
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/waxwing/order.png"
            alt="Waxwing orders screen image"
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/waxwing/create-order.png"
            alt="Waxwing orders screen image"
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/waxwing/mockup-laptop.png"
            alt="Waxwing mockup image"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Data sources</Title>
          <Text size="xl">
            Products, customers, suppliers, and carriers are the data sources that comprise orders.
            Each data source has it's own "profile" page, where users can manage the information
            associated with that record. For example, products include product data like SKU, name,
            weight, etc. and customer records contain information about a customer, including name,
            phone, email, billing address, etc. Each profile also connects back to the orders they
            were included in, allowing users to access orders from their source.
          </Text>
        </Stack>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/waxwing/products.png"
            alt="Waxwing products screen image"
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/waxwing/customers.png"
            alt="Waxwing customers screen image"
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/waxwing/suppliers.png"
            alt="Waxwing suppliers screen image"
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/waxwing/carriers.png"
            alt="Waxwing carriers screen image"
          />
        </Center>

        <CaseStudyImpact
          stats={[
            {
              label: 'Order Processing',
              value: '-75%',
              description:
                'Reduction in time spent creating and filing new orders compared to the manual workflow.',
            },
            {
              label: 'Data Retrieval',
              value: 'Instant',
              description:
                'Shifted from searching physical files to instant, searchable digital records.',
            },
          ]}
          description="Transforming a decade of paper trails into a streamlined digital workflow significantly reduced administrative overhead."
        />

        <CaseStudySkills
          skills={[
            'UX design',
            'Product strategy',
            'Interaction design',
            'Visual design',
            '0 to 1',
            'Information architecture',
            'Prototyping',
            'Design systems',
          ]}
        />

        <MoreBanner />
        <Space h="xl" />
      </Stack>
    </>
  );
}
