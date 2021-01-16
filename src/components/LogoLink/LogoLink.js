import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import EcoIcon from '@material-ui/icons/Eco';
import Link from '../../Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  whiteColor: {
    color: 'white',
  },
}));

const LogoLink = props => {
  const classes = useStyles();
  return (
    <IconButton
      className={classes.whiteColor}
      color="inherit"
      edge="start"
      aria-label="home page"
      component={Link}
      href="/"
      {...props}
    >
      <EcoIcon />
    </IconButton>
  );
};

export default LogoLink;
