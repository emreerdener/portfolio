'use client';

import { Blockquote, Image, Stack, Text, Title } from '@mantine/core';
import CaseStudyHeader from '@/src/components/content/case-studies/components/CaseStudyHeader';
import CaseStudySkills from '@/src/components/content/case-studies/components/CaseStudySkills';
import { CASE_STUDIES } from '@/src/components/content/case-studies/data/case-studies';

export default function BTRES() {
  const study = CASE_STUDIES.find((s) => s.href === '/case-study/rehearscore');

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
          <Title order={2}>Auditing the legacy app</Title>
          <Text fz={{ base: 'md', md: 'xl' }}>
            The project directive was strict: deliver a complete technical rewrite that preserves
            all existing functionality while modernizing the codebase. To ensure zero feature
            regression, I conducted a comprehensive visual audit, cataloging every screen, error
            state, and interaction flow of the legacy application.
          </Text>
          <Text fz={{ base: 'md', md: 'xl' }}>
            I translated this audit into a robust set of user stories that served as our "source of
            truth." These stories defined the functional requirements for complex features like vamp
            creation, track mixing, and tempo adjustment. This documentation was critical for
            validating our design direction, ensuring that every new interface decision supported
            the professional workflows performers relied on.
          </Text>
        </Stack>

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/slides/3.png"
          alt="RehearScore designs"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />
        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/slides/4.png"
          alt="RehearScore designs"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Blockquote>
          <Text size="xl">
            The audit also exposed fundamental UX issues we needed to resolve, such as ambiguous
            iconography and poor accessibility. We expanded the scope to include WCAG 2.1 AA
            compliance and specific "quality of life" features, such as a new "Playlist Mode" for
            uninterrupted run-throughs and clearer error messaging for login failures.
          </Text>
        </Blockquote>

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/slides/16.png"
          alt="RehearScore designs"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/slides/17.png"
          alt="RehearScore designs"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/slides/18.png"
          alt="RehearScore designs"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/control-c.png"
          alt="RehearScore original app designs"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Stack py="xl">
          <Title order={2}>Removing barriers to entry</Title>
          <Text fz={{ base: 'md', md: 'xl' }}>
            The previous design relied on confusing UI patterns, such as a static arrow pointing to
            a generic plus button, which left new users unsure of how to begin. To streamline access
            and reduce data liability, we removed user accounts entirely in favor of a direct 'Show
            Code' system. I redesigned the interface to prioritize clear, labeled actions—allowing
            users to instantly download their show, access policy links, or demo the app with sample
            songs—significantly reducing the number of screens required to get started.
          </Text>
        </Stack>

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/slides/19.png"
          alt="RehearScore designs"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/slides/20.png"
          alt="RehearScore designs"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/slides/21.png"
          alt="RehearScore designs"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/slides/22.png"
          alt="RehearScore designs"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/get-started/start-before-after-c.png"
          alt="RehearScore get started before and after"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />
        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/get-started/start-figma-c.png"
          alt="RehearScore figma designs"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />
        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/get-started/get-started-user-stories-c.png"
          alt="RehearScore user stories"
        />

        <Stack py="xl">
          <Title order={2}>Richer, clutter-free sampling</Title>
          <Text fz={{ base: 'md', md: 'xl' }}>
            Previously, sample songs were permanently injected into a user's library, creating
            unnecessary clutter. I introduced a dedicated samples page accessible directly from the
            'Get Started' screen, allowing users to explore the app's capabilities without polluting
            their personal repertoire. I upgraded the UI from narrow list items to immersive song
            cards featuring visualized audio waveforms, making the content feel richer and more
            engaging, while also providing quick access to the company's essential start guide.
          </Text>
        </Stack>

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/slides/23.png"
          alt="RehearScore designs"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/slides/24.png"
          alt="RehearScore designs"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/samples/samples-before-after.png"
          alt="RehearScore samples before and after"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />
        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/samples/samples-figma-c.png"
          alt="RehearScore figma designs"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />
        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/samples/samples-user-stories.png"
          alt="RehearScore user stories"
        />

        <Stack py="xl">
          <Title order={2}>A unified repertoire hub</Title>
          <Text fz={{ base: 'md', md: 'xl' }}>
            The shows dashboard is the performer's home base. I moved away from dense lists to
            spacious, information-rich cards that display key details—like song count and
            duration—at a glance. To handle growing libraries, I introduced a dedicated search bar
            for instant access. I also streamlined the acquisition flow with a clear 'Add Show'
            button, triggering the code entry bottom sheet so users can expand their repertoire
            without leaving the dashboard.
          </Text>
        </Stack>

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/slides/25.png"
          alt="RehearScore designs"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/slides/26.png"
          alt="RehearScore designs"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/shows/Shows%20before-after-c.png"
          alt="RehearScore shows before and after"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />
        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/shows/shows-figma-c.png"
          alt="RehearScore figma designs"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />
        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/shows/shows-user-stories-c.png"
          alt="RehearScore user stories"
        />

        <Stack py="xl">
          <Title order={2}>A visual command center</Title>
          <Text fz={{ base: 'md', md: 'xl' }}>
            I transformed the show dashboard into a rich, visual hub. A high-fidelity cover image
            and key metadata now ground the experience, while song lists have been upgraded to
            detailed cards featuring audio waveforms. This allows users to visually identify tracks
            instantly and see the "shape" of the music before they even press play.
          </Text>
          <Text fz={{ base: 'md', md: 'xl' }}>
            We also refactored member management to align with strict privacy standards. By removing
            personal user data requirements, we created a seamless, account-free invite system that
            maintains security without the friction of traditional sign-up flows.
          </Text>
          <Text fz={{ base: 'md', md: 'xl' }}>
            Finally, the activity log was reimagined from a dense text list into a structured,
            searchable UI. The new design uses intuitive icons to visualize specific changes—like
            vamps or cuts—at a glance, turning a static list of edits into a powerful version
            control tool.
          </Text>
        </Stack>

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/show/show-before-after-c.png"
          alt="RehearScore show before and after"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />
        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/show/show-figma-c.png"
          alt="RehearScore figma designs"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />
        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/show/show-user-stories-c.png"
          alt="RehearScore user stories"
        />

        <Stack py="xl">
          <Title order={2}>The reimagined rehearsal studio</Title>
          <Text fz={{ base: 'md', md: 'xl' }}>
            To declutter the interface, I bifurcated the core experience into two distinct hubs:
            'Rehearse' and 'Score.' In the focused 'Rehearse' view, I replaced the static playback
            bar with a dynamic audio waveform, giving performers a visual map of the song's dynamics
            to anticipate crescendos and decrescendos. I also redesigned the measure indicator into
            a single, rhythmic card that highlights the current beat line-by-line, helping users
            stay in sync without needing to count manually.
          </Text>
        </Stack>

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/slides/playback-slide-c.png"
          alt="RehearScore designs"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />
        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/slides/30.png"
          alt="RehearScore designs"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Blockquote>
          <Text size="xl">
            The legacy app's mixing controls were buried in a confusing bottom navigation bar that
            mimicked global navigation. I surfaced these controls into dedicated 'Track Cards' for
            Vocals, Drums, and Piano. This modular UI puts volume sliders, mute toggles, and a new
            'Isolate' button directly on the canvas—eliminating the need for users to tediously mute
            every other track just to hear their own part.
          </Text>
        </Blockquote>

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/rehearscore-header-c.png"
          alt="RehearScore UI mockup"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Stack py="xl">
          <Text fz={{ base: 'md', md: 'xl' }}>
            In a fast-paced rehearsal, reading small text is challenging, so we replaced error-prone
            manual inputs with accessible bottom sheets for Tempo and Transposition. These provide
            ample space for sliders and validation, while the interface itself now communicates
            status through color and shape. A shift to the brand's teal color instantly signals a
            modified tempo, while a dynamic piano graphic provides a concrete visual reference for
            key changes, removing the need to mentally calculate semi-tones.
          </Text>
          <Text fz={{ base: 'md', md: 'xl' }}>
            Finally, I overhauled the looping experience to be both visual and semantic. Users can
            now set loops by dragging a yellow container directly over the audio waveform or by
            selecting specific song sections (e.g., 'Up where they walk') by name. This flexibility
            allows performers to practice difficult passages intuitively, rather than memorizing
            measure numbers.
          </Text>
        </Stack>

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/slides/31.png"
          alt="RehearScore designs"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/slides/32.png"
          alt="RehearScore designs"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/slides/33.png"
          alt="RehearScore designs"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/rehearse/rehearse-figma.png"
          alt="RehearScore figma designs"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/rehearse/loop-figma.png"
          alt="RehearScore figma designs"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/rehearse/levels-figma.png"
          alt="RehearScore figma designs"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/rehearse/notes-figma.png"
          alt="RehearScore figma designs"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/rehearse/settings-figma.png"
          alt="RehearScore figma designs"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/rehearse/rehearse-before-after.png"
          alt="RehearScore figma designs"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/rehearse/rehearse-user-stories.png"
          alt="RehearScore user stories"
        />

        <Stack py="xl">
          <Title order={2}>A unified table of contents</Title>
          <Text fz={{ base: 'md', md: 'xl' }}>
            In the legacy app, the 'Score' view was an isolated environment that shifted abruptly
            from the app's standard dark mode to a blinding white editing UI. Worse, this view was
            gated behind permissions, meaning only editors could see the song's structure. I
            integrated this view directly into the main player as a dedicated tab, maintaining
            visual consistency with the dark-mode interface. This change democratized the song
            structure; now, all users benefit from a visual table of contents, allowing performers
            to see the song's progression and jump to specific sections effortlessly, regardless of
            their permission level.
          </Text>
          <Text fz={{ base: 'md', md: 'xl' }}>
            We also resolved critical logic and usability flaws. The legacy app used confusing
            metaphors—like a 'sun' icon to indicate status changes—and allowed impossible states,
            such as placing multiple 'Attacca' (immediate transition) markers anywhere in the stack.
            I replaced these with standard, clear UI elements and a logical, single-toggle Attacca
            switch at the bottom of the list. We also introduced powerful filters, making it easy to
            sort through markers, vamps, and cuts without getting lost in the data.
          </Text>
          <Text fz={{ base: 'md', md: 'xl' }}>
            The redesign synthesizes these features into a single, intuitive interface that adapts
            to the user. While everyone has access to the navigation timeline, only those with edit
            permissions see the 'Add' button for inserting elements like markers, vamps, or repeats.
            This approach ensures that the app feels complete for a performer using it as a guide,
            yet powerful for a music director making changes, all within the same unified surface.
          </Text>
        </Stack>

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/score/score-figma.png"
          alt="RehearScore figma designs"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/score/edit-figma.png"
          alt="RehearScore figma designs"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/score/score-before-after.png"
          alt="RehearScore show before and after"
          radius="lg"
          style={{ border: '1px solid var(--app-shell-border-color)' }}
        />

        <Image
          src="https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/rehearscore/score/score-user-stories.png"
          alt="RehearScore user stories"
        />

        <Blockquote>
          <Text size="xl">
            The redesign successfully stabilized the product, resolving the critical audio and login
            issues that plagued the legacy version. By delivering a modern, professional-grade
            interface, we restored trust with the user base and provided performers with a reliable
            tool they can confidently use on stage and in the studio.
          </Text>
        </Blockquote>

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
          ]}
        />
      </Stack>
    </>
  );
}
