'use client';

import Lottie from 'lottie-react';
import { HippoGlide } from './data/hippoGlide';

export default function HippoGlideAnimation() {
  return <Lottie animationData={HippoGlide} loop autoplay />;
}
