import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import EcoIcon from '@material-ui/icons/Eco';
import Link from '../../Link';

const LogoLink = () => {
  return (
    <IconButton
      edge="start"
      color="inherit"
      aria-label="menu"
      component={Link}
      href="/"
    >
      <EcoIcon />
    </IconButton>
  );
};

export default LogoLink;
