'use client';

import Lottie from 'lottie-react';
import { Box, Center, Image } from '@mantine/core';
import { Turtle } from './data/turtle';

const BLOB_URL = '/images/blobs/tan-blob.svg';

export default function TurtleAnimation() {
  return (
    <Center py="xl">
      <Box pos="relative" w={500}>
        <Box
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            zIndex: 0,
            filter: 'blur(20px)',
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
          <Lottie animationData={Turtle} loop autoplay />
        </Box>
      </Box>
    </Center>
  );
}
