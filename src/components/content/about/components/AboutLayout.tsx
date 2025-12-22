import React from 'react';
import { Box, Divider, Grid, Paper, Space, Stack } from '@mantine/core';
import MoreBanner from '../../../layout/components/MoreBanner';
import Education from '../../experience/components/Education';
import Experience from '../../experience/components/Experience';
import AboutImageCarousel from './AboutImageCarousel';
import AboutMe from './AboutMe';
import classes from './about.module.css';

export default function AboutLayout() {
  return (
    <Stack gap="xl">
      <Grid align="center">
        <Grid.Col span={{ base: 12, lg: 6 }} order={{ base: 2, lg: 1 }}>
          <Box className={classes.aboutWrapper}>
            <AboutMe
              titleSize={{ base: '2.5rem', sm: '3.5rem' }}
              bodySize="1.4rem"
              emojiSize="1.8rem"
              funFactSize="lg"
            />
          </Box>
        </Grid.Col>
        <Grid.Col span={{ base: 12, lg: 6 }} order={{ base: 1, lg: 2 }}>
          <AboutImageCarousel />
        </Grid.Col>
      </Grid>

      <Paper radius="lg" withBorder shadow="sm">
        <Experience defaultExpanded />
        <Divider />
        <Education />
      </Paper>

      <MoreBanner />

      <Space h="xl" />
    </Stack>
  );
}
