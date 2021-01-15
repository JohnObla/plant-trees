import React from 'react';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { fullWidth } from '../../utils/';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage:
      'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/clearing-overhead-trees.jpg")',
    height: '300px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    ...fullWidth,
  },

  title: {
    border: 'none',
    outline: '0',
    display: 'inline-block',
    padding: '10px 25px',
    color: 'black',
    backgroundColor: '#ddd',
    textAlign: 'center',
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

    <div className={classes.root}></div>
  );
};

export default HeroImage;
