import React from 'react';
import Image from 'next/image';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import HeroImage from '../src/components/HeroImage';
import Card from '@material-ui/core/Card';
import CardContent from '../src/components/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  subtext: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    // padding: theme.spacing(1),
  },
}));

export default function Index() {
  const classes = useStyles();
  return (
    <Box>
      <HeroImage />

      <Box
        className={classes.subtext}
        px={{ xs: 3, sm: 4, md: 5, lg: 6 }}
        py={{ xs: 2, sm: 3 }}
      >
        <Typography>
          Over 20 million trees have been cut down in aid of tree spaces. We
          need your help now more than ever. Please help us restore them.
        </Typography>
      </Box>

      <Box px="2"></Box>
      <ProTip />
      <Copyright />
    </Box>
  );
}
