'use client';

import Lottie from 'lottie-react';
import { HippoBike } from './data/hippoBike';

export default function HippoBikeAnimation() {
  return <Lottie animationData={HippoBike} loop autoplay />;
}
