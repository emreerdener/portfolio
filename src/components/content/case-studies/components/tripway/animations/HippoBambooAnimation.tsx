'use client';

import Lottie from 'lottie-react';
import { HippoBamboo } from './data/hippoBamboo';

export default function HippoBambooAnimation() {
  return <Lottie animationData={HippoBamboo} loop autoplay />;
}
