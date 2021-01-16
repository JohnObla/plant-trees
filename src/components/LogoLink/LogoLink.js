import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import EcoIcon from '@material-ui/icons/Eco';
import Link from '../../Link';

const LogoLink = props => {
  return (
    <IconButton
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
