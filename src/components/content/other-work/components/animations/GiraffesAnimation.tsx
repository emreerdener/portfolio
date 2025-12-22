'use client';

import Lottie from 'lottie-react';
import { Box, Center, Image } from '@mantine/core';
import { Giraffes } from './data/giraffes';

const BLOB_URL = '/images/blobs/blue-blob.svg';

export default function GiraffesAnimation() {
  return (
    <Center py="xl">
      <Box pos="relative" w={400}>
        <Box
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
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
          <Lottie animationData={Giraffes} loop autoplay />
        </Box>
      </Box>
    </Center>
  );
}
