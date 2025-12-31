'use client';

import { IconLeaf, IconShield, IconThumbUp } from '@tabler/icons-react';
import {
  Blockquote,
  Button,
  Card,
  Center,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import CaseStudyHeader from '@/src/components/content/case-studies/components/CaseStudyHeader';
import CaseStudySkills from '@/src/components/content/case-studies/components/CaseStudySkills';
import { CASE_STUDIES } from '@/src/components/content/case-studies/data/case-studies';

export default function VivintEnergy() {
  const study = CASE_STUDIES.find((s) => s.href === '/case-study/vivint-energy');

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
          src={study.coverSrc}
          alt="Vivint case study cover image"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Stack py="xl">
          <Title order={2}>A strategic pivot</Title>
          <Text size="xl">
            As a critical strategic initiative to merge smart home automation with energy
            management, I led the design evolution of "Energy Insights." This project represented a
            fundamental shift in Vivint's product strategy: transforming energy data from a passive
            report into an active driver of the smart home experience. My role was to take the
            product from a post-MVP state through its successful v1.0 and v2.0 releases, while
            defining the long-term vision for v3.0.
          </Text>
        </Stack>

        <Blockquote>
          <Text size="xl">
            The goal was not just to display graphs, but to deeply weave energy intelligence and
            power management into the core app experience and broader ecosystem strategy. By
            evolving the product architecture, we moved energy monitoring from a niche utility to a
            primary reason for user engagement.
          </Text>
        </Blockquote>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-energy/woman-on-phone-1.jpg"
            alt="A woman in her house looking at her phone"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Initial direction</Title>
          <Text size="xl">
            When I joined the project, the initial MVP had been established as a proof-of-concept.
            While it succeeded in displaying raw data, the design suffered from a lack of strategic
            direction. It functioned more like a complex spreadsheet than a consumer-facing smart
            home feature, utilizing a spread out visual style that monopolized screen real estate.
          </Text>
        </Stack>

        <Card withBorder radius="lg" style={{ background: 'white' }}>
          <Center>
            <Image
              src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-energy/initial-designs-mockup-c.png"
              alt="MVP to 1.0 product designs"
            />
          </Center>
        </Card>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-energy/mvp-features-c.png"
            alt="MVP components"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>The modularity problem</Title>
          <Text size="xl">
            The legacy design was "heavy"—both visually and structurally. This density created a
            significant barrier to scalability; because the interface required so much space to
            display simple metrics, it was impossible to integrate these insights modularly into
            other parts of the Vivint app. The feature was siloed in its own tab, requiring users to
            actively dig for data rather than having insights surfaced contextually.
          </Text>
        </Stack>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-energy/1-intro.png"
            alt="1.0 product designs"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Paper p="xl" withBorder radius="lg">
          <Stack gap="xl">
            <Stack gap="xs">
              <Title order={2}>Design principals</Title>
              <Text size="xl">
                To transform technical energy data into a seamless part of the smart home
                experience, we established core design principles. These guide every decision,
                ensuring the product moves beyond a utility bill and becomes a proactive,
                value-driven feature for the everyday homeowner.
              </Text>
            </Stack>

            {/* Principal cards */}
            <SimpleGrid cols={{ base: 1, md: 3 }} spacing={{ base: 'md' }}>
              <Card radius="lg" withBorder p="lg" shadow="xs">
                <Stack gap="sm">
                  <IconLeaf size={30} />
                  {/* Text */}
                  <Stack gap={4}>
                    <Text fw="bold" size="xl">
                      Approachable
                    </Text>
                    <Text c="dimmed" size="sm">
                      Present energy information in an approachable and human way, offering visuals
                      and explanations to users.
                    </Text>
                  </Stack>
                </Stack>
              </Card>

              <Card radius="lg" withBorder p="lg" shadow="xs">
                <Stack gap="sm">
                  <IconThumbUp size={30} />
                  {/* Text */}
                  <Stack gap={4}>
                    <Text fw="bold" size="xl">
                      Engaging
                    </Text>
                    <Text c="dimmed" size="sm">
                      Give users engaging experiences around their energy usage, directly integrated
                      into their Vivint smart home.
                    </Text>
                  </Stack>
                </Stack>
              </Card>

              <Card radius="lg" withBorder p="lg" shadow="xs">
                <Stack gap="sm">
                  <IconShield size={30} />
                  {/* Text */}
                  <Stack gap={4}>
                    <Text fw="bold" size="xl">
                      Trustworthy
                    </Text>
                    <Text c="dimmed" size="sm">
                      Deliver reliable data on usage patterns, bill totals and estimates,
                      disaggregation models, insights, and more.
                    </Text>
                  </Stack>
                </Stack>
              </Card>
            </SimpleGrid>
          </Stack>
        </Paper>

        <Stack py="xl">
          <Title order={2}>Market validation and stabilization</Title>
          <Text size="xl">
            The immediate priority for v1.0 was to stabilize the user experience and ship a usable
            product to validate the market hypothesis. I focused on resolving "low-hanging fruit"
            usability issues within the existing constraints of the MVP codebase. This release was
            about cleaning up the information architecture and ensuring that the data visualization
            was accurate and understandable for the average homeowner.
          </Text>
        </Stack>

        <Card withBorder radius="lg" style={{ background: 'white' }}>
          <Center>
            <Image
              src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-energy/mvp-1-fade-c.png"
              alt="MVP to 1.0 product designs"
              maw={700}
            />
          </Center>
        </Card>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-energy/bill-0-1.png"
            alt="1.0 product designs"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-energy/weekly-insights-0-1.png"
            alt="1.0 product designs"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-energy/disagg-0-1.png"
            alt="1.0 product designs"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-energy/charts-0-1.png"
            alt="1.0 product designs"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Learning from the launch</Title>
          <Text size="xl">
            Following the v1.0 release, user feedback highlighted a critical friction point: users
            found the raw data (kWh, voltage, amperage) confusing and actionable only in retrospect.
            They wanted to know how to save money, not just what they spent. These insights,
            combined with the technical limitations of the legacy code, set the stage for a
            comprehensive rethink of the product strategy.
          </Text>
        </Stack>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-energy/2.0%20slides/11.png"
            alt="2.0 components"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>From dashboard to ecosystem</Title>
          <Text size="xl">
            For v2.0, I proposed and executed a complete redesign centered on modularity. We shifted
            away from the monolithic dashboard approach to a flexible widget-based architecture.
            This strategy focused on reducing the visual footprint of the feature while actually
            increasing data fidelity—transforming complex graphs into "glanceable" insights.
          </Text>
        </Stack>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-energy/2.0%20slides/19.png"
            alt="2.0 components"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-energy/2.0%20slides/20.png"
            alt="2.0 components"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-energy/2.0%20slides/14.png"
            alt="2.0 components"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-energy/2.0%20slides/15.png"
            alt="2.0 components"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-energy/2.0%20slides/17.png"
            alt="2.0 components"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-energy/2.0%20slides/18.png"
            alt="2.0 components"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-energy/2.0%20slides/21.png"
            alt="2.0 components"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-energy/2.0%20slides/22.png"
            alt="2.0 components"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Introducing: Energy profile</Title>
          <Text size="xl">
            To improve model fidelity, we introduced the Home Energy Profile, enabling users to
            fine-tune their data by inputting specific device details, such as EV charging habits.
            This feature marked a significant technical milestone: it established the first reverse
            data pipeline from Vivint back to NRG. This bi-directional flow allowed user inputs to
            retrospectively update historical disaggregation models, resulting in significantly more
            accurate insights."
          </Text>
        </Stack>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-energy/2.0%20slides/16.png"
            alt="2.0 components"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-energy/Energy%20profile-c.png"
            alt="2.0 components"
            radius="lg"
            p="sm"
            style={{ border: '1px solid var(--app-shell-border-color)', background: 'white' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-energy/energy-profile-ba-c.png"
            alt="2.0 components"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>A single, intuitive metric</Title>
          <Text size="xl">
            Energy Score turns complex usage data into a clear 1–10 score, making performance easy
            to understand at a glance. Abstract, universal format enables personalized nudges,
            gamification, and progress tracking. Provides clear context and benchmarks, removing the
            guesswork from interpreting raw kWh or dollar amounts.
          </Text>
        </Stack>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-energy/2.0%20slides/12.png"
            alt="2.0 components"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-energy/2.0%20slides/13.png"
            alt="2.0 components"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Laying the groundwork for scale</Title>
          <Text size="xl">
            To unblock the energy project, I spearheaded a parallel initiative to completely
            recreate the company's design system and color logic. By establishing a new, accessible,
            and flexible foundation, we unlocked the ability to design high-fidelity data
            visualizations that remained legible even at small scales. This infrastructure work was
            the key enabler for the v2.0 modular strategy.
          </Text>
          <Text size="xl">
            As we approached the v2.0 redesign, it became clear that the company's existing design
            system and color palette were insufficient for the "lightweight" and modular future we
            envisioned. The legacy colors were too heavy, and the component library lacked the
            flexibility needed for compact widgets.
          </Text>
          <Stack align="flex-start">
            <Button variant="light" size="md" component="a" href="/case-study/vivint-design-system">
              View project
            </Button>
          </Stack>
        </Stack>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-energy/2.0%20slides/27.png"
            alt="2.0 components"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>Driving adoption through integration</Title>
          <Text size="xl">
            The redesign reduced the interface density by approximately 40%, allowing energy
            components to leave the "Energy Tab" and live on the high-traffic Home Screen. By
            surfacing simplified status updates—such as "Solar producing" or "Grid usage
            high"—alongside security controls, we drove a massive increase in feature adoption and
            made energy awareness a passive, seamless part of the user's daily routine.
          </Text>

          <Text size="xl">
            With a modular system in place, the vision for v3.0 moves from "observation" to
            "automation." The strategy is to embed energy intelligence into the operating system
            layer of the home. Instead of just showing users that energy rates are high, the system
            will proactively offer to adjust the thermostat or delay running major appliances.
          </Text>
        </Stack>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-energy/2.0%20slides/24-c.png"
            alt="2.0 components"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>
        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-energy/2.0%20slides/25-c.png"
            alt="2.0 components"
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <Stack py="xl">
          <Title order={2}>A unified smart home</Title>
          <Text size="xl">
            The ultimate vision connects the dots between disparate hardware. In v3.0, energy data
            becomes a trigger for security and comfort workflows—using solar production data to
            optimize cooling, or battery levels to determine security camera recording quality
            during an outage. This evolution fulfills the promise of the unified smart home, where
            the house doesn't just protect you; it powers itself intelligently.
          </Text>
        </Stack>

        <Center>
          <Image
            src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-energy/house-c.png"
            alt="A image of a home."
            radius="lg"
            style={{ border: '1px solid var(--app-shell-border-color)' }}
          />
        </Center>

        <CaseStudySkills
          skills={[
            'UX design',
            'Product strategy',
            'Interaction design',
            'Visual design',
            'Research & validation',
            'Redesign',
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
