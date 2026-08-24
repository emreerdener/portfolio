import { useEffect, useRef, useState } from 'react';
import { IconDice5 } from '@tabler/icons-react';
import { motion, useAnimate } from 'framer-motion';
import { Button, Card, Group, Paper, Stack, Text, Title } from '@mantine/core';
import classes from './FunFactSlot.module.css';

interface FunFact {
  emoji: string;
  text: string;
  link?: string;
}

const funFacts: FunFact[] = [
  { emoji: '👯', text: 'I have a twin sister and an older sister' },
  { emoji: '🦒', text: `I am taller than a baby giraffe: 6'8" (2m)` },
  { emoji: '🎲', text: 'I love playing backgammon' },
  {
    emoji: '🇹🇷🇮🇪',
    text: 'I am half Turkish and half Irish',
  },
  {
    emoji: '🔮',
    text: "I'm named after a Sufi mystic and poet",
  },
  { emoji: '🚲', text: 'I enjoy riding my titanium gravel bike' },
  { emoji: '🪵', text: "I'm an aspiring woodworker" },
];

const ITEM_HEIGHT = 200;
const NUM_SPIN_ITEMS = 15;

export function FunFactSlotMachine() {
  const [scope, animate] = useAnimate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  // We maintain a "strip" of items to render.
  // Initially, it's just the current item.
  const [strip, setStrip] = useState<FunFact[]>([funFacts[0]]);

  // Store available indices to ensure we cycle through all facts before repeating
  const availableIndices = useRef<number[]>([]);

  // Initialize available indices on mount
  useEffect(() => {
    availableIndices.current = funFacts.map((_, i) => i).filter((i) => i !== 0);
  }, []);

  const [seenIndices, setSeenIndices] = useState<Set<number>>(new Set([0]));

  useEffect(() => {
    // Ensure initial index is marked as seen
    setSeenIndices((prev) => new Set(prev).add(currentIndex));
  }, []); // Run once on mount

  const spin = async () => {
    if (isSpinning) return;
    setIsSpinning(true);

    // Refill bag if empty
    if (availableIndices.current.length === 0) {
      availableIndices.current = funFacts.map((_, i) => i).filter((i) => i !== currentIndex);
    }

    // Pick random from available
    const randomIndex = Math.floor(Math.random() * availableIndices.current.length);
    const nextIndex = availableIndices.current[randomIndex];

    // Remove picked index from available
    availableIndices.current.splice(randomIndex, 1);

    // 2. Build the strip
    // Start with current
    const newStrip = [funFacts[currentIndex]];

    // Add random intermediate items
    let lastIncludedIndex = currentIndex;

    for (let i = 0; i < NUM_SPIN_ITEMS; i++) {
      let randomIdx = Math.floor(Math.random() * funFacts.length);
      // Ensure strictly no adjacent duplicates in the blur stream
      while (randomIdx === lastIncludedIndex) {
        randomIdx = Math.floor(Math.random() * funFacts.length);
      }

      // EDGE CASE: If this is the VERY LAST intermediate item,
      // strictly ensure it does NOT equal the target (nextIndex).
      if (i === NUM_SPIN_ITEMS - 1) {
        while (randomIdx === nextIndex || randomIdx === lastIncludedIndex) {
          randomIdx = Math.floor(Math.random() * funFacts.length);
        }
      }

      newStrip.push(funFacts[randomIdx]);
      lastIncludedIndex = randomIdx;
    }

    // End with target
    newStrip.push(funFacts[nextIndex]);

    // Update state to render the full strip
    setStrip(newStrip);

    // We need to wait for the DOM to update with the new strip before animating
    // A small timeout or just trusting React's batching usually works,
    // but with useAnimate, the elements need to exist.
    await new Promise((resolve) => setTimeout(resolve, 50));

    // 3. Animate the strip
    // The strip moves UP, so y goes negative.
    // Distance = (total items - 1) * height
    const targetY = -(newStrip.length - 1) * ITEM_HEIGHT;

    try {
      await animate(
        scope.current,
        { y: targetY },
        {
          duration: 1.5,
          ease: [0.15, 0.85, 0.35, 1.0], // Custom bezier for "spin up then slow down"
        }
      );
    } catch (e) {
      // Animation interrupted or unmounted
    }

    // 4. Cleanup
    // Reset strip to just the target item and y to 0 instantly
    if (scope.current) {
      // Instant set
      setStrip([funFacts[nextIndex]]);
      // We must reset the transform manually or via animate
      animate(scope.current, { y: 0 }, { duration: 0 });
    }

    setCurrentIndex(nextIndex);
    setSeenIndices((prev) => {
      const next = new Set(prev);
      next.add(nextIndex);
      return next;
    });
    setIsSpinning(false);
  };

  return (
    <Paper radius="lg" p="lg" withBorder shadow="xs">
      <Stack>
        <Group wrap="nowrap" justify="space-between">
          <Title order={4} size="sm" c="dimmed" tt="uppercase" lh={1}>
            Fun facts
          </Title>

          {/* Progress Dots */}
          <Group gap="xs" justify="center">
            {funFacts.map((_, index) => (
              <div
                key={index}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor:
                    index < seenIndices.size
                      ? 'var(--mantine-color-orange-5)'
                      : 'var(--app-shell-border-color)',
                  transition: 'background-color 0.3s ease',
                }}
              />
            ))}
          </Group>
        </Group>

        <div className={classes.slotMachine}>
          <div className={classes.reelWindow}>
            {/* The moving strip */}
            <motion.div ref={scope} style={{ width: '100%' }} initial={{ y: 0 }}>
              {strip.map((fact, i) => (
                <div key={i} className={classes.itemContainer} style={{ height: ITEM_HEIGHT }}>
                  <Stack align="center" gap="md" ta="center">
                    <Text size="4rem" lh={1}>
                      {fact.emoji}
                    </Text>
                    <Title order={3} lh={1.3}>
                      {fact.text}
                    </Title>
                  </Stack>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Button */}
        <Button variant="light" size="lg" onClick={spin} disabled={isSpinning}>
          Spin
        </Button>
      </Stack>
    </Paper>
  );
}
