import React from 'react';
import { Box, Divider, Grid, Paper, Stack } from '@mantine/core';
import MoreBanner from '../../layout/MoreBanner';
import Education from '../Experience/Education';
import Experience from '../Experience/Experience';
import AboutImageCarousel from './AboutImageCarousel';
import AboutMe from './AboutMe';
import classes from './about.module.css';

export default function AboutLayout() {
  return (
    <Stack gap="xl">
      <Grid align="center">
        <Grid.Col span={{ base: 12, lg: 6 }} order={{ base: 2, lg: 1 }}>
          <Box className={classes.aboutWrapper}>
            <AboutMe titleSize="3.5rem" bodySize="1.4rem" />
          </Box>
        </Grid.Col>
        <Grid.Col span={{ base: 12, lg: 6 }} order={{ base: 1, lg: 2 }}>
          <AboutImageCarousel />
        </Grid.Col>
      </Grid>

      <Paper radius="lg" withBorder>
        <Experience defaultExpanded />
        <Divider />
        <Education />
      </Paper>

      <MoreBanner />
    </Stack>
  );
}
