'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { IconBrandLinkedin, IconLock, IconSend } from '@tabler/icons-react';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import { Carousel } from '@mantine/carousel';
import {
  Box,
  Button,
  Center,
  Divider,
  Grid,
  Group,
  Image,
  PasswordInput,
  Stack,
  Text,
  Title,
} from '@mantine/core';

const images = [
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/profile/amos.jpg',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/profile/sisters.jpg',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/profile/cat.jpg',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/profile/bike.jpg',
];

export function PasswordProtection({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const emailUser = 'erdener.emre';
  const emailDomain = 'gmail.com';
  const mailtoLink = `mailto:${emailUser}@${emailDomain}`;

  const autoplay = useRef(Autoplay({ delay: 7000, stopOnInteraction: true }));
  const fade = useRef(Fade());
  const [embla, setEmbla] = useState<any>(null);

  const handleNext = () => {
    if (embla) {
      embla.scrollNext();
    }
  };

  useEffect(() => {
    // Check session storage on mount
    const auth = sessionStorage.getItem('site_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const CORRECT_PASSWORD = 'bicycle';

    if (password === CORRECT_PASSWORD) {
      sessionStorage.setItem('site_auth', 'true');
      setIsAuthenticated(true);
      setError('');
      router.push('/');
    } else {
      setError('Incorrect password');
    }
  };

  if (loading) {
    return null;
  }

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <Grid gutter={0} h="100vh" m={0}>
      <Grid.Col
        span={{ base: 12, md: 6 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <Center w="100%" h="100vh">
          <Box w="100%" maw={400} p="xl">
            <Stack gap="xl">
              <Stack gap={0}>
                <Text ta="center" c="dimmed">
                  Product Designer
                </Text>
                <Title order={1} ta="center">
                  Emre Erdener
                </Title>
              </Stack>

              <form onSubmit={handleSubmit}>
                <Stack>
                  <PasswordInput
                    value={password}
                    onChange={(event) => setPassword(event.currentTarget.value)}
                    placeholder="Password"
                    size="lg"
                    radius="md"
                    error={error}
                    leftSection={<IconLock size={16} />}
                  />

                  <Button fullWidth size="lg" type="submit">
                    View portfolio
                  </Button>
                </Stack>
              </form>

              <Divider />

              <Group gap="lg" justify="center" grow>
                <Button
                  component="a"
                  href={mailtoLink}
                  size="sm"
                  variant="default"
                  leftSection={<IconSend size={20} />}
                >
                  Email me
                </Button>
                <Button
                  component="a"
                  href="https://www.linkedin.com/in/emre-erdener/"
                  target="_blank"
                  size="sm"
                  variant="default"
                  leftSection={<IconBrandLinkedin size={24} />}
                >
                  LinkedIn
                </Button>
              </Group>
            </Stack>
          </Box>
        </Center>
      </Grid.Col>

      <Grid.Col span={{ base: 12, md: 6 }} visibleFrom="md" h="100vh">
        <Carousel
          withIndicators
          withControls={false}
          plugins={[autoplay.current, fade.current]}
          getEmblaApi={setEmbla}
          style={{
            cursor: 'pointer',
            overflow: 'hidden',
          }}
          h="100vh"
          onClick={handleNext}
          emblaOptions={{ loop: true, duration: 100 }}
        >
          {images.map((src, index) => (
            <Carousel.Slide key={index}>
              <Image src={src} alt={`Other work slide ${index + 1}`} fit="cover" h="100vh" />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Grid.Col>
    </Grid>
  );
}
