import { useRef, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';

const images = [
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-design-system/catalog/Alert.png',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-design-system/catalog/Avatar.png',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-design-system/catalog/Badge.png',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-design-system/catalog/Banner.png',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-design-system/catalog/Bib.png',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-design-system/catalog/Bottom%20Menu.png',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-design-system/catalog/Bottom%20Sheet.png',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-design-system/catalog/Button%20Icon.png',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-design-system/catalog/Button.png',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-design-system/catalog/Card.png',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-design-system/catalog/Checkbox.png',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-design-system/catalog/Chip.png',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-design-system/catalog/Drawer.png',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-design-system/catalog/Indicator.png',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-design-system/catalog/List%20Item.png',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-design-system/catalog/Loader.png',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-design-system/catalog/Madlib.png',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-design-system/catalog/Modal%20Dialog.png',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-design-system/catalog/Radio.png',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-design-system/catalog/Segmented%20Control.png',
  'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-design-system/catalog/Slider.png',
];

export default function DesignSystemCarousel() {
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
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
      withControls
      plugins={[autoplay.current, fade.current]}
      getEmblaApi={setEmbla}
      controlSize={40}
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
          <Image src={src} alt={`Design System slide ${index + 1}`} fit="contain" />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
