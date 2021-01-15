import React from 'react';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import { Container as Box, Typography } from '@material-ui/core';
import { fullWidth } from '../../utils/';
import EcoIcon from '@material-ui/icons/Eco';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage:
      'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/clearing-overhead-trees.jpg")',
    //   'url("/clearing-overhead-trees.jpg")',
    height: '300px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  heading: {
    color: 'white',
    textDecoration: 'uppercase',
    fontFamily: 'Impue, serif',
  },
}));

const HeroImage = () => {
  const classes = useStyles();
  return (
    // <Image
    //   className={classes.root}
    //   src="/clearing-overhead-trees.jpg"
    //   alt="overhead camera shot of trees in a forest"
    //   layout="fixed"
    //   height="200"
    //   width="200"
    // />

    <Box className={classes.root}>
      {/* <Typography className={classes.heading} variant="h4" component="h1">
        The trees need you.
      </Typography> */}
      <Typography className={classes.heading} variant="h1" component="h1">
        The trees need you.
      </Typography>
    </Box>
  );
};

export default HeroImage;
