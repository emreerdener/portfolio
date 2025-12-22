import { useRef, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import { Carousel } from '@mantine/carousel';
import { AspectRatio, Image } from '@mantine/core';

const images = [
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/profile/amos.jpg',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/profile/sisters.jpg',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/profile/cat.jpg',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/profile/bike.jpg',
];

export default function AboutImageCarousel() {
  const autoplay = useRef(Autoplay({ delay: 7000, stopOnInteraction: true }));
  const fade = useRef(Fade());
  const [embla, setEmbla] = useState<any>(null);

  const handleNext = () => {
    if (embla) {
      embla.scrollNext();
    }
  };
  return (
    <AspectRatio ratio={16 / 15}>
      <Carousel
        withIndicators={false}
        withControls={false}
        height="100%"
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
            <Image src={src} alt={`About me slide ${index + 1}`} w="100%" h="100%" fit="cover" />
          </Carousel.Slide>
        ))}
      </Carousel>
    </AspectRatio>
  );
}
