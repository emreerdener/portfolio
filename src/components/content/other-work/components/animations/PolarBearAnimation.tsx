'use client';

import Lottie from 'lottie-react';
import { Box, Center, Image } from '@mantine/core';
import { PolarBear } from './data/polar-bear';

const BLOB_URL = '/images/blobs/purple-blob.svg';

export default function PolarBearAnimation() {
  return (
    <Center py="xl">
      <Box pos="relative" w={400}>
        <Box
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-40%, -50%)',
            width: '110%',
            height: '110%',
            zIndex: 0,
          }}
        >
          <Image src={BLOB_URL} alt="" w="100%" h="100%" fit="contain" />
        </Box>

        <Box
          style={{
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Lottie animationData={PolarBear} loop autoplay />
        </Box>
      </Box>
    </Center>
  );
}
