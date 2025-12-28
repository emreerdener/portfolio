'use client';

import Lottie from 'lottie-react';
import { Cheers } from './data/cheers';

export default function CheersAnimation() {
  return <Lottie animationData={Cheers} loop autoplay />;
}
