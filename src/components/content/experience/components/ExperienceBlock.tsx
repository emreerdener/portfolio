import {
  Box,
  Group,
  Image,
  ImageProps,
  List,
  MantineSize,
  Stack,
  StyleProp,
  Text,
  Title,
  TitleOrder,
} from '@mantine/core';
import classes from './ExperienceBlock.module.css';

interface ExperienceBlockProps {
  logoRadius?: ImageProps['radius'];
  logoSize?: StyleProp<number>;
  roleTitleOrder?: TitleOrder;
  showDetails?: boolean;
  role: string;
  company: string;
  date: string;
  location: string;
  bullets?: string[];
  highlights?: { label: string; text: string }[];
  logoSrc?: string;
  listSize?: StyleProp<MantineSize>;
}

export default function ExperienceBlock({
  logoRadius = 'lg',
  logoSize = { base: 48, sm: 72 },
  roleTitleOrder = 3,
  showDetails = true,
  role,
  company,
  date,
  location,
  bullets = [],
  highlights,
  logoSrc,
  listSize = 'sm',
}: ExperienceBlockProps) {
  return (
    <Stack gap="md" className={highlights && showDetails ? classes.role : undefined}>
      <Group wrap="nowrap" align="center">
        {logoSrc && (
          <Image src={logoSrc} alt="Company logo" w={logoSize} h={logoSize} radius={logoRadius} />
        )}

        <Stack gap={4}>
          <Text size="sm" fw={500} lh={1}>
            {company}
          </Text>
          <Title order={roleTitleOrder} lh={1.2}>
            {role}
          </Title>
          {(date || location) && (
            <Group gap={6} wrap="nowrap" align="center">
              {date && (
                <Text size="sm" c="dimmed">
                  {date}
                </Text>
              )}
              {date && location && (
                <Text size="sm" c="dimmed">
                  •
                </Text>
              )}
              {location && (
                <Text size="sm" c="dimmed">
                  {location}
                </Text>
              )}
            </Group>
          )}
        </Stack>
      </Group>

      {showDetails && (highlights?.length || bullets.length > 0) && (
        <Box>
          {highlights ? (
            <List spacing="sm" fz={listSize} className={classes.highlights}>
              {highlights.map(({ label, text }) => (
                <List.Item key={label} c="dimmed" style={{ lineHeight: 1.55 }}>
                  <Text fz="inherit" fw={700} c="var(--mantine-color-text)">
                    {label}
                  </Text>
                  <Text fz="inherit" c="dimmed" lh={1.55}>
                    {text}
                  </Text>
                </List.Item>
              ))}
            </List>
          ) : (
            <List spacing={6} fz={listSize} center={false}>
              {bullets.map((item, index) => (
                <List.Item key={index} style={{ lineHeight: 1.4, opacity: 0.85 }}>
                  {item}
                </List.Item>
              ))}
            </List>
          )}
        </Box>
      )}
    </Stack>
  );
}
