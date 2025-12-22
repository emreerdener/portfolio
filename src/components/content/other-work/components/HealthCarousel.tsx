import { useRef, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';

const images = [
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/other-work/health/lungs.png',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/other-work/health/mom.jpg',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/other-work/health/vein.png',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/other-work/health/tube.png',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/other-work/health/card.png',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/other-work/health/brain.png',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/other-work/health/bed.png',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/other-work/health/crib.png',
];

export default function HealthCarousel() {
  const autoplay = useRef(Autoplay({ delay: 7000, stopOnInteraction: true }));
  const fade = useRef(Fade());
  const [embla, setEmbla] = useState<any>(null);

  const handleNext = () => {
    if (embla) {
      embla.scrollNext();
    }
  };

  return (
    <Carousel
      withIndicators
      withControls={false}
      plugins={[autoplay.current, fade.current]}
      getEmblaApi={setEmbla}
      style={{
        cursor: 'pointer',
        border: '1px solid var(--app-shell-border-color)',
        borderRadius: 'var(--mantine-radius-lg)',
        overflow: 'hidden',
      }}
      onClick={handleNext}
      emblaOptions={{ loop: true, duration: 100 }}
    >
      {images.map((src, index) => (
        <Carousel.Slide key={index}>
          <Image src={src} alt={`Other work slide ${index + 1}`} fit="contain" />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
