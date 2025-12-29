'use client';

import Lottie from 'lottie-react';
import { HippoLogo } from './data/hippoLogo';

export default function HippoLogoAnimation() {
  return <Lottie animationData={HippoLogo} loop autoplay />;
}
