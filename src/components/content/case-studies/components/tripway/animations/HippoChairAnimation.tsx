'use client';

import Lottie from 'lottie-react';
import { HippoChair } from './data/hippoChairData';

export default function HippoChairAnimation() {
  return <Lottie animationData={HippoChair} loop autoplay />;
}
