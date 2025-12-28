'use client';

import Lottie from 'lottie-react';
import { Bed } from './data/bed';

export default function BedAnimation() {
  return <Lottie animationData={Bed} loop autoplay />;
}
