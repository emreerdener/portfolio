'use client';

import Lottie from 'lottie-react';
import { Bunny } from './bunnyData';

export default function BunnyAnimation() {
  return <Lottie animationData={Bunny} loop autoplay />;
}
