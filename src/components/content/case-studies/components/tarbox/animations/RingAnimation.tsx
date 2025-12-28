'use client';

import Lottie from 'lottie-react';
import { Ring } from './data/ring';

export default function RingAnimation() {
  return <Lottie animationData={Ring} loop autoplay />;
}
