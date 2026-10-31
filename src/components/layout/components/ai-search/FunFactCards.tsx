import { Text } from '@mantine/core';
import { FunFact } from '../../../content/about/data/funFacts';
import classes from './FunFactCards.module.css';

export default function FunFactCards({ facts }: { facts: FunFact[] }) {
  return (
    <section className={classes.section} aria-label="Beyond work">
      <div
        className={classes.track}
        tabIndex={0}
        role="region"
        aria-label="Fun facts, scroll to explore"
      >
        <ul className={classes.list}>
          {facts.map((fact) => (
            <li key={fact.text} className={classes.card}>
              <Text fz={32} lh={1} aria-hidden="true">
                {fact.emoji}
              </Text>
              <Text size="md" lh={1.5}>
                {fact.text}
              </Text>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
